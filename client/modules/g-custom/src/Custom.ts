/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_custom {

	/**
	 *
	 * @author 
	 *
	 */
	export class Custom extends mo.gui.Dlg{
		moduleParam:IModuleParam.Custom;

		list_items:egret.gui.List;
		_Item_list_items;

		label_range;
		label_lvl;
		label_count;
		custom_lvl;
		label_needLvl;
		job;
		choosedPropNum = 0;
		inputName;

		img_frame;
		efx:g_comp.UIEffect;
		_efxPlayer:uiHelper.EfxPlayer;

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
			self._Item_list_items = CustomPropItem;
			self.job = gc.c_prop.heroJobKey.zs;
			self._layerOpt.shownWithAction = false;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			var jobs = gc.c_prop.heroJob;
			for(var job in jobs){
				var item:g_comp.Ico_Item = self['ico_item_job' + job];
				if(item){
					item.onClick(self._onJobClick, self, job);
					item.label_text.visible = false;
				}
			}
			self.label_count.text = gd.customCtrl.getMaxCustomPropNum();
			self._efxPlayer = uiHelper.EfxPlayer.createPlayer(self.efx);
			self._efxPlayer.setEndCallback(function(){
				self.close();
			}, self);

			if(self.moduleParam){
				self.setData(self.moduleParam);
			}
		}

		_tap_btn_sub(){
			var self = this;
			var limit = gd.customCtrl.getCustomLvlLimt(self.data.itemId);
			if(self.custom_lvl>limit[0]){
				self.custom_lvl -= 10;
				self.custom_lvl = self.custom_lvl >= limit[0] ? self.custom_lvl : limit[0];
				self.showNum();
				self._updateWearLvl();
			}
		}
		_tap_btn_add(){
			var self = this;
			var limit = gd.customCtrl.getCustomLvlLimt(self.data.itemId);
			if(self.custom_lvl < limit[1]){
				self.custom_lvl += 10;
				self.custom_lvl = self.custom_lvl >= limit[1] ? limit[1] : self.custom_lvl;
				self.showNum();
				self._updateWearLvl();
			}
		}

		showNum(){
			var self = this;
			self.label_lvl.text = self.custom_lvl;
			var equips = gd.customCtrl.getTicketInfo(self.data.itemId, self.custom_lvl, self.data.equipType);
			var jobs = gc.c_prop.heroJob;
			for(var job in jobs){
				var item:g_comp.Ico_Item = self['ico_item_job' + job];
				if(item){
					item.setData({itemId: equips[job], count: 1});
				}
			}
			self.refreshList("list_items");
		}

		_moveLightBorder(item) {
			var self = this;
			var iW = item.width, iH = item.height;
			var bW = self.img_frame.width, bH = self.img_frame.height;
			self.img_frame.x = item.x - (bW - iW) / 2;//for png
			self.img_frame.y = item.y - (bH - iH) / 2;
		}
		_onJobClick(item, target, job){
			var self = this;
			self._moveLightBorder(item);
			self.job = job;
			self.refreshList("list_items");
			self.label_count.text = gd.customCtrl.getMaxCustomPropNum() - self.choosedPropNum;
			self._updateWearLvl();
		}

		_updateWearLvl(){
			var self = this;
			var info = gd.customCtrl.getTicketInfo(self.data.itemId, self.custom_lvl, self.data.equipType);
			var equipTempId = info[self.job];
			self.label_needLvl.text = gd.equipCtrl.getEquipWearLvl(equipTempId);
		}

		dataChanged() {
			super.dataChanged();
			var self = this;
			var limit = gd.customCtrl.getCustomLvlLimt(self.data.itemId);
			self.label_range.text = limit;
			self.custom_lvl = limit[1];
			self.showNum();
			self._updateWearLvl();
		}

		_data_list_items():any[]{
			var self = this, filter, sorter;
			var equips = gd.customCtrl.getTicketInfo(self.data.itemId, self.custom_lvl, self.data.equipType);
			return gd.equipCtrl.getBasePropArr(equips[self.job]);
		}

		_click_list_items(event:egret.gui.ListEvent) {
			var self = this;
			var list:egret.gui.List = event.target;
			var items = list.selectedItems;
			var idxs = list.selectedIndices;
			var itemRenderer = event.itemRenderer;
			var idx = event.itemIndex;
			var item = event.item;
			if(event.itemIndex == 0){
				process.nextTick(function(){
					itemRenderer.selected = true;
					if(idxs.indexOf(idx) == -1) idxs.push(idx);
					if(items.indexOf(item) == -1) items.push(item);
					list.selectedIndices = idxs;
					list.selectedItems = items;
				})
				return mo.showMsg(gc.id_c_msgCode.mainProperty);
			}
			var num = items.length - 1;
			if(gd.customCtrl.getMaxCustomPropNum() - num < 0){
				process.nextTick(function(){
					itemRenderer.selected = false;
					idxs.splice(idxs.indexOf(idx), 1);
					items.splice(items.indexOf(item), 1)
					list.selectedIndices = idxs;
					list.selectedItems = items;
				})
				return mo.showMsg(gc.id_c_msgCode.fullProperty);
			}
			self.choosedPropNum = num;
			self.label_count.text = gd.customCtrl.getMaxCustomPropNum() - self.choosedPropNum;
		}

		_tap_btn_custom(){
			var self = this;
			gd.customCtrl.customization(self.data.itemId
				, self.job
				, self.inputName.text
				, self.custom_lvl
				, self.list_items.selectedIndices
				, self.data.equipType
				, function(){
					self._efxPlayer.play();
				}, self);
		}

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id: 40}).show();
		}
	}


	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.targetClass = Custom;
		moduleCfgItem.fullScr = true;
		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Custom, cb){
			cb();
		});
	});
}
