var skins;
(function (skins) {
    var game;
    (function (game) {
        var RefineLayerSkin = (function (_super) {
            __extends(RefineLayerSkin, _super);
            function RefineLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.container_i(), this.label_nextProp_i(), this.__8_i(), this.__11_i(), this.__14_i(), this.__17_i(), this.__20_i(), this.__23_i(), this.__26_i(), this.__29_i(), this.__32_i(), this.eq_0_i(), this.eq_1_i(), this.eq_2_i(), this.eq_3_i(), this.eq_11_i(), this.eq_10_i(), this.eq_9_i(), this.eq_8_i(), this.btn_help_i(), this.btn_back_i(), this.label_curProp_i(), this.lable_curLv_i(), this.grp_jinglian_i(), this.part_item_i(), this.effect_win_i(), this.effect_fail_i(), this.effect_crit_i(), this.effect_downLv_i(), this.label_cannot_i(), this.label_max_i(), this.__40_i(), this.__42_i(), this.__45_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RefineLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RefineLayerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [42, 212]);
                t.elementsContent = [this.__9_i(), this.__10_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_clothes", 6, 6]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [42, 304]);
                t.elementsContent = [this.__12_i(), this.__13_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_bracelet", 10, 7]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [42, 397]);
                t.elementsContent = [this.__15_i(), this.__16_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_ring", 7, 5]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [42, 489]);
                t.elementsContent = [this.__18_i(), this.__19_i()];
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_necklace", 7, 5]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [362, 212]);
                t.elementsContent = [this.__21_i(), this.__22_i()];
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_helmet", 9, 6]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [362, 304]);
                t.elementsContent = [this.__24_i(), this.__25_i()];
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_bracelet", 8, 7]);
                return t;
            };
            p.__29_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [362, 397]);
                t.elementsContent = [this.__27_i(), this.__28_i()];
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_ring", 6, 4]);
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [362, 489]);
                t.elementsContent = [this.__30_i(), this.__31_i()];
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["gold_roundxingzhen_bg", 221, 12]);
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["gold_roundxingzhen_bg", 221, 42]);
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "textColor", "x", "y"], ["宋体", 18, 1, 0x000000, "精炼消耗：", 0xD1D1B4, 89, 25]);
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 185, 43]);
                return t;
            };
            p.__37_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], ["宋体", 21, 0, 18, "失败有几率降级，成功有几率暴击", "center", 0xF1BD22, 300, 120]);
                return t;
            };
            p.__38_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["yuanbao_round_bg", false, 40, 0]);
                return t;
            };
            p.__39_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_yuanbao", false, 6, 3]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_jinglianbg", 0]);
                return t;
            };
            p.__40_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [180, 752]);
                t.elementsContent = [this.__38_i(), this.__39_i(), this.label_yuanbao_i()];
                return t;
            };
            p.__41_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["yuanbao_round_bg", false, 40, 0]);
                return t;
            };
            p.__42_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [325, 752]);
                t.elementsContent = [this.__41_i(), this.ico_stone_i(), this.label_stone_i()];
                return t;
            };
            p.__43_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["gold_round_bg", false, 40, 1]);
                return t;
            };
            p.__44_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_gold", false, 10, 0]);
                return t;
            };
            p.__45_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [34, 752]);
                t.elementsContent = [this.__43_i(), this.__44_i(), this.label_gold_i()];
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "bg_wuqiweicang", 194]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "y"], [155, 0.5, "panel_arena_item_bg", 576]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_zhuangbeijinglian", 197, 13]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textColor", "y"], ["宋体", 0, 18, "精炼提升装备强化效果", 0x0E9FF9, 513]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 0, 0]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 43]);
                return t;
            };
            p.btn_do_i = function () {
                var t = new egret.gui.Button();
                this.btn_do = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0.5, "btn_txt_g_jingliand", skins.comp.Btn_3_12_Skin, 81]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 44]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Group();
                this.container = t;
                this.__s(t, ["bottom", "left", "right", "top"], [1, 0, 0, -1]);
                t.elementsContent = [this.img_border_light_i()];
                return t;
            };
            p.effect_crit_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_crit = t;
                this.__s(t, ["effectId", "x", "y"], [47, 238, 333]);
                return t;
            };
            p.effect_downLv_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_downLv = t;
                this.__s(t, ["effectId", "x", "y"], [48, 250, 333]);
                return t;
            };
            p.effect_fail_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_fail = t;
                this.__s(t, ["effectId", "x", "y"], [50, 247, 295]);
                return t;
            };
            p.effect_win_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_win = t;
                this.__s(t, ["effectId", "x", "y"], [49, 247, 295]);
                return t;
            };
            p.eq_0_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_0 = t;
                this.__s(t, ["x", "y"], [41, 213]);
                return t;
            };
            p.eq_10_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_10 = t;
                this.__s(t, ["verticalCenter", "x"], [-59.5, 361]);
                return t;
            };
            p.eq_11_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_11 = t;
                this.__s(t, ["verticalCenter", "x"], [-151.5, 361]);
                return t;
            };
            p.eq_1_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_1 = t;
                this.__s(t, ["x", "y"], [41, 304]);
                return t;
            };
            p.eq_2_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_2 = t;
                this.__s(t, ["x", "y"], [41, 398]);
                return t;
            };
            p.eq_3_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_3 = t;
                this.__s(t, ["x", "y"], [41, 489]);
                return t;
            };
            p.eq_8_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_8 = t;
                this.__s(t, ["x", "y"], [361, 490]);
                return t;
            };
            p.eq_9_i = function () {
                var t = new g_comp.Equip_Item();
                this.eq_9 = t;
                this.__s(t, ["x", "y"], [361, 398]);
                return t;
            };
            p.grp_jinglian_i = function () {
                var t = new egret.gui.Group();
                this.grp_jinglian = t;
                this.__s(t, ["height", "left", "right", "y"], [151, 0, 0, 577]);
                t.elementsContent = [this.__33_i(), this.__34_i(), this.__35_i(), this.img_cost_i(), this.label_cost_stone_i(), this.__36_i(), this.label_cost_gold_i(), this.btn_do_i(), this.__37_i()];
                return t;
            };
            p.ico_stone_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_stone = t;
                this.__s(t, ["height", "source", "touchEnabled", "width", "x", "y"], [30, "ico_yuanbao", false, 30, 6, -1]);
                return t;
            };
            p.img_border_light_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_border_light = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [89, "border_light", 89, 35, 206]);
                return t;
            };
            p.img_cost_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_cost = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [26, "ico_yuanbao", 26, 184, 12]);
                return t;
            };
            p.label_cannot_i = function () {
                var t = new mo.gui.Label();
                this.label_cannot = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 21, 18, "该装备栏强化至%s级后可继续精炼", "center", 0xFF0000, 300, 90, 644]);
                return t;
            };
            p.label_cost_gold_i = function () {
                var t = new mo.gui.Label();
                this.label_cost_gold = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 20, "200000", "right", 0xD1D1B4, 161, 221, 45]);
                return t;
            };
            p.label_cost_stone_i = function () {
                var t = new mo.gui.Label();
                this.label_cost_stone = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 20, "1000", "right", 0xD1D1B4, 160, 221, 15]);
                return t;
            };
            p.label_curProp_i = function () {
                var t = new mo.gui.Label();
                this.label_curProp = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], ["宋体", 28, 18, "当前: 强化%s+%s%", 0xF0F0D7, 224, 140, 394]);
                return t;
            };
            p.label_gold_i = function () {
                var t = new mo.gui.Label();
                this.label_gold = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["楷体", 18, "0", "center", 0xDA9F00, false, 90, 42, 5]);
                return t;
            };
            p.label_max_i = function () {
                var t = new egret.gui.Label();
                this.label_max = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["宋体", 20, "精炼等级已达最高", 0xFE0404, 166, 643]);
                return t;
            };
            p.label_nextProp_i = function () {
                var t = new mo.gui.Label();
                this.label_nextProp = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], ["宋体", 25, 18, "下级: 强化%s+%s%", 0x00EC5A, 224, 140, 420]);
                return t;
            };
            p.label_stone_i = function () {
                var t = new mo.gui.Label();
                this.label_stone = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["楷体", 18, "0", "center", 0xDA9F00, false, 90, 41, 3]);
                return t;
            };
            p.label_yuanbao_i = function () {
                var t = new mo.gui.Label();
                this.label_yuanbao = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["楷体", 18, "0", "center", 0xDA9F00, false, 90, 42, 4]);
                return t;
            };
            p.lable_curLv_i = function () {
                var t = new mo.gui.Label();
                this.lable_curLv = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textColor", "y"], ["宋体", 1, 18, "精炼Lv%s", 0xF0F0D7, 337]);
                return t;
            };
            p.part_item_i = function () {
                var t = new g_comp.Part_Item();
                this.part_item = t;
                this.__s(t, ["x", "y"], [193, 235]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_ico_weapon", 7, 6]);
                return t;
            };
            RefineLayerSkin._skinParts = ["img_border_light", "container", "label_nextProp", "eq_0", "eq_1", "eq_2", "eq_3", "eq_11", "eq_10", "eq_9", "eq_8", "btn_help", "btn_back", "label_curProp", "lable_curLv", "img_cost", "label_cost_stone", "label_cost_gold", "btn_do", "grp_jinglian", "part_item", "effect_win", "effect_fail", "effect_crit", "effect_downLv", "label_cannot", "label_max", "label_yuanbao", "ico_stone", "label_stone", "label_gold"];
            return RefineLayerSkin;
        })(egret.gui.Skin);
        game.RefineLayerSkin = RefineLayerSkin;
        egret.registerClass(RefineLayerSkin,"skins.game.RefineLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
