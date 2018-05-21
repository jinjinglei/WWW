var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarDefenceRecCellSkin = (function (_super) {
            __extends(GuildWarDefenceRecCellSkin, _super);
            function GuildWarDefenceRecCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.label_desc_i(), this.ico_def_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarDefenceRecCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarDefenceRecCellSkin._skinParts;
                }
            );
            p.ico_def_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_def = t;
                this.__s(t, ["source", "verticalCenter", "x"], ["ico_pvp_win", 0, 12]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textColor", "width", "x", "y"], [103, 12, 16, "标签\n标签\n标签\n标签", 0xDECBCB, 284, 100, 16]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "icon_yinxiondi";
                return t;
            };
            GuildWarDefenceRecCellSkin._skinParts = ["label_desc", "ico_def"];
            return GuildWarDefenceRecCellSkin;
        })(egret.gui.Skin);
        game.GuildWarDefenceRecCellSkin = GuildWarDefenceRecCellSkin;
        egret.registerClass(GuildWarDefenceRecCellSkin,"skins.game.GuildWarDefenceRecCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
