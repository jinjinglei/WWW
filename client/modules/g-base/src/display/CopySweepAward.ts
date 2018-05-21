/**
 * Created by Zhuang on 2016/4/26.
 */

module g_base {


	export class CopySweepAward extends mo.gui.Dlg{


		list_items:egret.gui.List;
		_Item_list_items;
		label_cost;
		titleDisplay;
		sweep_num;
		_initProp(){
			var self = this;
			super._initProp();
			self._Item_list_items = g_base.BaseItemCell;
		}

		_data_list_items():any[]{
			var self = this, filter, sorter;
			var arward_item = self.data.items;
			var arr = [];
			for(var key in  arward_item){
				arr.push({
					itemId: key,
					count: arward_item[key]
				});
			}
			return arr;
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
			var copyId = self.data.copyId;
			var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
			self.titleDisplay.text = copyData[gc.t_copy_name];
			self.sweep_num.text  =  "本次操作扫荡副本"+self.data.num+"次"
		}
		onEnter() {
			super.onEnter();
			var self = this;
			var leftTime = 10;
			self.setCDTime(leftTime);
		}
		_tap_btn_enter(){
			var self = this;
			self._tap_btn_back();
		}
		onExit(){
			super.onExit();
			var self = this;
			if(self.timeTrigger){
				tm.timer.remove(self.timeTrigger);
				self.timeTrigger = null;
			}
		}
		timeTrigger;
		setCDTime(second){
			var self = this;
			if(second>0){
				if(self.timeTrigger){
					tm.timer.remove(self.timeTrigger);
					self.timeTrigger = null;
				}
				var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
				var timeTrigger = self.timeTrigger = new tm.Trigger(nextCdTime);
				timeTrigger.on(tm.Trigger.ON_SECOND,self.timeSec, self);
				timeTrigger.on(tm.Trigger.ON_END, self.timeOut, self);
				tm.timer.add(timeTrigger);
				self.label_cost.text = mo.STR.format("确定(%s)", second.toString());
			}
		}
		timeSec(type, beginTime, endTime){
			var self = this;
			var now = Date.newDate().getTime();
			var endTime1 = Date.newDate(endTime).getTime();
			var leftMillisecond = endTime1 - now;
			self.label_cost.text = mo.STR.format("确定(%s)", Math.floor(leftMillisecond/1000).toString());
		}
		timeOut(type, beginTime, endTime){
			var self = this;
			self._tap_btn_back();
		}

		_tap_btn_back(){
			var self = this;
			self.close();
		}

	}
}
