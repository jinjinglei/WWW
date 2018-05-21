module g_comp {
	/**
	 *
	 * @author 
	 *
	 */
	export class ResBar extends mo.gui.Comp{

		label_gold:egret.gui.Label;
		label_yuanbao:egret.gui.Label;
		grp_gold:egret.gui.Group;
		grp_yuanbao:egret.gui.Group;

		//@override
		_initProp(){
			super._initProp();
			var self = this;
			mo.gui.helper.setCompSkinName(self);
		}
		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.gold.toString(), self._updateRes);
			self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.diamond.toString(), self._updateRes);
			self._updateRes();
		}

		_updateRes(){
			var self = this;
			self.label_gold.text = gd.userCtrl.getGold();
			self.label_yuanbao.text = gd.userCtrl.getDiamond();
		}

		showRes(isShowGold, isShowYuanBao){
			var self = this;
			self.grp_gold.visible = isShowGold;
			self.grp_yuanbao.visible = isShowYuanBao;
		}

		//@override
		dataChanged(){
			super.dataChanged();
			var self = this;

		}
	}
}
