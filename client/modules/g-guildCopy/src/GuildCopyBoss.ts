
/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_guildCopy {


	/**
	 *
	 * @author 
	 *
	 */
	export class GuildCopyBoss extends mo.gui.Dlg{
		moduleParam:IModuleParam.GuildCopySection;

		list_copys:any;
		_Item_list_copys;

		bossAP;
		bossId;
		bossList:Array<any>;
		ico_monster;
		img_title;
		grp_passAward;
		grp_waveAward;
		label_passPre; //挑战前一个
		label_getTips; //已击杀
		label_cd; //挑战CD
		grp_fightable;
		label_progress;//进度
		label_awardTips;//伤害提示
		label_name;//boss名
		label_copyProgress;//副本进度
		label_maxCD;//最大CD

		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
			self._Item_list_copys = GuildCopyBossItem;
			self.bossList = [];
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.registerClassByKey(gd.GuildCopyCtrl, gd.GuildCopyCtrl.ON_GUILD_COPY_CD_CLEAR, function(){
				self.setBossInfo(self.bossId);
			});

			self.label_maxCD.text = gd.guildCopyCtrl.getGuildCopyCdState().threshold/60;
			self.bossAP = new g_base.ActionPlayer();
			self.bossAP.scaleX = self.bossAP.scaleY = 1.6;
			self.ico_monster.source = self.bossAP;

			if(self.moduleParam){
				self.setData(self.moduleParam);
				if(!self.moduleParam['fromMain']){
					self.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
				}
			}
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
			var section = self.moduleParam.section;
			var sectionId = section[gc.t_guildCopy_id];
			self.img_title.source = section[gc.t_guildCopy_title_icon];
			self.bossList = gd.guildCopyCtrl.getGuildBossList(sectionId);
			var curBossId = gd.guildCopyCtrl.getCurBossId(sectionId);
			self.bossId = curBossId;
			self.list_copys.selectedItem = self.bossId;
			self.setBossInfo(curBossId);
			//副本进度
			var completeNum = gd.guildCopyCtrl.getCompletedNum(sectionId);
			var copyLen = gd.guildCopyCtrl.getGuildBossListLength(sectionId);
			self.label_copyProgress.text = mo.STR.format("%s/%s",completeNum,copyLen);

		}

		_tap_btn_enter(){
			var self = this;
            gd.guildCopyCtrl.guildStart(self.moduleParam.section[gc.t_guildCopy_id], self.bossId, function () {

            }, self);
		}

		_data_list_copys():any[]{
			var self = this;
			// self.bossList = gd.guildCopyCtrl.getGuildBossList(self.moduleParam.section[gc.t_guildCopy_id]);
			return self.bossList;
		}

		_click_list_copys(event:egret.gui.ListEvent) {
			var self = this;
			var bossId = event.item;
			self.setBossInfo(bossId);
		}

		setBossInfo(bossId){
			var self = this;
			self.bossId = bossId;
			var guildCopyCtrl = gd.guildCopyCtrl;

			self.label_name.text = (self.bossList.indexOf(self.bossId) + 1) + "." + mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId)[gc.t_monster_name];
			var bossInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_guildCopyBoss, bossId);
			var killAward = bossInfo[gc.t_guildCopyBoss_lastShotAward];
			var waveAward = bossInfo[gc.t_guildCopyBoss_award];
			uiHelper.setItemsGrp(self.grp_passAward, utils.kvArrItems2ObjArr(killAward));
			uiHelper.setItemsGrp(self.grp_waveAward, utils.kvArrItems2ObjArr(waveAward));
            var leftTimes = guildCopyCtrl.getMaxKillTimes() - guildCopyCtrl.getGuildProgress(bossId);
			self.label_progress.text = mo.STR.format("%s/%s", leftTimes, guildCopyCtrl.getMaxKillTimes());

			var sectionId = self.moduleParam.section[gc.t_guildCopy_id];
			var curBossId = guildCopyCtrl.getCurBossId(sectionId);
			var isPassed = guildCopyCtrl.isBossKilled(sectionId, bossId), isOpen = (curBossId >= bossId);
			self.label_passPre.visible = !isOpen;
			self.grp_fightable.visible = isOpen;
			if(isOpen){
				self.grp_fightable.visible = !isPassed;
				self.label_getTips.visible = isPassed;
				self.label_cd.visible = false;
				var cdTime = guildCopyCtrl.getGuildCopyCd();
				if(cdTime){
					self.label_cd.visible = true;
					self.label_cd.text = self._getColorCDStr(cdTime * 1000);
					self.setCDTime(cdTime);
				}
			}else{
				var preBossId = parseInt(bossId) - 1;
				self.label_passPre.text = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, preBossId)[gc.t_monster_name];
			}
            //站立像
			var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            var idStr = monsterInfo[gc.t_monster_displayID];
			self.bossAP.loadRes("m"+idStr+"_4s", true);
			self.bossAP.playAction();
			//设置滚动条位置
			process.nextTick(function(){
				process.nextTick(function() {
					var idx = self.list_copys.dataProvider.getItemIndex(self.bossId);
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

		_tap_btn_help(){
			var self = this;
			g_base.BaseShowTip.create().setData({id: 62}).show();
		}

		_getColorCDStr(millisecond){
			return mo.STR.format(
				"[ubb color=%s]%s[/ubb]",
				gd.guildCopyCtrl.getGuildCopyCdState().needBuy? "red" : "green",
				mo.getTimeStr(millisecond, true))
		}

		click_btn_close(){
			var self = this;
			mo.moduleMgr.runModule(g_consts.moduleId.guildCopy, {section: self.moduleParam.section});
			self.btn_close.removeEventListener(egret.TouchEvent.TOUCH_TAP, self.click_btn_close, self);
		}

		//Time
		timeTrigger;
		resetCdTimeView(leftMillisecond){
			var self = this;
			if(leftMillisecond>0){
				self.label_cd.text = self._getColorCDStr(leftMillisecond);
			}else{
				//刷新信息
				self.setBossInfo(self.bossId);
			}
		}
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
				self.label_cd.visible = true;
				self.label_cd.text = self._getColorCDStr(second*1000);
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

		onExit(){
			super.onExit();
			var self = this;
			if(self.timeTrigger){
				tm.timer.remove(self.timeTrigger);
				self.timeTrigger = null;
			}
		}
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.fullScr = true;
		moduleCfgItem.targetClass = GuildCopyBoss;
		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.GuildCopySection, cb){
			if(moduleParam.fromWhere == "FightScene"){
				gd.copyCtrl.getInfo(function(data){
					cb();
				}, this);
			}else{
				cb();
			}
		});
	});
}
