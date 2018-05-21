var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightTreasureComposeSkin = (function (_super) {
            __extends(FightTreasureComposeSkin, _super);
            function FightTreasureComposeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.list_items_i(), this.btn_close_i(), this.btn_info_i(), this.__5_i(), this.__7_i(), this.label_compose_hint_i(), this.btn_compose_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightTreasureComposeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightTreasureComposeSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "horizontalCenter", "source", "y"], [false, -4, "txt_mibaohecheng", 38]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [-18, 14, 16, egret.gui.getScale9Grid("30,28,11,12"), "panel_huawenlasheng", 18]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [147, 419, 29, 520]);
                t.elementsContent = [this.__6_i(), this.label_desc_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "right", "skinName", "top", "x", "y"], ["按钮", 16, skins.comp.Btn_close_Skin, 47, 10, 10]);
                return t;
            };
            p.btn_compose_i = function () {
                var t = new egret.gui.Button();
                this.btn_compose = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [-4, "btn_txt_hecheng", skins.comp.Btn_3_0_Skin, 20, 703]);
                return t;
            };
            p.btn_info_i = function () {
                var t = new egret.gui.Button();
                this.btn_info = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_info_Skin, 17, 50]);
                return t;
            };
            p.label_compose_hint_i = function () {
                var t = new egret.gui.Label();
                this.label_compose_hint = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "visible", "y"], [0.5, 16, "当前碎片未解锁,无法合成", "center", 0xF53F3F, false, 712]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["height", "lineSpacing", "size", "textAlign", "verticalAlign", "width", "x", "y"], [120, 6, 18, "left", "middle", 340, 40, 32]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "left", "maxHeight", "skinName", "top", "width", "x", "y"], [407, skins.game.FightTreasureComposeItemSkin, 43, 410, skins.comp.List_Empty_Skin, 119, 392, 10, 10]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [740, 0.5, "s9g_dlg_0", 0, 439]);
                return t;
            };
            FightTreasureComposeSkin._skinParts = ["list_items", "btn_close", "btn_info", "label_desc", "label_compose_hint", "btn_compose"];
            return FightTreasureComposeSkin;
        })(egret.gui.Skin);
        game.FightTreasureComposeSkin = FightTreasureComposeSkin;
        egret.registerClass(FightTreasureComposeSkin,"skins.game.FightTreasureComposeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
