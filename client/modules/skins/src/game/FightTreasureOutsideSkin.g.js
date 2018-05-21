var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightTreasureOutsideSkin = (function (_super) {
            __extends(FightTreasureOutsideSkin, _super);
            function FightTreasureOutsideSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_p_search_i(), this.__4_i(), this.label_search_count_i(), this.__8_i(), this.__9_i(), this.__42_i(), this.grp_searching_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightTreasureOutsideSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightTreasureOutsideSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["avatar_bg", 14, 18]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "visible", "x", "y"], ["ntc_vip_1", false, 0, 1]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 31]);
                t.layout = this.__13_i();
                t.elementsContent = [this.label_name0_i(), this.label_lv0_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width"], [120, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 407]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width"], [120, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 407]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalCenter", "width", "x"], [20, "暂无对手 等待寻找", "center", 0xB9B8AF, 0.5, 366, 16]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [10, 10]);
                t.elementsContent = [this.grp_enemy0_i(), this.grp_searching0_i(), this.grp_no_enemy0_i()];
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x"], [120, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 407, 0]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["avatar_bg", 14, 18]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_vip_1", 0, 1]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 31]);
                t.layout = this.__24_i();
                t.elementsContent = [this.label_name1_i(), this.label_lv1_i()];
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width"], [120, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 407]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width"], [120, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 407]);
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalCenter", "width", "x"], [20, "暂无对手 等待寻找", "center", 0xB9B8AF, 0.5, 366, 16]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [20, 20]);
                t.elementsContent = [this.grp_enemy1_i(), this.grp_searching1_i(), this.grp_no_enemy1_i()];
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x"], [120, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 407, 0]);
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["avatar_bg", 14, 18]);
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_vip_1", 0, 1]);
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [100, 31]);
                t.layout = this.__34_i();
                t.elementsContent = [this.label_name2_i(), this.label_lv2_i()];
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
                return t;
            };
            p.__37_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width"], [120, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 407]);
                return t;
            };
            p.__38_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width"], [120, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 407]);
                return t;
            };
            p.__39_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalCenter", "width", "x"], [20, "暂无对手 等待寻找", "center", 0xB9B8AF, 0.5, 366, 16]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top", "x", "y"], [499, 25, 23, egret.gui.getScale9Grid("151,31,23,32"), "panel_recharge_bg_1", 159, 10, 10]);
                return t;
            };
            p.__40_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [0, 0]);
                t.elementsContent = [this.grp_enemy2_i(), this.grp_searching2_i(), this.grp_no_enemy2_i()];
                return t;
            };
            p.__41_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 8;
                return t;
            };
            p.__42_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [394, 415, 38, 319]);
                t.layout = this.__41_i();
                t.elementsContent = [this.__20_i(), this.__30_i(), this.__40_i()];
                return t;
            };
            p.__43_i = function () {
                var t = new egret.gui.Rect();
                t.setStyle("textColor", 0x000000);
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "top"], [0, 0.54, 0x000000, 0, 0, 0]);
                return t;
            };
            p.__44_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textColor", "verticalAlign", "y"], ["黑体", 0, 26, "搜索中....", 0xFFFFFF, "middle", 465]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "verticalAlign", "width", "x", "y"], ["黑体", 105, 17, "高级探秘： 使用后刷新对手列表，在刷新时拥有比密探更高的概率，搜索到携带秘宝玩家", 0xCDCDCD, "middle", 188, 42, 176]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "width"], [false, 21, "ico_yuanbao", 25]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [2, "bottom"]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [10, "bottom"]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [110, 206]);
                t.layout = this.__7_i();
                t.elementsContent = [this.grp_cost_i(), this.label_search_refresh_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [404, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 432, 25, 307]);
                return t;
            };
            p.btn_p_search_i = function () {
                var t = new egret.gui.Button();
                this.btn_p_search = t;
                this.__s(t, ["icon", "label", "skinName", "width", "x", "y"], ["txt_btn_pk_search", "按钮", skins.comp.Btn_3_6_Skin, 156, 275, 236]);
                return t;
            };
            p.btn_search0_i = function () {
                var t = new egret.gui.Button();
                this.btn_search0 = t;
                this.__s(t, ["icon", "scaleX", "skinName", "width", "x", "y"], ["txt_btn_search", 0.9, skins.comp.Btn_3_4_Skin, 126, 281, 43]);
                return t;
            };
            p.btn_search1_i = function () {
                var t = new egret.gui.Button();
                this.btn_search1 = t;
                this.__s(t, ["icon", "scaleX", "skinName", "width", "x", "y"], ["txt_btn_search", 0.9, skins.comp.Btn_3_4_Skin, 126, 281, 43]);
                return t;
            };
            p.btn_search2_i = function () {
                var t = new egret.gui.Button();
                this.btn_search2 = t;
                this.__s(t, ["icon", "scaleX", "skinName", "width", "x", "y"], ["txt_btn_search", 0.9, skins.comp.Btn_3_4_Skin, 126, 281, 43]);
                return t;
            };
            p.grp_cost_i = function () {
                var t = new egret.gui.Group();
                this.grp_cost = t;
                this.__s(t, ["x", "y"], [275, 211]);
                t.layout = this.__6_i();
                t.elementsContent = [this.__5_i(), this.label_cost_i()];
                return t;
            };
            p.grp_enemy0_i = function () {
                var t = new egret.gui.Group();
                this.grp_enemy0 = t;
                this.__s(t, ["verticalCenter", "visible", "x"], [0, false, 0]);
                t.layout = this.__16_i();
                t.elementsContent = [this.__10_i(), this.__11_i(), this.ico_role0_i(), this.grp_vip0_i(), this.grp_name_container0_i(), this.ico_challenge0_i()];
                return t;
            };
            p.grp_enemy1_i = function () {
                var t = new egret.gui.Group();
                this.grp_enemy1 = t;
                this.__s(t, ["visible", "x", "y"], [false, 0, 0]);
                t.elementsContent = [this.__21_i(), this.__22_i(), this.ico_role1_i(), this.grp_vip1_i(), this.grp_name_container1_i(), this.ico_challenge1_i()];
                return t;
            };
            p.grp_enemy2_i = function () {
                var t = new egret.gui.Group();
                this.grp_enemy2 = t;
                this.__s(t, ["visible", "x", "y"], [false, 0, 0]);
                t.elementsContent = [this.__31_i(), this.__32_i(), this.ico_role2_i(), this.grp_vip2_i(), this.grp_name_container2_i(), this.ico_challenge2_i()];
                return t;
            };
            p.grp_name_container0_i = function () {
                var t = new egret.gui.Group();
                this.grp_name_container0 = t;
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                t.layout = this.__15_i();
                t.elementsContent = [this.__14_i(), this.img_carry_treasure0_i()];
                return t;
            };
            p.grp_name_container1_i = function () {
                var t = new egret.gui.Group();
                this.grp_name_container1 = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                t.layout = this.__26_i();
                t.elementsContent = [this.__25_i(), this.img_carry_treasure1_i()];
                return t;
            };
            p.grp_name_container2_i = function () {
                var t = new egret.gui.Group();
                this.grp_name_container2 = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                t.layout = this.__36_i();
                t.elementsContent = [this.__35_i(), this.img_carry_treasure2_i()];
                return t;
            };
            p.grp_no_enemy0_i = function () {
                var t = new egret.gui.Group();
                this.grp_no_enemy0 = t;
                t.elementsContent = [this.__18_i(), this.__19_i()];
                return t;
            };
            p.grp_no_enemy1_i = function () {
                var t = new egret.gui.Group();
                this.grp_no_enemy1 = t;
                t.elementsContent = [this.__28_i(), this.__29_i()];
                return t;
            };
            p.grp_no_enemy2_i = function () {
                var t = new egret.gui.Group();
                this.grp_no_enemy2 = t;
                t.elementsContent = [this.__38_i(), this.__39_i()];
                return t;
            };
            p.grp_searching0_i = function () {
                var t = new egret.gui.Group();
                this.grp_searching0 = t;
                t.visible = false;
                t.elementsContent = [this.__17_i(), this.label_searching0_i(), this.btn_search0_i()];
                return t;
            };
            p.grp_searching1_i = function () {
                var t = new egret.gui.Group();
                this.grp_searching1 = t;
                t.visible = false;
                t.elementsContent = [this.__27_i(), this.label_searching1_i(), this.btn_search1_i()];
                return t;
            };
            p.grp_searching2_i = function () {
                var t = new egret.gui.Group();
                this.grp_searching2 = t;
                t.visible = false;
                t.elementsContent = [this.__37_i(), this.label_searching2_i(), this.btn_search2_i()];
                return t;
            };
            p.grp_searching_i = function () {
                var t = new egret.gui.Group();
                this.grp_searching = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.__43_i(), this.__44_i()];
                return t;
            };
            p.grp_vip0_i = function () {
                var t = new egret.gui.Group();
                this.grp_vip0 = t;
                this.__s(t, ["bottom", "horizontalCenter", "x", "y"], [27, -151, 20, 20]);
                t.elementsContent = [this.__12_i(), this.label_vipLv0_i()];
                return t;
            };
            p.grp_vip1_i = function () {
                var t = new egret.gui.Group();
                this.grp_vip1 = t;
                this.__s(t, ["bottom", "horizontalCenter", "visible", "x", "y"], [27, -151, false, 20, 20]);
                t.elementsContent = [this.__23_i(), this.label_vipLv1_i()];
                return t;
            };
            p.grp_vip2_i = function () {
                var t = new egret.gui.Group();
                this.grp_vip2 = t;
                this.__s(t, ["bottom", "horizontalCenter", "visible", "x", "y"], [27, -151, false, 20, 20]);
                t.elementsContent = [this.__33_i(), this.label_vipLv2_i()];
                return t;
            };
            p.ico_challenge0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_challenge0 = t;
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_pk_challenge", 315, 28]);
                return t;
            };
            p.ico_challenge1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_challenge1 = t;
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_pk_challenge", 315, 28]);
                return t;
            };
            p.ico_challenge2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_challenge2 = t;
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_pk_challenge", 315, 28]);
                return t;
            };
            p.ico_role0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_role0 = t;
                this.__s(t, ["source", "x", "y"], ["avatar_1_0_0", 24, 28]);
                return t;
            };
            p.ico_role1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_role1 = t;
                this.__s(t, ["source", "x", "y"], ["avatar_1_0_0", 24, 28]);
                return t;
            };
            p.ico_role2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_role2 = t;
                this.__s(t, ["source", "x", "y"], ["avatar_1_0_0", 24, 28]);
                return t;
            };
            p.img_carry_treasure0_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_carry_treasure0 = t;
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_treasure_carry", 101, 62]);
                return t;
            };
            p.img_carry_treasure1_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_carry_treasure1 = t;
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_treasure_carry", 101, 62]);
                return t;
            };
            p.img_carry_treasure2_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_carry_treasure2 = t;
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_treasure_carry", 101, 62]);
                return t;
            };
            p.label_cost_i = function () {
                var t = new egret.gui.Label();
                this.label_cost = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "30", 29, -4]);
                return t;
            };
            p.label_lv0_i = function () {
                var t = new egret.gui.Label();
                this.label_lv0 = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "visible", "x", "y"], [18, "lv.200", 0xDDA600, false, false, 96, 0]);
                return t;
            };
            p.label_lv1_i = function () {
                var t = new egret.gui.Label();
                this.label_lv1 = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "visible", "x", "y"], [18, "lv.200", 0xDDA600, false, false, 96, 0]);
                return t;
            };
            p.label_lv2_i = function () {
                var t = new egret.gui.Label();
                this.label_lv2 = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "visible", "x", "y"], [18, "lv.200", 0xDDA600, false, false, 96, 0]);
                return t;
            };
            p.label_name0_i = function () {
                var t = new egret.gui.Label();
                this.label_name0 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "touchEnabled", "verticalAlign"], [0, 18, "神秘玩家", 0xCCCDB1, false, "middle"]);
                return t;
            };
            p.label_name1_i = function () {
                var t = new egret.gui.Label();
                this.label_name1 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "touchEnabled"], [0, 18, "神秘玩家", 0xCCCDB1, false]);
                return t;
            };
            p.label_name2_i = function () {
                var t = new egret.gui.Label();
                this.label_name2 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "touchEnabled"], [0, 18, "神秘玩家", 0xCCCDB1, false]);
                return t;
            };
            p.label_search_count_i = function () {
                var t = new egret.gui.Label();
                this.label_search_count = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [17, "高级密探次数:15", "center", 0x6CDF7B, 183, 256, 175]);
                return t;
            };
            p.label_search_refresh_i = function () {
                var t = new egret.gui.Label();
                this.label_search_refresh = t;
                this.__s(t, ["size", "x", "y"], [20, 323, 204]);
                return t;
            };
            p.label_searching0_i = function () {
                var t = new egret.gui.Label();
                this.label_searching0 = t;
                this.__s(t, ["size", "text", "textColor", "verticalCenter", "width", "x"], [20, "寻找对手中  ", 0x43BE1D, 0.5, 272, 16]);
                return t;
            };
            p.label_searching1_i = function () {
                var t = new egret.gui.Label();
                this.label_searching1 = t;
                this.__s(t, ["size", "text", "textColor", "verticalCenter", "width", "x"], [20, "寻找对手中  08:00", 0x43BE1D, 0.5, 272, 16]);
                return t;
            };
            p.label_searching2_i = function () {
                var t = new egret.gui.Label();
                this.label_searching2 = t;
                this.__s(t, ["size", "text", "textColor", "verticalCenter", "width", "x"], [20, "寻找对手中  ", 0x43BE1D, 0.5, 272, 16]);
                return t;
            };
            p.label_vipLv0_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_vipLv0 = t;
                this.__s(t, ["font", "text", "visible", "x", "y"], ["num_7", "3", false, 40, 0]);
                return t;
            };
            p.label_vipLv1_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_vipLv1 = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "3", 40, 0]);
                return t;
            };
            p.label_vipLv2_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_vipLv2 = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "3", 40, 0]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x"], [120, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 407, 0]);
                return t;
            };
            FightTreasureOutsideSkin._skinParts = ["btn_p_search", "label_search_count", "label_cost", "grp_cost", "label_search_refresh", "ico_role0", "label_vipLv0", "grp_vip0", "label_name0", "label_lv0", "img_carry_treasure0", "grp_name_container0", "ico_challenge0", "grp_enemy0", "label_searching0", "btn_search0", "grp_searching0", "grp_no_enemy0", "ico_role1", "label_vipLv1", "grp_vip1", "label_name1", "label_lv1", "img_carry_treasure1", "grp_name_container1", "ico_challenge1", "grp_enemy1", "label_searching1", "btn_search1", "grp_searching1", "grp_no_enemy1", "ico_role2", "label_vipLv2", "grp_vip2", "label_name2", "label_lv2", "img_carry_treasure2", "grp_name_container2", "ico_challenge2", "grp_enemy2", "label_searching2", "btn_search2", "grp_searching2", "grp_no_enemy2", "grp_searching"];
            return FightTreasureOutsideSkin;
        })(egret.gui.Skin);
        game.FightTreasureOutsideSkin = FightTreasureOutsideSkin;
        egret.registerClass(FightTreasureOutsideSkin,"skins.game.FightTreasureOutsideSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
