var skins;
(function (skins) {
    var game;
    (function (game) {
        var RedPacketTotalRecCellSkin = (function (_super) {
            __extends(RedPacketTotalRecCellSkin, _super);
            function RedPacketTotalRecCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [33, 370]);
                this.elementsContent = [this.__4_i(), this.__5_i(), this.__6_i(), this.label_get_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RedPacketTotalRecCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RedPacketTotalRecCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 338, 6]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_qiangdeyuanbao", 40, 6]);
                return t;
            };
            p.label_get_i = function () {
                var t = new egret.gui.Label();
                this.label_get = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "999", "right", 0xEBA800, 142, 179, 2]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "y"], ["ico_dia", 370, 0]);
                return t;
            };
            RedPacketTotalRecCellSkin._skinParts = ["label_get"];
            return RedPacketTotalRecCellSkin;
        })(egret.gui.Skin);
        game.RedPacketTotalRecCellSkin = RedPacketTotalRecCellSkin;
        egret.registerClass(RedPacketTotalRecCellSkin,"skins.game.RedPacketTotalRecCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
