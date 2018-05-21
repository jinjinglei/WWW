/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_gift {


	/**
	 *
	 * @author 
	 *
	 */
	export class GiftLvUp extends mo.gui.Dlg{
        label_canLvUp;
        label_canLvUpNext;
        label_cannotLvUp;
        label_ziZhi;
        label_curLv;
        grp_lvUp;
        ico_item;
        label_itemName;
        label_itemNum;
        ico_item1;
        label_itemName1;
        label_itemNum1;
        grp_item1;
        label_curProp;

        grp_next;
        label_nextLv;
        label_nextProp;
        effect_gift;
        ico_gift;
        ico_giftWord;
        label_lvUpNoLv;

		hec:gd.HeroEntityCtrl;
        gift;
        giftInfo;

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
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
            var curLv = self.gift[0];
            var curPorpObj = gd.heroTalismanCtrl.getPropObjBy(self.giftInfo[gc.t_talisman_id], self.gift[1], curLv);
            var t_talismanLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanLvl, self.giftInfo[gc.t_talisman_id]+curLv);
            var t_talismanLvlNext = mo.getJSONWithFileName(gc.cfg_t_talismanLvl)[self.giftInfo[gc.t_talisman_id]+curLv+1];
            var maxZiZhi = gd.heroTalismanCtrl.getMaxZiZhi(self.giftInfo[gc.t_talisman_id], self.gift[3]);

            self.label_curLv.text = curLv;
            self.label_curProp.text = self.getPropStr(curPorpObj);
            self.label_ziZhi.text = [self.gift[1],maxZiZhi];
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);

            var curStar = self.gift[2];
            self.label_canLvUp.text = t_talismanLvl[gc.t_talismanLvl_starLimit];
            var t_talismanLvls = mo.getJSONWithFileName(gc.cfg_t_talismanLvl);
            var curLvStar = t_talismanLvl[gc.t_talismanLvl_starLimit];
            for(var key in t_talismanLvls){
                if(t_talismanLvls[key][gc.t_talismanLvl_starLimit] == curLvStar+1){
                    var nextStarLv:number = parseInt(key)%1000;
                    break;
                }
            }
            if(nextStarLv){
                self.label_canLvUpNext.text = mo.STR.format("%s级后星级上限：%s星", nextStarLv, curLvStar+1);
            }else{
                self.label_canLvUpNext.text = "星级上限已至最高";
            }

            if(curLv>=gameInfo[3]){
                self.label_cannotLvUp.visible = true;
                self.grp_lvUp.visible = false;
                self.grp_next.visible = false;
                self.label_lvUpNoLv.visible = false;
            }else if(gd.userCtrl.getLvl()<t_talismanLvlNext[gc.t_talismanLvl_userLv]) {
                var nextPorpObj = gd.heroTalismanCtrl.getPropObjBy(self.giftInfo[gc.t_talisman_id], self.gift[1], curLv+1);
                self.label_cannotLvUp.visible = false;
                self.grp_lvUp.visible = false;
                self.label_lvUpNoLv.visible = true;
                self.label_lvUpNoLv.text = t_talismanLvlNext[gc.t_talismanLvl_userLv];
                self.grp_next.visible = true;
                self.label_nextLv.text = curLv+1;
                self.label_nextProp.text = self.getPropStr(nextPorpObj);
            }else{
                var nextPorpObj = gd.heroTalismanCtrl.getPropObjBy(self.giftInfo[gc.t_talisman_id], self.gift[1], curLv+1);
                self.label_cannotLvUp.visible = false;
                self.label_lvUpNoLv.visible = false;
                self.grp_lvUp.visible = true;
                self.grp_next.visible = true;
                self.label_nextLv.text = curLv+1;
                self.label_nextProp.text = self.getPropStr(nextPorpObj);
                var needItems = t_talismanLvl[gc.t_talismanLvl_needItems];
                self.ico_item.source = resHelper.getItemIconPath(needItems[0][0]);
                self.label_itemName.text = mo.getJSONWithFileNameAndID(gc.cfg_t_item, needItems[0][0])[gc.t_item_name];
                self.label_itemNum.text = gd.userCtrl.getItemNum(needItems[0][0]) + "/" + needItems[0][1];
                if(needItems.length>1){
                    self.ico_item1.visible = true;
                    self.grp_item1.visible = true;
                    self.ico_item1.source = resHelper.getItemIconPath(needItems[1][0]);
                    self.label_itemName1.text = mo.getJSONWithFileNameAndID(gc.cfg_t_item, needItems[1][0])[gc.t_item_name];
                    self.label_itemNum1.text = gd.userCtrl.getItemNum(needItems[1][0]) + "/" + needItems[1][1];
                }else{
                    self.ico_item1.visible = false;
                    self.grp_item1.visible = false;
                }
            }

            if (parseInt(self.giftInfo[gc.t_talisman_effectId])>0) {
                self.effect_gift.effectId = self.giftInfo[gc.t_talisman_effectId];
                self.effect_gift.startLoadByKey(self.effect_gift.effectId);
            }else{
                self.ico_gift.source = resHelper.getGiftIcon(self.giftInfo[gc.t_talisman_id]);
            }
            self.ico_giftWord.source = resHelper.getGiftIconWordPath(self.giftInfo[gc.t_talisman_id]);
		}

        getPropStr(propObj) {
            var str = "";
            for(var i=33; i<=40; ++i){
                var s = mo.STR.format("%s +%s", gc.c_prop.heroProp[i], propObj[i]||0);
                s += "[/br]";
                str += s;
            }
            return str;
        }

        _tap_btn_lvUp(){
            var self = this;
            var curLv = self.gift[0];
            var t_talismanLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanLvl, self.giftInfo[gc.t_talisman_id]+curLv);

            var needItems = t_talismanLvl[gc.t_talismanLvl_needItems];
            var notEnoughId = 0;
            var needCount = 0;
            if(gd.userCtrl.getItemNum(needItems[0][0]) >= needItems[0][1]){
                if(needItems.length>1){
                    if(gd.userCtrl.getItemNum(needItems[1][0]) < needItems[1][1]){
                        notEnoughId = needItems[1][0];
                        needCount = needItems[1][1]-gd.userCtrl.getItemNum(needItems[1][0]);
                    }
                }
            }else{
                notEnoughId = needItems[0][0];
                needCount = needItems[0][1]-gd.userCtrl.getItemNum(needItems[0][0]);
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
                gd.heroTalismanCtrl.upTrumpLvl(self.hec.get(gc.dsConsts.HeroEntity.tempId), self.giftInfo[gc.t_talisman_id], function (data) {
                    self.data.gift = data;
                    self.dataChanged();
                }, self);
            }
        }

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id: 221}).show();
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
