var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseItemDetailSkin = (function (_super) {
            __extends(BaseItemDetailSkin, _super);
            function BaseItemDetailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.img_bg_i(), this.__3_i(), this.label_desc2_i(), this.label_desc1_i(), this.label_name_i(), this.label_locked_i(), this.btn_close_i(), this.ico_item_i(), this.grp_equip_i(), this.grp_item_sale_i(), this.btn_ok_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseItemDetailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseItemDetailSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign", "verticalAlign"], [8, "center", "middle"]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [154, 1, "s9g_black_0", 344, 283]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 50;
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "x", "y"], [44, 1, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", 74, 10, 24]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "x", "y"], ["黑体", 16, "请选择出售数量", -3, 3]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [30, "ico_gold_2", 30, 281, 536]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [2, "middle"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [30, "ico_yuanbao2", 33, 281, 536]);
                return t;
            };
            p.btn_add_i = function () {
                var t = new egret.gui.Button();
                this.btn_add = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "width", "x", "y"], ["txt_buy_plus", "+", 0.6, skins.comp.Btn_3_7_Skin, 83, 210, 29]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 393, 145]);
                return t;
            };
            p.btn_lock_i = function () {
                var t = new egret.gui.Button();
                this.btn_lock = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_b_suoding", skins.comp.Btn_3_0_Skin, 63]);
                return t;
            };
            p.btn_max_i = function () {
                var t = new egret.gui.Button();
                this.btn_max = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "x", "y"], ["txt_buy_max", "max", 0.8, skins.comp.Btn_3_7_Skin, 267, 29]);
                return t;
            };
            p.btn_min_i = function () {
                var t = new egret.gui.Button();
                this.btn_min = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "x", "y"], ["txt_buy_minest", "min", 0.8, skins.comp.Btn_3_7_Skin, -8, 29]);
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["icon", "label", "skinName", "visible", "x", "y"], ["btn_txt_g_ok", "按钮", skins.comp.Btn_3_0_Skin, false, 175, 461]);
                return t;
            };
            p.btn_sale_i = function () {
                var t = new egret.gui.Button();
                this.btn_sale = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_b_chushou", "按钮", skins.comp.Btn_3_0_Skin, 15, 65]);
                return t;
            };
            p.btn_sell_i = function () {
                var t = new egret.gui.Button();
                this.btn_sell = t;
                this.__s(t, ["icon", "label", "skinName"], ["btn_txt_b_chushou", "按钮", skins.comp.Btn_3_0_Skin]);
                return t;
            };
            p.btn_sub_i = function () {
                var t = new egret.gui.Button();
                this.btn_sub = t;
                this.__s(t, ["icon", "label", "scaleX", "skinName", "width", "x", "y"], ["txt_buy_minus", "-", 0.6, skins.comp.Btn_3_7_Skin, 83, 75, 29]);
                return t;
            };
            p.btn_unlock_i = function () {
                var t = new egret.gui.Button();
                this.btn_unlock = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "visible", "x", "y"], [1.5, "btn_txt_b_jiesuo", skins.comp.Btn_3_43_Skin, false, 10, 64]);
                return t;
            };
            p.grp_equip_i = function () {
                var t = new egret.gui.Group();
                this.grp_equip = t;
                this.__s(t, ["height", "visible", "width", "x", "y"], [136, false, 308, 89, 434]);
                t.elementsContent = [this.label_desc3_i(), this.label_specialEquip_i(), this.label_unlocked_i(), this.grp_sell_btns_i(), this.btn_unlock_i()];
                return t;
            };
            p.grp_gold_container_i = function () {
                var t = new egret.gui.Group();
                this.grp_gold_container = t;
                this.__s(t, ["x", "y"], [272, 11]);
                t.layout = this.__11_i();
                t.elementsContent = [this.grp_gold_i(), this.grp_yuanbao_i()];
                return t;
            };
            p.grp_gold_i = function () {
                var t = new egret.gui.Group();
                this.grp_gold = t;
                t.y = 0;
                t.layout = this.__8_i();
                t.elementsContent = [this.label_gold_i(), this.__7_i()];
                return t;
            };
            p.grp_item_sale_i = function () {
                var t = new egret.gui.Group();
                this.grp_item_sale = t;
                this.__s(t, ["width", "x", "y"], [334, 72, 434]);
                t.elementsContent = [this.btn_sub_i(), this.btn_min_i(), this.btn_add_i(), this.btn_max_i(), this.__5_i(), this.label_num_i(), this.__6_i(), this.grp_rewards_i()];
                return t;
            };
            p.grp_items_i = function () {
                var t = new egret.gui.Group();
                this.grp_items = t;
                this.__s(t, ["width", "x", "y"], [340, 26, 26]);
                t.elementsContent = [this.label_items_i()];
                return t;
            };
            p.grp_rewards_i = function () {
                var t = new egret.gui.Group();
                this.grp_rewards = t;
                this.__s(t, ["width", "x", "y"], [340, -4, 74]);
                t.layout = this.__12_i();
                t.elementsContent = [this.grp_gold_container_i(), this.grp_items_i(), this.btn_sell_i()];
                return t;
            };
            p.grp_sell_btns_i = function () {
                var t = new egret.gui.Group();
                this.grp_sell_btns = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 62]);
                t.layout = this.__4_i();
                t.elementsContent = [this.btn_sale_i(), this.btn_lock_i()];
                return t;
            };
            p.grp_yuanbao_i = function () {
                var t = new egret.gui.Group();
                this.grp_yuanbao = t;
                this.__s(t, ["x", "y"], [10, 10]);
                t.layout = this.__10_i();
                t.elementsContent = [this.label_yuanbao_i(), this.__9_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [73, 186]);
                return t;
            };
            p.img_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_bg = t;
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [492, 0, egret.gui.getScale9Grid("7,6,292,283"), "s9g_dlg_0", 382, 140]);
                return t;
            };
            p.label_desc1_i = function () {
                var t = new mo.gui.Label();
                this.label_desc1 = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], ["宋体", 58, 20, "拥有 0 件", 13750708, 170, 150, 227]);
                return t;
            };
            p.label_desc2_i = function () {
                var t = new mo.gui.Label();
                this.label_desc2 = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textColor", "width", "y"], ["宋体", 131, 0, 20, "物理攻击 +50", 13750708, 322, 296]);
                return t;
            };
            p.label_desc3_i = function () {
                var t = new mo.gui.Label();
                this.label_desc3 = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], ["宋体", 0, 20, "需求等级 lv.20", "center", 16711680, 150, 34]);
                return t;
            };
            p.label_gold_i = function () {
                var t = new egret.gui.Label();
                this.label_gold = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "获得:55125", 0x04FA08, 18, 6]);
                return t;
            };
            p.label_items_i = function () {
                var t = new egret.gui.Label();
                this.label_items = t;
                this.__s(t, ["size", "textAlign", "width"], [18, "center", 340]);
                return t;
            };
            p.label_locked_i = function () {
                var t = new mo.gui.Label();
                this.label_locked = t;
                this.__s(t, ["bold", "fontFamily", "size", "text", "textAlign", "textColor", "x", "y"], [true, "宋体", 16, "装备已锁定\r无法出售\r无法熔炼", "center", 0xFF0E0E, 318, 202]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["bold", "fontFamily", "size", "text", "textColor", "width", "x", "y"], [true, "宋体", 24, "巨力斧头", 14525952, 220, 148, 190]);
                return t;
            };
            p.label_num_i = function () {
                var t = new mo.gui.Label();
                this.label_num = t;
                this.__s(t, ["horizontalCenter", "size", "text", "x", "y"], [0.5, 22, "1", 10, 30]);
                return t;
            };
            p.label_specialEquip_i = function () {
                var t = new mo.gui.Label();
                this.label_specialEquip = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "y"], ["宋体", 0, 16, "该装备可以通过传承提升等级", "left", 0xFFD400, 10]);
                return t;
            };
            p.label_unlocked_i = function () {
                var t = new mo.gui.Label();
                this.label_unlocked = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "x", "y"], ["宋体", 0, 16, "当前装备未被锁定,可以被出售和熔炼", "left", 0xA6A6A6, 10, 106]);
                return t;
            };
            p.label_yuanbao_i = function () {
                var t = new egret.gui.Label();
                this.label_yuanbao = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 18, "55125", 0x04FA08, 18, 6]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [2, "middle"]);
                return t;
            };
            BaseItemDetailSkin._skinParts = ["img_bg", "label_desc2", "label_desc1", "label_name", "label_locked", "btn_close", "ico_item", "label_desc3", "label_specialEquip", "label_unlocked", "btn_sale", "btn_lock", "grp_sell_btns", "btn_unlock", "grp_equip", "btn_sub", "btn_min", "btn_add", "btn_max", "label_num", "label_gold", "grp_gold", "label_yuanbao", "grp_yuanbao", "grp_gold_container", "label_items", "grp_items", "btn_sell", "grp_rewards", "grp_item_sale", "btn_ok"];
            return BaseItemDetailSkin;
        })(egret.gui.Skin);
        game.BaseItemDetailSkin = BaseItemDetailSkin;
        egret.registerClass(BaseItemDetailSkin,"skins.game.BaseItemDetailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
