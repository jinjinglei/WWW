var skins;
(function (skins) {
    var game;
    (function (game) {
        var VillianEnemySkin = (function (_super) {
            __extends(VillianEnemySkin, _super);
            function VillianEnemySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.bg_img_i(), this.label_num_i(), this.label_desc_i(), this.ico_gold_i(), this.label_goldnum_i(), this.img_pass_i()];
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.SetProperty("label_desc", "bold", true),
                        new egret.gui.SetProperty("label_desc", "x", 19),
                        new egret.gui.SetProperty("ico_gold", "x", 85),
                        new egret.gui.SetProperty("label_goldnum", "x", 128)
                    ]),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=VillianEnemySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VillianEnemySkin._skinParts;
                }
            );
            p.ico_gold_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_gold = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_normal", 7.5]);
                return t;
            };
            p.img_pass_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_pass = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "visible"], [-12, "ico_yitongguaner", 11.5, false]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_desc = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "verticalCenter"], [-45, 18, "通关可得：", 0xFDFCFC, 6.5]);
                return t;
            };
            p.label_goldnum_i = function () {
                var t = new mo.gui.Label();
                this.label_goldnum = t;
                this.__s(t, ["bold", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalCenter", "width"], [true, 61, 18, "2000000", "left", 0xFEFCF8, 4.5, 100]);
                return t;
            };
            p.label_num_i = function () {
                var t = new mo.gui.Label();
                this.label_num = t;
                this.__s(t, ["bold", "horizontalCenter", "size", "text", "textColor", "top"], [true, -7, 20, "第%s关", 0xE9BA10, 5]);
                return t;
            };
            p.bg_img_i = function () {
                var t = new egret.gui.UIAsset();
                this.bg_img = t;
                this.__s(t, ["autoScale", "horizontalCenter", "source", "verticalCenter"], [true, -8, "ico_dishiguandxiao", 0]);
                return t;
            };
            VillianEnemySkin._skinParts = ["bg_img", "label_num", "label_desc", "ico_gold", "label_goldnum", "img_pass"];
            return VillianEnemySkin;
        })(egret.gui.Skin);
        game.VillianEnemySkin = VillianEnemySkin;
        egret.registerClass(VillianEnemySkin,"skins.game.VillianEnemySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
