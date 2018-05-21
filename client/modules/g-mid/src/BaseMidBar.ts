/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_mid{
    export var log;
    export var debug;
    export var info;
    export var warn;
    export var error;

    logger.initLogger(g_mid, "g-mid");
    logger.setLvl("g-mid", 4);

    export var showChatTime:number = -60*1000;
    export var lastChatStr:string = "";
    export var lastChatId:number = -1;

    export var showLabaTime:number = -60*1000;
    export var lastLabaId:number = -1;
    export var lastLabaStr:string = "";

    export class BaseMidBar extends mo.gui.MenuLayer{
        moduleParam:IModuleParam.IModuleParam;

        chatDelayId=-1;
        labaDelayId=-2;

        grp_all;
        grp_chat;
        grp_laba;
        label_chatContent;
        label_chatContent_laba;

        canShowChat;

        normalChatShowTime:number = 30 * 1000;

        _initProp(){
            super._initProp();
            var self = this;
            // 显示即时公告
            self.registerClassByKey(gd.HoodinnCtlr, gd.HoodinnCtlr.ON_ANNOUNCE_UPDATE, self.onAnnounceUpdate);
            // 显示跑马灯
            self.registerClassByKey(gd.HoodinnCtlr, gd.HoodinnCtlr.ON_SYSNOTICE_UPDATE, self.onSysNoticeUpdate);
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_CHAT_UPDATE, self.onChatUpdate);
        }

        _hide(index){
            var self = this;
            if(index == 0){
                if(self.grp_chat){
                    //self.grp_all.removeElement(self.grp_chat);
                    self.grp_chat.visible = false;
                }
            }else if(index == 1){
                if(self.grp_laba) {
                    //self.grp_all.removeElement(self.grp_laba);
                    self.grp_laba.visible = false;
                }
            }
        }

        _show(index){
            var self = this;
            if(index == 0){
                if(self.grp_chat){
                    //self.grp_all.addElement(self.grp_chat);
                    self.grp_chat.visible = true;
                }
            }else if(index == 1){
                if(self.grp_laba) {
                    //self.grp_all.addElement(self.grp_laba);
                    self.grp_laba.visible = true;
                }
            }
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            if(!self.canShowChat)return;
            if(lastChatStr && egret.getTimer()-showChatTime < self.normalChatShowTime){
                self._showMsgAndDismiss(0,lastChatStr,self.normalChatShowTime - (egret.getTimer()-showChatTime));
            }else if(lastLabaStr && egret.getTimer()-showLabaTime < self.normalChatShowTime){
                self._showMsgAndDismiss(1,lastLabaStr,self.normalChatShowTime - (egret.getTimer()-showLabaTime));
            }
        }

        _tap_ico_chat(){
            var self = this;
            Chat.create().show();
        }

        _tap_ico_laba(){
            var self = this;
            Chat.create().show();
        }

        onChatUpdate(data){
            var self = this;
            //容错处理
            if(data.length==0)
                return;

            //判断消息类型
            var newChat = data[data.length-1];
            var type = newChat[gc.dsConsts.ChatData.type];
            if(type != gc.c_prop.chatTypeKey.user){
                self._showNormalMsg(newChat);
            }else{
                if(newChat[gc.dsConsts.ChatData.userArgs][6] == 0){
                    //非喇叭
                    self._showNormalMsg(newChat);
                }else{
                    //喇叭消息
                    self._showLabaMsg(newChat);
                }
            }
        }

        _showNormalMsg(data){
            var self = this;
            //判断是否已经显示过
            var chatId = data[gc.dsConsts.ChatData.uniqueId];
            if(lastChatId == chatId)return;
            lastChatId = chatId;
            lastChatStr = gd.chatCtrl.getChatDataStr(data);
            lastChatStr = lastChatStr.replace("[/br]", "");
            self._showMsgAndDismiss(0,lastChatStr,self.normalChatShowTime);
        }

        _showLabaMsg(data){
            var self = this;
            //判断是否已经显示过
            var chatId = data[gc.dsConsts.ChatData.uniqueId];
            if(lastLabaId == chatId)return;
            lastLabaId = chatId;
            lastLabaStr = gd.chatCtrl.getChatDataStr(data);
            lastLabaStr = lastLabaStr.replace("[/br]", "");
            self._showMsgAndDismiss(1,lastLabaStr,self.normalChatShowTime);
        }

        _showMsgAndDismiss(type,msg,time){
            var self = this;
            if(type == 0){
                //显示Chat条
                self.grp_all.visible = self.canShowChat && true;
                self._show(0);
                //显示普通消息并在固定时间后清除.
                self.label_chatContent.text = msg;
                showChatTime = egret.getTimer();
                egret.clearTimeout(self.chatDelayId);
                self.chatDelayId = egret.setTimeout(function(){
                    self._hide(0);
                    showChatTime = 0;
                },self, time);
            }else{
                //显示Laba条
                self.grp_all.visible = self.canShowChat && true;
                self._show(1);
                //显示喇叭消息并在固定时间后清除.
                self.label_chatContent_laba.text = msg;
                showLabaTime = egret.getTimer();
                egret.clearTimeout(self.labaDelayId);
                self.labaDelayId = egret.setTimeout(function(){
                    self._hide(1);
                    showLabaTime = 0;
                },self, time);
            }
        }

        /*
        onNoticeUpdate(data) {
            if (g_base.baseNotice==null) {
                g_base.baseNotice=g_base.BaseNotice.create().setData(data).show();
            } else {
                g_base.baseNotice.setData(data);
            }
        }
        */

        onAnnounceUpdate(data) {
            if (g_base.baseShowAnnounce == null)
                g_base.baseShowAnnounce = g_base.BaseShowAnnounce.create().setData(data).show();
        }

        setChatVisible(value){
            var self = this;
            self.canShowChat = value;
            if(!self.canShowChat){
                self.grp_all.visible = false;
            }
        }

        onSysNoticeUpdate(data) {
            if (g_base.BaseSysNotice.instance == null) {
                g_base.BaseSysNotice.instance = g_base.BaseSysNotice.create().setData(data).show();
            } else {
                g_base.BaseSysNotice.instance.setData(data);
            }
        }
    }
}
