module g_comp {
	/**
	 *
	 * @author 
	 *
	 */
	export class Ico_Rune extends mo.gui.Comp{
		ico:egret.gui.UIAsset;
		ico_border:egret.gui.UIAsset;
		label_count:mo.gui.Label;

		//@override
		_initProp(){
			super._initProp();
			mo.gui.helper.setCompSkinName(this);
		}
		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.label_count.visible = false;
		}
		//@override
		dataChanged(){
			super.dataChanged();
			var self = this;

			var itemId = self.get('itemId');
			var count = self.get('count');
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
			// 不是装备的时候才需要显示count
			self.label_count.visible = count && type != itemTypeKey.equip;

			var pileCount = self.get('pileCount');
			if(pileCount != null){
				self.label_count.text = pileCount + '/' + count;
			}else{
				self.label_count.text = count;
			}

			//if(type == itemTypeKey.equip){
			//	self.label_text.text = mo.STR.format("Lv.%s", temp[gc.t_item_level]);
			//}else{
			//	self.label_text.text = temp[gc.t_item_name];
			//}
			//self._setEquipState();
		}

		_onClick:Function;
		_onClickCtx:any;
		_onClickData:any;
		onClick(listener:Function, ctx?:any, data?:any){
			this._onClick = listener;
			this._onClickCtx = ctx;
			this._onClickData = data || {};
		}
		_tap_ico_border(event:egret.TouchEvent){
			var self = this;
			if(self._onClick) self._onClick.call(self._onClickCtx, self, event.target, self._onClickData);
		}
		setGray(gray):Ico_Rune{
			return this;
		}
		showTip(flag):Ico_Rune{
			return this;
		}
		_setEquipState():Ico_Rune{
			var self = this;
			var state = self.get('equipState');

			return self;
		}
	}
}
