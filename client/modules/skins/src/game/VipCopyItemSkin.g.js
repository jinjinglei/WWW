var skins;
(function (skins) {
    var game;
    (function (game) {
        var VipCopyItemSkin = (function (_super) {
            __extends(VipCopyItemSkin, _super);
            function VipCopyItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.img_icon_i(), this.__5_i(), this.img_txt_bg_i(), this.label_unlockLvl_i(), this.label_name_i(), this.grp_star_i(), this.touch_rect_i()];
                this.__6_i();
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("label_unlockLvl", "visible", false)
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("label_unlockLvl", "visible", false)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("__6", "", "before", "label_unlockLvl"),
                        new egret.gui.SetProperty("touch_rect", "visible", false)
                    ])
                ];
            }
            var d = __define,c=VipCopyItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VipCopyItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_wenziditug", 160, 20]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Rect();
                this.__6 = t;
                this.__s(t, ["alpha", "fillColor", "height", "width", "x", "y"], [0.6, 0x000000, 133, 406, 8, 8]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star2", "ico_star", false, 0, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star1", "ico_star", false, 39, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 79, 0]);
                return t;
            };
            p.grp_star_i = function () {
                var t = new egret.gui.Group();
                this.grp_star = t;
                this.__s(t, ["x", "y"], [265, 100]);
                t.elementsContent = [this.__7_i(), this.__8_i(), this.__9_i()];
                return t;
            };
            p.img_icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_icon = t;
                this.__s(t, ["source", "x", "y"], ["ico_maoxianf", 18, 21]);
                return t;
            };
            p.img_txt_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_txt_bg = t;
                this.__s(t, ["source", "x", "y"], ["ico_wenziditugxiao", 85, 101]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 25, 21, 1, 0x000000, "剧毒蜘蛛 120级项链", "center", 0xF2C65E, 250, 154, 46]);
                return t;
            };
            p.label_unlockLvl_i = function () {
                var t = new mo.gui.Label();
                this.label_unlockLvl = t;
                this.__s(t, ["height", "size", "text", "verticalAlign", "x", "y"], [27, 18, "人物 %s 级开启", "middle", 212, 99]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x"], ["icon_fubengtongyongdi", 0]);
                return t;
            };
            p.touch_rect_i = function () {
                var t = new egret.gui.UIAsset();
                this.touch_rect = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [137, "touch_rect", 412, 3, 6]);
                return t;
            };
            VipCopyItemSkin._skinParts = ["img_icon", "img_txt_bg", "label_unlockLvl", "label_name", "grp_star", "touch_rect"];
            return VipCopyItemSkin;
        })(egret.gui.Skin);
        game.VipCopyItemSkin = VipCopyItemSkin;
        egret.registerClass(VipCopyItemSkin,"skins.game.VipCopyItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
