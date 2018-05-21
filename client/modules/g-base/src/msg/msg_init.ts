/**
 * Created by SmallAiTT on 2015/5/4.
 */
module g_msg{
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(g_msg, "g-msg");
    logger.setLvl("g-msg", 4);

    export var msgType = {
        tip:10, //10	屏幕中央显示字体向上漂浮
        alert:13, //13	1个按钮提示框	确定
        confirm:14,  //14	2个按钮提示框	取消、确定
        confirmRecharge:15, //15	2个按钮提示框	取消、充值	跳转充值界面
        confirmPurchase:16, //16	2个按钮提示框	取消、购买	购买技能点时弹出的消息
        confirmUse:17, //17	2个按钮提示框	取消、使用	弹出炼金术界面
        confirmUpgrade:18,  //19	2个按钮提示框+倒计时（秒)	取消、确定
        confirmCountDown:19,  //19	2个按钮提示框+倒计时（秒)	取消、确定
        retryToConnect:20,  //20	1个按钮提示框	断开连接时点击重连
        msgItem:21,  //21 物品消息，确定取消。这个类型传递的参数比较不一样，第一个一定是itemId，后面才是消息的占位符信息
        alertLogout:22, //13	1个按钮提示框	确定并退出
    };

    var _initReceiver = function(){
        //pomelo.on(gc.c_prop.receiverKey.onTaskChanged1, function (result) {//TaskEntity
        //    var taskEntity = result[gc.RESP_VALUE];
        //    mo.debug("通知任务更新：gc.c_prop.receiverKey.onTaskChanged--->", taskEntity);
        //    gc.taskCtrl.init(taskEntity);
        //});
        //
        ////神秘商店出现的通知
        //pomelo.on(gc.c_prop.receiverKey.onSecretShopChanged, function (result) {//ShopEntity
        //    var shopAppearData = result[gc.RESP_VALUE];
        //    var shopEntity = shopAppearData[gc.dsConsts.SecretShopAppearData.shopEntity];
        //    var shopFlag = shopAppearData[gc.dsConsts.SecretShopAppearData.shopFlag];//1:神秘1、2：神秘2、3：全部
        //    gc.shopDataCtrl.reset(shopEntity);
        //    gc.shopDataCtrl.updateTraderStatus();
        //    gc.shopDataCtrl.pushNotify(gc.ShopDataCtrl.ON_SECRET_SHOP_APPEAR, shopFlag);
        //});
    };


    var setMsgCode = function(){
        var data = res["_jsData"][gc.cfg_c_msgCode];
        mo.msgMgr.translate = function(msgData){
            return {
                text : msgData[gc.c_msgCode_text],
                type : msgData[gc.c_msgCode_region0],
                onTop : msgData[gc.c_msgCode_onTop],
                time : msgData[gc.c_msgCode_time]
            };
        };
        mo.setMsgData(data);
        mo.defaultMsgType = msgType.tip;
        var okText = '确定', cancelText = '取消';
        mo.registerMsgDlg(msgType.alert, MsgAlert, {
            btn_center : { text : okText, callEnd:true }
        });
        mo.registerMsgWaitingDlg(msgType.alert);
        mo.registerMsgDlg(msgType.alertLogout, MsgAlert, {
            btn_center : {
                text : okText,
                listener: function(){
                    mo_channel.getCurChannel().logout(function(){});
                },
                callEnd:true }
        });
        mo.registerMsgWaitingDlg(msgType.alertLogout);

        mo.registerMsgDlg(msgType.retryToConnect, MsgAlert, {
            btn_center : { text : okText, callEnd:true }
        });
        mo.registerMsgWaitingDlg(msgType.retryToConnect);

        mo.registerMsgDlg(msgType.confirm, MsgAlert, {
            btn_left : { text : okText, callEnd:true },
            btn_right : {text : cancelText, event:'cancel'}
        });
        mo.registerMsgDlg(msgType.confirmRecharge, MsgAlert, {
            btn_left : { text : '充值', moduleToPush:g_consts.moduleId.recharge},
            btn_right : {text : cancelText}
        });
        mo.registerMsgDlg(msgType.confirmPurchase, MsgAlert, {
            btn_left : { text : '购买', callEnd:true },
            btn_right : {text : cancelText}
        });
        //mo.registerMsgDlg(msgType.confirmUse, MsgAlert, {
        //    btn_left : { text : '使用', moduleToPush:g_consts.moduleId.alchemy},
        //    btn_right : {text : cancelText}
        //});
        mo.registerMsgDlg(msgType.confirmUpgrade, MsgAlert, {
            btn_center : { text : okText, moduleToPush:g_consts.moduleId.vip}
        });
        mo.registerMsgDlg(msgType.confirmCountDown, MsgAlert);
        mo.registerMsgDlg(msgType.tip, MsgTip);
        mo.registerMsgDlg(msgType.msgItem, MsgItem, {
            btn_cancel : {},
            btn_ok : {callEnd:true}
        });

        mo.registerMsgDlg(999, GetItemTips, {});
        mo.registerMsgDlg(998, g_base.Notice, {});
        mo.registerMsgDlg(997, g_base.OfflineGain, {});
        mo.registerMsgDlg(996, g_base.FirstEnterGame, {});

        //// 出售杂物的msg弹框设置
        //mo.registerMsgDlg(22, MsgSundry, {
        //    moneyTxt : '出售可获得',
        //    onInfo : function(msgSundry:MsgSundry){
        //        var items = msgSundry.items || {};
        //        var money = 0;
        //        var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
        //        for (var itemId in items) {
        //            money += t_item[itemId][gc.t_item_sellPrice] * items[itemId];
        //        }
        //        msgSundry.money = money;
        //    },
        //    btn_left : {},
        //    btn_right : {
        //        notToClose : true, // 这里不主动关闭
        //        listener : function(msgSundry:MsgSundry){
        //            // 出售物品
        //            gc.userDataCtrl.saleSundries(function () {
        //                msgSundry.close();
        //            }, null);
        //        }
        //    }
        //});
        //// 一键装备的msg弹框设置
        //mo.registerMsgDlg(23, MsgSundry, {
        //    moneyTxt : '需要花费',
        //    onInfo : function(msgSundry:MsgSundry){
        //        var items = msgSundry.items || {};
        //        var money = 0;
        //        var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
        //        for (var itemId in items) {
        //            money += t_item[itemId][gc.t_item_sellPrice] * items[itemId];
        //        }
        //        msgSundry.money = money;
        //    },
        //    btn_left : {},
        //    btn_right : {callEnd:true}
        //});
        //mo.registerMsgDlg(24,MsgShopAppear);



        mo.registerValidModuleFunc(function(moduleCfgItem:any, moduleParam:any){
            var moduleId = moduleCfgItem.id;
            var subModuleId = (moduleParam ||{}).subModuleId;
            var curModule = mo.moduleMgr.curModule;

            if(curModule && curModule.name == moduleId && subModuleId != null){
                var subModuleIds = g_consts.subModuleMap[moduleId];
                if(subModuleIds.indexOf(subModuleId) >=0){
                    var subModules = curModule.subModules;
                    for(var i = 0, li = subModules.length; i<li; i++){
                        if(subModules[i] && subModules[i].target){
                            subModules[i].target.close();
                        }
                    }
                    var target = curModule.target;
                    var dlgGroup = target.getTray('dlg');
                    while(dlgGroup.numElements > 0){
                        dlgGroup.getElementAt(0).close();
                    }
                    //打开新模块
                    process.nextTick(function(){
                        if(curModule.target.openSubModule) curModule.target.openSubModule(subModuleId);
                    });
                    return false;
                }
            }

            var MI = g_consts.moduleId;
            if(moduleId == MI.index
                || moduleId == MI.fight
                || moduleId == MI.home
                || moduleId == MI.role
                || moduleId == MI.forge
                || moduleId == MI.shop
            ) return true;

            var sysId = moduleCfgItem.sysId;
            if(sysId == null) return true;// 没有配置系统
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var openInfo = c_open[sysId];
            if(!openInfo) {
                debug(mo.STR.format("未在【c_open】表中配置模块【%s】的数据，请检查！", moduleId));
                return false;
            }
            var lvlRequired = openInfo[gc.c_open_lvlRequired];
            if(lvlRequired == -1) {
                mo.showMsg(gc.id_c_msgCode.noOpenNow);
                return false;
            }
            if(lvlRequired > gd.userCtrl.getLvl()){
                mo.showMsg(gc.id_c_msgCode.noRoleLvl, lvlRequired);
                return false;
            }
            return true;
        });
        mo.registerModuleNotFoundFunc(function(moduleName:string){
            mo.showMsg(gc.id_c_msgCode.noOpenNow);
        });
    };

    var _init = function(cb){
        setMsgCode();
        //
        //dataEmitter.on(DataEmitter.ON_USER_ITEM_INFO, _showUserItemInfo);
        //dataEmitter.on(DataEmitter.ON_SHOW_PROP_TIPS, _showPropTips);

        //初始化后端主动通知的接收器
        _initReceiver();
        cb();
    };

    egret.Boot.onceAsync(egret.Boot.AFTER_CONFIG, _init);
}