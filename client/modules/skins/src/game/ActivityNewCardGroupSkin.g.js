var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewCardGroupSkin = (function (_super) {
            __extends(ActivityNewCardGroupSkin, _super);
            function ActivityNewCardGroupSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [320, 435]);
                this.elementsContent = [this.__6_i(), this.group_cardList_i(), this.__8_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewCardGroupSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewCardGroupSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "翻牌次数0点刷新", 0x0FD61C, 265, 11]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [50, 0, 435, 3]);
                t.elementsContent = [this.__4_i(), this.label_count_i(), this.__5_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 7;
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "txt_choujiang", 279]);
                return t;
            };
            p.group_cardList_i = function () {
                var t = new egret.gui.Group();
                this.group_cardList = t;
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [189, 0, 0, 435]);
                t.layout = this.__7_i();
                t.elementsContent = [this.group_item0_i(), this.group_item1_i(), this.group_item2_i()];
                return t;
            };
            p.group_item0_i = function () {
                var t = new egret.gui.Group();
                this.group_item0 = t;
                this.__s(t, ["height", "verticalCenter", "width"], [189, 0, 140]);
                return t;
            };
            p.group_item1_i = function () {
                var t = new egret.gui.Group();
                this.group_item1 = t;
                this.__s(t, ["height", "verticalCenter", "width", "x", "y"], [189, 0, 140, 10, 10]);
                return t;
            };
            p.group_item2_i = function () {
                var t = new egret.gui.Group();
                this.group_item2 = t;
                this.__s(t, ["height", "verticalCenter", "width", "x", "y"], [189, 0, 140, 20, 20]);
                return t;
            };
            p.label_count_i = function () {
                var t = new egret.gui.Label();
                this.label_count = t;
                this.__s(t, ["left", "size", "text", "y"], [176, 18, "标签", 11]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "本日累积翻牌次数:", 17, 11]);
                return t;
            };
            ActivityNewCardGroupSkin._skinParts = ["label_count", "group_item0", "group_item1", "group_item2", "group_cardList"];
            return ActivityNewCardGroupSkin;
        })(egret.gui.Skin);
        game.ActivityNewCardGroupSkin = ActivityNewCardGroupSkin;
        egret.registerClass(ActivityNewCardGroupSkin,"skins.game.ActivityNewCardGroupSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
