var skins;
(function (skins) {
    var game;
    (function (game) {
        var NoticeDlgSkin = (function (_super) {
            __extends(NoticeDlgSkin, _super);
            function NoticeDlgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.__4_i(), this.ico_title_1_i(), this.ico_title_4_i(), this.ico_title_2_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=NoticeDlgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return NoticeDlgSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_youxigonggaosfd", 72]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 437, 65]);
                return t;
            };
            p.ico_title_1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title_1 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_notice_t_1", 140]);
                return t;
            };
            p.ico_title_2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title_2 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [5.5, "ico_notice_t_2", 451]);
                return t;
            };
            p.ico_title_4_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title_4 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_notice_t_4", 298]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [714, "s9g_notice_bg", 480, 0, 41]);
                return t;
            };
            NoticeDlgSkin._skinParts = ["btn_close", "ico_title_1", "ico_title_4", "ico_title_2"];
            return NoticeDlgSkin;
        })(egret.gui.Skin);
        game.NoticeDlgSkin = NoticeDlgSkin;
        egret.registerClass(NoticeDlgSkin,"skins.game.NoticeDlgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
