var skins;
(function (skins) {
    var game;
    (function (game) {
        var BugChatSkin = (function (_super) {
            __extends(BugChatSkin, _super);
            function BugChatSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.label_openid_i(), this.label_content0_i(), this.btn_send_i(), this.btn_bbs_i(), this.__4_i(), this.scroller_i(), this.__6_i(), this.__7_i(), this.btn_close_i(), this.img_pctips_i(), this.label_input_i(), this.label_weburl_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BugChatSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BugChatSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [300, "s9g_dlg_1", 420, 35, 167]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                t.setStyle("textColor", 0xEFECB5);
                t.elementsContent = [this.label_content_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [120, "s9g_dlg_1", 420, 35, 474]);
                return t;
            };
            p.__7_i = function () {
                var t = new mo.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [133, "panel_kefu_top", 416, 38, 40]);
                return t;
            };
            p.btn_bbs_i = function () {
                var t = new egret.gui.Button();
                this.btn_bbs = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_9_1_Skin, 34, 630]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 423, 66]);
                return t;
            };
            p.btn_send_i = function () {
                var t = new egret.gui.Button();
                this.btn_send = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_9_0_Skin, 340, 630]);
                return t;
            };
            p.img_pctips_i = function () {
                var t = new mo.gui.UIAsset();
                this.img_pctips = t;
                this.__s(t, ["source", "x", "y"], ["txt_kefu_pctips", 164, 690]);
                return t;
            };
            p.label_content0_i = function () {
                var t = new mo.gui.Label();
                this.label_content0 = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [14, "工作时间 8:00-20:00", "right", 0x82685F, 160, 290, 600]);
                return t;
            };
            p.label_content_i = function () {
                var t = new mo.gui.Label();
                this.label_content = t;
                this.__s(t, ["lineSpacing", "size", "width", "y"], [5, 16, 400, 0]);
                return t;
            };
            p.label_input_i = function () {
                var t = new egret.gui.EditableText();
                this.label_input = t;
                this.__s(t, ["fontFamily", "height", "multiline", "size", "textColor", "width", "x", "y"], ["宋体", 106, true, 16, 13750708, 397, 46, 480]);
                return t;
            };
            p.label_openid_i = function () {
                var t = new mo.gui.Label();
                this.label_openid = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [14, "openid", "left", 0x82685F, "middle", 256, 32, 600]);
                return t;
            };
            p.label_weburl_i = function () {
                var t = new mo.gui.Label();
                this.label_weburl = t;
                this.__s(t, ["fontFamily", "height", "size", "textAlign", "textColor", "width", "x", "y"], ["黑体", 55, 24, "center", 0x82685F, 439, 21, 723]);
                return t;
            };
            p.scroller_i = function () {
                var t = new egret.gui.Scroller();
                this.scroller = t;
                this.__s(t, ["height", "horizontalScrollPolicy", "width", "x", "y"], [280, "off", 400, 45, 175]);
                t.viewport = this.__5_i();
                return t;
            };
            p.__3_i = function () {
                var t = new mo.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [800, "bg_any", 480, 0, 0]);
                return t;
            };
            BugChatSkin._skinParts = ["label_openid", "label_content0", "btn_send", "btn_bbs", "label_content", "scroller", "btn_close", "img_pctips", "label_input", "label_weburl"];
            return BugChatSkin;
        })(egret.gui.Skin);
        game.BugChatSkin = BugChatSkin;
        egret.registerClass(BugChatSkin,"skins.game.BugChatSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
