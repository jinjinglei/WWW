var skins;
(function (skins) {
    var game;
    (function (game) {
        var FriendMsgAlertSkin = (function (_super) {
            __extends(FriendMsgAlertSkin, _super);
            function FriendMsgAlertSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FriendMsgAlertSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FriendMsgAlertSkin._skinParts;
                }
            );
            p.btn_cancel_i = function () {
                var t = new egret.gui.Button();
                this.btn_cancel = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_quxiao", "按钮", skins.comp.Btn_3_4_Skin, 204, 147]);
                return t;
            };
            p.btn_confirm_i = function () {
                var t = new egret.gui.Button();
                this.btn_confirm = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_queren", "按钮", skins.comp.Btn_3_4_Skin, 34, 148]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [200, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_xiongdi_break", 350, 206]);
                t.elementsContent = [this.btn_confirm_i(), this.__3_i(), this.label_message_i(), this.btn_cancel_i()];
                return t;
            };
            p.label_message_i = function () {
                var t = new mo.gui.Label();
                this.label_message = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "verticalAlign", "verticalCenter", "width"], [77, 0, 18, "标签", "left", "middle", -19.5, 324]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "left", "right", "source", "y"], [102, 0, 0, "s9g_black_0", 29]);
                return t;
            };
            FriendMsgAlertSkin._skinParts = ["btn_confirm", "label_message", "btn_cancel", "container"];
            return FriendMsgAlertSkin;
        })(egret.gui.Skin);
        game.FriendMsgAlertSkin = FriendMsgAlertSkin;
        egret.registerClass(FriendMsgAlertSkin,"skins.game.FriendMsgAlertSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
