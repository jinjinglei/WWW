var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarDefSettingSkin = (function (_super) {
            __extends(GuildWarDefSettingSkin, _super);
            function GuildWarDefSettingSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.btn_close_i(), this.__9_i(), this.__10_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarDefSettingSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarDefSettingSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "und_tongyongdiban", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_cenmengshouweiditu", 24, 77]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [232, 75, 119]);
                t.elementsContent = [this.bar_defHp0_i(), this.label_defName0_i(), this.ico_defFace0_i(), this.ico_defBreak0_i(), this.btn_defUp0_i(), this.btn_defDown0_i(), this.ico_noRole0_i()];
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [232, 232, 119]);
                t.elementsContent = [this.bar_defHp1_i(), this.label_defName1_i(), this.ico_defFace1_i(), this.ico_defBreak1_i(), this.btn_defUp1_i(), this.btn_defDown1_i(), this.ico_noRole1_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [232, 75, 355]);
                t.elementsContent = [this.bar_defHp2_i(), this.label_defName2_i(), this.ico_defFace2_i(), this.ico_defBreak2_i(), this.btn_defUp2_i(), this.btn_defDown2_i(), this.ico_noRole2_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [232, 232, 355]);
                t.elementsContent = [this.bar_defHp3_i(), this.label_defName3_i(), this.ico_defFace3_i(), this.ico_defBreak3_i(), this.btn_defUp3_i(), this.btn_defDown3_i(), this.ico_noRole3_i()];
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_cenmengshouweil", 175, 39]);
                return t;
            };
            p.bar_defHp0_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_defHp0 = t;
                this.__s(t, ["horizontalCenter", "maximum", "skinName", "value"], [0, 100, skins.comp.Bar_Guild_War_Hp_Skin, 50]);
                return t;
            };
            p.bar_defHp1_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_defHp1 = t;
                this.__s(t, ["horizontalCenter", "maximum", "skinName", "value"], [0, 100, skins.comp.Bar_Guild_War_Hp_Skin, 50]);
                return t;
            };
            p.bar_defHp2_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_defHp2 = t;
                this.__s(t, ["horizontalCenter", "maximum", "skinName", "value"], [0, 100, skins.comp.Bar_Guild_War_Hp_Skin, 50]);
                return t;
            };
            p.bar_defHp3_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_defHp3 = t;
                this.__s(t, ["horizontalCenter", "maximum", "skinName", "value"], [0, 100, skins.comp.Bar_Guild_War_Hp_Skin, 50]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 424, 51]);
                return t;
            };
            p.btn_defDown0_i = function () {
                var t = new egret.gui.Button();
                this.btn_defDown0 = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [0.5, "btn_txt_g_xiazeng", skins.comp.Btn_3_0_Skin, 10, 173]);
                return t;
            };
            p.btn_defDown1_i = function () {
                var t = new egret.gui.Button();
                this.btn_defDown1 = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [0.5, "btn_txt_g_xiazeng", skins.comp.Btn_3_0_Skin, 10, 173]);
                return t;
            };
            p.btn_defDown2_i = function () {
                var t = new egret.gui.Button();
                this.btn_defDown2 = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [0.5, "btn_txt_g_xiazeng", skins.comp.Btn_3_0_Skin, 10, 173]);
                return t;
            };
            p.btn_defDown3_i = function () {
                var t = new egret.gui.Button();
                this.btn_defDown3 = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [0.5, "btn_txt_g_xiazeng", skins.comp.Btn_3_0_Skin, 10, 173]);
                return t;
            };
            p.btn_defUp0_i = function () {
                var t = new egret.gui.Button();
                this.btn_defUp0 = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0.5, "btn_txt_g_shangzeng", skins.comp.Btn_3_0_Skin, 173]);
                return t;
            };
            p.btn_defUp1_i = function () {
                var t = new egret.gui.Button();
                this.btn_defUp1 = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0.5, "btn_txt_g_shangzeng", skins.comp.Btn_3_0_Skin, 173]);
                return t;
            };
            p.btn_defUp2_i = function () {
                var t = new egret.gui.Button();
                this.btn_defUp2 = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0.5, "btn_txt_g_shangzeng", skins.comp.Btn_3_0_Skin, 173]);
                return t;
            };
            p.btn_defUp3_i = function () {
                var t = new egret.gui.Button();
                this.btn_defUp3 = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0.5, "btn_txt_g_shangzeng", skins.comp.Btn_3_0_Skin, 173]);
                return t;
            };
            p.ico_defBreak0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_defBreak0 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_yijipao", -11]);
                return t;
            };
            p.ico_defBreak1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_defBreak1 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_yijipao", -11]);
                return t;
            };
            p.ico_defBreak2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_defBreak2 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_yijipao", -11]);
                return t;
            };
            p.ico_defBreak3_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_defBreak3 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_yijipao", -11]);
                return t;
            };
            p.ico_defFace0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_defFace0 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "avatar_1_1_0", 83]);
                return t;
            };
            p.ico_defFace1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_defFace1 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "avatar_1_1_0", 83]);
                return t;
            };
            p.ico_defFace2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_defFace2 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "avatar_1_1_0", 83]);
                return t;
            };
            p.ico_defFace3_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_defFace3 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "avatar_1_1_0", 83]);
                return t;
            };
            p.ico_noRole0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_noRole0 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_wurenshouwei", 0]);
                return t;
            };
            p.ico_noRole1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_noRole1 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_wurenshouwei", 0]);
                return t;
            };
            p.ico_noRole2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_noRole2 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_wurenshouwei", 0]);
                return t;
            };
            p.ico_noRole3_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_noRole3 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "ico_wurenshouwei", 0]);
                return t;
            };
            p.label_defName0_i = function () {
                var t = new egret.gui.Label();
                this.label_defName0 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "s123.玩家名字六字", 0x10B2CF, 152]);
                return t;
            };
            p.label_defName1_i = function () {
                var t = new egret.gui.Label();
                this.label_defName1 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "s123.玩家名字六字", 0x10B2CF, 152]);
                return t;
            };
            p.label_defName2_i = function () {
                var t = new egret.gui.Label();
                this.label_defName2 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "s123.玩家名字六字", 0x10B2CF, 152]);
                return t;
            };
            p.label_defName3_i = function () {
                var t = new egret.gui.Label();
                this.label_defName3 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "s123.玩家名字六字", 0x10B2CF, 152]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "y"], [0, 18, "点击上阵进行守卫，守卫时无法进攻\n点击下阵取消守卫城门\n下阵后5秒内无法再次上阵", "center", 0x4EABFD, 655]);
                return t;
            };
            GuildWarDefSettingSkin._skinParts = ["bar_defHp0", "label_defName0", "ico_defFace0", "ico_defBreak0", "btn_defUp0", "btn_defDown0", "ico_noRole0", "bar_defHp1", "label_defName1", "ico_defFace1", "ico_defBreak1", "btn_defUp1", "btn_defDown1", "ico_noRole1", "bar_defHp2", "label_defName2", "ico_defFace2", "ico_defBreak2", "btn_defUp2", "btn_defDown2", "ico_noRole2", "bar_defHp3", "label_defName3", "ico_defFace3", "ico_defBreak3", "btn_defUp3", "btn_defDown3", "ico_noRole3", "btn_close"];
            return GuildWarDefSettingSkin;
        })(egret.gui.Skin);
        game.GuildWarDefSettingSkin = GuildWarDefSettingSkin;
        egret.registerClass(GuildWarDefSettingSkin,"skins.game.GuildWarDefSettingSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
