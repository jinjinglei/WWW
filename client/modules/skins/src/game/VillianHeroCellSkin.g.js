var skins;
(function (skins) {
    var game;
    (function (game) {
        var VillianHeroCellSkin = (function (_super) {
            __extends(VillianHeroCellSkin, _super);
            function VillianHeroCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["currentState", "width"], ["normal", 90]);
                this.elementsContent = [this.ico_role_i(), this.bar_hp_i(), this.label_name_i(), this.label_hp_i(), this.rect_touch_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("elite", [])
                ];
            }
            var d = __define,c=VillianHeroCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VillianHeroCellSkin._skinParts;
                }
            );
            p.ico_role_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_role = t;
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "x", "y"], [64, 0, "avatar_1_0_0", -37, 64, 10, 10]);
                return t;
            };
            p.label_hp_i = function () {
                var t = new mo.gui.Label();
                this.label_hp = t;
                this.__s(t, ["size", "text", "textAlign", "width", "x", "y"], [15, "血量：60%", "center", 90, 0, 107]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textAlign", "width", "x", "y"], [15, "XX元婴", "center", 90, 0, 83]);
                return t;
            };
            p.rect_touch_i = function () {
                var t = new egret.gui.UIAsset();
                this.rect_touch = t;
                this.__s(t, ["bottom", "left", "right", "source", "top", "x", "y"], [0, 0, 0, "touch_rect", 0, 10, 10]);
                return t;
            };
            p.bar_hp_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_hp = t;
                this.__s(t, ["skinName", "value", "x", "y"], [skins.comp.Bar_Soul_Skin, 100, 10, 67]);
                return t;
            };
            VillianHeroCellSkin._skinParts = ["ico_role", "bar_hp", "label_name", "label_hp", "rect_touch"];
            return VillianHeroCellSkin;
        })(egret.gui.Skin);
        game.VillianHeroCellSkin = VillianHeroCellSkin;
        egret.registerClass(VillianHeroCellSkin,"skins.game.VillianHeroCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
