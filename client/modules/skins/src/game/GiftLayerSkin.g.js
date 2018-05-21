var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftLayerSkin = (function (_super) {
            __extends(GiftLayerSkin, _super);
            function GiftLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.tab_str_i(), this.grp_detail_i(), this.grp_list_i(), this.grp_merge_i(), this.grp_gongMing_i(), this.btn_help_i(), this.btn_back_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftLayerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_fabaopeidai", 533]);
                return t;
            };
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "所有法宝均增加战力，佩戴只影响外观", 0x20A5E3, 764]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_fabaoxiansi", 428]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_fabaobeijin_1", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_g_fabaosf", 15]);
                return t;
            };
            p.__5_i = function () {
                var t = {};
                t.label = "btn_txt_g_fabaogaiyao";
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "btn_txt_g_fabaoliebiao";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "btn_txt_g_fabaoheceng";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "btn_txt_g_fabaogonmi";
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 60]);
                return t;
            };
            p.btn_change_i = function () {
                var t = new egret.gui.Button();
                this.btn_change = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_dianjigenhuani", skins.comp.Btn_3_0s_Skin, 185, 687]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 64]);
                return t;
            };
            p.grp_detail_i = function () {
                var t = new egret.gui.Group();
                this.grp_detail = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.label_propL_i(), this.label_propR_i(), this.label_fabaoProp_i(), this.label_addCombat_i(), this.label_numGift_i(), this.label_numGongMing_i(), this.label_numSkill_i(), this.__11_i(), this.btn_change_i(), this.__12_i(), this.ico_gift_i()];
                return t;
            };
            p.grp_gongMing_i = function () {
                var t = new egret.gui.Group();
                this.grp_gongMing = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible", "x", "y"], [0, 0, 0, 0, false, 30, 30]);
                t.elementsContent = [this.list_gongMing_i()];
                return t;
            };
            p.grp_list_i = function () {
                var t = new egret.gui.Group();
                this.grp_list = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible", "x", "y"], [0, 0, 0, 0, false, 10, 10]);
                t.elementsContent = [this.list_giftInfo_i()];
                return t;
            };
            p.grp_merge_i = function () {
                var t = new egret.gui.Group();
                this.grp_merge = t;
                this.__s(t, ["bottom", "left", "right", "top", "x", "y"], [0, 0, 0, 0, 20, 20]);
                t.elementsContent = [this.list_merge_i(), this.__13_i()];
                return t;
            };
            p.ico_gift_i = function () {
                var t = new g_comp.Ico_Gift();
                this.ico_gift = t;
                this.__s(t, ["x", "y"], [202, 578]);
                return t;
            };
            p.label_addCombat_i = function () {
                var t = new mo.gui.Label();
                this.label_addCombat = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 24, "%s法宝总战力加成：%s", 0xDEB900, 10, 239]);
                return t;
            };
            p.label_fabaoProp_i = function () {
                var t = new mo.gui.Label();
                this.label_fabaoProp = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 24, "%s法宝总属性", 0xDEB900, 368]);
                return t;
            };
            p.label_numGift_i = function () {
                var t = new mo.gui.Label();
                this.label_numGift = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "已拥有法宝数：%s", 70, 283]);
                return t;
            };
            p.label_numGongMing_i = function () {
                var t = new mo.gui.Label();
                this.label_numGongMing = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "已激活法宝共鸣：%s", 70, 321]);
                return t;
            };
            p.label_numSkill_i = function () {
                var t = new mo.gui.Label();
                this.label_numSkill = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "已激活法宝技能：%s", 257, 283]);
                return t;
            };
            p.label_propL_i = function () {
                var t = new mo.gui.Label();
                this.label_propL = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textColor", "width", "x", "y"], [115, 10, 18, "命中：\n命中：\n命中：\n命中：", 0xFFFFFF, 189, 63, 413]);
                return t;
            };
            p.label_propR_i = function () {
                var t = new mo.gui.Label();
                this.label_propR = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textColor", "width", "x", "y"], [115, 10, 18, "命中：\n命中：\n命中：\n命中：", 0xFFFFFF, 189, 253, 413]);
                return t;
            };
            p.list_giftInfo_i = function () {
                var t = new egret.gui.List();
                this.list_giftInfo = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "y"], [506, 0.5, skins.game.GiftInfoCellSkin, 248]);
                return t;
            };
            p.list_gongMing_i = function () {
                var t = new egret.gui.List();
                this.list_gongMing = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "y"], [506, 0, skins.game.GiftGongMingCellSkin, 248]);
                return t;
            };
            p.list_merge_i = function () {
                var t = new egret.gui.List();
                this.list_merge = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "visible", "x", "y"], [506, 0.5, skins.game.GiftMergeCellSkin, false, 10, 248]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i()];
                return t;
            };
            p.tab_str_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_str = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "skinName", "y"], [40, 0, skins.comp.TabBarBtn_2_Skin, skins.comp.TabBar_6_Skin, 171]);
                t.dataProvider = this.__10_i();
                return t;
            };
            GiftLayerSkin._skinParts = ["tab_str", "label_propL", "label_propR", "label_fabaoProp", "label_addCombat", "label_numGift", "label_numGongMing", "label_numSkill", "btn_change", "ico_gift", "grp_detail", "list_giftInfo", "grp_list", "list_merge", "grp_merge", "list_gongMing", "grp_gongMing", "btn_help", "btn_back"];
            return GiftLayerSkin;
        })(egret.gui.Skin);
        game.GiftLayerSkin = GiftLayerSkin;
        egret.registerClass(GiftLayerSkin,"skins.game.GiftLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
