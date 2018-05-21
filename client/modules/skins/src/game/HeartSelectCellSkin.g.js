var skins;
(function (skins) {
    var game;
    (function (game) {
        var HeartSelectCellSkin = (function (_super) {
            __extends(HeartSelectCellSkin, _super);
            function HeartSelectCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.ico_heart_i(), this.__5_i(), this.__6_i(), this.label_skillDesc_i(), this.label_desc_i(), this.btn_learn_i(), this.ico_name_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=HeartSelectCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return HeartSelectCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "附加技能：", 0x00B2FF, 103, 60]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "特性：", 0x1CBB03, 28, 109.5]);
                return t;
            };
            p.btn_learn_i = function () {
                var t = new egret.gui.Button();
                this.btn_learn = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_xuexinf", skins.comp.Btn_3_24_Skin, 302, 115]);
                return t;
            };
            p.ico_heart_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_heart = t;
                this.__s(t, ["source", "x", "y"], ["ico_xinfahuitai", 17, 16]);
                return t;
            };
            p.ico_name_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_name = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [4, -55.5]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "特性描述", 0xFFFFFF, 78, 109.5]);
                return t;
            };
            p.label_skillDesc_i = function () {
                var t = new egret.gui.Label();
                this.label_skillDesc = t;
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [18, "技能描述", 0xFFFFFF, 206, 189, 60]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_xinfaditaocang";
                return t;
            };
            HeartSelectCellSkin._skinParts = ["ico_heart", "label_skillDesc", "label_desc", "btn_learn", "ico_name"];
            return HeartSelectCellSkin;
        })(egret.gui.Skin);
        game.HeartSelectCellSkin = HeartSelectCellSkin;
        egret.registerClass(HeartSelectCellSkin,"skins.game.HeartSelectCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
