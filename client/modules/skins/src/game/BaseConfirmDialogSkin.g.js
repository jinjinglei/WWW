var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseConfirmDialogSkin = (function (_super) {
            __extends(BaseConfirmDialogSkin, _super);
            function BaseConfirmDialogSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i(), this.titleDisplay_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseConfirmDialogSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseConfirmDialogSkin._skinParts;
                }
            );
            p.btn_confirm_i = function () {
                var t = new egret.gui.Button();
                this.btn_confirm = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_queren", "按钮", skins.comp.Btn_3_4_Skin, 204, 101]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "top", "width", "x"], [200, 0, skins.comp.Dlg_Close_Txt_1_Skin, 216, 350, 10]);
                t.elementsContent = [this.btn_cancel_i(), this.btn_confirm_i(), this.label_msg_i()];
                return t;
            };
            p.label_msg_i = function () {
                var t = new mo.gui.Label();
                this.label_msg = t;
                this.__s(t, ["height", "horizontalCenter", "lineSpacing", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width", "x", "y"], [65, -2, 3, 16, "MSG\nMSG", "center", 0xFAFAFA, 23, "middle", 332, 20, 20]);
                return t;
            };
            p.btn_cancel_i = function () {
                var t = new egret.gui.Button();
                this.btn_cancel = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_quxiao", "按钮", skins.comp.Btn_3_4_Skin, 48, 102]);
                return t;
            };
            p.titleDisplay_i = function () {
                var t = new mo.gui.Label();
                this.titleDisplay = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "top", "verticalAlign", "width", "x", "y"], [0, 20, "标题", "center", 0xF5AB00, 247, "middle", 326, 10, 10]);
                return t;
            };
            BaseConfirmDialogSkin._skinParts = ["btn_cancel", "btn_confirm", "label_msg", "container", "titleDisplay"];
            return BaseConfirmDialogSkin;
        })(egret.gui.Skin);
        game.BaseConfirmDialogSkin = BaseConfirmDialogSkin;
        egret.registerClass(BaseConfirmDialogSkin,"skins.game.BaseConfirmDialogSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
