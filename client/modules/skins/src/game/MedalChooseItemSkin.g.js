var skins;
(function (skins) {
    var game;
    (function (game) {
        var MedalChooseItemSkin = (function (_super) {
            __extends(MedalChooseItemSkin, _super);
            function MedalChooseItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [100, 404]);
                this.elementsContent = [this.__4_i(), this.btn_equip_i(), this.ico_medalItem_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=MedalChooseItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MedalChooseItemSkin._skinParts;
                }
            );
            p.btn_equip_i = function () {
                var t = new egret.gui.Button();
                this.btn_equip = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [33, "btn_txt_g_peidaigs", skins.comp.Btn_3_24_Skin, 97, 260, 34]);
                return t;
            };
            p.ico_medalItem_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medalItem = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [-73.5, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_zanyinditut_0", 0]);
                return t;
            };
            MedalChooseItemSkin._skinParts = ["btn_equip", "ico_medalItem"];
            return MedalChooseItemSkin;
        })(egret.gui.Skin);
        game.MedalChooseItemSkin = MedalChooseItemSkin;
        egret.registerClass(MedalChooseItemSkin,"skins.game.MedalChooseItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
