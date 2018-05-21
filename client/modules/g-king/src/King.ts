/**
 * Created by Administrator on 2016/1/9.
 */

module g_king{

    export class King extends mo.gui.Dlg{
        tab_king:egret.gui.TabBar;
        label_open:mo.gui.Label;
        grp_king:egret.gui.Group;
        grp_cloak:egret.gui.Group;
        grp_welfare:egret.gui.Group;
        grp_rankReward:egret.gui.Group;

        tabCompArr:any;
        tabIndex:number;

        _initProp(){
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;

            self._Item_list_items = g_defarena.DefArenaRankRewardCell;

            self.tabIndex = 0;
            self.tabCompArr = null;
            self.tabCompArr = [];

            self.registerClassByKey(gd.kingCtrl, gc.dsConsts.King.kingGuildId.toString(), self._refreshTabComp);
            self.registerClassByKey(gd.kingCtrl, gc.dsConsts.King.buffOpenNum.toString(), self._refreshTabComp);
            self.registerClassByKey(gd.kingCtrl, gc.dsConsts.King.beWorshipNum.toString(), self._refreshTabComp);
            self.registerClassByKey(gd.kingCtrl, gc.dsConsts.King.buffEndTime.toString(), self._refreshTabComp);

        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

            self.grp_king.visible = false;
            self.grp_cloak.visible = false;
            self.grp_welfare.visible = false;
            self.grp_rankReward.visible = false;

            self.tabCompArr = [self.grp_king,self.grp_cloak,self.grp_welfare, self.grp_rankReward];

            self.tab_king.selectedIndex = 0;
            process.nextTick(function(){
                self._tap_tab_king();
            })

            var itemId = gd.challengeCupCtrl.getIsOpen(function(){
                self.label_open.text = gd.challengeCupCtrl.nextOpenTime && gd.challengeCupCtrl.nextOpenTime.toFormat("MM月DD日HH24:MI");
            },self);
        }

        _data_tab_king():any[]{
            var self = this;
            var tabData;
            if(gd.kingCtrl.isKing())
                tabData = ["tab_txt_bazhutequan","tab_txt_wangzepifeng","tab_txt_xiongdifuli","tab_txt_saisijianglig"];
            else
                tabData = ["tab_txt_mobaibaz","tab_txt_wangzepifeng","tab_txt_xiongdifuli","tab_txt_saisijianglig"];

            return tabData;
        }

        _tap_tab_king(){
            var self = this;
            var selectedIndex = self.tabIndex = self.tab_king.selectedIndex;
            var tabCompArr = self.tabCompArr;
            var curComp = tabCompArr[selectedIndex];
            if(!curComp) return;

            for(var i = 0,l_i = tabCompArr.length;i < l_i;i++){
                var locComp = tabCompArr[i];
                locComp.visible = false;
            }

            self._refreshTabComp();
            curComp.visible = true;
        }

        _refreshTabComp(){
            var self = this,selectedIndex = self.tabIndex;

            if(selectedIndex == 0){
                self._refreshKingGrp();
            }else if(selectedIndex == 1){
                self._refreshCloakGrp();
            }else if(selectedIndex == 2){
                self._refreshWelfarGrp();
            }else if(selectedIndex == 3){
                self._refreshRankRewardGrp();
            }
        }

        _tap_btn_help(){
            var kingData = gd.kingCtrl.getKingData();
            g_base.BaseShowTip.create().setData({id: 29, param1:kingData.buffOpenNeedNum, param2:kingData.dayBuffOpenNum}).show();
        }

        /****************************************************************
        //霸主权利 //膜拜霸主
         ****************************************************************/

        label_king_guild:egret.gui.Label;
        icon_king_guild_bg:egret.gui.UIAsset;
        label_king_vip:egret.gui.BitmapLabel;
        label_king_name:egret.gui.Label;
        label_king_lv:egret.gui.Label;
        label_king_worship_num:mo.gui.Label;
        bar_king:egret.gui.ProgressBar;
        label_king_bar_worship_num:mo.gui.Label;
        label_king_open_num:mo.gui.Label;
        label_king_my_worship_num:mo.gui.Label;
        label_king_des1:mo.gui.Label;
        label_king_des2:mo.gui.Label;
        ico_king_avatar:g_base.RoleAvatar;
        btn_king:egret.gui.Button;
        label_king_today_open_num:mo.gui.Label;
        label_king_worship_award:mo.gui.Label;
        label_king_worship_award_num:mo.gui.Label;
        icon_king_worship_award:egret.gui.UIAsset;
        label_king_worshiped:mo.gui.Label;
        label_king_time:mo.gui.Label;
        ico_king_buff:egret.gui.UIAsset;


        _refreshKingGrp(){
            var self = this;
            var kingData = gd.kingCtrl.getKingData();
            var buffData = gd.kingCtrl.getBuffData();

            if(gd.kingCtrl.isKingInGuild()){
                self.label_king_guild.text = "[" + kingData.kingGuildName + "]";
                self.label_king_guild.visible = true;
                self.icon_king_guild_bg.visible = true;
            }else{
                self.label_king_guild.visible = false;
                self.icon_king_guild_bg.visible = false;
            }
            self.label_king_vip.text = kingData.kingVip + "";
            self.label_king_name.text = kingData.kingName;
            self.label_king_lv.text = "LV." + kingData.kingLvl;
            self.label_king_worship_num.text = kingData.beWorshipCount;//被膜拜的总次数
            self.label_king_des1.text = kingData.buffOpenNeedNum;
            //if(buffData) self.label_king_des2.text = "效果："+ buffData.des + "，每次持续时间" + buffData.conTime + "分钟";
            if(buffData) self.label_king_des2.text = [buffData.des,buffData.conTime];

            console.log("bar_king=================>>>beWorshipNum：%s，buffOpenNeedNum：%s",kingData.beWorshipNum, kingData.buffOpenNeedNum);
            self.label_king_bar_worship_num.text = kingData.beWorshipNum + "/" + kingData.buffOpenNeedNum;
            self.bar_king.value = kingData.beWorshipNum / kingData.buffOpenNeedNum * 100;


            self.ico_king_buff.source = resHelper.getBuffIconPath(gd.kingCtrl.getKingBuffId());

            var avatarData = kingData.avatarData;
            self.ico_king_avatar.setData({
                clothesID:avatarData[0],
                weaponID:avatarData[1],
                wingID:avatarData[2],
                sex:avatarData[3],
                isKing:true
            });

            self.setCDTime(kingData.buffEndCD);

            if(gd.kingCtrl.isKing()){
                //霸主权利
                self.label_king_open_num.visible = true;
                self.label_king_open_num.text = Math.floor(kingData.beWorshipNum / kingData.buffOpenNeedNum);
                self.label_king_my_worship_num.visible = false;
                self.label_king_worship_award.visible = false;
                self.icon_king_worship_award.visible = false;
                self.label_king_worship_award_num.visible = false;
                self.label_king_worshiped.visible = false;
                self.btn_king.icon = "ico_kaiqi";
                self.label_king_today_open_num.visible = true;
                self.label_king_today_open_num.text = kingData.dayBuffOpenNum - kingData.buffOpenNum ;
                self.btn_king.enabled = kingData.dayBuffOpenNum - kingData.buffOpenNum > 0;
                self.btn_king.visible = true;
            }else{
                //膜拜霸主
                var items = gd.kingCtrl.getWorshipItemList();
                var item = items[0];
                //var strTemp = "[ubb color=0xEBC661]%s[/ubb] ";
                //var t = mo.getJSONWithFileNameAndID(gc.cfg_t_item, item.itemId)
                //var awardStr = mo.STR.format(strTemp,item.count);

                self.label_king_open_num.visible = false;
                self.label_king_my_worship_num.visible = true;
                self.label_king_my_worship_num.text = gd.kingCtrl.getMyWorshipNum();
                self.label_king_my_worship_num.visible = false;
                self.btn_king.icon = "ico_mobai";
                self.label_king_today_open_num.visible = false;
                self.btn_king.visible = gd.kingCtrl.getMyWorshipNum() < 1;
                self.label_king_worship_award.visible = gd.kingCtrl.getMyWorshipNum() < 1;
                self.icon_king_worship_award.visible = self.label_king_worship_award.visible;
                self.icon_king_worship_award.source = item && resHelper.getItemIconPath(item.itemId);
                self.label_king_worship_award_num.visible = self.label_king_worship_award.visible;
                self.label_king_worship_award_num.text = item && item.count;
                self.label_king_worshiped.visible = gd.kingCtrl.getMyWorshipNum() >= 1;
            }


        }



        timeTrigger;
        setCDTime(second){
            var self = this;
            if(second>0){
                if(self.timeTrigger){
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
                var timeTrigger = self.timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut, self);
                tm.timer.add(timeTrigger);
            }else{
                self.resetCdTimeView(0);
            }
        }
        timeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.resetCdTimeView(leftMillisecond);
        }
        timeOut(type, beginTime, endTime){
            var self = this;
            self.resetCdTimeView(0);
        }
        resetCdTimeView(leftMillisecond){
            var self = this;
            if(leftMillisecond>0){
                self.label_king_time.visible = true;
                self.ico_king_buff.visible = true;
                self.label_king_time.text = mo.STR.format(mo.getTimeStr(leftMillisecond));
            }else{
                self.label_king_time.visible = false;
                self.ico_king_buff.visible = false;
            }
        }
        
        _tap_btn_king(){
            var self = this;

            if(gd.kingCtrl.isKing()){
                var kingData = gd.kingCtrl.getKingData();
                var buffData = gd.kingCtrl.getBuffData();

                if(kingData.dayBuffOpenNum - kingData.buffOpenNum > 0){
                    if(kingData.beWorshipNum - kingData.buffOpenNeedNum >= 0){
                        mo.showMsg(gc.id_c_msgCode.ifOpenBuff,buffData.name,buffData.conTime,
                            function(){
                                gd.kingCtrl.openBuff(function(){
                                    self._refreshTabComp();
                                },self);
                            });
                    }else{
                        mo.showMsg(gc.id_c_msgCode.noBuffTimes);
                    }
                }
            }else{
                gd.kingCtrl.worship(function(){
                    self._refreshTabComp();
                },self);
            }
        }

        _tap_ico_king_avatar(){
            var self = this;
            mo.moduleMgr.pushModule(g_consts.moduleId.roleEnemyInfo, {userId:gd.kingCtrl.get(gc.dsConsts.King.kingId)});
        }

        /****************************************************************
         //王者披风
         ****************************************************************/

        label_cloak_props:egret.gui.Label;
        label_cloak_des:egret.gui.Label;

        _refreshCloakGrp(){
            var self = this;

            var strTemp = "[ubb color=0xEBC661]%s:[/ubb] [ubb color=0x00DD3D]+%s%[/ubb][/br]";
            var str = "";
            for(var k in gc.c_prop.equipProp){
                str += mo.STR.format(strTemp, gc.c_prop.equipProp[k], gd.kingCtrl.getCloakProAdd()/100);
            }
            self.label_cloak_props.text = str;

            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_help, 30);
            info && (self.label_cloak_des.text = info[gc.c_help_helpText]);
        }

        /****************************************************************
         //兄弟福利
         ****************************************************************/

        label_welfare_guild:egret.gui.Label;
        btn_welfare_get:egret.gui.Button;
        grp_welfare_sub1:egret.gui.Group;//霸主有加入行会
        grp_welfare_sub2:egret.gui.Group;//霸主有没加入行会
        label_welfare_no_get:egret.gui.Label;
        ico_welfare_geted:egret.gui.UIAsset;

        _refreshWelfarGrp(){
            var self = this;

            var welfareList = gd.kingCtrl.getWelfareItemList();
            for(var i = 0;i < 4;i++){
                var iconItem:g_comp.Ico_Item = self["ico_welfare_item_" + i];
                if(!iconItem)continue;
                var data = welfareList[i];
                if(!data){
                    iconItem.visible = false;
                }else{
                    iconItem.visible = true;
                    iconItem.setData(data);
                }
            }


            if(gd.kingCtrl.isKingInGuild()){
                //有加入行会
                var kingData = gd.kingCtrl.getKingData();

                self.grp_welfare_sub1.visible = true;
                self.grp_welfare_sub2.visible = false;
                self.label_welfare_guild.text = "[" + kingData.kingGuildName + "]";

            }else{
                //没加入行会
                self.grp_welfare_sub1.visible = false;
                self.grp_welfare_sub2.visible = true;
            }

            if(gd.kingCtrl.isKing()){
                self.btn_welfare_get.visible = gd.kingCtrl.getMyWelfare() < 1;
                self.ico_welfare_geted.visible = !(gd.kingCtrl.getMyWelfare() < 1);
                self.label_welfare_no_get.visible = false;
            }else{
                if(gd.kingCtrl.isInSameGuild()){
                    self.btn_welfare_get.visible = gd.kingCtrl.getMyWelfare() < 1;
                    self.ico_welfare_geted.visible = !(gd.kingCtrl.getMyWelfare() < 1);
                    self.label_welfare_no_get.visible = false;
                }else{
                    self.btn_welfare_get.visible = false;
                    self.label_welfare_no_get.visible = true;
                    self.ico_welfare_geted.visible = false;
                }
            }
        }

        _tap_btn_welfare_get(){
            var self = this;
            gd.kingCtrl.receiveWelfare(function(){
                self._refreshTabComp();
            },self);
        }

        /****************************************************************
         //擂台排行奖励
         ****************************************************************/

        _Item_list_items;
        item_reward;
        label_desc;
        _data_list_items():any[]{
            var self = this;
            var arenaInfos = mo.getJSONWithFileName(gc.cfg_c_challengeCupRankReward);
            var arenaInfoAry = [];

            for(var key in arenaInfos){
                arenaInfoAry.push(arenaInfos[key]);
            }

            return arenaInfoAry;
        }
        _refreshRankRewardGrp(){
            var self = this;
            var reward = gd.challengeCupCtrl.getRward();
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, reward[0]);
            self.item_reward.setData({itemId: reward[0], count: reward[1]});
            self.label_desc.text = itemInfo[gc.t_item_note];
        }

    }


    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = King;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.IModuleParam, cb){
            gd.kingCtrl.getInfo(function(data){
                if(!data || !data[gc.dsConsts.King.kingId]){//还未产生霸主
                    cb('err');
                    return mo.showMsg(gc.id_c_msgCode.noKingNow, function(){
                        gd.challengeCupCtrl.getIsOpen(function(data){
                            gd.challengeCupCtrl.isOpen?
                                mo.moduleMgr.runModule(g_consts.moduleId.defArena)
                                :mo.moduleMgr.runModule(g_consts.moduleId.defarenaWinner);
                        }, this);
                    });
                }
                cb();
            }, this);
        });

    });
}
