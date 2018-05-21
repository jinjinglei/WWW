var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarRankSkin = (function (_super) {
            __extends(GuildWarRankSkin, _super);
            function GuildWarRankSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarRankSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarRankSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [24, "icon", "ico_gold", 24, 0, 3]);
                return t;
            };
            p.__13_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "99999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [24, "icon", "ico_gold", 24, 0, 3]);
                return t;
            };
            p.__16_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "99999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [25, 53]);
                t.elementsContent = [this.__4_i(), this.grp_res0_i(), this.grp_res1_i(), this.grp_res2_i(), this.grp_res3_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "touchEnabled", "width", "x", "y"], [575, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", false, 442, 3, 66]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__22_i = function () {
                var t = {};
                t.label = "tab_txt_hanghuis";
                return t;
            };
            p.__23_i = function () {
                var t = {};
                t.label = "tab_txt_huizhangl";
                return t;
            };
            p.__24_i = function () {
                var t = {};
                t.label = "tab_txt_gerenlg";
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__22_i(), this.__23_i(), this.__24_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "touchEnabled", "width", "y"], [103, 0, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", false, 426, 650]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ant_jiesuanjianlis", 0, 2]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [24, "icon", "ico_gold", 24, 0, 3]);
                return t;
            };
            p.__7_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "99999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "name", "source", "width", "x", "y"], [24, "icon", "ico_gold", 24, 0, 3]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Info_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [756, 0, skins.comp.Dlg_Close_Text_Skin, "btn_jianglipaimin", 450, 26]);
                t.elementsContent = [this.__3_i(), this.grp_Rank_i(), this.__18_i(), this.list_rankGuild_i(), this.list_rankGuildManager_i(), this.list_rankPerson_i(), this.tab_btn_i(), this.label_desc_i()];
                return t;
            };
            p.grp_Rank_i = function () {
                var t = new egret.gui.Group();
                this.grp_Rank = t;
                this.__s(t, ["height", "left", "right", "touchChildren", "touchEnabled", "y"], [105, 0, 0, false, false, 652]);
                t.elementsContent = [this.label_myKillValue_i(), this.ico_guild_i(), this.ico_person_i(), this.label_myRank_i(), this.ico_myGuildRank_i(), this.ico_myRank_i(), this.__17_i()];
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "x", "y"], [30, 70, 0]);
                t.layout = this.__5_i();
                t.elementsContent = [this.__6_i(), this.__7_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "x", "y"], [30, 148, 0]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__9_i(), this.__10_i()];
                return t;
            };
            p.grp_res2_i = function () {
                var t = new egret.gui.Group();
                this.grp_res2 = t;
                this.__s(t, ["height", "x", "y"], [30, 226, 0]);
                t.layout = this.__11_i();
                t.elementsContent = [this.__12_i(), this.__13_i()];
                return t;
            };
            p.grp_res3_i = function () {
                var t = new egret.gui.Group();
                this.grp_res3 = t;
                this.__s(t, ["height", "x", "y"], [30, 303, 0]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__15_i(), this.__16_i()];
                return t;
            };
            p.ico_guild_i = function () {
                var t = new egret.gui.Label();
                this.ico_guild = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "x", "y"], ["宋体", 20, "行会点数", "left", 0xFFFFFF, 269, 14]);
                return t;
            };
            p.ico_myGuildRank_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_myGuildRank = t;
                this.__s(t, ["source", "x", "y"], ["ico_wodehanghuipaim", 25, 14]);
                return t;
            };
            p.ico_myRank_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_myRank = t;
                this.__s(t, ["source", "x", "y"], ["ant_wodepaiming", 25, 13]);
                return t;
            };
            p.ico_person_i = function () {
                var t = new egret.gui.Label();
                this.ico_person = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "x", "y"], ["宋体", 20, "个人点数", "left", 0xFFFFFF, 269, 14]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 18, "标签", 0x499DFD, 81]);
                return t;
            };
            p.label_myKillValue_i = function () {
                var t = new egret.gui.Label();
                this.label_myKillValue = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 32, 24, "6300", "left", 16760832, false, 356, 12]);
                return t;
            };
            p.label_myRank_i = function () {
                var t = new egret.gui.Label();
                this.label_myRank = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "touchEnabled", "x", "y"], ["宋体", 32, 24, "6300", 16760832, false, 162, 13]);
                return t;
            };
            p.list_rankGuildManager_i = function () {
                var t = new egret.gui.List();
                this.list_rankGuildManager = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "touchEnabled", "width", "y"], [508, 0, skins.game.PVPRankItemSkin, false, 416, 116]);
                t.layout = this.__20_i();
                return t;
            };
            p.list_rankGuild_i = function () {
                var t = new egret.gui.List();
                this.list_rankGuild = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "touchEnabled", "width", "y"], [508, 0, skins.game.PVPRankItemSkin, false, 416, 116]);
                t.layout = this.__19_i();
                return t;
            };
            p.list_rankPerson_i = function () {
                var t = new egret.gui.List();
                this.list_rankPerson = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "touchEnabled", "width", "y"], [508, 0, skins.game.PVPRankItemSkin, false, 416, 116]);
                t.layout = this.__21_i();
                return t;
            };
            p.__10_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "99999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.tab_btn_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_btn = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.comp.TabBar_6_Skin, 26]);
                t.dataProvider = this.__26_i();
                return t;
            };
            GuildWarRankSkin._skinParts = ["label_myKillValue", "ico_guild", "ico_person", "label_myRank", "ico_myGuildRank", "ico_myRank", "grp_res0", "grp_res1", "grp_res2", "grp_res3", "grp_Rank", "list_rankGuild", "list_rankGuildManager", "list_rankPerson", "tab_btn", "label_desc", "container"];
            return GuildWarRankSkin;
        })(egret.gui.Skin);
        game.GuildWarRankSkin = GuildWarRankSkin;
        egret.registerClass(GuildWarRankSkin,"skins.game.GuildWarRankSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
