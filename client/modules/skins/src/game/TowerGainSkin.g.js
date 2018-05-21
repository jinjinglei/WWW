var skins;
(function (skins) {
    var game;
    (function (game) {
        var TowerGainSkin = (function (_super) {
            __extends(TowerGainSkin, _super);
            function TowerGainSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.grp_passAward_i(), this.btn_again1_i(), this.__12_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=TowerGainSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TowerGainSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "y"], [40, 0.5, 470]);
                t.layout = this.__11_i();
                t.elementsContent = [this.label_desc_i(), this.grp_cost_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_gongxihuodenl", 5, 204]);
                return t;
            };
            p.__4_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item0", true, 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item1", true, 83, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["name", "showItemInfoOnClick", "x", "y"], ["ico_item2", true, 93, 10]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["gap", "horizontalAlign"], [25, "center"]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__9_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.btn_again1_i = function () {
                var t = new egret.gui.Button();
                this.btn_again1 = t;
                this.__s(t, ["horizontalCenter", "icon", "scaleX", "scaleY", "skinName", "y"], [-0.07499999999998863, "tit_txt_g_zaixunyicigs", 0.85, 0.85, skins.comp.Btn_3_6_Skin, 427]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["right", "source", "y"], [2, "btn_close_0", 192]);
                return t;
            };
            p.grp_cost_i = function () {
                var t = new egret.gui.Group();
                this.grp_cost = t;
                this.__s(t, ["height", "horizontalCenter", "x", "y"], [30, 0.5, 10, 10]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__8_i(), this.__9_i()];
                return t;
            };
            p.grp_passAward_i = function () {
                var t = new egret.gui.Group();
                this.grp_passAward = t;
                this.__s(t, ["scaleX", "scaleY", "width", "x", "y"], [0.9, 0.9, 269, 121, 302]);
                t.layout = this.__7_i();
                t.elementsContent = [this.__4_i(), this.__5_i(), this.__6_i()];
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["size", "text", "x", "y"], [16, "今日剩余免费次数", 0, 7]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            TowerGainSkin._skinParts = ["btn_close", "grp_passAward", "btn_again1", "label_desc", "grp_cost"];
            return TowerGainSkin;
        })(egret.gui.Skin);
        game.TowerGainSkin = TowerGainSkin;
        egret.registerClass(TowerGainSkin,"skins.game.TowerGainSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
