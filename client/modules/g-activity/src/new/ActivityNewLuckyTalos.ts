/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    import Logger = egret.Logger;
    export class ActivityNewLuckyTalos extends mo.gui.Dlg{

        list_items:any;
        _Item_list_items;
        head:g_comp.ActivityItem;
        btn_help:egret.gui.Button;
        label_activity_desc:egret.gui.Label;
        label_jinbi:egret.gui.Label;
        label_yuanbao:egret.gui.Label;
        grp_cards:egret.gui.Group;

        idTime1;
        idTime2;
        clickTime;

        actItems;
        _aniStep ;
        _aniIdx;
        _selectedIndex;
        _gotCards;

        haveClick:boolean;
        btn_detail;
        detailActItems;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = g_base.BaseItemCell;
            self._selectedIndex = -1;
            self.haveClick = false;
            self.detailActItems = null;
        }

        reset(){
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var exActivity = self.data.exActivity;

            if(!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);
            //self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            //uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));
            //self.label_activity_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            self._updateGoldInfo();

            var items = mo.getJSONWithFileName(gc.cfg_c_luckyTalos);
            var color = activity[gc.dsConsts.ActivityEntity.exValues2][0];
            var costItemId = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.spItemId];
            var subType = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.subType] || 0;
            var level = gd.userCtrl.getLvl();


            self.actItems = [];
            self.detailActItems = [];
            for(var key in items){

                var obj = items[key];
                var minLevel = obj[gc.c_luckyTalos_subTypeDivide][0];
                var maxLevel = obj[gc.c_luckyTalos_subTypeDivide][1];
                var inLevel :boolean= level>= minLevel&& level <= maxLevel;
                if(obj[gc.c_luckyTalos_spItemId]==costItemId && subType==obj[gc.c_luckyTalos_subType]&&inLevel){
                    self.detailActItems.push({"itemId":obj[gc.c_luckyTalos_itemID],"count":obj[gc.c_luckyTalos_amount]});
                    if(obj[gc.c_luckyTalos_color] >= color){
                        self.actItems.push({
                            "itemId": obj[gc.c_luckyTalos_itemID],
                            "count": obj[gc.c_luckyTalos_amount]
                        });
                    }
                }


            }
            self.refreshList("list_items");

            var cost = activity[gc.dsConsts.ActivityEntity.exValues][0];
            for (var i = 0; i < 4; ++i) {
                var label_cost = self["label_cost_have" + i];
                label_cost.text = ""+utils.formatByWan(cost,0);

                var ico = self["ico_cost_icon"+i];
                ico.source = resHelper.getItemIconPath(costItemId);
                ico.anchorOffsetY = -ico.height;
            }
        }

        _updateGoldInfo(){
            var self = this;
            self.label_jinbi.text = gd.userCtrl.getGold();
            self.label_yuanbao.text = gd.userCtrl.getDiamond();
        }

        _data_list_items():any[]{
            var self = this;
            var subActItems = self.actItems.slice(0,4);
            return subActItems;
        }

        _click_list_items(event:egret.gui.ListEvent){
            var data = event.item;
            g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data["itemId"], null)}).show();
        }

        clickCard(index){
            var self = this;

            if(self.haveClick){
                return;
            }
            self.haveClick = true;
            self.clickTime = egret.setTimeout(function() {
                self.dealClickTime();
            }, self, 500);

            if(self._selectedIndex >= 0){
                if(self._aniStep == 1){
                    self._aniStep = 2;
                    self._runAnimation();
                }
                return;
            }

            var grp_item = self["grp_item"+index];
            if(grp_item.visible)return;
            var exActivity = self.data.exActivity;

            gd.activityCtrl.luckyTalos(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id),index,function(data){
                self._selectedIndex = index;
                self.initCardsWithIds(data,index);
                self._updateGoldInfo();
                self.haveClick = false;
            });

        }

        dealClickTime(){
            var self = this;
            self.haveClick = false;

            egret.clearTimeout(self.clickTime);
        }

        clickFlip(index){
            var self = this;
            if(self._aniStep ==1 ){
                self._aniStep = 2;
                self._goNext();
            }
        }

        initCardsWithIds(ids,idx){
            var self = this;
            self._gotCards = ids;
            self._aniIdx = [];
            for (var i = 0; i < 4; ++i) {
                var ico_item = self["ico_item"+i];
                ico_item.onClick(function(data){
                    g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data.data["itemId"], null)}).show();
                });
                if(i==idx){
                    self._aniIdx.unshift(i);
                }else{
                    self._aniIdx.push(i);
                }
            }
            self._gotCards = ids;
            self._aniStep = 0;
            self._runAnimation();
            self.idTime1 = egret.setTimeout(function() {
                if(self._aniStep == 0){
                    self._aniStep = 1;
                    self._runAnimation();
                }
            }, self, 500);
        }

        _runAnimation(){
            var self = this;
            if(self._aniStep >=2 ){
                egret.clearTimeout(self.idTime2);
                self._goNext();
                return;
            }
            var ids = self._gotCards;
            if(self._aniStep == 0){
                var index = self._aniIdx[0];
                self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyTalos,ids[index]),index,function(){
                    //if(self._aniStep == 0){
                    //    self._aniStep = 1;
                    //    self._runAnimation();
                    //}
                });
            }else if(self._aniStep == 1){
                self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyTalos,ids[self._aniIdx[1]]),self._aniIdx[1]);
                self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyTalos,ids[self._aniIdx[2]]),self._aniIdx[2]);
                self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyTalos,ids[self._aniIdx[3]]),self._aniIdx[3]);
                self.idTime2 = egret.setTimeout(function() {
                    if(self._aniStep == 1){
                        self._aniStep = 2;
                        self._runAnimation();
                    }
                }, self, 3000);

            }
        }

        _goNext(){
            var self = this;
            egret.clearTimeout(self.idTime2);
            egret.clearTimeout(self.idTime1);
            self._hideItemAtIndex(0);
            self._hideItemAtIndex(1);
            self._hideItemAtIndex(2);
            self._hideItemAtIndex(3);
            self._selectedIndex = -1;
            self.haveClick = false;

        }

        _showItemAtIndex(item,idx,cb?){
            var self = this;
            var ico_item = self["ico_item"+idx];
            if(!ico_item)return;
            var label_item = self["label_item"+idx];
            if(!label_item)return;
            var effect = self["card_effect"+idx];
            effect.visible = true;
            var _hitEfxPlayer = uiHelper.EfxPlayer.create(effect);
            _hitEfxPlayer.setEndCallback(function(){
                effect.visible = false;
                if(cb)cb.call();
            });
            _hitEfxPlayer.play();

            var itemId = item[gc.c_luckyTalos_itemID];
            ico_item.setData({itemId:itemId , count: item[gc.c_luckyTalos_amount]});
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            label_item.text = itemInfo[gc.t_item_name];

            var grp_hint = self["btn_card"+idx];
            grp_hint.visible = false;
            var grp_item = self["grp_item"+idx];
            grp_item.visible = true;
        }

        _hideItemAtIndex(idx){
            var self = this;
            var ico_item = self["ico_item"+idx];
            if(!ico_item)return;
            var label_item = self["label_item"+idx];
            if(!label_item)return;

            var effect = self["card_effect"+idx];
            effect.visible = true;
            var _hitEfxPlayer = uiHelper.EfxPlayer.create(effect);
            _hitEfxPlayer.setEndCallback(function(){
                effect.visible = false;
            });
            _hitEfxPlayer.play();
            label_item.text = "";
            var grp_hint = self["btn_card"+idx];
            grp_hint.visible = true;
            var grp_item = self["grp_item"+idx];
            grp_item.visible = false;
        }


        _tap_btn_card0(){
            var self = this;
            self.clickCard(0);
        }

        _tap_btn_card1(){
            var self = this;
            self.clickCard(1);
        }

        _tap_btn_card2(){
            var self = this;
            self.clickCard(2);
        }

        _tap_btn_card3(){
            var self = this;
            self.clickCard(3);
        }

        _tap_btn_flipped0(){
            var self = this;
            self.clickFlip(0);
        }

        _tap_btn_flipped1(){
            var self = this;
            self.clickFlip(1);
        }

        _tap_btn_flipped2(){
            var self = this;
            self.clickFlip(2);
        }

        _tap_btn_flipped3(){
            var self = this;
            self.clickFlip(3);
        }

        _tap_btn_container(){

        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:204}).show();
        }

        _tap_btn_detail() {
            var self = this;
            ActivityNewDetail.create().setData({actItems:self.detailActItems, extrItems:null}).show();
        }

    }
}