var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightReviveSkin = (function (_super) {
            __extends(FightReviveSkin, _super);
            function FightReviveSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_ok_i(), this.__4_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightReviveSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightReviveSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "txt_reborn", 199]);
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["horizontalCenter", "label", "y"], [0, "确认(0)", 340]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [252, 0, "s9g_dlg_1", 366, 156]);
                return t;
            };
            FightReviveSkin._skinParts = ["btn_ok"];
            return FightReviveSkin;
        })(egret.gui.Skin);
        game.FightReviveSkin = FightReviveSkin;
        egret.registerClass(FightReviveSkin,"skins.game.FightReviveSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
