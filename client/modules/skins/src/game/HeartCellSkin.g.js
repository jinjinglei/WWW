var skins;
(function (skins) {
    var game;
    (function (game) {
        var HeartCellSkin = (function (_super) {
            __extends(HeartCellSkin, _super);
            function HeartCellSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.elementsContent = [this.__4_i(), this.ico_heart_i(), this.grp_heart_i(), this.grp_can_i(), this.grp_cannot_i(), this.rect_touch_i(), this.btn_change_i()];
                this.states = [
                    new egret.gui.State("up", []),
                    new egret.gui.State("down", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=HeartCellSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return HeartCellSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_xinfaditao";
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "层数：", 0xE7C65D, 106, 63]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "特性：", 0xE7C65D, 212, 63]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [20, "可学习：点击学习新的心法", 0x1ECC0F, 106, 64]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_plus_3", 34, 41]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["btn_genhuand", 0, 0]);
                return t;
            };
            p.btn_change_i = function () {
                var t = new egret.gui.Group();
                this.btn_change = t;
                this.__s(t, ["x", "y"], [326, 16]);
                t.elementsContent = [this.__9_i(), this.__10_i()];
                return t;
            };
            p.grp_can_i = function () {
                var t = new egret.gui.Group();
                this.grp_can = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.label_title_can_i(), this.__7_i(), this.__8_i()];
                return t;
            };
            p.grp_cannot_i = function () {
                var t = new egret.gui.Group();
                this.grp_cannot = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible", "x", "y"], [0, 0, 0, 0, false, 10, 10]);
                t.elementsContent = [this.label_title_cannot_i(), this.label_cannot_i()];
                return t;
            };
            p.grp_heart_i = function () {
                var t = new egret.gui.Group();
                this.grp_heart = t;
                this.__s(t, ["bottom", "left", "right", "top"], [0, 0, 0, 0]);
                t.elementsContent = [this.ico_title_i(), this.__5_i(), this.__6_i(), this.label_ceng_i(), this.label_desc_i()];
                return t;
            };
            p.ico_heart_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_heart = t;
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [-153.5, "ico_xinfahuitai", 0]);
                return t;
            };
            p.ico_title_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_title = t;
                this.__s(t, ["horizontalCenter", "verticalCenter"], [4, -29]);
                return t;
            };
            p.label_cannot_i = function () {
                var t = new mo.gui.Label();
                this.label_cannot = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "角色%s级开启（Vip%s可提前开启）", 0xE33109, 106, 65]);
                return t;
            };
            p.label_ceng_i = function () {
                var t = new egret.gui.Label();
                this.label_ceng = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "1/10", 156, 63]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "主攻", 262, 63]);
                return t;
            };
            p.label_title_can_i = function () {
                var t = new mo.gui.Label();
                this.label_title_can = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [24, "心法槽位%s", 0x1ECC0F, 163, 15]);
                return t;
            };
            p.label_title_cannot_i = function () {
                var t = new mo.gui.Label();
                this.label_title_cannot = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [24, "心法槽位%s", 0x828282, 163, 15]);
                return t;
            };
            p.rect_touch_i = function () {
                var t = new egret.gui.UIAsset();
                this.rect_touch = t;
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "touch_rect", 0]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["btn_txt_g_genhuanlf", 21, 5]);
                return t;
            };
            HeartCellSkin._skinParts = ["ico_heart", "ico_title", "label_ceng", "label_desc", "grp_heart", "label_title_can", "grp_can", "label_title_cannot", "label_cannot", "grp_cannot", "rect_touch", "btn_change"];
            return HeartCellSkin;
        })(egret.gui.Skin);
        game.HeartCellSkin = HeartCellSkin;
        egret.registerClass(HeartCellSkin,"skins.game.HeartCellSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
