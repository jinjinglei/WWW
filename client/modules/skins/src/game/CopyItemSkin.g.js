var skins;
(function (skins) {
    var game;
    (function (game) {
        var CopyItemSkin = (function (_super) {
            __extends(CopyItemSkin, _super);
            function CopyItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__8_i(), this.__9_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("img_no_open", "visible", false),
                        new egret.gui.SetProperty("label_note", "visible", false)
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("img_no_open", "visible", false),
                        new egret.gui.SetProperty("label_note", "visible", false)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__8", "visible", false)
                    ])
                ];
            }
            var d = __define,c=CopyItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CopyItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star2", "ico_star", false, 0, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star1", "ico_star", false, 39, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 79, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__8 = t;
                this.__s(t, ["x", "y"], [3, -7]);
                t.elementsContent = [this.img_open_i(), this.__4_i(), this.label_name_i(), this.label_rest_i(), this.grp_star_i(), this.touch_rect_i(), this.btn_plus_i(), this.img_new_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [3, 0]);
                t.elementsContent = [this.img_no_open_i(), this.label_note_i()];
                return t;
            };
            p.btn_plus_i = function () {
                var t = new egret.gui.Button();
                this.btn_plus = t;
                this.__s(t, ["skinName", "touchChildren", "x", "y"], [skins.comp.Btn_plus_Skin, false, 347, 60]);
                return t;
            };
            p.grp_star_i = function () {
                var t = new egret.gui.Group();
                this.grp_star = t;
                this.__s(t, ["x", "y"], [43, 58]);
                t.elementsContent = [this.__5_i(), this.__6_i(), this.__7_i()];
                return t;
            };
            p.img_new_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_new = t;
                this.__s(t, ["source", "x", "y"], ["ico_new", 371, -3]);
                return t;
            };
            p.img_no_open_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_no_open = t;
                t.setStyle("verticalAlign", "justify");
                this.__s(t, ["source", "x", "y"], ["panel_copy_no_open", 0, 0]);
                return t;
            };
            p.img_open_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_open = t;
                this.__s(t, ["source", "x", "y"], ["panel_copy_2_4_bg", 0, 7]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "size", "stroke", "text", "textAlign", "textColor", "x", "y"], ["宋体", 22, 1, "剧毒蜘蛛 120级项链", "center", 0xFFD230, 13, 21]);
                return t;
            };
            p.label_note_i = function () {
                var t = new egret.gui.Label();
                this.label_note = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 23, 20, 1, "开启条件：通关冰封沉睡之谷", "center", 0xE5D8AB, 312, 41, 42]);
                return t;
            };
            p.label_rest_i = function () {
                var t = new mo.gui.Label();
                this.label_rest = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 20, 18, "今日剩余次数：%s", "right", 0xECD98E, 176, 168, 64]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scaleX", "source", "width", "x", "y"], [23, -1, "panel_gradient", 216, 370, 64]);
                return t;
            };
            p.touch_rect_i = function () {
                var t = new egret.gui.UIAsset();
                this.touch_rect = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [93, "touch_rect", 393, 0, 7]);
                return t;
            };
            CopyItemSkin._skinParts = ["img_open", "label_name", "label_rest", "grp_star", "touch_rect", "btn_plus", "img_new", "img_no_open", "label_note"];
            return CopyItemSkin;
        })(egret.gui.Skin);
        game.CopyItemSkin = CopyItemSkin;
        egret.registerClass(CopyItemSkin,"skins.game.CopyItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
