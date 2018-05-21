var skins;
(function (skins) {
    var game;
    (function (game) {
        var CreateGuildSkin = (function (_super) {
            __extends(CreateGuildSkin, _super);
            function CreateGuildSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CreateGuildSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CreateGuildSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0.5, 18, "老大,请为您的行会取个名字!", 92]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["ico_yuanbao", false, 120, 195]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchEnabled", "x", "y"], ["yuanbao_round_bg", false, 0, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [23, 95, 160, 195]);
                t.elementsContent = [this.__6_i(), this.label_yuanbao_i()];
                return t;
            };
            p.btn_create_i = function () {
                var t = new egret.gui.Button();
                this.btn_create = t;
                this.__s(t, ["horizontalCenter", "label", "y"], [0.5, "创建", 301]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Panel();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [350, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_chuangjiangonghui", 435, 129]);
                t.elementsContent = [this.btn_create_i(), this.__3_i(), this.grp_gold_i(), this.grp_yuanbao_i(), this.__4_i(), this.inputName_i(), this.__5_i(), this.__7_i()];
                return t;
            };
            p.grp_gold_i = function () {
                var t = new egret.gui.Group();
                this.grp_gold = t;
                this.__s(t, ["x", "y"], [14, 10]);
                return t;
            };
            p.grp_yuanbao_i = function () {
                var t = new egret.gui.Group();
                this.grp_yuanbao = t;
                this.__s(t, ["x", "y"], [212, 11]);
                return t;
            };
            p.inputName_i = function () {
                var t = new egret.gui.TextInput();
                this.inputName = t;
                t.setStyle("size", 18);
                t.setStyle("textAlign", "left");
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["height", "horizontalCenter", "skinName", "textColor", "width", "y"], [50, 0.5, skins.comp.Input_0_Skin, 0xDA9F00, 220, 131]);
                return t;
            };
            p.label_yuanbao_i = function () {
                var t = new mo.gui.Label();
                this.label_yuanbao = t;
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "verticalAlign", "verticalCenter", "width", "x"], ["楷体", 18, "50", "center", 0xDA9F00, false, "middle", 0, 90, 0]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "source", "width", "y"], [220, 0.5, "s9g_black_0", 432, 49]);
                return t;
            };
            CreateGuildSkin._skinParts = ["btn_create", "grp_gold", "grp_yuanbao", "inputName", "label_yuanbao", "container"];
            return CreateGuildSkin;
        })(egret.gui.Skin);
        game.CreateGuildSkin = CreateGuildSkin;
        egret.registerClass(CreateGuildSkin,"skins.game.CreateGuildSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
