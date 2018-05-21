var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightMidBarSkin = (function (_super) {
            __extends(FightMidBarSkin, _super);
            function FightMidBarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__7_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightMidBarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightMidBarSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [74, 74, 52, 35]);
                t.elementsContent = [this.btn_redPacket_i()];
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [74, 74, 42, 25]);
                t.elementsContent = [this.btn_rank_i(), this.rank_red_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = -10;
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [-1, 128]);
                t.layout = this.__6_i();
                t.elementsContent = [this.__3_i(), this.grp_activity_i(), this.grp_treasure_i(), this.grp_fiveDay_i(), this.__4_i(), this.__5_i()];
                return t;
            };
            p.btn_activity_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_activity = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width"], [8, 57, 0, false, "ico_activity", 0, 57]);
                return t;
            };
            p.btn_first_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_first = t;
                this.__s(t, ["autoPlay", "effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width"], [true, 8, 57, 0, false, "ico_first_recharge", 0, 57]);
                return t;
            };
            p.btn_five_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_five = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width", "x", "y"], [8, 57, 0, false, "ico_five_day", 0, 57, 10, 10]);
                return t;
            };
            p.btn_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_rank = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_rank", 0]);
                return t;
            };
            p.btn_recharge_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_recharge = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0.5, "ico_recharge", 0.5]);
                return t;
            };
            p.btn_redPacket_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_redPacket = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_hongbao", 0]);
                return t;
            };
            p.btn_treasure_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_treasure = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width"], [8, 57, 0, false, "ico_treasure", 0, 57]);
                return t;
            };
            p.grp_activity_i = function () {
                var t = new egret.gui.Group();
                this.grp_activity = t;
                this.__s(t, ["height", "width", "x", "y"], [74, 74, 42, 25]);
                t.elementsContent = [this.btn_activity_i()];
                return t;
            };
            p.grp_fiveDay_i = function () {
                var t = new egret.gui.Group();
                this.grp_fiveDay = t;
                this.__s(t, ["height", "width", "x", "y"], [74, 74, 52, 35]);
                t.elementsContent = [this.btn_five_i()];
                return t;
            };
            p.grp_treasure_i = function () {
                var t = new egret.gui.Group();
                this.grp_treasure = t;
                this.__s(t, ["height", "width", "x", "y"], [74, 74, 52, 35]);
                t.elementsContent = [this.btn_treasure_i()];
                return t;
            };
            p.rank_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.rank_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 39, 7]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [74, 74, 32, 15]);
                t.elementsContent = [this.btn_recharge_i(), this.btn_first_i()];
                return t;
            };
            FightMidBarSkin._skinParts = ["btn_recharge", "btn_first", "btn_activity", "grp_activity", "btn_treasure", "grp_treasure", "btn_five", "grp_fiveDay", "btn_redPacket", "btn_rank", "rank_red"];
            return FightMidBarSkin;
        })(egret.gui.Skin);
        game.FightMidBarSkin = FightMidBarSkin;
        egret.registerClass(FightMidBarSkin,"skins.game.FightMidBarSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
