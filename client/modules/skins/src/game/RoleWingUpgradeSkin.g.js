var skins;
(function (skins) {
    var game;
    (function (game) {
        var RoleWingUpgradeSkin = (function (_super) {
            __extends(RoleWingUpgradeSkin, _super);
            function RoleWingUpgradeSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.groupTrain_i(), this.groupUpgrade_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RoleWingUpgradeSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RoleWingUpgradeSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-1, "bg_c_dengji", 1]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalCenter", "x"], ["黑体", 22, "阶翅膀", 0x29D30E, 0.5, 273]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [11.5, "img_xiayiji", 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 22, "阶翅膀", 0x29D30E, 49, 10]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["黑体", 22, "星", 0x29D30E, 146, 10]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [51, 200, 2, 2]);
                t.elementsContent = [this.labelCurreLevel_i(), this.__14_i(), this.__15_i(), this.labelCurreStar_i()];
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [51, 0, 398, 10]);
                t.elementsContent = [this.__11_i(), this.labelNextLevel_i(), this.__12_i(), this.__13_i(), this.__16_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textColor", "y"], ["黑体", 0.5, 14, "由于升阶时会产生暴击,因此显示的资源需求皆为估算", 0x8F8888, 221]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "left", "source", "top", "width", "x", "y"], [635, 31, "s9g_dlg_0", 100, 430, 10, 10]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [6, "tit_txt_c_yijianshengjie", 103]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [35, "txt_putongpeiyang", 118, 58, 5]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalCenter", "x"], ["黑体", 18, "当羽毛不足时,使用元宝替代", 0x9AFE77, 53, 46]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textColor", "width", "y"], ["黑体", 57, 0, 21, "消耗羽毛进行培养,当羽毛不足升阶时,将消耗羽毛拥有的最大数量", 0xCDCDCD, 340, 53]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [35, "txt_gaojipeiyang", 118, 58, 13]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "right", "skinName", "top", "x", "y"], ["按钮", 18, skins.comp.Btn_close_Skin, 115, 10, 10]);
                return t;
            };
            p.btn_keyUpgrade_i = function () {
                var t = new egret.gui.Button();
                this.btn_keyUpgrade = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [2.5, "btn_txt_c_kaishishengjie", "高级培养", skins.comp.Btn_3_8_Skin, 157]);
                return t;
            };
            p.ckb_advanced_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_advanced = t;
                this.__s(t, ["x", "y"], [7, 13]);
                return t;
            };
            p.ckb_common_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_common = t;
                this.__s(t, ["x", "y"], [7, 5]);
                return t;
            };
            p.ckb_useStone_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_useStone = t;
                this.__s(t, ["skinName", "verticalCenter", "x"], [skins.comp.CheckBox2Skin, 53, 10]);
                return t;
            };
            p.groupAdvanced_i = function () {
                var t = new egret.gui.Group();
                this.groupAdvanced = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [170, 0, 350, 132]);
                t.elementsContent = [this.__7_i(), this.ckb_useStone_i(), this.__8_i(), this.ckb_advanced_i(), this.__9_i()];
                return t;
            };
            p.groupCommon_i = function () {
                var t = new egret.gui.Group();
                this.groupCommon = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [110, 0, 350, 27]);
                t.layout = this.__6_i();
                t.elementsContent = [this.ckb_common_i(), this.__5_i(), this.labelComon_i()];
                return t;
            };
            p.groupTrain_i = function () {
                var t = new egret.gui.Group();
                this.groupTrain = t;
                this.__s(t, ["height", "width", "x", "y"], [310, 400, 45, 135]);
                t.elementsContent = [this.trainBg_i(), this.groupCommon_i(), this.groupAdvanced_i()];
                return t;
            };
            p.groupUpgrade_i = function () {
                var t = new egret.gui.Group();
                this.groupUpgrade = t;
                this.__s(t, ["height", "width", "x", "y"], [275, 400, 45, 450]);
                t.elementsContent = [this.trainBg0_i(), this.__10_i(), this.__17_i(), this.labelFeather_i(), this.labelMoney_i(), this.btn_keyUpgrade_i(), this.__18_i()];
                return t;
            };
            p.labelComon_i = function () {
                var t = new egret.gui.Label();
                this.labelComon = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textColor", "width", "y"], ["Adobe 黑体 Std R", 57, 0, 21, "金币不足升阶时,将消耗拥有的最大金币数量", 0xCDCDCD, 340, 44]);
                return t;
            };
            p.labelCurreLevel_i = function () {
                var t = new egret.gui.Label();
                this.labelCurreLevel = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalCenter", "x"], ["黑体", 22, "10", 0x29D30E, -2.5, 21]);
                return t;
            };
            p.labelCurreStar_i = function () {
                var t = new egret.gui.Label();
                this.labelCurreStar = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalCenter", "x", "y"], ["黑体", 22, "10", 0x29D30E, -2.5, 120, 10]);
                return t;
            };
            p.labelFeather_i = function () {
                var t = new egret.gui.Label();
                this.labelFeather = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "y"], ["黑体", 0, 22, "升阶总需羽毛", 76]);
                return t;
            };
            p.labelMoney_i = function () {
                var t = new egret.gui.Label();
                this.labelMoney = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 22, "升阶总需要金钱", 0xDA2939, 108]);
                return t;
            };
            p.labelNextLevel_i = function () {
                var t = new egret.gui.Label();
                this.labelNextLevel = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "verticalCenter", "x", "y"], ["黑体", 22, "11", 0x29D30E, 0.5, 243, 10]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textColor", "y"], ["黑体", 0.5, 14, "请准备充足资源,否则会消耗当前最大资源用于升阶", 0x8F8888, 244]);
                return t;
            };
            p.trainBg0_i = function () {
                var t = new egret.gui.UIAsset();
                this.trainBg0 = t;
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [275, egret.gui.getScale9Grid("28,27,14,17"), "panel_huawenlasheng", 400, 0, 0]);
                return t;
            };
            p.trainBg_i = function () {
                var t = new egret.gui.UIAsset();
                this.trainBg = t;
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [310, egret.gui.getScale9Grid("28,27,14,17"), "panel_huawenlasheng", 400, 0, 4]);
                return t;
            };
            RoleWingUpgradeSkin._skinParts = ["trainBg", "ckb_common", "labelComon", "groupCommon", "ckb_useStone", "ckb_advanced", "groupAdvanced", "groupTrain", "trainBg0", "labelNextLevel", "labelCurreLevel", "labelCurreStar", "labelFeather", "labelMoney", "btn_keyUpgrade", "groupUpgrade", "btn_close"];
            return RoleWingUpgradeSkin;
        })(egret.gui.Skin);
        game.RoleWingUpgradeSkin = RoleWingUpgradeSkin;
        egret.registerClass(RoleWingUpgradeSkin,"skins.game.RoleWingUpgradeSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
