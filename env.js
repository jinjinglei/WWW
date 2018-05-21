/**
 * Created by SmallAiTT on 2015/9/21.
 */

function mergeObj(src, dst){
    var src = src || {};
    for (var key in dst) {
        if(key.indexOf('_desc') > 0 && key.indexOf('_desc') == key.length - '_desc'.length) continue;
        var srcObj = src[key];
        var dstObj = dst[key];
        if(dstObj instanceof Array){
            src[key] = dstObj;
        }else if(typeof dstObj == 'object'){
            src[key] = mergeObj(srcObj, dstObj);
        }else {
            src[key] = dstObj;
        }
    }
    return src;
}
function getEnv(){
    var env = require('./env-cfg.js');
    try{
        var my_env = require('./my-env-cfg.js');
        return mergeObj(env, my_env);
    }catch(e){
        return env;
    }
}
function getConfig(){
    var env = getEnv();
    var cfg = env.config[env.name];
    var result = {};
    for(var key in env){
        if(key == 'config') continue;
        if(key.indexOf('_desc') > 0 && key.indexOf('_desc') == key.length - '_desc'.length) continue;
        result[key] = env[key];
    }
    return mergeObj(result, cfg);
}

module.exports = getConfig();