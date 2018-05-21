var skins;
(function (skins) {
    var game;
    (function (game) {
        var FriendListItemSkin = (function (_super) {
            __extends(FriendListItemSkin, _super);
            function FriendListItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 72;
                this.elementsContent = [this.ico_background_i(), this.__7_i(), this.label_value_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", []),
                    new egret.gui.State("apply", [])
                ];
            }
            var d = __define,c=FriendListItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FriendListItemSkin._skinParts;
                }
            );
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "right", "y"], [30, 10, 12, 8]);
                t.layout = this.__6_i();
                t.elementsContent = [this.__5_i(), this.label_vip_i(), this.label_who_i()];
                return t;
            };
            p.ico_background_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_background = t;
                this.__s(t, ["height", "left", "right", "scale9Grid", "source", "y"], [72, 0, 0, egret.gui.getScale9Grid("52,22,296,10"), "bkg_xiongdi_item", 0]);
                return t;
            };
            p.label_value_i = function () {
                var t = new mo.gui.Label();
                this.label_value = t;
                this.__s(t, ["paddingTop", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [3, 16, "USERINFO", "right", "middle", 380, 10, 35]);
                return t;
            };
            p.label_vip_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_vip = t;
                this.__s(t, ["font", "paddingLeft", "paddingTop", "text", "x", "y"], ["vip_font", -8, 3, "0", 55, 9]);
                return t;
            };
            p.label_who_i = function () {
                var t = new mo.gui.Label();
                this.label_who = t;
                this.__s(t, ["paddingTop", "size", "text", "textAlign", "verticalAlign", "x", "y"], [6, 18, "USERINFO", "left", "middle", 72, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("verticalAlign", "bottom");
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [true, 27, "ico_vip", 45, 9, 6]);
                return t;
            };
            FriendListItemSkin._skinParts = ["ico_background", "label_vip", "label_who", "label_value"];
            return FriendListItemSkin;
        })(egret.gui.Skin);
        game.FriendListItemSkin = FriendListItemSkin;
        egret.registerClass(FriendListItemSkin,"skins.game.FriendListItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
