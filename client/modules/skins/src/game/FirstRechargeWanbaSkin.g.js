var skins;
(function (skins) {
    var game;
    (function (game) {
        var FirstRechargeWanbaSkin = (function (_super) {
            __extends(FirstRechargeWanbaSkin, _super);
            function FirstRechargeWanbaSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_get_i(), this.btn_close_i(), this.list_items_i(), this.grp_btns_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FirstRechargeWanbaSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FirstRechargeWanbaSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xingxing", 69, 20]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 6]);
                t.layout = this.__12_i();
                t.elementsContent = [this.__10_i(), this.__11_i()];
                return t;
            };
            p.__14_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "name", "size", "style", "text", "y"], [0, "label_get", 16, 5000, "获得%s元宝", 37]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.__s(t, ["font", "name", "paddingTop", "text", "touchEnabled", "x", "y"], ["num_10", "label_cost", -3, "6", false, 56, -1]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xingxing", 79, 30]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 6]);
                t.layout = this.__17_i();
                t.elementsContent = [this.__15_i(), this.__16_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "name", "size", "style", "text", "y"], [0, "label_get", 16, 5000, "获得%s元宝", 37]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.__s(t, ["font", "name", "paddingTop", "text", "touchEnabled", "x", "y"], ["num_10", "label_cost", -3, "6", false, 56, -1]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xingxing", 89, 40]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 6]);
                t.layout = this.__22_i();
                t.elementsContent = [this.__20_i(), this.__21_i()];
                return t;
            };
            p.__24_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "name", "size", "style", "text", "y"], [0, "label_get", 16, 5000, "获得%s元宝", 37]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ntc_first_recharge", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "horizontalGap", "requestedColumnCount", "requestedRowCount", "rowAlign"], ["left", 16, 4, 2, "justifyUsingHeight"]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.__s(t, ["font", "name", "paddingTop", "text", "touchEnabled", "x", "y"], ["num_10", "label_cost", -3, "6", false, 56, -1]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xingxing", 59, 10]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 6]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__5_i(), this.__6_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "name", "size", "style", "text", "y"], [0, "label_get", 16, 5000, "获得%s元宝", 37]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 425, 70]);
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "visible", "y"], [0, "btn_txt_g_getgift", skins.comp.Btn_3_6_Skin, false, 633]);
                return t;
            };
            p.btn_item0_i = function () {
                var t = new egret.gui.Button();
                this.btn_item0 = t;
                this.__s(t, ["name", "skinName", "x", "y"], ["btn", skins.comp.Btn_Rank_Skin, 0, 0]);
                return t;
            };
            p.btn_item1_i = function () {
                var t = new egret.gui.Button();
                this.btn_item1 = t;
                this.__s(t, ["name", "skinName", "x", "y"], ["btn", skins.comp.Btn_Rank_Skin, 0, 0]);
                return t;
            };
            p.btn_item2_i = function () {
                var t = new egret.gui.Button();
                this.btn_item2 = t;
                this.__s(t, ["name", "skinName", "x", "y"], ["btn", skins.comp.Btn_Rank_Skin, 0, 0]);
                return t;
            };
            p.btn_item3_i = function () {
                var t = new egret.gui.Button();
                this.btn_item3 = t;
                this.__s(t, ["name", "skinName", "x", "y"], ["btn", skins.comp.Btn_Rank_Skin, 0, 0]);
                return t;
            };
            p.grp_btns_i = function () {
                var t = new egret.gui.Group();
                this.grp_btns = t;
                this.__s(t, ["horizontalCenter", "y"], [0.5, 590]);
                t.elementsContent = [this.grp_item0_i(), this.grp_item1_i(), this.grp_item2_i(), this.grp_item3_i()];
                return t;
            };
            p.grp_item0_i = function () {
                var t = new egret.gui.Group();
                this.grp_item0 = t;
                this.__s(t, ["x", "y"], [10, 2]);
                t.elementsContent = [this.btn_item0_i(), this.__8_i(), this.__9_i()];
                return t;
            };
            p.grp_item1_i = function () {
                var t = new egret.gui.Group();
                this.grp_item1 = t;
                this.__s(t, ["x", "y"], [180, 2]);
                t.elementsContent = [this.btn_item1_i(), this.__13_i(), this.__14_i()];
                return t;
            };
            p.grp_item2_i = function () {
                var t = new egret.gui.Group();
                this.grp_item2 = t;
                this.__s(t, ["x", "y"], [10, 67]);
                t.elementsContent = [this.btn_item2_i(), this.__18_i(), this.__19_i()];
                return t;
            };
            p.grp_item3_i = function () {
                var t = new egret.gui.Group();
                this.grp_item3 = t;
                this.__s(t, ["x", "y"], [180, 67]);
                t.elementsContent = [this.btn_item3_i(), this.__23_i(), this.__24_i()];
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [223, 0, skins.game.BaseItemCellSkin, 344, 358]);
                t.layout = this.__4_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.__s(t, ["font", "name", "paddingTop", "text", "touchEnabled", "x", "y"], ["num_10", "label_cost", -3, "12", false, 56, -1]);
                return t;
            };
            FirstRechargeWanbaSkin._skinParts = ["btn_get", "btn_close", "list_items", "btn_item0", "grp_item0", "btn_item1", "grp_item1", "btn_item2", "grp_item2", "btn_item3", "grp_item3", "grp_btns"];
            return FirstRechargeWanbaSkin;
        })(egret.gui.Skin);
        game.FirstRechargeWanbaSkin = FirstRechargeWanbaSkin;
        egret.registerClass(FirstRechargeWanbaSkin,"skins.game.FirstRechargeWanbaSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
