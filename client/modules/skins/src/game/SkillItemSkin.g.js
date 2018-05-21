var skins;
(function (skins) {
    var game;
    (function (game) {
        var SkillItemSkin = (function (_super) {
            __extends(SkillItemSkin, _super);
            function SkillItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.btn_lvUp_i(), this.label_name_i(), this.__4_i(), this.label_desc_i(), this.grp_needMoney_i(), this.label_open_i(), this.ico_skill_i(), this.ico_new_i(), this.efx_up_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=SkillItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SkillItemSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 11, 14]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 0, 0]);
                return t;
            };
            p.btn_lvUp_i = function () {
                var t = new egret.gui.Button();
                this.btn_lvUp = t;
                this.__s(t, ["label", "right", "skinName", "y"], ["按钮", 14, skins.comp.Btn_plus_Skin, 44]);
                return t;
            };
            p.efx_up_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_up = t;
                this.__s(t, ["effectId", "x", "y"], [39, 47, 51]);
                return t;
            };
            p.grp_needMoney_i = function () {
                var t = new egret.gui.Group();
                this.grp_needMoney = t;
                this.__s(t, ["right", "y"], [0, 10]);
                t.elementsContent = [this.__5_i(), this.label_needMoney_i()];
                return t;
            };
            p.ico_new_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_new = t;
                this.__s(t, ["source", "x", "y"], ["ntc_new", 47, 7]);
                return t;
            };
            p.ico_skill_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_skill = t;
                this.__s(t, ["height", "width", "x", "y"], [64, 64, 15, 19]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["height", "size", "textColor", "width", "x", "y"], [60, 14, 13750708, 241, 93, 35]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], ["宋体", 21, 18, "双剑合璧 LV.999", 558283, 174, 94, 14]);
                return t;
            };
            p.label_needMoney_i = function () {
                var t = new mo.gui.Label();
                this.label_needMoney = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "width", "x", "y"], ["楷体", 18, "12345", 14525952, 77, 22, 3]);
                return t;
            };
            p.label_open_i = function () {
                var t = new mo.gui.Label();
                this.label_open = t;
                this.__s(t, ["fontFamily", "height", "right", "size", "text", "textAlign", "textColor", "width", "y"], ["宋体", 21, 2, 18, "角色20级开放", "right", 16711680, 174, 14]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "y"], [101, 0, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 0]);
                return t;
            };
            SkillItemSkin._skinParts = ["btn_lvUp", "label_name", "label_desc", "label_needMoney", "grp_needMoney", "label_open", "ico_skill", "ico_new", "efx_up"];
            return SkillItemSkin;
        })(egret.gui.Skin);
        game.SkillItemSkin = SkillItemSkin;
        egret.registerClass(SkillItemSkin,"skins.game.SkillItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
