var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewRchgItemSkin = (function (_super) {
            __extends(ActivityNewRchgItemSkin, _super);
            function ActivityNewRchgItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.ico_bg_i(), this.ico_sel_i(), this.__6_i(), this.__7_i(), this.__11_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewRchgItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewRchgItemSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [8, 2]);
                t.elementsContent = [this.__8_i(), this.__9_i(), this.label_desc_i(), this.__10_i()];
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "verticalGap"], [15, 6]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 10, 30]);
                t.layout = this.__4_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "height", "horizontalCenter", "width"], [2, 45, 0.5, 109]);
                t.elementsContent = [this.btn_get_i(), this.ico_hasGet_i(), this.effect_get_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_act_rechange_bg", 0, 1]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_act_rechange_leichong", 4, 6]);
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
                this.__s(t, ["height", "minHeight", "scale9Grid", "source", "width", "x", "y"], [160, 30, egret.gui.getScale9Grid("98,23,251,23"), "panel_danbi", 440, 0, 0]);
                return t;
            };
            p.ico_hasGet_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_hasGet = t;
                this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.8, 0.8, "ntc_task_getable", 0, 0]);
                return t;
            };
            p.ico_sel_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_sel = t;
                this.__s(t, ["bottom", "left", "minHeight", "right", "scale9Grid", "source", "top", "visible", "x", "y"], [0, 0, 30, 0, egret.gui.getScale9Grid("46,17,338,39"), "panel_leichong", 0, false, 10, 10]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_desc = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_10", "30", 93, 3]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "width", "x", "y"], [skins.game.BaseItemCellSkin, 350, 0, 0]);
                t.layout = this.__5_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_rmb_fh", 79, 8]);
                return t;
            };
            ActivityNewRchgItemSkin._skinParts = ["ico_bg", "ico_sel", "list_items", "btn_get", "ico_hasGet", "effect_get", "label_desc"];
            return ActivityNewRchgItemSkin;
        })(egret.gui.Skin);
        game.ActivityNewRchgItemSkin = ActivityNewRchgItemSkin;
        egret.registerClass(ActivityNewRchgItemSkin,"skins.game.ActivityNewRchgItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
