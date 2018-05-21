/**
 * Created by smallaitt on 26/11/15.
 */
var commonCfg = require('../../../config.js');
var cmdJs = require('cmdjs');
var fs = cmdJs.fs2;
var path = cmdJs.path2;
var async = require('async');
var moImg = require('mo-img');

//--->要发布的资源文件夹
var ui_mc = ["ui_effect"];
var fight_mc = ['effect', 'role'];
var mc_group = [];
var mc_group = mc_group.concat(ui_mc);
var mc_group = mc_group.concat(fight_mc);
//<----

var dc_dir = path.join(commonCfg.client_dir, 'modules/g-dc');
var dc_src_dir = path.join(dc_dir, 'src');
var libs_dc_dir = path.join(commonCfg.client_dir, 'libs/modules/g-dc');
fs.mkdirSync2(dc_src_dir);
fs.mkdirSync2(libs_dc_dir);
fs.writeFileSync(path.join(dc_src_dir, 'empty.d.ts'), '');

function parseUIMcData(mcData, dirName, filePath){

    var extname = path.extname(filePath);
    var basename = path.basename(filePath, extname);


    var roleId = path.basename(path.dirname(filePath));
    var dstFileName = dirName + "_" + roleId + "_" + basename;


    for(var key in mcData){
        var oldValue = mcData[key];

        var oldEvents = oldValue.events || [];
        var oldFrames = oldValue.frames || [];
        var events = [];
        var frames = [];

        // 事件
        for(var i = 0; i < oldEvents.length; ++i){
            var event = oldEvents[i];
            var eventName = event.name;
            if(eventName.indexOf('@') == 0) eventName = eventName.substring(1);
            events.push([eventName,event.frame]);
        }

        // 帧列表
        for(var i = 0; i < oldFrames.length; ++i){
            var frame = oldFrames[i];
            var f = [];
            f.push(frame.res, frame.x, frame.y);
            if(frame.duration != null) f.push(frame.duration);
            frames.push(f);
        }

        // 注意了，现在的mc数据都是只有一个而已
        // [frameRate, frames, events]
        var retArr = [oldValue.frameRate];
        if(frames.length) retArr.push(frames);
        if(events.length) retArr.push(events);
        return retArr;
    }
    return null;
}

function parseRes(resData, dirName, filePath){

    var extname = path.extname(filePath);
    var basename = path.basename(filePath, extname);


    var roleId = path.basename(path.dirname(filePath));
    var dstFileName = dirName + "_" + roleId + "_" + basename;

    var result = [];
    for(var key in resData){
        var resObj = resData[key];
        result.push([key, resObj.x, resObj.y, resObj.w, resObj.h]);
    }
    return result;
}

function getKeyName(dirName, filePath){
    var extname = path.extname(filePath);
    var basename = path.basename(filePath, extname);

    if(ui_mc.indexOf(dirName) >= 0) return parseInt(basename);

    var roleId = path.basename(path.dirname(filePath));
    var dstFileName = dirName + "_" + roleId + "_" + basename;

    /*
     转换规则:
     effect: e+id+方向, effect_1_A -> e1A
     role_role: r+id+_dirct+act, role_101_0_attack -> r101_0a
     role_item: i+id+_dirct+act, role_item_0001_0_attack ->i1_0a
     role_monster: m+id+_dirct+act, role_monster_0019_0_attack ->m19_0a
     role_123:w+id+_dirct+act, role_101_0_attack -> w101_0a
     */
    var a= /^effect/;
    if(a.test(dstFileName)){
        var rgx=/effect_(\d+)_(.*)/;
        var matchs = dstFileName.match(rgx);
        var id = matchs[1];
        var dirct = matchs[2];
        return 'e' + id + dirct;
    }
    a = /role_role/;
    if(a.test(dstFileName)){
        var rgx=/role_role_(\d+)_(\d+)_([a-z])/;
        var matchs = dstFileName.match(rgx);
        var id = parseInt(matchs[1]);
        var dirct = matchs[2];
        var act = matchs[3];
        return 'r' + id + '_' + dirct + act;
    }
    a = /role_item/;
    if(a.test(dstFileName)){
        var rgx=/role_item_(\d+)_(\d+)_([a-z])/;
        var matchs = dstFileName.match(rgx);
        var id = parseInt(matchs[1]);
        var dirct = matchs[2];
        var act = matchs[3];
        return 'i' + id + '_' + dirct + act;
    }
    a = /role_monster/;
    if(a.test(dstFileName)){
        var rgx=/role_monster_(\d+)_(\d+)_([a-z])/;
        var matchs = dstFileName.match(rgx);
        var id = parseInt(matchs[1]);
        var dirct = matchs[2];
        var act = matchs[3];
        return 'm' + id + '_' + dirct + act;
    }
    a = /role_\d+/;
    if(a.test(dstFileName)){
        var rgx=/role_(\d+)_(\d+)_([a-z])/;
        var matchs = dstFileName.match(rgx);
        var id = parseInt(matchs[1]);
        var dirct = matchs[2];
        var act = matchs[3];
        return 'w' + id + '_' + dirct + act;
    }
    return dstFileName;
}

function publishData(){
    // 格式为：解析类型（"@mc"）、mc数据（{}）、合图信息（{}）
    var obj = {};

    async.mapLimit(mc_group, 1, function(dirName, cb1){
        var moduleDir = path.join(commonCfg.docs_dynamic, dirName);
        fs.walkDirOneByOne(moduleDir, ['.json'], function(filePath, cb2){
            var extname = path.extname(filePath);
            if(extname == '.json'){
                var json = require(filePath);
                var keyName = getKeyName(dirName, filePath);
                obj[keyName] = ['@mc',parseUIMcData(json.mc, dirName, filePath), parseRes(json.res, dirName, filePath)];
            }
            cb2();
        }, cb1);
    }, function(err){
        if(err) console.error(err);

        obj = finalTrim(obj);
        var objStr = JSON.stringify(obj, null, 0);
        var content = 'mo._dc["mc"]=' + objStr;
        //content += '\rmo.addDc("arm_act_type", ' + JSON.stringify(armActTypeMap) + ');';
        content += ';';
        fs.writeFileSync(path.join(dc_src_dir, 'mc.js'), content);
        fs.writeFileSync(path.join(libs_dc_dir, 'g-dc.js'), content);
        fs.writeFileSync(path.join(libs_dc_dir, 'g-dc.min.js'), content);
        //client/resource/shared里放一份,到时会压缩到配置文件
        fs.writeFileSync(path.join(commonCfg.client_shared, 'dc_mc.json'), objStr);
    });
}

/**
 * 返回子数组
 * @param starIdx 起始索引
 * @param arr
 * @returns {Array}
 */
function subArr(starIdx, arr){
    var sub = [];
    for(var i = starIdx, li = arr.length; i < li; i++){
        sub.push(arr[i]);
    }
    return sub;
}


// 格式为：转换为["@mc", [帧率, [mc数据,合图信息]]]）
function finalTrim(obj){

    /*
    var obj = {"1": ["@mc", [24, [
     ["1F62B314", -54, -53, 2],
     ["43A614B5", -55, -51, 2],
     ["52ED4972", -52, -53, 2],
     ["A427262D", -54, -54, 2],
     ["247C3B25", -55, -52, 2],
     ["A857A4A1", -55, -52, 2],
     ["49094824", -53, -55, 2],
     ["178E0245", -55, -63, 2],
     ["EE27F9DC", -53, -54, 2],
     ["91896175", -54, -54, 2],
     ["9A216FE", -53, -55, 2],
     ["B8D07B8E", -52, -56, 2]
     ]],
     [
     ["49094824", 109, 116, 107, 111],
     ["91896175", 1, 350, 109, 108],
     ["1F62B314", 218, 112, 111, 106],
     ["43A614B5", 221, 337, 112, 103],
     ["52ED4972", 224, 220, 107, 107],
     ["A427262D", 116, 1, 108, 109],
     ["247C3B25", 111, 229, 111, 106],
     ["A857A4A1", 226, 1, 112, 105],
     ["178E0245", 1, 116, 106, 119],
     ["EE27F9DC", 112, 337, 107, 108],
     ["9A216FE", 1, 237, 108, 111],
     ["B8D07B8E", 1, 1, 113, 113]
     ]
     ]};
     //转换---->
    mo._dc["mc"] = {
        "1": ["@mc", [24, [
            [218, 112, 111, 106, -54, -53, 2],
            [221, 337, 112, 103, -55, -51, 2],
            [224, 220, 107, 107, -52, -53, 2],
            [116, 1, 108, 109, -54, -54, 2],
            [111, 229, 111, 106, -55, -52, 2],
            [226, 1, 112, 105, -55, -52, 2],
            [109, 116, 107, 111, -53, -55, 2],
            [1, 116, 106, 119, -55, -63, 2],
            [112, 337, 107, 108, -53, -54, 2],
            [1, 350, 109, 108, -54, -54, 2],
            [1, 237, 108, 111, -53, -55, 2],
            [1, 1, 113, 113, -52, -56, 2]
        ]]]};
    */

    for(var mcKey in obj) {
        var mc = obj[mcKey];
        var frames = mc[1][1];
        var resoures = mc[2];

        var frame;
        for (var i = 0, li = frames.length; i < li; i++) {
            frame = frames[i];
            var newframe = [];
            var resName = frame[0];
            for (var j = 0, lj = resoures.length; j < lj; j++) {
                var res = resoures[j];
                var resNameHere = res[0];
                if (resName == resNameHere) {
                    newframe = newframe.concat(subArr(1, res));
                    newframe = newframe.concat(subArr(1, frame));
                    mc[1][1][i] = newframe;
                    break;
                }
            }
        }
        mc.splice(2,1);
    }
    return obj;
}

function publishImg(cb){
    var options = [];
    async.mapLimit(mc_group, 1, function(dirName, cb1){

        var moduleDir = path.join(commonCfg.docs_dynamic, dirName);

        fs.walkDirOneByOne(moduleDir, ['.png'], function(filePath, cb2){
            var extname = path.extname(filePath);
            if(extname == '.png'){
                var dstFileName = getKeyName(dirName, filePath) + extname;
                options.push([
                    path.join(filePath),
                    path.join(commonCfg.client_resource_dir, 'dynamic2', dstFileName),
                    filePath.indexOf("dynamic/role") < 0 //fight_mc.role里的不需要再次压缩
                ]);
            }
            cb2();
        }, cb1);
    }, function(err){
        if(err) console.error(err);

        async.mapLimit(options, 4, function(info, cb1){
            var srcPath = info[0], outPath = info[1], imgZip = info[2];
            if(commonCfg.imgScale == 1){
                fs.mkdirSync2(path.dirname(outPath));
                fs.writeFileSync(outPath, fs.readFileSync(srcPath));
                if(imgZip){
                    moImg.pngquant(outPath, {"--output" : outPath}, "--force", cb1);
                }else{
                    async.setImmediate(function () {
                        cb1();
                    });
                }
            }else{
                moImg.scaleImg(srcPath, outPath, commonCfg.imgScale, function(err){
                    if(err) return cb1(err);
                    if(commonCfg.imgZip){
                        moImg.pngquant(outPath, {"--output" : outPath}, "--force", cb1);
                    }else{
                        cb1();
                    }
                });
            }
        }, cb);
    });


}
function publish(cb){
    publishData();
    //return cb();
    publishImg(cb);
}
exports.run = function(cb){
    publish(function(err){
        if(err) console.error(err);
        if(cb){
            cb();
        }else console.log("pack arm img successfully");
    });
};

if(!commonCfg.__together) exports.run();
