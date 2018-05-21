var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildEnnobleItemSkin = (function (_super) {
            __extends(GuildEnnobleItemSkin, _super);
            function GuildEnnobleItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.label_ennoble_i(), this.grp_addScale_i(), this.grp_num_i(), this.__7_i(), this.label_need1_i(), this.label_need2_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", [
                        new egret.gui.SetProperty("__4", "source", "ico_bg_dikuang")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "ico_bg_bunengshiyong")
                    ])
                ];
            }
            var d = __define,c=GuildEnnobleItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildEnnobleItemSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "旗帜加成：", 0xFFFFFF, 227, 16]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "剩余数量：", 0xFFFFFF, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "要求：", 0xFFFFFF, 17, 47]);
                return t;
            };
            p.grp_addScale_i = function () {
                var t = new egret.gui.Group();
                this.grp_addScale = t;
                this.__s(t, ["x", "y"], [0, 0]);
                t.elementsContent = [this.label_addScale_i(), this.__5_i()];
                return t;
            };
            p.grp_num_i = function () {
                var t = new egret.gui.Group();
                this.grp_num = t;
                this.__s(t, ["x", "y"], [227, 16]);
                t.elementsContent = [this.__6_i(), this.label_num_i()];
                return t;
            };
            p.label_addScale_i = function () {
                var t = new egret.gui.Label();
                this.label_addScale = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "10%", 0xFFFFFF, 315, 16]);
                return t;
            };
            p.label_ennoble_i = function () {
                var t = new egret.gui.Label();
                this.label_ennoble = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "爵位", 17, 16]);
                return t;
            };
            p.label_need1_i = function () {
                var t = new egret.gui.Label();
                this.label_need1 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "一级会员", 0xFFFFFF, 67, 47]);
                return t;
            };
            p.label_need2_i = function () {
                var t = new egret.gui.Label();
                this.label_need2 = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "一级会员", 0xFB2B2E, 230, 47]);
                return t;
            };
            p.label_num_i = function () {
                var t = new egret.gui.Label();
                this.label_num = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "10/10", 0xFFFFFF, 88, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                t.source = "ico_bg_dikuang0";
                return t;
            };
            GuildEnnobleItemSkin._skinParts = ["label_ennoble", "label_addScale", "grp_addScale", "label_num", "grp_num", "label_need1", "label_need2"];
            return GuildEnnobleItemSkin;
        })(egret.gui.Skin);
        game.GuildEnnobleItemSkin = GuildEnnobleItemSkin;
        egret.registerClass(GuildEnnobleItemSkin,"skins.game.GuildEnnobleItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
