var skins;
(function (skins) {
    var game;
    (function (game) {
        var MailItemSkin = (function (_super) {
            __extends(MailItemSkin, _super);
            function MailItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [108, 423]);
                this.elementsContent = [this.__3_i(), this.img_new_i(), this.label_title_i(), this.label_date_i(), this.ico_attach_i(), this.label_got_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=MailItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MailItemSkin._skinParts;
                }
            );
            p.ico_attach_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_attach = t;
                this.__s(t, ["source", "x", "y"], ["ico_mailadjunct", 22, 29]);
                return t;
            };
            p.img_new_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_new = t;
                this.__s(t, ["source", "x", "y"], ["ntc_new", 360, 6]);
                return t;
            };
            p.label_date_i = function () {
                var t = new egret.gui.Label();
                this.label_date = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [20, "邮件日期", 8355711, false, 100, 56]);
                return t;
            };
            p.label_got_i = function () {
                var t = new egret.gui.Label();
                this.label_got = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "已领取", 0x61F710, 329, 38]);
                return t;
            };
            p.label_title_i = function () {
                var t = new egret.gui.Label();
                this.label_title = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "邮件标题", 16777215, 99, 20]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["percentHeight", "percentWidth", "scale9Grid", "source"], [100, 100, egret.gui.getScale9Grid("49,11,296,72"), "panel_task_item_bg"]);
                return t;
            };
            MailItemSkin._skinParts = ["img_new", "label_title", "label_date", "ico_attach", "label_got"];
            return MailItemSkin;
        })(egret.gui.Skin);
        game.MailItemSkin = MailItemSkin;
        egret.registerClass(MailItemSkin,"skins.game.MailItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
