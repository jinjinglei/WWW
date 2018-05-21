var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseBottomBarSkin = (function (_super) {
            __extends(BaseBottomBarSkin, _super);
            function BaseBottomBarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_fight_i(), this.fight_hp_i(), this.btn_bag_i(), this.btn_forge_i(), this.btn_role_i(), this.btn_home_i(), this.btn_shop_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseBottomBarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseBottomBarSkin._skinParts;
                }
            );
            p.btn_bag_i = function () {
                var t = new g_comp.Tab_Sys();
                this.btn_bag = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["mod_bag", skins.game.BaseTabSysSkin, 317, 724]);
                return t;
            };
            p.btn_fight_i = function () {
                var t = new g_comp.Tab_Sys();
                this.btn_fight = t;
                this.__s(t, ["height", "icon", "skinName", "visible", "width", "x", "y"], [115, "mod_zhandou", skins.game.BaseTabSysSkin, false, 173, 0, 686]);
                return t;
            };
            p.btn_forge_i = function () {
                var t = new g_comp.Tab_Sys();
                this.btn_forge = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["mod_forge", skins.game.BaseTabSysSkin, 249, 724]);
                return t;
            };
            p.btn_home_i = function () {
                var t = new g_comp.Tab_Sys();
                this.btn_home = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["mod_home", skins.game.BaseTabSysSkin, 112, 725]);
                return t;
            };
            p.btn_role_i = function () {
                var t = new g_comp.Tab_Sys();
                this.btn_role = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [71, "mod_role", skins.game.BaseTabSysSkin, 72, 181, 724]);
                return t;
            };
            p.btn_shop_i = function () {
                var t = new g_comp.Tab_Sys();
                this.btn_shop = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [98, "mod_shop", skins.game.BaseTabSysSkin, 98, 383, 704]);
                return t;
            };
            p.fight_hp_i = function () {
                var t = new g_comp.Fight_Info();
                this.fight_hp = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [115, skins.game.BaseFightHpSkin, 173, 0, 686]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "horizontalCenter", "source"], [0, 0, "diban"]);
                return t;
            };
            BaseBottomBarSkin._skinParts = ["btn_fight", "fight_hp", "btn_bag", "btn_forge", "btn_role", "btn_home", "btn_shop"];
            return BaseBottomBarSkin;
        })(egret.gui.Skin);
        game.BaseBottomBarSkin = BaseBottomBarSkin;
        egret.registerClass(BaseBottomBarSkin,"skins.game.BaseBottomBarSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
