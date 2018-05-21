var skins;
(function (skins) {
    var game;
    (function (game) {
        var IndexLayerSkin = (function (_super) {
            __extends(IndexLayerSkin, _super);
            function IndexLayerSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__19_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=IndexLayerSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return IndexLayerSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new mo.gui.Label();
                this.__s(t, ["size", "text", "x", "y"], [20, "游戏账号", 0, 1]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                t.source = "ico_aocao2";
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["x", "y"], [96, 0]);
                t.elementsContent = [this.__12_i(), this.label_account_i()];
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.HorizontalLayout();
                this.__s(t, ["horizontalAlign", "verticalAlign"], ["left", "middle"]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["right", "visible", "y"], [10, false, 19]);
                t.layout = this.__14_i();
                t.elementsContent = [this.__11_i(), this.__13_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "performanceControl", "x", "y"], [true, 29, false, 240, 666]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [0, 0, 0, "panel_index_mid", 0]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "verticalCenter", "width", "x"], ["btn_server_item_1", 0, 369, 28]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "horizontalCenter", "verticalCenter", "width", "x", "y"], [800, 0, 0, 480, 10, 10]);
                t.elementsContent = [this.lyr_serverSelect_i(), this.lyr_serverNew_i(), this.btn_login_i(), this.label_ver_i(), this.qqGroup_i(), this.__15_i(), this.btn_change_i(), this.__16_i(), this.btn_notice_i(), this.grp_lock_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "panel_index_mid", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "width", "x", "y"], ["btn_server_item_1", 369, 18, 115]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "touchChildren", "touchEnabled", "x", "y"], ["ant_txt_chooseServer", false, false, 149, 51]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "left", "right", "source", "top"], [2, 0, 0, "panel_index_mid", 4]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["bottom", "horizontalCenter", "source", "touchChildren", "touchEnabled"], [25, 0, "ant_txt_chooseServer", false, false]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.TileLayout();
                this.__s(t, ["horizontalGap", "requestedColumnCount", "verticalGap"], [12, 2, 12]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["fontFamily", "size", "text", "textColor", "x", "y"], ["Verdana", 14, " Powered by Egret Engine", 0x909090, 122, 752]);
                return t;
            };
            p.btn_change_i = function () {
                var t = new egret.gui.Button();
                this.btn_change = t;
                this.__s(t, ["label", "x", "y"], ["切换账号", 13, 11]);
                return t;
            };
            p.btn_cur_server_i = function () {
                var t = new egret.gui.Button();
                this.btn_cur_server = t;
                this.__s(t, ["skinName", "x", "y"], [new egret.gui.ButtonSkin("panel_server_bg", "panel_server_bg", "panel_server_bg"), 79, 40]);
                return t;
            };
            p.btn_login_i = function () {
                var t = new egret.gui.Button();
                this.btn_login = t;
                t.setStyle("fontFamily", "微软雅黑");
                t.setStyle("size", 25);
                t.setStyle("textAlign", "center");
                t.setStyle("textColor", 0xFFFFFF);
                t.setStyle("verticalAlign", "middle");
                this.__s(t, ["bottom", "icon", "left", "skinName", "top", "width"], [72, "btn_txt_g_startgame", 97, skins.comp.Btn_3_12_Skin, 630, 288]);
                return t;
            };
            p.btn_new_server_i = function () {
                var t = new egret.gui.Button();
                this.btn_new_server = t;
                this.__s(t, ["bottom", "horizontalCenter", "skinName"], [16, 0, new egret.gui.ButtonSkin("panel_server_bg", "panel_server_bg", "panel_server_bg")]);
                return t;
            };
            p.btn_notice_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_notice = t;
                this.__s(t, ["source", "x", "y"], ["ico_notice", 404, 19]);
                return t;
            };
            p.grp_lock_i = function () {
                var t = new egret.gui.Group();
                this.grp_lock = t;
                this.__s(t, ["height", "visible", "width", "x", "y"], [136, false, 398, 40, 464]);
                t.elementsContent = [this.__17_i(), this.ico_lock_status_i(), this.ico_lock_new_i(), this.__18_i(), this.label_lock_server_i(), this.label_lock_serverDesc_i()];
                return t;
            };
            p.ico_lock_new_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_lock_new = t;
                this.__s(t, ["source", "verticalCenter", "x"], ["ntc_new", 0, 302]);
                return t;
            };
            p.ico_lock_status_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_lock_status = t;
                this.__s(t, ["source", "verticalCenter", "x"], ["ntc_huobao", 0, 64]);
                return t;
            };
            p.ico_new_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_new = t;
                this.__s(t, ["source", "verticalCenter", "x", "y"], ["ntc_new", 31, 292, 10]);
                return t;
            };
            p.ico_status_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_status = t;
                this.__s(t, ["source", "verticalCenter", "x", "y"], ["ntc_huobao", 30, 54, 10]);
                return t;
            };
            p.label_account_i = function () {
                var t = new mo.gui.Label();
                this.label_account = t;
                this.__s(t, ["left", "right", "size", "text", "textAlign", "verticalAlign", "y"], [0, 0, 20, "12d35bagj", "center", "middle", 10]);
                return t;
            };
            p.label_curServer_i = function () {
                var t = new mo.gui.Label();
                this.label_curServer = t;
                this.__s(t, ["size", "text", "textAlign", "width", "x", "y"], [22, "传奇-1服", "center", 216, 91, 121]);
                return t;
            };
            p.label_lock_serverDesc_i = function () {
                var t = new mo.gui.Label();
                this.label_lock_serverDesc = t;
                this.__s(t, ["bottom", "horizontalCenter", "size", "text", "textAlign", "x"], [4, 0, 22, "无", "center", 10]);
                return t;
            };
            p.label_lock_server_i = function () {
                var t = new mo.gui.Label();
                this.label_lock_server = t;
                this.__s(t, ["size", "text", "textAlign", "verticalCenter", "width", "x"], [22, "传奇-1服", "center", 0, 216, 101]);
                return t;
            };
            p.label_serverDesc_i = function () {
                var t = new mo.gui.Label();
                this.label_serverDesc = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "y"], [0, 22, "无", "center", 167]);
                return t;
            };
            p.label_ver_i = function () {
                var t = new egret.gui.Label();
                this.label_ver = t;
                this.__s(t, ["fontFamily", "right", "size", "text", "textAlign", "textColor", "width", "y"], ["Verdana", 10, 16, "v.3.5.11", "right", 0x909090, 120, 762]);
                return t;
            };
            p.list_new_server_i = function () {
                var t = new egret.gui.List();
                this.list_new_server = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "skinName", "width", "y"], [151, 2, skins.game.IndexServerShortItemSkin, skins.comp.List_Empty_Skin, 344, 23]);
                t.layout = this.__8_i();
                return t;
            };
            p.lyr_serverNew_i = function () {
                var t = new egret.gui.Group();
                this.lyr_serverNew = t;
                this.__s(t, ["height", "horizontalCenter", "visible", "width", "y"], [239, 1, false, 400, 386]);
                t.elementsContent = [this.__6_i(), this.btn_new_server_i(), this.__7_i(), this.list_new_server_i()];
                return t;
            };
            p.lyr_serverSelect_i = function () {
                var t = new egret.gui.Group();
                this.lyr_serverSelect = t;
                this.__s(t, ["height", "width", "x", "y"], [209, 400, 40, 389]);
                t.elementsContent = [this.__3_i(), this.__4_i(), this.ico_new_i(), this.ico_status_i(), this.label_curServer_i(), this.label_serverDesc_i(), this.btn_cur_server_i(), this.__5_i()];
                return t;
            };
            p.qqGroup_i = function () {
                var t = new egret.gui.Group();
                this.qqGroup = t;
                this.__s(t, ["bottom", "height", "horizontalCenter", "visible"], [16, 22, 0, false]);
                t.layout = this.__10_i();
                t.elementsContent = [this.__9_i(), this.version_i()];
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.HorizontalLayout();
                return t;
            };
            p.version_i = function () {
                var t = new egret.gui.Label();
                this.version = t;
                this.__s(t, ["fontFamily", "horizontalCenter", "size", "text", "textAlign", "textColor", "verticalAlign", "y"], ["Verdana", 96.5, 14, "v1.0", "center", 0x7FB6F1, "middle", 742]);
                return t;
            };
            IndexLayerSkin._skinParts = ["ico_new", "ico_status", "label_curServer", "label_serverDesc", "btn_cur_server", "lyr_serverSelect", "btn_new_server", "list_new_server", "lyr_serverNew", "btn_login", "label_ver", "version", "qqGroup", "label_account", "btn_change", "btn_notice", "ico_lock_status", "ico_lock_new", "label_lock_server", "label_lock_serverDesc", "grp_lock"];
            return IndexLayerSkin;
        })(egret.gui.Skin);
        game.IndexLayerSkin = IndexLayerSkin;
        egret.registerClass(IndexLayerSkin,"skins.game.IndexLayerSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
