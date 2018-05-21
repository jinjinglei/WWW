var skins;
(function (skins) {
    var game;
    (function (game) {
        var IndexLoginSkin = (function (_super) {
            __extends(IndexLoginSkin, _super);
            function IndexLoginSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.transitions = [this.__11_i()];
                this.elementsContent = [this.container_i()];
                this.__3_i();
                this.__4_i();
                this.__5_i();
                this.label_userName_i();
                this.label_pwd_i();
                this.btnRegister_i();
                this.btnRemember_i();
                this.markRemember_i();
                this.btnQuickLogin_i();
                this.btnForgetPwd_i();
                this.btnLogin_i();
                this.states = [
                    new egret.gui.State("normal", [
                        new egret.gui.AddItems("__3", "container", "first", ""),
                        new egret.gui.AddItems("__4", "container", "last", ""),
                        new egret.gui.AddItems("__5", "container", "last", ""),
                        new egret.gui.AddItems("label_userName", "container", "last", ""),
                        new egret.gui.AddItems("label_pwd", "container", "last", ""),
                        new egret.gui.AddItems("btnRegister", "container", "last", ""),
                        new egret.gui.AddItems("btnRemember", "container", "last", ""),
                        new egret.gui.AddItems("markRemember", "container", "last", ""),
                        new egret.gui.AddItems("btnQuickLogin", "container", "last", ""),
                        new egret.gui.AddItems("btnForgetPwd", "container", "last", ""),
                        new egret.gui.AddItems("btnLogin", "container", "last", "")
                    ]),
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("__3", "container", "first", ""),
                        new egret.gui.AddItems("__4", "container", "last", ""),
                        new egret.gui.AddItems("__5", "container", "last", ""),
                        new egret.gui.AddItems("label_userName", "container", "last", ""),
                        new egret.gui.AddItems("label_pwd", "container", "last", ""),
                        new egret.gui.AddItems("btnRegister", "container", "last", ""),
                        new egret.gui.AddItems("btnRemember", "container", "last", ""),
                        new egret.gui.AddItems("markRemember", "container", "last", ""),
                        new egret.gui.AddItems("btnQuickLogin", "container", "last", ""),
                        new egret.gui.AddItems("btnForgetPwd", "container", "last", ""),
                        new egret.gui.AddItems("btnLogin", "container", "last", ""),
                        new egret.gui.SetProperty("__4", "text", "账号111")
                    ])
                ];
            }
            var d = __define,c=IndexLoginSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return IndexLoginSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.Transition();
                this.__s(t, ["fromState", "toState"], ["normal", "selected"]);
                t.effect = this.__10_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__3 = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [41, 0, 0, "s9g_dlg_1", 5]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.Label();
                this.__4 = t;
                this.__s(t, ["size", "text", "x", "y"], [26, "账号", 57, 61]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__5 = t;
                this.__s(t, ["size", "text", "x", "y"], [26, "密码", 57, 157]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Fade();
                this.__s(t, ["alphaFrom", "duration", "repeatCount"], [0, 500, 100]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Bounce();
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.Scale();
                this.__s(t, ["autoCenterTransform", "repeatCount", "scaleXBy", "scaleXFrom", "scaleXTo", "scaleYFrom", "scaleYTo"], [true, 100, 0, 0.3, 1, 0.3, 1]);
                t.easer = this.__7_i();
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Parallel();
                this.__9 = t;
                t.target = this.markRemember;
                t.children = [this.__6_i(), this.__8_i()];
                return t;
            };
            p.btnForgetPwd_i = function () {
                var t = new egret.gui.Button();
                this.btnForgetPwd = t;
                this.__s(t, ["horizontalCenter", "label", "verticalCenter", "visible"], [150, "找回密码", 50, false]);
                return t;
            };
            p.btnLogin_i = function () {
                var t = new egret.gui.Button();
                this.btnLogin = t;
                this.__s(t, ["horizontalCenter", "label", "verticalCenter"], [-89, "登录游戏", 100.5]);
                return t;
            };
            p.btnQuickLogin_i = function () {
                var t = new egret.gui.Button();
                this.btnQuickLogin = t;
                this.__s(t, ["horizontalCenter", "label", "verticalCenter", "visible"], [-140, "快速进入", 50, false]);
                return t;
            };
            p.btnRegister_i = function () {
                var t = new egret.gui.Button();
                this.btnRegister = t;
                this.__s(t, ["label", "x", "y"], ["注册账号", 258, 282]);
                return t;
            };
            p.btnRemember_i = function () {
                var t = new egret.gui.UIAsset();
                this.btnRemember = t;
                this.__s(t, ["source", "x", "y"], ["ico_remember", 281, 214]);
                return t;
            };
            p.container_i = function () {
                var t = new egret.gui.Group();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width"], [400, 0, 0, 480]);
                t.elementsContent = [];
                return t;
            };
            p.label_pwd_i = function () {
                var t = new egret.gui.TextInput();
                this.label_pwd = t;
                this.__s(t, ["height", "width", "x", "y"], [50, 300, 137, 149]);
                return t;
            };
            p.label_userName_i = function () {
                var t = new egret.gui.TextInput();
                this.label_userName = t;
                this.__s(t, ["height", "width", "x", "y"], [50, 300, 139, 53]);
                return t;
            };
            p.markRemember_i = function () {
                var t = new egret.gui.UIAsset();
                this.markRemember = t;
                this.__s(t, ["source", "x", "y"], ["ico_select_0", 376, 209]);
                if (this.__9) {
                    this.__9.target = this.markRemember;
                }
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Parallel();
                t.children = [this.__9_i()];
                return t;
            };
            IndexLoginSkin._skinParts = ["label_userName", "label_pwd", "btnRegister", "btnRemember", "markRemember", "btnQuickLogin", "btnForgetPwd", "btnLogin", "container"];
            return IndexLoginSkin;
        })(egret.gui.Skin);
        game.IndexLoginSkin = IndexLoginSkin;
        egret.registerClass(IndexLoginSkin,"skins.game.IndexLoginSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
