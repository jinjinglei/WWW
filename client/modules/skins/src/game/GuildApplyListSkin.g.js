var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildApplyListSkin = (function (_super) {
            __extends(GuildApplyListSkin, _super);
            function GuildApplyListSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i(), this.__14_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildApplyListSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildApplyListSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "verticalCenter", "x"], [18, "战力", 0xFFC000, 1.5, 198]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "textColor", "x", "y"], [18, 0xFFC000, 204, 9]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalCenter", "width", "x"], [18, "操作", "center", 0xFFC000, 0.5, 132, 275]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [44, 0, 430, 251]);
                t.elementsContent = [this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "left", "right", "source", "y"], [63, 0, 0, "s9g_black_0", 40]);
                return t;
            };
            p.__4_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__5_i = function () {
                var t = {};
                t.label = "sdf";
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__4_i(), this.__5_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "source", "y"], [0, 0, "ico_liebiao_bg", 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "verticalCenter", "x"], [18, "等级", 0xFFC000, 1.5, 2]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                t.setStyle("textAlign", "center");
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "verticalCenter", "width"], [550, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_shenqingliebiao", 0, 440]);
                t.elementsContent = [this.__3_i(), this.label_member_i(), this.list_items_i()];
                return t;
            };
            p.label_member_i = function () {
                var t = new egret.gui.Label();
                this.label_member = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0, 18, "成员人数 1/50", 59]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [374, -4, skins.game.GuildApplyListItemSkin, 430, 176]);
                t.dataProvider = this.__7_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "verticalCenter", "x"], [18, "角色名", 0xFFC000, 1.5, 82]);
                return t;
            };
            GuildApplyListSkin._skinParts = ["label_member", "list_items", "container"];
            return GuildApplyListSkin;
        })(egret.gui.Skin);
        game.GuildApplyListSkin = GuildApplyListSkin;
        egret.registerClass(GuildApplyListSkin,"skins.game.GuildApplyListSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
