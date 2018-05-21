var skins;
(function (skins) {
    var game;
    (function (game) {
        var FriendDialogSkin = (function (_super) {
            __extends(FriendDialogSkin, _super);
            function FriendDialogSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FriendDialogSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FriendDialogSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "percentWidth", "scale9Grid", "source", "touchEnabled", "verticalCenter", "width"], [587, 0, 100, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", false, 12.5, 440]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [195, "bkg_xiongdi_top", 424, 8, 37]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [81, "bkg_xiongdi_stat", 176, 248, 49]);
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.btn_break_i = function () {
                var t = new egret.gui.Button();
                this.btn_break = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["tit_txt_xiongdi_break", skins.comp.Btn_9_2_Skin, 71, 184]);
                return t;
            };
            p.btn_get_i = function () {
                var t = new egret.gui.Button();
                this.btn_get = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_lingqu", skins.comp.Btn_9_2_Skin, 291, 136]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.Button();
                this.btn_help = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["txt_btn_xiongdi_help", skins.comp.Btn_9_2_Skin, 291, 184]);
                return t;
            };
            p.btn_reinvite_i = function () {
                var t = new egret.gui.Button();
                this.btn_reinvite = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [50, "txt_btn_xiongdi_inviteagain", skins.comp.Btn_3_0s_Skin, 173, 30, 66]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [610, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_xiongdi", 440, 74]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.label_stat_i(), this.label_value_i(), this.list_items_i(), this.sk_null_i(), this.btn_reinvite_i(), this.btn_get_i(), this.btn_help_i(), this.btn_break_i()];
                return t;
            };
            p.label_stat_i = function () {
                var t = new egret.gui.Label();
                this.label_stat = t;
                this.__s(t, ["height", "lineSpacing", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], [60, 4, 18, "STAT\nSTAT", "center", "middle", 179, 246, 58]);
                return t;
            };
            p.label_value_i = function () {
                var t = new egret.gui.Label();
                this.label_value = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "width", "x", "y"], ["楷体", 27, 22, "可领取", 0xe5c25c, 205, 34, 137]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "x", "y"], [358, 0, skins.game.FriendListItemSkin, 420, 10, 240]);
                t.dataProvider = this.__10_i();
                return t;
            };
            p.sk_null_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.sk_null = t;
                this.__s(t, ["skinName", "width", "x", "y"], [skins.game.FriendListNullItemSkin, 418, 11, 241]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__6_i(), this.__7_i(), this.__8_i()];
                return t;
            };
            FriendDialogSkin._skinParts = ["label_stat", "label_value", "list_items", "sk_null", "btn_reinvite", "btn_get", "btn_help", "btn_break", "container"];
            return FriendDialogSkin;
        })(egret.gui.Skin);
        game.FriendDialogSkin = FriendDialogSkin;
        egret.registerClass(FriendDialogSkin,"skins.game.FriendDialogSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
