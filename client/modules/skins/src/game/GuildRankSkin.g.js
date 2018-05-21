var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildRankSkin = (function (_super) {
            __extends(GuildRankSkin, _super);
            function GuildRankSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.tab_rank_i(), this.list_ranks_i(), this.label_myRank_i(), this.label_myRankDesc_i(), this.__13_i(), this.label_myRankValue_i(), this.label_myRankBy_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildRankSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildRankSkin._skinParts;
                }
            );
            p.__12_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "verticalCenter", "y"], [0, 18, "排行榜每小时整点刷新", "center", 0xF8E069, 360, 30]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "width", "y"], [0.5, "ico_liebiao_bg", 425, 120]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "排行", 0xEDD145, 36, 131]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "行会名字", 0xEDD145, 112, 131]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "行会信息", 0xEDD145, 289, 131]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "bg_forge", 0, 20, 20]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "x", "y"], [628, 1, "s9g_dlg_1", 462, 20, 100]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 10, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tit_txt_g_gonghuipaihangbang", 10, 10]);
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "tab_txt_hanghuidengjibang";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "tab_txt_hanghuizhanlibang";
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "tab_txt_huizangzhanlibang";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 416, -8]);
                return t;
            };
            p.label_myRankBy_i = function () {
                var t = new egret.gui.Label();
                this.label_myRankBy = t;
                this.__s(t, ["size", "text", "textAlign", "verticalCenter", "x", "y"], [18, "行会战力：", "center", 277, 291, 30]);
                return t;
            };
            p.label_myRankDesc_i = function () {
                var t = new egret.gui.Label();
                this.label_myRankDesc = t;
                this.__s(t, ["size", "text", "textAlign", "verticalCenter", "x", "y"], [18, "我的行会排名：", "center", 277, 32, 20]);
                return t;
            };
            p.label_myRankValue_i = function () {
                var t = new egret.gui.Label();
                this.label_myRankValue = t;
                this.__s(t, ["size", "text", "verticalCenter", "x", "y"], [18, "100", 277, 379, 30]);
                return t;
            };
            p.label_myRank_i = function () {
                var t = new egret.gui.Label();
                this.label_myRank = t;
                this.__s(t, ["size", "text", "verticalCenter", "x", "y"], [18, "100", 277, 157, 20]);
                return t;
            };
            p.list_ranks_i = function () {
                var t = new egret.gui.List();
                this.list_ranks = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [481, 1, skins.game.GuildRankItemSkin, 440, 174]);
                t.layout = this.__12_i();
                return t;
            };
            p.__11_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__7_i(), this.__8_i(), this.__9_i()];
                return t;
            };
            p.tab_rank_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_rank = t;
                this.__s(t, ["height", "itemRendererSkinName", "skinName", "x", "y"], [35, skins.comp.TabBarBtn_4_Skin, skins.comp.TabBar_2_Skin, 24, 65]);
                t.dataProvider = this.__11_i();
                return t;
            };
            GuildRankSkin._skinParts = ["tab_rank", "list_ranks", "label_myRank", "label_myRankDesc", "label_myRankValue", "label_myRankBy", "btn_close"];
            return GuildRankSkin;
        })(egret.gui.Skin);
        game.GuildRankSkin = GuildRankSkin;
        egret.registerClass(GuildRankSkin,"skins.game.GuildRankSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
