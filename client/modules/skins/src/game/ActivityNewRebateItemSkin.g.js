var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewRebateItemSkin = (function (_super) {
            __extends(ActivityNewRebateItemSkin, _super);
            function ActivityNewRebateItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 440;
                this.elementsContent = [this.ico_bg_i(), this.ico_sel_i(), this.__6_i(), this.__7_i(), this.__12_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewRebateItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewRebateItemSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "top"], [0, -3]);
                t.layout = this.__10_i();
                t.elementsContent = [this.label_title_i(), this.ico_hint_i(), this.label_desc_i(), this.__9_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [14, 1]);
                t.elementsContent = [this.__8_i(), this.__11_i()];
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "verticalGap"], [15, 6]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "top", "x"], [0, 43, 20]);
                t.layout = this.__5_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "height", "horizontalCenter", "width", "x", "y"], [2, 45, 0.5, 109, 10, 10]);
                t.elementsContent = [this.btn_get_i(), this.ico_hasGet_i(), this.effect_get_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, -9, -11, "ico_act_rechange_bg", 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["txt_kelingqu", 37, 7]);
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
                this.__s(t, ["effectId", "visible", "x", "y"], [31, false, 54, 22]);
                return t;
            };
            p.ico_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_bg = t;
                this.__s(t, ["height", "left", "minHeight", "right", "scale9Grid", "source", "top"], [160, 0, 30, 0, egret.gui.getScale9Grid("98,23,251,23"), "panel_danbi", 0]);
                return t;
            };
            p.ico_hasGet_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_hasGet = t;
                this.__s(t, ["scaleX", "scaleY", "source", "visible", "x", "y"], [0.8, 0.8, "ntc_task_getable", false, 0, 0]);
                return t;
            };
            p.ico_hint_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_hint = t;
                this.__s(t, ["source", "x", "y"], ["txt_zhongxiaohao", 4, 6]);
                return t;
            };
            p.ico_sel_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_sel = t;
                this.__s(t, ["bottom", "left", "minHeight", "right", "scale9Grid", "source", "top", "visible"], [0, 0, 30, 0, egret.gui.getScale9Grid("46,17,338,39"), "panel_leichong", 0, false]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_desc = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "9999", 49, 2]);
                return t;
            };
            p.label_title_i = function () {
                var t = new egret.gui.Label();
                this.label_title = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textColor", "verticalAlign", "x", "y"], ["黑体", 29, 20, 1, "购买BOSS入场卷", 0xF8B448, "middle", 16, 3]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "width", "x", "y"], [skins.game.BaseItemCellSkin, 350, 0, 0]);
                t.layout = this.__4_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [1, "center", "middle"]);
                return t;
            };
            ActivityNewRebateItemSkin._skinParts = ["ico_bg", "ico_sel", "list_items", "btn_get", "ico_hasGet", "effect_get", "label_title", "ico_hint", "label_desc"];
            return ActivityNewRebateItemSkin;
        })(egret.gui.Skin);
        game.ActivityNewRebateItemSkin = ActivityNewRebateItemSkin;
        egret.registerClass(ActivityNewRebateItemSkin,"skins.game.ActivityNewRebateItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
