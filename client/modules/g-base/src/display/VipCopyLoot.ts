/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_base {

	/**
	 *
	 * @author
	 *
	 */
	export class VipCopyLoot extends mo.gui.Dlg{

		titleDisplay:egret.gui.Label;
		label_rest:mo.gui.Label;

		list_items:egret.gui.List;
		_Item_list_items;


		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._Item_list_items = g_base.BaseItemCell;
		}

		_data_list_items():any[]{
			var self = this;
			return gd.userUtils.getLoots(gd.copyCtrl.getCopyLootList(self.data.copyId));
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
			var copyId = self.data.copyId;
			var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
			self.titleDisplay.text = copyData[gc.t_copy_name];
			var vip = gd.copyCtrl.getCopyVip(copyId);
			self.label_rest.text = [gd.copyCtrl.getVipCopyReTimes(vip), gd.copyCtrl.getMaxVipCopyTimes(vip)];
		}

		_tap_btn_enter(){
			var self = this;
			var copyId = self.data.copyId;
			gd.fightCtrl.enterCopy(copyId);
		}
	}
}
