/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_copy {
	/**
	 *
	 * @author
	 *
	 */
	export class CopyEntry extends mo.gui.Dlg{

		list_copys:egret.gui.List;
		_Item_list_copys;

		_copys:Array<any>;


		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
			self._Item_list_copys = CopyEntryItem;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.vip.toString(), function(){
                self.checkVipCopy();
                self.refreshList("list_copys");
            });
		}

		_childrenCreated(){
			var self = this;
			super._childrenCreated();
			self.registerClassByKey(gd.RechargeCtrl, gd.RechargeCtrl.ON_RECHARGE_SUCC, function(){
                self.checkVipCopy();
				self.refreshList("list_copys");
			});
			if(self.moduleParam){
				self.setData(self.moduleParam);
			}
            self.checkVipCopy();
            self.refreshList("list_copys");
		}

        checkVipCopy(){
            var self = this;
            var vip = gd.userCtrl.getVip();
            self._copys = [
                //[类型, 背景图, 标题, vip等级]
                [gc.c_prop.copyTypeKey.equip, "ico_maoxianf", "ico_zhuangbeifubeng"],
                [gc.c_prop.copyTypeKey.state, "ico_yuanshengfu", "ico_yuanshenbeifubeng"],
                [gc.c_prop.copyTypeKey.hell, "ico_ylianyugfu", "ico_lianyufubeng"],
            ]

            self._copys.push([gc.c_prop.copyTypeKey.vip, g_copy.vipBg[7][0], "ico_linyusmf", 7]);
            if(vip>=7){
                self._copys.push([gc.c_prop.copyTypeKey.vip, g_copy.vipBg[10][0], "ico_meixindonfu", 10]);
            }
            if(vip>=10){
                self._copys.push([gc.c_prop.copyTypeKey.vip, g_copy.vipBg[14][0], "ico_fengmosengdian", 14]);
            }
            if(vip>=14){
                self._copys.push([gc.c_prop.copyTypeKey.vip, g_copy.vipBg[17][0], "ico_huangquanguiku", 17]);
            }
            if(vip>=17){
                self._copys.push([gc.c_prop.copyTypeKey.vip, g_copy.vipBg[19][0], "ico_haidimizeng", 19]);
            }
            if(vip>=19){
                self._copys.push([gc.c_prop.copyTypeKey.vip, g_copy.vipBg[20][0], "ico_jinqinqidait", 20]);
            }
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
				case gc.c_prop.copyTypeKey.equip:
					mo.moduleMgr.runModule(g_consts.moduleId.equipCopy);
					break;
				case gc.c_prop.copyTypeKey.state:
					mo.moduleMgr.runModule(g_consts.moduleId.stateCopy);
					break;
				case gc.c_prop.copyTypeKey.hell:
					mo.moduleMgr.runModule(g_consts.moduleId.bossCopy);
					break;
				case gc.c_prop.copyTypeKey.vip:
					var needVip = data[3];
					if(needVip >=20) return;
					mo.moduleMgr.runModule(g_consts.moduleId.vipCopy, {vip: needVip});
					break;
			}
		}
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		//moduleCfgItem.fullScr = true;
		moduleCfgItem.targetClass = CopyEntry;

		mo.moduleMgr.registerModule(moduleCfgItem);

		moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Copy, cb){
			gd.copyCtrl.getInfo(function () {
				cb();
			}, this);
		});
	});
}
