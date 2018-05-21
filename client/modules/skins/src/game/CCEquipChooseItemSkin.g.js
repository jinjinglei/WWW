var skins;
(function (skins) {
    var game;
    (function (game) {
        var CCEquipChooseItemSkin = (function (_super) {
            __extends(CCEquipChooseItemSkin, _super);
            function CCEquipChooseItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [152, 393]);
                this.elementsContent = [this.__4_i(), this.label_desc_i(), this.btn_choose_i(), this.ico_item_i(), this.label_needLvl_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CCEquipChooseItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CCEquipChooseItemSkin._skinParts;
                }
            );
            p.btn_choose_i = function () {
                var t = new egret.gui.Button();
                this.btn_choose = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [33, "btn_txt_g_xuanze", skins.comp.Btn_3_3_Skin, 97, 289, 59]);
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
            p.label_needLvl_i = function () {
                var t = new mo.gui.Label();
                this.label_needLvl = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "角色%s级\n可以继续传承", 0xFD0A0E, 286, 99]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_equip_choose_bg", 0]);
                return t;
            };
            CCEquipChooseItemSkin._skinParts = ["label_desc", "btn_choose", "ico_item", "label_needLvl"];
            return CCEquipChooseItemSkin;
        })(egret.gui.Skin);
        game.CCEquipChooseItemSkin = CCEquipChooseItemSkin;
        egret.registerClass(CCEquipChooseItemSkin,"skins.game.CCEquipChooseItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
