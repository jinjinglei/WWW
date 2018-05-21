var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftUpStarResultSkin = (function (_super) {
            __extends(GiftUpStarResultSkin, _super);
            function GiftUpStarResultSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.label_star_i(), this.label_ziZhi_i(), this.label_noSkill_i(), this.label_noAct_i(), this.grp_skill_i(), this.btn_close_i(), this.effect_skill_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftUpStarResultSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftUpStarResultSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_shenxinxianqing", 119]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_queding", skins.comp.Btn_3_0s_Skin, 618]);
                return t;
            };
            p.effect_skill_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_skill = t;
                this.__s(t, ["effectId", "x", "y"], [63, 240, 504]);
                return t;
            };
            p.grp_skill_i = function () {
                var t = new egret.gui.Group();
                this.grp_skill = t;
                this.__s(t, ["x", "y"], [127, 526]);
                t.elementsContent = [this.ico_skill_i(), this.label_name_i(), this.label_desc_i()];
                return t;
            };
            p.ico_skill_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_skill = t;
                this.__s(t, ["height", "width", "x", "y"], [40, 39, 0, 2]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "描述", 0xF4EAEA, 44, 21]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "技能名称", 0x19FF00, 44, 0]);
                return t;
            };
            p.label_noAct_i = function () {
                var t = new egret.gui.Label();
                this.label_noAct = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 22, "很遗憾，技能未被激活", 0xFF0000, 536]);
                return t;
            };
            p.label_noSkill_i = function () {
                var t = new egret.gui.Label();
                this.label_noSkill = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0, 22, "本星级无技能解锁", 537]);
                return t;
            };
            p.label_star_i = function () {
                var t = new mo.gui.Label();
                this.label_star = t;
                this.__s(t, ["size", "text", "x", "y"], [22, "星级：%s星→%s星", 136, 246]);
                return t;
            };
            p.label_ziZhi_i = function () {
                var t = new mo.gui.Label();
                this.label_ziZhi = t;
                this.__s(t, ["size", "text", "x", "y"], [22, "资质上限：%s→%s", 137, 282]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_shixinditus", 0]);
                return t;
            };
            GiftUpStarResultSkin._skinParts = ["label_star", "label_ziZhi", "label_noSkill", "label_noAct", "ico_skill", "label_name", "label_desc", "grp_skill", "btn_close", "effect_skill"];
            return GiftUpStarResultSkin;
        })(egret.gui.Skin);
        game.GiftUpStarResultSkin = GiftUpStarResultSkin;
        egret.registerClass(GiftUpStarResultSkin,"skins.game.GiftUpStarResultSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
