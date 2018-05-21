module g_comp {
	/**
	 *
	 * @author 
	 *
	 */
	export class Ico_Item extends mo.gui.Comp{
		ico:egret.gui.UIAsset;
		ico_border:egret.gui.UIAsset;
		ico_job:egret.gui.UIAsset;
		ico_equipMark:egret.gui.UIAsset;//特殊装备标示
		label_count:mo.gui.Label;
		label_text:mo.gui.Label;
		showItemInfoOnClick:boolean;
		hideLabelText:boolean;

		_showEquipName = false;
		ico_job_visible;

		//@override
		_initProp(){
			super._initProp();
			mo.gui.helper.setCompSkinName(this);
			this.showItemInfoOnClick = false;
		}
		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.label_count.visible = false;
		}

		public  set showEquipName(show:boolean){
			var self = this;
			self._showEquipName = show;
			if(show && self.data.itemId){
				var temp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, self.data.itemId);
				if(temp[gc.t_item_type] == gc.c_prop.itemTypeKey.equip){
					self.label_text.text = temp[gc.t_item_name];
					self.label_count.visible = true;
					self.label_count.text = mo.STR.format("Lv.%s", temp[gc.t_item_level]);
					var markSrc = self.getIcoMarkSource();
					self.ico_equipMark.visible = markSrc.length > 0;
					if(markSrc.length > 0) self.ico_equipMark.source = markSrc;
				}
			}
		}

		public get showEquipName(){
			return this._showEquipName;
		}

		//设置 传,极,定,超 图标
		getIcoMarkSource(){
			var self = this;
			var source = "";
			var equipCtrl = gd.equipCtrl;
			var isSpecialEquip = equipCtrl.isSpecialEquip(self.data.itemId);
			var isRareEquip = equipCtrl.isRareEquip(self.data.itemId);
			var isCustomEquipByTempId = equipCtrl.isCustomEquipByTempId(self.data.itemId);
			var isSuperEquip = equipCtrl.isSuperEquip(self.data.itemId);
            var isJingEquip = equipCtrl.isJingEquip(self.data.itemId);
			if(isSpecialEquip){
				source = "ico_special";
			}else if(isRareEquip){
				source = "ico_best";
			}else if(isCustomEquipByTempId){
				source = "ico_custom";
			}else if(isSuperEquip){
				source = "ico_cao";
			}else if(isJingEquip){
                source = "ico_jing";
            }
			return source;
		}

		//@override
		dataChanged(){
			super.dataChanged();
			var self = this;
			var itemId = self.get('itemId');
			var count = self.get('count') || 1;
			if(!itemId) return;
			if(typeof self.data == 'number' || typeof self.data == 'string'){
				itemId = self.data;
			}

			//// 获取物品模板
			var temp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
			if(!temp){// TODO
				itemId = 99999;
				temp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
			}
			var type = temp[gc.t_item_type];
			var itemTypeKey = gc.c_prop.itemTypeKey;
			// 更换图标
			self.ico.source = resHelper.getItemIconPath(itemId);
			// 更换边框
			var color = temp[gc.t_item_color];
			self.ico_border.source = resHelper.getBorderByQuality(1, color);
			self.label_count.visible = count > 1;
			if(self.label_count.visible){
				self.label_count.text = "" + count;
			}

			var pileCount = self.get('pileCount');
			if(pileCount != null){
				self.label_count.text = pileCount + '/' + count;
			}else{
				self.label_count.text = count;
			}

			self.ico_job.visible = (self.ico_job_visible != null) ? self.ico_job_visible : (type == itemTypeKey.equip || type==itemTypeKey.gift);
			self.ico_equipMark.visible = false;
			if(self.hideLabelText != null) self.label_text.visible = !self.hideLabelText; //是否隐藏文本标签
			if(type == itemTypeKey.equip){
				if(self.showEquipName){
					self.label_text.text = temp[gc.t_item_name];
					self.label_count.visible = true;
					self.label_count.text = mo.STR.format("Lv.%s", temp[gc.t_item_itemLvl]);
				}else{
					self.label_text.text = mo.STR.format("Lv.%s", temp[gc.t_item_itemLvl]);
				}
				var markSrc = self.getIcoMarkSource();
				self.ico_equipMark.visible = markSrc.length > 0;
				if(markSrc.length > 0) self.ico_equipMark.source = markSrc;
			}else{
				self.label_text.text = temp[gc.t_item_name];
			}
            if(self.ico_job.visible){
                self.ico_job.source = "ico_job" + gd.equipCtrl.getEquipJob(itemId);
            }
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
            if(self.showItemInfoOnClick){
                g_base.BaseItemDetail.create().setData(
                    {bdc: gd.BagDataCtrl.create(self.data.itemId, self._showEquipName? null : self.data.count)}
                ).show();
            }
			if(self._onClick) {
                self._onClick.call(self._onClickCtx, self, event.target, self._onClickData);
            }
		}

		setLineWidth(width){
			var self = this;
			self.label_text.width = width;

		}

		getTextHeight(){
			var self = this;
			return self.label_text.height;
		}
	}
}
