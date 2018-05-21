var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarGuildListSkin = (function (_super) {
            __extends(GuildWarGuildListSkin, _super);
            function GuildWarGuildListSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.list_guild_i(), this.__5_i(), this.btn_close_i(), this.__6_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarGuildListSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarGuildListSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [1, 18, "选择行会进行攻击，抢夺行会点数", 0x20A5E3, 10, 741]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [-3.5, "tit_txt_hanghuiliebiao", 38]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 424, 51]);
                return t;
            };
            p.list_guild_i = function () {
                var t = new egret.gui.List();
                this.list_guild = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "x", "y"], [591, 0.5, skins.game.GuildWarGuildCellSkin, 10, 106]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "und_tongyongdiban", 0, 10, 10]);
                return t;
            };
            GuildWarGuildListSkin._skinParts = ["list_guild", "btn_close"];
            return GuildWarGuildListSkin;
        })(egret.gui.Skin);
        game.GuildWarGuildListSkin = GuildWarGuildListSkin;
        egret.registerClass(GuildWarGuildListSkin,"skins.game.GuildWarGuildListSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
