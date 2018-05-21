var skins;
(function (skins) {
    var game;
    (function (game) {
        var ArenaSkin = (function (_super) {
            __extends(ArenaSkin, _super);
            function ArenaSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.container_i(), this.__15_i(), this.__16_i(), this.btn_refresh_i(), this.label_time_i(), this.label_timeChange_i(), this.__17_i(), this.label_count_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ArenaSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ArenaSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [8, 173]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "width", "x", "y"], [22, "您当前没有对手了，请稍后再试", 14525952, false, 351, 24, 177]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "x", "y"], [0.5, -22, -33]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("17,8,109,23"), "ico_aocao", 155, 21, 725]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("17,8,109,23"), "ico_aocao", 152, 218, 725]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "挑战次数", 13422001, 30, 733]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "bg_forge";
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [502, 0.5, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 447, 85]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [38, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 146, 136, 43]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_hornor", 154, 48]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["panel_wing_1", 298, 1, 99]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [20, "我的排名", 14525952, false, 70, 107]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [10, 398]);
                return t;
            };
            p.btn_buy_i = function () {
                var t = new egret.gui.Button();
                this.btn_buy = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["ntc_text_exchange", skins.comp.Btn_3_7_Skin, 318, 45]);
                return t;
            };
            p.btn_change_i = function () {
                var t = new egret.gui.Button();
                this.btn_change = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_change", skins.comp.Btn_3_0_Skin, 588]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 6, 83]);
                return t;
            };
            p.btn_log_i = function () {
                var t = new egret.gui.Button();
                this.btn_log = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_fightrecord", skins.comp.Btn_3_3_Skin, 317, 101]);
                return t;
            };
            p.btn_rank_i = function () {
                var t = new egret.gui.Button();
                this.btn_rank = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_rank", skins.comp.Btn_3_0_Skin, -2, 41]);
                return t;
            };
            p.btn_refresh_i = function () {
                var t = new egret.gui.Button();
                this.btn_refresh = t;
                this.__s(t, ["icon", "scaleX", "skinName", "x", "y"], ["btn_txt_g_clear", 0.8, skins.comp.Btn_3_3_Skin, 385, 727]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [650, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_arena", 440, 44]);
                t.elementsContent = [this.__4_i(), this.__5_i(), this.btn_rank_i(), this.btn_buy_i(), this.__6_i(), this.__7_i(), this.label_jf_i(), this.__8_i(), this.label_myRank_i(), this.btn_change_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.btn_log_i(), this.__13_i(), this.btn_help_i(), this.list_items_i()];
                return t;
            };
            p.label_count_i = function () {
                var t = new egret.gui.Label();
                this.label_count = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "10/10", 0xCCCDB1, 116, 732]);
                return t;
            };
            p.label_jf_i = function () {
                var t = new mo.gui.Label();
                this.label_jf = t;
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 18, "242", 7499361, 199, 51]);
                return t;
            };
            p.label_myRank_i = function () {
                var t = new egret.gui.Label();
                this.label_myRank = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [20, "1234", 14525952, false, 168, 106]);
                return t;
            };
            p.label_timeChange_i = function () {
                var t = new mo.gui.Label();
                this.label_timeChange = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "(%s后可再次更换对手)", 0xCCCDB1, 673]);
                return t;
            };
            p.label_time_i = function () {
                var t = new egret.gui.Label();
                this.label_time = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "下次挑战00:00", "center", 13422001, 142, 219, 731]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [422, 0, skins.game.ArenaItemSkin, 442, 156]);
                t.layout = this.__14_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [8, 286]);
                return t;
            };
            ArenaSkin._skinParts = ["btn_rank", "btn_buy", "label_jf", "label_myRank", "btn_change", "btn_log", "btn_help", "list_items", "container", "btn_refresh", "label_time", "label_timeChange", "label_count"];
            return ArenaSkin;
        })(egret.gui.Skin);
        game.ArenaSkin = ArenaSkin;
        egret.registerClass(ArenaSkin,"skins.game.ArenaSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
