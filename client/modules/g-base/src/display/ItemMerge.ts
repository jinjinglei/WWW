/**
 * Created by Administrator on 2015/9/28.
 */
module g_base{
    export class ItemMerge extends mo.gui.Dlg{

        ico_light;
        ico_topItem0;
        ico_topItem1;
        ico_topItem2;
        ico_arrow0;
        ico_arrow1;
        label_name;
        ico_toItem;
        ico_fromItem0;
        ico_fromItem1;
        ico_fromItem2;
        ico_line1;
        ico_line2;
        ico_line3;
        list_gainWay:egret.gui.List;
        label_copyName;
        grp_merge;
        btn_merge;
        btn_back;
        _Item_list_gainWay;

        curShowItemIds = [];
        curFromItemIds = [];

        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_gainWay = GainWayItem;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        onEnter(){
            super.onEnter();
            var self = this;
            var itemId = self.data.itemId;

            self.setShowItemId(itemId, 0);
        }

        setShowItemId(itemId, index){
            var self = this;
            var topItem;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);

            if(!gd.heroCtrl.isRuneCom(itemId)){
                if(g_base.GainWay.canBuyFromShop(itemId)){
                    g_base.GainWayShop.create().setData({itemId:itemId}).show();
                }else{
                    g_base.GainWay.create().setData({itemId:itemId}).show();
                }
                self.close();
                return;
            }

            self.curShowItemIds.length = index+1;
            self.curShowItemIds[index] = itemId;
            self.ico_arrow0.visible = false;
            self.ico_arrow1.visible = false;
            self.ico_topItem1.visible = false;
            self.ico_topItem2.visible = false;
            if(index==0){
                topItem = self.ico_topItem0;
            }else if(index==1){
                self.ico_topItem1.visible = true;
                topItem = self.ico_topItem1;
                self.ico_arrow0.visible = true;
            }else if(index==2){
                self.ico_topItem1.visible = self.ico_topItem2 = true;
                topItem = self.ico_topItem2;
                self.ico_arrow0.visible = self.ico_arrow1.visible = true;
            }

            self.ico_light.x = topItem.x-4;
            self.ico_light.y = topItem.y-4;
            self.label_name.text = itemInfo[gc.t_item_name];
            topItem.setData({itemId:itemId, count:0});
            self.ico_toItem.setData({itemId:itemId, count:0});
            self.btn_back.visible = self.btn_merge.visible = false;
            if(!gd.heroCtrl.isRuneCom(itemId)){
                self.grp_merge.visible = false;
                var dropIdDatas = [].concat(itemInfo[gc.t_item_dropId] || []);
                if(dropIdDatas.length){
                    self.list_gainWay.dataProvider = new egret.gui.ArrayCollection(dropIdDatas);
                    self.list_gainWay.visible = true;
                }else{
                    self.list_gainWay.visible = false;
                }
                self.btn_back.visible = true;
            }else{
                self.list_gainWay.visible = false;
                self.grp_merge.visible = true;
                var compInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_compound, itemId);
                var compoundNeedObj = {};
                var reqItems1 = compInfo[gc.c_compound_reqItems1];
                self.curFromItemIds.length = 0;
                if(reqItems1 != 0) {
                    compoundNeedObj[reqItems1] = compInfo[gc.c_compound_reqCount1];
                    self.curFromItemIds.push(reqItems1);
                }
                var reqItems2 = compInfo[gc.c_compound_reqItems2];
                if(reqItems2 != 0) {
                    compoundNeedObj[reqItems2] = compInfo[gc.c_compound_reqCount2];
                    self.curFromItemIds.push(reqItems2);
                }
                var reqItems3 = compInfo[gc.c_compound_reqItems3];
                if(reqItems3 != 0) {
                    compoundNeedObj[reqItems3] = compInfo[gc.c_compound_reqCount3];
                    self.curFromItemIds.push(reqItems3);
                }
                var reqItems4 = compInfo[gc.c_compound_reqItems4];
                if(reqItems4 != 0) {
                    compoundNeedObj[reqItems4] = compInfo[gc.c_compound_reqCount4];
                    self.curFromItemIds.push(reqItems4);
                }

                self.ico_line1.visible = false;
                self.ico_line2.visible = false;
                self.ico_line3.visible = false;
                self.ico_fromItem1.visible = false;
                self.ico_fromItem2.visible = false;
                self.ico_fromItem0.x = 87;
                if(self.curFromItemIds.length==1){
                    self.ico_line1.visible = true;
                }
                else if(self.curFromItemIds.length==2){
                    self.ico_line2.visible = true;
                    self.ico_fromItem1.visible = true;
                    self.ico_fromItem0.x = 0;
                    //self.ico_fromItem1.x = 143;
                }else if(self.curFromItemIds.length==3){
                    self.ico_line3.visible = true;
                    self.ico_fromItem1.visible = true;
                    self.ico_fromItem2.visible = true;
                    self.ico_fromItem0.x = 0;
                    //self.ico_fromItem1.x = 87;
                    //self.ico_fromItem2.x = 174;
                }
                var fromItem;
                for(var i=0; i<self.curFromItemIds.length; ++i){
                    var itemId = self.curFromItemIds[i];
                    var needCount = compoundNeedObj[itemId];
                    var curCount = gd.heroCtrl.getRealmCount(itemId);
                    if(i==0)
                        fromItem = self.ico_fromItem0;
                    else if(i==1)
                        fromItem = self.ico_fromItem1;
                    else if(i==2)
                        fromItem = self.ico_fromItem2;
                    fromItem.setData({itemId:itemId, pileCount:curCount, count:needCount});
                }
                self.btn_merge.visible = true;
            }
        }

        _tap_ico_topItem0(){
            var self = this;
            self.setShowItemId(self.curShowItemIds[0], 0);
        }
        _tap_ico_topItem1(){
            var self = this;
            self.setShowItemId(self.curShowItemIds[1], 1);
        }

        _tap_ico_fromItem0(){
            var self = this;
            self.setShowItemId(self.curFromItemIds[0], self.curShowItemIds.length);
        }
        _tap_ico_fromItem1(){
            var self = this;
            self.setShowItemId(self.curFromItemIds[1], self.curShowItemIds.length);
        }
        _tap_ico_fromItem2(){
            var self = this;
            self.setShowItemId(self.curFromItemIds[2], self.curShowItemIds.length);
        }

        _tap_btn_merge(){
            var self = this;
            var itemId = self.data.itemId;
            gd.equipCtrl.compound(itemId, function(){
                self.close();
                if(self.data.delegate){
                    self.data.delegate.reset();
                }
            },self);
        }
        _tap_btn_back(){
            var self = this;
            if(self.curShowItemIds.length<=1)
                self.close();
            else{
                self.setShowItemId(self.curShowItemIds[self.curShowItemIds.length-2], self.curShowItemIds.length-2);
            }
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
                    moduleParam = {subModuleId : subModuleId};
                    mo.moduleMgr.runModule(g_consts.moduleId.fight, moduleParam);
                    break;
            }
        }
    }
}