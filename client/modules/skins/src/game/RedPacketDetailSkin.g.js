var skins;
(function (skins) {
    var game;
    (function (game) {
        var RedPacketDetailSkin = (function (_super) {
            __extends(RedPacketDetailSkin, _super);
            function RedPacketDetailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__4_i(), this.label_red_i(), this.list_totalRec_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RedPacketDetailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RedPacketDetailSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 15;
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 419, 133]);
                return t;
            };
            p.label_red_i = function () {
                var t = new egret.gui.Label();
                this.label_red = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "x", "y"], [-4, 20, "抢得红包历史", "left", 10, 196]);
                return t;
            };
            p.list_totalRec_i = function () {
                var t = new egret.gui.List();
                this.list_totalRec = t;
                this.__s(t, ["height", "horizontalCenter", "top", "width", "x"], [280, -4.5, 273, 370, 20]);
                t.layout = this.__5_i();
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "verticalCenter", "width", "x", "y"], [500, -3, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", -7, 413, 10, 10]);
                return t;
            };
            RedPacketDetailSkin._skinParts = ["label_red", "list_totalRec", "btn_close"];
            return RedPacketDetailSkin;
        })(egret.gui.Skin);
        game.RedPacketDetailSkin = RedPacketDetailSkin;
        egret.registerClass(RedPacketDetailSkin,"skins.game.RedPacketDetailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
