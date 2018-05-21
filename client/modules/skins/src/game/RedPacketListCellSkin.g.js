var skins;
(function (skins) {
    var game;
    (function (game) {
        var RedPacketListCellSkin = (function (_super) {
            __extends(RedPacketListCellSkin, _super);
            function RedPacketListCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [65, 370]);
                this.elementsContent = [this.__4_i(), this.label_name_i(), this.btn_get_i(), this.__7_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RedPacketListCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RedPacketListCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [26, 26, 113, 1]);
                t.elementsContent = [this.img_icon_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 10;
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [29, 300, 0, 1]);
                t.layout = this.__6_i();
                t.elementsContent = [this.label_red_i(), this.__5_i()];
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["icon", "right", "skinName", "x", "y"], ["tab_txt_linqu", 0, skins.comp.Btn_3_24_Skin, 10, 28]);
                return t;
            };
            p.img_icon_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_icon = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_yuanbao", 0]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "玩家玩家玩家", 2, 34]);
                return t;
            };
            p.label_red_i = function () {
                var t = new egret.gui.Label();
                this.label_red = t;
                this.__s(t, ["size", "text", "textAlign", "x", "y"], [20, "[红包]", "left", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "y"], [37, "ico_ditugd", 370, 30]);
                return t;
            };
            RedPacketListCellSkin._skinParts = ["label_name", "btn_get", "label_red", "img_icon"];
            return RedPacketListCellSkin;
        })(egret.gui.Skin);
        game.RedPacketListCellSkin = RedPacketListCellSkin;
        egret.registerClass(RedPacketListCellSkin,"skins.game.RedPacketListCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
