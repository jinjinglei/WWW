/**
 * Created by Zhuang on 2016/4/29.
 */

module g_practice {
	/**
	 *
	 * @author
	 *
	 */
	export class Practice extends mo.gui.Dlg{

		list_copys:egret.gui.List;
		_Item_list_copys;
		_copys:Array<any>;
		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
			self._Item_list_copys = PracticeItem;
			self._copys = [
				//[类型, 背景图, 标题, vip等级]
				[gc.c_prop.practiceTypeKey.medal, "ico_zanyintubiaosf", "ico_xuanyuanzanyings", "佩戴称号，升级勋章提高人物属性"],
                [gc.c_prop.practiceTypeKey.gift, "ico_fabaotubiaos", "ico_fabaowenzi", "强大的稀世珍宝，蕴含特殊力量"],
                [gc.c_prop.practiceTypeKey.heart, "ico_xinfatubiaos", "ico_xinfashengongs", "提高人物属性，加强特殊技能"]
			]
		}

		_childrenCreated(){
			var self = this;
			super._childrenCreated();

		}

		_data_list_copys():any[]{
			var self = this;
			return self._copys;
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
		}

		_click_list_copys(event:egret.gui.ListEvent) {
			var self = this;
			var data = event.item;
			var copyType = data[0];
			switch (copyType){
				case gc.c_prop.practiceTypeKey.medal:
					mo.moduleMgr.runModule(g_consts.moduleId.medal)
					break;
				case gc.c_prop.practiceTypeKey.heart:
					mo.moduleMgr.runModule(g_consts.moduleId.heart)
					break;
                case gc.c_prop.practiceTypeKey.gift:
                    mo.moduleMgr.runModule(g_consts.moduleId.gift)
                    break;
			}
		}
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		//moduleCfgItem.fullScr = true;
		moduleCfgItem.targetClass = Practice;

		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Copy, cb){
			gd.copyCtrl.getInfo(function () {
				cb();
			}, this);
		});
	});
}
