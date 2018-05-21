/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_mid{
    export class Chat extends mo.gui.Dlg{

        label_input;
        label_contentSys;
        scrollerSys:egret.gui.Scroller;
        tab_channel:egret.gui.TabBar;
        tabLastSelectIndex;
        chatType;

        label_laba_left;

        btn_setting;
        btn_laba;
        grp_chat;

        list_chat:egret.gui.List;
        _Item_list_chat;

        isFollowNormal:boolean;
        isUseLaba:boolean;
        isBottom = true;
        isScrollChanged;

        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_chat = ChatItem;
            self.tabLastSelectIndex = 0;
            self.chatType = gc.c_prop.chatTypeKey.user;

            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_IMPOTANT_UPDATE, function(dataList){
                self.onChatImpUpdate(dataList);
            });
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_CHAT_UPDATE, function(dataList){
                self.onChatUpdate(gc.c_prop.chatTypeKey.user, dataList);
            });
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_GUILD_CHAT_UPDATE, function(dataList){
                self.onChatUpdate(gc.c_prop.chatTypeKey.guild, dataList);
            });
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_GUILD_CHANGED, self.guildChanged);
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_MODE_UPDATE, self.modeChanged);
        }

        _data_list_chat():any[] {
            var self = this, filter, sorter;
            return self.chatType == gc.c_prop.chatTypeKey.user? gd.chatCtrl.getAllList() : gd.chatCtrl.getGuildAllList();
        }

        _childrenCreated(){
            super._childrenCreated();

            var exData = gd.userCtrl.get(gc.dsConsts.UserEntity.exData);
            var followNormal = exData[gc.c_prop.userExDataKey.catNoVipChat];
            if(followNormal == undefined){
                followNormal = 1;
            }
            gd.chatCtrl.isFollowNormalUser  = followNormal;
            gd.chatCtrl.isAutoBuyLaba  = exData[gc.c_prop.userExDataKey.autoBuyLittleHorn];

            var self = this;
            (<egret.gui.VerticalLayout>(self.list_chat.dataGroup.layout)).gap = 5;
            process.nextTick(function(){
                self.tab_channel.selectedIndex = 0;
                self._tap_tab_channel();
            });
            var scroller = (<any>(self.list_chat)).scroller;
            scroller.addEventListener(egret.Event.CHANGE, self.onScrollChanged, self)
        }

        _tap_tab_channel(){
            var self = this;
            var selectedIndex = self.tab_channel.selectedIndex;

            if(selectedIndex==0){
                self._switchChannel(gc.c_prop.chatTypeKey.user);
            }
            if(selectedIndex==1){
                if(!gd.guildPersonalCtrl.getGuildId()){
                    process.nextTick(function(){
                        self.tab_channel.selectedIndex = self.tabLastSelectIndex;
                        //切回
                    })
                    return mo.showMsg(gc.id_c_msgCode.noGuild);
                }
                self._switchChannel(gc.c_prop.chatTypeKey.guild);
            }
            self.tabLastSelectIndex = selectedIndex;
        }

        _switchChannel(type){
            var self = this;
            self.chatType = type;
            self.grp_chat.visible = self.chatType == gc.c_prop.chatTypeKey.user? true:false;
            self.onChatUpdate(type, self.chatType == gc.c_prop.chatTypeKey.user? gd.chatCtrl.getAllList() : gd.chatCtrl.getGuildAllList());
            self.onChatImpUpdate(gd.chatCtrl.getImportantList());

            var scroller = (<any>(self.list_chat)).scroller;
            process.nextTick(function() {
                process.nextTick(function () {
                    if (!self.list_chat)return;
                    scroller.throwVertically(scroller.getMaxScrollTop(), 1);
                });
            });
        }

        guildChanged(){
            var self = this;
            if(self.tab_channel.selectedIndex != 0 && !gd.guildPersonalCtrl.getGuildId()){
                mo.showMsg(gc.id_c_msgCode.outofGuild, function(){
                    self.tab_channel.selectedIndex = 0;
                    self._tap_tab_channel();
                });
            }
        }

        modeChanged(){
            var self = this;
            self.refreshList("list_chat");
            var scroller = (<any>(self.list_chat)).scroller;
            process.nextTick(function(){
                if(!self.list_chat)return;
                scroller.throwVertically(scroller.getMaxScrollTop(),1);
            });

        }

        onEnter(){
            super.onEnter();
            this._refreshLabaCount();
            gd.chatCtrl.openWindow();
        }

        onExit(){
            super.onExit();

            gd.chatCtrl.closeWindow();
        }

        onChatImpUpdate(data){
            var self = this;
            self.clearChatImp();
            var allStr = "";
            for(var i=0; i<data.length; ++i){
                var chatStr = gd.chatCtrl.getChatDataStr(data[i]);
                allStr += chatStr+"\n";
            }
            self.label_contentSys.text = allStr;
            process.nextTick(function(){
                if(!self.scrollerSys)return;
                self.scrollerSys.throwVertically(self.scrollerSys.getMaxScrollTop(),1);
            });
        }

        onChatUpdate(type, data){
            var self = this;
            if(self.chatType != type) return;
            var scroller = (<any>(self.list_chat)).scroller;
            var curPos = scroller.viewport.verticalScrollPosition;
            self.refreshList("list_chat");
            if(self.isScrollChanged){
                self.isBottom = scroller.viewport.verticalScrollPosition == scroller.viewport.contentHeight-scroller.viewport.height;
                self.isScrollChanged = false;
            }
            process.nextTick(function(){
                if(!self.list_chat)return;
                if(self.isBottom){
                    scroller.throwVertically(scroller.getMaxScrollTop(),1);
                }else{
                    scroller.throwVertically(curPos,1);
                }
            });
        }

        onScrollChanged(){
            var self = this;
            var scroller = (<any>(self.list_chat)).scroller;
            self.isScrollChanged = true;
        }

        clearChatImp(){
            var self = this;
            self.label_contentSys.text = "";
        }

        _tap_btn_send(){
            var self = this;
            gd.chatCtrl.sendData(mo.trans4UBB(self.label_input.text), self.chatType, false, function(){
                self.label_input.text = "";
                self._refreshLabaCount();
            },self);
        }

        _tap_btn_laba(){
            var self = this;
            if(self.chatType != gc.c_prop.chatTypeKey.user ){
                return mo.showMsg("行会频道不可以使用喇叭");
            }
            var labaCount = gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.littleHorn);
            if(labaCount < 1) {
                if(gd.chatCtrl.isAutoBuyLaba == 1){
                    self._sendLabaMsg(mo.trans4UBB(self.label_input.text));
                }else{
                    return mo.showMsg(gc.id_c_msgCode.noticeAutoBuyLittleHorn, function(){
                        if(gd.userCtrl.getVip() < 2){
                            return mo.showMsg(gc.id_c_msgCode.noticeAutoBuyLittleHornVipNeed);
                        }else{
                            gd.chatCtrl.isAutoBuyLaba = 1;
                            gd.userCtrl.updateSetting(gd.chatCtrl.isFollowNormalUser,gd.chatCtrl.isAutoBuyLaba,function(){
                                self._sendLabaMsg(mo.trans4UBB(self.label_input.text));
                            },self);
                        }
                    });
                }
            }else{
                self._sendLabaMsg(mo.trans4UBB(self.label_input.text));
            }
        }

        _sendLabaMsg(txt){
            var self = this;
            gd.chatCtrl.sendData(mo.trans4UBB(self.label_input.text), self.chatType, true, function(){
                self.label_input.text = "";
                self._refreshLabaCount();
            },self);
        }

        _refreshLabaCount(){
            var self = this;
            self.label_laba_left.text = "喇叭剩余:"+ gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.littleHorn);
        }

        _tap_btn_setting(){
            ChatSetting.create().show();
        }
    }
}