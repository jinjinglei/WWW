/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_custom {

	/**
	 *
	 * @author 
	 *
	 */
	export class CustomList extends mo.gui.Dlg{
		moduleParam:IModuleParam.Custom;

		list_items:egret.gui.List;
		_Item_list_items;


		tab_bag:egret.gui.TabBar;
		colorType:number;
		label_tickets:mo.gui.Label;

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
			self._layerOpt.shownWithAction = false;
			self._Item_list_items = CustomItem;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.registerClassByKey(gd.CustomCtrl, gd.CustomCtrl.ON_CUSTOM, function(){
				self._refresh();
			});
			if(self.moduleParam && self.moduleParam.itemId){
				var customPara = mo.getJSONWithFileNameAndID(gc.cfg_c_customParameter, self.moduleParam.itemId);
				self.tab_bag.selectedIndex = customPara[gc.c_customParameter_color] - gc.c_prop.equipColorKey.orange;
			}else if(self.moduleParam && self.moduleParam.color){
				self.tab_bag.selectedIndex = self.moduleParam.color - gc.c_prop.equipColorKey.orange;
			}else{
				self.tab_bag.selectedIndex = 0;
			}
			self._tap_tab_bag();
		}

		_tap_tab_bag(){
			var self = this;
			self.colorType = self.tab_bag.selectedIndex + gc.c_prop.equipColorKey.orange;
			self._refresh();
		}

		_refresh(){
			var self = this;
			var scroller = (<any>(self.list_items)).scroller;
			var scrollTop = scroller.scrollTop >=0?scroller.scrollTop:0;
			self.refreshList('list_items');
			process.nextTick(function(){
				if(!self.list_items)return;
				scroller.throwVertically(scrollTop,0);
			});
			self.label_tickets.text = [
				mo.STR.format("[ubb color=%s]%s[/ubb]",uiHelper.getColorByQuality(self.colorType),gc.c_prop.equipColor[self.colorType])
				, gd.customCtrl.getCustomTicket(self.colorType).length];
		}

		_data_list_items():any[]{
			return Object.keys(gc.c_prop.equipType);
		}

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id: 39}).show();
		}
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.targetClass = CustomList;
		moduleCfgItem.fullScr = true;
		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam, cb){
			cb();
		});
	});
}
