var skins;
(function (skins) {
    var game;
    (function (game) {
        var FiveItemSkin = (function (_super) {
            __extends(FiveItemSkin, _super);
            function FiveItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [120, 415]);
                this.elementsContent = [this.__4_i(), this.img_selected_i(), this.ico_day_i(), this.ico_title_i(), this.label_d_i(), this.label_date_i(), this.img_red_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FiveItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FiveItemSkin._skinParts;
                }
            );
            p.ico_day_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_day = t;
                this.__s(t, ["source", "x", "y"], ["ico_diyitian", 22, 8]);
                return t;
            };
            p.ico_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-2.5, "ico_wentian", -2]);
                return t;
            };
            p.img_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 386, 5]);
                return t;
            };
            p.img_selected_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_selected = t;
                this.__s(t, ["source", "verticalCenter", "x"], ["ico_diband", 0, 4]);
                return t;
            };
            p.label_d_i = function () {
                var t = new mo.gui.Label();
                this.label_d = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "活动时间：", 0xFC0707, 37, 87]);
                return t;
            };
            p.label_date_i = function () {
                var t = new mo.gui.Label();
                this.label_date = t;
                this.__s(t, ["size", "textColor", "x", "y"], [16, 0xFC0707, 120, 87]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "verticalCenter", "width", "x"], [110, egret.gui.getScale9Grid("30,27,11,14"), "panel_huawenlasheng", 0, 415, 0]);
                return t;
            };
            FiveItemSkin._skinParts = ["img_selected", "ico_day", "ico_title", "label_d", "label_date", "img_red"];
            return FiveItemSkin;
        })(egret.gui.Skin);
        game.FiveItemSkin = FiveItemSkin;
        egret.registerClass(FiveItemSkin,"skins.game.FiveItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
