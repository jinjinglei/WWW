var skins;
(function (skins) {
    var game;
    (function (game) {
        var HeartChangeSelectSkin = (function (_super) {
            __extends(HeartChangeSelectSkin, _super);
            function HeartChangeSelectSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.list_select_i(), this.__6_i(), this.btn_close_i(), this.btn_help_i(), this.__7_i(), this.label_cost_i(), this.__8_i(), this.__9_i(), this.label_point_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=HeartChangeSelectSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return HeartChangeSelectSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_tongyongdiban", 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [1, "tit_txt_genhuanxinfas", 41]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [-36, 18, "每次更换心法需要消耗：", 0x00B2FF, 680]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_yuanbao", false, 297, 682]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 14, "心法更换后，新心法替换原心法，心法层数及加点保持不变", 0xD7D5D5, 83]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 14, "更换心法有可能导致战力下降", 0xFF0000, 10, 124]);
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
            p.label_cost_i = function () {
                var t = new egret.gui.Label();
                this.label_cost = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "9999", 326, 680]);
                return t;
            };
            p.label_point_i = function () {
                var t = new mo.gui.Label();
                this.label_point = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 14, "当前心法层数：%s(加点数：%s/%s)", 0xD7D5D5, 10, 103]);
                return t;
            };
            p.list_select_i = function () {
                var t = new egret.gui.List();
                this.list_select = t;
                this.__s(t, ["height", "horizontalCenter", "y"], [487, 0.5, 153]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "top"], [0, 0.51, 0x000000, 0, 0, 0]);
                return t;
            };
            HeartChangeSelectSkin._skinParts = ["list_select", "btn_close", "btn_help", "label_cost", "label_point"];
            return HeartChangeSelectSkin;
        })(egret.gui.Skin);
        game.HeartChangeSelectSkin = HeartChangeSelectSkin;
        egret.registerClass(HeartChangeSelectSkin,"skins.game.HeartChangeSelectSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
