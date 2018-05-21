var skins;
(function (skins) {
    var simple;
    (function (simple) {
        var CheckBoxSkin = (function (_super) {
            __extends(CheckBoxSkin, _super);
            function CheckBoxSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__7_i(), this.__8_i(), this.labelDisplay_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("__8", "visible", false)
                    ]),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", []),
                    new egret.gui.State("upAndSelected", []),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__8", "visible", false)
                    ]),
                    new egret.gui.State("disabledAndSelected", [])
                ];
            }
            var d = __define,c=CheckBoxSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CheckBoxSkin._skinParts;
                }
            );
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__8 = t;
                this.__s(t, ["left", "source", "verticalCenter"], [0, "check", -3]);
                return t;
            };
            p.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["fontFamily", "left", "size", "text", "textColor", "verticalCenter"], ["黑体", 38, 20, "标签", 0xF7BC0D, 2]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "source", "verticalCenter"], [0, "checkbox", 0]);
                return t;
            };
            CheckBoxSkin._skinParts = ["labelDisplay"];
            return CheckBoxSkin;
        })(egret.gui.Skin);
        simple.CheckBoxSkin = CheckBoxSkin;
        egret.registerClass(CheckBoxSkin,"skins.simple.CheckBoxSkin");
    })(simple = skins.simple || (skins.simple = {}));
})(skins || (skins = {}));
