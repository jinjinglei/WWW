module g_comp {
	/**
	 *
	 * @author 
	 *
	 */
    export class TowerMonster extends mo.gui.Comp {

		label_num;
		img_boss;
		img_fighting;
		img_canGet;
		img_pass;

		_childrenCreated() {
			super._childrenCreated();
			var self = this;

		}

		//@override
		dataChanged() {
			super.dataChanged();
			var self = this;
			var copyId = self.data.copyId;
			//图像
			var displayId = mo.getJSONWithFileNameAndID(gc.cfg_t_paTaTreasury, copyId)[gc.t_paTaTreasury_displayId];
			self.img_boss.source = resHelper.getWorldBossIconPath( displayId);
			//第几层
			self.label_num.text = gd.copyCtrl.getTowerIndex(copyId);
			self.img_fighting.visible = false;

			var focusId = gd.copyCtrl.getFocusTowerCopyId();
			var isPassed = gd.copyCtrl.isTwerPassed(copyId);
			self.img_pass.visible = isPassed;
			self.img_fighting.visible = false;
			self.img_canGet.visible = false;
			if(focusId == copyId){
				if(isPassed){
					var awardArr = gd.copyCtrl.getIsAwardArr(copyId);
					var received = awardArr[1];
					self.img_pass.visible = received;
					self.img_canGet.visible = awardArr[0] && !awardArr[1];
				}else{
					self.img_fighting.visible = gd.copyCtrl.getHighPata() == copyId;
				}
			}
		}

    }
}
