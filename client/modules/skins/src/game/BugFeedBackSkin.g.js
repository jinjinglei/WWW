var skins;
(function (skins) {
    var game;
    (function (game) {
        var BugFeedBackSkin = (function (_super) {
            __extends(BugFeedBackSkin, _super);
            function BugFeedBackSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BugFeedBackSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BugFeedBackSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textColor", "width", "x", "y"], [252, 22, "    加入QQ群和千万玩家一起闯荡传奇世界，同时可以将您遇到的BUG或者建议提交给客服MM，一经采纳最高可获得100元宝奖励（BUG奖励）。\n    悄悄告诉你，加群后可小窗“礼包管理员”获取加群礼包码，内含（金币2W，10级蓝色装备宝箱1个，强化石30个，羽毛2个），助您闯荡世界！", 0xE4D58A, 402, 20, 83]);
                return t;
            };
            p.btn_add_i = function () {
                var t = new egret.gui.Button();
                this.btn_add = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "txt_btn_group", skins.comp.Btn_3_6_Skin, 375]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [462, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_bug_feedback", 440, 136]);
                t.elementsContent = [this.__3_i(), this.label_qq_i(), this.__4_i(), this.btn_add_i()];
                return t;
            };
            p.label_qq_i = function () {
                var t = new egret.gui.Label();
                this.label_qq = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textColor", "touchEnabled", "y"], [31, 0, 20, "QQ群：1234567", 59959, false, 325]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "percentWidth", "scale9Grid", "source", "touchEnabled", "verticalCenter", "width"], [409, 0, 100, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", false, 20.5, 440]);
                return t;
            };
            BugFeedBackSkin._skinParts = ["label_qq", "btn_add", "container"];
            return BugFeedBackSkin;
        })(egret.gui.Skin);
        game.BugFeedBackSkin = BugFeedBackSkin;
        egret.registerClass(BugFeedBackSkin,"skins.game.BugFeedBackSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
