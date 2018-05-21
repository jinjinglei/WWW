var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var CheckBox2Skin = (function (_super) {
            __extends(CheckBox2Skin, _super);
            function CheckBox2Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__7_i(), this.__8_i(), this.labelDisplay_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("__8", "visible", false)
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__8", "visible", false)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__8", "visible", false)
                    ]),
                    new egret.gui.State("upAndSelected", []),
                    new egret.gui.State("downAndSelected", []),
                    new egret.gui.State("disabledAndSelected", [])
                ];
            }
            var d = __define,c=CheckBox2Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CheckBox2Skin._skinParts;
                }
            );
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__8 = t;
                this.__s(t, ["left", "source", "verticalCenter"], [0, "ico_select_0", -3]);
                return t;
            };
            p.labelDisplay_i = function () {
                var t = new egret.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["left", "size", "text", "textColor", "verticalCenter"], [25, 16, "标签", 0xF8E9D3, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "source", "verticalCenter"], [0, "ico_xuanzekuangsf", 0]);
                return t;
            };
            CheckBox2Skin._skinParts = ["labelDisplay"];
            return CheckBox2Skin;
        })(egret.gui.Skin);
        comp.CheckBox2Skin = CheckBox2Skin;
        egret.registerClass(CheckBox2Skin,"skins.comp.CheckBox2Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
