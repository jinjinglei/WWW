var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildListItemSkin = (function (_super) {
            __extends(GuildListItemSkin, _super);
            function GuildListItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.height = 54;
                this.elementsContent = [this.ico_background_i(), this.__5_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", []),
                    new egret.gui.State("apply", [
                        new egret.gui.SetProperty("btn_join", "skinName", new egret.gui.ButtonSkin("btn_gonghui_0"))
                    ])
                ];
            }
            var d = __define,c=GuildListItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildListItemSkin._skinParts;
                }
            );
            p.btn_join_i = function () {
                var t = new egret.gui.Button();
                this.btn_join = t;
                t.setStyle("textAlign", "center");
                this.__s(t, ["height", "icon", "right", "skinName", "verticalCenter", "width"], [37, "btn_txt_jiaru", 3, skins.comp.Btn_3_20_Skin, 0, 77]);
                return t;
            };
            p.ico_background_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_background = t;
                this.__s(t, ["left", "right", "source", "y"], [0, 0, "ico_liebiao_bg", 0]);
                return t;
            };
            p.label_count_i = function () {
                var t = new egret.gui.Label();
                this.label_count = t;
                this.__s(t, ["size", "text", "verticalCenter", "width", "x"], [18, "500/500", 0.5, 85, 222]);
                return t;
            };
            p.label_lv_i = function () {
                var t = new egret.gui.Label();
                this.label_lv = t;
                this.__s(t, ["size", "text", "verticalCenter", "x"], [18, "Lv.120", 0, 13]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "textAlign", "verticalCenter", "width", "x"], [18, "我是战神哈哈", "center", 1, 123, 87]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "left", "right", "y"], [44, 0, 0, 0]);
                t.elementsContent = [this.btn_join_i(), this.label_count_i(), this.label_name_i(), this.label_lv_i()];
                return t;
            };
            GuildListItemSkin._skinParts = ["ico_background", "btn_join", "label_count", "label_name", "label_lv"];
            return GuildListItemSkin;
        })(egret.gui.Skin);
        game.GuildListItemSkin = GuildListItemSkin;
        egret.registerClass(GuildListItemSkin,"skins.game.GuildListItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
