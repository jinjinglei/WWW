var skins;
(function (skins) {
    var game;
    (function (game) {
        var CoffersRobSkin = (function (_super) {
            __extends(CoffersRobSkin, _super);
            function CoffersRobSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.label_rate_i(), this.__6_i(), this.__9_i(), this.label_cannotRob_i(), this.label_failCount_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.grp_canRob_i(), this.btn_close_i(), this.btn_help_i(), this.__14_i(), this.label_name_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CoffersRobSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CoffersRobSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["lineSpacing", "size", "text", "textAlign", "textColor", "x", "y"], [10, 16, "1、对国库神兽造成的伤害越高，掠夺的金币越多；", "center", 0x00ABC2, 63, 666]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["lineSpacing", "size", "text", "textAlign", "textColor", "x", "y"], [10, 16, "2、国库储量越高，掠夺的金币也越多；", "center", 0x00ABC2, 63, 691]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["lineSpacing", "size", "text", "textAlign", "textColor", "x", "y"], [10, 16, "3、越多守卫被击破，掠夺的金币越多。", "center", 0x00ABC2, 63, 716]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "tit_txt_g_zhangjiantianyas", 10, 14]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "bg_guokusf", 0, 20, 20]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "ico_jinbiyuanbaodi", 10, 135]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "ico_goujkuchulai", 10, 194]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_guokuchuliangsfd", 0, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "x", "y"], [0.5, 10, 193]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__7_i(), this.label_coffer_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.btn_rob_i = function () {
                var t = new egret.gui.Button();
                this.btn_rob = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_lueduoguokus", skins.comp.Btn_3_22_Skin, 0]);
                return t;
            };
            p.grp_canRob_i = function () {
                var t = new egret.gui.Group();
                this.grp_canRob = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 541]);
                t.elementsContent = [this.label_robCount_i(), this.btn_rob_i()];
                return t;
            };
            p.label_cannotRob_i = function () {
                var t = new mo.gui.Label();
                this.label_cannotRob = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "textAlign", "textColor", "y"], [0, 10, 20, "该国库储量已低于基础值的%s%，\n不可继续掠夺", "center", 0xFF0004, 565]);
                return t;
            };
            p.label_coffer_i = function () {
                var t = new egret.gui.Label();
                this.label_coffer = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [24, "2222万", 0xF6F6F6, 131, 6]);
                return t;
            };
            p.label_failCount_i = function () {
                var t = new mo.gui.Label();
                this.label_failCount = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "已击破守卫：%s", 0xE8C160, 429]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 24, "%s.国库", 0xE7B00E, 69]);
                return t;
            };
            p.label_rate_i = function () {
                var t = new mo.gui.Label();
                this.label_rate = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 20, "掠夺倍率：×%s", 0xBDAC86, 10, 457]);
                return t;
            };
            p.label_robCount_i = function () {
                var t = new mo.gui.Label();
                this.label_robCount = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "该国库还能掠夺：%s/%s次", 0xBDAC86, 51]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["lineSpacing", "size", "text", "textAlign", "textColor", "x", "y"], [10, 20, "说明：", "center", 0x00ABC2, 63, 638]);
                return t;
            };
            CoffersRobSkin._skinParts = ["label_rate", "label_coffer", "label_cannotRob", "label_failCount", "label_robCount", "btn_rob", "grp_canRob", "btn_close", "btn_help", "label_name"];
            return CoffersRobSkin;
        })(egret.gui.Skin);
        game.CoffersRobSkin = CoffersRobSkin;
        egret.registerClass(CoffersRobSkin,"skins.game.CoffersRobSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
