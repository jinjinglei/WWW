var skins;
(function (skins) {
    var game;
    (function (game) {
        var MsgTipItemSkin = (function (_super) {
            __extends(MsgTipItemSkin, _super);
            function MsgTipItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.group_container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=MsgTipItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MsgTipItemSkin._skinParts;
                }
            );
            p.group_container_i = function () {
                var t = new egret.gui.Group();
                this.group_container = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                t.elementsContent = [this.__3_i(), this.label_msg_i()];
                return t;
            };
            p.label_msg_i = function () {
                var t = new mo.gui.Label();
                this.label_msg = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [-10, -10, -10, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", -10]);
                return t;
            };
            MsgTipItemSkin._skinParts = ["label_msg", "group_container"];
            return MsgTipItemSkin;
        })(egret.gui.Skin);
        game.MsgTipItemSkin = MsgTipItemSkin;
        egret.registerClass(MsgTipItemSkin,"skins.game.MsgTipItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
