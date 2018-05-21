var skins;
(function (skins) {
    var game;
    (function (game) {
        var ChatSkin = (function (_super) {
            __extends(ChatSkin, _super);
            function ChatSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.tab_channel_i(), this.__10_i(), this.__11_i(), this.label_input_i(), this.btn_close_i(), this.btn_setting_i(), this.__12_i(), this.btn_send_i(), this.__13_i(), this.__14_i(), this.scrollerSys_i(), this.list_chat_i(), this.grp_chat_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ChatSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ChatSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("40,4,240,27"), "s9g_input_box", 400, 40, 673]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [538, egret.gui.getScale9Grid("40,4,240,27"), "s9g_input_box", 408, 36, 132]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [141, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 398, 41, 136]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [381, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 398, 41, 282]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                t.setStyle("textColor", 0xEFECB5);
                this.__s(t, ["height", "width"], [125, 383]);
                t.elementsContent = [this.label_contentSys_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_forge", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top"], [0, "panel_task_title", 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [1, "tit_txt_l_liaotian", 10, 10]);
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "tab_txt_zonghefs";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "tab_txt_hanghuisfg";
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__6_i(), this.__7_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 408, 2]);
                return t;
            };
            p.btn_laba_i = function () {
                var t = new egret.gui.Button();
                this.btn_laba = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["ico_btn_txt_l_kuafuliaotian", skins.comp.Btn_3_27_Skin, -2, -3]);
                return t;
            };
            p.btn_send_i = function () {
                var t = new egret.gui.Button();
                this.btn_send = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_l_fasong", skins.comp.Btn_3_24_Skin, 335, 713]);
                return t;
            };
            p.btn_setting_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_setting = t;
                this.__s(t, ["source", "x", "y"], ["Ico_btn_setting", 1, 1]);
                return t;
            };
            p.grp_chat_i = function () {
                var t = new egret.gui.Group();
                this.grp_chat = t;
                this.__s(t, ["x", "y"], [41, 715]);
                t.layout = this.__16_i();
                t.elementsContent = [this.btn_laba_i(), this.label_laba_left_i()];
                return t;
            };
            p.label_contentSys_i = function () {
                var t = new mo.gui.Label();
                this.label_contentSys = t;
                this.__s(t, ["size", "textColor", "width"], [18, 0xFFFF99, 383]);
                return t;
            };
            p.label_input_i = function () {
                var t = new egret.gui.EditableText();
                this.label_input = t;
                this.__s(t, ["fontFamily", "height", "size", "textColor", "verticalAlign", "width", "x", "y"], ["宋体", 33, 18, 13750708, "middle", 396, 42, 674]);
                return t;
            };
            p.label_laba_left_i = function () {
                var t = new egret.gui.Label();
                this.label_laba_left = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "verticalAlign", "width", "y"], ["黑体", 20, 16, "喇叭剩余:20", "middle", 152, 35]);
                return t;
            };
            p.list_chat_i = function () {
                var t = new egret.gui.List();
                this.list_chat = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [360, skins.game.ChatItemSkin, 380, 50, 293]);
                return t;
            };
            p.scrollerSys_i = function () {
                var t = new egret.gui.Scroller();
                this.scrollerSys = t;
                this.__s(t, ["height", "horizontalCenter", "horizontalScrollPolicy", "width", "y"], [120, -1.5, "off", 383, 142]);
                t.viewport = this.__15_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [664, "s9g_dlg_1", 436, 22, 118]);
                return t;
            };
            p.tab_channel_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_channel = t;
                this.__s(t, ["horizontalCenter", "skinName", "x", "y"], [-95, skins.comp.TabBar_6_Skin, 10, 82]);
                t.dataProvider = this.__9_i();
                return t;
            };
            ChatSkin._skinParts = ["tab_channel", "label_input", "btn_close", "btn_setting", "btn_send", "label_contentSys", "scrollerSys", "list_chat", "btn_laba", "label_laba_left", "grp_chat"];
            return ChatSkin;
        })(egret.gui.Skin);
        game.ChatSkin = ChatSkin;
        egret.registerClass(ChatSkin,"skins.game.ChatSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
