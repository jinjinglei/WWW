var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildBossWinSkin = (function (_super) {
            __extends(GuildBossWinSkin, _super);
            function GuildBossWinSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.label_rank_i(), this.ico_rank_i(), this.label_damage_i(), this.label_reward_i(), this.label_first_i(), this.label_last_i(), this.__6_i(), this.ico_item_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildBossWinSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildBossWinSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "击杀耗时:", 0x3DBB17, 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 512]);
                t.layout = this.__5_i();
                t.elementsContent = [this.__4_i(), this.label_time_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["关闭", skins.comp.Btn_0_1_Skin, 182, 642]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [205, 420]);
                return t;
            };
            p.ico_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank = t;
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [43, 0, "ico_arena_1st", 47, 265]);
                return t;
            };
            p.label_damage_i = function () {
                var t = new egret.gui.Label();
                this.label_damage = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "4", 241, 315]);
                return t;
            };
            p.label_first_i = function () {
                var t = new egret.gui.Label();
                this.label_first = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "玩家名字六字", 221, 561]);
                return t;
            };
            p.label_last_i = function () {
                var t = new egret.gui.Label();
                this.label_last = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "玩家名字六字", 221, 601]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new egret.gui.Label();
                this.label_rank = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "4", 241, 278]);
                return t;
            };
            p.label_reward_i = function () {
                var t = new egret.gui.Label();
                this.label_reward = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "4", 241, 355]);
                return t;
            };
            p.label_time_i = function () {
                var t = new egret.gui.Label();
                this.label_time = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "00:00", 0x3DBB17, 10, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_shenliboss", 0]);
                return t;
            };
            GuildBossWinSkin._skinParts = ["btn_close", "label_rank", "ico_rank", "label_damage", "label_reward", "label_first", "label_last", "label_time", "ico_item"];
            return GuildBossWinSkin;
        })(egret.gui.Skin);
        game.GuildBossWinSkin = GuildBossWinSkin;
        egret.registerClass(GuildBossWinSkin,"skins.game.GuildBossWinSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
