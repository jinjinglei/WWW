var skins;
(function (skins) {
    var game;
    (function (game) {
        var CreateRoleItemSkin = (function (_super) {
            __extends(CreateRoleItemSkin, _super);
            function CreateRoleItemSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.ico_1_i(), this.ico_0_i(), this.ico_job_i(), this.img_border_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [
                        new egret.gui.SetProperty("__4", "source", "item_bg_gray_createRole")
                    ])
                ];
            }
            var d = __define,c=CreateRoleItemSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CreateRoleItemSkin._skinParts;
                }
            );
            p.ico_0_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_0 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [69, "avatar_1_0_1", 69, 236, 23]);
                return t;
            };
            p.ico_1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_1 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [69, "avatar_1_1_1", 69, 105, 23]);
                return t;
            };
            p.ico_job_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_job = t;
                this.__s(t, ["source", "x", "y"], ["txt_job_1", 173, 14]);
                return t;
            };
            p.img_border_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_border = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [104, "border_light", 104, 88, 6]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "item_bg_createRole", 0]);
                return t;
            };
            CreateRoleItemSkin._skinParts = ["ico_1", "ico_0", "ico_job", "img_border"];
            return CreateRoleItemSkin;
        })(egret.gui.Skin);
        game.CreateRoleItemSkin = CreateRoleItemSkin;
        egret.registerClass(CreateRoleItemSkin,"skins.game.CreateRoleItemSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
