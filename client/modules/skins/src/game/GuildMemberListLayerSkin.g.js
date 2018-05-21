var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildMemberListLayerSkin = (function (_super) {
            __extends(GuildMemberListLayerSkin, _super);
            function GuildMemberListLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildMemberListLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildMemberListLayerSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "left", "right", "source", "y"], [69, 0, 0, "s9g_black_0", 39]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "right", "y"], [58, 0, 0, 42]);
                t.elementsContent = [this.label_membercount_i(), this.label_level_i()];
                return t;
            };
            p.__5_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__5_i(), this.__6_i(), this.__7_i()];
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "verticalCenter", "width"], [550, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_huiyuanliebiao", 0, 456]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.list_items_i()];
                return t;
            };
            p.label_level_i = function () {
                var t = new egret.gui.Label();
                this.label_level = t;
                this.__s(t, ["size", "text", "verticalCenter", "width", "x"], [18, "Lv.%s ", 0.5, 211, 36]);
                return t;
            };
            p.label_membercount_i = function () {
                var t = new egret.gui.Label();
                this.label_membercount = t;
                this.__s(t, ["height", "size", "text", "verticalCenter", "width", "x"], [28, 18, "行会人数   ", 0, 166, 263]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "y"], [402, -0.5, skins.game.GuildMemberItemSkin, 117]);
                t.layout = this.__10_i();
                t.dataProvider = this.__9_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            GuildMemberListLayerSkin._skinParts = ["label_membercount", "label_level", "list_items", "container"];
            return GuildMemberListLayerSkin;
        })(egret.gui.Skin);
        game.GuildMemberListLayerSkin = GuildMemberListLayerSkin;
        egret.registerClass(GuildMemberListLayerSkin,"skins.game.GuildMemberListLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
