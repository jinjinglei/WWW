var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildCopyItemSkin = (function (_super) {
            __extends(GuildCopyItemSkin, _super);
            function GuildCopyItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.img_bg_i(), this.img_title_i(), this.label_progress_i(), this.label_openLvl_i(), this.__4_i(), this.img_pass_i()];
                this.states = [
                    new egret.gui.State("up", [
                        new egret.gui.SetProperty("__4", "visible", false)
                    ]),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildCopyItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildCopyItemSkin._skinParts;
                }
            );
            p.img_bg_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_bg = t;
                this.__s(t, ["source", "x", "y"], ["ico_shimuguzeng", 5, 5]);
                return t;
            };
            p.img_pass_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_pass = t;
                this.__s(t, ["source", "x", "y"], ["ico_yitongguan", 30, 61]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_shimuguzengzi", 13]);
                return t;
            };
            p.label_openLvl_i = function () {
                var t = new mo.gui.Label();
                this.label_openLvl = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "x", "y"], [0.5, 16, "行会%s级开启", "center", 0xE91F11, 140, 10, 179]);
                return t;
            };
            p.label_progress_i = function () {
                var t = new mo.gui.Label();
                this.label_progress = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "visible", "width", "y"], [0.5, 16, "副本进度：%s", "center", 0x2CD19A, false, 140, 179]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                t.source = "ico_xuanzongkuange";
                return t;
            };
            GuildCopyItemSkin._skinParts = ["img_bg", "img_title", "label_progress", "label_openLvl", "img_pass"];
            return GuildCopyItemSkin;
        })(egret.gui.Skin);
        game.GuildCopyItemSkin = GuildCopyItemSkin;
        egret.registerClass(GuildCopyItemSkin,"skins.game.GuildCopyItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
