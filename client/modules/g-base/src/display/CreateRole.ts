/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_base {

	/**
	 *
	 * @author
	 *
	 */
	export class CreateRole extends mo.gui.Dlg{

		list_jobs:egret.gui.List;
		_Item_list_jobs;

		btn_back:egret.gui.Button;
		grp_create:egret.gui.Group;

		label_job_desc:mo.gui.Label;
		label_unlock:mo.gui.Label;
		inputName:egret.gui.TextInput;
		grp_userAgreement:egret.gui.Group;
		ckb_argree;
		img_userAgreement;


		_job:number;
		_gender:number;
		_isCustomName = false;

		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
			self._Item_list_jobs = g_base.CreateRoleItem;
		}

		_data_list_jobs():any[]{
			var self = this, filter, sorter;
			return [1, 2, 3];
		}

		_childrenCreated() {
			super._childrenCreated();
			var self = this;
            
            //hd { 如果是android，则使用prompt来弹出输入框
            if (egret.Capabilities.os == 'Android') {
                self.inputName.touchEnabled = true;
                self.inputName.editable = false;
                self.inputName.addEventListener(egret.TouchEvent.TOUCH_TAP, ()=>{
                    var str = prompt('请输入角色名', self.inputName.text);
                    if (str != null)
                        self.inputName.text = str;
                }, self);
            }
            //hd }
		}

		dataChanged(){
			super.dataChanged();
			var self = this;

			var action = self.data.action || 0; //0创角 1解锁英雄
			var isUnlock = action == 1;

			self.btn_back.visible = isUnlock;
			self.grp_create.visible = !isUnlock;
			self.label_unlock.visible = isUnlock;
			self.grp_userAgreement.visible = !isUnlock;
			
			if(isUnlock){
				for(var job = 1; job <=3; job++){
					if(!gd.heroCtrl.hasHeroByJob(job)){
						self.list_jobs.selectedItem = job;
						self._setJobDesc(job);
						break;
					}
				}
				self.label_unlock.text = gd.heroCtrl.getList().length + 1;
			}else{
				var name = null;
				var sdkData = gd.accountCtrl.get(gc.dsConsts.AccountEntity.sdkData);
				if(sdkData)
                    name = sdkData.name;
                
                //hd { 添加通过服务器获取第三方平台名称
                var args = {};
                mo.requestWaiting4Server(gc.iface.c_account_getThirdUserInfo, args, function (data) {
                    self._isCustomName = data == null;
                    var nickname = data ? data.nickname :
                        mo.STR.sub(utils.filterName(name,gc.c_prop.sexKey.male), 0, 14);
                    self.inputName.text = nickname;                    
                });
                //hd }

				self.list_jobs.selectedIndex = 0; //默认选中第一个男性角色
				self._setJobDesc(1);
			}
			self._gender = gc.c_prop.sexKey.male;
		}


		_setJobDesc(job){
			var self = this;
			var cfg_t_hero = mo.getJSONWithFileName(gc.cfg_t_hero);
			var t_hero = cfg_t_hero[job];
			self.label_job_desc.text = [t_hero[gc.t_hero_name], t_hero[gc.t_hero_describe]];
			self._job = job;
		}

		_tap_btn_create(){
			var self = this;
			var action = self.data.action || 0;
			var isUnlock = action == 1;

			if(isUnlock){
				var openCfg = gd.heroCtrl.getHeroOpenCfg(gd.heroCtrl.getNextIdxToBeOpen());
				//提前解锁
				if(gd.userCtrl.getLvl() < openCfg[0]){
					var count = gd.heroCtrl.getNextIdxToBeOpen() + 1;
					//ws.recordEvent("提前开启第" + count + "个角色的人数", 1);
					if(openCfg[1] > gd.userCtrl.getVip()) return mo.showMsg(gc.id_c_msgCode.ifBuyRole, openCfg[1]);
					gd.heroCtrl.callHero(self._job, self._gender, self.close, self);
				}else{
					gd.heroCtrl.callHero(self._job, self._gender, self.close, self);
				}
			}else{ //new game
				if(!self.ckb_argree.selected) return mo.showMsg(gc.id_c_msgCode.disAgree);
				gd.UserCtrl.createUser(self.inputName.text, self._job, self._gender, function(){
					loginCtrl.enterGame(true);
				}, self);
			}
		}

		_tap_btn_back(){
			var self = this;
			self.close();
		}

		_tap_btn_dice(){
			var self = this;
			//self._isCustomName = true;
			var name = utils.getRandomName(self._gender);
			self.inputName.text = name;
		}

		_tap_img_userAgreement(){
			var self = this;
			mo.moduleMgr.runModule(g_consts.moduleId.userAgreement);
		}

		_initItem_list_jobs(cell:CreateRoleItem){
			var self = this;
			cell.emitter.on(CreateRoleItem.ON_GENDER_CHANGED, function(gender, job){
				self._setJobDesc(job);
				self._gender = gender;
				if(self._isCustomName){
					var name = utils.getRandomName(self._gender);
					self.inputName.text = name;
				}
			}, self);

		}
	}
}
