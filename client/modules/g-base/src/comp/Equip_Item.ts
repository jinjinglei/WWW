module g_comp {
	/**
	 *
	 * @author 
	 *
	 */
	export class Equip_Item extends mo.gui.Comp{

		ico_item:Ico_Item;
		img_green_plus:egret.gui.UIAsset;
		img_num_bg:egret.gui.UIAsset;
		img_red:egret.gui.UIAsset;
		label_plus:mo.gui.Label;
		label_star:mo.gui.Label;
		rect_touch:egret.gui.Rect;

		hec:gd.HeroEntityCtrl;
		equipId;
		part;

		canAdd;
		isEmpty;

		showType:number = 0; //0角色 1强化 2升星 3宝石

		//@override
		_initProp(){
			super._initProp();
			mo.gui.helper.setCompSkinName(this);
		}
		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.ico_item.ico_job_visible = false;
		}
		//@override
		dataChanged(){
			super.dataChanged();
			var self = this;
			self.part = self.get('part');
			self.hec = self.get('hec');
			self.showType = self.get('showType') || 0;

			var equipId = self.hec.getEquipIdByPart(self.part);
			self.equipId = equipId;

			var isEmpty = self.isEmpty = !equipId;
			self.ico_item.visible = !isEmpty;
			self.img_red.visible = false;
			self.label_plus.visible = false;
			self.img_num_bg.visible = false;
			self.label_star.visible = false;
			self.img_green_plus.visible = false;
			self.img_red.visible = false;

			if(!isEmpty){
				var tempId;
				if(gd.equipCtrl.isBreakRing(self.part)){
					tempId = equipId;
				}else{
					tempId = self.hec.getEquipTempIdByPart(self.part);
				}
				self.ico_item.setData({itemId:tempId});
			}

			switch (self.showType) {
				case 0 :
					self._setShowInRole();
					break;
				case 1:
					self._setShowInStr();
					break;
				case 2:
					self._setShowInStar();
					break;
				case 3:
					self._setShowInGem();
					break;
                case 4:
                    self._setShowInRefine();
                    break;
			}
		}


		//在强化系统中显示
		_setShowInStr() {
			var self = this;
			var isEmpty = self.isEmpty;
			if(!isEmpty){
				self.ico_item.label_text.visible = false;
				//设置强化等级
				self._setStrLvl();
				var equipReds = self.hec.isStrengthReddot();
				self.img_red.visible = !isEmpty && equipReds.indexOf(self.part)!=-1;
			}
		}

        //在精炼系统中显示
        _setShowInRefine() {
            var self = this;
            var isEmpty = self.isEmpty;
            if (!isEmpty) {
                self.ico_item.label_text.visible = false;
                //设置强化等级
                self._setStrLvl();
                self.img_red.visible = false;
            }
        }

		//在升星系统中显示
		_setShowInStar() {
			var self = this;
			var isEmpty = self.isEmpty;
			if(!isEmpty){
				self.ico_item.label_text.visible = false;
				//设置升星等级
				self._setStar();
				var equipReds = self.hec.isUpStarReddot();
				self.img_red.visible = !isEmpty && equipReds.indexOf(self.part)!=-1;
			}
		}

		//在升星系统中显示
		_setShowInGem() {
			var self = this;
			var isEmpty = self.isEmpty;
			if(!isEmpty){
				//设置宝石等级
				self._setGemLvl();
				var equipReds = self.hec.isUpGemReddot();
				self.img_red.visible = !isEmpty && equipReds.indexOf(self.part)!=-1;
			}
		}

		//在角色系统中显示
		_setShowInRole(){
			var self = this;
			var isEmpty = self.isEmpty;
			self.label_plus.visible = !isEmpty;
			self.label_star.visible = !isEmpty;
			self.img_num_bg.visible = !isEmpty;

			if(!isEmpty){
				//设置强化等级
				self._setStrLvl();
				//设置星级
				self._setStar();
			}

			//判断是否有可穿戴的装备
			var canAdd = false;
			//是否是特戒
			if(gd.equipCtrl.isBreakRing(self.part)){
				canAdd = isEmpty && (self.hec.getStanbyBreakId(self.part) != null);
				var ringReds =  self.hec.isTringReddot();
				self.img_red.visible = (ringReds.indexOf(self.part)!=-1) && !canAdd;
			}else{
				var equipList = self.hec.getStanbyEquip(self.part);
				canAdd = isEmpty && equipList.length > 0;
				var equipReds = self.hec.isEquipReddot();
				self.img_red.visible = !isEmpty && equipReds.indexOf(self.part)!=-1;
			}
			self.canAdd = canAdd;
			self.img_green_plus.visible = canAdd;
		}

		_setStrLvl(){
			var self = this;
			var strLvl = self.hec.getStrLvlByEquipPart(self.part);
			self.label_plus.text = strLvl;
			self.label_plus.visible = (strLvl != 0);
			self.img_num_bg.visible = (strLvl != 0);
		}

		_setStar(){
			var self = this;
			var star = self.hec.getStarLvlByEquipPart(self.part);
			self.label_star.text = star;
			self.label_star.visible = (star != 0);

		}

		_setGemLvl(){
			var self = this;
			var c_gem = self.hec.getGemInfoByPart(self.part);
			var gem_lvl = c_gem[gc.c_gem_gemLvl];
			self.label_plus.text = gem_lvl;
			self.label_plus.visible = (gem_lvl != 0);
			self.img_num_bg.visible = (gem_lvl != 0);
		}

		_onClick:Function;
		_onClickCtx:any;
		_onClickData:any;
		onClick(listener:Function, ctx?:any, data?:any){
			this._onClick = listener;
			this._onClickCtx = ctx;
			this._onClickData = data || {};
		}

		_tap_rect_touch(event:egret.TouchEvent){
			var self = this;
			if(self._onClick) self._onClick.call(self._onClickCtx, self, event.target, self._onClickData);
		}
	}
}
