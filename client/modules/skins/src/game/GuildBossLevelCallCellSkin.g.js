var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildBossLevelCallCellSkin = (function (_super) {
            __extends(GuildBossLevelCallCellSkin, _super);
            function GuildBossLevelCallCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.img_bg_i(), this.img_boss_i(), this.label_level_i(), this.label_leftNum_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildBossLevelCallCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildBossLevelCallCellSkin._skinParts;
                }
            );
            p.img_boss_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_boss = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [true, 124, "ico_mohuabianjiang", 120, 41, 6]);
                return t;
            };
            p.label_leftNum_i = function () {
                var t = new mo.gui.Label();
                this.label_leftNum = t;
                this.__s(t, ["size", "stroke", "text", "textAlign", "textColor", "verticalCenter", "x", "y"], [18, 2, "未击杀Boss:%s", "right", 0xFFFFFF, 19.5, 262, 10]);
                return t;
            };
            p.label_level_i = function () {
                var t = new mo.gui.Label();
                this.label_level = t;
                this.__s(t, ["right", "size", "stroke", "text", "textAlign", "textColor", "verticalCenter"], [20, 24, 2, "%s级行会BOSS", "right", 0xF9E23A, -9.5]);
                return t;
            };
            p.img_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_bg = t;
                this.__s(t, ["autoScale", "bottom", "source"], [false, 0, "panel_ditus"]);
                return t;
            };
            GuildBossLevelCallCellSkin._skinParts = ["img_bg", "img_boss", "label_level", "label_leftNum"];
            return GuildBossLevelCallCellSkin;
        })(egret.gui.Skin);
        game.GuildBossLevelCallCellSkin = GuildBossLevelCallCellSkin;
        egret.registerClass(GuildBossLevelCallCellSkin,"skins.game.GuildBossLevelCallCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
