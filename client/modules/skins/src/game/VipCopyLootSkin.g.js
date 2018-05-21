var skins;
(function (skins) {
    var game;
    (function (game) {
        var VipCopyLootSkin = (function (_super) {
            __extends(VipCopyLootSkin, _super);
            function VipCopyLootSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i(), this.titleDisplay_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=VipCopyLootSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VipCopyLootSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["btn_txt_g_copyloot", 158, 41]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "horizontalGap", "requestedColumnCount", "requestedRowCount", "rowAlign"], ["left", 16, 4, 2, "justifyUsingHeight"]);
                return t;
            };
            p.btn_enter_i = function () {
                var t = new egret.gui.Button();
                this.btn_enter = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_tiaozhan", skins.comp.Btn_3_1_Skin, 145, 359]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "width", "y"], [480, 0, skins.comp.Dlg_Close_0_Skin, 400, 125]);
                t.elementsContent = [this.__3_i(), this.label_rest_i(), this.btn_enter_i(), this.__4_i(), this.list_items_i()];
                return t;
            };
            p.label_rest_i = function () {
                var t = new mo.gui.Label();
                this.label_rest = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["楷体", 24, 20, "今日剩余通关次数：%s/%s", "center", 13750708, "middle", 300, 50, 421]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [220, 0, skins.game.BaseItemCellSkin, 344, 88]);
                t.layout = this.__5_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [253, 1, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 398, 73]);
                return t;
            };
            p.titleDisplay_i = function () {
                var t = new egret.gui.Label();
                this.titleDisplay = t;
                this.__s(t, ["height", "horizontalCenter", "size", "stroke", "text", "textAlign", "textColor", "verticalAlign", "y"], [42, 0, 22, 1, "1", "center", 0xDEB00F, "middle", 110]);
                return t;
            };
            VipCopyLootSkin._skinParts = ["label_rest", "btn_enter", "list_items", "container", "titleDisplay"];
            return VipCopyLootSkin;
        })(egret.gui.Skin);
        game.VipCopyLootSkin = VipCopyLootSkin;
        egret.registerClass(VipCopyLootSkin,"skins.game.VipCopyLootSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
