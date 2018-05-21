/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_index {

	/**
	 *
	 * @author 
	 *
	 */
	export class IndexServer extends mo.gui.Dlg{
		list_serverRange:egret.gui.List;
		list_server:egret.gui.List;
		_Item_list_serverRange;
		_Item_list_server;
		index=0;
		selectData;
        lastIndex = 0;

		//@override
		_initProp(){
			super._initProp();
			var self = this;
			self._Item_list_server = IndexServerItem;
			self._Item_list_serverRange = IndexServerRangeItem;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;

			self.list_serverRange.selectedIndex = 0;
			self.list_server.selectedIndex = 0;
		}

		_initItem_list_serverRange(cell:IndexServerRangeItem){
			var self = this;
			cell.emitter.on(IndexServerRangeItem.ON_BTN_RANGE, function(index){
				self.index = index;
				self.list_serverRange.selectedIndex = self.index;
				self.refreshList("list_server");
				process.nextTick(function(){
					process.nextTick(function(){
						self.list_server.selectedIndex = 0;
					})
				});
			}, self);
		}

		_data_list_serverRange():any[]{
			return gd.serverInfoCtrl.getTitleList().reverse();
		}
		_data_list_server():any[]{
			var self = this;
            var index = 0;
            if(self.index == 0){
                index = 0;
            }else{
                index = gd.serverInfoCtrl.getTitleList().length-1-self.index+1;
            }
			return gd.serverInfoCtrl.getServerList(index).reverse();
		}

		_click_list_server(event:egret.gui.ListEvent) {
			var self = this;
			var item = event.item;

            if(item[gc.dsConsts.ServerInfoEntity.status]==0){
                self.list_server.selectedIndex = self.lastIndex;
                return;
            }
            self.list_server.selectedIndex = self.lastIndex = event.itemIndex;
            self.selectData = item;
			var host = item[gc.dsConsts.ServerInfoEntity.host];
			var port = item[gc.dsConsts.ServerInfoEntity.port];
			mo.setLocalStorageItem(gc.Keys.key_host, host);
			mo.setLocalStorageItem(gc.Keys.key_port, port);
            var indexId = item[gc.dsConsts.ServerInfoEntity.indexId];
            gd.serverInfoCtrl.setSelectIndex(indexId);
			gd.serverInfoCtrl.setSelectServer(item);
			self.close();
		}
	}
}
