var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewCollectCharacterItemSkin = (function (_super) {
            __extends(ActivityNewCollectCharacterItemSkin, _super);
            function ActivityNewCollectCharacterItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 450;
                this.elementsContent = [this.ico_bg_i(), this.group_list_i(), this.__6_i(), this.__7_i(), this.__11_i(), this.label_collected_i(), this.label_count_i(), this.group_reward_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewCollectCharacterItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewCollectCharacterItemSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [8, 1]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__8_i(), this.label_desc_i(), this.__9_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "=", 13, 30]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "requestedColumnCount", "verticalGap"], [10, 4, 6]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [0, "center"]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "height", "horizontalCenter", "width", "x", "y"], [19, 45, 0.5, 109, 10, 10]);
                t.elementsContent = [this.btn_get_i(), this.ico_hasGet_i(), this.effect_get_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [32, "ico_act_rechange_bg", 157, 0, 1]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["txt_jiqi", 4, 6]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["txt_zikehuan", 80, 5]);
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["height", "icon", "label", "skinName", "width", "x", "y"], [40, "btn_txt_g_lingqu", "领取", skins.comp.Btn_3_0_Skin, 95, 7, 2]);
                return t;
            };
            p.effect_get_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_get = t;
                this.__s(t, ["effectId", "visible", "x", "y"], [31, false, 54, 22]);
                return t;
            };
            p.group_list_i = function () {
                var t = new egret.gui.Group();
                this.group_list = t;
                this.__s(t, ["x", "y"], [15, 40]);
                t.layout = this.__5_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.group_reward_i = function () {
                var t = new egret.gui.Group();
                this.group_reward = t;
                this.__s(t, ["x", "y"], [350, 23]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__12_i(), this.ico_item_i()];
                return t;
            };
            p.ico_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_bg = t;
                this.__s(t, ["height", "minHeight", "scale9Grid", "source", "width"], [160, 30, egret.gui.getScale9Grid("98,23,251,23"), "panel_danbi", 450]);
                return t;
            };
            p.ico_hasGet_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_hasGet = t;
                this.__s(t, ["scaleX", "scaleY", "source", "visible", "x", "y"], [0.8, 0.8, "ntc_task_getable", false, 0, 0]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            p.label_collected_i = function () {
                var t = new egret.gui.Label();
                this.label_collected = t;
                this.__s(t, ["bottom", "fontFamily", "horizontalCenter", "size", "text", "textColor"], [4, "黑体", 0, 16, "集齐了8组", 0xFFBC2D]);
                return t;
            };
            p.label_count_i = function () {
                var t = new egret.gui.Label();
                this.label_count = t;
                this.__s(t, ["bottom", "fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "y"], [31, "黑体", -129, 18, "已兑换次数：20", "center", 0x5BFF53, 10]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_desc = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_10", "1", 43, 5]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "width", "x", "y"], [skins.game.ActivityNewCollectCharacterBaseItemSkin, 328, 0, 0]);
                t.layout = this.__4_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 2;
                return t;
            };
            ActivityNewCollectCharacterItemSkin._skinParts = ["ico_bg", "list_items", "group_list", "btn_get", "ico_hasGet", "effect_get", "label_desc", "label_collected", "label_count", "ico_item", "group_reward"];
            return ActivityNewCollectCharacterItemSkin;
        })(egret.gui.Skin);
        game.ActivityNewCollectCharacterItemSkin = ActivityNewCollectCharacterItemSkin;
        egret.registerClass(ActivityNewCollectCharacterItemSkin,"skins.game.ActivityNewCollectCharacterItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
