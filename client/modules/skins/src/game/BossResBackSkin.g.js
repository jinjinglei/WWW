var skins;
(function (skins) {
    var game;
    (function (game) {
        var BossResBackSkin = (function (_super) {
            __extends(BossResBackSkin, _super);
            function BossResBackSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.list_itmes_i(), this.btn_get_i(), this.grp_res_i(), this.btn_close_i(), this.btn_help_i(), this.__10_i(), this.img_getAll_i(), this.img_empty_i(), this.__11_i(), this.__12_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BossResBackSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BossResBackSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "可找回前一天的BOSS资源，战斗力越高，找回奖励越多", 0x3EBFE7, 41, 74]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.8, 0, "pre_资源找回", 0, false]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "x", "y"], ["黑体", 20, 18, "消耗:", 0xE2AC37, 0, 6]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__7_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 16, "100", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "x", "y"], ["黑体", 20, 18, "找回所有资源", 0xE2AC37, 10, 16]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 408, -10]);
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_quanbuzhaohui", skins.comp.Btn_3_8_Skin, 157, 632]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", -2, -7]);
                return t;
            };
            p.grp_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_res = t;
                this.__s(t, ["height", "x", "y"], [30, 128, 689]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i()];
                return t;
            };
            p.img_empty_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_empty = t;
                this.__s(t, ["source", "x", "y"], ["ico_dangqianwukezaohui", 127, 385]);
                return t;
            };
            p.img_getAll_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_getAll = t;
                this.__s(t, ["source", "visible", "x", "y"], ["ico_yizaohuiziyuan", false, 115, 655]);
                return t;
            };
            p.list_itmes_i = function () {
                var t = new egret.gui.List();
                this.list_itmes = t;
                this.__s(t, ["height", "width", "x", "y"], [469, 417, 33, 135]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_ziyuanzaohui", 185, 13]);
                return t;
            };
            BossResBackSkin._skinParts = ["list_itmes", "btn_get", "grp_res", "btn_close", "btn_help", "img_getAll", "img_empty"];
            return BossResBackSkin;
        })(egret.gui.Skin);
        game.BossResBackSkin = BossResBackSkin;
        egret.registerClass(BossResBackSkin,"skins.game.BossResBackSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
