var skins;
(function (skins) {
    var comp;
    (function (comp) {
        var Ico_Gift_Skin = (function (_super) {
            __extends(Ico_Gift_Skin, _super);
            function Ico_Gift_Skin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [95, 74]);
                this.elementsContent = [this.ico_gift_i(), this.label_giftTitle_i(), this.ico_job_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=Ico_Gift_Skin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return Ico_Gift_Skin._skinParts;
                }
            );
            p.ico_job_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_job = t;
                this.__s(t, ["source", "x", "y"], ["ico_job1", 48, 5]);
                return t;
            };
            p.label_giftTitle_i = function () {
                var t = new mo.gui.Label();
                this.label_giftTitle = t;
                this.__s(t, ["bold", "horizontalCenter", "size", "stroke", "text", "textColor", "y"], [true, 0, 16, 2, "法宝名称", 0xFFC568, 75]);
                return t;
            };
            p.ico_gift_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_gift = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "item_bg", 0]);
                return t;
            };
            Ico_Gift_Skin._skinParts = ["ico_gift", "label_giftTitle", "ico_job"];
            return Ico_Gift_Skin;
        })(egret.gui.Skin);
        comp.Ico_Gift_Skin = Ico_Gift_Skin;
        egret.registerClass(Ico_Gift_Skin,"skins.comp.Ico_Gift_Skin");
    })(comp = skins.comp || (skins.comp = {}));
})(skins || (skins = {}));
