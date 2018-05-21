/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_gift {


	/**
	 *
	 * @author 
	 *
	 */
	export class GiftMerge extends mo.gui.Dlg{
        list_skill;
        ico_gift0;
        ico_gift1;
        label_name0;
        label_name1;
        label_lv0;
        label_lv1;
        label_no0;
        label_no1;
        _Item_list_skill;
        effect_gift;
        ico_gift;
        ico_giftWord;

		hec:gd.HeroEntityCtrl;
        giftInfo;

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
            self._Item_list_skill = GiftSkillCell;
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
            self.giftInfo = self.get('giftInfo');

            var mergeInfos = mo.getJSONWithFileName(gc.cfg_t_talismanCom);
            var mergeInfo = mergeInfos[self.giftInfo[gc.t_talisman_id]];
            var item0 = mergeInfo[gc.t_talismanCom_reqItems1];
            var item1 = mergeInfo[gc.t_talismanCom_reqItems2];

            self.ico_gift0.setData({itemId:item0});
            self.ico_gift0.label_giftTitle.visible = false;
            self.ico_gift1.setData({itemId:item1});
            self.ico_gift1.label_giftTitle.visible = false;
            var t_gift = mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, item0);
            self.label_name0.text = [mergeInfo[gc.t_talismanCom_needStar1], t_gift[gc.t_talisman_name]];
            self.label_lv0.text = mergeInfo[gc.t_talismanCom_needLvl1];
            var t_gift = mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, item1);
            self.label_name1.text = [mergeInfo[gc.t_talismanCom_needStar2], t_gift[gc.t_talisman_name]];
            self.label_lv1.text = mergeInfo[gc.t_talismanCom_needLvl2];
            var gift0 = gd.heroTalismanCtrl.getGiftById(item0);
            if(gift0){
                //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
                if(gift0[0]<mergeInfo[gc.t_talismanCom_needLvl1]){
                    self.label_no0.text = "(等级未达标)";
                }else if(gift0[2]<mergeInfo[gc.t_talismanCom_needStar1]){
                    self.label_no0.text = "(星级未达标)";
                }else{
                    self.label_no0.text = "";
                }
            }else{
                self.label_no0.text = "(未激活)";
            }
            var gift1 = gd.heroTalismanCtrl.getGiftById(item1);
            if(gift1){
                //[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
                if(gift1[0]<mergeInfo[gc.t_talismanCom_needLvl2]){
                    self.label_no1.text = "(等级未达标)";
                }else if(gift1[2]<mergeInfo[gc.t_talismanCom_needStar2]){
                    self.label_no1.text = "(星级未达标)";
                }else{
                    self.label_no1.text = "";
                }
            }else{
                self.label_no1.text = "(未激活)";
            }
            if (parseInt(self.giftInfo[gc.t_talisman_effectId])>0) {
                self.effect_gift.effectId = self.giftInfo[gc.t_talisman_effectId];
                self.effect_gift.startLoadByKey(self.effect_gift.effectId);
            }else{
                self.ico_gift.source = resHelper.getGiftIcon(self.giftInfo[gc.t_talisman_id]);
            }
            self.ico_giftWord.source = resHelper.getGiftIconWordPath(self.giftInfo[gc.t_talisman_id]);
		}
        _data_list_skill():any[]{
            var self = this;
            return gd.heroTalismanCtrl.getSkillList(self.giftInfo[gc.t_talisman_id]);
        }

        _tap_btn_merge(){
            var self = this;
            gd.heroTalismanCtrl.compoundTrump(self.hec.get(gc.dsConsts.HeroEntity.tempId), self.giftInfo[gc.t_talisman_id], function(data){
                self.dataChanged();
            }, self)
        }

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id: 224}).show();
		}

        _tap_btn_back(){
            var self = this;
            self.close();
        }
	}
}
