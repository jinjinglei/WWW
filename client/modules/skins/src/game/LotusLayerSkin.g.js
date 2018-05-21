var skins;
(function (skins) {
    var game;
    (function (game) {
        var LotusLayerSkin = (function (_super) {
            __extends(LotusLayerSkin, _super);
            function LotusLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.grp_lotus_i(), this.container_i(), this.btn_help_i(), this.btn_back_i(), this.__8_i(), this.tab_btn_i(), this.red0_i(), this.red3_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=LotusLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return LotusLayerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = {};
                t.label = "tab_txt_jingjiesg";
                return t;
            };
            p.__12_i = function () {
                var t = {};
                t.label = "tab_txt_baowufg";
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yaolian32", -150, -45]);
                return t;
            };
            p.__6_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "performanceControl", "x", "y"], [true, 40, false, 9, -32]);
                return t;
            };
            p.__7_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "performanceControl", "x", "y"], [true, 41, false, 9, 58]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_julinyaolian", 12]);
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "tab_txt_yaoliandi";
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Group();
                this.container = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                return t;
            };
            p.grp_lotus_i = function () {
                var t = new egret.gui.Group();
                this.grp_lotus = t;
                this.__s(t, ["x", "y"], [243, 223]);
                t.elementsContent = [this.__5_i(), this.__6_i(), this.__7_i()];
                return t;
            };
            p.red0_i = function () {
                var t = new egret.gui.UIAsset();
                this.red0 = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 119, 71]);
                return t;
            };
            p.red3_i = function () {
                var t = new egret.gui.UIAsset();
                this.red3 = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 405, 71]);
                return t;
            };
            p.__10_i = function () {
                var t = {};
                t.label = "tab_txt_shengjis";
                return t;
            };
            p.tab_btn_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_btn = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "skinName", "y"], [0, skins.comp.TabBarBtn_1_Skin, skins.comp.TabBar_6_Skin, 77]);
                t.dataProvider = this.__14_i();
                return t;
            };
            LotusLayerSkin._skinParts = ["grp_lotus", "container", "btn_help", "btn_back", "tab_btn", "red0", "red3"];
            return LotusLayerSkin;
        })(egret.gui.Skin);
        game.LotusLayerSkin = LotusLayerSkin;
        egret.registerClass(LotusLayerSkin,"skins.game.LotusLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
