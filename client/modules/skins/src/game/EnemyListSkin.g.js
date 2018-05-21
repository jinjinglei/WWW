var skins;
(function (skins) {
    var game;
    (function (game) {
        var EnemyListSkin = (function (_super) {
            __extends(EnemyListSkin, _super);
            function EnemyListSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=EnemyListSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return EnemyListSkin._skinParts;
                }
            );
            p.ico_none_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_none = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [19, "ico_zanwuchouren", 0]);
                return t;
            };
            p.list_enemies_i = function () {
                var t = new egret.gui.List();
                this.list_enemies = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [501, 0, skins.game.EnemyItemSkin, 410, 42]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [547, 0, skins.comp.Dlg_Close_Text_Info_Skin, "btn_txt_g_crlb", 412, 107]);
                t.elementsContent = [this.ico_none_i(), this.list_enemies_i()];
                return t;
            };
            EnemyListSkin._skinParts = ["ico_none", "list_enemies", "container"];
            return EnemyListSkin;
        })(egret.gui.Skin);
        game.EnemyListSkin = EnemyListSkin;
        egret.registerClass(EnemyListSkin,"skins.game.EnemyListSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
