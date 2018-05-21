var skins;
(function (skins) {
    var game;
    (function (game) {
        var MailSkin = (function (_super) {
            __extends(MailSkin, _super);
            function MailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=MailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MailSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.btn_onekey_i = function () {
                var t = new egret.gui.Button();
                this.btn_onekey = t;
                this.__s(t, ["bottom", "horizontalCenter", "icon", "skinName"], [5, 0.5, "btn_txt_g_onekeyget", skins.comp.Btn_3_6_Skin]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [638, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_mailList", 438, 58]);
                t.elementsContent = [this.__3_i(), this.btn_onekey_i(), this.label_list_empty_i(), this.list_mails_i()];
                return t;
            };
            p.label_list_empty_i = function () {
                var t = new egret.gui.Label();
                this.label_list_empty = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalCenter", "width"], [0.5, 20, "邮箱空空如也，干净如斯", "center", 13422001, false, -39.5, 405]);
                return t;
            };
            p.list_mails_i = function () {
                var t = new egret.gui.List();
                this.list_mails = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [497, 0, skins.game.MailItemSkin, 414, 49]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [523, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 439, 1, 37]);
                return t;
            };
            MailSkin._skinParts = ["btn_onekey", "label_list_empty", "list_mails", "container"];
            return MailSkin;
        })(egret.gui.Skin);
        game.MailSkin = MailSkin;
        egret.registerClass(MailSkin,"skins.game.MailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
