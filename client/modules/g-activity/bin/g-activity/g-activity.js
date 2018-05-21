/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var Activity7DayItem = (function (_super) {
        __extends(Activity7DayItem, _super);
        function Activity7DayItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Activity7DayItem,p=c.prototype;
        //itemList;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var actItem = self.data;
            self.label_desc.text = mo.STR.format("累计登录%s天", self.itemIndex + 1);
            //self.itemList = utils.itemObj2ObjArr(actItem[gc.dsConsts.ActivityItem.items]);
            var status = gd.activityCtrl.getSevenLoginStatus(self.itemIndex); // 0:已经领取，1：可领取，2:不可领取
            if (status == 0) {
                self.ico_hasGet.visible = true;
                self.btn_get.visible = false;
            }
            else if (status == 1) {
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                self.btn_get.enabled = true;
            }
            else {
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                self.btn_get.enabled = false;
            }
            //self.refreshList("list_items");
            self.list_items.dataProvider = new egret.gui.ArrayCollection(utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]));
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
        };
        //_data_list_items():any[]{
        //    var self = this;
        //    return utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]);
        //}
        p._tap_btn_get = function () {
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            gd.activityCtrl.receive(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex, function () {
                self.delegate.reset();
            }, self);
        };
        return Activity7DayItem;
    })(mo.gui.ItemRenderer);
    g_activity.Activity7DayItem = Activity7DayItem;
    egret.registerClass(Activity7DayItem,"g_activity.Activity7DayItem");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var Activity7Days = (function (_super) {
        __extends(Activity7Days, _super);
        function Activity7Days() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Activity7Days,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_activity.Activity7DayItem;
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            uiHelper.setEventTime(self.label_date, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        return Activity7Days;
    })(mo.gui.Layer);
    g_activity.Activity7Days = Activity7Days;
    egret.registerClass(Activity7Days,"g_activity.Activity7Days");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var ActivityRechargeItem = (function (_super) {
        __extends(ActivityRechargeItem, _super);
        function ActivityRechargeItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityRechargeItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            var actItem = self.data;
            self.label_desc.text = mo.STR.format("%s", actItem[gc.dsConsts.ActivityItem.rmb]);
            //self.itemList = utils.itemObj2ObjArr(actItem[gc.dsConsts.ActivityItem.items]);
            var status = gd.activityCtrl.getAllChargeCountStatus(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex); // 0:已经领取，1：可领取，2:不可领取
            if (status == 0) {
                self.ico_hasGet.visible = true;
                self.btn_get.visible = false;
                uiHelper.playUIEffect(self.effect_get, false);
            }
            else if (status == 1) {
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                uiHelper.playUIEffect(self.effect_get, true);
            }
            else {
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                uiHelper.playUIEffect(self.effect_get, false);
            }
            //self.refreshList("list_items");
            self.list_items.dataProvider = new egret.gui.ArrayCollection(utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]));
            self.list_items.height = self.list_items.dataProvider.length >= 4 ? 195 : 95;
            self.ico_bg.height = self.list_items.height + 90;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
        };
        //_data_list_items():any[]{
        //    var self = this;
        //    return utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]);
        //}
        p._tap_btn_get = function () {
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            var actItem = self.data;
            var status = gd.activityCtrl.getAllChargeCountStatus(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex); // 0:已经领取，1：可领取，2:不可领取
            if (status == 0) {
            }
            else if (status == 1) {
            }
            else {
                return mo.showMsg(gc.id_c_msgCode.totalChargeNotEnough1, actItem[gc.dsConsts.ActivityItem.rmb]);
            }
            gd.activityCtrl.receive(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex, function () {
                self.delegate.reset();
            }, self);
        };
        return ActivityRechargeItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityRechargeItem = ActivityRechargeItem;
    egret.registerClass(ActivityRechargeItem,"g_activity.ActivityRechargeItem");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var ActivityRecharge = (function (_super) {
        __extends(ActivityRecharge, _super);
        function ActivityRecharge() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityRecharge,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_activity.ActivityRechargeItem;
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            uiHelper.setEventTime(self.label_date, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.label_money.text = exActivity[gc.dsConsts.ExActivity.allRecharge].toString();
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        return ActivityRecharge;
    })(mo.gui.Layer);
    g_activity.ActivityRecharge = ActivityRecharge;
    egret.registerClass(ActivityRecharge,"g_activity.ActivityRecharge");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/30.
 */
var g_activity;
(function (g_activity) {
    var ActivityRedeemCode = (function (_super) {
        __extends(ActivityRedeemCode, _super);
        function ActivityRedeemCode() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityRedeemCode,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.touchEnabled = false;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_code.text = ActivityRedeemCode.DEFAULT;
            self.label_code.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLabelTap, this);
        };
        p.onLabelTap = function (e) {
            var self = this;
            if (self.label_code.text == ActivityRedeemCode.DEFAULT)
                self.label_code.text = "";
        };
        p._tap_btn_code = function () {
            var self = this;
            if (self.label_code.text == ActivityRedeemCode.DEFAULT) {
                return mo.showMsg(gc.id_c_msgCode.cdKeyNull);
            }
            gd.couponCtrl.use(self.label_code.text, function () {
            }, self);
        };
        ActivityRedeemCode.DEFAULT = "请输入兑换码";
        return ActivityRedeemCode;
    })(mo.gui.Layer);
    g_activity.ActivityRedeemCode = ActivityRedeemCode;
    egret.registerClass(ActivityRedeemCode,"g_activity.ActivityRedeemCode");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var ActivityTabItem = (function (_super) {
        __extends(ActivityTabItem, _super);
        function ActivityTabItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityTabItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ACTIVITY_OP, self.checkRedPoint);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.ico_red.visible = false;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            var activity = data[gc.dsConsts.ExActivity.activity];
            self.ico_titile.source = resHelper.getEventIconPath(activity[gc.dsConsts.ActivityEntity.type]);
            self.checkRedPoint();
        };
        p.checkRedPoint = function () {
            var self = this;
            var activity = self.data[gc.dsConsts.ExActivity.activity];
            self.ico_red.visible = gd.activityCtrl.isPoint(activity[gc.dsConsts.ActivityEntity.id]);
        };
        return ActivityTabItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityTabItem = ActivityTabItem;
    egret.registerClass(ActivityTabItem,"g_activity.ActivityTabItem");
})(g_activity || (g_activity = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_activity;
(function (g_activity) {
    var SignItem = (function (_super) {
        __extends(SignItem, _super);
        function SignItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=SignItem,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self.state = 0;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            var kv = utils.obj2KVArr(data[1]);
            self.ico_item.setData({ itemId: kv[0], count: kv[1] });
            self.state = gd.signCtrl.getState(data[0]);
            self.invalidateSkinState();
            if (self.state == 2) {
                if (!self.efx) {
                    var efx = self.efx = g_comp.UIEffect.create();
                    efx.performanceControl = false;
                    efx.y = -5;
                    efx.effectId = 18;
                    efx.autoPlay = true;
                    self.grp_center.addElement(efx);
                }
            }
            else {
                if (self.efx) {
                    self.efx.stop();
                    self.grp_center.removeElement(self.efx);
                }
                self.efx = null;
            }
        };
        p.getCurrentSkinState = function () {
            var self = this;
            if (self.state == 1)
                return "disabled";
            if (self.state == 3)
                return "canpatch";
            return "up";
        };
        return SignItem;
    })(mo.gui.ItemRenderer);
    g_activity.SignItem = SignItem;
    egret.registerClass(SignItem,"g_activity.SignItem");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/11/6.
 */
var g_activity;
(function (g_activity) {
    var ActivitySign = (function (_super) {
        __extends(ActivitySign, _super);
        function ActivitySign() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivitySign,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_activity.SignItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_month.text = "" + (Date.newDate().getMonth() + 1);
        };
        p._data_list_items = function () {
            var self = this;
            return gd.signCtrl.getSignItems();
        };
        p._click_list_items = function (event) {
            var self = this;
            var signItemData = event.item;
            //0不可签，1已签，2可签，3可补签
            var state = event.itemRenderer.state;
            if (state == 2) {
                gd.signCtrl.sign(self._refresh, self);
            }
            else if (state == 3) {
                gd.signCtrl.patchSign(self._refresh, self);
            }
        };
        p._refresh = function () {
            var self = this;
            self.refreshList('list_items');
        };
        return ActivitySign;
    })(mo.gui.Layer);
    g_activity.ActivitySign = ActivitySign;
    egret.registerClass(ActivitySign,"g_activity.ActivitySign");
})(g_activity || (g_activity = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityDlg = (function (_super) {
        __extends(ActivityDlg, _super);
        function ActivityDlg() {
            _super.apply(this, arguments);
            this._comps = [];
        }
        var d = __define,c=ActivityDlg,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_activitys = g_activity.ActivityTabItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._allExActivitys = gd.activityCtrl.getMainList();
            self.list_activitys.selectedIndex = 0;
            self.label_empty.visible = false;
            for (var i = 0; i < self._allExActivitys.length; ++i) {
                var exActivity = self._allExActivitys[i];
                var type = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.type);
                if (type == gc.c_prop.activityTypeKey.sevenLogin) {
                    self._comps.push(g_activity.Activity7Days.create().setData({ tray: self.container }).show());
                }
                else if (type == gc.c_prop.activityTypeKey.allChargeCount) {
                    self._comps.push(g_activity.ActivityRecharge.create().setData({ tray: self.container }).show());
                }
                else if (type == gc.c_prop.activityTypeKey.redeemCode) {
                    self._comps.push(g_activity.ActivityRedeemCode.create().setData({ tray: self.container }).show());
                }
                else if (type == gc.c_prop.activityTypeKey.sign) {
                    self._comps.push(g_activity.ActivitySign.create().setData({ tray: self.container }).show());
                }
                else if (type == gc.c_prop.activityTypeKey.mysterShop) {
                    self._comps.push(g_activity.ActivityMysteryShop.create().setData({ tray: self.container }).show());
                }
                else if (type == gc.c_prop.activityTypeKey.singleCharge) {
                    self._comps.push(g_activity.ActivitySingleRchg.create().setData({ tray: self.container }).show());
                }
            }
            process.nextTick(function () {
                if (self._allExActivitys.length > 0) {
                    self.goTab(self._allExActivitys[0]);
                }
            });
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
        };
        p._hideAllComp = function () {
            var self = this;
            for (var i = 0, li = self._comps.length; i < li; i++) {
                self._comps[i].visible = false;
            }
        };
        p.reset = function () {
            var self = this;
            self.goTab(self._curExActivity);
        };
        p.goTab = function (exActivity) {
            var self = this;
            var index = self._allExActivitys.indexOf(exActivity);
            self._curExActivity = exActivity;
            self._hideAllComp();
            var comp = self._comps[index];
            comp.visible = true;
            comp.setData({ tray: self.container, exActivity: exActivity });
        };
        p._data_list_activitys = function () {
            var self = this;
            return self._allExActivitys;
        };
        p._click_list_activitys = function (event) {
            var self = this;
            var item = event.item;
            self.goTab(item);
        };
        return ActivityDlg;
    })(mo.gui.Dlg);
    g_activity.ActivityDlg = ActivityDlg;
    egret.registerClass(ActivityDlg,"g_activity.ActivityDlg");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = g_activity.ActivityNewCenter;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.activityCtrl.getInfo(function () {
                cb();
            }, this);
        });
    });
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var FiveDay = (function (_super) {
        __extends(FiveDay, _super);
        function FiveDay() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FiveDay,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_activity.FiveItem;
            self._targets = [
                ["ico_diyitian", "ico_wentian"],
                ["ico_diertian", "ico_senliu"],
                ["ico_dishantian", "ico_qiling"],
                ["ico_dishitian", "ico_tianxia"]
            ];
            self.registerClassByKey(gd.FiveDaysTargetCtrl, gd.FiveDaysTargetCtrl.ON_RECEIVED, self.reset);
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            var fdCtrl = gd.fiveDaysTargetCtrl;
            uiHelper.setEventTime(self.label_date, Date.newDate(fdCtrl.getActivityStartTime()), fdCtrl.getActivityEndTime());
        };
        p.reset = function () {
            var self = this;
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self._targets;
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 24 }).show();
        };
        p._click_list_items = function (event) {
            var self = this;
            var idx = event.itemIndex;
            g_activity.FiveDetail.create().setData({ idx: idx }).show();
        };
        return FiveDay;
    })(mo.gui.Dlg);
    g_activity.FiveDay = FiveDay;
    egret.registerClass(FiveDay,"g_activity.FiveDay");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = FiveDay;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.fiveDaysTargetCtrl.getInfo(function (data) {
                cb();
            }, this);
        });
    });
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var FiveItem = (function (_super) {
        __extends(FiveItem, _super);
        function FiveItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FiveItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.ico_day.source = self.data[0];
            self.ico_title.source = self.data[1];
            //完成状态
            var normalTargetInfo = gd.fiveDaysTargetCtrl.getNormalTargetInfo(self.itemIndex);
            var canGet = normalTargetInfo[1];
            self.img_red.visible = canGet;
            self.img_selected.visible = self.itemIndex <= gd.fiveDaysTargetCtrl.getCurActDay();
            //设置活动时间
            self.label_date.visible = self.label_d.visible = false;
            self.label_date.textColor = 0xFC0707; //红色
            self.label_d.textColor = 0xFC0707;
            if (self.itemIndex != 4) {
                self.label_date.visible = self.label_d.visible = true;
                var fdCtrl = gd.fiveDaysTargetCtrl;
                var starTime = fdCtrl.getStarTime(self.itemIndex);
                var endTime = fdCtrl.getCalTime(self.itemIndex);
                if (gd.fiveDaysTargetCtrl.isTodayTarget(self.itemIndex)) {
                    self.label_date.textColor = 0x28FC07; //绿色
                    self.label_d.textColor = 0x28FC07;
                }
                ;
                uiHelper.setEventTime(self.label_date, starTime, endTime);
            }
        };
        return FiveItem;
    })(mo.gui.ItemRenderer);
    g_activity.FiveItem = FiveItem;
    egret.registerClass(FiveItem,"g_activity.FiveItem");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var FiveRankItem = (function (_super) {
        __extends(FiveRankItem, _super);
        function FiveRankItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FiveRankItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_empty.visible = false;
            for (var i = 0, li = 2; i < li; i++) {
                self['ico_item' + i].visible = false;
                self['ico_item' + i].showEquipName = true;
                self['ico_item' + i].onClick(function (ico_item) {
                    g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(ico_item.get('itemId'), null) }).show();
                }, self);
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            var FiveDaysTargetEntity = gc.dsConsts.FiveDaysTargetEntity;
            var dayIdx = self.delegate.data.idx;
            var isDone = gd.fiveDaysTargetCtrl.isCertified(dayIdx); //是否已认证
            self.img_done.visible = isDone;
            var idx = dayIdx * 3 + self.itemIndex;
            //奖励
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.targetRank);
            var itemCfg = c_game[idx].split(',');
            for (var i = 0, li = 2; i < li; i++) {
                var hasCfg = itemCfg[i * 2] != null;
                self['ico_item' + i].visible = hasCfg;
                if (hasCfg) {
                    self['ico_item' + i].setData({ itemId: itemCfg[i * 2], count: itemCfg[i * 2 + 1] });
                }
            }
            //排名
            var rank = self.itemIndex;
            var rankStrs = ["1st", "2nd", "3rd"];
            if (rank < 3) {
                self.ico_rank.source = "ico_arena_" + rankStrs[rank];
            }
            //用户信息
            var hasData = data != null;
            self.label_name.visible = hasData;
            self.label_rankType.visible = hasData;
            self.label_combat.visible = hasData;
            self.ico_head.visible = hasData;
            self.label_empty.visible = !hasData;
            var passedDayIdx = gd.fiveDaysTargetCtrl.getCurActDay() > dayIdx;
            if (!hasData)
                self.label_empty.text = passedDayIdx ? "结算中..." : "虚位以待";
            if (hasData) {
                self.label_name.text = data[FiveDaysTargetEntity.userName];
                self.label_rankType.text = self.__class.rankType[self.delegate.data.idx];
                self.label_combat.text = data[FiveDaysTargetEntity.rankValue];
                self.ico_head.setData({ icoId: data[FiveDaysTargetEntity.iconId],
                    vip: data[FiveDaysTargetEntity.pkWinCount] });
            }
        };
        FiveRankItem.rankType = [
            "战力:",
            "总阶数:",
            "竞技场排名:",
            "行会等级:",
            "",
        ];
        return FiveRankItem;
    })(mo.gui.ItemRenderer);
    g_activity.FiveRankItem = FiveRankItem;
    egret.registerClass(FiveRankItem,"g_activity.FiveRankItem");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var FiveDetail = (function (_super) {
        __extends(FiveDetail, _super);
        function FiveDetail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=FiveDetail,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_base.BaseItemCell;
            self._Item_list_ranks = g_activity.FiveRankItem;
            self._targets = [
                //[第一天, 标题, 普通目标描述, 任务id, 目标值]
                ["ico_diyitian", "ico_wentian", "grp_combat", "ico_zanlipaiming", 3100004, "label_combatNeed"],
                ["ico_diertian", "ico_senliu", "grp_wing", "ico_chibangpaiming", 3100002, "label_wingLvlNeed"],
                ["ico_dishantian", "ico_qiling", "grp_arena", "ico_jinjichangpm", 3100003, "label_arenaNum"],
                ["ico_dishitian", "ico_tianxia", "img_guild", "ico_hanhuidenjipm", 3100005],
                ["ico_diwutian", "ico_weiwoduzhun", "img_wc", "ico_shouleipaiming"]
            ];
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var idx = self.data.idx;
            self.img_wczb.visible = idx == 4;
            self.title_day.visible = idx < 4;
            self.title_day.source = self._targets[idx][0];
            self.ico_title.source = self._targets[idx][1];
            self._hideAll();
            self[self._targets[idx][2]].visible = true;
            //设置参数
            var taskId = self._targets[idx][4];
            if (taskId) {
                var task = mo.getJSONWithFileNameAndID(gc.cfg_c_task, taskId);
                var targetV = task[gc.c_task_targetValue];
                var label = self[self._targets[idx][5]];
                if (targetV && label) {
                    label.text = targetV + "";
                }
            }
            //完成状态
            var normalTargetInfo = gd.fiveDaysTargetCtrl.getNormalTargetInfo(idx);
            self.img_unFinished.visible = false;
            self.btn_get.visible = false;
            self.btn_done.visible = false;
            var finished = normalTargetInfo[0];
            var canGet = normalTargetInfo[1];
            var isGot = normalTargetInfo[2];
            var outDate = normalTargetInfo[3];
            self.img_unFinished.visible = !finished && !outDate;
            self.btn_get.visible = (!finished || !isGot) && !outDate;
            self.btn_done.visible = isGot;
            self.btn_outdate.visible = outDate;
            self.img_rank.source = self._targets[idx][3];
            //设置活动时间
            self.label_date.visible = self.label_d.visible = false;
            if (idx != 4) {
                self.label_date.visible = self.label_d.visible = true;
                var fdCtrl = gd.fiveDaysTargetCtrl;
                uiHelper.setEventTime(self.label_date, fdCtrl.getStarTime(idx), fdCtrl.getCalTime(idx));
            }
            self.img_red.visible = canGet;
        };
        p._hideAll = function () {
            var self = this;
            var titles = ["grp_combat", "grp_wing", "grp_arena", "grp_wing", "img_guild", "img_wc"];
            for (var i = 0, li = titles.length; i < li; i++) {
                self[titles[i]].visible = false;
            }
        };
        p._data_list_items = function () {
            var self = this;
            var idx = self.data.idx;
            var taskId = self._targets[idx][4];
            var rewardArr = taskId != null ? utils.itemObj2ObjArr(gd.taskCtrl.getTaskReward(taskId)) : [];
            return rewardArr;
        };
        p._data_list_ranks = function () {
            var self = this;
            var idx = self.data.idx;
            return idx == 4 ? [] : gd.fiveDaysTargetCtrl.getRankList(self.data.idx);
        };
        p._tap_btn_get = function () {
            var self = this;
            var idx = self.data.idx;
            gd.fiveDaysTargetCtrl.receive(idx, self.dataChanged, self);
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            var ico_item = cell.ico_item;
            ico_item.showEquipName = true;
            cell.tapShowDetail = true;
        };
        return FiveDetail;
    })(mo.gui.Dlg);
    g_activity.FiveDetail = FiveDetail;
    egret.registerClass(FiveDetail,"g_activity.FiveDetail");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var NewFiveDay = (function (_super) {
        __extends(NewFiveDay, _super);
        function NewFiveDay() {
            _super.apply(this, arguments);
        }
        var d = __define,c=NewFiveDay,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
            mo.gui.helper.setSkinName(this, g_activity.FiveDay.__className);
            self._Item_list_items = g_activity.NewFiveItem;
            self.registerClassByKey(gd.NewFourDaysCtrl, gd.NewFourDaysCtrl.ON_RECEIVED, self.reset);
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
            self._targets = [
                ["ico_diyitiancibang", "ico_senliu"],
                ["ico_diertianbaoshi", "ico_xuanguangs"],
                ["ico_diyitianyuangsengs", "ico_ningshengs"],
                ["ico_disitianzanli", "ico_wentian"]
            ];
            uiHelper.setEventTime(self.label_date, Date.newDate(gd.newFourDaysCtrl.getActivityStartTime()), gd.newFourDaysCtrl.getActivityEndTime());
        };
        p.reset = function () {
            var self = this;
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self._targets;
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 24 }).show();
        };
        p._click_list_items = function (event) {
            var self = this;
            var idx = event.itemIndex;
            g_activity.NewFiveDetail.create().setData({ idx: idx }).show();
        };
        return NewFiveDay;
    })(mo.gui.Dlg);
    g_activity.NewFiveDay = NewFiveDay;
    egret.registerClass(NewFiveDay,"g_activity.NewFiveDay");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = NewFiveDay;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.newFourDaysCtrl.getInfo(function (data) {
                cb();
            }, this);
        });
    });
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var NewFiveItem = (function (_super) {
        __extends(NewFiveItem, _super);
        function NewFiveItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=NewFiveItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            mo.gui.helper.setSkinName(this, g_activity.FiveItem.__className);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.ico_day.source = self.data[0];
            self.ico_title.source = self.data[1];
            //完成状态
            var normalTargetInfo = gd.newFourDaysCtrl.getNormalTargetInfo(self.itemIndex);
            var canGet = normalTargetInfo[1];
            self.img_red.visible = canGet;
            self.img_selected.visible = self.itemIndex <= gd.newFourDaysCtrl.getCurActDay();
            //设置活动时间
            self.label_date.visible = self.label_d.visible = false;
            self.label_date.textColor = 0xFC0707; //红色
            self.label_d.textColor = 0xFC0707;
            if (self.itemIndex != 4) {
                self.label_date.visible = self.label_d.visible = true;
                var starTime = gd.newFourDaysCtrl.getStarTime(self.itemIndex);
                var endTime = gd.newFourDaysCtrl.getCalTime(self.itemIndex);
                if (gd.newFourDaysCtrl.isTodayTarget(self.itemIndex)) {
                    self.label_date.textColor = 0x28FC07; //绿色
                    self.label_d.textColor = 0x28FC07;
                }
                ;
                uiHelper.setEventTime(self.label_date, starTime, endTime);
            }
        };
        return NewFiveItem;
    })(mo.gui.ItemRenderer);
    g_activity.NewFiveItem = NewFiveItem;
    egret.registerClass(NewFiveItem,"g_activity.NewFiveItem");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var NewFiveRankItem = (function (_super) {
        __extends(NewFiveRankItem, _super);
        function NewFiveRankItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=NewFiveRankItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            mo.gui.helper.setSkinName(this, g_activity.FiveRankItem.__className);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.label_empty.visible = false;
            for (var i = 0, li = 2; i < li; i++) {
                self['ico_item' + i].visible = false;
                self['ico_item' + i].showEquipName = true;
                self['ico_item' + i].onClick(function (ico_item) {
                    g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(ico_item.get('itemId'), null) }).show();
                }, self);
            }
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            var FiveDaysTargetEntity = gc.dsConsts.FiveDaysTargetEntity;
            var dayIdx = self.delegate.data.idx;
            var isDone = gd.newFourDaysCtrl.isCertified(dayIdx); //是否已认证
            self.img_done.visible = isDone;
            var idx = dayIdx * 3 + self.itemIndex;
            //奖励
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.newFourRank);
            var reString = gameInfo[idx];
            var strs = reString.split(",");
            var i = 0;
            for (var j = 0; strs && j < strs.length; j += 2) {
                i = j / 2;
                self['ico_item' + i].setData({ itemId: strs[j], count: strs[j + 1] });
                self['ico_item' + i].visible = true;
            }
            for (var n = i + 1; n < 2; ++n) {
                self['ico_item' + n].visible = false;
            }
            //排名
            var rank = self.itemIndex;
            var rankStrs = ["1st", "2nd", "3rd"];
            if (rank < 3) {
                self.ico_rank.source = "ico_arena_" + rankStrs[rank];
            }
            //用户信息
            var hasData = data != null;
            self.label_name.visible = hasData;
            self.label_rankType.visible = hasData;
            self.label_combat.visible = hasData;
            self.ico_head.visible = hasData;
            self.label_empty.visible = !hasData;
            var passedDayIdx = gd.newFourDaysCtrl.getCurActDay() > dayIdx;
            if (!hasData)
                self.label_empty.text = passedDayIdx ? "结算中..." : "虚位以待";
            if (hasData) {
                self.label_name.text = data[FiveDaysTargetEntity.userName];
                self.label_rankType.text = self.__class.rankType[self.delegate.data.idx];
                self.label_combat.text = data[FiveDaysTargetEntity.rankValue];
                self.ico_head.setData({ icoId: data[FiveDaysTargetEntity.iconId],
                    vip: data[FiveDaysTargetEntity.pkWinCount] });
            }
        };
        NewFiveRankItem.rankType = [
            "总阶数:",
            "总级数:",
            "总级数:",
            "战力:",
            "",
        ];
        return NewFiveRankItem;
    })(mo.gui.ItemRenderer);
    g_activity.NewFiveRankItem = NewFiveRankItem;
    egret.registerClass(NewFiveRankItem,"g_activity.NewFiveRankItem");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var NewFiveDetail = (function (_super) {
        __extends(NewFiveDetail, _super);
        function NewFiveDetail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=NewFiveDetail,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._layerOpt.shownWithAction = false;
            mo.gui.helper.setSkinName(this, g_activity.FiveDetail.__className);
            self._Item_list_items = g_base.BaseItemCell;
            self._Item_list_ranks = g_activity.NewFiveRankItem;
            self._targets = [
                //[第一天, 标题, 普通目标描述, 任务id, 目标值]
                ["ico_diyitiancibang", "ico_senliu", "grp_wing", "ico_chibangpaiming", 0, "label_combatNeed"],
                ["ico_diertianbaoshi", "ico_xuanguangs", "grp_gem", "ico_zuangbeibaospm", 1, "label_gem"],
                ["ico_diyitianyuangsengs", "ico_ningshengs", "grp_realm", "ico_yuanshenzdjpm", 2, "label_realm"],
                ["ico_disitianzanli", "ico_wentian", "grp_combat", "ico_zanlipaiming", 3]
            ];
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var idx = self.data.idx;
            self.img_wczb.visible = idx == 4;
            self.title_day.visible = idx < 4;
            self.title_day.source = self._targets[idx][0];
            self.ico_title.source = self._targets[idx][1];
            self._hideAll();
            self[self._targets[idx][2]].visible = true;
            //设置参数
            var gameParamIdx = self._targets[idx][4];
            if (gameParamIdx) {
                var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.newFourNeedValue);
                var targetV = gameInfo[gameParamIdx];
                var label = self[self._targets[idx][5]];
                if (targetV && label) {
                    label.text = targetV + "";
                }
            }
            //完成状态
            var normalTargetInfo = gd.newFourDaysCtrl.getNormalTargetInfo(idx);
            self.img_unFinished.visible = false;
            self.btn_get.visible = false;
            self.btn_done.visible = false;
            var finished = normalTargetInfo[0];
            var canGet = normalTargetInfo[1];
            var isGot = normalTargetInfo[2];
            var outDate = normalTargetInfo[3];
            self.img_unFinished.visible = !finished && !outDate;
            self.btn_get.visible = (!finished || !isGot) && !outDate;
            self.btn_done.visible = isGot;
            self.btn_outdate.visible = outDate;
            self.img_rank.source = self._targets[idx][3];
            //设置活动时间
            self.label_date.visible = self.label_d.visible = false;
            if (idx != 4) {
                self.label_date.visible = self.label_d.visible = true;
                uiHelper.setEventTime(self.label_date, gd.newFourDaysCtrl.getStarTime(idx), gd.newFourDaysCtrl.getCalTime(idx));
            }
            self.img_red.visible = canGet;
        };
        p._hideAll = function () {
            var self = this;
            var titles = ["grp_combat", "grp_wing", "grp_arena", "grp_wing", "img_guild", "img_wc"];
            for (var i = 0, li = titles.length; i < li; i++) {
                self[titles[i]].visible = false;
            }
        };
        p._data_list_items = function () {
            var self = this;
            var idx = self.data.idx;
            var rewardArr = [];
            var gameParamIdx = self._targets[idx][4] + 12;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.newFourRank);
            var reString = gameInfo[gameParamIdx];
            var strs = reString.split(",");
            if (!strs || strs.length < 2)
                rewardArr = [];
            for (var j = 0; j < strs.length; j += 2) {
                rewardArr.push({ itemId: strs[j], count: strs[j + 1] });
            }
            return rewardArr;
        };
        p._data_list_ranks = function () {
            var self = this;
            var idx = self.data.idx;
            return idx == 4 ? [] : gd.newFourDaysCtrl.getRankList(self.data.idx);
        };
        p._tap_btn_get = function () {
            var self = this;
            var idx = self.data.idx;
            gd.newFourDaysCtrl.receive(idx, self.dataChanged, self);
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            var ico_item = cell.ico_item;
            ico_item.showEquipName = true;
            cell.tapShowDetail = true;
        };
        return NewFiveDetail;
    })(mo.gui.Dlg);
    g_activity.NewFiveDetail = NewFiveDetail;
    egret.registerClass(NewFiveDetail,"g_activity.NewFiveDetail");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/12/19.
 */
var g_activity;
(function (g_activity) {
    var ActivityMysteryShop = (function (_super) {
        __extends(ActivityMysteryShop, _super);
        function ActivityMysteryShop() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityMysteryShop,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            for (var i = 0; i < 3; ++i) {
                var ico_item = self["ico_item" + i];
                ico_item.label_text.visible = false;
                ico_item.onClick(function () {
                    g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(this.get('itemId'), null) }).show();
                }, ico_item);
            }
            for (var i = 0; i < 2; ++i) {
                var ico_item = self["ico_itemBuy" + i];
                ico_item.label_text.visible = false;
                ico_item.onClick(function () {
                    g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(this.get('itemId'), null) }).show();
                }, ico_item);
            }
            self._hitEfxPlayer = uiHelper.EfxPlayer.create(self.efx_hit2);
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            var shopInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_mysterShop, activity[gc.dsConsts.ActivityEntity.exValues][0]);
            var items = [shopInfo[gc.c_mysterShop_integralItem1], shopInfo[gc.c_mysterShop_integralItem2], shopInfo[gc.c_mysterShop_integralItem3]];
            var itemBuys = [shopInfo[gc.c_mysterShop_giftBag1], shopInfo[gc.c_mysterShop_giftBag2]];
            var scores = gd.activityCtrl.getMysterShopArr(activity[gc.dsConsts.ActivityEntity.id], activity[gc.dsConsts.ActivityEntity.startTime], activity[gc.dsConsts.ActivityEntity.endTime]);
            var activity = self.data.exActivity[gc.dsConsts.ExActivity.activity];
            uiHelper.setEventTime(self.label_date, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            //活动背景资源
            self.img_title_bg.source = "bg_secret_shop_" + (activity[gc.dsConsts.ActivityEntity.tiIconType] || 0);
            self.label_curScore.text = scores[0] + "";
            self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            self.label_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            for (var i = 0; i < 3; ++i) {
                var ico_item = self["ico_item" + i];
                var itemId = items[i][0];
                var count = items[i][1];
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
                var label_item = self["label_item" + i];
                var label_score = self["label_score" + i];
                var label_exchange = self["label_exCount" + i];
                label_exchange.text = scores[1][i] || "0";
                label_item.textColor = uiHelper.getColorByQuality(itemInfo[gc.t_item_color]);
                label_item.text = itemInfo[gc.t_item_name];
                label_score.text = items[i][2];
                ico_item.setData({ itemId: itemId, count: count });
            }
            for (var i = 0; i < 2; ++i) {
                var ico_item = self["ico_itemBuy" + i];
                var itemId = itemBuys[i][0];
                var count = itemBuys[i][1];
                var costType = itemBuys[i][2];
                var cost = itemBuys[i][3];
                var getScore = itemBuys[i][4];
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
                var label_rmb = self["label_rmb" + i];
                var label_score = self["label_scoreGet" + i];
                var ico_res = self["ico_res" + i];
                var label_item = self["label_itemBuy" + i];
                label_item.textColor = uiHelper.getColorByQuality(itemInfo[gc.t_item_color]);
                label_item.text = itemInfo[gc.t_item_name];
                if (costType == 1) {
                    ico_res.source = "ico_gold";
                }
                else {
                    ico_res.source = "ico_yuanbao";
                }
                label_rmb.text = cost;
                label_score.text = getScore;
                ico_item.setData({ itemId: itemId, count: count });
            }
        };
        p._tap_btn_exchange0 = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.exChangeMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 0, function () {
                self.reset();
            }, self);
        };
        p._tap_btn_exchange1 = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.exChangeMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 1, function () {
                self.reset();
            }, self);
        };
        p._tap_btn_exchange2 = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.exChangeMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 2, function () {
                self.reset();
            }, self);
        };
        p._tap_btn_buy0 = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.buyMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 0, function (datas) {
                var isCrit = datas[0];
                var score = datas[1];
                if (isCrit)
                    self._hitEfxPlayer.play();
                if (score)
                    g_msg.UIMsgTextCtrl.push("+" + score);
                self.reset();
            }, self);
        };
        p._tap_btn_buy1 = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.buyMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 1, function (datas) {
                var isCrit = datas[0];
                var score = datas[1];
                if (isCrit)
                    self._hitEfxPlayer.play();
                if (score)
                    g_msg.UIMsgTextCtrl.push("+" + score);
                self.reset();
            }, self);
        };
        return ActivityMysteryShop;
    })(mo.gui.Layer);
    g_activity.ActivityMysteryShop = ActivityMysteryShop;
    egret.registerClass(ActivityMysteryShop,"g_activity.ActivityMysteryShop");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var ActivitySingleRchg = (function (_super) {
        __extends(ActivitySingleRchg, _super);
        function ActivitySingleRchg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivitySingleRchg,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_activity.ActivitySingleRchgItem;
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            uiHelper.setEventTime(self.label_date, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        return ActivitySingleRchg;
    })(mo.gui.Layer);
    g_activity.ActivitySingleRchg = ActivitySingleRchg;
    egret.registerClass(ActivitySingleRchg,"g_activity.ActivitySingleRchg");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2015/10/8.
 */
var g_activity;
(function (g_activity) {
    var ActivitySingleRchgItem = (function (_super) {
        __extends(ActivitySingleRchgItem, _super);
        function ActivitySingleRchgItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivitySingleRchgItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var actItem = self.data;
            self.label_desc.text = mo.STR.format("%s", actItem[gc.dsConsts.ActivityItem.rmb] / 10);
            self.refreshList("list_items");
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
        };
        p._data_list_items = function () {
            var self = this;
            return utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]);
        };
        return ActivitySingleRchgItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivitySingleRchgItem = ActivitySingleRchgItem;
    egret.registerClass(ActivitySingleRchgItem,"g_activity.ActivitySingleRchgItem");
})(g_activity || (g_activity = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_activity;
(function (g_activity) {
    var FuliDlg = (function (_super) {
        __extends(FuliDlg, _super);
        function FuliDlg() {
            _super.apply(this, arguments);
            this._comps = [];
        }
        var d = __define,c=FuliDlg,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_activitys = g_activity.ActivityTabItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self._allExActivitys = gd.activityCtrl.getFuliList();
            self.list_activitys.selectedIndex = 0;
            self.label_empty.visible = false;
            for (var i = 0; i < self._allExActivitys.length; ++i) {
                var exActivity = self._allExActivitys[i];
                var type = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.type);
                if (type == gc.c_prop.activityTypeKey.sevenLogin) {
                    self._comps.push(g_activity.Activity7Days.create().setData({ tray: self.container }).show());
                }
                else if (type == gc.c_prop.activityTypeKey.allChargeCount) {
                    self._comps.push(g_activity.ActivityRecharge.create().setData({ tray: self.container }).show());
                }
                else if (type == gc.c_prop.activityTypeKey.redeemCode) {
                    self._comps.push(g_activity.ActivityRedeemCode.create().setData({ tray: self.container }).show());
                }
                else if (type == gc.c_prop.activityTypeKey.sign) {
                    self._comps.push(g_activity.ActivitySign.create().setData({ tray: self.container }).show());
                }
            }
            process.nextTick(function () {
                if (self._allExActivitys.length > 0) {
                    self.goTab(self._allExActivitys[0]);
                }
            });
        };
        p.onEnter = function () {
            _super.prototype.onEnter.call(this);
            var self = this;
        };
        p._hideAllComp = function () {
            var self = this;
            for (var i = 0, li = self._comps.length; i < li; i++) {
                self._comps[i].visible = false;
            }
        };
        p.reset = function () {
            var self = this;
            self.goTab(self._curExActivity);
        };
        p.goTab = function (exActivity) {
            var self = this;
            var index = self._allExActivitys.indexOf(exActivity);
            self._curExActivity = exActivity;
            self._hideAllComp();
            var comp = self._comps[index];
            comp.visible = true;
            comp.setData({ tray: self.container, exActivity: exActivity });
        };
        p._data_list_activitys = function () {
            var self = this;
            return self._allExActivitys;
        };
        p._click_list_activitys = function (event) {
            var self = this;
            var item = event.item;
            self.goTab(item);
        };
        return FuliDlg;
    })(mo.gui.Dlg);
    g_activity.FuliDlg = FuliDlg;
    egret.registerClass(FuliDlg,"g_activity.FuliDlg");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = FuliDlg;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.activityCtrl.getInfo(function () {
                cb();
            }, this);
        });
    });
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2016/6/4.
 */
var g_activity;
(function (g_activity) {
    var ActivityAppExchangeCell = (function (_super) {
        __extends(ActivityAppExchangeCell, _super);
        function ActivityAppExchangeCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityAppExchangeCell,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            var data = self.data; //id,num,score;
            var itemId = data[0];
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            self.ico_item.setData({ itemId: itemId, count: data[1] });
            //self.label_item.text = itemInfo[gc.t_item_name];
            self.label_score.text = data[2];
        };
        p._tap_btn_exchange = function () {
            var self = this;
            var index = self.delegate.data.index;
            var exActivity = self.delegate.data.exActivity;
            gd.activityCtrl.exChangeMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), index + "," + self.itemIndex, function () {
                self.dataChanged();
                self.delegate.dataChanged();
            }, self);
        };
        return ActivityAppExchangeCell;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityAppExchangeCell = ActivityAppExchangeCell;
    egret.registerClass(ActivityAppExchangeCell,"g_activity.ActivityAppExchangeCell");
})(g_activity || (g_activity = {}));

/**
 * Created by Administrator on 2016/6/4.
 */
var g_activity;
(function (g_activity) {
    var ActivityAppMysteryExchangeDlg = (function (_super) {
        __extends(ActivityAppMysteryExchangeDlg, _super);
        function ActivityAppMysteryExchangeDlg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityAppMysteryExchangeDlg,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_activity.ActivityAppExchangeCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            var scores = gd.activityCtrl.getMysterShopArr(activity[gc.dsConsts.ActivityEntity.id], activity[gc.dsConsts.ActivityEntity.startTime], activity[gc.dsConsts.ActivityEntity.endTime]);
            self.label_score.text = scores[0];
        };
        p._data_list_items = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            var index = self.data.index;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            var shopInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_mysterShop, activity[gc.dsConsts.ActivityEntity.exValues][0]);
            var items = shopInfo[gc.c_mysterShop_integralItem1];
            if (index == 0) {
                items = shopInfo[gc.c_mysterShop_integralItem1];
            }
            else if (index == 1) {
                items = shopInfo[gc.c_mysterShop_integralItem2];
            }
            else if (index == 2) {
                items = shopInfo[gc.c_mysterShop_integralItem3];
            }
            return items;
        };
        return ActivityAppMysteryExchangeDlg;
    })(mo.gui.Dlg);
    g_activity.ActivityAppMysteryExchangeDlg = ActivityAppMysteryExchangeDlg;
    egret.registerClass(ActivityAppMysteryExchangeDlg,"g_activity.ActivityAppMysteryExchangeDlg");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityAppMysteryShop = (function (_super) {
        __extends(ActivityAppMysteryShop, _super);
        function ActivityAppMysteryShop() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityAppMysteryShop,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            for (var i = 0; i < 3; ++i) {
                var ico_item = self["ico_item" + i];
                ico_item.label_text.visible = false;
                ico_item.onClick(self["_tap_btn_exchange" + i], self);
            }
            for (var i = 0; i < 2; ++i) {
                var ico_item = self["ico_itemBuy" + i];
                ico_item.label_text.visible = false;
                ico_item.onClick(function () {
                    g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(this.get('itemId'), null) }).show();
                }, ico_item);
            }
            self._hitEfxPlayer = uiHelper.EfxPlayer.create(self.efx_hit2);
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            var shopInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_mysterShop, activity[gc.dsConsts.ActivityEntity.exValues][0]);
            var items = shopInfo[gc.c_mysterShop_picture];
            var itemBuys = [shopInfo[gc.c_mysterShop_giftBag1], shopInfo[gc.c_mysterShop_giftBag2]];
            var scores = gd.activityCtrl.getMysterShopArr(activity[gc.dsConsts.ActivityEntity.id], activity[gc.dsConsts.ActivityEntity.startTime], activity[gc.dsConsts.ActivityEntity.endTime]);
            //活动背景资源
            //self.img_title_bg.source = "bg_secret_shop_" + (activity[gc.dsConsts.ActivityEntity.tiIconType] || 0);
            self.label_yuanbao.text = gd.userCtrl.getDiamond();
            self.head.setActivity(activity);
            self.label_curScore.text = scores[0] + "";
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            for (var i = 0; i < 3; ++i) {
                var ico_item = self["ico_item" + i];
                var itemId = items[i];
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
                var label_item = self["label_item" + i];
                label_item.text = itemInfo[gc.t_item_name];
                ico_item.setData({ itemId: itemId, count: 1 });
            }
            for (var i = 0; i < 2; ++i) {
                var ico_item = self["ico_itemBuy" + i];
                var itemId = itemBuys[i][0];
                var count = itemBuys[i][1];
                var costType = itemBuys[i][2];
                var cost = itemBuys[i][3];
                var getScore = itemBuys[i][4];
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
                var label_rmb = self["label_rmb" + i];
                var label_score = self["label_scoreGet" + i];
                var ico_res = self["ico_res" + i];
                var label_item = self["label_itemBuy" + i];
                //label_item.textColor = uiHelper.getColorByQuality(itemInfo[gc.t_item_color]);
                label_item.text = itemInfo[gc.t_item_name];
                if (costType == 1) {
                    ico_res.source = "ico_gold";
                }
                else {
                    ico_res.source = "ico_yuanbao";
                }
                label_rmb.text = cost;
                label_score.text = getScore;
                ico_item.setData({ itemId: itemId, count: count });
            }
        };
        p._tap_btn_exchange0 = function () {
            var self = this;
            g_activity.ActivityAppMysteryExchangeDlg.create().setData({ exActivity: self.data.exActivity, index: 0 }).show().onClose(function () {
                self.reset();
            });
        };
        p._tap_btn_exchange1 = function () {
            var self = this;
            g_activity.ActivityAppMysteryExchangeDlg.create().setData({ exActivity: self.data.exActivity, index: 1 }).show().onClose(function () {
                self.reset();
            });
        };
        p._tap_btn_exchange2 = function () {
            var self = this;
            g_activity.ActivityAppMysteryExchangeDlg.create().setData({ exActivity: self.data.exActivity, index: 2 }).show().onClose(function () {
                self.reset();
            });
        };
        p._tap_btn_buy0 = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.buyAppMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 0, function (datas) {
                var isCrit = datas[0];
                var score = datas[1];
                if (isCrit)
                    self._hitEfxPlayer.play();
                if (score)
                    g_msg.UIMsgTextCtrl.push("+" + score);
                self.reset();
            }, self);
        };
        p._tap_btn_buy1 = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.buyAppMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 1, function (datas) {
                var isCrit = datas[0];
                var score = datas[1];
                if (isCrit)
                    self._hitEfxPlayer.play();
                if (score)
                    g_msg.UIMsgTextCtrl.push("+" + score);
                self.reset();
            }, self);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 201 }).show();
        };
        return ActivityAppMysteryShop;
    })(mo.gui.Dlg);
    g_activity.ActivityAppMysteryShop = ActivityAppMysteryShop;
    egret.registerClass(ActivityAppMysteryShop,"g_activity.ActivityAppMysteryShop");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/23.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewCenter = (function (_super) {
        __extends(ActivityNewCenter, _super);
        function ActivityNewCenter() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewCenter,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_activity.ActivityNewCenterCell;
            self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ACTIVITY_OP, self.reset);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p._data_list_items = function () {
            return gd.activityCtrl.getMainList();
        };
        p.reset = function () {
            var self = this;
            self.refreshList("list_items");
        };
        /*
         activityType = {"1":'首冲',"2":'7天登陆',"3":'每日抢购',"4":'每日累充福利',"5":'全部累充福利',"6":'每日消费有礼',"7":'全部消费有礼',"8":'升级有奖',"9":'兑换码',"10":'文字说明',
         "11":'VIP升级奖励',"12":'时间段限购',"13":'签到',"14":'探宝',"15":'五日目标',"16":'单笔充值',"17":'神秘商店',"18":'王城擂台',"19":'蓝钻新手礼包',"20":'蓝钻成长礼包',
         "21":'蓝钻每日礼包',"22":'幸运塔罗牌',"23":'天天充值',"24":'限时抢购'};

         firstRecharge: number;
         sevenLogin: number;
         limitBuy: number;
         dayChargeCount: number;
         allChargeCount: number;
         dayCostCount: number;
         allCostCount: number;
         upLvl: number;
         redeemCode: number;
         text: number;
         upVip: number;
         limitBuyRange: number;
         sign: number;
         lottery: number;
         fiveDaysTarget: number;
         singleCharge: number;
         mysterShop: number;
         challengeCup: number;
         blueNewbie: number;
         blueGrowth: number;
         blueEveryday: number;
         luckyTalos: number;
         everydayCharge: number;
         limitPanicBuying: number;
         */
        p._click_list_items = function (event) {
            var self = this;
            var data = event.item;
            var activity = data[gc.dsConsts.ExActivity.activity];
            var type = activity[gc.dsConsts.ActivityEntity.type];
            if (type == gc.c_prop.activityTypeKey.allChargeCount) {
                g_activity.ActivityNewRchg.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.singleCharge) {
                g_activity.ActivityNewSingleRchg.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.mysterShop) {
                g_activity.ActivityNewMysteryShop.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.luckyTalos) {
                g_activity.ActivityNewLuckyTalos.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.everydayCharge) {
                g_activity.ActivityNewEverydayRchg.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.limitPanicBuying) {
                g_activity.ActivityNewLimitBuy.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.rebate) {
                g_activity.ActivityNewRebate.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.dayRecharge) {
                g_activity.ActivityNewTotalRchgOneDay.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.setTheWord) {
                g_activity.ActivityNewCollectCharacter.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.vPlan) {
                g_activity.ActivityNewVplan.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.appMysterShop) {
                g_activity.ActivityAppMysteryShop.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.luckyMajong) {
                g_activity.ActivityNewMaJiangTalos.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.userSurvey) {
                g_activity.ActivityNewAsk.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.activityNotice) {
                g_activity.ActivityNewNotice.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.newLuckyMajong) {
                g_activity.ActivityNewCardTalos.create().setData({ exActivity: data }).show();
            }
            else if (type == gc.c_prop.activityTypeKey.newLimitPanicBuying) {
                g_activity.ActivityNewDayLimitBuy.create().setData({ exActivity: data }).show();
            }
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 200 }).show();
        };
        return ActivityNewCenter;
    })(mo.gui.Dlg);
    g_activity.ActivityNewCenter = ActivityNewCenter;
    egret.registerClass(ActivityNewCenter,"g_activity.ActivityNewCenter");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/23.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewCenterCell = (function (_super) {
        __extends(ActivityNewCenterCell, _super);
        function ActivityNewCenterCell() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewCenterCell,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
        };
        p.dataChanged = function () {
            var self = this;
            var data = self.data;
            var activity = self.data[gc.dsConsts.ExActivity.activity];
            var icon_map = activity[gc.dsConsts.ActivityEntity.exData];
            if (icon_map) {
                var iconStr = icon_map[gc.c_prop.activityExDataTypeKey.titleIcon];
                var desIconStr = icon_map[gc.c_prop.activityExDataTypeKey.desIcon];
                self.setIcon(iconStr, desIconStr);
            }
            else {
                self.setIcon("", "");
            }
            uiHelper.setEventTime(self.lbl_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
        };
        p.setIcon = function (iconStr, desIconStr) {
            var self = this;
            if (iconStr && iconStr != "") {
                var url = "resource/ui2/ui_activity/" + iconStr;
                RES.getResByUrl(url + "_3.jpg", function (texture) {
                    self.img_bg.source = texture;
                }, self, RES.ResourceItem.TYPE_IMAGE);
            }
            else {
                var activity = self.data[gc.dsConsts.ExActivity.activity];
                var _iconStr = "dbcz";
                var type = activity[gc.dsConsts.ActivityEntity.type];
                if (type == gc.c_prop.activityTypeKey.allChargeCount) {
                    _iconStr = "lcfl";
                }
                else if (type == gc.c_prop.activityTypeKey.singleCharge) {
                    _iconStr = "dbcz";
                }
                else if (type == gc.c_prop.activityTypeKey.mysterShop) {
                    _iconStr = "smsd";
                }
                else if (type == gc.c_prop.activityTypeKey.luckyTalos) {
                    _iconStr = "smtlp";
                }
                else if (type == gc.c_prop.activityTypeKey.everydayCharge) {
                    _iconStr = "ttcz";
                }
                else if (type == gc.c_prop.activityTypeKey.limitPanicBuying) {
                    _iconStr = "xsqg";
                }
                else if (type == gc.c_prop.activityTypeKey.appMysterShop) {
                    _iconStr = "smsd";
                }
                self.setIcon(_iconStr, "");
            }
            if (desIconStr && desIconStr.length > 0) {
                var stateUrl = "resource/ui2/ui_activity/state_" + desIconStr + ".png";
                RES.getResByUrl(stateUrl, function (texture) {
                    self.img_state.source = texture;
                }, self, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        return ActivityNewCenterCell;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityNewCenterCell = ActivityNewCenterCell;
    egret.registerClass(ActivityNewCenterCell,"g_activity.ActivityNewCenterCell");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewSingleRchg = (function (_super) {
        __extends(ActivityNewSingleRchg, _super);
        function ActivityNewSingleRchg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewSingleRchg,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_activity.ActivityNewSingleRchgItem;
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 203 }).show();
        };
        return ActivityNewSingleRchg;
    })(mo.gui.Dlg);
    g_activity.ActivityNewSingleRchg = ActivityNewSingleRchg;
    egret.registerClass(ActivityNewSingleRchg,"g_activity.ActivityNewSingleRchg");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewSingleRchgItem = (function (_super) {
        __extends(ActivityNewSingleRchgItem, _super);
        function ActivityNewSingleRchgItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewSingleRchgItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var actItem = self.data;
            self.label_desc.text = mo.STR.format("%s", actItem[gc.dsConsts.ActivityItem.rmb] / 10);
            self.refreshList("list_items");
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
        };
        p._data_list_items = function () {
            var self = this;
            return utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]);
        };
        return ActivityNewSingleRchgItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityNewSingleRchgItem = ActivityNewSingleRchgItem;
    egret.registerClass(ActivityNewSingleRchgItem,"g_activity.ActivityNewSingleRchgItem");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewEverydayRchg = (function (_super) {
        __extends(ActivityNewEverydayRchg, _super);
        function ActivityNewEverydayRchg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewEverydayRchg,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_activity.ActivityNewEverydayRchgItem;
            self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ACTIVITY_OP, self.checkRedPoint);
            self.registerClassByKey(gd.RechargeCtrl, gd.RechargeCtrl.ON_RECHARGE_SUCC, self.rechargeSuccess);
        };
        p.rechargeSuccess = function () {
            var self = this;
            gd.activityCtrl.getInfo(function () {
                self.reset();
            });
        };
        p.checkRedPoint = function () {
            var self = this;
            self.reset();
        };
        p.reset = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.setData({ "exActivity": gd.activityCtrl.getActivity(activity[gc.dsConsts.ActivityEntity.id]) });
            var scroller = (self.list_items).scroller;
            var scrollTop = scroller.scrollTop >= 0 ? scroller.scrollTop : 0;
            self.refreshList('list_items');
            process.nextTick(function () {
                if (!self.list_items)
                    return;
                scroller.throwVertically(scrollTop, 0);
            });
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self.label_cost_have.text = gd.userCtrl.getDiamond();
            self.actItems = [];
            var items = mo.getJSONWithFileName(gc.cfg_c_everydayCharge);
            var day = exActivity[gc.dsConsts.ExActivity.days];
            self.label_activity_charged.text = "今日已充值" + exActivity[gc.dsConsts.ExActivity.todayRecharge] + "元 , 已完成" + day + "天";
            var user_activity = gd.userCtrl.get(gc.dsConsts.UserEntity.activity);
            var ua_everyday_charge = user_activity[activity[gc.dsConsts.ActivityEntity.id]];
            var i = 0;
            for (var key in items) {
                var obj = items[key];
                obj["activityId"] = activity[gc.dsConsts.ActivityEntity.id];
                obj["index"] = i;
                if ((i + 1) <= day) {
                    if (ua_everyday_charge && ua_everyday_charge[i] > 0) {
                        obj["status"] = 1; //  已经领取
                    }
                    else {
                        obj["status"] = 3; //未领取
                    }
                }
                else {
                    obj["status"] = 2; //未达到
                }
                self.actItems.push(obj);
                i++;
            }
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        p._tap_btn_charge = function () {
            mo.moduleMgr.pushModule(g_consts.moduleId.recharge);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 205 }).show();
        };
        return ActivityNewEverydayRchg;
    })(mo.gui.Dlg);
    g_activity.ActivityNewEverydayRchg = ActivityNewEverydayRchg;
    egret.registerClass(ActivityNewEverydayRchg,"g_activity.ActivityNewEverydayRchg");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewLimitBuy = (function (_super) {
        __extends(ActivityNewLimitBuy, _super);
        function ActivityNewLimitBuy() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewLimitBuy,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            // self._Item_list_items = g_base.BaseItemCell;
            self._Item_list_items = g_activity.ActivityNewCollectCharacterBaseItem;
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            //self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.refreshList("list_items");
            var exData = activity[gc.dsConsts.ActivityEntity.exData];
            var vipLimit = 0;
            if (exData) {
                var costItemId = exData[gc.c_prop.activityExDataTypeKey.spItemId];
                self.ico_have_icon.source = resHelper.getItemIconPath(costItemId);
                self.ico_cost_icon.source = resHelper.getItemIconPath(costItemId);
                self.label_yuanbao_cost.text = activity[gc.dsConsts.ActivityEntity.exValues][0] + "";
                self.label_yuanbao_left.text = gd.userCtrl.getItemNum(costItemId) + "";
                vipLimit = exData[gc.c_prop.activityExDataTypeKey.vipLimitLvl] || 0;
            }
            var buyCount = gd.activityCtrl.getLimitPanicBuyCount(activity[gc.dsConsts.ActivityEntity.id]);
            var limitCount = activity[gc.dsConsts.ActivityEntity.exValues2][0];
            self.label_buy_count.text = "当前已购买" + buyCount + "次";
            if (buyCount >= limitCount) {
                self.label_buy_count.text = "已达到购买上限";
                self.ico_hasGet.visible = true;
            }
            else {
                self.ico_hasGet.visible = false;
            }
            self.label_vipHint.visible = vipLimit > 0;
            if (vipLimit > 0) {
                self.label_vipHint.text = "vip" + vipLimit.toString() + "及以上才可购买";
            }
        };
        p._data_list_items = function () {
            var self = this;
            var arr = [];
            for (var i = 0; i < self.actItems.length; i++) {
                var data = self.actItems[i];
                var type = gc.dsConsts.ActivityItem.items;
                var obj = data[type];
                for (var key in obj) {
                    arr.push({
                        itemId: key,
                        count: obj[key]
                    });
                }
            }
            //return utils.itemObj2ObjArr(self.actItems[gc.dsConsts.ActivityItem.items]);
            return arr;
        };
        p._tap_btn_buy = function () {
            var self = this;
            var activity = self.data.exActivity[gc.dsConsts.ExActivity.activity];
            gd.activityCtrl.limitPanicBuying(activity[gc.dsConsts.ActivityEntity.id], 0, function (data) {
                self.setData(self.data);
            }, self);
        };
        p._click_list_items = function (event) {
            var data = event.item;
            g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(data["itemId"], null) }).show();
        };
        p._tap_btn_help = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            var subType = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.subType] || 0;
            subType = parseInt(subType);
            var helpType = subType == 0 ? 206 : subType;
            g_base.BaseShowTip.create().setData({ id: helpType }).show();
        };
        return ActivityNewLimitBuy;
    })(mo.gui.Dlg);
    g_activity.ActivityNewLimitBuy = ActivityNewLimitBuy;
    egret.registerClass(ActivityNewLimitBuy,"g_activity.ActivityNewLimitBuy");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewLuckyTalos = (function (_super) {
        __extends(ActivityNewLuckyTalos, _super);
        function ActivityNewLuckyTalos() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewLuckyTalos,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_base.BaseItemCell;
            self._selectedIndex = -1;
            self.haveClick = false;
            self.detailActItems = null;
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            //self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            //uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            //self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self._updateGoldInfo();
            var items = mo.getJSONWithFileName(gc.cfg_c_luckyTalos);
            var color = activity[gc.dsConsts.ActivityEntity.exValues2][0];
            var costItemId = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.spItemId];
            var subType = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.subType] || 0;
            var level = gd.userCtrl.getLvl();
            self.actItems = [];
            self.detailActItems = [];
            for (var key in items) {
                var obj = items[key];
                var minLevel = obj[gc.c_luckyTalos_subTypeDivide][0];
                var maxLevel = obj[gc.c_luckyTalos_subTypeDivide][1];
                var inLevel = level >= minLevel && level <= maxLevel;
                if (obj[gc.c_luckyTalos_spItemId] == costItemId && subType == obj[gc.c_luckyTalos_subType] && inLevel) {
                    self.detailActItems.push({ "itemId": obj[gc.c_luckyTalos_itemID], "count": obj[gc.c_luckyTalos_amount] });
                    if (obj[gc.c_luckyTalos_color] >= color) {
                        self.actItems.push({
                            "itemId": obj[gc.c_luckyTalos_itemID],
                            "count": obj[gc.c_luckyTalos_amount]
                        });
                    }
                }
            }
            self.refreshList("list_items");
            var cost = activity[gc.dsConsts.ActivityEntity.exValues][0];
            for (var i = 0; i < 4; ++i) {
                var label_cost = self["label_cost_have" + i];
                label_cost.text = "" + utils.formatByWan(cost, 0);
                var ico = self["ico_cost_icon" + i];
                ico.source = resHelper.getItemIconPath(costItemId);
                ico.anchorOffsetY = -ico.height;
            }
        };
        p._updateGoldInfo = function () {
            var self = this;
            self.label_jinbi.text = gd.userCtrl.getGold();
            self.label_yuanbao.text = gd.userCtrl.getDiamond();
        };
        p._data_list_items = function () {
            var self = this;
            var subActItems = self.actItems.slice(0, 4);
            return subActItems;
        };
        p._click_list_items = function (event) {
            var data = event.item;
            g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(data["itemId"], null) }).show();
        };
        p.clickCard = function (index) {
            var self = this;
            if (self.haveClick) {
                return;
            }
            self.haveClick = true;
            self.clickTime = egret.setTimeout(function () {
                self.dealClickTime();
            }, self, 500);
            if (self._selectedIndex >= 0) {
                if (self._aniStep == 1) {
                    self._aniStep = 2;
                    self._runAnimation();
                }
                return;
            }
            var grp_item = self["grp_item" + index];
            if (grp_item.visible)
                return;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.luckyTalos(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), index, function (data) {
                self._selectedIndex = index;
                self.initCardsWithIds(data, index);
                self._updateGoldInfo();
                self.haveClick = false;
            });
        };
        p.dealClickTime = function () {
            var self = this;
            self.haveClick = false;
            egret.clearTimeout(self.clickTime);
        };
        p.clickFlip = function (index) {
            var self = this;
            if (self._aniStep == 1) {
                self._aniStep = 2;
                self._goNext();
            }
        };
        p.initCardsWithIds = function (ids, idx) {
            var self = this;
            self._gotCards = ids;
            self._aniIdx = [];
            for (var i = 0; i < 4; ++i) {
                var ico_item = self["ico_item" + i];
                ico_item.onClick(function (data) {
                    g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(data.data["itemId"], null) }).show();
                });
                if (i == idx) {
                    self._aniIdx.unshift(i);
                }
                else {
                    self._aniIdx.push(i);
                }
            }
            self._gotCards = ids;
            self._aniStep = 0;
            self._runAnimation();
            self.idTime1 = egret.setTimeout(function () {
                if (self._aniStep == 0) {
                    self._aniStep = 1;
                    self._runAnimation();
                }
            }, self, 500);
        };
        p._runAnimation = function () {
            var self = this;
            if (self._aniStep >= 2) {
                egret.clearTimeout(self.idTime2);
                self._goNext();
                return;
            }
            var ids = self._gotCards;
            if (self._aniStep == 0) {
                var index = self._aniIdx[0];
                self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyTalos, ids[index]), index, function () {
                    //if(self._aniStep == 0){
                    //    self._aniStep = 1;
                    //    self._runAnimation();
                    //}
                });
            }
            else if (self._aniStep == 1) {
                self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyTalos, ids[self._aniIdx[1]]), self._aniIdx[1]);
                self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyTalos, ids[self._aniIdx[2]]), self._aniIdx[2]);
                self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyTalos, ids[self._aniIdx[3]]), self._aniIdx[3]);
                self.idTime2 = egret.setTimeout(function () {
                    if (self._aniStep == 1) {
                        self._aniStep = 2;
                        self._runAnimation();
                    }
                }, self, 3000);
            }
        };
        p._goNext = function () {
            var self = this;
            egret.clearTimeout(self.idTime2);
            egret.clearTimeout(self.idTime1);
            self._hideItemAtIndex(0);
            self._hideItemAtIndex(1);
            self._hideItemAtIndex(2);
            self._hideItemAtIndex(3);
            self._selectedIndex = -1;
            self.haveClick = false;
        };
        p._showItemAtIndex = function (item, idx, cb) {
            var self = this;
            var ico_item = self["ico_item" + idx];
            if (!ico_item)
                return;
            var label_item = self["label_item" + idx];
            if (!label_item)
                return;
            var effect = self["card_effect" + idx];
            effect.visible = true;
            var _hitEfxPlayer = uiHelper.EfxPlayer.create(effect);
            _hitEfxPlayer.setEndCallback(function () {
                effect.visible = false;
                if (cb)
                    cb.call();
            });
            _hitEfxPlayer.play();
            var itemId = item[gc.c_luckyTalos_itemID];
            ico_item.setData({ itemId: itemId, count: item[gc.c_luckyTalos_amount] });
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            label_item.text = itemInfo[gc.t_item_name];
            var grp_hint = self["btn_card" + idx];
            grp_hint.visible = false;
            var grp_item = self["grp_item" + idx];
            grp_item.visible = true;
        };
        p._hideItemAtIndex = function (idx) {
            var self = this;
            var ico_item = self["ico_item" + idx];
            if (!ico_item)
                return;
            var label_item = self["label_item" + idx];
            if (!label_item)
                return;
            var effect = self["card_effect" + idx];
            effect.visible = true;
            var _hitEfxPlayer = uiHelper.EfxPlayer.create(effect);
            _hitEfxPlayer.setEndCallback(function () {
                effect.visible = false;
            });
            _hitEfxPlayer.play();
            label_item.text = "";
            var grp_hint = self["btn_card" + idx];
            grp_hint.visible = true;
            var grp_item = self["grp_item" + idx];
            grp_item.visible = false;
        };
        p._tap_btn_card0 = function () {
            var self = this;
            self.clickCard(0);
        };
        p._tap_btn_card1 = function () {
            var self = this;
            self.clickCard(1);
        };
        p._tap_btn_card2 = function () {
            var self = this;
            self.clickCard(2);
        };
        p._tap_btn_card3 = function () {
            var self = this;
            self.clickCard(3);
        };
        p._tap_btn_flipped0 = function () {
            var self = this;
            self.clickFlip(0);
        };
        p._tap_btn_flipped1 = function () {
            var self = this;
            self.clickFlip(1);
        };
        p._tap_btn_flipped2 = function () {
            var self = this;
            self.clickFlip(2);
        };
        p._tap_btn_flipped3 = function () {
            var self = this;
            self.clickFlip(3);
        };
        p._tap_btn_container = function () {
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 204 }).show();
        };
        p._tap_btn_detail = function () {
            var self = this;
            g_activity.ActivityNewDetail.create().setData({ actItems: self.detailActItems, extrItems: null }).show();
        };
        return ActivityNewLuckyTalos;
    })(mo.gui.Dlg);
    g_activity.ActivityNewLuckyTalos = ActivityNewLuckyTalos;
    egret.registerClass(ActivityNewLuckyTalos,"g_activity.ActivityNewLuckyTalos");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewMysteryShop = (function (_super) {
        __extends(ActivityNewMysteryShop, _super);
        function ActivityNewMysteryShop() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewMysteryShop,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            for (var i = 0; i < 3; ++i) {
                var ico_item = self["ico_item" + i];
                ico_item.label_text.visible = false;
                ico_item.onClick(function () {
                    g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(this.get('itemId'), null) }).show();
                }, ico_item);
            }
            for (var i = 0; i < 2; ++i) {
                var ico_item = self["ico_itemBuy" + i];
                ico_item.label_text.visible = false;
                ico_item.onClick(function () {
                    g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(this.get('itemId'), null) }).show();
                }, ico_item);
            }
            self._hitEfxPlayer = uiHelper.EfxPlayer.create(self.efx_hit2);
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            var shopInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_mysterShop, activity[gc.dsConsts.ActivityEntity.exValues][0]);
            var items = [shopInfo[gc.c_mysterShop_integralItem1][0], shopInfo[gc.c_mysterShop_integralItem2][0], shopInfo[gc.c_mysterShop_integralItem3][0]];
            var itemBuys = [shopInfo[gc.c_mysterShop_giftBag1], shopInfo[gc.c_mysterShop_giftBag2]];
            var scores = gd.activityCtrl.getMysterShopArr(activity[gc.dsConsts.ActivityEntity.id], activity[gc.dsConsts.ActivityEntity.startTime], activity[gc.dsConsts.ActivityEntity.endTime]);
            //活动背景资源
            //self.img_title_bg.source = "bg_secret_shop_" + (activity[gc.dsConsts.ActivityEntity.tiIconType] || 0);
            self.label_yuanbao.text = gd.userCtrl.getDiamond();
            self.head.setActivity(activity);
            self.label_curScore.text = scores[0] + "";
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            for (var i = 0; i < 3; ++i) {
                var ico_item = self["ico_item" + i];
                var itemId = items[i][0];
                var count = items[i][1];
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
                var label_item = self["label_item" + i];
                var label_score = self["label_score" + i];
                var label_exchange = self["label_exCount" + i];
                label_exchange.text = scores[1][i] || "0";
                //label_item.textColor = uiHelper.getColorByQuality(itemInfo[gc.t_item_color]);
                label_item.text = itemInfo[gc.t_item_name];
                label_score.text = items[i][2];
                ico_item.setData({ itemId: itemId, count: count });
            }
            for (var i = 0; i < 2; ++i) {
                var ico_item = self["ico_itemBuy" + i];
                var itemId = itemBuys[i][0];
                var count = itemBuys[i][1];
                var costType = itemBuys[i][2];
                var cost = itemBuys[i][3];
                var getScore = itemBuys[i][4];
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
                var label_rmb = self["label_rmb" + i];
                var label_score = self["label_scoreGet" + i];
                var ico_res = self["ico_res" + i];
                var label_item = self["label_itemBuy" + i];
                //label_item.textColor = uiHelper.getColorByQuality(itemInfo[gc.t_item_color]);
                label_item.text = itemInfo[gc.t_item_name];
                if (costType == 1) {
                    ico_res.source = "ico_gold";
                }
                else {
                    ico_res.source = "ico_yuanbao";
                }
                label_rmb.text = cost;
                label_score.text = getScore;
                ico_item.setData({ itemId: itemId, count: count });
            }
        };
        p._tap_btn_exchange0 = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.exChangeMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 0, function () {
                self.reset();
            }, self);
        };
        p._tap_btn_exchange1 = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.exChangeMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 1, function () {
                self.reset();
            }, self);
        };
        p._tap_btn_exchange2 = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.exChangeMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 2, function () {
                self.reset();
            }, self);
        };
        p._tap_btn_buy0 = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.buyMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 0, function (datas) {
                var isCrit = datas[0];
                var score = datas[1];
                if (isCrit)
                    self._hitEfxPlayer.play();
                if (score)
                    g_msg.UIMsgTextCtrl.push("+" + score);
                self.reset();
            }, self);
        };
        p._tap_btn_buy1 = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.buyMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 1, function (datas) {
                var isCrit = datas[0];
                var score = datas[1];
                if (isCrit)
                    self._hitEfxPlayer.play();
                if (score)
                    g_msg.UIMsgTextCtrl.push("+" + score);
                self.reset();
            }, self);
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 201 }).show();
        };
        return ActivityNewMysteryShop;
    })(mo.gui.Dlg);
    g_activity.ActivityNewMysteryShop = ActivityNewMysteryShop;
    egret.registerClass(ActivityNewMysteryShop,"g_activity.ActivityNewMysteryShop");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewRchg = (function (_super) {
        __extends(ActivityNewRchg, _super);
        function ActivityNewRchg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewRchg,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_activity.ActivityNewRchgItem;
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self.label_all_charge.text = exActivity[gc.dsConsts.ExActivity.allRecharge].toString();
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 202 }).show();
        };
        return ActivityNewRchg;
    })(mo.gui.Dlg);
    g_activity.ActivityNewRchg = ActivityNewRchg;
    egret.registerClass(ActivityNewRchg,"g_activity.ActivityNewRchg");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewRchgItem = (function (_super) {
        __extends(ActivityNewRchgItem, _super);
        function ActivityNewRchgItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewRchgItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            //self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            var actItem = self.data;
            self.label_desc.text = mo.STR.format("%s", actItem[gc.dsConsts.ActivityItem.rmb]);
            //self.itemList = utils.itemObj2ObjArr(actItem[gc.dsConsts.ActivityItem.items]);
            var status = gd.activityCtrl.getAllChargeCountStatus(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex); // 0:已经领取，1：可领取，2:不可领取
            if (status == 0) {
                self.ico_sel.visible = false;
                self.ico_hasGet.visible = true;
                self.btn_get.visible = false;
                uiHelper.playUIEffect(self.effect_get, false);
            }
            else if (status == 1) {
                self.ico_sel.visible = true;
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                uiHelper.playUIEffect(self.effect_get, true);
            }
            else {
                self.ico_sel.visible = false;
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                uiHelper.playUIEffect(self.effect_get, false);
            }
            //self.refreshList("list_items");
            self.list_items.dataProvider = new egret.gui.ArrayCollection(utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]));
            var row = Math.ceil(self.list_items.dataProvider.length / 4);
            self.list_items.height = row == 1 ? 95 : 95 * row + 5 * (row - 1);
            self.ico_bg.height = self.list_items.height + 75;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
        };
        //_data_list_items():any[]{
        //    var self = this;
        //    return utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]);
        //}
        p._tap_btn_get = function () {
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            var actItem = self.data;
            var status = gd.activityCtrl.getAllChargeCountStatus(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex); // 0:已经领取，1：可领取，2:不可领取
            if (status == 0) {
            }
            else if (status == 1) {
            }
            else {
                return mo.showMsg(gc.id_c_msgCode.totalChargeNotEnough1, actItem[gc.dsConsts.ActivityItem.rmb]);
            }
            gd.activityCtrl.receive(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex, function () {
                self.delegate.reset();
            }, self);
        };
        return ActivityNewRchgItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityNewRchgItem = ActivityNewRchgItem;
    egret.registerClass(ActivityNewRchgItem,"g_activity.ActivityNewRchgItem");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/26.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewEverydayRchgItem = (function (_super) {
        __extends(ActivityNewEverydayRchgItem, _super);
        function ActivityNewEverydayRchgItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewEverydayRchgItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var actItem = self.data;
            self.label_desc.text = mo.STR.format("%s", actItem[gc.c_everydayCharge_id]);
            var status = this.data["status"];
            if (status == 1) {
                // 已经领取
                //self.ico_bg_can.visible = false;
                //self.ico_bg_got.visible = true;
                self.btn_get.visible = false;
                self.ico_got.visible = true;
                self.ico_unreach.visible = false;
            }
            else if (status == 2) {
                //未达到
                //self.ico_bg_can.visible = false;
                //self.ico_bg_got.visible = false;
                self.btn_get.visible = false;
                self.ico_got.visible = false;
                self.ico_unreach.visible = true;
            }
            else {
                //未领取
                //self.ico_bg_can.visible = true;
                //self.ico_bg_got.visible = false;
                self.btn_get.visible = true;
                self.ico_got.visible = false;
                self.ico_unreach.visible = false;
            }
            self.act_items = [];
            var objs = self.data[gc.c_everydayCharge_awardId];
            for (var i in objs) {
                var obj = {};
                var value = objs[i];
                obj["itemId"] = value[0];
                obj["count"] = value[1];
                self.act_items.push(obj);
            }
            self.refreshList("list_items");
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
        };
        p._data_list_items = function () {
            var self = this;
            return self.act_items;
        };
        p._tap_btn_get = function () {
            var self = this;
            gd.activityCtrl.everydayCharge(self.data["activityId"], self.data["index"], function (data) {
            }, self);
        };
        return ActivityNewEverydayRchgItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityNewEverydayRchgItem = ActivityNewEverydayRchgItem;
    egret.registerClass(ActivityNewEverydayRchgItem,"g_activity.ActivityNewEverydayRchgItem");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/4/7.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewRebate = (function (_super) {
        __extends(ActivityNewRebate, _super);
        function ActivityNewRebate() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewRebate,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_activity.ActivityNewRebateItem;
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self.label_all_charge.text = exActivity[gc.dsConsts.ExActivity.allCost].toString();
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 203 }).show();
        };
        return ActivityNewRebate;
    })(mo.gui.Dlg);
    g_activity.ActivityNewRebate = ActivityNewRebate;
    egret.registerClass(ActivityNewRebate,"g_activity.ActivityNewRebate");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/4/7.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewRebateItem = (function (_super) {
        __extends(ActivityNewRebateItem, _super);
        function ActivityNewRebateItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewRebateItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            //self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            var actItem = self.data;
            self.label_desc.text = mo.STR.format("%s", actItem[gc.dsConsts.ActivityItem.diamond]);
            var types = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.exValues2) || [];
            if (types.length == 1) {
                self.label_title.text = gc.c_prop.diamondCostType[types[0]];
                self.ico_hint.source = "txt_zhongxiaohao";
            }
            else {
                self.label_title.text = "";
                self.ico_hint.source = "txt_yuanbaozongxiaohao";
            }
            //self.itemList = utils.itemObj2ObjArr(actItem[gc.dsConsts.ActivityItem.items]);
            var status = gd.activityCtrl.getAllRebateStatus(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex); // 1:已经领取，2：未达到，其他:可领取
            if (status == 1) {
                self.ico_sel.visible = false;
                self.ico_hasGet.visible = true;
                self.btn_get.visible = false;
                uiHelper.playUIEffect(self.effect_get, false);
            }
            else if (status == 2) {
                self.ico_sel.visible = false;
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                uiHelper.playUIEffect(self.effect_get, false);
            }
            else {
                self.ico_sel.visible = true;
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                uiHelper.playUIEffect(self.effect_get, true);
            }
            //self.refreshList("list_items");
            self.list_items.dataProvider = new egret.gui.ArrayCollection(utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]));
            var row = Math.ceil(self.list_items.dataProvider.length / 4);
            self.list_items.height = row == 1 ? 95 : 95 * row + 5 * (row - 1);
            self.ico_bg.height = self.list_items.height + 95;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
        };
        p._tap_btn_get = function () {
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            var actItem = self.data;
            var status = gd.activityCtrl.getAllRebateStatus(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex); // 1:已经领取，2：未达到，其他:可领取
            if (status == 1) {
            }
            else if (status == 2) {
                return mo.showMsg("目标尚未达成!");
            }
            else {
                gd.activityCtrl.receive(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex, function () {
                    self.delegate.reset();
                }, self);
            }
        };
        return ActivityNewRebateItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityNewRebateItem = ActivityNewRebateItem;
    egret.registerClass(ActivityNewRebateItem,"g_activity.ActivityNewRebateItem");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewTotalRchgOneDay = (function (_super) {
        __extends(ActivityNewTotalRchgOneDay, _super);
        function ActivityNewTotalRchgOneDay() {
            _super.apply(this, arguments);
            this.hideLeftMillisecond = -1;
        }
        var d = __define,c=ActivityNewTotalRchgOneDay,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_activity.ActivityNewTotalRchgOneDayItem;
        };
        p.refresh = function () {
            var self = this;
            gd.activityCtrl.getInfo(function (data) {
                gd.activityCtrl.pushNotify(gd.ActivityCtrl.ACTIVITY_OP, {});
                var activity = gd.activityCtrl.getMainList();
                for (var a in activity) {
                    var item = activity[a];
                    var id = item[gc.dsConsts.ExActivity.activity][gc.dsConsts.ActivityEntity.id];
                    if (id == self.data.exActivity[gc.dsConsts.ExActivity.activity][gc.dsConsts.ActivityEntity.id]) {
                        self.data.exActivity = item;
                        self.reset();
                        return;
                    }
                }
            });
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            var today = exActivity[gc.dsConsts.ExActivity.todayRecharge];
            self.label_all_charge.text = today ? today : 0 + "";
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.refreshList("list_items");
            var left = exActivity[gc.dsConsts.ExActivity.leftTime];
            if (left > 0) {
                self.setCDTime(left);
            }
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 212 }).show();
        };
        p._timeInterval = function () {
            var self = this;
            self.label_left_time.text = mo.getTimeStr(self.hideLeftMillisecond) + " 后刷新";
        };
        p._timeFinish = function () {
            var self = this;
            self.label_left_time.text = "";
            self.refresh();
        };
        p.setCDTime = function (second) {
            var self = this;
            if (second > 0) {
                if (self.timeTrigger) {
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime() + second * 1000);
                var timeTrigger = self.timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut, self);
                tm.timer.add(timeTrigger);
            }
        };
        p.cleanCDTime = function () {
            var self = this;
            if (self.timeTrigger) {
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        };
        p.timeSec = function (type, beginTime, endTime) {
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            self.hideLeftMillisecond = endTime1 - now;
            if (self.hideLeftMillisecond < 0)
                self.hideLeftMillisecond = 0;
            self._timeInterval();
        };
        p.timeOut = function (type, beginTime, endTime) {
            var self = this;
            self.hideLeftMillisecond = -1;
            self._timeFinish();
        };
        return ActivityNewTotalRchgOneDay;
    })(mo.gui.Dlg);
    g_activity.ActivityNewTotalRchgOneDay = ActivityNewTotalRchgOneDay;
    egret.registerClass(ActivityNewTotalRchgOneDay,"g_activity.ActivityNewTotalRchgOneDay");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewTotalRchgOneDayItem = (function (_super) {
        __extends(ActivityNewTotalRchgOneDayItem, _super);
        function ActivityNewTotalRchgOneDayItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewTotalRchgOneDayItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.delegate.data.exActivity;
            var actItem = self.data;
            self.label_desc.text = mo.STR.format("%s", actItem[gc.dsConsts.ActivityItem.rmb]);
            //self.itemList = utils.itemObj2ObjArr(actItem[gc.dsConsts.ActivityItem.items]);
            var status = gd.activityCtrl.getDayRechargeStatus(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), self.itemIndex); // 0:已经领取，1：可领取，2:不可领取
            if (status == 1) {
                // 已经领取
                self.ico_sel.visible = false;
                self.ico_hasGet.visible = true;
                self.ico_unfinished.visible = false;
                self.ico_finished.visible = false;
            }
            else if (status == 2) {
                //未达到
                self.ico_sel.visible = false;
                self.ico_hasGet.visible = false;
                self.ico_unfinished.visible = true;
                self.ico_finished.visible = false;
            }
            else {
                //未领取
                self.ico_sel.visible = true;
                self.ico_hasGet.visible = false;
                self.ico_unfinished.visible = false;
                self.ico_finished.visible = true;
            }
            //self.refreshList("list_items");
            self.list_items.dataProvider = new egret.gui.ArrayCollection(utils.itemObj2ObjArr(self.data[gc.dsConsts.ActivityItem.items]));
            var row = Math.ceil(self.list_items.dataProvider.length / 4);
            self.list_items.height = row == 1 ? 95 : 95 * row + 5 * (row - 1);
            self.ico_bg.height = self.list_items.height + 75;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
        };
        return ActivityNewTotalRchgOneDayItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityNewTotalRchgOneDayItem = ActivityNewTotalRchgOneDayItem;
    egret.registerClass(ActivityNewTotalRchgOneDayItem,"g_activity.ActivityNewTotalRchgOneDayItem");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewCollectCharacter = (function (_super) {
        __extends(ActivityNewCollectCharacter, _super);
        function ActivityNewCollectCharacter() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewCollectCharacter,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_activity.ActivityNewCollectCharacterItem;
            self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ACTIVITY_OP, self.checkRedPoint);
            self.subType = 0;
        };
        p.checkRedPoint = function () {
            var self = this;
            self.reset();
        };
        p.updateActivity = function () {
            var self = this;
            var scroller = (self.list_items).scroller;
            var scrollTop = scroller.scrollTop >= 0 ? scroller.scrollTop : 0;
            self.refreshList('list_items');
            process.nextTick(function () {
                if (!self.list_items)
                    return;
                scroller.throwVertically(scrollTop, 0);
            });
            //gd.activityCtrl.getInfo(function(){
            //   self.reset();
            //});
        };
        p.reset = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.setData({ "exActivity": gd.activityCtrl.getActivity(activity[gc.dsConsts.ActivityEntity.id]) });
            var scroller = (self.list_items).scroller;
            var scrollTop = scroller.scrollTop >= 0 ? scroller.scrollTop : 0;
            self.refreshList('list_items');
            process.nextTick(function () {
                if (!self.list_items)
                    return;
                scroller.throwVertically(scrollTop, 0);
            });
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            //self.label_cost_have.text = gd.userCtrl.getDiamond();
            var subType = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.subType] || 0;
            self.subType = parseInt(subType);
            self.actItems = [];
            var index = 0;
            var items = activity[gc.dsConsts.ActivityEntity.exValues];
            var rewards = activity[gc.dsConsts.ActivityEntity.items];
            for (var key in items) {
                var i = items[key] || {};
                var obj = {};
                obj["i"] = i;
                obj["c"] = gd.activityCtrl.getSetTheWordCount(activity[gc.dsConsts.ActivityEntity.id], index);
                var reward = rewards[index] || {};
                obj["r"] = reward;
                obj["activityId"] = activity[gc.dsConsts.ActivityEntity.id];
                obj["p"] = self;
                obj["index"] = index;
                self.actItems.push(obj);
                index++;
            }
            self.refreshList("list_items");
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        p._tap_btn_help = function () {
            var self = this;
            var helpType = 214;
            if (self.subType <= 1) {
                helpType = self.subType == 1 ? 214 : 216;
            }
            else {
                helpType = self.subType;
            }
            g_base.BaseShowTip.create().setData({ id: helpType }).show();
        };
        p._tap_btn_source = function () {
            var self = this;
            var showType = 215;
            if (self.subType <= 1) {
                showType = self.subType == 1 ? 215 : 217;
            }
            else {
                showType = self.subType + 1;
            }
            g_base.BaseShowTip.create().setData({ id: showType }).show();
        };
        return ActivityNewCollectCharacter;
    })(mo.gui.Dlg);
    g_activity.ActivityNewCollectCharacter = ActivityNewCollectCharacter;
    egret.registerClass(ActivityNewCollectCharacter,"g_activity.ActivityNewCollectCharacter");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/26.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewCollectCharacterItem = (function (_super) {
        __extends(ActivityNewCollectCharacterItem, _super);
        function ActivityNewCollectCharacterItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewCollectCharacterItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_activity.ActivityNewCollectCharacterBaseItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
            self.ico_item.onClick(function () {
                g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(this.get('itemId'), null) }).show();
            }, self.ico_item);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var actItems = self.data["i"];
            var allCount = 0;
            self.btn_get.visible = true;
            self.act_items = [];
            self.hasCount = 0;
            var count = 1;
            for (var i in actItems) {
                var obj = {};
                var countHave = gd.userCtrl.getItemNum(i);
                var value = actItems[i];
                obj["itemId"] = parseInt(i);
                obj["count"] = countHave;
                if (count > 0) {
                    self.hasCount = countHave;
                    count -= 1;
                }
                else if (self.hasCount > countHave) {
                    self.hasCount = countHave;
                }
                self.act_items.push(obj);
            }
            var rewards = self.data["r"];
            for (var key in rewards) {
                self.ico_item.setData({ itemId: key, count: rewards[key] });
            }
            allCount = self.act_items.length;
            self.label_desc.text = mo.STR.format("%s", allCount);
            self.label_count.text = mo.STR.format("已领取次数:%s", self.data["c"]);
            self.label_collected.text = mo.STR.format("已集齐:%s组", self.hasCount);
            self.refreshList("list_items");
            var row = Math.ceil(self.list_items.dataProvider.length / 4);
            self.list_items.height = row == 1 ? 95 : 95 * row + 5 * (row - 1);
            self.ico_bg.height = self.list_items.height + 105;
            var groupHeight = self.group_reward.height;
            self.group_reward.y = self.group_list.y + self.list_items.height * 0.5 - 95 * 0.5;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
        };
        p._data_list_items = function () {
            var self = this;
            return self.act_items;
        };
        p._tap_btn_get = function () {
            var self = this;
            if (self.hasCount < 1) {
                return mo.showMsg("集齐对应的字才能兑换");
            }
            gd.activityCtrl.setTheWord(self.data["activityId"], self.data["index"], function (data) {
                var parent = self.data["p"];
                parent.updateActivity();
            }, self);
        };
        return ActivityNewCollectCharacterItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityNewCollectCharacterItem = ActivityNewCollectCharacterItem;
    egret.registerClass(ActivityNewCollectCharacterItem,"g_activity.ActivityNewCollectCharacterItem");
})(g_activity || (g_activity = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewCollectCharacterBaseItem = (function (_super) {
        __extends(ActivityNewCollectCharacterBaseItem, _super);
        function ActivityNewCollectCharacterBaseItem() {
            _super.apply(this, arguments);
            this.tapShowDetail = false;
        }
        var d = __define,c=ActivityNewCollectCharacterBaseItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.setLineWidth(80);
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var data = self.data;
            if (typeof data == 'object') {
                self.ico_item.setData({ itemId: data.itemId, count: data.count });
            }
            else {
                self.ico_item.setData({ itemId: data });
            }
            process.nextTick(function () {
                self.ico_item.label_count.visible = true;
                self.ico_item.label_count.text = "" + data.count;
            });
        };
        p._tap_rect_touch = function (event) {
            var self = this;
            if (self.tapShowDetail) {
                g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(self.ico_item.get('itemId'), null) }).show();
            }
        };
        p.setLineWidth = function (width) {
            var self = this;
            self.ico_item.label_text.width = width;
        };
        p.getTextHeight = function () {
            var self = this;
            return self.ico_item.label_text.height;
        };
        return ActivityNewCollectCharacterBaseItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityNewCollectCharacterBaseItem = ActivityNewCollectCharacterBaseItem;
    egret.registerClass(ActivityNewCollectCharacterBaseItem,"g_activity.ActivityNewCollectCharacterBaseItem");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewVplan = (function (_super) {
        __extends(ActivityNewVplan, _super);
        function ActivityNewVplan() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewVplan,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_activity.ActivityNewVplanItem;
            self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ACTIVITY_OP, self.checkRedPoint);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.medalType = 0;
        };
        p.checkRedPoint = function () {
            var self = this;
            self.reset();
        };
        p.updateActivity = function () {
            var self = this;
            gd.activityCtrl.getInfo(function () {
                self.reset();
            });
        };
        p.reset = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.setData({ "exActivity": gd.activityCtrl.getActivity(activity[gc.dsConsts.ActivityEntity.id]) });
            var scroller = (self.list_items).scroller;
            var scrollTop = scroller.scrollTop >= 0 ? scroller.scrollTop : 0;
            self.refreshList('list_items');
            process.nextTick(function () {
                if (!self.list_items)
                    return;
                scroller.throwVertically(scrollTop, 0);
            });
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            //活动时间
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            //self.label_cost_have.text = gd.userCtrl.getDiamond();
            self.actItems = [];
            var index = 0;
            var items = activity[gc.dsConsts.ActivityEntity.exValues];
            var rewards = activity[gc.dsConsts.ActivityEntity.items];
            for (var key in items) {
                var i = items[key] || {};
                var obj = {};
                obj["i"] = i;
                var reward = rewards[index] || {};
                obj["r"] = reward;
                obj["activityId"] = activity[gc.dsConsts.ActivityEntity.id];
                obj["p"] = self;
                obj["itemIndex"] = index;
                self.actItems.push(obj);
                index++;
            }
            self.refreshList("list_items");
            var tempData = self.actItems[0];
            if (tempData) {
                var data = tempData["i"];
                self.medalType = self.getMedalValue(data[0]);
            }
        };
        p._data_list_items = function () {
            var self = this;
            return self.actItems;
        };
        p._tap_btn_help = function () {
            var self = this;
            var helpId = self.medalType == 1 ? 227 : 228;
            g_base.BaseShowTip.create().setData({ id: 214 }).show();
        };
        p._tap_btn_source = function () {
            var self = this;
            var detailId = self.medalType == 1 ? 225 : 226;
            g_base.BaseShowTip.create().setData({ id: detailId }).show();
        };
        p.getMedalValue = function (id) {
            var medalArray = [10500, 10490];
            for (var i = 0; i < medalArray.length; i++) {
                if (id == medalArray[i]) {
                    return i + 1;
                }
            }
            return 0;
        };
        return ActivityNewVplan;
    })(mo.gui.Dlg);
    g_activity.ActivityNewVplan = ActivityNewVplan;
    egret.registerClass(ActivityNewVplan,"g_activity.ActivityNewVplan");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/26.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewVplanItem = (function (_super) {
        __extends(ActivityNewVplanItem, _super);
        function ActivityNewVplanItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewVplanItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_activity.ActivityNewCollectCharacterBaseItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            //self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!self.data)
                return;
            var data = self.data["i"];
            self.label_desc.text = self.getDescTxt(data);
            var id = self.data["activityId"];
            var itemIndex = self.data["itemIndex"];
            //* @returns {number} 1:已经领取，0：可领取，2:不可领取
            var status = gd.activityCtrl.getVPlanStatus(id, itemIndex);
            if (status == 0) {
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
            }
            else {
                self.ico_hasGet.visible = true;
                self.btn_get.visible = false;
            }
            self.act_items = [];
            var rewardList = self.data["r"];
            var count = 0;
            var haveMedal = false;
            for (var i in rewardList) {
                var obj = {};
                obj["itemId"] = parseInt(i);
                obj["count"] = parseInt(rewardList[i]);
                self.act_items.push(obj);
                count += 1;
                if (haveMedal == false && self.getMedalValue(obj["itemId"]) > 0) {
                    haveMedal = true;
                }
            }
            var width = count == 1 ? 74 : count * 74 + (count - 1) * 6;
            var maxWidth = 74 * 2 + 6;
            self.list_items.width = width > maxWidth ? maxWidth : width;
            //设置背景
            var panelType = haveMedal ? 0 : self.getMedalValue(data[0]);
            var pathTxt = "bg_panel_" + (panelType + 1).toString() + ".png";
            var stateUrl = "resource/ui2/ui_activity/" + pathTxt;
            RES.getResByUrl(stateUrl, function (texture) {
                self.ico_bg.source = texture;
            }, self, RES.ResourceItem.TYPE_IMAGE);
            self.refreshList("list_items");
        };
        p.getMedalValue = function (id) {
            var medalArray = [10500, 10490];
            for (var i = 0; i < medalArray.length; i++) {
                if (id == medalArray[i]) {
                    return i + 1;
                }
            }
            return 0;
        };
        p.getDescTxt = function (data) {
            var self = this;
            var descTxt = "成为V会员%s,";
            var moneyStr = "单笔充值达到%s可领取";
            var type = data[0];
            var money = data[1];
            var medalType = self.getMedalValue(type);
            var medalName = medalType == 1 ? "守护者" : "长老";
            descTxt = descTxt.replace("%s", medalName);
            moneyStr = moneyStr.replace("%s", money.toString());
            descTxt += moneyStr;
            // descTxt= mo.STR.format("%s+%s", descTxt.replace("%s",medalName), moneyStr.replace("%d",money));
            return descTxt;
        };
        p._initItem_list_items = function (cell) {
            var self = this;
            cell.tapShowDetail = true;
        };
        p._data_list_items = function () {
            var self = this;
            return self.act_items;
        };
        p._tap_btn_get = function () {
            var self = this;
            gd.activityCtrl.vPlan(self.data["activityId"], self.data["itemIndex"], function (data) {
                var parent = self.data["p"];
                parent.updateActivity();
            }, self);
        };
        return ActivityNewVplanItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityNewVplanItem = ActivityNewVplanItem;
    egret.registerClass(ActivityNewVplanItem,"g_activity.ActivityNewVplanItem");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewDetail = (function (_super) {
        __extends(ActivityNewDetail, _super);
        function ActivityNewDetail() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewDetail,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_rewards = g_activity.ActivityNewCollectCharacterBaseItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.dataArr = null;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!self.data)
                return;
            self.actItems = self.data.actItems || [];
            //var extrItems = self.data.extrItems;
            //if( extrItems){
            //    self.extrItemsArr = extrItems;
            //
            //    self.group_extar.y = actItems.length <= 4 ? self.oldHeight -100 : self.oldHeight;
            //}
            //self.group_extar.visible = extrItems ? true :false;
            var textData = self.data.textData || "";
            if (textData.length > 0) {
                self.label_red.text = textData;
            }
            self.refreshList("list_rewards");
        };
        p._data_list_rewards = function () {
            var self = this;
            return self.actItems;
        };
        return ActivityNewDetail;
    })(mo.gui.Dlg);
    g_activity.ActivityNewDetail = ActivityNewDetail;
    egret.registerClass(ActivityNewDetail,"g_activity.ActivityNewDetail");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewMaJiangTalos = (function (_super) {
        __extends(ActivityNewMaJiangTalos, _super);
        function ActivityNewMaJiangTalos() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewMaJiangTalos,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            //self._Item_list_items = g_base.BaseItemCell;
            self._Item_list_items = g_activity.ActivityNewCollectCharacterBaseItem;
            self._Item_list_itemsOther = g_base.BaseItemCell;
            self._selectedIndex = -1;
            self.haveClick = false;
            self.maxCardNum = 6;
            self.maxLuckValue = 0;
            self.helpId = 0;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.maxLuckValue = activity[gc.dsConsts.ActivityEntity.exValues3][1];
            var id = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id);
            var curreLuck = gd.activityCtrl.getLuckValue(id);
            self.setLuck(curreLuck);
            self.detailExtrItems = null;
            self.detailActItems = null;
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
            self.refreshList("list_itemsOther");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            //self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            //uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            //self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self._updateGoldInfo();
            var items = mo.getJSONWithFileName(gc.cfg_c_luckyMajong);
            var color = activity[gc.dsConsts.ActivityEntity.exValues2][0];
            var costItemId = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.spItemId];
            var subType = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.subType] || 0;
            var helpIdStr = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.bgIcon] || "";
            self.helpId = helpIdStr == "" ? 0 : parseInt(helpIdStr);
            var level = gd.userCtrl.getLvl();
            self.actItems = [];
            self.extrItems = [];
            self.detailExtrItems = [];
            self.detailActItems = [];
            for (var key in items) {
                var obj = items[key];
                var minLevel = obj[gc.c_luckyMajong_subTypeDivide][0];
                var maxLevel = obj[gc.c_luckyMajong_subTypeDivide][1];
                var inLevel = level >= minLevel && level <= maxLevel;
                if (obj[gc.c_luckyMajong_spItemId] == costItemId && subType == obj[gc.c_luckyMajong_subType] && obj[gc.c_luckyMajong_color] >= color && inLevel) {
                    if (obj[gc.c_luckyMajong_ifRare] == 1) {
                        self.extrItems.push({ "itemId": obj[gc.c_luckyMajong_itemID], "count": obj[gc.c_luckyMajong_amount], "color": obj[gc.c_luckyMajong_color] });
                    }
                    else {
                        self.actItems.push({ "itemId": obj[gc.c_luckyMajong_itemID], "count": obj[gc.c_luckyMajong_amount] });
                    }
                }
                if (obj[gc.c_luckyMajong_spItemId] == costItemId && subType == obj[gc.c_luckyMajong_subType] && inLevel) {
                    //if( obj[gc.c_luckyMajong_ifRare] == 1){
                    //    self.detailExtrItems.push({"itemId":obj[gc.c_luckyMajong_itemID],"count":obj[gc.c_luckyMajong_amount]});
                    //}
                    //else{
                    self.detailActItems.push({ "itemId": obj[gc.c_luckyMajong_itemID], "count": obj[gc.c_luckyMajong_amount] });
                }
            }
            self.extrItems.sort(function (a, b) {
                return b["color"] - a["color"];
            });
            self.refreshList("list_items");
            var cost = activity[gc.dsConsts.ActivityEntity.exValues][0];
            for (var i = 0; i < self.maxCardNum; ++i) {
                var label_cost = self["label_cost_have" + i];
                label_cost.text = "" + utils.formatByWan(cost, 0);
                var ico = self["ico_cost_icon" + i];
                if (costItemId == gc.c_prop.spItemIdKey.gold) {
                    self.setItemIcon(ico, costItemId);
                }
                else if (costItemId == gc.c_prop.spItemIdKey.diamond) {
                    ico.source = "ico_yuanbao";
                }
                else {
                    ico.source = resHelper.getItemIconPath(costItemId);
                    ico.scaleX = 0.5;
                    ico.scaleY = 0.5;
                    ico.anchorOffsetY = ico.height * 0.5;
                }
            }
        };
        p.setItemIcon = function (iconItem, spItemId) {
            var imgPath = resHelper.getSmallItemPath(spItemId);
            RES.getResByUrl(imgPath, function (texture) {
                iconItem.source = texture;
            }, self, RES.ResourceItem.TYPE_IMAGE);
        };
        p._updateGoldInfo = function () {
            var self = this;
            self.label_jinbi.text = gd.userCtrl.getGold();
            self.label_yuanbao.text = gd.userCtrl.getDiamond();
        };
        p._data_list_items = function () {
            var self = this;
            //var subActItems = [];
            var subActItems = self.actItems.slice(0, 4);
            return subActItems;
        };
        p._data_list_itemsOther = function () {
            var self = this;
            // return self.extrItems;
            var subExtrItems = null;
            var id = self.helpId;
            if (self.extrItems.length > 2 && id > 0) {
                subExtrItems = [];
                var item = { "itemId": id, "count": 1 };
                subExtrItems.push(item);
            }
            else {
                subExtrItems = self.extrItems.slice(0, 2);
            }
            return subExtrItems;
        };
        p._click_list_items = function (event) {
            var data = event.item;
            g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(data["itemId"], null) }).show();
        };
        p._click_list_itemsOther = function (event) {
            var data = event.item;
            g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(data["itemId"], null) }).show();
        };
        p.clickCard = function (index) {
            var self = this;
            if (self.haveClick) {
                return;
            }
            self.haveClick = true;
            self.clickTime = egret.setTimeout(function () {
                self.dealClickTime();
            }, self, 500);
            if (self._selectedIndex >= 0) {
                if (self._aniStep == 1) {
                    self._aniStep = 2;
                    self._runAnimation();
                }
                return;
            }
            var grp_item = self["grp_item" + index];
            if (grp_item.visible)
                return;
            var exActivity = self.data.exActivity;
            var id = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id);
            gd.activityCtrl.luckyMajong(id, index, function (data) {
                self._selectedIndex = index;
                self.initCardsWithIds(data, index);
                self._updateGoldInfo();
                self.haveClick = false;
                var curreLuck = gd.activityCtrl.getLuckValue(id);
                self.setLuck(curreLuck);
            });
        };
        p.dealClickTime = function () {
            var self = this;
            self.haveClick = false;
            egret.clearTimeout(self.clickTime);
        };
        p.clickFlip = function (index) {
            var self = this;
            if (self._aniStep == 1) {
                self._aniStep = 2;
                self._goNext();
            }
        };
        p.initCardsWithIds = function (ids, idx) {
            var self = this;
            self._gotCards = ids;
            self._aniIdx = [];
            for (var i = 0; i < self.maxCardNum; ++i) {
                var ico_item = self["ico_item" + i];
                ico_item.onClick(function (data) {
                    g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(data.data["itemId"], null) }).show();
                });
                if (i == idx) {
                    self._aniIdx.unshift(i);
                }
                else {
                    self._aniIdx.push(i);
                }
            }
            self._gotCards = ids;
            self._aniStep = 0;
            self._runAnimation();
            self.idTime1 = egret.setTimeout(function () {
                if (self._aniStep == 0) {
                    self._aniStep = 1;
                    self._runAnimation();
                }
            }, self, 500);
        };
        p._runAnimation = function () {
            var self = this;
            if (self._aniStep >= 2) {
                egret.clearTimeout(self.idTime2);
                self._goNext();
                return;
            }
            var ids = self._gotCards;
            if (self._aniStep == 0) {
                var index = self._aniIdx[0];
                self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyMajong, ids[index]), index);
            }
            else if (self._aniStep == 1) {
                for (var i = 1; i < self.maxCardNum; i++) {
                    var indexId = self._aniIdx[i];
                    self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyMajong, ids[indexId]), indexId);
                }
                self.idTime2 = egret.setTimeout(function () {
                    if (self._aniStep == 1) {
                        self._aniStep = 2;
                        self._runAnimation();
                    }
                }, self, 3000);
            }
        };
        p._goNext = function () {
            var self = this;
            egret.clearTimeout(self.idTime2);
            egret.clearTimeout(self.idTime1);
            for (var i = 0; i < self.maxCardNum; i++) {
                self._hideItemAtIndex(i);
            }
            self._selectedIndex = -1;
            self.haveClick = false;
        };
        p._showItemAtIndex = function (item, idx, cb) {
            var self = this;
            var ico_item = self["ico_item" + idx];
            if (!ico_item)
                return;
            var label_item = self["label_item" + idx];
            if (!label_item)
                return;
            var effect = self["card_effect" + idx];
            effect.visible = true;
            var _hitEfxPlayer = uiHelper.EfxPlayer.create(effect);
            _hitEfxPlayer.setEndCallback(function () {
                effect.visible = false;
                if (cb)
                    cb.call();
            });
            _hitEfxPlayer.play();
            var itemId = item[gc.c_luckyMajong_itemID];
            ico_item.setData({ itemId: itemId, count: item[gc.c_luckyMajong_amount] });
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            label_item.text = itemInfo[gc.t_item_name];
            var grp_hint = self["btn_card" + idx];
            grp_hint.visible = false;
            var grp_item = self["grp_item" + idx];
            grp_item.visible = true;
        };
        p._hideItemAtIndex = function (idx) {
            var self = this;
            var ico_item = self["ico_item" + idx];
            if (!ico_item)
                return;
            var label_item = self["label_item" + idx];
            if (!label_item)
                return;
            var effect = self["card_effect" + idx];
            effect.visible = true;
            var _hitEfxPlayer = uiHelper.EfxPlayer.create(effect);
            _hitEfxPlayer.setEndCallback(function () {
                effect.visible = false;
            });
            _hitEfxPlayer.play();
            label_item.text = "";
            var grp_hint = self["btn_card" + idx];
            grp_hint.visible = true;
            var grp_item = self["grp_item" + idx];
            grp_item.visible = false;
        };
        p._tap_btn_card0 = function () {
            var self = this;
            self.clickCard(0);
        };
        p._tap_btn_card1 = function () {
            var self = this;
            self.clickCard(1);
        };
        p._tap_btn_card2 = function () {
            var self = this;
            self.clickCard(2);
        };
        p._tap_btn_card3 = function () {
            var self = this;
            self.clickCard(3);
        };
        p._tap_btn_card4 = function () {
            var self = this;
            self.clickCard(4);
        };
        p._tap_btn_card5 = function () {
            var self = this;
            self.clickCard(5);
        };
        p._tap_btn_flipped0 = function () {
            var self = this;
            self.clickFlip(0);
        };
        p._tap_btn_flipped1 = function () {
            var self = this;
            self.clickFlip(1);
        };
        p._tap_btn_flipped2 = function () {
            var self = this;
            self.clickFlip(2);
        };
        p._tap_btn_flipped3 = function () {
            var self = this;
            self.clickFlip(3);
        };
        p._tap_btn_flipped4 = function () {
            var self = this;
            self.clickFlip(4);
        };
        p._tap_btn_flipped5 = function () {
            var self = this;
            self.clickFlip(5);
        };
        p._tap_btn_container = function () {
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 229 }).show();
        };
        p._tap_btn_detail = function () {
            var self = this;
            //ActivityNewDetail.create().setData({actItems:self.detailActItems, extrItems:self.detailExtrItems}).show();
            g_activity.ActivityNewDetail.create().setData({ actItems: self.detailActItems, extrItems: null }).show();
        };
        p.setLuck = function (curreLuck) {
            var self = this;
            var str = "幸运值:" + curreLuck + "/" + self.maxLuckValue;
            self.label_activity_desc2.text = str;
            var per = Math.floor(curreLuck / self.maxLuckValue * 100);
            self.progress_luck.setValue(per);
        };
        return ActivityNewMaJiangTalos;
    })(mo.gui.Dlg);
    g_activity.ActivityNewMaJiangTalos = ActivityNewMaJiangTalos;
    egret.registerClass(ActivityNewMaJiangTalos,"g_activity.ActivityNewMaJiangTalos");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/26.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewAskChoiceItem = (function (_super) {
        __extends(ActivityNewAskChoiceItem, _super);
        function ActivityNewAskChoiceItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewAskChoiceItem,p=c.prototype;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.survey_type = 0;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!self.data)
                return;
            var data = self.data;
            self.label_count.text = data["option"];
            self.survey_type = data["survey_type"];
            self.ckb_choice.selected = data["select"];
        };
        p._chg_ckb_choice = function () {
            var self = this;
            var select = self.ckb_choice.selected;
            var data = self.data;
            if (!data)
                return;
            var p = data["p"];
            if (p) {
                var index = data["index"];
                p.changOption(index, select);
            }
        };
        p.changeSelect = function (isSelected) {
            var self = this;
            self.ckb_choice.selected = isSelected;
        };
        return ActivityNewAskChoiceItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityNewAskChoiceItem = ActivityNewAskChoiceItem;
    egret.registerClass(ActivityNewAskChoiceItem,"g_activity.ActivityNewAskChoiceItem");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/26.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewAskItem = (function (_super) {
        __extends(ActivityNewAskItem, _super);
        function ActivityNewAskItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewAskItem,p=c.prototype;
        //optionCollection: egret.gui.ArrayCollection;
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self._Item_list_items = g_activity.ActivityNewAskChoiceItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.survey_type = 0;
            self.optionArr = null;
            self.dataArr = null;
            //self.optionCollection = new egret.gui.ArrayCollection();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!self.data)
                return;
            self.id = self.data["id"];
            var parent = self.data["p"];
            var askData = mo.getJSONWithFileNameAndID(gc.cfg_c_userSurvey, self.id);
            self.label_title.text = askData[gc.c_userSurvey_question];
            var optionContent = askData[gc.c_userSurvey_optionContent];
            self.survey_type = askData[gc.c_userSurvey_type];
            //self.survey_type = 2;
            self.dataArr = [];
            self.optionArr = [];
            for (var i = 0; i < optionContent.length; i++) {
                var data = {};
                data["p"] = self;
                data["option"] = optionContent[i];
                data["survey_type"] = self.survey_type;
                data["select"] = parent.getQuestSelect(self.id, i);
                if (data["select"]) {
                    self.dataArr.push(i);
                }
                data["index"] = i;
                self.optionArr.push(data);
            }
            //self.optionCollection.source = self.optionArr;
            //self.list_items.dataProvider = self.optionCollection;
            //self.list_items.dataProvider.addEventListener(egret.gui.CollectionEvent.COLLECTION_CHANGE,self.onCollectionChange,self);
            self.refreshList("list_items");
            self.list_items.width = self.group_content.width;
        };
        p._data_list_items = function () {
            var self = this;
            return self.optionArr;
        };
        //collectionChangeHandler(evt:egret.gui.CollectionEvent):void {
        //    egret.log("数据已改变:"+evt.kind+","+evt.target.length);
        //}
        p.changOption = function (index, select) {
            var self = this;
            var needChange = false;
            if (self.survey_type == 1) {
                if (select) {
                    self.dataArr[0] = index;
                    self.changeOtherSelect(index);
                }
                else {
                    self.dataArr.splice(0, 1);
                }
            }
            else if (self.survey_type == 2) {
                if (select) {
                    self.dataArr.push(index);
                }
                else {
                    var id = self.getIndexInArr(index);
                    if (id > -1) {
                        self.dataArr.splice(id, 1);
                    }
                }
            }
            else {
                var optionLen = self.optionArr.length;
                //最后一个选项
                if (index == optionLen - 1) {
                    //单选
                    if (select) {
                        var len = self.dataArr.length;
                        if (len > 0) {
                            self.changeOtherSelect(optionLen - 1);
                            self.dataArr.splice(0, len);
                        }
                        self.dataArr.push(index);
                    }
                    else {
                        self.dataArr.splice(0, 1);
                    }
                }
                else {
                    if (select) {
                        //最后一个是否选中
                        var lastIndex = self.getIndexInArr(optionLen - 1);
                        if (lastIndex > -1) {
                            var render = self.list_items.dataGroup.getElementAt(optionLen - 1);
                            if (render) {
                                render.changeSelect(false);
                            }
                            self.dataArr.splice(lastIndex, 1);
                        }
                        self.dataArr.push(index);
                    }
                    else {
                        var id = self.getIndexInArr(index);
                        if (id > -1) {
                            self.dataArr.splice(id, 1);
                        }
                    }
                }
            }
            var p = self.data["p"];
            if (p) {
                p.changOption(self.id, self.dataArr);
            }
        };
        p.getIndexInArr = function (id) {
            var self = this;
            for (var i = 0; i < self.dataArr.length; i++) {
                var data = self.dataArr[i];
                if (data == id) {
                    return i;
                }
            }
            return -1;
        };
        p.changeOtherSelect = function (index) {
            var self = this;
            for (var i = 0; i < self.optionArr.length; i++) {
                if (i != index) {
                    var render = self.list_items.dataGroup.getElementAt(i);
                    if (render) {
                        render.changeSelect(false);
                    }
                }
            }
        };
        return ActivityNewAskItem;
    })(mo.gui.ItemRenderer);
    g_activity.ActivityNewAskItem = ActivityNewAskItem;
    egret.registerClass(ActivityNewAskItem,"g_activity.ActivityNewAskItem");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewAsk = (function (_super) {
        __extends(ActivityNewAsk, _super);
        function ActivityNewAsk() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewAsk,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_items = g_activity.ActivityNewCollectCharacterBaseItem;
            self._Item_list_questItems = g_activity.ActivityNewAskItem;
            //self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ACTIVITY_OP, self.checkRedPoint);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.medalType = 0;
            self.questMap = {};
        };
        //checkRedPoint(){
        //    var self = this;
        //    self.reset();
        //}
        //
        //updateActivity(){
        //    var self = this;
        //    gd.activityCtrl.getInfo(function(){
        //       self.reset();
        //    });
        //}
        //reset(){
        //    var self = this;
        //    var exActivity = self.data.exActivity;
        //    var activity = exActivity[gc.dsConsts.ExActivity.activity];
        //
        //    self.setData({"exActivity":gd.activityCtrl.getActivity(activity[gc.dsConsts.ActivityEntity.id])});
        //
        //    var scroller = (<any>(self.list_items)).scroller;
        //    var scrollTop = scroller.scrollTop >=0?scroller.scrollTop:0;
        //    self.refreshList('list_items');
        //    process.nextTick(function(){
        //        if(!self.list_items)return;
        //        scroller.throwVertically(scrollTop,0);
        //    });
        //}
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            //活动时间
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            var activityId = activity[gc.dsConsts.ActivityEntity.id];
            var surveyStatus = gd.activityCtrl.getUserSurveyStatus(activityId);
            self.setAskState(surveyStatus == 1);
            self.actItems = [];
            self.questionArr = [];
            var questIdArr = activity[gc.dsConsts.ActivityEntity.exValues];
            var index = 0;
            for (var i = 0; i < questIdArr.length; i++) {
                var obj = {};
                obj["id"] = questIdArr[i];
                obj["p"] = self;
                obj["itemIndex"] = index;
                self.questionArr.push(obj);
                index += 1;
            }
            var actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            for (var i = 0; i < actItems.length; i++) {
                var data = actItems[i];
                var type = gc.dsConsts.ActivityItem.items;
                var itemObj = data[type];
                for (var key in itemObj) {
                    self.actItems.push({
                        itemId: key,
                        count: itemObj[key]
                    });
                }
            }
            self.refreshList("list_items");
            self.refreshList("list_questItems");
        };
        p._data_list_items = function () {
            var self = this;
            var subActItems = self.actItems.slice(0, 4);
            return subActItems;
        };
        p._data_list_questItems = function () {
            var self = this;
            return self.questionArr;
        };
        p._tap_btn_detail = function () {
            var self = this;
            var txt = "完成调查后,将获得如下奖励";
            g_activity.ActivityNewDetail.create().setData({ actItems: self.actItems, extrItems: null, textData: txt }).show();
        };
        p._tap_btn_help = function () {
            var self = this;
            g_base.BaseShowTip.create().setData({ id: 232 }).show();
        };
        p._tap_btn_sure = function () {
            var self = this;
            var exActivity = self.data.exActivity;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            var activityId = activity[gc.dsConsts.ActivityEntity.id];
            var questIdArr = activity[gc.dsConsts.ActivityEntity.exValues];
            self.testData();
            if (gd.activityCtrl.getUserSurveyStatus(activityId) == 1) {
                mo.showMsg("你已经测试");
                return;
            }
            if (self.checkAskAllQuest(questIdArr) == false) {
                mo.showMsg("请完成所有题目！");
                return;
            }
            var index = 0;
            gd.activityCtrl.userSurvey(activityId, index, self.questMap, function (data) {
                mo.showMsg("奖励已经发至邮箱！");
                self.setAskState(true);
            }, self);
        };
        p._click_list_items = function (event) {
            var data = event.item;
            g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(data["itemId"], null) }).show();
        };
        p.changOption = function (id, dataArr) {
            var self = this;
            var questData = null;
            for (var key in self.questMap) {
                if (id == parseInt(key)) {
                    questData = self.questMap[key];
                    break;
                }
            }
            if (questData == null) {
                questData = [];
                self.questMap[id] = questData;
            }
            questData.splice(0, questData.length);
            for (var i = 0; i < dataArr.length; i++) {
                questData[i] = dataArr[i];
            }
        };
        p.checkAskAllQuest = function (questIdArr) {
            var self = this;
            if (!questIdArr) {
                return false;
            }
            for (var i = 0; i < questIdArr.length; i++) {
                var id = questIdArr[i];
                var data = self.questMap[id];
                if (!data || data.length == 0) {
                    return false;
                }
            }
            return true;
        };
        p.testData = function () {
            var self = this;
            for (var key in self.questMap) {
                var data = self.questMap[key];
                var str = "";
                for (var i = 0; i < data.length; i++) {
                    str += data[i] + ",";
                }
                console.log("key= %s,data = %s", key, str);
            }
        };
        p.getQuestSelect = function (id, index) {
            var self = this;
            var quest = self.questMap[id];
            if (quest) {
                for (var i = 0; i < quest.length; i++) {
                    var data = quest[i];
                    if (data == index) {
                        return true;
                    }
                }
            }
            return false;
        };
        p.setAskState = function (haveAsk) {
            var self = this;
            self.img_achive.visible = haveAsk;
            self.list_questItems.visible = !haveAsk;
            self.btn_sure.visible = !haveAsk;
        };
        return ActivityNewAsk;
    })(mo.gui.Dlg);
    g_activity.ActivityNewAsk = ActivityNewAsk;
    egret.registerClass(ActivityNewAsk,"g_activity.ActivityNewAsk");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewNotice = (function (_super) {
        __extends(ActivityNewNotice, _super);
        function ActivityNewNotice() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewNotice,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.subType = 0;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            var exData = activity[gc.dsConsts.ActivityEntity.exData];
            var subType = exData[gc.c_prop.activityExDataTypeKey.subType];
            self.subType = subType;
            var layer = null;
            if (subType == 1) {
                layer = g_activity.ActivityNewNoticeSimple.create().setData({ activity: activity });
            }
            else {
                layer = g_activity.ActivityNewNoticeReward.create().setData({ activity: activity });
            }
            self.group_content.addElement(layer);
        };
        p._tap_btn_help = function () {
            var self = this;
            var helpId = self.subType == 1 ? 230 : 231;
            g_base.BaseShowTip.create().setData({ id: helpId }).show();
        };
        return ActivityNewNotice;
    })(mo.gui.Dlg);
    g_activity.ActivityNewNotice = ActivityNewNotice;
    egret.registerClass(ActivityNewNotice,"g_activity.ActivityNewNotice");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewNoticeSimple = (function (_super) {
        __extends(ActivityNewNoticeSimple, _super);
        function ActivityNewNoticeSimple() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewNoticeSimple,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!self.data)
                return;
            var activity = self.data.activity;
            if (!activity)
                return;
            var txt = activity[gc.dsConsts.ActivityEntity.content];
            self.label_text.text = txt;
            var exData = activity[gc.dsConsts.ActivityEntity.exData];
            var noticIcon = exData[gc.c_prop.activityExDataTypeKey.bgIcon] || "";
            if (noticIcon.length > 0) {
                var stateUrl = "resource/ui2/ui_activity/" + noticIcon + ".png";
                RES.getResByUrl(stateUrl, function (texture) {
                    self.ico_head.source = texture;
                }, self, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        return ActivityNewNoticeSimple;
    })(mo.gui.Layer);
    g_activity.ActivityNewNoticeSimple = ActivityNewNoticeSimple;
    egret.registerClass(ActivityNewNoticeSimple,"g_activity.ActivityNewNoticeSimple");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewNoticeReward = (function (_super) {
        __extends(ActivityNewNoticeReward, _super);
        function ActivityNewNoticeReward() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewNoticeReward,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._Item_list_rewards = g_activity.ActivityNewCollectCharacterBaseItem;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.actItems = null;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!self.data)
                return;
            var activity = self.data.activity;
            if (!activity)
                return;
            //活动时间
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            var txt = activity[gc.dsConsts.ActivityEntity.content];
            self.label_text.text = txt;
            var exData = activity[gc.dsConsts.ActivityEntity.exData];
            var noticIcon = exData[gc.c_prop.activityExDataTypeKey.bgIcon] || "";
            if (noticIcon.length > 0) {
                var stateUrl = "resource/ui2/ui_activity/" + noticIcon + ".png";
                RES.getResByUrl(stateUrl, function (texture) {
                    self.ico_head.source = texture;
                }, self, RES.ResourceItem.TYPE_IMAGE);
            }
            self.actItems = [];
            var actItems = activity[gc.dsConsts.ActivityEntity.items];
            for (var i = 0; i < actItems.length; i++) {
                var obj = actItems[i];
                for (var key in obj) {
                    self.actItems.push({
                        itemId: key,
                        count: obj[key]
                    });
                }
            }
            self.refreshList("list_rewards");
        };
        p._data_list_rewards = function () {
            var self = this;
            return self.actItems;
        };
        p._click_list_rewards = function (event) {
            var data = event.item;
            g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(data["itemId"], null) }).show();
        };
        return ActivityNewNoticeReward;
    })(mo.gui.Layer);
    g_activity.ActivityNewNoticeReward = ActivityNewNoticeReward;
    egret.registerClass(ActivityNewNoticeReward,"g_activity.ActivityNewNoticeReward");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewCardTalos = (function (_super) {
        __extends(ActivityNewCardTalos, _super);
        function ActivityNewCardTalos() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewCardTalos,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            //self._Item_list_items = g_base.BaseItemCell;
            self._Item_list_items = g_activity.ActivityNewCollectCharacterBaseItem;
            self._Item_list_itemsOther = g_base.BaseItemCell;
            self.maxLuckValue = 0;
            self.helpId = 0;
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.maxLuckValue = activity[gc.dsConsts.ActivityEntity.exValues3][1];
            var id = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id);
            var curreLuck = gd.activityCtrl.getNewLuckValue(id);
            self.setLuck(curreLuck);
            self.detailExtrItems = null;
            self.detailActItems = null;
        };
        p.reset = function () {
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
            self.refreshList("list_itemsOther");
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            //self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            //uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            //self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self._updateGoldInfo();
            var items = mo.getJSONWithFileName(gc.cfg_c_luckyMajong);
            var color = activity[gc.dsConsts.ActivityEntity.exValues2][0];
            var costItemId = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.spItemId];
            var subType = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.subType] || 0;
            var helpIdStr = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.bgIcon] || "";
            self.helpId = helpIdStr == "" ? 0 : parseInt(helpIdStr);
            var level = gd.userCtrl.getLvl();
            self.actItems = [];
            self.extrItems = [];
            self.detailExtrItems = [];
            self.detailActItems = [];
            for (var key in items) {
                var obj = items[key];
                var minLevel = obj[gc.c_luckyMajong_subTypeDivide][0];
                var maxLevel = obj[gc.c_luckyMajong_subTypeDivide][1];
                var inLevel = level >= minLevel && level <= maxLevel;
                if (obj[gc.c_luckyMajong_spItemId] == costItemId && subType == obj[gc.c_luckyMajong_subType] && obj[gc.c_luckyMajong_color] >= color && inLevel) {
                    if (obj[gc.c_luckyMajong_ifRare] == 1) {
                        self.extrItems.push({ "itemId": obj[gc.c_luckyMajong_itemID], "count": obj[gc.c_luckyMajong_amount], "color": obj[gc.c_luckyMajong_color] });
                    }
                    else {
                        self.actItems.push({ "itemId": obj[gc.c_luckyMajong_itemID], "count": obj[gc.c_luckyMajong_amount] });
                    }
                }
                if (obj[gc.c_luckyMajong_spItemId] == costItemId && subType == obj[gc.c_luckyMajong_subType] && inLevel) {
                    //if( obj[gc.c_luckyMajong_ifRare] == 1){
                    //    self.detailExtrItems.push({"itemId":obj[gc.c_luckyMajong_itemID],"count":obj[gc.c_luckyMajong_amount]});
                    //}
                    //else{
                    self.detailActItems.push({ "itemId": obj[gc.c_luckyMajong_itemID], "count": obj[gc.c_luckyMajong_amount] });
                }
            }
            self.extrItems.sort(function (a, b) {
                return b["color"] - a["color"];
            });
            self.refreshList("list_items");
            var id = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id);
            var layer = g_activity.ActivityNewCardGroup.create().setData({ activityId: id, activity: activity, root: self });
            self.btn_container.addElement(layer);
        };
        p.updateInfo = function () {
            var self = this;
            self._updateGoldInfo();
            var exActivity = self.data.exActivity;
            var id = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id);
            var curreLuck = gd.activityCtrl.getNewLuckValue(id);
            self.setLuck(curreLuck);
        };
        p._updateGoldInfo = function () {
            var self = this;
            self.label_jinbi.text = gd.userCtrl.getGold();
            self.label_yuanbao.text = gd.userCtrl.getDiamond();
        };
        p._data_list_items = function () {
            var self = this;
            //var subActItems = [];
            var subActItems = self.actItems.slice(0, 4);
            return subActItems;
        };
        p._data_list_itemsOther = function () {
            var self = this;
            // return self.extrItems;
            var subExtrItems = null;
            var id = self.helpId;
            if (self.extrItems.length > 2 && id > 0) {
                subExtrItems = [];
                var item = { "itemId": id, "count": 1 };
                subExtrItems.push(item);
            }
            else {
                subExtrItems = self.extrItems.slice(0, 2);
            }
            return subExtrItems;
        };
        p._click_list_items = function (event) {
            var data = event.item;
            g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(data["itemId"], null) }).show();
        };
        p._click_list_itemsOther = function (event) {
            var data = event.item;
            g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(data["itemId"], null) }).show();
        };
        p._tap_btn_help = function () {
            g_base.BaseShowTip.create().setData({ id: 233 }).show();
        };
        p._tap_btn_detail = function () {
            var self = this;
            //ActivityNewDetail.create().setData({actItems:self.detailActItems, extrItems:self.detailExtrItems}).show();
            g_activity.ActivityNewDetail.create().setData({ actItems: self.detailActItems, extrItems: null }).show();
        };
        p.setLuck = function (curreLuck) {
            var self = this;
            var str = "幸运值:" + curreLuck + "/" + self.maxLuckValue;
            self.label_activity_desc2.text = str;
            var per = Math.floor(curreLuck / self.maxLuckValue * 100);
            self.progress_luck.setValue(per);
        };
        return ActivityNewCardTalos;
    })(mo.gui.Dlg);
    g_activity.ActivityNewCardTalos = ActivityNewCardTalos;
    egret.registerClass(ActivityNewCardTalos,"g_activity.ActivityNewCardTalos");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewCardGroup = (function (_super) {
        __extends(ActivityNewCardGroup, _super);
        function ActivityNewCardGroup() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewCardGroup,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.cardItemArr = [];
            self.activityId = 0;
            self._selectedIndex = -1;
            self.haveClick = false;
            self.root = null;
            self.cost = 0;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!self.data)
                return;
            var activity = self.data.activity;
            if (!activity)
                return;
            self.maxCardNum = 3;
            for (var i = 0; i < self.maxCardNum; i++) {
                var group = self.group_cardList.getChildAt(i);
                var cardItem = g_activity.ActivityNewCardItem.create().setData({ index: i, activity: activity, root: self });
                group.addElement(cardItem);
                self.cardItemArr.push(cardItem);
            }
            var cost = activity[gc.dsConsts.ActivityEntity.exValues][0];
            var costItemId = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.spItemId];
            self.activityId = self.data.activityId;
            self.root = self.data.root;
            self.cost = cost;
            self.costItemId = costItemId;
            self.updateItemInfo();
        };
        p.updateItemInfo = function () {
            var self = this;
            var id = self.activityId;
            var count = gd.activityCtrl.getTodayActivityCount(id);
            var freeCount = gd.activityCtrl.getFreeDay(id);
            var totalCount = gd.activityCtrl.getTotalDay(id);
            var freeNum = freeCount > count ? freeCount - count : 0;
            var cost = freeNum > 0 ? 0 : self.cost;
            var data = {};
            data["freeNum"] = freeNum;
            data["totalFreeCount"] = freeCount;
            data["neeMoney"] = cost;
            data["costItemId"] = self.costItemId;
            for (var i = 0; i < self.maxCardNum; i++) {
                var item = self.cardItemArr[i];
                item.setMoneyInfo(data);
            }
            var leftCount = totalCount - count;
            self.label_count.text = count.toString() + "/" + totalCount.toString();
        };
        p.clickCard = function (index) {
            var self = this;
            if (self.haveClick) {
                return;
            }
            self.haveClick = true;
            self.clickTime = egret.setTimeout(function () {
                self.dealClickTime();
            }, self, 500);
            if (self._selectedIndex >= 0) {
                if (self._aniStep == 1) {
                    self._aniStep = 2;
                    self._runAnimation();
                }
                return;
            }
            var id = self.activityId;
            gd.activityCtrl.newLuckyMajong(id, index, function (data) {
                self._selectedIndex = index;
                self.initCardsWithIds(data, index);
                self.haveClick = false;
                self.root.updateInfo();
                self.updateItemInfo();
            });
        };
        p.dealClickTime = function () {
            var self = this;
            self.haveClick = false;
            egret.clearTimeout(self.clickTime);
        };
        p.clickFlip = function (index) {
            var self = this;
            if (self._aniStep == 1) {
                self._aniStep = 2;
                self._goNext();
            }
        };
        p.initCardsWithIds = function (ids, idx) {
            var self = this;
            self._gotCards = ids;
            self._aniIdx = [];
            for (var i = 0; i < self.maxCardNum; ++i) {
                //var ico_item = self["ico_item"+i];
                //ico_item.onClick(function(data){
                //    g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data.data["itemId"], null)}).show();
                //});
                if (i == idx) {
                    self._aniIdx.unshift(i);
                }
                else {
                    self._aniIdx.push(i);
                }
            }
            self._gotCards = ids;
            self._aniStep = 0;
            self._runAnimation();
            self.idTime1 = egret.setTimeout(function () {
                if (self._aniStep == 0) {
                    self._aniStep = 1;
                    self._runAnimation();
                }
            }, self, 500);
        };
        p._runAnimation = function () {
            var self = this;
            if (self._aniStep >= 2) {
                egret.clearTimeout(self.idTime2);
                self._goNext();
                return;
            }
            var ids = self._gotCards;
            if (self._aniStep == 0) {
                var index = self._aniIdx[0];
                self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyMajong, ids[index]), index);
            }
            else if (self._aniStep == 1) {
                for (var i = 1; i < self.maxCardNum; i++) {
                    var indexId = self._aniIdx[i];
                    self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyMajong, ids[indexId]), indexId);
                }
                self.idTime2 = egret.setTimeout(function () {
                    if (self._aniStep == 1) {
                        self._aniStep = 2;
                        self._runAnimation();
                    }
                }, self, 3000);
            }
        };
        p._goNext = function () {
            var self = this;
            egret.clearTimeout(self.idTime2);
            egret.clearTimeout(self.idTime1);
            for (var i = 0; i < self.maxCardNum; i++) {
                self._hideItemAtIndex(i);
            }
            self._selectedIndex = -1;
            self.haveClick = false;
        };
        p._showItemAtIndex = function (item, idx) {
            var self = this;
            var askItem = self.getAskItemByIndex(idx);
            if (askItem) {
                askItem.showItem(item);
            }
        };
        p._hideItemAtIndex = function (idx) {
            var self = this;
            var askItem = self.getAskItemByIndex(idx);
            if (askItem) {
                askItem.hideItem();
            }
        };
        p.getAskItemByIndex = function (index) {
            var self = this;
            var askItem = null;
            if (index >= 0 && index < self.maxCardNum) {
                askItem = self.cardItemArr[index];
            }
            return askItem;
        };
        return ActivityNewCardGroup;
    })(mo.gui.Layer);
    g_activity.ActivityNewCardGroup = ActivityNewCardGroup;
    egret.registerClass(ActivityNewCardGroup,"g_activity.ActivityNewCardGroup");
})(g_activity || (g_activity = {}));

/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewCardItem = (function (_super) {
        __extends(ActivityNewCardItem, _super);
        function ActivityNewCardItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewCardItem,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.index = -1;
            self.root = null;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            if (!self.data)
                return;
            self.index = self.data.index;
            self.root = self.data.root;
            self.btn_flipped.visible = true;
            self.group_card.visible = true;
            self.ico_item.setLineWidth(80);
            self.ico_item.onClick(function (data) {
                g_base.BaseItemDetail.create().setData({ bdc: gd.BagDataCtrl.create(data.data["itemId"], null) }).show();
            });
        };
        p.setIndex = function (index) {
            var self = this;
            self.index = index;
        };
        p._tap_group_card = function () {
            var self = this;
            self.root.clickCard(self.index);
        };
        p._tap_btn_flipped = function () {
            var self = this;
            self.root.clickFlip(self.index);
        };
        p.setMoneyInfo = function (data) {
            var self = this;
            var freeNum = data.freeNum;
            var neeMoney = data.neeMoney;
            var costItemId = data.costItemId;
            var totalFreeCount = data.totalFreeCount;
            self.group_free.visible = freeNum > 0;
            self.group_money.visible = freeNum == 0;
            if (freeNum > 0) {
                self.label_freenum.text = freeNum.toString() + "/" + totalFreeCount.toString();
            }
            else {
                var label_cost = self["label_cost_have"];
                label_cost.text = "" + utils.formatByWan(neeMoney, 0);
                var ico = self["ico_cost_icon"];
                if (costItemId == gc.c_prop.spItemIdKey.gold) {
                    self.setItemIcon(ico, costItemId);
                }
                else if (costItemId == gc.c_prop.spItemIdKey.diamond) {
                    ico.source = "ico_yuanbao";
                }
                else {
                    ico.source = resHelper.getItemIconPath(costItemId);
                    ico.scaleX = 0.5;
                    ico.scaleY = 0.5;
                    ico.anchorOffsetY = ico.height * 0.5;
                }
            }
        };
        p.setItemIcon = function (iconItem, spItemId) {
            var self = this;
            var imgPath = resHelper.getSmallItemPath(spItemId);
            RES.getResByUrl(imgPath, function (texture) {
                iconItem.source = texture;
            }, self, RES.ResourceItem.TYPE_IMAGE);
        };
        p.showItem = function (item) {
            var self = this;
            if (!self.ico_item)
                return;
            var effect = self["card_effect"];
            effect.visible = true;
            var _hitEfxPlayer = uiHelper.EfxPlayer.create(effect);
            _hitEfxPlayer.setEndCallback(function () {
                effect.visible = false;
            });
            _hitEfxPlayer.play();
            var itemId = item[gc.c_luckyMajong_itemID];
            self.ico_item.setData({ itemId: itemId, count: item[gc.c_luckyMajong_amount] });
            var textHeight = self.ico_item.getTextHeight();
            self.rect_textBg.height = textHeight + 7;
            //var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            //label_item.text = itemInfo[gc.t_item_name];
            self.group_card.visible = false;
            var grp_item = self["grp_item"];
            grp_item.visible = true;
        };
        p.hideItem = function () {
            var self = this;
            var effect = self["card_effect"];
            effect.visible = true;
            var _hitEfxPlayer = uiHelper.EfxPlayer.create(effect);
            _hitEfxPlayer.setEndCallback(function () {
                effect.visible = false;
            });
            _hitEfxPlayer.play();
            self.group_card.visible = true;
            var grp_item = self["grp_item"];
            grp_item.visible = false;
        };
        return ActivityNewCardItem;
    })(mo.gui.Layer);
    g_activity.ActivityNewCardItem = ActivityNewCardItem;
    egret.registerClass(ActivityNewCardItem,"g_activity.ActivityNewCardItem");
})(g_activity || (g_activity = {}));

/**
 * Created by admin on 16/2/24.
 */
var g_activity;
(function (g_activity) {
    var ActivityNewDayLimitBuy = (function (_super) {
        __extends(ActivityNewDayLimitBuy, _super);
        function ActivityNewDayLimitBuy() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityNewDayLimitBuy,p=c.prototype;
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
        };
        p.dataChanged = function () {
            //super.dataChanged();
            var self = this;
            var exActivity = self.data.exActivity;
            if (!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            //self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self.actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            self.refreshList("list_items");
            var exData = activity[gc.dsConsts.ActivityEntity.exData];
            var funName = "";
            if (exData) {
                var costItemId = exData[gc.c_prop.activityExDataTypeKey.spItemId];
                self.ico_have_icon.source = resHelper.getItemIconPath(costItemId);
                self.ico_cost_icon.source = resHelper.getItemIconPath(costItemId);
                self.label_yuanbao_cost.text = activity[gc.dsConsts.ActivityEntity.exValues][0] + "";
                self.label_yuanbao_left.text = gd.userCtrl.getItemNum(costItemId) + "";
                funName = exData[gc.c_prop.activityExDataTypeKey.funcName] || "";
            }
            var activityID = activity[gc.dsConsts.ActivityEntity.id];
            var buyCount = gd.activityCtrl.getTodayNewLimitPanicBuyCount(activityID);
            var limitCount = gd.activityCtrl.getTotalDay(activityID);
            var totalCount = limitCount;
            var vipLevel = gd.userCtrl.getVip();
            var vipLimit = exData[gc.c_prop.activityExDataTypeKey.vipLimitLvl] || 0;
            if (funName.length > 0 && typeof gc[funName] == "function") {
                totalCount = gc[funName](vipLevel, vipLimit);
            }
            self.label_vipHint.visible = vipLimit > 0;
            if (vipLimit > 0) {
                self.label_vipHint.text = "vip" + vipLimit.toString() + "及以上才可购买";
            }
            self.label_buy_count.text = "今日购买次数:" + buyCount + "/" + totalCount;
            if (buyCount >= totalCount) {
                self.label_buy_count.text = "已达到购买上限";
                self.ico_hasGet.visible = true;
            }
            else {
                self.ico_hasGet.visible = false;
            }
        };
        p._tap_btn_buy = function () {
            var self = this;
            var activity = self.data.exActivity[gc.dsConsts.ExActivity.activity];
            gd.activityCtrl.newLimitPanicBuy(activity[gc.dsConsts.ActivityEntity.id], 0, function (data) {
                self.setData(self.data);
            }, self);
        };
        return ActivityNewDayLimitBuy;
    })(g_activity.ActivityNewLimitBuy);
    g_activity.ActivityNewDayLimitBuy = ActivityNewDayLimitBuy;
    egret.registerClass(ActivityNewDayLimitBuy,"g_activity.ActivityNewDayLimitBuy");
})(g_activity || (g_activity = {}));

