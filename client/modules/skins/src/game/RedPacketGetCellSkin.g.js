var skins;
(function (skins) {
    var game;
    (function (game) {
        var RedPacketGetCellSkin = (function (_super) {
            __extends(RedPacketGetCellSkin, _super);
            function RedPacketGetCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [37, 380]);
                this.elementsContent = [this.__4_i(), this.label_name_i(), this.ico_item_i(), this.label_rmb_i(), this.ico_best_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RedPacketGetCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RedPacketGetCellSkin._skinParts;
                }
            );
            p.ico_best_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_best = t;
                this.__s(t, ["source", "x", "y"], ["ico_souqizuijia", 5, 4]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                this.__s(t, ["source", "verticalCenter", "x"], ["ico_yuanbao", 0, 343]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "玩家玩家玩家", 96, 8]);
                return t;
            };
            p.label_rmb_i = function () {
                var t = new egret.gui.Label();
                this.label_rmb = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "999", "right", 0xEBA800, 153, 185, 6]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_ditugd";
                return t;
            };
            RedPacketGetCellSkin._skinParts = ["label_name", "ico_item", "label_rmb", "ico_best"];
            return RedPacketGetCellSkin;
        })(egret.gui.Skin);
        game.RedPacketGetCellSkin = RedPacketGetCellSkin;
        egret.registerClass(RedPacketGetCellSkin,"skins.game.RedPacketGetCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
