var skins;
(function (skins) {
    var game;
    (function (game) {
        var MedalAchiItemSkin = (function (_super) {
            __extends(MedalAchiItemSkin, _super);
            function MedalAchiItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [152, 404]);
                this.elementsContent = [this.__4_i(), this.ico_item_i(), this.label_name_i(), this.__6_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=MedalAchiItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return MedalAchiItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [80, 117, 55]);
                t.layout = this.__5_i();
                t.elementsContent = [this.label_loot_i(), this.label_lootArg_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["hideLabelText", "x", "y"], [true, 18, 31]);
                return t;
            };
            p.label_lootArg_i = function () {
                var t = new mo.gui.Label();
                this.label_lootArg = t;
                this.__s(t, ["includeInLayout", "size", "text", "verticalAlign", "width", "x", "y"], [true, 18, "获得进度: %s", "middle", 270, 0, 30]);
                return t;
            };
            p.label_loot_i = function () {
                var t = new mo.gui.Label();
                this.label_loot = t;
                this.__s(t, ["size", "text", "verticalAlign", "width", "x", "y"], [18, "获得途径: %s", "middle", 270, 1, 0]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "勋章的名字", 0xF6F7BF, 118, 22]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_equip_choose_bg", 0]);
                return t;
            };
            MedalAchiItemSkin._skinParts = ["ico_item", "label_name", "label_loot", "label_lootArg"];
            return MedalAchiItemSkin;
        })(egret.gui.Skin);
        game.MedalAchiItemSkin = MedalAchiItemSkin;
        egret.registerClass(MedalAchiItemSkin,"skins.game.MedalAchiItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
