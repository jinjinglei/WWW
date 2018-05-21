/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_base {

	/**
	 *
	 * @author 
	 *
	 */
	export class OfflineGain extends mo.gui.MsgDlg{
		label_offlineTime;
		label_offlineExp;
		label_offlineExpVip;
		label_offlineGold;
		label_offlineGoldVip;
		label_offlineEquip;
		label_autoSell;
        label_hour;
        label_box;

		offlineData;

		//@override
		_initProp(){
			super._initProp();
			var self = this;
		}

		onEnter(){
			super.onEnter();
			var self = this;
            self.label_hour.text = Math.floor(mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.offlineCfg)[1]/3600)+"";
			return;
			//var data = self.offlineData;
			//var vipLv = gd.userCtrl.getVip();
			////var vipEx = gd.userCtrl.getVipExtra();////vip加成   [vip等级,金币加成，经验加成]
            //
			////[离线时间（）秒、获得经验、获得金币、装备等级、件数、自动出售件数]
			//var second = data[0];
			//var hour = Math.floor(second/3600);
			//var minu = Math.floor((second-3600*hour)/60);
			//second = second%60;
			//self.label_offlineTime.text = mo.STR.format("%s时%s分%s秒", hour,minu,second);
			//self.label_offlineExp.text = mo.STR.format("经验：%s", data[1]);
			//self.label_offlineGold.text = mo.STR.format("金币：%s", data[2]);
			////self.label_offlineExpVip.text = mo.STR.format("VIP%s 加成 +%s%", vipLv, Math.floor(vipEx[2]/10)/10);
			////self.label_offlineExpVip.visible = vipEx[2]!=0;
			////self.label_offlineGoldVip.text = mo.STR.format("VIP%s 加成 +%s%", vipLv, Math.floor(vipEx[1]/10)/10);
			////self.label_offlineGoldVip.visible = vipEx[1]!=0;
			//self.label_offlineEquip.text = mo.STR.format("%s级装备*%s", data[3], data[4]);
			//self.label_offlineEquip.visible = data[4]!=0;
			//self.label_autoSell.text = mo.STR.format("因背包已满，自动出售%s件装备", data[5]);
			//self.label_autoSell.visible = data[5]!=0;
		}

		//@override
		_handleExtArg(arg) {
			var self = this;
			var data = arg.offlineProfit;
			if(data){
				var vipLv = gd.userCtrl.getVip();
				//var vipEx = gd.userCtrl.getVipExtra();////vip加成   [vip等级,金币加成，经验加成]

				//[离线时间（）秒、获得经验、获得金币、装备等级、件数、自动出售件数]
				var second = data[0];
				var hour = Math.floor(second/3600);
				var minu = Math.floor((second-3600*hour)/60);
				second = second%60;
				self.label_offlineTime.text = mo.STR.format("%s时%s分%s秒", hour,minu,second);
				self.label_offlineExp.text = mo.STR.format("经验：%s", data[1]);
				self.label_offlineGold.text = mo.STR.format("金币：%s", data[2]);
				//self.label_offlineExpVip.text = mo.STR.format("VIP%s 加成 +%s%", vipLv, Math.floor(vipEx[2]/10)/10);
				//self.label_offlineExpVip.visible = vipEx[2]!=0;
				//self.label_offlineGoldVip.text = mo.STR.format("VIP%s 加成 +%s%", vipLv, Math.floor(vipEx[1]/10)/10);
				//self.label_offlineGoldVip.visible = vipEx[1]!=0;
				self.label_offlineEquip.text = mo.STR.format("%s级装备*%s", data[3], data[4]);
				self.label_offlineEquip.visible = data[4]!=0;
				self.label_autoSell.text = mo.STR.format("因背包已满，自动出售%s件装备", data[5]);
				self.label_autoSell.visible = data[5]!=0;
                var items = data[6];
                var str = "";
                for (var i = 0; i < items.length; ++i) {
                    var itemData = items[i];
                    var itemId = itemData[0];
                    var num = itemData[1];
                    var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
                    str += itemInfo[gc.t_item_name] + ": " + num + "个\n";
                }
                self.label_box.text = str;
			}
		}

		_tap_btn_ok(){
			var self = this;
			self.close();
		}
	}
}
