var skins;
(function (skins) {
    var game;
    (function (game) {
        var WorldBossHurtCellSkin = (function (_super) {
            __extends(WorldBossHurtCellSkin, _super);
            function WorldBossHurtCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.width = 360;
                this.elementsContent = [this.__4_i(), this.label_index_i(), this.__5_i(), this.label_name_i(), this.__6_i(), this.label_hanghui_i(), this.label_hurt_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WorldBossHurtCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return WorldBossHurtCellSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "x", "y"], ["黑体", 18, "名字:", "center", 55, 5]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "x", "y"], ["黑体", 18, "行会:", "center", 55, 30]);
                return t;
            };
            p.label_hanghui_i = function () {
                var t = new egret.gui.Label();
                this.label_hanghui = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "x", "y"], ["黑体", 18, "[我行行会]", "left", 0xECB6FE, 100, 31]);
                return t;
            };
            p.label_hurt_i = function () {
                var t = new egret.gui.Label();
                this.label_hurt = t;
                this.__s(t, ["fontFamily", "maxDisplayedLines", "size", "text", "textAlign", "width", "x", "y"], ["黑体", 1, 18, "2365", "right", 114, 246, 16]);
                return t;
            };
            p.label_index_i = function () {
                var t = new egret.gui.Label();
                this.label_index = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "width", "x", "y"], ["黑体", 21, 19, "100", "left", 42, 7, 15]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "x", "y"], ["黑体", 18, "名字", "left", 100, 5]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "source", "x"], [false, "panel_guwu_dikuang3", -20]);
                return t;
            };
            WorldBossHurtCellSkin._skinParts = ["label_index", "label_name", "label_hanghui", "label_hurt"];
            return WorldBossHurtCellSkin;
        })(egret.gui.Skin);
        game.WorldBossHurtCellSkin = WorldBossHurtCellSkin;
        egret.registerClass(WorldBossHurtCellSkin,"skins.game.WorldBossHurtCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
