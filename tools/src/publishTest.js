/**
 * Created by SmallAiTT on 2015/9/21.
 */
var cmdJs = require('cmdjs');
var path = cmdJs.path2;
var fs = cmdJs.fs2;
var config = require('../../config.js');
var proj_dir = config.proj_dir;
var projName = path.basename(proj_dir);
var testPro_dir = path.join(proj_dir, '../', projName + '_test');
var async = require("async");

fs.mkdirSync2(testPro_dir);

var files = [
    'mgr',
    'client/template',
    'client/resource/dynamic2',
    'client/resource/ui2',
    'client/resource/default.res.json',
    'client/resource/default.thm.json',
    'client/resource/item_10034',
    'client/resource/pack.res.json',
    'client/resource/project.json',
    'client/egret.json',
    'client/egretProperties.json',
    'client/index.html',
    'client/bin-debug',
    'client/libs',

    'server/config',
    'server/env-cfg',
    'server/node_modules',
    'server/route',
    'server/template',
    'server/mainApp.js',
    'server/reset.js',
    'server/serverApp.js',
    'server/viewApp.js',
    'server/app.js',

    'tools',

    'config.js',
    'env.js',
    'env-cfg.js',
    'my-env-cfg.js'
];

////更新逻辑代码用
//var files = [
//    'client/index.html',
//    'client/bin-debug',
//    'client/libs',
//    'server/node_modules',
//    'server/route'
//];

var myProjectJsonRelative = 'client/resource/myProject.json';
if(!fs.existsSync(path.join(testPro_dir, myProjectJsonRelative))) files.push(myProjectJsonRelative);


for (var i = 0, l_i = files.length; i < l_i; i++) {
    var file = files[i];
    console.log(path.join(proj_dir, file), path.join(testPro_dir, file));
    fs.copySync(path.join(proj_dir, file), path.join(testPro_dir, file));
}
////更新逻辑代码用
//return;

//---->修改端口
var cfg_files = [
    ["server/env-cfg/main_cfg.js", 5006, /(\"mainHttpPort\"[^\d]+)([^,]+),/, ","],
    ["server/env-cfg/server_cfg.js", 24300, /(\"serverHttpPort\"[^\d]+)([^,]+),/, ","],
    ["server/env-cfg/view_cfg.js", 24003, /(\"viewHttpPort\"[^\d]+)([^,]+),/, ","],
    ["my-env-cfg.js", "192.168.1.199", /(\"client\" : { \"host\"[^\"]+\")([^\"]+)\"/, "\""]
];
async.map(cfg_files, function(cfg, cb1){
    var f_path = path.join(testPro_dir, cfg[0]);
    console.log(f_path);
    fs.readFile(f_path,"utf8",function (error,data) {
        if (error) throw error;
        var text = data;
        //修改version
        var regex = cfg[2];
        var matchs = text.match(regex);
        //console.log(matchs);
        text = text.replace(regex, matchs[1] + cfg[1] + cfg[3]);
        fs.writeFile(f_path, text, cb1);
    });

}, function(){
    //记得在server_cfg.js中添加一行mainHttpPort配置
    var cfg = ["server/env-cfg/server_cfg.js", 5006, /(\"mainHttpPort\"[^\d]+)([^,]+),/, ","];
    var f_path = path.join(testPro_dir, cfg[0]);
    fs.readFile(f_path,"utf8",function (error,data) {
        if (error) throw error;
        var text = data;
        //修改version
        var regex = cfg[2];
        var matchs = text.match(regex);
        text = text.replace(regex, matchs[1] + cfg[1] + cfg[3]);
        fs.writeFile(f_path, text);
    });
});
