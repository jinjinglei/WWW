module g_comp {
	/**
	 *
	 * @author 
	 *
	 */
	export class Part_Item extends mo.gui.Comp{
		img_part:egret.gui.UIAsset;
		img_txt_part:egret.gui.UIAsset;

		part:number;

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
			self.part = self.get('part');
			if(self.part == null){
				self.img_part.visible = false;
				self.img_txt_part.visible = false;
				return;
			}
			self.img_part.visible = true;
			self.img_txt_part.visible = true;
			var res = uiHelper.getPartRes(self.part);
			self.img_part.source = res[0];
			self.img_txt_part.source = res[1];
		}
	}
}
