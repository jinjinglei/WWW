var skins;
(function (skins) {
    var game;
    (function (game) {
        var BindPhoneSuccSkin = (function (_super) {
            __extends(BindPhoneSuccSkin, _super);
            function BindPhoneSuccSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_ok_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BindPhoneSuccSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BindPhoneSuccSkin._skinParts;
                }
            );
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 422, 198]);
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [-53, "btn_txt_g_ok", "按钮", skins.comp.Btn_3_6_Skin, 425]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_phone2", -20]);
                return t;
            };
            BindPhoneSuccSkin._skinParts = ["btn_ok", "btn_close"];
            return BindPhoneSuccSkin;
        })(egret.gui.Skin);
        game.BindPhoneSuccSkin = BindPhoneSuccSkin;
        egret.registerClass(BindPhoneSuccSkin,"skins.game.BindPhoneSuccSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
