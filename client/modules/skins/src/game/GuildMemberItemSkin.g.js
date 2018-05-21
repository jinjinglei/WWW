var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildMemberItemSkin = (function (_super) {
            __extends(GuildMemberItemSkin, _super);
            function GuildMemberItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.__5_i(), this.ico_head_i(), this.label_role_i(), this.label_mLv_i(), this.label_ennoble_i(), this.__6_i(), this.label_gongx_i(), this.label_attack_i(), this.__7_i(), this.__9_i(), this.label_loginDate_i(), this.right_rect_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildMemberItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildMemberItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["ico_bg_red", 153, 73, 62]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "verticalCenter", "x", "y"], [16, "行会贡献：", "center", 23, 245, 10]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalCenter", "x", "y"], [16, "战斗力：", "center", 0xEA9B1D, 25, 91, 10]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [80, 11]);
                t.layout = this.__8_i();
                t.elementsContent = [this.label_name_i(), this.label_level_i()];
                return t;
            };
            p.ico_head_i = function () {
                var t = new g_comp.Ico_Head();
                this.ico_head = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "verticalCenter", "x"], [-170.15, 0.9, 0.9, 0, 10]);
                return t;
            };
            p.label_attack_i = function () {
                var t = new egret.gui.Label();
                this.label_attack = t;
                this.__s(t, ["size", "text", "textColor", "verticalCenter", "x"], [16, "13000", 0xECAB1F, 25, 150]);
                return t;
            };
            p.label_ennoble_i = function () {
                var t = new egret.gui.Label();
                this.label_ennoble = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalCenter", "x", "y"], [16, "无爵位", "center", 0xF2EC9B, -2, 80, 10]);
                return t;
            };
            p.label_gongx_i = function () {
                var t = new egret.gui.Label();
                this.label_gongx = t;
                this.__s(t, ["size", "text", "textAlign", "verticalCenter", "x"], [16, "325023", "center", 23, 320]);
                return t;
            };
            p.label_level_i = function () {
                var t = new egret.gui.Label();
                this.label_level = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "Lv.120", 0xF2EC9B, 101, 1]);
                return t;
            };
            p.label_loginDate_i = function () {
                var t = new egret.gui.Label();
                this.label_loginDate = t;
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [16, "在线", 0xF2EC9B, 141, 272, 11]);
                return t;
            };
            p.label_mLv_i = function () {
                var t = new egret.gui.Label();
                this.label_mLv = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "verticalCenter", "x", "y"], [16, "无会员等级", "center", 0xF2EC9B, -2, 143, 20]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "x", "y"], [16, "屁啦的短发额", "center", 0xF2EC9B, 0, 0]);
                return t;
            };
            p.label_role_i = function () {
                var t = new egret.gui.Label();
                this.label_role = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [16, 1, 0, "副会长", 0xF9BE1D, 9, 11]);
                return t;
            };
            p.right_rect_i = function () {
                var t = new egret.gui.UIAsset();
                this.right_rect = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [90, "touch_rect", 336, 81, 5]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "y"], [100, egret.gui.getScale9Grid("17,11,373,103"), "panel_arena_item_bg", 424, 0]);
                return t;
            };
            GuildMemberItemSkin._skinParts = ["ico_head", "label_role", "label_mLv", "label_ennoble", "label_gongx", "label_attack", "label_name", "label_level", "label_loginDate", "right_rect"];
            return GuildMemberItemSkin;
        })(egret.gui.Skin);
        game.GuildMemberItemSkin = GuildMemberItemSkin;
        egret.registerClass(GuildMemberItemSkin,"skins.game.GuildMemberItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
