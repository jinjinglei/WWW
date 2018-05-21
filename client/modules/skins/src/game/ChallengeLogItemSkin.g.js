var skins;
(function (skins) {
    var game;
    (function (game) {
        var ChallengeLogItemSkin = (function (_super) {
            __extends(ChallengeLogItemSkin, _super);
            function ChallengeLogItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.ico_pkState_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.label_name_i(), this.label_time_i(), this.label_killValue_i(), this.label_jb_i(), this.label_exp_i(), this.list_items_i(), this.label_gain_i(), this.label_lose_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ChallengeLogItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ChallengeLogItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [138, egret.gui.getScale9Grid("7,7,16,16"), "s9g_failinfo", 310, 104, 36]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_exp", 306, 60]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [28, "ico_cup", 33, 117, 55]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gold", 213, 57]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.ico_pkState_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_pkState = t;
                this.__s(t, ["source", "verticalCenter", "x"], ["ico_pvp_win", 0, 13]);
                return t;
            };
            p.label_exp_i = function () {
                var t = new mo.gui.Label();
                this.label_exp = t;
                this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [24, 20, "300000", 16760832, 349, 57]);
                return t;
            };
            p.label_gain_i = function () {
                var t = new egret.gui.Label();
                this.label_gain = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "掠夺获得：", 0x59A93C, 111, 83]);
                return t;
            };
            p.label_jb_i = function () {
                var t = new mo.gui.Label();
                this.label_jb = t;
                this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [24, 20, "300000", 16760832, 239, 57]);
                return t;
            };
            p.label_killValue_i = function () {
                var t = new mo.gui.Label();
                this.label_killValue = t;
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [24, "+50", 16760832, 56, 151, 55]);
                return t;
            };
            p.label_lose_i = function () {
                var t = new egret.gui.Label();
                this.label_lose = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "被掠夺：", 0x991F1F, 111, 83]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], ["宋体", 22, 20, "玩家名六个字", 13750708, 160, 105, 7]);
                return t;
            };
            p.label_time_i = function () {
                var t = new egret.gui.Label();
                this.label_time = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 19, 16, "2天", "left", 13750708, 139, 258, 11]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["itemRendererSkinName", "scaleX", "scaleY", "width", "x", "y"], [skins.game.BaseItemCellSkin, 0.65, 0.65, 448, 114, 106]);
                t.layout = this.__9_i();
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width"], [180, "panel_task_item_bg", 423]);
                return t;
            };
            ChallengeLogItemSkin._skinParts = ["ico_pkState", "label_name", "label_time", "label_killValue", "label_jb", "label_exp", "list_items", "label_gain", "label_lose"];
            return ChallengeLogItemSkin;
        })(egret.gui.Skin);
        game.ChallengeLogItemSkin = ChallengeLogItemSkin;
        egret.registerClass(ChallengeLogItemSkin,"skins.game.ChallengeLogItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
