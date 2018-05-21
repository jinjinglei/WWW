var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Ico_Soul_Skin = (function (_super) {
            __extends(Ico_Soul_Skin, _super);
            function Ico_Soul_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [74, 73]);
                this.elementsContent = [this.ico_border_i(), this.ico_i(), this.ui_summon_i(), this.rect_touch_i(), this.grp_own_i(), this.grp_no_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Ico_Soul_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Ico_Soul_Skin._skinParts;
                }
            );
            p.grp_no_i = function () {
                var t = new egret.gui.Group();
                this.grp_no = t;
                this.__s(t, ["horizontalCenter", "visible", "y"], [-4.5, false, 0]);
                t.elementsContent = [this.label_null_name_i()];
                return t;
            };
            p.grp_own_i = function () {
                var t = new egret.gui.Group();
                this.grp_own = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [1, 19]);
                t.elementsContent = [this.bar_hp_i(), this.label_name_i()];
                return t;
            };
            p.ico_border_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_border = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "blk_kong", 0]);
                return t;
            };
            p.ico_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "stroke", "text", "textAlign", "verticalCenter"], ["黑体", 1, 15, 1, "XX元婴", "center", 46.5]);
                return t;
            };
            p.label_null_name_i = function () {
                var t = new mo.gui.Label();
                this.label_null_name = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "stroke", "text", "textAlign", "verticalCenter"], ["黑体", 7, 15, 1, "XX元婴", "center", 46.5]);
                return t;
            };
            p.rect_touch_i = function () {
                var t = new egret.gui.UIAsset();
                this.rect_touch = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "touch_rect", 0]);
                return t;
            };
            p.bar_hp_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_hp = t;
                this.__s(t, ["skinName", "value", "x", "y"], [skins.comp.Bar_Soul_Skin, 100, 2, 76]);
                return t;
            };
            p.ui_summon_i = function () {
                var t = new egret.gui.UIAsset();
                this.ui_summon = t;
                this.__s(t, ["source", "x", "y"], ["ico_yizaohuanf", 12, 48]);
                return t;
            };
            Ico_Soul_Skin._skinParts = ["ico_border", "ico", "ui_summon", "rect_touch", "bar_hp", "label_name", "grp_own", "label_null_name", "grp_no"];
            return Ico_Soul_Skin;
        })(egret.gui.Skin);
        comp.Ico_Soul_Skin = Ico_Soul_Skin;
        egret.registerClass(Ico_Soul_Skin,"skins.comp.Ico_Soul_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
