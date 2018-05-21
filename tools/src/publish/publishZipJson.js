/**
 * Created by lihex on 2015/10/31.
 * 将json zip压缩
 * 请在genJsData.js 后执行
 */
var commonCfg = require('../../config/commonCfg.js');
var cmdJs = require('cmdjs');
var JSZip = require('jszip');
var fs = cmdJs.fs2;
var path = cmdJs.path2;
var firstTime = true;

//----------配置区域--------------
//----------配置区域--------------

var client_resource_dir = commonCfg.client_resource_dir;
var json_dir = path.join(client_resource_dir, "shared");

var createJsonZip = function(){
    var zip = new JSZip();
    var files = fs.readdirSync(json_dir);
    for(var i = 0, li = files.length; i < li; i++){
        var json_name = files[i];
        var json_path = path.join(json_dir, json_name);
        zip.file(json_name, fs.readFileSync(json_path));
    }
    var targetPath = path.join(client_resource_dir, "item_10034");
    var data = zip.generate({base64:false,compression:'DEFLATE'});
    fs.writeFileSync(targetPath, data, 'binary');
}

exports.createJsonZip = function(){
    if(firstTime) firstTime = false;
    else createJsonZip();
};
if(firstTime) createJsonZip();