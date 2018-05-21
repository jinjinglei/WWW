module g_comp {
	/**
	 *
	 * @author 
	 *
	 */
	export class Ico_Soul extends mo.gui.Comp{
		ico:egret.gui.UIAsset;
		ico_border:egret.gui.UIAsset;

		label_desc:mo.gui.Label;
		label_name:mo.gui.Label;
		showItemInfoOnClick:boolean;
		hideLabelText:boolean;

		_showEquipName = false;

		//@override
		_initProp(){
			super._initProp();
			mo.gui.helper.setCompSkinName(this);
			this.showItemInfoOnClick = false;
		}
		_childrenCreated(){
			super._childrenCreated();
			var self = this;
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
			self.label_name.width = width;

		}

		getTextHeight(){
			var self = this;
			return self.label_name.height;
		}
	}
}
