var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildCopyBossItemSkin = (function (_super) {
            __extends(GuildCopyBossItemSkin, _super);
            function GuildCopyBossItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [100, 83]);
                this.elementsContent = [this.__4_i(), this.img_lock_i(), this.__5_i(), this.img_boss_i(), this.label_name_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("img_lock", "verticalCenter", 0),
                        new egret.gui.SetProperty("img_lock", "horizontalCenter", 0),
                        new egret.gui.SetProperty("img_lock", "visible", false),
                        new egret.gui.SetProperty("__5", "visible", false)
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("img_lock", "verticalCenter", 0),
                        new egret.gui.SetProperty("img_lock", "horizontalCenter", 0),
                        new egret.gui.SetProperty("img_lock", "visible", false),
                        new egret.gui.SetProperty("__5", "source", "avatar_halo")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("img_lock", "x", 18),
                        new egret.gui.SetProperty("img_lock", "y", 18),
                        new egret.gui.SetProperty("img_lock", "horizontalCenter", -2.5),
                        new egret.gui.SetProperty("img_lock", "verticalCenter", -11.5),
                        new egret.gui.SetProperty("__5", "visible", false),
                        new egret.gui.SetProperty("img_boss", "visible", false)
                    ])
                ];
            }
            var d = __define,c=GuildCopyBossItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildCopyBossItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__5 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [1, "avatar_halo", -13.5]);
                return t;
            };
            p.img_boss_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_boss = t;
                this.__s(t, ["height", "width", "x", "y"], [65, 65, 9, 5]);
                return t;
            };
            p.img_lock_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_lock = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-2.5, "ico_role_lock", -3.5]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["height", "horizontalCenter", "size", "stroke", "text", "textAlign", "textColor", "width", "y"], [24, 0, 18, 2, "暴牙蜘蛛", "center", 11316113, 95, 78]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "avatar_bg", 0]);
                return t;
            };
            GuildCopyBossItemSkin._skinParts = ["img_lock", "img_boss", "label_name"];
            return GuildCopyBossItemSkin;
        })(egret.gui.Skin);
        game.GuildCopyBossItemSkin = GuildCopyBossItemSkin;
        egret.registerClass(GuildCopyBossItemSkin,"skins.game.GuildCopyBossItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
