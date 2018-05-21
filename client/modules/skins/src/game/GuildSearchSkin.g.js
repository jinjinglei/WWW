var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildSearchSkin = (function (_super) {
            __extends(GuildSearchSkin, _super);
            function GuildSearchSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildSearchSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildSearchSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0, 18, "请输入您要找的行会ID", 100]);
                return t;
            };
            p.btn_search_i = function () {
                var t = new egret.gui.Button();
                this.btn_search = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "width", "y"], [0, "btn_txt_queren", "按钮", skins.comp.Btn_3_0_Skin, 114, 274]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "verticalCenter", "width"], [325, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_soushuogonghui", 0, 400]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.inputName_i(), this.btn_search_i()];
                return t;
            };
            p.inputName_i = function () {
                var t = new egret.gui.TextInput();
                this.inputName = t;
                t.setStyle("size", 18);
                t.setStyle("textAlign", "left");
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["horizontalCenter", "skinName", "textColor", "y"], [0, skins.comp.Input_0_Skin, 0xFFFFFF, 132]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [220, "s9g_black_0", 408, -4, 40]);
                return t;
            };
            GuildSearchSkin._skinParts = ["inputName", "btn_search", "container"];
            return GuildSearchSkin;
        })(egret.gui.Skin);
        game.GuildSearchSkin = GuildSearchSkin;
        egret.registerClass(GuildSearchSkin,"skins.game.GuildSearchSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
