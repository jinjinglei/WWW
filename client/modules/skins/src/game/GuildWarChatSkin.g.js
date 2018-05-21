var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarChatSkin = (function (_super) {
            __extends(GuildWarChatSkin, _super);
            function GuildWarChatSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.list_chat_i(), this.__6_i(), this.label_input_i(), this.__8_i(), this.btn_send_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarChatSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarChatSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [-3, "tit_txt_hanghuiliaotian", 10, 40]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [496, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 398, 41, 114]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("40,4,240,27"), "s9g_input_box", 400, 40, 633]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [41, 678]);
                t.layout = this.__7_i();
                t.elementsContent = [this.btn_laba0_i(), this.label_laba_left0_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 424, 51]);
                return t;
            };
            p.btn_laba0_i = function () {
                var t = new egret.gui.Button();
                this.btn_laba0 = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["ico_btn_txt_l_kuafuliaotian", skins.comp.Btn_3_27_Skin, -2, -3]);
                return t;
            };
            p.btn_send_i = function () {
                var t = new egret.gui.Button();
                this.btn_send = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_l_fasong", skins.comp.Btn_3_24_Skin, 338, 679]);
                return t;
            };
            p.label_input_i = function () {
                var t = new egret.gui.EditableText();
                this.label_input = t;
                this.__s(t, ["fontFamily", "height", "size", "textColor", "verticalAlign", "width", "x", "y"], ["宋体", 33, 18, 0xD1D1B4, "middle", 396, 42, 634]);
                return t;
            };
            p.label_laba_left0_i = function () {
                var t = new egret.gui.Label();
                this.label_laba_left0 = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "verticalAlign", "width", "y"], ["黑体", 20, 16, "喇叭剩余:20", "middle", 152, 35]);
                return t;
            };
            p.list_chat_i = function () {
                var t = new egret.gui.List();
                this.list_chat = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [471, skins.game.ChatItemSkin, 380, 50, 126]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "und_tongyongdiban", 0, 20, 20]);
                return t;
            };
            GuildWarChatSkin._skinParts = ["list_chat", "label_input", "btn_laba0", "label_laba_left0", "btn_send", "btn_close"];
            return GuildWarChatSkin;
        })(egret.gui.Skin);
        game.GuildWarChatSkin = GuildWarChatSkin;
        egret.registerClass(GuildWarChatSkin,"skins.game.GuildWarChatSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
