var skins;
(function (skins) {
    var game;
    (function (game) {
        var FriendBreakDialogSkin = (function (_super) {
            __extends(FriendBreakDialogSkin, _super);
            function FriendBreakDialogSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=FriendBreakDialogSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return FriendBreakDialogSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [139, "bkg_xiongdi_breaktop", 427, 5, 31]);
                return t;
            };
            p.__5_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__6_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__5_i(), this.__6_i(), this.__7_i()];
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "width", "y"], [571, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_xiongdi_break", 440, 74]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.list_items_i(), this.sk_null_i(), this.label_tips_i()];
                return t;
            };
            p.label_tips_i = function () {
                var t = new mo.gui.Label();
                this.label_tips = t;
                this.__s(t, ["fontFamily", "height", "lineSpacing", "paddingTop", "size", "text", "textAlign", "verticalAlign", "width", "x", "y"], ["楷体", 104, 8, 3, 16, "[ubb color=#e7bd28 fontSize=24]请选择你要解除关系的兄弟：[/ubb][/br][ubb color=#d84a49 fontSize=20]（一旦解除关系，将不再享受兄弟之间的任何福利）[/ubb]", "left", "top", 406, 19, 51]);
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "x", "y"], [380, 0, skins.game.FriendListItemSkin, 420, 20, 176]);
                t.dataProvider = this.__9_i();
                return t;
            };
            p.sk_null_i = function () {
                var t = new egret.gui.SkinnableComponent();
                this.sk_null = t;
                this.__s(t, ["skinName", "width", "x", "y"], [skins.game.FriendListNullItemSkin, 418, 12, 176]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "percentWidth", "scale9Grid", "source", "touchEnabled", "verticalCenter", "width"], [551, 0, 100, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", false, 15, 440]);
                return t;
            };
            FriendBreakDialogSkin._skinParts = ["list_items", "sk_null", "label_tips", "container"];
            return FriendBreakDialogSkin;
        })(egret.gui.Skin);
        game.FriendBreakDialogSkin = FriendBreakDialogSkin;
        egret.registerClass(FriendBreakDialogSkin,"skins.game.FriendBreakDialogSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
