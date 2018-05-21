var skins;
(function (skins) {
    var game;
    (function (game) {
        var EnemyItemSkin = (function (_super) {
            __extends(EnemyItemSkin, _super);
            function EnemyItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [101, 400]);
                this.elementsContent = [this.__4_i(), this.ico_head_i(), this.label_lv_i(), this.label_combat_i(), this.btn_fight_i(), this.label_name_i(), this.__5_i(), this.label_guild_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=EnemyItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return EnemyItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "行会:", 0xCCCDB1, false, 86, 37]);
                return t;
            };
            p.btn_fight_i = function () {
                var t = new egret.gui.Button();
                this.btn_fight = t;
                this.__s(t, ["icon", "scaleX", "skinName", "x", "y"], ["btn_txt_g_bc", 0.9, skins.comp.Btn_3_4_Skin, 285, 27]);
                return t;
            };
            p.ico_head_i = function () {
                var t = new g_comp.Ico_Head();
                this.ico_head = t;
                this.__s(t, ["verticalCenter", "x"], [0.5, 6]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new egret.gui.Label();
                this.label_combat = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "width", "x", "y"], [18, "战斗力：30000000", 0xDDA600, false, 165, 154, 64]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new egret.gui.Label();
                this.label_guild = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "[行会]", 0x9900CD, 136, 37]);
                return t;
            };
            p.label_lv_i = function () {
                var t = new egret.gui.Label();
                this.label_lv = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [18, "lv.200", 0xDDA600, false, 86, 64]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "铁血真男人", 0xCCCDB1, false, 86, 10]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top", "x", "y"], [0, 0, 0, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 0, 10, 10]);
                return t;
            };
            EnemyItemSkin._skinParts = ["ico_head", "label_lv", "label_combat", "btn_fight", "label_name", "label_guild"];
            return EnemyItemSkin;
        })(egret.gui.Skin);
        game.EnemyItemSkin = EnemyItemSkin;
        egret.registerClass(EnemyItemSkin,"skins.game.EnemyItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
