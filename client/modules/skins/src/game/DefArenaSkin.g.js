var skins;
(function (skins) {
    var game;
    (function (game) {
        var DefArenaSkin = (function (_super) {
            __extends(DefArenaSkin, _super);
            function DefArenaSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_close_i(), this.btn_help_i(), this.grp_actCD_i(), this.grp_hasAdmin_i(), this.btn_tq_i(), this.btn_rank_i(), this.item_reward_i(), this.grp_noAdmin_i(), this.__21_i(), this.__22_i(), this.__23_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=DefArenaSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return DefArenaSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["bottom", "horizontalCenter", "name", "x", "y"], [0, 0, "grp_vip", 10, 10]);
                t.elementsContent = [this.__9_i(), this.__10_i()];
                return t;
            };
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "stroke", "strokeColor", "text", "x", "y"], ["label_name", 18, 1, 0x000000, "名字五个字", 0, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "stroke", "strokeColor", "text", "textColor", "x", "y"], ["label_level", 18, 1, 0x000000, "Lv.%s", 0xEBCA70, 97, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "x", "y"], ["黑体", 20, 20, "挑战消耗:", 0xDA9F00, 40, 583]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__17_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__18_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "挑战CD时间:", 0xF51115, 0, 0]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xuweiyidai", 43, 50]);
                return t;
            };
            p.__20_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["btn_txt_g_xuweiyidai", 81, 57]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.5, 0, "pre_王城擂台", 0, false]);
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.6, 0, "pre_擂台", 0, false]);
                return t;
            };
            p.__23_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "textAlign", "textColor", "y"], [0, 5, 17, "所有参与挑战或守擂的玩家均可以获得王城参与奖\n所有守擂者均可以得到守擂排行奖励\n擂台赛开启后，原霸主披风失效", "center", 0xF6E2E8, 710]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_wancengleitai", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [4, "tit_txt_g_wangcenleitai", 14]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "活动剩余时间:", 0x07F51F, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_disb", 7, 106]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["horizontalAlign", "verticalAlign"], ["center", "middle"]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ntc_vip_1", 0, 1]);
                return t;
            };
            p.bar_totalTime_i = function () {
                var t = new egret.gui.ProgressBar();
                this.bar_totalTime = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Bar_Defarena_Skin, 0, 456]);
                return t;
            };
            p.btn_challenge_i = function () {
                var t = new egret.gui.Button();
                this.btn_challenge = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_tiaozan", skins.comp.Btn_3_6_Skin, 9, 4]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 412, -9]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", -2, -8]);
                return t;
            };
            p.btn_rank_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_rank = t;
                this.__s(t, ["source", "x", "y"], ["btn_shoulei_rank", 35, 154]);
                return t;
            };
            p.btn_tq_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_tq = t;
                this.__s(t, ["source", "x", "y"], ["ico_baztq", 18, 388]);
                return t;
            };
            p.btn_up_i = function () {
                var t = new egret.gui.Button();
                this.btn_up = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_dengshangleitai", skins.comp.Btn_3_6_Skin, 52, 442]);
                return t;
            };
            p.grp_actCD_i = function () {
                var t = new egret.gui.Group();
                this.grp_actCD = t;
                this.__s(t, ["x", "y"], [104, 69]);
                t.elementsContent = [this.__6_i(), this.label_actCD_i()];
                return t;
            };
            p.grp_chlg_i = function () {
                var t = new egret.gui.Group();
                this.grp_chlg = t;
                this.__s(t, ["width", "x", "y"], [190, 40, 517]);
                t.elementsContent = [this.btn_challenge_i(), this.grp_res_i(), this.grp_fightCD_i()];
                return t;
            };
            p.grp_fightCD_i = function () {
                var t = new egret.gui.Group();
                this.grp_fightCD = t;
                this.__s(t, ["x", "y"], [0, 90]);
                t.elementsContent = [this.__18_i(), this.label_ftCD_i()];
                return t;
            };
            p.grp_hasAdmin_i = function () {
                var t = new egret.gui.Group();
                this.grp_hasAdmin = t;
                this.__s(t, ["x", "y"], [115, 66]);
                t.elementsContent = [this.ico_avatar_i(), this.label_leftTime_i(), this.label_fighting_i(), this.label_guild_i(), this.__7_i(), this.grp_userInfo_i(), this.grp_chlg_i(), this.bar_totalTime_i()];
                return t;
            };
            p.grp_noAdmin_i = function () {
                var t = new egret.gui.Group();
                this.grp_noAdmin = t;
                this.__s(t, ["horizontalCenter", "visible", "y"], [0, false, 157]);
                t.elementsContent = [this.btn_up_i(), this.__19_i(), this.__20_i(), this.label_ruleTime_i()];
                return t;
            };
            p.grp_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_res = t;
                this.__s(t, ["height", "x", "y"], [30, 12, 60]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__15_i(), this.__16_i(), this.__17_i()];
                return t;
            };
            p.grp_userInfo_i = function () {
                var t = new egret.gui.Group();
                this.grp_userInfo = t;
                this.__s(t, ["width", "x", "y"], [272, 7, 111]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__11_i(), this.__12_i(), this.__13_i()];
                return t;
            };
            p.ico_avatar_i = function () {
                var t = new g_base.RoleAvatar();
                this.ico_avatar = t;
                this.__s(t, ["skinName", "x", "y"], [skins.game.RoleAvatarSkin, 121, 400]);
                return t;
            };
            p.item_reward_i = function () {
                var t = new g_comp.Ico_Item();
                this.item_reward = t;
                this.__s(t, ["x", "y"], [21, 518]);
                return t;
            };
            p.label_actCD_i = function () {
                var t = new mo.gui.Label();
                this.label_actCD = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, " ", 0x07F51F, 137, 0]);
                return t;
            };
            p.label_fighting_i = function () {
                var t = new mo.gui.Label();
                this.label_fighting = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "textColor", "y"], [0.5, 20, 1, "被挑战中...", 0x07F58A, 427]);
                return t;
            };
            p.label_ftCD_i = function () {
                var t = new mo.gui.Label();
                this.label_ftCD = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, " ", 0xF51115, 102, 0]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new egret.gui.Label();
                this.label_guild = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0.5, 18, "传奇公会", 0xE76DF5, 87]);
                return t;
            };
            p.label_leftTime_i = function () {
                var t = new mo.gui.Label();
                this.label_leftTime = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 18, "%s后成为本届霸主", 0xF9EE8D, 491]);
                return t;
            };
            p.label_ruleTime_i = function () {
                var t = new mo.gui.Label();
                this.label_ruleTime = t;
                this.__s(t, ["height", "horizontalCenter", "lineSpacing", "size", "stroke", "text", "textAlign", "textColor", "y"], [70, 0, 5, 20, 1, "守擂%s分钟即可成为王城霸主", "center", 0xFFF719, 116]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.BitmapLabel();
                this.__s(t, ["font", "name", "text", "x", "y"], ["num_7", "label_vipLvl", "3", 40, 0]);
                return t;
            };
            DefArenaSkin._skinParts = ["btn_close", "btn_help", "label_actCD", "grp_actCD", "ico_avatar", "label_leftTime", "label_fighting", "label_guild", "grp_userInfo", "btn_challenge", "grp_res", "label_ftCD", "grp_fightCD", "grp_chlg", "bar_totalTime", "grp_hasAdmin", "btn_tq", "btn_rank", "item_reward", "btn_up", "label_ruleTime", "grp_noAdmin"];
            return DefArenaSkin;
        })(egret.gui.Skin);
        game.DefArenaSkin = DefArenaSkin;
        egret.registerClass(DefArenaSkin,"skins.game.DefArenaSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
