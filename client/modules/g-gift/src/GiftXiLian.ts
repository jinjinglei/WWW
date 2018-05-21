module g_gift {
	export class GiftXiLian extends mo.gui.Dlg{
        label_ziZhi;
        grp_star;
        bar_process:egret.gui.ProgressBar;
        label_max;
        grp_xiLian;
        ico_item;
        label_itemName;
        label_itemNum;
        label_result;
        effect_gift;
        ico_gift;
        ico_giftWord;
        effect_success;
        _successEfxPlayer:uiHelper.EfxPlayer;
        label_cost;
        label_resultSafe;
        btn_safe;

		hec:gd.HeroEntityCtrl;
        gift;
        giftInfo;

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.diamond.toString(), self.diamondChange);
		}

		dtor(){
			super.dtor();
			var self = this;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
            self._successEfxPlayer = uiHelper.EfxPlayer.create(self.effect_success);
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
			self.hec = self.get('hec');
            self.gift = self.get('gift');//[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            self.giftInfo = self.get('giftInfo');
            var curZiZhi = self.gift[1];
            var maxZiZhi = gd.heroTalismanCtrl.getMaxZiZhi(self.giftInfo[gc.t_talisman_id], self.gift[3]);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);

            self.showStar(self.gift[2]);
            self.label_ziZhi.text = [curZiZhi,maxZiZhi];
            self.bar_process.maximum = maxZiZhi;
            self.bar_process.value = curZiZhi;

            self.label_result.visible = false;
            self.label_resultSafe.visible = false;
            if(curZiZhi>=maxZiZhi){
                self.grp_xiLian.visible = false;
                self.label_max.visible = true;
            }else{
                self.grp_xiLian.visible = true;
                self.label_max.visible = false;
                self.ico_item.source = resHelper.getItemIconPath(gameInfo[0]);
                self.label_itemName.text = mo.getJSONWithFileNameAndID(gc.cfg_t_item, gameInfo[0])[gc.t_item_name];
                self.label_itemNum.text = gd.userCtrl.getItemNum(gameInfo[0]) + "/" + gameInfo[1];
            }
            self.label_cost.text = gameInfo[4];

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

        _hideTimerId;
        _tap_btn_xiLian(){
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);
            var notEnoughId = 0;
            var needCount = 0;
            if(gd.userCtrl.getItemNum(gameInfo[0]) < gameInfo[1]){
                notEnoughId = gameInfo[0];
                needCount = gameInfo[1]-gd.userCtrl.getItemNum(gameInfo[0]);
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
                gd.heroTalismanCtrl.baptizeTrump(self.hec.get(gc.dsConsts.HeroEntity.tempId), self.giftInfo[gc.t_talisman_id], self.btn_safe.selected, function (data,addZiZhi) {
                    self.data.gift = data;
                    self.dataChanged();

                    var curZiZhi = self.gift[1];
                    var oldZiZhi = curZiZhi-addZiZhi;
                    var values:any[] = [oldZiZhi];
                    if(addZiZhi>0){
                        values.unshift("[ubb color=green]洗炼成功：[/ubb]");
                        values.push("[ubb color=green]↑"+curZiZhi+"[/ubb]");
                        values.push("[ubb color=green]+"+(addZiZhi)+"[/ubb]");
                        self._successEfxPlayer.play();
                        self.label_result.text = values;
                        self.label_result.visible = true;
                        self.label_resultSafe.visible = false;
                    }else if(addZiZhi<0){
                        values.unshift("[ubb color=red]洗炼失败：[/ubb]");
                        values.push("[ubb color=red]↓"+curZiZhi+"[/ubb]");
                        values.push("[ubb color=red]"+(addZiZhi)+"[/ubb]");
                        self.label_result.text = values;
                        self.label_result.visible = true;
                        self.label_resultSafe.visible = false;
                    }else{
                        self.label_result.visible = false;
                        self.label_resultSafe.visible = true;
                    }

                    clearTimeout(self._hideTimerId);
                    self._hideTimerId = setTimeout(function(){
                        clearTimeout(self._hideTimerId);
                        self.label_result.visible = false;
                        self.label_resultSafe.visible = false;
                    },2000);
                }, self);
            }
        }

        _tab_btn_safe(){
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);
            if(gd.userCtrl.getDiamond()<gameInfo[4]){
                self.btn_safe.selected = false;
                mo.showMsg(gc.id_c_msgCode.noDiamond);
            }
        }
        diamondChange(){
            var self = this;
            if(self.btn_safe.selected){
                var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.trumpCfg);
                if(gd.userCtrl.getDiamond()<gameInfo[4]){
                    self.btn_safe.selected = false;
                    mo.showMsg(gc.id_c_msgCode.noDiamond);
                }
            }
        }

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id: 222}).show();
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
