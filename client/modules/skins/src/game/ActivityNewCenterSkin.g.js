var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewCenterSkin = (function (_super) {
            __extends(ActivityNewCenterSkin, _super);
            function ActivityNewCenterSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.list_items_i(), this.__5_i(), this.__6_i(), this.btn_close_i(), this.btn_help_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewCenterSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewCenterSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "orientation", "requestedColumnCount", "requestedRowCount", "verticalGap"], ["left", "rows", 1, 4, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 10, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "tit_txt_g_huodong", 10, 7]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 1]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 2, 0]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [708, 0, skins.game.ActivityNewCenterCellSkin, 448, 81]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [-7, -32, -32, "panel_bg_vip", -2]);
                return t;
            };
            ActivityNewCenterSkin._skinParts = ["list_items", "btn_close", "btn_help"];
            return ActivityNewCenterSkin;
        })(egret.gui.Skin);
        game.ActivityNewCenterSkin = ActivityNewCenterSkin;
        egret.registerClass(ActivityNewCenterSkin,"skins.game.ActivityNewCenterSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
