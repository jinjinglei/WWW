var skins;
(function (skins) {
    var game;
    (function (game) {
        var Guide2Skin = (function (_super) {
            __extends(Guide2Skin, _super);
            function Guide2Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.grp_btn_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Guide2Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Guide2Skin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jiantouxing", -90, -32]);
                return t;
            };
            p.grp_arrow_i = function () {
                var t = new egret.gui.Group();
                this.grp_arrow = t;
                this.__s(t, ["height", "width", "x", "y"], [0, 0, 0, 0]);
                t.elementsContent = [this.__4_i()];
                return t;
            };
            p.grp_btn_i = function () {
                var t = new egret.gui.Group();
                this.grp_btn = t;
                this.__s(t, ["height", "touchChildren", "touchEnabled", "width", "x", "y"], [1, false, false, 1, 234, 217]);
                t.elementsContent = [this.grp_circle_i(), this.grp_arrow_i()];
                return t;
            };
            p.grp_circle_i = function () {
                var t = new egret.gui.Group();
                this.grp_circle = t;
                this.__s(t, ["height", "width", "x", "y"], [0, 0, 0, 0]);
                t.elementsContent = [this.__3_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_circlelight", -62, -62]);
                return t;
            };
            Guide2Skin._skinParts = ["grp_circle", "grp_arrow", "grp_btn"];
            return Guide2Skin;
        })(egret.gui.Skin);
        game.Guide2Skin = Guide2Skin;
        egret.registerClass(Guide2Skin,"skins.game.Guide2Skin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
