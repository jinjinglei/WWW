var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildCopyBossWinOrFailSkin = (function (_super) {
            __extends(GuildCopyBossWinOrFailSkin, _super);
            function GuildCopyBossWinOrFailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["currentState", "height", "width"], ["win", 800, 480]);
                this.elementsContent = [this.__3_i(), this.grp_win_i(), this.label_fail_i(), this.btn_back_i()];
                this.label_damage_i();
                this.__6_i();
                this.__7_i();
                this.btn_shop_i();
                this.btn_forge_i();
                this.states = [
                    new egret.gui.State("win", [
                        new egret.gui.SetProperty("__3", "source", "ico_jiesuanjiangli"),
                        new egret.gui.SetProperty("label_damage", "height", 27),
                        new egret.gui.SetProperty("label_damage", "verticalAlign", "middle"),
                        new egret.gui.SetProperty("label_damage", "x", 126),
                        new egret.gui.SetProperty("label_damage", "textAlign", "left"),
                        new egret.gui.SetProperty("__8", "gap", 30),
                        new egret.gui.SetProperty("label_fail", "visible", false)
                    ]),
                    new egret.gui.State("fail", [
                        new egret.gui.AddItems("label_damage", "grp_win", "first", ""),
                        new egret.gui.AddItems("__6", "grp_rankReward", "last", ""),
                        new egret.gui.AddItems("__7", "grp_rankReward", "last", ""),
                        new egret.gui.AddItems("btn_shop", "", "last", ""),
                        new egret.gui.AddItems("btn_forge", "", "last", ""),
                        new egret.gui.SetProperty("__3", "source", "ico_jiesuanjianglisb"),
                        new egret.gui.SetProperty("grp_win", "visible", false),
                        new egret.gui.SetProperty("label_fail", "text", "很遗憾战斗失败\n没有获得奖励"),
                        new egret.gui.SetProperty("label_fail", "width", 150),
                        new egret.gui.SetProperty("label_fail", "textAlign", "center"),
                        new egret.gui.SetProperty("label_fail", "horizontalCenter", 1),
                        new egret.gui.SetProperty("label_fail", "y", 309),
                        new egret.gui.SetProperty("btn_back", "y", 652)
                    ])
                ];
            }
            var d = __define,c=GuildCopyBossWinOrFailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildCopyBossWinOrFailSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item0", true, 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item1", true, 79, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new g_comp.Ico_Item();
                this.__6 = t;
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item2", true, 159, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new g_comp.Ico_Item();
                this.__7 = t;
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item3", true, 238, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__8 = t;
                t.horizontalAlign = "center";
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.Button();
                this.btn_back = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["确定", skins.comp.Btn_0_1_Skin, 182, 602]);
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
            p.grp_rankReward_i = function () {
                var t = new egret.gui.Group();
                this.grp_rankReward = t;
                this.__s(t, ["width", "x", "y"], [310, 0, 89]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__4_i(), this.__5_i()];
                return t;
            };
            p.grp_win_i = function () {
                var t = new egret.gui.Group();
                this.grp_win = t;
                this.__s(t, ["x", "y"], [85, 285]);
                t.elementsContent = [this.grp_rankReward_i()];
                return t;
            };
            p.label_damage_i = function () {
                var t = new egret.gui.Label();
                this.label_damage = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "4", 156, 0]);
                return t;
            };
            p.label_fail_i = function () {
                var t = new egret.gui.Label();
                this.label_fail = t;
                this.__s(t, ["horizontalCenter", "size", "text", "x", "y"], [0.5, 18, "您的贡献度未达到基础要求", 10, 339]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__3 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_jiesuanjianglisb", 0]);
                return t;
            };
            GuildCopyBossWinOrFailSkin._skinParts = ["label_damage", "grp_rankReward", "grp_win", "label_fail", "btn_back", "btn_shop", "btn_forge"];
            return GuildCopyBossWinOrFailSkin;
        })(egret.gui.Skin);
        game.GuildCopyBossWinOrFailSkin = GuildCopyBossWinOrFailSkin;
        egret.registerClass(GuildCopyBossWinOrFailSkin,"skins.game.GuildCopyBossWinOrFailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
