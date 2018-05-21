var skins;
(function (skins) {
    var game;
    (function (game) {
        var EquipChooseItemSkin = (function (_super) {
            __extends(EquipChooseItemSkin, _super);
            function EquipChooseItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [152, 404]);
                this.elementsContent = [this.__4_i(), this.label_desc_i(), this.btn_equip_i(), this.ico_item_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=EquipChooseItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return EquipChooseItemSkin._skinParts;
                }
            );
            p.btn_equip_i = function () {
                var t = new egret.gui.Button();
                this.btn_equip = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [33, "btn_txt_g_equip", skins.comp.Btn_3_3_Skin, 97, 289, 59]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [20, 31]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["fontFamily", "height", "lineSpacing", "size", "width", "x", "y"], ["宋体", 131, 4, 18, 225, 114, 11]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_equip_choose_bg", 0]);
                return t;
            };
            EquipChooseItemSkin._skinParts = ["label_desc", "btn_equip", "ico_item"];
            return EquipChooseItemSkin;
        })(egret.gui.Skin);
        game.EquipChooseItemSkin = EquipChooseItemSkin;
        egret.registerClass(EquipChooseItemSkin,"skins.game.EquipChooseItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
