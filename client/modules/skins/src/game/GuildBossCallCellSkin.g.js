var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildBossCallCellSkin = (function (_super) {
            __extends(GuildBossCallCellSkin, _super);
            function GuildBossCallCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [137, 418]);
                this.elementsContent = [this.img_selected_i(), this.img_bg_i(), this.img_boss_i(), this.img_limit_i(), this.img_money_i(), this.img_highlight_i(), this.label_name_i(), this.label_guild_i(), this.label_call_i(), this.label_sleep_i(), this.label_settlement_i(), this.label_killed_i(), this.label_left_time_i(), this.label_reward_hint_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildBossCallCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildBossCallCellSkin._skinParts;
                }
            );
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
            p.label_call_i = function () {
                var t = new egret.gui.Label();
                this.label_call = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [22, 19, "可召唤", "right", 0x18D504, 142, 235, 31]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new mo.gui.Label();
                this.label_guild = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [22, 19, "行会%s级可召唤", "right", 0x9BA4A6, 142, 234, 32]);
                return t;
            };
            p.label_killed_i = function () {
                var t = new egret.gui.Label();
                this.label_killed = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [22, 19, "已被击杀", "right", 0xF7D26E, 142, 234, 30]);
                return t;
            };
            p.label_left_time_i = function () {
                var t = new egret.gui.Label();
                this.label_left_time = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [50, 18, "召唤冷却: 23时00分15秒", "center", 0x18D504, 206, 203, 62]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "height", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 27, 20, 1, 0x000000, "(40级) xx武士", "center", 0xF2C65E, 187, 19, 110]);
                return t;
            };
            p.label_reward_hint_i = function () {
                var t = new egret.gui.Label();
                this.label_reward_hint = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], ["黑体", 80, 20, "抢夺：80级极品橙装", "center", 0xC49301, "middle", 238, 10, 85]);
                return t;
            };
            p.label_settlement_i = function () {
                var t = new egret.gui.Label();
                this.label_settlement = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "x", "y"], [22, 19, "结算中", "right", 0x18D504, 275, 41]);
                return t;
            };
            p.label_sleep_i = function () {
                var t = new egret.gui.Label();
                this.label_sleep = t;
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [22, 19, "休息中", "right", 0x18D504, 142, 235, 31]);
                return t;
            };
            p.img_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_bg = t;
                this.__s(t, ["autoScale", "bottom", "source", "x"], [false, 3, "panel_ditus", 0]);
                return t;
            };
            GuildBossCallCellSkin._skinParts = ["img_selected", "img_bg", "img_boss", "img_limit", "img_money", "img_highlight", "label_name", "label_guild", "label_call", "label_sleep", "label_settlement", "label_killed", "label_left_time", "label_reward_hint"];
            return GuildBossCallCellSkin;
        })(egret.gui.Skin);
        game.GuildBossCallCellSkin = GuildBossCallCellSkin;
        egret.registerClass(GuildBossCallCellSkin,"skins.game.GuildBossCallCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
