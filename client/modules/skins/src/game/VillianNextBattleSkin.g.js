var skins;
(function (skins) {
    var game;
    (function (game) {
        var VillianNextBattleSkin = (function (_super) {
            __extends(VillianNextBattleSkin, _super);
            function VillianNextBattleSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["currentState", "height", "width"], ["normal", 800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_title_i(), this.ico_avatar_i(), this.btn_close_i(), this.label_guild_i(), this.btn_stop_i(), this.__6_i(), this.__10_i(), this.__14_i(), this.__19_i(), this.__21_i(), this.__28_i()];
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.SetProperty("__23", "y", 50),
                        new egret.gui.SetProperty("__23", "x", 12),
                        new egret.gui.SetProperty("__24", "visible", false),
                        new egret.gui.SetProperty("__25", "x", 100),
                        new egret.gui.SetProperty("__25", "y", 472),
                        new egret.gui.SetProperty("__26", "visible", false)
                    ]),
                    new egret.gui.State("elite", [])
                ];
            }
            var d = __define,c=VillianNextBattleSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VillianNextBattleSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textColor", "width", "x", "y"], ["宋体", 21, 15, 1, "战斗胜利！是否发起连战？", 0xF8F5ED, 250, 16, 5]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textColor", "width", "x", "y"], ["宋体", 21, 15, 1, "队伍剩余生命值总量：70%", 0xF8F5ED, 250, 16, 32]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [131, 516]);
                t.layout = this.__11_i();
                t.elementsContent = [this.__12_i(), this.__13_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zandoulig", 81, 14]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 21, 15, 1, 0x000000, "（每次使用惩戒降低%s战力,最低降至%1）", "center", 0xF6F3F3, 300, 46, 49]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_lianzanjiangli", 298, 67]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "top", "width"], [70, 46, 371, 400]);
                t.layout = this.__15_i();
                t.elementsContent = [this.__16_i(), this.__17_i(), this.label_combat_i(), this.__18_i()];
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [110, 599]);
                t.layout = this.__20_i();
                t.elementsContent = [this.btn_discipline_i(), this.btn_attack_i()];
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__23 = t;
                this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.9, 0.9, "ico_gold_yuanb", 76, 29]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Label();
                this.__24 = t;
                this.__s(t, ["fontFamily", "height", "lineSpacing", "size", "stroke", "text", "textColor", "width", "x", "y"], ["宋体", 50, 10, 15, 1, "   今日剩余         尝试：%s", 0xFFFFFF, 150, 198, 29]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.Label();
                this.__25 = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textColor", "x", "y"], ["宋体", 21, 15, 1, "本次消耗：", 0xF8F5ED, 0, 29]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.Label();
                this.__26 = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textColor", "x", "y"], ["宋体", 21, 15, 1, 0, "1000", 0xF6F3F3, 101, 29]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textColor", "x", "y"], ["宋体", 21, 15, 1, 0x000000, "今日已使用惩戒%s次", 0xF6F3F3, 4, 54]);
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [79, 609]);
                t.layout = this.__22_i();
                t.elementsContent = [this.__23_i(), this.__24_i(), this.__25_i(), this.__26_i(), this.__27_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "scale9Grid", "source", "y"], [0.5, egret.gui.getScale9Grid("34,382,207,12"), "und_cenjieerren", 108]);
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
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xiaokuangsf", 0, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textColor", "width", "x", "y"], ["宋体", 21, 15, 1, "当前达成连战场次：%s", 0xF8F5ED, 180, 16, 5]);
                return t;
            };
            p.btn_attack_i = function () {
                var t = new egret.gui.Button();
                this.btn_attack = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["tab_txt_tiaozang", "按钮", skins.comp.Btn_3_24_Skin, 167, 0]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 392, 159]);
                return t;
            };
            p.btn_discipline_i = function () {
                var t = new egret.gui.Button();
                this.btn_discipline = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["tab_txt_chengjiesg", "按钮", skins.comp.Btn_3_44_Skin, 0, 0]);
                return t;
            };
            p.btn_stop_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_stop = t;
                this.__s(t, ["source", "x", "y"], ["ico_zantintiaozan", 63, 168]);
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
            p.ico_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_xiageerrengus", 120]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_combat = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_12", "2222111111", 163, 23]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new egret.gui.Label();
                this.label_guild = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "visible", "y"], [0, 18, "[行会]", 0x9900CD, false, 169]);
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
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [129, 454]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__8_i(), this.__9_i()];
                return t;
            };
            VillianNextBattleSkin._skinParts = ["ico_title", "ico_avatar", "btn_close", "label_guild", "btn_stop", "label_vipLv", "grp_vip", "label_name", "label_level", "label_combat", "btn_discipline", "btn_attack"];
            return VillianNextBattleSkin;
        })(egret.gui.Skin);
        game.VillianNextBattleSkin = VillianNextBattleSkin;
        egret.registerClass(VillianNextBattleSkin,"skins.game.VillianNextBattleSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
