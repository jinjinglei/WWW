var skins;
(function (skins) {
    var game;
    (function (game) {
        var TowerTreasurySkin = (function (_super) {
            __extends(TowerTreasurySkin, _super);
            function TowerTreasurySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__4_i(), this.__5_i(), this.__6_i(), this.btn_once_i(), this.__7_i(), this.label_date_i(), this.label_Preview_i(), this.label_Ybtxt0_i(), this.btn_close_i(), this.btn_help_i(), this.list_items_i(), this.consumption_i(), this.num_i(), this.__24_i()];
                this.grp_passAward_i();
                this.Instructions_i();
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.AddItems("grp_passAward", "", "before", "label_date"),
                        new egret.gui.SetProperty("label_date", "verticalAlign", "middle"),
                        new egret.gui.SetProperty("label_date", "textAlign", "center"),
                        new egret.gui.SetProperty("label_date", "horizontalCenter", -7),
                        new egret.gui.SetProperty("label_date", "y", 86),
                        new egret.gui.SetProperty("label_Preview", "visible", false),
                        new egret.gui.SetProperty("consumption", "visible", false)
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("label_Preview", "visible", false),
                        new egret.gui.SetProperty("consumption", "visible", false),
                        new egret.gui.SetProperty("num", "visible", false)
                    ]),
                    new egret.gui.State("PreviewInterface", [
                        new egret.gui.AddItems("Instructions", "", "before", "label_Preview"),
                        new egret.gui.SetProperty("btn_once", "visible", false),
                        new egret.gui.SetProperty("label_date", "bold", true),
                        new egret.gui.SetProperty("label_Preview", "bold", true),
                        new egret.gui.SetProperty("consumption", "visible", false),
                        new egret.gui.SetProperty("num", "visible", false)
                    ])
                ];
            }
            var d = __define,c=TowerTreasurySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TowerTreasurySkin._skinParts;
                }
            );
            p.__10_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item1", true, 83, 0]);
                return t;
            };
            p.__11_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item2", true, 10, 10]);
                return t;
            };
            p.__12_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item3", true, 93, 10]);
                return t;
            };
            p.__13_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item4", true, 10, 10]);
                return t;
            };
            p.__14_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item5", true, 93, 10]);
                return t;
            };
            p.__15_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item6", true, 93, 10]);
                return t;
            };
            p.__16_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item7", true, 93, 10]);
                return t;
            };
            p.__17_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item8", true, 93, 10]);
                return t;
            };
            p.__18_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item9", true, 93, 10]);
                return t;
            };
            p.__19_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item10", true, 93, 10]);
                return t;
            };
            p.__20_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item10", true, 93, 11]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "horizontalGap", "requestedColumnCount", "requestedRowCount", "verticalGap"], ["left", 25, 4, 5, 50]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0.5, 15, "每次寻宝可获得大量金币，并随机赠送一种极品道具", 0x1C95FF, 10, 715]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "top", "x", "y"], [0, 0.51, 0x000000, 0, 0, 0, 10, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "und_tongyongdiban", 0, 10, 10]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yaotabaokus", 172, 37]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_ditubaokusg", 30, 142]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "paddingLeft", "requestedColumnCount", "requestedRowCount", "verticalGap"], [25, 20, 4, 3, 50]);
                return t;
            };
            p.__9_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item0", true, 0, 0]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 390, 50]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 20, 50]);
                return t;
            };
            p.btn_once_i = function () {
                var t = new egret.gui.Button();
                this.btn_once = t;
                this.__s(t, ["icon", "scaleX", "scaleY", "skinName", "x", "y"], ["tit_txt_g_xunbaosg", 0.85, 0.85, skins.comp.Btn_3_6_Skin, 163, 588]);
                return t;
            };
            p.consumption_i = function () {
                var t = new egret.gui.Group();
                this.consumption = t;
                this.__s(t, ["height", "horizontalCenter", "y"], [50, 0, 638]);
                t.layout = this.__22_i();
                t.elementsContent = [this.label_Ybtxt_i(), this.img_currency_i(), this.label_yb_i()];
                return t;
            };
            p.grp_passAward_i = function () {
                var t = new egret.gui.Group();
                this.grp_passAward = t;
                this.__s(t, ["height", "scaleX", "scaleY", "visible", "width", "x", "y"], [350, 0.9, 0.9, false, 400, 61, 202]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i()];
                return t;
            };
            p.img_currency_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_currency = t;
                this.__s(t, ["height", "source", "x", "y"], [20, "ico_yuanbao", 194, 12]);
                return t;
            };
            p.label_Preview_i = function () {
                var t = new mo.gui.Label();
                this.label_Preview = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["DokChampa", 4, 25, "通关999层后解锁奖励", "center", 0xE50E11, "middle", 400, 30, 592]);
                return t;
            };
            p.label_Ybtxt0_i = function () {
                var t = new mo.gui.Label();
                this.label_Ybtxt0 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "verticalAlign", "y"], [0, 15, "妖塔通天层数越高，可能出现的探宝奖励越好", 0x1C95FF, "middle", 734]);
                return t;
            };
            p.label_Ybtxt_i = function () {
                var t = new mo.gui.Label();
                this.label_Ybtxt = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "x", "y"], ["DokChampa", 39, 16, "今天第%s次寻宝，消耗", "center", 0xE8D088, "middle", 0, 0]);
                return t;
            };
            p.label_date_i = function () {
                var t = new mo.gui.Label();
                this.label_date = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], ["DokChampa", -6, 18, "妖塔已通关998层", "center", 0xFFFFFF, "middle", 200, 85]);
                return t;
            };
            p.label_yb_i = function () {
                var t = new mo.gui.Label();
                this.label_yb = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "x", "y"], [27, 16, "99", "center", 0xDDA600, "middle", 194, 1]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [325, skins.game.BaseItemCellSkin, 369, 53, 192]);
                t.layout = this.__21_i();
                return t;
            };
            p.num_i = function () {
                var t = new egret.gui.Group();
                this.num = t;
                this.__s(t, ["height", "horizontalCenter", "visible", "width", "y"], [50, 0, false, 220, 636]);
                t.layout = this.__23_i();
                t.elementsContent = [this.treasury_txt_i(), this.treasury_num_i()];
                return t;
            };
            p.Instructions_i = function () {
                var t = new mo.gui.Label();
                this.Instructions = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["DokChampa", -2, 18, "每次抽奖从以下物品中随机获取一样", "center", 0xFFFFFF, "middle", 400, 10, 156]);
                return t;
            };
            p.treasury_num_i = function () {
                var t = new mo.gui.Label();
                this.treasury_num = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "verticalAlign", "x", "y"], [39, 16, "99", "center", 0xF7F8F9, "middle", 195, 3]);
                return t;
            };
            p.treasury_txt_i = function () {
                var t = new mo.gui.Label();
                this.treasury_txt = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "verticalAlign", "x", "y"], ["DokChampa", 39, 16, "今日剩余免费寻宝次数", "center", 0xFFFEFB, "middle", 0, 0]);
                return t;
            };
            TowerTreasurySkin._skinParts = ["btn_once", "grp_passAward", "label_date", "Instructions", "label_Preview", "label_Ybtxt0", "btn_close", "btn_help", "list_items", "label_Ybtxt", "img_currency", "label_yb", "consumption", "treasury_txt", "treasury_num", "num"];
            return TowerTreasurySkin;
        })(egret.gui.Skin);
        game.TowerTreasurySkin = TowerTreasurySkin;
        egret.registerClass(TowerTreasurySkin,"skins.game.TowerTreasurySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
