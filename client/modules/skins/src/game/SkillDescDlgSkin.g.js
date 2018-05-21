var skins;
(function (skins) {
    var game;
    (function (game) {
        var SkillDescDlgSkin = (function (_super) {
            __extends(SkillDescDlgSkin, _super);
            function SkillDescDlgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.label_name_i(), this.__4_i(), this.label_desc_i(), this.ico_skill_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=SkillDescDlgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SkillDescDlgSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["item_bg", 51, 324]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_close_Skin, 417, 295]);
                return t;
            };
            p.ico_skill_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_skill = t;
                this.__s(t, ["height", "width", "x", "y"], [64, 64, 55, 329]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["height", "lineSpacing", "size", "textColor", "width", "x", "y"], [60, 4, 16, 0xD1D1B4, 300, 133, 350]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], ["宋体", 21, 18, "双剑合璧 LV.999", 0x0884CB, 174, 134, 324]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "x", "y"], [101, 0.5, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 10, 310]);
                return t;
            };
            SkillDescDlgSkin._skinParts = ["label_name", "label_desc", "ico_skill", "btn_close"];
            return SkillDescDlgSkin;
        })(egret.gui.Skin);
        game.SkillDescDlgSkin = SkillDescDlgSkin;
        egret.registerClass(SkillDescDlgSkin,"skins.game.SkillDescDlgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
