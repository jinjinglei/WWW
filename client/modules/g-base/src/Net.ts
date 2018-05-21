
module gc{
    export var Keys = {
        curServerId: "curServerId",
        accountName: "AccountName",
        password: "Password",
        logined: "Logined",
        simulateFight: "SimulateFight",
        key_host:"key_host",
        key_port:"key_port",
        msgCode: "m",
        msgArgs: "a",
        msgValue: "v",
        token: "token",
        rankPkTime: "rpt"
    };

    /** 服务端返回的消息码key值 */
    export var RESP_MSG_CODE = "m";
    /** 服务端返回的消息参数key值 */
    export var RESP_MSG_ARGS = "a";
    /** 服务端返回的数据key值 */
    export var RESP_VALUE = "v";

    export class Net extends mo.Net{

        //@override
        _initProp(){
            super._initProp();
            var self = this;

            self.respKey_msgCode = gc.RESP_MSG_CODE;
            self.respKey_msgArgs = gc.RESP_MSG_ARGS;
            self.respKey_value = gc.RESP_VALUE;

            self.httpKey_route = "r";
            self.httpKey_args = "a";
            self.httpKey_sessionId = "s";
            self.httpKey_handler = "h";

            self.key_host = gc.Keys.key_host;
            self.key_port = gc.Keys.key_port;
            self.loginRoute = gc.iface.h_account_login;
            self.loginNameKey = gc.iface.h_account_login_args.name;
            self.loginPwdKey = gc.iface.h_account_login_args.pwd;
            self.loginNameKeyOfLocal = gc.Keys.accountName;
            self.loginPwdKeyOfLocal = gc.Keys.password;

            self.httpConnectRoute = gc.iface.c_net_connect;
            self.httpDisconnectRoute = gc.iface.c_net_disconnect;
        }

        //同步账户
        asyncAccount(cb, toPlayWaiting:boolean = true, toResetAsyncFlag:boolean = true){
            var self = this;
            if(toResetAsyncFlag) self._hasAsyncAccount = false;
            if(toPlayWaiting) mo.playWaiting();

            logger.net.info("开始同步账号信息!");
            var onSuccess = function(user){
                if(toPlayWaiting) mo.stopWaiting();
                self._reconnecting = false;
                self._hasAsyncAccount = true;
                logger.net.info("账号同步完毕！");
                cb(user);
            };

            //var channelInfo = channelCfg.getCurChannel();
            //mo_channel.enterGame(onSuccess, self);
        }
    }

    export var net:Net = new gc.Net();

    mo.registerNet({
        //网络处理器
        net : gc.net,
        //等待视图
        waitingView : g_base.BaseJuHua.getInstance(),
        //重连视图
        reccnView : {
            show : function(onOk){
               // mo.showMsg(gc.id_c_msgCode.connectFail, onOk);
            }
        },
        //被踢出视图
        kickView : {
            show : function(onOk){
               /* mo.showMsg(gc.id_c_msgCode.outGame, function(){
                    if(onOk) onOk();
                }, null);*/
            }
        },
        //重连失败
        recnnFailed : function(){
            console.error("重连失败！");
            //uw.backToIndex();
        },
        //网络异常
        netErrorView : {
            show : function(onOk){
                //console.error("网络异常");
                mo.showMsg(gc.id_c_msgCode.checkYourNet,function(){
                    if(onOk) onOk();
                    //todo 临时h5刷新
                    mo_channel.getCurChannel().logout(function(){});
                });
            }
        }
    });

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        var net = gc.net, project = egret.project;
        net.httpHost = project.httpHost;
        net.httpPort = project.httpPort;
    });
}
