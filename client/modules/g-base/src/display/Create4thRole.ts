/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_base {

	/**
	 *
	 * @author
	 *
	 */
	export class Create4thRole extends mo.gui.Dlg{

		cb_auto:egret.gui.CheckBox;
        pb_exp:egret.gui.ProgressBar;
        grp_inject:egret.gui.Group;
		grp_full:egret.gui.Group;
		grp_resZQ:egret.gui.Group;
		grp_resYB:egret.gui.Group;
		grp_myZq:egret.gui.Group;
		grp_myYB:egret.gui.Group;
		btn_create:egret.gui.Button;
		img_openTips:egret.gui.UIAsset;
		efx_open:g_comp.UIEffect;

        efx_hit1:g_comp.UIEffect;
        efx_hit2:g_comp.UIEffect;
        _hitEfxPlayer:uiHelper.EfxPlayer;
        _upStarEfxPlayer:uiHelper.EfxPlayer;

        label_ZQV;
        label_YBV;

		mpUpdateTimer;

		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
		}

		_childrenCreated() {
			super._childrenCreated();
			var self = this;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.infuseExpc.toString(), self._refreshUI);
			self.efx_open.visible = false;
            self._upStarEfxPlayer = uiHelper.EfxPlayer.create(self.efx_hit1);
            self._hitEfxPlayer = uiHelper.EfxPlayer.create(self.efx_hit2);

            var gameInfo = mo.getJSONWithFileName(gc.cfg_c_game)[gc.id_c_game.fourRole];
            var needExp = gameInfo[2];
            self.pb_exp.maximum = needExp;
            self.pb_exp.labelFunction = function(v, max){
                return mo.STR.format("%s/%s", v, max);
            };

			var openCfg = gd.heroCtrl.getSpHeroOpenCfg(3);
			self.img_openTips.visible = openCfg[1][3] > gd.userCtrl.getRebirthLvl();

			self.mpUpdateTimer = setInterval(function () {
				self._refreshMyRes();
			}, 1000);
            self._refreshUI();

            self.label_ZQV.text = [gameInfo[6].split(",")[0]/10000>>0, gameInfo[6].split(",")[1]/10000>>0];
            self.label_YBV.text = [gameInfo[10].split(",")[0]/10000>>0, gameInfo[10].split(",")[1]/10000>>0];
		}

		onExit(){
			var self = this;
			super.onExit();
			if(self.mpUpdateTimer) clearInterval(self.mpUpdateTimer);
			self.mpUpdateTimer = null;
		}

        _refreshUI(){
            var self = this;
            var isAuto = gd.userCtrl.isOpenInfuseExpc();
            self.cb_auto.selected = isAuto;
            self.pb_exp.value = gd.userCtrl.getInfuseExpc();
			var needExp = mo.getJSONWithFileName(gc.cfg_c_game)[gc.id_c_game.fourRole][2];
			var canUnlock = gd.userCtrl.getInfuseExpc() >= needExp;
			self.grp_full.visible = canUnlock;
			self.grp_inject.visible = !canUnlock;

			uiHelper.setResGrp(self.grp_resZQ, gc.c_prop.spItemIdKey.genuineQi, gd.heroCtrl.getInjectCost(gc.c_prop.extraInfuseTypeKey.genuineQi));
			uiHelper.setResGrp(self.grp_resYB, gc.c_prop.spItemIdKey.diamond, gd.heroCtrl.getInjectCost(gc.c_prop.extraInfuseTypeKey.diamond));
			self._refreshMyRes();
        }

		

		_refreshMyRes(){
			var self = this;
			//我的资源
			uiHelper.setResGrp(self.grp_myZq, gc.c_prop.spItemIdKey.genuineQi, gd.demonLotusCtrl.calGenuineQi()[0]);
			uiHelper.setResGrp(self.grp_myYB, gc.c_prop.spItemIdKey.diamond,  gd.userCtrl.getDiamond());
		}

		_tap_btn_back(){
			var self = this;
			self.close();
		}


		_chg_cb_auto(){
			var self = this;
			if(!gd.heroCtrl.isOpenCfgOk(3)){
				process.nextTick(function () {
					self.cb_auto.selected = false;
				});
				return mo.showMsg(gc.id_c_msgCode.careerNotOpen);
			}
            gd.heroCtrl.autoInfuseSwitch(self.cb_auto.selected, function(){
				self._refreshUI();
				mo.showMsg(mo.STR.format("自动注入:%s", self.cb_auto.selected?
					"[ubb color=green]开启[/ubb]" : "[ubb color=red]关闭[/ubb]"));
			}, self);
		}

		_tap_btn_create(){
			var self = this;
			gd.heroCtrl.callHero(gc.c_prop.heroJobKey.ys, 0, function () {
				self.efx_open.visible = true;
				self.efx_open.play(1);
				self.efx_open.addEventListener(egret.Event.COMPLETE, function(){
					mo.showMsg("开启成功!");
					self.close();
				}, self);
			}, self);
		}

		_tap_btn_yuanbao(){
			var self = this;
			if(!gd.heroCtrl.isOpenCfgOk(3)){
				return mo.showMsg(gc.id_c_msgCode.careerNotOpen);
			}
			var type = gc.c_prop.extraInfuseTypeKey.diamond;
			if(!gd.heroCtrl.ybInjectTipsed){
				gd.heroCtrl.ybInjectTipsed = true;
			    return mo.showMsg(gc.id_c_msgCode.buyPerfusion, gd.heroCtrl.getInjectCost(gc.c_prop.extraInfuseTypeKey.diamond), function () {
					self._doInject(type);
				});
			}else{
				self._doInject(type);
			}
		}

		_tap_btn_zq(){
			var self = this;
			if(!gd.heroCtrl.isOpenCfgOk(3)){
				return mo.showMsg(gc.id_c_msgCode.careerNotOpen);
			}
			var type = gc.c_prop.extraInfuseTypeKey.genuineQi;
			self._doInject(type);
		}

		_doInject(type){
			var self = this;
			gd.heroCtrl.extraInfuse(type, function (data) {
				var isBaoJi = data[0], exp = data[1];
				if(isBaoJi){
					self._hitEfxPlayer.play();
				}
				g_msg.UIMsgTextCtrl.push(mo.STR.format("[ubb]获得进度%s[/ubb]", exp));
				self._upStarEfxPlayer.play();
			}, self);
		}

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id: 103}).show();
		}

		_tap_img_skill38(){
			SkillDescDlg.create().setData({skillId: 38}).show();
		}
		_tap_img_skill39(){
			SkillDescDlg.create().setData({skillId: 39}).show();
		}
		_tap_img_skill40(){
			SkillDescDlg.create().setData({skillId: 40}).show();
		}
		_tap_img_skill41(){
			SkillDescDlg.create().setData({skillId: 41}).show();
		}
		_tap_img_skill42(){
			SkillDescDlg.create().setData({skillId: 42}).show();
		}
	}
}
