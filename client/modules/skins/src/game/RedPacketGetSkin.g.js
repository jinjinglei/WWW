var skins;
(function (skins) {
    var game;
    (function (game) {
        var RedPacketGetSkin = (function (_super) {
            __extends(RedPacketGetSkin, _super);
            function RedPacketGetSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.btn_close_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.ico_item_i(), this.label_rmb_i(), this.label_red_i(), this.__10_i(), this.label_desc_i(), this.__11_i(), this.list_get_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RedPacketGetSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RedPacketGetSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_paihangbang", 340]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 15;
                return t;
            };
            p.__13_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__14_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__15_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__13_i(), this.__14_i(), this.__15_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "panel_hongbao_bg", 0, 10, 10]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "x", "y"], [134, 0, egret.gui.getScale9Grid("23,14,10,90"), "panel_kuangg", 366, 10, 202]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "ico_ffao", 10, 103]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tab_txt_gxihuode", 10, 108]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_dewrf", 142]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "发送者:", 101, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 429, 47]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 308, 161]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["height", "horizontalCenter", "size", "stroke", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [73, 0, 18, 1, "恭喜发财，大吉大利！", "center", 0xF1C794, "middle", 364, 257]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "玩家玩家玩家", 34, 0]);
                return t;
            };
            p.label_red_i = function () {
                var t = new egret.gui.Label();
                this.label_red = t;
                this.__s(t, ["size", "text", "textAlign", "width", "x", "y"], [18, "[红包]", "center", 300, 90, 206]);
                return t;
            };
            p.label_rmb_i = function () {
                var t = new egret.gui.Label();
                this.label_rmb = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "textColor", "y"], [0.5, 22, 1, "999", 0xEBA800, 157]);
                return t;
            };
            p.list_get_i = function () {
                var t = new egret.gui.List();
                this.list_get = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [326, 0, skins.game.RedPacketGetCellSkin, 380, 374]);
                t.layout = this.__12_i();
                t.dataProvider = this.__17_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "width", "y"], [0, 366, 230]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__8_i(), this.label_name_i()];
                return t;
            };
            RedPacketGetSkin._skinParts = ["btn_close", "ico_item", "label_rmb", "label_red", "label_name", "label_desc", "list_get"];
            return RedPacketGetSkin;
        })(egret.gui.Skin);
        game.RedPacketGetSkin = RedPacketGetSkin;
        egret.registerClass(RedPacketGetSkin,"skins.game.RedPacketGetSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
