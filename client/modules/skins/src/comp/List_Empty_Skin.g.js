var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var List_Empty_Skin = (function (_super) {
            __extends(List_Empty_Skin, _super);
            function List_Empty_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.scroller_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=List_Empty_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return List_Empty_Skin._skinParts;
                }
            );
            p.dataGroup_i = function () {
                var t = new egret.gui.DataGroup();
                this.dataGroup = t;
                t.layout = this.__3_i();
                return t;
            };
            p.scroller_i = function () {
                var t = new egret.gui.Scroller();
                this.scroller = t;
                this.__s(t, ["percentHeight", "horizontalScrollPolicy", "percentWidth"], [100, "off", 100]);
                t.viewport = this.dataGroup_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "contentJustify"]);
                return t;
            };
            List_Empty_Skin._skinParts = ["dataGroup", "scroller"];
            return List_Empty_Skin;
        })(egret.gui.Skin);
        comp.List_Empty_Skin = List_Empty_Skin;
        egret.registerClass(List_Empty_Skin,"skins.comp.List_Empty_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
