var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Bar_WorldBoss_Hp_Skin = (function (_super) {
            __extends(Bar_WorldBoss_Hp_Skin, _super);
            function Bar_WorldBoss_Hp_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [46, 465]);
                this.elementsContent = [this.__3_i(), this.thumb_i(), this.track_i(), this.__4_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Bar_WorldBoss_Hp_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Bar_WorldBoss_Hp_Skin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "left", "right", "scale9Grid", "source", "verticalCenter", "x", "y"], [true, 50, 0, 1, egret.gui.getScale9Grid("83,9,56,36"), "ui_xuetiao1", -0.5, 10, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [0, 0, 0, 0, 30, 30]);
                t.elementsContent = [this.labelDisplay_i()];
                return t;
            };
            p.labelDisplay_i = function () {
                var t = new mo.gui.Label();
                this.labelDisplay = t;
                this.__s(t, ["bold", "height", "horizontalCenter", "maxDisplayedLines", "size", "style", "text", "textAlign", "verticalAlign", "verticalCenter", "width"], [true, 22, 0, 1, 16, 0, "100/10000", "center", "middle", 5, 245]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [4, 37, 44, "ui_xuetiao2", 15]);
                return t;
            };
            p.thumb_i = function () {
                var t = new egret.gui.UIAsset();
                this.thumb = t;
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [7, 37, 44, egret.gui.getScale9Grid("5,2,32,18"), "ui_xuetiao", 19]);
                return t;
            };
            p.track_i = function () {
                var t = new egret.gui.UIAsset();
                this.track = t;
                this.__s(t, ["alpha", "bottom", "left", "right", "top"], [0, 7, 37, 44, 19]);
                return t;
            };
            Bar_WorldBoss_Hp_Skin._skinParts = ["thumb", "track", "labelDisplay"];
            return Bar_WorldBoss_Hp_Skin;
        })(egret.gui.Skin);
        comp.Bar_WorldBoss_Hp_Skin = Bar_WorldBoss_Hp_Skin;
        egret.registerClass(Bar_WorldBoss_Hp_Skin,"skins.comp.Bar_WorldBoss_Hp_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
