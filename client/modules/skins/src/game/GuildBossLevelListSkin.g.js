var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildBossLevelListSkin = (function (_super) {
            __extends(GuildBossLevelListSkin, _super);
            function GuildBossLevelListSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.img_title_i(), this.btn_close_i(), this.btn_help_i(), this.__5_i(), this.grp_fight_i(), this.grp_call_i(), this.tab_medal_i(), this.__14_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildBossLevelListSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildBossLevelListSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = {};
                t.label = "tab_txt_zaohuanboss";
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__10_i(), this.__11_i()];
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "source", "visible", "x", "y"], [0.8, "pre_boss之战正在激战", false, 0, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "source", "visible", "x", "y"], [0.8, "pre_boss之战入口", false, 0, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "orientation", "requestedColumnCount", "requestedRowCount", "verticalGap"], ["left", "rows", 1, 4, 10]);
                return t;
            };
            p.__7_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "y"], [0, 16, "被上锁的行会BOSS只有召唤行会可以挑战\n参与本行会召唤的BOSS不消耗参与个数", "center", 0x118FA4, 577]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "orientation", "requestedColumnCount", "requestedRowCount", "verticalGap"], ["left", "rows", 1, 4, 10]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "orientation", "requestedColumnCount", "requestedRowCount", "verticalGap"], ["left", "rows", 1, 4, 10]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 408, -10]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", -2, -7]);
                return t;
            };
            p.grp_call_i = function () {
                var t = new egret.gui.Group();
                this.grp_call = t;
                this.__s(t, ["x", "y"], [33, 171]);
                t.elementsContent = [this.list_call_i(), this.list_callLmt_i(), this.label_extra_cost_i(), this.label_extra_costLmt_i(), this.label_call_time_i()];
                return t;
            };
            p.grp_fight_i = function () {
                var t = new egret.gui.Group();
                this.grp_fight = t;
                this.__s(t, ["x", "y"], [33, 171]);
                t.elementsContent = [this.list_fight_i(), this.__7_i(), this.img_empty_i(), this.label_canFight_i(), this.label_cannotFight_i()];
                return t;
            };
            p.img_empty_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_empty = t;
                this.__s(t, ["source", "x", "y"], ["ico_meiyouzhezaitiaozboss", 46, 251]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [7, "tit_txt_g_hanghuiboss", 13]);
                return t;
            };
            p.label_call_time_i = function () {
                var t = new mo.gui.Label();
                this.label_call_time = t;
                this.__s(t, ["size", "text", "textAlign", "width", "x", "y"], [18, "召唤时段", "center", 420, 0, -42]);
                return t;
            };
            p.label_canFight_i = function () {
                var t = new mo.gui.Label();
                this.label_canFight = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [16, "今日还可挑战行会BOSS及限时BOSS个数：%s/%s", "center", 0xFF0000, 420, 0, -42]);
                return t;
            };
            p.label_cannotFight_i = function () {
                var t = new mo.gui.Label();
                this.label_cannotFight = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [0, 16, "今日挑战个数已用完，您只能挑战本行会召唤的BOSS", "center", 0xFF0000, 420, -42]);
                return t;
            };
            p.label_extra_costLmt_i = function () {
                var t = new mo.gui.Label();
                this.label_extra_costLmt = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "textColor", "x", "y"], [0, 6, 16, "有行会BOSS被挑战时召唤行会BOSS需额外花费%s元宝", 0x118FA4, 10, 587]);
                return t;
            };
            p.label_extra_cost_i = function () {
                var t = new mo.gui.Label();
                this.label_extra_cost = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "textColor", "visible", "y"], [0, 6, 16, "有行会BOSS被挑战时召唤行会BOSS需额外花费%s元宝\n挑战自己召唤的行会BOSS不消耗可挑战行会BOSS个数", 0x118FA4, false, 577]);
                return t;
            };
            p.list_callLmt_i = function () {
                var t = new egret.gui.List();
                this.list_callLmt = t;
                this.__s(t, ["height", "horizontalCenter", "width", "x", "y"], [535, 0, 418, 10, -5]);
                t.layout = this.__9_i();
                return t;
            };
            p.list_call_i = function () {
                var t = new egret.gui.List();
                this.list_call = t;
                this.__s(t, ["height", "width", "x", "y"], [535, 418, 0, -5]);
                t.layout = this.__8_i();
                return t;
            };
            p.list_fight_i = function () {
                var t = new egret.gui.List();
                this.list_fight = t;
                this.__s(t, ["height", "width", "x", "y"], [535, 418, 0, -5]);
                t.layout = this.__6_i();
                return t;
            };
            p.__10_i = function () {
                var t = {};
                t.label = "tab_txt_zhenzaijizan";
                return t;
            };
            p.tab_medal_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_medal = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [40, skins.comp.TabBar_6_Skin, 204, 39, 79]);
                t.dataProvider = this.__13_i();
                return t;
            };
            GuildBossLevelListSkin._skinParts = ["img_title", "btn_close", "btn_help", "list_fight", "img_empty", "label_canFight", "label_cannotFight", "grp_fight", "list_call", "list_callLmt", "label_extra_cost", "label_extra_costLmt", "label_call_time", "grp_call", "tab_medal"];
            return GuildBossLevelListSkin;
        })(egret.gui.Skin);
        game.GuildBossLevelListSkin = GuildBossLevelListSkin;
        egret.registerClass(GuildBossLevelListSkin,"skins.game.GuildBossLevelListSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
