var skins;
(function (skins) {
    var game;
    (function (game) {
        var CombatTipsSkin = (function (_super) {
            __extends(CombatTipsSkin, _super);
            function CombatTipsSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.grp_container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CombatTipsSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CombatTipsSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_combat", 141, 521]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [203, 523]);
                t.layout = this.__5_i();
                t.elementsContent = [this.label_combat_i(), this.label_diff_i()];
                return t;
            };
            p.grp_container_i = function () {
                var t = new egret.gui.Group();
                this.grp_container = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.__6_i()];
                return t;
            };
            p.label_combat_i = function () {
                var t = new mo.gui.Label();
                this.label_combat = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textAlign", "textColor", "x", "y"], [30, 1, 0x3A2200, "9999", "left", 0xF0CF4F, 0, 0]);
                return t;
            };
            p.label_diff_i = function () {
                var t = new mo.gui.Label();
                this.label_diff = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [30, "%s%s", 0x00FF00, 53, 1]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "scale9Grid", "source", "y"], [0, 0, egret.gui.getScale9Grid("6,3,38,23"), "s9g_translucent", 525]);
                return t;
            };
            CombatTipsSkin._skinParts = ["label_combat", "label_diff", "grp_container"];
            return CombatTipsSkin;
        })(egret.gui.Skin);
        game.CombatTipsSkin = CombatTipsSkin;
        egret.registerClass(CombatTipsSkin,"skins.game.CombatTipsSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
