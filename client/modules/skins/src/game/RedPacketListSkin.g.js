var skins;
(function (skins) {
    var game;
    (function (game) {
        var RedPacketListSkin = (function (_super) {
            __extends(RedPacketListSkin, _super);
            function RedPacketListSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_close_i(), this.list_red_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RedPacketListSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RedPacketListSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "panel_hongbao_bg", 0, 10, 10]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "ico_ffao", 10, 103]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tab_txt_hongbaolieb", 107]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["paddingBottom", "paddingTop"], [5, 5]);
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "Data1";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "Data2";
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "Data3";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 429, 47]);
                return t;
            };
            p.list_red_i = function () {
                var t = new egret.gui.List();
                this.list_red = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [542, skins.game.RedPacketListCellSkin, 375, 55, 177]);
                t.layout = this.__6_i();
                t.dataProvider = this.__11_i();
                return t;
            };
            p.__11_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__7_i(), this.__8_i(), this.__9_i()];
                return t;
            };
            RedPacketListSkin._skinParts = ["btn_close", "list_red"];
            return RedPacketListSkin;
        })(egret.gui.Skin);
        game.RedPacketListSkin = RedPacketListSkin;
        egret.registerClass(RedPacketListSkin,"skins.game.RedPacketListSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
