var skins;
(function (skins) {
    var game;
    (function (game) {
        var MailInfoSkin = (function (_super) {
            __extends(MailInfoSkin, _super);
            function MailInfoSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=MailInfoSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MailInfoSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalAlign", "horizontalGap", "paddingLeft", "paddingRight", "requestedColumnCount"], ["center", 30, 20, 20, 4]);
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0.5, "btn_txt_g_getattachment", skins.comp.Btn_3_6_Skin, 447]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "verticalCenter", "width"], [520, 0.5, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_sysmail", -60, 433]);
                t.elementsContent = [this.btn_get_i(), this.__3_i(), this.label_text_i(), this.list_items_i(), this.label_got_i()];
                return t;
            };
            p.label_got_i = function () {
                var t = new egret.gui.Label();
                this.label_got = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "已领取", 0x61F710, 181, 455]);
                return t;
            };
            p.label_text_i = function () {
                var t = new mo.gui.Label();
                this.label_text = t;
                this.__s(t, ["cacheAsBitmap", "height", "size", "text", "textColor", "touchEnabled", "width", "x", "y"], [true, 159, 20, "邮件内容", 13750708, false, 384, 25, 60]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [180, skins.game.BaseItemCellSkin, 404, 16, 248]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "touchEnabled", "width", "x", "y"], [190, "s9g_black_0", false, 415, 11, 48]);
                return t;
            };
            MailInfoSkin._skinParts = ["btn_get", "label_text", "list_items", "label_got", "container"];
            return MailInfoSkin;
        })(egret.gui.Skin);
        game.MailInfoSkin = MailInfoSkin;
        egret.registerClass(MailInfoSkin,"skins.game.MailInfoSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
