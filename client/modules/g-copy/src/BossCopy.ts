/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_copy {

	export var curBossCopyId:number;

	/**
	 *
	 * @author 
	 *
	 */
	export class BossCopy extends mo.gui.Dlg{
		moduleParam:IModuleParam.Copy;

		list_items:egret.gui.List;
		_Item_list_items;

		list_copys:any;
		_Item_list_copys;


		titleDisplay:mo.gui.Label;
		label_rest:mo.gui.Label;
		label_combat:mo.gui.Label;
		label_bossHp:mo.gui.Label;
		grp_res:egret.gui.Group;
		copyId;
		ico_monster;
		bossAP:g_base.ActionPlayer;

		grp_boss_token:egret.gui.Group;
		grp_boss_token2:egret.gui.Group;


		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
			self._Item_list_items = g_base.BaseItemCell;
			self._Item_list_copys = BossCopyItem;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.bossAP = new g_base.ActionPlayer();
			self.bossAP.scaleX = self.bossAP.scaleY = 1.6;
			self.ico_monster.source = self.bossAP;
			self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);

			if(self.moduleParam){
				self.setData(self.moduleParam);
			}
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
			var copyList = self.data.copyList;
			self.copyId = g_copy.curBossCopyId || gd.copyCtrl.getCurBossCopyId();
			self.list_copys.selectedItem = self.copyId;
			self.setCopyInfo(self.copyId);
		}

		_tap_btn_enter(){
			var self = this;
			var needInfo = gd.copyCtrl.getBoosCopyEnterCost();
			var needItemId = needInfo[0];
			var needNum = needInfo[1];
			if(gd.userCtrl.getItemNum(needItemId) < needNum){
				var itemId = gc.c_prop.spItemIdKey.bossTessera;
				if(g_base.GainWay.canBuyFromShop(itemId)){
					g_base.GainWayShop.create().setData({itemId:itemId}).show().onClose(function(){
						self.dataChanged();
					});
				}else{
					g_base.GainWay.create().setData({itemId:itemId}).show();
				}
				return;
			}
			gd.fightCtrl.enterCopy(this.copyId);
		}

		_data_list_items():any[]{
			var self = this;
			return gd.userUtils.getLoots(self.copyId? gd.copyCtrl.getCopyLootList(self.copyId) : []);
		}

		_data_list_copys():any[]{
			var self = this;
			var copyList = [].concat(self.data.copyList);
			var nowLen = copyList.length;
			var tempList = gd.copyCtrl.getBossCopyTempList();
			//没有全部打通的情况下，倒数第一个副本为未解锁副本
			if(copyList.length < 3){
				for(var i = 0, li = 3 - nowLen; i < li; i++){
					copyList.push(tempList[nowLen + i]);
				}
			}else{
				copyList = copyList.length == tempList.length? copyList : copyList.concat(tempList[copyList.length]);
			}

			return copyList;
		}

		_click_list_copys(event:egret.gui.ListEvent) {
			var self = this;
			var copyId = event.item;
			self.setCopyInfo(copyId);
		}

		setCopyInfo(copyId){
			var self = this;
			self.copyId = copyId;
			g_copy.curBossCopyId = copyId;
			var copyData = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
			self.refreshList("list_items");
			self.label_rest.text = gd.copyCtrl.getCopyCount(self.copyId);
			//消耗
			var cfg = gd.copyCtrl.getBoosCopyEnterCost();
			uiHelper.setResGrp(self.grp_res, cfg[0], cfg[1]);
			//令牌拥有情况
			var bossTessera = gc.c_prop.spItemIdKey.bossTessera;
			var bossTesseraReplace = gc.c_prop.spItemIdKey.bossTesseraReplace;
			uiHelper.setResGrp(self.grp_boss_token, bossTessera, gd.userCtrl.getItemNum(bossTessera));
			uiHelper.setResGrp(self.grp_boss_token2,bossTesseraReplace, gd.userCtrl.getItemNum(bossTesseraReplace));

			var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.copyId);
			var passCon = gd.copyCtrl.getPassCon(copyId);
			var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, copyInfo[gc.t_copy_bossID]);
			self.titleDisplay.text = [monsterInfo[gc.t_monster_name], mo.STR.format("%s级", monsterInfo[gc.t_monster_level])];
			self.label_bossHp.text = utils.formatByWan(monsterInfo[gc.t_monster_maxHp]);
			self.label_combat.text = utils.formatByWan(monsterInfo[gc.t_monster_combat]);
            var idStr = monsterInfo[gc.t_monster_displayID];
			self.bossAP.loadRes("m"+idStr+"_4s", true);
			self.bossAP.playAction();

			//设置滚动条位置
			process.nextTick(function(){
				process.nextTick(function() {
					var idx = self.list_copys.dataProvider.getItemIndex(self.copyId);
					var pos = ((idx > 0)? (idx-1) : idx) * (83+47);
					self.list_copys.scroller.throwHorizontally(pos);
				})
			});
		}

		_tap_btn_left(){
			var self = this;
			var pos = self.list_copys.dataGroup.horizontalScrollPosition;
			pos -= 83 + 47;
			self.list_copys.scroller.throwHorizontally(pos);
		}

		_tap_btn_right(){
			var self = this;
			var pos = self.list_copys.dataGroup.horizontalScrollPosition;
			pos += 83 + 47;
			self.list_copys.scroller.throwHorizontally(pos);
		}

		click_btn_close(){
			var self = this;
			g_copy.curBossCopyId = null;
			self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
		}

		_tap_btn_buy_bossTicket(){
			var self = this;
			var itemId = gc.c_prop.spItemIdKey.bossTessera;
			if(g_base.GainWay.canBuyFromShop(itemId)){
				g_base.GainWayShop.create().setData({itemId:itemId}).show().onClose(function(){
					self.dataChanged();
				});
			}else{
				g_base.GainWay.create().setData({itemId:itemId}).show();
			}
		}

		_tap_btn_info(){
			var self = this;
			var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.bossTesseraReplace);
			var param1 = gameCfg[0];
			var param2 = gameCfg[1];
			var param3 = gd.userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.bossTesseraReplace);
			g_base.BaseShowTip.create().setData({id:14, param1:param1, param2:param2, param3:param3}).show();
		}
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.fullScr = true;
		moduleCfgItem.targetClass = BossCopy;
		moduleCfgItem.sysId = gc.id_c_open.bossCopy;// 系统id
		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Copy, cb){
			gd.copyCtrl.getCopyBossList(function(data){
				moduleParam.copyList = data;
				cb();
			}, this);
		});
	});
}
