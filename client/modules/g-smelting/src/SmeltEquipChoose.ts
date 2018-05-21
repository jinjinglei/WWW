/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_smelting {

	/**
	 *
	 * @author 
	 *
	 */
	export class SmeltEquipChoose extends mo.gui.Dlg{
		list_items:egret.gui.List;
		_Item_list_items;
		_scollerHelper:uiHelper.ScrollerHelper;

		showType:number;
		specialEquipNum:number = 0;
		customEquipNum:number = 0;
		doWhat:number = 0; //0取消 1确定

		maxNum:number = 0;

		label_num:mo.gui.Label;

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
			self._Item_list_items = SmeltChooseItem;
			self.showType = 1;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
		}

		dataChanged() {
			super.dataChanged();
			var self = this;
			self.updateNum();
		}

		updateNum(){
			var self = this;
			var equipIds = self.data.equipIds||[];
			self.label_num.text = [equipIds.length, self.data.maxNum];
		}

		isSelected(equipId){
			var self = this;
			var equipIds = self.data.equipIds||[];
			return equipIds.indexOf(equipId) >= 0;
		}

		pickEquip(equipId){
			var self = this;
			var equipIds = self.data.equipIds||[];
			var idx = equipIds.indexOf(equipId);
			if(idx < 0){
				equipIds.push(equipId);
				self.updateNum();
				if(gd.equipCtrl.isSpecialEquip(gd.equipCtrl.getTempIdByEquipId(equipId))) self.specialEquipNum++;
				if(gd.equipCtrl.isCustomEquipByTempId(gd.equipCtrl.getTempIdByEquipId(equipId))) self.customEquipNum++;
				if(equipIds.length >= self.data.maxNum){
					self._tap_btn_ok();
				}
			}
		}

		dropEquip(equipId){
			var self = this;
			if(gd.equipCtrl.isSpecialEquip(gd.equipCtrl.getTempIdByEquipId(equipId))) self.specialEquipNum--;
			if(gd.equipCtrl.isCustomEquipByTempId(gd.equipCtrl.getTempIdByEquipId(equipId))) self.customEquipNum--;
			var equipIds = self.data.equipIds||[];
			var idx = equipIds.indexOf(equipId);
			if(idx >=0){
				equipIds.splice(idx, 1);
				self.updateNum();
			}
		}

		_data_list_items():any[]{
			var self = this, filter, sorter;
			var BDC = gd.BagDataCtrl;
			return (self.showType != 1)?
			BDC.getList(BDC.getFilterOpt(self.showType), BDC.getSortOpt(self.showType))
				:BDC.getEquipListUnlocked(gd.equipCtrl.getEquipList());
		}

		_refresh(){
			var self = this;
			self.refreshList('list_items');
		}

		_click_list_items(event:egret.gui.ListEvent) {
			var self = this;
			var bdc = event.item;
			var chooseItem = <any>event.itemRenderer;
			chooseItem.ckb_selected.selected = !chooseItem.ckb_selected.selected;
			if(chooseItem.ckb_selected.selected){
				self.pickEquip(bdc.equipId);
			}else{
				self.dropEquip(bdc.equipId);
			}
		}

        _tap_btn_ok(){
			var self = this;
			self.doWhat = 1;
			self.close();
        }
	}
}
