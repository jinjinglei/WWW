var skins;
(function (skins) {
    var game;
    (function (game) {
        var PvpRankRewardSkin = (function (_super) {
            __extends(PvpRankRewardSkin, _super);
            function PvpRankRewardSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=PvpRankRewardSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return PvpRankRewardSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [455, 2, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 434, 37]);
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
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "排名", 0xEEB013, 48, 46]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "verticalCenter", "width"], [540, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_killrank", -40, 434]);
                t.elementsContent = [this.__3_i(), this.list_items_i(), this.__9_i(), this.label_desc_i(), this.__10_i()];
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "排名奖励每日0点结算，结算后1小时内通过邮件发放。 ", 0xFFFFFF, 0, 507]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [398, 0, skins.game.PvpRankRewardCellSkin, 428, 82]);
                t.dataProvider = this.__8_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "奖励", 0xEEB013, 237, 46]);
                return t;
            };
            PvpRankRewardSkin._skinParts = ["list_items", "label_desc", "container"];
            return PvpRankRewardSkin;
        })(egret.gui.Skin);
        game.PvpRankRewardSkin = PvpRankRewardSkin;
        egret.registerClass(PvpRankRewardSkin,"skins.game.PvpRankRewardSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
