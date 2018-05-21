var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildTreasureSkin = (function (_super) {
            __extends(GuildTreasureSkin, _super);
            function GuildTreasureSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_level_i(), this.label_guildLv_i(), this.label_exp_i(), this.__4_i(), this.btn_treasure_i(), this.btn_help_i(), this.btn_close_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.scroller_i(), this.__15_i(), this.label_cost_i(), this.__16_i(), this.__17_i(), this.label_costTen_i(), this.__18_i(), this.btn_ten_i(), this.__19_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildTreasureSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildTreasureSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [158, 423]);
                t.elementsContent = [this.ico_item5_i(), this.eff_5_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [253, 423]);
                t.elementsContent = [this.ico_item4_i(), this.eff_4_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [158, 191]);
                t.elementsContent = [this.ico_item0_i(), this.eff_0_i()];
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                t.setStyle("textColor", 0xEFECB5);
                this.__s(t, ["height", "width"], [546, 390]);
                t.elementsContent = [this.label_content_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [20, "消耗", 77, 640]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [20, "积分", 164, 640]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [20, "消耗", 273, 640]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [20, "积分", 360, 640]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 15, "每次寻宝可获得大量金币，并随机赠送一种极品道具", 0x1C95FF, 155]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_baokudiban", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "x", "y"], [-33, 20, "剩余可消耗贡献积分：", 20, 554]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [72, 250]);
                t.elementsContent = [this.ico_item7_i(), this.eff_7_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [72, 343]);
                t.elementsContent = [this.ico_item6_i(), this.eff_6_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [340, 250]);
                t.elementsContent = [this.ico_item2_i(), this.eff_2_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [340, 343]);
                t.elementsContent = [this.ico_item3_i(), this.eff_3_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [206, 307]);
                t.elementsContent = [this.ico_item8_i(), this.eff_8_i(), this.eff_9_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 60]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 23, 50]);
                return t;
            };
            p.btn_ten_i = function () {
                var t = new egret.gui.Button();
                this.btn_ten = t;
                this.__s(t, ["icon", "scaleX", "scaleY", "skinName", "x", "y"], ["txt_btn_tanbao10", 0.85, 0.85, skins.comp.Btn_3_6_Skin, 264, 589]);
                return t;
            };
            p.btn_treasure_i = function () {
                var t = new egret.gui.Button();
                this.btn_treasure = t;
                this.__s(t, ["icon", "scaleX", "scaleY", "skinName", "x", "y"], ["txt_btn_tanbao1", 0.85, 0.85, skins.comp.Btn_3_6_Skin, 67, 589]);
                return t;
            };
            p.eff_0_i = function () {
                var t = new g_comp.UIEffect();
                this.eff_0 = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 37, 37]);
                return t;
            };
            p.eff_1_i = function () {
                var t = new g_comp.UIEffect();
                this.eff_1 = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 37, 37]);
                return t;
            };
            p.eff_2_i = function () {
                var t = new g_comp.UIEffect();
                this.eff_2 = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 37, 37]);
                return t;
            };
            p.eff_3_i = function () {
                var t = new g_comp.UIEffect();
                this.eff_3 = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 37, 37]);
                return t;
            };
            p.eff_4_i = function () {
                var t = new g_comp.UIEffect();
                this.eff_4 = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 37, 37]);
                return t;
            };
            p.eff_5_i = function () {
                var t = new g_comp.UIEffect();
                this.eff_5 = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 37, 37]);
                return t;
            };
            p.eff_6_i = function () {
                var t = new g_comp.UIEffect();
                this.eff_6 = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 37, 37]);
                return t;
            };
            p.eff_7_i = function () {
                var t = new g_comp.UIEffect();
                this.eff_7 = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 37, 37]);
                return t;
            };
            p.eff_8_i = function () {
                var t = new g_comp.UIEffect();
                this.eff_8 = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 37, 37]);
                return t;
            };
            p.eff_9_i = function () {
                var t = new g_comp.UIEffect();
                this.eff_9 = t;
                this.__s(t, ["autoPlay", "effectId", "x", "y"], [true, 18, 37, 37]);
                return t;
            };
            p.ico_item0_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item0 = t;
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            p.ico_item1_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item1 = t;
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            p.ico_item2_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item2 = t;
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            p.ico_item3_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item3 = t;
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            p.ico_item4_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item4 = t;
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            p.ico_item5_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item5 = t;
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            p.ico_item6_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item6 = t;
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            p.ico_item7_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item7 = t;
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            p.ico_item8_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item8 = t;
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            p.ico_level_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_level = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_g_chujibaoku", 31]);
                return t;
            };
            p.label_content_i = function () {
                var t = new mo.gui.Label();
                this.label_content = t;
                this.__s(t, ["size", "width", "y"], [20, 389, 7]);
                return t;
            };
            p.label_costTen_i = function () {
                var t = new egret.gui.Label();
                this.label_costTen = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [100, 20, "0000", 0xF5BC13, 10, 639]);
                return t;
            };
            p.label_cost_i = function () {
                var t = new egret.gui.Label();
                this.label_cost = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [-96, 20, "0000", 0xF5BC13, 639]);
                return t;
            };
            p.label_exp_i = function () {
                var t = new egret.gui.Label();
                this.label_exp = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "999999", 0xF5BC13, 305, 554]);
                return t;
            };
            p.label_guildLv_i = function () {
                var t = new egret.gui.Label();
                this.label_guildLv = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [1, 20, "行会等级Lv.6", 91]);
                return t;
            };
            p.scroller_i = function () {
                var t = new egret.gui.Scroller();
                this.scroller = t;
                this.__s(t, ["height", "horizontalScrollPolicy", "width", "x", "y"], [82, "off", 390, 45, 673]);
                t.viewport = this.__14_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [253, 191]);
                t.elementsContent = [this.ico_item1_i(), this.eff_1_i()];
                return t;
            };
            GuildTreasureSkin._skinParts = ["ico_level", "label_guildLv", "label_exp", "btn_treasure", "btn_help", "btn_close", "ico_item7", "eff_7", "ico_item6", "eff_6", "ico_item2", "eff_2", "ico_item3", "eff_3", "ico_item8", "eff_8", "eff_9", "ico_item1", "eff_1", "ico_item5", "eff_5", "ico_item4", "eff_4", "ico_item0", "eff_0", "label_content", "scroller", "label_cost", "label_costTen", "btn_ten"];
            return GuildTreasureSkin;
        })(egret.gui.Skin);
        game.GuildTreasureSkin = GuildTreasureSkin;
        egret.registerClass(GuildTreasureSkin,"skins.game.GuildTreasureSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
