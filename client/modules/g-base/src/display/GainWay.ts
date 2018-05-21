/**
 * Created by Administrator on 2015/11/5.
 */
module g_base {
    export class GainWay extends mo.gui.Dlg {
        btn_back;
        list_gainWay:egret.gui.List;
        _Item_list_gainWay;
        ico_item;
        label_name;
        label_noOut;

        public static canBuyFromShop(itemId){
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            var dropIdDatas = [].concat(itemInfo[gc.t_item_dropId] || []);
            var isFromShop = false;
            for(var i=0; i<dropIdDatas.length; ++i){
                var ary = dropIdDatas[i];
                if(ary[0] == 6 && ary[1]==2){
                    isFromShop = true;
                    break;
                }
            }
            return isFromShop;
        }

        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_gainWay = GainWayItem;
        }

        onEnter(){
            super.onEnter();
            var self = this;
            var itemId = self.data.itemId;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            self.ico_item.setData({itemId:itemId, count:0});
            self.label_name.text = itemInfo[gc.t_item_name];
            self.showGainWayList();
        }
        protected showGainWayList(){
            var self = this;
            var itemId = self.data.itemId;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            var dropIdDatas = itemInfo[gc.t_item_dropId] || [];

            var exActivity = gd.activityCtrl.getLotteryActivity();
            if (!exActivity) {
                for (var i = 0; i < dropIdDatas.length; ++i) {
                    var ary = dropIdDatas[i];
                    var moduleId = parseInt(ary[0]);

                    if (moduleId == 7) {
                        dropIdDatas.splice(i, 1);
                        break;
                    }
                }
            }

            self.list_gainWay.dataProvider = new egret.gui.ArrayCollection(dropIdDatas);
            self.label_noOut.visible = dropIdDatas.length==0;
            self.list_gainWay.visible = dropIdDatas.length!=0;
        }

        _tap_btn_back(){
            var self = this;
            self.close();
        }
        _click_list_gainWay(e:egret.gui.ListEvent){
            var item = e.item;
            // 1,0熔炼
            // 1,2活动
            // 1,3野外PK
            // 1,4聊天
            // 1,5签到
            // 1,6充值
            // 2,0装备副本
            // 2,1炼狱副本
            // 2,2元神副本
            // 2,10vip副本
            // 2,3竞技场商店
            // 2,4竞技场
            // 2,7日常任务
            // 3,1技能
            // 3,3翅膀
            // 4,0强化
            // 4,1升星
            // 4,2宝石
            // 6,1探宝
            // 6,2商城

            var self = this;
            var ary = item;
            var moduleId = parseInt(ary[0]);
            var subModuleId = parseInt(ary[1]);
            var param = parseInt(ary[2]?ary[2]:0);
            var moduleParam:any;
            switch (moduleId){
                case 8:
                    moduleParam = {subModuleId : subModuleId};
                    gd.guildCtrl.getInfo(function(data){
                        var isGuild = data[0];
                        if(!isGuild){
                            mo.showMsg(gc.id_c_msgCode.noGuild);
                        }else{
                            mo.moduleMgr.runModule(g_consts.moduleId.guildMineLayer,moduleParam);
                        }
                    },self);
                    //mo.moduleMgr.runModule(g_consts.moduleId.guildMineLayer, moduleParam);
                    break;
                case 7:
                    moduleParam = {subModuleId : subModuleId};
                    mo.moduleMgr.runModule(g_consts.moduleId.treasure, moduleParam);
                    break;
                case 6:
                    moduleParam = {subModuleId : subModuleId};
                    mo.moduleMgr.runModule(g_consts.moduleId.shop, moduleParam);
                    break;
                case 4:
                    moduleParam = {subModuleId : subModuleId};
                    mo.moduleMgr.runModule(g_consts.moduleId.forge, moduleParam);
                    break;
                case 3:
                    moduleParam = {subModuleId : subModuleId};
                    mo.moduleMgr.runModule(g_consts.moduleId.role, moduleParam);
                    break;
                case 2:
                    if(param!=0){
                        if(subModuleId == 10){ //Vip副本
                            mo.moduleMgr.runModule(g_consts.moduleId.vipCopy, {vip: param});
                        }else{
                            var copyId = param;
                            if(!gd.copyCtrl.isCopyLocked(copyId)){
                                g_base.CopyLoot.create().setData({copyId:copyId}).show();
                            }else{
                                mo.showMsg("该副本还未解锁！");
                            }
                        }
                    }else{
                        moduleParam = {subModuleId : subModuleId};
                        mo.moduleMgr.runModule(g_consts.moduleId.home, moduleParam);
                    }
                    break;
                case 1:
                    process.nextTick(function(){
                        moduleParam = {subModuleId : subModuleId, param:param};
                        mo.moduleMgr.runModule(g_consts.moduleId.fight, moduleParam);
                    });
                    break;
                case 99:
                    break;
            }
        }

    }
}