var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightTreasureSkin = (function (_super) {
            __extends(FightTreasureSkin, _super);
            function FightTreasureSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.tab_btn_i(), this.__10_i(), this.container_i(), this.__11_i(), this.__12_i(), this.btn_back_i(), this.btn_help_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightTreasureSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightTreasureSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "horizontalCenter", "source", "y"], [false, 0, "ico_pk_ico", 13]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_forge", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = {};
                t.label = "ico_pk_info";
                return t;
            };
            p.__5_i = function () {
                var t = {};
                t.label = "ico_pk_head";
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "ico_pk_list_head";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "ico_pk_chat";
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i()];
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 35]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 34]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Group();
                this.container = t;
                this.__s(t, ["bottom", "left", "right", "top", "x", "y"], [0, 0, 0, 0, 10, 10]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [586, 1.5, "s9g_dlg_1", 455, 145]);
                return t;
            };
            p.tab_btn_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_btn = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "skinName", "y"], [2.5, skins.comp.TabBarBtn_1_Skin, skins.comp.TabBar_6_Skin, 111]);
                t.dataProvider = this.__9_i();
                return t;
            };
            FightTreasureSkin._skinParts = ["tab_btn", "container", "btn_back", "btn_help"];
            return FightTreasureSkin;
        })(egret.gui.Skin);
        game.FightTreasureSkin = FightTreasureSkin;
        egret.registerClass(FightTreasureSkin,"skins.game.FightTreasureSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
