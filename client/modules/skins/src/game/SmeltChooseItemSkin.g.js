var skins;
(function (skins) {
    var game;
    (function (game) {
        var SmeltChooseItemSkin = (function (_super) {
            __extends(SmeltChooseItemSkin, _super);
            function SmeltChooseItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [152, 393]);
                this.elementsContent = [this.__4_i(), this.label_desc_i(), this.ico_item_i(), this.ckb_selected_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=SmeltChooseItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SmeltChooseItemSkin._skinParts;
                }
            );
            p.ckb_selected_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_selected = t;
                this.__s(t, ["touchEnabled", "width", "x", "y"], [false, 40, 338, 58]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [20, 31]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["fontFamily", "height", "lineSpacing", "size", "width", "x", "y"], ["宋体", 131, 4, 18, 225, 114, 11]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_equip_choose_bg", 0]);
                return t;
            };
            SmeltChooseItemSkin._skinParts = ["label_desc", "ico_item", "ckb_selected"];
            return SmeltChooseItemSkin;
        })(egret.gui.Skin);
        game.SmeltChooseItemSkin = SmeltChooseItemSkin;
        egret.registerClass(SmeltChooseItemSkin,"skins.game.SmeltChooseItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
