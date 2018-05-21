var skins;
(function (skins) {
    var game;
    (function (game) {
        var NoticeItemSkin = (function (_super) {
            __extends(NoticeItemSkin, _super);
            function NoticeItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__3_i(), this.label_title_i(), this.label_text_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=NoticeItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return NoticeItemSkin._skinParts;
                }
            );
            p.label_text_i = function () {
                var t = new egret.gui.Label();
                this.label_text = t;
                this.__s(t, ["lineSpacing", "size", "text", "textColor", "x", "y"], [5, 20, "更新内容", 13750708, 5, 50]);
                return t;
            };
            p.label_title_i = function () {
                var t = new egret.gui.Label();
                this.label_title = t;
                this.__s(t, ["bold", "size", "stroke", "text", "textAlign", "textColor", "width", "x", "y"], [true, 22, 1, "更新公告", "center", 15977300, 400, 0, 6]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["title_bg", 400, 0, 5]);
                return t;
            };
            NoticeItemSkin._skinParts = ["label_title", "label_text"];
            return NoticeItemSkin;
        })(egret.gui.Skin);
        game.NoticeItemSkin = NoticeItemSkin;
        egret.registerClass(NoticeItemSkin,"skins.game.NoticeItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
