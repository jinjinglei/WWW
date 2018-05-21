var skins;
(function (skins) {
    var game;
    (function (game) {
        var BasePromoteInputSkin = (function (_super) {
            __extends(BasePromoteInputSkin, _super);
            function BasePromoteInputSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i(), this.titleDisplay_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BasePromoteInputSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BasePromoteInputSkin._skinParts;
                }
            );
            p.btn_confirm_i = function () {
                var t = new egret.gui.Button();
                this.btn_confirm = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_queren", "按钮", skins.comp.Btn_3_4_Skin, 204, 96]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "top", "width", "x"], [200, 0, skins.comp.Dlg_Close_Txt_1_Skin, 216, 350, 10]);
                t.elementsContent = [this.btn_cancel_i(), this.btn_confirm_i(), this.inputBox_i()];
                return t;
            };
            p.inputBox_i = function () {
                var t = new egret.gui.TextInput();
                this.inputBox = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 12]);
                return t;
            };
            p.btn_cancel_i = function () {
                var t = new egret.gui.Button();
                this.btn_cancel = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_quxiao", "按钮", skins.comp.Btn_3_4_Skin, 48, 98]);
                return t;
            };
            p.titleDisplay_i = function () {
                var t = new mo.gui.Label();
                this.titleDisplay = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "top", "width", "x", "y"], [0, 20, "标题", "center", 0xF5AB00, 247, 120, 10, 10]);
                return t;
            };
            BasePromoteInputSkin._skinParts = ["btn_cancel", "btn_confirm", "inputBox", "container", "titleDisplay"];
            return BasePromoteInputSkin;
        })(egret.gui.Skin);
        game.BasePromoteInputSkin = BasePromoteInputSkin;
        egret.registerClass(BasePromoteInputSkin,"skins.game.BasePromoteInputSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
