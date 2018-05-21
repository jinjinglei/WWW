var skins;
(function (skins) {
    var game;
    (function (game) {
        var HeartLayerSkin = (function (_super) {
            __extends(HeartLayerSkin, _super);
            function HeartLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_close_i(), this.btn_help_i(), this.list_heart_i(), this.__6_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=HeartLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return HeartLayerSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_g_xinfasgong", 11]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 18, "开启心法槽位后可学习新的心法", 0x00B2FF, 74]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 412, -9]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", -2, -8]);
                return t;
            };
            p.list_heart_i = function () {
                var t = new egret.gui.List();
                this.list_heart = t;
                this.__s(t, ["height", "horizontalCenter", "y"], [578, 0.5, 141]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_xunzanglf", 0]);
                return t;
            };
            HeartLayerSkin._skinParts = ["btn_close", "btn_help", "list_heart"];
            return HeartLayerSkin;
        })(egret.gui.Skin);
        game.HeartLayerSkin = HeartLayerSkin;
        egret.registerClass(HeartLayerSkin,"skins.game.HeartLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
