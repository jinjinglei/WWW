var skins;
(function (skins) {
    var game;
    (function (game) {
        var IndexRegisterSkin = (function (_super) {
            __extends(IndexRegisterSkin, _super);
            function IndexRegisterSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.container_i()];
                this.__4_i();
                this.__5_i();
                this.__6_i();
                this.inputUser_i();
                this.inputPwd_i();
                this.__7_i();
                this.inputConfirmPwd_i();
                this.btnCancel_i();
                this.btnRegister_i();
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.AddItems("__4", "container", "first", ""),
                        new egret.gui.AddItems("__5", "container", "last", ""),
                        new egret.gui.AddItems("__6", "container", "last", ""),
                        new egret.gui.AddItems("inputUser", "container", "last", ""),
                        new egret.gui.AddItems("inputPwd", "container", "last", ""),
                        new egret.gui.AddItems("__7", "container", "last", ""),
                        new egret.gui.AddItems("inputConfirmPwd", "container", "last", ""),
                        new egret.gui.AddItems("btnCancel", "container", "last", ""),
                        new egret.gui.AddItems("btnRegister", "container", "last", "")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("__4", "container", "first", ""),
                        new egret.gui.AddItems("__5", "container", "last", ""),
                        new egret.gui.AddItems("__6", "container", "last", ""),
                        new egret.gui.AddItems("inputUser", "container", "last", ""),
                        new egret.gui.AddItems("inputPwd", "container", "last", ""),
                        new egret.gui.AddItems("__7", "container", "last", ""),
                        new egret.gui.AddItems("inputConfirmPwd", "container", "last", ""),
                        new egret.gui.AddItems("btnCancel", "container", "last", ""),
                        new egret.gui.AddItems("btnRegister", "container", "last", ""),
                        new egret.gui.SetProperty("__5", "text", "账号111")
                    ]),
                    new egret.gui.State("selected", [
                        new egret.gui.AddItems("__4", "container", "first", ""),
                        new egret.gui.AddItems("__5", "container", "last", ""),
                        new egret.gui.AddItems("__6", "container", "last", ""),
                        new egret.gui.AddItems("inputUser", "container", "last", ""),
                        new egret.gui.AddItems("inputPwd", "container", "last", ""),
                        new egret.gui.AddItems("__7", "container", "last", ""),
                        new egret.gui.AddItems("inputConfirmPwd", "container", "last", ""),
                        new egret.gui.AddItems("btnCancel", "container", "last", ""),
                        new egret.gui.AddItems("btnRegister", "container", "last", ""),
                        new egret.gui.SetProperty("__5", "text", "账号fff")
                    ])
                ];
            }
            var d = __define,c=IndexRegisterSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return IndexRegisterSkin._skinParts;
                }
            );
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__5 = t;
                this.__s(t, ["size", "text", "x", "y"], [24, "账号", 55, 52]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__6 = t;
                this.__s(t, ["size", "text", "x", "y"], [24, "密码", 55, 120]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__7 = t;
                this.__s(t, ["size", "text", "x", "y"], [24, "确认密码", 35, 192]);
                return t;
            };
            p.btnCancel_i = function () {
                var t = new egret.gui.Button();
                this.btnCancel = t;
                this.__s(t, ["label", "left", "verticalCenter"], ["取消", 96, 89.5]);
                return t;
            };
            p.btnRegister_i = function () {
                var t = new egret.gui.Button();
                this.btnRegister = t;
                this.__s(t, ["label", "right", "verticalCenter"], ["确定", 94, 89.5]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Group();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [400, 0, 0, 480]);
                t.elementsContent = [];
                return t;
            };
            p.inputConfirmPwd_i = function () {
                var t = new egret.gui.TextInput();
                this.inputConfirmPwd = t;
                this.__s(t, ["height", "width", "x", "y"], [50, 300, 152, 181]);
                return t;
            };
            p.inputPwd_i = function () {
                var t = new egret.gui.TextInput();
                this.inputPwd = t;
                this.__s(t, ["height", "width", "x", "y"], [50, 300, 152, 112]);
                return t;
            };
            p.inputUser_i = function () {
                var t = new egret.gui.TextInput();
                this.inputUser = t;
                this.__s(t, ["height", "width", "x", "y"], [50, 300, 152, 42]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [46, 0, 0, "s9g_dlg_1", 0]);
                return t;
            };
            IndexRegisterSkin._skinParts = ["inputUser", "inputPwd", "inputConfirmPwd", "btnCancel", "btnRegister", "container"];
            return IndexRegisterSkin;
        })(egret.gui.Skin);
        game.IndexRegisterSkin = IndexRegisterSkin;
        egret.registerClass(IndexRegisterSkin,"skins.game.IndexRegisterSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
