var skins;
(function (skins) {
    var game;
    (function (game) {
        var FriendFirstInviteSkin = (function (_super) {
            __extends(FriendFirstInviteSkin, _super);
            function FriendFirstInviteSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FriendFirstInviteSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FriendFirstInviteSkin._skinParts;
                }
            );
            p.btn_invite_i = function () {
                var t = new egret.gui.Button();
                this.btn_invite = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0.5, "txt_btn_xiongdi_invite", skins.comp.Btn_3_6_Skin, 530]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [610, -2, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_xiongdi", 440, 74]);
                t.elementsContent = [this.__3_i(), this.label_content_i(), this.btn_invite_i()];
                return t;
            };
            p.label_content_i = function () {
                var t = new mo.gui.Label();
                this.label_content = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "width", "x", "y"], [252, 8, 22, "CONTENT\nCONTENT", 402, 20, 277]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "percentWidth", "scale9Grid", "source", "touchEnabled", "verticalCenter", "width"], [589, 1, 100, egret.gui.getScale9Grid("0,600,548,58"), "bkg_xiongdi", false, 14.5, 440]);
                return t;
            };
            FriendFirstInviteSkin._skinParts = ["label_content", "btn_invite", "container"];
            return FriendFirstInviteSkin;
        })(egret.gui.Skin);
        game.FriendFirstInviteSkin = FriendFirstInviteSkin;
        egret.registerClass(FriendFirstInviteSkin,"skins.game.FriendFirstInviteSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
