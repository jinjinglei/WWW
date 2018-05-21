/**
 * Created by SmallAiTT on 2015/7/15.
 */
var commonCfg = require('../../config.js');
var cmdJs = require('cmdjs');
var async = require("async");
var fs = cmdJs.fs2;
var path = cmdJs.path2;


var moUtils = require("mo-utils");
var moImg = require("mo-img");

var imgTypes = [".jpg", ".png"];
var otherTypes = [".fnt"];
var arr = imgTypes.concat(otherTypes);
var excludeDir = ['preview'];
var excludeZipDir = ['ui_common', 'ui_fight']; //忽略压缩哪些目录
var excludeZipFile = ['ico_rank_bg_red.png']; //忽略压缩哪些文件
function copy(uiModuleName, cb){
    var uiModuleDir = path.join(commonCfg.wing_resource_ui_dir, uiModuleName);
    moUtils.walkDirOneByOne(uiModuleDir, arr, function(filePath, cb2){
        var baseName = path.basename(filePath);
        var extname = path.extname(filePath);
        var outPath = path.join(commonCfg.client_resource_ui_dir, uiModuleName);
        if(!fs.existsSync(outPath)) fs.mkdirSync(outPath);

var dstPath = path.join(outPath, baseName);
if(imgTypes.indexOf(extname) >= 0){
    moImg.scaleImg(filePath, dstPath, commonCfg.imgScale, function(err){
        if(err) return cb2(err);
        if(extname.toLowerCase() != ".png"
            || (excludeZipDir.indexOf(uiModuleName) >= 0)
            || (excludeZipFile.indexOf(baseName) >= 0)){
            moUtils.copyFileSync(filePath, dstPath);
            return cb2();
        }
        moImg.pngquant(dstPath, {"--output" : dstPath}, "--force", cb2);
    });
}else{
    moUtils.copyFileSync(filePath, dstPath);
    cb2();
}
}, cb);
}

function copyUIImgs(cb){
    var files = fs.readdirSync(commonCfg.wing_resource_ui_dir);
    //files = ["ui_common", "ui_panel"];
    async.mapLimit(files, 1, function(uiModuleName, cb1){
        if(uiModuleName == ".DS_Store" || excludeDir.indexOf(uiModuleName) >= 0) {
            cb1();
        }
        else{
            copy(uiModuleName, cb1);
        }

    }, function(err){
        if(err) console.error(err);
        else {
            if(cb) cb();
        }
    });
}

console.log("------convertUI begin---------");
if(!fs.existsSync(commonCfg.client_resource_ui_dir)) fs.mkdirSync(commonCfg.client_resource_ui_dir);
copyUIImgs();