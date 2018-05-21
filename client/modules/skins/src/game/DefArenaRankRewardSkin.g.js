var skins;
(function (skins) {
    var game;
    (function (game) {
        var DefArenaRankRewardSkin = (function (_super) {
            __extends(DefArenaRankRewardSkin, _super);
            function DefArenaRankRewardSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.list_items_i(), this.__9_i(), this.btn_close_i(), this.item_reward_i(), this.label_desc_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=DefArenaRankRewardSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return DefArenaRankRewardSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [5, "ico_wangcengcanyujiang", 10, 625]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_jianglisuoming", 91]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [10.5, "ico_shouleipaihangjiang", 116]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_tongyongdiban", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__5_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__4_i(), this.__5_i(), this.__6_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_saisijiangli", 37]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 425, 53]);
                return t;
            };
            p.item_reward_i = function () {
                var t = new g_comp.Ico_Item();
                this.item_reward = t;
                this.__s(t, ["x", "y"], [56, 670]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "width", "x", "y"], [18, "标签", 295, 137, 672]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [465, 0, skins.game.DefArenaRankRewardCellSkin, 428, 154]);
                t.dataProvider = this.__8_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [14, "在王城擂台赛中每次参与挑战或守擂即可获得", 0xC6BD21, 137, 734]);
                return t;
            };
            DefArenaRankRewardSkin._skinParts = ["list_items", "btn_close", "item_reward", "label_desc"];
            return DefArenaRankRewardSkin;
        })(egret.gui.Skin);
        game.DefArenaRankRewardSkin = DefArenaRankRewardSkin;
        egret.registerClass(DefArenaRankRewardSkin,"skins.game.DefArenaRankRewardSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
