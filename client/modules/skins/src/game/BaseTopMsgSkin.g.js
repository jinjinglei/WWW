var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseTopMsgSkin = (function (_super) {
            __extends(BaseTopMsgSkin, _super);
            function BaseTopMsgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.label_msg_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseTopMsgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseTopMsgSkin._skinParts;
                }
            );
            p.label_msg_i = function () {
                var t = new mo.gui.Label();
                this.label_msg = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "y"], [0, 22, "标签", "center", 262]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "source", "y"], [0, 0, "panel_top_notice", 261]);
                return t;
            };
            BaseTopMsgSkin._skinParts = ["label_msg"];
            return BaseTopMsgSkin;
        })(egret.gui.Skin);
        game.BaseTopMsgSkin = BaseTopMsgSkin;
        egret.registerClass(BaseTopMsgSkin,"skins.game.BaseTopMsgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
