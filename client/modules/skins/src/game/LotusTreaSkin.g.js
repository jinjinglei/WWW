var skins;
(function (skins) {
    var game;
    (function (game) {
        var LotusTreaSkin = (function (_super) {
            __extends(LotusTreaSkin, _super);
            function LotusTreaSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.label_curLv_i(), this.__8_i(), this.__9_i(), this.grp_lvUp_i(), this.label_curProp_i(), this.grp_next_i(), this.label_cannotLvUp_i(), this.effect_win_i(), this.effect_fail_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=LotusTreaSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return LotusTreaSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [221, 11]);
                t.layout = this.__11_i();
                t.elementsContent = [this.label_itemName0_i(), this.label_itemNum0_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [221, 44]);
                t.layout = this.__13_i();
                t.elementsContent = [this.label_itemName1_i(), this.label_itemNum1_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "(有几率失败)", 0x5187F4, 339, 89]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [20, "培养后", 19, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_baowudikuangjuxin", 0, 27]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_baowudikuang", 292]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_lianbaobeijing", 131]);
                return t;
            };
            p.__5_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "x", "y"], [true, 58, 245, 211]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_lianbao", 165, 131]);
                return t;
            };
            p.__7_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "x", "y"], [true, 57, 245, 211]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [20, "当前", 78, 310]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_baowudikuangjuxin", 48, 337]);
                return t;
            };
            p.btn_trea_i = function () {
                var t = new egret.gui.Button();
                this.btn_trea = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_peiyangg", skins.comp.Btn_3_8_Skin, 76]);
                return t;
            };
            p.effect_fail_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_fail = t;
                this.__s(t, ["effectId", "x", "y"], [56, 240, 372]);
                return t;
            };
            p.effect_win_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_win = t;
                this.__s(t, ["effectId", "x", "y"], [55, 240, 372]);
                return t;
            };
            p.grp_lvUp_i = function () {
                var t = new egret.gui.Group();
                this.grp_lvUp = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 600]);
                t.elementsContent = [this.__10_i(), this.ico_item0_i(), this.__12_i(), this.ico_item1_i(), this.__14_i(), this.btn_trea_i(), this.__15_i()];
                return t;
            };
            p.grp_next_i = function () {
                var t = new egret.gui.Group();
                this.grp_next = t;
                this.__s(t, ["x", "y"], [270, 310]);
                t.elementsContent = [this.label_nextLv_i(), this.__16_i(), this.__17_i(), this.label_nextProp_i()];
                return t;
            };
            p.ico_item0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item0 = t;
                this.__s(t, ["height", "width", "x", "y"], [40, 40, 185, 0]);
                return t;
            };
            p.ico_item1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item1 = t;
                this.__s(t, ["height", "width", "x", "y"], [40, 40, 185, 33]);
                return t;
            };
            p.label_cannotLvUp_i = function () {
                var t = new egret.gui.Label();
                this.label_cannotLvUp = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "visible", "y"], [0, 20, "等级到126级可继续升级", 0xA71A1A, false, 651]);
                return t;
            };
            p.label_curLv_i = function () {
                var t = new egret.gui.Label();
                this.label_curLv = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "Lv.10", 122, 310]);
                return t;
            };
            p.label_curProp_i = function () {
                var t = new mo.gui.Label();
                this.label_curProp = t;
                this.__s(t, ["height", "lineSpacing", "size", "width", "x", "y"], [209, 8, 18, 146, 70, 356]);
                return t;
            };
            p.label_itemName0_i = function () {
                var t = new egret.gui.Label();
                this.label_itemName0 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xD60F99, 0, 0]);
                return t;
            };
            p.label_itemName1_i = function () {
                var t = new egret.gui.Label();
                this.label_itemName1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xD60F99, 0, 0]);
                return t;
            };
            p.label_itemNum0_i = function () {
                var t = new egret.gui.Label();
                this.label_itemNum0 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xFFFFFF, 95, 0]);
                return t;
            };
            p.label_itemNum1_i = function () {
                var t = new egret.gui.Label();
                this.label_itemNum1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xFFFFFF, 95, 0]);
                return t;
            };
            p.label_nextLv_i = function () {
                var t = new egret.gui.Label();
                this.label_nextLv = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "Lv.10", 85, 0]);
                return t;
            };
            p.label_nextProp_i = function () {
                var t = new mo.gui.Label();
                this.label_nextProp = t;
                this.__s(t, ["height", "lineSpacing", "size", "width", "x", "y"], [209, 8, 18, 146, 25, 46]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "培养消耗：", 100, 8]);
                return t;
            };
            LotusTreaSkin._skinParts = ["label_curLv", "ico_item0", "label_itemName0", "label_itemNum0", "ico_item1", "label_itemName1", "label_itemNum1", "btn_trea", "grp_lvUp", "label_curProp", "label_nextLv", "label_nextProp", "grp_next", "label_cannotLvUp", "effect_win", "effect_fail"];
            return LotusTreaSkin;
        })(egret.gui.Skin);
        game.LotusTreaSkin = LotusTreaSkin;
        egret.registerClass(LotusTreaSkin,"skins.game.LotusTreaSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
