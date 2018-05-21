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

var client_resource_dir = commonCfg.client_resource_dir;
var client_dir = commonCfg.client_dir;
var bin_release = path.join(client_dir, "bin-release");
var web_release = path.join(bin_release, "web");
var version_dir = path.join(web_release, version);
var chuangqi_loader = path.join(client_dir, "chuangqi_loader");
var chuangqi_loader_index = path.join(chuangqi_loader, "index.html");
var game_config_js = path.join(web_release, "game_config.js");
var version_dir_main_min_js = path.join(version_dir, "main.min." + version + ".js");
var web_release_main_min_js = path.join(web_release, "main.min." + version + ".js");

var version_dir_res = path.join(version_dir, "resource");
var web_release_dir_res = path.join(web_release, "resource");
var web_release_index = path.join(web_release, "index.html");

var editThirdLibAndVersion = function(text){
    //添加渠道库
    if(channelId && channelId == 10005){
        var xhbLib = "    <script type=\"text/javascript\" src=\"http://d.hgame.com/loadsdk\"></script>";
        xhbLib += "\n    <script type=\"text/javascript\" src=\"http://d.hgame.com/loadgamesdk?gameid=100220\"></script>";
        xhbLib += "\n </head>";
        text = text.replace(/<\/head>/, xhbLib);

        var statLib="    <a style=\"display: none;\" href=\"http://tt.chuanqi.hgame.com/index.html?action=1&openid=100220\">log</a>";
        statLib += "\n </body>";
        text = text.replace(/<\/body>/, statLib);
    }
    return text;
}

console.log("log> publish loader");
var copyLoader = function(){
    moUtils.copyFilesSync(chuangqi_loader, web_release);
    moUtils.copyFileSync(chuangqi_loader_index, web_release_index);
    async.parallel([
            function(callback){
                fs.readFile(game_config_js,"utf8",function (error,data) {
                    if (error) throw error;
                    var text = data;
                    console.log("----> fix game_config.js");
                    //修改game_version
                    var regex = /(game_version[^\"]+\")([^\"]+)\"/;
                    var matchs = text.match(regex);
                    text = text.replace(regex, matchs[1] + version + "\"");

                    //修改game_preload_list
                    var regex = /.*main.min.*/;
                    var matchs = text.match(regex);
                    text = text.replace(regex, "    \"main.min." + version + ".js\"");
                    //console.log(text);
                    fs.writeFile(game_config_js, text, callback);
                });
            },
            function(callback){
                fs.readFile(chuangqi_loader_index,"utf8",function (error,data) {
                    if (error) throw error;
                    var text = data;
                    console.log("----> fix index.html");
                    text = editThirdLibAndVersion(text);
                    //console.log(text);
                    fs.writeFile(web_release_index, text, callback);
                });
            }
        ],
        // optional callback
        function(err, results){
                console.log("----> copy main.min." + version + ".js");
                fs.copyFileSync(version_dir_main_min_js, web_release_main_min_js);
                console.log("----> copy resource");
                moUtils.rmdirSync(web_release_dir_res);
                moUtils.mkdirSync(web_release_dir_res);
                moUtils.copyFilesSync(version_dir_res, web_release_dir_res);
        });
}
copyLoader();