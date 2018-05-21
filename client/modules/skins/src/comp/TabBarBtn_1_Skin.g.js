var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var TabBarBtn_1_Skin = (function (_super) {
            __extends(TabBarBtn_1_Skin, _super);
            function TabBarBtn_1_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "minWidth", "width"], [40, 140, 95]);
                this.elementsContent = [this.__8_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("__7", "source", "tab_btn_0"),
                        new egret.gui.SetProperty("__7", "width", 95),
                        new egret.gui.SetProperty("__7", "height", 40)
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__7", "source", "tab_btn_1"),
                        new egret.gui.SetProperty("__7", "width", 95),
                        new egret.gui.SetProperty("__7", "height", 40),
                        new egret.gui.SetProperty("", "minWidth", 140)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__7", "source", "tab_btn_0"),
                        new egret.gui.SetProperty("__7", "width", 95),
                        new egret.gui.SetProperty("__7", "visible", true),
                        new egret.gui.SetProperty("__7", "height", 40)
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "tab_btn_1"),
                        new egret.gui.SetProperty("__7", "width", 95),
                        new egret.gui.SetProperty("__7", "height", 40),
                        new egret.gui.SetProperty("__8", "width", 95),
                        new egret.gui.SetProperty("", "width", 95),
                        new egret.gui.SetProperty("", "minWidth", 95)
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__7", "width", 95),
                        new egret.gui.SetProperty("__7", "source", "tab_btn_1"),
                        new egret.gui.SetProperty("__7", "height", 40),
                        new egret.gui.SetProperty("", "width", 95)
                    ]),
                    new egret.gui.State("disabledAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "tab_btn_0"),
                        new egret.gui.SetProperty("__7", "width", 95),
                        new egret.gui.SetProperty("__7", "height", 40)
                    ])
                ];
            }
            var d = __define,c=TabBarBtn_1_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TabBarBtn_1_Skin._skinParts;
                }
            );
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__8 = t;
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [40, 0, 0, 95]);
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
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "tab_btn_0", 0]);
                return t;
            };
            TabBarBtn_1_Skin._skinParts = ["labelDisplay"];
            return TabBarBtn_1_Skin;
        })(egret.gui.Skin);
        comp.TabBarBtn_1_Skin = TabBarBtn_1_Skin;
        egret.registerClass(TabBarBtn_1_Skin,"skins.comp.TabBarBtn_1_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
