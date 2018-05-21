/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_forge {

	export var SUBMID_STR:number = 0;
	export var SUBMID_STAR:number = 1;
	export var SUBMID_GEM:number = 2;

	/**
	 *
	 * @author 
	 *
	 */
	export class ForgeLayer extends mo.gui.Layer{

		moduleParam:IModuleParam.Forge;

		container:egret.gui.Group;
		tab_str:egret.gui.TabBar;
        tabLastSelectIndex:number;
        btn_do:egret.gui.Button;
		label_open:mo.gui.Label; //升星时的等级提示
		img_border_light:egret.gui.UIAsset;

		img_red0:egret.gui.UIAsset; //强化
		img_red1:egret.gui.UIAsset; //升星
		img_red2:egret.gui.UIAsset; //宝石


		_comps:Array<any>;

		_btnStr = ["btn_txt_g_strength", "btn_txt_g_upstar", "btn_txt_g_uplvl"];

		hec:gd.HeroEntityCtrl;
		part;

		redKeyArr:Array<any>; //tab红点key映射

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
			var redKey_intensify = {};
			redKey_intensify[0] = gc.c_prop.pointRedKey.role1_intensify;
			redKey_intensify[1] = gc.c_prop.pointRedKey.role2_intensify;
			redKey_intensify[2] = gc.c_prop.pointRedKey.role3_intensify;

			var redKey_star = {};
			redKey_star[0] = gc.c_prop.pointRedKey.role1_star;
			redKey_star[1] = gc.c_prop.pointRedKey.role2_star;
			redKey_star[2] = gc.c_prop.pointRedKey.role3_star;

			var redKey_gem = {};
			redKey_gem[0] = gc.c_prop.pointRedKey.role1_gem;
			redKey_gem[1] = gc.c_prop.pointRedKey.role2_gem;
			redKey_gem[2] = gc.c_prop.pointRedKey.role3_gem;
			self.redKeyArr = [redKey_intensify, redKey_star, redKey_gem]; //强化，升星，宝石

		    self._comps = [];

			roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
		}

		_heroChanged(hec){
			var self = this;
			self.setData({hec: hec});
		}

		dtor(){
			super.dtor();
			var self = this;
			if(roleChgEmitter)roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;

			var heroEquipIndies = gc.c_prop.heroEquipIndex;
			for(var part in heroEquipIndies){
				var item:g_comp.Equip_Item = self['eq_' + part];
				if(item){
					item.onClick(self._onEquipItemClick, self, item);
				}
			}
			self._comps.push(EquipStrBase.create().setData({tray: self.container}).show());
            self._comps.push(EquipStrStar.create().setData({tray: self.container, delegate: self}).show());
			self._comps.push(EquipStrGem.create().setData({tray: self.container}).show());
			self.img_border_light.visible = false;
			process.nextTick(function(){
				self.tab_str.selectedIndex = 0;
                self.tabLastSelectIndex = 0;
				var subModuleId = self.moduleParam.subModuleId;
				switch (subModuleId){
					case SUBMID_STR:
						self.tab_str.selectedIndex = 0;
						break;
					case SUBMID_STAR:
						self.tab_str.selectedIndex = 1;
						break;
					case SUBMID_GEM:
						self.tab_str.selectedIndex = 2;
						break;
				}
				//默认取第一个英雄数据
				var hec = gd.heroCtrl.getMainHeroCtrl();
				self.setData({hec:hec});
			});
		}

		//获取可以操作的装备部位
		_getRealPart(){
			var self = this;
			var hec:gd.HeroEntityCtrl = self.hec;
			var part = (self.part != null)? self.part : hec.getFirstEquipedPart();
			part = hec.isPartEquiped(part)? part : hec.getFirstEquipedPart();
			return part;
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
			self.hec = self.get('hec');
			self.part = self._getRealPart();
			self.img_border_light.visible = self.hec.isNormalEquiped();
			if(self.hec.isNormalEquiped()){
				self._moveLightBorder(self["eq_" + self.part]);
			}
			self._tap_tab_str();
		}

		updateEquipItems(){
			var self = this;
			var selectedIndex = self.tab_str.selectedIndex;
			var hec = self.hec;
			var equipData = hec.equipData;
			var heroEquipIndies = gc.c_prop.heroEquipIndex;
			for(var part in heroEquipIndies){
				var equipId = equipData[part];
				var iPart = parseInt(part);
				var item:g_comp.Equip_Item = self['eq_' + part];
				var data;
				if(item){
					switch (selectedIndex){
						case 0:
							data = {hec: hec, part: iPart, equipId: equipId, showType:1, strLvl:hec.getStrLvlByEquipPart(iPart)};
							break;
						case 1:
							data = {hec: hec, part: iPart, equipId: equipId, showType:2, starLvl:hec.getStarLvlByEquipPart(iPart)};
							break;
						case 2:
							data = {hec: hec, part: iPart, equipId: equipId, showType:3, gemInfo:hec.getGemInfoByPart(iPart)};
							break;
					}
					item.setData(data);
				}
			}
		}

		_onEquipItemClick(item:g_comp.Equip_Item) {
			var self = this;
			var hec:gd.HeroEntityCtrl = self.hec;
			var part = item.part;
			var hasEquip = hec.isPartEquiped(part);
			if(!hasEquip) return mo.showMsg(gc.id_c_msgCode.noEquipNow);
			self.part = part;
			self._moveLightBorder(item);
			self._tap_tab_str();
		}

		_moveLightBorder(item:g_comp.Equip_Item){
			var self = this;
			var iW = item.width, iH = item.height;
			var bW = self.img_border_light.width, bH = self.img_border_light.height;
			self.img_border_light.x = item.x - (bW-iW)/2 + 2;//for png
			self.img_border_light.y = item.y - (bH-iH)/2 + 3;
		}

		_hideAllComp(){
			var self = this;
			for(var i = 0, li = self._comps.length; i < li; i++){
				self._comps[i].visible = false;
			}
		}

		_tap_tab_str(){
			var self = this;
            var selectedIndex = self.tab_str.selectedIndex;

            var c_open = mo.getJSONWithFileName(gc.cfg_c_open);
            var needLvl;
            if(selectedIndex==0){
                needLvl = c_open[gc.id_c_open.strength][gc.c_open_lvlRequired];
            }else if(selectedIndex==1){
                needLvl = c_open[gc.id_c_open.star][gc.c_open_lvlRequired];
            }else if(selectedIndex==2){
                needLvl = c_open[gc.id_c_open.stone][gc.c_open_lvlRequired];
            }

            if(gd.userCtrl.getLvl()<needLvl) {
                process.nextTick(function(){
                    self.tab_str.selectedIndex = self.tabLastSelectIndex;
                });
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl,needLvl);
            }

			var isEquiped = self.hec.isNormalEquiped();
			if(!isEquiped){
				if(self.tab_str.selectedIndex != 0){
					process.nextTick(function(){
						self.tab_str.selectedIndex = 0;
					});
                    selectedIndex = 0;
				}
				mo.showMsg(gc.id_c_msgCode.noEquipNow);
			}

            self.tabLastSelectIndex = selectedIndex;
			self._hideAllComp();
			var comp = self._comps[selectedIndex];
			comp.visible = true;
			comp.setData({hec: self.hec, part: self.part});
            self.btn_do.icon = self._btnStr[selectedIndex];
			self.updateEquipItems();
			self._updateRed();
			self._updateBtnVisible();

		}

		_updateBtnVisible(){
			var self = this;
			var selectedIndex = self.tab_str.selectedIndex;
			var opt:any;
			self.label_open.visible = false;
			if(selectedIndex == 0){
				opt = self.hec.getStrOpt(self.part);
				self.btn_do.visible = (opt!=null) && (!opt.strMax);
			}else if(selectedIndex == 1){
				opt = self.hec.getUpStarOpt(self.part);
				self.btn_do.visible = (opt!=null) && !opt.strMax;
			}else if(selectedIndex == 2){
				opt = self.hec.getUpGemOpt(self.part);
				self.btn_do.visible = (opt!=null) && !opt.strMax;
				if(self.btn_do.visible){
					self.btn_do.visible = opt.roleLvlEnough;
					self.label_open.visible = !opt.roleLvlEnough;
					self.label_open.text = opt.nextNeedLvl;
				}

			}
		}

		_tap_btn_do(){
			var self = this;
			var selectedIndex = self.tab_str.selectedIndex;
			var opt:any;
            var itemId;
			if(selectedIndex == 0){
				opt = self.hec.getStrOpt(self.part);
                if(!opt.stoneEnough){
                    itemId = gc.c_prop.spItemIdKey.intensify;
                    if(g_base.GainWay.canBuyFromShop(itemId)){
                        g_base.GainWayShop.create().setData({itemId:itemId, count:opt.costStone-opt.stone}).show().onClose(function(){
                            self.dataChanged();
                        });
                    }else{
                        g_base.GainWay.create().setData({itemId:itemId}).show();
                    }
                }else{
                    self.hec.strength(opt, function(){
                        self.dataChanged();
                    }, self);
                }
			}else if(selectedIndex == 1){
				opt =self.hec.getUpStarOpt(self.part);
                if(!opt.stoneEnough){
                    itemId = gc.c_prop.spItemIdKey.starStone;
                    if(g_base.GainWay.canBuyFromShop(itemId)){
                        g_base.GainWayShop.create().setData({itemId:itemId, count:opt.costStone-opt.stone}).show().onClose(function(){
                            self.dataChanged();
                        });
                    }else{
                        g_base.GainWay.create().setData({itemId:itemId}).show();
                    }
                }else {
                    self.hec.upStar(opt, function () {
                        self.dataChanged();
                    }, self);
                }

			}else if(selectedIndex == 2){
				opt =self.hec.getUpGemOpt(self.part);
                if(!opt.stoneEnough){
                    itemId = opt.gemDebrisId;
                    if(g_base.GainWay.canBuyFromShop(itemId)){
                        g_base.GainWayShop.create().setData({itemId:itemId, count:opt.costGemDebris-opt.gemDebris}).show().onClose(function(){
                            self.dataChanged();
                        });
                    }else{
                        g_base.GainWay.create().setData({itemId:itemId}).show();
                    }
                }else {
                    self.hec.upGem(opt, function () {
                        self.dataChanged();
                    }, self);
                }

			}
		}

		_tap_btn_help(){
			var self = this;
			var selectedIndex = self.tab_str.selectedIndex;
			var ids = [8, 9, 10];
			g_base.BaseShowTip.create().setData({id: ids[selectedIndex]}).show();
		}

        _tap_btn_back(){
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        }

		_updateRed(){
			var self = this;
			var roleIndex = gd.heroCtrl.getHeroIndex(self.hec);
			var redKeyArr = self.redKeyArr;
			self.img_red0.visible = gd.pointCtrl.isShow(redKeyArr[0][roleIndex]);
			self.img_red1.visible = gd.pointCtrl.isShow(redKeyArr[1][roleIndex]);
			self.img_red2.visible = gd.pointCtrl.isShow(redKeyArr[2][roleIndex]);
		}
	}
}
