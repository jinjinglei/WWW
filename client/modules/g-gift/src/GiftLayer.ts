/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_gift {


	/**
	 *
	 * @author 
	 *
	 */
	export class GiftLayer extends mo.gui.Layer{

        tab_str;
        grp_detail;
        label_propL;
        label_propR;
        label_fabaoProp;
        label_addCombat;
        label_numGift;
        label_numGongMing;
        label_numSkill;
        ico_gift;

        grp_list;
        list_giftInfo;
        _Item_list_giftInfo;

        grp_merge;
        list_merge;
        _Item_list_merge;

        grp_gongMing;
        list_gongMing;
        _Item_list_gongMing;

		hec:gd.HeroEntityCtrl;

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
			var redKey_intensify = {};
			redKey_intensify[0] = gc.c_prop.pointRedKey.role1_intensify;
			redKey_intensify[1] = gc.c_prop.pointRedKey.role2_intensify;
			redKey_intensify[2] = gc.c_prop.pointRedKey.role3_intensify;

			var redKey_star = {};
			redKey_star[0] = gc.c_prop.pointRedKey.role1_star;
			redKey_star[1] = gc.c_prop.pointRedKey.role2_star;
			redKey_star[2] = gc.c_prop.pointRedKey.role3_star;

			var redKey_gem = {};
			redKey_gem[0] = gc.c_prop.pointRedKey.role1_gem;
			redKey_gem[1] = gc.c_prop.pointRedKey.role2_gem;
			redKey_gem[2] = gc.c_prop.pointRedKey.role3_gem;


			roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);

            self._Item_list_giftInfo = GiftInfoCell;
            self._Item_list_merge = GiftMergeCell;
            self._Item_list_gongMing = GiftGongMingCell;
            self.registerClassByKey(gd.HeroTalismanCtrl, gd.HeroTalismanCtrl.ON_GIFT_CHANGED, self.dataChanged);
            self.registerClassByKey(gd.HeroTalismanCtrl, gd.HeroTalismanCtrl.ON_GIFT_EQUIP_CHANGED, self.dataChanged);
		}

		_heroChanged(hec){
			var self = this;
			self.setData({hec: hec});
		}

		dtor(){
			super.dtor();
			var self = this;
			if(roleChgEmitter)roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
            //默认取第一个英雄数据
            var hec = gd.heroCtrl.getMainHeroCtrl();
            self.setData({hec:hec});

            self.tab_str.selectedIndex = 0;
            self._tap_tab_str();
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
			self.hec = self.get('hec');
			self._tap_tab_str();
		}

		_tap_tab_str(){
			var self = this;
            var selectedIndex = self.tab_str.selectedIndex;
            self.grp_detail.visible = selectedIndex==0;
            self.grp_list.visible = selectedIndex==1;
            self.grp_merge.visible = selectedIndex==2;
            self.grp_gongMing.visible = selectedIndex==3;
            var hecId = self.hec.get(gc.dsConsts.HeroEntity.id);

            if(selectedIndex==0){
                var datas = gd.heroTalismanCtrl.calTaliCombat(hecId);//[总战力，总属性，法宝数，技能数，共鸣数]
                self.label_fabaoProp.text = gc.c_prop.heroJob[self.hec.job];
                self.label_addCombat.text = [gc.c_prop.heroJob[self.hec.job], datas[0]];
                self.label_numGift.text = datas[2];
                self.label_numSkill.text = datas[3];
                self.label_numGongMing.text = datas[4];
                self.label_propL.text = self.getPropStr(datas[1], true);
                self.label_propR.text = self.getPropStr(datas[1], false);
                var curGiftId = gd.heroTalismanCtrl.getTalismanAdorn(hecId);
                self.ico_gift.setData({itemId:curGiftId});
            }else if(selectedIndex==1){
                self.refreshList("list_giftInfo");
            }else if(selectedIndex==2){
                self.refreshList("list_merge");
            }else if(selectedIndex==3){
                self.refreshList("list_gongMing");
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

        _data_list_giftInfo():any[]{
            var self = this;
            var hec = self.hec;
            var giftInfos = mo.getJSONWithFileName(gc.cfg_t_talisman);
            var gifts = [];
            for(var id in giftInfos){
                var giftInfo = giftInfos[id];
                if(giftInfo[gc.t_talisman_job] == hec.job && giftInfo[gc.t_talisman_isOpen]){
                    gifts.push({hec:hec, giftInfo:giftInfo});
                }
            }
            gifts.sort(function(gift1, gift2){
                var talismans = gd.heroTalismanCtrl.getHaveTrump(hec.get(gc.dsConsts.HeroEntity.id));
                var giftId1 = gift1.giftInfo[gc.t_talisman_id];
                var giftId2 = gift2.giftInfo[gc.t_talisman_id];
                var gift1 = talismans[giftId1];//[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
                var gift2 = talismans[giftId2];//[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
                if(gift1!=gift2){
                    return gift1?-1:1;
                }
                var have1 = gd.heroTalismanCtrl.isHaveTrupId(giftId1);
                var have2 = gd.heroTalismanCtrl.isHaveTrupId(giftId2);
                if(have1!=have2){
                    return have1?-1:1;
                }
                return giftId1-giftId2;
            })
            return gifts;
        }
        _data_list_merge():any[]{
            var self = this;
            var hec = self.hec;
            var giftInfos = mo.getJSONWithFileName(gc.cfg_t_talisman);
            var mergeInfos = mo.getJSONWithFileName(gc.cfg_t_talismanCom);
            var giftMerges = [];
            for(var id in giftInfos){
                var giftInfo = giftInfos[id];
                if(giftInfo[gc.t_talisman_job] == hec.job && giftInfo[gc.t_talisman_isOpen]){
                    var mergeInfo = mergeInfos[id];
                    if(mergeInfo){
                        giftMerges.push({hec:hec, giftInfo:giftInfo, mergeInfo:mergeInfo});
                    }
                }
            }
            return giftMerges;
        }
        _data_list_gongMing():any[]{
            var self = this;
            var hec = self.hec;
            var giftInfos = mo.getJSONWithFileName(gc.cfg_t_talisman);
            var gongMingInfos = mo.getJSONWithFileName(gc.cfg_t_talismanRes);
            var giftGongMings = [];
            var gongMingFlags = gd.heroTalismanCtrl.getTalismanFg(hec.get(gc.dsConsts.HeroEntity.id));
            for(var id in giftInfos){
                var giftInfo = giftInfos[id];
                if(giftInfo[gc.t_talisman_job] == hec.job && giftInfo[gc.t_talisman_isOpen]){
                    for(var key in gongMingInfos){
                        var gongMingInfo = gongMingInfos[key];
                        if(gongMingInfo[gc.t_talismanRes_resonance][0]==id){
                            giftGongMings.push({hec:hec, giftInfo:giftInfo, gongMingInfo:gongMingInfo, flags:gongMingFlags[key]});
                        }
                    }
                }
            }
            return giftGongMings;
        }

        _tap_btn_change(){
            var self = this;
            GiftEquip.create().setData({hec:self.hec}).show();
        }

		_tap_btn_help(){
			var self = this;
			var selectedIndex = self.tab_str.selectedIndex;
			var ids = [218, 218, 218, 218];
			g_base.BaseShowTip.create().setData({id: ids[selectedIndex]}).show();
		}

        _tap_btn_back(){
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        }
	}
}
