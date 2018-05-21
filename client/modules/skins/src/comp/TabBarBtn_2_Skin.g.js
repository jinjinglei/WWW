var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var TabBarBtn_2_Skin = (function (_super) {
            __extends(TabBarBtn_2_Skin, _super);
            function TabBarBtn_2_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [37, 116]);
                this.elementsContent = [this.__8_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__7", "source", "tab_btn_1")
                    ]),
                    new egret.gui.State("disabled", []),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "tab_btn_1")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "tab_btn_1")
                    ]),
                    new egret.gui.State("disabledAndSelected", [])
                ];
            }
            var d = __define,c=TabBarBtn_2_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TabBarBtn_2_Skin._skinParts;
                }
            );
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [37, 116, 0, 0]);
                t.elementsContent = [this.__7_i(), this.labelDisplay_i()];
                return t;
            };
            p.labelDisplay_i = function () {
                var t = new g_comp.IcoLabel();
                this.labelDisplay = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__7 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "tab_btn_0", 0]);
                return t;
            };
            TabBarBtn_2_Skin._skinParts = ["labelDisplay"];
            return TabBarBtn_2_Skin;
        })(egret.gui.Skin);
        comp.TabBarBtn_2_Skin = TabBarBtn_2_Skin;
        egret.registerClass(TabBarBtn_2_Skin,"skins.comp.TabBarBtn_2_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
