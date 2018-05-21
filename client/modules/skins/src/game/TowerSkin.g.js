var skins;
(function (skins) {
    var game;
    (function (game) {
        var TowerSkin = (function (_super) {
            __extends(TowerSkin, _super);
            function TowerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.btn_help_i(), this.btn_close_i(), this.__5_i(), this.tm2_i(), this.tm1_i(), this.tm0_i(), this.grp_passAward_i(), this.btn_enter_i(), this.btn_getAward_i(), this.__10_i(), this.label_num_i(), this.grp_preview_i(), this.btn_rank_i(), this.__13_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=TowerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TowerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "stroke", "text", "textAlign", "touchEnabled", "width", "x", "y"], [16, 1, "点击查看", "center", false, 70, 11, 38]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["tit_txt_g_yaotabaokugkds", false, 140, 12]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [48, 561]);
                t.elementsContent = [this.btn_treasure_i(), this.__12_i(), this.label_treasureNum_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_zhenmotot", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_zhengmottt", 168, 13]);
                return t;
            };
            p.__6_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item0", true, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item1", true, 83, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item2", true, 93, 10]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [25, "center"]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_back_Skin, 410, 0]);
                return t;
            };
            p.btn_enter_i = function () {
                var t = new egret.gui.Button();
                this.btn_enter = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_taiozhanf", skins.comp.Btn_3_0_Skin, 330, 716]);
                return t;
            };
            p.btn_getAward_i = function () {
                var t = new egret.gui.Button();
                this.btn_getAward = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["tit_txt_g_linqujiangli", skins.comp.Btn_3_24_Skin, 330, 716]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.btn_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_rank = t;
                this.__s(t, ["source", "x", "y"], ["ico_congtapaiming", 380, 113]);
                return t;
            };
            p.btn_treasure_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_treasure = t;
                this.__s(t, ["source", "x", "y"], ["ico_baokuditiaog", 0, 0]);
                return t;
            };
            p.grp_passAward_i = function () {
                var t = new egret.gui.Group();
                this.grp_passAward = t;
                this.__s(t, ["scaleX", "scaleY", "width", "x", "y"], [0.9, 0.9, 269, 31, 702]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__6_i(), this.__7_i(), this.__8_i()];
                return t;
            };
            p.grp_preview_i = function () {
                var t = new egret.gui.Group();
                this.grp_preview = t;
                this.__s(t, ["x", "y"], [357, 427]);
                t.elementsContent = [this.img_preview_i(), this.__11_i(), this.label_spAwardLayerNum_i()];
                return t;
            };
            p.img_preview_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_preview = t;
                this.__s(t, ["source", "x", "y"], ["ico_silver_box", 20, 0]);
                return t;
            };
            p.label_num_i = function () {
                var t = new mo.gui.Label();
                this.label_num = t;
                this.__s(t, ["size", "text", "textAlign", "width", "x", "y"], [18, "第%s层", "center", 150, 165, 641]);
                return t;
            };
            p.label_spAwardLayerNum_i = function () {
                var t = new mo.gui.Label();
                this.label_spAwardLayerNum = t;
                this.__s(t, ["size", "text", "textAlign", "touchEnabled", "width", "x", "y"], [16, "通关%s层后\n宝库获得新奖励", "center", false, 150, -29, 61]);
                return t;
            };
            p.label_treasureNum_i = function () {
                var t = new egret.gui.Label();
                this.label_treasureNum = t;
                this.__s(t, ["size", "stroke", "text", "textAlign", "touchEnabled", "width", "x", "y"], [16, 1, "(第%s层宝库)", "center", false, 380, 2, 50]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [15, "通关奖励：", 30, 681]);
                return t;
            };
            p.tm0_i = function () {
                var t = new g_comp.TowerMonster();
                this.tm0 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.game.TowerMonsterSkin, 0, 300]);
                return t;
            };
            p.tm1_i = function () {
                var t = new g_comp.TowerMonster();
                this.tm1 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.game.TowerMonsterSkin, 240, 180]);
                return t;
            };
            p.tm2_i = function () {
                var t = new g_comp.TowerMonster();
                this.tm2 = t;
                this.__s(t, ["skinName", "x", "y"], [skins.game.TowerMonsterSkin, -20, 70]);
                return t;
            };
            TowerSkin._skinParts = ["btn_help", "btn_close", "tm2", "tm1", "tm0", "grp_passAward", "btn_enter", "btn_getAward", "label_num", "img_preview", "label_spAwardLayerNum", "grp_preview", "btn_rank", "btn_treasure", "label_treasureNum"];
            return TowerSkin;
        })(egret.gui.Skin);
        game.TowerSkin = TowerSkin;
        egret.registerClass(TowerSkin,"skins.game.TowerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
