var cmdJs = require('cmdjs');
var path = cmdJs.path2;
var fs = cmdJs.fs2;
var moPdm = require("mo-pdm");
var commonCfg = require("../../config/commonCfg.js");
var core = require("../core/core.js");

var dsNameArr = [];
var dsConstsStr = "{\r\n";


//生成entity
function publishEntity(){
    var entitySrcDir = path.join(commonCfg.server_nodeModules, "uw-entity/src");
    fs.rmdirSync2(entitySrcDir);
    moPdm.genEntities(commonCfg.config_uwPdm, entitySrcDir);
    core.genIndex(path.join(commonCfg.server_nodeModules, "uw-entity"));
}
function handleEntities(){
    fs.walkDirSync(path.join(commonCfg.server_nodeModules, "uw-entity/src"), ".js", function(filePath){
        var dsName = path.basename(filePath, ".js");
        dsNameArr.push(dsName);
        var Entity = require(filePath);
        handleDsClass(Entity, dsName);
    });
}

function handleDs(){
    var ds = require(path.join(commonCfg.server_nodeModules, "uw-ds/src/ds.js"));
    for (var dsName in ds) {
        dsNameArr.push(dsName);
        handleDsClass(ds[dsName], dsName);
    }
}

function handleDsClass(DsClass, dsName){
    var dsObject = new DsClass();
    dsConstsStr += "    " +  dsName + ":{";
    var length = Object.keys(dsObject).length, count = 0, keyCount = 1;
    for (var key in dsObject) {
        dsConstsStr += key + ":" + keyCount++;
        if(count < length - 1) dsConstsStr += ",";
        count++;
    }
    dsConstsStr += "},\r\n";
}

function saveDsNameConsts(){
    var content = "module.exports = {\r\n";
    for(var i = 0; i < dsNameArr.length; ++i){
        content += "    " + dsNameArr[i] + " : '" + dsNameArr[i] + "'";
        if(i < dsNameArr.length - 1) content += ",";
        content += "\r\n";
    }
    content += "};";
    var dir = path.join(commonCfg.server_nodeModules, "uw-data/common");
    fs.mkdirSync2(dir);//如果没有则创建
    var outPath = path.join(dir, "dsNameConsts.js");
    fs.writeFileSync(outPath, content);
}

function saveDsConsts(){
    dsConstsStr = dsConstsStr.trim();
    dsConstsStr = dsConstsStr.substring(0, dsConstsStr.length - 1);
    dsConstsStr += "\r\n};";
    fs.writeFileSync(path.join(commonCfg.server_nodeModules, "uw-data/common/dsConsts.js"), "module.exports = " + dsConstsStr);
    fs.writeFileSync(path.join(commonCfg.client_auto, "dsConsts.ts"), "module gc {\r\nexport var dsConsts = " + dsConstsStr + "\r\n}");
}
exports.publish = function(){
    dsConstsStr = "{\r\n";
    fs.mkdirSync2(commonCfg.client_auto);
    publishEntity();
    handleEntities();
    handleDs();
    saveDsNameConsts();
    saveDsConsts();
    core.genIndex(path.join(commonCfg.server_nodeModules, "uw-data"));
};
