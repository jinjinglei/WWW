var skins;
(function (skins) {
    var game;
    (function (game) {
        var FiveRankItemSkin = (function (_super) {
            __extends(FiveRankItemSkin, _super);
            function FiveRankItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [101, 440]);
                this.elementsContent = [this.__4_i(), this.ico_rank_i(), this.__5_i(), this.__7_i(), this.label_name_i(), this.label_empty_i(), this.ico_item1_i(), this.ico_item0_i(), this.img_done_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FiveRankItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FiveRankItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [52, 15]);
                t.elementsContent = [this.ico_head_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [130, 56]);
                t.layout = this.__6_i();
                t.elementsContent = [this.label_rankType_i(), this.label_combat_i()];
                return t;
            };
            p.ico_head_i = function () {
                var t = new g_comp.Ico_Head();
                this.ico_head = t;
                this.__s(t, ["x", "y"], [0, -2]);
                return t;
            };
            p.ico_item0_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item0 = t;
                this.__s(t, ["x", "y"], [357, 5]);
                return t;
            };
            p.ico_item1_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_item1 = t;
                this.__s(t, ["x", "y"], [272, 5]);
                return t;
            };
            p.ico_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [48, "ico_arena_1st", 48, 5, 27]);
                return t;
            };
            p.img_done_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_done = t;
                this.__s(t, ["source", "x", "y"], ["ico_yirenzeng", 2, 20]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new mo.gui.Label();
                this.label_combat = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [18, "999999", 14525952, false, 70, 0]);
                return t;
            };
            p.label_empty_i = function () {
                var t = new egret.gui.Label();
                this.label_empty = t;
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "verticalCenter", "visible", "x"], [25, 22, "虚位以待", 0xCCCDB1, false, 0, false, 121]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["height", "size", "text", "textColor", "touchEnabled", "x", "y"], [25, 18, "铁血真男人啊", 13422001, false, 130, 17]);
                return t;
            };
            p.label_rankType_i = function () {
                var t = new mo.gui.Label();
                this.label_rankType = t;
                this.__s(t, ["size", "text", "textColor", "touchEnabled", "x", "y"], [18, "战斗力:", 0xDDA600, false, 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 0]);
                return t;
            };
            FiveRankItemSkin._skinParts = ["ico_rank", "ico_head", "label_rankType", "label_combat", "label_name", "label_empty", "ico_item1", "ico_item0", "img_done"];
            return FiveRankItemSkin;
        })(egret.gui.Skin);
        game.FiveRankItemSkin = FiveRankItemSkin;
        egret.registerClass(FiveRankItemSkin,"skins.game.FiveRankItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
