var cmdJs = require('cmdjs');
var path = cmdJs.path2;
var fs = cmdJs.fs2;
var commonCfg = require("../../config/commonCfg.js");
var clientCfg = require("../../config/clientCfg.js");

function publish(){
    fs.mkdirSync2(commonCfg.client_audio);

    var arr = ["death", "hero", "skill", "ui"];
    for(var i = 0; i < arr.length; ++i){
        var dirName = arr[i];
        var moduleName = clientCfg.preNameMap[dirName];
        if(!moduleName) continue;
        var dir = path.join(commonCfg.docs_audio, dirName);
        var files = fs.readdirSync(dir);
        for(var j = 0; j < files.length; ++j){
            var fileName = files[j];
            var extname = path.extname(fileName);
            if(!extname || extname.toLowerCase() != ".mp3") continue;
            var inputPath = path.join(dir, fileName);
            var outPath = path.join(commonCfg.client_audio, moduleName + "_" + fileName);
            console.log(inputPath, "--->", outPath);
            fs.writeFileSync(outPath, fs.readFileSync(inputPath));
        }
    }
}

publish();