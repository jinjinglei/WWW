var skins;
(function (skins) {
    var game;
    (function (game) {
        var WBossRewardSkin = (function (_super) {
            __extends(WBossRewardSkin, _super);
            function WBossRewardSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.btn_back_i(), this.btn_help_i(), this.__8_i(), this.tab_btn_i(), this.__13_i(), this.grp_win_i(), this.grp_fail_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WBossRewardSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return WBossRewardSkin._skinParts;
                }
            );
            p.__12_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__9_i(), this.__10_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [18, "输出伤害排行奖励", 0xEFB037, 292, 29, 107]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 3, "panel_yellow_line", 387, 20, 515]);
                return t;
            };
            p.__15_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [24, 18, "最后一击", 0xEFB037, 9, 549]);
                return t;
            };
            p.__16_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item0", true, 0, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item1", true, 83, 0]);
                return t;
            };
            p.__18_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item2", true, 165, 0]);
                return t;
            };
            p.__19_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item3", true, 246, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [800, "bg_shijieboss", 480, 0, 1]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "x", "y"], [0, "panel_task_title", 0, 30, 20]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [692, "s9g_dlg_1", 478, 3, 86]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [624, egret.gui.getScale9Grid("60,30,100,63"), "panel_guwu_dikuang2", 456, 13, 102]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "top", "width", "x", "y"], [false, 26, -1.5, "tit_txt_g_jianglishuoming2", 10, 97, 30, 20]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [16, "排名奖励在活动结束后结算，以邮件形式发放", "left", 0x5362E3, 422, 33, 738]);
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "tab_txt_shenlijianl";
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["right", "source", "top", "x", "y"], [1, "btn_back", -1, 20, 20]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, -1]);
                return t;
            };
            p.grp_fail_i = function () {
                var t = new egret.gui.Group();
                this.grp_fail = t;
                this.__s(t, ["visible", "x", "y"], [false, 30, 108]);
                t.elementsContent = [this.list_failItems_i()];
                return t;
            };
            p.grp_lastAttkItems_i = function () {
                var t = new egret.gui.Group();
                this.grp_lastAttkItems = t;
                this.__s(t, ["x", "y"], [98, 524]);
                t.elementsContent = [this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i()];
                return t;
            };
            p.grp_win_i = function () {
                var t = new egret.gui.Group();
                this.grp_win = t;
                this.__s(t, ["x", "y"], [30, 108]);
                t.elementsContent = [this.list_items_i(), this.__14_i(), this.__15_i(), this.grp_lastAttkItems_i()];
                return t;
            };
            p.list_failItems_i = function () {
                var t = new egret.gui.List();
                this.list_failItems = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [580, skins.game.WBossRewardItemSkin, 428, 0, 28]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [483, skins.game.WBossRewardItemSkin, 458, -18, 28]);
                return t;
            };
            p.__10_i = function () {
                var t = {};
                t.label = "tab_txt_sibaijiangll";
                return t;
            };
            p.tab_btn_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_btn = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "skinName", "y"], [0, skins.comp.TabBarBtn_6_Skin, skins.comp.TabBar_6_Skin, 48]);
                t.dataProvider = this.__12_i();
                return t;
            };
            WBossRewardSkin._skinParts = ["btn_back", "btn_help", "tab_btn", "list_items", "grp_lastAttkItems", "grp_win", "list_failItems", "grp_fail"];
            return WBossRewardSkin;
        })(egret.gui.Skin);
        game.WBossRewardSkin = WBossRewardSkin;
        egret.registerClass(WBossRewardSkin,"skins.game.WBossRewardSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
