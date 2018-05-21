/**
 * Created by lihex on 2015/10/31.
 * 拷贝loader到发布目录
 *
 */
var commonCfg = require('../../config/commonCfg.js');
var moUtils = require("mo-utils");
var async = require("async");
var cmdJs = require('cmdjs');
var JSZip = require('jszip');
var fs = cmdJs.fs2;
var path = cmdJs.path2;

//----------配置区域--------------
var publishCfg = require("./publishCfg.js");
var version = publishCfg.version;
var channelId = publishCfg.channelId;
var singleJs = publishCfg.singleJs;
var rmResource = publishCfg.rmResource;
//----------配置区域--------------

var client_dir = commonCfg.client_dir;
var client_h5sdk =  path.join(client_dir, "h5sdk");
var bin_release = path.join(client_dir, "bin-release");
var web_release = path.join(bin_release, "web");
var web_sdk = path.join(web_release, "h5sdk");

var redirect_html ='redirect.html';


console.log("log> publish h5sdk");
var copyH5Sdk = function(){
    if(!fs.existsSync(web_sdk)) fs.mkdirSync(web_sdk);
    moUtils.copyFilesSync(client_h5sdk, web_sdk);
    fs.copyFileSync(path.join(client_h5sdk, redirect_html), path.join(web_release, redirect_html));
}
copyH5Sdk();