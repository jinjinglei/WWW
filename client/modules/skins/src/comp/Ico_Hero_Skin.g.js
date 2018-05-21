var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Ico_Hero_Skin = (function (_super) {
            __extends(Ico_Hero_Skin, _super);
            function Ico_Hero_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [60, 60]);
                this.elementsContent = [this.__4_i(), this.__5_i()];
                this.ico_i();
                this.__6_i();
                this.img_mask_i();
                this.img_light_border_i();
                this.img_red_i();
                this.label_unlock_lvl_i();
                this.touch_rect_i();
                this.__7_i();
                this.img_pos_i();
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.AddItems("ico", "", "last", ""),
                        new egret.gui.AddItems("img_mask", "", "last", ""),
                        new egret.gui.AddItems("img_light_border", "", "last", ""),
                        new egret.gui.AddItems("img_red", "", "last", ""),
                        new egret.gui.AddItems("touch_rect", "", "last", ""),
                        new egret.gui.AddItems("img_pos", "", "last", ""),
                        new egret.gui.SetProperty("__5", "visible", false),
                        new egret.gui.SetProperty("img_mask", "visible", false),
                        new egret.gui.SetProperty("img_light_border", "y", -2),
                        new egret.gui.SetProperty("img_light_border", "x", -1),
                        new egret.gui.SetProperty("__7", "visible", false)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("__6", "", "last", "")
                    ]),
                    new egret.gui.State("unlock", [
                        new egret.gui.AddItems("label_unlock_lvl", "", "last", ""),
                        new egret.gui.AddItems("touch_rect", "", "last", ""),
                        new egret.gui.AddItems("__7", "", "last", "")
                    ])
                ];
            }
            var d = __define,c=Ico_Hero_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Ico_Hero_Skin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__5 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_gray_head", 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__6 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_role_lock", 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__7 = t;
                this.__s(t, ["source", "x", "y"], ["ico_small_add", 37, 34]);
                return t;
            };
            p.ico_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico = t;
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [52, 0, "avatar_1_0_0", 0, 52]);
                return t;
            };
            p.img_light_border_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_light_border = t;
                this.__s(t, ["autoScale", "height", "source", "visible", "width"], [false, 62, "border_light", false, 61]);
                return t;
            };
            p.img_mask_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_mask = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_mask", 0]);
                return t;
            };
            p.img_pos_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_pos = t;
                this.__s(t, ["source", "x", "y"], ["ico_num1", -2, -1]);
                return t;
            };
            p.img_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 41, -9]);
                return t;
            };
            p.label_unlock_lvl_i = function () {
                var t = new egret.gui.Label();
                this.label_unlock_lvl = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalCenter", "width"], ["楷体", 38, 0, 15, "%s级解锁", "left", 0xA79F9F, 0, 46]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "touchEnabled", "x", "y"], [false, "border_light2", false, 0, 0]);
                return t;
            };
            p.touch_rect_i = function () {
                var t = new egret.gui.UIAsset();
                this.touch_rect = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [60, "touch_rect", 60, 0, 0]);
                return t;
            };
            Ico_Hero_Skin._skinParts = ["ico", "img_mask", "img_light_border", "img_red", "label_unlock_lvl", "touch_rect", "img_pos"];
            return Ico_Hero_Skin;
        })(egret.gui.Skin);
        comp.Ico_Hero_Skin = Ico_Hero_Skin;
        egret.registerClass(Ico_Hero_Skin,"skins.comp.Ico_Hero_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
