/**
 * Created by SmallAiTT on 2015/6/9.
 */
var child_process = require('child_process');
var path = require("path");

exports.exec = function(execPath, cmdStr, cb){
    var oldCwd = process.cwd();
    if(execPath) process.chdir(execPath);
    child_process.exec(cmdStr, function(error, stdout, stderr){
        if(execPath) process.chdir(oldCwd);
        cb(error, stdout, stderr);
    });
};

exports.killByPort = function(port, cb){
    if(process.platform == 'linux'){
        var cmdStr = "netstat -nvltp |grep node | grep -E \"" + port +"\" |awk '{print $NF}' |awk -F\"/\" '{print $1}'";
        child_process.exec(cmdStr, function(error, stdout, stderr){
            var pid=stdout;
            if(pid.length > 0){
                pid = pid.trim().replace(/\n/g, "");
                console.log("pid:", pid);
                var killCmd = "kill -s 9 " + pid;
                console.log("-----print once",killCmd);
                child_process.exec(killCmd, function(error, stdout, stderr){
                    cb(error, stdout, stderr);
                });
            }else{
                cb(error, stdout, stderr);
            }
        });
    }else if(process.platform == 'win32'){
        var queryCmd = 'netstat -nao | findstr ' + port;
        exports.exec(null, queryCmd, function(err, stdout, stderr) {
            if (err) {
                console.error(err);
                return cb();
            }
            if (!stdout) {
                console.error("���");
                return cb();
            }
            var tempArr = stdout.replace(/[\r\n]/g, ",").split(",");
            var temp = tempArr[0];
            if (!temp) {
                console.error("û���б�");
                return cb();
            }
            temp = temp.trim().replace(/\s+/g, ",").split(",");
            var pid = temp[4];

            if (!pid) {
                console.error("��ȡpid����");
                return cb();
            }
            var stopCmd = "taskkill /f  /pid " + pid;
            console.log('taskkill--��' + port + '-->', stopCmd);
            exports.exec(null, stopCmd, function (err, stdout, stderr) {
                if(err) console.error(err);
                cb();
            });
        });
    }else{
        var cmdStr = "lsof -i TCP:" + port + " | grep LISTEN | awk '{print $2}' ";
        child_process.exec(cmdStr, function(error, stdout, stderr){
            var pid=stdout;
            if(pid.length > 0){
                var tempArr = stdout.replace(/[\r\n]/g, ",").split(",");
                console.log("pid:", tempArr[0]);
                var killCmd = "kill -s 9 " + tempArr[0];
                child_process.exec(killCmd, function(error, stdout, stderr){
                    cb(error, stdout, stderr);
                });
            }else{
                cb(error, stdout, stderr);
            }
        });
    }
};