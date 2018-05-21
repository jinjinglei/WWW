var skins;
(function (skins) {
    var game;
    (function (game) {
        var RoleBuzhenSkin = (function (_super) {
            __extends(RoleBuzhenSkin, _super);
            function RoleBuzhenSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_save_i(), this.btn_cancel_i(), this.__4_i(), this.__5_i(), this.list_items_i(), this.__6_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=RoleBuzhenSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RoleBuzhenSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["黑体", 10, 18, "依次点击下列两个\n角色头像交换他们的位置", "center", 13422001, false, 377, 52, 147]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "lineSpacing", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["黑体", 10, 16, "位置1的角色战斗中位于队伍最前端\n2号位次之以此类推", "center", 0x59B2E6, false, 377, 52, 537]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_buzhengs", 203, 57]);
                return t;
            };
            p.btn_cancel_i = function () {
                var t = new egret.gui.Button();
                this.btn_cancel = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [39, "btn_txt_g_quxiaog", skins.comp.Btn_3_27_Skin, 120, 276, 464]);
                return t;
            };
            p.btn_save_i = function () {
                var t = new egret.gui.Button();
                this.btn_save = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [39, "btn_txt_g_baocuns", skins.comp.Btn_3_24_Skin, 120, 90, 464]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "skinName", "y"], [130, 0, skins.game.RoleBuzhenItemSkin, skins.comp.List_Empty_H_C_Skin, 244]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_bg_buzheng", 19, 47]);
                return t;
            };
            RoleBuzhenSkin._skinParts = ["btn_save", "btn_cancel", "list_items"];
            return RoleBuzhenSkin;
        })(egret.gui.Skin);
        game.RoleBuzhenSkin = RoleBuzhenSkin;
        egret.registerClass(RoleBuzhenSkin,"skins.game.RoleBuzhenSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
