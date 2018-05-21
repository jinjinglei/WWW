var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildBossListSkin = (function (_super) {
            __extends(GuildBossListSkin, _super);
            function GuildBossListSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.img_title_i(), this.btn_close_i(), this.btn_help_i(), this.label_call_time_i(), this.list_call_i(), this.label_extra_cost_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildBossListSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildBossListSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "orientation", "requestedColumnCount", "requestedRowCount", "verticalGap"], ["left", "rows", 1, 4, 10]);
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
                this.__s(t, ["horizontalCenter", "source", "y"], [7, "tit_txt_g_hanghuiboss", 13]);
                return t;
            };
            p.label_call_time_i = function () {
                var t = new mo.gui.Label();
                this.label_call_time = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "width", "y"], [0, 18, "召唤时段", "center", 420, 128]);
                return t;
            };
            p.label_extra_cost_i = function () {
                var t = new mo.gui.Label();
                this.label_extra_cost = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "textColor", "x", "y"], [0, 6, 16, "有行会BOSS被挑战时召唤行会BOSS需额外花费%s元宝", 0x118FA4, 10, 750]);
                return t;
            };
            p.list_call_i = function () {
                var t = new egret.gui.List();
                this.list_call = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [616, 0, 418, 122]);
                t.layout = this.__5_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            GuildBossListSkin._skinParts = ["img_title", "btn_close", "btn_help", "label_call_time", "list_call", "label_extra_cost"];
            return GuildBossListSkin;
        })(egret.gui.Skin);
        game.GuildBossListSkin = GuildBossListSkin;
        egret.registerClass(GuildBossListSkin,"skins.game.GuildBossListSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
