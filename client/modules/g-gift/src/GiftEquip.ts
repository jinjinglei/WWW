/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_gift {


	/**
	 *
	 * @author 
	 *
	 */
	export class GiftEquip extends mo.gui.Dlg{

		hec:gd.HeroEntityCtrl;
        list_gift;
        _Item_list_gift;

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
            self._Item_list_gift = GiftEquipCell;
		}

		dtor(){
			super.dtor();
			var self = this;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
			self.hec = self.get('hec');

            self.refreshList("list_gift");
		}
        _data_list_gift():any[]{
            var self = this;
            var talismans = gd.heroTalismanCtrl.getHaveTrump(self.hec.get(gc.dsConsts.HeroEntity.id));
            var gifts = [];
            for(var key in talismans){
                gifts.push({hec:self.hec, gift:talismans[key], giftInfo:mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, key)})
            }
            return gifts;
        }

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id: 219}).show();
		}

        _tap_btn_back(){
            var self = this;
            self.close();
        }
	}
}
