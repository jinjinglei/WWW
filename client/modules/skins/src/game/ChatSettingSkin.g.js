var skins;
(function (skins) {
    var game;
    (function (game) {
        var ChatSettingSkin = (function (_super) {
            __extends(ChatSettingSkin, _super);
            function ChatSettingSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.ckb_vip_i(), this.ckb_laba_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ChatSettingSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ChatSettingSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [397, 0, "s9g_dlg_0", 429, 166]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textColor", "width", "x", "y"], [61, 1.5, 18, "取消勾选后,将无法查看非VIP玩家综合频道的聊天信息", 0x8D8D8D, 293, 10, 314]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "horizontalCenter", "source", "y"], [false, 0, "btn_txt_setting", 172]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "verticalCenter", "x", "y"], ["黑体", 22, "关注非VIP玩家", -113, 188, 10]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "verticalCenter", "x", "y"], ["黑体", 22, "自动购买喇叭", 12, 193, 10]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textColor", "width", "y"], [61, 0.5, 18, "勾选后,喇叭不足时,进行跨服聊天将自动扣除元宝(VIP2才可开启)", 0x8E8E8E, 293, 437]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "right", "skinName", "top", "x", "y"], ["按钮", 23, skins.comp.Btn_close_Skin, 179, 10, 10]);
                return t;
            };
            p.ckb_laba_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_laba = t;
                this.__s(t, ["verticalCenter", "width", "x", "y"], [12, 37, 140, 10]);
                return t;
            };
            p.ckb_vip_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_vip = t;
                this.__s(t, ["verticalCenter", "width", "x", "y"], [-113, 37, 139, 10]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "top"], [0, 0.32, 0x000000, 0, 0, 0]);
                return t;
            };
            ChatSettingSkin._skinParts = ["ckb_vip", "ckb_laba", "btn_close"];
            return ChatSettingSkin;
        })(egret.gui.Skin);
        game.ChatSettingSkin = ChatSettingSkin;
        egret.registerClass(ChatSettingSkin,"skins.game.ChatSettingSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
