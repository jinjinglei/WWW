var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftMergeCellSkin = (function (_super) {
            __extends(GiftMergeCellSkin, _super);
            function GiftMergeCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.ico_gift_i(), this.label_name_i(), this.btn_merge_i(), this.label_desc_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftMergeCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftMergeCellSkin._skinParts;
                }
            );
            p.btn_merge_i = function () {
                var t = new egret.gui.Button();
                this.btn_merge = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_heceng", skins.comp.Btn_3_24_Skin, 292, 18]);
                return t;
            };
            p.ico_gift_i = function () {
                var t = new g_comp.Ico_Gift();
                this.ico_gift = t;
                this.__s(t, ["x", "y"], [17, 18]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [18, "描述", 0xE7E3D4, 288, 105, 61]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "法宝名称", 0xFFE030, 105, 22]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_dituxisl";
                return t;
            };
            GiftMergeCellSkin._skinParts = ["ico_gift", "label_name", "btn_merge", "label_desc"];
            return GiftMergeCellSkin;
        })(egret.gui.Skin);
        game.GiftMergeCellSkin = GiftMergeCellSkin;
        egret.registerClass(GiftMergeCellSkin,"skins.game.GiftMergeCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
