/**
 * Created by lihex on 11/3/15.
 */


//var version = "3.5.34-test";
var version = "10.8.4";

//
////----------本地开发服--------------
//var httpHost = "192.168.1.199";
//var httpPort = "5005";
//var channelId = 99999;
//var singleJs = false;
//var rmResource = false;
//var devMode = true;
////---------------------------------
//
////----------远程开发服--------------
//var httpHost = "112.124.106.143";
//var httpPort = "5005";
//var channelId = 99999;
//var singleJs = false;
//var rmResource = false;
//var devMode = true;
////---------------------------------

//----------小伙伴测试服--------------
var httpHost = "api.dev.chuanqi.hgame.com";
var httpPort = "24001";
var channelId = 10005;
var singleJs = true;
var rmResource = false;
var devMode = false;
//---------------------------------

////----------小伙伴正式服--------------
//var httpHost = "api.chuanqi.hgame.com";
//var httpPort = "24001";
//var channelId = 10005;
//var singleJs = true;
//var rmResource = false;
//var devMode = false;
////---------------------------------
//
//////----------小伙伴玩吧正式服-----------
//var httpHost = "api.cq_wb.hgame.com";
//var httpPort = "34001";
//var channelId = 10005;
//var singleJs = true;
//var rmResource = false;
//var devMode = false;
//////---------------------------------
//
exports.version = version;
exports.channelId = channelId;
exports.singleJs = singleJs;
exports.httpHost = httpHost;
exports.httpPort = httpPort;
exports.rmResource = rmResource;
exports.devMode = devMode;
//----------配置区域--------------
