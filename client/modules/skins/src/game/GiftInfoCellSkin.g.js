var skins;
(function (skins) {
    var game;
    (function (game) {
        var GiftInfoCellSkin = (function (_super) {
            __extends(GiftInfoCellSkin, _super);
            function GiftInfoCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.ico_gift_i(), this.__5_i(), this.label_combat_i(), this.grp_has_i(), this.grp_no_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GiftInfoCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GiftInfoCellSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 139, 60]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 149, 70]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "icon_fabaoditulgs";
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zandoulig", 91, 18]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "技能评分：", 105, 80]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star2", "ico_star", false, 0, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star1", "ico_star", false, 39, 0]);
                return t;
            };
            p.btn_act_i = function () {
                var t = new egret.gui.Button();
                this.btn_act = t;
                this.__s(t, ["icon", "skinName", "verticalCenter", "x"], ["btn_txt_g_jihuo", skins.comp.Btn_3_24_Skin, 0, 318]);
                return t;
            };
            p.btn_detail_i = function () {
                var t = new egret.gui.Button();
                this.btn_detail = t;
                this.__s(t, ["icon", "skinName", "verticalCenter", "x"], ["btn_txt_g_fabaoxiangqin", skins.comp.Btn_3_24_Skin, 0, 314]);
                return t;
            };
            p.btn_gain_i = function () {
                var t = new egret.gui.Button();
                this.btn_gain = t;
                this.__s(t, ["icon", "skinName", "verticalCenter", "x"], ["btn_txt_g_qianwanghuoded", skins.comp.Btn_3_24_Skin, 0, 318]);
                return t;
            };
            p.grp_has_i = function () {
                var t = new egret.gui.Group();
                this.grp_has = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.label_ziZhi_i(), this.label_star_i(), this.label_lv_i(), this.btn_detail_i()];
                return t;
            };
            p.grp_no_i = function () {
                var t = new egret.gui.Group();
                this.grp_no = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.__6_i(), this.grp_star_i(), this.btn_act_i(), this.btn_gain_i()];
                return t;
            };
            p.grp_star_i = function () {
                var t = new egret.gui.Group();
                this.grp_star = t;
                this.__s(t, ["x", "y"], [190, 78]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i()];
                return t;
            };
            p.ico_gift_i = function () {
                var t = new g_comp.Ico_Gift();
                this.ico_gift = t;
                this.__s(t, ["x", "y"], [18, 16]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new egret.gui.Label();
                this.label_combat = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "9999", 177, 26]);
                return t;
            };
            p.label_lv_i = function () {
                var t = new mo.gui.Label();
                this.label_lv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "等级：%s", 0xE7E3D4, 106, 60]);
                return t;
            };
            p.label_star_i = function () {
                var t = new mo.gui.Label();
                this.label_star = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "星级：%s", 0xE7E3D4, 106, 93]);
                return t;
            };
            p.label_ziZhi_i = function () {
                var t = new mo.gui.Label();
                this.label_ziZhi = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "资质：%s", 0xE7E3D4, 196, 93]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "touchEnabled", "x", "y"], ["img_star0", "ico_star", false, 79, 0]);
                return t;
            };
            GiftInfoCellSkin._skinParts = ["ico_gift", "label_combat", "label_ziZhi", "label_star", "label_lv", "btn_detail", "grp_has", "grp_star", "btn_act", "btn_gain", "grp_no"];
            return GiftInfoCellSkin;
        })(egret.gui.Skin);
        game.GiftInfoCellSkin = GiftInfoCellSkin;
        egret.registerClass(GiftInfoCellSkin,"skins.game.GiftInfoCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
