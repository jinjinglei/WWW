var skins;
(function (skins) {
    var game;
    (function (game) {
        var WorldBossSkin = (function (_super) {
            __extends(WorldBossSkin, _super);
            function WorldBossSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.label_canFight_i(), this.label_cannotFight_i(), this.label_yourFuHuo_i(), this.__4_i(), this.img_title_i(), this.btn_back_i(), this.btn_help_i(), this.label_lefttime_i(), this.px_hp_i(), this.__13_i(), this.__14_i(), this.img_auto_i(), this.ckb_auto_i(), this.label_coolDown_i(), this.grp_inspire_i(), this.btn_fight_i(), this.btn_clear_cd_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WorldBossSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return WorldBossSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "scale9Grid", "source", "width", "x", "y"], [true, 62, egret.gui.getScale9Grid("34,7,108,44"), "panel_dikuang4", 161, 0, 25]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 26, "tit_txt_g_zhaohuanzhe", 61, 98, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [446, 480, 0, 161]);
                t.elementsContent = [this.ico_monster_i(), this.label_monster_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.__10_i(), this.grp_call_i(), this.label_first_i(), this.label_first_hurt_i(), this.label_first_hh_i(), this.label_my_index_i(), this.label_my_hurt_i(), this.btn_more_index_i(), this.ico_head_i(), this.btn_reward_i()];
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "width", "x", "y"], [false, "panel_dikuang3", 481, 0, 728]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "scale9Grid", "source", "width", "x", "y"], [false, 73, egret.gui.getScale9Grid("28,20,175,36"), "panel_dikuang2", 423, 0, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [800, "bg_shijieboss", 480, 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "x"], [0, "panel_task_title", 0, 10]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "left", "source", "top", "width"], [false, 26, 1, "tit_txt_g_shanghaidiyi", -5, 85]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "left", "scale9Grid", "source", "top", "width", "x", "y"], [true, 80, 4, egret.gui.getScale9Grid("80,27,81,25"), "panel_dikuang", 22, 211, 10, 10]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "left", "source", "top", "width", "x", "y"], [false, 26, 3, "tit_txt_g_wodezhanji", 112, 85, 10, 10]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "left", "source", "top", "width", "x", "y"], [false, 23, 385, "tit_txt_g_jianglishuoming", 252, 79, 20, 20]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "left", "scale9Grid", "source", "top", "width", "x", "y"], [true, 71, 6, egret.gui.getScale9Grid("80,27,81,25"), "panel_dikuang", 136, 153, 20, 20]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["right", "source", "top"], [2, "btn_back", 1]);
                return t;
            };
            p.btn_clear_cd_i = function () {
                var t = new egret.gui.Button();
                this.btn_clear_cd = t;
                this.__s(t, ["height", "skinName", "width", "x", "y"], [39, new egret.gui.ButtonSkin("btn_qingCD"), 29, 435, 753]);
                return t;
            };
            p.btn_fight_i = function () {
                var t = new egret.gui.Button();
                this.btn_fight = t;
                this.__s(t, ["height", "horizontalCenter", "icon", "skinName", "width", "y"], [56, 0, "btn_txt_jinruzhandou", skins.comp.Btn_3_6_Skin, 204, 656]);
                return t;
            };
            p.btn_guwu_i = function () {
                var t = new egret.gui.Button();
                this.btn_guwu = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [39, "btn_txt_guwu", skins.comp.Btn_3_0_Skin, 120, 284, 18]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["left", "source", "top"], [1, "ico_help", 3]);
                return t;
            };
            p.btn_more_index_i = function () {
                var t = new egret.gui.Button();
                this.btn_more_index = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [39, "btn_txt_gengduopaiming", skins.comp.Btn_3_0_Skin, 120, 19, 212]);
                return t;
            };
            p.btn_reward_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_reward = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [59, "ico_boss_reward", 63, 389, 183]);
                return t;
            };
            p.ckb_auto_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_auto = t;
                this.__s(t, ["width", "x", "y"], [37, 137, 753]);
                return t;
            };
            p.grp_call_i = function () {
                var t = new egret.gui.Group();
                this.grp_call = t;
                this.__s(t, ["x", "y"], [319, 2]);
                t.elementsContent = [this.__11_i(), this.__12_i(), this.label_caller_i(), this.label_callerhh_i()];
                return t;
            };
            p.grp_inspire_i = function () {
                var t = new egret.gui.Group();
                this.grp_inspire = t;
                this.__s(t, ["x", "y"], [35, 556]);
                t.elementsContent = [this.__15_i(), this.label_hanghuigw_i(), this.label_hanghuilt_i(), this.btn_guwu_i()];
                return t;
            };
            p.ico_head_i = function () {
                var t = new g_comp.Ico_Head();
                this.ico_head = t;
                this.__s(t, ["scaleX", "scaleY", "x", "y"], [0.9, 0.9, 28, 28]);
                return t;
            };
            p.ico_monster_i = function () {
                var t = new mo.gui.UIAsset();
                this.ico_monster = t;
                this.__s(t, ["height", "width", "x", "y"], [1, 2, 262, 368]);
                return t;
            };
            p.img_auto_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_auto = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 32, "btn_txt_zidongzhandou", 90, 43, 757]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["horizontalCenter", "source", "top", "x"], [0.5, "tit_txt_g_hanghuiboss", 10, 10]);
                return t;
            };
            p.label_caller_i = function () {
                var t = new egret.gui.Label();
                this.label_caller = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 23, 18, "召唤者名字的", "center", 0xFFFFFF, 132, 28, 32]);
                return t;
            };
            p.label_callerhh_i = function () {
                var t = new egret.gui.Label();
                this.label_callerhh = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 23, 18, "[召唤者的行会]", "center", 0xECB6FE, 132, 26, 59]);
                return t;
            };
            p.label_canFight_i = function () {
                var t = new mo.gui.Label();
                this.label_canFight = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "x", "y"], [0, 16, "今日还可挑战行会BOSS及限时BOSS个数：%s/%s", "center", 0xF6FF00, 420, 10, 712]);
                return t;
            };
            p.label_cannotFight_i = function () {
                var t = new mo.gui.Label();
                this.label_cannotFight = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "x", "y"], [0, 16, "今日挑战个数已用完，您只能挑战本行会召唤的BOSS", "center", 0xF6FF00, 420, 10, 712]);
                return t;
            };
            p.label_coolDown_i = function () {
                var t = new egret.gui.Label();
                this.label_coolDown = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "top", "width", "x", "y"], ["黑体", 23, 68, 20, "冷却时间：1小时20分20秒", "right", 0xF8F3F3, 761, 240, 10, 10]);
                return t;
            };
            p.label_first_hh_i = function () {
                var t = new egret.gui.Label();
                this.label_first_hh = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "top", "width", "x", "y"], ["黑体", 20, -83, 16, "[行会]", "left", 0xECB6FE, 52, 114, 30, 30]);
                return t;
            };
            p.label_first_hurt_i = function () {
                var t = new egret.gui.Label();
                this.label_first_hurt = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "top", "x", "y"], ["黑体", 20, 16, "0", "left", 0xFFFFFF, 74, 99, 40]);
                return t;
            };
            p.label_first_i = function () {
                var t = new egret.gui.Label();
                this.label_first = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "top", "width", "x", "y"], ["黑体", 20, -84, 16, "输出第一的名字", "left", 0xFFFFFF, 30, 120, 20, 20]);
                return t;
            };
            p.label_hanghuigw_i = function () {
                var t = new egret.gui.Label();
                this.label_hanghuigw = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 23, 20, "行会鼓舞:", "left", 0xF8F3F3, 246, 15, 11]);
                return t;
            };
            p.label_hanghuilt_i = function () {
                var t = new egret.gui.Label();
                this.label_hanghuilt = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 23, 20, "行会鼓舞剩余时间：", "left", 0xF8F3F3, 246, 13, 38]);
                return t;
            };
            p.label_lefttime_i = function () {
                var t = new egret.gui.Label();
                this.label_lefttime = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "text", "textAlign", "textColor", "top", "width"], ["黑体", 23, 0, 20, "活动剩余时间：1小时20分20秒", "center", 0xE03432, 59, 288]);
                return t;
            };
            p.label_monster_i = function () {
                var t = new egret.gui.Label();
                this.label_monster = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [25, 18, "怪物名字 Lv.100", "center", 0xF5B06C, 200, 140, 112]);
                return t;
            };
            p.label_my_hurt_i = function () {
                var t = new egret.gui.Label();
                this.label_my_hurt = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "top", "x", "y"], ["黑体", 20, 16, 1, 0x056F0C, "召唤者名字的", "left", 0xB3FFB7, 175, 18, 40]);
                return t;
            };
            p.label_my_index_i = function () {
                var t = new egret.gui.Label();
                this.label_my_index = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "top", "x", "y"], ["黑体", 20, 16, 1, 0x056F0C, "召唤者名字的", "left", 0xB3FFB7, 148, 19, 30]);
                return t;
            };
            p.label_yourFuHuo_i = function () {
                var t = new mo.gui.Label();
                this.label_yourFuHuo = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "x", "y"], [0, 16, "本行会召唤了该BOSS，挑战不消耗参与BOSS个数", "center", 0xF6FF00, 420, 20, 712]);
                return t;
            };
            p.px_hp_i = function () {
                var t = new egret.gui.ProgressBar();
                this.px_hp = t;
                this.__s(t, ["direction", "height", "horizontalCenter", "skinName", "value", "y"], ["rightToLeft", 46, 0, skins.comp.Bar_WorldBoss_Hp_Skin, 500, 90]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["border_5", 384, 177]);
                return t;
            };
            WorldBossSkin._skinParts = ["label_canFight", "label_cannotFight", "label_yourFuHuo", "img_title", "btn_back", "btn_help", "label_lefttime", "px_hp", "ico_monster", "label_monster", "label_caller", "label_callerhh", "grp_call", "label_first", "label_first_hurt", "label_first_hh", "label_my_index", "label_my_hurt", "btn_more_index", "ico_head", "btn_reward", "img_auto", "ckb_auto", "label_coolDown", "label_hanghuigw", "label_hanghuilt", "btn_guwu", "grp_inspire", "btn_fight", "btn_clear_cd"];
            return WorldBossSkin;
        })(egret.gui.Skin);
        game.WorldBossSkin = WorldBossSkin;
        egret.registerClass(WorldBossSkin,"skins.game.WorldBossSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
