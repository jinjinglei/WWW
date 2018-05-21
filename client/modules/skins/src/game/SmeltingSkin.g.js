var skins;
(function (skins) {
    var game;
    (function (game) {
        var SmeltingSkin = (function (_super) {
            __extends(SmeltingSkin, _super);
            function SmeltingSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.container_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=SmeltingSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return SmeltingSkin._skinParts;
                }
            );
            p.__4_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["columnAlign", "horizontalGap", "requestedColumnCount", "requestedRowCount"], ["left", 46, 3, 3]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textAlign", "textColor", "touchEnabled", "width", "x", "y"], ["黑体", 18, "系统自动筛选装备进入熔炉中", "center", 13422001, false, 377, 2, 347]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [12, 37]);
                t.elementsContent = [this.__3_i(), this.btn_resolve_i(), this.btn_batchResolve_i(), this.list_items_i(), this.__5_i(), this.ckb_keep_i()];
                return t;
            };
            p.btn_batchResolve_i = function () {
                var t = new egret.gui.Button();
                this.btn_batchResolve = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [39, "btn_txt_g_piliangronglian", skins.comp.Btn_3_0_s1_Skin, 120, 40, 434]);
                return t;
            };
            p.btn_resolve_i = function () {
                var t = new egret.gui.Button();
                this.btn_resolve = t;
                this.__s(t, ["height", "icon", "skinName", "width", "x", "y"], [39, "btn_txt_g_dissolve", skins.comp.Btn_3_0_s1_Skin, 120, 226, 434]);
                return t;
            };
            p.ckb_keep_i = function () {
                var t = new egret.gui.CheckBox();
                this.ckb_keep = t;
                this.__s(t, ["label", "x", "y"], ["保留未开启职业最高评分装备", 36, 387]);
                return t;
            };
            p.container_i = function () {
                var t = new g_comp.Dlg_Close();
                this.container = t;
                this.__s(t, ["height", "horizontalCenter", "skinName", "title", "verticalCenter", "width"], [516, 1, skins.comp.Dlg_Close_Text_Info_Skin, "btn_txt_g_dissolve", -1, 400]);
                t.elementsContent = [this.__6_i()];
                return t;
            };
            p.list_items_i = function () {
                var t = new egret.gui.List();
                this.list_items = t;
                this.__s(t, ["height", "itemRendererSkinName", "width", "x", "y"], [312, skins.game.SmeltingItemSkin, 351, 11, 20]);
                t.layout = this.__4_i();
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [false, 383, "ntc_dragon", 381, 0, 0]);
                return t;
            };
            SmeltingSkin._skinParts = ["btn_resolve", "btn_batchResolve", "list_items", "ckb_keep", "container"];
            return SmeltingSkin;
        })(egret.gui.Skin);
        game.SmeltingSkin = SmeltingSkin;
        egret.registerClass(SmeltingSkin,"skins.game.SmeltingSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
