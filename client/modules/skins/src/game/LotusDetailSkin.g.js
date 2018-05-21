var skins;
(function (skins) {
    var game;
    (function (game) {
        var LotusDetailSkin = (function (_super) {
            __extends(LotusDetailSkin, _super);
            function LotusDetailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_get_i(), this.__6_i(), this.__7_i(), this.label_expTotal_i(), this.label_expPerHour_i(), this.__8_i(), this.__10_i(), this.__12_i(), this.btn_opening_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=LotusDetailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return LotusDetailSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_baiyinzouka", 0, 0]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["visible", "x", "y"], [false, 65, 422]);
                t.elementsContent = [this.label_zhou_i(), this.label_zhouGo_i(), this.__11_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "ico_dikuanggd", 10, 384]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "等级：", 0xE8E00E, 0, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 10, 367]);
                t.layout = this.__4_i();
                t.elementsContent = [this.__5_i(), this.label_lv_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_leijijinyan", 38, 417]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jinyancanliang", 66, 532]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_huangjinyueka", 0, 0]);
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "x", "y"], [0.5, "btn_txt_g_linqujyan", "按钮", skins.comp.Btn_3_8_Skin, 10, 663]);
                return t;
            };
            p.btn_opening_i = function () {
                var t = new egret.gui.Button();
                this.btn_opening = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [82, "btn_txt_g_kaiguang", skins.comp.Btn_3_28_Skin, 78, 71, 306]);
                return t;
            };
            p.label_expPerHour_i = function () {
                var t = new egret.gui.Label();
                this.label_expPerHour = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [26, "2000W(+1000W)/每小时", 0x26E80E, 67, 566]);
                return t;
            };
            p.label_expTotal_i = function () {
                var t = new egret.gui.Label();
                this.label_expTotal = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [26, "2000W/2000W", 0x26E80E, 72, 467]);
                return t;
            };
            p.label_lv_i = function () {
                var t = new egret.gui.Label();
                this.label_lv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "20", 0xE8E00E, 50, 0]);
                return t;
            };
            p.label_yueGo_i = function () {
                var t = new egret.gui.Label();
                this.label_yueGo = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "前往激活", 0x26E80E, 306, 0]);
                return t;
            };
            p.label_yue_i = function () {
                var t = new egret.gui.Label();
                this.label_yue = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "产量提升15%（未激活）", 0x949393, 92, 0]);
                return t;
            };
            p.label_zhouGo_i = function () {
                var t = new egret.gui.Label();
                this.label_zhouGo = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "前往激活", 0x26E80E, 305, 1]);
                return t;
            };
            p.label_zhou_i = function () {
                var t = new egret.gui.Label();
                this.label_zhou = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "产量提升15%（已激活）", 0x26E80E, 91, 1]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["visible", "x", "y"], [false, 64, 459]);
                t.elementsContent = [this.label_yueGo_i(), this.label_yue_i(), this.__9_i()];
                return t;
            };
            LotusDetailSkin._skinParts = ["btn_get", "label_lv", "label_expTotal", "label_expPerHour", "label_yueGo", "label_yue", "label_zhou", "label_zhouGo", "btn_opening"];
            return LotusDetailSkin;
        })(egret.gui.Skin);
        game.LotusDetailSkin = LotusDetailSkin;
        egret.registerClass(LotusDetailSkin,"skins.game.LotusDetailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
