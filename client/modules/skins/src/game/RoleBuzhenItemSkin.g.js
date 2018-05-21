var skins;
(function (skins) {
    var game;
    (function (game) {
        var RoleBuzhenItemSkin = (function (_super) {
            __extends(RoleBuzhenItemSkin, _super);
            function RoleBuzhenItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [130, 76]);
                this.elementsContent = [this.__4_i(), this.__5_i(), this.ico_i(), this.label_num_i(), this.label_name_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("__5", "visible", false)
                    ]),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RoleBuzhenItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RoleBuzhenItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__5 = t;
                this.__s(t, ["source", "x", "y"], ["avatar_halo", -8, 17]);
                return t;
            };
            p.ico_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [63, "avatar_1_0_0", 63, 7, 31]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [18, "1", "center", 0xACAB91, 60, 8, 105]);
                return t;
            };
            p.label_num_i = function () {
                var t = new mo.gui.Label();
                this.label_num = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [18, "位置%s", "center", 0x72E1F2, 60, 8, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["avatar_bg", 0, 26]);
                return t;
            };
            RoleBuzhenItemSkin._skinParts = ["ico", "label_num", "label_name"];
            return RoleBuzhenItemSkin;
        })(egret.gui.Skin);
        game.RoleBuzhenItemSkin = RoleBuzhenItemSkin;
        egret.registerClass(RoleBuzhenItemSkin,"skins.game.RoleBuzhenItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
