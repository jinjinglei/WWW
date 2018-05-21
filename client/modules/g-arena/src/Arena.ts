/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_arena {

	/**
	 *
	 * @author 
	 *
	 */
	export class Arena extends mo.gui.Dlg{
		list_items:egret.gui.List;
		_Item_list_items;
		label_jf;
		label_myRank;
		label_count;
		label_time;
		btn_refresh;
        label_timeChange;
		label_next_time;

		pkUserDatas = [];

		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
			self._Item_list_items = ArenaItem;

			self.registerClassByKey(gd.ArenaCtrl, gc.dsConsts.ArenaEntity.reNumData.toString(), self._updatePkNum);
			self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.prestige.toString(), self.updataJf);
		}
        _secondTimerId;
		onEnter(){
			super.onEnter();
			var self = this;

			self.label_myRank.text = gd.arenaCtrl.getRank();
			self._updatePkNum();
			self.label_jf.text = gd.userCtrl.getPrestige();
			self.setCDTime(gd.arenaCtrl.getCDSeconds());
			gd.arenaCtrl.getRefreshRemainTime(function(data){
				//self.setCDTime2(data);
			});
			gd.arenaCtrl.getFightUserList(function(data){
				self.pkUserDatas = data;
				self.refreshList("list_items");
			},self);
            self._secondTimerId = egret.setInterval(self.onSecond, this, 1000);
            self.onSecond();
		}
        onExit(){
            super.onExit();
            var self = this;
            if(self.timeTrigger){
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
			if(self.timeTrigger2){
				tm.timer.remove(self.timeTrigger2);
				self.timeTrigger2 = null;
			}
            egret.clearInterval(self._secondTimerId);
        }

        onSecond(){
            var self = this;
            var leftTime = self.getLeftTime();
            self.label_timeChange.visible = leftTime>0;
            self.label_timeChange.text = mo.getTimeStr(leftTime*1000);
        }

        getLeftTime(){
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.arenaCfg);
            var reNumData = gd.arenaCtrl.get(gc.dsConsts.ArenaEntity.reNumData);
            var lastResetTime = reNumData[gc.c_prop.arenaDataKey.lastResetTime];
            var leftTime = 0;
            if(lastResetTime){
                var gameCds = c_game[6]||999999;
                var nowTime = Date.newDate();
                var cds = (nowTime.getTime() - Date.newDate(lastResetTime).getTime())/1000>>0;
                leftTime = gameCds-cds;
            }
            return leftTime;
        }

		updataJf(){
			var self = this;
			self.label_jf.text = gd.userCtrl.getPrestige();
		}

		_updatePkNum(){
			var self = this;
			self.label_count.text = mo.STR.format("%s/%s", gd.arenaCtrl.getRePKNum(), 10);
		}

		_data_list_items():any[]{
			var self = this;
			return self.pkUserDatas;
		}

		_tap_btn_rank(){
			var self = this;
			gd.arenaCtrl.getRankList(function(data){
				ArenaRank.create().setData({rankData:data}).show();
			},self);
		}
		_tap_btn_change(){
			var self = this;
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.arenaCfg);
            var leftTime = self.getLeftTime();
            if(leftTime>0){
                mo.showMsg(gc.id_c_msgCode.reGetMatch, c_game[7], function(){
                    gd.arenaCtrl.resetArenaFightRanks(function(){
                        gd.arenaCtrl.getFightUserList(function(data){
                            self.pkUserDatas = data;
                            self.refreshList("list_items");
                        },self);
                    },self);
                });
            }else{
                gd.arenaCtrl.resetArenaFightRanks(function(){
                    gd.arenaCtrl.getFightUserList(function(data){
                        self.pkUserDatas = data;
                        self.refreshList("list_items");
                    },self);
                },self);
            }
		}

		_tap_btn_refresh(){
			var self = this;
			gd.arenaCtrl.refreshCD(function(){
				if(self.timeTrigger){
					tm.timer.remove(self.timeTrigger);
					self.timeTrigger = null;
				}
				self.resetCdTimeView(0);
			},self);
		}

		timeTrigger;
        setCDTime(second){
            var self = this;
            if(second>0){
                if(self.timeTrigger){
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
                var timeTrigger = self.timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut, self);
                tm.timer.add(timeTrigger);
            }else{
                self.resetCdTimeView(0);
            }
        }
        timeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.resetCdTimeView(leftMillisecond);
        }
        timeOut(type, beginTime, endTime){
            var self = this;
            self.resetCdTimeView(0);
        }
		resetCdTimeView(leftMillisecond){
			var self = this;
			if(leftMillisecond>0){
				self.btn_refresh.visible = true;
				self.label_time.text = mo.STR.format("下次挑战 %s",mo.getTimeStr(leftMillisecond));
			}else{
				self.btn_refresh.visible = false;
                //if(gd.arenaCtrl.getRePKNum()>0)
                self.label_time.text = "可挑战";
			}
		}
		timeTrigger2;
		setCDTime2(second){
			var self = this;
			if(second>0){
				if(self.timeTrigger){
					tm.timer.remove(self.timeTrigger);
					self.timeTrigger2 = null;
				}
				var nextCdTime =  Date.newDate(Date.now()+second*1000);
				var timeTrigger2 = self.timeTrigger2 = new tm.Trigger(nextCdTime);
				timeTrigger2.on(tm.Trigger.ON_SECOND, self.timeSec2, self);
				timeTrigger2.on(tm.Trigger.ON_END, self.timeOut2, self);
				tm.timer.add(timeTrigger2);
			}else{
				self.nexttime(0)
			}
		}
		timeSec2(type, beginTime, endTime){
			var self = this;
			var now = Date.now();
			var endTime1 = Date.newDate(endTime).getTime();
			var leftMillisecond = endTime1 - now;
			self.nexttime(leftMillisecond);
		}
		timeOut2(type, beginTime, endTime){
			var self = this;
			self.nexttime(0);
		}
		nexttime(second){
			var self = this ;

			if(second>0){
				self.label_next_time.text = "竞技场下次重置时间："+mo.getTimeStr(second,true);
			}else{
				self.label_next_time.text = "正在重置！"
			}
		}
		_tap_btn_log(){
			var self = this;
			gd.arenaCtrl.getRecordList(function(data){
				ArenaLog.create().setData({logs:data}).show();
			},self)
		}
		_tap_btn_buy(){
			var self = this;
			mo.moduleMgr.runModule(g_consts.moduleId.arenaShop);
		}

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id:5}).show();
		}
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.fullScr = true;
		moduleCfgItem.targetClass = Arena;
		moduleCfgItem.sysId = gc.id_c_open.arena;// 系统id
		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Arena, cb){
			gd.arenaCtrl.getInfo(function(data){
				cb();
			}, this);
		});
	});
}
