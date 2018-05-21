/**
 * Created by Administrator on 2015/11/2.
 */
var g_mid;
(function (g_mid) {
    var BindPhoneSucc = (function (_super) {
        __extends(BindPhoneSucc, _super);
        function BindPhoneSucc() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BindPhoneSucc,p=c.prototype;
        p._tap_btn_ok = function () {
            this.close();
        };
        return BindPhoneSucc;
    })(mo.gui.Dlg);
    g_mid.BindPhoneSucc = BindPhoneSucc;
    egret.registerClass(BindPhoneSucc,"g_mid.BindPhoneSucc");
})(g_mid || (g_mid = {}));

/**
 * Created by Administrator on 2015/11/2.
 */
var g_mid;
(function (g_mid) {
    var BindPhone = (function (_super) {
        __extends(BindPhone, _super);
        function BindPhone() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BindPhone,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p._tap_btn_goBind = function () {
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.bindMobile(function (isSucc) {
                if (isSucc) {
                    gd.userCtrl.getBindPhoneReward(function () {
                        mo.showMsg(gc.id_c_msgCode.rewardMail);
                    }, self);
                    self.close();
                }
            }, self);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.otherReward);
            var str = gameCfg[1];
            var itemStrs = str.split(",");
            var items = [];
            for (var i = 0; i < itemStrs.length; ++i) {
                var it = itemStrs[i].split(':');
                items.push({ itemId: it[0], count: it[1] });
            }
            uiHelper.setItemsGrp(self.grp_items, items);
        };
        return BindPhone;
    })(mo.gui.Dlg);
    g_mid.BindPhone = BindPhone;
    egret.registerClass(BindPhone,"g_mid.BindPhone");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = BindPhone;
        moduleCfgItem.fullScr = true;
        moduleCfgItem.notOwnRes = true;
        moduleCfgItem.onValid(function () {
            var ch = mo_channel.getCurChannel();
            //领过奖了就不弹了
            return (ch.__class.CHANNEL_ID == 10005) && (!gd.userCtrl.isGetBindPhoneReward());
        });
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            var ch = mo_channel.getCurChannel();
            ch.isBindMobile(function (isOpen, isBind) {
                if (!isOpen)
                    return cb("noNeedOpen");
                if (isBind && !gd.userCtrl.isGetBindPhoneReward()) {
                    gd.userCtrl.getBindPhoneReward(function () { }, this);
                }
                cb((isBind) ? 'noNeedOpen' : null); //绑定过且已领奖了就不弹了
            }, this);
        });
    });
})(g_mid || (g_mid = {}));

/**
 * Created by Administrator on 2015/11/3.
 */
var g_mid;
(function (g_mid) {
    var SaveGame = (function (_super) {
        __extends(SaveGame, _super);
        function SaveGame() {
            _super.apply(this, arguments);
        }
        var d = __define,c=SaveGame,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p.showAndType = function (type, position) {
            var self = this;
            self.showType = type;
            self.position = position;
            _super.prototype.show.call(this);
            return self;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            if (self.showType == 1) {
                self.img_bg.source = "und_share";
                self.btn_save.icon = "btn_txt_g_sharegame";
            }
            else if (self.showType == 2) {
                self.img_bg.source = "und_follow";
                self.btn_save.icon = "btn_txt_g_followgame";
            }
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.getDesktopInfo(self.position, function (suc, data) {
                self.btn_save.visible = data.isfav == 0;
                self.btn_get.visible = data.isfav != 0;
            }, self);
            /*
            ch.isSendToDesktopSucc(function(suc, fav){
                self.btn_save.visible = fav == 0;
                self.btn_get.visible = fav != 0;
            },self);
            */
        };
        p._tap_btn_save = function () {
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.setDesktopInfo(self.position, function (suc) {
                if (suc)
                    self.close();
            }, self);
            /*
            ch.sendToDesktop(null, function(isSucc){
                if(isSucc){
                    self.close();
                }
            }, self);
            */
        };
        p._tap_btn_get = function () {
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.acquireDesktopReward(self.position, function (suc) {
                if (suc)
                    self.close();
            }, self);
            /*
            gd.userCtrl.getAddDeskReward(function(){
                self.close();
            },self);
            */
        };
        p._data_list_items = function () {
            var self = this;
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.otherReward);
            var str = gameCfg[0];
            if (self.showType == 1)
                str = gameCfg[2];
            var itemStrs = str.split(",");
            var items = [];
            for (var i = 0; i < itemStrs.length; ++i) {
                var is = itemStrs[i].split(':');
                items.push({ itemId: is[0], count: is[1] });
            }
            return items;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
        };
        return SaveGame;
    })(mo.gui.Dlg);
    g_mid.SaveGame = SaveGame;
    egret.registerClass(SaveGame,"g_mid.SaveGame");
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_mid;
(function (g_mid) {
    logger.initLogger(g_mid, "g-mid");
    logger.setLvl("g-mid", 4);
    g_mid.showChatTime = -60 * 1000;
    g_mid.lastChatStr = "";
    g_mid.lastChatId = -1;
    g_mid.showLabaTime = -60 * 1000;
    g_mid.lastLabaId = -1;
    g_mid.lastLabaStr = "";
    var BaseMidBar = (function (_super) {
        __extends(BaseMidBar, _super);
        function BaseMidBar() {
            _super.apply(this, arguments);
            this.chatDelayId = -1;
            this.labaDelayId = -2;
            this.normalChatShowTime = 30 * 1000;
        }
        var d = __define,c=BaseMidBar,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            // 显示即时公告
            self.registerClassByKey(gd.HoodinnCtlr, gd.HoodinnCtlr.ON_ANNOUNCE_UPDATE, self.onAnnounceUpdate);
            // 显示跑马灯
            self.registerClassByKey(gd.HoodinnCtlr, gd.HoodinnCtlr.ON_SYSNOTICE_UPDATE, self.onSysNoticeUpdate);
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_CHAT_UPDATE, self.onChatUpdate);
        };
        p._hide = function (index) {
            var self = this;
            if (index == 0) {
                if (self.grp_chat) {
                    //self.grp_all.removeElement(self.grp_chat);
                    self.grp_chat.visible = false;
                }
            }
            else if (index == 1) {
                if (self.grp_laba) {
                    //self.grp_all.removeElement(self.grp_laba);
                    self.grp_laba.visible = false;
                }
            }
        };
        p._show = function (index) {
            var self = this;
            if (index == 0) {
                if (self.grp_chat) {
                    //self.grp_all.addElement(self.grp_chat);
                    self.grp_chat.visible = true;
                }
            }
            else if (index == 1) {
                if (self.grp_laba) {
                    //self.grp_all.addElement(self.grp_laba);
                    self.grp_laba.visible = true;
                }
            }
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            if (!self.canShowChat)
                return;
            if (g_mid.lastChatStr && egret.getTimer() - g_mid.showChatTime < self.normalChatShowTime) {
                self._showMsgAndDismiss(0, g_mid.lastChatStr, self.normalChatShowTime - (egret.getTimer() - g_mid.showChatTime));
            }
            else if (g_mid.lastLabaStr && egret.getTimer() - g_mid.showLabaTime < self.normalChatShowTime) {
                self._showMsgAndDismiss(1, g_mid.lastLabaStr, self.normalChatShowTime - (egret.getTimer() - g_mid.showLabaTime));
            }
        };
        p._tap_ico_chat = function () {
            var self = this;
            g_mid.Chat.create().show();
        };
        p._tap_ico_laba = function () {
            var self = this;
            g_mid.Chat.create().show();
        };
        p.onChatUpdate = function (data) {
            var self = this;
            //容错处理
            if (data.length == 0)
                return;
            //判断消息类型
            var newChat = data[data.length - 1];
            var type = newChat[gc.dsConsts.ChatData.type];
            if (type != gc.c_prop.chatTypeKey.user) {
                self._showNormalMsg(newChat);
            }
            else {
                if (newChat[gc.dsConsts.ChatData.userArgs][6] == 0) {
                    //非喇叭
                    self._showNormalMsg(newChat);
                }
                else {
                    //喇叭消息
                    self._showLabaMsg(newChat);
                }
            }
        };
        p._showNormalMsg = function (data) {
            var self = this;
            //判断是否已经显示过
            var chatId = data[gc.dsConsts.ChatData.uniqueId];
            if (g_mid.lastChatId == chatId)
                return;
            g_mid.lastChatId = chatId;
            g_mid.lastChatStr = gd.chatCtrl.getChatDataStr(data);
            g_mid.lastChatStr = g_mid.lastChatStr.replace("[/br]", "");
            self._showMsgAndDismiss(0, g_mid.lastChatStr, self.normalChatShowTime);
        };
        p._showLabaMsg = function (data) {
            var self = this;
            //判断是否已经显示过
            var chatId = data[gc.dsConsts.ChatData.uniqueId];
            if (g_mid.lastLabaId == chatId)
                return;
            g_mid.lastLabaId = chatId;
            g_mid.lastLabaStr = gd.chatCtrl.getChatDataStr(data);
            g_mid.lastLabaStr = g_mid.lastLabaStr.replace("[/br]", "");
            self._showMsgAndDismiss(1, g_mid.lastLabaStr, self.normalChatShowTime);
        };
        p._showMsgAndDismiss = function (type, msg, time) {
            var self = this;
            if (type == 0) {
                //显示Chat条
                self.grp_all.visible = self.canShowChat && true;
                self._show(0);
                //显示普通消息并在固定时间后清除.
                self.label_chatContent.text = msg;
                g_mid.showChatTime = egret.getTimer();
                egret.clearTimeout(self.chatDelayId);
                self.chatDelayId = egret.setTimeout(function () {
                    self._hide(0);
                    g_mid.showChatTime = 0;
                }, self, time);
            }
            else {
                //显示Laba条
                self.grp_all.visible = self.canShowChat && true;
                self._show(1);
                //显示喇叭消息并在固定时间后清除.
                self.label_chatContent_laba.text = msg;
                g_mid.showLabaTime = egret.getTimer();
                egret.clearTimeout(self.labaDelayId);
                self.labaDelayId = egret.setTimeout(function () {
                    self._hide(1);
                    g_mid.showLabaTime = 0;
                }, self, time);
            }
        };
        /*
        onNoticeUpdate(data) {
            if (g_base.baseNotice==null) {
                g_base.baseNotice=g_base.BaseNotice.create().setData(data).show();
            } else {
                g_base.baseNotice.setData(data);
            }
        }
        */
        p.onAnnounceUpdate = function (data) {
            if (g_base.baseShowAnnounce == null)
                g_base.baseShowAnnounce = g_base.BaseShowAnnounce.create().setData(data).show();
        };
        p.setChatVisible = function (value) {
            var self = this;
            self.canShowChat = value;
            if (!self.canShowChat) {
                self.grp_all.visible = false;
            }
        };
        p.onSysNoticeUpdate = function (data) {
            if (g_base.BaseSysNotice.instance == null) {
                g_base.BaseSysNotice.instance = g_base.BaseSysNotice.create().setData(data).show();
            }
            else {
                g_base.BaseSysNotice.instance.setData(data);
            }
        };
        return BaseMidBar;
    })(mo.gui.MenuLayer);
    g_mid.BaseMidBar = BaseMidBar;
    egret.registerClass(BaseMidBar,"g_mid.BaseMidBar");
})(g_mid || (g_mid = {}));

/**
 * Created by Administrator on 2015/10/6.
 */
var g_mid;
(function (g_mid) {
    var RechargeItem = (function (_super) {
        __extends(RechargeItem, _super);
        function RechargeItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RechargeItem,p=c.prototype;
        //hd { 获得价格的字符串
        p.getPrice = function () {
            var self = this;
            return self.cost.toString();
        };
        //hd }
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.rechargeId = self.data[gc.c_recharge_id];
            self.payId = self.data[gc.c_recharge_payId];
            var eventIcon = self.data[gc.c_recharge_eventIcon];
            var payInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_payInfo, self.payId);
            self.goodsId = payInfo[mo_channel.channelKeyMap[egret.project.channelId]][0];
            self.cost = payInfo[mo_channel.channelKeyMap[egret.project.channelId]][1];
            var extra = self.data[gc.c_recharge_cost];
            //hd { 修改为通过 getPrice 获取，以支持玩吧对于价格的修改
            self.label_cost.text = self.getPrice();
            //hd }
            var desc, total;
            var diamond = self.data[gc.c_recharge_diamond];
            var firstDiamond = self.data[gc.c_recharge_first];
            var extraDiamond = self.data[gc.c_recharge_extra];
            var isTreble = self.data[gc.c_recharge_isTreble];
            var isFirstRecharge = !gd.rechargeCtrl.hasBuy(self.rechargeId);
            var is3 = gd.rechargeCtrl.getAllCostRMB() <= 0;
            if (is3 && isTreble) {
                if (firstDiamond && isFirstRecharge) {
                    desc = mo.STR.format("%s×%s元宝 首充送%s元宝", diamond, 3, firstDiamond);
                    total = mo.STR.format("%s", diamond * 3 + firstDiamond);
                }
                else {
                    if (extraDiamond > 0) {
                        desc = mo.STR.format("%s×%s元宝 另送%s元宝", diamond, 3, extraDiamond);
                    }
                    else {
                        desc = mo.STR.format("%s×%s元宝", diamond, 3);
                    }
                    total = mo.STR.format("%s", diamond * 3 + extraDiamond);
                }
                self.ico_3bei.visible = true;
                self.ico_tuijian.visible = self.ico_remai.visible = false;
            }
            else {
                self.ico_3bei.visible = false;
                if (firstDiamond && isFirstRecharge) {
                    desc = mo.STR.format("%s元宝 首充送%s元宝", diamond, firstDiamond);
                    total = mo.STR.format("%s", diamond + firstDiamond);
                }
                else {
                    if (extraDiamond > 0) {
                        desc = mo.STR.format("%s元宝 另送%s元宝", diamond, extraDiamond);
                    }
                    else {
                        desc = mo.STR.format("%s元宝", diamond);
                    }
                    total = mo.STR.format("%s", diamond + extraDiamond);
                }
                self.ico_tuijian.visible = self.data[gc.c_recharge_eventIcon] == 1;
                self.ico_remai.visible = self.data[gc.c_recharge_eventIcon] == 2;
            }
            self.label_yb2.text = desc;
            self.label_yb.text = total;
            var id = self.data[gc.c_recharge_id];
            self.ico_recharge.source = resHelper.getRechargeIconPath(self.data[gc.c_recharge_displayId]);
            //if(eventIcon != 0){
            //    self.imgEventIcon.visible = true;
            //    self.imgEventIcon.source = resHelper.getRechargeEventIconPath(eventIcon);
            //}
            //else{
            //    self.imgEventIcon.visible = false;
            //}
            //for wan8
            //var showQQ = egret.project.channelId == g_channel.key.qqWan8Aos;
            //self.qq.visible = showQQ;
            //self.normal.visible = !showQQ;
            //if(egret.project.channelId == g_channel.key.qqWan8Aos){
            //var vipData = gd.sdkCtrl.vipData;
            //var isVip = vipData[gc.dsConsts.SdkVipData.vipLevel] > 0;
            //self.labQQStar.text = isVip? Math.round(self.cost * 0.8) : self.cost; //vip打8折
            //}
        };
        return RechargeItem;
    })(mo.gui.ItemRenderer);
    g_mid.RechargeItem = RechargeItem;
    egret.registerClass(RechargeItem,"g_mid.RechargeItem");
})(g_mid || (g_mid = {}));

/** hd 匹配玩吧skin的修改
 */
var g_mid;
(function (g_mid) {
    var RechargeItemWanba = (function (_super) {
        __extends(RechargeItemWanba, _super);
        function RechargeItemWanba() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RechargeItemWanba,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            mo.gui.helper.setSkinName(this, RechargeItemWanba.__className);
        };
        p.getPrice = function () {
            var self = this;
            // 汇率 1:10
            return (self.cost * 10).toString();
        };
        return RechargeItemWanba;
    })(g_mid.RechargeItem);
    g_mid.RechargeItemWanba = RechargeItemWanba;
    egret.registerClass(RechargeItemWanba,"g_mid.RechargeItemWanba");
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_mid;
(function (g_mid) {
    var Recharge = (function (_super) {
        __extends(Recharge, _super);
        function Recharge() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Recharge,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            //hd { 增加玩吧的样式
            var pt = mo_channel.getCurChannel().channel();
            if (pt == 'wanba')
                self._Item_list_items = g_mid.RechargeItemWanba;
            else
                self._Item_list_items = g_mid.RechargeItem;
            //hd }
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            var curVip = gd.userCtrl.getVip();
            var nextVip = curVip + 1;
            if (nextVip > gd.rechargeCtrl.getMaxVip()) {
                nextVip = gd.rechargeCtrl.getMaxVip();
            }
            self.label_vip.text = curVip.toString();
            self.label_nextVip.text = nextVip.toString();
            var nextNeedCost = gd.userCtrl.getNextVipScore() - gd.userCtrl.getVipScore();
            if (nextNeedCost < 0) {
                nextNeedCost = 0;
            }
            self.label_nextRecharge.text = nextNeedCost.toString();
            self.bar_recharge.maximum = gd.userCtrl.getNextVipScore();
            self.bar_recharge.setValue(gd.userCtrl.getVipScore());
        };
        p._click_list_items = function (e) {
            var self = this;
            var item = e.item;
            var str = "尝试购买【%s充值档】的次数";
            var rechargeId = item[gc.c_recharge_id];
            var payId = item[gc.c_recharge_payId];
            //ws.recordEvent("点击充值【" + item[gc.c_recharge_cost] + "元按钮】", 1);
            var payInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_payInfo, payId);
            var goodsId = payInfo[mo_channel.channelKeyMap[egret.project.channelId]][0];
            mo_channel.getCurChannel().pay(rechargeId, goodsId, function (data) {
                mo.log("充值成功");
            }, self);
        };
        p._data_list_items = function () {
            var self = this;
            return gd.rechargeCtrl.getList();
        };
        p._tap_btn_lookVip = function () {
            var self = this;
            //ws.recordEvent("点击充值界面【VIP权限按钮】", 1);
            self.close();
            process.nextTick(function () {
                mo.moduleMgr.runModule(g_consts.moduleId.vip);
            });
        };
        return Recharge;
    })(mo.gui.Dlg);
    g_mid.Recharge = Recharge;
    egret.registerClass(Recharge,"g_mid.Recharge");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = Recharge;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_mid || (g_mid = {}));

/**
 * Created by Administrator on 2015/10/7.
 */
var g_mid;
(function (g_mid) {
    var Vip = (function (_super) {
        __extends(Vip, _super);
        function Vip() {
            _super.apply(this, arguments);
            this.vipItems = [];
        }
        var d = __define,c=Vip,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.vip.toString(), self.reset);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
            self.reset();
        };
        p.reset = function () {
            var self = this;
            var curVip = gd.userCtrl.getVip();
            var nextVip = curVip + 1;
            if (nextVip > gd.rechargeCtrl.getMaxVip()) {
                nextVip = gd.rechargeCtrl.getMaxVip();
                self.grp_next.visible = false;
            }
            else {
                self.grp_next.visible = true;
            }
            self.label_vip.text = curVip.toString();
            self.label_nextVip.text = nextVip.toString();
            var nextNeedCost = gd.userCtrl.getNextVipScore() - gd.userCtrl.getVipScore();
            if (nextNeedCost < 0) {
                nextNeedCost = 0;
            }
            self.label_nextRecharge.text = nextNeedCost.toString();
            self.bar_recharge.maximum = gd.userCtrl.getNextVipScore();
            self.bar_recharge.setValue(gd.userCtrl.getVipScore());
            self.curVip = gd.userCtrl.getVip();
            if (self.moduleParam.showVipLv) {
                self.curVip = parseInt(self.moduleParam.showVipLv);
            }
            if (self.curVip <= 0) {
                self.curVip = 1;
            }
            self.showVipInfo();
        };
        p.showVipInfo = function () {
            var self = this;
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, self.curVip);
            //var onlineExpAdd = vipInfo[gc.c_vip_onlineExpAdd];
            //var offlineGoldAdd = vipInfo[gc.c_vip_offlineGoldAdd];
            //var offlineExpAdd = vipInfo[gc.c_vip_offlineExpAdd];
            var addEquipBag = vipInfo[gc.c_vip_addEquipBag];
            //var goldCount = vipInfo[gc.c_vip_goldCount];
            var equipCount = vipInfo[gc.c_vip_equipCount];
            var bossCount = vipInfo[gc.c_vip_bossCount];
            var realmCount = vipInfo[gc.c_vip_realmCount];
            //var arenaCount = vipInfo[gc.c_vip_arenaCount];
            var buyBossCount = vipInfo[gc.c_vip_buyBossCount];
            var openRole2 = vipInfo[gc.c_vip_openRole2];
            var openRole3 = vipInfo[gc.c_vip_openRole3];
            var openRole4 = vipInfo[gc.c_vip_openRole4];
            var bossAutoFight = vipInfo[gc.c_vip_bossAutoFight];
            var worldCount = vipInfo[gc.c_vip_worldCount];
            var guildCount = vipInfo[gc.c_vip_guildCount];
            var openingCount = vipInfo[gc.c_vip_openingCount];
            var coffersBuild = vipInfo[gc.c_vip_coffersBuild];
            var coffersBuff = vipInfo[gc.c_vip_coffersBuff];
            var copyBossAutoFight = vipInfo[gc.c_vip_copyBossAutoFight];
            var isLock = vipInfo[gc.c_vip_isLock];
            var str = "";
            var preVipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, self.curVip - 1);
            self.label_vipCost.text = mo.STR.format("充值%s元宝可成为VIP%s", preVipInfo[gc.c_vip_score], self.curVip);
            //if(onlineExpAdd!=0){
            //    str += mo.STR.format("在线经验收益加成[ubb color=red]%s%[/ubb]", Math.floor(onlineExpAdd/10)/10);
            //    str += "\n";
            //}
            //if(offlineGoldAdd!=0){
            //    str += mo.STR.format("离线金币收益加成[ubb color=red]%s%[/ubb]", Math.floor(offlineGoldAdd/10)/10);
            //    str += "\n";
            //}
            //if(offlineExpAdd!=0){
            //    str += mo.STR.format("离线经验收益加成[ubb color=red]%s%[/ubb]", Math.floor(offlineExpAdd/10)/10);
            //    str += "\n";
            //}
            if (addEquipBag != 0) {
                str += mo.STR.format("装备背包格子上限增加[ubb color=red]%s[/ubb]格", addEquipBag);
                str += "\n";
            }
            //if(goldCount!=0){
            //    str += mo.STR.format( "每天可购买金币[ubb color=red]%s[/ubb]次", goldCount);
            //    str += "\n";
            //}
            if (equipCount != 0) {
                str += mo.STR.format("每天可进入装备副本[ubb color=red]%s[/ubb]次", equipCount);
                str += "\n";
            }
            if (bossCount != 0) {
                str += mo.STR.format("每天可进入炼狱副本[ubb color=red]%s[/ubb]次", bossCount);
                str += "\n";
            }
            if (realmCount != 0) {
                str += mo.STR.format("每天可进入元神副本[ubb color=red]%s[/ubb]次", realmCount);
                str += "\n";
            }
            //if(arenaCount!=0){
            //    str += mo.STR.format("每天可额外购买竞技场[ubb color=red]%s[/ubb]次", arenaCount);
            //    str += "\n";
            //}
            if (buyBossCount != 0) {
                str += mo.STR.format("每天可购买炼狱副本次数[ubb color=red]%s[/ubb]次", buyBossCount);
                str += "\n";
            }
            if (openingCount != 0) {
                str += mo.STR.format("每日妖莲开光[ubb color=red]%s[/ubb]次", openingCount);
                str += "\n";
            }
            if (openRole2 != 0) {
                str += mo.STR.format("可提前解锁第二个角色");
                str += "\n";
            }
            if (openRole3 != 0) {
                str += mo.STR.format("可提前解锁第三个角色");
                str += "\n";
            }
            if (openRole4 != 0) {
                str += mo.STR.format("在飞升一重后即可进行第四角色解锁");
                str += "\n";
            }
            if (bossAutoFight) {
                str += mo.STR.format("可在世界BOSS挑战中自动参战");
                str += "\n";
            }
            if (isLock) {
                str += mo.STR.format("可以锁定召唤行会BOSS");
                str += "\n";
            }
            if (worldCount != 0) {
                str += mo.STR.format("每日可发送%s次全服红包", worldCount);
                str += "\n";
            }
            if (guildCount != 0) {
                str += mo.STR.format("每日可发送%s次行会红包", guildCount);
                str += "\n";
            }
            if (coffersBuild != 0) {
                str += mo.STR.format("每天可在国库添砖%s次", coffersBuild);
                str += "\n";
            }
            if (coffersBuff != 0) {
                if (coffersBuff != -1) {
                    str += mo.STR.format("每日可激励国库守卫%s次", coffersBuff);
                }
                else {
                    str += mo.STR.format("可激励国库守卫无限次");
                }
                str += "\n";
            }
            if (copyBossAutoFight != 0) {
                str += "直接开启自动挑战主线BOSS功能";
                str += "\n";
            }
            if (vipInfo[gc.c_vip_copyCountV7] != 0) {
                str += mo.STR.format("可进入副本凌云山麓%s次", vipInfo[gc.c_vip_copyCountV7]);
                str += "\n";
            }
            if (vipInfo[gc.c_vip_copyCountV10] != 0) {
                str += mo.STR.format("可进入副本媚心洞府%s次", vipInfo[gc.c_vip_copyCountV10]);
                str += "\n";
            }
            if (vipInfo[gc.c_vip_copyCountV14] != 0) {
                str += mo.STR.format("可进入副本封魔神殿%s次", vipInfo[gc.c_vip_copyCountV14]);
                str += "\n";
            }
            if (vipInfo[gc.c_vip_copyCountV17] != 0) {
                str += mo.STR.format("可进入副本黄泉鬼窟%s次", vipInfo[gc.c_vip_copyCountV17]);
                str += "\n";
            }
            if (vipInfo[gc.c_vip_copyCountV19] != 0) {
                str += mo.STR.format("可进入副本海底迷阵%s次", vipInfo[gc.c_vip_copyCountV19]);
                str += "\n";
            }
            if (vipInfo[gc.c_vip_isPickAct] != 0) {
                str += mo.STR.format("开启行会元宝上香功能");
                str += "\n";
            }
            if (vipInfo[gc.c_vip_buzhen] != 0) {
                str += mo.STR.format("提前开启布阵功能");
                str += "\n";
            }
            //if(vipInfo[gc.c_vip_skipFight]!=0){
            //    str += mo.STR.format("部分战斗中可使用快速战斗功能");
            //    str += "\n";
            //}
            //if(vipInfo[gc.c_vip_autoSmelt]!=0){
            //    str += mo.STR.format("离线期间包裹满后可自动熔炼装备");
            //    str += "\n";
            //}
            //if(vipInfo[gc.c_vip_autoPkOut]!=0){
            //    str += mo.STR.format("离线后可自动PK其他玩家");
            //    str += "\n";
            //}
            str = str.substr(0, str.length - 1);
            self.label_vipInfo.text = str;
            self.label_showVip.text = self.curVip.toString();
            self.label_showVip_liBao.text = self.curVip.toString();
            var itemId = vipInfo[gc.c_vip_itemId];
            self.vipItems = [];
            if (itemId != 0) {
                var itemsLogicInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_itemLogic, itemId);
                var items = itemsLogicInfo[gc.t_itemLogic_create];
                for (var i = 0; i < items.length; ++i) {
                    var item = { itemId: items[i][0], count: items[i][1] };
                    self.vipItems.push(item);
                }
            }
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self.vipItems;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
        };
        p._tap_btn_lookRecharge = function () {
            var self = this;
            self.close();
            process.nextTick(function () {
                mo.moduleMgr.runModule(g_consts.moduleId.recharge);
            });
        };
        p._tap_btn_next = function () {
            var self = this;
            if (self.curVip < gd.rechargeCtrl.getMaxVip()) {
                self.curVip++;
                self.showVipInfo();
            }
        };
        p._tap_btn_prev = function () {
            var self = this;
            if (self.curVip > 1) {
                self.curVip--;
                self.showVipInfo();
            }
        };
        return Vip;
    })(mo.gui.Dlg);
    g_mid.Vip = Vip;
    egret.registerClass(Vip,"g_mid.Vip");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = Vip;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_mid;
(function (g_mid) {
    var FirstRecharge = (function (_super) {
        __extends(FirstRecharge, _super);
        function FirstRecharge() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FirstRecharge,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            //hd { 玩吧需要切换样式
            var pt = mo_channel.getCurChannel().channel();
            if (pt == 'wanba')
                mo.gui.helper.setSkinName(self, g_mid.FirstRechargeWanba.__className);
            //hd }
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            var items = gd.activityCtrl.getFirstRechargeItems();
            return utils.itemObj2ObjArr(items);
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            self.btn_get.visible = gd.activityCtrl.hasRecharged();
            self.grp_btns.visible = !self.btn_get.visible;
            if (self.grp_btns.visible) {
                var c_recharge = mo.getJSONWithFileName(gc.cfg_c_recharge);
                var info = [c_recharge[1], c_recharge[2], c_recharge[3], c_recharge[4],];
                for (var i = 0, li = 4; i < li; i++) {
                    self._setItemInfo(self['grp_item' + i], info[i]);
                }
            }
        };
        p._setItemInfo = function (group, info) {
            var self = this;
            var MULTIPLE = info[gc.c_recharge_isTreble] > 0 ? 3 : 1;
            var btn = group.getChildByName("btn");
            var label_cost = mo.gui.helper.getChild(group, "label_cost");
            var label_get = group.getChildByName("label_get");
            //hd { 玩吧的价格需要转换到星星币
            var cost = info[gc.c_recharge_cost];
            var pt = mo_channel.getCurChannel().channel();
            if (pt == 'wanba')
                cost *= 10;
            //hd }
            label_cost.text = cost + "";
            label_get.text = info[gc.c_recharge_diamond] * MULTIPLE + info[gc.c_recharge_first];
        };
        p._tap_btn_get = function () {
            var self = this;
            if (gd.activityCtrl.hasRecharged()) {
                gd.activityCtrl.receiveFirstRecharge(function () {
                    self.close();
                });
            }
            else {
                //ws.recordEvent("点击首充界面【前往充值】", 1);
                mo.moduleMgr.pushModule(g_consts.moduleId.recharge);
            }
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            var ico_item = cell.ico_item;
            ico_item.showEquipName = true;
            cell.tapShowDetail = true;
        };
        //6，12，30，98
        p._tap_btn_item0 = function () {
            var self = this;
            var infos = mo.getJSONWithFileName(gc.cfg_c_recharge);
            self._doRecharge(infos[1]);
        };
        p._tap_btn_item1 = function () {
            var self = this;
            var infos = mo.getJSONWithFileName(gc.cfg_c_recharge);
            self._doRecharge(infos[2]);
        };
        p._tap_btn_item2 = function () {
            var self = this;
            var infos = mo.getJSONWithFileName(gc.cfg_c_recharge);
            self._doRecharge(infos[3]);
        };
        p._tap_btn_item3 = function () {
            var self = this;
            var infos = mo.getJSONWithFileName(gc.cfg_c_recharge);
            self._doRecharge(infos[4]);
        };
        p._doRecharge = function (item) {
            var self = this;
            var str = "尝试购买【%s充值档】的次数";
            var rechargeId = item[gc.c_recharge_id];
            var payId = item[gc.c_recharge_payId];
            //ws.recordEvent("点击充值【" + item[gc.c_recharge_cost] + "元按钮】", 1);
            var payInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_payInfo, payId);
            var goodsId = payInfo[mo_channel.channelKeyMap[egret.project.channelId]][0];
            mo_channel.getCurChannel().pay(rechargeId, goodsId, function (data) {
                mo.log("充值成功");
            }, self);
        };
        return FirstRecharge;
    })(mo.gui.Dlg);
    g_mid.FirstRecharge = FirstRecharge;
    egret.registerClass(FirstRecharge,"g_mid.FirstRecharge");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = FirstRecharge;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_mid || (g_mid = {}));

var g_mid;
(function (g_mid) {
    var FirstRechargeWanba = (function (_super) {
        __extends(FirstRechargeWanba, _super);
        function FirstRechargeWanba() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FirstRechargeWanba,p=c.prototype;
        return FirstRechargeWanba;
    })(mo.gui.Dlg);
    g_mid.FirstRechargeWanba = FirstRechargeWanba;
    egret.registerClass(FirstRechargeWanba,"g_mid.FirstRechargeWanba");
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_mid;
(function (g_mid) {
    var ChatItem = (function (_super) {
        __extends(ChatItem, _super);
        function ChatItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ChatItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p._switchChatItemStyle = function (type) {
            var self = this;
            if (type == gc.c_prop.chatTypeKey.user || type == gc.c_prop.chatTypeKey.guild) {
                self.label_content.visible = false;
                self.label_content.includeInLayout = false;
                self.grp_user.visible = true;
                self.grp_user.includeInLayout = true;
            }
            else {
                self.label_content.visible = true;
                self.label_content.includeInLayout = true;
                self.grp_user.visible = false;
                self.grp_user.includeInLayout = false;
            }
        };
        p._setMedalTitle = function (medalId) {
            var self = this;
            var hasTitle = medalId != 0;
            self.grp_user_title.visible = hasTitle;
            self.grp_user_title.includeInLayout = hasTitle;
            if (hasTitle) {
                self.img_user_title.source = resHelper.getChatTitle(medalId);
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var chatData = self.data;
            var type = chatData[gc.dsConsts.ChatData.type];
            var str = "";
            var userName = "", msg = "";
            //切换显示样式
            self._switchChatItemStyle(type);
            self.ico_laba.source = "ico_blank_point";
            if (type == gc.c_prop.chatTypeKey.user) {
                var userArgs = chatData[gc.dsConsts.ChatData.userArgs];
                var isGM = userArgs[3];
                var guildName = userArgs[4];
                var medalId = userArgs[5] || 0;
                var chatContent = userArgs[2];
                var islaba = userArgs[6] || 0;
                if (islaba == 1) {
                    self.ico_laba.source = "ico_chat_laba";
                }
                if (isGM) {
                    userName = mo.STR.format("[ubb color=#ff0000]【GM %s】[/ubb]", userArgs[0]);
                    msg = mo.STR.format("[ubb color=#ff0000]%s[/ubb]", chatContent);
                }
                else {
                    if (userArgs[1] > 0) {
                        userName = mo.STR.format("[ubb color=#ffad00]VIP%s [/ubb][ubb color=#00cdff]%s[/ubb]", userArgs[1], userArgs[0]);
                    }
                    else {
                        userName = mo.STR.format("[ubb color=#00cdff]%s[/ubb]", userArgs[0]);
                    }
                    if (guildName != "") {
                        userName = mo.STR.format("[ubb color=#e76df5]%s[/ubb]", mo.trans4UBB(mo.STR.format("[%s]", guildName))) + userName;
                    }
                    msg = mo.STR.format("[ubb color=#ffffff]%s[/ubb]", chatContent);
                }
                self.label_user_name.text = userName;
                self.label_user_msg.text = msg;
                self._setMedalTitle(medalId);
            }
            else if (type == gc.c_prop.chatTypeKey.guild) {
                var guildArgs = chatData[gc.dsConsts.ChatData.guildArgs]; //玩家公会聊天参数 [用户名,vip,头衔,聊天内容, 称号]
                //[公会头衔][vip4 名字]: 内容 普通成员不显示头衔
                userName = mo.STR.format("%s%s[ubb color=#00cdff]%s[/ubb]", guildArgs[2] == gc.c_prop.guildPostKey.rankFile ? "" : mo.STR.format("[ubb color=#F6EC6B][%s][/ubb]", gc.c_prop.guildPost[guildArgs[2]]), guildArgs[1] > 0 ? mo.STR.format("[ubb color=#ffad00]VIP%s [/ubb]", guildArgs[1]) : "", guildArgs[0]);
                msg = mo.STR.format("[ubb color=#ffffff]%s[/ubb]", guildArgs[3]);
                medalId = guildArgs[4] || 0;
                self.label_user_name.text = userName;
                self.label_user_msg.text = msg;
                self._setMedalTitle(medalId);
            }
            else {
                var sysArgs = chatData[gc.dsConsts.ChatData.sysArgs];
                var sysInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_chatSys, sysArgs[0]);
                str = "【系统】";
                if (sysArgs.length == 2) {
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text], sysArgs[1]);
                }
                else if (sysArgs.length == 3) {
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text], sysArgs[1], sysArgs[2]);
                }
                else if (sysArgs.length == 4) {
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text], sysArgs[1], sysArgs[2], sysArgs[3]);
                }
                else if (sysArgs.length == 5) {
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text], sysArgs[1], sysArgs[2], sysArgs[3], sysArgs[4]);
                }
                else if (sysArgs.length == 6) {
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text], sysArgs[1], sysArgs[2], sysArgs[3], sysArgs[4], sysArgs[5]);
                }
                else if (sysArgs.length == 7) {
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text], sysArgs[1], sysArgs[2], sysArgs[3], sysArgs[4], sysArgs[5], sysArgs[6]);
                }
                else if (sysArgs.length == 8) {
                    str += mo.STR.format(sysInfo[gc.c_chatSys_text], sysArgs[1], sysArgs[2], sysArgs[3], sysArgs[4], sysArgs[5], sysArgs[6], sysArgs[7]);
                }
                self.label_content.text = str;
            }
        };
        return ChatItem;
    })(mo.gui.ItemRenderer);
    g_mid.ChatItem = ChatItem;
    egret.registerClass(ChatItem,"g_mid.ChatItem");
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_mid;
(function (g_mid) {
    var Chat = (function (_super) {
        __extends(Chat, _super);
        function Chat() {
            _super.apply(this, arguments);
            this.isBottom = true;
        }
        var d = __define,c=Chat,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_chat = g_mid.ChatItem;
            self.tabLastSelectIndex = 0;
            self.chatType = gc.c_prop.chatTypeKey.user;
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_IMPOTANT_UPDATE, function (dataList) {
                self.onChatImpUpdate(dataList);
            });
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_CHAT_UPDATE, function (dataList) {
                self.onChatUpdate(gc.c_prop.chatTypeKey.user, dataList);
            });
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_GUILD_CHAT_UPDATE, function (dataList) {
                self.onChatUpdate(gc.c_prop.chatTypeKey.guild, dataList);
            });
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_GUILD_CHANGED, self.guildChanged);
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_MODE_UPDATE, self.modeChanged);
        };
        p._data_list_chat = function () {
            var self = this, filter, sorter;
            return self.chatType == gc.c_prop.chatTypeKey.user ? gd.chatCtrl.getAllList() : gd.chatCtrl.getGuildAllList();
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var exData = gd.userCtrl.get(gc.dsConsts.UserEntity.exData);
            var followNormal = exData[gc.c_prop.userExDataKey.catNoVipChat];
            if (followNormal == undefined) {
                followNormal = 1;
            }
            gd.chatCtrl.isFollowNormalUser = followNormal;
            gd.chatCtrl.isAutoBuyLaba = exData[gc.c_prop.userExDataKey.autoBuyLittleHorn];
            var self = this;
            (self.list_chat.dataGroup.layout).gap = 5;
            process.nextTick(function () {
                self.tab_channel.selectedIndex = 0;
                self._tap_tab_channel();
            });
            var scroller = (self.list_chat).scroller;
            scroller.addEventListener(egret.Event.CHANGE, self.onScrollChanged, self);
        };
        p._tap_tab_channel = function () {
            var self = this;
            var selectedIndex = self.tab_channel.selectedIndex;
            if (selectedIndex == 0) {
                self._switchChannel(gc.c_prop.chatTypeKey.user);
            }
            if (selectedIndex == 1) {
                if (!gd.guildPersonalCtrl.getGuildId()) {
                    process.nextTick(function () {
                        self.tab_channel.selectedIndex = self.tabLastSelectIndex;
                        //切回
                    });
                    return mo.showMsg(gc.id_c_msgCode.noGuild);
                }
                self._switchChannel(gc.c_prop.chatTypeKey.guild);
            }
            self.tabLastSelectIndex = selectedIndex;
        };
        p._switchChannel = function (type) {
            var self = this;
            self.chatType = type;
            self.grp_chat.visible = self.chatType == gc.c_prop.chatTypeKey.user ? true : false;
            self.onChatUpdate(type, self.chatType == gc.c_prop.chatTypeKey.user ? gd.chatCtrl.getAllList() : gd.chatCtrl.getGuildAllList());
            self.onChatImpUpdate(gd.chatCtrl.getImportantList());
            var scroller = (self.list_chat).scroller;
            process.nextTick(function () {
                process.nextTick(function () {
                    if (!self.list_chat)
                        return;
                    scroller.throwVertically(scroller.getMaxScrollTop(), 1);
                });
            });
        };
        p.guildChanged = function () {
            var self = this;
            if (self.tab_channel.selectedIndex != 0 && !gd.guildPersonalCtrl.getGuildId()) {
                mo.showMsg(gc.id_c_msgCode.outofGuild, function () {
                    self.tab_channel.selectedIndex = 0;
                    self._tap_tab_channel();
                });
            }
        };
        p.modeChanged = function () {
            var self = this;
            self.refreshList("list_chat");
            var scroller = (self.list_chat).scroller;
            process.nextTick(function () {
                if (!self.list_chat)
                    return;
                scroller.throwVertically(scroller.getMaxScrollTop(), 1);
            });
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            this._refreshLabaCount();
            gd.chatCtrl.openWindow();
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            gd.chatCtrl.closeWindow();
        };
        p.onChatImpUpdate = function (data) {
            var self = this;
            self.clearChatImp();
            var allStr = "";
            for (var i = 0; i < data.length; ++i) {
                var chatStr = gd.chatCtrl.getChatDataStr(data[i]);
                allStr += chatStr + "\n";
            }
            self.label_contentSys.text = allStr;
            process.nextTick(function () {
                if (!self.scrollerSys)
                    return;
                self.scrollerSys.throwVertically(self.scrollerSys.getMaxScrollTop(), 1);
            });
        };
        p.onChatUpdate = function (type, data) {
            var self = this;
            if (self.chatType != type)
                return;
            var scroller = (self.list_chat).scroller;
            var curPos = scroller.viewport.verticalScrollPosition;
            self.refreshList("list_chat");
            if (self.isScrollChanged) {
                self.isBottom = scroller.viewport.verticalScrollPosition == scroller.viewport.contentHeight - scroller.viewport.height;
                self.isScrollChanged = false;
            }
            process.nextTick(function () {
                if (!self.list_chat)
                    return;
                if (self.isBottom) {
                    scroller.throwVertically(scroller.getMaxScrollTop(), 1);
                }
                else {
                    scroller.throwVertically(curPos, 1);
                }
            });
        };
        p.onScrollChanged = function () {
            var self = this;
            var scroller = (self.list_chat).scroller;
            self.isScrollChanged = true;
        };
        p.clearChatImp = function () {
            var self = this;
            self.label_contentSys.text = "";
        };
        p._tap_btn_send = function () {
            var self = this;
            gd.chatCtrl.sendData(mo.trans4UBB(self.label_input.text), self.chatType, false, function () {
                self.label_input.text = "";
                self._refreshLabaCount();
            }, self);
        };
        p._tap_btn_laba = function () {
            var self = this;
            if (self.chatType != gc.c_prop.chatTypeKey.user) {
                return mo.showMsg("行会频道不可以使用喇叭");
            }
            var labaCount = gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.littleHorn);
            if (labaCount < 1) {
                if (gd.chatCtrl.isAutoBuyLaba == 1) {
                    self._sendLabaMsg(mo.trans4UBB(self.label_input.text));
                }
                else {
                    return mo.showMsg(gc.id_c_msgCode.noticeAutoBuyLittleHorn, function () {
                        if (gd.userCtrl.getVip() < 2) {
                            return mo.showMsg(gc.id_c_msgCode.noticeAutoBuyLittleHornVipNeed);
                        }
                        else {
                            gd.chatCtrl.isAutoBuyLaba = 1;
                            gd.userCtrl.updateSetting(gd.chatCtrl.isFollowNormalUser, gd.chatCtrl.isAutoBuyLaba, function () {
                                self._sendLabaMsg(mo.trans4UBB(self.label_input.text));
                            }, self);
                        }
                    });
                }
            }
            else {
                self._sendLabaMsg(mo.trans4UBB(self.label_input.text));
            }
        };
        p._sendLabaMsg = function (txt) {
            var self = this;
            gd.chatCtrl.sendData(mo.trans4UBB(self.label_input.text), self.chatType, true, function () {
                self.label_input.text = "";
                self._refreshLabaCount();
            }, self);
        };
        p._refreshLabaCount = function () {
            var self = this;
            self.label_laba_left.text = "喇叭剩余:" + gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.littleHorn);
        };
        p._tap_btn_setting = function () {
            g_mid.ChatSetting.create().show();
        };
        return Chat;
    })(mo.gui.Dlg);
    g_mid.Chat = Chat;
    egret.registerClass(Chat,"g_mid.Chat");
})(g_mid || (g_mid = {}));

/**
 * Created by admin on 16/4/10.
 */
var g_mid;
(function (g_mid) {
    var ChatSetting = (function (_super) {
        __extends(ChatSetting, _super);
        function ChatSetting() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ChatSetting,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.ckb_vip.selected = gd.chatCtrl.isFollowNormalUser;
            self.ckb_laba.selected = gd.chatCtrl.isAutoBuyLaba;
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            var self = this;
            gd.userCtrl.updateSetting(gd.chatCtrl.isFollowNormalUser, gd.chatCtrl.isAutoBuyLaba, function () { }, self);
        };
        p._chg_ckb_vip = function () {
            gd.chatCtrl.isFollowNormalUser = (gd.chatCtrl.isFollowNormalUser == 0 ? 1 : 0);
            gd.chatCtrl.followModeChange();
        };
        p._chg_ckb_laba = function () {
            var self = this;
            if (gd.userCtrl.getVip() < 2) {
                self.ckb_laba.selected = false;
                return mo.showMsg("VIP2及以上才可开启此功能");
            }
            gd.chatCtrl.isAutoBuyLaba = (gd.chatCtrl.isAutoBuyLaba == 0 ? 1 : 0);
        };
        return ChatSetting;
    })(mo.gui.Dlg);
    g_mid.ChatSetting = ChatSetting;
    egret.registerClass(ChatSetting,"g_mid.ChatSetting");
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_mid;
(function (g_mid) {
    var BugFeedBack = (function (_super) {
        __extends(BugFeedBack, _super);
        function BugFeedBack() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BugFeedBack,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_qq.text = mo.STR.format("QQ群：%s", mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.contactUs)[0]);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
        };
        p._tap_btn_add = function () {
            window.open("http://jq.qq.com/?_wv=1027&k=Zt4mRQ");
        };
        return BugFeedBack;
    })(mo.gui.Dlg);
    g_mid.BugFeedBack = BugFeedBack;
    egret.registerClass(BugFeedBack,"g_mid.BugFeedBack");
})(g_mid || (g_mid = {}));

var g_mid;
(function (g_mid) {
    var BugChat = (function (_super) {
        __extends(BugChat, _super);
        function BugChat() {
            _super.apply(this, arguments);
        }
        var d = __define,c=BugChat,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.HoodinnCtlr, gd.HoodinnCtlr.ON_BUGCHAT_UPDATE, self.onChatUpdate);
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            gd.hoodinnCtlr.openBugChatWindow();
            this.label_openid.text = '您的OPENID:' + gd.accountCtrl.get(gc.dsConsts.AccountEntity.sdkData).open_id;
            this.label_weburl.text = mo_channel.getCurChannel().homeUrl();
            this.img_pctips.visible = this.label_weburl.text != '';
            this.btn_bbs.visible = mo_channel.getCurChannel().channel() == 'qqbrowser';
        };
        p.onExit = function () {
            _super.prototype.onExit.call(this);
            gd.hoodinnCtlr.closeBugChatWindow();
        };
        p.onChatUpdate = function (data) {
            var self = this;
            self.clearChat();
            var allStr = "";
            for (var i = 0; i < data.length; ++i) {
                var str = gd.hoodinnCtlr.getBugChatStr(data[i]);
                allStr += str + "\n";
            }
            self.label_content.text = allStr;
            process.nextTick(function () {
                if (!self.scroller)
                    return;
                self.scroller.throwVertically(self.scroller.getMaxScrollTop(), 1);
            });
        };
        p.clearChat = function () {
            var self = this;
            self.label_content.text = "";
        };
        p._tap_btn_send = function () {
            var self = this;
            gd.hoodinnCtlr.sendBugChat(mo.trans4UBB(self.label_input.text), function () {
                self.label_input.text = "";
            }, self);
        };
        p._tap_btn_bbs = function () {
            location.href = 'http://circle.html5.qq.com/?from=011&ch=20&gameId=8392920187#circle/q_11833288344_1449127137920445';
        };
        return BugChat;
    })(mo.gui.Dlg);
    g_mid.BugChat = BugChat;
    egret.registerClass(BugChat,"g_mid.BugChat");
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_mid;
(function (g_mid) {
    var HomeBottomBar = (function (_super) {
        __extends(HomeBottomBar, _super);
        function HomeBottomBar() {
            _super.apply(this, arguments);
        }
        var d = __define,c=HomeBottomBar,p=c.prototype;
        //hd }
        //showType:number;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._checkRed);
            self.registerClassByKey(gd.UserCtrl, gd.UserCtrl.ON_GET_BINDPHONE_REWARD, self._update_bindPhone);
            //hd {
            self.registerClassByKey(gd.HoodinnCtlr, gd.HoodinnCtlr.ON_NEWBUGCHAT_RECEIVED, self._bugChatRed);
            //hd }
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._checkRed();
            self.btn_bindPhone.visible = false;
            self.btn_bindPhone.includeInLayout = false;
            self._update_bindPhone();
            //self.btn_saveGame.visible = false;
            // ico_desktop ico_phone ico_xiongdi
            //hd {只有platform为hgame的才显示兄弟模块
            //self.btn_xiongdi.visible = mo_channel.getCurChannel().channel() == "hgame";
            //hd }
            // 刷新desktop的显示
            self._update_desktop();
            /*
            ch.isBindMobile(function(isSucc){
                if(!isSucc){
                    self.btn_bindPhone.visible = true;
                }else{
                    self.btn_bindPhone.visible = false;
                    self.grp_bottom.removeElement(self.btn_bindPhone);
                }
            },self);

            //hd { 判断绑定微端
            ch.isSendToDesktopSucc(function(suc, fav,showType) {
                if (suc) {
                    if (gd.userCtrl.isGetDeskReward()) {
                        self.btn_saveGame.visible = false;
                        self.grp_bottom.removeElement(self.btn_saveGame);
                    } else {
                        self.btn_saveGame.visible = true;
                    }
                } else {
                    self.btn_saveGame.visible = false;
                    self.grp_bottom.removeElement(self.btn_saveGame);
                }

                self.showType = showType;
                if(self.showType == 1){
                    self.img_savegame.source = "ico_desktop_share";
                }else if(self.showType == 2){
                    self.img_savegame.source = "ico_desktop_follow";
                }else{
                    self.img_savegame.source = "ico_desktop";
                }
            }, self);
            */
        };
        p._checkRed = function () {
            var self = this;
            self.btn_mail.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.mail));
            self.btn_chuanchen.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.chuanChen));
        };
        //hd {
        p._bugChatRed = function () {
            var self = this;
            if (this.bugChat == null)
                self.redpoint_bugchat.visible = true;
        };
        //hd }
        p._tap_btn_bug = function () {
            //hd {
            //BugFeedBack.create().show();
            var self = this;
            self.bugChat = g_mid.BugChat.create().show();
            self.bugChat.onClose(function () {
                self.bugChat = null;
            });
            self.redpoint_bugchat.visible = false;
            //hd }
        };
        p._tap_btn_mail = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.mail);
        };
        p._tap_btn_chuanchen = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.chuanchen);
        };
        p._tap_btn_notice = function () {
            var self = this;
            //gd.NoticeCtrl.getNewOne(function(data){
            //    mo.showMsg(gc.id_c_msgCode.sysNotice, {sysNotice: data});
            //},self);
            gd.NoticeCtrl.getList(function (data) {
                g_base.NoticeDlg.create().setData({ notices: data }).show();
            }, self);
        };
        p._tap_btn_bindPhone = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.bindPhone);
        };
        /*
        _tap_btn_bindPhone(){
            var self = this;
            BindPhone.create().show().onClose(function(){
                var ch = mo_channel.getCurChannel();
                ch.isBindMobile(function(isSucc){
                    if(isSucc){
                        self.grp_bottom.removeElement(self.btn_bindPhone);
                    }
                },self);
            });
        }
        _tap_btn_saveGame(){
            var self = this;
            var sg:g_mid.SaveGame = SaveGame.create();
            sg.showAndType(self.showType).onClose(function(){
                var ch = mo_channel.getCurChannel();
                if(gd.userCtrl.isGetDeskReward()){
                    self.grp_bottom.removeElement(self.btn_saveGame);
                }
            });
        }

        //hd { 兄弟系统
        _tap_btn_xiongdi() {
            g_mid.FriendDialog.Open();
        }
        //hd }
        */
        p._tap_btn_desktop = function () {
            var self = this;
            var ch = mo_channel.getCurChannel();
            if (self.btn_desktop_showType == g_channel.WooolSdkDesktopShowType.XiongDi) {
                g_mid.FriendDialog.Open();
            }
            else {
                var type = 0;
                if (self.btn_desktop_showType == g_channel.WooolSdkDesktopShowType.FenXiang) {
                    type = 1;
                }
                else if (self.btn_desktop_showType == g_channel.WooolSdkDesktopShowType.GuangZhu) {
                    type = 2;
                }
                var sg = g_mid.SaveGame.create();
                sg.showAndType(type, g_channel.WooolSdkDesktopPosition.Home).onClose(function () {
                    self._update_desktop();
                });
            }
        };
        p._update_bindPhone = function () {
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.isBindMobile(function (isOpen, isBind) {
                if (isOpen && !isBind) {
                    self.btn_bindPhone.visible = true;
                    self.btn_bindPhone.includeInLayout = true;
                }
                else {
                    if (self.btn_bindPhone) {
                        self.btn_bindPhone.visible = false;
                        self.grp_bottom.removeElement(self.btn_bindPhone);
                        self.btn_bindPhone = null;
                    }
                }
            }, self);
        };
        // 刷desktop的样式
        p._update_desktop = function () {
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.getDesktopInfo(g_channel.WooolSdkDesktopPosition.Home, function (suc, data) {
                if (suc) {
                    switch (data.showType) {
                        case g_channel.WooolSdkDesktopShowType.FenXiang:
                            {
                                self.btn_desktop.source = "ico_desktop_share";
                            }
                            break;
                        case g_channel.WooolSdkDesktopShowType.GuangZhu:
                            {
                                self.btn_desktop.source = "ico_desktop_follow";
                            }
                            break;
                        case g_channel.WooolSdkDesktopShowType.XiongDi:
                            {
                                self.btn_desktop.source = "ico_xiongdi";
                            }
                            break;
                        default:
                            {
                                self.btn_desktop.source = "ico_desktop";
                            }
                            break;
                    }
                    self.btn_desktop_showType = data.showType;
                    if (data.flash)
                        self.btn_desktop.playEffect(true);
                }
                else {
                    self.btn_desktop.visible = false;
                    self.btn_desktop.includeInLayout = false;
                }
            }, self);
        };
        return HomeBottomBar;
    })(mo.gui.MenuLayer);
    g_mid.HomeBottomBar = HomeBottomBar;
    egret.registerClass(HomeBottomBar,"g_mid.HomeBottomBar");
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_mid;
(function (g_mid) {
    logger.initLogger(g_mid, "g-mid");
    logger.setLvl("g-mid", 4);
    var FightBottomBar = (function (_super) {
        __extends(FightBottomBar, _super);
        function FightBottomBar() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightBottomBar,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._checkRed);
            self.registerClassByKey(gd.HeroCtrl, gd.HeroCtrl.ON_CALL_HERO, self.onCallHero);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.vip.toString(), self._upTuLongBtn);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.lvl.toString(), self._upRebirthBtn);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var subModuleId = self.moduleParam.subModuleId;
            switch (subModuleId) {
                case g_consts.FS_SUBMID_SMELT:
                    self._tap_btn_resolve();
                    break;
                case g_consts.FS_SUBMID_PVP_OUT:
                    //none
                    break;
                case g_consts.FS_SUBMID_CHAT:
                    self._tap_btn_chat();
                    break;
            }
            var ch = mo_channel.getCurChannel();
            self._checkRed();
            self.onCallHero();
            self._upTuLongBtn();
            self._upRebirthBtn();
            // 刷新一下desktop
            self._update_desktop();
        };
        p.onCallHero = function () {
            var self = this;
            //英雄解锁按钮是否保留
            var idx = gd.heroCtrl.getNextIdxToBeOpen();
            var isShow = idx > 0 && (idx < 3 || idx == 3 && gd.userCtrl.get(gc.dsConsts.UserEntity.lvl) >= 145);
            if (isShow) {
                self.grp_bottom.addElementAt(self.btn_unlockRole, self.grp_bottom.numElements - 2);
            }
            else {
                if (self.btn_unlockRole.owner)
                    self.btn_unlockRole.owner.removeElement(self.btn_unlockRole);
            }
        };
        p._checkRed = function () {
            var self = this;
            self.btn_resolve.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.bag));
            var idx = gd.heroCtrl.getNextIdxToBeOpen();
            var isShow = idx > 0 && gd.heroCtrl.isOpenCfgOk(idx);
            self.btn_unlockRole.playEffect(isShow);
            self.btn_wing.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role1_wing)
                || gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role2_wing)
                || gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role3_wing));
            self.btn_practice.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.medal));
        };
        p._tap_btn_unlockRole = function () {
            var self = this;
            var idx = gd.heroCtrl.getNextIdxToBeOpen();
            if (idx < 3) {
                g_base.CreateRole.create().setData({ action: 1 }).show().onClose(self._checkRed, self);
            }
            else {
                g_base.Create4thRole.create().show().onClose(self._checkRed, self);
            }
        };
        p._tap_btn_wing = function () {
            var self = this;
            var moduleParam;
            //跳转参数参考TaskItem.ts
            moduleParam = { subModuleId: 3 };
            mo.moduleMgr.runModule(g_consts.moduleId.role, moduleParam);
        };
        p._tap_btn_resolve = function () {
            //ws.recordEvent("进入【熔炼】模块", 1);
            mo.moduleMgr.runModule(g_consts.moduleId.smelting);
        };
        p._tap_btn_practice = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.practice);
        };
        p._tap_btn_chat = function () {
            //ws.recordEvent("进入【聊天】模块", 1);
            g_mid.Chat.create().show();
        };
        p._tap_btn_tulong = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.tuLong);
        };
        p._upTuLongBtn = function () {
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var lvl = c_game[gc.id_c_game.tuLong][4];
            var lessVip3 = gd.userCtrl.getVip() < 3;
            var lessLvl66 = gd.userCtrl.getLvl() < lvl;
            var showTuLong = lessVip3 && lessLvl66;
            self.btn_tulong.visible = showTuLong;
            uiHelper.playUIEffect(self.efx_tulong, showTuLong);
        };
        p._tap_btn_rebirth = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.rebirth);
        };
        p._upRebirthBtn = function () {
            var self = this;
            var fristRebirthData = gd.reBirthCtrl.getRebirthCfg(1);
            self.btn_rebirth.visible = gd.userCtrl.getLvl() >= fristRebirthData.lvl - 5;
            self.onCallHero();
        };
        p._tap_btn_desktop = function () {
            var self = this;
            var ch = mo_channel.getCurChannel();
            if (self.btn_desktop_showType == g_channel.WooolSdkDesktopShowType.XiongDi) {
                g_mid.FriendDialog.Open();
            }
            else {
                var type = 0;
                if (self.btn_desktop_showType == g_channel.WooolSdkDesktopShowType.FenXiang) {
                    type = 1;
                }
                else if (self.btn_desktop_showType == g_channel.WooolSdkDesktopShowType.GuangZhu) {
                    type = 2;
                }
                var sg = g_mid.SaveGame.create();
                sg.showAndType(type, g_channel.WooolSdkDesktopPosition.Fight).onClose(function () {
                    self._update_desktop();
                });
            }
        };
        // 刷desktop的样式
        p._update_desktop = function () {
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.getDesktopInfo(g_channel.WooolSdkDesktopPosition.Fight, function (suc, data) {
                if (suc) {
                    switch (data.showType) {
                        case g_channel.WooolSdkDesktopShowType.FenXiang:
                            {
                                self.btn_desktop.source = "ico_desktop_share";
                            }
                            break;
                        case g_channel.WooolSdkDesktopShowType.GuangZhu:
                            {
                                self.btn_desktop.source = "ico_desktop_follow";
                            }
                            break;
                        case g_channel.WooolSdkDesktopShowType.XiongDi:
                            {
                                self.btn_desktop.source = "ico_xiongdi";
                            }
                            break;
                        default:
                            {
                                self.btn_desktop.source = "ico_desktop";
                            }
                            break;
                    }
                    self.btn_desktop_showType = data.showType;
                    if (data.flash)
                        self.btn_desktop.playEffect(true);
                }
                else {
                    self.btn_desktop.visible = false;
                    self.btn_desktop.includeInLayout = false;
                }
            }, self);
        };
        return FightBottomBar;
    })(mo.gui.MenuLayer);
    g_mid.FightBottomBar = FightBottomBar;
    egret.registerClass(FightBottomBar,"g_mid.FightBottomBar");
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_mid;
(function (g_mid) {
    var HomeMidBar = (function (_super) {
        __extends(HomeMidBar, _super);
        function HomeMidBar() {
            _super.apply(this, arguments);
        }
        var d = __define,c=HomeMidBar,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._checkRed);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._checkRed);
            self.registerClassByKey(gd.ChallengeCupCtrl, gd.ChallengeCupCtrl.ON_ACT_END, function (data) {
                var isOpen = data[gc.dsConsts.ChallengeCupData.isOpen];
                self.btn_kings_fight.playEffect(isOpen);
                if (!isOpen) {
                    mo.moduleMgr.runModule(g_consts.moduleId.defarenaWinner);
                }
            });
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var subModuleId = self.moduleParam.subModuleId;
            var param = self.moduleParam.param;
            switch (subModuleId) {
                case g_consts.HS_SUBMID_DAILY:
                    self._tap_btn_task();
                    break;
                case g_consts.HS_SUBMID_SIGN:
                    self._tap_btn_fuli();
                    break;
                case g_consts.HS_SUBMID_CUSTOM_LIST:
                    self._tap_btn_custom();
                    break;
                case g_consts.HS_SUBMID_HEART:
                    self._tap_btn_heart();
                    break;
            }
            self._updateKingsFight();
            self._checkRed();
        };
        p._checkRed = function () {
            var self = this;
            self.btn_print.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.medal));
            self.btn_heart.playEffect(false);
            self.task_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.task);
            self.fuli_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.fuli);
            self.btn_custom.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.custom));
            self.exp_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.demonLotus_main);
        };
        //擂台赛
        p._updateKingsFight = function () {
            var self = this;
            gd.challengeCupCtrl.getIsOpen(function (data) {
                self.btn_kings_fight.playEffect(gd.challengeCupCtrl.isOpen);
            }, self);
        };
        p._tap_btn_kings_fight = function () {
            var self = this;
            var oldIsOpen = gd.challengeCupCtrl.isOpen;
            gd.challengeCupCtrl.getIsOpen(function (data) {
                gd.challengeCupCtrl.isOpen ?
                    mo.moduleMgr.runModule(g_consts.moduleId.defArena)
                    : mo.moduleMgr.runModule(g_consts.moduleId.defarenaWinner);
                self.btn_kings_fight.playEffect(gd.challengeCupCtrl.isOpen);
            }, self);
        };
        p._tap_btn_task = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.taskDlg);
        };
        p._tap_btn_print = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.medal);
        };
        p._tap_btn_heart = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.heart);
        };
        p._tap_btn_recharge = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.recharge);
        };
        p._tap_btn_fuli = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.fuliDlg);
        };
        p._tap_btn_expBox = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.lotus);
        };
        p._tap_btn_custom = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.customList);
        };
        return HomeMidBar;
    })(mo.gui.MenuLayer);
    g_mid.HomeMidBar = HomeMidBar;
    egret.registerClass(HomeMidBar,"g_mid.HomeMidBar");
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_mid;
(function (g_mid) {
    var FightMidBar = (function (_super) {
        __extends(FightMidBar, _super);
        function FightMidBar() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FightMidBar,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._checkRed);
            self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ON_FIRST_REWARD_RECEIVED, self._upFirstBtn);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var subModuleId = self.moduleParam.subModuleId;
            var param = self.moduleParam.param;
            switch (subModuleId) {
                case g_consts.FS_SUBMID_ACTIVITY:
                    self._tap_btn_activity();
                    break;
                case g_consts.FS_SUBMID_RECHARGE:
                    self._tap_btn_recharge();
                    break;
                case g_consts.FS_SUBMID_VIP:
                    mo.moduleMgr.pushModule(g_consts.moduleId.vip, { showVipLv: param });
                    break;
            }
            self._checkRed();
            self._upFirstBtn();
            self._upTreasureBtn();
            self._upFiveDayBtn();
            self._upActivityEntry();
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
        };
        p._upTreasureBtn = function () {
            var self = this;
            var isOpen = gd.activityCtrl.getLotteryActivity() != null;
            if (!isOpen && self.btn_treasure) {
                self.btn_treasure.playEffect(false);
                mo.gui.helper.rm(self.grp_treasure);
                self.btn_treasure = null;
            }
        };
        p._upFirstBtn = function () {
            var self = this;
            var recived = gd.activityCtrl.hasReceiveFirstRecharge();
            self.btn_recharge.visible = false;
            if (recived) {
                self.btn_first.playEffect(false);
                self.btn_first.visible = false;
                self.btn_recharge.visible = true;
            }
        };
        p._upFiveDayBtn = function () {
            var self = this;
            var isOpenNew = gd.activityCtrl.getNewFourActivity() != null;
            if (isOpenNew) {
                if (!self.btn_five.visible) {
                    self.btn_five.playEffect(true);
                    self.grp_fiveDay.width = 74;
                    self.grp_fiveDay.visible = true;
                }
                //第5天活动还没做,所以到第5天时关闭特效
                if (gd.newFourDaysCtrl.getCurActDay() == 4) {
                    self.btn_five.playEffect(false);
                }
            }
            else {
                var isOpen = gd.activityCtrl.getFiveTargetActivity() != null;
                if (!isOpen) {
                    self.btn_five.playEffect(false);
                    self.grp_fiveDay.width = 13;
                    self.grp_fiveDay.visible = false;
                }
                if (isOpen && !self.btn_five.visible) {
                    self.btn_five.playEffect(true);
                    self.grp_fiveDay.width = 74;
                    self.grp_fiveDay.visible = true;
                }
                //第5天活动还没做,所以到第5天时关闭特效
                if (isOpen && gd.fiveDaysTargetCtrl.getCurActDay() == 4) {
                    self.btn_five.playEffect(false);
                }
            }
        };
        p._upActivityEntry = function () {
            var self = this;
            var isOpen = true;
            var ch = mo_channel.getCurChannel();
            ch.getGameSetting(function (data) {
                if (data && data['activity'] == -1) {
                    isOpen = false;
                }
                self.grp_activity.visible = isOpen;
                self.grp_activity.includeInLayout = isOpen;
            });
        };
        p._checkRed = function () {
            var self = this;
            self.btn_activity.playEffect(gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.activity)
                || gd.pointCtrl.isShow(gc.c_prop.pointEffectKey.sign));
            self.rank_red.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.rankPk);
        };
        p._tap_btn_activity = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.activityDlg);
        };
        p._tap_btn_recharge = function () {
            //ws.recordEvent("点击主城【充值按钮】", 1);
            mo.moduleMgr.runModule(g_consts.moduleId.recharge);
        };
        p._tap_btn_first = function () {
            //ws.recordEvent("点击主城【首充按钮】", 1);
            mo.moduleMgr.runModule(g_consts.moduleId.firstRecharge);
        };
        p._tap_btn_treasure = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.treasure);
        };
        p._tap_ico_chat = function () {
            var self = this;
            //ws.recordEvent("进入【聊天】模块", 1);
            g_mid.Chat.create().show();
        };
        p._tap_btn_rank = function () {
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.rank);
        };
        p._tap_btn_redPacket = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.redPacket);
        };
        p._tap_btn_five = function () {
            if (gd.activityCtrl.getNewFourActivity() != null) {
                mo.moduleMgr.runModule(g_consts.moduleId.newFourDay);
            }
            else if (gd.activityCtrl.getFiveTargetActivity() != null) {
                mo.moduleMgr.runModule(g_consts.moduleId.fiveDay);
            }
        };
        return FightMidBar;
    })(mo.gui.MenuLayer);
    g_mid.FightMidBar = FightMidBar;
    egret.registerClass(FightMidBar,"g_mid.FightMidBar");
})(g_mid || (g_mid = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_mid;
(function (g_mid) {
    var TuLong = (function (_super) {
        __extends(TuLong, _super);
        function TuLong() {
            _super.apply(this, arguments);
        }
        var d = __define,c=TuLong,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self.outsideClosable = true;
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_base.BaseItemCell;
            //hd { 玩吧需要切换样式
            var pt = mo_channel.getCurChannel().channel();
            if (pt == 'wanba')
                mo.gui.helper.setSkinName(self, g_mid.TuLongWanba.__className);
            //hd }
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_vip.text = 3 + "";
            var vip3NeedPt = self.getNextVipScore(2);
            self.bar_recharge.maximum = vip3NeedPt;
            var curValue = gd.userCtrl.getVipScore();
            self.bar_recharge.setValue(curValue);
            self._setEquipInfo(0);
            self._setEquipInfo(1);
            self._setEquipInfo(2);
            //设置最低充值额度
            var c_recharge = mo.getJSONWithFileName(gc.cfg_c_recharge);
            var rechargeId = 1, rechargeInfo = c_recharge[rechargeId];
            while (rechargeInfo != null) {
                var vipPt = rechargeInfo[gc.c_recharge_diamond];
                if ((curValue + vipPt) >= vip3NeedPt) {
                    rechargeId = rechargeInfo[gc.c_recharge_id];
                    break;
                }
                rechargeId++;
                rechargeInfo = c_recharge[rechargeId];
            }
            self._rechargeId = rechargeId;
            self._setItemInfo(self.grp_recharge, c_recharge[rechargeId]);
        };
        p._setItemInfo = function (group, info) {
            var self = this;
            var MULTIPLE = info[gc.c_recharge_isTreble] > 0 ? 3 : 1;
            var btn = group.getChildByName("btn");
            var label_cost = mo.gui.helper.getChild(group, "label_cost");
            var label_get = group.getChildByName("label_get");
            //hd { 玩吧的价格需要转换到星星币
            var cost = info[gc.c_recharge_cost];
            var pt = mo_channel.getCurChannel().channel();
            if (pt == 'wanba')
                cost *= 10;
            //hd }
            label_cost.text = cost + "";
            label_get.text = info[gc.c_recharge_diamond];
        };
        p._data_list_items = function () {
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var items = (c_game[gc.id_c_game.tuLong][3]).split(",");
            return items;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
            var ico_item = cell.ico_item;
            ico_item.showEquipName = true;
        };
        p._setEquipInfo = function (idx) {
            var self = this;
            var grp = self['grp_equip' + idx];
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var cfg = (c_game[gc.id_c_game.tuLong][idx]).split(",");
            var itemId = cfg[0], strLvl = cfg[1];
            var label_name = grp.getChildByName("label_name");
            var label_desc = grp.getChildByName("label_desc");
            var label_str_lvl = grp.getChildByName("label_str_lvl");
            //名称
            label_name.text = gd.equipCtrl.getEquipName(itemId);
            //评分
            var str = mo.STR.format("[ubb]评分:%s[/ubb]", gd.equipCtrl.getBaseEvaluate(itemId));
            var basePropArr = gd.equipCtrl.getBasePropArr(itemId);
            var strTemp1 = "[ubb]%s: %s[/ubb]";
            var strTemp2 = "[/br][ubb color=0x2EAAF7]%s: %s[/ubb]";
            var str = "", propData;
            for (var i = 0, li = basePropArr.length; i < li; i++) {
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0 ? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV);
            }
            label_desc.text = str;
            //强化等级信息
            var strLvlInfo = gd.equipCtrl.getStrLvlInfo(itemId, strLvl);
            var propKey = strLvlInfo[1];
            var propV = strLvlInfo[2];
            var str = mo.STR.format("[/br][ubb]%s+%s[/ubb]", gc.c_prop.heroProp[propKey], propV);
            label_str_lvl.text = [strLvl, str];
        };
        /**
         * 获取升到curVip的下一级vip所需经验
         * @param curVip
         * @returns {any}
         */
        p.getNextVipScore = function (curVip) {
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, curVip);
            return info[gc.c_vip_score];
        };
        p._tap_grp_recharge = function () {
            var self = this;
            var infos = mo.getJSONWithFileName(gc.cfg_c_recharge);
            self._doRecharge(infos[self._rechargeId]);
        };
        p._doRecharge = function (item) {
            var self = this;
            var str = "尝试购买【%s充值档】的次数";
            var rechargeId = item[gc.c_recharge_id];
            var payId = item[gc.c_recharge_payId];
            //ws.recordEvent("点击充值【" + item[gc.c_recharge_cost] + "元按钮】", 1);
            var payInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_payInfo, payId);
            var goodsId = payInfo[mo_channel.channelKeyMap[egret.project.channelId]][0];
            mo_channel.getCurChannel().pay(rechargeId, goodsId, function (data) {
                mo.log("充值成功");
            }, self);
        };
        return TuLong;
    })(mo.gui.Dlg);
    g_mid.TuLong = TuLong;
    egret.registerClass(TuLong,"g_mid.TuLong");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = TuLong;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_mid || (g_mid = {}));

var g_mid;
(function (g_mid) {
    var TuLongWanba = (function (_super) {
        __extends(TuLongWanba, _super);
        function TuLongWanba() {
            _super.apply(this, arguments);
        }
        var d = __define,c=TuLongWanba,p=c.prototype;
        return TuLongWanba;
    })(mo.gui.Dlg);
    g_mid.TuLongWanba = TuLongWanba;
    egret.registerClass(TuLongWanba,"g_mid.TuLongWanba");
})(g_mid || (g_mid = {}));

/* hd 割袍断义
 */
var g_mid;
(function (g_mid) {
    var FriendBreakDialog = (function (_super) {
        __extends(FriendBreakDialog, _super);
        function FriendBreakDialog() {
            _super.apply(this, arguments);
            this._loadingNextPage = false;
        }
        var d = __define,c=FriendBreakDialog,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_mid.FriendListItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            // 翻页
            self.list_items.scroller.addEventListener(egret.Event.COMPLETE, self._cbScrolled, self);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.reloadData();
        };
        p.reloadData = function () {
            var self = this;
            var items = self.data.items;
            if (items == null || items.length == 0) {
                self.sk_null.visible = true;
                return true;
            }
            self.sk_null.visible = false;
            // 加载数据
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self.data.items;
        };
        p._cbScrolled = function (e) {
            var self = this;
            if (self._loadingNextPage)
                return;
            var scl = e.currentTarget;
            var now = scl.scrollTop;
            var max = scl.getMaxScrollTop();
            if (now >= max) {
                // 开始加载下一个
                self._loadingNextPage = true;
                var argKeys = gc.iface.a_bonus_getInfo_args;
                var args = {};
                args[argKeys.lastId] = self.data.lastId;
                mo.requestWaiting4Server(gc.iface.a_bonus_getInfo, args, function (data) {
                    var rels = data[gc.dsConsts.BonusInfo.relations];
                    if (rels == null)
                        rels = [];
                    if (rels.length) {
                        var lid = g_mid.FriendDialog.getLastId(rels);
                        if (lid > self.data.lastId)
                            self.data.lastId = lid;
                        // 加入数据
                        self.data.items = self.data.items.concat(rels);
                        // 刷新
                        self.refreshList("list_items");
                        process.nextTick(function () {
                            scl.setScrollTop(now);
                        });
                        // 如果刷到了最后一页，则不需要重置loading状态放置多次无用请求
                        self._loadingNextPage = false;
                    }
                });
            }
        };
        p._click_list_items = function (e) {
            var self = this;
            var item = e.item;
            // 弹出删除的操作
            var name = item[gc.dsConsts.BonusRelationData.nickName];
            var alertText = "是否解除和[ubb color=#9b570b]" + name + "[/ubb]的兄弟关系?[/br]一旦解除关系，将不再享受兄弟之间的任何福利";
            g_mid.FriendMsgAlert.create().setData({
                callback: function () {
                    // 从 items中移除删掉的，再刷新
                    var id = item[gc.dsConsts.BonusRelationData.userId];
                    for (var i = 0; i < self.data.items.length; ++i) {
                        var each = self.data.items[i];
                        var eid = each[gc.dsConsts.BonusRelationData.userId];
                        if (eid == id) {
                            // 调用接口
                            var argKeys = gc.iface.a_bonus_breakRelation_args;
                            var args = {};
                            args[argKeys.inviteeUserId] = eid;
                            mo.requestWaiting4Server(gc.iface.a_bonus_breakRelation, args, function (data) {
                                // 删除
                                self.data.items.splice(i, 1);
                                // 重新加载
                                self.refreshList("list_items");
                            });
                            break;
                        }
                    }
                }, msg: alertText, icon: "tit_txt_xiongdi_break"
            }).show();
        };
        return FriendBreakDialog;
    })(mo.gui.Dlg);
    g_mid.FriendBreakDialog = FriendBreakDialog;
    egret.registerClass(FriendBreakDialog,"g_mid.FriendBreakDialog");
})(g_mid || (g_mid = {}));

/* hd 二次打开兄弟
 */
var g_mid;
(function (g_mid) {
    var FriendDialog = (function (_super) {
        __extends(FriendDialog, _super);
        function FriendDialog() {
            _super.apply(this, arguments);
            this._loadingNextPage = false;
        }
        var d = __define,c=FriendDialog,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_mid.FriendListItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            // 翻页
            self.list_items.scroller.addEventListener(egret.Event.COMPLETE, self._cbScrolled, self);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var info = self.data.info;
            var items = self.data.items;
            self.label_stat.text = '兄弟人数:' + info[gc.dsConsts.BonusShareData.relationCount] + '\n' + '累计元宝:' + info[gc.dsConsts.BonusShareData.amountDraw];
            self.label_value.text = '目前可领取:' + info[gc.dsConsts.BonusShareData.balance] + '元宝';
            self.reloadData();
        };
        p.reloadData = function () {
            var self = this;
            var items = self.data.items;
            if (items.length == 0) {
                self.sk_null.visible = true;
                return true;
            }
            self.sk_null.visible = false;
            // 加载数据
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self.data.items;
        };
        p._cbScrolled = function (e) {
            var self = this;
            if (self._loadingNextPage)
                return;
            var scl = e.currentTarget;
            var now = scl.scrollTop;
            var max = scl.getMaxScrollTop();
            if (now >= max) {
                // 开始加载下一个
                self._loadingNextPage = true;
                var argKeys = gc.iface.a_bonus_getInfo_args;
                var args = {};
                args[argKeys.lastId] = self.data.lastId;
                mo.requestWaiting4Server(gc.iface.a_bonus_getInfo, args, function (data) {
                    var rels = data[gc.dsConsts.BonusInfo.relations];
                    if (rels == null)
                        rels = [];
                    if (rels.length) {
                        var lid = FriendDialog.getLastId(rels);
                        if (lid > self.data.lastId)
                            self.data.lastId = lid;
                        // 加入数据
                        self.data.items = self.data.items.concat(rels);
                        // 刷新
                        self.refreshList("list_items");
                        process.nextTick(function () {
                            scl.setScrollTop(now);
                        });
                        // 如果刷到了最后一页，则不需要重置loading状态放置多次无用请求
                        self._loadingNextPage = false;
                    }
                });
            }
        };
        p._tap_btn_reinvite = function () {
            FriendDialog.Invite();
        };
        p._tap_btn_get = function () {
            var self = this;
            var info = self.data.info;
            var val = info[gc.dsConsts.BonusShareData.balance];
            if (val <= 0)
                return;
            // 调用领取金币的接口
            mo.requestWaiting4Server(gc.iface.a_bonus_draw, {}, function (data) {
                var added = data[gc.dsConsts.BonusDrawResult.added];
                var total = data[gc.dsConsts.BonusDrawResult.total];
                self.label_value.text = '目前可领取:0元宝';
                // 增加当前可以领取的数目
                info[gc.dsConsts.BonusShareData.amountDraw] += added;
                self.label_stat.text = '兄弟人数:' + info[gc.dsConsts.BonusShareData.relationCount] + '\n' + '累计元宝:' + info[gc.dsConsts.BonusShareData.amountDraw];
                // 提示
                g_base.BaseShowMsg.create().setData({ msg: '领取成功', interval: 2 }).show();
                // 更新数据
                gd.userCtrl.set(gc.dsConsts.UserEntity.diamond.toString(), total);
            });
        };
        p._tap_btn_help = function () {
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_help, 101);
            g_base.BaseShowMsg.create().setData({ msg: info[gc.c_help_helpText] }).show();
        };
        p._tap_btn_break = function () {
            var self = this;
            self.close();
            g_mid.FriendBreakDialog.create().setData(self.data).show();
        };
        FriendDialog.getLastId = function (items) {
            var lastId = 0;
            if (items == null)
                return lastId;
            items.forEach(function (item) {
                var id = item[gc.dsConsts.BonusRelationData.id];
                lastId = Math.max(id, lastId);
            }, this);
            return lastId;
        };
        FriendDialog.Open = function () {
            var argKeys = gc.iface.a_bonus_getInfo_args;
            var args = {};
            args[argKeys.lastId] = 0;
            // 从服务器上获得是第一次么
            mo.requestWaiting4Server(gc.iface.a_bonus_getInfo, args, function (data) {
                var info = data[gc.dsConsts.BonusInfo.shareInfo];
                var rels = data[gc.dsConsts.BonusInfo.relations];
                if (rels == null)
                    rels = [];
                if (info[gc.dsConsts.BonusShareData.isFirst]) {
                    g_mid.FriendFirstInvite.create().show();
                }
                else {
                    FriendDialog.create().setData({ info: info,
                        items: rels,
                        lastId: FriendDialog.getLastId(rels) }).show();
                }
            });
        };
        FriendDialog.Invite = function () {
            // 调用分享, 从服务器获得链接
            var argKeys = gc.iface.a_bonus_share_args;
            var args = {};
            args[argKeys.serverIndexId] = gd.userCtrl.get(gc.dsConsts.UserEntity.serverIndexId);
            // 从服务器上获得是第一次么
            mo.requestWaiting4Server(gc.iface.a_bonus_share, args, function (data) {
                var url = data[gc.dsConsts.BonusShareUrl.url];
                var gif = data[gc.dsConsts.BonusShareUrl.gifted];
                console.info("邀请好友的链接: " + url);
                mo_channel.getCurChannel().desktopShare(url, function (suc) {
                    // 通知服务器发送奖品
                    if (suc && !gif)
                        mo.requestWaiting4Server(gc.iface.a_bonus_sendShareGift, {}, function (data) { });
                });
            });
        };
        return FriendDialog;
    })(mo.gui.Dlg);
    g_mid.FriendDialog = FriendDialog;
    egret.registerClass(FriendDialog,"g_mid.FriendDialog");
})(g_mid || (g_mid = {}));

/*
  hd 第一次打开兄弟
*/
var g_mid;
(function (g_mid) {
    var FriendFirstInvite = (function (_super) {
        __extends(FriendFirstInvite, _super);
        function FriendFirstInvite() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FriendFirstInvite,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            // 读取配置文件
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_help, 100);
            this.label_content.text = info[gc.c_help_helpText];
        };
        p._tap_btn_invite = function () {
            g_mid.FriendDialog.Invite();
        };
        return FriendFirstInvite;
    })(mo.gui.Dlg);
    g_mid.FriendFirstInvite = FriendFirstInvite;
    egret.registerClass(FriendFirstInvite,"g_mid.FriendFirstInvite");
})(g_mid || (g_mid = {}));

var g_mid;
(function (g_mid) {
    var FriendListItem = (function (_super) {
        __extends(FriendListItem, _super);
        function FriendListItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FriendListItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var name = self.data[gc.dsConsts.BonusRelationData.nickName];
            var vip = self.data[gc.dsConsts.BonusRelationData.vip];
            var level = self.data[gc.dsConsts.BonusRelationData.level];
            var amn = self.data[gc.dsConsts.BonusRelationData.amount];
            if (name == null)
                name = '';
            if (vip == null)
                vip = 0;
            if (level == null)
                level = 0;
            if (amn == null)
                amn = 0;
            this.label_vip.text = vip + '';
            this.label_who.text = name + ' [ubb color=#ca5d05]Lv.' + level + '[/ubb]';
            this.label_value.text = '已累计获得福利:[ubb color=#cea007]' + amn + '元宝[/ubb]';
        };
        return FriendListItem;
    })(mo.gui.ItemRenderer);
    g_mid.FriendListItem = FriendListItem;
    egret.registerClass(FriendListItem,"g_mid.FriendListItem");
})(g_mid || (g_mid = {}));

var g_mid;
(function (g_mid) {
    var FriendMsgAlert = (function (_super) {
        __extends(FriendMsgAlert, _super);
        function FriendMsgAlert() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FriendMsgAlert,p=c.prototype;
        p._tap_btn_cancel = function () {
            var self = this;
            self.close();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var msg = self.data.msg;
            var icon = self.data.icon;
            self.label_message.text = msg;
            self.container.title = icon;
        };
        p._tap_btn_confirm = function () {
            var self = this;
            var callback = self.data.callback;
            if (callback)
                callback();
            self.close();
        };
        return FriendMsgAlert;
    })(mo.gui.Dlg);
    g_mid.FriendMsgAlert = FriendMsgAlert;
    egret.registerClass(FriendMsgAlert,"g_mid.FriendMsgAlert");
})(g_mid || (g_mid = {}));

