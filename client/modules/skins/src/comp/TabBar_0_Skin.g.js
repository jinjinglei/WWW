var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var TabBar_0_Skin = (function (_super) {
            __extends(TabBar_0_Skin, _super);
            function TabBar_0_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.dataGroup_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=TabBar_0_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TabBar_0_Skin._skinParts;
                }
            );
            p.dataGroup_i = function () {
                var t = new egret.gui.DataGroup();
                this.dataGroup = t;
                this.__s(t, ["percentHeight", "itemRenderer", "itemRendererSkinName", "percentWidth"], [100, new egret.gui.ClassFactory(egret.gui.TabBarButton), skins.comp.TabBarBtn_1_Skin, 100]);
                t.layout = this.__3_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            TabBar_0_Skin._skinParts = ["dataGroup"];
            return TabBar_0_Skin;
        })(egret.gui.Skin);
        comp.TabBar_0_Skin = TabBar_0_Skin;
        egret.registerClass(TabBar_0_Skin,"skins.comp.TabBar_0_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
