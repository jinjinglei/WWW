var skins;
(function (skins) {
    var game;
    (function (game) {
        var VillianBattleSkin = (function (_super) {
            __extends(VillianBattleSkin, _super);
            function VillianBattleSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["currentState", "height", "width"], ["normal", 800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_title_i(), this.__4_i(), this.ico_avatar_i(), this.btn_close_i(), this.__7_i(), this.__11_i(), this.__12_i(), this.btn_attack_i(), this.__13_i(), this.__14_i(), this.label_guild_i(), this.label_combat_i(), this.list_items_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("elite", [])
                ];
            }
            var d = __define,c=VillianBattleSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return VillianBattleSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [139, 418]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__9_i(), this.__10_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zandoulig", 127, 360]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 21, 15, 1, 0x000000, "本关加成：全体攻击+10%（未激活）", "center", 0xFF0000, 300, 93, 396]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 21, 15, 1, 0x000000, "点击 角色头像装备或更换元婴", "center", 0x0092B7, 300, 97, 713]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "horizontalGap", "paddingLeft", "paddingRight", "requestedColumnCount", "requestedRowCount"], ["left", 10, 5, 10, 4, 5]);
                return t;
            };
            p.__16_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__17_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__18_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__19_i = function () {
                var t = {};
                t.label = "数据4";
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "scale9Grid", "source", "y"], [0.5, egret.gui.getScale9Grid("34,382,207,12"), "und_cenjieerren", 71]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_bengguanduishouditu", 62, 158]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "visible", "x", "y"], ["ntc_vip_1", false, 0, 1]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [1.5, 157]);
                t.layout = this.__6_i();
                t.elementsContent = [this.grp_vip_i(), this.label_name_i(), this.label_level_i()];
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.BasicLayout();
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("textColor", 0x3C9620);
                this.__s(t, ["source", "x", "y"], ["ico_xiaokuangsf", 0, 0]);
                return t;
            };
            p.btn_attack_i = function () {
                var t = new egret.gui.Button();
                this.btn_attack = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["tab_txt_tiaozang", "按钮", skins.comp.Btn_3_24_Skin, 193, 670]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 409, 126]);
                return t;
            };
            p.grp_vip_i = function () {
                var t = new egret.gui.Group();
                this.grp_vip = t;
                this.__s(t, ["bottom", "horizontalCenter", "x", "y"], [0, 0, 20, 20]);
                t.elementsContent = [this.__5_i(), this.label_vipLv_i()];
                return t;
            };
            p.ico_avatar_i = function () {
                var t = new g_base.RoleAvatar();
                this.ico_avatar = t;
                this.__s(t, ["scaleX", "scaleY", "skinName", "x", "y"], [0.9, 0.9, skins.game.RoleAvatarSkin, 250, 408]);
                return t;
            };
            p.ico_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [1, "tit_txt_bengguanduishou", 87]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_combat = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_12", "2222111111", 207, 368]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new egret.gui.Label();
                this.label_guild = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "visible", "y"], [4, 18, "[行会]", 0x9900CD, false, 132]);
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
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [150, skins.game.VillianHeroCellSkin, 400, 43, 459]);
                t.layout = this.__15_i();
                t.dataProvider = this.__21_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "stroke", "text", "textColor", "width", "x", "y"], ["宋体", 21, 15, 1, "当前达成连战场次：%s", 0x2AA30C, 180, 16, 5]);
                return t;
            };
            VillianBattleSkin._skinParts = ["ico_title", "ico_avatar", "btn_close", "label_vipLv", "grp_vip", "label_name", "label_level", "btn_attack", "label_guild", "label_combat", "list_items"];
            return VillianBattleSkin;
        })(egret.gui.Skin);
        game.VillianBattleSkin = VillianBattleSkin;
        egret.registerClass(VillianBattleSkin,"skins.game.VillianBattleSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
