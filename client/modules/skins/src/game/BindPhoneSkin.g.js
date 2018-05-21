var skins;
(function (skins) {
    var game;
    (function (game) {
        var BindPhoneSkin = (function (_super) {
            __extends(BindPhoneSkin, _super);
            function BindPhoneSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_close_i(), this.btn_goBind_i(), this.grp_items_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BindPhoneSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BindPhoneSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [2, "right"]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_bindPhone", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_safeBindPhone", 12]);
                return t;
            };
            p.__6_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item0", true, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item1", true, 83, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item2", true, 165, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item3", true, 246, 0]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_back_Skin, 407, 0]);
                return t;
            };
            p.btn_goBind_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_goBind = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "btn_bindPhone", 643]);
                return t;
            };
            p.grp_items_i = function () {
                var t = new egret.gui.Group();
                this.grp_items = t;
                this.__s(t, ["horizontalCenter", "verticalCenter", "width"], [0, 10, 450]);
                t.layout = this.__11_i();
                t.elementsContent = [this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i()];
                return t;
            };
            p.__10_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item4", true, 256, 10]);
                return t;
            };
            BindPhoneSkin._skinParts = ["btn_close", "btn_goBind", "grp_items"];
            return BindPhoneSkin;
        })(egret.gui.Skin);
        game.BindPhoneSkin = BindPhoneSkin;
        egret.registerClass(BindPhoneSkin,"skins.game.BindPhoneSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
