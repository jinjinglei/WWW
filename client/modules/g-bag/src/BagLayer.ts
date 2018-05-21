/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_bag {

	/**
	 *
	 * @author 
	 *
	 */
	export class BagLayer extends mo.gui.Layer{
		list_items:egret.gui.List;
		_Item_list_items;

		btn_forge:egret.gui.Button;
		tab_bag:egret.gui.TabBar;

		label_grid:mo.gui.Label;
		grp_equip:egret.gui.Group;

		showType:number;
		_scollerHelper:uiHelper.ScrollerHelper;

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
			self._Item_list_items = BagCell;
			self.showType = 1;
			self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_SMELT, function(){
				self._refresh();
			});
			self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_BATCH_SMELT, function(){
				self._refresh();
			});
			self.registerClassByKey(gd.CustomCtrl, gd.CustomCtrl.ON_INHERITED, function(){
				self._refresh();
			});
			self.registerClassByKey(gd.CustomCtrl, gd.CustomCtrl.ON_CUSTOM, function(){
				self._refresh();
			});
			self.registerClassByKey(gd.UserCtrl, gd.UserCtrl.ON_ITEM_CHANGE, function(){
				self._refresh();
			});
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.tab_bag.selectedIndex = 0;
			self.label_grid.text = [gd.userCtrl.getEquipBagNum(), gd.userCtrl.getEquipBagGrid()];

			self._scollerHelper = new uiHelper.ScrollerHelper(self.list_items);
		}

		_data_list_items():any[]{
			var self = this, filter, sorter;
			self._scollerHelper.resumeScroll();
			var BDC = gd.BagDataCtrl;
			return (self.showType != 1)?
			BDC.getList(BDC.getFilterOpt(self.showType), BDC.getSortOpt(self.showType))
				:BDC.getEquipList(gd.equipCtrl.getEquipList());
		}

		_tap_btn_forge(){
			var self = this;
			self._scollerHelper.pauseScrollV();
			mo.moduleMgr.runModule(g_consts.moduleId.smelting);
		}

		_tap_btn_sale(){
			var self = this;
			BagSale.create().setData().show();
		}

		_tap_tab_bag(event){
			var self = this;
			self.showType = self.tab_bag.selectedIndex + 1;
			self._refresh();
			self.grp_equip.visible = self.tab_bag.selectedIndex == 0;
			if(self.tab_bag.selectedIndex == 0){
				self.label_grid.text = [gd.userCtrl.getEquipBagNum(), gd.userCtrl.getEquipBagGrid()];
			}
		}

		_tap_btn_plus(){
			var self = this;
			gd.userCtrl.buyBagGrid(function(){
				self.label_grid.text = [gd.userCtrl.getEquipBagNum(), gd.userCtrl.getEquipBagGrid()];
			},self)
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
			self.label_grid.text = [gd.userCtrl.getEquipBagNum(), gd.userCtrl.getEquipBagGrid()];
		}

		_click_list_items(event:egret.gui.ListEvent) {
			var self = this;
			var bdc:gd.BagDataCtrl = event.item;
            if (bdc.type == gc.c_prop.itemTypeKey.chest || bdc.type == gc.c_prop.itemTypeKey.expBall
                || bdc.type == gc.c_prop.itemTypeKey.genuineQi) {
				BagOpenBox.create().setData({bdc: bdc}).show().onClose(self._refresh, self);
			}else{
				g_base.BaseItemDetail.create().setData(
					{bdc: bdc,item:event.itemRenderer,isBag:1}
				).show();
			}
		}

        _tap_btn_back(){
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        }

		dtor(){
			super.dtor();
			this._scollerHelper.doDtor();
		}
	}
}
