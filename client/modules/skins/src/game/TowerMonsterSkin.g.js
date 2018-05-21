var skins;
(function (skins) {
    var game;
    (function (game) {
        var TowerMonsterSkin = (function (_super) {
            __extends(TowerMonsterSkin, _super);
            function TowerMonsterSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [240, 240]);
                this.elementsContent = [this.__3_i(), this.label_num_i(), this.img_boss_i(), this.img_fighting_i(), this.img_canGet_i(), this.img_pass_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=TowerMonsterSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return TowerMonsterSkin._skinParts;
                }
            );
            p.img_boss_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_boss = t;
                this.__s(t, ["autoScale", "height", "source", "width", "x", "y"], [true, 137, "ico_mohuabianjiang", 120, 60, 49]);
                return t;
            };
            p.img_canGet_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_canGet = t;
                this.__s(t, ["source", "visible", "x", "y"], ["ico_kelinj", false, 80, 193]);
                return t;
            };
            p.img_fighting_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_fighting = t;
                this.__s(t, ["source", "x", "y"], ["ico_tiaozhanzong", 74, 193]);
                return t;
            };
            p.img_pass_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_pass = t;
                this.__s(t, ["source", "visible", "x", "y"], ["ico_yitongguant", false, 82, 192]);
                return t;
            };
            p.label_num_i = function () {
                var t = new mo.gui.Label();
                this.label_num = t;
                this.__s(t, ["horizontalCenter", "size", "text", "y"], [0, 20, "第%s层", 18]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_ditiaoct", 7]);
                return t;
            };
            TowerMonsterSkin._skinParts = ["label_num", "img_boss", "img_fighting", "img_canGet", "img_pass"];
            return TowerMonsterSkin;
        })(egret.gui.Skin);
        game.TowerMonsterSkin = TowerMonsterSkin;
        egret.registerClass(TowerMonsterSkin,"skins.game.TowerMonsterSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
