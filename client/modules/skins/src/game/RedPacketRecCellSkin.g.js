var skins;
(function (skins) {
    var game;
    (function (game) {
        var RedPacketRecCellSkin = (function (_super) {
            __extends(RedPacketRecCellSkin, _super);
            function RedPacketRecCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [37, 370]);
                this.elementsContent = [this.__4_i(), this.ico_item_i(), this.label_rmb_i(), this.label_date_i(), this.label_red_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RedPacketRecCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RedPacketRecCellSkin._skinParts;
                }
            );
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                this.__s(t, ["source", "verticalCenter", "x"], ["ico_yuanbao", 3.5, 213]);
                return t;
            };
            p.label_date_i = function () {
                var t = new egret.gui.Label();
                this.label_date = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "999", "right", 0xEBA800, 120, 248, 6]);
                return t;
            };
            p.label_red_i = function () {
                var t = new egret.gui.Label();
                this.label_red = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "[红包]", 3, 7]);
                return t;
            };
            p.label_rmb_i = function () {
                var t = new egret.gui.Label();
                this.label_rmb = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "999", "right", 0xEBA800, 141, 67, 6]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width"], ["ico_ditugd", 370]);
                return t;
            };
            RedPacketRecCellSkin._skinParts = ["ico_item", "label_rmb", "label_date", "label_red"];
            return RedPacketRecCellSkin;
        })(egret.gui.Skin);
        game.RedPacketRecCellSkin = RedPacketRecCellSkin;
        egret.registerClass(RedPacketRecCellSkin,"skins.game.RedPacketRecCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
