var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildApplyListItemSkin = (function (_super) {
            __extends(GuildApplyListItemSkin, _super);
            function GuildApplyListItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [54, 430]);
                this.elementsContent = [this.__4_i(), this.label_lvl_i(), this.label_name_i(), this.btn_agree_i(), this.btn_reject_i(), this.label_combat_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildApplyListItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildApplyListItemSkin._skinParts;
                }
            );
            p.btn_agree_i = function () {
                var t = new egret.gui.Button();
                this.btn_agree = t;
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["icon", "label", "right", "skinName", "y"], ["btn_txt_tongyi", "按钮", 81, skins.comp.Btn_3_20_Skin, 4]);
                return t;
            };
            p.btn_reject_i = function () {
                var t = new egret.gui.Button();
                this.btn_reject = t;
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["icon", "label", "right", "skinName", "y"], ["btn_txt_jujue", "按钮", 1, skins.comp.Btn_3_20_Skin, 4]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new egret.gui.Label();
                this.label_combat = t;
                this.__s(t, ["size", "text", "textAlign", "width", "x", "y"], [16, "30000万", "center", 80, 189, 10]);
                return t;
            };
            p.label_lvl_i = function () {
                var t = new egret.gui.Label();
                this.label_lvl = t;
                this.__s(t, ["size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [16, "1", "center", "middle", 45, 1, 10]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [16, "我是战神单独神单独", "center", "middle", 160, 38, 10]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["left", "right", "source"], [0, 0, "ico_liebiao_bg"]);
                return t;
            };
            GuildApplyListItemSkin._skinParts = ["label_lvl", "label_name", "btn_agree", "btn_reject", "label_combat"];
            return GuildApplyListItemSkin;
        })(egret.gui.Skin);
        game.GuildApplyListItemSkin = GuildApplyListItemSkin;
        egret.registerClass(GuildApplyListItemSkin,"skins.game.GuildApplyListItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
