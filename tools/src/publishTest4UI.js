/**
 * Created by SmallAiTT on 2015/9/21.
 */
var cmdJs = require('cmdjs');
var path = cmdJs.path2;
var fs = cmdJs.fs2;
var config = require('../../config.js');
var proj_dir = config.proj_dir;
var projName = path.basename(proj_dir);
var testPro_dir = path.join(proj_dir, '../', projName + '_test_ui');


fs.mkdirSync2(testPro_dir);

var files = [
    'client/frameworks',
    'client/modules',
    'client/template',
    'client/src',
    'client/resource/dynamic2',
    'client/resource/ui2',
    'client/resource/default.res.json',
    'client/resource/default.thm.json',
    'client/resource/pack.res.json',
    'client/resource/project.json',
    'client/egret.json',
    'client/egretProperties.json',
    'client/index.html',
    'client/bin-debug',
    'client/libs',

    'tools',

    'config.js',
    'env.js',
    'env.json'
];
var myProjectJsonRelative = 'client/resource/myProject.json';
if(!fs.existsSync(path.join(testPro_dir, myProjectJsonRelative))) files.push(myProjectJsonRelative);


for (var i = 0, l_i = files.length; i < l_i; i++) {
    var file = files[i];
    console.log(path.join(proj_dir, file), path.join(testPro_dir, file));
    fs.copySync(path.join(proj_dir, file), path.join(testPro_dir, file));
}

fs.writeFileSync(path.join(testPro_dir, '发布资源.bat'), 'node tools/src/genRes.js\r\npause');
fs.writeFileSync(path.join(testPro_dir, '编译皮肤.bat'), 'node tools/src/publishSkin.js\r\npause');
fs.writeFileSync(path.join(testPro_dir, '启动服务器.bat'), 'egret startserver client');