/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_role {
	export class RoleEnemyInfo extends mo.gui.Layer{

		moduleParam:IModuleParam.Enemy;

		img_border_light:egret.gui.UIAsset;
		btn_wing_light:egret.gui.Button;
		btn_no_wing:egret.gui.Button;
		btn_matrix:egret.gui.Button;
		img_redSkill;
		img_redMatrix;
		img_redWing;
        ico_avatar;
		ico_medalItem:g_comp.Ico_Medal;

		hec:gd.HeroEntityCtrl;

		topRoleLayer:EnemyTopRole;
		grp_rebirth:egret.gui.Group;
		img_rebirthNum:egret.gui.UIAsset;

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
			mo.gui.helper.setSkinName(this, RoleLayer.__className);
		}

		_heroChanged(hec,index){
			var self = this;
			self.setData({hec: hec});
			if(index < 3){ //第4名角色不显示翅膀
				var unlocked = self._isWingUnlocked();
				self.btn_no_wing.visible = !unlocked;
				self.btn_wing_light.visible = unlocked;
			}else{
				self.btn_no_wing.visible = false;
				self.btn_wing_light.visible = false;
			}
		}

		dtor(){
			super.dtor();
			var self = this;
			roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.checkRedPoint();

			var layer = self.topRoleLayer = EnemyTopRole.create().show();
			g_role.roleChgEmitter = layer.emitter;
			roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);

			var heroEquipIndies = gc.c_prop.heroEquipIndex;
			for(var key in heroEquipIndies){
				var item:g_comp.Equip_Item = self['eq_' + key];
				item.onClick(self._onEquipItemClick, self, item);
			}

			var unlocked = self._isWingUnlocked();
			self.btn_no_wing.visible = !unlocked;
			self.btn_wing_light.visible = unlocked;

			self.hec = gd.enemyHeroCtrl.getMainHeroCtrl();
			self.setData({hec: self.hec});

			self._refreshRebirthGrp();
            self["btn_buzhen"].visible = false;
		}

		onEnter(){
			super.onEnter();
			var self = this;
		}

		_refreshRebirthGrp(){
			var self = this;
			var rebirthLvl = self.hec.getRebirthLvl();
			if(rebirthLvl == 0){
				self.grp_rebirth.visible = false;
			}else{
				self.grp_rebirth.visible = true;
				if(rebirthLvl >= 1 && rebirthLvl <= 10){
					self.img_rebirthNum.source = "txt_hz_" + rebirthLvl;
				}
			}
		}

		checkRedPoint() {
			var self = this;
			self.img_redSkill.visible = false;
			self.img_redMatrix.visible = false;
			self.img_redWing.visible = false;
		}

		_isWingUnlocked() {
			var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
			var needLvl = c_open[gc.id_c_open.wing][gc.c_open_lvlRequired];
			return gd.enemyHeroCtrl.getLvl() >= needLvl;
		}

		dataChanged(){
			super.dataChanged();
			var self = this;

			self.hec = self.get('hec');
			if(!self.hec) return;
			self.updateEquipItems();

			//self.effect_role.startLoadByKey(22+(self.hec.job-1)*2+(2-self.hec.sex)-1);
            self.ico_avatar.setData({
				clothesID:self.hec.getClothDisplayID(),
				weaponID:self.hec.getWeaponDisplayID(),
				wingID:self.hec.getWingDisplayID(),
				sex:self.hec.sex,
				isKing:self.hec.getIsKing()
			});

            var printTitle = self.hec.getMedalTitle();
            var hasPrintTitle = !!printTitle;
            //有战印且是第一个英雄才显示
            self.ico_medalItem.visible = hasPrintTitle && (gd.enemyHeroCtrl.getMainHeroCtrl() == self.hec);
            if(hasPrintTitle) self.ico_medalItem.setData({itemId: printTitle});
		}

		updateEquipItems(){
			var self = this;
			var hec = self.hec;
			var equipData = hec.equipData;
			var heroEquipIndies = gc.c_prop.heroEquipIndex;
			for(var part in heroEquipIndies){
				var equipId = equipData[part];
				var item:g_comp.Equip_Item = self['eq_' + part];
				var data;
				if(item){
					data = {hec: hec, part: parseInt(part), equipId: equipId};
					item.setData(data);
				}
			}
		}

		_tap_btn_skill(){
			var self = this;
			RoleSkill.create().setData({hec: self.hec}).show();
		}


		_tap_btn_detail(){
			var self = this;
			var hec = self.hec;
			RoleDetail.create().setData({hec: hec}).show();
		}

		_tap_btn_matrix(){
			var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            needLvl = c_open[gc.id_c_open.ream][gc.c_open_lvlRequired];

            if(gd.userCtrl.getLvl()<needLvl) {
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl,needLvl);
            }
			//self.topRoleLayer.hide4thRole(true);
			RoleMatrix.create().setData({hec: self.hec}).show().onClose(function () {
				//self.topRoleLayer.hide4thRole(false);
			});
		}

		_tap_btn_wing_light(){
			var self = this;
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            needLvl = c_open[gc.id_c_open.wing][gc.c_open_lvlRequired];

            if(gd.userCtrl.getLvl()<needLvl) {
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl,needLvl);
            }
			var hec = this.hec;
			self.topRoleLayer.hide4thRole(true);
			RoleWing.create().setData({hec: hec}).show().onClose(function () {
				self.topRoleLayer.hide4thRole(false);
			});
		}

		_onEquipItemClick(item:g_comp.Equip_Item){
			var self = this;
			if(gd.equipCtrl.isBreakRing(item.part)){
				if(item.equipId != null){
					//self.topRoleLayer.hide4thRole(true);
					g_role.BreakDetail.create().setData({itemId:item.equipId, hero:item.hec}).show().onClose(function () {
						//self.topRoleLayer.hide4thRole(false);
					});
				}
			}else{
				if(!item.isEmpty){
					g_role.EquipDetail.create().setData({hec: item.hec, part:item.part}).show();
				}
			}
		}

        _tap_btn_back(){
			var self = this;
			self.topRoleLayer.close();
			self.close();
        }
	}


	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.targetClass = RoleEnemyInfo;
		moduleCfgItem.fullScr = true;
		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Enemy, cb){
			gd.enemyHeroCtrl.getShowHeroData(moduleParam.userId, function(data){
				cb();
			}, this)
		});
	});
}
