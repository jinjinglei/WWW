/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_copy {

	/**
	 *
	 * @author
	 *
	 */
	export class Copy extends mo.gui.Dlg{
		moduleParam:IModuleParam.Copy;

		list_copys:egret.gui.List;
		_Item_list_copys;

		img_title:egret.gui.UIAsset;
		label_ticket:mo.gui.Label;

		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
			self._Item_list_copys = CopyItem;

            self.registerClassByKey(gd.CopyCtrl, gd.CopyCtrl.ON_CHALLENGE_NUM, self.dataChanged);
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
			self.img_title.source = self.data.copyType == gc.c_prop.copyTypeKey.equip?
				"tit_txt_g_equipCopy" : "tit_txt_g_stateCopy";
			var tesseraKey = (self.data.copyType == gc.c_prop.copyTypeKey.equip)?
				gc.c_prop.spItemIdKey.equipTessera : gc.c_prop.spItemIdKey.realmTessera;
			self.label_ticket.text = mo.STR.format(
				"[ubb color=0x6deb82]%s[/ubb]: %s",
				gc.c_prop.spItemId[tesseraKey],
				gd.copyCtrl.getTesseraCount(tesseraKey));
		}

		_initItem_list_copys(cell:CopyItem){
			var self = this;
			cell.emitter.on(CopyItem.ON_ITEM_CLICK, function(copyId){
				g_base.CopyLoot.create().setData({copyId: copyId}).show();
			}, self);
		}

		_tap_btn_buy_ticket(){
			var self = this;
			var tesseraKey = (self.data.copyType == gc.c_prop.copyTypeKey.equip)?
				gc.c_prop.spItemIdKey.equipTessera : gc.c_prop.spItemIdKey.realmTessera;
			gd.copyCtrl.buyTessera(tesseraKey, self.dataChanged, self);
		}
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.fullScr = true;
		moduleCfgItem.targetClass = Copy;
		moduleCfgItem.sysId = gc.id_c_open.equipCopy;// 系统id

		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Copy, cb){
			moduleParam.copyType = gc.c_prop.copyTypeKey.equip;
			gd.copyCtrl.getCopyEquipList(function(data){
				var copyList = [].concat(data).reverse();
				moduleParam.copyList = copyList;
				cb();
			}, this);
		});
	});
}
