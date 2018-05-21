var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityRedeemCodeSkin = (function (_super) {
            __extends(ActivityRedeemCodeSkin, _super);
            function ActivityRedeemCodeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.label_code_i(), this.btn_code_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityRedeemCodeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityRedeemCodeSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_duihuanmaf", 61, 182]);
                return t;
            };
            p.btn_code_i = function () {
                var t = new egret.gui.Button();
                this.btn_code = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "scaleX", "scaleY", "skinName", "visible", "y"], [0.05000000000001137, "btn_txt_g_lingqu4", "按钮", 1.1, 1.1, skins.comp.Btn_3_12_Skin, true, 451]);
                return t;
            };
            p.label_code_i = function () {
                var t = new egret.gui.TextInput();
                this.label_code = t;
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["height", "width", "x", "y"], [48, 212, 71, 291]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("textAlign", "center");
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["autoScale", "source", "touchChildren", "touchEnabled", "x", "y"], [true, "bg_meinu1", false, false, 250, 124]);
                return t;
            };
            ActivityRedeemCodeSkin._skinParts = ["label_code", "btn_code"];
            return ActivityRedeemCodeSkin;
        })(egret.gui.Skin);
        game.ActivityRedeemCodeSkin = ActivityRedeemCodeSkin;
        egret.registerClass(ActivityRedeemCodeSkin,"skins.game.ActivityRedeemCodeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
