/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewCardGroup extends mo.gui.Layer {

        label_text:egret.gui.Label;

        group_cardList;
        cardItemArr;

        idTime1;
        idTime2;
        clickTime;

        actItems;
        _aniStep ;
        _aniIdx;
        _selectedIndex;
        _gotCards;
        haveClick:boolean;
        maxCardNum;
        maxLuckValue;
        activityId;
        root;
        cost;
        costItemId;
        label_count;

        _initProp(){
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.cardItemArr = [];
            self.activityId = 0;
            self._selectedIndex = -1;
            self.haveClick = false;
            self.root = null;
            self.cost = 0;
        }


        dataChanged(){
            super.dataChanged();
            var self = this;
            if(!self.data) return;
            var activity = self.data.activity;
            if(!activity)
                return;

            self.maxCardNum = 3;

            for(var i = 0;i < self.maxCardNum;i++){
                var group = self.group_cardList.getChildAt(i);
                var cardItem = ActivityNewCardItem.create().setData({index:i,activity:activity,root:self});
                group.addElement(cardItem);
                self.cardItemArr.push( cardItem);
            }

            var cost = activity[gc.dsConsts.ActivityEntity.exValues][0];
            var costItemId = activity[gc.dsConsts.ActivityEntity.exData][gc.c_prop.activityExDataTypeKey.spItemId];

            self.activityId  = self.data.activityId;
            self.root =  self.data.root;

            self.cost = cost;
            self.costItemId = costItemId;

            self.updateItemInfo();
        }


        updateItemInfo(){
            var self = this;
            var id = self.activityId;
            var count = gd.activityCtrl.getTodayActivityCount(id);
            var freeCount = gd.activityCtrl.getFreeDay(id);
            var totalCount = gd.activityCtrl.getTotalDay(id);

            var freeNum:number =  freeCount > count ? freeCount -count : 0;
            var cost =  freeNum > 0 ? 0 : self.cost;

            var data = {};
            data["freeNum"] = freeNum;
            data["totalFreeCount"] = freeCount;
            data["neeMoney"] = cost;
            data["costItemId"] = self.costItemId;

            for(var i = 0; i <self.maxCardNum;i++){
                var item = self.cardItemArr[i];
                item.setMoneyInfo(data);
            }

            var leftCount  = totalCount - count;
            self.label_count.text = count.toString()+"/"+totalCount.toString();
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

            var id =  self.activityId;
            gd.activityCtrl.newLuckyMajong(id,index,function(data){
                self._selectedIndex = index;
                self.initCardsWithIds(data,index);
                self.haveClick = false;
                self.root.updateInfo();
                self.updateItemInfo();
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
                //var ico_item = self["ico_item"+i];
                //ico_item.onClick(function(data){
                //    g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data.data["itemId"], null)}).show();
                //});
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

        _showItemAtIndex(item,idx){
            var self = this;
            var askItem = self.getAskItemByIndex( idx);
            if( askItem){
                askItem.showItem( item);
            }
        }

        _hideItemAtIndex(idx){
            var self = this;
            var askItem = self.getAskItemByIndex(idx);
            if( askItem){
                askItem.hideItem();
            }
        }

        getAskItemByIndex(index){
            var self = this;
            var askItem = null;
            if( index >= 0 && index < self.maxCardNum){
                askItem = self.cardItemArr[index];
            }
            return askItem;
        }

    }
}