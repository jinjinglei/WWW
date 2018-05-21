var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityNewAskChoiceItemSkin = (function (_super) {
            __extends(ActivityNewAskChoiceItemSkin, _super);
            function ActivityNewAskChoiceItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__5_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityNewAskChoiceItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityNewAskChoiceItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "top", "x"], [5, 5, 0]);
                t.layout = this.__4_i();
                t.elementsContent = [this.ckb_choice_i(), this.label_count_i()];
                return t;
            };
            p.ckb_choice_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_choice = t;
                this.__s(t, ["left", "verticalCenter"], [10, 0]);
                return t;
            };
            p.label_count_i = function () {
                var t = new egret.gui.Label();
                this.label_count = t;
                this.__s(t, ["fontFamily", "left", "maxWidth", "size", "text", "textAlign", "textColor", "y"], ["黑体", 62, 135, 18, "哈哈", "left", 0xFFFFFF, 6]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            ActivityNewAskChoiceItemSkin._skinParts = ["ckb_choice", "label_count"];
            return ActivityNewAskChoiceItemSkin;
        })(egret.gui.Skin);
        game.ActivityNewAskChoiceItemSkin = ActivityNewAskChoiceItemSkin;
        egret.registerClass(ActivityNewAskChoiceItemSkin,"skins.game.ActivityNewAskChoiceItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
