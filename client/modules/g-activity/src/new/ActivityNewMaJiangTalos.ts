/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    import Logger = egret.Logger;
    export class ActivityNewMaJiangTalos extends mo.gui.Dlg{

        list_items:any;
        _Item_list_items;

        list_itemsOther:any;
        _Item_list_itemsOther;
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

        maxCardNum;
        extrItems;

        maxLuckValue;
        label_activity_desc2;
        progress_luck;
        helpId;
        detailActItems;
        detailExtrItems;

        _initProp(){
            var self = this;
            super._initProp();
            //self._Item_list_items = g_base.BaseItemCell;

            self._Item_list_items = ActivityNewCollectCharacterBaseItem;
            self._Item_list_itemsOther = g_base.BaseItemCell;
            self._selectedIndex = -1;
            self.haveClick = false;
            self.maxCardNum = 6;
            self.maxLuckValue = 0;
            self.helpId = 0;

        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            var exActivity = self.data.exActivity;
            if(!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.maxLuckValue = activity[gc.dsConsts.ActivityEntity.exValues3][1];
            var id = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id);
            var curreLuck:number = gd.activityCtrl.getLuckValue(id);
            self.setLuck( curreLuck);

            self.detailExtrItems = null;
            self.detailActItems = null;
        }


        reset(){
            var self = this;
            self.setData(self.data);
            self.refreshList("list_items");
            self.refreshList("list_itemsOther");
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


            var items = mo.getJSONWithFileName(gc.cfg_c_luckyMajong);
            var color = activity[gc.dsConsts.ActivityEntity.exValues2][0];
            var costItemId = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.spItemId];
            var subType = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.subType] || 0;

            var helpIdStr = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.bgIcon] || "";
            self.helpId = helpIdStr == "" ? 0 :parseInt( helpIdStr);

            var level = gd.userCtrl.getLvl();


            self.actItems = [];
            self.extrItems = [];
            self.detailExtrItems = [];
            self.detailActItems = [];
            for(var key in items){

                var obj = items[key];
                var minLevel = obj[gc.c_luckyMajong_subTypeDivide][0];
                var maxLevel = obj[gc.c_luckyMajong_subTypeDivide][1];
                var inLevel :boolean= level>= minLevel&& level <= maxLevel;

                if(obj[gc.c_luckyMajong_spItemId]==costItemId && subType==obj[gc.c_luckyMajong_subType] && obj[gc.c_luckyMajong_color] >= color&&inLevel){
                    if( obj[gc.c_luckyMajong_ifRare] == 1){
                        self.extrItems.push({"itemId":obj[gc.c_luckyMajong_itemID],"count":obj[gc.c_luckyMajong_amount],"color":obj[gc.c_luckyMajong_color]});
                    }
                    else{
                        self.actItems.push({"itemId":obj[gc.c_luckyMajong_itemID],"count":obj[gc.c_luckyMajong_amount]});
                    }
                }

                if(obj[gc.c_luckyMajong_spItemId]==costItemId && subType==obj[gc.c_luckyMajong_subType]&&inLevel){
                    //if( obj[gc.c_luckyMajong_ifRare] == 1){
                    //    self.detailExtrItems.push({"itemId":obj[gc.c_luckyMajong_itemID],"count":obj[gc.c_luckyMajong_amount]});
                    //}
                    //else{
                      self.detailActItems.push({"itemId":obj[gc.c_luckyMajong_itemID],"count":obj[gc.c_luckyMajong_amount]});
                    //}
                }
            }

            self.extrItems.sort(function(a, b){
                return b["color"]-a["color"];
            });


            self.refreshList("list_items");

            var cost = activity[gc.dsConsts.ActivityEntity.exValues][0];

            for (var i = 0; i < self.maxCardNum; ++i) {
                var label_cost = self["label_cost_have" + i];
                label_cost.text = ""+utils.formatByWan(cost,0);
                var ico = self["ico_cost_icon"+i];
                if( costItemId == gc.c_prop.spItemIdKey.gold){
                    self.setItemIcon(ico, costItemId)
                }
                else if( costItemId == gc.c_prop.spItemIdKey.diamond) {
                    ico.source = "ico_yuanbao";
                }
                else{
                    ico.source = resHelper.getItemIconPath(costItemId);
                    ico.scaleX = 0.5;
                    ico.scaleY = 0.5;
                    ico.anchorOffsetY = ico.height*0.5;
                }
            }
        }

        setItemIcon( iconItem,spItemId){
            var imgPath = resHelper.getSmallItemPath(spItemId);
            RES.getResByUrl(imgPath, function (texture:egret.Texture) {
                iconItem.source = texture;
            }, self, RES.ResourceItem.TYPE_IMAGE);

        }

        _updateGoldInfo(){
            var self = this;
            self.label_jinbi.text = gd.userCtrl.getGold();
            self.label_yuanbao.text = gd.userCtrl.getDiamond();
        }

        _data_list_items():any[]{
            var self = this;

            //var subActItems = [];
            var  subActItems = self.actItems.slice(0,4);
            return subActItems;
        }

        _data_list_itemsOther():any[]{
            var self = this;
           // return self.extrItems;
            var subExtrItems = null;
            var id = self.helpId;
            if( self.extrItems.length >2&& id >0){
                subExtrItems = [];
                var item = {"itemId":id,"count":1};
                subExtrItems.push( item);
            }
            else{

                subExtrItems = self.extrItems.slice(0,2);
            }
            return subExtrItems;
        }


        _click_list_items(event:egret.gui.ListEvent){
            var data = event.item;
            g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data["itemId"], null)}).show();
        }


        _click_list_itemsOther(event:egret.gui.ListEvent){
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

            var id = gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id);

            gd.activityCtrl.luckyMajong(id,index,function(data){
                self._selectedIndex = index;
                self.initCardsWithIds(data,index);
                self._updateGoldInfo();
                self.haveClick = false;

                var curreLuck:number = gd.activityCtrl.getLuckValue(id);
                self.setLuck( curreLuck);

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
            for (var i = 0; i < self.maxCardNum; ++i) {
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
                self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyMajong,ids[index]),index);
            }else if(self._aniStep == 1){
                for(var i = 1;i < self.maxCardNum;i++){
                    var indexId :number = self._aniIdx[i];
                    self._showItemAtIndex(mo.getJSONWithFileNameAndID(gc.cfg_c_luckyMajong,ids[indexId]),indexId);
                }
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

            for(var i = 0;i < self.maxCardNum;i++){
                self._hideItemAtIndex(i);
            }

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


            var itemId = item[gc.c_luckyMajong_itemID];
            ico_item.setData({itemId:itemId , count: item[gc.c_luckyMajong_amount]});
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

        _tap_btn_card4(){
            var self = this;
            self.clickCard(4);
        }
        _tap_btn_card5(){
            var self = this;
            self.clickCard(5);
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

        _tap_btn_flipped4(){
            var self = this;
            self.clickFlip(4);
        }

        _tap_btn_flipped5(){
            var self = this;
            self.clickFlip(5);
        }

        _tap_btn_container(){

        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:229}).show();
        }

        _tap_btn_detail() {
            var self = this;
            //ActivityNewDetail.create().setData({actItems:self.detailActItems, extrItems:self.detailExtrItems}).show();
             ActivityNewDetail.create().setData({actItems:self.detailActItems, extrItems:null}).show();

        }

        setLuck(curreLuck){
            var self = this;
            var str = "幸运值:"+curreLuck+"/"+self.maxLuckValue;
            self.label_activity_desc2.text = str;
            var per = Math.floor( curreLuck/self.maxLuckValue*100);
            self.progress_luck.setValue(per);
        }



    }
}