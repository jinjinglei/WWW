var skins;
(function (skins) {
    var game;
    (function (game) {
        var RedPacketSysSendSkin = (function (_super) {
            __extends(RedPacketSysSendSkin, _super);
            function RedPacketSysSendSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.grp_redPacket_i(), this.btn_close_i()];
                this.label_say_i();
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.AddItems("label_say", "grp_redPacket", "last", "")
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RedPacketSysSendSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RedPacketSysSendSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "textColor", "y"], [0, 18, 1, "红包金额", 0xF1C794, 144]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "right", "skinName", "top", "x", "y"], ["按钮", 20, skins.comp.Btn_close_Skin, 115, 10, 10]);
                return t;
            };
            p.btn_confirm0_i = function () {
                var t = new egret.gui.Button();
                this.btn_confirm0 = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_fahongbao", "按钮", skins.comp.Btn_3_8_Skin, 89, 492]);
                return t;
            };
            p.grp_redPacket_i = function () {
                var t = new egret.gui.Group();
                this.grp_redPacket = t;
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 10, 55]);
                t.elementsContent = [this.__4_i(), this.label_desc0_i(), this.ico_t0_i(), this.ico_number_i(), this.btn_confirm0_i()];
                return t;
            };
            p.ico_number_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_number = t;
                this.__s(t, ["source", "x", "y"], ["txt_5", 261, 106]);
                return t;
            };
            p.ico_t0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_t0 = t;
                this.__s(t, ["source", "x", "y"], ["txt_qianlichuanyin", 130, 184]);
                return t;
            };
            p.label_desc0_i = function () {
                var t = new egret.gui.Label();
                this.label_desc0 = t;
                this.__s(t, ["lineSpacing", "size", "stroke", "text", "textColor", "width", "x", "y"], [10, 15, 1, "向所有人发送随机元宝数量红包，并将消息显示在系统公告中，领取红包的人都将在聊天频道发送此消息", 0xF1C794, 354, 4, 414]);
                return t;
            };
            p.label_say_i = function () {
                var t = new egret.gui.EditableText();
                this.label_say = t;
                this.__s(t, ["height", "horizontalCenter", "multiline", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [160, 0, true, 18, "恭喜发财，大吉大利！", "center", 0xF1C794, "middle", 352, 219]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "bg_hongbao2", 124]);
                return t;
            };
            RedPacketSysSendSkin._skinParts = ["label_desc0", "ico_t0", "ico_number", "btn_confirm0", "label_say", "grp_redPacket", "btn_close"];
            return RedPacketSysSendSkin;
        })(egret.gui.Skin);
        game.RedPacketSysSendSkin = RedPacketSysSendSkin;
        egret.registerClass(RedPacketSysSendSkin,"skins.game.RedPacketSysSendSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
