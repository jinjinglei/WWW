var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var ResBarSkin = (function (_super) {
            __extends(ResBarSkin, _super);
            function ResBarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [27, 340]);
                this.elementsContent = [this.grp_gold_i(), this.grp_yuanbao_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ResBarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ResBarSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_gold", false, 10, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["yuanbao_round_bg", false, 40, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_yuanbao", false, 0, 0]);
                return t;
            };
            p.grp_gold_i = function () {
                var t = new egret.gui.Group();
                this.grp_gold = t;
                this.__s(t, ["x", "y"], [4, 0]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.label_gold_i()];
                return t;
            };
            p.grp_yuanbao_i = function () {
                var t = new egret.gui.Group();
                this.grp_yuanbao = t;
                this.__s(t, ["x", "y"], [176, 1]);
                t.elementsContent = [this.__5_i(), this.__6_i(), this.label_yuanbao_i()];
                return t;
            };
            p.label_gold_i = function () {
                var t = new mo.gui.Label();
                this.label_gold = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["楷体", 18, "0", "center", 14327552, false, 90, 42, 2]);
                return t;
            };
            p.label_yuanbao_i = function () {
                var t = new mo.gui.Label();
                this.label_yuanbao = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["楷体", 18, "0", "center", 14327552, false, 90, 41, 1]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["gold_round_bg", false, 40, 1]);
                return t;
            };
            ResBarSkin._skinParts = ["label_gold", "grp_gold", "label_yuanbao", "grp_yuanbao"];
            return ResBarSkin;
        })(egret.gui.Skin);
        comp.ResBarSkin = ResBarSkin;
        egret.registerClass(ResBarSkin,"skins.comp.ResBarSkin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
