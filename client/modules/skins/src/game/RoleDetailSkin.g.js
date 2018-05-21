var skins;
(function (skins) {
    var game;
    (function (game) {
        var RoleDetailSkin = (function (_super) {
            __extends(RoleDetailSkin, _super);
            function RoleDetailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.label_prop_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RoleDetailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RoleDetailSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [476, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", 374, 53, 195]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "textColor", "x", "y"], ["楷体", 20, 16711680, 89, 259]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "角色属性：", 15766538, 71, 220]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 408, 85]);
                return t;
            };
            p.label_prop_i = function () {
                var t = new mo.gui.Label();
                this.label_prop = t;
                this.__s(t, ["height", "horizontalCenter", "lineSpacing", "size", "textColor", "width", "y"], [396, 0, 10, 20, 12498871, 322, 254]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            RoleDetailSkin._skinParts = ["btn_close", "label_prop"];
            return RoleDetailSkin;
        })(egret.gui.Skin);
        game.RoleDetailSkin = RoleDetailSkin;
        egret.registerClass(RoleDetailSkin,"skins.game.RoleDetailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
