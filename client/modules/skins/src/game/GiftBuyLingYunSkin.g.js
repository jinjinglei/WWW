var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftBuyLingYunSkin = (function (_super) {
            __extends(GiftBuyLingYunSkin, _super);
            function GiftBuyLingYunSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.__4_i(), this.__6_i(), this.btn_buy_i(), this.label_vip_i(), this.__7_i(), this.__8_i(), this.label_yuanbao_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftBuyLingYunSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftBuyLingYunSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 26, "凌云石购买", 0xFAED38, 220]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 291]);
                t.layout = this.__5_i();
                t.elementsContent = [this.label_cost_i(), this.img_item_i(), this.label_num_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["yuanbao_round_bg", false, 203, 446]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_yuanbao", false, 174, 449]);
                return t;
            };
            p.btn_buy_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0.5, "btn_txt_g_goumai", skins.comp.Btn_3_43_Skin, 363]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 422, 211]);
                return t;
            };
            p.img_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_item = t;
                this.__s(t, ["height", "width", "x", "y"], [30, 30, 435, 0]);
                return t;
            };
            p.label_cost_i = function () {
                var t = new mo.gui.Label();
                this.label_cost = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "是否花费[ubb color=yellow]%s元宝[/ubb]购买", 0, 2]);
                return t;
            };
            p.label_num_i = function () {
                var t = new mo.gui.Label();
                this.label_num = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "×%s", 309, 8]);
                return t;
            };
            p.label_vip_i = function () {
                var t = new mo.gui.Label();
                this.label_vip = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0, 18, "今日已购买：%s次", 408]);
                return t;
            };
            p.label_yuanbao_i = function () {
                var t = new mo.gui.Label();
                this.label_yuanbao = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["楷体", 18, "0", "center", 0xDA9F00, false, 90, 204, 447]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [297, 0.5, "s9g_dlg_31", 435, 209]);
                return t;
            };
            GiftBuyLingYunSkin._skinParts = ["btn_close", "label_cost", "img_item", "label_num", "btn_buy", "label_vip", "label_yuanbao"];
            return GiftBuyLingYunSkin;
        })(egret.gui.Skin);
        game.GiftBuyLingYunSkin = GiftBuyLingYunSkin;
        egret.registerClass(GiftBuyLingYunSkin,"skins.game.GiftBuyLingYunSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
