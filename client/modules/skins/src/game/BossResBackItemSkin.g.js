var skins;
(function (skins) {
    var game;
    (function (game) {
        var BossResBackItemSkin = (function (_super) {
            __extends(BossResBackItemSkin, _super);
            function BossResBackItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 131;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.btn_get_i(), this.ico_hasGet_i(), this.grp_res_i(), this.__10_i(), this.label_name_i(), this.grp_items_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BossResBackItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BossResBackItemSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item0", true, 0, 0]);
                return t;
            };
            p.__12_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item1", true, 83, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item2", true, 165, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item3", true, 246, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [2, "right"]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "source", "x"], [0, "ico_zhiyuanzhaohuidi", 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [16, 1, "可找回资源", 0xFDFDC2, 6, 9]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "x", "y"], ["黑体", 20, 18, "消耗:", 0xE2AC37, 0, 6]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 16, "100", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [2, "middle"]);
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [40, "btn_txt_zhaohui", skins.comp.Btn_3_42_Skin, 95, 312, 42]);
                return t;
            };
            p.grp_items_i = function () {
                var t = new egret.gui.Group();
                this.grp_items = t;
                this.__s(t, ["horizontalCenter", "verticalCenter", "width", "x", "y"], [-54, 10.5, 300, 10, 10]);
                t.layout = this.__15_i();
                t.elementsContent = [this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i()];
                return t;
            };
            p.grp_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_res = t;
                this.__s(t, ["height", "x", "y"], [30, 307, 86]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__6_i(), this.__7_i(), this.__8_i()];
                return t;
            };
            p.ico_hasGet_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_hasGet = t;
                this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.8, 0.8, "ico_yizhaohui", 312, 29]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 27, 20, 1, 0x000000, "(40级) xx武士", "center", 0xF2C65E, 187, 119, 10]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [45, "ico_rank_bg_red", 217, 100, -2]);
                return t;
            };
            BossResBackItemSkin._skinParts = ["btn_get", "ico_hasGet", "grp_res", "label_name", "grp_items"];
            return BossResBackItemSkin;
        })(egret.gui.Skin);
        game.BossResBackItemSkin = BossResBackItemSkin;
        egret.registerClass(BossResBackItemSkin,"skins.game.BossResBackItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
