/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_gift {


	/**
	 *
	 * @author 
	 *
	 */
	export class GiftForge extends mo.gui.Dlg{
        grp_star;
        label_propL;
        label_propR;
        list_skill;
        label_level;
        label_ziZhi;
        _Item_list_skill;
        effect_gift;
        ico_gift;
        ico_giftWord;

		hec:gd.HeroEntityCtrl;
        gift;
        giftInfo;

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
            self._Item_list_skill = GiftSkillCell;
            self.registerClassByKey(gd.HeroTalismanCtrl, gd.HeroTalismanCtrl.ON_GIFT_CHANGED, self.onGiftChanged);
		}

		dtor(){
			super.dtor();
			var self = this;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
		}

		dataChanged() {
            super.dataChanged();
            var self = this;
            self.hec = self.get('hec');
            self.gift = self.get('gift');//[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            self.giftInfo = self.get('giftInfo');

            self.showStar(self.gift[2]);
            var giftPropObj = gd.heroTalismanCtrl.getPropObjBy(self.giftInfo[gc.t_talisman_id], self.gift[1], self.gift[0]);
            self.label_propL.text = self.getPropStr(giftPropObj, true);
            self.label_propR.text = self.getPropStr(giftPropObj, false);
            self.label_level.text = self.gift[0];
            self.label_ziZhi.text = self.gift[1];

            if (parseInt(self.giftInfo[gc.t_talisman_effectId])>0) {
                self.effect_gift.effectId = self.giftInfo[gc.t_talisman_effectId];
                self.effect_gift.startLoadByKey(self.effect_gift.effectId);
            }else{
                self.ico_gift.source = resHelper.getGiftIcon(self.giftInfo[gc.t_talisman_id]);
            }
            self.ico_giftWord.source = resHelper.getGiftIconWordPath(self.giftInfo[gc.t_talisman_id]);
            self.refreshList("list_skill");
        }

        onGiftChanged(giftId, gift){
            var self = this;
            if(giftId == self.giftInfo[gc.t_talisman_id]){
                self.data.gift = gift;
                self.dataChanged();
            }
        }

        showStar(star:number){
            var self = this;
            for(var i=0; i<star; ++i){
                self.grp_star.getElementAt(i).source = "ico_star";
            }
            for(var i=star; i<self.grp_star.numElements; ++i){
                if(i>0){
                    var t_talismanStar = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanStar, self.giftInfo[gc.t_talisman_id]+i);
                    if(t_talismanStar[gc.t_talismanStar_skillId]){
                        self.grp_star.getElementAt(i).source = "ico_xinjidenji";
                    }else{
                        self.grp_star.getElementAt(i).source = "ico_star_gray";
                    }
                }else{
                    self.grp_star.getElementAt(i).source = "ico_star_gray";
                }
            }
        }

        getPropStr(propObj, isLeft){
            var str = "";
            for(var i=33; i<=40; ++i){
                if(isLeft && i%2==0) continue;
                if(!isLeft && i%2==1) continue;
                str += "[ubb color=#fff000]"+gc.c_prop.heroProp[i]+": "+"[/ubb]";
                str += "[ubb color=#00ff00]+"+(propObj[i]||0)+"[/ubb]";
                str += "\n";
            }
            return str;
        }

        _data_list_skill():any[]{
            var self = this;
            return gd.heroTalismanCtrl.getSkillList(self.giftInfo[gc.t_talisman_id], self.gift[4]);
        }
        _tap_btn_lvUp(){
            var self = this;
            GiftLvUp.create().setData({hec:self.hec, gift:self.gift, giftInfo:self.giftInfo}).show();
        }
        _tap_btn_xiLian(){
            var self = this;
            GiftXiLian.create().setData({hec:self.hec, gift:self.gift, giftInfo:self.giftInfo}).show();
        }
        _tap_btn_upStar(){
            var self = this;
            GiftUpStar.create().setData({hec:self.hec, gift:self.gift, giftInfo:self.giftInfo}).show();
        }

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id: 220}).show();
		}

        _tap_btn_back(){
            var self = this;
            self.close();
        }
	}
}
