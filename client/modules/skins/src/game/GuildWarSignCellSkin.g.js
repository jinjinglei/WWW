var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarSignCellSkin = (function (_super) {
            __extends(GuildWarSignCellSkin, _super);
            function GuildWarSignCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.label_condition_i(), this.btn_sign_i(), this.btn_look_i(), this.ico_title_i(), this.ico_sign_i(), this.ico_lastWeak_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarSignCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarSignCellSkin._skinParts;
                }
            );
            p.btn_look_i = function () {
                var t = new egret.gui.Button();
                this.btn_look = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_cakanjiai", skins.comp.Btn_3_24_Skin, 48, 66]);
                return t;
            };
            p.btn_sign_i = function () {
                var t = new egret.gui.Button();
                this.btn_sign = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_baomincanjia", skins.comp.Btn_3_24_Skin, 270, 66]);
                return t;
            };
            p.ico_lastWeak_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_lastWeak = t;
                this.__s(t, ["source", "x", "y"], ["ico_shangzoupaim", 7, 10]);
                return t;
            };
            p.ico_sign_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_sign = t;
                this.__s(t, ["source", "x", "y"], ["ico_yibaoming", 287, 23]);
                return t;
            };
            p.ico_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_zsyt", 9]);
                return t;
            };
            p.label_condition_i = function () {
                var t = new mo.gui.Label();
                this.label_condition = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [26, 16, "报名条件：%s级≤行会等级≤%s级", 38]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_dituxisl";
                return t;
            };
            GuildWarSignCellSkin._skinParts = ["label_condition", "btn_sign", "btn_look", "ico_title", "ico_sign", "ico_lastWeak"];
            return GuildWarSignCellSkin;
        })(egret.gui.Skin);
        game.GuildWarSignCellSkin = GuildWarSignCellSkin;
        egret.registerClass(GuildWarSignCellSkin,"skins.game.GuildWarSignCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
