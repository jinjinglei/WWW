var skins;
(function (skins) {
    var game;
    (function (game) {
        var LotusLvUpSkin = (function (_super) {
            __extends(LotusLvUpSkin, _super);
            function LotusLvUpSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.label_curAdd_i(), this.label_curTotal_i(), this.grp_next_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.label_curLv_i(), this.label_cannotLvUp_i(), this.grp_lvUp_i(), this.effect_win_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=LotusLvUpSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return LotusLvUpSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [237, 62]);
                t.layout = this.__10_i();
                t.elementsContent = [this.label_itemName_i(), this.label_itemNum_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_senjixiaohao", 110, 59]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_dikuanggd", 25, 364]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xiayidenjig", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jinyanshangxian", 19, 69]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jinyancanliang", 19, 38]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jinyanshangxian", 61, 453]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jinyancanliang", 61, 421]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [-112.5, "ico_dangqiandj", 20, 382]);
                return t;
            };
            p.btn_lvUp_i = function () {
                var t = new egret.gui.Button();
                this.btn_lvUp = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_g_senji2", "按钮", skins.comp.Btn_3_22_Skin, 5]);
                return t;
            };
            p.effect_win_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_win = t;
                this.__s(t, ["effectId", "x", "y"], [53, 240, 365]);
                return t;
            };
            p.grp_lvUp_i = function () {
                var t = new egret.gui.Group();
                this.grp_lvUp = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 639]);
                t.elementsContent = [this.ico_item_i(), this.__11_i(), this.__12_i(), this.btn_lvUp_i()];
                return t;
            };
            p.grp_next_i = function () {
                var t = new egret.gui.Group();
                this.grp_next = t;
                this.__s(t, ["x", "y"], [44, 507]);
                t.elementsContent = [this.label_nextAdd_i(), this.label_nextTotal_i(), this.__4_i(), this.label_nextLv_i(), this.__5_i(), this.__6_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                this.__s(t, ["height", "width", "x", "y"], [40, 40, 201, 51]);
                return t;
            };
            p.label_cannotLvUp_i = function () {
                var t = new egret.gui.Label();
                this.label_cannotLvUp = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [-10, 20, "等级到126级可继续升级", 0xA71A1A, 20, 652]);
                return t;
            };
            p.label_curAdd_i = function () {
                var t = new egret.gui.Label();
                this.label_curAdd = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "1000W/每小时", 0x26E80E, 201, 424]);
                return t;
            };
            p.label_curLv_i = function () {
                var t = new egret.gui.Label();
                this.label_curLv = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [18, 1, 0x4A3306, "2级", 0xFFFFFF, 176, 388]);
                return t;
            };
            p.label_curTotal_i = function () {
                var t = new egret.gui.Label();
                this.label_curTotal = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "1000W/每小时", 0x26E80E, 201, 454]);
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
            p.label_nextAdd_i = function () {
                var t = new egret.gui.Label();
                this.label_nextAdd = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "1000W/每小时", 0x26E80E, 159, 40]);
                return t;
            };
            p.label_nextLv_i = function () {
                var t = new egret.gui.Label();
                this.label_nextLv = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [18, 1, 0x4A3306, "2级", 0xFFFFFF, 129, 12]);
                return t;
            };
            p.label_nextTotal_i = function () {
                var t = new egret.gui.Label();
                this.label_nextTotal = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "1000W/每小时", 0x26E80E, 159, 70]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            LotusLvUpSkin._skinParts = ["label_curAdd", "label_curTotal", "label_nextAdd", "label_nextTotal", "label_nextLv", "grp_next", "label_curLv", "label_cannotLvUp", "ico_item", "label_itemName", "label_itemNum", "btn_lvUp", "grp_lvUp", "effect_win"];
            return LotusLvUpSkin;
        })(egret.gui.Skin);
        game.LotusLvUpSkin = LotusLvUpSkin;
        egret.registerClass(LotusLvUpSkin,"skins.game.LotusLvUpSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
