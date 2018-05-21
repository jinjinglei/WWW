var skins;
(function (skins) {
    var base;
    (function (base) {
        var ScrollerEmptySkin = (function (_super) {
            __extends(ScrollerEmptySkin, _super);
            function ScrollerEmptySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ScrollerEmptySkin,p=c.prototype;
            return ScrollerEmptySkin;
        })(egret.gui.Skin);
        base.ScrollerEmptySkin = ScrollerEmptySkin;
        egret.registerClass(ScrollerEmptySkin,"skins.base.ScrollerEmptySkin");
    })(base = skins.base || (skins.base = {}));
})(skins || (skins = {}));
