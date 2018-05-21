/**
 * Created by Zhuang on 2016/7/4.
 */

module g_villian{



	/**
	 *
	 * @author 
	 *
	 */
	export class VillianLayer extends mo.gui.Dlg{

		moduleParam:IModuleParam.Villian;
		_targets:Array<any>;
		villianEnemy_1:g_comp.VillianEnemy;
		villianEnemy_2:g_comp.VillianEnemy;
		villianEnemy_3:g_comp.VillianEnemy;
		ui_Villianbg:mo.gui.UIAsset;
		btn_villian_shop:mo.gui.UIAsset;
		curStage;
		curData;
		_initProp(){
		    var self = this;
		    super._initProp();
			self._targets = [
				["bg_errengudishi1-3",[[229,431],[204,247],[47,140]]]
				,["bg_errengudishiguan4-6",[[229,431],[40,295],[47,140]]]
				,["bg_errengudishi7-9",[[229,431],[30,260],[215,190]]]
				,["bg_errengudishiguan",[],[100,240]]
			];
			gd.expeditionCtrl.getInfo(function(data){
				self.curData = data;
				var stageId = self.curData[1].stageId
				if(stageId>=0&&stageId<3){
					self.curStage = 0;
				}else if(stageId>=3&&stageId<6){
					self.curStage = 1;
				}else if(stageId>=7&&stageId<9){
					self.curStage = 2;
				} else if(stageId>=9){
					self.curStage = 3;
				}
				self.villianEnemy_1.setData({curStage:self.curStage,num:1,stageId:stageId});
				self.villianEnemy_2.setData({curStage:self.curStage,num:2,stageId:stageId});
				self.villianEnemy_3.setData({curStage:self.curStage,num:3,stageId:stageId});
				self.dataChanged();
			},self);
		}
		onEnter(){
			super.onEnter();
			var self = this;
		}
		dtor(){
			super.dtor();
			var self = this;

		}
		_childrenCreated(){
			super._childrenCreated();
			var self = this;
		}
		dataChanged(){
			super.dataChanged();
			var self = this;
			self.ui_Villianbg.source = self._targets[self.curStage][0];
			self._setVillianEnemyPos()

		}
		_setVillianEnemyPos(){
			var self = this;
			if(self._targets[self.curStage][1][0]){
				self.villianEnemy_1.x= self._targets[self.curStage][1][0][0];
				self.villianEnemy_1.y= self._targets[self.curStage][1][0][1];
			}else{
				self.villianEnemy_1.visible = false;
			}
			if(self._targets[self.curStage][1][1]){
				self.villianEnemy_2.x = self._targets[self.curStage][1][1][0];
				self.villianEnemy_2.y = self._targets[self.curStage][1][1][1];
			}else{
				self.villianEnemy_2.visible = false;
			}
			if(self._targets[self.curStage][1][2]){
				self.villianEnemy_3.x = self._targets[self.curStage][1][2][0];
				self.villianEnemy_3.y = self._targets[self.curStage][1][2][1];
			}else{
				self.villianEnemy_3.visible = false;
			}
			if(!self.villianEnemy_1.visible&&!self.villianEnemy_2.visible&&!self.villianEnemy_3.visible){
				self.villianEnemy_3.visible = true;
				self.villianEnemy_3.x = self._targets[self.curStage][2][0];
				self.villianEnemy_3.y = self._targets[self.curStage][2][1];
				self.villianEnemy_3.scaleX = 1.4;
				self.villianEnemy_3.scaleY= 1.4;
			}
		}
		_tap_villianEnemy_1(){
			var self = this ;
			var stageId = self.curData[1].stageId
			if(stageId == 0 ||stageId == 3||stageId == 6){
				VillianBattle.create().setData({data:self.curData}).show();
			}

		}
		_tap_villianEnemy_2(){
			var self = this ;
			var stageId = self.curData[1].stageId
			if(stageId == 1 ||stageId == 4||stageId == 7){
				VillianBattle.create().setData({data:self.curData}).show();
			}
		}
		_tap_villianEnemy_3(){
			var self = this ;
			var stageId = self.curData[1].stageId
			if(stageId == 2 ||stageId == 5||stageId >=8){
				VillianBattle.create().setData({data:self.curData}).show();
			}
		}
		_tap_btn_villian_shop(){
			var self = this ;
			VillianShopLayer.create().show();
		}
		_tap_btn_help(){
			var self = this;
			g_base.BaseShowTip.create().setData({id: 8}).show();
		}
        _tap_btn_back(){
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        }
	}

	egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
		//主模块配置
		var moduleCfgItem = new mo.ModuleCfgItem();
		moduleCfgItem.targetClass = VillianLayer;
		// 设置模块的preAsync方法
		moduleCfgItem.onPreAsync(function(moduleParam, cb){
			//uw.ServerDataCtrl.initByServer(cb);
			cb();
		});
		mo.moduleMgr.registerModule(moduleCfgItem);
	});
}
