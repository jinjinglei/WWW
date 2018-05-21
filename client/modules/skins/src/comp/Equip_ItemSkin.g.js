var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Equip_ItemSkin = (function (_super) {
            __extends(Equip_ItemSkin, _super);
            function Equip_ItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [73, 73]);
                this.elementsContent = [this.ico_item_i(), this.img_green_plus_i(), this.img_num_bg_i(), this.label_plus_i(), this.label_star_i(), this.img_red_i(), this.rect_touch_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Equip_ItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Equip_ItemSkin._skinParts;
                }
            );
            p.img_green_plus_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_green_plus = t;
                this.__s(t, ["source", "x", "y"], ["ico_plus_3", 14, 18]);
                return t;
            };
            p.img_num_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_num_bg = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [22, "panel_mask", 37, 30, 47]);
                return t;
            };
            p.img_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 60, -14]);
                return t;
            };
            p.label_plus_i = function () {
                var t = new mo.gui.Label();
                this.label_plus = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 20, 18, "+%s", "right", 16760865, 63, 4, 48]);
                return t;
            };
            p.label_star_i = function () {
                var t = new mo.gui.Label();
                this.label_star = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 20, 18, 1, "%s星", "right", 0xFFC021, 63, 5, 5]);
                return t;
            };
            p.rect_touch_i = function () {
                var t = new egret.gui.UIAsset();
                this.rect_touch = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [73, "touch_rect", 73, 0, 0]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                t.horizontalCenter = 0;
                return t;
            };
            Equip_ItemSkin._skinParts = ["ico_item", "img_green_plus", "img_num_bg", "label_plus", "label_star", "img_red", "rect_touch"];
            return Equip_ItemSkin;
        })(egret.gui.Skin);
        comp.Equip_ItemSkin = Equip_ItemSkin;
        egret.registerClass(Equip_ItemSkin,"skins.comp.Equip_ItemSkin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
