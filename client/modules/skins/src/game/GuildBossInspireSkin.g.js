var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildBossInspireSkin = (function (_super) {
            __extends(GuildBossInspireSkin, _super);
            function GuildBossInspireSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_back_i(), this.__6_i(), this.__7_i(), this.label_remaind_i(), this.__8_i(), this.ico_border_i(), this.__9_i(), this.label_inspire_title_i(), this.label_title_i(), this.label_inspire_desc_i(), this.btn_cancel_i(), this.btn_inspire_i(), this.__10_i(), this.scroller_i(), this.label_cost_i(), this.btn_help_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildBossInspireSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildBossInspireSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                t.setStyle("textColor", 0xEFECB5);
                this.__s(t, ["height", "width"], [546, 390]);
                t.elementsContent = [this.label_content_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [800, "bg_shijieboss", 480, 0, 1]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "x", "y"], [0, "panel_task_title", 0, 20, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "x", "y"], [0.5, "tit_txt_g_hanghuiguwu", 10, 20, 10]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [500, "s9g_dlg_1", 439, 23, 98]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [91, egret.gui.getScale9Grid("52,34,316,21"), "panel_guwu_dikuang", 406, 40, 122]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [240, egret.gui.getScale9Grid("60,30,100,63"), "panel_guwu_dikuang2", 404, 41, 242]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "y"], [74, 0, "buff_guwu", -100, 74, 20]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["right", "source", "top", "x", "y"], [1, "btn_back", 8, 10, 10]);
                return t;
            };
            p.btn_cancel_i = function () {
                var t = new egret.gui.Button();
                this.btn_cancel = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [39, "btn_txt_quxiao", skins.comp.Btn_3_0_Skin, 120, 84, 509]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["left", "source", "top", "x", "y"], [1, "ico_help", 9, 10, 10]);
                return t;
            };
            p.btn_inspire_i = function () {
                var t = new egret.gui.Button();
                this.btn_inspire = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [39, "btn_txt_guwu", skins.comp.Btn_3_0_Skin, 120, 293, 509]);
                return t;
            };
            p.ico_border_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_border = t;
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width", "y"], [88, 0, "blk_kong", -100, 88, 10]);
                return t;
            };
            p.label_content_i = function () {
                var t = new mo.gui.Label();
                this.label_content = t;
                this.__s(t, ["fontFamily", "size", "width", "y"], ["黑体", 20, 389, 7]);
                return t;
            };
            p.label_cost_i = function () {
                var t = new egret.gui.Label();
                this.label_cost = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "width", "x", "y"], ["黑体", 22, 18, "花费:20元宝", "center", 125, 292, 552]);
                return t;
            };
            p.label_inspire_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_inspire_desc = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "width", "y"], ["黑体", 1, 20, "多次鼓舞延长伤害加成时间", "left", 326, 432]);
                return t;
            };
            p.label_inspire_title_i = function () {
                var t = new egret.gui.Label();
                this.label_inspire_title = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "width", "y"], ["黑体", 1, 20, "标签", "left", 326, 393]);
                return t;
            };
            p.label_remaind_i = function () {
                var t = new egret.gui.Label();
                this.label_remaind = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], ["黑体", 29, 0.5, 25, "当前行会鼓舞剩余时间 02:30", "center", 0xE03234, 393, 152]);
                return t;
            };
            p.label_title_i = function () {
                var t = new egret.gui.Label();
                this.label_title = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "width", "y"], ["黑体", 0, 20, "鼓舞Buff", "center", 320, 347]);
                return t;
            };
            p.scroller_i = function () {
                var t = new egret.gui.Scroller();
                this.scroller = t;
                this.__s(t, ["height", "horizontalScrollPolicy", "width", "x", "y"], [126, "off", 390, 48, 634]);
                t.viewport = this.__11_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [156, egret.gui.getScale9Grid("60,30,100,63"), "panel_guwu_dikuang2", 447, 19, 620]);
                return t;
            };
            GuildBossInspireSkin._skinParts = ["btn_back", "label_remaind", "ico_border", "label_inspire_title", "label_title", "label_inspire_desc", "btn_cancel", "btn_inspire", "label_content", "scroller", "label_cost", "btn_help"];
            return GuildBossInspireSkin;
        })(egret.gui.Skin);
        game.GuildBossInspireSkin = GuildBossInspireSkin;
        egret.registerClass(GuildBossInspireSkin,"skins.game.GuildBossInspireSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
