/**
 * Created by Administrator on 2015/12/8.
 */
module g_guild{
    export class GuildTreasure extends mo.gui.Dlg{

        ico_item0;
        ico_item1;
        ico_item2;
        ico_item3;
        ico_item4;
        ico_item5;
        ico_item6;
        ico_item7;
        ico_item8;
        eff_0;
        eff_1;
        eff_2;
        eff_3;
        eff_4;
        eff_5;
        eff_6;
        eff_7;
        eff_8;
        label_guildLv;
        label_exp;
        label_cost;
        label_costTen;
        label_content;
        scroller;
        ico_level;

        _initProp(){
            super._initProp();
            var self = this;
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_GUILD_LOTTERY_UPDATE, self.onLotteryUpdate);
        }

        dataChanged(){
            super.dataChanged();
        }

        onEnter(){
            super.onEnter();

            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildAct);
            var guildData = gd.guildCtrl.getData();
            var lvl = guildData[gc.dsConsts.GuildEntity.lvl];
            var items;
            if(lvl>=30){
                items = gameInfo[8];
            }else if(lvl>=15){
                items = gameInfo[7];
            }else if(lvl>=5){
                items = gameInfo[6];
            }

            items = items.split(",");
            if(items.length>9)items.length = 9;
            for(var i=0; i<items.length; ++i){
                var ico_item = self["ico_item"+i];
                var eff = self["eff_"+i];
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, items[i]);
                ico_item.setData({itemId:items[i], count:1});
                ico_item.label_text.visible = false;
                ico_item.onClick(function(){
                    g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(this.get('itemId'), null)}).show();
                },ico_item);
                if(itemInfo[gc.t_item_color]>=5)
                    eff.effectId = 33;
                else
                    eff.effectId = 34;
                eff.startLoadByKey(eff.effectId);
            }
            self.label_cost.text = gameInfo[2];
            self.label_costTen.text = gameInfo[11];
            self.reset();
            self.onLotteryUpdate();
        }

        onLotteryUpdate(){
            var self = this;
            var list = gd.chatCtrl.getGuildLotteryList();
            var allStr = "";
            for(var i=0; i<list.length; ++i){
                var chatStr = gd.chatCtrl.getChatDataStr(list[i]);
                allStr += chatStr+"\n";
            }
            self.label_content.text = allStr;
            process.nextTick(function(){
                if(!self.scroller)return;
                self.scroller.throwVertically(self.scroller.getMaxScrollTop(),1);
            });
        }

        reset(){
            var self = this;
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, gd.userCtrl.getVip());
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            self.label_exp.text = guildPersonalData[gc.dsConsts.GuildPersonalEntity.addUpAct].toString();

            var numLevel =  gd.guildCtrl.getLevel();
            if(numLevel > 0){
                if(numLevel == 1){
                    self.ico_level.source = "tit_txt_g_chujibaoku";
                    self.label_guildLv.text = mo.STR.format("行会%s级提升为中级宝库",15);
                }
                else if(numLevel == 2){
                    self.ico_level.source = "tit_txt_g_zongjibaoku";
                    self.label_guildLv.text = mo.STR.format("行会%s级提升为高级宝库",30);
                }
                else{
                    self.ico_level.source = "tit_txt_g_gaojibaoku";
                    self.label_guildLv.text = mo.STR.format("宝库已达最高级");
                }
            }
        }

        _tap_btn_treasure(){
            var self = this;
            gd.guildCtrl.lottery(1, function(items){
                items = utils.itemObj2ObjArr(items);
                GuildLotteryGain.create().setData({items:items, delegate:self}).show();
                self.reset();
            },self);
        }

        _tap_btn_ten(){
            var self = this;
            gd.guildCtrl.lottery(10, function(items){
                items = utils.itemObj2ObjArr(items);
                GuildLotteryGain.create().setData({items:items, delegate:self}).show();
                self.reset();
            },self);
        }

        _tap_btn_help(){
            var self = this;
            g_base.BaseShowTip.create().setData({id: 17}).show();
        }
    }
}