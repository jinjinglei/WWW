var skins;
(function (skins) {
    var game;
    (function (game) {
        var CoffersServerCellSkin = (function (_super) {
            __extends(CoffersServerCellSkin, _super);
            function CoffersServerCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.label_name_i(), this.label_coffer_i(), this.label_state0_i(), this.label_state2_i(), this.label_state1_i(), this.label_state3_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.btn_rob_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CoffersServerCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CoffersServerCellSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zuquehu", 152, 114]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["icon_yinxiondi", 0, 26]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_ditghsg", 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_shouweizhuangtaii", 8, 35]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_guokuchuang", 214, 47]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_baierhu", 152, 78]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gxuanwui", 11, 114]);
                return t;
            };
            p.btn_rob_i = function () {
                var t = new egret.gui.Button();
                this.btn_rob = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_qianwanglueduosg", "按钮", skins.comp.Btn_3_24_Skin, 276, 95]);
                return t;
            };
            p.label_coffer_i = function () {
                var t = new egret.gui.Label();
                this.label_coffer = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "123", 0xB8AFAF, 302, 51]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "strokeColor", "text", "textColor", "y"], [0, 24, 2, 0x461B00, "标签", 0xFFEE9D, 12]);
                return t;
            };
            p.label_state0_i = function () {
                var t = new egret.gui.Label();
                this.label_state0 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "已掠夺", 0xB8AFAF, 65, 84]);
                return t;
            };
            p.label_state1_i = function () {
                var t = new egret.gui.Label();
                this.label_state1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "已掠夺", 0xB8AFAF, 204, 84]);
                return t;
            };
            p.label_state2_i = function () {
                var t = new egret.gui.Label();
                this.label_state2 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "已掠夺", 0xB8AFAF, 65, 120]);
                return t;
            };
            p.label_state3_i = function () {
                var t = new egret.gui.Label();
                this.label_state3 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "已掠夺", 0xB8AFAF, 204, 120]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_qingongi", 11, 78]);
                return t;
            };
            CoffersServerCellSkin._skinParts = ["label_name", "label_coffer", "label_state0", "label_state2", "label_state1", "label_state3", "btn_rob"];
            return CoffersServerCellSkin;
        })(egret.gui.Skin);
        game.CoffersServerCellSkin = CoffersServerCellSkin;
        egret.registerClass(CoffersServerCellSkin,"skins.game.CoffersServerCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
