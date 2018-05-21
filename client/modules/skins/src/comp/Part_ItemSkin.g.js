var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Part_ItemSkin = (function (_super) {
            __extends(Part_ItemSkin, _super);
            function Part_ItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.img_part_i(), this.img_txt_part_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Part_ItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Part_ItemSkin._skinParts;
                }
            );
            p.img_part_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_part = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ntc_ico_weapon", 0]);
                return t;
            };
            p.img_txt_part_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_txt_part = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "txt_part_weapon", -31]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "eqp_bg_mat", 0]);
                return t;
            };
            Part_ItemSkin._skinParts = ["img_part", "img_txt_part"];
            return Part_ItemSkin;
        })(egret.gui.Skin);
        comp.Part_ItemSkin = Part_ItemSkin;
        egret.registerClass(Part_ItemSkin,"skins.comp.Part_ItemSkin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
