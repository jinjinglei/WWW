var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarDefSkin = (function (_super) {
            __extends(GuildWarDefSkin, _super);
            function GuildWarDefSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.grp_rob_i(), this.grp_def_i(), this.btn_chat_i(), this.btn_robList_i(), this.btn_attackRec_i(), this.btn_score_i(), this.grp_myGuildWarData_i(), this.btn_help_i(), this.btn_back_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarDefSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarDefSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [131, 82]);
                t.elementsContent = [this.bar_robHp1_i(), this.__10_i(), this.ico_robSel1_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_ximengs", 9, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [239, 82]);
                t.elementsContent = [this.bar_robHp2_i(), this.__12_i(), this.ico_robSel2_i()];
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_beimengs", 9, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [347, 82]);
                t.elementsContent = [this.bar_robHp3_i(), this.__14_i(), this.ico_robSel3_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_chemengdisxiao";
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_dongmengs", -45]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "城门状态：", 0xFFF1C7, 38, 58]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                t.y = 159;
                t.elementsContent = [this.__16_i(), this.bar_defHp0_i(), this.__17_i(), this.__18_i(), this.ico_hasDef0_i(), this.ico_noDef0_i(), this.ico_hasBreak0_i()];
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_chemengdisxiao";
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_nanmengs", -45]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "城门状态：", 0xFFF1C7, 38, 58]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [228, 159]);
                t.elementsContent = [this.__20_i(), this.bar_defHp1_i(), this.__21_i(), this.__22_i(), this.ico_hasDef1_i(), this.ico_noDef1_i(), this.ico_hasBreak1_i()];
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_chemengdisxiao";
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_ximengs", -45]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "城门状态：", 0xFFF1C7, 38, 58]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [0, 309]);
                t.elementsContent = [this.__24_i(), this.bar_defHp2_i(), this.__25_i(), this.__26_i(), this.ico_hasDef2_i(), this.ico_noDef2_i(), this.ico_hasBreak2_i()];
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_chemengdisxiao";
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_beimengs", -45]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "城门状态：", 0xFFF1C7, 38, 58]);
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [228, 309]);
                t.elementsContent = [this.__28_i(), this.bar_defHp3_i(), this.__29_i(), this.__30_i(), this.ico_hasDef3_i(), this.ico_noDef3_i(), this.ico_hasBreak3_i()];
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_jianglidituwet", -11]);
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["panel_ditiaoying", 87, 0, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_kuafuhanhuizan", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_hanghuizhenduo", 12]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "y"], [0.5, 0, "ico_chemengdisxiao", 168]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_chemengdis", 79]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_dongmengs", 9, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [21, 82]);
                t.elementsContent = [this.bar_robHp0_i(), this.__8_i(), this.ico_robSel0_i()];
                return t;
            };
            p.bar_curHp_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_curHp = t;
                t.setStyle("textColor", 0xF5EDEB);
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0.6999999999999886, skins.comp.Bar_Exp_Skin, 196]);
                return t;
            };
            p.bar_defHp0_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_defHp0 = t;
                this.__s(t, ["horizontalCenter", "maximum", "scaleX", "skinName", "value", "y"], [0.5, 100, 1.1, skins.comp.Bar_Guild_War_Hp_Skin, 50, 24]);
                return t;
            };
            p.bar_defHp1_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_defHp1 = t;
                this.__s(t, ["horizontalCenter", "maximum", "scaleX", "skinName", "value", "y"], [0.5, 100, 1.1, skins.comp.Bar_Guild_War_Hp_Skin, 50, 24]);
                return t;
            };
            p.bar_defHp2_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_defHp2 = t;
                this.__s(t, ["horizontalCenter", "maximum", "scaleX", "skinName", "value", "y"], [0.5, 100, 1.1, skins.comp.Bar_Guild_War_Hp_Skin, 50, 24]);
                return t;
            };
            p.bar_defHp3_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_defHp3 = t;
                this.__s(t, ["horizontalCenter", "maximum", "scaleX", "skinName", "value", "y"], [0.5, 100, 1.1, skins.comp.Bar_Guild_War_Hp_Skin, 50, 24]);
                return t;
            };
            p.bar_robHp0_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_robHp0 = t;
                this.__s(t, ["maximum", "scaleX", "skinName", "value", "x", "y"], [100, 0.7, skins.comp.Bar_Guild_War_Hp_Skin, 50, 0, 70]);
                return t;
            };
            p.bar_robHp1_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_robHp1 = t;
                this.__s(t, ["maximum", "scaleX", "skinName", "value", "x", "y"], [100, 0.7, skins.comp.Bar_Guild_War_Hp_Skin, 50, 0, 70]);
                return t;
            };
            p.bar_robHp2_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_robHp2 = t;
                this.__s(t, ["maximum", "scaleX", "skinName", "value", "x", "y"], [100, 0.7, skins.comp.Bar_Guild_War_Hp_Skin, 50, 0, 70]);
                return t;
            };
            p.bar_robHp3_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_robHp3 = t;
                this.__s(t, ["maximum", "scaleX", "skinName", "value", "x", "y"], [100, 0.7, skins.comp.Bar_Guild_War_Hp_Skin, 50, 0, 70]);
                return t;
            };
            p.btn_attackRec_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_attackRec = t;
                this.__s(t, ["source", "x", "y"], ["ico_zankuang", 30, 80]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_chat_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_chat = t;
                this.__s(t, ["source", "x", "y"], ["ico_hanghuiliaotian", 35, 551]);
                return t;
            };
            p.btn_clearCd_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_clearCd = t;
                this.__s(t, ["height", "scaleX", "source", "width", "x", "y"], [28, -1, "ntc_page_turner", 25, 255, 33]);
                return t;
            };
            p.btn_defRec_i = function () {
                var t = new egret.gui.Button();
                this.btn_defRec = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_fangshoujilu", skins.comp.Btn_3_24_Skin, 85]);
                return t;
            };
            p.btn_defSetting_i = function () {
                var t = new egret.gui.Button();
                this.btn_defSetting = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0.5, "btn_txt_g_shouweisezi", "按钮", skins.comp.Btn_3_6_Skin, 563]);
                return t;
            };
            p.btn_guwu_i = function () {
                var t = new egret.gui.Button();
                this.btn_guwu = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [63, new egret.gui.ButtonSkin("ico_guwu0", "ico_guwu1"), 60, 360, 44]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.btn_robList_i = function () {
                var t = new egret.gui.Button();
                this.btn_robList = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_qiangduoliebiaos", "按钮", skins.comp.Btn_3_24_Skin, 348, 571]);
                return t;
            };
            p.btn_rob_i = function () {
                var t = new egret.gui.Button();
                this.btn_rob = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "x", "y"], [0.5, "btn_txt_g_gongjicenmen", "按钮", skins.comp.Btn_3_6_Skin, 10, 563]);
                return t;
            };
            p.btn_score_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_score = t;
                this.__s(t, ["source", "x", "y"], ["ico_jifenpaimin", 393, 80]);
                return t;
            };
            p.grp_def_i = function () {
                var t = new egret.gui.Group();
                this.grp_def = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.__19_i(), this.__23_i(), this.__27_i(), this.__31_i(), this.btn_defRec_i(), this.btn_defSetting_i()];
                return t;
            };
            p.grp_guwuLeftTime_i = function () {
                var t = new egret.gui.Group();
                this.grp_guwuLeftTime = t;
                this.__s(t, ["x", "y"], [347, 108]);
                t.elementsContent = [this.__33_i(), this.label_guwuLeftTime_i()];
                return t;
            };
            p.grp_myGuildWarData_i = function () {
                var t = new egret.gui.Group();
                this.grp_myGuildWarData = t;
                this.__s(t, ["height", "left", "right", "y"], [148, 0, 0, 617]);
                t.elementsContent = [this.__32_i(), this.label_leftNum_i(), this.label_myState_i(), this.label_rank_i(), this.label_live_i(), this.label_point_i(), this.label_addProp_i(), this.label_leftTime_i(), this.btn_guwu_i(), this.grp_guwuLeftTime_i(), this.btn_clearCd_i()];
                return t;
            };
            p.grp_rob_i = function () {
                var t = new egret.gui.Group();
                this.grp_rob = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.__6_i(), this.__7_i(), this.__9_i(), this.__11_i(), this.__13_i(), this.__15_i(), this.bar_curHp_i(), this.label_robDoor_i(), this.ico_noDefCur_i(), this.ico_hasBreakCur_i(), this.label_guild_i(), this.btn_rob_i()];
                return t;
            };
            p.ico_hasBreak0_i = function () {
                var t = new egret.gui.Label();
                this.ico_hasBreak0 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "已击破", 0xFF0000, 115, 56]);
                return t;
            };
            p.ico_hasBreak1_i = function () {
                var t = new egret.gui.Label();
                this.ico_hasBreak1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "已击破", 0xFF0000, 115, 56]);
                return t;
            };
            p.ico_hasBreak2_i = function () {
                var t = new egret.gui.Label();
                this.ico_hasBreak2 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "已击破", 0xFF0000, 115, 56]);
                return t;
            };
            p.ico_hasBreak3_i = function () {
                var t = new egret.gui.Label();
                this.ico_hasBreak3 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "已击破", 0xFF0000, 115, 56]);
                return t;
            };
            p.ico_hasBreakCur_i = function () {
                var t = new egret.gui.Label();
                this.ico_hasBreakCur = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "已击破", 0xFF0000, 258, 227]);
                return t;
            };
            p.ico_hasDef0_i = function () {
                var t = new egret.gui.Label();
                this.ico_hasDef0 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "已驻守", 0x00FF00, 115, 56]);
                return t;
            };
            p.ico_hasDef1_i = function () {
                var t = new egret.gui.Label();
                this.ico_hasDef1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "已驻守", 0x00FF00, 115, 56]);
                return t;
            };
            p.ico_hasDef2_i = function () {
                var t = new egret.gui.Label();
                this.ico_hasDef2 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "已驻守", 0x00FF00, 115, 56]);
                return t;
            };
            p.ico_hasDef3_i = function () {
                var t = new egret.gui.Label();
                this.ico_hasDef3 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "已驻守", 0x00FF00, 115, 56]);
                return t;
            };
            p.ico_noDef0_i = function () {
                var t = new egret.gui.Label();
                this.ico_noDef0 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "无人守卫", 0x41B1ED, 115, 56]);
                return t;
            };
            p.ico_noDef1_i = function () {
                var t = new egret.gui.Label();
                this.ico_noDef1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "无人守卫", 0x41B1ED, 115, 56]);
                return t;
            };
            p.ico_noDef2_i = function () {
                var t = new egret.gui.Label();
                this.ico_noDef2 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "无人守卫", 0x41B1ED, 115, 56]);
                return t;
            };
            p.ico_noDef3_i = function () {
                var t = new egret.gui.Label();
                this.ico_noDef3 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "无人守卫", 0x41B1ED, 115, 56]);
                return t;
            };
            p.ico_noDefCur_i = function () {
                var t = new egret.gui.Label();
                this.ico_noDefCur = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "可进攻", 0x00FF00, 258, 227]);
                return t;
            };
            p.ico_robSel0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_robSel0 = t;
                this.__s(t, ["source", "x", "y"], ["ico_xuanzongkuangsf", 9, -1]);
                return t;
            };
            p.ico_robSel1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_robSel1 = t;
                this.__s(t, ["source", "x", "y"], ["ico_xuanzongkuangsf", 9, -1]);
                return t;
            };
            p.ico_robSel2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_robSel2 = t;
                this.__s(t, ["source", "x", "y"], ["ico_xuanzongkuangsf", 9, -1]);
                return t;
            };
            p.ico_robSel3_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_robSel3 = t;
                this.__s(t, ["source", "x", "y"], ["ico_xuanzongkuangsf", 9, -1]);
                return t;
            };
            p.label_addProp_i = function () {
                var t = new mo.gui.Label();
                this.label_addProp = t;
                this.__s(t, ["right", "size", "text", "textColor", "y"], [25, 16, "进攻鼓舞加成 攻击+%s%", 0xFAD028, 22]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new mo.gui.Label();
                this.label_guild = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "textColor", "y"], [0, 20, 1, "<%s>", 0xDC00FF, 52]);
                return t;
            };
            p.label_guwuLeftTime_i = function () {
                var t = new egret.gui.Label();
                this.label_guwuLeftTime = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "00:00", 0xF5F39C, 18, 3]);
                return t;
            };
            p.label_leftNum_i = function () {
                var t = new mo.gui.Label();
                this.label_leftNum = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "%s组行会剩余数量：%s/%s", 39, 15]);
                return t;
            };
            p.label_leftTime_i = function () {
                var t = new mo.gui.Label();
                this.label_leftTime = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "活动倒计时：%s", 0xFB0000, 154]);
                return t;
            };
            p.label_live_i = function () {
                var t = new mo.gui.Label();
                this.label_live = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "城门存活：%s/4", 39, 95]);
                return t;
            };
            p.label_myState_i = function () {
                var t = new mo.gui.Label();
                this.label_myState = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "我的状态：%s", 39, 35]);
                return t;
            };
            p.label_point_i = function () {
                var t = new mo.gui.Label();
                this.label_point = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "行会点数：%s", 209, 95]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new mo.gui.Label();
                this.label_rank = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "我的行会排名：第%s名", 39, 75]);
                return t;
            };
            p.label_robDoor_i = function () {
                var t = new mo.gui.Label();
                this.label_robDoor = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [19, "%s城门状态：", 0xFFFFFF, 151, 227]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_nanmengs", 9, 0]);
                return t;
            };
            GuildWarDefSkin._skinParts = ["bar_robHp0", "ico_robSel0", "bar_robHp1", "ico_robSel1", "bar_robHp2", "ico_robSel2", "bar_robHp3", "ico_robSel3", "bar_curHp", "label_robDoor", "ico_noDefCur", "ico_hasBreakCur", "label_guild", "btn_rob", "grp_rob", "bar_defHp0", "ico_hasDef0", "ico_noDef0", "ico_hasBreak0", "bar_defHp1", "ico_hasDef1", "ico_noDef1", "ico_hasBreak1", "bar_defHp2", "ico_hasDef2", "ico_noDef2", "ico_hasBreak2", "bar_defHp3", "ico_hasDef3", "ico_noDef3", "ico_hasBreak3", "btn_defRec", "btn_defSetting", "grp_def", "btn_chat", "btn_robList", "btn_attackRec", "btn_score", "label_leftNum", "label_myState", "label_rank", "label_live", "label_point", "label_addProp", "label_leftTime", "btn_guwu", "label_guwuLeftTime", "grp_guwuLeftTime", "btn_clearCd", "grp_myGuildWarData", "btn_help", "btn_back"];
            return GuildWarDefSkin;
        })(egret.gui.Skin);
        game.GuildWarDefSkin = GuildWarDefSkin;
        egret.registerClass(GuildWarDefSkin,"skins.game.GuildWarDefSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
