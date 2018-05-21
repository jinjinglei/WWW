var skins;
(function (skins) {
    var game;
    (function (game) {
        var MsgAlertSkin = (function (_super) {
            __extends(MsgAlertSkin, _super);
            function MsgAlertSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__10_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=MsgAlertSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MsgAlertSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "percentWidth", "y"], [30, 0, 100, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "percentWidth", "x", "y"], [30, 0, 100, 20, 20]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [450, 0, 146]);
                t.elementsContent = [this.btn_left_i(), this.btn_center_i(), this.btn_right_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "percentWidth", "x", "y"], [20, 0, 100, 10, 10]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__4_i(), this.label_msg_i(), this.__5_i(), this.__6_i(), this.__7_i()];
                return t;
            };
            p.btn_center_i = function () {
                var t = new egret.gui.Button();
                this.btn_center = t;
                this.__s(t, ["horizontalCenter", "label", "skinName", "verticalCenter"], [0, "按钮", skins.comp.Btn_0_0_Skin, 0]);
                return t;
            };
            p.btn_left_i = function () {
                var t = new egret.gui.Button();
                this.btn_left = t;
                this.__s(t, ["label", "left", "skinName", "verticalCenter"], ["按钮", 30, skins.comp.Btn_0_0_Skin, 0]);
                return t;
            };
            p.btn_right_i = function () {
                var t = new egret.gui.Button();
                this.btn_right = t;
                this.__s(t, ["label", "right", "skinName", "verticalCenter"], ["按钮", 30, skins.comp.Btn_0_0_Skin, 0]);
                return t;
            };
            p.label_msg_i = function () {
                var t = new mo.gui.Label();
                this.label_msg = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [23, "是否购买全部商品？", "center", 0xCCCDB1, 400, 25, 0]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter", "x", "y"], [0, -50, 10, 10]);
                t.elementsContent = [this.__3_i(), this.__9_i()];
                return t;
            };
            MsgAlertSkin._skinParts = ["label_msg", "btn_left", "btn_center", "btn_right"];
            return MsgAlertSkin;
        })(egret.gui.Skin);
        game.MsgAlertSkin = MsgAlertSkin;
        egret.registerClass(MsgAlertSkin,"skins.game.MsgAlertSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
