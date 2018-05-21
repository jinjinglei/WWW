var skins;
(function (skins) {
    var game;
    (function (game) {
        var TaskItemSkin = (function (_super) {
            __extends(TaskItemSkin, _super);
            function TaskItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 394;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.__6_i(), this.label_title_i(), this.label_desc_i(), this.label_num_i(), this.grp_res0_i(), this.grp_res1_i(), this.grp_res2_i(), this.img_done_i(), this.btn_go_i(), this.btn_get_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("img_done", "visible", false)
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("img_done", "visible", false)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("img_done", "scaleX", 0.8),
                        new egret.gui.SetProperty("img_done", "scaleY", 0.8),
                        new egret.gui.SetProperty("img_done", "y", 38),
                        new egret.gui.SetProperty("img_done", "x", 279)
                    ])
                ];
            }
            var d = __define,c=TaskItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TaskItemSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__14_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "width", "x", "y"], ["panel_task_item_bg", false, 390, 1, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "touchEnabled", "x", "y"], [25, "panel_skill_translucent", false, 87, 12]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [74, 73, 14, 10]);
                t.elementsContent = [this.ico_border_i(), this.ico_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_get", skins.comp.Btn_3_7_Skin, 288, 14]);
                return t;
            };
            p.btn_go_i = function () {
                var t = new egret.gui.Button();
                this.btn_go = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_go", skins.comp.Btn_3_3_Skin, 288, 12]);
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "x", "y"], [30, 94, 58]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__7_i(), this.__8_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "x", "y"], [30, 192, 57]);
                t.layout = this.__12_i();
                t.elementsContent = [this.__10_i(), this.__11_i()];
                return t;
            };
            p.grp_res2_i = function () {
                var t = new egret.gui.Group();
                this.grp_res2 = t;
                this.__s(t, ["height", "x", "y"], [30, 292, 57]);
                t.layout = this.__15_i();
                t.elementsContent = [this.__13_i(), this.__14_i()];
                return t;
            };
            p.ico_border_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_border = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "blk_kong", 0, 10, 10]);
                return t;
            };
            p.ico_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico = t;
                this.__s(t, ["horizontalCenter", "verticalCenter", "x", "y"], [0, 0, 10, 10]);
                return t;
            };
            p.img_done_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_done = t;
                this.__s(t, ["autoScale", "height", "right", "source", "verticalCenter", "width"], [false, 52, 13, "ntc_task_done", -3, 120]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "width", "x", "y"], ["黑体", 16, "任务描述", 13750708, 200, 95, 39]);
                return t;
            };
            p.label_num_i = function () {
                var t = new mo.gui.Label();
                this.label_num = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 16, "%s/%s", "right", 0xD1D1B4, 100, 183, 14]);
                return t;
            };
            p.label_title_i = function () {
                var t = new egret.gui.Label();
                this.label_title = t;
                this.__s(t, ["bold", "fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], [true, "SimSun", 21, 18, "任务名称", 0xFFD015, 196, 94, 16]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            TaskItemSkin._skinParts = ["ico_border", "ico", "label_title", "label_desc", "label_num", "grp_res0", "grp_res1", "grp_res2", "img_done", "btn_go", "btn_get"];
            return TaskItemSkin;
        })(egret.gui.Skin);
        game.TaskItemSkin = TaskItemSkin;
        egret.registerClass(TaskItemSkin,"skins.game.TaskItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
