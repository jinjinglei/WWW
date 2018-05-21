var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildMessageAlertSkin = (function (_super) {
            __extends(GuildMessageAlertSkin, _super);
            function GuildMessageAlertSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildMessageAlertSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildMessageAlertSkin._skinParts;
                }
            );
            p.btn_cancel_i = function () {
                var t = new egret.gui.Button();
                this.btn_cancel = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_quxiao", "按钮", skins.comp.Btn_3_4_Skin, 213, 147]);
                return t;
            };
            p.btn_confirm_i = function () {
                var t = new egret.gui.Button();
                this.btn_confirm = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_queren", "按钮", skins.comp.Btn_3_4_Skin, 56, 148]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [200, 0, skins.comp.Dlg_Close_Text_Skin, 350, 206]);
                t.elementsContent = [this.btn_confirm_i(), this.__3_i(), this.label_message_i(), this.btn_cancel_i()];
                return t;
            };
            p.label_message_i = function () {
                var t = new egret.gui.Label();
                this.label_message = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "verticalCenter"], [0, 18, "标签", "center", -14.5]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "left", "right", "source", "y"], [90, 0, 0, "s9g_black_0", 41]);
                return t;
            };
            GuildMessageAlertSkin._skinParts = ["btn_confirm", "label_message", "btn_cancel", "container"];
            return GuildMessageAlertSkin;
        })(egret.gui.Skin);
        game.GuildMessageAlertSkin = GuildMessageAlertSkin;
        egret.registerClass(GuildMessageAlertSkin,"skins.game.GuildMessageAlertSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
