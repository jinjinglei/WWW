module g_comp {
	/**
	 *
	 * @author 
	 *
	 */
	export class Ico_Medal extends mo.gui.Comp{
		ico_medal:egret.gui.UIAsset;
		label_medalTitle:mo.gui.Label;
		efx_medal:g_comp.EfxAsset;

		noAnimate:boolean;//无动画模式

		//@override
		_initProp(){
			super._initProp();
			mo.gui.helper.setCompSkinName(this);
			this.noAnimate = false;
		}
		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.efx_medal.ico.visible = false;

		}

		//@override
		dataChanged(){
			super.dataChanged();
			var self = this;
			var itemId = self.get('itemId');
            var t_medal = mo.getJSONWithFileNameAndID(gc.cfg_t_medal, itemId);
			var t_item = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
			self.ico_medal.visible = self.efx_medal.visible = self.label_medalTitle.visible = false;


			if(t_medal[gc.t_medal_iconId] && !self.noAnimate){ //有动画资源
                self.efx_medal.effectId = t_medal[gc.t_medal_iconId];
				self.efx_medal.visible = true;
            }else if(t_medal[gc.t_medal_staIconId]){
                self.ico_medal.source = resHelper.getWarPrintIconPath(itemId);
				self.ico_medal.visible = true;
			}

			var metalType:number = t_medal[gc.t_medal_metalType]
			if( metalType==1){
				self.label_medalTitle.text = t_item[gc.t_item_name];
				self.label_medalTitle.visible = true;
			}
			//else{
             //   self.label_medalTitle.text = t_medal[gc.t_medal_text];
			//	self.label_medalTitle.visible = true;
			//}
		}

        getShowType(){
            var self = this;

        }

		checkNeedAdjuestPos(itemId){
			var self = this;
			var t_medal = mo.getJSONWithFileNameAndID(gc.cfg_t_medal, itemId);
			var metalType:number = t_medal[gc.t_medal_metalType];
			return metalType == 3;
		}

	}
}
