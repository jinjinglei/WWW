var skins;
(function (skins) {
    var game;
    (function (game) {
        var BaseTopRoleSkin = (function (_super) {
            __extends(BaseTopRoleSkin, _super);
            function BaseTopRoleSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.ico_combat_i(), this.label_nickName_i(), this.img_title_i(), this.label_job_i(), this.label_combat_i(), this.__7_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BaseTopRoleSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BaseTopRoleSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "touchEnabled", "y"], [108, 0, "tit_bg", false, 38]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 48, "panel_task_title", 480, 0, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [10, "center"]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["width", "x", "y"], [271, 104, 53]);
                t.layout = this.__6_i();
                t.elementsContent = [this.ico_hero0_i(), this.ico_hero1_i(), this.ico_hero2_i(), this.ico_hero3_i()];
                return t;
            };
            p.ico_combat_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_combat = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 31, "ico_combat", 126, 174, 160]);
                return t;
            };
            p.ico_hero0_i = function () {
                var t = new g_comp.Ico_Hero();
                this.ico_hero0 = t;
                this.__s(t, ["x", "y"], [0, 0]);
                return t;
            };
            p.ico_hero1_i = function () {
                var t = new g_comp.Ico_Hero();
                this.ico_hero1 = t;
                this.__s(t, ["x", "y"], [70, 0]);
                return t;
            };
            p.ico_hero2_i = function () {
                var t = new g_comp.Ico_Hero();
                this.ico_hero2 = t;
                this.__s(t, ["x", "y"], [141, 0]);
                return t;
            };
            p.ico_hero3_i = function () {
                var t = new g_comp.Ico_Hero();
                this.ico_hero3 = t;
                this.__s(t, ["x", "y"], [211, 0]);
                return t;
            };
            p.img_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_title = t;
                this.__s(t, ["source", "x", "y"], ["ntc_text_role", 215, 8]);
                return t;
            };
            p.label_combat_i = function () {
                var t = new mo.gui.Label();
                this.label_combat = t;
                this.__s(t, ["fontFamily", "size", "stroke", "strokeColor", "text", "textAlign", "textColor", "width", "x", "y"], ["楷体", 22, 1, 0x3A2200, "999", "left", 0xDDA600, 119, 235, 163]);
                return t;
            };
            p.label_job_i = function () {
                var t = new mo.gui.Label();
                this.label_job = t;
                this.__s(t, ["size", "style", "text", "textAlign", "width", "x", "y"], [20, 5000, "战士", "center", 185, 145, 128]);
                return t;
            };
            p.label_nickName_i = function () {
                var t = new mo.gui.Label();
                this.label_nickName = t;
                this.__s(t, ["horizontalCenter", "size", "y"], [0, 20, 14]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "top", "y"], [-4, "panel_role_name", 106, 20]);
                return t;
            };
            BaseTopRoleSkin._skinParts = ["ico_combat", "label_nickName", "img_title", "label_job", "label_combat", "ico_hero0", "ico_hero1", "ico_hero2", "ico_hero3"];
            return BaseTopRoleSkin;
        })(egret.gui.Skin);
        game.BaseTopRoleSkin = BaseTopRoleSkin;
        egret.registerClass(BaseTopRoleSkin,"skins.game.BaseTopRoleSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
