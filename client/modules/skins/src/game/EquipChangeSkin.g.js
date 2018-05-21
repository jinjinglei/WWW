var skins;
(function (skins) {
    var game;
    (function (game) {
        var EquipChangeSkin = (function (_super) {
            __extends(EquipChangeSkin, _super);
            function EquipChangeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=EquipChangeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return EquipChangeSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_equip_choose_bg", 17, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_equiped", 298, 55]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_split_line", 3, 173]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [-2, 38]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.label_curDesc_i(), this.ico_curEquip_i(), this.__5_i(), this.__6_i(), this.list_items_i()];
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [627, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_changeEquip", 423, 41]);
                t.elementsContent = [this.__8_i()];
                return t;
            };
            p.ico_curEquip_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_curEquip = t;
                this.__s(t, ["x", "y"], [37, 41]);
                return t;
            };
            p.label_curDesc_i = function () {
                var t = new mo.gui.Label();
                this.label_curDesc = t;
                this.__s(t, ["fontFamily", "height", "lineSpacing", "size", "width", "x", "y"], ["宋体", 131, 4, 18, 225, 128, 20]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [378, skins.game.EquipChooseItemSkin, 404, 12, 195]);
                t.layout = this.__7_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [590, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 428, 0, 0]);
                return t;
            };
            EquipChangeSkin._skinParts = ["label_curDesc", "ico_curEquip", "list_items", "container"];
            return EquipChangeSkin;
        })(egret.gui.Skin);
        game.EquipChangeSkin = EquipChangeSkin;
        egret.registerClass(EquipChangeSkin,"skins.game.EquipChangeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
