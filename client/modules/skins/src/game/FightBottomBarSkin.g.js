var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightBottomBarSkin = (function (_super) {
            __extends(FightBottomBarSkin, _super);
            function FightBottomBarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.grp_bottom_i(), this.btn_tulong_i(), this.btn_rebirth_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightBottomBarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightBottomBarSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "scaleX", "scaleY", "source", "width", "x"], [true, 77, 0.8, .8, "ico_zizhuntaozhuang", 84, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "x", "y"], [true, "ico_jueshezhuans", 0, 0]);
                return t;
            };
            p.btn_chat_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_chat = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 53, "ico_chat", 63, 206, 13]);
                return t;
            };
            p.btn_desktop_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_desktop = t;
                this.__s(t, ["autoPlay", "effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width", "x", "y"], [false, 8, 57, -64.5, false, "ico_xiongdi", 0, 57, 40, 40]);
                return t;
            };
            p.btn_practice_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_practice = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width", "x", "y"], [8, 57, -35, false, "ico_xiulianrukous", 0, 57, 40, 40]);
                return t;
            };
            p.btn_rebirth_i = function () {
                var t = new egret.gui.Group();
                this.btn_rebirth = t;
                this.__s(t, ["x", "y"], [5, 295]);
                t.elementsContent = [this.__5_i()];
                return t;
            };
            p.btn_resolve_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_resolve = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width", "x", "y"], [8, 57, 0, false, "ico_forge", 0, 57, 20, 20]);
                return t;
            };
            p.btn_tulong_i = function () {
                var t = new egret.gui.Group();
                this.btn_tulong = t;
                this.__s(t, ["height", "width", "x", "y"], [61, 72, 9, 295]);
                t.elementsContent = [this.__4_i(), this.efx_tulong_i()];
                return t;
            };
            p.btn_unlockRole_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_unlockRole = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width", "x", "y"], [8, 57, 0, false, "ico_unlockRole", 0, 57, 30, 30]);
                return t;
            };
            p.btn_wing_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_wing = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width", "x", "y"], [8, 57, -35, false, "ico_wing", 0, 57, 30, 30]);
                return t;
            };
            p.efx_tulong_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_tulong = t;
                this.__s(t, ["effectId", "height", "performanceControl", "scaleX", "scaleY", "width", "x", "y"], [32, 1, false, .8, .8, 1, 32, 35]);
                return t;
            };
            p.grp_bottom_i = function () {
                var t = new egret.gui.Group();
                this.grp_bottom = t;
                this.__s(t, ["width", "x", "y"], [446, 32, 642]);
                t.layout = this.__3_i();
                t.elementsContent = [this.btn_desktop_i(), this.btn_wing_i(), this.btn_practice_i(), this.btn_resolve_i(), this.btn_unlockRole_i(), this.btn_chat_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "right";
                return t;
            };
            FightBottomBarSkin._skinParts = ["btn_desktop", "btn_wing", "btn_practice", "btn_resolve", "btn_unlockRole", "btn_chat", "grp_bottom", "efx_tulong", "btn_tulong", "btn_rebirth"];
            return FightBottomBarSkin;
        })(egret.gui.Skin);
        game.FightBottomBarSkin = FightBottomBarSkin;
        egret.registerClass(FightBottomBarSkin,"skins.game.FightBottomBarSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
