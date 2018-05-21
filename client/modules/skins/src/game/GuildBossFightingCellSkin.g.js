var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildBossFightingCellSkin = (function (_super) {
            __extends(GuildBossFightingCellSkin, _super);
            function GuildBossFightingCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [137, 418]);
                this.elementsContent = [this.img_selected_i(), this.img_bg_i(), this.img_boss_i(), this.img_limit_i(), this.img_money_i(), this.img_highlight_i(), this.label_name_i(), this.label_cantJoin_i(), this.btn_join_i(), this.label_fightLeftTime_i(), this.label_fighting_i(), this.grp_lock_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildBossFightingCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildBossFightingCellSkin._skinParts;
                }
            );
            p.btn_join_i = function () {
                var t = new egret.gui.Button();
                this.btn_join = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_lijiqiangw", skins.comp.Btn_3_22_Skin, 236, 52]);
                return t;
            };
            p.grp_lock_i = function () {
                var t = new egret.gui.Group();
                this.grp_lock = t;
                this.__s(t, ["x", "y"], [230, 0]);
                t.elementsContent = [this.__4_i(), this.label_guildName_i(), this.img_lock_i()];
                return t;
            };
            p.img_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_bg = t;
                this.__s(t, ["autoScale", "bottom", "source", "x"], [false, 3, "panel_ditus", 0]);
                return t;
            };
            p.img_boss_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_boss = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [true, 124, "ico_mohuabianjiang", 120, 41, 6]);
                return t;
            };
            p.img_highlight_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_highlight = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [45, "ico_rank_bg_red", 217, 0, 98]);
                return t;
            };
            p.img_limit_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_limit = t;
                this.__s(t, ["source", "x", "y"], ["ico_xianshi", 16, 5]);
                return t;
            };
            p.img_lock_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_lock = t;
                this.__s(t, ["source", "x", "y"], ["ico_xiaoshuo", 1, 2]);
                return t;
            };
            p.img_money_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_money = t;
                this.__s(t, ["source", "x", "y"], ["ico_qian", 16, 6]);
                return t;
            };
            p.img_selected_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_selected = t;
                this.__s(t, ["autoScale", "bottom", "scale9Grid", "source", "x", "y"], [false, -15, egret.gui.getScale9Grid("51,38,312,84"), "ico_boss_xuanzongxiaoguo", 0, 10]);
                return t;
            };
            p.label_cantJoin_i = function () {
                var t = new mo.gui.Label();
                this.label_cantJoin = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "不可挑战", 0xFD0213, 255, 57]);
                return t;
            };
            p.label_fightLeftTime_i = function () {
                var t = new mo.gui.Label();
                this.label_fightLeftTime = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "剩余时间: %s", 236, 101]);
                return t;
            };
            p.label_fighting_i = function () {
                var t = new mo.gui.Label();
                this.label_fighting = t;
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [18, 1, "挑战中...", 0xC2D914, 71, 64]);
                return t;
            };
            p.label_guildName_i = function () {
                var t = new mo.gui.Label();
                this.label_guildName = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "本行会已上锁", 46, 13]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 27, 20, 1, 0x000000, "(40级) xx武士", "center", 0xF2C65E, 187, 19, 110]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_shuoditu", 0, 0]);
                return t;
            };
            GuildBossFightingCellSkin._skinParts = ["img_selected", "img_bg", "img_boss", "img_limit", "img_money", "img_highlight", "label_name", "label_cantJoin", "btn_join", "label_fightLeftTime", "label_fighting", "label_guildName", "img_lock", "grp_lock"];
            return GuildBossFightingCellSkin;
        })(egret.gui.Skin);
        game.GuildBossFightingCellSkin = GuildBossFightingCellSkin;
        egret.registerClass(GuildBossFightingCellSkin,"skins.game.GuildBossFightingCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
