var skins;
(function (skins) {
    var game;
    (function (game) {
        var CoffersLayerSkin = (function (_super) {
            __extends(CoffersLayerSkin, _super);
            function CoffersLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.grp_coffers_i(), this.grp_build_i(), this.grp_defence_i(), this.tab_btn_i(), this.btn_close_i(), this.btn_help_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CoffersLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CoffersLayerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 193]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__9_i(), this.label_coffer_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "当前等级可得红利：", 0xE8C160, 0, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 93, 41]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 430]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__12_i(), this.__13_i(), this.label_gold_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "今日掠夺储量：+", 0x0BCB14, 180, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 10, 560]);
                t.layout = this.__17_i();
                t.elementsContent = [this.__16_i(), this.label_rob_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "今日被劫储量：-", 0xFF0004, 0, 0]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 20, 594]);
                t.layout = this.__19_i();
                t.elementsContent = [this.__20_i(), this.label_robed_i()];
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_dengjias", 0, 1]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [2, "bottom"]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 143]);
                t.layout = this.__23_i();
                t.elementsContent = [this.__22_i(), this.label_lv_i()];
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "资源储量：", 0xFFD455, 90, 182]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "守卫生命加成：", 0xFFD455, 90, 218]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "资源储量：", 0xFFD455, 0, 30]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "守卫生命加成：", 0xFFD455, 0, 66]);
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "y"], ["ico_senjihou", 0]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 10, 3]);
                t.layout = this.__30_i();
                t.elementsContent = [this.__29_i(), this.label_nextLv_i()];
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_dangqiandj", 0, 1]);
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 143]);
                t.layout = this.__33_i();
                t.elementsContent = [this.__32_i(), this.label_curLv_i()];
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "建设值：", 0xE8C160, 74, 473]);
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__37_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [0, 78]);
                t.layout = this.__36_i();
                return t;
            };
            p.__38_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "添砖获得：", 0x0BCB14, 119, 100]);
                return t;
            };
            p.__39_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "bg_guokusf", 0, 10, 10]);
                return t;
            };
            p.__40_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [0, 112]);
                t.layout = this.__39_i();
                return t;
            };
            p.__41_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 213, 129]);
                return t;
            };
            p.__42_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "VIP", 0xFFFFFF, 0, 0]);
                return t;
            };
            p.__43_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "今日剩余次数：", 0xFFFFFF, 56, 0]);
                return t;
            };
            p.__44_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__45_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [119, 69]);
                t.layout = this.__44_i();
                t.elementsContent = [this.__42_i(), this.label_vip_i(), this.__43_i(), this.label_leftCount_i()];
                return t;
            };
            p.__46_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_qinglong", 0, 40]);
                return t;
            };
            p.__47_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "source", "y"], [0, 0, "ico_hongdietsg", 207]);
                return t;
            };
            p.__48_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [68, "avatar_bg", 68, 50, 88]);
                return t;
            };
            p.__49_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [14, "战斗力：", 0xE8C160, 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__50_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__51_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 10, 219]);
                t.layout = this.__50_i();
                t.elementsContent = [this.__49_i(), this.label_combat0_i()];
                return t;
            };
            p.__52_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_baihus", 0, 40]);
                return t;
            };
            p.__53_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "source", "y"], [0, 0, "ico_hongdietsg", 207]);
                return t;
            };
            p.__54_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [68, "avatar_bg", 68, 50, 88]);
                return t;
            };
            p.__55_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__56_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [14, "战斗力：", 0xE8C160, 0, 0]);
                return t;
            };
            p.__57_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 10, 219]);
                t.layout = this.__55_i();
                t.elementsContent = [this.__56_i(), this.label_combat1_i()];
                return t;
            };
            p.__58_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xuanwu", 0, 40]);
                return t;
            };
            p.__59_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "source", "y"], [0, 0, "ico_hongdietsg", 207]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_g_guokutas", 13]);
                return t;
            };
            p.__60_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [68, "avatar_bg", 68, 50, 88]);
                return t;
            };
            p.__61_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__62_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [14, "战斗力：", 0xE8C160, 0, 0]);
                return t;
            };
            p.__63_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 10, 219]);
                t.layout = this.__61_i();
                t.elementsContent = [this.__62_i(), this.label_combat2_i()];
                return t;
            };
            p.__64_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zhuques", 0, 40]);
                return t;
            };
            p.__65_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "source", "y"], [0, 0, "ico_hongdietsg", 207]);
                return t;
            };
            p.__66_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [68, "avatar_bg", 68, 50, 88]);
                return t;
            };
            p.__67_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__68_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [14, "战斗力：", 0xE8C160, 0, 0]);
                return t;
            };
            p.__69_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 10, 219]);
                t.layout = this.__67_i();
                t.elementsContent = [this.__68_i(), this.label_combat3_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_jinbiyuanbaodi", 138]);
                return t;
            };
            p.__70_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "跨服加成", 0xE8C160, 62, 661]);
                return t;
            };
            p.__71_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "（防守战生效）", 0xE8C160, 42, 685]);
                return t;
            };
            p.__72_i = function () {
                var t = {};
                t.label = "tab_txt_guokub";
                return t;
            };
            p.__73_i = function () {
                var t = {};
                t.label = "tab_txt_jianswb";
                return t;
            };
            p.__74_i = function () {
                var t = {};
                t.label = "tab_txt_souweib";
                return t;
            };
            p.__76_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__72_i(), this.__73_i(), this.__74_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "每日0点通过邮件发送，1小时内送达", 0xBDAC86, 472]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_goujkuchulai", 194]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_guokuchuliangsfd", 0, 0]);
                return t;
            };
            p.bar_build_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_build = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Bar_Recharge_Skin, 155, 472]);
                return t;
            };
            p.btn_build_i = function () {
                var t = new egret.gui.Button();
                this.btn_build = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_g_tianzhuan", "按钮", skins.comp.Btn_3_22_Skin, 0]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_defRec_i = function () {
                var t = new egret.gui.Button();
                this.btn_defRec = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_fangshoujiluu", "按钮", skins.comp.Btn_3_24_Skin, 95, 709]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.btn_heroRec_i = function () {
                var t = new egret.gui.Button();
                this.btn_heroRec = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0.5, "btn_txt_g_yinxiongjilu", "按钮", skins.comp.Btn_3_6_Skin, 648]);
                return t;
            };
            p.btn_jili_i = function () {
                var t = new egret.gui.Button();
                this.btn_jili = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_jilibsf", "按钮", skins.comp.Btn_3_24_Skin, 287, 709]);
                return t;
            };
            p.grp_build_i = function () {
                var t = new egret.gui.Group();
                this.grp_build = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible", "x", "y"], [0, 0, 0, 0, false, 10, 10]);
                t.elementsContent = [this.label_curCoffer_i(), this.label_curAddProp_i(), this.__25_i(), this.__26_i(), this.label_maxLevel_i(), this.grp_next_i(), this.__34_i(), this.__35_i(), this.bar_build_i(), this.label_cannotBuild_i(), this.grp_canBuild_i()];
                return t;
            };
            p.grp_canBuild_i = function () {
                var t = new egret.gui.Group();
                this.grp_canBuild = t;
                this.__s(t, ["left", "right", "visible", "y"], [0, 0, false, 552]);
                t.elementsContent = [this.__37_i(), this.btn_build_i(), this.__38_i(), this.label_add2_i(), this.__40_i(), this.__41_i(), this.label_add1_i(), this.__45_i()];
                return t;
            };
            p.grp_coffers_i = function () {
                var t = new egret.gui.Group();
                this.grp_coffers = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.__6_i(), this.__7_i(), this.__8_i(), this.__11_i(), this.__15_i(), this.__18_i(), this.__21_i(), this.__24_i(), this.btn_heroRec_i()];
                return t;
            };
            p.grp_def0_i = function () {
                var t = new egret.gui.Group();
                this.grp_def0 = t;
                this.__s(t, ["height", "width", "x", "y"], [251, 164, 60, 134]);
                t.elementsContent = [this.__46_i(), this.ico_rank0_i(), this.__47_i(), this.__48_i(), this.ico_face0_i(), this.__51_i(), this.label_lv0_i(), this.label_name0_i(), this.ico_medal0_i()];
                return t;
            };
            p.grp_def1_i = function () {
                var t = new egret.gui.Group();
                this.grp_def1 = t;
                this.__s(t, ["height", "width", "x", "y"], [251, 164, 260, 134]);
                t.elementsContent = [this.__52_i(), this.label_lv1_i(), this.label_name1_i(), this.ico_rank1_i(), this.__53_i(), this.__54_i(), this.ico_face1_i(), this.ico_medal1_i(), this.__57_i()];
                return t;
            };
            p.grp_def2_i = function () {
                var t = new egret.gui.Group();
                this.grp_def2 = t;
                this.__s(t, ["height", "width", "x", "y"], [251, 164, 60, 394]);
                t.elementsContent = [this.__58_i(), this.label_lv2_i(), this.label_name2_i(), this.ico_rank2_i(), this.__59_i(), this.__60_i(), this.ico_face2_i(), this.ico_medal2_i(), this.__63_i()];
                return t;
            };
            p.grp_def3_i = function () {
                var t = new egret.gui.Group();
                this.grp_def3 = t;
                this.__s(t, ["height", "width", "x", "y"], [251, 164, 260, 394]);
                t.elementsContent = [this.__64_i(), this.label_lv3_i(), this.label_name3_i(), this.ico_rank3_i(), this.__65_i(), this.__66_i(), this.ico_face3_i(), this.ico_medal3_i(), this.__69_i()];
                return t;
            };
            p.grp_defence_i = function () {
                var t = new egret.gui.Group();
                this.grp_defence = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible", "x", "y"], [0, 0, 0, 0, false, 20, 20]);
                t.elementsContent = [this.grp_def0_i(), this.grp_def1_i(), this.grp_def2_i(), this.grp_def3_i(), this.btn_defRec_i(), this.btn_jili_i(), this.label_addProp_i(), this.__70_i(), this.label_addProp1_i(), this.__71_i()];
                return t;
            };
            p.grp_next_i = function () {
                var t = new egret.gui.Group();
                this.grp_next = t;
                this.__s(t, ["x", "y"], [90, 273]);
                t.elementsContent = [this.label_nextCoffer_i(), this.label_nextAddProp_i(), this.__27_i(), this.__28_i(), this.__31_i()];
                return t;
            };
            p.ico_face0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_face0 = t;
                this.__s(t, ["source", "x", "y"], ["avatar_1_1_0", 56, 94]);
                return t;
            };
            p.ico_face1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_face1 = t;
                this.__s(t, ["source", "x", "y"], ["avatar_1_1_0", 56, 94]);
                return t;
            };
            p.ico_face2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_face2 = t;
                this.__s(t, ["source", "x", "y"], ["avatar_1_1_0", 56, 94]);
                return t;
            };
            p.ico_face3_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_face3 = t;
                this.__s(t, ["source", "x", "y"], ["avatar_1_1_0", 56, 94]);
                return t;
            };
            p.ico_medal0_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medal0 = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "x", "y"], [0.4000000000000057, 0.8, 0.8, 10, -9]);
                return t;
            };
            p.ico_medal1_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medal1 = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "x", "y"], [0.4000000000000057, 0.8, 0.8, 20, -9]);
                return t;
            };
            p.ico_medal2_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medal2 = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "x", "y"], [0.4000000000000057, 0.8, 0.8, 30, -9]);
                return t;
            };
            p.ico_medal3_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medal3 = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "x", "y"], [0.4000000000000057, 0.8, 0.8, 40, -9]);
                return t;
            };
            p.ico_rank0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank0 = t;
                this.__s(t, ["source", "x", "y"], ["ico_jigjidasii", 5, 29]);
                return t;
            };
            p.ico_rank1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank1 = t;
                this.__s(t, ["source", "x", "y"], ["ico_jigjidasii", 5, 29]);
                return t;
            };
            p.ico_rank2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank2 = t;
                this.__s(t, ["source", "x", "y"], ["ico_jigjidasii", 5, 29]);
                return t;
            };
            p.ico_rank3_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank3 = t;
                this.__s(t, ["source", "x", "y"], ["ico_jigjidasii", 5, 29]);
                return t;
            };
            p.label_add1_i = function () {
                var t = new egret.gui.Label();
                this.label_add1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "1000", 0x0BCB14, 239, 130]);
                return t;
            };
            p.label_add2_i = function () {
                var t = new egret.gui.Label();
                this.label_add2 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "建设值+123456", 0x0BCB14, 211, 100]);
                return t;
            };
            p.label_addProp1_i = function () {
                var t = new egret.gui.Label();
                this.label_addProp1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "守卫攻击+%s%(激励加成)", 0x0BCB14, 182, 683]);
                return t;
            };
            p.label_addProp_i = function () {
                var t = new egret.gui.Label();
                this.label_addProp = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "守卫生命+%s%(国库加成)", 0x0BCB14, 182, 663]);
                return t;
            };
            p.label_cannotBuild_i = function () {
                var t = new egret.gui.Label();
                this.label_cannotBuild = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "今日添砖已达上限", 0xF30622, 630]);
                return t;
            };
            p.label_coffer_i = function () {
                var t = new egret.gui.Label();
                this.label_coffer = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [24, "2222万", 0xF6F6F6, 131, 6]);
                return t;
            };
            p.label_combat0_i = function () {
                var t = new egret.gui.Label();
                this.label_combat0 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "123", 0xE1AC00, 50, 0]);
                return t;
            };
            p.label_combat1_i = function () {
                var t = new egret.gui.Label();
                this.label_combat1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "123", 0xE1AC00, 50, 0]);
                return t;
            };
            p.label_combat2_i = function () {
                var t = new egret.gui.Label();
                this.label_combat2 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "123", 0xE1AC00, 50, 0]);
                return t;
            };
            p.label_combat3_i = function () {
                var t = new egret.gui.Label();
                this.label_combat3 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "123", 0xE1AC00, 50, 0]);
                return t;
            };
            p.label_curAddProp_i = function () {
                var t = new egret.gui.Label();
                this.label_curAddProp = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "10%", "right", 0xF6F6F6, 179, 208, 218]);
                return t;
            };
            p.label_curCoffer_i = function () {
                var t = new egret.gui.Label();
                this.label_curCoffer = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "2222万", "right", 0xF6F6F6, 179, 208, 182]);
                return t;
            };
            p.label_curLv_i = function () {
                var t = new egret.gui.Label();
                this.label_curLv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [24, "1级", 0xEAB23A, 133, 3]);
                return t;
            };
            p.label_gold_i = function () {
                var t = new egret.gui.Label();
                this.label_gold = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "2000", 0xE8C160, 180, 0]);
                return t;
            };
            p.label_leftCount_i = function () {
                var t = new egret.gui.Label();
                this.label_leftCount = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "0/10", 0xFFFFFF, 173, 0]);
                return t;
            };
            p.label_lv0_i = function () {
                var t = new egret.gui.Label();
                this.label_lv0 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [14, "Lv.149", 0xE8C160, 102, 156]);
                return t;
            };
            p.label_lv1_i = function () {
                var t = new egret.gui.Label();
                this.label_lv1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [14, "Lv.149", 0xE8C160, 102, 156]);
                return t;
            };
            p.label_lv2_i = function () {
                var t = new egret.gui.Label();
                this.label_lv2 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [14, "Lv.149", 0xE8C160, 102, 156]);
                return t;
            };
            p.label_lv3_i = function () {
                var t = new egret.gui.Label();
                this.label_lv3 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [14, "Lv.149", 0xE8C160, 102, 156]);
                return t;
            };
            p.label_lv_i = function () {
                var t = new egret.gui.Label();
                this.label_lv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [24, "1级", 0xEAB23A, 72, 0]);
                return t;
            };
            p.label_maxLevel_i = function () {
                var t = new egret.gui.Label();
                this.label_maxLevel = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [1, 20, "国库已达当前最高等级", 0xF30622, 10, 307]);
                return t;
            };
            p.label_name0_i = function () {
                var t = new egret.gui.Label();
                this.label_name0 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 14, "名字六个字啊", 0xE8C160, 192]);
                return t;
            };
            p.label_name1_i = function () {
                var t = new egret.gui.Label();
                this.label_name1 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 14, "名字六个字啊", 0xE8C160, 192]);
                return t;
            };
            p.label_name2_i = function () {
                var t = new egret.gui.Label();
                this.label_name2 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 14, "名字六个字啊", 0xE8C160, 10, 192]);
                return t;
            };
            p.label_name3_i = function () {
                var t = new egret.gui.Label();
                this.label_name3 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 14, "名字六个字啊", 0xE8C160, 10, 192]);
                return t;
            };
            p.label_nextAddProp_i = function () {
                var t = new egret.gui.Label();
                this.label_nextAddProp = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "10%", "right", 0xF6F6F6, 179, 118, 66]);
                return t;
            };
            p.label_nextCoffer_i = function () {
                var t = new egret.gui.Label();
                this.label_nextCoffer = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "2222万", "right", 0xF6F6F6, 179, 118, 30]);
                return t;
            };
            p.label_nextLv_i = function () {
                var t = new egret.gui.Label();
                this.label_nextLv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [24, "1级", 0xEAB23A, 138, 3]);
                return t;
            };
            p.label_rob_i = function () {
                var t = new egret.gui.Label();
                this.label_rob = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "2000", 0x0BCB14, 202, 10]);
                return t;
            };
            p.label_robed_i = function () {
                var t = new egret.gui.Label();
                this.label_robed = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "2000", 0xFF0004, 180, 0]);
                return t;
            };
            p.label_vip_i = function () {
                var t = new egret.gui.Label();
                this.label_vip = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "0", 0xFFFFFF, 36, 0]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.tab_btn_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_btn = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "y"], [46, 0, skins.comp.TabBar_6_Skin, 71]);
                t.dataProvider = this.__76_i();
                return t;
            };
            CoffersLayerSkin._skinParts = ["label_coffer", "label_gold", "label_rob", "label_robed", "label_lv", "btn_heroRec", "grp_coffers", "label_curCoffer", "label_curAddProp", "label_maxLevel", "label_nextCoffer", "label_nextAddProp", "label_nextLv", "grp_next", "label_curLv", "bar_build", "label_cannotBuild", "btn_build", "label_add2", "label_add1", "label_vip", "label_leftCount", "grp_canBuild", "grp_build", "ico_rank0", "ico_face0", "label_combat0", "label_lv0", "label_name0", "ico_medal0", "grp_def0", "label_lv1", "label_name1", "ico_rank1", "ico_face1", "ico_medal1", "label_combat1", "grp_def1", "label_lv2", "label_name2", "ico_rank2", "ico_face2", "ico_medal2", "label_combat2", "grp_def2", "label_lv3", "label_name3", "ico_rank3", "ico_face3", "ico_medal3", "label_combat3", "grp_def3", "btn_defRec", "btn_jili", "label_addProp", "label_addProp1", "grp_defence", "tab_btn", "btn_close", "btn_help"];
            return CoffersLayerSkin;
        })(egret.gui.Skin);
        game.CoffersLayerSkin = CoffersLayerSkin;
        egret.registerClass(CoffersLayerSkin,"skins.game.CoffersLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
