var skins;
(function (skins) {
    var game;
    (function (game) {
        var RebirthSkin = (function (_super) {
            __extends(RebirthSkin, _super);
            function RebirthSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.btn_help_i(), this.btn_close_i(), this.__5_i(), this.img_noReTitle_i(), this.label_maxLvl_i(), this.label_curPropDes_i(), this.label_nextPropDes_i(), this.label_0_propDes_i(), this.label_no_PropDes_i(), this.label_curProp_i(), this.label_nextProp_i(), this.grp_1_i(), this.grp_2_i(), this.btn_rebirth_i(), this.grp_reTitle_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RebirthSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RebirthSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [-2, "tit_txt_g_zhuansheng", 13]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_dangqiangzuans", 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_congdsf", 198, 1]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 1]);
                return t;
            };
            p.btn_getExp_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_getExp = t;
                this.__s(t, ["right", "source", "y"], [20, "ico_huoqujiyan", 70]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 1, 1]);
                return t;
            };
            p.btn_rebirth_i = function () {
                var t = new egret.gui.Button();
                this.btn_rebirth = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "x", "y"], [0.5, "btn_txt_g_zuanseng", "按钮", skins.comp.Btn_3_6_Skin, 10, 652]);
                return t;
            };
            p.grp_1_i = function () {
                var t = new egret.gui.Group();
                this.grp_1 = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [140, 0, 480, 521]);
                t.elementsContent = [this.label_costExp_i(), this.label_curExp_i(), this.btn_getExp_i()];
                return t;
            };
            p.grp_2_i = function () {
                var t = new egret.gui.Group();
                this.grp_2 = t;
                this.__s(t, ["height", "horizontalCenter", "visible", "width", "x", "y"], [140, 0, false, 480, 10, 521]);
                t.elementsContent = [this.label_openNextLvl_i(), this.label_curExp2_i()];
                return t;
            };
            p.grp_reTitle_i = function () {
                var t = new egret.gui.Group();
                this.grp_reTitle = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 79]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__6_i(), this.label_curLvl_i(), this.__7_i()];
                return t;
            };
            p.img_noReTitle_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_noReTitle = t;
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0, "ico_weizhuanseng", 20, 79]);
                return t;
            };
            p.label_0_propDes_i = function () {
                var t = new mo.gui.Label();
                this.label_0_propDes = t;
                this.__s(t, ["lineSpacing", "size", "text", "visible", "x", "y"], [5, 19, "未飞升加成属性", false, 69, 182]);
                return t;
            };
            p.label_costExp_i = function () {
                var t = new mo.gui.Label();
                this.label_costExp = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "x", "y"], [0, 5, 20, "消耗飞升经验：%s", 10, 0]);
                return t;
            };
            p.label_curExp2_i = function () {
                var t = new mo.gui.Label();
                this.label_curExp2 = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "y"], [0, 5, 20, "当前飞升经验：%s", 61]);
                return t;
            };
            p.label_curExp_i = function () {
                var t = new mo.gui.Label();
                this.label_curExp = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "y"], [0, 5, 20, "当前飞升经验：%s", 30]);
                return t;
            };
            p.label_curLvl_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_curLvl = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "0", 180, 7]);
                return t;
            };
            p.label_curPropDes_i = function () {
                var t = new mo.gui.Label();
                this.label_curPropDes = t;
                this.__s(t, ["lineSpacing", "size", "text", "x", "y"], [5, 19, "飞升%s重加成属性", 64, 182]);
                return t;
            };
            p.label_curProp_i = function () {
                var t = new mo.gui.Label();
                this.label_curProp = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textColor", "width", "x", "y"], [270, 12, 19, "说明", 0x68BD79, 151, 83, 228]);
                return t;
            };
            p.label_maxLvl_i = function () {
                var t = new mo.gui.Label();
                this.label_maxLvl = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "textColor", "y"], [0, 5, 20, "飞升%s重后等级上限升至：%s级", 0x68BD79, 128]);
                return t;
            };
            p.label_nextPropDes_i = function () {
                var t = new mo.gui.Label();
                this.label_nextPropDes = t;
                this.__s(t, ["lineSpacing", "size", "text", "x", "y"], [5, 19, "飞升%s重加成属性", 271, 182]);
                return t;
            };
            p.label_nextProp_i = function () {
                var t = new mo.gui.Label();
                this.label_nextProp = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textColor", "width", "x", "y"], [270, 12, 19, "说明", 0xFFD400, 151, 295, 228]);
                return t;
            };
            p.label_no_PropDes_i = function () {
                var t = new mo.gui.Label();
                this.label_no_PropDes = t;
                this.__s(t, ["lineSpacing", "size", "text", "visible", "x", "y"], [5, 19, "已达到最高等级", false, 281, 182]);
                return t;
            };
            p.label_openNextLvl_i = function () {
                var t = new mo.gui.Label();
                this.label_openNextLvl = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "textColor", "x", "y"], [0, 5, 20, "等级达到%s开启%s重", 0xFF0000, 10, 12]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_zhuanseng", 0]);
                return t;
            };
            RebirthSkin._skinParts = ["btn_help", "btn_close", "img_noReTitle", "label_maxLvl", "label_curPropDes", "label_nextPropDes", "label_0_propDes", "label_no_PropDes", "label_curProp", "label_nextProp", "label_costExp", "label_curExp", "btn_getExp", "grp_1", "label_openNextLvl", "label_curExp2", "grp_2", "btn_rebirth", "label_curLvl", "grp_reTitle"];
            return RebirthSkin;
        })(egret.gui.Skin);
        game.RebirthSkin = RebirthSkin;
        egret.registerClass(RebirthSkin,"skins.game.RebirthSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
