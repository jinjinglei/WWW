var skins;
(function (skins) {
    var game;
    (function (game) {
        var VillianSoulLayerSkin = (function (_super) {
            __extends(VillianSoulLayerSkin, _super);
            function VillianSoulLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["currentState", "height", "width"], ["normal", 800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_title_i(), this.btn_close_i(), this.label_soulNum_i(), this.label_desc_i(), this.label_desc0_i(), this.list_items_i(), this.btn_add_i(), this.ui_curEquip_i(), this.curSoul_i(), this.curShowSoul_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("elite", [])
                ];
            }
            var d = __define,c=VillianSoulLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VillianSoulLayerSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "scale9Grid", "source", "y"], [0.5, egret.gui.getScale9Grid("34,382,207,12"), "und_cenjieerren", 71]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "horizontalGap", "paddingLeft", "paddingRight", "requestedColumnCount", "requestedRowCount"], ["left", 20, 20, 10, 4, 5]);
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
            p.__8_i = function () {
                var t = {};
                t.label = "数据4";
                return t;
            };
            p.btn_add_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_add = t;
                this.__s(t, ["source", "x", "y"], ["ico_jiasf", 304, 328]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 410, 126]);
                return t;
            };
            p.curShowSoul_i = function () {
                var t = new g_comp.Ico_Soul();
                this.curShowSoul = t;
                this.__s(t, ["x", "y"], [321, 200]);
                return t;
            };
            p.curSoul_i = function () {
                var t = new g_comp.Ico_Soul();
                this.curSoul = t;
                this.__s(t, ["x", "y"], [96, 198]);
                return t;
            };
            p.ico_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [1, "tit_txt_zanshiyuaning", 87]);
                return t;
            };
            p.label_desc0_i = function () {
                var t = new egret.gui.Label();
                this.label_desc0 = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 30, 13, 1, 0x000000, "本关装备XX元婴全体攻击+10%", "center", 0x0092B7, 120, 295, 170]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 21, 15, 1, 0x000000, "点击元婴进行装备", "center", 0x0092B7, 300, 92, 136]);
                return t;
            };
            p.label_soulNum_i = function () {
                var t = new egret.gui.Label();
                this.label_soulNum = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 21, 15, 1, 0x000000, "今日还可召唤元婴：%s", "center", 0x0092B7, 300, 57, 332]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [350, skins.game.VillianSoulCellSkin, 400, 43, 398]);
                t.layout = this.__4_i();
                t.dataProvider = this.__10_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i()];
                return t;
            };
            p.ui_curEquip_i = function () {
                var t = new egret.gui.UIAsset();
                this.ui_curEquip = t;
                this.__s(t, ["source", "x", "y"], ["ico_dangqianzb", 94, 173]);
                return t;
            };
            VillianSoulLayerSkin._skinParts = ["ico_title", "btn_close", "label_soulNum", "label_desc", "label_desc0", "list_items", "btn_add", "ui_curEquip", "curSoul", "curShowSoul"];
            return VillianSoulLayerSkin;
        })(egret.gui.Skin);
        game.VillianSoulLayerSkin = VillianSoulLayerSkin;
        egret.registerClass(VillianSoulLayerSkin,"skins.game.VillianSoulLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
