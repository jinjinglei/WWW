var skins;
(function (skins) {
    var game;
    (function (game) {
        var SaveGameSkin = (function (_super) {
            __extends(SaveGameSkin, _super);
            function SaveGameSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.img_bg_i(), this.btn_save_i(), this.btn_get_i(), this.list_items_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=SaveGameSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SaveGameSkin._skinParts;
                }
            );
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 425, 126]);
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "x", "y"], [0, "btn_txt_g_getable", "按钮", skins.comp.Btn_3_6_Skin, 10, 626]);
                return t;
            };
            p.btn_save_i = function () {
                var t = new egret.gui.Button();
                this.btn_save = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_g_savegame", "按钮", skins.comp.Btn_3_6_Skin, 626]);
                return t;
            };
            p.img_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_bg = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_desktop", 0]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "width", "x", "y"], [188, 317, 128, 416]);
                t.layout = this.__3_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.TileLayout();
                t.verticalGap = 2;
                return t;
            };
            SaveGameSkin._skinParts = ["img_bg", "btn_save", "btn_get", "list_items", "btn_close"];
            return SaveGameSkin;
        })(egret.gui.Skin);
        game.SaveGameSkin = SaveGameSkin;
        egret.registerClass(SaveGameSkin,"skins.game.SaveGameSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
