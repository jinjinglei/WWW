var skins;
(function (skins) {
    var game;
    (function (game) {
        var PVPBattleSkin = (function (_super) {
            __extends(PVPBattleSkin, _super);
            function PVPBattleSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_title_i(), this.ico_avatar_i(), this.btn_close_i(), this.__6_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.label_guild_i()];
                this.states = [
                    new egret.gui.State("white", [
                        new egret.gui.SetProperty("__7", "x", 153),
                        new egret.gui.SetProperty("__7", "y", 52),
                        new egret.gui.SetProperty("__8", "x", 190),
                        new egret.gui.SetProperty("__8", "y", 48),
                        new egret.gui.SetProperty("__9", "y", 48),
                        new egret.gui.SetProperty("__9", "x", 40),
                        new egret.gui.SetProperty("label_jb", "y", 50),
                        new egret.gui.SetProperty("label_jb", "x", 42),
                        new egret.gui.SetProperty("label_exp", "x", 192),
                        new egret.gui.SetProperty("label_exp", "y", 50),
                        new egret.gui.SetProperty("__10", "y", 50),
                        new egret.gui.SetProperty("__10", "x", 12),
                        new egret.gui.SetProperty("__15", "visible", false),
                        new egret.gui.SetProperty("__16", "x", 100),
                        new egret.gui.SetProperty("__16", "y", 472),
                        new egret.gui.SetProperty("__17", "visible", false)
                    ]),
                    new egret.gui.State("red", [])
                ];
            }
            var d = __define,c=PVPBattleSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return PVPBattleSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 18, "几率获得系统奖励:", 0xEC069E, 0, 0]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [0, "middle"]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [2, 84]);
                t.layout = this.__12_i();
                t.elementsContent = [this.__11_i(), this.ico_item_i(), this.label_item_i()];
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "width", "y"], [0.5, 291, 455]);
                t.elementsContent = [this.__7_i(), this.__8_i(), this.__9_i(), this.label_jb_i(), this.label_exp_i(), this.__10_i(), this.btn_attack_i(), this.__13_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Label();
                this.__15 = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textColor", "x", "y"], ["宋体", 21, 18, 1, "可能掠夺：", 0xDDA600, 96, 476]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__16 = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textColor", "x", "y"], ["宋体", 21, 18, 1, "系统奖励：", 0xDDA600, 96, 505]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Label();
                this.__17 = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textColor", "x", "y"], ["宋体", 21, 18, 1, 0, "背包物品", 0xFF1D1D, 303, 475]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [510, 0.5, egret.gui.getScale9Grid("34,382,207,12"), "und_pwr", 377, 108]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "visible", "x", "y"], ["ntc_vip_1", false, 0, 1]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [1, 194]);
                t.layout = this.__5_i();
                t.elementsContent = [this.grp_vip_i(), this.label_name_i(), this.label_level_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__7 = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 15, "ico_exp", 32, 80, 54]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__8 = t;
                this.__s(t, ["source", "x", "y"], ["ico_aocao3", 123, 49]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__9 = t;
                this.__s(t, ["source", "x", "y"], ["ico_aocao3", 117, 18]);
                return t;
            };
            p.btn_attack_i = function () {
                var t = new egret.gui.Button();
                this.btn_attack = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0.5, "btn_txt_g_attack", "按钮", skins.comp.Btn_3_0_Skin, 114]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 364, 148]);
                return t;
            };
            p.grp_vip_i = function () {
                var t = new egret.gui.Group();
                this.grp_vip = t;
                this.__s(t, ["bottom", "horizontalCenter", "x", "y"], [0, 0, 20, 20]);
                t.elementsContent = [this.__4_i(), this.label_vipLv_i()];
                return t;
            };
            p.ico_avatar_i = function () {
                var t = new g_base.RoleAvatar();
                this.ico_avatar = t;
                this.__s(t, ["scaleX", "scaleY", "skinName", "x", "y"], [0.9, 0.9, skins.game.RoleAvatarSkin, 250, 445]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                this.__s(t, ["height", "width", "x", "y"], [22, 22, 159, 1]);
                return t;
            };
            p.ico_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_funjin", 124]);
                return t;
            };
            p.label_exp_i = function () {
                var t = new mo.gui.Label();
                this.label_exp = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "x", "y"], ["宋体", 20, "25000", "left", 16760832, 124, 50]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new egret.gui.Label();
                this.label_guild = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "visible", "y"], [0, 18, "[行会]", 0x9900CD, false, 169]);
                return t;
            };
            p.label_item_i = function () {
                var t = new egret.gui.Label();
                this.label_item = t;
                this.__s(t, ["bold", "size", "text", "textColor", "x", "y"], [true, 18, "物品名称", 0xEC069E, 170, 0]);
                return t;
            };
            p.label_jb_i = function () {
                var t = new mo.gui.Label();
                this.label_jb = t;
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["宋体", 20, "3000000", 16760832, 123, 20]);
                return t;
            };
            p.label_level_i = function () {
                var t = new egret.gui.Label();
                this.label_level = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "visible", "x", "y"], ["宋体", 18, "lv.999", "center", 0xF2E664, false, 33, 0]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "y"], ["宋体", 0, 18, "s2.神秘玩家", "center", 13750708, "middle", 0]);
                return t;
            };
            p.label_vipLv_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_vipLv = t;
                this.__s(t, ["font", "text", "visible", "x", "y"], ["num_7", "3", false, 40, 0]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__10 = t;
                this.__s(t, ["source", "x", "y"], ["ico_gold", 89, 20]);
                return t;
            };
            PVPBattleSkin._skinParts = ["ico_title", "ico_avatar", "btn_close", "label_vipLv", "grp_vip", "label_name", "label_level", "label_jb", "label_exp", "btn_attack", "ico_item", "label_item", "label_guild"];
            return PVPBattleSkin;
        })(egret.gui.Skin);
        game.PVPBattleSkin = PVPBattleSkin;
        egret.registerClass(PVPBattleSkin,"skins.game.PVPBattleSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
