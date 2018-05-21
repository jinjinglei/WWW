var skins;
(function (skins) {
    var game;
    (function (game) {
        var PVPLogSkin = (function (_super) {
            __extends(PVPLogSkin, _super);
            function PVPLogSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=PVPLogSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return PVPLogSkin._skinParts;
                }
            );
            p.list_log_i = function () {
                var t = new egret.gui.List();
                this.list_log = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "verticalCenter", "width"], [538, 0, skins.game.PVPLogItemSkin, 20, 429]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [588, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_pvplog", 425, 43]);
                t.elementsContent = [this.list_log_i()];
                return t;
            };
            PVPLogSkin._skinParts = ["list_log", "container"];
            return PVPLogSkin;
        })(egret.gui.Skin);
        game.PVPLogSkin = PVPLogSkin;
        egret.registerClass(PVPLogSkin,"skins.game.PVPLogSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
