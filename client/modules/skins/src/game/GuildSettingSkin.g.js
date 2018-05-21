var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildSettingSkin = (function (_super) {
            __extends(GuildSettingSkin, _super);
            function GuildSettingSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildSettingSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildSettingSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "加入条件", 30, 32]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bg_alpha", 188, 29]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "最低入会等级", 30, 92]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bg_alpha", 191, 89]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [200, 426, 4, 43]);
                t.elementsContent = [this.__4_i(), this.btn_conditionPre_i(), this.__5_i(), this.label_condition_i(), this.btn_conditionNext_i(), this.__6_i(), this.btn_LevelPre_i(), this.btn_LevelNext_i(), this.__7_i(), this.label_level_i()];
                return t;
            };
            p.btn_LevelNext_i = function () {
                var t = new egret.gui.Button();
                this.btn_LevelNext = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [55, new egret.gui.ButtonSkin("ico_arrow_big_right"), 33, 358, 80]);
                return t;
            };
            p.btn_LevelPre_i = function () {
                var t = new egret.gui.Button();
                this.btn_LevelPre = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [55, new egret.gui.ButtonSkin("ico_arrow_big_left"), 33, 154, 80]);
                return t;
            };
            p.btn_Update_i = function () {
                var t = new egret.gui.Button();
                this.btn_Update = t;
                this.__s(t, ["icon", "label", "skinName", "width", "x", "y"], ["btn_txt_querenxiugai", "按钮", skins.comp.Btn_3_4_Skin, 112, 161, 264]);
                return t;
            };
            p.btn_conditionNext_i = function () {
                var t = new egret.gui.Button();
                this.btn_conditionNext = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [55, new egret.gui.ButtonSkin("ico_arrow_big_right"), 33, 357, 20]);
                return t;
            };
            p.btn_conditionPre_i = function () {
                var t = new egret.gui.Button();
                this.btn_conditionPre = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [55, new egret.gui.ButtonSkin("ico_arrow_big_left"), 33, 153, 20]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "verticalCenter", "width"], [320, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_gonghuishezhi", 0, 440]);
                t.elementsContent = [this.__3_i(), this.btn_Update_i(), this.__8_i()];
                return t;
            };
            p.label_condition_i = function () {
                var t = new egret.gui.Label();
                this.label_condition = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [18, "需要验证", "center", 0xFFC000, "middle", 156, 190, 33]);
                return t;
            };
            p.label_level_i = function () {
                var t = new egret.gui.Label();
                this.label_level = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [18, "1", "center", 0xFFC000, "middle", 156, 191, 95]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "left", "right", "scale9Grid", "source", "top"], [188, 4, 2, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 38]);
                return t;
            };
            GuildSettingSkin._skinParts = ["btn_Update", "btn_conditionPre", "label_condition", "btn_conditionNext", "btn_LevelPre", "btn_LevelNext", "label_level", "container"];
            return GuildSettingSkin;
        })(egret.gui.Skin);
        game.GuildSettingSkin = GuildSettingSkin;
        egret.registerClass(GuildSettingSkin,"skins.game.GuildSettingSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
