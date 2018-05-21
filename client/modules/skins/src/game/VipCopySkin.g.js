var skins;
(function (skins) {
    var game;
    (function (game) {
        var VipCopySkin = (function (_super) {
            __extends(VipCopySkin, _super);
            function VipCopySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.img_title_i(), this.btn_close_i(), this.label_left_times_i(), this.list_copys_i(), this.btn_help_i(), this.__6_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=VipCopySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VipCopySkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source"], [0, "panel_task_title"]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_taitouhuawen", 152, 101]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_equipCopy", 10]);
                return t;
            };
            p.label_left_times_i = function () {
                var t = new mo.gui.Label();
                this.label_left_times = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], ["宋体", 25, 0, 20, "今日剩余通关次数：%s/%s", "center", 0x32EC0D, "middle", 300, 63]);
                return t;
            };
            p.list_copys_i = function () {
                var t = new egret.gui.List();
                this.list_copys = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [594, 1, skins.game.VipCopyItemSkin, 422, 136]);
                t.layout = this.__5_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            VipCopySkin._skinParts = ["img_title", "btn_close", "label_left_times", "list_copys", "btn_help"];
            return VipCopySkin;
        })(egret.gui.Skin);
        game.VipCopySkin = VipCopySkin;
        egret.registerClass(VipCopySkin,"skins.game.VipCopySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
