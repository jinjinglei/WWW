/**
 * Created by SmallAiTT on 2015/6/9.
 */
var processUtils = require("../processUtils.js");

exports.exec = function(config, env, cb){
    processUtils.exec(config.client_dir, "egret b -e", function(err, stdout, stderr){
        if(err){
            cb(stderr);
        }else{
            cb(null, stdout);
        }
    });
};
