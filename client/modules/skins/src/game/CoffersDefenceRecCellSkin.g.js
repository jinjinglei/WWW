var skins;
(function (skins) {
    var game;
    (function (game) {
        var CoffersDefenceRecCellSkin = (function (_super) {
            __extends(CoffersDefenceRecCellSkin, _super);
            function CoffersDefenceRecCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.label_desc_i(), this.ico_def_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CoffersDefenceRecCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CoffersDefenceRecCellSkin._skinParts;
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
            CoffersDefenceRecCellSkin._skinParts = ["label_desc", "ico_def"];
            return CoffersDefenceRecCellSkin;
        })(egret.gui.Skin);
        game.CoffersDefenceRecCellSkin = CoffersDefenceRecCellSkin;
        egret.registerClass(CoffersDefenceRecCellSkin,"skins.game.CoffersDefenceRecCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
