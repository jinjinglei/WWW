var skins;
(function (skins) {
    var game;
    (function (game) {
        var FriendListNullItemSkin = (function (_super) {
            __extends(FriendListNullItemSkin, _super);
            function FriendListNullItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 54;
                this.elementsContent = [this.ico_background0_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", []),
                    new egret.gui.State("apply", [])
                ];
            }
            var d = __define,c=FriendListNullItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FriendListNullItemSkin._skinParts;
                }
            );
            p.ico_background0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_background0 = t;
                this.__s(t, ["height", "left", "right", "scale9Grid", "source"], [72, 0, 0, egret.gui.getScale9Grid("52,22,296,10"), "bkg_xiongdi_item"]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "verticalAlign", "verticalCenter", "width"], [54, -1.5, 18, "暂无信息", "center", "middle", 12, 379]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "right", "y"], [44, 0, 0, 0]);
                t.elementsContent = [this.label_name_i()];
                return t;
            };
            FriendListNullItemSkin._skinParts = ["ico_background0", "label_name"];
            return FriendListNullItemSkin;
        })(egret.gui.Skin);
        game.FriendListNullItemSkin = FriendListNullItemSkin;
        egret.registerClass(FriendListNullItemSkin,"skins.game.FriendListNullItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
