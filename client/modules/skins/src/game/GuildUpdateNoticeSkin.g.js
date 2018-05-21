var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildUpdateNoticeSkin = (function (_super) {
            __extends(GuildUpdateNoticeSkin, _super);
            function GuildUpdateNoticeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildUpdateNoticeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildUpdateNoticeSkin._skinParts;
                }
            );
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "x", "y"], [250, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_xiugaigonggao", 350, 10, 216]);
                t.elementsContent = [this.btn_confirm_i(), this.inputNotice_i()];
                return t;
            };
            p.inputNotice_i = function () {
                var t = new egret.gui.TextInput();
                this.inputNotice = t;
                this.__s(t, ["height", "left", "right", "y"], [105, 0, 0, 56]);
                return t;
            };
            p.btn_confirm_i = function () {
                var t = new egret.gui.Button();
                this.btn_confirm = t;
                this.__s(t, ["bottom", "horizontalCenter", "icon", "label", "skinName"], [26, 0.5, "btn_txt_xiugai", "按钮", skins.comp.Btn_3_4_Skin]);
                return t;
            };
            GuildUpdateNoticeSkin._skinParts = ["btn_confirm", "inputNotice", "container"];
            return GuildUpdateNoticeSkin;
        })(egret.gui.Skin);
        game.GuildUpdateNoticeSkin = GuildUpdateNoticeSkin;
        egret.registerClass(GuildUpdateNoticeSkin,"skins.game.GuildUpdateNoticeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
