var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Gem_StoneSkin = (function (_super) {
            __extends(Gem_StoneSkin, _super);
            function Gem_StoneSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [192, 282]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.img_gem0_i(), this.img_gem1_i(), this.img_gem2_i(), this.img_gem3_i(), this.__6_i(), this.label_gem_0_i(), this.label_gem_1_i(), this.label_gem_2_i(), this.label_gem_3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Gem_StoneSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Gem_StoneSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_xiahuaxian", 38, 65]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_xiahuaxian", 37, 104]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_xiahuaxian", 35, 145]);
                return t;
            };
            p.img_gem0_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_gem0 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [50, "gem_gray", 50, -5, 0]);
                return t;
            };
            p.img_gem1_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_gem1 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [50, "gem_gray", 50, -5, 40]);
                return t;
            };
            p.img_gem2_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_gem2 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [50, "gem_gray", 50, -5, 78]);
                return t;
            };
            p.img_gem3_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_gem3 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [50, "gem_gray", 50, -5, 119]);
                return t;
            };
            p.label_gem_0_i = function () {
                var t = new mo.gui.Label();
                this.label_gem_0 = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textColor", "width", "x", "y"], ["宋体", 22, 16, 1, "%s %s", 14013880, 260, 42, 19]);
                return t;
            };
            p.label_gem_1_i = function () {
                var t = new mo.gui.Label();
                this.label_gem_1 = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textColor", "width", "x", "y"], ["宋体", 22, 16, 1, "%s %s", 14013880, 260, 42, 58]);
                return t;
            };
            p.label_gem_2_i = function () {
                var t = new mo.gui.Label();
                this.label_gem_2 = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textColor", "width", "x", "y"], ["宋体", 22, 16, 1, "%s %s", 14013880, 260, 43, 98]);
                return t;
            };
            p.label_gem_3_i = function () {
                var t = new mo.gui.Label();
                this.label_gem_3 = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textColor", "width", "x", "y"], ["宋体", 22, 16, 1, "%s %s", 14013880, 260, 41, 138]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_xiahuaxian", 39, 25]);
                return t;
            };
            Gem_StoneSkin._skinParts = ["img_gem0", "img_gem1", "img_gem2", "img_gem3", "label_gem_0", "label_gem_1", "label_gem_2", "label_gem_3"];
            return Gem_StoneSkin;
        })(egret.gui.Skin);
        comp.Gem_StoneSkin = Gem_StoneSkin;
        egret.registerClass(Gem_StoneSkin,"skins.comp.Gem_StoneSkin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
