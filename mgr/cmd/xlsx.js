/**
 * Created by SmallAiTT on 2015/6/9.
 */
var path = require("path");
exports.exec = function(config, env, cb){
    require(path.join(config.tools_dir, 'src/genJsData.js')).publish();
    cb(null, "xlsx发布成功！");
};
