var skins;
(function (skins) {
    var game;
    (function (game) {
        var RedPacketDetailCellSkin = (function (_super) {
            __extends(RedPacketDetailCellSkin, _super);
            function RedPacketDetailCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [33, 370]);
                this.elementsContent = [this.__4_i(), this.label_name_i(), this.img_icon_i(), this.label_get_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RedPacketDetailCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RedPacketDetailCellSkin._skinParts;
                }
            );
            p.img_icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_icon = t;
                this.__s(t, ["source", "verticalCenter", "x"], ["ico_yuanbao", 0.5, 184]);
                return t;
            };
            p.label_get_i = function () {
                var t = new egret.gui.Label();
                this.label_get = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalCenter", "width", "x"], [22, "999", "right", 0xEBA800, 0.5, 142, 203]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width", "x", "y"], [18, "获得金钥匙数量:", "left", 0xFFFFFF, "middle", 0, 190, 6, 10]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "width"], [0, "ico_dia", 0, 370]);
                return t;
            };
            RedPacketDetailCellSkin._skinParts = ["label_name", "img_icon", "label_get"];
            return RedPacketDetailCellSkin;
        })(egret.gui.Skin);
        game.RedPacketDetailCellSkin = RedPacketDetailCellSkin;
        egret.registerClass(RedPacketDetailCellSkin,"skins.game.RedPacketDetailCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
