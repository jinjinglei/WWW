var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftUpStarSkin = (function (_super) {
            __extends(GiftUpStarSkin, _super);
            function GiftUpStarSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_buyLingYun_i(), this.effect_gift_i(), this.ico_gift_i(), this.ico_giftWord_i(), this.grp_star_i(), this.list_skill_i(), this.__15_i(), this.label_cannotLvUp_i(), this.label_max_i(), this.label_ziZhi_i(), this.grp_upStar_i(), this.btn_reset_i(), this.__19_i(), this.__20_i(), this.__21_i(), this.btn_help_i(), this.btn_back_i(), this.__22_i(), this.__23_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftUpStarSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftUpStarSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 129, 50]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 139, 60]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 149, 70]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 3;
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_g_fabaoshenxin", 16]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "升星消耗：", 0xF0AD32, 110, 48]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [231, 48]);
                t.layout = this.__17_i();
                t.elementsContent = [this.label_itemName_i(), this.label_itemNum_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "升星提高法宝资质上限", 0x239DE0, 407]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [173, 16, "重铸星级清零", 0xE1E8EC, 10, 436]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 14, "重铸后可重新升星以激活未激活技能", 0x239DE0, 10, 430]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "ico_digs", 10, 455]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "ico_fabaojinengs", 10, 450]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_fabaobeijin_2", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star2", "ico_star", false, 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star1", "ico_star", false, 39, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 79, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 89, 10]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 99, 20]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 109, 30]);
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
            p.btn_reset_i = function () {
                var t = new egret.gui.Button();
                this.btn_reset = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_congzhu", skins.comp.Btn_3_1_Skin, 353, 399]);
                return t;
            };
            p.btn_upStar_i = function () {
                var t = new egret.gui.Button();
                this.btn_upStar = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_shengxinsg", skins.comp.Btn_3_43_Skin, 175, 0]);
                return t;
            };
            p.effect_gift_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_gift = t;
                this.__s(t, ["autoPlay", "x", "y"], [true, 236, 161]);
                return t;
            };
            p.grp_star_i = function () {
                var t = new egret.gui.Group();
                this.grp_star = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 278]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i()];
                return t;
            };
            p.grp_upStar_i = function () {
                var t = new egret.gui.Group();
                this.grp_upStar = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 313]);
                t.elementsContent = [this.__16_i(), this.ico_item_i(), this.__18_i(), this.btn_upStar_i()];
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
                this.__s(t, ["horizontalCenter", "verticalCenter"], [-4, -239]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                this.__s(t, ["height", "width", "x", "y"], [40, 40, 195, 37]);
                return t;
            };
            p.label_cannotLvUp_i = function () {
                var t = new mo.gui.Label();
                this.label_cannotLvUp = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 20, "等级达到%s级后可升至%s星", 0xCB1010, 20, 318]);
                return t;
            };
            p.label_itemName_i = function () {
                var t = new egret.gui.Label();
                this.label_itemName = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xD60F99, 0, 0]);
                return t;
            };
            p.label_itemNum_i = function () {
                var t = new egret.gui.Label();
                this.label_itemNum = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "标签", 0xFFFFFF, 95, 0]);
                return t;
            };
            p.label_max_i = function () {
                var t = new mo.gui.Label();
                this.label_max = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 20, "(已升至最高星级)", 0xCB1010, 30, 318]);
                return t;
            };
            p.label_ziZhi_i = function () {
                var t = new mo.gui.Label();
                this.label_ziZhi = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 18, "当前资质上限：%s", 0xE3B308, 256]);
                return t;
            };
            p.list_skill_i = function () {
                var t = new egret.gui.List();
                this.list_skill = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [190, skins.game.GiftSkillCellSkin, 403, 41, 488]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 119, 40]);
                return t;
            };
            GiftUpStarSkin._skinParts = ["btn_buyLingYun", "effect_gift", "ico_gift", "ico_giftWord", "grp_star", "list_skill", "label_cannotLvUp", "label_max", "label_ziZhi", "ico_item", "label_itemName", "label_itemNum", "btn_upStar", "grp_upStar", "btn_reset", "btn_help", "btn_back"];
            return GiftUpStarSkin;
        })(egret.gui.Skin);
        game.GiftUpStarSkin = GiftUpStarSkin;
        egret.registerClass(GiftUpStarSkin,"skins.game.GiftUpStarSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
