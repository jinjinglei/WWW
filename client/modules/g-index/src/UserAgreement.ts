/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_index {

	/**
	 *
	 * @author 
	 *
	 */
	export class UserAgreement extends mo.gui.Dlg{
		moduleParam;
		label_content;
		btn_ok;

		_initProp() {
			super._initProp();
			var self = this;
			self._layerOpt.shownWithAction = false;
		}

		_childrenCreated(){
			var self = this;
			super._childrenCreated();
			self.label_content.text = self.moduleParam["content"];
		}
		_tap_btn_ok(){
			this.close();
		}
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.targetClass = UserAgreement;
		mo.moduleMgr.registerModule(moduleCfgItem);
		// 设置模块的preAsync方法
		moduleCfgItem.onPreAsync(function(moduleParam, cb){
			gd.protocolContentCtrl.getInfo(function (data) {
				moduleParam["content"] = data[gc.dsConsts.ProtocolContentEntity.content];
				cb();
			}, this);
		});
	});
}
