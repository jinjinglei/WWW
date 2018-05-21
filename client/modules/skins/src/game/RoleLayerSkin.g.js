var skins;
(function (skins) {
    var game;
    (function (game) {
        var RoleLayerSkin = (function (_super) {
            __extends(RoleLayerSkin, _super);
            function RoleLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_avatar_i(), this.__4_i(), this.btn_detail_i(), this.btn_wing_light_i(), this.btn_no_wing_i(), this.img_redWing_i(), this.__7_i(), this.__10_i(), this.__13_i(), this.__16_i(), this.__19_i(), this.__22_i(), this.__25_i(), this.__28_i(), this.eq_0_i(), this.eq_1_i(), this.eq_2_i(), this.eq_3_i(), this.eq_11_i(), this.eq_10_i(), this.eq_9_i(), this.eq_8_i(), this.grp_spRing_i(), this.btn_back_i(), this.grp_rebirth_i(), this.ico_medalItem_i(), this.btn_buzhen_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RoleLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RoleLayerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_bracelet", 7, 6]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [28, 351]);
                t.elementsContent = [this.__11_i(), this.__12_i()];
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_ring", 7, 4]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [28, 443]);
                t.elementsContent = [this.__14_i(), this.__15_i()];
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_necklace", 4, 3]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [378, 166]);
                t.elementsContent = [this.__17_i(), this.__18_i()];
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_helmet", 13, 5]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [378, 258]);
                t.elementsContent = [this.__20_i(), this.__21_i()];
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_bracelet", 11, 9]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [378, 351]);
                t.elementsContent = [this.__23_i(), this.__24_i()];
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_ring", 6, 4]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [378, 443]);
                t.elementsContent = [this.__26_i(), this.__27_i()];
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", -13, 0]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_ring_hurt", -5, 10]);
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [314, 0]);
                t.elementsContent = [this.__29_i(), this.__30_i()];
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", -13, 0]);
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_ring_body", -4, 6]);
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [215, 0]);
                t.elementsContent = [this.__32_i(), this.__33_i()];
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", -13, 0]);
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_ring_recover", -3, 6]);
                return t;
            };
            p.__37_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [115, 0]);
                t.elementsContent = [this.__35_i(), this.__36_i()];
                return t;
            };
            p.__38_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", -13, 0]);
                return t;
            };
            p.__39_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_ring_mb", -1, 8]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "bg_forge", 0, 10, 10]);
                return t;
            };
            p.__40_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [14, 0]);
                t.elementsContent = [this.__38_i(), this.__39_i()];
                return t;
            };
            p.__41_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yizhuang", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [-10, 632]);
                t.elementsContent = [this.btn_skill_i(), this.img_redSkill_i(), this.btn_matrix_i(), this.img_redMatrix_i()];
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_weapon", 5, 5]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [28, 166]);
                t.elementsContent = [this.__5_i(), this.__6_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_clothes", 5, 5]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 60]);
                return t;
            };
            p.btn_buzhen_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_buzhen = t;
                this.__s(t, ["source", "x", "y"], ["ico_buzengs", 26, 55]);
                return t;
            };
            p.btn_detail_i = function () {
                var t = new egret.gui.Button();
                this.btn_detail = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [-3, "btn_txt_g_viewProp", skins.comp.Btn_3_3_Skin, 494]);
                return t;
            };
            p.btn_matrix_i = function () {
                var t = new egret.gui.Button();
                this.btn_matrix = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_state", skins.comp.Btn_3_0_Skin, 234, 20]);
                return t;
            };
            p.btn_no_wing_i = function () {
                var t = new egret.gui.Button();
                this.btn_no_wing = t;
                this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("btn_wing_0", "btn_wing_1"), 258, 187]);
                return t;
            };
            p.btn_skill_i = function () {
                var t = new egret.gui.Button();
                this.btn_skill = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_skill", skins.comp.Btn_3_0_Skin, 14, 20]);
                return t;
            };
            p.btn_wing_light_i = function () {
                var t = new egret.gui.Button();
                this.btn_wing_light = t;
                this.__s(t, ["skinName", "visible", "x", "y"], [new egret.gui.ButtonSkin("btn_wing_light_0", "btn_wing_light_1"), false, 259, 186]);
                return t;
            };
            p.eq_0_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_0 = t;
                this.__s(t, ["height", "width", "x", "y"], [73, 73, 28, 167]);
                return t;
            };
            p.eq_10_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_10 = t;
                this.__s(t, ["height", "width", "x", "y"], [73, 73, 378, 259]);
                return t;
            };
            p.eq_11_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_11 = t;
                this.__s(t, ["height", "width", "x", "y"], [73, 73, 378, 167]);
                return t;
            };
            p.eq_1_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_1 = t;
                this.__s(t, ["height", "width", "x", "y"], [73, 73, 28, 259]);
                return t;
            };
            p.eq_2_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_2 = t;
                this.__s(t, ["height", "width", "x", "y"], [73, 73, 28, 352]);
                return t;
            };
            p.eq_3_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_3 = t;
                this.__s(t, ["height", "width", "x", "y"], [73, 73, 28, 444]);
                return t;
            };
            p.eq_4_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_4 = t;
                this.__s(t, ["height", "width", "x", "y"], [73, 73, 0, 2]);
                return t;
            };
            p.eq_5_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_5 = t;
                this.__s(t, ["height", "width", "x", "y"], [73, 73, 101, 2]);
                return t;
            };
            p.eq_6_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_6 = t;
                this.__s(t, ["height", "width", "x", "y"], [73, 73, 201, 2]);
                return t;
            };
            p.eq_7_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_7 = t;
                this.__s(t, ["height", "width", "x", "y"], [73, 73, 301, 2]);
                return t;
            };
            p.eq_8_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_8 = t;
                this.__s(t, ["height", "width", "x", "y"], [73, 73, 378, 444]);
                return t;
            };
            p.eq_9_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_9 = t;
                this.__s(t, ["height", "width", "x", "y"], [73, 73, 378, 352]);
                return t;
            };
            p.grp_rebirth_i = function () {
                var t = new egret.gui.Group();
                this.grp_rebirth = t;
                this.__s(t, ["x", "y"], [105, 153]);
                t.elementsContent = [this.__41_i(), this.img_rebirthNum_i()];
                return t;
            };
            p.grp_spRing_i = function () {
                var t = new egret.gui.Group();
                this.grp_spRing = t;
                this.__s(t, ["x", "y"], [52, 545]);
                t.elementsContent = [this.__31_i(), this.__34_i(), this.__37_i(), this.__40_i(), this.eq_4_i(), this.eq_5_i(), this.eq_6_i(), this.eq_7_i()];
                return t;
            };
            p.ico_avatar_i = function () {
                var t = new g_base.RoleAvatar();
                this.ico_avatar = t;
                this.__s(t, ["skinName", "x", "y"], [skins.game.RoleAvatarSkin, 241, 499]);
                return t;
            };
            p.ico_medalItem_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medalItem = t;
                this.__s(t, ["x", "y"], [165, 421]);
                return t;
            };
            p.img_rebirthNum_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_rebirthNum = t;
                this.__s(t, ["source", "x", "y"], ["txt_hz_1", 15, 22]);
                return t;
            };
            p.img_redMatrix_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_redMatrix = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 333, 14]);
                return t;
            };
            p.img_redSkill_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_redSkill = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 113, 14]);
                return t;
            };
            p.img_redWing_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_redWing = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 336, 188]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [28, 258]);
                t.elementsContent = [this.__8_i(), this.__9_i()];
                return t;
            };
            RoleLayerSkin._skinParts = ["ico_avatar", "btn_skill", "img_redSkill", "btn_matrix", "img_redMatrix", "btn_detail", "btn_wing_light", "btn_no_wing", "img_redWing", "eq_0", "eq_1", "eq_2", "eq_3", "eq_11", "eq_10", "eq_9", "eq_8", "eq_4", "eq_5", "eq_6", "eq_7", "grp_spRing", "btn_back", "img_rebirthNum", "grp_rebirth", "ico_medalItem", "btn_buzhen"];
            return RoleLayerSkin;
        })(egret.gui.Skin);
        game.RoleLayerSkin = RoleLayerSkin;
        egret.registerClass(RoleLayerSkin,"skins.game.RoleLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
