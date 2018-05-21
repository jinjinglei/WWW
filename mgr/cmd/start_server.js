/**
 * Created by SmallAiTT on 2015/6/9.
 */
var child_process = require('child_process');
var path = require("path");
var asnyc = require('async');
var processUtils = require('../processUtils.js');

function killByPorts(env, cb){
    var ports = [];

    ports.push(5006);
    ports.push(24300);
    ports.push(24003);
    //ports.push(env.server.masterPort);
    //ports.push(env.server.servers_c_port);
    //ports.push(env.server.servers_c_clientPort);
    //ports.push(env.server.servers_a_port);
    //ports.push(env.server.servers_chatC_port);
    //ports.push(env.server.servers_chatC_clientPort);
    //ports.push(env.server.servers_chatA_port);
    asnyc.map(ports, function(port, cb1){
        processUtils.killByPort(port, cb1);
    }, function(err){
        if(err) return console.error('kill ports-->', err);
        cb();
    });
}
exports.exec = function(config, env, cb){
    killByPorts(env, function(){
        var child = child_process.spawn("node",["app.js"],{cwd:config.server_dir});
        child.stdout.setEncoding('utf8');
        child.stdout.on('data', function(data) {
            console.log(data.toString());
        });
        child.stderr.on('data', function(data) {
            console.error("error--->", data.toString());
        });
        config.isServerStarted = true;
        cb(null, "服务器启动成功！");
    });
};
