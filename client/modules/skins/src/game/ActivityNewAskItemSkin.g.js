var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewAskItemSkin = (function (_super) {
            __extends(ActivityNewAskItemSkin, _super);
            function ActivityNewAskItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 420;
                this.elementsContent = [this.group_content_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewAskItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewAskItemSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign", "paddingLeft", "paddingTop"], [6, "left", 3, 10]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnWidth", "horizontalAlign", "horizontalGap", "paddingLeft", "requestedColumnCount", "verticalGap"], [200, "left", 10, 5, 2, 6]);
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
            p.__8_i = function () {
                var t = {};
                t.label = "4";
                return t;
            };
            p.group_content_i = function () {
                var t = new egret.gui.Group();
                this.group_content = t;
                this.__s(t, ["bottom", "top", "width", "x"], [5, 5, 420, 0]);
                t.layout = this.__12_i();
                t.elementsContent = [this.label_title_i(), this.group_list_i()];
                return t;
            };
            p.group_list_i = function () {
                var t = new egret.gui.Group();
                this.group_list = t;
                this.__s(t, ["bottom", "touchEnabled", "x"], [0, false, 15]);
                t.layout = this.__11_i();
                t.elementsContent = [this.list_items_i()];
                return t;
            };
            p.label_title_i = function () {
                var t = new egret.gui.Label();
                this.label_title = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "lineSpacing", "size", "text", "textAlign", "textColor", "top", "width"], ["黑体", -99, 2, 18, "nihoa", "left", 0xE9CC15, 0, 415]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "touchEnabled", "y"], [0, skins.game.ActivityNewAskChoiceItemSkin, false, 0]);
                t.layout = this.__4_i();
                t.dataProvider = this.__10_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i()];
                return t;
            };
            ActivityNewAskItemSkin._skinParts = ["label_title", "list_items", "group_list", "group_content"];
            return ActivityNewAskItemSkin;
        })(egret.gui.Skin);
        game.ActivityNewAskItemSkin = ActivityNewAskItemSkin;
        egret.registerClass(ActivityNewAskItemSkin,"skins.game.ActivityNewAskItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
