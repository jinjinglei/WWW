var skins;
(function (skins) {
    var game;
    (function (game) {
        var RoleWingSkin = (function (_super) {
            __extends(RoleWingSkin, _super);
            function RoleWingSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.img_wing_i(), this.__4_i(), this.label_lvl_i(), this.label_name_i(), this.__30_i(), this.btn_help_i(), this.grp_train_i(), this.btn_active_i(), this.btn_evolution_i(), this.efx_btn_i(), this.efx_evo1_i(), this.efx_evo2_i(), this.efx_hit1_i(), this.efx_hit2_i(), this.grp_res_i(), this.ico_str_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RoleWingSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RoleWingSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["star_4", "ico_star", 40, 40]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["star_5", "ico_star", 50, 50]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["star_6", "ico_star", 60, 60]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["star_7", "ico_star", 70, 70]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["star_8", "ico_star", 80, 80]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["star_9", "ico_star", 90, 90]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 5;
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "当前属性：", 13750708, false, 0, 0]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "攻击：+", 13750708, false, 0, 26]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "生命：+", 13750708, false, 0, 50]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "物防：+", 13750708, false, 0, 74]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "法防：+", 13750708, false, 0, 98]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [22, 10]);
                t.elementsContent = [this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__22_i(), this.label_cAttack_i(), this.label_cHp_i(), this.label_cPDefense_i(), this.label_cMDefense_i()];
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "下一星级：", 0xD1D1B4, false, 0, 0]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "攻击：+", 0xD1D1B4, false, 0, 26]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "生命：+", 0xD1D1B4, false, 0, 50]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "物防：+", 0xD1D1B4, false, 0, 74]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "法防：+", 0xD1D1B4, false, 0, 98]);
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["scaleX", "source", "x", "y"], [-1, "ntc_page_turner", 179, 49]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 332]);
                t.elementsContent = [this.__5_i(), this.__6_i(), this.pb_exp_i(), this.grp_star_light_i(), this.__23_i(), this.grp_next_i(), this.__29_i()];
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 0]);
                t.elementsContent = [this.ico_costAuto_i(), this.label_costAuto_i()];
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_feather", 145, 0]);
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 37, 0]);
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 239, 3]);
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_feather", 145, 0]);
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [210, 85]);
                t.elementsContent = [this.label_cost_gold0_i(), this.__35_i()];
                return t;
            };
            p.__37_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_feather", 267, 1]);
                return t;
            };
            p.__38_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["yuanbao_round_bg", false, 308, 0]);
                return t;
            };
            p.__39_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 138, 1]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_wing", 0]);
                return t;
            };
            p.__40_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["yuanbao_round_bg", false, 168, 0]);
                return t;
            };
            p.__41_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 0, 1]);
                return t;
            };
            p.__42_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["yuanbao_round_bg", false, 29, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["panel_wing_1", false, 50, 188]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "touchEnabled", "y"], [182, 0, egret.gui.getScale9Grid("11,3,70,25"), "panel_wing_prop_bg", false, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "y"], [82, 0, "panel_wing_0", 138]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source"], ["star_0", "ico_star"]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["star_1", "ico_star", 10, 10]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["star_2", "ico_star", 20, 20]);
                return t;
            };
            p.btn_active_i = function () {
                var t = new egret.gui.Button();
                this.btn_active = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [0, "btn_txt_g_active", skins.comp.Btn_3_6_Skin, 10, 610]);
                return t;
            };
            p.btn_checkAuto_i = function () {
                var t = new egret.gui.CheckBox();
                this.btn_checkAuto = t;
                this.__s(t, ["label", "skinName", "visible", "x", "y"], ["自动培养至升阶", skins.comp.CheckBox2Skin, false, 113, 118]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                t.setStyle("size", 20);
                t.setStyle("textColor", 13750708);
                this.__s(t, ["source", "x", "y"], ["btn_back", 409, 109]);
                return t;
            };
            p.btn_evolution_i = function () {
                var t = new egret.gui.Button();
                this.btn_evolution = t;
                this.__s(t, ["bottom", "horizontalCenter", "icon", "skinName"], [146, 0, "btn_txt_g_evolution", skins.comp.Btn_3_6_Skin]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 109]);
                return t;
            };
            p.btn_highAuto_i = function () {
                var t = new egret.gui.Button();
                this.btn_highAuto = t;
                this.__s(t, ["icon", "scaleX", "scaleY", "skinName", "x", "y"], ["btn_txt_g_gaojizidong", 0.8, 0.8, skins.comp.Btn_3_8_Skin, 203, 35]);
                return t;
            };
            p.btn_high_i = function () {
                var t = new egret.gui.Button();
                this.btn_high = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_gaojipeiyangs", "高级培养", skins.comp.Btn_3_26_Skin, 210, 36]);
                return t;
            };
            p.btn_keyUpgrade_i = function () {
                var t = new egret.gui.Button();
                this.btn_keyUpgrade = t;
                this.__s(t, ["enabled", "icon", "label", "skinName", "x", "y"], [true, "btn_txt_c_yijianshengjie", "高级培养", skins.comp.Btn_3_8_Skin, 77, 112]);
                return t;
            };
            p.btn_normalAuto_i = function () {
                var t = new egret.gui.Button();
                this.btn_normalAuto = t;
                this.__s(t, ["icon", "scaleX", "scaleY", "skinName", "x", "y"], ["btn_txt_g_putongzidong", 0.8, 0.8, skins.comp.Btn_3_8_Skin, 0, 35]);
                return t;
            };
            p.btn_normal_i = function () {
                var t = new egret.gui.Button();
                this.btn_normal = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_putongpeiyangsf", "普通培养", skins.comp.Btn_3_26_Skin, 9, 36]);
                return t;
            };
            p.btn_stopAuto_i = function () {
                var t = new egret.gui.Button();
                this.btn_stopAuto = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_tingzizidong", skins.comp.Btn_3_8_Skin, 30]);
                return t;
            };
            p.efx_btn_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_btn = t;
                this.__s(t, ["effectId", "x", "y"], [21, 241, 634]);
                return t;
            };
            p.efx_evo1_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_evo1 = t;
                this.__s(t, ["effectId", "x", "y"], [5, 240, 241]);
                return t;
            };
            p.efx_evo2_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_evo2 = t;
                this.__s(t, ["effectId", "x", "y"], [4, 240, 527]);
                return t;
            };
            p.efx_hit1_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_hit1 = t;
                this.__s(t, ["effectId", "x", "y"], [2, 240, 564]);
                return t;
            };
            p.efx_hit2_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_hit2 = t;
                this.__s(t, ["effectId", "x", "y"], [3, 240, 460]);
                return t;
            };
            p.grp_costDescAuto_i = function () {
                var t = new egret.gui.Group();
                this.grp_costDescAuto = t;
                this.__s(t, ["horizontalCenter", "y"], [0.5, 84]);
                t.elementsContent = [this.label_cost_gold2_i(), this.__32_i()];
                return t;
            };
            p.grp_fos_i = function () {
                var t = new egret.gui.Group();
                this.grp_fos = t;
                this.__s(t, ["x", "y"], [45, 23]);
                t.elementsContent = [this.__33_i(), this.__34_i(), this.label_cost_gold_i(), this.__36_i(), this.label_cost_yuanbao_i(), this.btn_highAuto_i(), this.btn_normalAuto_i(), this.btn_normal_i(), this.btn_high_i(), this.btn_checkAuto_i(), this.btn_keyUpgrade_i()];
                return t;
            };
            p.grp_next_i = function () {
                var t = new egret.gui.Group();
                this.grp_next = t;
                this.__s(t, ["x", "y"], [212, 10]);
                t.elementsContent = [this.__24_i(), this.__25_i(), this.__26_i(), this.__27_i(), this.__28_i(), this.label_nAttack_i(), this.label_nHp_i(), this.label_nPDefense_i(), this.label_nMDefense_i()];
                return t;
            };
            p.grp_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_res = t;
                this.__s(t, ["x", "y"], [41, 752]);
                t.elementsContent = [this.__37_i(), this.__38_i(), this.__39_i(), this.__40_i(), this.__41_i(), this.__42_i(), this.label_feather_i(), this.label_yuanbao_i(), this.label_gold_i()];
                return t;
            };
            p.grp_star_light_i = function () {
                var t = new egret.gui.Group();
                this.grp_star_light = t;
                this.__s(t, ["x", "y"], [38, 157]);
                t.layout = this.__17_i();
                t.elementsContent = [this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i()];
                return t;
            };
            p.grp_stop_i = function () {
                var t = new egret.gui.Group();
                this.grp_stop = t;
                this.__s(t, ["left", "right", "visible", "y"], [0, 0, false, 24]);
                t.elementsContent = [this.__31_i(), this.btn_stopAuto_i(), this.grp_costDescAuto_i()];
                return t;
            };
            p.grp_train_i = function () {
                var t = new egret.gui.Group();
                this.grp_train = t;
                this.__s(t, ["width", "x", "y"], [457, 24, 554]);
                t.elementsContent = [this.grp_stop_i(), this.grp_fos_i()];
                return t;
            };
            p.ico_costAuto_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_costAuto = t;
                this.__s(t, ["source", "x", "y"], ["ico_gold", 0, 0]);
                return t;
            };
            p.ico_str_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_str = t;
                this.__s(t, ["source", "x", "y"], ["ico_cibangqianghuatu", 385, 224]);
                return t;
            };
            p.img_wing_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_wing = t;
                this.__s(t, ["horizontalCenter", "touchEnabled", "y"], [-1, false, 202]);
                return t;
            };
            p.label_cAttack_i = function () {
                var t = new mo.gui.Label();
                this.label_cAttack = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "0", 13750708, false, 70, 26]);
                return t;
            };
            p.label_cHp_i = function () {
                var t = new mo.gui.Label();
                this.label_cHp = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "0", 13750708, false, 70, 50]);
                return t;
            };
            p.label_cMDefense_i = function () {
                var t = new mo.gui.Label();
                this.label_cMDefense = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "0", 13750708, false, 70, 98]);
                return t;
            };
            p.label_cPDefense_i = function () {
                var t = new mo.gui.Label();
                this.label_cPDefense = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "0", 13750708, false, 70, 74]);
                return t;
            };
            p.label_costAuto_i = function () {
                var t = new mo.gui.Label();
                this.label_costAuto = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [18, "9999", "left", 0xFFFFFF, 25, 1]);
                return t;
            };
            p.label_cost_gold0_i = function () {
                var t = new mo.gui.Label();
                this.label_cost_gold0 = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [18, "高级培养优先消耗", "left", 0xFFFFFF, 0, 0]);
                return t;
            };
            p.label_cost_gold2_i = function () {
                var t = new mo.gui.Label();
                this.label_cost_gold2 = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [18, "高级培养优先消耗", "left", 0xFFFFFF, 0, 0]);
                return t;
            };
            p.label_cost_gold_i = function () {
                var t = new mo.gui.Label();
                this.label_cost_gold = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [18, "9999", "left", 0xFFFFFF, 76, 62, 1]);
                return t;
            };
            p.label_cost_yuanbao_i = function () {
                var t = new mo.gui.Label();
                this.label_cost_yuanbao = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [18, "5", "left", 0xFFFFFF, 270, 1]);
                return t;
            };
            p.label_feather_i = function () {
                var t = new mo.gui.Label();
                this.label_feather = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["楷体", 18, "0", "center", 0xDA9F00, false, 90, 309, 1]);
                return t;
            };
            p.label_gold_i = function () {
                var t = new mo.gui.Label();
                this.label_gold = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["楷体", 18, "0", "center", 0xDA9F00, false, 90, 31, 1]);
                return t;
            };
            p.label_lvl_i = function () {
                var t = new mo.gui.Label();
                this.label_lvl = t;
                this.__s(t, ["size", "stroke", "text", "touchEnabled", "x", "y"], [20, 1, "LV.%s", false, 272, 195]);
                return t;
            };
            p.label_nAttack_i = function () {
                var t = new mo.gui.Label();
                this.label_nAttack = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "0", 0xD1D1B4, false, 70, 26]);
                return t;
            };
            p.label_nHp_i = function () {
                var t = new mo.gui.Label();
                this.label_nHp = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "0", 0xD1D1B4, false, 70, 50]);
                return t;
            };
            p.label_nMDefense_i = function () {
                var t = new mo.gui.Label();
                this.label_nMDefense = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "0", 0xD1D1B4, false, 70, 98]);
                return t;
            };
            p.label_nPDefense_i = function () {
                var t = new mo.gui.Label();
                this.label_nPDefense = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [16, "0", 0xD1D1B4, false, 70, 74]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "stroke", "text", "touchEnabled", "x", "y"], [20, 1, "冰龙之翼", false, 176, 195]);
                return t;
            };
            p.label_yuanbao_i = function () {
                var t = new mo.gui.Label();
                this.label_yuanbao = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["楷体", 18, "0", "center", 0xDA9F00, false, 90, 170, 1]);
                return t;
            };
            p.pb_exp_i = function () {
                var t = new egret.gui.ProgressBar();
                this.pb_exp = t;
                this.__s(t, ["skinName", "touchEnabled", "width", "x", "y"], [skins.comp.Bar_Exp_Skin, false, 315, 18, 188]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["star_3", "ico_star", 30, 30]);
                return t;
            };
            RoleWingSkin._skinParts = ["btn_close", "img_wing", "label_lvl", "label_name", "pb_exp", "grp_star_light", "label_cAttack", "label_cHp", "label_cPDefense", "label_cMDefense", "label_nAttack", "label_nHp", "label_nPDefense", "label_nMDefense", "grp_next", "btn_help", "ico_costAuto", "label_costAuto", "btn_stopAuto", "label_cost_gold2", "grp_costDescAuto", "grp_stop", "label_cost_gold", "label_cost_gold0", "label_cost_yuanbao", "btn_highAuto", "btn_normalAuto", "btn_normal", "btn_high", "btn_checkAuto", "btn_keyUpgrade", "grp_fos", "grp_train", "btn_active", "btn_evolution", "efx_btn", "efx_evo1", "efx_evo2", "efx_hit1", "efx_hit2", "label_feather", "label_yuanbao", "label_gold", "grp_res", "ico_str"];
            return RoleWingSkin;
        })(egret.gui.Skin);
        game.RoleWingSkin = RoleWingSkin;
        egret.registerClass(RoleWingSkin,"skins.game.RoleWingSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
