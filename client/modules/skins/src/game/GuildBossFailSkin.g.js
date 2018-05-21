var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildBossFailSkin = (function (_super) {
            __extends(GuildBossFailSkin, _super);
            function GuildBossFailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.label_leftHp_i(), this.label_damage_i(), this.btn_shop_i(), this.btn_forge_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildBossFailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildBossFailSkin._skinParts;
                }
            );
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_back", skins.comp.Btn_3_1_Skin, 644]);
                return t;
            };
            p.btn_forge_i = function () {
                var t = new egret.gui.Button();
                this.btn_forge = t;
                this.__s(t, ["alpha", "height", "label", "width", "x", "y"], [0, 205, "按钮", 149, 246, 419]);
                return t;
            };
            p.btn_shop_i = function () {
                var t = new egret.gui.Button();
                this.btn_shop = t;
                this.__s(t, ["alpha", "height", "label", "width", "x", "y"], [0, 205, "按钮", 149, 85, 419]);
                return t;
            };
            p.label_damage_i = function () {
                var t = new egret.gui.Label();
                this.label_damage = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "4", 251, 329]);
                return t;
            };
            p.label_leftHp_i = function () {
                var t = new egret.gui.Label();
                this.label_leftHp = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "4", 251, 283]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_shibaiboss", 0]);
                return t;
            };
            GuildBossFailSkin._skinParts = ["btn_close", "label_leftHp", "label_damage", "btn_shop", "btn_forge"];
            return GuildBossFailSkin;
        })(egret.gui.Skin);
        game.GuildBossFailSkin = GuildBossFailSkin;
        egret.registerClass(GuildBossFailSkin,"skins.game.GuildBossFailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
