module g_forge {
	/**
	 *
	 * @author 
	 *
	 */
	export class EquipStrBase extends mo.gui.Layer{

		label_curProp:mo.gui.Label;
		label_nextProp:mo.gui.Label;
		label_cost_stone:mo.gui.Label;
		label_cost_gold:mo.gui.Label;
		img_cost:egret.gui.UIAsset;

		data:gd.IHeroPart;
		part_item:g_comp.Part_Item;

		efx:g_comp.UIEffect;
		_efxPlayer:uiHelper.EfxPlayer;

		grp_noMax:egret.gui.Group;
		grp_max:egret.gui.Group;
        label_noRefineLv;
        ico_refine;

		//@override
		_initProp(){
			super._initProp();
			var self = this;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.registerClassByKey(gd.HeroEntityCtrl, gd.HeroEntityCtrl.ON_EQUIP_STR, function(){
				self._efxPlayer.play();
			});
			self.img_cost.source = resHelper.getItemIconPath(gc.c_prop.spItemIdKey.intensify);
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
			self.label_cost_stone.text = [gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.intensify), 0];
			self.label_cost_gold.text = 0 + "";
			self.label_curProp.visible = false;
			self.label_nextProp.visible = false;
            self.grp_noMax.visible = false;
            self.grp_max.visible = false;
            self.label_noRefineLv.visible = false;
            self.ico_refine.visible = false;
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
			self.label_curProp.visible = true;
			self.label_nextProp.visible = true;

			var opt = hec.getStrOpt(part);
			var propKey = opt.curStrInfo[1];
			var propV = opt.curStrInfo[2];
			self.label_curProp.text = [gc.c_prop.heroProp[propKey], propV];

			self.grp_noMax.visible = !opt.strMax;
			self.grp_max.visible = opt.strMax;

			if(!opt.strMax){
				self.label_cost_stone.text = [opt.stone, opt.costStone];
				self.label_cost_gold.text = opt.costGold;
				var propKey = opt.nextStrInfo[1];
				var propV = opt.nextStrInfo[2];
				self.label_nextProp.text = [gc.c_prop.heroProp[propKey], propV];
			}
			self.label_nextProp.visible = !opt.strMax;

            var opt = hec.getStrOpt(part);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.equipRefineCfg);
            if (opt.strengthLvl >= gameInfo[0]) {
                self.ico_refine.visible = true;
                self.label_noRefineLv.visible = false;
            } else {
                self.ico_refine.visible = false;
                self.label_noRefineLv.visible = true;
                self.label_noRefineLv.text = gameInfo[0];
            }
		}

        _tap_ico_refine() {
            var self = this;
            var hec:gd.HeroEntityCtrl = self.data.hec;
            var part = self._getRealPart();
            RefineLayer.create().setData({hec: hec, part: part}).show().onClose(function () {
                self.dataChanged();
            });
        }
    }
}
