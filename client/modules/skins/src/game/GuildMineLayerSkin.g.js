var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildMineLayerSkin = (function (_super) {
            __extends(GuildMineLayerSkin, _super);
            function GuildMineLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_close_i(), this.btn_help_i(), this.__12_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.tab_str_i(), this.grp_guildDaily_i(), this.grp_guildFuli_i(), this.grp_guildWar_i(), this.__44_i(), this.__51_i(), this.__52_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildMineLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildMineLayerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "width", "x", "y"], [16, 1, 0x056F0C, "行会排名: ", 0xFFFFFF, 82, 343, 31]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "right", "y"], [110, 0, 0, 63]);
                t.elementsContent = [this.label_guildname_i(), this.__6_i(), this.__7_i(), this.label_id_i(), this.__8_i(), this.label_name_i(), this.__9_i(), this.label_lv_i(), this.__10_i(), this.label_count_i(), this.__11_i(), this.label_rank_i(), this.bar_exp_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_xingliandigonggao", 0, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["btn_txt_hanghuigonggao", 168, 19]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [31, 151]);
                t.elementsContent = [this.__13_i(), this.__14_i(), this.label_notice_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [315, 0, "s9g_dlg_1", 442, 332]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [298, "ico_bg", 425, 27, 342]);
                return t;
            };
            p.__18_i = function () {
                var t = {};
                t.label = "tab_txt_ricanghuodong";
                return t;
            };
            p.__19_i = function () {
                var t = {};
                t.label = "tab_txt_hanghuifuli";
                return t;
            };
            p.__20_i = function () {
                var t = {};
                t.label = "tab_txt_hanghuizengba";
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__18_i(), this.__19_i(), this.__20_i()];
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bg_gongxian", 1, 0]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("textAlign", "center");
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "btn_txt_hanhuifubeng", 3]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_hanghuifubeng", 40]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bg_gongxian", 1, 0]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("textAlign", "center");
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "btn_txt_renwu", 3]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_renwu", 31]);
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bg_gongxian", 1, 0]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("textAlign", "center");
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "btn_txt_boss", 3]);
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_bossFight", 31]);
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bg_gongxian", 1, 0]);
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("textAlign", "center");
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "btn_txt_baoku", 3]);
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_baopen", 30]);
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bg_gongxian", 1, -2]);
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("textAlign", "center");
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "btn_txt_qizhi", 0]);
                return t;
            };
            p.__37_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_qizi", 27]);
                return t;
            };
            p.__38_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["btn_txt_zhanlijia", 0, 0]);
                return t;
            };
            p.__39_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = -9;
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "bg_forge", 0, 30, 30]);
                return t;
            };
            p.__40_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 90]);
                t.layout = this.__39_i();
                t.elementsContent = [this.__38_i(), this.label_attack_i()];
                return t;
            };
            p.__41_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bg_gongxian", 1, 0]);
                return t;
            };
            p.__42_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("textAlign", "center");
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "btn_txt_qianduozand", 3]);
                return t;
            };
            p.__43_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_hanghuiqiangduozans", 30]);
                return t;
            };
            p.__44_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [33, 651]);
                t.elementsContent = [this.btn_rank_i(), this.btn_member_i(), this.btn_manager_i()];
                return t;
            };
            p.__45_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [84, "panel_rdf", 447, 0, 0]);
                return t;
            };
            p.__46_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [16, "我的职位：", 15, 14]);
                return t;
            };
            p.__47_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [16, "我的积分：", 243, 15]);
                return t;
            };
            p.__48_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__49_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [243, 49]);
                t.layout = this.__48_i();
                t.elementsContent = [this.label_myGuildLv_i(), this.label_myExp_i()];
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 30, 6]);
                return t;
            };
            p.__50_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [16, "爵位：", 15, 48]);
                return t;
            };
            p.__51_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [17, 698]);
                t.elementsContent = [this.__45_i(), this.__46_i(), this.label_myPosition_i(), this.__47_i(), this.label_leftExp_i(), this.__49_i(), this.__50_i(), this.label_ennoble_i()];
                return t;
            };
            p.__52_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.7, 0, "pre_行会副本入口示意", -11.5, false]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [-3, "tit_txt_g_gonghui", 30, 13]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [16, 1, 0x4b0064, "行会名称:", 0xFFFFFF, 20, 8]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [16, 1, 0x056F0C, "行会ID:", 0xFFFFFF, 238, 3]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [16, 1, 0x4b0064, "会长:", 0xFFFFFF, 20, 32]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "stroke", "strokeColor", "text", "textColor", "width", "x", "y"], [27, 16, 1, 0x6A4F06, "行会等级: ", 0xFFFFFF, 100, 20, 57]);
                return t;
            };
            p.bar_exp_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_exp = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [63.5, skins.comp.Bar_Exp_Skin, 57]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 422, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, -9]);
                return t;
            };
            p.btn_manager_i = function () {
                var t = new egret.gui.Button();
                this.btn_manager = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_hanghuiguanli", skins.comp.Btn_3_4_Skin, 0, 0]);
                return t;
            };
            p.btn_member_i = function () {
                var t = new egret.gui.Button();
                this.btn_member = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_hanghuihuiyuan", skins.comp.Btn_3_4_Skin, 148, 0]);
                return t;
            };
            p.btn_rank_i = function () {
                var t = new egret.gui.Button();
                this.btn_rank = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_hanghuipaihang", skins.comp.Btn_3_4_Skin, 294, 0]);
                return t;
            };
            p.grp_benefits_i = function () {
                var t = new egret.gui.Group();
                this.grp_benefits = t;
                this.__s(t, ["width", "x", "y"], [157, 195, 3]);
                t.elementsContent = [this.__35_i(), this.__36_i(), this.__37_i(), this.__40_i()];
                return t;
            };
            p.grp_bossWar_i = function () {
                var t = new egret.gui.Group();
                this.grp_bossWar = t;
                this.__s(t, ["x", "y"], [195, 3]);
                t.elementsContent = [this.__29_i(), this.__30_i(), this.__31_i()];
                return t;
            };
            p.grp_copy_i = function () {
                var t = new egret.gui.Group();
                this.grp_copy = t;
                this.__s(t, ["x", "y"], [1, 3]);
                t.elementsContent = [this.__23_i(), this.__24_i(), this.__25_i()];
                return t;
            };
            p.grp_daily_i = function () {
                var t = new egret.gui.Group();
                this.grp_daily = t;
                this.__s(t, ["x", "y"], [1, 143]);
                t.elementsContent = [this.__26_i(), this.__27_i(), this.__28_i()];
                return t;
            };
            p.grp_guildDaily_i = function () {
                var t = new egret.gui.Group();
                this.grp_guildDaily = t;
                this.__s(t, ["x", "y"], [59, 352]);
                t.elementsContent = [this.grp_copy_i(), this.grp_daily_i(), this.grp_bossWar_i()];
                return t;
            };
            p.grp_guildFuli_i = function () {
                var t = new egret.gui.Group();
                this.grp_guildFuli = t;
                this.__s(t, ["visible", "x", "y"], [false, 59, 352]);
                t.elementsContent = [this.grp_treasure_i(), this.grp_benefits_i()];
                return t;
            };
            p.grp_guildWar_i = function () {
                var t = new egret.gui.Group();
                this.grp_guildWar = t;
                this.__s(t, ["visible", "x", "y"], [false, 59, 352]);
                t.elementsContent = [this.grp_rob_i()];
                return t;
            };
            p.grp_rob_i = function () {
                var t = new egret.gui.Group();
                this.grp_rob = t;
                this.__s(t, ["x", "y"], [1, 3]);
                t.elementsContent = [this.__41_i(), this.__42_i(), this.__43_i()];
                return t;
            };
            p.grp_treasure_i = function () {
                var t = new egret.gui.Group();
                this.grp_treasure = t;
                this.__s(t, ["x", "y"], [1, 3]);
                t.elementsContent = [this.__32_i(), this.__33_i(), this.__34_i(), this.ico_level_i()];
                return t;
            };
            p.ico_level_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_level = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_chujubaoku", 86]);
                return t;
            };
            p.label_attack_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_attack = t;
                this.__s(t, ["font", "letterSpacing", "text", "x", "y"], ["num_11", -8, "1234", 63, 2]);
                return t;
            };
            p.label_count_i = function () {
                var t = new egret.gui.Label();
                this.label_count = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "width", "x", "y"], [16, 1, 0x056F0C, "100/500", 0xFFFFFF, 86, 267, 32]);
                return t;
            };
            p.label_ennoble_i = function () {
                var t = new egret.gui.Label();
                this.label_ennoble = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "无", 61, 48]);
                return t;
            };
            p.label_guildname_i = function () {
                var t = new egret.gui.Label();
                this.label_guildname = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [16, 1, 0x4b0064, "%s", 0xFFFFFF, 94, 8]);
                return t;
            };
            p.label_id_i = function () {
                var t = new egret.gui.Label();
                this.label_id = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "width", "x", "y"], [16, 1, 0x056F0C, "%s", 0xFFFFFF, 102, 303, 3]);
                return t;
            };
            p.label_leftExp_i = function () {
                var t = new egret.gui.Label();
                this.label_leftExp = t;
                this.__s(t, ["size", "text", "width", "x", "y"], [16, "%s", 102, 327, 15]);
                return t;
            };
            p.label_lv_i = function () {
                var t = new egret.gui.Label();
                this.label_lv = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "width", "x", "y"], [16, 1, 0x6A4F06, "%s", 0xFFFFFF, 89, 98, 56]);
                return t;
            };
            p.label_myExp_i = function () {
                var t = new egret.gui.Label();
                this.label_myExp = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "200/3000", 84, 0]);
                return t;
            };
            p.label_myGuildLv_i = function () {
                var t = new egret.gui.Label();
                this.label_myGuildLv = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "会员等级：", 0, 0]);
                return t;
            };
            p.label_myPosition_i = function () {
                var t = new egret.gui.Label();
                this.label_myPosition = t;
                this.__s(t, ["size", "text", "width", "x", "y"], [16, "%s", 102, 97, 13]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [16, 1, 0x4b0064, "%s", 0xFFFFFF, 65, 32]);
                return t;
            };
            p.label_notice_i = function () {
                var t = new egret.gui.Label();
                this.label_notice = t;
                this.__s(t, ["height", "size", "textAlign", "verticalAlign", "width", "x", "y"], [61, 16, "left", "middle", 372, 23, 41]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new egret.gui.Label();
                this.label_rank = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [16, 1, 0x056F0C, "%s", 0xFFFFFF, 421, 31]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "width", "x", "y"], [16, 1, 0x056F0C, "人数: ", 0xFFFFFF, 48, 218, 32]);
                return t;
            };
            p.tab_str_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_str = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.TabBar_6_Skin, 56, 293]);
                t.dataProvider = this.__22_i();
                return t;
            };
            GuildMineLayerSkin._skinParts = ["btn_close", "btn_help", "label_guildname", "label_id", "label_name", "label_lv", "label_count", "label_rank", "bar_exp", "label_notice", "tab_str", "grp_copy", "grp_daily", "grp_bossWar", "grp_guildDaily", "ico_level", "grp_treasure", "label_attack", "grp_benefits", "grp_guildFuli", "grp_rob", "grp_guildWar", "btn_rank", "btn_member", "btn_manager", "label_myPosition", "label_leftExp", "label_myGuildLv", "label_myExp", "label_ennoble"];
            return GuildMineLayerSkin;
        })(egret.gui.Skin);
        game.GuildMineLayerSkin = GuildMineLayerSkin;
        egret.registerClass(GuildMineLayerSkin,"skins.game.GuildMineLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
