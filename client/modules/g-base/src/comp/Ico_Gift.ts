module g_comp {
	/**
	 *
	 * @author 
	 *
	 */
	export class Ico_Gift extends mo.gui.Comp{
		ico_gift:egret.gui.UIAsset;
		label_giftTitle:mo.gui.Label;
        ico_job:egret.gui.UIAsset;

		//@override
		_initProp(){
			super._initProp();
			mo.gui.helper.setCompSkinName(this);
		}
		_childrenCreated(){
			super._childrenCreated();
			var self = this;
		}

		//@override
		dataChanged(){
			super.dataChanged();
			var self = this;
			var itemId = self.get('itemId');
            self.ico_job.visible = itemId != 0;
            if(itemId!=0){
                var t_gift = mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, itemId);
                self.label_giftTitle.text = t_gift[gc.t_talisman_name];
                self.ico_gift.source = resHelper.getItemIconPath(itemId);
                self.ico_job.source = "ico_job" + gd.equipCtrl.getEquipJob(itemId);
            }else{
                self.ico_gift.source = null;
                self.label_giftTitle.text = "";
            }
		}

        getShowType(){
            var self = this;

        }
	}
}
