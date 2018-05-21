/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_worldboss {

	/**
	 *
	 * @author
	 *
	 */
	export class BossResBack extends mo.gui.Dlg{
		list_itmes:egret.gui.List;
		_Item_list_itmes;

		img_empty;
		img_getAll;

		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._layerOpt.shownWithAction = false;
			self._Item_list_itmes = BossResBackItem;
		}

		_childrenCreated(){
			var self = this;
			super._childrenCreated();

		}

		dataChanged(){
			super.dataChanged();
			var self = this;
		}

		_data_list_itmes():any[] {
			var self = this, filter, sorter;
            var list = [140001,
                140002,
                140003,
                140004,
                140005,
                140006,
                140007,
                140008,
                140009,
                140010
            ];
            if(self.img_empty) self.img_empty.visible = list.length == 0;
			return list;
		}

	}
}
