var skins;
(function (skins) {
    var game;
    (function (game) {
        var ArenaItemSkin = (function (_super) {
            __extends(ArenaItemSkin, _super);
            function ArenaItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [101, 440]);
                this.elementsContent = [this.__3_i(), this.label_rank_i(), this.ico_rank_i(), this.__4_i(), this.label_lv_i(), this.label_combat_i(), this.label_name_i(), this.btn_fight_i(), this.label_guild_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ArenaItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ArenaItemSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [78, 15]);
                t.elementsContent = [this.ico_head_i()];
                return t;
            };
            p.btn_fight_i = function () {
                var t = new egret.gui.Button();
                this.btn_fight = t;
                this.__s(t, ["icon", "scaleX", "skinName", "x", "y"], ["btn_txt_g_challenge", 0.9, skins.comp.Btn_3_4_Skin, 322, 50]);
                return t;
            };
            p.ico_head_i = function () {
                var t = new g_comp.Ico_Head();
                this.ico_head = t;
                this.__s(t, ["x", "y"], [-15, 0]);
                return t;
            };
            p.ico_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank = t;
                this.__s(t, ["source", "visible", "x", "y"], ["ico_arena_1st", false, 5, 16]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new egret.gui.Label();
                this.label_combat = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "width", "x", "y"], [18, "战斗力：30000000", 14525952, false, 165, 135, 60]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new egret.gui.Label();
                this.label_guild = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "[行会六个字啊]", 0x9900CD, 305, 18]);
                return t;
            };
            p.label_lv_i = function () {
                var t = new egret.gui.Label();
                this.label_lv = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [18, "lv.200", 14525952, false, 136, 18]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "铁血真男人啊", 13422001, false, 195, 18]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new egret.gui.Label();
                this.label_rank = t;
                this.__s(t, ["bold", "horizontalCenter", "size", "stroke", "text", "textAlign", "textColor", "y"], [true, -186, 22, 1, "99999", "center", 14013880, 38]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 0]);
                return t;
            };
            ArenaItemSkin._skinParts = ["label_rank", "ico_rank", "ico_head", "label_lv", "label_combat", "label_name", "btn_fight", "label_guild"];
            return ArenaItemSkin;
        })(egret.gui.Skin);
        game.ArenaItemSkin = ArenaItemSkin;
        egret.registerClass(ArenaItemSkin,"skins.game.ArenaItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
