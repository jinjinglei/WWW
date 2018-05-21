var skins;
(function (skins) {
    var game;
    (function (game) {
        var RoleAvatarSkin = (function (_super) {
            __extends(RoleAvatarSkin, _super);
            function RoleAvatarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [1, 1]);
                this.elementsContent = [this.ico_wing_male_i(), this.ico_wing_female_i(), this.ico_isKing_i(), this.ico_weapon_i(), this.ico_clothes_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RoleAvatarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RoleAvatarSkin._skinParts;
                }
            );
            p.ico_isKing_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_isKing = t;
                this.__s(t, ["source", "x", "y"], ["ico_wangzepifeng", -64, -247]);
                return t;
            };
            p.ico_weapon_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_weapon = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [338, "w00001", 246, -194, -350]);
                return t;
            };
            p.ico_wing_female_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_wing_female = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [0.30000000000001137, 1.1, 1.1, "w00103", -159.3, 20, 20]);
                return t;
            };
            p.ico_wing_male_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_wing_male = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter", "x", "y"], [15.300000000000011, 1.1, 1.1, "w00103", -170.3, 10, 10]);
                return t;
            };
            p.ico_clothes_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_clothes = t;
                this.__s(t, ["source", "x", "y"], ["r00000", -118, -267]);
                return t;
            };
            RoleAvatarSkin._skinParts = ["ico_wing_male", "ico_wing_female", "ico_isKing", "ico_weapon", "ico_clothes"];
            return RoleAvatarSkin;
        })(egret.gui.Skin);
        game.RoleAvatarSkin = RoleAvatarSkin;
        egret.registerClass(RoleAvatarSkin,"skins.game.RoleAvatarSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
