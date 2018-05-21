/**
 * Created by admin on 16/4/14.
 */
module g_fight {
    export class FightTreasureList extends mo.gui.Layer {

        list_items:any;
        _Item_list_items;
        actItems;

        btn_hide;
        label_time;
        label_hidden_count;
        label_cost;
        ico_no_item;

        ico_item_hint;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = FightTreasureItem;
        }

        dataChanged() {
            super.dataChanged();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self._resetInfo();
            self._reset();
        }

        _reset(){
            var self = this;
            gd.pkOutCtrl.getExPkOutInfo(function(data){
                var left_time = data[gc.dsConsts.ExPkOutInfo.openTime];
                var list = data[gc.dsConsts.ExPkOutInfo.treasureInfo];
                if(left_time && left_time!=""){
                    self._resetTime(left_time);
                }
                if(list && list.length > 0){
                    self.ico_no_item.visible = false;
                    self.ico_item_hint.visible = true;
                }else{
                    self.ico_no_item.visible = true;
                    self.ico_item_hint.visible = false;
                }
                self._resetList(list);
            },self);
        }

        _resetList(listArray){
            var self = this;
            self.actItems = [];
            var item = mo.getJSONWithFileName(gc.cfg_t_treasure);
            var all = mo.getJSONWithFileName(gc.cfg_t_item);
            for(var i=0;i< listArray.length;i++){
                var obj = listArray[i];
                var _id = obj[gc.dsConsts.TreasureInfo.itemId];
                var g_objs = [];
                var got = obj[gc.dsConsts.TreasureInfo.items];
                for(var id in got){
                    var count = got[id];
                    var _item = all[id];
                    g_objs.push({id:id,count:count,item:_item});
                }
                self.actItems.push({o:obj,t:item[_id],got:g_objs});
            }
            self.refreshList("list_items");
        }

        _resetInfo(){
            var self = this;
            var count = gd.userCtrl.get(gc.dsConsts.UserEntity.counts)[gc.c_prop.userRefreshCountKey.incognito];
            count = count==undefined?0:count;
            self.label_hidden_count.text = "今日隐姓埋名次数:"+count;
            self.label_cost.text = gc.calIncognito(count);
        }

        _data_list_items():any[]{
            var self = this;
            return self.actItems;
        }

        _click_list_items(event:egret.gui.ListEvent){
            var self = this;
            var data = event.item;
            var allCount = 0;
            var unlockedCount = 0;
            for(var i=0;i<self.actItems.length;i++){
                var obj = self.actItems[i];
                if(obj['t'][gc.t_treasure_id] == data['t'][gc.t_treasure_id]){
                    allCount ++;
                    if(obj['o'][gc.dsConsts.TreasureInfo.status] == 2){
                        unlockedCount++;
                    }
                }
            }
            FightTreasureCompose.create().setData({obj:data,lock:allCount-unlockedCount,unlock:unlockedCount,isfinished:data['o'][gc.dsConsts.TreasureInfo.status]==2?1:0,parent:self}).show();
        }

        _tap_btn_hidden(){
            var self = this;
            gd.pkOutCtrl.incognito(function(data){
                self._resetTime(data[2]);
                self._resetInfo();
            },self);
        }

        _resetTime(lastStartTime){
            var self = this;
            var ls = new Date(lastStartTime);
            var lt = ls.getSecondsBetween(Date.newDate());
            var cfg = mo.getJSONWithFileName(gc.cfg_c_game)[gc.id_c_game.treasure];
            if(lt >= 0 && lt < cfg[1]){
                self.setCDTime(cfg[1] - lt);
            }
        }

        _timeInterval(){
            var self = this;
            self.label_time.text = mo.getTimeStr(self.hideLeftMillisecond);
        }

        _timeFinish(){
            var self = this;
        }

        timeTrigger;
        hideLeftMillisecond = -1;
        setCDTime(second){
            var self = this;
            if(second>0){
                if(self.timeTrigger){
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
                var timeTrigger = self.timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut, self);
                tm.timer.add(timeTrigger);
            }
        }
        cleanCDTime(){
            var self = this;
            if(self.timeTrigger){
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        }
        timeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            self.hideLeftMillisecond = endTime1 - now;
            if (self.hideLeftMillisecond < 0) self.hideLeftMillisecond = 0;
            self._timeInterval();
        }
        timeOut(type, beginTime, endTime){
            var self = this;
            self.hideLeftMillisecond = -1;
            self._timeFinish();
        }
    }
}