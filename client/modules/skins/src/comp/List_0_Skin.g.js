var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var List_0_Skin = (function (_super) {
            __extends(List_0_Skin, _super);
            function List_0_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=List_0_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return List_0_Skin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "contentJustify"]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Scroller();
                this.__s(t, ["percentHeight", "horizontalScrollPolicy", "percentWidth"], [100, "off", 100]);
                t.viewport = this.dataGroup_i();
                return t;
            };
            p.dataGroup_i = function () {
                var t = new egret.gui.DataGroup();
                this.dataGroup = t;
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [-8, -8, -8, "s9g_inner", -8]);
                return t;
            };
            List_0_Skin._skinParts = ["dataGroup"];
            return List_0_Skin;
        })(egret.gui.Skin);
        comp.List_0_Skin = List_0_Skin;
        egret.registerClass(List_0_Skin,"skins.comp.List_0_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
