var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarGuildCellSkin = (function (_super) {
            __extends(GuildWarGuildCellSkin, _super);
            function GuildWarGuildCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.__6_i(), this.label_live_i(), this.label_score_i(), this.btn_rob_i(), this.barScore_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarGuildCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarGuildCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [18, 17]);
                t.layout = this.__5_i();
                t.elementsContent = [this.label_name_i(), this.label_server_i()];
                return t;
            };
            p.barScore_i = function () {
                var t = new egret.gui.ProgressBar();
                this.barScore = t;
                this.__s(t, ["skinName", "slideDuration", "width", "x", "y"], [skins.comp.Bar_5_0_1_Skin, 0, 251, 160, 68]);
                return t;
            };
            p.btn_rob_i = function () {
                var t = new egret.gui.Button();
                this.btn_rob = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_qiangduiei", "按钮", skins.comp.Btn_3_24_Skin, 302, 20]);
                return t;
            };
            p.label_live_i = function () {
                var t = new mo.gui.Label();
                this.label_live = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "城门存活：%s/%s", 18, 45]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "%sLv.%s", 0xF196E7, 0, 0]);
                return t;
            };
            p.label_score_i = function () {
                var t = new mo.gui.Label();
                this.label_score = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "行会点数：%s", 18, 73]);
                return t;
            };
            p.label_server_i = function () {
                var t = new mo.gui.Label();
                this.label_server = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "服务器", 0x59AA5C, 110, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_dituxisl";
                return t;
            };
            GuildWarGuildCellSkin._skinParts = ["label_name", "label_server", "label_live", "label_score", "btn_rob", "barScore"];
            return GuildWarGuildCellSkin;
        })(egret.gui.Skin);
        game.GuildWarGuildCellSkin = GuildWarGuildCellSkin;
        egret.registerClass(GuildWarGuildCellSkin,"skins.game.GuildWarGuildCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
