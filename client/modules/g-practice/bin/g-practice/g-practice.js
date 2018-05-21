/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_practice;
(function (g_practice) {
    var PracticeItem = (function (_super) {
        __extends(PracticeItem, _super);
        function PracticeItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=PracticeItem,p=c.prototype;
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.img_shadow.visible = false;
            var data = self.data;
            var copyType = data[0];
            self.img_icon.source = data[1];
            self.img_title.source = data[2];
            var desc = data[3];
            var enable = true;
            enable = gd.userCtrl.getLvl() >= gd.copyCtrl.getPracticeOpenLvl(copyType);
            if (enable) {
                self.label_openLvl.text = desc;
            }
            else {
                self.label_openLvl.text = mo.STR.format("%s级开启", gd.copyCtrl.getPracticeOpenLvl(copyType));
            }
            self.rect_mask.visible = !enable;
        };
        return PracticeItem;
    })(mo.gui.ItemRenderer);
    g_practice.PracticeItem = PracticeItem;
    egret.registerClass(PracticeItem,"g_practice.PracticeItem");
})(g_practice || (g_practice = {}));

/**
 * Created by Zhuang on 2016/4/29.
 */
var g_practice;
(function (g_practice) {
    /**
     *
     * @author
     *
     */
    var Practice = (function (_super) {
        __extends(Practice, _super);
        function Practice() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Practice,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_copys = g_practice.PracticeItem;
            self._copys = [
                //[类型, 背景图, 标题, vip等级]
                [gc.c_prop.practiceTypeKey.medal, "ico_zanyintubiaosf", "ico_xuanyuanzanyings", "佩戴称号，升级勋章提高人物属性"],
                [gc.c_prop.practiceTypeKey.gift, "ico_fabaotubiaos", "ico_fabaowenzi", "强大的稀世珍宝，蕴含特殊力量"],
                [gc.c_prop.practiceTypeKey.heart, "ico_xinfatubiaos", "ico_xinfashengongs", "提高人物属性，加强特殊技能"]
            ];
        };
        p._childrenCreated = function () {
            var self = this;
            _super.prototype._childrenCreated.call(this);
        };
        p._data_list_copys = function () {
            var self = this;
            return self._copys;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
        };
        p._click_list_copys = function (event) {
            var self = this;
            var data = event.item;
            var copyType = data[0];
            switch (copyType) {
                case gc.c_prop.practiceTypeKey.medal:
                    mo.moduleMgr.runModule(g_consts.moduleId.medal);
                    break;
                case gc.c_prop.practiceTypeKey.heart:
                    mo.moduleMgr.runModule(g_consts.moduleId.heart);
                    break;
                case gc.c_prop.practiceTypeKey.gift:
                    mo.moduleMgr.runModule(g_consts.moduleId.gift);
                    break;
            }
        };
        return Practice;
    })(mo.gui.Dlg);
    g_practice.Practice = Practice;
    egret.registerClass(Practice,"g_practice.Practice");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        //moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = Practice;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.copyCtrl.getInfo(function () {
                cb();
            }, this);
        });
    });
})(g_practice || (g_practice = {}));

