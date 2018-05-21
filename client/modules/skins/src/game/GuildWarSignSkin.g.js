var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildWarSignSkin = (function (_super) {
            __extends(GuildWarSignSkin, _super);
            function GuildWarSignSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.list_sign_i(), this.__5_i(), this.__6_i(), this.label_timeSign_i(), this.label_timeActive_i(), this.label_combat_i(), this.btn_help_i(), this.btn_back_i(), this.label_myGuildRank_i(), this.label_myGuildNo_i(), this.label_myNo_i(), this.label_myRank_i(), this.__7_i(), this.__8_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildWarSignSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildWarSignSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_hanghuizhenbm", 164, 12]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [1, 18, "报名后不能取消，也无法更换报名组", 0x20A5E3, 30, 768]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [1, 18, "参赛组别越高，赛事奖励就越高", 0x20A5E3, 40, 745]);
                return t;
            };
            p.__7_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 16, "（行会战中未参与战斗将无法获得奖励）", 0xADE4A2, 609]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 16, "（会长奖励及个人奖励只奖励每组前10名）", 0xADE4A2, 10, 639]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 0]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 0]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new mo.gui.Label();
                this.label_combat = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [-119, 18, "我的行会等级：%s", 0xFFFFFF, 60, 92]);
                return t;
            };
            p.label_myGuildNo_i = function () {
                var t = new mo.gui.Label();
                this.label_myGuildNo = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "未参战", 0xFF0000, 187, 522]);
                return t;
            };
            p.label_myGuildRank_i = function () {
                var t = new mo.gui.Label();
                this.label_myGuildRank = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "上次本行会排名：%s", 0xEFE0E0, 57, 522]);
                return t;
            };
            p.label_myNo_i = function () {
                var t = new mo.gui.Label();
                this.label_myNo = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "未参战", 0xFF0000, 167, 560]);
                return t;
            };
            p.label_myRank_i = function () {
                var t = new mo.gui.Label();
                this.label_myRank = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [16, "上次个人排名：%s", 0xEFE0E0, 57, 559]);
                return t;
            };
            p.label_timeActive_i = function () {
                var t = new mo.gui.Label();
                this.label_timeActive = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [1, 16, "活动时间：%s月%s日%s:00至%s:00", 0x20A5E3, 60, 72]);
                return t;
            };
            p.label_timeSign_i = function () {
                var t = new mo.gui.Label();
                this.label_timeSign = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [1, 16, "报名时间：%s月%s日%s:00至%s月%s日%s:00", 0x20A5E3, 50, 52]);
                return t;
            };
            p.list_sign_i = function () {
                var t = new egret.gui.List();
                this.list_sign = t;
                this.__s(t, ["height", "horizontalCenter", "y"], [355, 0.5, 123]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter", "x", "y"], [0, "bg_xunzanglf", 0, 10, 10]);
                return t;
            };
            GuildWarSignSkin._skinParts = ["list_sign", "label_timeSign", "label_timeActive", "label_combat", "btn_help", "btn_back", "label_myGuildRank", "label_myGuildNo", "label_myNo", "label_myRank"];
            return GuildWarSignSkin;
        })(egret.gui.Skin);
        game.GuildWarSignSkin = GuildWarSignSkin;
        egret.registerClass(GuildWarSignSkin,"skins.game.GuildWarSignSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
