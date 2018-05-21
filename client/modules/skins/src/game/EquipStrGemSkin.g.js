var skins;
(function (skins) {
    var game;
    (function (game) {
        var EquipStrGemSkin = (function (_super) {
            __extends(EquipStrGemSkin, _super);
            function EquipStrGemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.grp_noMax_i(), this.grp_max_i(), this.gem_stone_i(), this.part_item_i(), this.efx_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=EquipStrGemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return EquipStrGemSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["宋体", 20, "升级消耗：", 13750708, -4, -8]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_aocao3", 115, -9]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["宋体", 20, "宝石已达最高等级", 0xD1D1B4, -4, 1]);
                return t;
            };
            p.efx_i = function () {
                var t = new g_comp.UIEffect();
                this.efx = t;
                this.__s(t, ["effectId", "x", "y"], [12, 239, 329]);
                return t;
            };
            p.gem_stone_i = function () {
                var t = new g_comp.Gem_Stone();
                this.gem_stone = t;
                this.__s(t, ["x", "y"], [126, 381]);
                return t;
            };
            p.grp_max_i = function () {
                var t = new egret.gui.Group();
                this.grp_max = t;
                this.__s(t, ["visible", "x", "y"], [false, 152, 582]);
                t.elementsContent = [this.__6_i()];
                return t;
            };
            p.grp_noMax_i = function () {
                var t = new egret.gui.Group();
                this.grp_noMax = t;
                this.__s(t, ["x", "y"], [142, 582]);
                t.elementsContent = [this.__4_i(), this.__5_i(), this.img_cost_i(), this.label_cost_stone_i()];
                return t;
            };
            p.img_cost_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_cost = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "ico_gold_bars", 38, 80, -12]);
                return t;
            };
            p.label_cost_stone_i = function () {
                var t = new mo.gui.Label();
                this.label_cost_stone = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 20, "%s/%s", "right", 13750708, 150, 52, -7]);
                return t;
            };
            p.part_item_i = function () {
                var t = new g_comp.Part_Item();
                this.part_item = t;
                this.__s(t, ["horizontalCenter", "x", "y"], [-2, 10, 285]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [320, egret.gui.getScale9Grid("18,22,113,136"), "s9g_inner_0", 237, 120, 244]);
                return t;
            };
            EquipStrGemSkin._skinParts = ["img_cost", "label_cost_stone", "grp_noMax", "grp_max", "gem_stone", "part_item", "efx"];
            return EquipStrGemSkin;
        })(egret.gui.Skin);
        game.EquipStrGemSkin = EquipStrGemSkin;
        egret.registerClass(EquipStrGemSkin,"skins.game.EquipStrGemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
