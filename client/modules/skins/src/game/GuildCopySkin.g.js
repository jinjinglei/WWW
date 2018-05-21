var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildCopySkin = (function (_super) {
            __extends(GuildCopySkin, _super);
            function GuildCopySkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.btn_help_i(), this.btn_close_i(), this.list_copys_i(), this.btn_next_i(), this.btn_pre_i(), this.img_name_i(), this.__7_i(), this.label_progress_i(), this.grp_items_i(), this.grp_reset_i(), this.btn_enter_i(), this.label_resetTime_i(), this.label_resetTips_i(), this.label_passed_i(), this.label_openLvl_i(), this.__14_i(), this.__15_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildCopySkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildCopySkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item3", true, 246, 0]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [25, "center"]);
                return t;
            };
            p.__13_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["bold", "size", "stroke", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [true, 14, 1, "点击重置所有行会副本", "center", 0xECFBF8, "middle", 200, 10, 41]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "horizontalCenter", "lineSpacing", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "verticalAlign", "width", "y"], ["黑体", 36, 0, 4, 16, 1, 0x000000, "副本通关过程中成功挑战关卡才能领取副本通关奖励\n副本通关奖励通过邮件发放给行会成员", "center", 0xF9F8F6, "middle", 382, 751]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.7, 0, "pre_行会副本修改后重制副本", 0, false]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["bg_hanghuifubengdi", 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "tit_txt_g_hanghuifubenx", 18]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "requestedColumnCount", "requestedRowCount"], ["left", 2, 2]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "x", "y"], ["黑体", 16, 1, 0x000000, "副本通关奖励:", "center", 0xF9F8F6, 57, 553]);
                return t;
            };
            p.__8_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item0", true, 0, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item1", true, 83, 0]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_enter_i = function () {
                var t = new egret.gui.Button();
                this.btn_enter = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["进入", skins.comp.Btn_0_4_Skin, 294, 675]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.btn_next_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_next = t;
                this.__s(t, ["source", "visible", "x", "y"], ["btn_next2", false, 430, 277]);
                return t;
            };
            p.btn_pre_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_pre = t;
                this.__s(t, ["scaleX", "source", "visible", "x", "y"], [-1, "btn_next2", false, 51, 275]);
                return t;
            };
            p.btn_reset_i = function () {
                var t = new egret.gui.Button();
                this.btn_reset = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["重置副本", skins.comp.Btn_0_4_Skin, 51, 0]);
                return t;
            };
            p.grp_items_i = function () {
                var t = new egret.gui.Group();
                this.grp_items = t;
                this.__s(t, ["width", "x", "y"], [405, 40, 575]);
                t.layout = this.__12_i();
                t.elementsContent = [this.__8_i(), this.__9_i(), this.__10_i(), this.__11_i()];
                return t;
            };
            p.grp_reset_i = function () {
                var t = new egret.gui.Group();
                this.grp_reset = t;
                this.__s(t, ["x", "y"], [13, 675]);
                t.elementsContent = [this.btn_reset_i(), this.__13_i()];
                return t;
            };
            p.img_name_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_name = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 527]);
                return t;
            };
            p.label_openLvl_i = function () {
                var t = new mo.gui.Label();
                this.label_openLvl = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "visible", "width", "y"], [0, 16, "行会%s级开启", "center", 0xE91F11, false, 140, 685]);
                return t;
            };
            p.label_passed_i = function () {
                var t = new mo.gui.Label();
                this.label_passed = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "visible", "width", "x", "y"], [16, "已通关", "center", 0xE91F11, false, 140, 290, 685]);
                return t;
            };
            p.label_progress_i = function () {
                var t = new mo.gui.Label();
                this.label_progress = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], [91, 16, 1, 0x000000, "副本进度：%s", "center", 0xF9F8F6, 140, 10, 553]);
                return t;
            };
            p.label_resetTime_i = function () {
                var t = new mo.gui.Label();
                this.label_resetTime = t;
                this.__s(t, ["bold", "size", "stroke", "text", "textAlign", "textColor", "verticalAlign", "visible", "width", "x", "y"], [true, 16, 1, "%s后\n可再次重置所有副本", "center", 0xECFBF8, "middle", false, 160, 50, 681]);
                return t;
            };
            p.label_resetTips_i = function () {
                var t = new mo.gui.Label();
                this.label_resetTips = t;
                this.__s(t, ["height", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "visible", "width", "x", "y"], [44, -99, 16, "会长和副会长可重置副本\n每次重置7天后可再次重置", "center", 0xE8F6F2, "middle", false, 190, 30, 675]);
                return t;
            };
            p.list_copys_i = function () {
                var t = new egret.gui.List();
                this.list_copys = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [434, skins.game.GuildCopyItemSkin, 340, 70, 86]);
                t.layout = this.__6_i();
                return t;
            };
            p.__10_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item2", true, 165, 0]);
                return t;
            };
            GuildCopySkin._skinParts = ["btn_help", "btn_close", "list_copys", "btn_next", "btn_pre", "img_name", "label_progress", "grp_items", "btn_reset", "grp_reset", "btn_enter", "label_resetTime", "label_resetTips", "label_passed", "label_openLvl"];
            return GuildCopySkin;
        })(egret.gui.Skin);
        game.GuildCopySkin = GuildCopySkin;
        egret.registerClass(GuildCopySkin,"skins.game.GuildCopySkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
