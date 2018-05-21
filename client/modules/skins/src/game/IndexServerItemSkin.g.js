var skins;
(function (skins) {
    var game;
    (function (game) {
        var IndexServerItemSkin = (function (_super) {
            __extends(IndexServerItemSkin, _super);
            function IndexServerItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__6_i(), this.label_content_i(), this.ico_new_i(), this.ico_status_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("ico_new", "source", "ntc_new")
                    ]),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__6", "source", "btn_server_item_1")
                    ]),
                    new egret.gui.State("disabled", []),
                    new egret.gui.State("upAndSelected", [
                        new egret.gui.SetProperty("__6", "source", "btn_server_item_1")
                    ]),
                    new egret.gui.State("downAndSelected", [
                        new egret.gui.SetProperty("__6", "source", "btn_server_item_1")
                    ])
                ];
            }
            var d = __define,c=IndexServerItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return IndexServerItemSkin._skinParts;
                }
            );
            p.ico_new_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_new = t;
                this.__s(t, ["source", "verticalCenter", "x"], ["ntc_new", 0.5, 238]);
                return t;
            };
            p.ico_status_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_status = t;
                this.__s(t, ["source", "verticalCenter", "x"], ["ntc_huobao", 0, 0]);
                return t;
            };
            p.label_content_i = function () {
                var t = new egret.gui.Label();
                this.label_content = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "verticalCenter", "width"], ["宋体", 20, 0, 20, "31服  大兽人巢穴", "center", 16761113, "justify", 0, 247]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__6 = t;
                this.__s(t, ["source", "x", "y"], ["btn_server_item_0", 0, 0]);
                return t;
            };
            IndexServerItemSkin._skinParts = ["label_content", "ico_new", "ico_status"];
            return IndexServerItemSkin;
        })(egret.gui.Skin);
        game.IndexServerItemSkin = IndexServerItemSkin;
        egret.registerClass(IndexServerItemSkin,"skins.game.IndexServerItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
