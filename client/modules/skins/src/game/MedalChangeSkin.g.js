var skins;
(function (skins) {
    var game;
    (function (game) {
        var MedalChangeSkin = (function (_super) {
            __extends(MedalChangeSkin, _super);
            function MedalChangeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["currentState", "height", "width"], ["change", 800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_help_i(), this.btn_close_i(), this.grp_weared_i(), this.list_print_i()];
                this.states = [
                    new egret.gui.State("change", []),
                    new egret.gui.State("choose", [
                        new egret.gui.SetProperty("grp_weared", "visible", false),
                        new egret.gui.SetProperty("list_print", "height", 578),
                        new egret.gui.SetProperty("list_print", "y", 134)
                    ])
                ];
            }
            var d = __define,c=MedalChangeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MedalChangeSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_g_xuanzezayg", 18]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zanyinditut_1", 0, 9]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yipeidai", 242, 32]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 1]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 1, 1]);
                return t;
            };
            p.grp_weared_i = function () {
                var t = new egret.gui.Group();
                this.grp_weared = t;
                this.__s(t, ["x", "y"], [39, 127]);
                t.elementsContent = [this.__6_i(), this.ico_medalItem_i(), this.__7_i()];
                return t;
            };
            p.ico_medalItem_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medalItem = t;
                this.__s(t, ["x", "y"], [41, 20]);
                return t;
            };
            p.list_print_i = function () {
                var t = new egret.gui.List();
                this.list_print = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [481, skins.game.MedalChooseItemSkin, 404, 38, 230]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            MedalChangeSkin._skinParts = ["btn_help", "btn_close", "ico_medalItem", "grp_weared", "list_print"];
            return MedalChangeSkin;
        })(egret.gui.Skin);
        game.MedalChangeSkin = MedalChangeSkin;
        egret.registerClass(MedalChangeSkin,"skins.game.MedalChangeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
