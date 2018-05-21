var skins;
(function (skins) {
    var game;
    (function (game) {
        var CreateRoleSkin = (function (_super) {
            __extends(CreateRoleSkin, _super);
            function CreateRoleSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.__6_i(), this.label_job_desc_i(), this.grp_create_i(), this.label_unlock_i(), this.btn_create_i(), this.list_jobs_i(), this.btn_back_i(), this.grp_userAgreement_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CreateRoleSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CreateRoleSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "panel_top_createRole";
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                t.setStyle("textAlign", "center");
                this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("49,27,296,43"), "panel_task_item_bg", 429, 24, 463]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [233, 0, "s9g_dlg_1", 480, 567]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "x", "y"], ["宋体", 18, "允许输入中文英文数字，长度不超过6个汉字", "center", 13750708, false, 0, 12]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], ["楷体", 26, 22, "角色名", 14327552, 76, 0, -28]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.Button();
                this.btn_back = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_back_Skin, 418, 92]);
                return t;
            };
            p.btn_create_i = function () {
                var t = new egret.gui.Button();
                this.btn_create = t;
                this.__s(t, ["bottom", "horizontalCenter", "icon", "skinName"], [82, 0.5, "btn_txt_g_createRole", skins.comp.Btn_3_8_Skin]);
                return t;
            };
            p.btn_dice_i = function () {
                var t = new egret.gui.Button();
                this.btn_dice = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_dice_Skin, 267, -42]);
                return t;
            };
            p.ckb_argree_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_argree = t;
                this.__s(t, ["selected", "x", "y"], [true, 0, 0]);
                return t;
            };
            p.grp_create_i = function () {
                var t = new egret.gui.Group();
                this.grp_create = t;
                this.__s(t, ["x", "y"], [66, 615]);
                t.elementsContent = [this.__7_i(), this.__8_i(), this.inputName_i(), this.btn_dice_i()];
                return t;
            };
            p.grp_userAgreement_i = function () {
                var t = new egret.gui.Group();
                this.grp_userAgreement = t;
                this.__s(t, ["x", "y"], [148, 744]);
                t.elementsContent = [this.ckb_argree_i(), this.img_userAgreement_i()];
                return t;
            };
            p.img_userAgreement_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_userAgreement = t;
                this.__s(t, ["source", "x", "y"], ["ico_tongyixieyi", 43, 9]);
                return t;
            };
            p.inputName_i = function () {
                var t = new egret.gui.TextInput();
                this.inputName = t;
                t.setStyle("fontFamily", "楷体");
                t.setStyle("size", 20);
                this.__s(t, ["height", "text", "textColor", "width", "x", "y"], [46, "系统随机的角色名", 13750708, 189, 84, -35]);
                return t;
            };
            p.label_job_desc_i = function () {
                var t = new mo.gui.Label();
                this.label_job_desc = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textAlign", "textColor", "width", "x", "y"], ["宋体", 46, 19, "%s:%s", "left", 13750708, 380, 50, 487]);
                return t;
            };
            p.label_unlock_i = function () {
                var t = new mo.gui.Label();
                this.label_unlock = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textColor", "verticalCenter"], ["楷体", 0, 22, "选择第%s个角色职业", 0xDA9F00, 243]);
                return t;
            };
            p.list_jobs_i = function () {
                var t = new egret.gui.List();
                this.list_jobs = t;
                this.__s(t, ["horizontalCenter", "itemRendererSkinName", "y"], [0.5, skins.game.CreateRoleItemSkin, 102]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_bg_createRole", 0, 72]);
                return t;
            };
            CreateRoleSkin._skinParts = ["label_job_desc", "inputName", "btn_dice", "grp_create", "label_unlock", "btn_create", "list_jobs", "btn_back", "ckb_argree", "img_userAgreement", "grp_userAgreement"];
            return CreateRoleSkin;
        })(egret.gui.Skin);
        game.CreateRoleSkin = CreateRoleSkin;
        egret.registerClass(CreateRoleSkin,"skins.game.CreateRoleSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
