var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityBoxRewardSkin = (function (_super) {
            __extends(ActivityBoxRewardSkin, _super);
            function ActivityBoxRewardSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i(), this.__19_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityBoxRewardSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityBoxRewardSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "touchChildren", "touchEnabled", "width", "x", "y"], [30, false, false, 284, 93, 51]);
                t.layout = this.__11_i();
                t.elementsContent = [this.grp_res0_i(), this.grp_res1_i()];
                return t;
            };
            p.__13_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__14_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__15_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__13_i(), this.__14_i(), this.__15_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__19_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "name", "size", "text", "textAlign", "textColor", "y"], [0, "num", 24, "奖励", "left", 0xDA9F00, 197]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "touchEnabled", "width", "y"], [167, 0.5, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", false, 382, 40]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "可领取：", 13422001, 25, 52]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 20, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__9_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 20, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.btn_do_i = function () {
                var t = new egret.gui.Button();
                this.btn_do = t;
                t.setStyle("size", 12);
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_back", skins.comp.Btn_3_1_Skin, 219]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "verticalCenter", "width"], [261, 0.5, skins.comp.Dlg_Close_0_Skin, -62.5, 389]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.__12_i(), this.list_items_i(), this.btn_do_i()];
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "x"], [30, 20]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__5_i(), this.__6_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "x", "y"], [30, 30, 10]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__8_i(), this.__9_i()];
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "skinName", "width", "x", "y"], [100, skins.game.BaseItemCellSkin, skins.comp.List_Empty_H_Skin, 345, 23, 87]);
                t.layout = this.__18_i();
                t.dataProvider = this.__17_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            ActivityBoxRewardSkin._skinParts = ["grp_res0", "grp_res1", "list_items", "btn_do", "container"];
            return ActivityBoxRewardSkin;
        })(egret.gui.Skin);
        game.ActivityBoxRewardSkin = ActivityBoxRewardSkin;
        egret.registerClass(ActivityBoxRewardSkin,"skins.game.ActivityBoxRewardSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
