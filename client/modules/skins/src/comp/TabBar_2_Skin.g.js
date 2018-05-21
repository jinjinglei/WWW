var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var TabBar_2_Skin = (function (_super) {
            __extends(TabBar_2_Skin, _super);
            function TabBar_2_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.dataGroup_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=TabBar_2_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TabBar_2_Skin._skinParts;
                }
            );
            p.dataGroup_i = function () {
                var t = new egret.gui.DataGroup();
                this.dataGroup = t;
                this.__s(t, ["percentHeight", "itemRenderer", "itemRendererSkinName", "percentWidth"], [100, new egret.gui.ClassFactory(egret.gui.TabBarButton), skins.comp.TabBarBtn_2_Skin, 100]);
                t.layout = this.__3_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["horizontalAlign", "verticalAlign"], ["center", "bottom"]);
                return t;
            };
            TabBar_2_Skin._skinParts = ["dataGroup"];
            return TabBar_2_Skin;
        })(egret.gui.Skin);
        comp.TabBar_2_Skin = TabBar_2_Skin;
        egret.registerClass(TabBar_2_Skin,"skins.comp.TabBar_2_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
