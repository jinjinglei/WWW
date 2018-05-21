/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_worldboss {

	/**
	 *
	 * @author
	 *
	 */
	export class BossExtraCost extends mo.gui.Dlg{
		grp_res0:egret.gui.Group;
		grp_res1:egret.gui.Group;
		grp_extra_res:egret.gui.Group;
		label_call_type:egret.gui.Label;

		btn_call:egret.gui.Button;
		btn_lock_call:egret.gui.Button;

		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
            self.outsideClosable = true;
		}

		_childrenCreated(){
			var self = this;
			super._childrenCreated();

		}

		dataChanged(){
			super.dataChanged();
			var self = this;
            var locked = self.data.locked;
            var bossId = self.data.bossId;

            self.label_call_type.text = locked? "锁定召唤" : "召唤";
            self.btn_lock_call.visible = locked;
            self.btn_call.visible = !locked;

            var c_bossParameter = mo.getJSONWithFileName(gc.cfg_c_bossParameter);
            var c_boss = c_bossParameter[bossId];

            //设置话费描述,非元宝的要显示名字
            var itemId = c_boss[gc.c_bossParameter_summonCost][0];
            var itemNum = c_boss[gc.c_bossParameter_summonCost][1];
            var isDiamond = (itemId == gc.c_prop.spItemIdKey.diamond);
            //self.grp_res1.includeInLayout = !isDiamond;
            self.grp_res1.visible = !isDiamond;
            var extraCost = locked? gd.bossGuildCtrl.getLockCost() : 0;
            if(isDiamond){
                itemNum += extraCost;
            }else{
                self.grp_res1.visible = extraCost!=0;
                uiHelper.setResGrp(self.grp_res1, gc.c_prop.spItemIdKey.diamond, extraCost);
            }
            uiHelper.setResGrp(self.grp_res0, itemId, itemNum);
            uiHelper.setResGrp(self.grp_extra_res, gc.c_prop.spItemIdKey.diamond, gd.bossGuildCtrl.getOpenChannelCost());
		}

        _tap_btn_call(){
            var self = this;
            gd.bossGuildCtrl.openBoss(self.data.bossId, false, function(){
                self.close();
                mo.moduleMgr.runModule(g_consts.moduleId.worldBoss,{bossId : self.data.bossId});
            },self)
        }

        _tap_btn_lock_call(){
            var self = this;
            gd.bossGuildCtrl.openBoss(self.data.bossId, true, function(){
                self.close();
                mo.moduleMgr.runModule(g_consts.moduleId.worldBoss,{bossId : self.data.bossId});
            },self)
        }

	}
}
