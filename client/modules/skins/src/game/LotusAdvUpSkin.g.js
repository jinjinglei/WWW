var skins;
(function (skins) {
    var game;
    (function (game) {
        var LotusAdvUpSkin = (function (_super) {
            __extends(LotusAdvUpSkin, _super);
            function LotusAdvUpSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.label_curAdd_i(), this.label_curTotal_i(), this.label_curExpAdd_i(), this.grp_next_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.label_curLv_i(), this.label_cannotLvUp_i(), this.grp_lvUp_i(), this.effect_win_i(), this.effect_fail_i(), this.__15_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=LotusAdvUpSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return LotusAdvUpSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [233, 62]);
                t.layout = this.__11_i();
                t.elementsContent = [this.label_itemName_i(), this.label_itemNum_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [20, "本次消耗：", 104, 62]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "(有几率失败)", 0x5187F4, 341, 13]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jinyanchanliangjc", 61, 481]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_dikuanggd", 364]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xiayipingjie2", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jinyanleijijc", 28, 67]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jinyanchanliangjc", 28, 95]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zhengqilijijiaco", 28, 39]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_jinyanleijijc", 61, 452]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zhengqilijijiaco", 61, 422]);
                return t;
            };
            p.btn_lvUp_i = function () {
                var t = new egret.gui.Button();
                this.btn_lvUp = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_g_jingjieg", "按钮", skins.comp.Btn_3_8_Skin, 0]);
                return t;
            };
            p.effect_fail_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_fail = t;
                this.__s(t, ["effectId", "x", "y"], [54, 240, 365]);
                return t;
            };
            p.effect_win_i = function () {
                var t = new g_comp.UIEffect();
                this.effect_win = t;
                this.__s(t, ["effectId", "x", "y"], [5, 240, 365]);
                return t;
            };
            p.grp_lvUp_i = function () {
                var t = new egret.gui.Group();
                this.grp_lvUp = t;
                this.__s(t, ["left", "right", "y"], [0, 0, 645]);
                t.elementsContent = [this.ico_item_i(), this.__12_i(), this.btn_lvUp_i(), this.__13_i(), this.__14_i()];
                return t;
            };
            p.grp_next_i = function () {
                var t = new egret.gui.Group();
                this.grp_next = t;
                this.__s(t, ["x", "y"], [35, 507]);
                t.elementsContent = [this.label_nextAdd_i(), this.label_nextTotal_i(), this.__4_i(), this.label_nextLv_i(), this.__5_i(), this.label_nextExpAdd_i(), this.__6_i(), this.__7_i()];
                return t;
            };
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                this.__s(t, ["height", "width", "x", "y"], [40, 40, 197, 51]);
                return t;
            };
            p.label_cannotLvUp_i = function () {
                var t = new egret.gui.Label();
                this.label_cannotLvUp = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [-10, 20, "等级到126级可继续升级", 0xDF1717, 20, 653]);
                return t;
            };
            p.label_curAdd_i = function () {
                var t = new egret.gui.Label();
                this.label_curAdd = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "1000W/每小时", 0x26E80E, 211, 420]);
                return t;
            };
            p.label_curExpAdd_i = function () {
                var t = new egret.gui.Label();
                this.label_curExpAdd = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "1000W/每小时", 0x26E80E, 176, 478]);
                return t;
            };
            p.label_curLv_i = function () {
                var t = new egret.gui.Label();
                this.label_curLv = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [18, 1, 0x4A3306, "2级", 0xFFFFFF, 177, 393]);
                return t;
            };
            p.label_curTotal_i = function () {
                var t = new egret.gui.Label();
                this.label_curTotal = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "1000W/每小时", 0x26E80E, 211, 450]);
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
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "1000W/每小时", 0x26E80E, 178, 37]);
                return t;
            };
            p.label_nextExpAdd_i = function () {
                var t = new egret.gui.Label();
                this.label_nextExpAdd = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "1000W/每小时", 0x26E80E, 143, 92]);
                return t;
            };
            p.label_nextLv_i = function () {
                var t = new egret.gui.Label();
                this.label_nextLv = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [18, 1, 0x4A3306, "2级", 0xFFFFFF, 139, 11]);
                return t;
            };
            p.label_nextTotal_i = function () {
                var t = new egret.gui.Label();
                this.label_nextTotal = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "1000W/每小时", 0x26E80E, 178, 65]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [-123.5, "ico_dangqianpinjie", 20, 382]);
                return t;
            };
            LotusAdvUpSkin._skinParts = ["label_curAdd", "label_curTotal", "label_curExpAdd", "label_nextAdd", "label_nextTotal", "label_nextLv", "label_nextExpAdd", "grp_next", "label_curLv", "label_cannotLvUp", "ico_item", "label_itemName", "label_itemNum", "btn_lvUp", "grp_lvUp", "effect_win", "effect_fail"];
            return LotusAdvUpSkin;
        })(egret.gui.Skin);
        game.LotusAdvUpSkin = LotusAdvUpSkin;
        egret.registerClass(LotusAdvUpSkin,"skins.game.LotusAdvUpSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
