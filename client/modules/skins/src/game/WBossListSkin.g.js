var skins;
(function (skins) {
    var game;
    (function (game) {
        var WBossListSkin = (function (_super) {
            __extends(WBossListSkin, _super);
            function WBossListSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.img_title_i(), this.btn_close_i(), this.btn_help_i(), this.__5_i(), this.list_call_i(), this.__7_i(), this.__8_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WBossListSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return WBossListSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bosstou", 41, 92]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "orientation", "requestedColumnCount", "requestedRowCount", "verticalGap"], ["left", "rows", 1, 4, 10]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "source", "visible", "x", "y"], [0.8, "pre_boss之战世界", false, 0, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [60, 2, 16, "成功挑战世界BOSS后其等级会提升，奖励也更为丰富\n挑战失败则世界BOSS等级会下降，挑战难度及奖励降低", "center", 0x118FA4, 400, 744]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 408, -10]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", -2, -7]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [7, "tit_txt_g_shijieboss", 13]);
                return t;
            };
            p.list_call_i = function () {
                var t = new egret.gui.List();
                this.list_call = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [565, skins.game.WBossCellSkin, 418, 32, 140]);
                t.layout = this.__6_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            WBossListSkin._skinParts = ["img_title", "btn_close", "btn_help", "list_call"];
            return WBossListSkin;
        })(egret.gui.Skin);
        game.WBossListSkin = WBossListSkin;
        egret.registerClass(WBossListSkin,"skins.game.WBossListSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
