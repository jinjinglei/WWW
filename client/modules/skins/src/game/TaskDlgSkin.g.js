var skins;
(function (skins) {
    var game;
    (function (game) {
        var TaskDlgSkin = (function (_super) {
            __extends(TaskDlgSkin, _super);
            function TaskDlgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.tab_task_i(), this.__10_i(), this.viewStack_i(), this.img_red0_i(), this.img_red1_i(), this.__19_i(), this.__20_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=TaskDlgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TaskDlgSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [480, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 420, 10, 19]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 10;
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["bar_bg_exp", 317, 78, 519]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ant_txt_activity", 19, 511]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_active", 80, 518]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "left", "name", "right", "top"], [0, 0, "tab_txt_daily_task", 0, 0]);
                t.elementsContent = [this.__11_i(), this.list_daily_tasks_i(), this.__13_i(), this.pb_active_i(), this.__14_i(), this.label_act_i(), this.__15_i(), this.btn_box0_i(), this.btn_box1_i(), this.btn_box2_i(), this.efx0_i(), this.efx1_i(), this.efx2_i()];
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "x", "y"], [526, 0.5, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 420, 10, 19]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "left", "name", "right", "top"], [0, 0, "tab_txt_achivement", 0, 0]);
                t.elementsContent = [this.__17_i(), this.list_achivements_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [59, 685]);
                return t;
            };
            p.__20_i = function () {
                var t = new g_comp.ResBar();
                this.__s(t, ["horizontalCenter", "skinName", "x", "y"], [0, skins.comp.ResBarSkin, 20, 695]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source"], [0, "panel_task_title"]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "touchEnabled", "y"], [0, "ntc_task_list", false, 7]);
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "tab_txt_daily_task";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "tab_txt_achivement";
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__6_i(), this.__7_i()];
                return t;
            };
            p.btn_box0_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_box0 = t;
                this.__s(t, ["source", "x", "y"], ["ico_bronze_box", 162, 501]);
                return t;
            };
            p.btn_box1_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_box1 = t;
                this.__s(t, ["source", "x", "y"], ["ico_silver_box", 249, 501]);
                return t;
            };
            p.btn_box2_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_box2 = t;
                this.__s(t, ["source", "x", "y"], ["ico_gold_box", 363, 500]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 40]);
                return t;
            };
            p.efx0_i = function () {
                var t = new g_comp.UIEffect();
                this.efx0 = t;
                this.__s(t, ["effectId", "performanceControl", "x", "y"], [1, false, 189, 530]);
                return t;
            };
            p.efx1_i = function () {
                var t = new g_comp.UIEffect();
                this.efx1 = t;
                this.__s(t, ["effectId", "performanceControl", "x", "y"], [1, false, 276, 530]);
                return t;
            };
            p.efx2_i = function () {
                var t = new g_comp.UIEffect();
                this.efx2 = t;
                this.__s(t, ["effectId", "performanceControl", "x", "y"], [1, false, 390, 530]);
                return t;
            };
            p.img_red0_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red0 = t;
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_red", false, 91, 73]);
                return t;
            };
            p.img_red1_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red1 = t;
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_red", false, 188, 73]);
                return t;
            };
            p.label_act_i = function () {
                var t = new mo.gui.Label();
                this.label_act = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "%s/%s", 0xD1D1B4, 21, 532]);
                return t;
            };
            p.list_achivements_i = function () {
                var t = new egret.gui.List();
                this.list_achivements = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [500, skins.game.TaskItemSkin, 400, 19, 30]);
                return t;
            };
            p.list_daily_tasks_i = function () {
                var t = new egret.gui.List();
                this.list_daily_tasks = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [455, skins.game.TaskItemSkin, 400, 19, 30]);
                t.layout = this.__12_i();
                return t;
            };
            p.pb_active_i = function () {
                var t = new egret.gui.ProgressBar();
                this.pb_active = t;
                this.__s(t, ["height", "skinName", "value", "width", "x", "y"], [14, skins.comp.Bar_Exp_NoText_Skin, 0, 270, 103, 526]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [569, "s9g_dlg_1", 439, 21, 116]);
                return t;
            };
            p.tab_task_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_task = t;
                this.__s(t, ["itemRendererSkinName", "skinName", "x", "y"], [skins.comp.TabBarBtn_1_Skin, skins.comp.TabBar_6_Skin, 22, 80]);
                t.dataProvider = this.__9_i();
                return t;
            };
            p.viewStack_i = function () {
                var t = new egret.gui.ViewStack();
                this.viewStack = t;
                this.__s(t, ["createAllChildren", "height", "selectedIndex", "width", "x", "y"], [false, 569, 0, 439, 21, 117]);
                t.elementsContent = [this.__16_i(), this.__18_i()];
                return t;
            };
            TaskDlgSkin._skinParts = ["tab_task", "list_daily_tasks", "pb_active", "label_act", "btn_box0", "btn_box1", "btn_box2", "efx0", "efx1", "efx2", "list_achivements", "viewStack", "img_red0", "img_red1", "btn_close"];
            return TaskDlgSkin;
        })(egret.gui.Skin);
        game.TaskDlgSkin = TaskDlgSkin;
        egret.registerClass(TaskDlgSkin,"skins.game.TaskDlgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
