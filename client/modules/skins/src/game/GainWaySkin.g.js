var skins;
(function (skins) {
    var game;
    (function (game) {
        var GainWaySkin = (function (_super) {
            __extends(GainWaySkin, _super);
            function GainWaySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GainWaySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GainWaySkin._skinParts;
                }
            );
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
                var t = new egret.gui.VerticalLayout();
                t.gap = 5;
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.Button();
                this.btn_back = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_g_back", "按钮", skins.comp.Btn_3_0_Skin, 479]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [549, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_waytoget", 438, 114]);
                t.elementsContent = [this.__3_i(), this.list_gainWay_i(), this.btn_back_i(), this.label_noOut_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new g_comp.Ico_Rune();
                this.ico_item = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 0]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["bold", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [true, 0, 24, "巨力斧头", "center", 0xDDA600, 180, 80]);
                return t;
            };
            p.label_noOut_i = function () {
                var t = new mo.gui.Label();
                this.label_noOut = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "verticalCenter"], [0, 30, "暂无产出", 0xFFFFFF, 0]);
                return t;
            };
            p.list_gainWay_i = function () {
                var t = new egret.gui.List();
                this.list_gainWay = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "x", "y"], [264, 0, skins.game.GainWayItemSkin, 10, 180]);
                t.layout = this.__9_i();
                t.dataProvider = this.__8_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["left", "right", "y"], [0, 0, 40]);
                t.elementsContent = [this.label_name_i(), this.ico_item_i()];
                return t;
            };
            GainWaySkin._skinParts = ["label_name", "ico_item", "list_gainWay", "btn_back", "label_noOut", "container"];
            return GainWaySkin;
        })(egret.gui.Skin);
        game.GainWaySkin = GainWaySkin;
        egret.registerClass(GainWaySkin,"skins.game.GainWaySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
