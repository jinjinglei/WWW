var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildBossCallSkin = (function (_super) {
            __extends(GuildBossCallSkin, _super);
            function GuildBossCallSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.label_call_time_i(), this.__4_i(), this.img_title_i(), this.btn_back_i(), this.btn_help_i(), this.__6_i(), this.__7_i(), this.btn_show_rewards_i(), this.px_hp_i(), this.label_fighting_i(), this.label_reward_hint_i(), this.label_left_time_i(), this.label_limit_time_i(), this.grp_fight_i(), this.grp_call_i(), this.btn_status_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildBossCallSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildBossCallSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__15_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "y"], [0, 3]);
                t.layout = this.__17_i();
                t.elementsContent = [this.grp_res_i(), this.grp_res_extra_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "锁定BOSS,仅允许本公会成员挑战", 37, 6]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [800, "bg_any", 480, -1, 2]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "y"], [0, "panel_task_title", 0, 40]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [45, "ico_rank_bg_red", 217, 173, 48]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [137, 415, 32, 123]);
                t.elementsContent = [this.img_boss_bg_i(), this.__5_i(), this.label_name_i(), this.img_boss_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [424, egret.gui.getScale9Grid("52,3,314,14"), "panel_kuang", 416, 32, 260]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "horizontalCenter", "source", "width", "y"], [false, 25, 2, "ico_zaohaun", 310, 190]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "panel_dituo", 0]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["right", "source", "top", "x", "y"], [2, "btn_back", 1, 20, 20]);
                return t;
            };
            p.btn_call_i = function () {
                var t = new egret.gui.Button();
                this.btn_call = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [0.5, "btn_txt_zaohuan", skins.comp.Btn_3_6_Skin, 10, 37]);
                return t;
            };
            p.btn_fight_i = function () {
                var t = new egret.gui.Button();
                this.btn_fight = t;
                this.__s(t, ["height", "horizontalCenter", "icon", "skinName", "width", "y"], [56, 1.5, "btn_txt_qwangcjia", skins.comp.Btn_3_6_Skin, 204, 19]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["left", "source", "top", "x", "y"], [1, "ico_help", 3, 20, 20]);
                return t;
            };
            p.btn_lock_call_i = function () {
                var t = new egret.gui.Button();
                this.btn_lock_call = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "x", "y"], [-1.5, "btn_txt_shuodingzaohuan", skins.comp.Btn_3_40_Skin, 20, 41]);
                return t;
            };
            p.btn_show_rewards_i = function () {
                var t = new egret.gui.Button();
                this.btn_show_rewards = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0, "btn_txt_ckshuojl", "按钮", skins.comp.Btn_3_22_Skin, 333]);
                return t;
            };
            p.btn_status_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_status = t;
                this.__s(t, ["source", "x", "y"], ["ico_guildBoss_win", 341, 322]);
                return t;
            };
            p.ckb_lock_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_lock = t;
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            p.grp_call_i = function () {
                var t = new egret.gui.Group();
                this.grp_call = t;
                this.__s(t, ["height", "width", "x", "y"], [222, 414, 33, 456]);
                t.elementsContent = [this.btn_call_i(), this.btn_lock_call_i(), this.__8_i(), this.label_boss_sleep_i(), this.label_boss_lvLmt_call_i(), this.label_numFuHuo_i(), this.label_extra_cost_i(), this.grp_call_need_i(), this.grp_lock_i()];
                return t;
            };
            p.grp_call_need_i = function () {
                var t = new egret.gui.Group();
                this.grp_call_need = t;
                this.__s(t, ["height", "width", "x", "y"], [58, 414, 0, 87]);
                t.elementsContent = [this.__9_i(), this.label_duration_i(), this.__18_i()];
                return t;
            };
            p.grp_fight_i = function () {
                var t = new egret.gui.Group();
                this.grp_fight = t;
                this.__s(t, ["height", "horizontalCenter", "width", "y"], [147, 0, 277, 480]);
                t.elementsContent = [this.label_level_need_i(), this.label_boss_lvLmt_fight_i(), this.btn_fight_i()];
                return t;
            };
            p.grp_lock_i = function () {
                var t = new egret.gui.Group();
                this.grp_lock = t;
                this.__s(t, ["x", "y"], [53, 148]);
                t.elementsContent = [this.ckb_lock_i(), this.__19_i()];
                return t;
            };
            p.grp_res_extra_i = function () {
                var t = new egret.gui.Group();
                this.grp_res_extra = t;
                this.__s(t, ["height", "x", "y"], [30, 80, 0]);
                t.layout = this.__16_i();
                t.elementsContent = [this.__14_i(), this.__15_i()];
                return t;
            };
            p.grp_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_res = t;
                this.__s(t, ["height", "x", "y"], [30, 0, 0]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__10_i(), this.__11_i(), this.__12_i()];
                return t;
            };
            p.img_boss_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_boss_bg = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [-1, -1, -2, "panel_ditus", 1]);
                return t;
            };
            p.img_boss_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_boss = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [true, 124, "ico_mohuabianjiang", 120, 34, 6]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["horizontalCenter", "source", "top", "y"], [0, "tit_txt_g_hanghuiboss", 12, 20]);
                return t;
            };
            p.label_boss_lvLmt_call_i = function () {
                var t = new mo.gui.Label();
                this.label_boss_lvLmt_call = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "x", "y"], [0.5, 18, "%s级~%s级的角色才可召唤该BOSS", "center", 0xFF0004, 20, -1]);
                return t;
            };
            p.label_boss_lvLmt_fight_i = function () {
                var t = new mo.gui.Label();
                this.label_boss_lvLmt_fight = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "x", "y"], [1, 18, "%s级~%s级的角色才可参与挑战该BOSS", "center", 0xFF0004, 30, 39]);
                return t;
            };
            p.label_boss_sleep_i = function () {
                var t = new egret.gui.Label();
                this.label_boss_sleep = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "x", "y"], [23, 0, 22, "BOSS正在休息", "center", 0x1CE315, 244, 10, -13]);
                return t;
            };
            p.label_call_time_i = function () {
                var t = new mo.gui.Label();
                this.label_call_time = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], ["黑体", 27, 0, 21, "%s可召唤时段：%s-%s", "center", 0xD61702, "bottom", 306, 57]);
                return t;
            };
            p.label_duration_i = function () {
                var t = new egret.gui.Label();
                this.label_duration = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], ["黑体", 20, 0, 15, "召唤后需在%s小时内击杀BOSS", "center", 0xB0BBBE, 238, 33]);
                return t;
            };
            p.label_extra_cost_i = function () {
                var t = new mo.gui.Label();
                this.label_extra_cost = t;
                this.__s(t, ["horizontalCenter", "lineSpacing", "size", "text", "textAlign", "textColor", "x", "y"], [0, 6, 16, "挑战本行会召唤的BOSS不消耗可挑战BOSS个数\n剩余CD时间越短，立即召唤消耗元宝越少", "center", 0x118FA4, 10, 265]);
                return t;
            };
            p.label_fighting_i = function () {
                var t = new egret.gui.Label();
                this.label_fighting = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], ["黑体", 26, 3, 22, "挑战中...", "center", 0xC49301, 152, 387]);
                return t;
            };
            p.label_left_time_i = function () {
                var t = new mo.gui.Label();
                this.label_left_time = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [0, 18, "剩余时间: %s", "center", 0x18D504, 206, 466]);
                return t;
            };
            p.label_level_need_i = function () {
                var t = new egret.gui.Label();
                this.label_level_need = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [23, 0, 20, "角色100级才可参与击杀", "center", 0xD61702, 247, 103]);
                return t;
            };
            p.label_limit_time_i = function () {
                var t = new mo.gui.Label();
                this.label_limit_time = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "y"], [0, 20, "%s-%s(%s开启)", "center", 0xF70000, 694]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 27, 24, 1, 0x000000, "(40级) xx武士", "center", 0xF2C65E, 216, 177, 55]);
                return t;
            };
            p.label_numFuHuo_i = function () {
                var t = new mo.gui.Label();
                this.label_numFuHuo = t;
                this.__s(t, ["size", "text", "textAlign", "width", "x", "y"], [18, "该BOSS当前已被立即召唤%s次", "center", 420, 10, -370]);
                return t;
            };
            p.label_reward_hint_i = function () {
                var t = new egret.gui.Label();
                this.label_reward_hint = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], ["黑体", 26, 0, 22, "抢夺：80级极品橙装", "center", 0xC49301, "middle", 284, 417]);
                return t;
            };
            p.px_hp_i = function () {
                var t = new egret.gui.ProgressBar();
                this.px_hp = t;
                this.__s(t, ["direction", "skinName", "value", "width", "x", "y"], ["rightToLeft", skins.comp.Bar_WorldBoss_Hp_Skin, 100, 399, 40, 267]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], ["黑体", 20, 16, "花费:", 0xB0BBBE, 47, 138, 9]);
                return t;
            };
            GuildBossCallSkin._skinParts = ["label_call_time", "img_title", "btn_back", "btn_help", "img_boss_bg", "label_name", "img_boss", "btn_show_rewards", "px_hp", "label_fighting", "label_reward_hint", "label_left_time", "label_limit_time", "label_level_need", "label_boss_lvLmt_fight", "btn_fight", "grp_fight", "btn_call", "btn_lock_call", "label_boss_sleep", "label_boss_lvLmt_call", "label_numFuHuo", "label_extra_cost", "label_duration", "grp_res", "grp_res_extra", "grp_call_need", "ckb_lock", "grp_lock", "grp_call", "btn_status"];
            return GuildBossCallSkin;
        })(egret.gui.Skin);
        game.GuildBossCallSkin = GuildBossCallSkin;
        egret.registerClass(GuildBossCallSkin,"skins.game.GuildBossCallSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
