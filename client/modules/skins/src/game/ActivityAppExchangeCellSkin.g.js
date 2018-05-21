var skins;
(function (skins) {
    var game;
    (function (game) {
        var ActivityAppExchangeCellSkin = (function (_super) {
            __extends(ActivityAppExchangeCellSkin, _super);
            function ActivityAppExchangeCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [158, 107]);
                this.elementsContent = [this.ico_item_i(), this.__6_i(), this.btn_exchange_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ActivityAppExchangeCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ActivityAppExchangeCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 98]);
                t.layout = this.__5_i();
                t.elementsContent = [this.__4_i(), this.label_score_i()];
                return t;
            };
            p.btn_exchange_i = function () {
                var t = new egret.gui.Button();
                this.btn_exchange = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_duihuano", "兑换", skins.comp.Btn_3_13_Skin, 0, 121]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item = t;
                this.__s(t, ["x", "y"], [17, 0]);
                return t;
            };
            p.label_score_i = function () {
                var t = new egret.gui.Label();
                this.label_score = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "0", 0xB6FF67, 46, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 16, "积分:", 0xF2DFBF, 0, 0]);
                return t;
            };
            ActivityAppExchangeCellSkin._skinParts = ["ico_item", "label_score", "btn_exchange"];
            return ActivityAppExchangeCellSkin;
        })(egret.gui.Skin);
        game.ActivityAppExchangeCellSkin = ActivityAppExchangeCellSkin;
        egret.registerClass(ActivityAppExchangeCellSkin,"skins.game.ActivityAppExchangeCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
