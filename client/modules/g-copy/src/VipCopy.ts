/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_copy {

	/**
	 *
	 * @author
	 *
	 */
	export class VipCopy extends mo.gui.Dlg{
		moduleParam:IModuleParam.VipCopy;

		list_copys:egret.gui.List;
		_Item_list_copys;

		img_title:egret.gui.UIAsset;
        label_left_times;

		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
			self._Item_list_copys = VipCopyItem;
		}

		_childrenCreated(){
			var self = this;
			super._childrenCreated();
			if(self.moduleParam){
				self.setData(self.moduleParam);
			}
		}

		_data_list_copys():any[]{
			var self = this;
			return self.data.copyList;
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
            self.label_left_times.text = [gd.copyCtrl.getVipCopyReTimes(self.moduleParam.vip), gd.copyCtrl.getMaxVipCopyTimes(self.moduleParam.vip)];
			self.img_title.source = g_copy.vipBg[self.moduleParam.vip][1];
		}

		onCopyItemClick(copyId){
			var self = this;
			g_base.VipCopyLoot.create().setData({copyId: copyId}).show();
		}

		_tap_btn_help(){
			var self = this;
			var vip = self.moduleParam.vip;
			g_base.BaseShowTip.create().setData({id:59, param1: vip, param2: gd.copyCtrl.getMaxVipCopyTimes(vip)}).show();
		}
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.fullScr = true;
		moduleCfgItem.targetClass = VipCopy;
        moduleCfgItem.onValid(function(moduleParam:IModuleParam.VipCopy){
            if(moduleParam.vip > gd.userCtrl.getVip()){
                mo.showMsg(gc.id_c_msgCode.vipRequire, moduleParam.vip);
                return false;
            }
            return true;
        });
		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.VipCopy, cb){
			gd.copyCtrl.getInfo(function () {
				moduleParam.copyList = gd.copyCtrl.getVipCopyList(moduleParam.vip);
				cb();
			}, this);
		});
	});
}
