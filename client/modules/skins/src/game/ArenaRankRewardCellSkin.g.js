var skins;
(function (skins) {
    var game;
    (function (game) {
        var ArenaRankRewardCellSkin = (function (_super) {
            __extends(ArenaRankRewardCellSkin, _super);
            function ArenaRankRewardCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.label_rank_i(), this.__4_i(), this.grp_res0_i(), this.grp_res1_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=ArenaRankRewardCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return ArenaRankRewardCellSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["common_white_line", 0, 28]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__7_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "x", "y"], [30, 145, 3]);
                t.layout = this.__5_i();
                t.elementsContent = [this.__6_i(), this.__7_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "x", "y"], [30, 269, 3]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__9_i(), this.__10_i()];
                return t;
            };
            p.label_rank_i = function () {
                var t = new egret.gui.Label();
                this.label_rank = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "第1名", "center", 0xF1B535, 128, 5, 6]);
                return t;
            };
            p.__10_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 100, 24, 0]);
                return t;
            };
            ArenaRankRewardCellSkin._skinParts = ["label_rank", "grp_res0", "grp_res1"];
            return ArenaRankRewardCellSkin;
        })(egret.gui.Skin);
        game.ArenaRankRewardCellSkin = ArenaRankRewardCellSkin;
        egret.registerClass(ArenaRankRewardCellSkin,"skins.game.ArenaRankRewardCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
