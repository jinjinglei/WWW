var skins;
(function (skins) {
    var game;
    (function (game) {
        var RankSkin = (function (_super) {
            __extends(RankSkin, _super);
            function RankSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.tab_rank_i(), this.__20_i(), this.__28_i(), this.list_ranks_i(), this.__35_i(), this.__36_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RankSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RankSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = {};
                t.label = "btn_txt_rank_6";
                return t;
            };
            p.__12_i = function () {
                var t = {};
                t.label = "btn_txt_rank_7";
                return t;
            };
            p.__13_i = function () {
                var t = {};
                t.label = "btn_txt_rank_8";
                return t;
            };
            p.__14_i = function () {
                var t = {};
                t.label = "btn_txt_rank_9";
                return t;
            };
            p.__15_i = function () {
                var t = {};
                t.label = "btn_txt_rank_13";
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i()];
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("33,22,198,40"), "ico_rank_tile_bg", 0]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "stroke", "strokeColor", "text", "textColor", "y"], [0, 20, 1, 0x000000, "我的排名", 0xEBCA70, 89]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [224, 116, 9, 469]);
                t.elementsContent = [this.__18_i(), this.__19_i(), this.label_rankByDesc_i(), this.label_rank_i(), this.label_rankBy_i(), this.ico_rank_i(), this.ico_head_i()];
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "scale9Grid", "source", "top"], [0, 0, 0, egret.gui.getScale9Grid("33,22,198,40"), "ico_rank_tile_bg", 0]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "height", "horizontalCenter", "source", "width"], [3, 30, 0.5, "ico_rank_bg_0", 218]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "scale9Grid", "source", "width", "y"], [0, egret.gui.getScale9Grid("18,14,64,5"), "panel_recharge_bg", 120, 6]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [48, "ico_arena_1st", 52, 4, 5]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_vip_1", 0, 1]);
                return t;
            };
            p.__26_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [3, "middle"]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 40]);
                t.layout = this.__26_i();
                t.elementsContent = [this.grp_vipFirst_i(), this.label_nameFirst_i(), this.label_levelFirst_i()];
                return t;
            };
            p.__28_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [206, 345, 131, 85]);
                t.elementsContent = [this.__21_i(), this.__22_i(), this.ico_avatarFirst_i(), this.ico_bgRed_i(), this.label_rankByFirst_i(), this.__23_i(), this.__24_i(), this.ico_rankNameFirst_i(), this.__27_i()];
                return t;
            };
            p.__29_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__30_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__31_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__29_i(), this.__30_i(), this.__31_i()];
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.VerticalLayout();
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_rank_title", 9]);
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_rank_per_hour", 688]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source"], [0.5, "bg_paihangbang"]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "visible", "y"], [611, 0, egret.gui.getScale9Grid("50,8,306,54"), "ico_rank_bg_black", false, 72]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.VerticalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [6, "center"]);
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "btn_txt_rank_2";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "btn_txt_rank_1";
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "btn_txt_rank_4";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x"], ["btn_back", 410]);
                return t;
            };
            p.grp_vipFirst_i = function () {
                var t = new egret.gui.Group();
                this.grp_vipFirst = t;
                this.__s(t, ["bottom", "horizontalCenter", "x", "y"], [0, 0, 10, 10]);
                t.elementsContent = [this.__25_i(), this.label_vipLvFirst_i()];
                return t;
            };
            p.ico_avatarFirst_i = function () {
                var t = new g_base.RoleAvatar();
                this.ico_avatarFirst = t;
                this.__s(t, ["scaleX", "scaleY", "skinName", "x", "y"], [0.55, 0.55, skins.game.RoleAvatarSkin, 173, 196]);
                return t;
            };
            p.ico_bgRed_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_bgRed = t;
                this.__s(t, ["bottom", "horizontalCenter", "source", "width"], [3, 10.5, "ico_rank_bg_red", 200]);
                return t;
            };
            p.ico_head_i = function () {
                var t = new g_comp.Ico_Head();
                this.ico_head = t;
                this.__s(t, ["horizontalCenter", "y"], [0.5, 11]);
                return t;
            };
            p.ico_rankNameFirst_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rankNameFirst = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_rank_name_1", 8]);
                return t;
            };
            p.ico_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rank = t;
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [48, 0.5, "ico_arena_1st", 52, 111]);
                return t;
            };
            p.label_levelFirst_i = function () {
                var t = new mo.gui.Label();
                this.label_levelFirst = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "textColor", "x", "y"], [18, 1, 0x000000, "lv.99", 0xEBCA70, 97, 0]);
                return t;
            };
            p.label_nameFirst_i = function () {
                var t = new mo.gui.Label();
                this.label_nameFirst = t;
                this.__s(t, ["size", "stroke", "strokeColor", "text", "x", "y"], [18, 1, 0, "名字五个字五个字字", 0, 0]);
                return t;
            };
            p.label_rankByDesc_i = function () {
                var t = new egret.gui.Label();
                this.label_rankByDesc = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0.5, 20, "战斗力", 0xEBCA70, 163]);
                return t;
            };
            p.label_rankByFirst_i = function () {
                var t = new egret.gui.Label();
                this.label_rankByFirst = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "strokeColor", "text", "textColor", "y"], [10.5, 18, 1, 0x000000, "战斗力: 9999", 0xEBCA70, 175]);
                return t;
            };
            p.label_rankBy_i = function () {
                var t = new egret.gui.Label();
                this.label_rankBy = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0.5, 20, "0000", 0xEBCA70, 185]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new egret.gui.Label();
                this.label_rank = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0.5, 20, "0000", 112]);
                return t;
            };
            p.label_vipLvFirst_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_vipLvFirst = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "3", 40, 0]);
                return t;
            };
            p.list_ranks_i = function () {
                var t = new egret.gui.List();
                this.list_ranks = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [377, skins.game.RankItemSkin, 345, 131, 296]);
                t.layout = this.__34_i();
                t.dataProvider = this.__33_i();
                return t;
            };
            p.__10_i = function () {
                var t = {};
                t.label = "btn_txt_rank_5";
                return t;
            };
            p.tab_rank_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_rank = t;
                this.__s(t, ["itemRendererSkinName", "skinName", "x", "y"], [skins.comp.TabBarBtn_3_Skin, skins.comp.TabBar_3_Skin, -3, 84]);
                t.layout = this.__6_i();
                t.dataProvider = this.__17_i();
                return t;
            };
            RankSkin._skinParts = ["tab_rank", "label_rankByDesc", "label_rank", "label_rankBy", "ico_rank", "ico_head", "ico_avatarFirst", "ico_bgRed", "label_rankByFirst", "ico_rankNameFirst", "label_vipLvFirst", "grp_vipFirst", "label_nameFirst", "label_levelFirst", "list_ranks", "btn_close"];
            return RankSkin;
        })(egret.gui.Skin);
        game.RankSkin = RankSkin;
        egret.registerClass(RankSkin,"skins.game.RankSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
