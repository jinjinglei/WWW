var skins;
(function (skins) {
    var game;
    (function (game) {
        var FiveDaySkin = (function (_super) {
            __extends(FiveDaySkin, _super);
            function FiveDaySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_close_i(), this.btn_help_i(), this.label_date_i(), this.__6_i(), this.list_items_i(), this.preview_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FiveDaySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FiveDaySkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_wurimubiao1", 190, 9]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "活动时间:", 0xFABD24, 44, 76]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "paddingTop"], [0, 10]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 408, -5]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, -6]);
                return t;
            };
            p.label_date_i = function () {
                var t = new mo.gui.Label();
                this.label_date = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, " ", 0xFABD24, 139, 76]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [660, skins.game.FiveItemSkin, 460, 30, 108]);
                t.layout = this.__7_i();
                return t;
            };
            p.preview_i = function () {
                var t = new egret.gui.UIAsset();
                this.preview = t;
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.6, 0, "pre_5日活动五日目标", 0, false]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            FiveDaySkin._skinParts = ["btn_close", "btn_help", "label_date", "list_items", "preview"];
            return FiveDaySkin;
        })(egret.gui.Skin);
        game.FiveDaySkin = FiveDaySkin;
        egret.registerClass(FiveDaySkin,"skins.game.FiveDaySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
