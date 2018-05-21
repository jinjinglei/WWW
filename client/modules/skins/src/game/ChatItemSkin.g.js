var skins;
(function (skins) {
    var game;
    (function (game) {
        var ChatItemSkin = (function (_super) {
            __extends(ChatItemSkin, _super);
            function ChatItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 380;
                this.elementsContent = [this.__12_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ChatItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ChatItemSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [380, 0, 0]);
                t.layout = this.__11_i();
                t.elementsContent = [this.label_content_i(), this.grp_user_i()];
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "(", 0xFA0101, 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, ")", 0xFA0101, 189, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, ":", 0x01D4FA, 199, 10]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [3, "middle"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [26, 0, 0]);
                t.layout = this.__8_i();
                t.elementsContent = [this.ico_laba_i(), this.label_user_name_i(), this.grp_user_title_i(), this.__7_i()];
                return t;
            };
            p.grp_user_i = function () {
                var t = new egret.gui.Group();
                this.grp_user = t;
                this.__s(t, ["x", "y"], [0, 0]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__9_i(), this.label_user_msg_i()];
                return t;
            };
            p.grp_user_title_i = function () {
                var t = new egret.gui.Group();
                this.grp_user_title = t;
                this.__s(t, ["height", "x", "y"], [26, 108, 0]);
                t.layout = this.__6_i();
                t.elementsContent = [this.__4_i(), this.img_user_title_i(), this.__5_i()];
                return t;
            };
            p.ico_laba_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_laba = t;
                this.__s(t, ["autoScale", "x", "y"], [false, 3, 4]);
                return t;
            };
            p.img_user_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_user_title = t;
                this.__s(t, ["source", "x", "y"], ["ant_baozhangjifen", 108, 0]);
                return t;
            };
            p.label_content_i = function () {
                var t = new mo.gui.Label();
                this.label_content = t;
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [16, "我是聊天消息", 0xFFFF99, 380, 0, 0]);
                return t;
            };
            p.label_user_msg_i = function () {
                var t = new mo.gui.Label();
                this.label_user_msg = t;
                this.__s(t, ["size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [16, "我是聊", "left", "middle", 380, 234, 0]);
                return t;
            };
            p.label_user_name_i = function () {
                var t = new mo.gui.Label();
                this.label_user_name = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "我是聊天消息", 0, 0]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 0;
                return t;
            };
            ChatItemSkin._skinParts = ["label_content", "ico_laba", "label_user_name", "img_user_title", "grp_user_title", "label_user_msg", "grp_user"];
            return ChatItemSkin;
        })(egret.gui.Skin);
        game.ChatItemSkin = ChatItemSkin;
        egret.registerClass(ChatItemSkin,"skins.game.ChatItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
