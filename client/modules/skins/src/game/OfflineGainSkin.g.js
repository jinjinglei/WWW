var skins;
(function (skins) {
    var game;
    (function (game) {
        var OfflineGainSkin = (function (_super) {
            __extends(OfflineGainSkin, _super);
            function OfflineGainSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=OfflineGainSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return OfflineGainSkin._skinParts;
                }
            );
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "horizontalCenter", "scale9Grid", "source", "width", "y"], [336, 0, egret.gui.getScale9Grid("9,8,290,455"), "s9g_black_0", 342, 57]);
                return t;
            };
            p.__4_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0, 24, "获得以下资源", 156]);
                return t;
            };
            p.__5_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [18, "您当前离线时间：", 23, 68]);
                return t;
            };
            p.__6_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "（最多可累计24小时的离线资源）", 0xC90000, 13, 98]);
                return t;
            };
            p.__7_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "离线", 0xC90000, 0, 0]);
                return t;
            };
            p.__8_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "小时后，只可获得80%离线收益", 0xC90000, -15, 0]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = 0;
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.Button();
                this.btn_ok = t;
                this.__s(t, ["horizontalCenter", "label", "y"], [0, "确定", 410]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Info_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "verticalCenter", "width"], [473, 0, skins.comp.Dlg_Close_Text_Skin, "tit_txt_g_offline", 0.5, 358]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.label_offlineTime_i(), this.label_offlineExp_i(), this.label_offlineGold_i(), this.label_offlineEquip_i(), this.label_box_i(), this.label_autoSell_i(), this.__6_i(), this.__10_i(), this.btn_ok_i()];
                return t;
            };
            p.label_autoSell_i = function () {
                var t = new mo.gui.Label();
                this.label_autoSell = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "因背包已满，自动出售0件装备", 0xB50000, 32, 352]);
                return t;
            };
            p.label_box_i = function () {
                var t = new mo.gui.Label();
                this.label_box = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "宝箱 10\n宝箱 10\n宝箱 10\n宝箱 10\n宝箱 10", 0xF9ECB4, 32, 221]);
                return t;
            };
            p.label_hour_i = function () {
                var t = new mo.gui.Label();
                this.label_hour = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "8", 0xC90000, 40, 0]);
                return t;
            };
            p.label_offlineEquip_i = function () {
                var t = new mo.gui.Label();
                this.label_offlineEquip = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "10级装备*100", 0xF9ECB4, 32, 326]);
                return t;
            };
            p.label_offlineExp_i = function () {
                var t = new mo.gui.Label();
                this.label_offlineExp = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "经验：0000000", 0x19C300, 32, 193]);
                return t;
            };
            p.label_offlineGold_i = function () {
                var t = new mo.gui.Label();
                this.label_offlineGold = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "金币：0000000", 0xD2AF00, 192, 193]);
                return t;
            };
            p.label_offlineTime_i = function () {
                var t = new mo.gui.Label();
                this.label_offlineTime = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "00小时00分", 0xFFD337, 162, 68]);
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [31, 122]);
                t.layout = this.__9_i();
                t.elementsContent = [this.__7_i(), this.label_hour_i(), this.__8_i()];
                return t;
            };
            OfflineGainSkin._skinParts = ["label_offlineTime", "label_offlineExp", "label_offlineGold", "label_offlineEquip", "label_box", "label_autoSell", "label_hour", "btn_ok", "container"];
            return OfflineGainSkin;
        })(egret.gui.Skin);
        game.OfflineGainSkin = OfflineGainSkin;
        egret.registerClass(OfflineGainSkin,"skins.game.OfflineGainSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
