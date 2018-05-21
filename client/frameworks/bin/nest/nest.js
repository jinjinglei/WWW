//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
/**
 * 登录功能
 *
 * 逻辑：
 * 1.在游戏中展示一张登录背景界面
 * 2.调用 checkLogin 函数判断是否已经登录过，如果登录过，进入步骤5，否则进入步骤3
 * 3.调用 isSupport 函数判断支持的登录类型，根据登录类型显示对应的登录图标
 * 4.用户点击登录图标后，调用 login 函数打开登录面板进行登录
 * 5.登录成功后，隐藏登录按钮，显示切换账号、选择服务器、进入游戏三个按钮（可缩减），或者直接进入步骤7进入游戏
 * 6.如果用户点击了切换账号，应回到步骤3，如果用户点击了进入游戏按钮，应该进入步骤7
 * 7.退出登录界面，进入游戏
 *
 *
 * API变化：
 * 1. nest.user.init 接口被废弃，改用 egret.user.login
 */
var nest;
(function (nest) {
    var user;
    (function (user) {
        /**
         * 检测是否已登录
         * @param loginInfo 请传递一个null
         * @param callback
         * @callback-param  @see nest.user.LoginCallbackInfo
         */
        function checkLogin(loginInfo, callback) {
            var version = egret_native.getOption("egret.runtime.nest");
            if (version > 1) {
                var data = { module: "user", action: "checkLogin", param: loginInfo };
                nest.callRuntime(data, callback);
            }
            else {
                var result = { token: null, status: "-1" };
                callback(result);
            }
        }
        user.checkLogin = checkLogin;
        /**
         * 调用渠道登录接口
         * @param loginInfo
         * @param callback
         * @callback-param  @see nest.user.LoginCallbackInfo
         */
        function login(loginInfo, callback) {
            var data = { module: "user", action: "login", param: loginInfo };
            nest.callRuntime(data, callback);
        }
        user.login = login;
        /**
         * 检测支持何种登录方式
         * @param callback
         * @callback-param  @see nest.user.LoginCallbackInfo
         */
        function isSupport(callback) {
            var data = { module: "user", action: "isSupport" };
            nest.callRuntime(data, callback);
        }
        user.isSupport = isSupport;
    })(user = nest.user || (nest.user = {}));
})(nest || (nest = {}));
var nest;
(function (nest) {
    var iap;
    (function (iap) {
        /**
         * 支付
         * @param orderInfo
         * @param callback
         */
        function pay(orderInfo, callback) {
            var data = { module: "iap", action: "pay", "param": orderInfo };
            nest.callRuntime(data, callback);
        }
        iap.pay = pay;
    })(iap = nest.iap || (nest.iap = {}));
})(nest || (nest = {}));
var nest;
(function (nest) {
    var share;
    (function (_share) {
        /**
         * 是否支持分享
         * @param callback
         * @callback-param {status:0, share:0}  share 1支持 0不支持
         */
        function isSupport(callback) {
            var data = { module: "share", action: "isSupport" };
            nest.callRuntime(data, callback);
        }
        _share.isSupport = isSupport;
        /**
         * 分享
         * @param shareInfo
         * @param callback
         * @callback-param result 0 表示分享成功，-1表示用户取消
         */
        function share(shareInfo, callback) {
            var data = { module: "share", action: "share", "param": shareInfo };
            nest.callRuntime(data, callback);
        }
        _share.share = share;
    })(share = nest.share || (nest.share = {}));
})(nest || (nest = {}));
var nest;
(function (nest) {
    var social;
    (function (social) {
        function isSupport(callback) {
            var data = { module: "social", action: "isSupport" };
            nest.callRuntime(data, callback);
        }
        social.isSupport = isSupport;
        function getFriends(socialInfo, callback) {
            var data = { module: "social", action: "getFriends" };
            nest.callRuntime(data, callback);
        }
        social.getFriends = getFriends;
        function openBBS(socialInfo, callback) {
            var data = { module: "social", action: "openBBS" };
            nest.callRuntime(data, callback);
        }
        social.openBBS = openBBS;
    })(social = nest.social || (nest.social = {}));
})(nest || (nest = {}));
var nest;
(function (nest) {
    var app;
    (function (app) {
        /**
         * 是否支持特定功能
         * @param callback
         * @callback-param  { status:"0" , attention :"1" , sendToDesktop : "1"} attention|sendToDesktop 1支持 0不支持
         */
        function isSupport(callback) {
            var data = { module: "app", action: "isSupport" };
            nest.callRuntime(data, callback);
        }
        app.isSupport = isSupport;
        /**
         * 关注
         * @param appInfo
         * @param callback
         */
        function attention(appInfo, callback) {
            var data = { module: "app", action: "attention" };
            nest.callRuntime(data, callback);
        }
        app.attention = attention;
        /**
         * 初始化浏览器快捷登陆需要的信息（目前只有猎豹可用，其他为空实现）
         * @param param
         */
        function initDesktop(param) {
        }
        app.initDesktop = initDesktop;
        /**
         * 发送到桌面
         * @param appInfo
         * @param callback
         * @param callback-param result 0表示添加桌面成功，-1表示添加失败
         */
        function sendToDesktop(appInfo, callback) {
            var data = { module: "app", action: "sendToDesktop" };
            nest.callRuntime(data, callback);
        }
        app.sendToDesktop = sendToDesktop;
    })(app = nest.app || (nest.app = {}));
})(nest || (nest = {}));
var nest;
(function (nest) {
    var externalArr = [];
    function callRuntime(data, callback) {
        externalArr.push({ "data": data, "callback": callback });
        _getData();
    }
    nest.callRuntime = callRuntime;
    var isRunning = false;
    function _getData() {
        if (externalArr.length) {
            if (isRunning) {
                return;
            }
            isRunning = true;
            var info = externalArr.shift();
            var tag = "nest";
            egret.ExternalInterface.addCallback(tag, function (data) {
                console.log(data);
                var obj = JSON.parse(data);
                info["callback"](obj.data);
                isRunning = false;
                _getData();
            });
            egret.ExternalInterface.call(tag, JSON.stringify(info["data"]));
        }
    }
})(nest || (nest = {}));

//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

if (!("egret_native" in this)) {

    nest.user.checkLogin = function (loginInfo, callback) {
        EgretH5Sdk.checkLogin(callback, this);
    }

    nest.user.login = function (loginInfo, callback) {
        EgretH5Sdk.login(callback, this);

    }
}
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var nest;
(function (nest) {
    var h5;
    (function (h5) {
        h5.uid = undefined;
        h5.appid = parseInt(egret.getOption("appId")) || 86;
    })(h5 = nest.h5 || (nest.h5 = {}));
})(nest || (nest = {}));
if (egret.MainContext.runtimeType == egret.MainContext.RUNTIME_HTML5) {
    nest.user.isSupport = function (callback) {
        var loginCallbackInfo = {
            "status": 0,
            "result": 0,
            "loginType": [],
            "token": undefined
        };
        callback.call(null, loginCallbackInfo);
    };
    nest.user.checkLogin = function (loginInfo, callback) {
        var egretH5SdkCallback = function (data) {
            nest.h5.uid = data.id;
            var status = data.status;
            if (nest.h5.uid) {
                status = 0;
            }
            var loginCallbackInfo = {
                "status": status,
                "result": status,
                "loginType": undefined,
                "token": data.token
            };
            callback.call(null, loginCallbackInfo);
        };
        EgretH5Sdk.checkLogin(egretH5SdkCallback, null);
    };
    nest.user.login = function (loginInfo, callback) {
        var egretH5SdkCallback = function (data) {
            nest.h5.uid = data.id;
            var status = data.status;
            if (nest.h5.uid) {
                status = 0;
            }
            var loginCallbackInfo = {
                "status": status,
                "result": status,
                "loginType": undefined,
                "token": data.token
            };
            callback.call(null, loginCallbackInfo);
        };
        EgretH5Sdk.login(egretH5SdkCallback, null, loginInfo.loginType);
    };
    nest.iap.pay = function (orderInfo, callback) {
        if (nest.h5.uid) {
            orderInfo["appId"] = nest.h5.appid;
            orderInfo["uId"] = nest.h5.uid;
            EgretH5Sdk.pay(orderInfo, callback, null);
        }
    };
    nest.share.isSupport = function (callback) {
        var egretH5SdkCallback = function (data) {
            var status = data.status;
            var loginCallbackInfo = { "share": status };
            callback.call(null, loginCallbackInfo);
        };
        EgretH5Sdk.isOpenShare(nest.h5.appid, nest.h5.uid, egretH5SdkCallback, null);
    };
    nest.share.share = function (shareInfo, callback) {
        var egretH5SdkCallback = function (data) {
            var status = data.status;
            if (status == 0) {
                status = -1;
            }
            else if (status == 1) {
                status = 0;
            }
            var loginCallbackInfo = { "status": status, "result": status };
            callback.call(null, loginCallbackInfo);
        };
        EgretH5Sdk.share(nest.h5.appid, nest.h5.uid, shareInfo.description, egretH5SdkCallback, null);
    };
    nest.social.isSupport = function (callback) {
        //todo
        callback.call(null, { "result": 0, "getFriends": 0, "openBBS": 0 });
    };
    nest.social.getFriends = function (data, callback) {
        //todo
    };
    nest.social.openBBS = function (data, callback) {
        //todo
    };
    nest.app.isSupport = function (callback) {
        var egretH5SdkCallback = function (data) {
            var status = data.status;
            var loginCallbackInfo = { "attention": status };
            callback.call(null, loginCallbackInfo);
        };
        EgretH5Sdk.isOpenAttention(nest.h5.appid, nest.h5.uid, egretH5SdkCallback, null);
    };
    nest.app.attention = function (appInfo, callback) {
        EgretH5Sdk.attention(nest.h5.appid, nest.h5.uid);
        callback.call(null, { "result": 0 });
    };
    nest.app.sendToDesktop = function (appInfo, callback) {
        callback.call(null, { "result": -1 });
    };
}

