/**
 * Created by Administrator on 2016/1/5.
 */
var g_red;
(function (g_red) {
    var RedPacket = (function (_super) {
        __extends(RedPacket, _super);
        function RedPacket() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RedPacket,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_rec = g_red.RedPacketRecCell;
            //self._Item_list_totalRec = RedPacketTotalRecCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            for (var i = 0; i <= 9; ++i) {
                self["btn_" + i].addEventListener(egret.TouchEvent.TOUCH_TAP, self.onTapNum, self);
            }
            self.label_myRmb.text = self.label_myRmbInput.text = gd.userCtrl.getDiamond().toString();
            self.tab_type.selectedIndex = 0;
            self._tap_tab_type();
            self.label_sendRmb.text = "100";
            self.btn_people1.enabled = false;
            if (self.moduleParam) {
                self.setData(self.moduleParam.data);
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data; //RedEnvelopePersonalEntity
            var addUpServer = data[gc.dsConsts.RedEnvelopePersonalEntity.addUpServer];
            var addUpGuild = data[gc.dsConsts.RedEnvelopePersonalEntity.addUpGuild];
            var addUpGet = data[gc.dsConsts.RedEnvelopePersonalEntity.addUpGet];
            self.label_all.text = addUpServer ? addUpServer.toString() : "0";
            self.label_guild.text = addUpGuild ? addUpGuild.toString() : "0";
            self.label_get.text = addUpGet ? addUpGet.toString() : "0";
            self.checkCount();
        };
        p.checkCount = function () {
            var self = this;
            var selectedIndex = self.tab_type.selectedIndex;
            var counts = gd.redEnvelopePersonalCtrl.getDayCount(selectedIndex == 0 ? gc.c_prop.redEnvelopeTypeKey.comRed : gc.c_prop.redEnvelopeTypeKey.guildRed);
            self.label_shareDesc.text = mo.STR.format("VIP%s今日发送次数剩余%s/%s", counts[0], counts[1], counts[2]);
            self.label_shareDesc.visible = (counts[2] > 0);
            var vip = gd.userCtrl.getVip();
            var cfg_c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var redType = gc.c_vip_worldCount;
            var canRedVip = 0;
            var selectedIndex = self.tab_type.selectedIndex;
            if (selectedIndex == 0) {
                redType = gc.c_vip_worldCount;
            }
            else if (selectedIndex == 1) {
                redType = gc.c_vip_guildCount;
            }
            for (var key in cfg_c_vip) {
                if (cfg_c_vip[key][redType] != 0) {
                    canRedVip = parseInt(key);
                    break;
                }
            }
            if (vip < canRedVip) {
                self.btn_confirm.visible = false;
                self.label_cannotRed.visible = true;
                self.label_cannotRed.text = canRedVip;
            }
            else {
                self.btn_confirm.visible = true;
                self.label_cannotRed.visible = false;
            }
        };
        p.setMoney = function (value) {
            var self = this;
            self.label_myRmb.text = self.label_myRmbInput.text = gd.userCtrl.getDiamond().toString();
            if (value > gd.userCtrl.getDiamond()) {
                //value = gd.userCtrl.getDiamond();
                return mo.showMsg(gc.id_c_msgCode.noDiamond);
            }
            self.label_sendRmb.text = value.toString();
        };
        p._tap_btn_rmb1 = function () {
            var self = this;
            self.setMoney(100);
        };
        p._tap_btn_rmb2 = function () {
            var self = this;
            self.setMoney(500);
        };
        p._tap_btn_rmb3 = function () {
            var self = this;
            self.setMoney(800);
        };
        p._tap_btn_rmb4 = function () {
            var self = this;
            self.setMoney(1000);
        };
        p._tap_btn_people1 = function () {
            var self = this;
            self.btn_people1.enabled = false;
            self.btn_people2.enabled = true;
            self.btn_people3.enabled = true;
        };
        p._tap_btn_people2 = function () {
            var self = this;
            self.btn_people2.enabled = false;
            self.btn_people1.enabled = true;
            self.btn_people3.enabled = true;
        };
        p._tap_btn_people3 = function () {
            var self = this;
            self.btn_people3.enabled = false;
            self.btn_people1.enabled = true;
            self.btn_people2.enabled = true;
        };
        p._tap_btn_dice = function () {
            var self = this;
            var curRmb = gd.userCtrl.getDiamond();
            var ranRmb;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.redEnvelopeCfg);
            var selectedIndex = self.tab_type.selectedIndex;
            var maxNum = selectedIndex == 0 ? gameInfo[3] : gameInfo[4];
            if (curRmb <= 20) {
                ranRmb = curRmb;
            }
            else if (curRmb >= maxNum) {
                ranRmb = 20 + Math.ceil(Math.random() * (maxNum - 20));
            }
            else {
                ranRmb = 20 + Math.ceil(Math.random() * (curRmb - 20));
            }
            self.label_sendRmb.text = ranRmb.toString();
        };
        p._tap_btn_confirm = function () {
            var self = this;
            var type = self.tab_type.selectedIndex == 0 ? gc.c_prop.redEnvelopeTypeKey.comRed : gc.c_prop.redEnvelopeTypeKey.guildRed;
            var amount = parseInt(self.label_sendRmb.text);
            var personNum = !self.btn_people1.enabled ? 5 : !self.btn_people2.enabled ? 10 : 20;
            var wish = self.label_say.text;
            var spItemId = gc.c_prop.spItemIdKey.diamond;
            gd.redEnvelopeCtrl.sendRedEnvelope(type, spItemId, amount, personNum, wish, function () {
                self.setData(gd.redEnvelopePersonalCtrl.getData());
                self.checkCount();
                self.label_myRmb.text = self.label_myRmbInput.text = gd.userCtrl.getDiamond().toString();
                //gd.redEnvelopePersonalCtrl.getInfo(function(data){
                //    data;
                //}, this);
                mo.showMsg(gc.id_c_msgCode.packetSuccess);
            }, self);
        };
        p._tap_label_sendRmb = function () {
            var self = this;
            self.label_sendRmbInput.text = self.label_sendRmb.text;
            self.grp_numInput.visible = true;
        };
        p._tap_btn_ok = function () {
            var self = this;
            self.setMoney(parseInt(self.label_sendRmbInput.text));
            self.grp_numInput.visible = false;
        };
        p._tap_btn_del = function () {
            var self = this;
            var value = parseInt(self.label_sendRmbInput.text);
            value = Math.floor(value / 10);
            self.label_sendRmbInput.text = value.toString();
        };
        p._tap_btn_detail = function () {
            var self = this;
            var data = self.data; //RedEnvelopePersonalEntity
            g_red.RedPacketDetail.create().setData({ data: data }).show();
        };
        p.onTapNum = function (e) {
            var self = this;
            var target = e.currentTarget;
            var btns = [];
            for (var i = 0; i <= 9; ++i) {
                btns.push(self["btn_" + i]);
            }
            var index = btns.indexOf(target);
            self.label_sendRmbInput.text += index;
            var value = parseInt(self.label_sendRmbInput.text);
            self.label_sendRmbInput.text = value.toString();
        };
        p._data_list_rec = function () {
            var self = this;
            var data = self.data; //RedEnvelopePersonalEntity
            var getData = data[gc.dsConsts.RedEnvelopePersonalEntity.getData];
            return getData;
        };
        //_data_list_totalRec():any[]{
        //    var self = this;
        //    var data = self.data;//RedEnvelopePersonalEntity
        //    var getData = data[gc.dsConsts.RedEnvelopePersonalEntity.getData];
        //    return getData;
        //}
        p._tap_tab_type = function () {
            var self = this;
            var selectedIndex = self.tab_type.selectedIndex;
            self.grp_numInput.visible = false;
            if (selectedIndex == 0) {
                self.grp_redPacket.visible = true;
                self.grp_redRec.visible = false;
                self.ico_t1.visible = true;
                self.ico_t2.visible = false;
                self.btn_rmb3.visible = true;
                self.btn_rmb4.visible = false;
                self.label_desc.text = "向所有人发送随机元宝数量红包，并将消息显示在系统公告中，领取红包的人都将在聊天频道发送此消息。红包将在15秒内送达。";
            }
            else if (selectedIndex == 1) {
                self.grp_redPacket.visible = true;
                self.grp_redRec.visible = false;
                self.ico_t1.visible = false;
                self.ico_t2.visible = true;
                self.btn_rmb3.visible = false;
                self.btn_rmb4.visible = true;
                self.label_desc.text = "向行会成员发送随机元宝数量红包，并将消息显示在系统公告中，领取红包的人都将在聊天频道发送此消息。红包将在15秒内送达。";
            }
            else if (selectedIndex == 2) {
                self.grp_redPacket.visible = false;
                self.grp_redRec.visible = true;
                self.refreshList("list_rec");
            }
            self.checkCount();
        };
        p._tap_btn_recharge = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.recharge);
        };
        return RedPacket;
    })(mo.gui.Dlg);
    g_red.RedPacket = RedPacket;
    egret.registerClass(RedPacket,"g_red.RedPacket");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = RedPacket;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.redEnvelopePersonalCtrl.getInfo(function (data) {
                moduleParam.data = data;
                cb();
            }, this);
        });
    });
})(g_red || (g_red = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_red;
(function (g_red) {
    var RedPacketGet = (function (_super) {
        __extends(RedPacketGet, _super);
        function RedPacketGet() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RedPacketGet,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_get = g_red.RedPacketGetCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            if (self.moduleParam) {
                self.setData(self.moduleParam);
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            if (!data)
                return;
            var type = data[gc.dsConsts.RedEnvelopeEntity.redType];
            var name = gd.redEnvelopeCtrl.getNameById(data[gc.dsConsts.RedEnvelopeEntity.userId]);
            var desc = data[gc.dsConsts.RedEnvelopeEntity.wish];
            var getData = data[gc.dsConsts.RedEnvelopeEntity.getData];
            var getRmb = 0;
            for (var i = 0; getData && i < getData.length; ++i) {
                if (gd.userCtrl.getId() == getData[i][1]) {
                    getRmb = getData[i][0];
                    break;
                }
            }
            self.label_red.text = mo.STR.format("[%s]", gc.c_prop.redEnvelopeType[type]);
            self.label_rmb.text = getRmb.toString();
            self.label_name.text = name;
            self.label_desc.text = desc;
            var spItemId = data[gc.dsConsts.RedEnvelopeEntity.spItemId];
            self.setItemIcon(self.ico_item, spItemId);
        };
        //_data_list_get():any[]{
        //    var self = this;
        //    var data = self.data;
        //
        //    var getData = data[gc.dsConsts.RedEnvelopeEntity.getData];
        //    var hasGetDatas = [];
        //
        //    var spItemId = data[gc.dsConsts.RedEnvelopeEntity.spItemId];
        //
        //    var best = -1;
        //    for(var i=0; getData&&i<getData.length; ++i){
        //        if(getData[i].length<2)
        //            continue;
        //
        //        var dataObject = {}
        //        dataObject["spItemId"] = spItemId;
        //        dataObject["data"] = getData[i];
        //
        //        hasGetDatas.push(dataObject);
        //        if(getData[i][0]>best){
        //            best = getData[i][0];
        //        }
        //
        //
        //    }
        //    hasGetDatas.sort(function(a, b){
        //        return b["data"][0]-a["data"][0];
        //    });
        //    for(var i=0;i<hasGetDatas.length; ++i){
        //        var bestObject = {}
        //        bestObject["spItemId"] = spItemId;
        //        bestObject["data"] = best;
        //
        //        hasGetDatas[i].push(bestObject);
        //    }
        //
        //    return hasGetDatas;
        //}
        p._data_list_get = function () {
            var self = this;
            var data = self.data;
            var getData = data[gc.dsConsts.RedEnvelopeEntity.getData];
            var hasGetDatas = [];
            var best = -1;
            var spItemId = data[gc.dsConsts.RedEnvelopeEntity.spItemId];
            var countNum = 0;
            for (var i = 0; getData && i < getData.length; ++i) {
                if (getData[i].length < 2)
                    continue;
                if (countNum > 100) {
                    break;
                }
                hasGetDatas.push(getData[i]);
                if (getData[i][0] > best) {
                    best = getData[i][0];
                }
                countNum += 1;
            }
            hasGetDatas.sort(function (a, b) {
                return b[0] - a[0];
            });
            for (var i = 0; i < hasGetDatas.length; ++i) {
                hasGetDatas[i].push(best);
            }
            var dataArr = [];
            for (var i = 0; i < hasGetDatas.length; ++i) {
                var bestObject = {};
                bestObject["spItemId"] = spItemId;
                bestObject["data"] = hasGetDatas[i];
                dataArr.push(bestObject);
            }
            return dataArr;
        };
        p.setItemIcon = function (iconItem, spItemId) {
            var self = this;
            if (spItemId == gc.c_prop.spItemIdKey.diamond) {
                iconItem.source = "ico_yuanbao";
            }
            else {
                var imgPath = resHelper.getSmallItemPath(spItemId);
                RES.getResByUrl(imgPath, function (texture) {
                    iconItem.source = texture;
                }, self, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        return RedPacketGet;
    })(mo.gui.Dlg);
    g_red.RedPacketGet = RedPacketGet;
    egret.registerClass(RedPacketGet,"g_red.RedPacketGet");
})(g_red || (g_red = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_red;
(function (g_red) {
    var RedPacketGetCell = (function (_super) {
        __extends(RedPacketGetCell, _super);
        function RedPacketGetCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RedPacketGetCell,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!self.data)
                return;
            var data = self.data.data; //[元宝数量，用户Id,用户名称]
            if (!data)
                return;
            var rmb = data[0];
            var name = data[2];
            var best = data[data.length - 1];
            self.label_name.text = name;
            self.label_rmb.text = rmb.toString();
            self.ico_best.visible = best == rmb;
            var spItemId = self.data.spItemId;
            self.setItemIcon(self.ico_item, spItemId);
        };
        p.setItemIcon = function (iconItem, spItemId) {
            var self = this;
            if (spItemId == gc.c_prop.spItemIdKey.diamond) {
                iconItem.source = "ico_yuanbao";
            }
            else {
                var imgPath = resHelper.getSmallItemPath(spItemId);
                RES.getResByUrl(imgPath, function (texture) {
                    iconItem.source = texture;
                }, self, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        return RedPacketGetCell;
    })(mo.gui.ItemRenderer);
    g_red.RedPacketGetCell = RedPacketGetCell;
    egret.registerClass(RedPacketGetCell,"g_red.RedPacketGetCell");
})(g_red || (g_red = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_red;
(function (g_red) {
    var RedPacketList = (function (_super) {
        __extends(RedPacketList, _super);
        function RedPacketList() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RedPacketList,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_red = g_red.RedPacketListCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            gd.redEnvelopeCtrl.needToDel();
            self.reds = gd.redEnvelopeCtrl.getCanGetList().concat();
            //self.refreshList("list_red");
        };
        p.onReceive = function () {
            var self = this;
            gd.redEnvelopeCtrl.needToDel();
            self.reds = gd.redEnvelopeCtrl.getCanGetList().concat();
            if (self.reds.length > 0) {
                self.refreshList("list_red");
            }
            else {
                self.close();
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        p._data_list_red = function () {
            var self = this;
            if (self.reds) {
                return self.reds;
            }
            return [];
        };
        return RedPacketList;
    })(mo.gui.Dlg);
    g_red.RedPacketList = RedPacketList;
    egret.registerClass(RedPacketList,"g_red.RedPacketList");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = RedPacketList;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            cb();
        });
    });
})(g_red || (g_red = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_red;
(function (g_red) {
    var RedPacketRecCell = (function (_super) {
        __extends(RedPacketRecCell, _super);
        function RedPacketRecCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RedPacketRecCell,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            if (!data[0])
                return;
            var type = data[0];
            var rmb = data[1];
            var date = Date.newDate(data[2]);
            self.label_red.text = mo.STR.format("[%s]", gc.c_prop.redEnvelopeType[type]);
            self.label_rmb.text = rmb.toString();
            self.label_date.text = date.toFormat("YYYY-MM-DD");
        };
        return RedPacketRecCell;
    })(mo.gui.ItemRenderer);
    g_red.RedPacketRecCell = RedPacketRecCell;
    egret.registerClass(RedPacketRecCell,"g_red.RedPacketRecCell");
})(g_red || (g_red = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_red;
(function (g_red) {
    var RedPacketListCell = (function (_super) {
        __extends(RedPacketListCell, _super);
        function RedPacketListCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RedPacketListCell,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            if (!data)
                return;
            var type = data[gc.dsConsts.RedEnvelopeEntity.redType];
            var name = gd.redEnvelopeCtrl.getNameById(data[gc.dsConsts.RedEnvelopeEntity.userId]);
            self.label_name.text = name;
            self.label_red.text = mo.STR.format("[%s]", gc.c_prop.redEnvelopeType[type]);
            self.setRedType(type);
            var spItemId = data[gc.dsConsts.RedEnvelopeEntity.spItemId] || 0;
            if (spItemId > 0) {
                self.setItemIcon(self.img_icon, spItemId);
            }
        };
        p._tap_btn_get = function () {
            var self = this;
            var data = self.data;
            var getData = data[gc.dsConsts.RedEnvelopeEntity.getData]; //[[元宝数量，用户Id,用户名称]]
            gd.redEnvelopeCtrl.receiveBonus(data[gc.dsConsts.RedEnvelopeEntity.id], function (redData) {
                g_red.RedPacketGet.create().setData(redData).show().onClose(function () { self.delegate.onReceive(); });
            }, self);
        };
        p.setRedType = function (type) {
            var self = this;
            if (type == gc.c_prop.redEnvelopeTypeKey.sysComRed || type == gc.c_prop.redEnvelopeTypeKey.sysGuildRed) {
                self.label_red.bold = true;
                self.label_red.textColor = 0xEEDE35;
            }
            else {
                self.label_red.bold = false;
                self.label_red.textColor = 0xFFFFFF;
            }
        };
        p.setItemIcon = function (iconItem, spItemId) {
            var self = this;
            if (spItemId == gc.c_prop.spItemIdKey.diamond) {
                iconItem.source = "ico_yuanbao";
            }
            else {
                var imgPath = resHelper.getSmallItemPath(spItemId);
                RES.getResByUrl(imgPath, function (texture) {
                    iconItem.source = texture;
                }, self, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        return RedPacketListCell;
    })(mo.gui.ItemRenderer);
    g_red.RedPacketListCell = RedPacketListCell;
    egret.registerClass(RedPacketListCell,"g_red.RedPacketListCell");
})(g_red || (g_red = {}));

/**
 * Created by Administrator on 2016/1/6.
 */
var g_red;
(function (g_red) {
    var RedPacketSystem = (function (_super) {
        __extends(RedPacketSystem, _super);
        function RedPacketSystem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RedPacketSystem,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        return RedPacketSystem;
    })(mo.gui.Dlg);
    g_red.RedPacketSystem = RedPacketSystem;
    egret.registerClass(RedPacketSystem,"g_red.RedPacketSystem");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = RedPacketSystem;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            //gd.taskCtrl.getInfo(function() {
            cb();
            //}, this);
        });
    });
})(g_red || (g_red = {}));

/**
 * Created by admin on 16/5/30.
 */
/**
 * Created by Administrator on 2016/1/5.
 */
var g_red;
(function (g_red) {
    var RedPacketDetail = (function (_super) {
        __extends(RedPacketDetail, _super);
        function RedPacketDetail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RedPacketDetail,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_totalRec = g_red.RedPacketDetailCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.dataArr = null;
            self.refreshList("list_totalRec");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!self.data)
                return;
            var data = self.data.data; //RedEnvelopePersonalEntity
            var addUpGet = data[gc.dsConsts.RedEnvelopePersonalEntity.addUpGet];
            var itemData = data[gc.dsConsts.RedEnvelopePersonalEntity.exAddUpGet];
            if (!itemData)
                return;
            self.dataArr = utils.itemObj2ObjArr(itemData);
            var num = addUpGet ? addUpGet : 0;
            var id = gc.c_prop.spItemIdKey.diamond;
            if (num > 0) {
                var object = {
                    itemId: id,
                    count: num
                };
                self.dataArr.unshift(object);
            }
        };
        p._data_list_totalRec = function () {
            var self = this;
            return self.dataArr;
        };
        return RedPacketDetail;
    })(mo.gui.Dlg);
    g_red.RedPacketDetail = RedPacketDetail;
    egret.registerClass(RedPacketDetail,"g_red.RedPacketDetail");
})(g_red || (g_red = {}));

/**
 * Created by Administrator on 2016/1/5.
 */
var g_red;
(function (g_red) {
    var RedPacketDetailCell = (function (_super) {
        __extends(RedPacketDetailCell, _super);
        function RedPacketDetailCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=RedPacketDetailCell,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            if (!data)
                return;
            var spItemId = data.itemId;
            var num = data.count;
            self.label_get.text = num.toString();
            var temp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, spItemId);
            var name = temp ? temp[gc.t_item_name] : "";
            var tempName = "获得%s总数量:";
            var nameTxt = tempName.replace("%s", name);
            self.label_name.text = nameTxt;
            self.setItemIcon(self.img_icon, spItemId);
        };
        p.setItemIcon = function (iconItem, spItemId) {
            var self = this;
            if (spItemId == gc.c_prop.spItemIdKey.diamond) {
                iconItem.source = "ico_yuanbao";
            }
            else {
                var imgPath = resHelper.getSmallItemPath(spItemId);
                RES.getResByUrl(imgPath, function (texture) {
                    iconItem.source = texture;
                }, self, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        return RedPacketDetailCell;
    })(mo.gui.ItemRenderer);
    g_red.RedPacketDetailCell = RedPacketDetailCell;
    egret.registerClass(RedPacketDetailCell,"g_red.RedPacketDetailCell");
})(g_red || (g_red = {}));

