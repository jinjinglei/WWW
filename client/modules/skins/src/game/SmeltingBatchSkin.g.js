var skins;
(function (skins) {
    var game;
    (function (game) {
        var SmeltingBatchSkin = (function (_super) {
            __extends(SmeltingBatchSkin, _super);
            function SmeltingBatchSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=SmeltingBatchSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SmeltingBatchSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [70, 200, -15, -20]);
                t.elementsContent = [this.__10_i(), this.blue_txt_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [70, 150, 7, 158]);
                t.elementsContent = [this.btn_blueResolve_i(), this.__11_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [30, 0, "gold_round_bg", 0, 170]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [70, 200, -35, -20]);
                t.elementsContent = [this.__13_i(), this.purple_txt_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [70, 150, 209, 158]);
                t.elementsContent = [this.btn_purpleResolve_i(), this.__14_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [30, 0, "gold_round_bg", 0, 170]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [70, 200, -25, -20]);
                t.elementsContent = [this.__16_i(), this.orange_txt_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [70, 150, 110, 268]);
                t.elementsContent = [this.btn_orangeResolve_i(), this.__17_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [12, 37]);
                t.elementsContent = [this.__3_i(), this.__6_i(), this.__9_i(), this.__12_i(), this.__15_i(), this.__18_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 383, "ntc_dragon", 381, 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [30, 0, "gold_round_bg", 0, 170]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [70, 200, -15, -20]);
                t.elementsContent = [this.__4_i(), this.white_txt_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [70, 150, 7, 42]);
                t.elementsContent = [this.btn_whiteResolve_i(), this.__5_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [30, 0, "gold_round_bg", 0, 170]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [70, 200, -35, -20]);
                t.elementsContent = [this.__7_i(), this.green_txt_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [70, 150, 209, 42]);
                t.elementsContent = [this.btn_greenResolve_i(), this.__8_i()];
                return t;
            };
            p.blue_txt_i = function () {
                var t = new egret.gui.Label();
                this.blue_txt = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "verticalCenter"], [0, 25, "蓝色装备X999", 0x4498C4, 0]);
                return t;
            };
            p.btn_blueResolve_i = function () {
                var t = new egret.gui.Button();
                this.btn_blueResolve = t;
                this.__s(t, ["bottom", "height", "horizontalCenter", "icon", "skinName", "width"], [0, 39, 0, "btn_txt_g_dissolve", skins.comp.Btn_3_0_Skin, 120]);
                return t;
            };
            p.btn_greenResolve_i = function () {
                var t = new egret.gui.Button();
                this.btn_greenResolve = t;
                this.__s(t, ["bottom", "height", "icon", "skinName", "width", "x"], [0, 39, "btn_txt_g_dissolve", skins.comp.Btn_3_0_Skin, 120, 15]);
                return t;
            };
            p.btn_orangeResolve_i = function () {
                var t = new egret.gui.Button();
                this.btn_orangeResolve = t;
                this.__s(t, ["bottom", "height", "horizontalCenter", "icon", "skinName", "width"], [0, 39, 0, "btn_txt_g_dissolve", skins.comp.Btn_3_0_Skin, 120]);
                return t;
            };
            p.btn_purpleResolve_i = function () {
                var t = new egret.gui.Button();
                this.btn_purpleResolve = t;
                this.__s(t, ["bottom", "height", "horizontalCenter", "icon", "skinName", "width"], [0, 39, 0, "btn_txt_g_dissolve", skins.comp.Btn_3_0_Skin, 120]);
                return t;
            };
            p.btn_whiteResolve_i = function () {
                var t = new egret.gui.Button();
                this.btn_whiteResolve = t;
                this.__s(t, ["bottom", "height", "icon", "skinName", "width", "x"], [0, 39, "btn_txt_g_dissolve", skins.comp.Btn_3_0_Skin, 120, 15]);
                return t;
            };
            p.ckb_keep_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_keep = t;
                this.__s(t, ["label", "x", "y"], ["保留未开启职业最高评分装备", 50, 439]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "verticalCenter", "width"], [516, 1, skins.comp.Dlg_Close_Text_Info_Skin, "btn_txt_g_piliangronglian", -1, 400]);
                t.elementsContent = [this.__19_i(), this.ckb_keep_i()];
                return t;
            };
            p.green_txt_i = function () {
                var t = new egret.gui.Label();
                this.green_txt = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "verticalCenter"], [0, 25, "绿色装备X999", 0x6FC851, 0]);
                return t;
            };
            p.orange_txt_i = function () {
                var t = new egret.gui.Label();
                this.orange_txt = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "verticalCenter"], [0, 25, "橙色装备X999", 0xDAB60F, 0]);
                return t;
            };
            p.purple_txt_i = function () {
                var t = new egret.gui.Label();
                this.purple_txt = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "verticalCenter"], [0, 25, "紫色装备X999", 0x7322B7, 0]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [30, 0, "gold_round_bg", 0, 170]);
                return t;
            };
            p.white_txt_i = function () {
                var t = new egret.gui.Label();
                this.white_txt = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "verticalCenter"], [0, 25, "白色装备X999", 0xFFFFFF, 0]);
                return t;
            };
            SmeltingBatchSkin._skinParts = ["btn_whiteResolve", "white_txt", "btn_greenResolve", "green_txt", "btn_blueResolve", "blue_txt", "btn_purpleResolve", "purple_txt", "btn_orangeResolve", "orange_txt", "ckb_keep", "container"];
            return SmeltingBatchSkin;
        })(egret.gui.Skin);
        game.SmeltingBatchSkin = SmeltingBatchSkin;
        egret.registerClass(SmeltingBatchSkin,"skins.game.SmeltingBatchSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
