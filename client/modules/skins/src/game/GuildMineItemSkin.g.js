var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildMineItemSkin = (function (_super) {
            __extends(GuildMineItemSkin, _super);
            function GuildMineItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [312, 232]);
                this.elementsContent = [this.__6_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildMineItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildMineItemSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("textAlign", "center");
                this.__s(t, ["source", "x", "y"], ["btn_txt_gongxian", 70, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_baopen", 57]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [312, 232, -110, -123]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_enter_i()];
                return t;
            };
            p.btn_enter_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_enter = t;
                this.__s(t, ["source", "x", "y"], ["ico_dianjijinru", 55, 246]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bg_gongxian", 1, -2]);
                return t;
            };
            GuildMineItemSkin._skinParts = ["btn_enter"];
            return GuildMineItemSkin;
        })(egret.gui.Skin);
        game.GuildMineItemSkin = GuildMineItemSkin;
        egret.registerClass(GuildMineItemSkin,"skins.game.GuildMineItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
