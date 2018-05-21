/**
 * Created by lihex on 2015/11/03.
 * 修改版号，渠道号
 * 修改release目录下的project.json中的version | channelId字段 
 */
var commonCfg = require('../../config/commonCfg.js');
var cmdJs = require('cmdjs');
var fs = cmdJs.fs2;
var path = cmdJs.path2;

//----------配置区域--------------
var publishCfg = require("./publishCfg.js");
var version = publishCfg.version;
var channelId = publishCfg.channelId;
var httpHost = publishCfg.httpHost;
var httpPort = publishCfg.httpPort;
//----------配置区域--------------

var client_dir = commonCfg.client_dir;
var bin_release = path.join(client_dir, "bin-release");
var version_dir = path.join(bin_release, path.join("web",version));
var project_json = path.join(version_dir, "resource", "project.json");

//修改version
fs.readFile(project_json,"utf8",function (error,data){
    if(error) throw error ;
    var text = data;
    //修改version
    var regex = /(\"version\"[^\"]+\")([^\"]+)\"/;
    var matchs = text.match(regex);
    text = text.replace(regex, matchs[1] + version + "\"");

    //修改channelId
    var regex = /(\"channelId\"[^\d]+)([^,]+),/;
    var matchs = text.match(regex);
    text = text.replace(regex, matchs[1] + channelId + ",");

    //修改httpHost
    var regex = /(\"httpHost\"[^\"]+\")([^\"]+)\"/;
    var matchs = text.match(regex);
    text = text.replace(regex, matchs[1] + httpHost + "\"");

    //修改httpHost
    var regex = /(\"httpPort\"[^\"]+\")([^\"]+)\"/;
    var matchs = text.match(regex);
    text = text.replace(regex, matchs[1] + httpPort + "\"");

    //console.log(text);
    fs.writeFileSync(project_json, text);
}) ;

