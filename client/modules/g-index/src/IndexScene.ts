/**
 * Created by SmallAiTT on 2015/7/15.
 */
module egret.project{
    /** 是否开启模拟战斗 */
    export var fightSimulateEnabled:boolean = true;
    project.registerValueHandler(function(data){
        project.setValue(data, "fightSimulateEnabled", true);
    });
}

module g_index {
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(g_index, "g-index");
    logger.setLvl("g-index", 4);

    export class IndexScene extends mo.gui.UIScene{

        show(){
            var self = this;
            super.show();
            // 显示背景
            IndexBg.create().show();
            //渠道已准备好
            var ch = mo_channel.getCurChannel();
            ch.onChannelReay(function(){
                self._afterIndexBg();
            }, self);
        }

        _afterIndexBg(){
            var self = this;
            var loginCtrl = g_base.loginCtrl;
            gc.initData(function(){
                loginCtrl.on(g_base.LoginCtrl.ON_LOGIN_SUCC, self.on_login_succ);
                loginCtrl.on(g_base.LoginCtrl.ON_LOGIN_FAIL, self.on_login_fail);
                loginCtrl.loginChannel();

            }, self);
        }

        onExit(){
            var self = this;
            super.onExit();
            g_base.loginCtrl.un(g_base.LoginCtrl.ON_LOGIN_SUCC, self.on_login_succ);
            g_base.loginCtrl.un(g_base.LoginCtrl.ON_LOGIN_FAIL, self.on_login_fail);
        }

        on_login_succ(){
            var self = this;
            gd.serverInfoCtrl.getInfo(function(){
                //gd.NoticeCtrl.getNewOne(function(data){
                IndexLayer.create().show();
                //if(mo.getLocalStorageItem("noticeTime")!=data[gc.dsConsts.NoticeEntity.updateTime]
                //    ||mo.getLocalStorageItem("noticeCloseCount")<5){
                //    if(mo.getLocalStorageItem("noticeTime")!=data[gc.dsConsts.NoticeEntity.updateTime]){
                //        mo.setLocalStorageItem("noticeCloseCount", 0);
                //        mo.setLocalStorageItem("noticeTime", data[gc.dsConsts.NoticeEntity.updateTime]);
                //    }
                //    g_base.Notice.create().setData(data).show();
                //}
                //},self);

                // 关闭平台的加载进度
                mo_channel.getCurChannel().loadingProgress(100);
            }, self);
        }
        on_login_fail() {
            var self = this;
            //重试
            IndexRetry.create().show();
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = IndexScene;
        mo.moduleMgr.registerModule(moduleCfgItem);
        // 设置模块的preAsync方法
        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            //uw.ServerDataCtrl.initByServer(cb);
            cb();
        });
    });
}
