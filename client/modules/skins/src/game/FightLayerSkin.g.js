var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightLayerSkin = (function (_super) {
            __extends(FightLayerSkin, _super);
            function FightLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.grp_ui_i(), this.grp_worldBoss_i(), this.grp_myHurt_i(), this.btn_red_i(), this.ico_expBuff_i(), this.btn_skip_i(), this.label_skipFight_i(), this.grp_winCount_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightLayerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [16, 1, "活动剩余时间: ", 0xE56060, 278, 615]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["panel_ditiaoying", 87, 0, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["panel_ditiaoying", 266, 0, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [18, 1, "我的输出", 0x13CA13, 52, 4]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "scale9Grid", "source", "width", "x", "y"], [true, 20, egret.gui.getScale9Grid("25,6,33,7"), "ico_stageinfo_b", 116, 3, 1]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["scale9Grid", "source", "width", "y"], [egret.gui.getScale9Grid("13,7,81,8"), "ico_stageinfo_c", 120, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 20, "ico_stage_win", 22, -7, 2]);
                return t;
            };
            p.__3_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "height", "scaleX", "scaleY", "x", "y"], [true, 28, 0, .8, .8, 52, 104]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 5;
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_pk_who", 0, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Rect();
                t.setStyle("textColor", 0x000000);
                this.__s(t, ["fillAlpha", "fillColor", "height", "horizontalCenter", "width", "y"], [0.5, 0x000000, 20, 0, 51, 34]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_xunzaoduishou", 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_xzduisou", 47]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "width", "y"], [0.5, "panel_ditiaoying", 291, 197]);
                return t;
            };
            p.btn_boss_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_boss = t;
                this.__s(t, ["autoScale", "height", "left", "source", "top", "width"], [true, 88, 0, "ico_boss_1", 0, 95]);
                return t;
            };
            p.btn_damageRank_i = function () {
                var t = new egret.gui.Button();
                this.btn_damageRank = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_shanghaipm", "按钮", skins.comp.Btn_3_21_Skin, 352, 292]);
                return t;
            };
            p.btn_guwu_i = function () {
                var t = new egret.gui.Button();
                this.btn_guwu = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [63, new egret.gui.ButtonSkin("ico_guwu0", "ico_guwu1"), 60, 17, 0]);
                return t;
            };
            p.btn_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_qianghb", 10, 534]);
                return t;
            };
            p.btn_skip_i = function () {
                var t = new egret.gui.Button();
                this.btn_skip = t;
                this.__s(t, ["horizontalCenter", "label", "skinName", "y"], [0, "快速战斗", skins.comp.Btn_0_4_Skin, 534]);
                return t;
            };
            p.btn_zhenQi_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_zhenQi = t;
                this.__s(t, ["source", "x", "y"], ["btn_zhenqirukou", 12, 654]);
                return t;
            };
            p.eff_findingMonster_i = function () {
                var t = new g_comp.UIEffect();
                this.eff_findingMonster = t;
                this.__s(t, ["autoPlay", "effectId", "performanceControl", "x", "y"], [true, 37, false, 227, 398]);
                return t;
            };
            p.grp_boss_i = function () {
                var t = new egret.gui.Group();
                this.grp_boss = t;
                this.__s(t, ["height", "width", "x", "y"], [95, 95, 202, 540]);
                t.elementsContent = [this.btn_boss_i(), this.__3_i()];
                return t;
            };
            p.grp_findPk_i = function () {
                var t = new egret.gui.Group();
                this.grp_findPk = t;
                this.__s(t, ["x", "y"], [410, 277]);
                t.elementsContent = [this.__7_i(), this.__8_i()];
                return t;
            };
            p.grp_guwuLeftTime_i = function () {
                var t = new egret.gui.Group();
                this.grp_guwuLeftTime = t;
                this.__s(t, ["x", "y"], [0, 59]);
                t.elementsContent = [this.__12_i(), this.label_guwuLeftTime_i()];
                return t;
            };
            p.grp_guwu_i = function () {
                var t = new egret.gui.Group();
                this.grp_guwu = t;
                this.__s(t, ["x", "y"], [388, 477]);
                t.elementsContent = [this.btn_guwu_i(), this.grp_guwuLeftTime_i()];
                return t;
            };
            p.grp_leftTime_i = function () {
                var t = new egret.gui.Group();
                this.grp_leftTime = t;
                this.__s(t, ["x", "y"], [417, 275]);
                t.elementsContent = [this.__5_i(), this.__6_i(), this.label_leftTime_i()];
                return t;
            };
            p.grp_myHurt_i = function () {
                var t = new egret.gui.Group();
                this.grp_myHurt = t;
                this.__s(t, ["x", "y"], [262, 260]);
                t.elementsContent = [this.__13_i(), this.__14_i(), this.label_myDamage_i()];
                return t;
            };
            p.grp_pkEnemy_i = function () {
                var t = new egret.gui.Group();
                this.grp_pkEnemy = t;
                this.__s(t, ["height", "width", "x", "y"], [200, 61, 413, 274]);
                t.layout = this.__4_i();
                return t;
            };
            p.grp_ui_i = function () {
                var t = new egret.gui.Group();
                this.grp_ui = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.grp_boss_i(), this.icon_pkInfo_i(), this.grp_pkEnemy_i(), this.grp_leftTime_i(), this.ico_red_i(), this.grp_findPk_i(), this.ico_enemy_i(), this.ico_bePkRed_i(), this.ico_auto_i(), this.ico_autoLight_i(), this.label_noActive_i(), this.eff_findingMonster_i(), this.ico_worldBoss_i(), this.label_bossPking_i(), this.btn_zhenQi_i()];
                return t;
            };
            p.grp_winCount_i = function () {
                var t = new egret.gui.Group();
                this.grp_winCount = t;
                this.__s(t, ["height", "right", "width", "y"], [23, 18, 121, 612]);
                t.elementsContent = [this.__15_i(), this.ico_win_process_i(), this.__16_i(), this.label_winCount_i(), this.__17_i()];
                return t;
            };
            p.grp_worldBoss_i = function () {
                var t = new egret.gui.Group();
                this.grp_worldBoss = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.px_hp_i(), this.__9_i(), this.label_bossName_i(), this.__10_i(), this.__11_i(), this.label_worldBossLeftTime_i(), this.btn_damageRank_i(), this.grp_guwu_i()];
                return t;
            };
            p.ico_autoLight_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_autoLight = t;
                this.__s(t, ["source", "x", "y"], ["ico_copy_highlight", 405, 466]);
                return t;
            };
            p.ico_auto_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_auto = t;
                this.__s(t, ["source", "x", "y"], ["ico_autofight_disable", 415, 476]);
                return t;
            };
            p.ico_bePkRed_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_bePkRed = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 443, 142]);
                return t;
            };
            p.ico_enemy_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_enemy = t;
                this.__s(t, ["source", "x", "y"], ["ico_pvp_chou", 413, 148]);
                return t;
            };
            p.ico_expBuff_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_expBuff = t;
                this.__s(t, ["height", "width", "x", "y"], [48, 48, 10, 601]);
                return t;
            };
            p.ico_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 443, 200]);
                return t;
            };
            p.ico_win_process_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_win_process = t;
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [19, egret.gui.getScale9Grid("12,3,7,8"), "ico_stageinfo_f", 112, 3, 2]);
                return t;
            };
            p.ico_worldBoss_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_worldBoss = t;
                this.__s(t, ["source", "x", "y"], ["ico_guildBoss", 9, 377]);
                return t;
            };
            p.icon_pkInfo_i = function () {
                var t = new egret.gui.UIAsset();
                this.icon_pkInfo = t;
                this.__s(t, ["source", "x", "y"], ["ico_hell", 412, 206]);
                return t;
            };
            p.label_bossName_i = function () {
                var t = new egret.gui.Label();
                this.label_bossName = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 18, "沃尔玛教主", 0xFE2727, 202]);
                return t;
            };
            p.label_bossPking_i = function () {
                var t = new mo.gui.Label();
                this.label_bossPking = t;
                this.__s(t, ["fontFamily", "size", "stroke", "text", "textColor", "x", "y"], ["楷体", 18, 1, "激战中...", 0xFA0909, 13, 451]);
                return t;
            };
            p.label_guwuLeftTime_i = function () {
                var t = new egret.gui.Label();
                this.label_guwuLeftTime = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "00:00", 0xF5F39C, 18, 3]);
                return t;
            };
            p.label_leftTime_i = function () {
                var t = new egret.gui.Label();
                this.label_leftTime = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [19, 0, 16, "00:00", "center", 0xFCBE2D, 51, 35]);
                return t;
            };
            p.label_myDamage_i = function () {
                var t = new egret.gui.Label();
                this.label_myDamage = t;
                this.__s(t, ["size", "stroke", "text", "textAlign", "textColor", "x", "y"], [18, 1, "1万", "left", 0x13CA13, 133, 4]);
                return t;
            };
            p.label_noActive_i = function () {
                var t = new egret.gui.Label();
                this.label_noActive = t;
                this.__s(t, ["bold", "fontFamily", "size", "text", "textColor", "x", "y"], [true, "黑体", 20, "未激活", 0xFD0000, 413, 537]);
                return t;
            };
            p.label_skipFight_i = function () {
                var t = new mo.gui.Label();
                this.label_skipFight = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0, 20, "(%s后可用)", 572]);
                return t;
            };
            p.label_winCount_i = function () {
                var t = new egret.gui.Label();
                this.label_winCount = t;
                this.__s(t, ["height", "horizontalCenter", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], [21, 9.5, 18, 1, 0, "1/10", "center", 0xFFFFFF, "middle", -1, 66]);
                return t;
            };
            p.label_worldBossLeftTime_i = function () {
                var t = new egret.gui.Label();
                this.label_worldBossLeftTime = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [16, 1, "00:00:00", 0xE56060, 392, 615]);
                return t;
            };
            p.px_hp_i = function () {
                var t = new egret.gui.ProgressBar();
                this.px_hp = t;
                this.__s(t, ["direction", "horizontalCenter", "skinName", "value", "width", "y"], ["rightToLeft", 0.5, skins.comp.Bar_WorldBoss_Hp_Skin, 500, 399, 208]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["right", "scale9Grid", "source", "width", "y"], [0, egret.gui.getScale9Grid("17,4,17,27"), "panel_dingtiaoying", 207, 609]);
                return t;
            };
            FightLayerSkin._skinParts = ["btn_boss", "grp_boss", "icon_pkInfo", "grp_pkEnemy", "label_leftTime", "grp_leftTime", "ico_red", "grp_findPk", "ico_enemy", "ico_bePkRed", "ico_auto", "ico_autoLight", "label_noActive", "eff_findingMonster", "ico_worldBoss", "label_bossPking", "btn_zhenQi", "grp_ui", "px_hp", "label_bossName", "label_worldBossLeftTime", "btn_damageRank", "btn_guwu", "label_guwuLeftTime", "grp_guwuLeftTime", "grp_guwu", "grp_worldBoss", "label_myDamage", "grp_myHurt", "btn_red", "ico_expBuff", "btn_skip", "label_skipFight", "ico_win_process", "label_winCount", "grp_winCount"];
            return FightLayerSkin;
        })(egret.gui.Skin);
        game.FightLayerSkin = FightLayerSkin;
        egret.registerClass(FightLayerSkin,"skins.game.FightLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
