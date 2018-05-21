var skins;
(function (skins) {
    var game;
    (function (game) {
        var EquipStrBaseSkin = (function (_super) {
            __extends(EquipStrBaseSkin, _super);
            function EquipStrBaseSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.label_curProp_i(), this.grp_noMax_i(), this.grp_max_i(), this.part_item_i(), this.efx_i(), this.ico_refine_i(), this.label_noRefineLv_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=EquipStrBaseSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return EquipStrBaseSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["gold_roundxingzhen_bg", 154, 71, 70]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["gold_roundxingzhen_bg", 154, 71, 101]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "textColor", "x", "y"], ["宋体", 18, 1, 0x000000, "强化\n消耗：", 13750708, -10, 73]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 36, 105]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["宋体", 20, "已达最高强化等级", 0xD1D1B4, -4, 1]);
                return t;
            };
            p.efx_i = function () {
                var t = new g_comp.UIEffect();
                this.efx = t;
                this.__s(t, ["effectId", "x", "y"], [11, 239, 329]);
                return t;
            };
            p.grp_max_i = function () {
                var t = new egret.gui.Group();
                this.grp_max = t;
                this.__s(t, ["x", "y"], [173, 540]);
                t.elementsContent = [this.__8_i()];
                return t;
            };
            p.grp_noMax_i = function () {
                var t = new egret.gui.Group();
                this.grp_noMax = t;
                this.__s(t, ["x", "y"], [132, 460]);
                t.elementsContent = [this.__4_i(), this.__5_i(), this.label_nextProp_i(), this.__6_i(), this.img_cost_i(), this.label_cost_stone_i(), this.__7_i(), this.label_cost_gold_i()];
                return t;
            };
            p.ico_refine_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_refine = t;
                this.__s(t, ["source", "x", "y"], ["ico_jingliantu", 211, 429]);
                return t;
            };
            p.img_cost_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_cost = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "ico_gold_bars", 38, 32, 67]);
                return t;
            };
            p.label_cost_gold_i = function () {
                var t = new mo.gui.Label();
                this.label_cost_gold = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 20, "200000", "right", 13750708, 150, 72, 105]);
                return t;
            };
            p.label_cost_stone_i = function () {
                var t = new mo.gui.Label();
                this.label_cost_stone = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 20, "%s/%s", "right", 13750708, 150, 72, 73]);
                return t;
            };
            p.label_curProp_i = function () {
                var t = new mo.gui.Label();
                this.label_curProp = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], ["宋体", 28, 18, "当前: %s+%s", 15790295, 224, 138, 379]);
                return t;
            };
            p.label_nextProp_i = function () {
                var t = new mo.gui.Label();
                this.label_nextProp = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], ["宋体", 25, 18, "下级: %s+%s", 0x00EC5A, 224, 6, -63]);
                return t;
            };
            p.label_noRefineLv_i = function () {
                var t = new mo.gui.Label();
                this.label_noRefineLv = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "强化至%s级可精炼", 0x1C9BEB, 455]);
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
                this.__s(t, ["height", "source", "width", "x", "y"], [270, "s9g_inner_0", 237, 120, 244]);
                return t;
            };
            EquipStrBaseSkin._skinParts = ["label_curProp", "label_nextProp", "img_cost", "label_cost_stone", "label_cost_gold", "grp_noMax", "grp_max", "part_item", "efx", "ico_refine", "label_noRefineLv"];
            return EquipStrBaseSkin;
        })(egret.gui.Skin);
        game.EquipStrBaseSkin = EquipStrBaseSkin;
        egret.registerClass(EquipStrBaseSkin,"skins.game.EquipStrBaseSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
