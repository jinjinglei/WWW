var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseMidBarSkin = (function (_super) {
            __extends(BaseMidBarSkin, _super);
            function BaseMidBarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.grp_all_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseMidBarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseMidBarSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 0;
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Rect();
                t.setStyle("textColor", 0x111010);
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "top"], [-1, 0.5, 0x0F0F0F, -5, -5, -1]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                t.maxWidth = 340;
                t.layout = this.__4_i();
                t.elementsContent = [this.label_chatContent_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["verticalCenter", "x"], [0, 50]);
                t.elementsContent = [this.__3_i(), this.__5_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Rect();
                t.setStyle("textColor", 0x111010);
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "top"], [-1, 0.5, 0x0F0F0F, -5, -5, -1]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["maxWidth", "width"], [340, 341]);
                t.layout = this.__8_i();
                t.elementsContent = [this.label_chatContent_laba_i()];
                return t;
            };
            p.grp_all_i = function () {
                var t = new egret.gui.Group();
                this.grp_all = t;
                this.__s(t, ["visible", "x", "y"], [false, 15, 202]);
                t.layout = this.__11_i();
                t.elementsContent = [this.grp_chat_i(), this.grp_laba_i()];
                return t;
            };
            p.grp_chat_i = function () {
                var t = new egret.gui.Group();
                this.grp_chat = t;
                this.__s(t, ["visible", "x", "y"], [false, 0, 0]);
                t.elementsContent = [this.ico_chat_i(), this.__6_i()];
                return t;
            };
            p.grp_laba_i = function () {
                var t = new egret.gui.Group();
                this.grp_laba = t;
                this.__s(t, ["visible", "x", "y"], [false, 10, 10]);
                t.elementsContent = [this.ico_laba_i(), this.__10_i()];
                return t;
            };
            p.ico_chat_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_chat = t;
                this.__s(t, ["source", "verticalCenter", "x"], ["ico_liaotian", 0, 0]);
                return t;
            };
            p.ico_laba_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_laba = t;
                this.__s(t, ["autoScale", "height", "source", "verticalCenter", "width", "x"], [false, 28, "ico_chat_laba", 0, 33, 6]);
                return t;
            };
            p.label_chatContent_i = function () {
                var t = new mo.gui.Label();
                this.label_chatContent = t;
                this.__s(t, ["maxDisplayedLines", "maxWidth", "size", "text", "textColor", "verticalAlign", "width", "x"], [2, 400, 18, "聊天信息聊天信息聊聊天信息聊天信息聊聊天信息聊天信息聊", 0xFCFCB5, "middle", 340, 1]);
                return t;
            };
            p.label_chatContent_laba_i = function () {
                var t = new mo.gui.Label();
                this.label_chatContent_laba = t;
                this.__s(t, ["maxDisplayedLines", "maxWidth", "size", "text", "textColor", "verticalAlign", "width", "x"], [2, 400, 18, "聊天信息聊天信息聊天信息聊天信息", 0xFCFCB5, "middle", 340, 1]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["verticalCenter", "x"], [0, 50]);
                t.elementsContent = [this.__7_i(), this.__9_i()];
                return t;
            };
            BaseMidBarSkin._skinParts = ["ico_chat", "label_chatContent", "grp_chat", "ico_laba", "label_chatContent_laba", "grp_laba", "grp_all"];
            return BaseMidBarSkin;
        })(egret.gui.Skin);
        game.BaseMidBarSkin = BaseMidBarSkin;
        egret.registerClass(BaseMidBarSkin,"skins.game.BaseMidBarSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
