var skins;
(function (skins) {
    var game;
    (function (game) {
        var PrintItemSkin = (function (_super) {
            __extends(PrintItemSkin, _super);
            function PrintItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [152, 404]);
                this.elementsContent = [this.__4_i(), this.__5_i(), this.label_grade_i(), this.btn_str_i(), this.btn_active_i(), this.label_cannotStr_i(), this.label_cannotActive_i(), this.ico_item_i(), this.img_print_i(), this.label_strLvl_i(), this.ico_medalItem_i(), this.label_medal_i(), this.img_red_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=PrintItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return PrintItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_hongdietsg", 109, 97]);
                return t;
            };
            p.btn_active_i = function () {
                var t = new egret.gui.Button();
                this.btn_active = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [33, "btn_txt_g_jihuo", skins.comp.Btn_3_3_Skin, 97, 289, 49]);
                return t;
            };
            p.btn_str_i = function () {
                var t = new egret.gui.Button();
                this.btn_str = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [33, "btn_txt_g_qianghua", skins.comp.Btn_3_21_Skin, 97, 289, 49]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [22, 31]);
                return t;
            };
            p.ico_medalItem_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medalItem = t;
                this.__s(t, ["x", "y"], [115, 29]);
                return t;
            };
            p.img_print_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_print = t;
                this.__s(t, ["height", "width", "x", "y"], [20, 20, 131, 29]);
                return t;
            };
            p.img_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 84, 6]);
                return t;
            };
            p.label_cannotActive_i = function () {
                var t = new mo.gui.Label();
                this.label_cannotActive = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [136, 16, "%s级可激活", 0xFF0000, 10, 89]);
                return t;
            };
            p.label_cannotStr_i = function () {
                var t = new mo.gui.Label();
                this.label_cannotStr = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [136, 16, "%s级可强化", 0xFF0000, 89]);
                return t;
            };
            p.label_grade_i = function () {
                var t = new mo.gui.Label();
                this.label_grade = t;
                this.__s(t, ["lineSpacing", "size", "text", "textAlign", "textColor", "width", "x", "y"], [4, 18, "评分: %s", "left", 0xEBD55C, 225, 137, 108]);
                return t;
            };
            p.label_medal_i = function () {
                var t = new mo.gui.Label();
                this.label_medal = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "y"], [-12, 18, 2, 0x000000, "西班牙", "center", 0x00FF08, 100, 12]);
                return t;
            };
            p.label_strLvl_i = function () {
                var t = new mo.gui.Label();
                this.label_strLvl = t;
                this.__s(t, ["size", "text", "textAlign", "width", "x", "y"], [18, "强化+%s", "center", 100, 7, 109]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_equip_choose_bg", 0]);
                return t;
            };
            PrintItemSkin._skinParts = ["label_grade", "btn_str", "btn_active", "label_cannotStr", "label_cannotActive", "ico_item", "img_print", "label_strLvl", "ico_medalItem", "label_medal", "img_red"];
            return PrintItemSkin;
        })(egret.gui.Skin);
        game.PrintItemSkin = PrintItemSkin;
        egret.registerClass(PrintItemSkin,"skins.game.PrintItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
