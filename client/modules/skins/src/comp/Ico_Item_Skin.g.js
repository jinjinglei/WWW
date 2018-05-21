var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Ico_Item_Skin = (function (_super) {
            __extends(Ico_Item_Skin, _super);
            function Ico_Item_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [74, 73]);
                this.elementsContent = [this.ico_border_i(), this.ico_i(), this.ico_job_i(), this.label_count_i(), this.label_text_i(), this.ico_equipMark_i(), this.rect_touch_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Ico_Item_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Ico_Item_Skin._skinParts;
                }
            );
            p.ico_equipMark_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_equipMark = t;
                this.__s(t, ["height", "width", "x", "y"], [20, 20, 5, 5]);
                return t;
            };
            p.ico_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                return t;
            };
            p.ico_job_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_job = t;
                this.__s(t, ["height", "width", "x", "y"], [20, 20, 48, 5]);
                return t;
            };
            p.label_count_i = function () {
                var t = new egret.gui.Label();
                this.label_count = t;
                this.__s(t, ["bottom", "right", "size", "text"], [5, 6, 18, "32"]);
                return t;
            };
            p.label_text_i = function () {
                var t = new mo.gui.Label();
                this.label_text = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "stroke", "text", "textAlign", "verticalCenter"], ["黑体", 1, 15, 1, "可装备", "center", 46.5]);
                return t;
            };
            p.rect_touch_i = function () {
                var t = new egret.gui.UIAsset();
                this.rect_touch = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "touch_rect", 0]);
                return t;
            };
            p.ico_border_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_border = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "blk_kong", 0]);
                return t;
            };
            Ico_Item_Skin._skinParts = ["ico_border", "ico", "ico_job", "label_count", "label_text", "ico_equipMark", "rect_touch"];
            return Ico_Item_Skin;
        })(egret.gui.Skin);
        comp.Ico_Item_Skin = Ico_Item_Skin;
        egret.registerClass(Ico_Item_Skin,"skins.comp.Ico_Item_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
