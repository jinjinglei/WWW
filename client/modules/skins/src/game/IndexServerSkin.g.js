var skins;
(function (skins) {
    var game;
    (function (game) {
        var IndexServerSkin = (function (_super) {
            __extends(IndexServerSkin, _super);
            function IndexServerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=IndexServerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return IndexServerSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Info_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "top", "width"], [543, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_choose_server", 160, 428]);
                t.elementsContent = [this.__3_i(), this.list_server_i(), this.list_serverRange_i()];
                return t;
            };
            p.list_serverRange_i = function () {
                var t = new egret.gui.List();
                this.list_serverRange = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [471, skins.game.IndexServerRangeItemSkin, 118, -1, 57]);
                return t;
            };
            p.list_server_i = function () {
                var t = new egret.gui.List();
                this.list_server = t;
                this.__s(t, ["height", "itemRendererSkinName", "skinName", "width", "x", "y"], [457, skins.game.IndexServerItemSkin, skins.comp.List_Empty_Skin, 285, 135, 63]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [475, "s9g_black_0", 300, 128, 55]);
                return t;
            };
            IndexServerSkin._skinParts = ["list_server", "list_serverRange", "container"];
            return IndexServerSkin;
        })(egret.gui.Skin);
        game.IndexServerSkin = IndexServerSkin;
        egret.registerClass(IndexServerSkin,"skins.game.IndexServerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
