var skins;
(function (skins) {
    var game;
    (function (game) {
        var PVPSelfInfoSkin = (function (_super) {
            __extends(PVPSelfInfoSkin, _super);
            function PVPSelfInfoSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_light_i(), this.__4_i(), this.grp_pk_i(), this.__8_i(), this.__9_i(), this.bar_pk_i(), this.__10_i(), this.label_pkYellow_i(), this.__11_i(), this.label_pkRed_i(), this.__12_i(), this.label_name_i(), this.__13_i(), this.label_pkAddDesc_i(), this.__14_i(), this.__15_i(), this.label_myKillValue_i(), this.btn_rank_i(), this.btn_log_i(), this.__16_i(), this.__17_i(), this.ico_role_i(), this.ico_red_i(), this.label_noExpTip_i(), this.btn_clearRedPoint_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=PVPSelfInfoSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return PVPSelfInfoSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_circle", 378, 370]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["avatar_bg", 50, 181]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["宋体", 20, "PK积分", 0xE78932, 339, 187]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["scale9Grid", "source", "x", "y"], [egret.gui.getScale9Grid("11,3,68,20"), "ico_aocao3", 344, 226]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_cup", 319, 220]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [35, "ico_circle", 35, 50, 379]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "x", "y"], ["黑体", 24, "0", "center", 14013880, "middle", 60, 384]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "visible", "width", "y"], [441, 0.5, "s9g_dlg_1", false, 399, 180]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [137, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 420, 30, 296]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_itembox", -59, -60]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["txt_btn_red_name", 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0.5, -47]);
                t.elementsContent = [this.__6_i(), this.label_pk_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [109, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 420, 30, 166]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "scale9Grid", "source", "width", "y"], [0, egret.gui.getScale9Grid("33,32,20,7"), "ico_pk_bg", 420, 453]);
                return t;
            };
            p.bar_pk_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_pk = t;
                this.__s(t, ["scaleX", "skinName", "value", "width", "x", "y"], [1.05, skins.comp.Bar_5_0_Skin, 60, 328, 60, 382]);
                return t;
            };
            p.btn_clearRedPoint_i = function () {
                var t = new egret.gui.Button();
                this.btn_clearRedPoint = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["txt_btn_clear_red_point", "按钮", skins.comp.Btn_3_3_Skin, 337, 469]);
                return t;
            };
            p.btn_log_i = function () {
                var t = new egret.gui.Button();
                this.btn_log = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_fightrecord", skins.comp.Btn_3_6_Skin, 270, 615]);
                return t;
            };
            p.btn_rank_i = function () {
                var t = new egret.gui.Button();
                this.btn_rank = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_rank", skins.comp.Btn_3_6_Skin, 36, 615]);
                return t;
            };
            p.grp_pk_i = function () {
                var t = new egret.gui.Group();
                this.grp_pk = t;
                this.__s(t, ["height", "width", "x", "y"], [1, 1, 401, 373]);
                t.elementsContent = [this.__5_i(), this.__7_i()];
                return t;
            };
            p.ico_light_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_light = t;
                this.__s(t, ["source", "x", "y"], ["ico_shine", 54, 345]);
                return t;
            };
            p.ico_red_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_red = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 424, 606]);
                return t;
            };
            p.ico_role_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_role = t;
                this.__s(t, ["source", "x", "y"], ["avatar_1_0_0", 61, 191]);
                return t;
            };
            p.label_myKillValue_i = function () {
                var t = new egret.gui.Label();
                this.label_myKillValue = t;
                this.__s(t, ["fontFamily", "height", "right", "size", "text", "textAlign", "textColor", "verticalAlign", "y"], ["黑体", 25, 50, 24, "175", "right", 14013880, "middle", 227]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "left", "size", "text", "textColor", "y"], ["宋体", 136, 22, "玩家名字", 16770048, 206]);
                return t;
            };
            p.label_noExpTip_i = function () {
                var t = new egret.gui.Label();
                this.label_noExpTip = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [-2.5, 18, "每天主动寻找对手%s次后将不再获得经验奖励", 0xF3A853, 566]);
                return t;
            };
            p.label_pkAddDesc_i = function () {
                var t = new mo.gui.Label();
                this.label_pkAddDesc = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 24, 20, "掠夺奖励+50%", "left", 14013880, 282, 44, 474]);
                return t;
            };
            p.label_pkRed_i = function () {
                var t = new egret.gui.Label();
                this.label_pkRed = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "x", "y"], ["黑体", 24, "100", "center", 16646156, "middle", 385, 385]);
                return t;
            };
            p.label_pkYellow_i = function () {
                var t = new egret.gui.Label();
                this.label_pkYellow = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "x", "y"], ["黑体", 24, "60", "center", 16770048, "middle", 245, 386]);
                return t;
            };
            p.label_pk_i = function () {
                var t = new mo.gui.Label();
                this.label_pk = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "verticalAlign", "x", "y"], ["黑体", 18, "999", "center", 0xF5B03A, "middle", 65, 1]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [45, "ico_circle", 45, 236, 375]);
                return t;
            };
            PVPSelfInfoSkin._skinParts = ["ico_light", "label_pk", "grp_pk", "bar_pk", "label_pkYellow", "label_pkRed", "label_name", "label_pkAddDesc", "label_myKillValue", "btn_rank", "btn_log", "ico_role", "ico_red", "label_noExpTip", "btn_clearRedPoint"];
            return PVPSelfInfoSkin;
        })(egret.gui.Skin);
        game.PVPSelfInfoSkin = PVPSelfInfoSkin;
        egret.registerClass(PVPSelfInfoSkin,"skins.game.PVPSelfInfoSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
