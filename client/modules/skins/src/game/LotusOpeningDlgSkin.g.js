var skins;
(function (skins) {
    var game;
    (function (game) {
        var LotusOpeningDlgSkin = (function (_super) {
            __extends(LotusOpeningDlgSkin, _super);
            function LotusOpeningDlgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.label_lotusLvl_i(), this.label_openingDay_i(), this.label_add_i(), this.label_lmt_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.label_cost_i(), this.label_exp_i(), this.label_leftNum_i(), this.__7_i(), this.btn_opening_i(), this.btn_help_i(), this.btn_close_i(), this.efx_opening_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=LotusOpeningDlgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return LotusOpeningDlgSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["bold", "horizontalCenter", "size", "text", "textColor", "y"], [true, 0, 18, "当日未开光，开光经验加成清零", 0x1A9EA4, 400]);
                return t;
            };
            p.__5_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["bold", "horizontalCenter", "size", "text", "textColor", "x", "y"], [true, 0.5, 18, "连续开光每多1天，开光经验就上升2%", 0x1A9EA4, 10, 427]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 257, 486]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [347, 272]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 399, 133]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.Button();
                this.btn_help = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_info_Skin, 50, 133]);
                return t;
            };
            p.btn_opening_i = function () {
                var t = new egret.gui.Button();
                this.btn_opening = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_g_kaiguang2", "按钮", skins.comp.Btn_3_22_Skin, 584]);
                return t;
            };
            p.efx_opening_i = function () {
                var t = new g_comp.UIEffect();
                this.efx_opening = t;
                this.__s(t, ["effectId", "x", "y"], [42, 144, 246]);
                return t;
            };
            p.label_add_i = function () {
                var t = new mo.gui.Label();
                this.label_add = t;
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 20, "开光经验加成：%s%", 0xF7D26E, 229, 298]);
                return t;
            };
            p.label_cost_i = function () {
                var t = new mo.gui.Label();
                this.label_cost = t;
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 20, "1000", 0xFFFFFF, 293, 484]);
                return t;
            };
            p.label_exp_i = function () {
                var t = new mo.gui.Label();
                this.label_exp = t;
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 20, "%s万", 0x2FE611, 255, 527]);
                return t;
            };
            p.label_leftNum_i = function () {
                var t = new mo.gui.Label();
                this.label_leftNum = t;
                this.__s(t, ["bold", "horizontalCenter", "size", "text", "textColor", "y"], [true, 0, 18, "VIP%s今日剩余次数：%s/%s", 0xD6D02A, 637]);
                return t;
            };
            p.label_lmt_i = function () {
                var t = new mo.gui.Label();
                this.label_lmt = t;
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 20, "(上限%s%)", 0xF7D26E, 259, 322]);
                return t;
            };
            p.label_lotusLvl_i = function () {
                var t = new mo.gui.Label();
                this.label_lotusLvl = t;
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 22, "150", 0xF7D26E, 344, 204]);
                return t;
            };
            p.label_openingDay_i = function () {
                var t = new mo.gui.Label();
                this.label_openingDay = t;
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 20, "已连续开光：%s天", 0xF7D26E, 229, 271]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_baowukaiguang", 0]);
                return t;
            };
            LotusOpeningDlgSkin._skinParts = ["label_lotusLvl", "label_openingDay", "label_add", "label_lmt", "label_cost", "label_exp", "label_leftNum", "btn_opening", "btn_help", "btn_close", "efx_opening"];
            return LotusOpeningDlgSkin;
        })(egret.gui.Skin);
        game.LotusOpeningDlgSkin = LotusOpeningDlgSkin;
        egret.registerClass(LotusOpeningDlgSkin,"skins.game.LotusOpeningDlgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
