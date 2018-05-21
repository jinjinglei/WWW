/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_villian {



	/**
	 *
	 * @author 
	 *
	 */
	export class VillianShopLayer extends mo.gui.Dlg{

		moduleParam:IModuleParam.Shop;
		list_items:egret.gui.List;
		_Item_list_items;
		_comps:Array<any> = [];
		_initProp(){
			var self = this;
			super._initProp();
			self._Item_list_items = VillianShopItem;

		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
		}
		dataChanged(){
			super.dataChanged();
			var self = this;

		}
		_data_list_items():any[]{
			var self = this
			return  gd.heroCtrl.getList();
		}
		_click_list_items(event:egret.gui.ListEvent) {
			var self = this;
		}



        _tap_btn_back(){
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        }
	}
}
