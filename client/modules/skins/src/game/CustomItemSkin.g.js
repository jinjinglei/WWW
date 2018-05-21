var skins;
(function (skins) {
    var game;
    (function (game) {
        var CustomItemSkin = (function (_super) {
            __extends(CustomItemSkin, _super);
            function CustomItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.grp_item_i(), this.ico_border_i(), this.ico_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CustomItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CustomItemSkin._skinParts;
                }
            );
            p.btn_goto_i = function () {
                var t = new egret.gui.Button();
                this.btn_goto = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_qianwangdingzi", skins.comp.Btn_3_24_Skin, 192, 26]);
                return t;
            };
            p.grp_item_i = function () {
                var t = new egret.gui.Group();
                this.grp_item = t;
                this.__s(t, ["x", "y"], [99, 12]);
                t.elementsContent = [this.label_part_i(), this.btn_goto_i(), this.img_custom_i()];
                return t;
            };
            p.ico_border_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_border = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [-149.5, "blk_kong", -5, 10, 10]);
                return t;
            };
            p.ico_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico = t;
                this.__s(t, ["horizontalCenter", "verticalCenter", "x", "y"], [-150, -5, 10, 10]);
                return t;
            };
            p.img_custom_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_custom = t;
                this.__s(t, ["source", "x", "y"], ["ico_dingzileixing", 0, 30]);
                return t;
            };
            p.label_part_i = function () {
                var t = new mo.gui.Label();
                this.label_part = t;
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "x", "y"], ["宋体", 4, 18, "衣服", 85, 32]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-1, "icon_dietlxg", -5.5]);
                return t;
            };
            CustomItemSkin._skinParts = ["label_part", "btn_goto", "img_custom", "grp_item", "ico_border", "ico"];
            return CustomItemSkin;
        })(egret.gui.Skin);
        game.CustomItemSkin = CustomItemSkin;
        egret.registerClass(CustomItemSkin,"skins.game.CustomItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
