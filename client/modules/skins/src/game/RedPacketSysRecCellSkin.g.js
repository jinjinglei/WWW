var skins;
(function (skins) {
    var game;
    (function (game) {
        var RedPacketSysRecCellSkin = (function (_super) {
            __extends(RedPacketSysRecCellSkin, _super);
            function RedPacketSysRecCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [37, 370]);
                this.elementsContent = [this.__4_i(), this.__5_i(), this.label_title_i(), this.label_fanwei_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RedPacketSysRecCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RedPacketSysRecCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [45, 109, 256, 28]);
                t.elementsContent = [this.btn_get0_i()];
                return t;
            };
            p.btn_get0_i = function () {
                var t = new egret.gui.Button();
                this.btn_get0 = t;
                this.__s(t, ["height", "icon", "label", "skinName", "width", "x", "y"], [40, "btn_txt_chakan", "领取", skins.comp.Btn_3_0_Skin, 95, 0, 0]);
                return t;
            };
            p.label_fanwei_i = function () {
                var t = new egret.gui.Label();
                this.label_fanwei = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "发送范围", 38, 48]);
                return t;
            };
            p.label_title_i = function () {
                var t = new egret.gui.Label();
                this.label_title = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "VIP专属红包", "right", 0xEBA800, 141, 16, 8]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width"], [87, "bg_panel_hongbao", 370]);
                return t;
            };
            RedPacketSysRecCellSkin._skinParts = ["btn_get0", "label_title", "label_fanwei"];
            return RedPacketSysRecCellSkin;
        })(egret.gui.Skin);
        game.RedPacketSysRecCellSkin = RedPacketSysRecCellSkin;
        egret.registerClass(RedPacketSysRecCellSkin,"skins.game.RedPacketSysRecCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
