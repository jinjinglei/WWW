var skins;
(function (skins) {
    var game;
    (function (game) {
        var DefArenaGainSkin = (function (_super) {
            __extends(DefArenaGainSkin, _super);
            function DefArenaGainSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.label_desc_i(), this.label_props_i(), this.btn_close_i(), this.preview_i(), this.label_name_i(), this.__6_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=DefArenaGainSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return DefArenaGainSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_bazhutequan", 185, 14]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_pifeng", 57, 375]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 412, -9]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["height", "size", "text", "width", "x", "y"], [164, 20, "说明", 352, 60, 105]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "x", "y"], [22, 87, 325]);
                return t;
            };
            p.label_props_i = function () {
                var t = new mo.gui.Label();
                this.label_props = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "width", "x", "y"], [300, 20, 20, "说明", 200, 240, 386]);
                return t;
            };
            p.preview_i = function () {
                var t = new egret.gui.UIAsset();
                this.preview = t;
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter"], [0.6, 0, "pre_霸主特权", 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_pifeng", 0]);
                return t;
            };
            DefArenaGainSkin._skinParts = ["label_desc", "label_props", "btn_close", "preview", "label_name"];
            return DefArenaGainSkin;
        })(egret.gui.Skin);
        game.DefArenaGainSkin = DefArenaGainSkin;
        egret.registerClass(DefArenaGainSkin,"skins.game.DefArenaGainSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
