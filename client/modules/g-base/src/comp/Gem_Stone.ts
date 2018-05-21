module g_comp {
	/**
	 *
	 * @author 
	 *
	 */
	export class Gem_Stone extends mo.gui.Comp{

		label_gem_0:mo.gui.Label;
		label_gem_1:mo.gui.Label;
		label_gem_2:mo.gui.Label;
		label_gem_3:mo.gui.Label;

		img_gem0:mo.gui.UIAsset;
		img_gem1:mo.gui.UIAsset;
		img_gem2:mo.gui.UIAsset;
		img_gem3:mo.gui.UIAsset;

		//@override
		_initProp(){
			super._initProp();
			mo.gui.helper.setCompSkinName(this);
		}

		_getRealPart(){
			var self = this;
			var hec:gd.HeroEntityCtrl = self.data.hec;
			var part = (self.data.part != null)? self.data.part : hec.getFirstEquipedPart();
			part = hec.isPartEquiped(part)? part : hec.getFirstEquipedPart();
			return part;
		}

		//@override
		dataChanged(){
			super.dataChanged();
			var self = this;
			var hec:gd.HeroEntityCtrl = self.get('hec');
			if(!hec) return;
			var part = self._getRealPart();

			if(part == null){
				self.label_gem_0.text = ["未激活",""];
				self.label_gem_1.text = ["未激活",""];
				self.label_gem_2.text = ["未激活",""];
				self.label_gem_3.text = ["未激活",""];

				self.img_gem0.source = "gem_gray";
				self.img_gem1.source = "gem_gray";
				self.img_gem2.source = "gem_gray";
				self.img_gem3.source = "gem_gray";

			}else{
				var c_gem = hec.getGemInfoByPart(part);
				var propName = gc.c_prop.heroProp;
				var _getStr = function(k, v){
					return v > 0 ?
						mo.STR.format("%s+%s", propName[k].replace("加成",""), v)
						: "未激活";
				};

				var _getRes = function(gemId, v){
					return v > 0 ? ("ico_" + gemId) : "gem_gray";
				};
				self.label_gem_0.text = [c_gem[gc.c_gem_items1], mo.STR.format("%s+%s", propName[c_gem[gc.c_gem_effectType1]].replace("加成",""), c_gem[gc.c_gem_effectPro1])];
				self.label_gem_1.text = [c_gem[gc.c_gem_items2], _getStr(c_gem[gc.c_gem_effectType2], c_gem[gc.c_gem_effectPro2])];
				self.label_gem_2.text = [c_gem[gc.c_gem_items3], _getStr(c_gem[gc.c_gem_effectType3], c_gem[gc.c_gem_effectPro3])];
				self.label_gem_3.text = [c_gem[gc.c_gem_items4], _getStr(c_gem[gc.c_gem_effectType4], c_gem[gc.c_gem_effectPro4])];

				self.img_gem0.source = "ico_" + c_gem[gc.c_gem_gemId0];
				self.img_gem1.source = _getRes(c_gem[gc.c_gem_gemId1], c_gem[gc.c_gem_effectPro2]);
				self.img_gem2.source = _getRes(c_gem[gc.c_gem_gemId2], c_gem[gc.c_gem_effectPro3]);
				self.img_gem3.source = _getRes(c_gem[gc.c_gem_gemId3], c_gem[gc.c_gem_effectPro4]);
			}
		}
	}
}
