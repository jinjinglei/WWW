var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseNoticeSkin = (function (_super) {
            __extends(BaseNoticeSkin, _super);
            function BaseNoticeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.grp_notice_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseNoticeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseNoticeSkin._skinParts;
                }
            );
            p.grp_notice_i = function () {
                var t = new egret.gui.Group();
                this.grp_notice = t;
                this.__s(t, ["left", "right", "x", "y"], [0, 0, 10, 196]);
                t.elementsContent = [this.__3_i(), this.label_noticeContent_i()];
                return t;
            };
            p.label_noticeContent_i = function () {
                var t = new mo.gui.Label();
                this.label_noticeContent = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "标签", 207, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["panel_top_notice", 481, -1, -3]);
                return t;
            };
            BaseNoticeSkin._skinParts = ["label_noticeContent", "grp_notice"];
            return BaseNoticeSkin;
        })(egret.gui.Skin);
        game.BaseNoticeSkin = BaseNoticeSkin;
        egret.registerClass(BaseNoticeSkin,"skins.game.BaseNoticeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
