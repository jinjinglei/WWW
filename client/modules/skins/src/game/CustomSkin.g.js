var skins;
(function (skins) {
    var game;
    (function (game) {
        var CustomSkin = (function (_super) {
            __extends(CustomSkin, _super);
            function CustomSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.img_title_i(), this.btn_close_i(), this.list_items_i(), this.btn_help_i(), this.inputName_i(), this.btn_add_i(), this.btn_sub_i(), this.label_lvl_i(), this.img_frame_i(), this.ico_item_job1_i(), this.ico_item_job2_i(), this.ico_item_job3_i(), this.label_range_i(), this.label_count_i(), this.label_needLvl_i(), this.btn_custom_i(), this.__16_i(), this.efx_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CustomSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CustomSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            p.__12_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            p.__13_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.8, 0, "pre_定制装备", 0, false]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_dinzizhuangbei", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x"], ["panel_task_title", 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 4;
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "Data1";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "Data2";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "Data3";
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            p.btn_add_i = function () {
                var t = new egret.gui.Button();
                this.btn_add = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_dingzi_Skin, 301, 249]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x"], ["btn_back", 410]);
                return t;
            };
            p.btn_custom_i = function () {
                var t = new egret.gui.Button();
                this.btn_custom = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [-2.5, "btn_txt_g_zhuhzaos", skins.comp.Btn_3_6_Skin, 10, 742]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                t.source = "ico_help";
                return t;
            };
            p.btn_sub_i = function () {
                var t = new egret.gui.Button();
                this.btn_sub = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_dingzizb_Skin, 154, 249]);
                return t;
            };
            p.efx_i = function () {
                var t = new g_comp.UIEffect();
                this.efx = t;
                this.__s(t, ["effectId", "performanceControl", "x", "y"], [43, false, 240, 439]);
                return t;
            };
            p.ico_item_job1_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item_job1 = t;
                this.__s(t, ["x", "y"], [105, 91]);
                return t;
            };
            p.ico_item_job2_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item_job2 = t;
                this.__s(t, ["x", "y"], [213, 91]);
                return t;
            };
            p.ico_item_job3_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item_job3 = t;
                this.__s(t, ["x", "y"], [319, 91]);
                return t;
            };
            p.img_frame_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_frame = t;
                this.__s(t, ["source", "x", "y"], ["ico_xuanzongs", 101, 87]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_dizizuangbei", 13]);
                return t;
            };
            p.inputName_i = function () {
                var t = new egret.gui.TextInput();
                this.inputName = t;
                t.setStyle("fontFamily", "楷体");
                t.setStyle("size", 18);
                this.__s(t, ["height", "prompt", "textColor", "width", "x", "y"], [46, "点击输入名称", 0xffffff, 201, 153, 184]);
                return t;
            };
            p.label_count_i = function () {
                var t = new mo.gui.Label();
                this.label_count = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "还可选%s项属性", 0xEFB697, 171, 348]);
                return t;
            };
            p.label_lvl_i = function () {
                var t = new egret.gui.Label();
                this.label_lvl = t;
                this.__s(t, ["size", "text", "textAlign", "width", "x", "y"], [18, "999", "center", 80, 216, 251]);
                return t;
            };
            p.label_needLvl_i = function () {
                var t = new mo.gui.Label();
                this.label_needLvl = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0.5, 18, "角色可穿戴等级%s", 0xEFB697, 295]);
                return t;
            };
            p.label_range_i = function () {
                var t = new mo.gui.Label();
                this.label_range = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "%s-%s级", 0xEFB697, 362, 254]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["allowMultipleSelection", "height", "horizontalCenter", "itemRendererSkinName", "requireSelection", "width", "y"], [true, 354, 1, skins.game.CustomPropItemSkin, true, 400, 377]);
                t.layout = this.__5_i();
                t.dataProvider = this.__15_i();
                return t;
            };
            p.__10_i = function () {
                var t = {};
                t.label = "null";
                return t;
            };
            CustomSkin._skinParts = ["img_title", "btn_close", "list_items", "btn_help", "inputName", "btn_add", "btn_sub", "label_lvl", "img_frame", "ico_item_job1", "ico_item_job2", "ico_item_job3", "label_range", "label_count", "label_needLvl", "btn_custom", "efx"];
            return CustomSkin;
        })(egret.gui.Skin);
        game.CustomSkin = CustomSkin;
        egret.registerClass(CustomSkin,"skins.game.CustomSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
