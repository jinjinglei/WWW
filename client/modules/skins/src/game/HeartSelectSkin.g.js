var skins;
(function (skins) {
    var game;
    (function (game) {
        var HeartSelectSkin = (function (_super) {
            __extends(HeartSelectSkin, _super);
            function HeartSelectSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.list_select_i(), this.__6_i(), this.btn_close_i(), this.btn_help_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=HeartSelectSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return HeartSelectSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_tongyongdiban", 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [1, "tit_txt_xuanzhexinfa", 41]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 18, "每开启一重境界即可选择一门心法学习", 0x00B2FF, 740]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 431, 46]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.Button();
                this.btn_help = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_info_Skin, 16, 49]);
                return t;
            };
            p.list_select_i = function () {
                var t = new egret.gui.List();
                this.list_select = t;
                this.__s(t, ["height", "horizontalCenter", "y"], [623, 0.5, 96]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "top"], [0, 0.51, 0x000000, 0, 0, 0]);
                return t;
            };
            HeartSelectSkin._skinParts = ["list_select", "btn_close", "btn_help"];
            return HeartSelectSkin;
        })(egret.gui.Skin);
        game.HeartSelectSkin = HeartSelectSkin;
        egret.registerClass(HeartSelectSkin,"skins.game.HeartSelectSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
