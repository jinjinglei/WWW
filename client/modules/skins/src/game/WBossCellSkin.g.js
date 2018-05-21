var skins;
(function (skins) {
    var game;
    (function (game) {
        var WBossCellSkin = (function (_super) {
            __extends(WBossCellSkin, _super);
            function WBossCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [150, 420]);
                this.elementsContent = [this.__4_i(), this.img_highlight_i(), this.label_name_i(), this.img_boss_i(), this.img_dark_bg_i(), this.label_fightLeftTime_i(), this.label_challenge_time_i(), this.btn_go_i(), this.label_left_time_i(), this.label_settlement_i(), this.img_killed_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WBossCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return WBossCellSkin._skinParts;
                }
            );
            p.btn_go_i = function () {
                var t = new egret.gui.Button();
                this.btn_go = t;
                this.__s(t, ["icon", "skinName", "visible", "x", "y"], ["btn_txt_lijitiaozhan", skins.comp.Btn_3_22_Skin, false, 221, 66]);
                return t;
            };
            p.img_boss_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_boss = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [true, 124, "ico_mohuabianjiang", 120, 41, 6]);
                return t;
            };
            p.img_dark_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_dark_bg = t;
                this.__s(t, ["source", "x", "y"], ["panel_ditiaoying", 25, 107]);
                return t;
            };
            p.img_highlight_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_highlight = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [45, "ico_rank_bg_red", 217, 180, 18]);
                return t;
            };
            p.img_killed_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_killed = t;
                this.__s(t, ["source", "x", "y"], ["ico_yijisai", 230, 43]);
                return t;
            };
            p.label_challenge_time_i = function () {
                var t = new egret.gui.Label();
                this.label_challenge_time = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "x", "y"], [83, 18, "挑战时间:%s", "center", 0x04FF00, 250, 20, 98]);
                return t;
            };
            p.label_fightLeftTime_i = function () {
                var t = new egret.gui.Label();
                this.label_fightLeftTime = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "x", "y"], [-107, 18, "剩余时间:00:00:00", "center", 0xFF0004, 200, 10, 108]);
                return t;
            };
            p.label_left_time_i = function () {
                var t = new egret.gui.Label();
                this.label_left_time = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "visible", "width", "x", "y"], [50, 18, "剩余时间: 23:00:15", "center", 0x18D504, false, 176, 204, 80]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 20, 1, 0x000000, "(40级) xx武士", "center", 0xF2C65E, 200, 189, 30]);
                return t;
            };
            p.label_settlement_i = function () {
                var t = new egret.gui.Label();
                this.label_settlement = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "visible", "x", "y"], [22, 19, "结算中", "right", 0x18D504, false, 255, 58]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "x", "y"], [false, "ico_shijiebosstiaogd", 0, 0]);
                return t;
            };
            WBossCellSkin._skinParts = ["img_highlight", "label_name", "img_boss", "img_dark_bg", "label_fightLeftTime", "label_challenge_time", "btn_go", "label_left_time", "label_settlement", "img_killed"];
            return WBossCellSkin;
        })(egret.gui.Skin);
        game.WBossCellSkin = WBossCellSkin;
        egret.registerClass(WBossCellSkin,"skins.game.WBossCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
