var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildRankItemSkin = (function (_super) {
            __extends(GuildRankItemSkin, _super);
            function GuildRankItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 440;
                this.elementsContent = [this.__4_i(), this.label_rank_i(), this.__5_i(), this.label_id_i(), this.__7_i(), this.label_guildName_i(), this.__8_i(), this.label_userName_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildRankItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildRankItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [16, "行会ID: ", 200, 12]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [299, 12]);
                t.layout = this.__6_i();
                t.elementsContent = [this.label_rankType_i(), this.label_level_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "x", "y"], [16, "会长: ", "center", 200, 35]);
                return t;
            };
            p.label_guildName_i = function () {
                var t = new egret.gui.Label();
                this.label_guildName = t;
                this.__s(t, ["size", "text", "textAlign", "width", "x", "y"], [16, "s1.999名字六个字啊", "center", 164, 39, 20]);
                return t;
            };
            p.label_id_i = function () {
                var t = new egret.gui.Label();
                this.label_id = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "999", 263, 12]);
                return t;
            };
            p.label_level_i = function () {
                var t = new egret.gui.Label();
                this.label_level = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "Lv.2", 43, 0]);
                return t;
            };
            p.label_rankType_i = function () {
                var t = new egret.gui.Label();
                this.label_rankType = t;
                this.__s(t, ["size", "text"], [16, "等级"]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new egret.gui.Label();
                this.label_rank = t;
                this.__s(t, ["size", "text", "textAlign", "width", "x", "y"], [16, "100", "center", 40, 5, 20]);
                return t;
            };
            p.label_userName_i = function () {
                var t = new egret.gui.Label();
                this.label_userName = t;
                this.__s(t, ["size", "text", "textAlign", "x", "y"], [16, "s1.999名字六个字啊", "center", 246, 35]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source"], [64, 0, "ico_liebiao_bg"]);
                return t;
            };
            GuildRankItemSkin._skinParts = ["label_rank", "label_id", "label_rankType", "label_level", "label_guildName", "label_userName"];
            return GuildRankItemSkin;
        })(egret.gui.Skin);
        game.GuildRankItemSkin = GuildRankItemSkin;
        egret.registerClass(GuildRankItemSkin,"skins.game.GuildRankItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
