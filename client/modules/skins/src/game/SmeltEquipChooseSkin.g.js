var skins;
(function (skins) {
    var game;
    (function (game) {
        var SmeltEquipChooseSkin = (function (_super) {
            __extends(SmeltEquipChooseSkin, _super);
            function SmeltEquipChooseSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=SmeltEquipChooseSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SmeltEquipChooseSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0.5, "btn_txt_g_queding", skins.comp.Btn_3_4_Skin, 635]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [680, 0.5, skins.comp.Dlg_Close_Text_Skin, "tit_txt_chooseEquip", 423, 41]);
                t.elementsContent = [this.__3_i(), this.list_items_i(), this.btn_ok_i(), this.label_num_i()];
                return t;
            };
            p.label_num_i = function () {
                var t = new mo.gui.Label();
                this.label_num = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "%s/%s", 343, 637]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [555, 0, skins.game.SmeltChooseItemSkin, 395, 54]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "x", "y"], [590, 0.5, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 418, 10, 38]);
                return t;
            };
            SmeltEquipChooseSkin._skinParts = ["list_items", "btn_ok", "label_num", "container"];
            return SmeltEquipChooseSkin;
        })(egret.gui.Skin);
        game.SmeltEquipChooseSkin = SmeltEquipChooseSkin;
        egret.registerClass(SmeltEquipChooseSkin,"skins.game.SmeltEquipChooseSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
