var skins;
(function (skins) {
    var game;
    (function (game) {
        var GetItemTipsSkin = (function (_super) {
            __extends(GetItemTipsSkin, _super);
            function GetItemTipsSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.grp_container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GetItemTipsSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GetItemTipsSkin._skinParts;
                }
            );
            p.grp_container_i = function () {
                var t = new egret.gui.Group();
                this.grp_container = t;
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [0, 0, 0, 0]);
                t.elementsContent = [this.grp_tips_i()];
                return t;
            };
            p.grp_tips_i = function () {
                var t = new egret.gui.Group();
                this.grp_tips = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [0, -50]);
                t.layout = this.__3_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["horizontalAlign", "verticalAlign"], ["center", "middle"]);
                return t;
            };
            GetItemTipsSkin._skinParts = ["grp_tips", "grp_container"];
            return GetItemTipsSkin;
        })(egret.gui.Skin);
        game.GetItemTipsSkin = GetItemTipsSkin;
        egret.registerClass(GetItemTipsSkin,"skins.game.GetItemTipsSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
