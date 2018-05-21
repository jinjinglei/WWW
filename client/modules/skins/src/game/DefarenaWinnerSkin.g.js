var skins;
(function (skins) {
    var game;
    (function (game) {
        var DefarenaWinnerSkin = (function (_super) {
            __extends(DefarenaWinnerSkin, _super);
            function DefarenaWinnerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["currentState", "height", "width"], ["noAdmin", 800, 480]);
                this.elementsContent = [this.__3_i(), this.ico_avatar_i(), this.btn_close_i(), this.label_guild_i(), this.grp_userInfo_i(), this.btn_ok_i(), this.__10_i(), this.__11_i(), this.__14_i(), this.__17_i(), this.btn_rank_i(), this.label_openLvl_i(), this.img_title_i()];
                this.states = [
                    new egret.gui.State("hasAdmin", [
                        new egret.gui.SetProperty("__10", "visible", false),
                        new egret.gui.SetProperty("__11", "visible", false)
                    ]),
                    new egret.gui.State("noAdmin", [
                        new egret.gui.SetProperty("label_guild", "visible", false),
                        new egret.gui.SetProperty("grp_userInfo", "visible", false),
                        new egret.gui.SetProperty("btn_ok", "visible", false),
                        new egret.gui.SetProperty("__11", "visible", false),
                        new egret.gui.SetProperty("__14", "visible", false),
                        new egret.gui.SetProperty("btn_rank", "visible", false)
                    ])
                ];
            }
            var d = __define,c=DefarenaWinnerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return DefarenaWinnerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new mo.gui.Label();
                this.__11 = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "y"], ["楷体", 0, 18, 1, 0x3A2200, "虚伪以待", "left", 0xDDA600, 503]);
                return t;
            };
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "x", "y"], ["楷体", 18, 1, 0x3A2200, "战斗力:", "left", 0xDDA600, 0, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__14 = t;
                this.__s(t, ["width", "x", "y"], [180, 153, 503]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__12_i(), this.label_combat_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__16_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "x", "y"], ["楷体", 18, 1, 0x3A2200, "下次擂台赛开启:", "left", 0xDDA600, 0, 0]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0.5, 607]);
                t.layout = this.__15_i();
                t.elementsContent = [this.__16_i(), this.label_nextOpenTime_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "scale9Grid", "source", "y"], [0.5, egret.gui.getScale9Grid("34,382,207,12"), "und_bazhujieguo", 108]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_vip_1", 0, 1]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.__s(t, ["font", "name", "text", "x", "y"], ["num_7", "label_vipLvl", "3", 40, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "horizontalCenter", "name", "x", "y"], [0, 0, "grp_vip", 10, 10]);
                t.elementsContent = [this.__4_i(), this.__5_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "stroke", "strokeColor", "text", "x", "y"], ["label_name", 18, 1, 0x000000, "名字五个字", 0, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "stroke", "strokeColor", "text", "textColor", "x", "y"], ["label_level", 18, 1, 0x000000, "Lv.%s", 0xEBCA70, 97, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["horizontalAlign", "verticalAlign"], ["center", "middle"]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_Skin, 414, 128]);
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["horizontalCenter", "label", "skinName", "x", "y"], [1.5, "霸主特权", skins.comp.Btn_0_6_Skin, 10, 546]);
                return t;
            };
            p.btn_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_rank = t;
                this.__s(t, ["scaleX", "scaleY", "source", "x", "y"], [0.8, 0.8, "btn_shoulei_rank", 370, 261]);
                return t;
            };
            p.grp_userInfo_i = function () {
                var t = new egret.gui.Group();
                this.grp_userInfo = t;
                this.__s(t, ["width", "x", "y"], [272, 117, 222]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__6_i(), this.__7_i(), this.__8_i()];
                return t;
            };
            p.ico_avatar_i = function () {
                var t = new g_base.RoleAvatar();
                this.ico_avatar = t;
                this.__s(t, ["scaleX", "scaleY", "skinName", "x", "y"], [0.9, 0.9, skins.game.RoleAvatarSkin, 250, 485]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["source", "x", "y"], ["tit_txt_benjiebazhu", 176, 120]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new mo.gui.Label();
                this.label_combat = t;
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "x", "y"], ["楷体", 20, 1, 0x3A2200, "999", "left", 0xDDA600, 60, 0]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new egret.gui.Label();
                this.label_guild = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0.5, 20, "[行会]", 0xE76DF5, 189]);
                return t;
            };
            p.label_nextOpenTime_i = function () {
                var t = new mo.gui.Label();
                this.label_nextOpenTime = t;
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "textAlign", "textColor", "x", "y"], ["楷体", 18, 1, 0x3A2200, "left", 0xDDA600, 60, 0]);
                return t;
            };
            p.label_openLvl_i = function () {
                var t = new mo.gui.Label();
                this.label_openLvl = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "y"], ["楷体", 0, 18, 1, 0x3A2200, "%s级以上的玩家可以参加", "left", 0xDDA600, 637]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__10 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "btn_txt_g_xuweiyidai", 497]);
                return t;
            };
            DefarenaWinnerSkin._skinParts = ["ico_avatar", "btn_close", "label_guild", "grp_userInfo", "btn_ok", "label_combat", "label_nextOpenTime", "btn_rank", "label_openLvl", "img_title"];
            return DefarenaWinnerSkin;
        })(egret.gui.Skin);
        game.DefarenaWinnerSkin = DefarenaWinnerSkin;
        egret.registerClass(DefarenaWinnerSkin,"skins.game.DefarenaWinnerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
