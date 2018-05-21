var skins;
(function (skins) {
    var game;
    (function (game) {
        var RoleSkillSkin = (function (_super) {
            __extends(RoleSkillSkin, _super);
            function RoleSkillSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.btn_close_i(), this.res_bar_i(), this.list_skills_i(), this.btn_help_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RoleSkillSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RoleSkillSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [445, "s9g_dlg_1", 439, 23, 228]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 411, 103]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "x", "y"], ["ico_help", 0, 102]);
                return t;
            };
            p.list_skills_i = function () {
                var t = new egret.gui.List();
                this.list_skills = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [404, 0, skins.game.SkillItemSkin, 437, 249]);
                t.layout = this.__5_i();
                return t;
            };
            p.res_bar_i = function () {
                var t = new g_comp.ResBar();
                this.res_bar = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.ResBarSkin, 59, 685]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_forge", 0]);
                return t;
            };
            RoleSkillSkin._skinParts = ["btn_close", "res_bar", "list_skills", "btn_help"];
            return RoleSkillSkin;
        })(egret.gui.Skin);
        game.RoleSkillSkin = RoleSkillSkin;
        egret.registerClass(RoleSkillSkin,"skins.game.RoleSkillSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
