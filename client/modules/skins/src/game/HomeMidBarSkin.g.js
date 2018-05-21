var skins;
(function (skins) {
    var game;
    (function (game) {
        var HomeMidBarSkin = (function (_super) {
            __extends(HomeMidBarSkin, _super);
            function HomeMidBarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__11_i(), this.__12_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=HomeMidBarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return HomeMidBarSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [-1, 121]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [12, 187]);
                t.elementsContent = [this.btn_expBox_i(), this.exp_red_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [74, 74, 32, 15]);
                t.elementsContent = [this.btn_recharge_i()];
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [74, 74, 52, 35]);
                t.elementsContent = [this.btn_fuli_i(), this.fuli_red_i()];
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [74, 74, 52, 35]);
                t.elementsContent = [this.btn_task_i(), this.task_red_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [74, 74, 52, 35]);
                t.elementsContent = [this.btn_custom_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [74, 74, 62, 45]);
                t.elementsContent = [this.btn_kings_fight_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "visible", "width", "x", "y"], [74, false, 74, 42, 25]);
                t.elementsContent = [this.btn_print_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "visible", "width", "x", "y"], [74, false, 74, 52, 35]);
                t.elementsContent = [this.btn_heart_i()];
                return t;
            };
            p.btn_custom_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_custom = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width"], [8, 57, 0, false, "ico_dinzhisfg", 0, 57]);
                return t;
            };
            p.btn_expBox_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_expBox = t;
                this.__s(t, ["autoScale", "scaleX", "scaleY", "source", "x", "y"], [false, 0.75, 0.75, "ico_expBox", -1, 1]);
                return t;
            };
            p.btn_fuli_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_fuli = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0.5, "ico_fuli", 0.5, 10, 10]);
                return t;
            };
            p.btn_heart_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_heart = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width"], [8, 57, 0, false, "ico_xinfarukou", 0, 57]);
                return t;
            };
            p.btn_kings_fight_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_kings_fight = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width"], [8, 57, 0, false, "ico_kings_fight", 0, 57]);
                return t;
            };
            p.btn_print_i = function () {
                var t = new g_comp.EfxAsset();
                this.btn_print = t;
                this.__s(t, ["effectId", "height", "horizontalCenter", "performanceControl", "source", "verticalCenter", "width"], [8, 57, 0, false, "ico_zanyingrukou", 0, 57]);
                return t;
            };
            p.btn_recharge_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_recharge = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0.5, "ico_recharge", 0.5]);
                return t;
            };
            p.btn_task_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_task = t;
                this.__s(t, ["autoScale", "horizontalCenter", "source", "verticalCenter"], [false, 0, "ico_task", 0]);
                return t;
            };
            p.exp_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.exp_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 42, 7]);
                return t;
            };
            p.fuli_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.fuli_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 42, 7]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = -10;
                return t;
            };
            p.task_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.task_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 42, 7]);
                return t;
            };
            HomeMidBarSkin._skinParts = ["btn_recharge", "btn_fuli", "fuli_red", "btn_task", "task_red", "btn_custom", "btn_kings_fight", "btn_print", "btn_heart", "btn_expBox", "exp_red"];
            return HomeMidBarSkin;
        })(egret.gui.Skin);
        game.HomeMidBarSkin = HomeMidBarSkin;
        egret.registerClass(HomeMidBarSkin,"skins.game.HomeMidBarSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
