var skins;
(function (skins) {
    var game;
    (function (game) {
        var RoleMatrixInfoSkin = (function (_super) {
            __extends(RoleMatrixInfoSkin, _super);
            function RoleMatrixInfoSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RoleMatrixInfoSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RoleMatrixInfoSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.__3_i(), this.label_prop_i(), this.label_needLv_i(), this.label_has_i(), this.label_name_i(), this.btn_merge_i(), this.btn_ok_i(), this.btn_gainWay_i(), this.btn_equip_i(), this.ico_red_i(), this.ico_item_i()];
                return t;
            };
            p.btn_equip_i = function () {
                var t = new egret.gui.Button();
                this.btn_equip = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_equip", skins.comp.Btn_3_0_Skin, 380]);
                return t;
            };
            p.btn_gainWay_i = function () {
                var t = new egret.gui.Button();
                this.btn_gainWay = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_gainway", skins.comp.Btn_3_0_Skin, 381]);
                return t;
            };
            p.btn_merge_i = function () {
                var t = new egret.gui.Button();
                this.btn_merge = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_kehecheng", skins.comp.Btn_3_0_Skin, 381]);
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_ok", skins.comp.Btn_3_0_Skin, 381]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [427, skins.comp.Dlg_Close_0_Skin, 372, 58, 158]);
                t.elementsContent = [this.__4_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [1, 37]);
                return t;
            };
            p.ico_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 221, 375]);
                return t;
            };
            p.label_has_i = function () {
                var t = new egret.gui.Label();
                this.label_has = t;
                this.__s(t, ["size", "text", "textAlign", "x", "y"], [20, "标签", "left", 87, 75]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [24, "标签", "left", 0xE59814, 87, 44]);
                return t;
            };
            p.label_needLv_i = function () {
                var t = new egret.gui.Label();
                this.label_needLv = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "y"], [0, 18, "标签", "left", 0x38C908, 343]);
                return t;
            };
            p.label_prop_i = function () {
                var t = new mo.gui.Label();
                this.label_prop = t;
                this.__s(t, ["height", "size", "text", "textAlign", "width", "x", "y"], [139, 20, "标签", "left", 344, 12, 169]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [154, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 363, 4, 163]);
                return t;
            };
            RoleMatrixInfoSkin._skinParts = ["label_prop", "label_needLv", "label_has", "label_name", "btn_merge", "btn_ok", "btn_gainWay", "btn_equip", "ico_red", "ico_item", "container"];
            return RoleMatrixInfoSkin;
        })(egret.gui.Skin);
        game.RoleMatrixInfoSkin = RoleMatrixInfoSkin;
        egret.registerClass(RoleMatrixInfoSkin,"skins.game.RoleMatrixInfoSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
