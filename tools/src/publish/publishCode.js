/**
 * Created by lihex on 2015/10/31.
 * 1.合并js 2.修改index.html中的js引用 && 删掉发布目录的lib
 * 请在egret publish 后执行，此时使用的egret引擎为2.5.3
 */
var commonCfg = require('../../config/commonCfg.js');
var async = require("async");
var cmdJs = require('cmdjs');
var moUtils = require("mo-utils");
var fs = cmdJs.fs2;
var path = cmdJs.path2;

//----------配置区域--------------
var publishCfg = require("./publishCfg.js");
var version = publishCfg.version;
var channelId = publishCfg.channelId;
var devMode = publishCfg.devMode;
var singleJs = publishCfg.singleJs;
var rmResource = publishCfg.rmResource;
//----------配置区域--------------

var client_dir = commonCfg.client_dir;
var bin_release = path.join(client_dir, "bin-release");
var version_dir = path.join(bin_release, path.join("web",version));
var index_html = path.join(version_dir, "index.html");

var editThirdLibAndVersion = function(text){
    //添加渠道库
    if(channelId && channelId == 10005){
        var tag = "game_files_end-->";
        var xhbLib = "    <script type=\"text/javascript\" src=\"http://d.hgame.com/loadsdk\"></script>";
        xhbLib += "\n    <script type=\"text/javascript\" src=\"http://d.hgame.com/loadgamesdk?gameid=100220\"></script>";
        var rep = tag + "\n" + xhbLib;
        text = text.replace(/game_files_end-->/, rep);

        var statLib="    <a style=\"display: none;\" href=\"http://tt.chuanqi.hgame.com/index.html?action=1&openid=100220\">log</a>";
        statLib += "\n </body>";
        text = text.replace(/<\/body>/, statLib);
    }
    //修改version,h5版本从index.html里读取版本号
    var regex = /(egret.project.gameVer[^\"]+\")([^\"]+)\"/;
    var matchs = text.match(regex);
    text = text.replace(regex, matchs[1] + version + "\"");
    return text;
}

var out_index_html = path.join(version_dir, "index.html");
var version_dir_lib = path.join(version_dir, "libs");
var version_dir_res = path.join(version_dir, "resource");
var version_dir_minJS = path.join(version_dir, "main.min.js");

//对boot.min.js和main.min.js加特殊处理，防止project.json和item_10034.png缓存
console.log("---->fix boot.min.js, main.min.js");
var libs_modules = path.join(version_dir_lib, "modules");
var boot_js = path.join(libs_modules, "boot", "boot.min.js");
var main_js = path.join(version_dir, "main.min.js");
async.parallel([
        function(callback){
            fs.readFile(boot_js,"utf8",function (error,data) {
                if (error) throw error;
                var text = data;
                var tag = "resource/project.json";
                text = text.replace(tag, "resource/project.json?v=" + Math.random());
                fs.writeFile(boot_js, text, callback);
            });
        },
        function(callback){
            fs.readFile(main_js,"utf8",function (error,data) {
                if (error) throw error;
                var text = data;
                //修改item_10034读取代码
                var tag = "item_10034?\"+Math.random()";
                text = text.replace(tag, "item_" + version + ".xyz\"");
                //修改default.thm.json读取代码
                var tag = "resource/default.thm.json";
                text = text.replace(tag, "resource/default.thm_" + version + ".json");
                //修改default.res.json读取代码
                var tag = "resource/default.res.json";
                text = text.replace(tag, "resource/default.res_" + version + ".json");

                //发布模式?
                var str = devMode?
                    "egret.devMode=!0"
                    :"egret.devMode=!1";
                var regex = /egret.devMode=!\d/;
                text = text.replace(regex, str);
                fs.writeFile(main_js, text, "utf8", callback);
            });
        },
        function(callback){
            var default_thm_json = path.join(version_dir_res, "default.thm.json");
            var aliasName = path.join(version_dir_res, "default.thm_" + version + ".json");
            fs.rename(default_thm_json, aliasName, callback);
        },
        function(callback){
            var default_res_json = path.join(version_dir_res, "default.res.json");
            var aliasName = path.join(version_dir_res, "default.res_" + version + ".json");
            fs.rename(default_res_json, aliasName, callback);
        },
        function(callback){
            var item_10034 = path.join(version_dir_res, "item_10034");
            var aliasName = path.join(version_dir_res, "item_" + version + ".xyz");
            fs.rename(item_10034, aliasName, callback);
        }
    ],
    // optional callback
    function(err, results){
        //混淆代码
        fs.readFile(index_html,"utf8",function (error,data){
            if(error) throw error ;
            var text = data;
            if(singleJs){
                var regex = /.*<script\s+.*/g;
                var matches = text.match(regex);
                matches.pop(); //最后一个Main.js不要
                var minFiles = [];
                for(var i = 0, li = matches.length; i < li; i++){
                    var e = matches[i];
                    var regx = /.*src=\"(.*)\"/;
                    var file_path = e.match(regx)[1];
                    minFiles.push(file_path);
                }
                var dir = version_dir, jsList = minFiles, outJsName =  "main.min."+version+".js",
                    outputJsPath = path.join(version_dir, outJsName);
                //console.log(dir, jsList, outputJsPath);
                if(minFiles.length > 0 ){
                    console.log("---->压缩js");
                    moUtils.uglifyJs(dir, jsList, outputJsPath);
                    //修改index.html
                    console.log("---->修改index.html");
                    //删除egret的配置
                    var regex = /.*<script egret=.*/g;
                    var text = text.replace(regex, "");
                    //删除空行
                    text = text.replace(/^\s+$/m, "");
                    //修改启动文件的名字
                    text = text.replace(/main.min.js/, outJsName);
                    //添加渠道库
                    text = editThirdLibAndVersion(text);
                    fs.writeFileSync(out_index_html, text);
                    //移除原始min.js文件
                    fs.unlinkSync(version_dir_minJS);
                    //移除lib目录
                    fs.rmdirSync2(version_dir_lib);

                    //拷贝loader
                    require("./publishLoader.js");
                    require("./publishH5SDK.js");
                }
            }else{
                console.log("---->修改index.html");
                var regex = /.*bin-debug\/Main.js.*/g;
                var text = text.replace(regex, "");
                text = editThirdLibAndVersion(text);
                fs.writeFileSync(out_index_html, text);
            }

            if(rmResource){
                //移除resource目录
                fs.rmdirSync2(version_dir_res);
            }
        });
    });






