var skins;
(function (skins) {
    var game;
    (function (game) {
        var CCEquipSkin = (function (_super) {
            __extends(CCEquipSkin, _super);
            function CCEquipSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.img_title_i(), this.btn_close_i(), this.btn_help_i(), this.btn_chuanchen_i(), this.__5_i(), this.preview_i(), this.grp_before_i(), this.grp_after_i(), this.grp_lvlEnough_i(), this.grp_lvlNotEnough_i(), this.ico_item_i(), this.__22_i(), this.grp_resMy_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CCEquipSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CCEquipSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "textAlign", "width", "x", "y"], ["label_name_lvl", 20, "center", 181, 0, 0]);
                return t;
            };
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["label_score", 18, "评分:%s", "center", 0xE8CA47, 181, 0, 35]);
                return t;
            };
            p.__13_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["lineSpacing", "name", "size", "textAlign", "x", "y"], [15, "label_props", 18, "left", 36, 73]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["name", "width", "x", "y"], ["grp_props", 190, -5, 75]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__13_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_bencixiaohao", 0, 2]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__19_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 24, "9999", "left", 0xDA9F00, 100, 30, 2]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["horizontalAlign", "verticalAlign"], ["center", "middle"]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["horizontalAlign", "verticalAlign"], ["center", "middle"]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["gold_round_bg", false, 233, 752]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__24_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "剩余数量:", 0xF8E78B, 57, 11]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__26_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 22, "9999", "left", 0xDA9F00, 100, 30, 2]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_chuanc", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [56, egret.gui.getScale9Grid("30,27,11,14"), "panel_huawenlasheng", 407, 41, 601]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "textAlign", "width", "x", "y"], ["label_name_lvl", 20, "center", 181, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["label_score", 18, "评分:%s", "center", 0xE8CA47, 181, 0, 35]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["lineSpacing", "name", "size", "textAlign", "x", "y"], [15, "label_props", 18, "left", 36, 73]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.btn_chuanchen_i = function () {
                var t = new egret.gui.Button();
                this.btn_chuanchen = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_chuancheng", skins.comp.Btn_3_8_Skin, 147, 679]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 408, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.grp_after_i = function () {
                var t = new egret.gui.Group();
                this.grp_after = t;
                this.__s(t, ["x", "y"], [261, 310]);
                t.elementsContent = [this.__11_i(), this.__12_i(), this.__15_i()];
                return t;
            };
            p.grp_before_i = function () {
                var t = new egret.gui.Group();
                this.grp_before = t;
                this.__s(t, ["x", "y"], [31, 310]);
                t.elementsContent = [this.__6_i(), this.__7_i(), this.__10_i()];
                return t;
            };
            p.grp_lvlEnough_i = function () {
                var t = new egret.gui.Group();
                this.grp_lvlEnough = t;
                this.__s(t, ["width", "x", "y"], [400, 40, 615]);
                t.layout = this.__20_i();
                t.elementsContent = [this.__16_i(), this.grp_res_i()];
                return t;
            };
            p.grp_lvlNotEnough_i = function () {
                var t = new egret.gui.Group();
                this.grp_lvlNotEnough = t;
                this.__s(t, ["visible", "width", "x", "y"], [false, 400, 40, 615]);
                t.layout = this.__21_i();
                t.elementsContent = [this.label_needLvl_i()];
                return t;
            };
            p.grp_resMy_i = function () {
                var t = new egret.gui.Group();
                this.grp_resMy = t;
                this.__s(t, ["height", "x", "y"], [30, 134, 748]);
                t.layout = this.__23_i();
                t.elementsContent = [this.__24_i(), this.__25_i(), this.__26_i()];
                return t;
            };
            p.grp_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_res = t;
                this.__s(t, ["height", "x", "y"], [30, 275, 655]);
                t.layout = this.__17_i();
                t.elementsContent = [this.__18_i(), this.__19_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [200, 139]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_zhuanbeichuancen", 190, 9]);
                return t;
            };
            p.label_needLvl_i = function () {
                var t = new mo.gui.Label();
                this.label_needLvl = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "角色%s级可继续传承", 0xFA0005, 191, 0]);
                return t;
            };
            p.preview_i = function () {
                var t = new egret.gui.UIAsset();
                this.preview = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "visible"], [0, "pre_装备传承", 0, false]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["name", "width", "x", "y"], ["grp_props", 190, -5, 75]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__8_i()];
                return t;
            };
            CCEquipSkin._skinParts = ["img_title", "btn_close", "btn_help", "btn_chuanchen", "preview", "grp_before", "grp_after", "grp_res", "grp_lvlEnough", "label_needLvl", "grp_lvlNotEnough", "ico_item", "grp_resMy"];
            return CCEquipSkin;
        })(egret.gui.Skin);
        game.CCEquipSkin = CCEquipSkin;
        egret.registerClass(CCEquipSkin,"skins.game.CCEquipSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
