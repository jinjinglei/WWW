/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_shop {


	export var SUBMID_ITEM:number = 1;
    export var SUBMID_MOJIN:number = 2;

	/**
	 *
	 * @author 
	 *
	 */
	export class ShopLayer2 extends mo.gui.Layer{

		moduleParam:IModuleParam.Shop;

		_comps:Array<any> = [];
		container;
		tab_str:egret.gui.TabBar;
		resBar;
        tabLastSelectIndex;

		viewStack:egret.gui.ViewStack;

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			this.tab_str.dataProvider = self.viewStack;
			this.tab_str.selectedIndex = 0;
            self.tabLastSelectIndex = 0;

			//var group:any = self.viewStack.getElementAt(0);
			//var comp:any = ShopBuyEquip.create().setData({tray: group, itemList: self.data.itemList}).show();
			//self._comps.push(comp);
            //
            //
			//var group:any = self.viewStack.getElementAt(1);
			//comp = Shop.create().setData({tray: group}).show();
			//self._comps.push(comp);
            //
			//var group:any = self.viewStack.getElementAt(2);
			//comp = Shop.create().setData({tray: group}).show();
			//self._comps.push(comp);


			self._comps.push(ShopBuyEquip.create().setData({tray: self.container}).show());
			self._comps.push(Shop.create().setData({tray: self.container}).show());
			self._comps.push(Shop.create().setData({tray: self.container}).show());
			process.nextTick(function(){
				self.tab_str.selectedIndex = 0;
				self._tap_tab_str();
			})
		}


		_hideAllComp(){
			var self = this;
			for(var i = 0, li = self._comps.length; i < li; i++){
				self._comps[i].visible = false;
			}
		}

		dtor(){
			var self = this;
			super.dtor();
			for(var i = 0, li = self._comps.length; i < li; i++){
				mo.gui.helper.rm(self._comps[i]);
			}
			self._comps = null;
		}

        //_tap_btn_recharge(){
			//var self = this;
			//g_mid.Recharge.create().show();
        //}

        _tap_tab_str(){
			var self = this;
			var selectedIndex = self.tab_str.selectedIndex;

            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            if(selectedIndex==1){
                needLvl = c_open[gc.id_c_open.stoneShop][gc.c_open_lvlRequired];
            }
            if(gd.userCtrl.getLvl()<needLvl) {
                process.nextTick(function(){
                    self.tab_str.selectedIndex = self.tabLastSelectIndex;
                    self.viewStack.selectedIndex = self.tabLastSelectIndex;
                })
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl,needLvl);
            }

            self.tabLastSelectIndex = selectedIndex;
			self._hideAllComp();
			var comp = self._comps[selectedIndex];
			comp.visible = true;
			if(selectedIndex==1){
				gd.shopCtrl.getList(gc.c_prop.shopTypeKey.gem, function(itemList){
					comp.setData({shopItemType: gc.c_prop.shopTypeKey.gem, itemList: itemList});
				},self);
				//ws.recordEvent("进入【商城道具】模块", 1);
				self.resBar.showRes(true, true);
			}else if(selectedIndex==2){
				gd.shopCtrl.getList(gc.c_prop.shopTypeKey.normal, function(itemList){
					comp.setData({shopItemType: gc.c_prop.shopTypeKey.normal, itemList: itemList});
				},self);
				//ws.recordEvent("进入【探宝】模块", 1);
				self.resBar.showRes(true, true);
			}else if(selectedIndex == 0){
				gd.shopCtrl.getList(gc.c_prop.shopTypeKey.equip, function(itemList){
					comp.setData({itemList: itemList});
				},self);
				self.resBar.showRes(true, true);
			}
        }

		_tap_btn_recharge(){
			var self = this;
			mo.moduleMgr.runModule(g_consts.moduleId.recharge);
		}

        _tap_btn_back(){
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        }
	}
}
