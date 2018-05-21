var skins;
(function (skins) {
    var game;
    (function (game) {
        var RankItemSkin = (function (_super) {
            __extends(RankItemSkin, _super);
            function RankItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 345;
                this.elementsContent = [this.__4_i(), this.ico_rank_i(), this.__6_i(), this.label_rankBy_i(), this.label_rank_i(), this.ico_head_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RankItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RankItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [2, "middle"]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [119, 14]);
                t.layout = this.__5_i();
                t.elementsContent = [this.label_name_i(), this.label_level_i()];
                return t;
            };
            p.ico_head_i = function () {
                var t = new g_comp.Ico_Head();
                this.ico_head = t;
                this.__s(t, ["scaleX", "scaleY", "verticalCenter", "x"], [0.78, 0.78, -0.14000000000000057, 58]);
                return t;
            };
            p.ico_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank = t;
                this.__s(t, ["height", "horizontalCenter", "source", "verticalCenter", "width"], [45, -142, "ico_arena_1st", 0.5, 49]);
                return t;
            };
            p.label_level_i = function () {
                var t = new mo.gui.Label();
                this.label_level = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [18, 1, 0x000000, "lv.999", 0xEBCA70, 145, 0]);
                return t;
            };
            p.label_name_i = function () {
                var t = new mo.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "名字六个字啊个字啊", 0, 1]);
                return t;
            };
            p.label_rankBy_i = function () {
                var t = new egret.gui.Label();
                this.label_rankBy = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [18, 1, 0x000000, "lv.99", 0xEBCA70, 119, 45]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new egret.gui.Label();
                this.label_rank = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "verticalCenter"], [-140.5, 20, "4", 0xEBCA70, 0.5]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("33,10,198,64"), "ico_rank_tile_bg", 0]);
                return t;
            };
            RankItemSkin._skinParts = ["ico_rank", "label_name", "label_level", "label_rankBy", "label_rank", "ico_head"];
            return RankItemSkin;
        })(egret.gui.Skin);
        game.RankItemSkin = RankItemSkin;
        egret.registerClass(RankItemSkin,"skins.game.RankItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
