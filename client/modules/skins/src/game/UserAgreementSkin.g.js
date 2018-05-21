var skins;
(function (skins) {
    var game;
    (function (game) {
        var UserAgreementSkin = (function (_super) {
            __extends(UserAgreementSkin, _super);
            function UserAgreementSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__9_i(), this.btn_close_i(), this.btn_ok_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=UserAgreementSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return UserAgreementSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_g_yonghuxieyi", 18]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 22, "蝴蝶互动用户服务协议", 0xFDF565, 74]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [579, "s9g_dlg_1", 420, 30, 124]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                t.elementsContent = [this.label_content_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Scroller();
                this.__s(t, ["height", "horizontalScrollPolicy", "width", "x", "y"], [551, "off", 400, 38, 133]);
                t.viewport = this.__8_i();
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_back_Skin, 408, 42]);
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_confirm", skins.comp.Btn_3_26_Skin, 170, 715]);
                return t;
            };
            p.label_content_i = function () {
                var t = new egret.gui.Label();
                this.label_content = t;
                this.__s(t, ["size", "width", "x", "y"], [18, 390, 5, 5]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_tianyajifendi", 0]);
                return t;
            };
            UserAgreementSkin._skinParts = ["label_content", "btn_close", "btn_ok"];
            return UserAgreementSkin;
        })(egret.gui.Skin);
        game.UserAgreementSkin = UserAgreementSkin;
        egret.registerClass(UserAgreementSkin,"skins.game.UserAgreementSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
