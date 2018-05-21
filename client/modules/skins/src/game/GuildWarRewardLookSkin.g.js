var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarRewardLookSkin = (function (_super) {
            __extends(GuildWarRewardLookSkin, _super);
            function GuildWarRewardLookSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_title_i(), this.list_items_i(), this.__5_i(), this.__6_i(), this.tab_btn_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarRewardLookSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarRewardLookSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "y"], [0, 16, "活动结束后奖励通过邮件发放", "left", 0x2096FF, 751]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "x", "y"], [0, 16, "会长排名根据行会排名计算", "left", 0x2096FF, 10, 774]);
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "tab_txt_hanghuijianglid";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "tab_txt_huizhangjianglid";
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "tab_txt_gerenjiangli";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 408, -7]);
                return t;
            };
            p.ico_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [-5.5, "tit_txt_g_zhuangsijl", 12]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "y"], [594, 0, skins.game.GuildWarRewardCellSkin, 128]);
                t.layout = this.__4_i();
                return t;
            };
            p.__11_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__7_i(), this.__8_i(), this.__9_i()];
                return t;
            };
            p.tab_btn_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_btn = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "skinName", "x", "y"], [0, skins.comp.TabBarBtn_6_Skin, skins.comp.TabBar_0_Skin, 10, 77]);
                t.dataProvider = this.__11_i();
                return t;
            };
            GuildWarRewardLookSkin._skinParts = ["ico_title", "list_items", "tab_btn", "btn_close"];
            return GuildWarRewardLookSkin;
        })(egret.gui.Skin);
        game.GuildWarRewardLookSkin = GuildWarRewardLookSkin;
        egret.registerClass(GuildWarRewardLookSkin,"skins.game.GuildWarRewardLookSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
