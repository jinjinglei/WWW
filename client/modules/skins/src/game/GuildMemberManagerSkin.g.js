var skins;
(function (skins) {
    var game;
    (function (game) {
        var GuildMemberManagerSkin = (function (_super) {
            __extends(GuildMemberManagerSkin, _super);
            function GuildMemberManagerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=GuildMemberManagerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return GuildMemberManagerSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [222, 0, egret.gui.getScale9Grid("200,50,10,10"), "panel_rdf", 433, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_bg_red", 112, 70]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "职位", 0xFABD24, 123, 45]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "战力", 0xFABD24, 123, 74]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "贡献", 0xFABD24, 123, 106]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "当前爵位: ", 0xFABD24, 121, 167]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "会员等级: ", 0xFABD24, 121, 137]);
                return t;
            };
            p.btn_change_i = function () {
                var t = new egret.gui.Button();
                this.btn_change = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_zhuangranghuizhang", "按钮", skins.comp.Btn_3_0_Skin, 60, 237]);
                return t;
            };
            p.btn_detail_i = function () {
                var t = new egret.gui.Button();
                this.btn_detail = t;
                this.__s(t, ["horizontalCenter", "icon", "label", "skinName", "y"], [0.5, "btn_txt_jueweixiangqing", "授予爵位", skins.comp.Btn_3_0_Skin, 277]);
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_tishengzhiwu", "按钮", skins.comp.Btn_3_0_Skin, 250, 237]);
                return t;
            };
            p.btn_out_i = function () {
                var t = new egret.gui.Button();
                this.btn_out = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_tichugonghui", "按钮", skins.comp.Btn_3_0_Skin, 62, 318]);
                return t;
            };
            p.btn_release_i = function () {
                var t = new egret.gui.Button();
                this.btn_release = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_jiechu", "按钮", skins.comp.Btn_3_0_Skin, 249, 238]);
                return t;
            };
            p.btn_setE_i = function () {
                var t = new egret.gui.Button();
                this.btn_setE = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_shouquanjuewei", "授予爵位", skins.comp.Btn_3_0_Skin, 252, 318]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [424, 0, skins.comp.Dlg_Close_0_Skin, "btn_txt_gonghuiguanli", 440, 152]);
                t.elementsContent = [this.__10_i()];
                return t;
            };
            p.ico_head_i = function () {
                var t = new g_comp.Ico_Head();
                this.ico_head = t;
                this.__s(t, ["x", "y"], [33, 35]);
                return t;
            };
            p.label_attack_i = function () {
                var t = new egret.gui.Label();
                this.label_attack = t;
                this.__s(t, ["size", "text", "width", "x", "y"], [18, "1989", 134, 207, 74]);
                return t;
            };
            p.label_ennoble_i = function () {
                var t = new egret.gui.Label();
                this.label_ennoble = t;
                this.__s(t, ["size", "text", "width", "x", "y"], [18, "无", 200, 207, 167]);
                return t;
            };
            p.label_level_i = function () {
                var t = new egret.gui.Label();
                this.label_level = t;
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [18, "Lv.%s", 0xFFFFFF, 150, 233, 16]);
                return t;
            };
            p.label_memberLvl_i = function () {
                var t = new egret.gui.Label();
                this.label_memberLvl = t;
                this.__s(t, ["size", "text", "width", "x", "y"], [18, "无", 100, 207, 137]);
                return t;
            };
            p.label_name_i = function () {
                var t = new egret.gui.Label();
                this.label_name = t;
                this.__s(t, ["size", "text", "width", "x", "y"], [18, "标签", 150, 123, 17]);
                return t;
            };
            p.label_position_i = function () {
                var t = new egret.gui.Label();
                this.label_position = t;
                this.__s(t, ["size", "text", "textColor", "width", "x", "y"], [18, "会长", 0x38C908, 134, 207, 44]);
                return t;
            };
            p.label_upact_i = function () {
                var t = new egret.gui.Label();
                this.label_upact = t;
                this.__s(t, ["size", "text", "width", "x", "y"], [18, "999", 134, 207, 106]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [0, 44]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i(), this.label_position_i(), this.label_attack_i(), this.label_upact_i(), this.label_level_i(), this.label_name_i(), this.__8_i(), this.label_ennoble_i(), this.__9_i(), this.label_memberLvl_i(), this.btn_change_i(), this.btn_get_i(), this.ico_head_i(), this.btn_release_i(), this.btn_setE_i(), this.btn_detail_i(), this.btn_out_i()];
                return t;
            };
            GuildMemberManagerSkin._skinParts = ["label_position", "label_attack", "label_upact", "label_level", "label_name", "label_ennoble", "label_memberLvl", "btn_change", "btn_get", "ico_head", "btn_release", "btn_setE", "btn_detail", "btn_out", "container"];
            return GuildMemberManagerSkin;
        })(egret.gui.Skin);
        game.GuildMemberManagerSkin = GuildMemberManagerSkin;
        egret.registerClass(GuildMemberManagerSkin,"skins.game.GuildMemberManagerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
