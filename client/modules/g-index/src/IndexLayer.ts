/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_index {

	/**
	 *
	 * @author 
	 *
	 */
	export class IndexLayer extends mo.gui.Layer{

		btn_login:egret.gui.Button;
		btn_change:egret.gui.Button;
		label_curServer:mo.gui.Label;
		label_account:mo.gui.Label; //账号名称
		label_ver:mo.gui.Label; //版本号
        lyr_serverSelect:egret.gui.Group; // 选区服的panel
		lyr_serverNew:egret.gui.Group;

		label_lock_server;
		label_lock_serverDesc;
		ico_lock_status;
		ico_lock_new;

		grp_lock:egret.gui.Group; 		//锁区时候的显示界面

		list_new_server:any;
		_Item_list_new_server;

		indexServer;
        ico_new;
        ico_status;
        label_serverDesc;

		_initProp(){
			super._initProp();
			var self = this;
			self._Item_list_new_server = IndexServerShortItem;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.label_curServer.touchChildren = self.label_curServer.touchEnabled = true;
			self.btn_change.visible = mo_channel.getCurChannel().isMultiAccount;
			self.label_ver.text = "v." + (<any>(<any>egret).project).gameVer; //从index.html读取版本号
		}

		////+++++++++++++++++++点击事件设置区域 开始++++++++++++++++++++
		//_tap_btnLogout(){// 显示登录弹框
		//	this.close();// 关闭自己
		//	IndexLogin.create().show();
		//}

		onEnter(){
			super.onEnter();
			var self = this;

			self.checkServersShow();

            //hd { 需要判断是否是锁定选区
			var srv = gd.HoodinnCtlr.LockedServer();
			if (srv) {
                // 先获取下改区服的信息
                var info = gd.serverInfoCtrl.getServerInfoById(parseInt(srv));
                if (info) {
                    // 如过找到了区，则锁定区服
                    self.lyr_serverSelect.visible = false;
					self.lyr_serverNew.visible = false;
					self.grp_lock.visible = true;
                    self.showCurServer(info,true);
                }
            }
            //hd }
		}

		checkServersShow(){
			var self = this;
			var lastId = mo.getLocalStorageItem("lastLoginServerId");
			if(lastId==null){
				self.lyr_serverSelect.visible = false;
				self.lyr_serverNew.visible = true;
				self.refreshList("list_new_server");
				var goodServerInfo = gd.serverInfoCtrl.getNewGoodServerIndex();
				var list_idx = goodServerInfo[0];
				var index = goodServerInfo[1];
				if(list_idx >= 0){
					self.list_new_server.selectedIndex = list_idx;
					self._selectServer(gd.serverInfoCtrl.getServerByIndex(index));
				}
			}else{
				self.lyr_serverSelect.visible = true;
				self.lyr_serverNew.visible = false;
				self.showCurServer(gd.serverInfoCtrl.getServerInfoById(lastId));
			}
		}

		_tap_btn_login(){// 开始游戏
			if(!egret.isNative){
				gc.lzcl.waitingResult(function(result){//等待配置下载解压完成
					g_base.loginCtrl.enterGame(false);
				})
			}else{
				g_base.loginCtrl.enterGame(false);
			}
		}

		_tap_btn_cur_server(){// 选择服务器
			var self = this;
			self.selectServer();
		}
		_tap_btn_new_server(){// 选择服务器
			var self = this;
			self.selectServer();
		}
		_tap_label_curServer(){// 选择服务器
			var self = this;
			self.selectServer();
		}

		_tap_btn_change(){
			var self = this;
			self.close();
			g_base.loginCtrl.changeAccount();
		}

        _tap_btn_notice(){
            var self = this;
            gd.NoticeCtrl.getNewOne(function(data){
				mo.showMsg(gc.id_c_msgCode.sysNotice, {sysNotice: data});
            },self);
        }

		_click_list_new_server(event:egret.gui.ListEvent) {
			var self = this;
			var item = event.item;
			self._selectServer(item);
		}

		_selectServer(item){
			if(item[gc.dsConsts.ServerInfoEntity.isClose]){
				return;
			}
			//self.list_server.selectedIndex = self.lastIndex = event.itemIndex;
			//self.selectData = item;
			mo.setLocalStorageItem("lastLoginServerId", item[gc.dsConsts.ServerInfoEntity.id]);

			var host = item[gc.dsConsts.ServerInfoEntity.host];
			var port = item[gc.dsConsts.ServerInfoEntity.port];
			mo.setLocalStorageItem(gc.Keys.key_host, host);
			mo.setLocalStorageItem(gc.Keys.key_port, port);
			var indexId = item[gc.dsConsts.ServerInfoEntity.indexId];
			gd.serverInfoCtrl.setSelectIndex(indexId);
			gd.serverInfoCtrl.setSelectServer(item);

		}

		_data_list_new_server():any[]{
			return gd.serverInfoCtrl.getNewServers();
		}

		selectServer(){
			var self = this;
			self.indexServer = IndexServer.create().show().onClose(function(){
				self.showCurServer(self.indexServer.selectData);
				self.checkServersShow();
			});
		}

		showCurServer(data,lock?:boolean){
			if(data==null)
				return;
			var self = this;
			mo.setLocalStorageItem("lastLoginServerId", data[gc.dsConsts.ServerInfoEntity.id]);
			//获取host,端口
			var host = data[gc.dsConsts.ServerInfoEntity.host];
			var port = data[gc.dsConsts.ServerInfoEntity.port];
			mo.setLocalStorageItem(gc.Keys.key_host, host);
			mo.setLocalStorageItem(gc.Keys.key_port, port);

            var indexId = data[gc.dsConsts.ServerInfoEntity.indexId];
            gd.serverInfoCtrl.setSelectIndex(indexId);
			gd.serverInfoCtrl.setSelectServer(data);

			var status = data[gc.dsConsts.ServerInfoEntity.status];
			var statusSources = ["ntc_weihu","ntc_lianghao","","ntc_huobao",""];
			var desc = data[gc.dsConsts.ServerInfoEntity.closeExplain];

			if(lock){
				self.label_lock_server.text = data[gc.dsConsts.ServerInfoEntity.name]+"-"+data[gc.dsConsts.ServerInfoEntity.area];
				self.ico_lock_new.visible = data[gc.dsConsts.ServerInfoEntity.isNew];
				if(data[gc.dsConsts.ServerInfoEntity.isClose]){
					self.ico_lock_status.source = statusSources[0];
				}else{
					self.ico_lock_status.source = statusSources[status];
				}
				self.label_lock_serverDesc.text = desc||"";
			}else{
				self.label_curServer.text = data[gc.dsConsts.ServerInfoEntity.name]+"-"+data[gc.dsConsts.ServerInfoEntity.area];
				self.ico_new.visible = data[gc.dsConsts.ServerInfoEntity.isNew];
				if(data[gc.dsConsts.ServerInfoEntity.isClose]){
					self.ico_status.source = statusSources[0];
				}else{
					self.ico_status.source = statusSources[status];
				}
				self.label_serverDesc.text = desc||"";
			}
		}
	}
}
