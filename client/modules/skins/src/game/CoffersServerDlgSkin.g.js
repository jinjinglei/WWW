var skins;
(function (skins) {
    var game;
    (function (game) {
        var CoffersServerDlgSkin = (function (_super) {
            __extends(CoffersServerDlgSkin, _super);
            function CoffersServerDlgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__4_i(), this.__5_i(), this.label_robTime_i(), this.btn_help_i(), this.btn_close_i(), this.__6_i(), this.list_server_i(), this.grp_ap_i(), this.__14_i(), this.__15_i(), this.btn_score_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=CoffersServerDlgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return CoffersServerDlgSkin._skinParts;
                }
            );
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_dilfj", 0, 0]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_shenyuxingdongli", 9, 8]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0, 18, "说明：前往其他服务器击败国库守卫，掠夺财富", 0x09A0E1, 744]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "x", "y"], [0, 18, "行动力每日0点重置", 0x09A0E1, 10, 768]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "bg_tianyajifendi", 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["panel_task_title", 0, 0]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_qiangduoshijian", 64]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "tit_txt_g_zhangjiantianyas", 14]);
                return t;
            };
            p.__7_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__8_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__9_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_close = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, -8]);
                return t;
            };
            p.btn_help_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_help = t;
                this.__s(t, ["source", "y"], ["ico_help", -9]);
                return t;
            };
            p.btn_score_i = function () {
                var t = new egret.gui.Button();
                this.btn_score = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["btn_txt_g_jifengxiangqin", skins.comp.Btn_3_27_Skin, 320, 666]);
                return t;
            };
            p.grp_ap_i = function () {
                var t = new egret.gui.Group();
                this.grp_ap = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 644]);
                t.elementsContent = [this.__12_i(), this.label_ap_i(), this.__13_i(), this.label_time_i()];
                return t;
            };
            p.label_ap_i = function () {
                var t = new egret.gui.Label();
                this.label_ap = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "345", 0xEEA70E, 132, 12]);
                return t;
            };
            p.label_robTime_i = function () {
                var t = new egret.gui.Label();
                this.label_robTime = t;
                this.__s(t, ["size", "text", "x", "y"], [20, "标签", 210, 74]);
                return t;
            };
            p.label_time_i = function () {
                var t = new egret.gui.Label();
                this.label_time = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [18, "再过00:00恢复1点", 0xFFFFFF, 9, 43]);
                return t;
            };
            p.list_server_i = function () {
                var t = new egret.gui.List();
                this.list_server = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "y"], [519, 0, skins.game.CoffersServerCellSkin, 110]);
                t.dataProvider = this.__11_i();
                return t;
            };
            p.__11_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__7_i(), this.__8_i(), this.__9_i()];
                return t;
            };
            CoffersServerDlgSkin._skinParts = ["label_robTime", "btn_help", "btn_close", "list_server", "label_ap", "label_time", "grp_ap", "btn_score"];
            return CoffersServerDlgSkin;
        })(egret.gui.Skin);
        game.CoffersServerDlgSkin = CoffersServerDlgSkin;
        egret.registerClass(CoffersServerDlgSkin,"skins.game.CoffersServerDlgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
