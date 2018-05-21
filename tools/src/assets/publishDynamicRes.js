var cmdJs = require('cmdjs');
var path = cmdJs.path2;
var fs = cmdJs.fs2;
var moImg = require("mo-img");
var async = require("async");

var commonCfg = require("../../config/commonCfg.js");
var clientCfg = require("../../config/clientCfg.js");
var outDir = path.join(commonCfg.client_resource_dir, 'dynamic2');
//outDir = path.join(__dirname, "out-test/dynamic2");
fs.mkdirSync2(outDir);

console.log("------publishDynamicRes begin---------");

var imgTypes = [".jpg", ".png"];
var otherTypes = [".json"];
var arr = imgTypes.concat(otherTypes);
var dirArr = ["event", "head", "icon", "item", "recharge", "skill", "task", "wing", "ui_gboss", "ui_clothes", "ui_weapon", "ui_wing","buff","medal", "title", "ui_heart","gift","gift_skill", "gift_img"];
async.mapLimit(dirArr, 1, function(dirName, cb1){
    var preName = clientCfg.preNameMap[dirName];
    if(!preName) return cb1("为配置【" + dirName + "】模块，请检查！");
    var moduleDir = path.join(commonCfg.docs_dynamic, dirName);
    fs.walkDirOneByOne(moduleDir, arr, function(filePath, cb2){
        var extname = path.extname(filePath);
        var basename = path.basename(filePath);
        var dstPath = path.join(outDir, preName + "_" + basename);
        if(imgTypes.indexOf(extname) >= 0){
            moImg.scaleImg(filePath, dstPath, commonCfg.imgScale, function(err){
                if(err) return cb2(err);
                if(extname.toLowerCase() != ".png") return cb2();
                moImg.pngquant(dstPath, {"--output" : dstPath}, "--force", cb2);
            });
        }else{
            fs.copyFileSync(filePath, dstPath);
            cb2();
        }
    }, cb1);
}, function(err){
    if(err) console.error(err);
    console.log("------publishDynamicRes end-----------");
});

