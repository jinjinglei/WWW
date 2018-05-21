/**
 * Created by SmallAiTT on 2015/7/15.
 */
var commonCfg = require('../../config.js');
var cmdJs = require('cmdjs');
var fs = cmdJs.fs2;
var path = cmdJs.path2;

require('./genRes.js');

var w_res_dir = commonCfg.wing_resource_dir, c_res_dir = commonCfg.client_resource_dir;
var w_resJson = path.join(w_res_dir, 'default.res.json');
var c_resJson = path.join(c_res_dir, 'default.res.json');
fs.copySync(path.join(w_res_dir, 'default.thm.json'), path.join(c_res_dir, 'default.thm.json'));

function handleRes(){
    // 处理resource.json，去除不需要的
    var resJson = require(w_resJson);
    var ignoreGrps = commonCfg.ignoreGrps;
    var ignorePacks = commonCfg.ignorePacks;
    var groups = resJson.groups;
    for (var i = 0; i < groups.length;) {
        var obj = groups[i];
        if(ignoreGrps.indexOf(obj.name) >= 0) {
            groups.splice(i, 1);
        }else{
            i++;
        }
    }
    var resources = resJson.resources;
    for (var i = 0; i < resources.length;) {
        var obj = resources[i];
        var url = obj.url;
        var m = path.dirname(url);
        if(ignoreGrps.indexOf(m) >= 0) {
            resources.splice(i, 1);
        }else{
            i++;
        }
    }
    fs.writeFileSync(c_resJson, JSON.stringify(resJson, null, 0));

    // 处理打包图版本
    for (var i = 0; i < resources.length;) {
        var obj = resources[i];
        var url = obj.url;
        var m = path.dirname(url);
        if(ignorePacks.indexOf(m) < 0) {// 不在忽略的地方，则跳过
            resources.splice(i, 1);
        }else{
            i++;
        }
    }
    for (var i = 0; i < groups.length; i++) {
        var obj = groups[i];
        if(ignoreGrps.indexOf(obj.name) < 0) {// 不在忽略列表的则生成sheet数据
            resources.push({
                name : obj.name + '_sheet',
                type : 'sheet',
                subkeys : obj.keys,
                url : obj.name + '.json'
            });
        }
    }
    fs.writeFileSync(path.join(c_res_dir, 'pack.res.json'), JSON.stringify(resJson, null, 0));
}
handleRes();
// 遍历skins列表，获取到所有的皮肤列表
var skinNames = [];
fs.walkDirSync(commonCfg.wing_skins_dir, '.exml', function(filePath){
    var relateName = path.relative(commonCfg.wing_skins_dir, filePath);
    var arr = relateName.split('/');
    arr[arr.length - 1] = path.basename(filePath, '.exml');
    skinNames.push('skins.' + arr.join('.'))
});


// 创建skinName.ts
var skinNameContent = 'module skinName{\r\n';
skinNameContent += 'export var obj:any = {};\r\n';
for (var i = 0, l_i = skinNames.length; i < l_i; i++) {
    var skinName = skinNames[i];
    skinNameContent += 'obj.skinName = "' + skinName + '";\r\n';
}
skinNameContent += '}';

fs.writeFileSync(path.join(commonCfg.wing_dir, 'src/skinName.ts'), skinNameContent);

var hasEgretBuild = fs.existsSync(path.join(commonCfg.wing_dir, 'libs/modules/egret/egret.d.ts'));
// 进行编译
var child_process = require('child_process');
var oldCwd = process.cwd();
process.chdir(commonCfg.wing_dir);
child_process.exec((hasEgretBuild ? 'egret b' : 'egret b -e'), function(error, stdout, stderr){
    process.chdir(oldCwd);
    if(error) {
        console.error(error);
        console.log(stdout);
        console.log(stderr);
        return
    }
    console.log(stdout);
    console.log(stderr);

    var skins_src_dir = path.join(commonCfg.client_dir, 'modules/skins/src');
    fs.copySync(path.join(commonCfg.wing_dir, 'bin-debug/skins'), skins_src_dir);

    // 正常编译的js列表
    var file_list = [];
    fs.walkDirSync(skins_src_dir, '.js', function(filePath){
        file_list.push(path.relative(skins_src_dir, filePath));
    });

    fs.writeFileSync(path.join(skins_src_dir, 'empty.d.ts'), '');
    file_list.push('empty.d.ts');

    var moduleJson = {
        "modules" : ["egret", "game", "gui"],
        "name": "skins",
        "source": "src",
        "files": file_list
    };
    fs.writeFileSync(path.join(skins_src_dir, '../module.json'), JSON.stringify(moduleJson, null, 4));

    // 编译该第三方模块
    oldCwd = process.cwd();
    process.chdir(commonCfg.client_dir);
    child_process.exec('mo b skins', function(error){
        console.log(stdout);
        console.log(stderr);
        if(error) console.error(error);
        else console.log('皮肤编译成功！');
    });
});