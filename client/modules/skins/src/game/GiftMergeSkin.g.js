var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftMergeSkin = (function (_super) {
            __extends(GiftMergeSkin, _super);
            function GiftMergeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.effect_gift_i(), this.ico_gift_i(), this.ico_giftWord_i(), this.btn_merge_i(), this.list_skill_i(), this.__4_i(), this.ico_gift0_i(), this.ico_gift1_i(), this.btn_help_i(), this.btn_back_i(), this.label_no0_i(), this.label_lv0_i(), this.label_name0_i(), this.label_lv1_i(), this.label_name1_i(), this.label_no1_i(), this.__5_i(), this.__6_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftMergeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftMergeSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_fabaoheceng", 15]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_digs", 257]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_fabaojinengs", 252]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 4]);
                return t;
            };
            p.btn_merge_i = function () {
                var t = new egret.gui.Button();
                this.btn_merge = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_hecengf", skins.comp.Btn_3_6_Skin, 519]);
                return t;
            };
            p.effect_gift_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_gift = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 236, 161]);
                return t;
            };
            p.ico_gift0_i = function () {
                var t = new g_comp.Ico_Gift();
                this.ico_gift0 = t;
                this.__s(t, ["x", "y"], [107, 618]);
                return t;
            };
            p.ico_gift1_i = function () {
                var t = new g_comp.Ico_Gift();
                this.ico_gift1 = t;
                this.__s(t, ["x", "y"], [300, 618]);
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
                this.__s(t, ["horizontalCenter", "verticalCenter", "x", "y"], [-4, -239, 20, 20]);
                return t;
            };
            p.label_lv0_i = function () {
                var t = new mo.gui.Label();
                this.label_lv0 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [-99, 16, "Lv.%s", 0xFFFFFF, 716]);
                return t;
            };
            p.label_lv1_i = function () {
                var t = new mo.gui.Label();
                this.label_lv1 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [96, 16, "Lv.%s", 0xFFFFFF, 10, 716]);
                return t;
            };
            p.label_name0_i = function () {
                var t = new mo.gui.Label();
                this.label_name0 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [-99, 16, "%s星%s", 0xFFEB12, 10, 696]);
                return t;
            };
            p.label_name1_i = function () {
                var t = new mo.gui.Label();
                this.label_name1 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [96, 16, "%s星%s", 0xFFEB12, 20, 697]);
                return t;
            };
            p.label_no0_i = function () {
                var t = new egret.gui.Label();
                this.label_no0 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [-100, 16, "(缺少该材料)", 0xFF0000, 737]);
                return t;
            };
            p.label_no1_i = function () {
                var t = new egret.gui.Label();
                this.label_no1 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [93, 16, "(缺少该材料)", 0xFF0000, 737]);
                return t;
            };
            p.list_skill_i = function () {
                var t = new egret.gui.List();
                this.list_skill = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [190, skins.game.GiftSkillCellSkin, 403, 38, 292]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_fabaobeijin_4", 0]);
                return t;
            };
            GiftMergeSkin._skinParts = ["effect_gift", "ico_gift", "ico_giftWord", "btn_merge", "list_skill", "ico_gift0", "ico_gift1", "btn_help", "btn_back", "label_no0", "label_lv0", "label_name0", "label_lv1", "label_name1", "label_no1"];
            return GiftMergeSkin;
        })(egret.gui.Skin);
        game.GiftMergeSkin = GiftMergeSkin;
        egret.registerClass(GiftMergeSkin,"skins.game.GiftMergeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
