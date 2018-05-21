var skins;
(function (skins) {
    var game;
    (function (game) {
        var WorldBossHurtListSkin = (function (_super) {
            __extends(WorldBossHurtListSkin, _super);
            function WorldBossHurtListSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__10_i(), this.btn_back_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WorldBossHurtListSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return WorldBossHurtListSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [800, "bg_shijieboss", 480, 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "x", "y"], [0, "panel_task_title", 0, 30, 20]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "width", "x", "y"], [-2.5, "tit_txt_g_shanghaipaiming", 9, 107, 30, 20]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "s9g_dlg_1", 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [497, "eqp_forgeMidBg", false, 422, 6, 8]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [504, 1.5, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 387, 56]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "requestedColumnCount"], ["left", 1]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["right", "source", "top", "x", "y"], [1, "btn_back", 29, 10, 10]);
                return t;
            };
            p.label_hurt_i = function () {
                var t = new egret.gui.Label();
                this.label_hurt = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "x", "y"], ["黑体", 20, "输出伤害", "center", 0xF3D356, 322, 25]);
                return t;
            };
            p.label_index_i = function () {
                var t = new egret.gui.Label();
                this.label_index = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "x", "y"], ["黑体", 20, "排名", "left", 0xF3D356, 37, 25]);
                return t;
            };
            p.label_my_hurt_i = function () {
                var t = new egret.gui.Label();
                this.label_my_hurt = t;
                this.__s(t, ["fontFamily", "size", "text", "width", "x", "y"], ["黑体", 18, "标签", 206, 238, 583]);
                return t;
            };
            p.label_my_index_i = function () {
                var t = new egret.gui.Label();
                this.label_my_index = t;
                this.__s(t, ["fontFamily", "size", "text", "width", "x", "y"], ["黑体", 18, "标签", 160, 34, 583]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["黑体", 20, "角色信息", "center", 0xF3D356, 96, 109, 25]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [476, skins.game.WorldBossHurtCellSkin, 360, 40, 64]);
                t.layout = this.__9_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "width", "x", "y"], [634, 0, 438, 10, 104]);
                t.elementsContent = [this.__6_i(), this.label_index_i(), this.label_name_i(), this.label_hurt_i(), this.__7_i(), this.__8_i(), this.list_items_i(), this.label_my_hurt_i(), this.label_my_index_i()];
                return t;
            };
            WorldBossHurtListSkin._skinParts = ["label_index", "label_name", "label_hurt", "list_items", "label_my_hurt", "label_my_index", "btn_back"];
            return WorldBossHurtListSkin;
        })(egret.gui.Skin);
        game.WorldBossHurtListSkin = WorldBossHurtListSkin;
        egret.registerClass(WorldBossHurtListSkin,"skins.game.WorldBossHurtListSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
