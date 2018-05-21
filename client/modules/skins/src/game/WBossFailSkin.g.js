var skins;
(function (skins) {
    var game;
    (function (game) {
        var WBossFailSkin = (function (_super) {
            __extends(WBossFailSkin, _super);
            function WBossFailSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.btn_close_i(), this.label_leftHp_i(), this.label_rank_i(), this.label_damage_i(), this.label_first_i(), this.grp_reward_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=WBossFailSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return WBossFailSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item0", true, 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item1", true, 79, 0]);
                return t;
            };
            p.__6_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item2", true, 159, 0]);
                return t;
            };
            p.__7_i = function () {
                var t = new g_comp.Ico_Item();
                this.__s(t, ["hideLabelText", "name", "showItemInfoOnClick", "x", "y"], [true, "ico_item3", true, 238, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.horizontalAlign = "center";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["horizontalCenter", "icon", "skinName", "y"], [0, "btn_txt_g_back", skins.comp.Btn_3_1_Skin, 644]);
                return t;
            };
            p.grp_reward_i = function () {
                var t = new egret.gui.Group();
                this.grp_reward = t;
                this.__s(t, ["width", "x", "y"], [310, 85, 404]);
                t.layout = this.__8_i();
                t.elementsContent = [this.__4_i(), this.__5_i(), this.__6_i(), this.__7_i()];
                return t;
            };
            p.label_damage_i = function () {
                var t = new egret.gui.Label();
                this.label_damage = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "4", 251, 349]);
                return t;
            };
            p.label_first_i = function () {
                var t = new egret.gui.Label();
                this.label_first = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "4", 191, 559]);
                return t;
            };
            p.label_leftHp_i = function () {
                var t = new egret.gui.Label();
                this.label_leftHp = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "4", 251, 263]);
                return t;
            };
            p.label_rank_i = function () {
                var t = new egret.gui.Label();
                this.label_rank = t;
                this.__s(t, ["size", "text", "x", "y"], [18, "4", 214, 304]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_bossshibaixinzhen", 0]);
                return t;
            };
            WBossFailSkin._skinParts = ["btn_close", "label_leftHp", "label_rank", "label_damage", "label_first", "grp_reward"];
            return WBossFailSkin;
        })(egret.gui.Skin);
        game.WBossFailSkin = WBossFailSkin;
        egret.registerClass(WBossFailSkin,"skins.game.WBossFailSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
