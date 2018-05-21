/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_treasure{
    export class Treasure extends mo.gui.Dlg{

        item_sp:g_comp.EfxAsset;
        border_sp:g_comp.EfxAsset;
        label_once:mo.gui.Label;
        label_ten:mo.gui.Label;
        label_date:mo.gui.Label;
        resBar:g_comp.ResBar;
        label_content:mo.gui.Label;
        scroller:egret.gui.Scroller;
        efx_sp:g_comp.UIEffect;

        grp_discountTen;
        grp_discountOnce;
        label_discountOnce;
        label_discountTen;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.ChatCtrl, gd.ChatCtrl.ON_LOTTERY_UPDATE, self.onChatUpdate);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.resBar.grp_gold.visible = false;

            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            //稀有物品
            var items0 = (c_game[gc.id_c_game.lotteryShowCfg][0]).split(",");
            var items1 = (c_game[gc.id_c_game.lotteryShowCfg][1]).split(",");
            var items = [].concat(items0).concat(items1);
            for(var i = 0, li = 16; i < li; i++){
                var itemId = items[i];
                var efxItem:g_comp.EfxAsset = self["item_" + i];
                efxItem.onClick(self._showDetai, self, itemId);
                efxItem.source = resHelper.getItemIconPath(itemId);
                var border = self["border_" +i];
                // 更换边框
                var temp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
                var color = temp[gc.t_item_color];
                border.source = resHelper.getBorderByQuality(1, color);
                efxItem.effectId = color == 5? 33 : 34;
            }
            //终极大奖
            var temp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, c_game[gc.id_c_game.lotteryShowCfg][2]);
            var color = temp[gc.t_item_color];
            self.item_sp.source = resHelper.getItemIconPath(c_game[gc.id_c_game.lotteryShowCfg][2]);
            self.item_sp.onClick(self._showDetai, self, c_game[gc.id_c_game.lotteryShowCfg][2]);
            self.item_sp.effectId = color == 5? 33 : 34; // 34紫色  33橙色
            self.border_sp.source =  resHelper.getBorderByQuality(1, color);

            self.efx_sp.effectId = color == 5? 18:19; // 18橙色 19红色
            self.efx_sp.startLoadByKey(self.efx_sp.effectId, function(){
                if(self.efx_sp) self.efx_sp.width = self.efx_sp.height = 0;
            }, self);


            //打折
            var disCount = c_game[gc.id_c_game.lotteryCostCfg][8] || 1;
            self.label_once.text = gd.activityCtrl.getLotteryCost(1);
            self.label_ten.text = gd.activityCtrl.getLotteryCost(10);

            var hasDisCount = disCount < 1;
            self.grp_discountTen.visible = hasDisCount;
            self.grp_discountTen.includeInLayout = hasDisCount;
            self.grp_discountOnce.visible = hasDisCount;
            self.grp_discountOnce.includeInLayout = hasDisCount;
            if(hasDisCount){
                self.label_discountOnce.text = c_game[gc.id_c_game.lotteryCostCfg][0];
                self.label_discountTen.text = c_game[gc.id_c_game.lotteryCostCfg][1];
            }

            var exActivity = gd.activityCtrl.getLotteryActivity();
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            uiHelper.setEventTime(self.label_date, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));



            self.onChatUpdate(gd.chatCtrl.getLotteryList());
        }

        _showDetai(comp, ico, itemId){
            var self = this;
            var bdc = gd.BagDataCtrl.create(itemId, null);
            g_base.BaseItemDetail.create().setData({bdc: bdc}).show();
        }

        _tap_btn_once(){
            var self = this;
            gd.activityCtrl.lottery(1, self.lotteryResult, self);
        }

        _tap_btn_ten(){
            var self = this;
            gd.activityCtrl.lottery(10, self.lotteryResult, self);
        }

        _tap_btn_recharge(){
            var self = this;
            mo.moduleMgr.pushModule(g_consts.moduleId.recharge);
        }

        lotteryResult(items){
            var self = this;
            MoJinGain.create().setData({items:utils.itemObjArr2ObjArr(items)}).show();
        }

        clearChat(){
            var self = this;
            self.label_content.text = "";
        }

        onChatUpdate(data){
            var self = this;
            self.clearChat();
            var allStr = "";
            for(var i=0; i<data.length; ++i){
                var chatStr = gd.chatCtrl.getChatDataStr(data[i]);
                allStr += chatStr+"\n";
            }
            self.label_content.text = allStr;
            process.nextTick(function(){
                if(!self.scroller)return;
                self.scroller.throwVertically(self.scroller.getMaxScrollTop(),1);
            });
        }
    }


    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = Treasure;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            cb();
        });
    });
}