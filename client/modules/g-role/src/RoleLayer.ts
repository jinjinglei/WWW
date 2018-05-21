/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_role {
	export var SUBMID_SKILL:number = 1;
	export var SUBMID_WING:number = 3;
	/**
	 *
	 * @author 
	 *
	 */
	export class RoleLayer extends mo.gui.Layer{

		moduleParam:IModuleParam.Role;


		img_border_light:egret.gui.UIAsset;
		btn_wing_light:egret.gui.Button;
		btn_no_wing:egret.gui.Button;
		btn_matrix:egret.gui.Button;
		img_redSkill;
		img_redMatrix;
		img_redWing;
        ico_avatar;
		ico_medalItem:g_comp.Ico_Medal;
		grp_rebirth:egret.gui.Group;
		img_rebirthNum:egret.gui.UIAsset;

		hec:gd.HeroEntityCtrl;

		_heroChanged(hec, index){
			var self = this;
			self.setData({hec: hec});
			if(index < 3){
				var unlocked = self._isWingUnlocked();
				self.btn_no_wing.visible = !unlocked;
				self.btn_wing_light.visible = unlocked;
			}else{ //第4名角色不显示翅膀
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
			// 注册事件监听
			self.registerClassByKey(gd.HeroEntityCtrl, gd.HeroEntityCtrl.ON_EQUIP_CHANGED, self.dataChanged);
			self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_WEAR_PAR_RING, self.dataChanged);
			self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_BREAK_PAR_RING, self.dataChanged);
			self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_BREAK_MERGED, self.dataChanged);
			self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self.checkRedPoint);
			self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.rebirthLvl.toString(), self._refreshRebirthGrp);
			roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);

            self.ico_medalItem.visible = false;

			var heroEquipIndies = gc.c_prop.heroEquipIndex;
			for(var key in heroEquipIndies){
				var item:g_comp.Equip_Item = self['eq_' + key];
				if(item) item.onClick(self._onEquipItemClick, self, item);
			}

			var unlocked = self._isWingUnlocked();
			self.btn_no_wing.visible = !unlocked;
			self.btn_wing_light.visible = unlocked;

			self.hec = gd.heroCtrl.getMainHeroCtrl();
			self.setData({hec: self.hec});

			var subModuleId = self.moduleParam.subModuleId;
			switch (subModuleId){
				case SUBMID_SKILL:
					self._tap_btn_skill();
					break;
				case SUBMID_WING:
					self._tap_btn_wing_light();
					break;
			}

			self._refreshRebirthGrp();
		}

		onEnter(){
			super.onEnter();
			var self = this;
		}

		checkRedPoint(){
			var self = this;
			var roleIndex = gd.heroCtrl.getHeroIndex(self.hec);
			var skillShowRed = false;
			var matrixShowRed = false;
			var wingShowRed = false;

			if(roleIndex==0){
				skillShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role1_skill);
			}else if(roleIndex==1){
				skillShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role2_skill);
			}else if(roleIndex==2){
				skillShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role3_skill);
			}
			if(roleIndex==0){
				matrixShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role1_realm);
			}else if(roleIndex==1){
				matrixShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role2_realm);
			}else if(roleIndex==2){
				matrixShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role3_realm);
			}
			if(roleIndex==0){
				wingShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role1_wing);
			}else if(roleIndex==1){
				wingShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role2_wing);
			}else if(roleIndex==2){
				wingShowRed = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.role3_wing);
			}
			self.img_redSkill.visible = skillShowRed;
			self.img_redMatrix.visible = matrixShowRed;
			self.img_redWing.visible = wingShowRed;
		}

		_isWingUnlocked(){
			var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
			var needLvl = c_open[gc.id_c_open.wing][gc.c_open_lvlRequired];
			return gd.userCtrl.getLvl() >= needLvl;
		}

		_refreshRebirthGrp(){
			var self = this;
			var rebirthLvl = gd.reBirthCtrl.getRebirthLvl();
			if(rebirthLvl == 0){
				self.grp_rebirth.visible = false;
			}else{
				self.grp_rebirth.visible = true;
				if(rebirthLvl >= 1 && rebirthLvl <= 10){
					self.img_rebirthNum.source = "txt_hz_" + rebirthLvl;
				}
			}
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
			self.hec = self.get('hec');
			if(!self.hec) return;
			self.updateEquipItems();
			self.checkRedPoint();

			//self.effect_role.startLoadByKey(22+(self.hec.job-1)*2+(2-self.hec.sex)-1);
            self.ico_avatar.setData({
				clothesID:self.hec.getClothDisplayID(),
				weaponID:self.hec.getWeaponDisplayID(),
				wingID:self.hec.getWingDisplayID(),
				sex:self.hec.sex,
				isKing:self.hec.getIsKing()
			});
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

		_tap_btn_no_wing(){
			var self = this;

            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            needLvl = c_open[gc.id_c_open.wing][gc.c_open_lvlRequired];

            if(gd.userCtrl.getLvl()<needLvl) {
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl,needLvl);
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
			RoleMatrix.create().setData({hec: self.hec}).show();
		}

		_tap_btn_wing_light(){
            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            needLvl = c_open[gc.id_c_open.wing][gc.c_open_lvlRequired];

            if(gd.userCtrl.getLvl()<needLvl) {
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl,needLvl);
            }
			var hec = this.hec;
			g_role.baseTopRole.hide4thRole(true);
			RoleWing.create().setData({hec: hec}).show().onClose(function () {
				g_role.baseTopRole.hide4thRole(false);
			});
		}

		_tap_btn_equip(){
			var self = this;
			var hec = self.hec;
			EquipDetail.create().setData({hec: hec}).show();
		}

		_onEquipItemClick(item:g_comp.Equip_Item){
			var self = this;
			if(gd.equipCtrl.isBreakRing(item.part)){
				if(item.equipId==null){
					g_role.RoleMatrixInfo.create().setData({hec:item.hec, isMatrix:false, part:item.part})
						.show().onClose(function () {
						//g_role.baseTopRole.hide4thRole(false);
					});
				}else{
					g_role.BreakDetail.create().setData({itemId:item.equipId, hero:item.hec})
						.show().onClose(function () {
						//g_role.baseTopRole.hide4thRole(false);
					});
				}
				//g_role.baseTopRole.hide4thRole(true);
			}else{
				if(item.canAdd){
					g_role.EquipChoose.create().setData({hec:item.hec, part:item.part}).show();
				}
				if(!item.isEmpty){
					g_role.EquipDetail.create().setData({hec: item.hec, part:item.part}).show();
				}
				if(item.isEmpty && !item.canAdd){
					mo.showMsg("无可穿戴装备");
				}
			}
		}

        _tap_btn_back(){
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        }

		_tap_btn_buzhen(){
            var self = this;
            var openLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.fightList);
            var openVipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.buzhen);

            if(gd.userCtrl.getLvl()<openLvInfo[gc.c_open_lvlRequired] && gd.userCtrl.getVip()<openVipInfo[gc.c_open_lvlRequired]){
                mo.showMsg(gc.id_c_msgCode.functionOpen, openLvInfo[gc.c_open_lvlRequired], openVipInfo[gc.c_open_lvlRequired]);
                return;
            }
			if(gd.heroCtrl.getList().length > 1){
				RoleBuzhen.create().show().onClose(function(){
                    g_role.baseTopRole.dataChanged();
                });
			}else{
				mo.showMsg(gc.id_c_msgCode.noRole);
			}
		}

	}
}
