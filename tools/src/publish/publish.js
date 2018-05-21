/**
 * Created by lihex on 2015/11/03.
 * 发布游戏到bin-release目录
 * 1.压缩json为zip
 * 2.修改Main.ts，开启调试或发布模式
 * 3.编译Main.ts
 * 4.调用egret发布命令
 * 5.修改目标project.json,填写正确的版本号，渠道号，服务器地址
 * 6.是否发布单一js文件版本
 */
var commonCfg = require('../../config/commonCfg.js');
var cmdJs = require('cmdjs');
var moUtils = require("mo-utils");
var fs = cmdJs.fs2;
var path = cmdJs.path2;

//----------配置区域--------------
var publishCfg = require("./publishCfg.js");
var version = publishCfg.version;
var channelId = publishCfg.channelId;
var singleJs = publishCfg.singleJs;
var devMode = publishCfg.devMode;
//----------配置区域--------------

var client_dir = commonCfg.client_dir;
var main_js = path.join(client_dir, "bin-debug", "Main.js");

console.log("log> publish zip json");
require("../genJsData.js");

var child_process = require('child_process');
var oldCwd = process.cwd();

console.log("log> egret publish --version: " + version);
process.chdir(client_dir);
child_process.exec('egret publish --version ' + version, function(error, stdout, stderr){
    if(error) {
        console.error(error);
        console.log(stdout);
        console.log(stderr);
        return;
    }
    console.log("log> fix project.json, version: " + version + " ,channelId: " + channelId);
    require("./publishProjectJson.js");

    console.log("log> fix index.html, single-js: " + singleJs);
    require("./publishCode.js");
    process.chdir(oldCwd);
});




