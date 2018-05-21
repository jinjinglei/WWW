var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewVplanItemSkin = (function (_super) {
            __extends(ActivityNewVplanItemSkin, _super);
            function ActivityNewVplanItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.ico_bg_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.label_desc_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewVplanItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewVplanItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [6, "center"]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [90, 0, 187, 60]);
                t.layout = this.__4_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "height", "horizontalCenter", "width"], [16, 45, 1, 109]);
                t.elementsContent = [this.btn_get_i(), this.effect_get_i(), this.ico_hasGet_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [8, 2]);
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["height", "icon", "label", "skinName", "width", "x", "y"], [40, "btn_txt_g_get", "领取", skins.comp.Btn_3_0_Skin, 95, 7, 2]);
                return t;
            };
            p.effect_get_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_get = t;
                this.__s(t, ["effectId", "x", "y"], [31, 54, 22]);
                return t;
            };
            p.ico_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_bg = t;
                this.__s(t, ["height", "minHeight", "source", "width", "x", "y"], [225, 30, "bg_panel_3", 187, 0, 0]);
                return t;
            };
            p.ico_hasGet_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_hasGet = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "source", "verticalCenter"], [0, 0.8, 0.8, "ntc_task_getable", 0]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textColor", "width", "y"], ["黑体", 0, 16, "成为 V会员单笔充值", 0xF1D654, 160, 11]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.comp.List_Empty_H_Skin, 0]);
                t.layout = this.__5_i();
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            ActivityNewVplanItemSkin._skinParts = ["ico_bg", "list_items", "btn_get", "effect_get", "ico_hasGet", "label_desc"];
            return ActivityNewVplanItemSkin;
        })(egret.gui.Skin);
        game.ActivityNewVplanItemSkin = ActivityNewVplanItemSkin;
        egret.registerClass(ActivityNewVplanItemSkin,"skins.game.ActivityNewVplanItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
