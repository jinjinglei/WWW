/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_worldboss {

	/**
	 *
	 * @author
	 *
	 */
	export class BossWar extends mo.gui.Dlg{
		img_worldBoss;
		img_guildBoss;
        img_lmtBoss;
		label_wboss_fighting;
		label_gboss_fighting;
        label_lmtboss_fighting;

		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;

			//进入战斗后要及时关闭自己
			self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.START_FIGHT_BOSS_IN_FIGHT_SCENE, self.close);
		}

		_childrenCreated(){
			var self = this;
			super._childrenCreated();
			self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, self.onWorldBossOpenChanged);
			self.onWorldBossOpenChanged();
		}

		onWorldBossOpenChanged():void{
			var self = this;
			self.label_wboss_fighting.visible = gd.bossFightCtrl.getOpenIdsByType(gc.c_prop.worldBossTypeKey.world).length > 0;
			self.label_gboss_fighting.visible = gd.bossFightCtrl.getOpenIdsByType(gc.c_prop.worldBossTypeKey.guild).length > 0;
            self.label_lmtboss_fighting.visible = gd.bossFightCtrl.getOpenIdsByType(gc.c_prop.worldBossTypeKey.guild, 1).length > 0;
		}

        _tap_img_lmtBoss(){
            //进入公会boss列表
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossLevelList, {isLmt:1});
        }

		_tap_img_guildBoss(){
            //进入公会boss列表
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossLevelList);
		}

		_tap_img_worldBoss(){
            //进入boss列表
            mo.moduleMgr.runModule(g_consts.moduleId.wBossList);
		}

		_tap_btn_resBack(){
			BossResBack.create().show();
		}

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id:53}).show();
		}
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.fullScr = true;
		moduleCfgItem.targetClass = BossWar;
		moduleCfgItem.sysId = gc.id_c_open.worldboss;

		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Copy, cb){
			var self = this;
			async.map([gd.bossGuildCtrl, gd.bossWorldCtrl], function(ctrl, index, callback){
				ctrl.getInfo(callback, self);
			}, function(){
				cb();
			}, self);
		});
	});
}
