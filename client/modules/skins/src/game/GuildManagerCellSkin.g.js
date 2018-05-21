var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildManagerCellSkin = (function (_super) {
            __extends(GuildManagerCellSkin, _super);
            function GuildManagerCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [95, 420]);
                this.elementsContent = [this.__4_i(), this.ico_title_i(), this.btn_action_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildManagerCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildManagerCellSkin._skinParts;
                }
            );
            p.btn_action_i = function () {
                var t = new egret.gui.Button();
                this.btn_action = t;
                this.__s(t, ["icon", "label", "skinName", "width", "x", "y"], ["btn_txt_look", "按钮", skins.comp.Btn_3_11_Skin, 85, 317, 22]);
                return t;
            };
            p.ico_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title = t;
                this.__s(t, ["source", "x", "y"], ["ico_gonghuishezhi", 2, 6]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [85, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 420, 0, 0]);
                return t;
            };
            GuildManagerCellSkin._skinParts = ["ico_title", "btn_action"];
            return GuildManagerCellSkin;
        })(egret.gui.Skin);
        game.GuildManagerCellSkin = GuildManagerCellSkin;
        egret.registerClass(GuildManagerCellSkin,"skins.game.GuildManagerCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
