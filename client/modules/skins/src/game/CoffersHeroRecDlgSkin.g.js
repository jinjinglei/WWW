var skins;
(function (skins) {
    var game;
    (function (game) {
        var CoffersHeroRecDlgSkin = (function (_super) {
            __extends(CoffersHeroRecDlgSkin, _super);
            function CoffersHeroRecDlgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.__4_i(), this.list_rec_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CoffersHeroRecDlgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CoffersHeroRecDlgSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_yinxiongjilu", 32]);
                return t;
            };
            p.__5_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__5_i(), this.__6_i(), this.__7_i()];
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 400, 30]);
                return t;
            };
            p.list_rec_i = function () {
                var t = new egret.gui.List();
                this.list_rec = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "y"], [623, 0, skins.game.CoffersHeroRecCellSkin, 120]);
                t.dataProvider = this.__9_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_tongyongdiban", 0]);
                return t;
            };
            CoffersHeroRecDlgSkin._skinParts = ["btn_close", "list_rec"];
            return CoffersHeroRecDlgSkin;
        })(egret.gui.Skin);
        game.CoffersHeroRecDlgSkin = CoffersHeroRecDlgSkin;
        egret.registerClass(CoffersHeroRecDlgSkin,"skins.game.CoffersHeroRecDlgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
