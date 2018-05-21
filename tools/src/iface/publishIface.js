var cmdJs = require('cmdjs');
var fs = cmdJs.fs2;
var path = cmdJs.path2;

var commonCfg = require("../../config/commonCfg.js");
var dirCfg = require("../../config/ifaceCfg.js").dirCfg;

var serversDir = commonCfg.server_app_route;//pomelo中的route目录
var ifacePath4C = path.join(commonCfg.client_auto, "iface.ts");
var ifacePath4S = path.join(commonCfg.server_nodeModules, "uw-data/iface/iface.js");
var ifacePath4Worker = path.join(commonCfg.server_nodeModules, "uw-data/iface/ifaceWorker.js");

fs.mkdirSync2(commonCfg.client_auto);
fs.mkdirSync2(path.join(commonCfg.server_nodeModules, "uw-data/iface"));

/**
 * Desc: 进行获取的内容在文件中的index列表。
 * @param content
 * @param arr
 * @returns {Array}
 */
function trans4Index(content, arr){
    var index = 0;
    var indexArr = [];
    for (var i = 0, li = arr.length; i < li; i++) {
        var itemi = arr[i];
        index += content.substring(index).indexOf(itemi);
        indexArr.push(index);
    }
    return indexArr;
}

function getIfaceContent(){
    var ifaces = [];
    for (var key in dirCfg) {
        var arr = key.split("_");

        var filePath = path.join(serversDir, arr[0], "handler", arr[1]+".js");

        ifaces = ifaces.concat(readServer(filePath, arr[0], arr[1], dirCfg[key]));
    }
    var contentArr = [];
    var workerDic = {};
    for (var i = 0, li = ifaces.length; i < li; i++) {
        var iface = ifaces[i];
        var desc = iface.desc.replace(/\s\*[\s]*@param\s[^\n]*\n/g, "").replace(/\s\*[\s]*@iface\s[^\n]*\n/g, "");
        contentArr.push(desc + '\r\n' + iface.key + ' : "' + iface.iface + '"')
        if (iface.isWorker) {
            workerDic[iface.iface] = 1;
        }
        if(!iface.args) continue;
        var args = tearArgs(iface.args, "_", "");
        if(args.length > 0) contentArr.push(iface.key + '_args : {\r\n    ' + args.join('\r\n    ,') + '\r\n}');
    }
    var strContent = '{\r\n' + contentArr.join('\r\n,') + '\r\n}';

    return ['{\r\n' + contentArr.join('\r\n,') + '\r\n}',JSON.stringify(workerDic)];
}
function readServer(filePath, serverDirName, name, serverName){
    console.log(filePath);
    var arr = [];
    var content = fs.readFileSync(filePath).toString();
    var exp4Comment = /((\/\*[\s\S]*?\*\/)|(\/\/.*$))/g;//注释
    var exp4Iface = /proto\.[\w\d_]+[\s]*=[\s]*function/g;;//接口
    var commentArr = content.match(exp4Comment);
    var ifaceArr = content.match(exp4Iface);
    if(!commentArr || !ifaceArr) throw filePath + " has no iface";
    var indexArr4Comment = trans4Index(content, commentArr);
    var indexArr4Iface = trans4Index(content, ifaceArr);
    var index1 = 0;
    for (var i = 0, li = indexArr4Iface.length; i < li; i++) {
        if(indexArr4Comment[index1] > indexArr4Iface[i] || index1 >= indexArr4Comment.length)
            throw filePath + "  " + ifaceArr[i] + " has no comment!";
        while(index1 < indexArr4Comment.length){
            if(index1 + 1 == indexArr4Comment.length || indexArr4Comment[index1 + 1] > indexArr4Iface[i]) break;
            index1++;
        }
        var comment = commentArr[index1];
        //@iface getData
        var r = comment.match(/@iface[\s]+[\w_][\w_\d]*[\s]/);//接口名称
        if(!r) throw filePath + "  " + ifaceArr[i] + " has no interface name!";
        var args = null;
        var r2 = comment.match(/@args\s[^\n]*\n/);//接口参数
        if(comment.match(/@args\n/)){
            //do nothing
        }else if(!r2){
            r2 = commentArr[index1].match(/@argsStart\s[\w\W]*@argsEnd/);//接口参数
            if(!r2) throw filePath + "  " + ifaceArr[i] + " has no args desc!";
            args = r2[0].replace(/@argsStart/, "").replace(/@argsEnd/, "").replace(/\r\n[\s]*\*[\s]*/g, "");
        }else{
            args = r2[0].substring(5).trim();
        }
        var key =serverDirName + "_" + serverName + "_" + r[0].substring(7).trim();

        var isWorker = comment.match(/@isWorker[\s]+[\w_][\w_\d]*[\s]/);//接口名称
        if(!isWorker) {
            isWorker = 0;
        }else{
            isWorker = isWorker[0].substring(10).trim();
        }
        var obj = {
            key : key,
            iface : serverDirName + "." + name + "." + ifaceArr[i].split("=")[0].substring(6).trim(),
            args : (!args || args === "") ? null : eval("(" + args + ")"),
            desc : commentArr[index1],
            isWorker: isWorker
        };
        arr.push(obj);
    }
    return arr;
}
function gen(){
    console.log("|---------------------------------------|");
    console.log("|        IfaceGen                       |");
    console.log("|        Author: Zheng.Xiaojun          |");
    console.log("|        Version: 1.0.0                 |");
    console.log("|---------------------------------------|");
    console.log("+++++++++++++++++gen starts++++++++++++++");
    var contentData = getIfaceContent();
    var content = contentData[0];
    var ifaceWorker = contentData[1];
    fs.writeFileSync(ifacePath4C, 'module gc { \n export var iface  = ' + content + " \n}");//生成的配置文件的路径

    fs.writeFileSync(ifacePath4S, 'module.exports = ' + content + ";");//生成的配置文件的路径
    fs.writeFileSync(ifacePath4Worker, 'module.exports = ' + ifaceWorker + ";");//生成的配置文件的路径
    console.log("Success!!");
    console.log("+++++++++++++++++gen Ends++++++++++++++++");
}
//{a:["SDF", {}], b : {_desc:"SDF", a : "SDF"}}
function tearArgs(args, pre4Value, preKey){
    var count = 0;
    var  arr = [];
    for (var key in args) {
        var value = args[key];
        var tempKey = preKey + key;
        //todo 不是开发模式
        //var str = tempKey + ' : "' + (cfg.isDev ? key : pre4Value + count) + '"//';
        var str = tempKey + ' : "' + (pre4Value + count) + '"//';
        if(typeof value == "string"){
            arr.push(str + value);
        }else if(value instanceof Array){
            if(!value[0] || typeof value[0] != "string") throw "[" + key + "]的第一项必须为字符串作为描述";
            arr.push(str + value[0]);
            for (var i = 1, li = value.length; i < li; i++) {
                var itemi = value[i];
                if(itemi instanceof Array || typeof itemi == "object") arr = arr.concat(tearArgs(itemi, pre4Value + count + "_", tempKey + "_"));
            }
        }else if(typeof value == "object"){
            if(!value._desc || typeof value._desc != "string") throw "必须存在字段[_desc]，且为字符串作为描述";
            arr.push(str + value._desc);
            for (var i = 1, li = value.length; i < li; i++) {
                var itemi = value[i];
                if(itemi instanceof Array || typeof itemi == "object") arr = arr.concat(tearArgs(itemi, pre4Value + count + "_", tempKey + "_"));
            }
        }else{
            throw "args 格式错误！";
        }
        count++;
    }
    return arr;
}

exports.publish = function(){
    gen();
};