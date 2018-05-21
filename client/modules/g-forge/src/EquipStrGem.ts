module g_forge {
	/**
	 *
	 * @author 
	 *
	 */
	export class EquipStrGem extends mo.gui.Layer{

		label_cost_stone:mo.gui.Label;
		gem_stone:g_comp.Gem_Stone;
		img_cost:egret.gui.UIAsset;

        data:gd.IHeroPart;
		part_item:g_comp.Part_Item;

		efx:g_comp.UIEffect;
		_efxPlayer:uiHelper.EfxPlayer;

		grp_noMax:egret.gui.Group;
		grp_max:egret.gui.Group;

		//@override
		_initProp(){
			super._initProp();
			var self = this;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.registerClassByKey(gd.HeroEntityCtrl, gd.HeroEntityCtrl.ON_EQUIP_UPGEM, function(){
				self._efxPlayer.play();
			});
			self._efxPlayer = uiHelper.EfxPlayer.createPlayer(self.efx);
		}

		_getRealPart(){
			var self = this;
			var hec:gd.HeroEntityCtrl = self.data.hec;
			var part = (self.data.part != null)? self.data.part : hec.getFirstEquipedPart();
			part = hec.isPartEquiped(part)? part : hec.getFirstEquipedPart();
			return part;
		}

		_showEmpty(){
			var self = this;
			self.gem_stone.setData({hec: self.data.hec});
			self.label_cost_stone.text = [0, 0];
		}

		//@override
		dataChanged(){
			super.dataChanged();
			var self = this;
			var hec:gd.HeroEntityCtrl = self.data.hec;
			if(!hec){
				self._showEmpty();
				return;
			}
			var part = self._getRealPart();
			self.part_item.setData({part : part});
			if(part == null){
				self._showEmpty();
				return;
			}
			self.gem_stone.setData({hec: hec, part: part});
			var opt = hec.getUpGemOpt(part);
			self.grp_noMax.visible = !opt.strMax;
			self.grp_max.visible = opt.strMax;
			if(!opt.strMax){
				self.label_cost_stone.text = [opt.gemDebris, opt.costGemDebris];
				self.img_cost.source = resHelper.getItemIconPath(opt.gemDebrisId);
			}
		}
	}
}
