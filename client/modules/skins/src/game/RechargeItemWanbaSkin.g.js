var skins;
(function (skins) {
    var game;
    (function (game) {
        var RechargeItemWanbaSkin = (function (_super) {
            __extends(RechargeItemWanbaSkin, _super);
            function RechargeItemWanbaSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.__6_i(), this.ico_recharge_i(), this.label_yb2_i(), this.btn_rmb_i(), this.ico_remai_i(), this.ico_tuijian_i(), this.ico_3bei_i(), this.__9_i(), this.__12_i(), this.__13_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RechargeItemWanbaSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RechargeItemWanbaSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [94, 15]);
                t.layout = this.__11_i();
                t.elementsContent = [this.label_yb_i(), this.__10_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [64, "ico_huodongjiage", 64, 335, 27]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("151,31,23,32"), "panel_recharge_bg_1", 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_recharge_bg_2", 20, 8]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["border_1", 11, 7]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xingxing", 49, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [0, "center", "bottom"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                t.setStyle("textAlign", "right");
                this.__s(t, ["horizontalCenter", "width", "y"], [110, 98, 15]);
                t.layout = this.__8_i();
                t.elementsContent = [this.label_cost_i(), this.__7_i()];
                return t;
            };
            p.btn_rmb_i = function () {
                var t = new egret.gui.Button();
                this.btn_rmb = t;
                this.__s(t, ["scaleX", "scaleY", "skinName", "verticalCenter", "width", "x"], [0.8, 0.8, new egret.gui.ButtonSkin("btn_recharge_1", "btn_recharge_0"), -19.200000000000003, 175, 249]);
                return t;
            };
            p.ico_3bei_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_3bei = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [64, "ntc_recharge_3bei", false, 64, 0, 2]);
                return t;
            };
            p.ico_recharge_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_recharge = t;
                this.__s(t, ["height", "width", "x", "y"], [64, 64, 15, 11]);
                return t;
            };
            p.ico_remai_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_remai = t;
                this.__s(t, ["source", "visible", "x", "y"], ["ntc_recharge_temai", false, 2, 2]);
                return t;
            };
            p.ico_tuijian_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_tuijian = t;
                this.__s(t, ["source", "visible", "x", "y"], ["ntc_recharge_tuijian", false, 2, 2]);
                return t;
            };
            p.label_cost_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_cost = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_10", "0000", 0, 0]);
                return t;
            };
            p.label_yb2_i = function () {
                var t = new egret.gui.Label();
                this.label_yb2 = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [20, 1, 0x29270C, "送2元宝", 0xFFFFFF, 90, 60]);
                return t;
            };
            p.label_yb_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_yb = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_9", "300", 0, 4]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao_0", 49, 0]);
                return t;
            };
            RechargeItemWanbaSkin._skinParts = ["ico_recharge", "label_yb2", "btn_rmb", "ico_remai", "ico_tuijian", "ico_3bei", "label_cost", "label_yb"];
            return RechargeItemWanbaSkin;
        })(egret.gui.Skin);
        game.RechargeItemWanbaSkin = RechargeItemWanbaSkin;
        egret.registerClass(RechargeItemWanbaSkin,"skins.game.RechargeItemWanbaSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
