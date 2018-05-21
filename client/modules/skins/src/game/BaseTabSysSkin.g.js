var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseTabSysSkin = (function (_super) {
            __extends(BaseTabSysSkin, _super);
            function BaseTabSysSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [71, 72]);
                this.elementsContent = [this.__4_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseTabSysSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseTabSysSkin._skinParts;
                }
            );
            p.iconDisplay_i = function () {
                var t = new egret.gui.UIAsset();
                this.iconDisplay = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [-35, -36, -36, "mod_home", -36]);
                return t;
            };
            p.img_s_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_s = t;
                this.__s(t, ["bottom", "left", "right", "top"], [-35, -36, -36, -36]);
                return t;
            };
            p.new_point_i = function () {
                var t = new egret.gui.UIAsset();
                this.new_point = t;
                this.__s(t, ["horizontalCenter", "source", "top", "visible"], [26.5, "ico_new", -47, false]);
                return t;
            };
            p.red_point_i = function () {
                var t = new egret.gui.UIAsset();
                this.red_point = t;
                this.__s(t, ["horizontalCenter", "source", "top"], [26.5, "ico_red", -37]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "left", "right", "top"], [35, 36, 36, 36]);
                t.elementsContent = [this.iconDisplay_i(), this.img_s_i(), this.red_point_i(), this.new_point_i()];
                return t;
            };
            BaseTabSysSkin._skinParts = ["iconDisplay", "img_s", "red_point", "new_point"];
            return BaseTabSysSkin;
        })(egret.gui.Skin);
        game.BaseTabSysSkin = BaseTabSysSkin;
        egret.registerClass(BaseTabSysSkin,"skins.game.BaseTabSysSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
