var skins;
(function (skins) {
    var game;
    (function (game) {
        var CoffersSelectDefenceSkin = (function (_super) {
            __extends(CoffersSelectDefenceSkin, _super);
            function CoffersSelectDefenceSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.ico_item_i(), this.ico_rob_i(), this.label_addProp_i(), this.__5_i(), this.label_addProp2_i(), this.__6_i(), this.label_score_i(), this.label_win_i(), this.label_rate_i(), this.label_item_i(), this.__7_i(), this.__8_i(), this.__9_i(), this.grp_def0_i(), this.grp_def1_i(), this.grp_def2_i(), this.grp_def3_i(), this.btn_close_i(), this.btn_help_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CoffersSelectDefenceSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CoffersSelectDefenceSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [68, "avatar_bg", 68, 50, 88]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_baihus", 0, 40]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [68, "avatar_bg", 68, 50, 88]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_xuanwu", 0, 40]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [68, "avatar_bg", 68, 50, 88]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_zhuques", 0, 40]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [68, "avatar_bg", 68, 50, 88]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "bg_lueduoguokudi", 0, 20, 20]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "守卫生命：", 0xE8C160, 129, 57]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "守卫攻击：", 0xE8C160, 129, 83]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 18, "点击选择你要攻击的守卫", 0xFFDB14, 117]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 18, "每击败一名守卫可获得", 0x0CFF00, 685]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "x", "y"], [0.5, "tit_txt_g_guokutas", 10, 13]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.grp_def0_i = function () {
                var t = new egret.gui.Group();
                this.grp_def0 = t;
                this.__s(t, ["height", "width", "x", "y"], [251, 164, 13, 138]);
                t.elementsContent = [this.__10_i(), this.__11_i(), this.ico_face0_i(), this.label_name0_i(), this.label_time0_i(), this.ico_state0_i(), this.ico_medal0_i()];
                return t;
            };
            p.grp_def1_i = function () {
                var t = new egret.gui.Group();
                this.grp_def1 = t;
                this.__s(t, ["height", "width", "x", "y"], [251, 164, 302, 138]);
                t.elementsContent = [this.__12_i(), this.label_name1_i(), this.label_time1_i(), this.__13_i(), this.ico_face1_i(), this.ico_state1_i(), this.ico_medal1_i()];
                return t;
            };
            p.grp_def2_i = function () {
                var t = new egret.gui.Group();
                this.grp_def2 = t;
                this.__s(t, ["height", "width", "x", "y"], [251, 164, 13, 414]);
                t.elementsContent = [this.__14_i(), this.label_name2_i(), this.label_time2_i(), this.__15_i(), this.ico_face2_i(), this.ico_state2_i(), this.ico_medal2_i()];
                return t;
            };
            p.grp_def3_i = function () {
                var t = new egret.gui.Group();
                this.grp_def3 = t;
                this.__s(t, ["height", "width", "x", "y"], [251, 164, 302, 414]);
                t.elementsContent = [this.__16_i(), this.label_name3_i(), this.label_time3_i(), this.__17_i(), this.ico_face3_i(), this.ico_state3_i(), this.ico_medal3_i()];
                return t;
            };
            p.ico_face0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_face0 = t;
                this.__s(t, ["source", "x", "y"], ["avatar_1_1_0", 56, 94]);
                return t;
            };
            p.ico_face1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_face1 = t;
                this.__s(t, ["source", "x", "y"], ["avatar_1_1_0", 56, 94]);
                return t;
            };
            p.ico_face2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_face2 = t;
                this.__s(t, ["source", "x", "y"], ["avatar_1_1_0", 56, 94]);
                return t;
            };
            p.ico_face3_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_face3 = t;
                this.__s(t, ["source", "x", "y"], ["avatar_1_1_0", 56, 94]);
                return t;
            };
            p.ico_item_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_item = t;
                this.__s(t, ["height", "width", "x", "y"], [40, 40, 264, 719]);
                return t;
            };
            p.ico_medal0_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medal0 = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "y"], [0.4000000000000057, 0.8, 0.8, -9]);
                return t;
            };
            p.ico_medal1_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medal1 = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "x", "y"], [0.4000000000000057, 0.8, 0.8, 10, -9]);
                return t;
            };
            p.ico_medal2_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medal2 = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "x", "y"], [0.4000000000000057, 0.8, 0.8, 10, -9]);
                return t;
            };
            p.ico_medal3_i = function () {
                var t = new g_comp.Ico_Medal();
                this.ico_medal3 = t;
                this.__s(t, ["horizontalCenter", "scaleX", "scaleY", "x", "y"], [0.4000000000000057, 0.8, 0.8, 20, -9]);
                return t;
            };
            p.ico_rob_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_rob = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_lueduoguoku", 364]);
                return t;
            };
            p.ico_state0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_state0 = t;
                this.__s(t, ["source", "x", "y"], ["ico_yijipo", 28, 56]);
                return t;
            };
            p.ico_state1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_state1 = t;
                this.__s(t, ["source", "x", "y"], ["ico_yijipo", 28, 56]);
                return t;
            };
            p.ico_state2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_state2 = t;
                this.__s(t, ["source", "x", "y"], ["ico_yijipo", 28, 56]);
                return t;
            };
            p.ico_state3_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_state3 = t;
                this.__s(t, ["source", "x", "y"], ["ico_yijipo", 28, 56]);
                return t;
            };
            p.label_addProp2_i = function () {
                var t = new egret.gui.Label();
                this.label_addProp2 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "+100%(激励加成)", 0xE8C160, 212, 83]);
                return t;
            };
            p.label_addProp_i = function () {
                var t = new egret.gui.Label();
                this.label_addProp = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "+100%(国库加成)", 0xE8C160, 212, 57]);
                return t;
            };
            p.label_item_i = function () {
                var t = new mo.gui.Label();
                this.label_item = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "守卫宝箱×%s", 0xCC5704, 306, 729]);
                return t;
            };
            p.label_name0_i = function () {
                var t = new egret.gui.Label();
                this.label_name0 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 14, "名字六个字啊", 0xE8C160, 187]);
                return t;
            };
            p.label_name1_i = function () {
                var t = new egret.gui.Label();
                this.label_name1 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 14, "名字六个字啊", 0xE8C160, 10, 187]);
                return t;
            };
            p.label_name2_i = function () {
                var t = new egret.gui.Label();
                this.label_name2 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 14, "名字六个字啊", 0xE8C160, 10, 187]);
                return t;
            };
            p.label_name3_i = function () {
                var t = new egret.gui.Label();
                this.label_name3 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 14, "名字六个字啊", 0xE8C160, 10, 187]);
                return t;
            };
            p.label_rate_i = function () {
                var t = new mo.gui.Label();
                this.label_rate = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [0, 16, "掠夺倍率：×0", "center", 0xFFFFFF, 120, 441]);
                return t;
            };
            p.label_score_i = function () {
                var t = new mo.gui.Label();
                this.label_score = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [-113, 16, "跨服积分：%s", 0xCC5704, 719]);
                return t;
            };
            p.label_time0_i = function () {
                var t = new mo.gui.Label();
                this.label_time0 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 14, "恢复时间：%s分钟", 0xFFFFFF, 10, 214]);
                return t;
            };
            p.label_time1_i = function () {
                var t = new mo.gui.Label();
                this.label_time1 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 14, "恢复时间：%s分钟", 0xFFFFFF, 20, 214]);
                return t;
            };
            p.label_time2_i = function () {
                var t = new mo.gui.Label();
                this.label_time2 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 14, "恢复时间：%s分钟", 0xFFFFFF, 30, 214]);
                return t;
            };
            p.label_time3_i = function () {
                var t = new mo.gui.Label();
                this.label_time3 = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 14, "恢复时间：%s分钟", 0xFFFFFF, 40, 214]);
                return t;
            };
            p.label_win_i = function () {
                var t = new mo.gui.Label();
                this.label_win = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [-113, 16, "（%s连胜）", 0xCC5704, 743]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_qinglong", 0, 40]);
                return t;
            };
            CoffersSelectDefenceSkin._skinParts = ["ico_item", "ico_rob", "label_addProp", "label_addProp2", "label_score", "label_win", "label_rate", "label_item", "ico_face0", "label_name0", "label_time0", "ico_state0", "ico_medal0", "grp_def0", "label_name1", "label_time1", "ico_face1", "ico_state1", "ico_medal1", "grp_def1", "label_name2", "label_time2", "ico_face2", "ico_state2", "ico_medal2", "grp_def2", "label_name3", "label_time3", "ico_face3", "ico_state3", "ico_medal3", "grp_def3", "btn_close", "btn_help"];
            return CoffersSelectDefenceSkin;
        })(egret.gui.Skin);
        game.CoffersSelectDefenceSkin = CoffersSelectDefenceSkin;
        egret.registerClass(CoffersSelectDefenceSkin,"skins.game.CoffersSelectDefenceSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
