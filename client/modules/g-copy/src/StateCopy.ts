/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_copy {

	/**
	 *
	 * @author
	 *
	 */
	export class StateCopy extends Copy{

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
		    mo.gui.helper.setSkinName(self, Copy.__className);
		}
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.fullScr = true;
		moduleCfgItem.targetClass = StateCopy;
		moduleCfgItem.sysId = gc.id_c_open.reamCopy;// 系统id

		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Copy, cb){
			moduleParam.copyType = gc.c_prop.copyTypeKey.state;
			gd.copyCtrl.getCopyStateList(function(data){
				var copyList = [].concat(data).reverse();
				moduleParam.copyList = copyList;
				cb();
			}, this);
		});
	});
}
