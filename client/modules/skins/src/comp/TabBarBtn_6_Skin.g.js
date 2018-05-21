var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var TabBarBtn_6_Skin = (function (_super) {
            __extends(TabBarBtn_6_Skin, _super);
            function TabBarBtn_6_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [39, 120]);
                this.elementsContent = [this.__8_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("__7", "source", "tab_xintp_0")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__7", "source", "tab_xintp_1")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__7", "source", "tab_xintp_0"),
                        new egret.gui.SetProperty("", "width", 122)
                    ]),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "tab_xintp_1")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "tab_xintp_1")
                    ]),
                    new egret.gui.State("disabledAndSelected", [
                        new egret.gui.SetProperty("__7", "source", "tab_xintp_0")
                    ])
                ];
            }
            var d = __define,c=TabBarBtn_6_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TabBarBtn_6_Skin._skinParts;
                }
            );
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [39, 0, 0, 120]);
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
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "tab_xintp_0", 0]);
                return t;
            };
            TabBarBtn_6_Skin._skinParts = ["labelDisplay"];
            return TabBarBtn_6_Skin;
        })(egret.gui.Skin);
        comp.TabBarBtn_6_Skin = TabBarBtn_6_Skin;
        egret.registerClass(TabBarBtn_6_Skin,"skins.comp.TabBarBtn_6_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
