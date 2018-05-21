var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftSkillCellSkin = (function (_super) {
            __extends(GiftSkillCellSkin, _super);
            function GiftSkillCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [58, 400]);
                this.elementsContent = [this.ico_skill_i(), this.__5_i(), this.label_desc_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftSkillCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftSkillCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [53, 5]);
                t.layout = this.__4_i();
                t.elementsContent = [this.label_name_i(), this.label_jiHuo_i()];
                return t;
            };
            p.ico_skill_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_skill = t;
                this.__s(t, ["height", "verticalCenter", "width", "x"], [40, 0, 39, 10]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "描述", 0xF4EAEA, 53, 30]);
                return t;
            };
            p.label_jiHuo_i = function () {
                var t = new mo.gui.Label();
                this.label_jiHuo = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "（升级%s星时有几率激活）", 0xFF0000, 54, 0]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "名字", 0x00FF00, 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            GiftSkillCellSkin._skinParts = ["ico_skill", "label_name", "label_jiHuo", "label_desc"];
            return GiftSkillCellSkin;
        })(egret.gui.Skin);
        game.GiftSkillCellSkin = GiftSkillCellSkin;
        egret.registerClass(GiftSkillCellSkin,"skins.game.GiftSkillCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
