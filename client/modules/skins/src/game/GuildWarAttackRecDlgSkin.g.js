var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarAttackRecDlgSkin = (function (_super) {
            __extends(GuildWarAttackRecDlgSkin, _super);
            function GuildWarAttackRecDlgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.scroller_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarAttackRecDlgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarAttackRecDlgSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Group();
                t.elementsContent = [this.label_rec_i()];
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 26, "战况", 0xEBAE15, 164]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 412, 154]);
                return t;
            };
            p.label_rec_i = function () {
                var t = new mo.gui.Label();
                this.label_rec = t;
                this.__s(t, ["left", "lineSpacing", "right", "size"], [0, 3, 0, 16]);
                return t;
            };
            p.scroller_i = function () {
                var t = new egret.gui.Scroller();
                this.scroller = t;
                this.__s(t, ["height", "width", "x", "y"], [445, 398, 44, 210]);
                t.viewport = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "s9g_dlg_0", 0]);
                return t;
            };
            GuildWarAttackRecDlgSkin._skinParts = ["btn_close", "label_rec", "scroller"];
            return GuildWarAttackRecDlgSkin;
        })(egret.gui.Skin);
        game.GuildWarAttackRecDlgSkin = GuildWarAttackRecDlgSkin;
        egret.registerClass(GuildWarAttackRecDlgSkin,"skins.game.GuildWarAttackRecDlgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
