var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftEquipCellSkin = (function (_super) {
            __extends(GiftEquipCellSkin, _super);
            function GiftEquipCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.label_name_i(), this.btn_equip_i(), this.ico_equiped_i(), this.label_star_i(), this.label_ziZhi_i(), this.ico_gift_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftEquipCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftEquipCellSkin._skinParts;
                }
            );
            p.btn_equip_i = function () {
                var t = new egret.gui.Button();
                this.btn_equip = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_peidais", skins.comp.Btn_3_24_Skin, 292, 41]);
                return t;
            };
            p.ico_equiped_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_equiped = t;
                this.__s(t, ["source", "x", "y"], ["ico_yipeidai", 282, 42]);
                return t;
            };
            p.ico_gift_i = function () {
                var t = new g_comp.Ico_Gift();
                this.ico_gift = t;
                this.__s(t, ["x", "y"], [18, 12]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "Lv.%s  %s", 0xFFE030, 105, 22]);
                return t;
            };
            p.label_star_i = function () {
                var t = new mo.gui.Label();
                this.label_star = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "星级：%s", 0xE7E3D4, 185, 61]);
                return t;
            };
            p.label_ziZhi_i = function () {
                var t = new mo.gui.Label();
                this.label_ziZhi = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "资质%s", 0xE7E3D4, 105, 61]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_dituxisl";
                return t;
            };
            GiftEquipCellSkin._skinParts = ["label_name", "btn_equip", "ico_equiped", "label_star", "label_ziZhi", "ico_gift"];
            return GiftEquipCellSkin;
        })(egret.gui.Skin);
        game.GiftEquipCellSkin = GiftEquipCellSkin;
        egret.registerClass(GiftEquipCellSkin,"skins.game.GiftEquipCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
