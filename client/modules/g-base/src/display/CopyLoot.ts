/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_base {

	/**
	 *
	 * @author
	 *
	 */
	export class CopyLoot extends mo.gui.Dlg{
		titleDisplay:egret.gui.Label;
		label_rest:mo.gui.Label;
		label_cost:mo.gui.Label;
		grp_res0:egret.gui.Group;

		list_items:egret.gui.List;
		_Item_list_items;
		TesseraKey:any;

        label_saoDang;

		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._Item_list_items = g_base.BaseItemCell;
		}

		_data_list_items():any[]{
			var self = this, filter, sorter;
			return gd.userUtils.getLoots(gd.copyCtrl.getCopyLootList(self.data.copyId));
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
			var copyId = self.data.copyId;
			var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
			self.titleDisplay.text = copyData[gc.t_copy_name];
			self.label_rest.text = gd.copyCtrl.getCopyCount(copyId);

			var copyType = gd.copyCtrl.getCopyType(copyId);
			var tesseraKey = (copyType == gc.c_prop.copyTypeKey.equip)?
				gc.c_prop.spItemIdKey.equipTessera : gc.c_prop.spItemIdKey.realmTessera;
            var ticketCount = gd.copyCtrl.getTesseraCount(tesseraKey);
			var hasTicket = ticketCount > 0;
			self.TesseraKey = tesseraKey;
			self.grp_res0.visible = !hasTicket;
			self.label_cost.visible = hasTicket;

			if(hasTicket){
				self.label_cost.text = mo.STR.format(
					"[ubb color=0x6deb82]%s[/ubb]:%s/%s",
					gc.c_prop.spItemId[tesseraKey],
					gd.copyCtrl.getTesseraCount(tesseraKey),
					1);
			}else{
				uiHelper.setResGrp(self.grp_res0, gc.c_prop.spItemIdKey.diamond, gd.copyCtrl.getTesseraPrice(tesseraKey));
			}

            var saoDangCount = Math.min(ticketCount,gd.copyCtrl.getCopyCount(copyId));
            self.label_saoDang.visible = saoDangCount>0;
            if(saoDangCount>0){
                self.label_saoDang.text = saoDangCount;
            }
		}

		_tap_btn_buy_times(){
			var self = this;
			var copyId = self.data.copyId;
			gd.copyCtrl.buyCopyCount1(copyId,function(){
				self.label_rest.text = gd.copyCtrl.getCopyCount(copyId);
			}, self);
		}

		_tap_btn_enter(){
			var self = this;
			var copyId = self.data.copyId;
			gd.fightCtrl.enterCopy(copyId);
		}
		_tap_btn_sweep(){
			var self = this;
			var copyId = self.data.copyId;
			var starNum = gd.copyCtrl.getCopyStar(copyId)
			if(starNum< 3){
				return mo.showMsg(gc.id_c_msgCode.notPerfect);
			}
			if(gd.copyCtrl.getCopyCount(copyId) <= 0){
				gd.copyCtrl.buyCopyCount1(copyId,function(){
					self.label_rest.text = gd.copyCtrl.getCopyCount(copyId);
				}, self);
				return;
			}
			//g_base.CopySweepAward.create().show();
			if(gd.copyCtrl.getTesseraCount(self.TesseraKey) >0 ){
				gd.copyCtrl.copyWipe(copyId,function(data){
					g_base.CopySweepAward.create().setData({copyId:copyId,items:data[0],num:data[1]}).show();
					self.dataChanged()
					self.close();
				},self);
			}
			else{
				var gold  = gd.copyCtrl.getTesseraPrice(self.TesseraKey)*gd.copyCtrl.getCopyCount(copyId);
				mo.showMsg(gc.id_c_msgCode.noticket,gold,gd.copyCtrl.getCopyCount(copyId),function(){
					gd.copyCtrl.copyWipe(copyId,function(data){
						g_base.CopySweepAward.create().setData({copyId:copyId,items:data[0],num:data[1]}).show();
						self.dataChanged()
						self.close();
					},self);
				});
			}
		}
		_tap_btn_wipe(){
			var self = this;
		}
	}
}
