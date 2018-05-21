var skins;
(function (skins) {
    var game;
    (function (game) {
        var RoleWingStrSkin = (function (_super) {
            __extends(RoleWingStrSkin, _super);
            function RoleWingStrSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.ico_selLeft_i(), this.ico_selRight_i(), this.btn_close_i(), this.__5_i(), this.__6_i(), this.label_name_i(), this.label_lvLeft_i(), this.label_wingName_i(), this.label_curProp1_i(), this.label_curLv_i(), this.label_curProp2_i(), this.grp_next_i(), this.label_lvRight_i(), this.btn_help_i(), this.label_maxLv_i(), this.label_needWingLv_i(), this.grp_lvUp_i(), this.__12_i(), this.grp_res_i(), this.grp_result_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RoleWingStrSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RoleWingStrSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "y"], ["楷体", 0, 18, "成功有几率暴击，失败有几率降级", "center", 0xDA9F00, false, 706]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_feather", 129, 1]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["yuanbao_round_bg", false, 170, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 0, 1]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["yuanbao_round_bg", false, 30, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_cibangqianghua", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_cibangqianghua", 9]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "touchEnabled", "y"], [0, "panel_wing_1", false, 188]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_qianghuaxxji", 5, 398]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_qianghuaxxji_1", 0, 6]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "touchEnabled", "x", "y"], [18, 1, "强化消耗:", false, 0, 2]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_feather", 0, 1]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                t.setStyle("size", 20);
                t.setStyle("textColor", 0xD1D1B4);
                this.__s(t, ["source", "x", "y"], ["btn_back", 409, 109]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 109]);
                return t;
            };
            p.btn_str_i = function () {
                var t = new egret.gui.Button();
                this.btn_str = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_qiamghuasf", skins.comp.Btn_3_26_Skin, 72]);
                return t;
            };
            p.btn_useYB_i = function () {
                var t = new egret.gui.CheckBox();
                this.btn_useYB = t;
                this.__s(t, ["horizontalCenter", "label", "skinName", "x", "y"], [1, "羽毛不足时，每根羽毛用5元宝代替", skins.comp.CheckBox2Skin, 10, 41]);
                return t;
            };
            p.effect_crit_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_crit = t;
                this.__s(t, ["effectId", "x", "y"], [47, 228, 433]);
                return t;
            };
            p.effect_downLv_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_downLv = t;
                this.__s(t, ["effectId", "x", "y"], [48, 240, 433]);
                return t;
            };
            p.effect_fail_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_fail = t;
                this.__s(t, ["effectId", "x", "y"], [46, 237, 395]);
                return t;
            };
            p.effect_win_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_win = t;
                this.__s(t, ["effectId", "x", "y"], [45, 237, 395]);
                return t;
            };
            p.grp_costParent_i = function () {
                var t = new egret.gui.Group();
                this.grp_costParent = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 0]);
                t.layout = this.__11_i();
                t.elementsContent = [this.__8_i(), this.grp_cost_i(), this.grp_costYB_i()];
                return t;
            };
            p.grp_costYB_i = function () {
                var t = new egret.gui.Group();
                this.grp_costYB = t;
                this.__s(t, ["x", "y"], [93, 10]);
                t.elementsContent = [this.__10_i(), this.label_costYB_i()];
                return t;
            };
            p.grp_cost_i = function () {
                var t = new egret.gui.Group();
                this.grp_cost = t;
                this.__s(t, ["x", "y"], [83, 0]);
                t.elementsContent = [this.__9_i(), this.label_cost_i()];
                return t;
            };
            p.grp_lvUp_i = function () {
                var t = new egret.gui.Group();
                this.grp_lvUp = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 584]);
                t.elementsContent = [this.btn_useYB_i(), this.grp_costParent_i(), this.btn_str_i()];
                return t;
            };
            p.grp_next_i = function () {
                var t = new egret.gui.Group();
                this.grp_next = t;
                this.__s(t, ["x", "y"], [5, 474]);
                t.elementsContent = [this.__7_i(), this.label_nextLv_i(), this.label_nextProp1_i(), this.label_nextProp2_i()];
                return t;
            };
            p.grp_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_res = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 752]);
                t.elementsContent = [this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.label_feather_i(), this.label_yuanbao_i()];
                return t;
            };
            p.grp_result_i = function () {
                var t = new egret.gui.Group();
                this.grp_result = t;
                this.__s(t, ["height", "width", "x", "y"], [800, 480, 0, 0]);
                t.elementsContent = [this.effect_win_i(), this.effect_fail_i(), this.effect_crit_i(), this.effect_downLv_i()];
                return t;
            };
            p.ico_selLeft_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_selLeft = t;
                this.__s(t, ["source", "x", "y"], ["ico_zuoyixuanzong", 20, 218]);
                return t;
            };
            p.ico_selRight_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_selRight = t;
                this.__s(t, ["source", "x", "y"], ["ico_youyixuanzong", 256, 218]);
                return t;
            };
            p.label_costYB_i = function () {
                var t = new mo.gui.Label();
                this.label_costYB = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [18, "1", "left", 0xFFFFFF, 34, 0]);
                return t;
            };
            p.label_cost_i = function () {
                var t = new mo.gui.Label();
                this.label_cost = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [18, "1", "left", 0xFFFFFF, 34, 0]);
                return t;
            };
            p.label_curLv_i = function () {
                var t = new egret.gui.Label();
                this.label_curLv = t;
                this.__s(t, ["size", "stroke", "text", "textAlign", "touchEnabled", "width", "x", "y"], [20, 1, "100", "center", false, 53, 118, 405]);
                return t;
            };
            p.label_curProp1_i = function () {
                var t = new egret.gui.Label();
                this.label_curProp1 = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "touchEnabled", "x", "y"], [18, 1, "翅膀攻击：+10%(10000)", 0x00FF00, false, 26, 434]);
                return t;
            };
            p.label_curProp2_i = function () {
                var t = new egret.gui.Label();
                this.label_curProp2 = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "touchEnabled", "x", "y"], [18, 1, "翅膀攻击：+10%(10000)", 0x00FF00, false, 258, 434]);
                return t;
            };
            p.label_feather_i = function () {
                var t = new mo.gui.Label();
                this.label_feather = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["楷体", 18, "0", "center", 0xDA9F00, false, 90, 171, 1]);
                return t;
            };
            p.label_lvLeft_i = function () {
                var t = new egret.gui.Label();
                this.label_lvLeft = t;
                this.__s(t, ["size", "stroke", "text", "textAlign", "touchEnabled", "width", "x", "y"], [18, 1, "左翼Lv.999", "center", false, 152, 64, 343]);
                return t;
            };
            p.label_lvRight_i = function () {
                var t = new egret.gui.Label();
                this.label_lvRight = t;
                this.__s(t, ["size", "stroke", "text", "textAlign", "touchEnabled", "width", "x", "y"], [18, 1, "右翼Lv.999", "center", false, 154, 266, 343]);
                return t;
            };
            p.label_maxLv_i = function () {
                var t = new egret.gui.Label();
                this.label_maxLv = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "textColor", "touchEnabled", "y"], [0, 22, 1, "强化已达最高等级", 0xFAE7C7, false, 653]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "touchEnabled", "y"], [0, 20, 1, "冰龙之翼", false, 195]);
                return t;
            };
            p.label_needWingLv_i = function () {
                var t = new egret.gui.Label();
                this.label_needWingLv = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "textColor", "touchEnabled", "x", "y"], [0, 22, 1, "翅膀到达%s阶后可继续强化", 0xFAE7C7, false, 10, 653]);
                return t;
            };
            p.label_nextLv_i = function () {
                var t = new egret.gui.Label();
                this.label_nextLv = t;
                this.__s(t, ["size", "stroke", "text", "textAlign", "touchEnabled", "width", "x", "y"], [20, 1, "100", "center", false, 58, 109, 13]);
                return t;
            };
            p.label_nextProp1_i = function () {
                var t = new egret.gui.Label();
                this.label_nextProp1 = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "touchEnabled", "x", "y"], [18, 1, "翅膀攻击：+10%(10000)", 0x00FF00, false, 21, 42]);
                return t;
            };
            p.label_nextProp2_i = function () {
                var t = new egret.gui.Label();
                this.label_nextProp2 = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "touchEnabled", "x", "y"], [18, 1, "翅膀攻击：+10%(10000)", 0x00FF00, false, 253, 42]);
                return t;
            };
            p.label_wingName_i = function () {
                var t = new egret.gui.Label();
                this.label_wingName = t;
                this.__s(t, ["size", "stroke", "text", "textAlign", "touchEnabled", "width", "x", "y"], [18, 1, "左翼", "center", false, 109, 184, 376]);
                return t;
            };
            p.label_yuanbao_i = function () {
                var t = new mo.gui.Label();
                this.label_yuanbao = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["楷体", 18, "0", "center", 0xDA9F00, false, 90, 32, 1]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 0, 1]);
                return t;
            };
            RoleWingStrSkin._skinParts = ["ico_selLeft", "ico_selRight", "btn_close", "label_name", "label_lvLeft", "label_wingName", "label_curProp1", "label_curLv", "label_curProp2", "label_nextLv", "label_nextProp1", "label_nextProp2", "grp_next", "label_lvRight", "btn_help", "label_maxLv", "label_needWingLv", "btn_useYB", "label_cost", "grp_cost", "label_costYB", "grp_costYB", "grp_costParent", "btn_str", "grp_lvUp", "label_feather", "label_yuanbao", "grp_res", "effect_win", "effect_fail", "effect_crit", "effect_downLv", "grp_result"];
            return RoleWingStrSkin;
        })(egret.gui.Skin);
        game.RoleWingStrSkin = RoleWingStrSkin;
        egret.registerClass(RoleWingStrSkin,"skins.game.RoleWingStrSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
