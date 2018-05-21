var skins;
(function (skins) {
    var game;
    (function (game) {
        var RedPacketSkin = (function (_super) {
            __extends(RedPacketSkin, _super);
            function RedPacketSkin() {
                _super.call(this);
                this.__s = egret.gui.setProperties;
                this.__s(this, ["height", "width"], [800, 480]);
                this.elementsContent = [this.__2_i(), this.grp_redPacket_i(), this.grp_redRec_i(), this.tab_type_i(), this.btn_close_i(), this.grp_numInput_i()];
                this.btn_people1_i();
                this.btn_people2_i();
                this.btn_people3_i();
                this.btn_recharge_i();
                this.label_say_i();
                this.__33_i();
                this.__34_i();
                this.__35_i();
                this.__36_i();
                this.label_sendRmbInput_i();
                this.label_myRmbInput_i();
                this.states = [
                    new egret.gui.State("disabled", [
                        new egret.gui.AddItems("btn_people1", "grp_redPacket", "before", "__4"),
                        new egret.gui.AddItems("btn_people2", "grp_redPacket", "before", "__4"),
                        new egret.gui.AddItems("btn_people3", "grp_redPacket", "before", "__4"),
                        new egret.gui.AddItems("btn_recharge", "grp_redPacket", "before", "label_cannotRed"),
                        new egret.gui.AddItems("label_say", "grp_redPacket", "before", "label_cannotRed"),
                        new egret.gui.AddItems("__33", "grp_numInput", "before", "__37"),
                        new egret.gui.AddItems("__34", "grp_numInput", "before", "__37"),
                        new egret.gui.AddItems("__35", "grp_numInput", "before", "__37"),
                        new egret.gui.AddItems("__36", "grp_numInput", "before", "__37"),
                        new egret.gui.AddItems("label_sendRmbInput", "grp_numInput", "before", "__37"),
                        new egret.gui.AddItems("label_myRmbInput", "grp_numInput", "before", "__37"),
                        new egret.gui.SetProperty("__37", "horizontalCenter", 0.5),
                        new egret.gui.SetProperty("__37", "y", 250),
                        new egret.gui.SetProperty("btn_1", "y", 280),
                        new egret.gui.SetProperty("btn_2", "y", 280),
                        new egret.gui.SetProperty("btn_3", "y", 280),
                        new egret.gui.SetProperty("btn_4", "y", 345),
                        new egret.gui.SetProperty("btn_5", "y", 345),
                        new egret.gui.SetProperty("btn_6", "y", 345),
                        new egret.gui.SetProperty("btn_7", "y", 410),
                        new egret.gui.SetProperty("btn_8", "y", 410),
                        new egret.gui.SetProperty("btn_9", "y", 410),
                        new egret.gui.SetProperty("btn_ok", "y", 475),
                        new egret.gui.SetProperty("btn_0", "y", 475),
                        new egret.gui.SetProperty("btn_del", "y", 475),
                        new egret.gui.SetProperty("grp_numInput", "visible", false)
                    ])
                ];
            }
            var d = __define,c=RedPacketSkin,p=c.prototype;
            d(p, "skinParts"
                ,function () {
                    return RedPacketSkin._skinParts;
                }
            );
            p.__11_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_dia", 1, 20]);
                return t;
            };
            p.__12_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 328, 29]);
                return t;
            };
            p.__13_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_dia", 1, 60]);
                return t;
            };
            p.__14_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_dia", 1, 100]);
                return t;
            };
            p.__15_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_qiangdeyuanbao", 46, 106]);
                return t;
            };
            p.__16_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_fangsongghuifuli", 29, 66]);
                return t;
            };
            p.__17_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_ffangquanfuhb", 28, 28]);
                return t;
            };
            p.__18_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 328, 68]);
                return t;
            };
            p.__19_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 328, 110]);
                return t;
            };
            p.__20_i = function () {
                var t = {};
                t.label = "数据1";
                return t;
            };
            p.__21_i = function () {
                var t = {};
                t.label = "数据2";
                return t;
            };
            p.__22_i = function () {
                var t = {};
                t.label = "数据3";
                return t;
            };
            p.__24_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__20_i(), this.__21_i(), this.__22_i()];
                return t;
            };
            p.__25_i = function () {
                var t = new egret.gui.VerticalLayout();
                t.gap = 15;
                return t;
            };
            p.__26_i = function () {
                var t = {};
                t.label = "tab_txt_hongbao";
                return t;
            };
            p.__27_i = function () {
                var t = {};
                t.label = "tab_txt_hanghuifuli";
                return t;
            };
            p.__28_i = function () {
                var t = {};
                t.label = "tab_txt_hongbaojilu";
                return t;
            };
            p.__2_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "verticalCenter"], [0, "panel_hongbao_bg", 0]);
                return t;
            };
            p.__30_i = function () {
                var t = new egret.gui.ArrayCollection();
                t.source = [this.__26_i(), this.__27_i(), this.__28_i()];
                return t;
            };
            p.__31_i = function () {
                var t = new egret.gui.HorizontalLayout();
                t.gap = -8;
                return t;
            };
            p.__32_i = function () {
                var t = new egret.gui.Rect();
                this.__s(t, ["bottom", "fillAlpha", "fillColor", "left", "right", "strokeAlpha", "top"], [0, 0.3, 0x000000, 0, 0, 0, 0]);
                return t;
            };
            p.__33_i = function () {
                var t = new egret.gui.UIAsset();
                this.__33 = t;
                this.__s(t, ["source", "width", "x", "y"], ["ico_ditugd", 352, 63, 147]);
                return t;
            };
            p.__34_i = function () {
                var t = new egret.gui.UIAsset();
                this.__34 = t;
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_wodyuanbao", 71, 154]);
                return t;
            };
            p.__35_i = function () {
                var t = new egret.gui.UIAsset();
                this.__35 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_shuer", 213]);
                return t;
            };
            p.__36_i = function () {
                var t = new egret.gui.UIAsset();
                this.__36 = t;
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 376, 158]);
                return t;
            };
            p.__37_i = function () {
                var t = new egret.gui.UIAsset();
                this.__37 = t;
                this.__s(t, ["horizontalCenter", "source", "y"], [0.5, "ico_xiaojianpan", 250]);
                return t;
            };
            p.__3_i = function () {
                var t = new egret.gui.Label();
                this.__s(t, ["size", "stroke", "text", "textColor", "x", "y"], [18, 1, "点击可输入红包金额", 0xF1C794, 97, 210]);
                return t;
            };
            p.__4_i = function () {
                var t = new egret.gui.UIAsset();
                this.__4 = t;
                this.__s(t, ["source", "width", "x", "y"], ["ico_ditugd", 352, 5, 102]);
                return t;
            };
            p.__5_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_wodyuanbao", 13, 109]);
                return t;
            };
            p.__6_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["scale9Grid", "source", "width", "x", "y"], [egret.gui.getScale9Grid("23,14,10,90"), "panel_kuangg", 361, 1, 359]);
                return t;
            };
            p.__7_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["horizontalCenter", "source", "y"], [0, "ico_shuer", 168]);
                return t;
            };
            p.__8_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["source", "x", "y"], ["ico_yuanbao", 318, 113]);
                return t;
            };
            p.__9_i = function () {
                var t = new egret.gui.UIAsset();
                this.__s(t, ["height", "scale9Grid", "source", "width", "x", "y"], [190, egret.gui.getScale9Grid("23,14,10,90"), "panel_kuangg", 366, 0, 0]);
                return t;
            };
            p.btn_0_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_0 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "touch_rect", 73, 205, 475]);
                return t;
            };
            p.btn_1_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_1 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "touch_rect", 73, 109, 280]);
                return t;
            };
            p.btn_2_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_2 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "touch_rect", 73, 205, 280]);
                return t;
            };
            p.btn_3_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_3 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "touch_rect", 73, 300, 280]);
                return t;
            };
            p.btn_4_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_4 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "touch_rect", 73, 109, 345]);
                return t;
            };
            p.btn_5_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_5 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "touch_rect", 73, 205, 345]);
                return t;
            };
            p.btn_6_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_6 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "touch_rect", 73, 300, 345]);
                return t;
            };
            p.btn_7_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_7 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "touch_rect", 73, 109, 410]);
                return t;
            };
            p.btn_8_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_8 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "touch_rect", 73, 205, 410]);
                return t;
            };
            p.btn_9_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_9 = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "touch_rect", 73, 300, 410]);
                return t;
            };
            p.btn_close_i = function () {
                var t = new egret.gui.Button();
                this.btn_close = t;
                this.__s(t, ["label", "skinName", "x", "y"], ["按钮", skins.comp.Btn_close_1_Skin, 429, 47]);
                return t;
            };
            p.btn_confirm_i = function () {
                var t = new egret.gui.Button();
                this.btn_confirm = t;
                this.__s(t, ["icon", "label", "skinName", "x", "y"], ["btn_txt_g_queding", "按钮", skins.comp.Btn_3_8_Skin, 91, 624]);
                return t;
            };
            p.btn_del_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_del = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "touch_rect", 73, 300, 475]);
                return t;
            };
            p.btn_detail_i = function () {
                var t = new egret.gui.Button();
                this.btn_detail = t;
                this.__s(t, ["height", "icon", "label", "skinName", "width", "x", "y"], [40, "btn_txt_chakan", "领取", skins.comp.Btn_3_0_Skin, 95, -10, -8]);
                return t;
            };
            p.btn_dice_i = function () {
                var t = new egret.gui.Button();
                this.btn_dice = t;
                this.__s(t, ["skinName", "x", "y"], [skins.comp.Btn_dice_Skin, 292, 160]);
                return t;
            };
            p.btn_ok_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_ok = t;
                this.__s(t, ["height", "source", "width", "x", "y"], [36, "touch_rect", 73, 109, 475]);
                return t;
            };
            p.btn_people1_i = function () {
                var t = new egret.gui.Button();
                this.btn_people1 = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["tab_txt_wuren0", skins.comp.Btn_3_23_Skin, 34, 488]);
                return t;
            };
            p.btn_people2_i = function () {
                var t = new egret.gui.Button();
                this.btn_people2 = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["tab_txt_shiren0", skins.comp.Btn_3_23_Skin, 141, 488]);
                return t;
            };
            p.btn_people3_i = function () {
                var t = new egret.gui.Button();
                this.btn_people3 = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["tab_txt_ersiren0", skins.comp.Btn_3_23_Skin, 247, 488]);
                return t;
            };
            p.btn_recharge_i = function () {
                var t = new egret.gui.UIAsset();
                this.btn_recharge = t;
                this.__s(t, ["source", "x", "y"], ["ico_congzi", 2, 175]);
                return t;
            };
            p.btn_rmb1_i = function () {
                var t = new egret.gui.Button();
                this.btn_rmb1 = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["tab_txt_yibai0", skins.comp.Btn_3_23_Skin, 11, 261]);
                return t;
            };
            p.btn_rmb2_i = function () {
                var t = new egret.gui.Button();
                this.btn_rmb2 = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["tab_txt_wubai0", skins.comp.Btn_3_23_Skin, 138, 261]);
                return t;
            };
            p.btn_rmb3_i = function () {
                var t = new egret.gui.Button();
                this.btn_rmb3 = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["tab_txt_babai2", skins.comp.Btn_3_23_Skin, 274, 261]);
                return t;
            };
            p.btn_rmb4_i = function () {
                var t = new egret.gui.Button();
                this.btn_rmb4 = t;
                this.__s(t, ["icon", "skinName", "x", "y"], ["tab_txt_yiqian2", skins.comp.Btn_3_23_Skin, 274, 261]);
                return t;
            };
            p.grp_numInput_i = function () {
                var t = new egret.gui.Group();
                this.grp_numInput = t;
                this.__s(t, ["bottom", "left", "right", "top", "visible"], [0, 0, 0, 0, false]);
                t.elementsContent = [this.__32_i(), this.__37_i(), this.btn_1_i(), this.btn_2_i(), this.btn_3_i(), this.btn_4_i(), this.btn_5_i(), this.btn_6_i(), this.btn_7_i(), this.btn_8_i(), this.btn_9_i(), this.btn_ok_i(), this.btn_0_i(), this.btn_del_i()];
                return t;
            };
            p.grp_redPacket_i = function () {
                var t = new egret.gui.Group();
                this.grp_redPacket = t;
                this.__s(t, ["horizontalCenter", "y"], [0, 45]);
                t.elementsContent = [this.__3_i(), this.label_desc_i(), this.__4_i(), this.__5_i(), this.ico_t1_i(), this.ico_t2_i(), this.__6_i(), this.__7_i(), this.__8_i(), this.label_shareDesc_i(), this.label_sendRmb_i(), this.label_myRmb_i(), this.btn_confirm_i(), this.btn_rmb1_i(), this.btn_rmb2_i(), this.btn_rmb3_i(), this.btn_rmb4_i(), this.btn_dice_i(), this.label_cannotRed_i()];
                return t;
            };
            p.grp_redRec_i = function () {
                var t = new egret.gui.Group();
                this.grp_redRec = t;
                this.__s(t, ["visible", "x", "y"], [false, 57, 155]);
                t.elementsContent = [this.__9_i(), this.__10_i(), this.__11_i(), this.__12_i(), this.__13_i(), this.__14_i(), this.__15_i(), this.__16_i(), this.__17_i(), this.label_all_i(), this.__18_i(), this.label_guild_i(), this.__19_i(), this.label_get_i(), this.list_rec_i()];
                return t;
            };
            p.ico_t1_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_t1 = t;
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_qianlcy", 136, 316.5]);
                return t;
            };
            p.ico_t2_i = function () {
                var t = new egret.gui.UIAsset();
                this.ico_t2 = t;
                this.__s(t, ["source", "x", "y"], ["tit_txt_g_dahaofy", 137, 316.5]);
                return t;
            };
            p.label_all_i = function () {
                var t = new egret.gui.Label();
                this.label_all = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "999", "right", 0xEBA800, 142, 179, 27]);
                return t;
            };
            p.label_cannotRed_i = function () {
                var t = new mo.gui.Label();
                this.label_cannotRed = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textColor", "y"], [0.5, 18, "VIP%s以上才可以发送红包", 0xFFF831, 637]);
                return t;
            };
            p.label_desc_i = function () {
                var t = new egret.gui.Label();
                this.label_desc = t;
                this.__s(t, ["lineSpacing", "size", "stroke", "text", "textColor", "width", "x", "y"], [10, 15, 1, "向所有人发送随机元宝数量红包，并将消息显示在系统公告中，领取红包的人都将在聊天频道发送此消息", 0xF1C794, 354, 4, 545]);
                return t;
            };
            p.label_get_i = function () {
                var t = new egret.gui.Label();
                this.label_get = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "999", "right", 0xEBA800, 142, 179, 106]);
                return t;
            };
            p.label_guild_i = function () {
                var t = new egret.gui.Label();
                this.label_guild = t;
                this.__s(t, ["size", "text", "textAlign", "textColor", "width", "x", "y"], [22, "999", "right", 0xEBA800, 142, 179, 64]);
                return t;
            };
            p.label_myRmbInput_i = function () {
                var t = new egret.gui.Label();
                this.label_myRmbInput = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "999", 0xEBA800, 190, 152]);
                return t;
            };
            p.label_myRmb_i = function () {
                var t = new egret.gui.Label();
                this.label_myRmb = t;
                this.__s(t, ["size", "text", "textColor", "x", "y"], [22, "999", 0xEBA800, 132, 107]);
                return t;
            };
            p.label_say_i = function () {
                var t = new egret.gui.EditableText();
                this.label_say = t;
                this.__s(t, ["height", "multiline", "size", "text", "textAlign", "textColor", "verticalAlign", "width", "x", "y"], [108, true, 18, "恭喜发财，大吉大利！", "center", 0xF1C794, "middle", 352, 5, 364]);
                return t;
            };
            p.label_sendRmbInput_i = function () {
                var t = new egret.gui.Label();
                this.label_sendRmbInput = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [0, 22, "999", "center", 0xEBA800, 179, 216]);
                return t;
            };
            p.label_sendRmb_i = function () {
                var t = new egret.gui.Label();
                this.label_sendRmb = t;
                this.__s(t, ["horizontalCenter", "size", "text", "textAlign", "textColor", "width", "y"], [0, 22, "999", "center", 0xEBA800, 179, 172]);
                return t;
            };
            p.label_shareDesc_i = function () {
                var t = new egret.gui.Label();
                this.label_shareDesc = t;
                this.__s(t, ["horizontalCenter", "size", "stroke", "text", "textColor", "y"], [0, 18, 1, "当前VIP每日发送额度剩余", 0xF1C794, 142]);
                return t;
            };
            p.list_rec_i = function () {
                var t = new egret.gui.List();
                this.list_rec = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "width", "y"], [345, 0, skins.game.RedPacketRecCellSkin, 370, 222]);
                t.layout = this.__25_i();
                t.dataProvider = this.__24_i();
                return t;
            };
            p.__10_i = function () {
                var t = new egret.gui.Group();
                this.__s(t, ["height", "width", "x", "y"], [45, 109, 261, 150]);
                t.elementsContent = [this.btn_detail_i()];
                return t;
            };
            p.tab_type_i = function () {
                var t = new egret.gui.TabBar();
                this.tab_type = t;
                this.__s(t, ["height", "horizontalCenter", "itemRendererSkinName", "skinName", "y"], [35, 0, skins.comp.TabBarBtn_5_Skin, skins.comp.TabBar_2_Skin, 104]);
                t.layout = this.__31_i();
                t.dataProvider = this.__30_i();
                return t;
            };
            RedPacketSkin._skinParts = ["label_desc", "btn_people1", "btn_people2", "btn_people3", "ico_t1", "ico_t2", "label_shareDesc", "label_sendRmb", "label_myRmb", "btn_confirm", "btn_rmb1", "btn_rmb2", "btn_rmb3", "btn_rmb4", "btn_dice", "btn_recharge", "label_say", "label_cannotRed", "grp_redPacket", "btn_detail", "label_all", "label_guild", "label_get", "list_rec", "grp_redRec", "tab_type", "btn_close", "label_sendRmbInput", "label_myRmbInput", "btn_1", "btn_2", "btn_3", "btn_4", "btn_5", "btn_6", "btn_7", "btn_8", "btn_9", "btn_ok", "btn_0", "btn_del", "grp_numInput"];
            return RedPacketSkin;
        })(egret.gui.Skin);
        game.RedPacketSkin = RedPacketSkin;
        egret.registerClass(RedPacketSkin,"skins.game.RedPacketSkin");
    })(game = skins.game || (skins.game = {}));
})(skins || (skins = {}));
