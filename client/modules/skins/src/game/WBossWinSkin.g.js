var skins;
(function (skins) {
    var game;
    (function (game) {
        var WBossWinSkin = (function (_super) {
            __extends(WBossWinSkin, _super);
            function WBossWinSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.label_rank_i(), this.ico_rank_i(), this.label_damage_i(), this.label_first_i(), this.label_last_i(), this.__6_i(), this.grp_rankReward_i(), this.grp_killReward_i(), this.img_killReward_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WBossWinSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return WBossWinSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__12_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item0", true, 0, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item1", true, 79, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item2", true, 159, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item3", true, 238, 0]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_shenlibossxinditu", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "击杀耗时:", 0xFFFFFF, 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [-3, 692]);
                t.layout = this.__5_i();
                t.elementsContent = [this.__4_i(), this.label_time_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item0", true, 0, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item1", true, 79, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item2", true, 159, 0]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["关闭", skins.comp.Btn_0_1_Skin, 182, 652]);
                return t;
            };
            p.grp_killReward_i = function () {
                var t = new egret.gui.Group();
                this.grp_killReward = t;
                this.__s(t, ["width", "x", "y"], [310, 85, 492]);
                t.layout = this.__16_i();
                t.elementsContent = [this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i()];
                return t;
            };
            p.grp_rankReward_i = function () {
                var t = new egret.gui.Group();
                this.grp_rankReward = t;
                this.__s(t, ["width", "x", "y"], [310, 85, 374]);
                t.layout = this.__11_i();
                t.elementsContent = [this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i()];
                return t;
            };
            p.ico_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank = t;
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [43, 0, "ico_arena_1st", 47, 265]);
                return t;
            };
            p.img_killReward_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_killReward = t;
                this.__s(t, ["source", "x", "y"], ["ico_jishajiangli", 84, 463]);
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
                this.__s(t, ["size", "text", "x", "y"], [18, "玩家名字六字", 206, 582]);
                return t;
            };
            p.label_last_i = function () {
                var t = new egret.gui.Label();
                this.label_last = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "玩家名字六字", 206, 619]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new egret.gui.Label();
                this.label_rank = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "4", 241, 278]);
                return t;
            };
            p.label_time_i = function () {
                var t = new egret.gui.Label();
                this.label_time = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "00:00", 0xFFFFFF, 10, 0]);
                return t;
            };
            p.__10_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item3", true, 238, 0]);
                return t;
            };
            WBossWinSkin._skinParts = ["btn_close", "label_rank", "ico_rank", "label_damage", "label_first", "label_last", "label_time", "grp_rankReward", "grp_killReward", "img_killReward"];
            return WBossWinSkin;
        })(egret.gui.Skin);
        game.WBossWinSkin = WBossWinSkin;
        egret.registerClass(WBossWinSkin,"skins.game.WBossWinSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
