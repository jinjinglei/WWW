var skins;
(function (skins) {
    var game;
    (function (game) {
        var HeartDetailSkin = (function (_super) {
            __extends(HeartDetailSkin, _super);
            function HeartDetailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.ico_title_i(), this.btn_close_i(), this.btn_help_i(), this.ico_heart_bg_i(), this.grp_ceng_i(), this.grp_1000_i(), this.grp_2000_i(), this.grp_3000_i(), this.grp_add_i(), this.grp_prop_i(), this.tab_btn_i(), this.effect_point_i(), this.effect_win_i(), this.effect_fail_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=HeartDetailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return HeartDetailSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 196, 192]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 287, 194]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 169, 244]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 207, 285]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 264, 291]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 43, 195]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 119, 142]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 149, 202]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 196, 150]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 282, 102]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 336, 95]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 313, 155]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 301, 238]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 202, 250]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 249, 181]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 97, 78]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 164, 82]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 157, 149]);
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 211, 192]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 239, 98]);
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 280, 140]);
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 291, 256]);
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 254, 314]);
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 216, 258]);
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 145, 295]);
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [1, "ico_xinfadituai", 510]);
                return t;
            };
            p.__37_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bengcijiadian", 186, 8]);
                return t;
            };
            p.__38_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "加点消耗：", 0xDE952F, 116, 128]);
                return t;
            };
            p.__39_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "（加点有几率失败）", 0xFFFFFF, 265, 46]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            p.__40_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__41_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "真气", 0xFFFFFF, 0, 0]);
                return t;
            };
            p.__42_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [244, 127]);
                t.layout = this.__40_i();
                t.elementsContent = [this.__41_i(), this.label_itemNumCost0_i()];
                return t;
            };
            p.__43_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__44_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "金币", 0xFFFFFF, 0, 0]);
                return t;
            };
            p.__45_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [244, 160]);
                t.layout = this.__43_i();
                t.elementsContent = [this.__44_i(), this.label_itemNumCost1_i()];
                return t;
            };
            p.__46_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 212, 160]);
                return t;
            };
            p.__47_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__48_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "真气", 0xFFFFFF, 0, 0]);
                return t;
            };
            p.__49_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [94, 757]);
                t.layout = this.__47_i();
                t.elementsContent = [this.__48_i(), this.label_itemNum0_i()];
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__50_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 251, 755]);
                return t;
            };
            p.__51_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__52_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "金币", 0xFFFFFF, 0, 0]);
                return t;
            };
            p.__53_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [283, 755]);
                t.layout = this.__51_i();
                t.elementsContent = [this.__52_i(), this.label_itemNum1_i()];
                return t;
            };
            p.__54_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_xinfaditul", 468]);
                return t;
            };
            p.__55_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 18, "永久为角色增加属性！", 0xDE952F, 486]);
                return t;
            };
            p.__56_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 54, 654]);
                return t;
            };
            p.__57_i = function () {
                var t = {};
                t.label = "tab_txt_xingfans";
                return t;
            };
            p.__58_i = function () {
                var t = {};
                t.label = "tab_txt_jiadians";
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__60_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__57_i(), this.__58_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 129, 88]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 214, 54]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 285, 107]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 240, 142]);
                return t;
            };
            p.btn_add_i = function () {
                var t = new egret.gui.Button();
                this.btn_add = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_jiadian", skins.comp.Btn_3_24_Skin, 299, 224]);
                return t;
            };
            p.btn_autoAdd_i = function () {
                var t = new egret.gui.Button();
                this.btn_autoAdd = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_zidongjiadian", skins.comp.Btn_3_24_Skin, 93, 224]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 412, -9]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", -2, -8]);
                return t;
            };
            p.btn_stopAuto_i = function () {
                var t = new egret.gui.Button();
                this.btn_stopAuto = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_tinzijiadian", skins.comp.Btn_3_24_Skin, 196, 224]);
                return t;
            };
            p.effect_fail_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_fail = t;
                this.__s(t, ["effectId", "x", "y"], [61, 240, 362]);
                return t;
            };
            p.effect_point_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_point = t;
                this.__s(t, ["autoPlay", "effectId", "x", "y"], [true, 59, 110, 232]);
                return t;
            };
            p.effect_win_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_win = t;
                this.__s(t, ["effectId", "x", "y"], [60, 240, 362]);
                return t;
            };
            p.grp_1000_i = function () {
                var t = new egret.gui.Group();
                this.grp_1000 = t;
                this.__s(t, ["height", "width", "x", "y"], [416, 450, 19, 109]);
                t.elementsContent = [this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i()];
                return t;
            };
            p.grp_2000_i = function () {
                var t = new egret.gui.Group();
                this.grp_2000 = t;
                this.__s(t, ["height", "visible", "width", "x", "y"], [416, false, 450, 19, 109]);
                t.elementsContent = [this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.__22_i(), this.__23_i(), this.__24_i(), this.__25_i()];
                return t;
            };
            p.grp_3000_i = function () {
                var t = new egret.gui.Group();
                this.grp_3000 = t;
                this.__s(t, ["height", "visible", "width", "x", "y"], [416, false, 450, 19, 109]);
                t.elementsContent = [this.__26_i(), this.__27_i(), this.__28_i(), this.__29_i(), this.__30_i(), this.__31_i(), this.__32_i(), this.__33_i(), this.__34_i(), this.__35_i()];
                return t;
            };
            p.grp_add_i = function () {
                var t = new egret.gui.Group();
                this.grp_add = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.__36_i(), this.label_maxLevel_i(), this.grp_canAdd_i(), this.ico_item0_i(), this.__49_i(), this.__50_i(), this.__53_i()];
                return t;
            };
            p.grp_canAdd_i = function () {
                var t = new egret.gui.Group();
                this.grp_canAdd = t;
                this.__s(t, ["height", "left", "right", "y"], [356, 0, 0, 441]);
                t.elementsContent = [this.btn_autoAdd_i(), this.label_auto_i(), this.btn_stopAuto_i(), this.btn_add_i(), this.__37_i(), this.label_addProp_i(), this.__38_i(), this.label_addValue_i(), this.__39_i(), this.ico_itemCost0_i(), this.__42_i(), this.__45_i(), this.__46_i()];
                return t;
            };
            p.grp_ceng_i = function () {
                var t = new egret.gui.Group();
                this.grp_ceng = t;
                this.__s(t, ["x", "y"], [54, 200]);
                t.layout = this.__5_i();
                t.elementsContent = [this.ico_ceng0_i(), this.ico_ceng1_i(), this.ico_ceng2_i(), this.ico_ceng3_i()];
                return t;
            };
            p.grp_prop_i = function () {
                var t = new egret.gui.Group();
                this.grp_prop = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.__54_i(), this.__55_i(), this.label_skillName_i(), this.label_propL_i(), this.label_propR_i(), this.label_skillDesc_i(), this.__56_i(), this.ico_skill_i()];
                return t;
            };
            p.ico_ceng0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_ceng0 = t;
                this.__s(t, ["source", "x", "y"], ["txt_hz_10", 5, 0]);
                return t;
            };
            p.ico_ceng1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_ceng1 = t;
                this.__s(t, ["source", "x", "y"], ["txt_hz_10", 5, 0]);
                return t;
            };
            p.ico_ceng2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_ceng2 = t;
                this.__s(t, ["source", "x", "y"], ["txt_hz_10", 5, 0]);
                return t;
            };
            p.ico_ceng3_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_ceng3 = t;
                this.__s(t, ["source", "x", "y"], ["ico_congg", 0, 0]);
                return t;
            };
            p.ico_heart_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_heart_bg = t;
                this.__s(t, ["source", "x", "y"], ["heart_bg_1000", 19, 109]);
                return t;
            };
            p.ico_item0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item0 = t;
                this.__s(t, ["height", "width", "x", "y"], [46, 46, 57, 746]);
                return t;
            };
            p.ico_itemCost0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_itemCost0 = t;
                this.__s(t, ["height", "width", "x", "y"], [46, 46, 201, 116]);
                return t;
            };
            p.ico_skill_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_skill = t;
                this.__s(t, ["height", "width", "x", "y"], [64, 64, 58, 659]);
                return t;
            };
            p.ico_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_g_xinfasgong", 11]);
                return t;
            };
            p.label_addProp_i = function () {
                var t = new egret.gui.Label();
                this.label_addProp = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "攻击：", 0x24B70E, 98, 46]);
                return t;
            };
            p.label_addValue_i = function () {
                var t = new egret.gui.Label();
                this.label_addValue = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "+10000", 0x24B70E, 148, 46]);
                return t;
            };
            p.label_auto_i = function () {
                var t = new egret.gui.Label();
                this.label_auto = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [14, "加满本层后自动停止", 0xFFFFFF, 78, 263]);
                return t;
            };
            p.label_itemNum0_i = function () {
                var t = new egret.gui.Label();
                this.label_itemNum0 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xFFFFFF, 95, 0]);
                return t;
            };
            p.label_itemNum1_i = function () {
                var t = new egret.gui.Label();
                this.label_itemNum1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xFFFFFF, 95, 0]);
                return t;
            };
            p.label_itemNumCost0_i = function () {
                var t = new egret.gui.Label();
                this.label_itemNumCost0 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xFFFFFF, 95, 0]);
                return t;
            };
            p.label_itemNumCost1_i = function () {
                var t = new egret.gui.Label();
                this.label_itemNumCost1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xFFFFFF, 95, 0]);
                return t;
            };
            p.label_maxLevel_i = function () {
                var t = new egret.gui.Label();
                this.label_maxLevel = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "本心法已升至最高层", 0xE90000, 602]);
                return t;
            };
            p.label_propL_i = function () {
                var t = new mo.gui.Label();
                this.label_propL = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textColor", "width", "x", "y"], [115, 10, 18, "命中：\n命中：\n命中：\n命中：", 0xFFFFFF, 189, 66, 513]);
                return t;
            };
            p.label_propR_i = function () {
                var t = new mo.gui.Label();
                this.label_propR = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textColor", "width", "x", "y"], [115, 10, 18, "命中：\n命中：\n命中：\n命中：", 0xFFFFFF, 189, 256, 513]);
                return t;
            };
            p.label_skillDesc_i = function () {
                var t = new egret.gui.Label();
                this.label_skillDesc = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textColor", "width", "x", "y"], [65, 10, 14, "技能描述", 0xFFFFFF, 301, 130, 659]);
                return t;
            };
            p.label_skillName_i = function () {
                var t = new mo.gui.Label();
                this.label_skillName = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 18, "%s（%s层）", 0xDE952F, 10, 627]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_diangs", 149, 170]);
                return t;
            };
            p.tab_btn_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_btn = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "skinName", "x", "y"], [46, -105, skins.comp.TabBarBtn_1_Skin, skins.comp.TabBar_0_Skin, 10, 78]);
                t.dataProvider = this.__60_i();
                return t;
            };
            HeartDetailSkin._skinParts = ["ico_title", "btn_close", "btn_help", "ico_heart_bg", "ico_ceng0", "ico_ceng1", "ico_ceng2", "ico_ceng3", "grp_ceng", "grp_1000", "grp_2000", "grp_3000", "label_maxLevel", "btn_autoAdd", "label_auto", "btn_stopAuto", "btn_add", "label_addProp", "label_addValue", "ico_itemCost0", "label_itemNumCost0", "label_itemNumCost1", "grp_canAdd", "ico_item0", "label_itemNum0", "label_itemNum1", "grp_add", "label_skillName", "label_propL", "label_propR", "label_skillDesc", "ico_skill", "grp_prop", "tab_btn", "effect_point", "effect_win", "effect_fail"];
            return HeartDetailSkin;
        })(egret.gui.Skin);
        game.HeartDetailSkin = HeartDetailSkin;
        egret.registerClass(HeartDetailSkin,"skins.game.HeartDetailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
