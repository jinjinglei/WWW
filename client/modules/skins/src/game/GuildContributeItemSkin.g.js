var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildContributeItemSkin = (function (_super) {
            __extends(GuildContributeItemSkin, _super);
            function GuildContributeItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [95, 420]);
                this.elementsContent = [this.__3_i(), this.label_limit_i(), this.label_gold_i(), this.label_act_i(), this.__5_i(), this.label_desc_i(), this.btn_act_i(), this.img_done_i(), this.label_vip_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildContributeItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildContributeItemSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["border_1", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [74, 73, 16, 10]);
                t.elementsContent = [this.__4_i(), this.ico_item_i()];
                return t;
            };
            p.btn_act_i = function () {
                var t = new egret.gui.Button();
                this.btn_act = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_shangxiang", "按钮", skins.comp.Btn_3_4_Skin, 297, 40]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                t.setStyle("textAlign", "center");
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                return t;
            };
            p.img_done_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_done = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [46, "ntc_task_done", false, 108, 306, 35]);
                return t;
            };
            p.label_act_i = function () {
                var t = new egret.gui.Label();
                this.label_act = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [15, "贡献+%s", 0xDA9F00, 97, 49]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "width", "x", "y"], [15, "捐献1000金币上香", 151, 97, 19]);
                return t;
            };
            p.label_gold_i = function () {
                var t = new egret.gui.Label();
                this.label_gold = t;
                this.__s(t, ["height", "size", "text", "textColor", "x", "y"], [24, 15, "金币+%s", 0xDA9F00, 194, 49]);
                return t;
            };
            p.label_limit_i = function () {
                var t = new egret.gui.Label();
                this.label_limit = t;
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [15, "%s/%s", 0xDA9F00, 73, 254, 20]);
                return t;
            };
            p.label_vip_i = function () {
                var t = new egret.gui.Label();
                this.label_vip = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [14, "VIP1开启", 0xEAE026, 327, 22]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [95, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 420, 0, 0]);
                return t;
            };
            GuildContributeItemSkin._skinParts = ["label_limit", "label_gold", "label_act", "ico_item", "label_desc", "btn_act", "img_done", "label_vip"];
            return GuildContributeItemSkin;
        })(egret.gui.Skin);
        game.GuildContributeItemSkin = GuildContributeItemSkin;
        egret.registerClass(GuildContributeItemSkin,"skins.game.GuildContributeItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
