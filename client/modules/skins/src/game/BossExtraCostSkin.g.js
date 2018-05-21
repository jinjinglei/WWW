var skins;
(function (skins) {
    var game;
    (function (game) {
        var BossExtraCostSkin = (function (_super) {
            __extends(BossExtraCostSkin, _super);
            function BossExtraCostSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__15_i(), this.__16_i(), this.btn_call_i(), this.btn_lock_call_i(), this.__17_i(), this.btn_close_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=BossExtraCostSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return BossExtraCostSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__12_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["horizontalCenter", "width", "y"], [0, 400, 297]);
                t.layout = this.__14_i();
                t.elementsContent = [this.grp_res0_i(), this.grp_res1_i(), this.grp_extra_res_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["height", "size", "text", "textAlign", "textColor", "width", "x", "y"], [83, 20, "当前已有BOSS正在挑战中，是否花费额外元宝召唤新的BOSS？", "center", 0xF3C50F, 405, 38, 146]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["alpha", "horizontalCenter", "source", "verticalCenter", "visible"], [0.8, 0, "pre_boss之战弹1", 0, false]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_tianchuangditus", 7, 110]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__5_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["name", "source", "x", "y"], ["icon", "ico_gold", 0, 3]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["name", "size", "text", "textAlign", "textColor", "x", "y"], ["num", 18, "9999", "left", 0xDA9F00, 24, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.verticalAlign = "middle";
                return t;
            };
            p.btn_call_i = function () {
                var t = new egret.gui.Button();
                this.btn_call = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_zaohuan", skins.comp.Btn_Rank_Skin, 181, 384]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_close_Skin, 441, 104]);
                return t;
            };
            p.btn_lock_call_i = function () {
                var t = new egret.gui.Button();
                this.btn_lock_call = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_shuodingzaohuan", skins.comp.Btn_3_26_Skin, 181, 381]);
                return t;
            };
            p.grp_extra_res_i = function () {
                var t = new egret.gui.Group();
                this.grp_extra_res = t;
                this.__s(t, ["height", "x", "y"], [30, 146, 1]);
                t.layout = this.__13_i();
                t.elementsContent = [this.__10_i(), this.__11_i(), this.__12_i()];
                return t;
            };
            p.grp_res0_i = function () {
                var t = new egret.gui.Group();
                this.grp_res0 = t;
                this.__s(t, ["height", "x", "y"], [30, 0, 0]);
                t.layout = this.__6_i();
                t.elementsContent = [this.label_call_type_i(), this.__4_i(), this.__5_i()];
                return t;
            };
            p.grp_res1_i = function () {
                var t = new egret.gui.Group();
                this.grp_res1 = t;
                this.__s(t, ["height", "includeInLayout", "x", "y"], [30, true, 20, 0]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__7_i(), this.__8_i()];
                return t;
            };
            p.label_call_type_i = function () {
                var t = new egret.gui.Label();
                this.label_call_type = t;
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "x", "y"], ["黑体", 20, 18, "召唤:", 0xB0BBBE, 0, 6]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "height", "size", "text", "textColor", "x", "y"], ["黑体", 20, 18, "额外花费:", 0xB0BBBE, -40, 6]);
                return t;
            };
            BossExtraCostSkin._skinParts = ["label_call_type", "grp_res0", "grp_res1", "grp_extra_res", "btn_call", "btn_lock_call", "btn_close"];
            return BossExtraCostSkin;
        })(egret.gui.Skin);
        game.BossExtraCostSkin = BossExtraCostSkin;
        egret.registerClass(BossExtraCostSkin,"skins.game.BossExtraCostSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
