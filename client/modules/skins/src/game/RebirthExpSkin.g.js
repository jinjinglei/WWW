var skins;
(function (skins) {
    var game;
    (function (game) {
        var RebirthExpSkin = (function (_super) {
            __extends(RebirthExpSkin, _super);
            function RebirthExpSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.__5_i(), this.grp_0_i(), this.grp_1_i(), this.grp_2_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RebirthExpSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RebirthExpSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jingyanqiu", 10, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 105]);
                t.elementsContent = [this.__4_i(), this.img_exp_i(), this.label_exp_i()];
                return t;
            };
            p.btn_buy0_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy0 = t;
                this.__s(t, ["icon", "label", "skinName", "verticalCenter", "x", "y"], ["btn_txt_g_goumai", "按钮", skins.comp.Btn_3_0_Skin, 0, 284, 10]);
                return t;
            };
            p.btn_buy1_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy1 = t;
                this.__s(t, ["icon", "label", "skinName", "verticalCenter", "x", "y"], ["btn_txt_g_goumai", "按钮", skins.comp.Btn_3_0_Skin, 0, 284, 10]);
                return t;
            };
            p.btn_buy2_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy2 = t;
                this.__s(t, ["icon", "label", "skinName", "verticalCenter", "x", "y"], ["btn_txt_g_goumai", "按钮", skins.comp.Btn_3_0_Skin, 0, 284, 10]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 421, 76]);
                return t;
            };
            p.btn_use0_i = function () {
                var t = new egret.gui.Button();
                this.btn_use0 = t;
                this.__s(t, ["icon", "label", "skinName", "verticalCenter", "x", "y"], ["btn_txt_g_shiyong", "按钮", skins.comp.Btn_3_24_Skin, 0, 292, 20]);
                return t;
            };
            p.btn_use1_i = function () {
                var t = new egret.gui.Button();
                this.btn_use1 = t;
                this.__s(t, ["icon", "label", "skinName", "verticalCenter", "x", "y"], ["btn_txt_g_shiyong", "按钮", skins.comp.Btn_3_24_Skin, 0, 292, 20]);
                return t;
            };
            p.btn_use2_i = function () {
                var t = new egret.gui.Button();
                this.btn_use2 = t;
                this.__s(t, ["icon", "label", "skinName", "verticalCenter", "x", "y"], ["btn_txt_g_shiyong", "按钮", skins.comp.Btn_3_24_Skin, 0, 292, 20]);
                return t;
            };
            p.grp_0_i = function () {
                var t = new egret.gui.Group();
                this.grp_0 = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [91, 0, 418, 409]);
                t.elementsContent = [this.ico_item0_i(), this.label_name0_i(), this.label_num0_i(), this.btn_buy0_i(), this.btn_use0_i()];
                return t;
            };
            p.grp_1_i = function () {
                var t = new egret.gui.Group();
                this.grp_1 = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [91, 0, 418, 510]);
                t.elementsContent = [this.ico_item1_i(), this.label_name1_i(), this.label_num1_i(), this.btn_buy1_i(), this.btn_use1_i()];
                return t;
            };
            p.grp_2_i = function () {
                var t = new egret.gui.Group();
                this.grp_2 = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [91, 0, 418, 605]);
                t.elementsContent = [this.ico_item2_i(), this.label_name2_i(), this.label_num2_i(), this.btn_buy2_i(), this.btn_use2_i()];
                return t;
            };
            p.ico_item0_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item0 = t;
                this.__s(t, ["x", "y"], [18, 10]);
                return t;
            };
            p.ico_item1_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item1 = t;
                this.__s(t, ["x", "y"], [18, 10]);
                return t;
            };
            p.ico_item2_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item2 = t;
                this.__s(t, ["x", "y"], [18, 10]);
                return t;
            };
            p.img_exp_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_exp = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 164, "ico_nanqiu", 162, 101, 29]);
                return t;
            };
            p.label_exp_i = function () {
                var t = new mo.gui.Label();
                this.label_exp = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "stroke", "text", "x", "y"], [0, 5, 19, 1, "%s万/%s万", 10, 89]);
                return t;
            };
            p.label_name0_i = function () {
                var t = new mo.gui.Label();
                this.label_name0 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "初级飞升丹", 0x6800CA, 103, 18]);
                return t;
            };
            p.label_name1_i = function () {
                var t = new mo.gui.Label();
                this.label_name1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "中级飞升丹", 0xD55000, 103, 18]);
                return t;
            };
            p.label_name2_i = function () {
                var t = new mo.gui.Label();
                this.label_name2 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "高级飞升丹", 0xD2000F, 103, 18]);
                return t;
            };
            p.label_num0_i = function () {
                var t = new mo.gui.Label();
                this.label_num0 = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [20, 1, "剩余数量：%s", 0xFFFFFF, 103, 53]);
                return t;
            };
            p.label_num1_i = function () {
                var t = new mo.gui.Label();
                this.label_num1 = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [20, 1, "剩余数量：%s", 0xFFFFFF, 103, 53]);
                return t;
            };
            p.label_num2_i = function () {
                var t = new mo.gui.Label();
                this.label_num2 = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [20, 1, "剩余数量：%s", 0xFFFFFF, 103, 53]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_huoqujingyan", 0]);
                return t;
            };
            RebirthExpSkin._skinParts = ["btn_close", "img_exp", "label_exp", "ico_item0", "label_name0", "label_num0", "btn_buy0", "btn_use0", "grp_0", "ico_item1", "label_name1", "label_num1", "btn_buy1", "btn_use1", "grp_1", "ico_item2", "label_name2", "label_num2", "btn_buy2", "btn_use2", "grp_2"];
            return RebirthExpSkin;
        })(egret.gui.Skin);
        game.RebirthExpSkin = RebirthExpSkin;
        egret.registerClass(RebirthExpSkin,"skins.game.RebirthExpSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
