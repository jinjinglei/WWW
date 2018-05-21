var skins;
(function (skins) {
    var game;
    (function (game) {
        var HomeBgSkin = (function (_super) {
            __extends(HomeBgSkin, _super);
            function HomeBgSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__3_i(), this.__6_i(), this.__9_i(), this.__12_i(), this.__15_i(), this.__18_i(), this.__21_i(), this.__24_i(), this.btn_back_i(), this.btn_villian_i()];
                this.states = [
                    new egret.gui.State("normal", []),
                    new egret.gui.State("disabled", [])
                ];
            }
            var d = __define,c=HomeBgSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return HomeBgSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "visible", "width", "x", "y"], [false, 135, "ico_home_icon", false, 120, -66, 5]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [120, 269, 166]);
                t.elementsContent = [this.__10_i(), this.__11_i(), this.img_Pagoda_i(), this.img_redPagoda_i(), this.btn_pagoda_i()];
                return t;
            };
            p.__13_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "visible", "x", "y"], [true, 20, false, 35, 80]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "visible", "width", "x", "y"], [false, 135, "ico_home_icon", false, 120, -28, 3]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [206, 79, 184, 362]);
                t.elementsContent = [this.__13_i(), this.__14_i(), this.img_copy_i(), this.img_redCopy_i(), this.btn_copy_i()];
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "visible", "width", "x", "y"], [false, 135, "ico_home_icon", false, 120, -25, 27]);
                return t;
            };
            p.__17_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "visible", "x", "y"], [true, 20, false, 37, 100]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [180, 70, 20, 224]);
                t.elementsContent = [this.__16_i(), this.__17_i(), this.img_coffer_i(), this.btn_coffer_i()];
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "visible", "width", "x", "y"], [false, 135, "ico_home_icon", false, 120, -28, 45]);
                return t;
            };
            p.__20_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "visible", "x", "y"], [true, 20, false, 35, 119]);
                return t;
            };
            p.__21_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [186, 66, 348, 375]);
                t.elementsContent = [this.__19_i(), this.__20_i(), this.img_guild_i(), this.img_redGuild_i(), this.btn_guild_i()];
                return t;
            };
            p.__22_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "visible", "width", "x", "y"], [false, 135, "ico_home_icon", false, 120, -8, 15]);
                return t;
            };
            p.__23_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "visible", "x", "y"], [true, 20, false, 55, 89]);
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [150, 368, 213]);
                t.elementsContent = [this.__22_i(), this.__23_i(), this.img_King_i(), this.img_redKing_i(), this.btn_king_i()];
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "source", "width", "x", "y"], [800, "bg_homex", 480, 0, 0]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "visible", "width", "x", "y"], [false, 135, "ico_home_icon", false, 120, -6, -17]);
                return t;
            };
            p.__5_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "visible", "x", "y"], [true, 20, false, 57, 51]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [184, 68, 1, 440]);
                t.elementsContent = [this.__4_i(), this.__5_i(), this.img_gang_i(), this.btn_gang_i()];
                return t;
            };
            p.__7_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "visible", "x", "y"], [true, 20, false, -4, 77]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["autoScale", "height", "source", "visible", "width", "x", "y"], [false, 135, "ico_home_icon", false, 120, -66, 5]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "x", "y"], [120, 281, 485]);
                t.elementsContent = [this.__7_i(), this.__8_i(), this.img_arena_i(), this.img_redArena_i(), this.btn_arena_i()];
                return t;
            };
            p.btn_arena_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_arena = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [147, "touch_rect", 133, -65, 20]);
                return t;
            };
            p.btn_back_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_back = t;
                this.__s(t, ["source", "x", "y"], ["btn_back", 410, 106]);
                return t;
            };
            p.btn_coffer_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_coffer = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [153, "touch_rect", 155, 5, 35]);
                return t;
            };
            p.btn_copy_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_copy = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [136, "touch_rect", 139, 7, -2]);
                return t;
            };
            p.btn_gang_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_gang = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [167, "touch_rect", 152, 24, -8]);
                return t;
            };
            p.btn_guild_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_guild = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [155, "touch_rect", 120, 9, 58]);
                return t;
            };
            p.btn_king_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_king = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [175, "touch_rect", 85, 19, 32]);
                return t;
            };
            p.btn_pagoda_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_pagoda = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [133, "touch_rect", 142, -36, 26]);
                return t;
            };
            p.btn_villian_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_villian = t;
                this.__s(t, ["source", "x", "y"], ["ico_unlockRole", 24, 628]);
                return t;
            };
            p.img_King_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_King = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [283, "icon_wancenditu", false, 157, -46, 29]);
                return t;
            };
            p.img_Pagoda_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_Pagoda = t;
                this.__s(t, ["autoScale", "height", "source", "visible", "width", "x", "y"], [false, 255, "icon_zenyaotditu", false, 176, -42, -38]);
                return t;
            };
            p.img_arena_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_arena = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [214, "icon_jijicangditu", false, 294, -97, 18]);
                return t;
            };
            p.img_coffer_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_coffer = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [173, "icon_guokuditu", false, 194, -4, 35]);
                return t;
            };
            p.img_copy_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_copy = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [194, "icon_fubengditu", false, 168, -7, -9]);
                return t;
            };
            p.img_gang_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_gang = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [235, "icon_zangjitditu", false, 185, -2, -61]);
                return t;
            };
            p.img_guild_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_guild = t;
                this.__s(t, ["height", "source", "visible", "width", "x", "y"], [207, "icon_hanghuiditu", false, 184, -53, 54]);
                return t;
            };
            p.img_redArena_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_redArena = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 1, 10]);
                return t;
            };
            p.img_redCopy_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_redCopy = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 45, 6]);
                return t;
            };
            p.img_redGuild_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_redGuild = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 42, 44]);
                return t;
            };
            p.img_redKing_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_redKing = t;
                this.__s(t, ["source", "x", "y"], ["ico_red", 62, 28]);
                return t;
            };
            p.img_redPagoda_i = function () {
                var t = new egret.gui.UIAsset();
                this.img_redPagoda = t;
                this.__s(t, ["source", "visible", "x", "y"], ["ico_red", false, 1, 10]);
                return t;
            };
            p.__10_i = function () {
                var t = new g_comp.UIEffect();
                this.__s(t, ["autoPlay", "effectId", "visible", "x", "y"], [true, 20, false, -4, 77]);
                return t;
            };
            HomeBgSkin._skinParts = ["img_gang", "btn_gang", "img_arena", "img_redArena", "btn_arena", "img_Pagoda", "img_redPagoda", "btn_pagoda", "img_copy", "img_redCopy", "btn_copy", "img_coffer", "btn_coffer", "img_guild", "img_redGuild", "btn_guild", "img_King", "img_redKing", "btn_king", "btn_back", "btn_villian"];
            return HomeBgSkin;
        })(egret.gui.Skin);
        game.HomeBgSkin = HomeBgSkin;
        egret.registerClass(HomeBgSkin,"skins.game.HomeBgSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
