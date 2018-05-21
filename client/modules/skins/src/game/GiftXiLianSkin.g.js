var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftXiLianSkin = (function (_super) {
            __extends(GiftXiLianSkin, _super);
            function GiftXiLianSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_buyLingYun_i(), this.effect_gift_i(), this.ico_gift_i(), this.ico_giftWord_i(), this.__4_i(), this.__5_i(), this.label_ziZhi_i(), this.grp_star_i(), this.__17_i(), this.bar_process_i(), this.label_max_i(), this.grp_xiLian_i(), this.label_result_i(), this.label_resultSafe_i(), this.effect_success_i(), this.btn_help_i(), this.btn_back_i(), this.btn_safe_i(), this.__26_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftXiLianSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftXiLianSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 99, 20]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 109, 30]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 119, 40]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 129, 50]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 139, 60]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 149, 70]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_fabaoxiliani", 15]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "洗炼消耗：", 0xF0AD32, 120, 59]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [241, 58]);
                t.layout = this.__19_i();
                t.elementsContent = [this.label_itemName_i(), this.label_itemNum_i()];
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [16, "消耗", 0, 2]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 0, 0]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [40, 0]);
                t.elementsContent = [this.__22_i(), this.label_cost_i()];
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [16, "防止资质下降", 115, 1]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [3, "middle"]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["touchChildren", "touchEnabled", "x", "y"], [false, false, 158, 587]);
                t.layout = this.__25_i();
                t.elementsContent = [this.__21_i(), this.__23_i(), this.__24_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_fabaobeijin_3", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 16, "资质越高，法宝每级所加的属性越高", 0x239DE0, 10, 637]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 16, "法宝星级越高，洗炼资质上限越高", 0x239DE0, 20, 667]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 3;
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star2", "ico_star", false, 0, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star1", "ico_star", false, 39, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 79, 0]);
                return t;
            };
            p.bar_process_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_process = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.comp.Bar_Exp_Skin, 330]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_buyLingYun_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_buyLingYun = t;
                this.__s(t, ["source", "x", "y"], ["ico_goumailinyunshi", 336, 85]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 4]);
                return t;
            };
            p.btn_safe_i = function () {
                var t = new egret.gui.CheckBox();
                this.btn_safe = t;
                this.__s(t, ["width", "x", "y"], [241, 111, 578]);
                return t;
            };
            p.btn_xiLian_i = function () {
                var t = new egret.gui.Button();
                this.btn_xiLian = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_xiliansgd", skins.comp.Btn_3_8_Skin, 0]);
                return t;
            };
            p.effect_gift_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_gift = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 236, 161]);
                return t;
            };
            p.effect_success_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_success = t;
                this.__s(t, ["effectId", "x", "y"], [64, 240, 424]);
                return t;
            };
            p.grp_star_i = function () {
                var t = new egret.gui.Group();
                this.grp_star = t;
                this.__s(t, ["horizontalCenter", "x", "y"], [0.5, 10, 271]);
                t.layout = this.__6_i();
                t.elementsContent = [this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i()];
                return t;
            };
            p.grp_xiLian_i = function () {
                var t = new egret.gui.Group();
                this.grp_xiLian = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 479]);
                t.elementsContent = [this.btn_xiLian_i(), this.__18_i(), this.ico_item_i(), this.__20_i()];
                return t;
            };
            p.ico_giftWord_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_giftWord = t;
                this.__s(t, ["x", "y"], [92, 79]);
                return t;
            };
            p.ico_gift_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_gift = t;
                this.__s(t, ["horizontalCenter", "verticalCenter", "x", "y"], [-4, -239, 10, 10]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                this.__s(t, ["height", "width", "x", "y"], [40, 40, 205, 47]);
                return t;
            };
            p.label_cost_i = function () {
                var t = new egret.gui.Label();
                this.label_cost = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "99", 26, 0]);
                return t;
            };
            p.label_itemName_i = function () {
                var t = new egret.gui.Label();
                this.label_itemName = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xD60F99, 0, 0]);
                return t;
            };
            p.label_itemNum_i = function () {
                var t = new egret.gui.Label();
                this.label_itemNum = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xFFFFFF, 95, 0]);
                return t;
            };
            p.label_max_i = function () {
                var t = new mo.gui.Label();
                this.label_max = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 20, "已洗炼出当前星级的资质上限", 0xCB1010, 30, 427]);
                return t;
            };
            p.label_resultSafe_i = function () {
                var t = new mo.gui.Label();
                this.label_resultSafe = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 16, "洗炼失败：保护已开启属性未下降", 0xF0D90F, 10, 410]);
                return t;
            };
            p.label_result_i = function () {
                var t = new mo.gui.Label();
                this.label_result = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "%s%s %s(%s)", 0xEBE1E1, 410]);
                return t;
            };
            p.label_ziZhi_i = function () {
                var t = new mo.gui.Label();
                this.label_ziZhi = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 18, "资质：%s/%s", 0xE3B308, 10, 300]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 89, 10]);
                return t;
            };
            GiftXiLianSkin._skinParts = ["btn_buyLingYun", "effect_gift", "ico_gift", "ico_giftWord", "label_ziZhi", "grp_star", "bar_process", "label_max", "btn_xiLian", "ico_item", "label_itemName", "label_itemNum", "grp_xiLian", "label_result", "label_resultSafe", "effect_success", "btn_help", "btn_back", "btn_safe", "label_cost"];
            return GiftXiLianSkin;
        })(egret.gui.Skin);
        game.GiftXiLianSkin = GiftXiLianSkin;
        egret.registerClass(GiftXiLianSkin,"skins.game.GiftXiLianSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
