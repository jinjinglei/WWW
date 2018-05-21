var skins;
(function (skins) {
    var game;
    (function (game) {
        var DefArenaRankRewardCellSkin = (function (_super) {
            __extends(DefArenaRankRewardCellSkin, _super);
            function DefArenaRankRewardCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.label_rank_i(), this.ico_rank_i(), this.grp_res0_i(), this.grp_res1_i(), this.grp_res2_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=DefArenaRankRewardCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return DefArenaRankRewardCellSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__13_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_paihangditiaos";
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
                this.__s(t, ["height", "x", "y"], [30, 140, 13]);
                t.layout = this.__5_i();
                t.elementsContent = [this.__6_i(), this.__7_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "x", "y"], [30, 247, 13]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__9_i(), this.__10_i()];
                return t;
            };
            p.grp_res2_i = function () {
                var t = new egret.gui.Group();
                this.grp_res2 = t;
                this.__s(t, ["height", "x", "y"], [30, 340, 13]);
                t.layout = this.__11_i();
                t.elementsContent = [this.__12_i(), this.__13_i()];
                return t;
            };
            p.ico_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [40, "ico_arena_1st", 44, 31, 10]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new egret.gui.Label();
                this.label_rank = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [20, "第1名", "center", 0xF1B535, 128, 7, 16]);
                return t;
            };
            p.__10_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            DefArenaRankRewardCellSkin._skinParts = ["label_rank", "ico_rank", "grp_res0", "grp_res1", "grp_res2"];
            return DefArenaRankRewardCellSkin;
        })(egret.gui.Skin);
        game.DefArenaRankRewardCellSkin = DefArenaRankRewardCellSkin;
        egret.registerClass(DefArenaRankRewardCellSkin,"skins.game.DefArenaRankRewardCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
