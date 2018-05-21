module g_forge {
	/**
	 *
	 * @author 
	 *
	 */
	export class EquipStrStar extends mo.gui.Layer{

		label_cost_stone:mo.gui.Label;
		label_cost_gold:mo.gui.Label;
		label_prop_base:mo.gui.Label;
		label_prop_next:mo.gui.Label;
		img_cost:egret.gui.UIAsset;

		data:gd.IHeroPart;
		part_item:g_comp.Part_Item;

		efx:g_comp.UIEffect;
		_efxPlayer:uiHelper.EfxPlayer;

		grp_noMax:egret.gui.Group;
		grp_max:egret.gui.Group;
        grp_tupo;
        label_costDesc;
        label_tupo;
        label_star;
        label_tupoProp;

        effect_win;
        effect_fail;
        _winEfxPlayer:uiHelper.EfxPlayer;
        _failEfxPlayer:uiHelper.EfxPlayer;

		//@override
		_initProp(){
			super._initProp();
			var self = this;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.registerClassByKey(gd.HeroEntityCtrl, gd.HeroEntityCtrl.ON_EQUIP_UPSTAR, function(){
				self._efxPlayer.play();
			});
			self.img_cost.source = resHelper.getItemIconPath(gc.c_prop.spItemIdKey.starStone);
			self._efxPlayer = uiHelper.EfxPlayer.createPlayer(self.efx);

            self._winEfxPlayer = uiHelper.EfxPlayer.create(self.effect_win);
            self._failEfxPlayer = uiHelper.EfxPlayer.create(self.effect_fail);
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
			self.label_prop_base.text = 0 + "";
			self.label_prop_next.text = 0 + "";

			self.label_cost_stone.text = [gd.userCtrl.getItemNum(gc.c_prop.spItemIdKey.starStone), 0];
			self.label_cost_gold.text = 0 + "";
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

			self.label_prop_base.visible = true;
			self.label_prop_next.visible = true;

			var opt = hec.getUpStarOpt(part);

            if (!opt.topNeed) {
                self.grp_tupo.visible = false;
                self.label_costDesc.text = "升星\n消耗";
                if (!opt.strMax) {
                    self.label_cost_stone.text = [opt.stone, opt.costStone];
                    self.label_cost_gold.text = opt.costGold;
                }
            } else {
                self.grp_tupo.visible = true;
                self.label_costDesc.text = "突破\n消耗";
                self.label_cost_stone.text = [opt.stone, opt.topCostStone];
                self.label_cost_gold.text = opt.topCostGold;
            }
            self.grp_max.visible = opt.strMax && opt.topMax;
            self.grp_noMax.visible = !self.grp_max.visible;
            self.label_star.text = opt.starLvl;
            self.label_tupo.text = opt.topLv;
			//属性
			self.label_prop_base.text = opt.curProp[1];
			self.label_prop_next.text = opt.nextProp[1];
            self.label_tupoProp.text = [gc.c_prop.heroProp[opt.topCurProp[0]], opt.topCurProp[1]];
		}

        _tap_btn_tupo() {
            var self = this;
            var hec:gd.HeroEntityCtrl = self.data.hec;
            var part = self._getRealPart();
            var opt = hec.getUpStarOpt(part);

            if (!opt.topStoneEnough) {
                var itemId = gc.c_prop.spItemIdKey.starStone;
                if (g_base.GainWay.canBuyFromShop(itemId)) {
                    g_base.GainWayShop.create().setData({
                        itemId: itemId,
                        count: opt.costStone - opt.stone
                    }).show().onClose(function () {
                        self.dataChanged();
                    });
                } else {
                    g_base.GainWay.create().setData({itemId: itemId}).show();
                }
            } else {
                hec.starTop(opt, function (data) {
                    //[是否成功]
                    var isWin = data[0];
                    if (isWin) {
                        self._winEfxPlayer.play();
                    } else {
                        self._failEfxPlayer.play();
                    }
                    self.data.delegate.dataChanged();
                    self.dataChanged();
                }, self);
            }
        }
	}
}
