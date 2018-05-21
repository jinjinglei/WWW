/**
 * Created by SmallAiTT on 2015/6/9.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var cfg = require('../config.js');
var env = require('../env.js');
var processUtils = require('./processUtils.js');
var asnyc = require('async');

// 重置一些配置
function resetConfig(){
    var myProjectJsonPath = path.join(cfg.client_dir, "resource/myProject.json");
    var myProjectJson = require(myProjectJsonPath);
    myProjectJson.httpHost = env.server.host;
    myProjectJson.httpPort = env.server.httpPort;
    fs.writeFileSync(myProjectJsonPath, JSON.stringify(myProjectJson, null, 4));
}
//resetConfig();

function killByPorts(cb){
    var ports = [];
    ports.push(5006);
    ports.push(24300);
    ports.push(24003);
    asnyc.map(ports, function(port, cb1){
        processUtils.killByPort(port, cb1);
    }, function(err){
        if(err) return console.error('kill ports-->', err);
        cb();
    });
}


// 服务器相关设置
var mine = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "mp3": "audio/mpeg",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
};
function onGet(request, response) {
    var pathname = url.parse(request.url).pathname;
    var arr = pathname.split("/");
    if(arr[1] == "cmd"){
        response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
        var cmdName = arr[2];
        var cmdPath = path.join(__dirname, "./cmd", cmdName + ".js");
        console.log(cmdPath);
        if(!fs.existsSync(cmdPath)){
            console.log(1111);
            return response.end("找不到cmd：【" + cmdName + "】！");
        }
        try{
            var cmd = require("./cmd/" + cmdName);
            cmd.exec(cfg, env, function(err, msg){
                if(err){
                    response.end(err);
                }else{
                    response.end("成功！\r\n" + msg);
                }
            });
        }catch(e){
            response.end("cmd：【" + cmdName + "】出错！\r\n" + e);
        }
    }else{
        writeFile(pathname, response);
    }
}


function writeFile(pathname, response) {
    var realPath = path.join(cfg.client_dir, pathname);
    var ext = path.extname(realPath);
    ext = ext ? ext.slice(1) : 'unknown';
    fs.exists(realPath, function (exists) {
        if (!exists) {
            response.writeHead(404, {
                'Content-Type': 'text/plain'
            });
            console.log(realPath);
            response.write("This request URL " + pathname + " was not found on this server.");
            response.end();
        } else {
            fs.readFile(realPath, "binary", function (err, file) {
                if (err) {
                    response.writeHead(500, {
                        'Content-Type': 'text/plain'
                    });
                    response.end(err.toString());
                } else {
                    var contentType = mine[ext] || "text/plain";
                    response.writeHead(200, {
                        'Accept-Ranges': 'bytes',
                        'Content-Type': contentType,
                        'Content-Length': file.length,
                        'Access-Control-Allow-Origin': '*'
                    });
                    response.write(file, "binary");
                    response.end();
                }
            });
        }
    });
}

var server = http.createServer(onGet);
server.addListener("error", function (err) {
    console.log("server error--->", err);
});

killByPorts(function(){
    server.listen(env.client.port, env.client.host, function(err){
        require("./cmd/start_server.js").exec(cfg, env, function(err){
            if(err) return console.error(err);
            console.log("http server %s:%s", env.client.host, env.client.port);
        });
    });
});
