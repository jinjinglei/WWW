var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildCopyBossSkin = (function (_super) {
            __extends(GuildCopyBossSkin, _super);
            function GuildCopyBossSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_help_i(), this.btn_close_i(), this.label_copyProgress_i(), this.ico_monster_i(), this.img_title_i(), this.__6_i(), this.btn_right_i(), this.btn_left_i(), this.list_copys_i(), this.__8_i(), this.label_progress_i(), this.label_name_i(), this.grp_passAward_i(), this.grp_waveAward_i(), this.grp_fightable_i(), this.label_passPre_i(), this.label_getTips_i(), this.__15_i(), this.__16_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildCopyBossSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildCopyBossSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [25, "center"]);
                return t;
            };
            p.__12_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item0", true, 0, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item1", true, 83, 0]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [25, "center"]);
                return t;
            };
            p.__15_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["height", "horizontalCenter", "lineSpacing", "size", "text", "textAlign", "textColor", "width", "x", "y"], [50, 0, 3, 16, "本关卡完成后行会关卡奖励通过邮件发放给成功挑战过该关卡的行会成员", "center", 0x118FA4, 360, 10, 747]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "source", "visible", "x", "y"], [0.7, "pre_行会副本3", false, 0, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_hanghuifubentu", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_hanghuifubenx", 10]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "scale9Grid", "source", "y"], [1, egret.gui.getScale9Grid("37,40,347,37"), "panel_boss_0", 126]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "verticalAlign"], [47, "middle"]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "y"], [30, 0, "ico_ditiaoh", 436]);
                return t;
            };
            p.__9_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item0", true, 0, 0]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 411, 2]);
                return t;
            };
            p.btn_enter_i = function () {
                var t = new egret.gui.Button();
                this.btn_enter = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_taiozhanf", skins.comp.Btn_3_0_Skin, 90, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.btn_left_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_left = t;
                this.__s(t, ["source", "x", "y"], ["ntc_page_turner", 40, 156]);
                return t;
            };
            p.btn_right_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_right = t;
                this.__s(t, ["scaleX", "source", "x", "y"], [-1, "ntc_page_turner", 441, 156]);
                return t;
            };
            p.grp_fightable_i = function () {
                var t = new egret.gui.Group();
                this.grp_fightable = t;
                this.__s(t, ["width", "x", "y"], [300, 83, 637]);
                t.elementsContent = [this.btn_enter_i(), this.label_cd_i(), this.label_maxCD_i()];
                return t;
            };
            p.grp_passAward_i = function () {
                var t = new egret.gui.Group();
                this.grp_passAward = t;
                this.__s(t, ["scaleX", "scaleY", "width", "x", "y"], [0.9, 0.9, 200, 51, 525]);
                t.layout = this.__11_i();
                t.elementsContent = [this.__9_i(), this.__10_i()];
                return t;
            };
            p.grp_waveAward_i = function () {
                var t = new egret.gui.Group();
                this.grp_waveAward = t;
                this.__s(t, ["scaleX", "scaleY", "width", "x", "y"], [0.9, 0.9, 200, 257, 525]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__12_i(), this.__13_i()];
                return t;
            };
            p.ico_monster_i = function () {
                var t = new mo.gui.UIAsset();
                this.ico_monster = t;
                this.__s(t, ["height", "width", "x", "y"], [1, 1, 240, 425]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_shimuguzengzi", 88]);
                return t;
            };
            p.label_cd_i = function () {
                var t = new mo.gui.Label();
                this.label_cd = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "y"], [0.5, 16, "挑战CD: %s", "center", 0xF9F5F5, 41]);
                return t;
            };
            p.label_copyProgress_i = function () {
                var t = new mo.gui.Label();
                this.label_copyProgress = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "x", "y"], [24, 149, 16, "副本进度:%s", "left", 0xF8F5F5, "middle", 10, 88]);
                return t;
            };
            p.label_getTips_i = function () {
                var t = new mo.gui.Label();
                this.label_getTips = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "textAlign", "textColor", "visible", "y"], [0, 28, 1, "已击杀", "center", 0xE91F11, false, 656]);
                return t;
            };
            p.label_maxCD_i = function () {
                var t = new mo.gui.Label();
                this.label_maxCD = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "x", "y"], [0.5, 16, "CD超过%s分钟后必须等到CD为0才可挑战", "center", 0xF10404, 10, 66]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "y"], ["黑体", 27, 0.5, 20, 1, 0x000000, "boss名", "center", 0xF2C65E, 200, 475]);
                return t;
            };
            p.label_passPre_i = function () {
                var t = new mo.gui.Label();
                this.label_passPre = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "textAlign", "textColor", "visible", "y"], [0.5, 20, 1, "通关%s后可挑战", "center", 0xE91F11, false, 656]);
                return t;
            };
            p.label_progress_i = function () {
                var t = new mo.gui.Label();
                this.label_progress = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], [24, 0, 16, "剩余敌人波数:%s", "center", 0xF8F5F5, "middle", 200, 438]);
                return t;
            };
            p.list_copys_i = function () {
                var t = new egret.gui.List();
                this.list_copys = t;
                this.__s(t, ["height", "itemRendererSkinName", "skinName", "width", "x", "y"], [100, skins.game.GuildCopyBossItemSkin, skins.comp.List_Empty_H_Skin, 343, 69, 129]);
                t.layout = this.__7_i();
                return t;
            };
            p.__10_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item1", true, 83, 0]);
                return t;
            };
            GuildCopyBossSkin._skinParts = ["btn_help", "btn_close", "label_copyProgress", "ico_monster", "img_title", "btn_right", "btn_left", "list_copys", "label_progress", "label_name", "grp_passAward", "grp_waveAward", "btn_enter", "label_cd", "label_maxCD", "grp_fightable", "label_passPre", "label_getTips"];
            return GuildCopyBossSkin;
        })(egret.gui.Skin);
        game.GuildCopyBossSkin = GuildCopyBossSkin;
        egret.registerClass(GuildCopyBossSkin,"skins.game.GuildCopyBossSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
