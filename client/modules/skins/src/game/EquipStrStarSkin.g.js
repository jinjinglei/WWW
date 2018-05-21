var skins;
(function (skins) {
    var game;
    (function (game) {
        var EquipStrStarSkin = (function (_super) {
            __extends(EquipStrStarSkin, _super);
            function EquipStrStarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.label_star_i(), this.__4_i(), this.label_prop_next_i(), this.label_prop_base_i(), this.label_tupo_i(), this.label_tupoProp_i(), this.grp_noMax_i(), this.grp_max_i(), this.part_item_i(), this.efx_i(), this.grp_tupo_i(), this.effect_win_i(), this.effect_fail_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=EquipStrStarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return EquipStrStarSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_up_arrow", 241, 507]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["gold_roundxingzhen_bg", 147, 70, 33]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["gold_roundxingzhen_bg", 145, 71, 1]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 42, 35]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor"], ["宋体", 20, "已达最高星级", 0xD1D1B4]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textColor", "y"], ["宋体", 0, 18, "突破有概率失败，成功后才可继续升星", 0xD1D1B4, 39]);
                return t;
            };
            p.btn_tupo_i = function () {
                var t = new egret.gui.Button();
                this.btn_tupo = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_tupo", skins.comp.Btn_3_12_Skin, 0]);
                return t;
            };
            p.effect_fail_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_fail = t;
                this.__s(t, ["effectId", "x", "y"], [52, 237, 365]);
                return t;
            };
            p.effect_win_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_win = t;
                this.__s(t, ["effectId", "x", "y"], [51, 237, 365]);
                return t;
            };
            p.efx_i = function () {
                var t = new g_comp.UIEffect();
                this.efx = t;
                this.__s(t, ["effectId", "x", "y"], [13, 239, 329]);
                return t;
            };
            p.grp_max_i = function () {
                var t = new egret.gui.Group();
                this.grp_max = t;
                this.__s(t, ["visible", "x", "y"], [false, 177, 570]);
                t.elementsContent = [this.__8_i()];
                return t;
            };
            p.grp_noMax_i = function () {
                var t = new egret.gui.Group();
                this.grp_noMax = t;
                this.__s(t, ["x", "y"], [132, 536]);
                t.elementsContent = [this.__5_i(), this.__6_i(), this.label_costDesc_i(), this.img_cost_i(), this.label_cost_stone_i(), this.__7_i(), this.label_cost_gold_i()];
                return t;
            };
            p.grp_tupo_i = function () {
                var t = new egret.gui.Group();
                this.grp_tupo = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 609]);
                t.elementsContent = [this.btn_tupo_i(), this.__9_i()];
                return t;
            };
            p.img_cost_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_cost = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [26, "ico_gold_bars", 26, 42, 2]);
                return t;
            };
            p.label_costDesc_i = function () {
                var t = new egret.gui.Label();
                this.label_costDesc = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["宋体", 18, "升星\n消耗", 13750708, 0, 9]);
                return t;
            };
            p.label_cost_gold_i = function () {
                var t = new egret.gui.Label();
                this.label_cost_gold = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 23, 20, "152000", "right", 13750708, 144, 69, 36]);
                return t;
            };
            p.label_cost_stone_i = function () {
                var t = new mo.gui.Label();
                this.label_cost_stone = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 20, "%s/%s", "right", 13750708, 143, 70, 3]);
                return t;
            };
            p.label_prop_base_i = function () {
                var t = new mo.gui.Label();
                this.label_prop_base = t;
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [18, "装备基础属性+%s%", 13750708, 202, 134, 485]);
                return t;
            };
            p.label_prop_next_i = function () {
                var t = new mo.gui.Label();
                this.label_prop_next = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "width", "x", "y"], ["宋体", 18, "+%s%", 56957, 70, 257, 504]);
                return t;
            };
            p.label_star_i = function () {
                var t = new mo.gui.Label();
                this.label_star = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["宋体", 20, "%s星属性加成：", 0xFFB600, 133, 456]);
                return t;
            };
            p.label_tupoProp_i = function () {
                var t = new mo.gui.Label();
                this.label_tupoProp = t;
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [18, "%s+%s", 0xD1D1B4, 156, 134, 410]);
                return t;
            };
            p.label_tupo_i = function () {
                var t = new mo.gui.Label();
                this.label_tupo = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["宋体", 20, "当前突破：Lv.%s", 0xFFB600, 133, 380]);
                return t;
            };
            p.part_item_i = function () {
                var t = new g_comp.Part_Item();
                this.part_item = t;
                this.__s(t, ["horizontalCenter", "y"], [-2, 285]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [287, "s9g_inner_0", 237, 120, 244]);
                return t;
            };
            EquipStrStarSkin._skinParts = ["label_star", "label_prop_next", "label_prop_base", "label_tupo", "label_tupoProp", "label_costDesc", "img_cost", "label_cost_stone", "label_cost_gold", "grp_noMax", "grp_max", "part_item", "efx", "btn_tupo", "grp_tupo", "effect_win", "effect_fail"];
            return EquipStrStarSkin;
        })(egret.gui.Skin);
        game.EquipStrStarSkin = EquipStrStarSkin;
        egret.registerClass(EquipStrStarSkin,"skins.game.EquipStrStarSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
