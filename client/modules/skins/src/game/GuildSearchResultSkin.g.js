var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildSearchResultSkin = (function (_super) {
            __extends(GuildSearchResultSkin, _super);
            function GuildSearchResultSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildSearchResultSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildSearchResultSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__3_i()];
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "verticalCenter", "width"], [330, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_gonghuiliebiao", 0, 400]);
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["bottom", "itemRendererSkinName", "left", "right", "top"], [16, skins.game.GuildListItemSkin, 0, 0, 54]);
                t.dataProvider = this.__5_i();
                return t;
            };
            p.__3_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            GuildSearchResultSkin._skinParts = ["list_items", "container"];
            return GuildSearchResultSkin;
        })(egret.gui.Skin);
        game.GuildSearchResultSkin = GuildSearchResultSkin;
        egret.registerClass(GuildSearchResultSkin,"skins.game.GuildSearchResultSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
