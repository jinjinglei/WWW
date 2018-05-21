/**
 * Created by Administrator on 2015/10/7.
 */
module g_mid{
    export class Vip extends mo.gui.Dlg{
        moduleParam:IModuleParam.Vip;

        label_vipInfo;
        label_showVip;
        label_showVip_liBao;
        label_vipCost;
        curVip;
        list_items;
        _Item_list_items;
        vipItems = [];

        label_vip;
        label_nextRecharge;
        label_nextVip;
        bar_recharge;
        grp_next;

        _initProp(){
            super._initProp();
            var self = this;

            self._Item_list_items = g_base.BaseItemCell;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.vip.toString(), self.reset);
        }

        onEnter(){
            super.onEnter();
            var self = this;
            self.reset();
        }

        reset(){
            var self = this;
            var curVip = gd.userCtrl.getVip();
            var nextVip = curVip+1;
            if(nextVip>gd.rechargeCtrl.getMaxVip()){
                nextVip = gd.rechargeCtrl.getMaxVip();
                self.grp_next.visible = false;
            }else{
                self.grp_next.visible = true;
            }
            self.label_vip.text = curVip.toString();
            self.label_nextVip.text = nextVip.toString();
            var nextNeedCost = gd.userCtrl.getNextVipScore()-gd.userCtrl.getVipScore();
            if(nextNeedCost<0){
                nextNeedCost = 0;
            }
            self.label_nextRecharge.text = nextNeedCost.toString();
            self.bar_recharge.maximum = gd.userCtrl.getNextVipScore();
            self.bar_recharge.setValue(gd.userCtrl.getVipScore());

            self.curVip = gd.userCtrl.getVip();
            if(self.moduleParam.showVipLv){
                self.curVip = parseInt(self.moduleParam.showVipLv);
            }
            if(self.curVip<=0){
                self.curVip = 1;
            }
            self.showVipInfo();
        }

        showVipInfo(){
            var self = this;
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, self.curVip);
            //var onlineExpAdd = vipInfo[gc.c_vip_onlineExpAdd];
            //var offlineGoldAdd = vipInfo[gc.c_vip_offlineGoldAdd];
            //var offlineExpAdd = vipInfo[gc.c_vip_offlineExpAdd];
            var addEquipBag = vipInfo[gc.c_vip_addEquipBag];
            //var goldCount = vipInfo[gc.c_vip_goldCount];
            var equipCount = vipInfo[gc.c_vip_equipCount];
            var bossCount = vipInfo[gc.c_vip_bossCount];
            var realmCount = vipInfo[gc.c_vip_realmCount];
            //var arenaCount = vipInfo[gc.c_vip_arenaCount];
            var buyBossCount = vipInfo[gc.c_vip_buyBossCount];
            var openRole2 = vipInfo[gc.c_vip_openRole2];
            var openRole3 = vipInfo[gc.c_vip_openRole3];
            var openRole4 = vipInfo[gc.c_vip_openRole4];
            var bossAutoFight = vipInfo[gc.c_vip_bossAutoFight];
            var worldCount = vipInfo[gc.c_vip_worldCount];
            var guildCount = vipInfo[gc.c_vip_guildCount];
            var openingCount = vipInfo[gc.c_vip_openingCount];
            var coffersBuild = vipInfo[gc.c_vip_coffersBuild];
            var coffersBuff = vipInfo[gc.c_vip_coffersBuff];
            var copyBossAutoFight = vipInfo[gc.c_vip_copyBossAutoFight];
            var isLock = vipInfo[gc.c_vip_isLock];
            var str = "";
            var preVipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, self.curVip-1);

            self.label_vipCost.text = mo.STR.format("充值%s元宝可成为VIP%s",preVipInfo[gc.c_vip_score],self.curVip);
            //if(onlineExpAdd!=0){
            //    str += mo.STR.format("在线经验收益加成[ubb color=red]%s%[/ubb]", Math.floor(onlineExpAdd/10)/10);
            //    str += "\n";
            //}
            //if(offlineGoldAdd!=0){
            //    str += mo.STR.format("离线金币收益加成[ubb color=red]%s%[/ubb]", Math.floor(offlineGoldAdd/10)/10);
            //    str += "\n";
            //}
            //if(offlineExpAdd!=0){
            //    str += mo.STR.format("离线经验收益加成[ubb color=red]%s%[/ubb]", Math.floor(offlineExpAdd/10)/10);
            //    str += "\n";
            //}
            if(addEquipBag!=0){
                str += mo.STR.format("装备背包格子上限增加[ubb color=red]%s[/ubb]格", addEquipBag);
                str += "\n";
            }
            //if(goldCount!=0){
            //    str += mo.STR.format( "每天可购买金币[ubb color=red]%s[/ubb]次", goldCount);
            //    str += "\n";
            //}
            if(equipCount!=0){
                str += mo.STR.format("每天可进入装备副本[ubb color=red]%s[/ubb]次", equipCount);
                str += "\n";
            }
            if(bossCount!=0){
                str += mo.STR.format("每天可进入炼狱副本[ubb color=red]%s[/ubb]次", bossCount);
                str += "\n";
            }
            if(realmCount!=0){
                str += mo.STR.format("每天可进入元神副本[ubb color=red]%s[/ubb]次", realmCount);
                str += "\n";
            }
            //if(arenaCount!=0){
            //    str += mo.STR.format("每天可额外购买竞技场[ubb color=red]%s[/ubb]次", arenaCount);
            //    str += "\n";
            //}
            if(buyBossCount!=0){
                str += mo.STR.format( "每天可购买炼狱副本次数[ubb color=red]%s[/ubb]次", buyBossCount);
                str += "\n";
            }
            if(openingCount!=0){
                str += mo.STR.format( "每日妖莲开光[ubb color=red]%s[/ubb]次",openingCount);
                str += "\n";
            }
            if(openRole2!=0){
                str += mo.STR.format( "可提前解锁第二个角色");
                str += "\n";
            }
            if(openRole3!=0){
                str += mo.STR.format( "可提前解锁第三个角色");
                str += "\n";
            }
            if(openRole4!=0){
                str += mo.STR.format( "在飞升一重后即可进行第四角色解锁");
                str += "\n";
            }
            if(bossAutoFight){
                str += mo.STR.format( "可在世界BOSS挑战中自动参战");
                str += "\n";
            }
            if(isLock){
                str += mo.STR.format( "可以锁定召唤行会BOSS");
                str += "\n";
            }
            if(worldCount!=0){
                str += mo.STR.format( "每日可发送%s次全服红包",worldCount);
                str += "\n";
            }
            if(guildCount!=0){
                str += mo.STR.format( "每日可发送%s次行会红包",guildCount);
                str += "\n";
            }
            if(coffersBuild!=0){
                str += mo.STR.format( "每天可在国库添砖%s次",coffersBuild);
                str += "\n";
            }
            if (coffersBuff != 0) {
                if (coffersBuff != -1) {
                    str += mo.STR.format("每日可激励国库守卫%s次", coffersBuff);
                } else {
                    str += mo.STR.format("可激励国库守卫无限次");
                }
                str += "\n";
            }
            if (copyBossAutoFight != 0) {
                str += "直接开启自动挑战主线BOSS功能";
                str += "\n";
            }
            if(vipInfo[gc.c_vip_copyCountV7]!=0){
                str += mo.STR.format("可进入副本凌云山麓%s次", vipInfo[gc.c_vip_copyCountV7]);
                str += "\n";
            }
            if(vipInfo[gc.c_vip_copyCountV10]!=0){
                str += mo.STR.format("可进入副本媚心洞府%s次", vipInfo[gc.c_vip_copyCountV10]);
                str += "\n";
            }
            if(vipInfo[gc.c_vip_copyCountV14]!=0){
                str += mo.STR.format("可进入副本封魔神殿%s次", vipInfo[gc.c_vip_copyCountV14]);
                str += "\n";
            }
            if(vipInfo[gc.c_vip_copyCountV17]!=0){
                str += mo.STR.format("可进入副本黄泉鬼窟%s次", vipInfo[gc.c_vip_copyCountV17]);
                str += "\n";
            }
            if(vipInfo[gc.c_vip_copyCountV19]!=0){
                str += mo.STR.format("可进入副本海底迷阵%s次", vipInfo[gc.c_vip_copyCountV19]);
                str += "\n";
            }
            if(vipInfo[gc.c_vip_isPickAct]!=0){
                str += mo.STR.format("开启行会元宝上香功能");
                str += "\n";
            }
            if(vipInfo[gc.c_vip_buzhen]!=0){
                str += mo.STR.format("提前开启布阵功能");
                str += "\n";
            }
            //if(vipInfo[gc.c_vip_skipFight]!=0){
            //    str += mo.STR.format("部分战斗中可使用快速战斗功能");
            //    str += "\n";
            //}
            //if(vipInfo[gc.c_vip_autoSmelt]!=0){
            //    str += mo.STR.format("离线期间包裹满后可自动熔炼装备");
            //    str += "\n";
            //}
            //if(vipInfo[gc.c_vip_autoPkOut]!=0){
            //    str += mo.STR.format("离线后可自动PK其他玩家");
            //    str += "\n";
            //}

            str = str.substr(0, str.length-1);

            self.label_vipInfo.text = str;
            self.label_showVip.text = self.curVip.toString();
            self.label_showVip_liBao.text = self.curVip.toString();

            var itemId = vipInfo[gc.c_vip_itemId];
            self.vipItems = [];
            if(itemId != 0){
                var itemsLogicInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_itemLogic, itemId);
                var items = itemsLogicInfo[gc.t_itemLogic_create];
                for(var i=0; i<items.length; ++i){
                    var item = {itemId:items[i][0], count:items[i][1]};
                    self.vipItems.push(item);
                }
            }
            self.refreshList("list_items");
        }

        _data_list_items():any[]{
            var self = this;
            return self.vipItems;
        }
        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            cell.tapShowDetail = true;
        }

        _tap_btn_lookRecharge(){
            var self = this;
            self.close();
            process.nextTick(function(){
                mo.moduleMgr.runModule(g_consts.moduleId.recharge);
            });
        }
        _tap_btn_next(){
            var self = this;
            if(self.curVip<gd.rechargeCtrl.getMaxVip()){
                self.curVip ++;
                self.showVipInfo();
            }
        }
        _tap_btn_prev(){
            var self = this;
            if(self.curVip>1){
                self.curVip --;
                self.showVipInfo();
            }
        }
    }


    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = Vip;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            cb();
        });
    });
}