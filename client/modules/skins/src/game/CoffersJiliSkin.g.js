var skins;
(function (skins) {
    var game;
    (function (game) {
        var CoffersJiliSkin = (function (_super) {
            __extends(CoffersJiliSkin, _super);
            function CoffersJiliSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.bar_value_i(), this.btn_help_i(), this.btn_close_i(), this.label_addProp_i(), this.__10_i(), this.__11_i(), this.label_curLv_i(), this.label_curAdd_i(), this.label_value_i(), this.grp_nextLv_i(), this.grp_jili_i(), this.label_noCount_i(), this.label_maxLv_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CoffersJiliSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CoffersJiliSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "守卫攻击：", 0x2AFF00, 50, 312]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "下阶段：", 0x2AFF00, 0, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "守卫攻击：", 0x2AFF00, 0, 40]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "消耗：", 0xFEF6E0, 0, 0]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 64]);
                t.layout = this.__15_i();
                t.elementsContent = [this.__14_i(), this.ico_item_i(), this.label_costName_i(), this.label_cost_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [1, "und_tongyongdiban", 1.5]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 20, "每日4:00——24:00可以激励守卫", 0x09A0E1, 10, 699]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 20, "激励值每日0点清空", 0x09A0E1, 20, 727]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_shouweijili", 38]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jilijiacneng", 49, 236]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_kaizanjiaceng", 49, 119]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_fenggexiansfg", 182]);
                return t;
            };
            p.bar_value_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_value = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0.5, skins.comp.Bar_Exp_Skin, 380]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 431, 47]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.Button();
                this.btn_help = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_info_Skin, 14, 47]);
                return t;
            };
            p.btn_jili_i = function () {
                var t = new egret.gui.Button();
                this.btn_jili = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_jiligs", skins.comp.Btn_3_22_Skin, 0]);
                return t;
            };
            p.grp_jili_i = function () {
                var t = new egret.gui.Group();
                this.grp_jili = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 505]);
                t.elementsContent = [this.label_leftCount_i(), this.btn_jili_i(), this.__16_i()];
                return t;
            };
            p.grp_nextLv_i = function () {
                var t = new egret.gui.Group();
                this.grp_nextLv = t;
                this.__s(t, ["x", "y"], [270, 272]);
                t.elementsContent = [this.__12_i(), this.__13_i(), this.label_nextAdd_i(), this.label_nextLv_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [30, "ico_yuanbao", 30, 142, 1]);
                return t;
            };
            p.label_addProp_i = function () {
                var t = new egret.gui.Label();
                this.label_addProp = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0x2AFF00, 161, 122]);
                return t;
            };
            p.label_costName_i = function () {
                var t = new egret.gui.Label();
                this.label_costName = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "激励酒", 0xC740DC, 185, 0]);
                return t;
            };
            p.label_cost_i = function () {
                var t = new egret.gui.Label();
                this.label_cost = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "999", 0xFEF6E0, 195, 10]);
                return t;
            };
            p.label_curAdd_i = function () {
                var t = new egret.gui.Label();
                this.label_curAdd = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "+10%", 0x2AFF00, 142, 312]);
                return t;
            };
            p.label_curLv_i = function () {
                var t = new egret.gui.Label();
                this.label_curLv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "10阶", 0x2AFF00, 142, 272]);
                return t;
            };
            p.label_leftCount_i = function () {
                var t = new egret.gui.Label();
                this.label_leftCount = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "Vip%s今日剩余次数：%s/%s", 0xFEF6E0, 102]);
                return t;
            };
            p.label_maxLv_i = function () {
                var t = new egret.gui.Label();
                this.label_maxLv = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 20, "今日守卫激励已达最高阶", 0xFF0000, 20, 532]);
                return t;
            };
            p.label_nextAdd_i = function () {
                var t = new egret.gui.Label();
                this.label_nextAdd = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "+10%", 0x2AFF00, 98, 40]);
                return t;
            };
            p.label_nextLv_i = function () {
                var t = new egret.gui.Label();
                this.label_nextLv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "10阶", 0x2AFF00, 73, 0]);
                return t;
            };
            p.label_noCount_i = function () {
                var t = new egret.gui.Label();
                this.label_noCount = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 20, "今日激励次数已用完", 0xFF0000, 10, 532]);
                return t;
            };
            p.label_value_i = function () {
                var t = new egret.gui.Label();
                this.label_value = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "本次激励增加：+%s激励值", 0xEEB117, 409]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "当前阶段：", 0x2AFF00, 50, 272]);
                return t;
            };
            CoffersJiliSkin._skinParts = ["bar_value", "btn_help", "btn_close", "label_addProp", "label_curLv", "label_curAdd", "label_value", "label_nextAdd", "label_nextLv", "grp_nextLv", "label_leftCount", "btn_jili", "ico_item", "label_costName", "label_cost", "grp_jili", "label_noCount", "label_maxLv"];
            return CoffersJiliSkin;
        })(egret.gui.Skin);
        game.CoffersJiliSkin = CoffersJiliSkin;
        egret.registerClass(CoffersJiliSkin,"skins.game.CoffersJiliSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
