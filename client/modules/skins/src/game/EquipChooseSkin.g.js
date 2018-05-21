var skins;
(function (skins) {
    var game;
    (function (game) {
        var EquipChooseSkin = (function (_super) {
            __extends(EquipChooseSkin, _super);
            function EquipChooseSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=EquipChooseSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return EquipChooseSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [628, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_chooseEquip", 423, 41]);
                t.elementsContent = [this.__3_i(), this.list_items_i()];
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [555, skins.game.EquipChooseItemSkin, 404, 10, 54]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "x", "y"], [590, 0, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 428, 10, 38]);
                return t;
            };
            EquipChooseSkin._skinParts = ["list_items", "container"];
            return EquipChooseSkin;
        })(egret.gui.Skin);
        game.EquipChooseSkin = EquipChooseSkin;
        egret.registerClass(EquipChooseSkin,"skins.game.EquipChooseSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
