var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Input_0_Skin = (function (_super) {
            __extends(Input_0_Skin, _super);
            function Input_0_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["minHeight", "minWidth"], [30, 100]);
                this.elementsContent = [this.__5_i(), this.textDisplay_i()];
                this.promptDisplay_i();
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("textDisplay", "textColor", 0xAAAAAA)
                    ]),
                    new egret.gui.State("normalWithPrompt", [
                        new egret.gui.AddItems("promptDisplay", "", "last", "")
                    ]),
                    new egret.gui.State("disabledWithPrompt", [
                        new egret.gui.AddItems("promptDisplay", "", "last", "")
                    ])
                ];
            }
            var d = __define,c=Input_0_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Input_0_Skin._skinParts;
                }
            );
            p.promptDisplay_i = function () {
                var t = new egret.gui.Label();
                this.promptDisplay = t;
                this.__s(t, ["left", "maxDisplayedLines", "size", "textColor", "touchChildren", "touchEnabled", "verticalCenter"], [10, 1, 20, 0xa9a9a9, false, false, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["percentHeight", "source", "percentWidth"], [100, "s9g_aocao", 100]);
                return t;
            };
            p.textDisplay_i = function () {
                var t = new egret.gui.EditableText();
                this.textDisplay = t;
                this.__s(t, ["bottom", "percentHeight", "left", "right", "size", "textColor", "top", "percentWidth"], [8, 100, 10, 10, 20, 0xD1D1B4, 8, 100]);
                return t;
            };
            Input_0_Skin._skinParts = ["textDisplay", "promptDisplay"];
            return Input_0_Skin;
        })(egret.gui.Skin);
        comp.Input_0_Skin = Input_0_Skin;
        egret.registerClass(Input_0_Skin,"skins.comp.Input_0_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
