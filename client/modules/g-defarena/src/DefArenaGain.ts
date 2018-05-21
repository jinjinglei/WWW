/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_defarena {

	export class DefArenaGain extends mo.gui.Dlg{
		label_name;
		label_desc;
		label_props;

		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
			mo.closeEmitter.on("DefarenaWinner", self.close, self);
		}
		onEnter(){
			super.onEnter();
			var self = this;
			var info = mo.getJSONWithFileNameAndID(gc.cfg_c_help, 21);
			self.label_desc.text = info[gc.c_help_helpText];

			var itemId = gd.challengeCupCtrl.getFirstReward();
			var bdc = gd.BagDataCtrl.create(itemId, null);
			var strTemp = "[ubb color=0xEBC661]%s:[/ubb] [ubb color=0x00DD3D]+%s%[/ubb][/br]";
			var str = "";
			for(var k in gc.c_prop.equipProp){
				str += mo.STR.format(strTemp, gc.c_prop.equipProp[k], gd.kingCtrl.getCloakProAdd()/100);
			}
			self.label_props.text = str;
			//名字
			self.label_name.text = bdc.name;
			self.label_name.textColor = uiHelper.getColorByQuality(bdc.quality);

		}

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id:5}).show();
		}
	}
}
