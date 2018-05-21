/**
 * Created by SmallAiTT on 2015/7/11.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var g_bag;
(function (g_bag) {
    /**
     *
     * @author
     *
     */
    var BagLayer = (function (_super) {
        __extends(BagLayer, _super);
        function BagLayer() {
            _super.apply(this, arguments);
        }
        //@override
        BagLayer.prototype._initProp = function () {
            var self = this;
            super._initProp.call(this);
            self._Item_list_items = BagCell;
            self.showType = 1;
            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_SMELT, function () {
                self._refresh();
            });
            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_BATCH_SMELT, function () {
                self._refresh();
            });
            self.registerClassByKey(gd.CustomCtrl, gd.CustomCtrl.ON_INHERITED, function () {
                self._refresh();
            });
            self.registerClassByKey(gd.CustomCtrl, gd.CustomCtrl.ON_CUSTOM, function () {
                self._refresh();
            });
            self.registerClassByKey(gd.UserCtrl, gd.UserCtrl.ON_ITEM_CHANGE, function () {
                self._refresh();
            });
        };
        BagLayer.prototype._childrenCreated = function () {
            super._childrenCreated.call(this);
            var self = this;
            self.tab_bag.selectedIndex = 0;
            self.label_grid.text = [gd.userCtrl.getEquipBagNum(), gd.userCtrl.getEquipBagGrid()];
            self._scollerHelper = new uiHelper.ScrollerHelper(self.list_items);
        };
        BagLayer.prototype._data_list_items = function () {
            var self = this, filter, sorter;
            self._scollerHelper.resumeScroll();
            var BDC = gd.BagDataCtrl;
            return (self.showType != 1) ? BDC.getList(BDC.getFilterOpt(self.showType), BDC.getSortOpt(self.showType)) : BDC.getEquipList(gd.equipCtrl.getEquipList());
        };
        BagLayer.prototype._tap_btn_forge = function () {
            var self = this;
            self._scollerHelper.pauseScrollV();
            mo.moduleMgr.runModule(g_consts.moduleId.smelting);
        };
        BagLayer.prototype._tap_btn_sale = function () {
            var self = this;
            BagSale.create().setData().show();
        };
        BagLayer.prototype._tap_tab_bag = function (event) {
            var self = this;
            self.showType = self.tab_bag.selectedIndex + 1;
            self._refresh();
            self.grp_equip.visible = self.tab_bag.selectedIndex == 0;
            if (self.tab_bag.selectedIndex == 0) {
                self.label_grid.text = [gd.userCtrl.getEquipBagNum(), gd.userCtrl.getEquipBagGrid()];
            }
        };
        BagLayer.prototype._tap_btn_plus = function () {
            var self = this;
            gd.userCtrl.buyBagGrid(function () {
                self.label_grid.text = [gd.userCtrl.getEquipBagNum(), gd.userCtrl.getEquipBagGrid()];
            }, self);
        };
        BagLayer.prototype._refresh = function () {
            var self = this;
            var scroller = (self.list_items).scroller;
            var scrollTop = scroller.scrollTop >= 0 ? scroller.scrollTop : 0;
            self.refreshList('list_items');
            process.nextTick(function () {
                if (!self.list_items)
                    return;
                scroller.throwVertically(scrollTop, 0);
            });
            self.label_grid.text = [gd.userCtrl.getEquipBagNum(), gd.userCtrl.getEquipBagGrid()];
        };
        BagLayer.prototype._click_list_items = function (event) {
            var self = this;
            var bdc = event.item;
            if (bdc.type == gc.c_prop.itemTypeKey.chest || bdc.type == gc.c_prop.itemTypeKey.expBall || bdc.type == gc.c_prop.itemTypeKey.genuineQi) {
                BagOpenBox.create().setData({ bdc: bdc }).show().onClose(self._refresh, self);
            }
            else {
                g_base.BaseItemDetail.create().setData({ bdc: bdc, item: event.itemRenderer, isBag: 1 }).show();
            }
        };
        BagLayer.prototype._tap_btn_back = function () {
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        };
        BagLayer.prototype.dtor = function () {
            super.dtor.call(this);
            this._scollerHelper.doDtor();
        };
        return BagLayer;
    })(mo.gui.Layer);
    g_bag.BagLayer = BagLayer;
})(g_bag || (g_bag = {}));
//# sourceMappingURL=BagLayer.js.map