module g_comp {
	/**
	 *
	 * Created by Zhuang on 2016/7/4.
	 *
	 */
    export class VillianEnemy extends mo.gui.Comp {

		label_num;
		img_pass;
		label_goldnum;

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

			//第几层
			var num:number;
			if(self.data.num){
				if(self.data.num == 1){
					num = self.data.curStage+1
				}else if(self.data.num == 2) {
					num = self.data.curStage+2
				}else if(self.data.num == 3) {
					num = self.data.curStage+3
				}
			}
			self.label_num.text = num;

			self.img_pass.visible = (num = self.data.stageId)?true:false;

		}

    }
}
