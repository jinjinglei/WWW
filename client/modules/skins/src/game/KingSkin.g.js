var skins;
(function (skins) {
    var game;
    (function (game) {
        var KingSkin = (function (_super) {
            __extends(KingSkin, _super);
            function KingSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.label_open_i(), this.tab_king_i(), this.btn_help_i(), this.btn_close_i(), this.grp_king_i(), this.grp_cloak_i(), this.grp_welfare_i(), this.grp_rankReward_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=KingSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return KingSkin._skinParts;
                }
            );
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_disb", 37]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_vip_0", 0, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [64, 40]);
                t.elementsContent = [this.__13_i(), this.label_king_vip_i()];
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [100, 86, -5, 400]);
                t.elementsContent = [this.ico_king_buff_i(), this.label_king_time_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "panel_ditu3", -10]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_pifeng", 14, 88]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["btn_txt_g_shuxinjiac", 243, 25]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_hengtiao", 201, 58]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_btq", 172, 194]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_ditu3", 0, -10]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_bazhuhanghui", 20]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "width", "x", "y"], [0, "panel_recharge_bg", 200, 10, 79]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 19, "霸主所在行会成员，每日可领取", 0xDCBC99, 30, 161]);
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0.5, 19, "霸主未加入任何行会", 0xDCBC99, 95]);
                return t;
            };
            p.__26_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "霸主每日可领取", 0xDCBC99, 130]);
                return t;
            };
            p.__27_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "ico_meirikeling", 10, 205]);
                return t;
            };
            p.__28_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__29_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__30_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__28_i(), this.__29_i(), this.__30_i()];
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [14, "在王城擂台赛中每次参与挑战或守擂即可获得", 0xC6BD21, 97, 577]);
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_jianglisuoming", -13]);
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_wangcengcanyujiang", 464]);
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_shouleipaihangjiang", 12]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_wancengbazhu", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_wancenbazu", 18]);
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "tab_txt_bazhutequan";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "tab_txt_wangzepifeng";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "tab_txt_xiongdifuli";
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "tab_txt_saisijianglig";
                return t;
            };
            p.bar_king_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_king = t;
                this.__s(t, ["horizontalCenter", "skinName", "y"], [0, skins.comp.Bar_5_0_Skin, 347]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 1]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 1, 1]);
                return t;
            };
            p.btn_king_i = function () {
                var t = new egret.gui.Button();
                this.btn_king = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "ico_kaiqi", "按钮", skins.comp.Btn_3_6_Skin, 413]);
                return t;
            };
            p.btn_welfare_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_welfare_get = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "x", "y"], [0.5, "ico_lingqu", "按钮", skins.comp.Btn_3_6_Skin, 10, 397]);
                return t;
            };
            p.grp_cloak_i = function () {
                var t = new egret.gui.Group();
                this.grp_cloak = t;
                this.__s(t, ["height", "horizontalCenter", "visible", "width", "y"], [600, 0, false, 400, 150]);
                t.elementsContent = [this.__16_i(), this.__17_i(), this.__18_i(), this.__19_i(), this.__20_i(), this.label_cloak_props_i(), this.label_cloak_des_i()];
                return t;
            };
            p.grp_king_i = function () {
                var t = new egret.gui.Group();
                this.grp_king = t;
                this.__s(t, ["height", "horizontalCenter", "visible", "width", "y"], [600, 0, false, 400, 150]);
                t.elementsContent = [this.ico_king_avatar_i(), this.icon_king_guild_bg_i(), this.label_king_guild_i(), this.__12_i(), this.__14_i(), this.label_king_name_i(), this.label_king_lv_i(), this.label_king_worship_num_i(), this.bar_king_i(), this.label_king_bar_worship_num_i(), this.label_king_open_num_i(), this.label_king_my_worship_num_i(), this.__15_i(), this.btn_king_i(), this.label_king_today_open_num_i(), this.label_king_worship_award_i(), this.label_king_worship_award_num_i(), this.icon_king_worship_award_i(), this.label_king_worshiped_i(), this.label_king_des1_i(), this.label_king_des2_i()];
                return t;
            };
            p.grp_rankReward_i = function () {
                var t = new egret.gui.Group();
                this.grp_rankReward = t;
                this.__s(t, ["height", "width", "x", "y"], [607, 419, 40, 152]);
                t.elementsContent = [this.list_items_i(), this.item_reward_i(), this.label_desc_i(), this.__33_i(), this.__34_i(), this.__35_i(), this.__36_i()];
                return t;
            };
            p.grp_welfare_i = function () {
                var t = new egret.gui.Group();
                this.grp_welfare = t;
                this.__s(t, ["height", "horizontalCenter", "visible", "width", "y"], [600, 0, false, 400, 150]);
                t.elementsContent = [this.__21_i(), this.__22_i(), this.grp_welfare_sub1_i(), this.grp_welfare_sub2_i(), this.__27_i(), this.ico_welfare_item_0_i(), this.ico_welfare_item_1_i(), this.ico_welfare_item_2_i(), this.ico_welfare_item_3_i(), this.label_welfare_no_get_i(), this.btn_welfare_get_i(), this.ico_welfare_geted_i()];
                return t;
            };
            p.grp_welfare_sub1_i = function () {
                var t = new egret.gui.Group();
                this.grp_welfare_sub1 = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [600, 0, 400, 0]);
                t.elementsContent = [this.__23_i(), this.label_welfare_guild_i(), this.__24_i()];
                return t;
            };
            p.grp_welfare_sub2_i = function () {
                var t = new egret.gui.Group();
                this.grp_welfare_sub2 = t;
                this.__s(t, ["height", "visible", "width", "x", "y"], [600, false, 400, 0, 0]);
                t.elementsContent = [this.__25_i(), this.__26_i()];
                return t;
            };
            p.ico_king_avatar_i = function () {
                var t = new g_base.RoleAvatar();
                this.ico_king_avatar = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "skinName", "y"], [0.4000000000000057, 0.8, 0.8, skins.game.RoleAvatarSkin, 289]);
                return t;
            };
            p.ico_king_buff_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_king_buff = t;
                this.__s(t, ["horizontalCenter", "x", "y"], [0, 10, 6]);
                return t;
            };
            p.ico_welfare_geted_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_welfare_geted = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_yilinqu", 397]);
                return t;
            };
            p.ico_welfare_item_0_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_welfare_item_0 = t;
                this.__s(t, ["x", "y"], [20, 251]);
                return t;
            };
            p.ico_welfare_item_1_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_welfare_item_1 = t;
                this.__s(t, ["x", "y"], [110, 251]);
                return t;
            };
            p.ico_welfare_item_2_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_welfare_item_2 = t;
                this.__s(t, ["x", "y"], [200, 251]);
                return t;
            };
            p.ico_welfare_item_3_i = function () {
                var t = new g_comp.Ico_Item();
                this.ico_welfare_item_3 = t;
                this.__s(t, ["x", "y"], [290, 251]);
                return t;
            };
            p.icon_king_guild_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.icon_king_guild_bg = t;
                this.__s(t, ["horizontalCenter", "source", "width", "x", "y"], [0, "ico_disb", 200, 10, 6]);
                return t;
            };
            p.icon_king_worship_award_i = function () {
                var t = new egret.gui.UIAsset();
                this.icon_king_worship_award = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [35, "ico_gold_2", 35, 200, 471]);
                return t;
            };
            p.item_reward_i = function () {
                var t = new g_comp.Ico_Item();
                this.item_reward = t;
                this.__s(t, ["x", "y"], [16, 513]);
                return t;
            };
            p.label_cloak_des_i = function () {
                var t = new mo.gui.Label();
                this.label_cloak_des = t;
                this.__s(t, ["height", "lineSpacing", "size", "stroke", "text", "textColor", "width", "x", "y"], [120, 10, 17, 1, "简介", 0xFFFFFF, 380, 11, 434]);
                return t;
            };
            p.label_cloak_props_i = function () {
                var t = new mo.gui.Label();
                this.label_cloak_props = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "width", "x", "y"], [300, 20, 20, "说明", 200, 232, 85]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "width", "x", "y"], [18, "标签", 295, 97, 515]);
                return t;
            };
            p.label_king_bar_worship_num_i = function () {
                var t = new mo.gui.Label();
                this.label_king_bar_worship_num = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 18, "400/500", 0xFFFFFF, 350]);
                return t;
            };
            p.label_king_des1_i = function () {
                var t = new mo.gui.Label();
                this.label_king_des1 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0.5, 19, "膜拜值每达到%s，霸主可开放1次全服BUFF", 0x118FA4, 531]);
                return t;
            };
            p.label_king_des2_i = function () {
                var t = new mo.gui.Label();
                this.label_king_des2 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0.5, 19, "%s，每次持续时间%s分钟", 0x118FA4, 563]);
                return t;
            };
            p.label_king_guild_i = function () {
                var t = new egret.gui.Label();
                this.label_king_guild = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "[王者传奇公会]", 0xE76DF5, 8]);
                return t;
            };
            p.label_king_lv_i = function () {
                var t = new egret.gui.Label();
                this.label_king_lv = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "LV.20", 0xE5FF34, 275, 38]);
                return t;
            };
            p.label_king_my_worship_num_i = function () {
                var t = new mo.gui.Label();
                this.label_king_my_worship_num = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "visible", "x", "y"], [0, 20, "当前膜拜次数：%s次", 0xEBC661, false, 20, 374]);
                return t;
            };
            p.label_king_name_i = function () {
                var t = new egret.gui.Label();
                this.label_king_name = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "我是名字哈哈", 0xF5FBFA, 38]);
                return t;
            };
            p.label_king_open_num_i = function () {
                var t = new mo.gui.Label();
                this.label_king_open_num = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "可开启：%s次", 0xEBC661, 374]);
                return t;
            };
            p.label_king_time_i = function () {
                var t = new mo.gui.Label();
                this.label_king_time = t;
                this.__s(t, ["bottom", "horizontalCenter", "size", "text", "textColor"], [0, 0, 19, "00:00:00", 0xEBC661]);
                return t;
            };
            p.label_king_today_open_num_i = function () {
                var t = new mo.gui.Label();
                this.label_king_today_open_num = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "visible", "x", "y"], [0, 20, "今天可开启：%s次", 0xEBC661, false, 20, 479]);
                return t;
            };
            p.label_king_vip_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.label_king_vip = t;
                this.__s(t, ["font", "text", "x", "y"], ["num_7", "0", 45, 0]);
                return t;
            };
            p.label_king_worship_award_i = function () {
                var t = new mo.gui.Label();
                this.label_king_worship_award = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "膜拜获得：", 0x00DD3D, 107, 479]);
                return t;
            };
            p.label_king_worship_award_num_i = function () {
                var t = new mo.gui.Label();
                this.label_king_worship_award_num = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "50000", 0xEBC661, 252, 479]);
                return t;
            };
            p.label_king_worship_num_i = function () {
                var t = new mo.gui.Label();
                this.label_king_worship_num = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 20, "当前已被膜拜次数：%s", 0x00DD3D, 313]);
                return t;
            };
            p.label_king_worshiped_i = function () {
                var t = new mo.gui.Label();
                this.label_king_worshiped = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 20, "今天已膜拜", 0x00DD3D, 20, 425]);
                return t;
            };
            p.label_open_i = function () {
                var t = new mo.gui.Label();
                this.label_open = t;
                this.__s(t, ["bold", "horizontalCenter", "size", "stroke", "text", "textColor", "x", "y"], [true, 0, 19, 1, "下次王城擂台赛时间：%s", 0xFF0000, 10, 63]);
                return t;
            };
            p.label_welfare_guild_i = function () {
                var t = new egret.gui.Label();
                this.label_welfare_guild = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 22, "[王者传奇公会]", 0x43FFFF, 10, 83]);
                return t;
            };
            p.label_welfare_no_get_i = function () {
                var t = new egret.gui.Label();
                this.label_welfare_no_get = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 19, "与霸主不在同行会，不可领取", 0xFF0000, 40, 409]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "x", "y"], [409, 0.5, skins.game.DefArenaRankRewardCellSkin, 428, 10, 43]);
                t.dataProvider = this.__32_i();
                return t;
            };
            p.__11_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i()];
                return t;
            };
            p.tab_king_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_king = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "skinName", "y"], [40, 0, skins.comp.TabBarBtn_6_Skin, skins.comp.TabBar_4_Skin, 98]);
                t.dataProvider = this.__11_i();
                return t;
            };
            KingSkin._skinParts = ["label_open", "tab_king", "btn_help", "btn_close", "ico_king_avatar", "icon_king_guild_bg", "label_king_guild", "label_king_vip", "label_king_name", "label_king_lv", "label_king_worship_num", "bar_king", "label_king_bar_worship_num", "label_king_open_num", "label_king_my_worship_num", "ico_king_buff", "label_king_time", "btn_king", "label_king_today_open_num", "label_king_worship_award", "label_king_worship_award_num", "icon_king_worship_award", "label_king_worshiped", "label_king_des1", "label_king_des2", "grp_king", "label_cloak_props", "label_cloak_des", "grp_cloak", "label_welfare_guild", "grp_welfare_sub1", "grp_welfare_sub2", "ico_welfare_item_0", "ico_welfare_item_1", "ico_welfare_item_2", "ico_welfare_item_3", "label_welfare_no_get", "btn_welfare_get", "ico_welfare_geted", "grp_welfare", "list_items", "item_reward", "label_desc", "grp_rankReward"];
            return KingSkin;
        })(egret.gui.Skin);
        game.KingSkin = KingSkin;
        egret.registerClass(KingSkin,"skins.game.KingSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
