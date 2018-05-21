/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_gift {


	/**
	 *
	 * @author 
	 *
	 */
	export class GiftUpStar extends mo.gui.Dlg{
        ico_item;
        label_itemName;
        label_itemNum;
        grp_star;
        list_skill;
        label_ziZhi;
        label_cannotLvUp;
        label_max;
        grp_upStar;
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
            self.gift = self.get('gift');//[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            self.giftInfo = self.get('giftInfo');
            var curStar = self.gift[2];
            var t_talismanStar = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanStar, self.giftInfo[gc.t_talisman_id]+curStar);
            var t_talismanLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanLvl, self.giftInfo[gc.t_talisman_id]+self.gift[0]);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);
            var maxZiZhi = gd.heroTalismanCtrl.getMaxZiZhi(self.giftInfo[gc.t_talisman_id], self.gift[3]);

            self.showStar(self.gift[2]);
            self.label_ziZhi.text = maxZiZhi;
            if(curStar>=gameInfo[2]){
                self.label_max.visible = true;
                self.label_cannotLvUp.visible = false;
                self.grp_upStar.visible = false;
            }else if(curStar>=t_talismanLvl[gc.t_talismanLvl_starLimit]){
                self.label_max.visible = false;
                self.label_cannotLvUp.visible = true;
                self.grp_upStar.visible = false;
                for(var i=self.gift[0]; i<=gameInfo[3]; ++i){
                    t_talismanLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanLvl, self.giftInfo[gc.t_talisman_id]+i);
                    if(t_talismanLvl[gc.t_talismanLvl_starLimit]>curStar){
                        break;
                    }
                }
                self.label_cannotLvUp.text = [i, t_talismanLvl[gc.t_talismanLvl_starLimit]];
            }else{
                self.label_max.visible = false;
                self.label_cannotLvUp.visible = false;
                self.grp_upStar.visible = true;
                var needItem = t_talismanStar[gc.t_talismanStar_needItems][0];
                self.ico_item.source = resHelper.getItemIconPath(needItem[0]);
                self.label_itemName.text = mo.getJSONWithFileNameAndID(gc.cfg_t_item, needItem[0])[gc.t_item_name];
                self.label_itemNum.text = gd.userCtrl.getItemNum(needItem[0]) + "/" + needItem[1];
            }
            self.refreshList("list_skill");

            if (parseInt(self.giftInfo[gc.t_talisman_effectId])>0) {
                self.effect_gift.effectId = self.giftInfo[gc.t_talisman_effectId];
                self.effect_gift.startLoadByKey(self.effect_gift.effectId);
            }else{
                self.ico_gift.source = resHelper.getGiftIcon(self.giftInfo[gc.t_talisman_id]);
            }
            self.ico_giftWord.source = resHelper.getGiftIconWordPath(self.giftInfo[gc.t_talisman_id]);
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

        _data_list_skill():any[]{
            var self = this;
            return gd.heroTalismanCtrl.getSkillList(self.giftInfo[gc.t_talisman_id], self.gift[4]);
        }

        _tap_btn_upStar(){
            var self = this;
            var curStar = self.gift[2];
            var t_talismanStar = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanStar, self.giftInfo[gc.t_talisman_id]+curStar);
            var needItem = t_talismanStar[gc.t_talismanStar_needItems][0];
            var notEnoughId = 0;
            var needCount = 0;
            if(gd.userCtrl.getItemNum(needItem[0]) < needItem[1]){
                notEnoughId = needItem[0];
                needCount = needItem[1]-gd.userCtrl.getItemNum(needItem[0]);
            }

            if(notEnoughId){
                var itemId = notEnoughId;
                if(g_base.GainWay.canBuyFromShop(itemId)){
                    g_base.GainWayShop.create().setData({itemId:itemId, count:needCount}).show().onClose(function(){
                        self.dataChanged();
                    });
                }else{
                    g_base.GainWay.create().setData({itemId:itemId}).show();
                }
            }else {
                gd.heroTalismanCtrl.upTrumpStar(self.hec.get(gc.dsConsts.HeroEntity.tempId), self.giftInfo[gc.t_talisman_id], function (datas) {
                    self.data.gift = datas[0];
                    self.dataChanged();

                    GiftUpStarResult.create().setData({hec:self.hec, gift:self.gift, giftInfo:self.giftInfo, isGetSkill:datas[1], isHighStar:datas[2]}).show();
                }, self);
            }
        }
        _tap_btn_reset(){
            var self = this;
            mo.showMsg(gc.id_c_msgCode.reRecast,function(){
                gd.heroTalismanCtrl.recastTrump(self.hec.get(gc.dsConsts.HeroEntity.tempId), self.giftInfo[gc.t_talisman_id], function(data){
                    self.data.gift = data;
                    self.dataChanged();
                }, self);
            });
        }

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id: 223}).show();
		}

        _tap_btn_back(){
            var self = this;
            self.close();
        }
        _tap_btn_buyLingYun(){
            GiftBuyLingYun.create().show();
        }
	}
}
