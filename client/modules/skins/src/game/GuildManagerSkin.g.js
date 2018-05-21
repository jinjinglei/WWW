var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildManagerSkin = (function (_super) {
            __extends(GuildManagerSkin, _super);
            function GuildManagerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildManagerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildManagerSkin._skinParts;
                }
            );
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "left", "top", "width"], [520, skins.game.GuildManagerCellSkin, 4, 42, 420]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "skinName", "title", "width", "x", "y"], [560, skins.comp.Dlg_Close_Text_Skin, "btn_txt_gonghuiguanli", 430, 25, 120]);
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            GuildManagerSkin._skinParts = ["list_items", "container"];
            return GuildManagerSkin;
        })(egret.gui.Skin);
        game.GuildManagerSkin = GuildManagerSkin;
        egret.registerClass(GuildManagerSkin,"skins.game.GuildManagerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
