var skins;
(function (skins) {
    var game;
    (function (game) {
        var ShopLayer2Skin = (function (_super) {
            __extends(ShopLayer2Skin, _super);
            function ShopLayer2Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.tab_str_i(), this.__11_i(), this.resBar_i(), this.viewStack_i(), this.container_i(), this.btn_recharge_i(), this.__15_i(), this.btn_back_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ShopLayer2Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ShopLayer2Skin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "touchEnabled", "y"], [0, "panel_bg_shop", false, 117]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "name", "top", "width"], [800, 0, "btn_txt_g_equip", 0, 480]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "name", "top", "width"], [800, 0, "tab_txt_gem", 0, 480]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "name", "top", "width"], [800, 0, "tab_txt_daoju", 0, 480]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "visible", "x", "y"], ["shangcheng_item", false, 152, 173]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source"], [0, "panel_task_title"]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "mod_txt_shop", 6]);
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "btn_txt_g_equip";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "tab_txt_gem";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "tab_txt_daoju";
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "visible", "x", "y"], ["btn_back", false, 415, -9]);
                return t;
            };
            p.btn_recharge_i = function () {
                var t = new egret.gui.Button();
                this.btn_recharge = t;
                this.__s(t, ["icon", "scaleX", "scaleY", "skinName", "x", "y"], ["btn_txt_g_goRecharge", 0.85, 0.85, skins.comp.Btn_3_6_Skin, 326, 59]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Group();
                this.container = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                return t;
            };
            p.resBar_i = function () {
                var t = new g_comp.ResBar();
                this.resBar = t;
                this.__s(t, ["horizontalCenter", "skinName", "x", "y"], [-63, skins.comp.ResBarSkin, 10, 64]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__6_i(), this.__7_i(), this.__8_i()];
                return t;
            };
            p.tab_str_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_str = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "skinName", "y"], [49, 0, skins.comp.TabBarBtn_6_Skin, skins.comp.TabBar_6_Skin, 103]);
                t.dataProvider = this.__10_i();
                return t;
            };
            p.viewStack_i = function () {
                var t = new egret.gui.ViewStack();
                this.viewStack = t;
                this.__s(t, ["bottom", "left", "right", "selectedIndex", "top"], [0, 0, 0, 1, 0]);
                t.elementsContent = [this.__12_i(), this.__13_i(), this.__14_i()];
                return t;
            };
            ShopLayer2Skin._skinParts = ["tab_str", "resBar", "viewStack", "container", "btn_recharge", "btn_back"];
            return ShopLayer2Skin;
        })(egret.gui.Skin);
        game.ShopLayer2Skin = ShopLayer2Skin;
        egret.registerClass(ShopLayer2Skin,"skins.game.ShopLayer2Skin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
