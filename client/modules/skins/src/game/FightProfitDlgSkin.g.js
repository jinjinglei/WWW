var skins;
(function (skins) {
    var game;
    (function (game) {
        var FightProfitDlgSkin = (function (_super) {
            __extends(FightProfitDlgSkin, _super);
            function FightProfitDlgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__23_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FightProfitDlgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FightProfitDlgSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "聚灵妖莲可随时间额外产出经验，", 0x4FC70A, 0, 0]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "角色", 0xFF0000, 270, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "级开启", 0xFF0000, 290, 20]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "聚灵妖莲可随时间产出额外经验：", 0x4FC70A, 0, 0]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "已累计经验：", 0x4FC70A, 0, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [-1, 48]);
                t.layout = this.__17_i();
                t.elementsContent = [this.__16_i(), this.label_expTotal_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "妖莲", 0x4FC70A, 0, 0]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "级产量：", 0x4FC70A, 54, 0]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [0, 24]);
                t.layout = this.__21_i();
                t.elementsContent = [this.__19_i(), this.label_curExpLv_i(), this.__20_i(), this.label_expPer_i()];
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, -20]);
                t.elementsContent = [this.__3_i(), this.__6_i(), this.__9_i(), this.label_tips_i(), this.btn_close_i(), this.__10_i(), this.label_noExp_i(), this.grp_expNoOpen_i(), this.grp_expOpen_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [472, 0, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", 450, -6]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_exp", 0, 7]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [178, 32]);
                t.layout = this.__4_i();
                t.elementsContent = [this.__5_i(), this.label_profit_exp_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 0, 3]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [23, 31]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__8_i(), this.label_profit_gold_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_close_Skin, 414, -6]);
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_qianwanglinqu", "前往领取", skins.comp.Btn_3_24_Skin, 300, 21]);
                return t;
            };
            p.grp_expNoOpen_i = function () {
                var t = new egret.gui.Group();
                this.grp_expNoOpen = t;
                this.__s(t, ["x", "y"], [24, 392]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__11_i(), this.__12_i(), this.label_expOpenLv_i(), this.__13_i()];
                return t;
            };
            p.grp_expOpen_i = function () {
                var t = new egret.gui.Group();
                this.grp_expOpen = t;
                this.__s(t, ["x", "y"], [23, 368]);
                t.elementsContent = [this.__15_i(), this.__18_i(), this.__22_i(), this.btn_get_i()];
                return t;
            };
            p.label_curExpLv_i = function () {
                var t = new egret.gui.Label();
                this.label_curExpLv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "12", 0x4FC70A, 34, 0]);
                return t;
            };
            p.label_expOpenLv_i = function () {
                var t = new egret.gui.Label();
                this.label_expOpenLv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "0", 0xFF0000, 280, 10]);
                return t;
            };
            p.label_expPer_i = function () {
                var t = new egret.gui.Label();
                this.label_expPer = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "200W/小时", 0x4FC70A, 114, 0]);
                return t;
            };
            p.label_expTotal_i = function () {
                var t = new egret.gui.Label();
                this.label_expTotal = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "123/3223", 0x4FC70A, 50, 0]);
                return t;
            };
            p.label_noExp_i = function () {
                var t = new egret.gui.Label();
                this.label_noExp = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "标签", 0xEE1F1F, 337]);
                return t;
            };
            p.label_profit_exp_i = function () {
                var t = new mo.gui.Label();
                this.label_profit_exp = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "%s/每只怪", 41, 0]);
                return t;
            };
            p.label_profit_gold_i = function () {
                var t = new mo.gui.Label();
                this.label_profit_gold = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "%s/小时", 27, 0]);
                return t;
            };
            p.label_tips_i = function () {
                var t = new mo.gui.Label();
                this.label_tips = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "textAlign", "textColor", "touchEnabled", "width", "y"], [0, 15, 18, "left", 14013876, false, 400, 65]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0, 22, "收益统计", 2]);
                return t;
            };
            FightProfitDlgSkin._skinParts = ["label_profit_exp", "label_profit_gold", "label_tips", "btn_close", "label_noExp", "label_expOpenLv", "grp_expNoOpen", "label_expTotal", "label_curExpLv", "label_expPer", "btn_get", "grp_expOpen"];
            return FightProfitDlgSkin;
        })(egret.gui.Skin);
        game.FightProfitDlgSkin = FightProfitDlgSkin;
        egret.registerClass(FightProfitDlgSkin,"skins.game.FightProfitDlgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
