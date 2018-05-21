/**
 * Created by SmallAiTT on 2015/9/14.
 */
module g_guide{
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('judge', handler);

        // 判断当前普通副本id
        handler.set('copyOnBoss', function(params, cmd:mo.GUIDE.Cmd){
            var copyId = params[0];// copyId
            var cmdId1 = params[1];// 不是改副本id，则跳转这个cmd
            var cmdId2 = params[2];// 是则跳转另外一个cmd

            var curWinCount = gd.copyCtrl.getWinningStreak()[0];
            var waveCount = gd.copyCtrl.getCurMaxWaveCount();
            var curCopyId = gd.copyCtrl.getNormalCurCopyId();

            if(curCopyId != copyId) return cmdId1;
            if(curWinCount < waveCount) return cmdId2;
        });

        // 判断场景
        handler.set('scene', function(params, cmd:mo.GUIDE.Cmd){
            var sceneName = params[0];// scene name
            var cmdId1 = params[1];// 不满足则跳转这个cmd
            if(mo.gui.uiScene.__className != sceneName) return cmdId1;
        });

        // 判断当前普通副本id
        handler.set('normalCopy', function(params, cmd:mo.GUIDE.Cmd){
            var copyId = params[0];// 副本id
            var cmdId = params[1];// 通过对应的cmdId
            if(gd.copyCtrl.getNormalCurCopyId() != copyId) return cmdId;
        });

        // 判断是可以更换装备：0身上没任何装备 1身上已有装备
        handler.set('canChgEqp', function(params, cmd:mo.GUIDE.Cmd){
            var hasWearAnyEquip = params[0];// 是否用拥有任何装备
            var cmdId = params[1];// 通过对应的cmdId

            var hec:gd.HeroEntityCtrl = gd.heroCtrl.getMainHeroCtrl();
            var isEquiped = hec.isNormalEquiped();
            if(hasWearAnyEquip == 0 && isEquiped){
                return cmdId;
            }
            if(hasWearAnyEquip == 1 && !isEquiped){
               return cmdId;
            }
        });

        // 判断是否有更换过装备
        handler.set('eqpChged', function(params, cmd:mo.GUIDE.Cmd){
            var everChged = params[0];// 是否更换过
            var cmdId = params[1];// 通过对应的cmdId
            var chged = g_cache.getLocalStorageItem(g_consts.GUIDE_LCK.eqpChged);
            if(everChged == 0 && chged) return cmdId;
            if(everChged == 1 && !chged) return cmdId;
        });

        // 判断是否有更换过装备
        handler.set('everEquiped', function(params, cmd:mo.GUIDE.Cmd){
            var everChged = params[0];// 是否穿戴
            var cmdId = params[1];// 通过对应的cmdId
            var chged = g_cache.getLocalStorageItem(g_consts.GUIDE_LCK.everEquiped);
            if(everChged == 0 && chged) return cmdId;
            if(everChged == 1 && !chged) return cmdId;
        });

        // 判断是否熔炼过:0没有1有
        handler.set('smelting', function(params, cmd:mo.GUIDE.Cmd){
            var hasSmelting = params[0];// 是否用拥有任何装备
            var cmdId = params[1];// 通过对应的cmdId
            var isSmelting = g_cache.getLocalStorageItem(g_consts.GUIDE_LCK.hasSmelting);

            if(hasSmelting == 0 && isSmelting){
                return cmdId;
            }
            if(hasSmelting == 1 && !isSmelting){
               return cmdId;
            }
        });

        // 判断是否购买过:0没有1有
        handler.set('buyEquip', function(params, cmd:mo.GUIDE.Cmd){
            var buyEquip = params[0];// 是否购买过
            var cmdId = params[1];// 通过对应的cmdId
            var isBoughtEquip = g_cache.getLocalStorageItem(g_consts.GUIDE_LCK.buyEquip);

            if(buyEquip == 0 && isBoughtEquip){
                return cmdId;
            }
            if(buyEquip == 1 && !isBoughtEquip){
               return cmdId;
            }
        });

        //选中某个英雄
        handler.set('selectRole', function(params, cmd:mo.GUIDE.Cmd){
            var roleIdxArg = params[0] + '';// scene name
            var cmdId = params[1];// 通过对应的cmdId
            var selectIdx = gd.heroCtrl.curSelRoleIdx;

            var logicNot = (roleIdxArg.indexOf('!') >-1);
            var roleIdx = parseInt(roleIdxArg.replace('!',''));
            if(!logicNot){
                return (selectIdx != roleIdx)? cmdId : null;
            }else{
                return (selectIdx == roleIdx)? cmdId : null;
            }

        });

        //// 升阶引导判断
        //handler.set('upQuality', function(params, cmd:mo.GUIDE.Cmd){
        //    var tid = params[0];// 要升阶的英雄的tid
        //    var qualityToUp = params[1];// 要升到哪一阶
        //    var cmdId = params[2];// 如果当前英雄阶级已经达到了，该跳转到的引导id
        //
        //    var hdc:uw.HeroDataCtrl = uw.userDataCtrl.getHeroDataCtrlByTid(tid);
        //    var quality = hdc.quality;
        //    if(quality >= qualityToUp) return cmdId;// 阶级已经达到了
        //});
        //// 升阶引导时升阶材料是否足够判断
        //handler.set('hasStuff', function(params, cmd:mo.GUIDE.Cmd){
        //    var tid = params[0];// 要升阶的英雄的tid
        //    var cmdId = params[1];// 如果当前英雄升阶材料足够了，该跳转到的引导id
        //    var hdc:uw.HeroDataCtrl = uw.userDataCtrl.getHeroDataCtrlByTid(tid);
        //    if(hdc.canUpQuality(false)) return cmdId;
        //});
        //
        //// 装备强化引导判断
        //handler.set('upEquip', function(params, cmd:mo.GUIDE.Cmd){
        //    var tid = params[0];// 要升阶的英雄的tid
        //    var part = params[1];// 装备部位
        //    var lvlToUp = params[2];// 要升到哪一阶
        //    var cmdId = params[3];// 如果已经升过了，该跳转到的引导id
        //
        //    var hdc:uw.HeroDataCtrl = uw.userDataCtrl.getHeroDataCtrlByTid(tid);
        //    var lvl = uw.equipCtrl.getLvl(hdc, part);
        //    if(lvl >= lvlToUp) return cmdId;
        //});
        //// 装备强化引导判断
        //handler.set('hasEquip', function(params, cmd:mo.GUIDE.Cmd){
        //    var tid = params[0];// 要升阶的英雄的tid
        //    var part = params[1];// 装备部位
        //    var cmdId = params[2];// 如果已经拥有装备，该跳转到的引导id
        //
        //    var hdc:uw.HeroDataCtrl = uw.userDataCtrl.getHeroDataCtrlByTid(tid);
        //    var lvl = uw.equipCtrl.getLvl(hdc, part);
        //    if(lvl >= 0) return cmdId;
        //});
        //
        //
        //// 判断释放已经领取了星级奖励
        //handler.set('gotStarAward', function(params, cmd:mo.GUIDE.Cmd){
        //    var pCopyId = params[0];// 主副本id
        //    var chapter = params[1];// 第几章节
        //    var star = params[2];// 几星奖励
        //    var cmdId = params[3];// 如果已经领过奖励了，该跳转到的引导id
        //
        //    var copyProgressDataCtrl = uw.userDataCtrl.getCopyProgress(pCopyId);
        //    var rewardState = copyProgressDataCtrl.getRewardState(chapter);
        //    if(rewardState[star] == 2) return cmdId;
        //});
        //
        //// 判断释放已经领取了星级奖励
        //handler.set('upStar', function(params, cmd:mo.GUIDE.Cmd){
        //    var tid = params[0];// 要升阶的英雄的tid
        //    var starToUp = params[1];// 要升到的星级数
        //    var cmdId = params[2];// 如果已经拥有装备，该跳转到的引导id
        //
        //    var hdc:uw.HeroDataCtrl = uw.userDataCtrl.getHeroDataCtrlByTid(tid);
        //    if(hdc.getStar() >= starToUp) return cmdId;
        //});
        //
        //// 天赋解锁校验
        //handler.set('unlockTalent', function(params, cmd:mo.GUIDE.Cmd){
        //    var tid = params[0];// 要升阶的英雄的tid
        //    var talentId = params[1];// 要解锁的天赋id
        //    var cmdId = params[2];// 如果对应的天赋已经解锁了，该跳转到的引导id
        //
        //    var hdc:uw.HeroDataCtrl = uw.userDataCtrl.getHeroDataCtrlByTid(tid);
        //    if(hdc.isTalentUnlocked(talentId)) return cmdId;
        //});
        //
        //
        //// 无经验药水判断
        //handler.set('noExpcItem', function(params, cmd:mo.GUIDE.Cmd){
        //    var cmdId = params[0];// 如果没有经验药水，该跳转到的引导id
        //
        //    var t_item = mo.getJSONWithFileName(uw.cfg_t_item);
        //    var items = uw.userDataCtrl.getItems();
        //    var flag = false;// 有没有经验药水
        //    for(var itemId in items){
        //        var itemInfo = t_item[itemId];
        //        if(itemInfo[uw.t_item_type] == uw.c_prop.itemTypeKey.heroExpItem){
        //            if(items[itemId] > 0){
        //                flag = true;
        //                break;
        //            }
        //        }
        //    }
        //
        //    if(!flag) return cmdId;
        //});
        //
        //// 无经验药水判断
        //handler.set('forCream', function(params, cmd:mo.GUIDE.Cmd){
        //    var copyId = params[0];// 精英副本id
        //    var lvlRequired = params[1];// 精英副本开启等级
        //    var cmdId0 = params[2];// 如果已经通关了，该跳转到的引导id
        //    var cmdId1 = params[3];// 如果等级足够了，该跳转到的引导id
        //
        //    if(uw.userDataCtrl.isCopyPassed(copyId)) return cmdId0;
        //    if(uw.userDataCtrl.getLvl() >= lvlRequired) return cmdId1;
        //});
    });
}