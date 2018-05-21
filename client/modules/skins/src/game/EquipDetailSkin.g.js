var skins;
(function (skins) {
    var game;
    (function (game) {
        var EquipDetailSkin = (function (_super) {
            __extends(EquipDetailSkin, _super);
            function EquipDetailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_close_i(), this.btn_replace_i(), this.img_red_i(), this.label_noEquip_i(), this.scr_hasEquip_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=EquipDetailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return EquipDetailSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [452, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 375, 53, 190]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_tit_equipDetail", 73, 11]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [0, 147]);
                t.elementsContent = [this.label_str_gem_i(), this.gem_stone_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 20;
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [0, 137]);
                t.layout = this.__7_i();
                t.elementsContent = [this.label_desc_i(), this.label_str_lvl_i(), this.label_str_star_i(), this.__6_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 409, 104]);
                return t;
            };
            p.btn_replace_i = function () {
                var t = new egret.gui.Button();
                this.btn_replace = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_replace", skins.comp.Btn_3_0_Skin, 654]);
                return t;
            };
            p.gem_stone_i = function () {
                var t = new g_comp.Gem_Stone();
                this.gem_stone = t;
                this.__s(t, ["x", "y"], [0, 29]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["horizontalCenter", "y"], [0.5, 13]);
                return t;
            };
            p.img_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 278, 645]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "textAlign", "x", "y"], [20, "评分", "left", 0, 0]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0, 20, "冲天法棍", 105]);
                return t;
            };
            p.label_noEquip_i = function () {
                var t = new egret.gui.Label();
                this.label_noEquip = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "textColor", "verticalCenter"], [0, 22, 1, "无装备", 0xCDCDCD, 40]);
                return t;
            };
            p.label_str_gem_i = function () {
                var t = new mo.gui.Label();
                this.label_str_gem = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "宝石加成:", 0xDDA600, 0, 0]);
                return t;
            };
            p.label_str_lvl_i = function () {
                var t = new mo.gui.Label();
                this.label_str_lvl = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "强化等级: %s%s", 0xDDA600, 0, 62]);
                return t;
            };
            p.label_str_star_i = function () {
                var t = new mo.gui.Label();
                this.label_str_star = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "升星等级: %s星%s%s", 0xDDA600, 0, 128]);
                return t;
            };
            p.scr_hasEquip_i = function () {
                var t = new egret.gui.Scroller();
                this.scr_hasEquip = t;
                this.__s(t, ["height", "width", "x", "y"], [438, 340, 72, 195]);
                t.viewport = this.__10_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                t.height = 433;
                t.layout = this.__9_i();
                t.elementsContent = [this.ico_item_i(), this.label_name_i(), this.__8_i()];
                return t;
            };
            EquipDetailSkin._skinParts = ["btn_close", "btn_replace", "img_red", "label_noEquip", "ico_item", "label_name", "label_desc", "label_str_lvl", "label_str_star", "label_str_gem", "gem_stone", "scr_hasEquip"];
            return EquipDetailSkin;
        })(egret.gui.Skin);
        game.EquipDetailSkin = EquipDetailSkin;
        egret.registerClass(EquipDetailSkin,"skins.game.EquipDetailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
