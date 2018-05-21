var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftLvUpSkin = (function (_super) {
            __extends(GiftLvUpSkin, _super);
            function GiftLvUpSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_buyLingYun_i(), this.effect_gift_i(), this.ico_gift_i(), this.ico_giftWord_i(), this.__4_i(), this.label_canLvUp_i(), this.label_canLvUpNext_i(), this.label_lvUpNoLv_i(), this.label_ziZhi_i(), this.label_ziZhi0_i(), this.__5_i(), this.label_curLv_i(), this.__6_i(), this.__7_i(), this.grp_lvUp_i(), this.label_curProp_i(), this.grp_next_i(), this.label_cannotLvUp_i(), this.btn_help_i(), this.btn_back_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftLvUpSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftLvUpSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_hongdis", -12, -3]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [20, "下一级", 19, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_baowudikuangjuxin", 0, 27]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_you", -37, 122]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_fabaobeijin_3", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_fabaoshenji", 14]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_hongdis", 56, 366]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [20, "当前", 88, 369]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_baowudikuangjuxin", 58, 396]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "升级消耗：", 0xF0AD32, 120, 64]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_buyLingYun_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_buyLingYun = t;
                this.__s(t, ["source", "x", "y"], ["ico_goumailinyunshi", 336, 85]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 4]);
                return t;
            };
            p.btn_lvUp_i = function () {
                var t = new egret.gui.Button();
                this.btn_lvUp = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0.5, "btn_txt_g_shengji", skins.comp.Btn_3_8_Skin, -4]);
                return t;
            };
            p.effect_gift_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_gift = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 236, 161]);
                return t;
            };
            p.grp_item1_i = function () {
                var t = new egret.gui.Group();
                this.grp_item1 = t;
                this.__s(t, ["x", "y"], [241, 92]);
                t.layout = this.__11_i();
                t.elementsContent = [this.label_itemName1_i(), this.label_itemNum1_i()];
                return t;
            };
            p.grp_lvUp_i = function () {
                var t = new egret.gui.Group();
                this.grp_lvUp = t;
                this.__s(t, ["left", "right", "x", "y"], [0, 0, 10, 649]);
                t.elementsContent = [this.__8_i(), this.ico_item_i(), this.__10_i(), this.ico_item1_i(), this.grp_item1_i(), this.btn_lvUp_i()];
                return t;
            };
            p.grp_next_i = function () {
                var t = new egret.gui.Group();
                this.grp_next = t;
                this.__s(t, ["x", "y"], [280, 369]);
                t.elementsContent = [this.__12_i(), this.label_nextLv_i(), this.__13_i(), this.__14_i(), this.label_nextProp_i(), this.__15_i()];
                return t;
            };
            p.ico_giftWord_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_giftWord = t;
                this.__s(t, ["x", "y"], [92, 79]);
                return t;
            };
            p.ico_gift_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_gift = t;
                this.__s(t, ["horizontalCenter", "verticalCenter", "x", "y"], [-4, -239, 30, 30]);
                return t;
            };
            p.ico_item1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item1 = t;
                this.__s(t, ["height", "width", "x", "y"], [36, 36, 205, 88]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                this.__s(t, ["height", "width", "x", "y"], [36, 36, 205, 54]);
                return t;
            };
            p.label_canLvUpNext_i = function () {
                var t = new mo.gui.Label();
                this.label_canLvUpNext = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [18, 1, "00级后星级上限：00星", 0xE3E308, 246, 320]);
                return t;
            };
            p.label_canLvUp_i = function () {
                var t = new mo.gui.Label();
                this.label_canLvUp = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [18, 1, "当前等级星级上限：%s", 0xE3E308, 36, 320]);
                return t;
            };
            p.label_cannotLvUp_i = function () {
                var t = new egret.gui.Label();
                this.label_cannotLvUp = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 20, "法宝等级已提升至上限", 0xCB1010, 10, 685]);
                return t;
            };
            p.label_curLv_i = function () {
                var t = new mo.gui.Label();
                this.label_curLv = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "Lv.%s", 132, 369]);
                return t;
            };
            p.label_curProp_i = function () {
                var t = new mo.gui.Label();
                this.label_curProp = t;
                this.__s(t, ["height", "lineSpacing", "size", "width", "x", "y"], [209, 8, 18, 146, 80, 415]);
                return t;
            };
            p.label_itemName1_i = function () {
                var t = new egret.gui.Label();
                this.label_itemName1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xD60F99, 0, 0]);
                return t;
            };
            p.label_itemName_i = function () {
                var t = new egret.gui.Label();
                this.label_itemName = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xD60F99, 0, 0]);
                return t;
            };
            p.label_itemNum1_i = function () {
                var t = new egret.gui.Label();
                this.label_itemNum1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xFFFFFF, 95, 0]);
                return t;
            };
            p.label_itemNum_i = function () {
                var t = new egret.gui.Label();
                this.label_itemNum = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xFFFFFF, 95, 0]);
                return t;
            };
            p.label_lvUpNoLv_i = function () {
                var t = new mo.gui.Label();
                this.label_lvUpNoLv = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "人物达到%s级后可继续升级该法宝", 0xFF0004, 686]);
                return t;
            };
            p.label_nextLv_i = function () {
                var t = new mo.gui.Label();
                this.label_nextLv = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "Lv.%s", 85, 0]);
                return t;
            };
            p.label_nextProp_i = function () {
                var t = new mo.gui.Label();
                this.label_nextProp = t;
                this.__s(t, ["height", "lineSpacing", "size", "textColor", "width", "x", "y"], [209, 8, 18, 0x17CD14, 146, 25, 46]);
                return t;
            };
            p.label_ziZhi0_i = function () {
                var t = new mo.gui.Label();
                this.label_ziZhi0 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 16, "（资质越高属性成长越高）", 0xFFFFFF, 10, 276]);
                return t;
            };
            p.label_ziZhi_i = function () {
                var t = new mo.gui.Label();
                this.label_ziZhi = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "资质: %s/%s", 0xFFFFFF, 255]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [241, 62]);
                t.layout = this.__9_i();
                t.elementsContent = [this.label_itemName_i(), this.label_itemNum_i()];
                return t;
            };
            GiftLvUpSkin._skinParts = ["btn_buyLingYun", "effect_gift", "ico_gift", "ico_giftWord", "label_canLvUp", "label_canLvUpNext", "label_lvUpNoLv", "label_ziZhi", "label_ziZhi0", "label_curLv", "ico_item", "label_itemName", "label_itemNum", "ico_item1", "label_itemName1", "label_itemNum1", "grp_item1", "btn_lvUp", "grp_lvUp", "label_curProp", "label_nextLv", "label_nextProp", "grp_next", "label_cannotLvUp", "btn_help", "btn_back"];
            return GiftLvUpSkin;
        })(egret.gui.Skin);
        game.GiftLvUpSkin = GiftLvUpSkin;
        egret.registerClass(GiftLvUpSkin,"skins.game.GiftLvUpSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
