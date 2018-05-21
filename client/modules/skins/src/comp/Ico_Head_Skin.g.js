var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Ico_Head_Skin = (function (_super) {
            __extends(Ico_Head_Skin, _super);
            function Ico_Head_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.ico_role_i(), this.grp_vip_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Ico_Head_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Ico_Head_Skin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_vip_1", 0, 1]);
                return t;
            };
            p.grp_vip_i = function () {
                var t = new egret.gui.Group();
                this.grp_vip = t;
                this.__s(t, ["bottom", "horizontalCenter"], [0, 0]);
                t.elementsContent = [this.__4_i(), this.label_vipLv_i()];
                return t;
            };
            p.ico_role_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_role = t;
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [64, 0, "avatar_1_0_1", 0, 64]);
                return t;
            };
            p.label_vipLv_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_vipLv = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "3", 40, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "item_bg", 0]);
                return t;
            };
            Ico_Head_Skin._skinParts = ["ico_role", "label_vipLv", "grp_vip"];
            return Ico_Head_Skin;
        })(egret.gui.Skin);
        comp.Ico_Head_Skin = Ico_Head_Skin;
        egret.registerClass(Ico_Head_Skin,"skins.comp.Ico_Head_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
