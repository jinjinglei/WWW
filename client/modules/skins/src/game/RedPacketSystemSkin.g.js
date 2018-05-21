var skins;
(function (skins) {
    var game;
    (function (game) {
        var RedPacketSystemSkin = (function (_super) {
            __extends(RedPacketSystemSkin, _super);
            function RedPacketSystemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RedPacketSystemSkin,p=c.prototype;
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "width", "y"], [0, 18, "新春将至", 0xF1C794, 316, 203]);
                return t;
            };
            p.__11_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 18, "系统派送，不消耗玩家元宝", 0xF1C794, 432]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 18, "行会", 0xF1C794, 10, 507]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "width", "y"], [0, "ico_ditugd", 346, 386]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_xitongpaisyb", 73, 392]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 376, 397]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "999", 0xEBA800, 217, 392]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Button();
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0.5, "tab_txt_ersiren0", skins.comp.Btn_3_23_Skin, 468]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Button();
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 429, 47]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_hongbao_bg", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Button();
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0.5, "btn_txt_g_queding", "按钮", skins.comp.Btn_3_8_Skin, 654]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "horizontalCenter", "lineSpacing", "size", "stroke", "text", "textColor", "width", "y"], [52, 0, 10, 15, 1, "向所有人发送随机元宝数量红包，并将消息显示在系统公告中，领取红包的人都将在聊天频道发送此消息", 0xF1C794, 354, 559]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [213, 0, egret.gui.getScale9Grid("23,14,10,90"), "panel_kuangg", 366, 153]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_ffao", 103]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tab_txt_huodongfuli", 108]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_huodongxiaoxi", 165]);
                return t;
            };
            return RedPacketSystemSkin;
        })(egret.gui.Skin);
        game.RedPacketSystemSkin = RedPacketSystemSkin;
        egret.registerClass(RedPacketSystemSkin,"skins.game.RedPacketSystemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
