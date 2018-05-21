module g_comp {
	/**
	 *
	 * @author 
	 *
	 */
	export class Ico_Hero extends mo.gui.Comp{
		ico:egret.gui.UIAsset;
		img_red:egret.gui.UIAsset;
		img_light_border:egret.gui.UIAsset;
		img_pos:egret.gui.UIAsset;
		label_unlock_lvl:mo.gui.Label;
		touch_rect:egret.gui.Rect;
		openCfg:any;

		//@override
		_initProp(){
			super._initProp();
			mo.gui.helper.setCompSkinName(this);
		}
		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.img_red.visible = false;
		}
		//@override
		dataChanged(){
			super.dataChanged();
			var self = this;
			var index = self.data.index;
			var heroCtrl = self.data.heroCtrl;
			var hasHero = heroCtrl.hasHeroByIndex(index);
			var isToBeOpen = heroCtrl.isToBeOpen(index);
			var isMy4thRole = heroCtrl.isMy4thRole(index);
			self.enabled = hasHero || isToBeOpen || isMy4thRole;
			self.invalidateSkinState();

			if(isToBeOpen){
				var cfg = self.openCfg = index<3?heroCtrl.getHeroOpenCfg(index):heroCtrl.getSpHeroOpenCfg(index);
				self.label_unlock_lvl.text = mo.STR.format("%s级解锁", index<3?cfg[0]:cfg[0][0]);
			}

			if(hasHero){
                var hec:gd.HeroEntityCtrl = heroCtrl.getHeroByIndex(index);
				self.img_pos.source = mo.STR.format("ico_num%s", heroCtrl.getFightList().indexOf(hec) +1);
                if(isMy4thRole){
                    self.ico.source = mo.STR.format("avatar_%s_%s_1", gc.c_prop.heroJobKey.ys, 0); // job gender type
                }else{
                    self.ico.source = mo.STR.format("avatar_%s_%s_1", hec.job, hec.sex); // job gender type
                }
			}
		}

		setRedPointShow(isShow){
			var self = this;
			if(self.img_red){
				self.img_red.visible = isShow;
			}
		}

		setSelected(selected){
			var self = this;
			if(self.img_light_border) self.img_light_border.visible = selected;
		}

		getCurrentSkinState(){
			var self = this;
			var heroCtrl = self.data.heroCtrl;
			if(!heroCtrl) return 'disabled';
			var index = self.data.index;
			var hasHero = heroCtrl.hasHeroByIndex(index);
			if(hasHero) return 'normal';
			var toBeOpen = heroCtrl.isToBeOpen(index);
			if(toBeOpen) return 'unlock';
			return 'disabled';
		}

		_onClick:Function;
		_onClickCtx:any;
		_onClickData:any;
		onClick(listener:Function, ctx?:any, data?:any){
			this._onClick = listener;
			this._onClickCtx = ctx;
			this._onClickData = data || {};
		}
		_tap_touch_rect(event:egret.TouchEvent){
			var self = this;
			if(self._onClick) self._onClick.call(self._onClickCtx, self, event.target, self._onClickData);
		}

	}
}
