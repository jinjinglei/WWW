var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftEquipSkin = (function (_super) {
            __extends(GiftEquipSkin, _super);
            function GiftEquipSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.list_gift_i(), this.btn_help_i(), this.btn_back_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftEquipSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftEquipSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_fabaopeidai", 13]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 4]);
                return t;
            };
            p.list_gift_i = function () {
                var t = new egret.gui.List();
                this.list_gift = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "y"], [597, 0.5, skins.game.GiftEquipCellSkin, 125]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            GiftEquipSkin._skinParts = ["list_gift", "btn_help", "btn_back"];
            return GiftEquipSkin;
        })(egret.gui.Skin);
        game.GiftEquipSkin = GiftEquipSkin;
        egret.registerClass(GiftEquipSkin,"skins.game.GiftEquipSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
