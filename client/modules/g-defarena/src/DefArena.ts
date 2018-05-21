/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_defarena {

	export class DefArena extends mo.gui.Dlg{
		moduleParam:IModuleParam.DefArena;
		grp_hasAdmin;
		grp_res;
		item_reward:g_comp.Ico_Item;
		label_guild;
		grp_userInfo;
		ico_avatar;
		label_fighting;
		label_leftTime; //称霸剩余时间
		label_ftCD; //冷却
		label_actCD; //活动剩余时间
		grp_actCD;
		grp_fightCD;
		btn_challenge;
		bar_totalTime:egret.gui.ProgressBar;//站台累计时间

		grp_noAdmin;
		grp_chlg;
		btn_up;
		label_ruleTime;

		_itemDetail;
		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
			mo.closeEmitter.on("DefarenaWinner", function(){
				if(self._itemDetail) {
				 	self._itemDetail.close();
					self._itemDetail = null;
				}
				process.nextTick(function(){
					self.close();
				})
			}, self);
			self.registerClassByKey(gd.ChallengeCupCtrl, gd.ChallengeCupCtrl.ON_ACT_END, function(data){
				self.setData(data);
			});
		}

		_childrenCreated(){
			var self = this;
			super._childrenCreated();
			self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
			var reward = gd.challengeCupCtrl.getRward();
			self.item_reward.setData({itemId: reward[0], count: reward[1]});
			self.item_reward.onClick(function(){
                DefArenaRankReward.create().show();
			});
			uiHelper.setResGrp(self.grp_res, gc.c_prop.spItemIdKey.diamond, gd.challengeCupCtrl.getChallegeCost());

			self.label_ruleTime.text = gd.challengeCupCtrl.getDefTime()/60;

			if(self.moduleParam){
				self.setData(self.moduleParam.info);
			}
		}

		dataChanged(){
			var self = this;
			super.dataChanged();
			self._removeTrigger();
			var info = self.data;
			var KEY = gc.dsConsts.ChallengeCupData;
			var hasAdmin = info[KEY.userId] && info[KEY.userId] != 0;
			self.grp_hasAdmin.visible = hasAdmin;
			self.grp_noAdmin.visible = !hasAdmin;

			//活动时间倒计时
			self.setActCDTime(info[KEY.activityLeftTime]);
			if(hasAdmin){
				uiHelper.setVipGrp(self.grp_userInfo, info[KEY.nickName], info[KEY.lvl], info[KEY.vip]);
				self.label_guild.text = info[KEY.guildName];
				var avatarDatas = info[KEY.HeroDisplay];
				self.ico_avatar.setData({clothesID:avatarDatas[0],weaponID:avatarDatas[1],wingID:avatarDatas[2],sex:avatarDatas[3], isKing:avatarDatas[4]});
				self.ico_avatar.setData({clothesID:avatarDatas[0],weaponID:avatarDatas[1],wingID:avatarDatas[2],sex:avatarDatas[3]});
				self.label_fighting.visible = info[KEY.challengerUserId] != null;
				self.setKingCDTime(info[KEY.leftTime]);
				if(gd.userCtrl.getId() == info[KEY.userId]){
					self.grp_chlg.visible = false;
				}else{
					self.grp_chlg.visible = true;
					var isSelf = gd.userCtrl.getId() == info[KEY.challengerUserId];
					self.grp_fightCD.visible = !isSelf;
					if(!isSelf) self.setChlgCDTime(info[KEY.nextChallengeTime]);
				}
			}
		}

		_updateKingProgress(seconds){
			var self = this;
			var info = self.data;
			var KEY = gc.dsConsts.ChallengeCupData;
			self.label_leftTime.text = mo.getTimeStr(seconds * 1000, true);
			//守擂时间进度
			var timeRequired = gd.challengeCupCtrl.getDefTime();
			self.bar_totalTime.value = (timeRequired - seconds)/timeRequired * 100;
		}

		//---活动CD 开始
		actTrigger;
		setActCDTime(second){
			var self = this;
			if(second>0){
				if(self.actTrigger){
					tm.timer.remove(self.actTrigger);
					self.actTrigger = null;
				}
				var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
				var timeTrigger = self.actTrigger = new tm.Trigger(nextCdTime);
				timeTrigger.on(tm.Trigger.ON_FIRST, self.timeSec, self);
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
			self.label_actCD.text = mo.STR.format(mo.getTimeStr(leftMillisecond, true));
		}
		//---活动CD 结束

		//---挑战CD 开始
		chlgTrigger;
		setChlgCDTime(second){
			var self = this;
			if(second>0){
				if(self.chlgTrigger){
					tm.timer.remove(self.chlgTrigger);
					self.chlgTrigger = null;
				}
				var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
				var timeTrigger = self.chlgTrigger = new tm.Trigger(nextCdTime);
				timeTrigger.on(tm.Trigger.ON_FIRST, self.timeSec2, self);
				timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec2, self);
				timeTrigger.on(tm.Trigger.ON_END, self.timeOut2, self);
				tm.timer.add(timeTrigger);
			}else{
				self.resetChlgCdTimeView(0);
			}
		}
		timeSec2(type, beginTime, endTime){
			var self = this;
			var now = Date.newDate().getTime();
			var endTime1 = Date.newDate(endTime).getTime();
			var leftMillisecond = endTime1 - now;
			self.resetChlgCdTimeView(leftMillisecond);
		}
		timeOut2(type, beginTime, endTime){
			var self = this;
			self.resetChlgCdTimeView(0);
		}

		resetChlgCdTimeView(leftMillisecond){
			var self = this;
			if(leftMillisecond>0){
				self.btn_challenge.enable = false;
				self.grp_fightCD.visible = true;
				self.label_ftCD.text = mo.STR.format(mo.getTimeStr(leftMillisecond));
			}else{
				self.btn_challenge.enable = true;
				self.grp_fightCD.visible = false;
			}
		}
		//---挑战CD 结束

		//---霸主CD 开始
		kingTrigger;
		setKingCDTime(second){
			var self = this;
			if(second>0){
				if(self.kingTrigger){
					tm.timer.remove(self.kingTrigger);
					self.kingTrigger = null;
				}
				var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
				var timeTrigger = self.kingTrigger = new tm.Trigger(nextCdTime);
				timeTrigger.on(tm.Trigger.ON_FIRST, self.timeSec3, self);
				timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec3, self);
				timeTrigger.on(tm.Trigger.ON_END, self.timeOut3, self);
				tm.timer.add(timeTrigger);
			}else{
				self._updateKingProgress(0);
			}
		}
		timeSec3(type, beginTime, endTime){
			var self = this;
			var now = Date.newDate().getTime();
			var endTime1 = Date.newDate(endTime).getTime();
			var leftMillisecond = endTime1 - now;
			self._updateKingProgress(leftMillisecond/1000);
		}
		timeOut3(type, beginTime, endTime){
			var self = this;
			self._updateKingProgress(0);
		}
		//---霸主CD 结束


		_tap_btn_rank(){
			var self = this;
			gd.challengeCupCtrl.getRank(function(data){
				DefArenaRank.create().setData({rankData: data}).show();
			}, self);
		}

		_tap_btn_tq(){
			DefArenaGain.create().show();
		}

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id:20, param1:gd.challengeCupCtrl.getDefTime()/60}).show();
		}

		_tap_btn_challenge(){
			//掉挑战接口
            var self = this;

			var info = self.data;
			var KEY = gc.dsConsts.ChallengeCupData;
			var isSelf = gd.userCtrl.getId() == info[KEY.challengerUserId];
			if(info[KEY.challengerUserId] && isSelf) return mo.showMsg("挑战中...");

            var nextChallengeTime = self.data[gc.dsConsts.ChallengeCupData.nextChallengeTime];
			if(self.chlgTrigger && (self.chlgTrigger.msPassed/1000 + 1) < nextChallengeTime){
				return mo.showMsg(gc.id_c_msgCode.challengeBossCd);
			}
            gd.challengeCupCtrl.startFight(function(errCode){
				if(errCode){
					if(errCode == gc.id_c_msgCode.userBeInFignting
					||errCode == gc.id_c_msgCode.userChangeIfGoOn){
						mo.showMsg(errCode, function(){
							self.reset();
						})
					}
					if(errCode == gc.id_c_msgCode.eventEnded){
						mo.showMsg(errCode, function(){
							//显示活动结束界面
							mo.moduleMgr.runModule(g_consts.moduleId.defarenaWinner);
						}, self);
					}
					return;
				}
                self.close();
            }, self);
		}

		_tap_btn_up(){
			console.log("登上擂台");
			var self = this;
			gd.challengeCupCtrl.toBeChampoin(function(data){
				self.setData(data);
			}, self);
		}

		click_btn_close(){
			var self = this;
			//主动关闭需要移除计时器
			gd.challengeCupCtrl.removeTrigger();
			self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
		}

		reset(){
			var self = this;
			gd.challengeCupCtrl.getInfo(function(data){
				self.setData(data);
			}, self);
		}

		_removeTrigger(){
			var self = this;
			if(self.chlgTrigger){
				tm.timer.remove(self.chlgTrigger);
				self.chlgTrigger = null;
			}
			if(self.actTrigger){
				tm.timer.remove(self.actTrigger);
				self.actTrigger = null;
			}
			if(self.kingTrigger){
				tm.timer.remove(self.kingTrigger);
				self.kingTrigger = null;
			}
		}

		dtor(){
			var self = this;
			super.dtor();
			self._removeTrigger();
		}
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.fullScr = true;
		moduleCfgItem.targetClass = DefArena;
		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.DefArena, cb){
			gd.challengeCupCtrl.getInfo(function(data){
				moduleParam.info = data;
				cb();
			}, this);
		});
	});
}
