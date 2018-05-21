var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildListLayerSkin = (function (_super) {
            __extends(GuildListLayerSkin, _super);
            function GuildListLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.btn_close_i(), this.__8_i(), this.list_items_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.label_rankType_i(), this.label_guildName_i(), this.label_userName_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildListLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildListLayerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__9_i(), this.__10_i(), this.__11_i()];
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["enabled", "source", "verticalCenter", "x"], [false, "ico_tuoyuan", 0, 69]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["enabled", "source", "verticalCenter", "x"], [false, "ico_tuoyuan", 0, 334]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [84, 470, 3, 707]);
                t.elementsContent = [this.__14_i(), this.btn_search_i(), this.__15_i(), this.btn_create_i()];
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "width", "x", "y"], [0.5, "ico_liebiao_bg", 425, 10, 170]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "操作", 0xEDD145, 388, 181]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "bg_forge", 0, 10, 10]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "x", "y"], [618, 0, "s9g_dlg_1", 450, 20, 83]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "left", "scale9Grid", "source", "width", "x", "y"], [65, 30, egret.gui.getScale9Grid("37,40,347,37"), "panel_boss_0", 420, 10, 94]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "panel_task_title", 10, 10]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "tit_txt_g_gonghui", 10, 18]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "width", "y"], [-1, 18, "行会列表", "center", 118, 115]);
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 426, 10]);
                return t;
            };
            p.btn_create_i = function () {
                var t = new egret.gui.Button();
                this.btn_create = t;
                this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("ico_chuangjiangonghui"), 332, 0]);
                return t;
            };
            p.btn_search_i = function () {
                var t = new egret.gui.Button();
                this.btn_search = t;
                t.setStyle("textAlign", "center");
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("ico_soushuogonghui"), 65, 0]);
                return t;
            };
            p.label_guildName_i = function () {
                var t = new egret.gui.Label();
                this.label_guildName = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "行会名称", 0xEDD145, 146, 181]);
                return t;
            };
            p.label_rankType_i = function () {
                var t = new egret.gui.Label();
                this.label_rankType = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "行会等级", 0xEDD145, 38, 181]);
                return t;
            };
            p.label_userName_i = function () {
                var t = new egret.gui.Label();
                this.label_userName = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "行会人数", 0xEDD145, 256, 181]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [444, 0, skins.game.GuildListItemSkin, 420, 230]);
                t.dataProvider = this.__13_i();
                return t;
            };
            p.__10_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            GuildListLayerSkin._skinParts = ["btn_close", "list_items", "btn_search", "btn_create", "label_rankType", "label_guildName", "label_userName"];
            return GuildListLayerSkin;
        })(egret.gui.Skin);
        game.GuildListLayerSkin = GuildListLayerSkin;
        egret.registerClass(GuildListLayerSkin,"skins.game.GuildListLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
