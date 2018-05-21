var skins;
(function (skins) {
    var game;
    (function (game) {
        var FirstEnterGameSkin = (function (_super) {
            __extends(FirstEnterGameSkin, _super);
            function FirstEnterGameSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.btn_close_i(), this.ico_sanpin_txt_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FirstEnterGameSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FirstEnterGameSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_first_arrow", 491]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_jinru", skins.comp.Btn_3_10_Skin, 583]);
                return t;
            };
            p.ico_sanpin_txt_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_sanpin_txt = t;
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_first_bg_txt", 66, 410]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_first_bg", 10.5]);
                return t;
            };
            FirstEnterGameSkin._skinParts = ["btn_close", "ico_sanpin_txt"];
            return FirstEnterGameSkin;
        })(egret.gui.Skin);
        game.FirstEnterGameSkin = FirstEnterGameSkin;
        egret.registerClass(FirstEnterGameSkin,"skins.game.FirstEnterGameSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
