/**
 * Created by SmallAiTT on 2015/9/14.
 */
var g_guide;
(function (g_guide) {
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('afterNext', handler);
        handler.set('inPCopy', function (params, cmd) {
            var layer = cmd.layer;
            layer.moveEnabled = true; // 设置成支持手势滚动
        });
    });
})(g_guide || (g_guide = {}));

/**
 * Created by SmallAiTT on 2015/9/14.
 */
var g_guide;
(function (g_guide) {
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('afterShow', handler);
    });
})(g_guide || (g_guide = {}));

/**
 * Created by SmallAiTT on 2015/9/14.
 */
var g_guide;
(function (g_guide) {
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('beforeNext', handler);
    });
})(g_guide || (g_guide = {}));

/**
 * Created by SmallAiTT on 2015/9/14.
 */
var g_guide;
(function (g_guide) {
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('beforeShow', handler);
        // 该处理器需要使用async模式
        handler.set('scrollTo', function (params, cmd, cb) {
            var layer = cmd.layer;
            var scrollTo = layer.scrollTo;
            params.push(cb);
            if (scrollTo)
                scrollTo.apply(layer, params);
            else
                cb();
        });
        handler.set('inPCopy', function (params, cmd, cb) {
            var layer = cmd.layer;
            var pCopyId = params[0]; // 获取到主副本id
            layer.moveEnabled = false; // 设置成不支持手势滚动
            layer.scrollTo(pCopyId, cb);
        });
        handler.set('scene', function (params, cmd, cb) {
            var sceneName = params[0];
            var cmdId = params[1];
            var jumpCmd;
            if (sceneName.indexOf("!") > -1) {
                if (mo.gui.uiScene.__className == sceneName.substr(sceneName.indexOf("!") + 1))
                    jumpCmd = cmdId;
            }
            else {
                if (mo.gui.uiScene.__className != sceneName)
                    jumpCmd = cmdId;
            }
            if (jumpCmd) {
                cb(cmdId);
            }
            else {
                cb();
            }
        });
    });
})(g_guide || (g_guide = {}));

/**
 * Created by SmallAiTT on 2015/9/14.
 */
var g_guide;
(function (g_guide) {
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('judge', handler);
        // 判断当前普通副本id
        handler.set('copyOnBoss', function (params, cmd) {
            var copyId = params[0]; // copyId
            var cmdId1 = params[1]; // 不是改副本id，则跳转这个cmd
            var cmdId2 = params[2]; // 是则跳转另外一个cmd
            var curWinCount = gd.copyCtrl.getWinningStreak()[0];
            var waveCount = gd.copyCtrl.getCurMaxWaveCount();
            var curCopyId = gd.copyCtrl.getNormalCurCopyId();
            if (curCopyId != copyId)
                return cmdId1;
            if (curWinCount < waveCount)
                return cmdId2;
        });
        // 判断场景
        handler.set('scene', function (params, cmd) {
            var sceneName = params[0]; // scene name
            var cmdId1 = params[1]; // 不满足则跳转这个cmd
            if (mo.gui.uiScene.__className != sceneName)
                return cmdId1;
        });
        // 判断当前普通副本id
        handler.set('normalCopy', function (params, cmd) {
            var copyId = params[0]; // 副本id
            var cmdId = params[1]; // 通过对应的cmdId
            if (gd.copyCtrl.getNormalCurCopyId() != copyId)
                return cmdId;
        });
        // 判断是可以更换装备：0身上没任何装备 1身上已有装备
        handler.set('canChgEqp', function (params, cmd) {
            var hasWearAnyEquip = params[0]; // 是否用拥有任何装备
            var cmdId = params[1]; // 通过对应的cmdId
            var hec = gd.heroCtrl.getMainHeroCtrl();
            var isEquiped = hec.isNormalEquiped();
            if (hasWearAnyEquip == 0 && isEquiped) {
                return cmdId;
            }
            if (hasWearAnyEquip == 1 && !isEquiped) {
                return cmdId;
            }
        });
        // 判断是否有更换过装备
        handler.set('eqpChged', function (params, cmd) {
            var everChged = params[0]; // 是否更换过
            var cmdId = params[1]; // 通过对应的cmdId
            var chged = g_cache.getLocalStorageItem(g_consts.GUIDE_LCK.eqpChged);
            if (everChged == 0 && chged)
                return cmdId;
            if (everChged == 1 && !chged)
                return cmdId;
        });
        // 判断是否有更换过装备
        handler.set('everEquiped', function (params, cmd) {
            var everChged = params[0]; // 是否穿戴
            var cmdId = params[1]; // 通过对应的cmdId
            var chged = g_cache.getLocalStorageItem(g_consts.GUIDE_LCK.everEquiped);
            if (everChged == 0 && chged)
                return cmdId;
            if (everChged == 1 && !chged)
                return cmdId;
        });
        // 判断是否熔炼过:0没有1有
        handler.set('smelting', function (params, cmd) {
            var hasSmelting = params[0]; // 是否用拥有任何装备
            var cmdId = params[1]; // 通过对应的cmdId
            var isSmelting = g_cache.getLocalStorageItem(g_consts.GUIDE_LCK.hasSmelting);
            if (hasSmelting == 0 && isSmelting) {
                return cmdId;
            }
            if (hasSmelting == 1 && !isSmelting) {
                return cmdId;
            }
        });
        // 判断是否购买过:0没有1有
        handler.set('buyEquip', function (params, cmd) {
            var buyEquip = params[0]; // 是否购买过
            var cmdId = params[1]; // 通过对应的cmdId
            var isBoughtEquip = g_cache.getLocalStorageItem(g_consts.GUIDE_LCK.buyEquip);
            if (buyEquip == 0 && isBoughtEquip) {
                return cmdId;
            }
            if (buyEquip == 1 && !isBoughtEquip) {
                return cmdId;
            }
        });
        //选中某个英雄
        handler.set('selectRole', function (params, cmd) {
            var roleIdxArg = params[0] + ''; // scene name
            var cmdId = params[1]; // 通过对应的cmdId
            var selectIdx = gd.heroCtrl.curSelRoleIdx;
            var logicNot = (roleIdxArg.indexOf('!') > -1);
            var roleIdx = parseInt(roleIdxArg.replace('!', ''));
            if (!logicNot) {
                return (selectIdx != roleIdx) ? cmdId : null;
            }
            else {
                return (selectIdx == roleIdx) ? cmdId : null;
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
})(g_guide || (g_guide = {}));

/**
 * Created by SmallAiTT on 2015/9/14.
 */
var g_guide;
(function (g_guide) {
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('condition', handler);
        // 判断Boss是否出现
        handler.set('onBoss', function (params, cmd) {
            //没有dlg遮挡
            if (g_guide.hasDlg())
                return false;
            var tray = mo.gui.infoScene.getTray('msg');
            if (tray.numElements > 0)
                return false;
            var copyId = params[0]; // 副本id
            var curWinCount = gd.copyCtrl.getWinningStreak()[0];
            var waveCount = gd.copyCtrl.getCurMaxWaveCount();
            var curCopyId = gd.copyCtrl.getNormalCurCopyId();
            if (curCopyId != copyId || curWinCount < waveCount)
                return false;
            return true;
        });
        // 判断是可以更换装备：0身上没任何装备 1身上已有装备
        handler.set('canChgEqp', function (params, cmd) {
            //没有dlg遮挡
            if (g_guide.hasDlg())
                return false;
            var hasWearAnyEquip = params[0]; // 是否用拥有任何装备
            var hec = gd.heroCtrl.getMainHeroCtrl();
            var isEquiped = hec.isNormalEquiped();
            if (hasWearAnyEquip == 0 && !isEquiped) {
                var partKey = gc.c_prop.heroEquipIndex;
                for (var part in partKey) {
                    var _part = parseInt(part);
                    if (hec.getStanbyEquip(_part).length > 0)
                        return true;
                }
                return false;
            }
            if (hasWearAnyEquip == 1 && isEquiped) {
                var partKey = gc.c_prop.heroEquipIndex;
                for (var part in partKey) {
                    var _part = parseInt(part);
                    var isEquiped = hec.isPartEquiped(_part);
                    var equipReds = hec.isEquipReddot();
                    var red = isEquiped && equipReds.indexOf(_part) != -1;
                    if (red)
                        return true;
                }
            }
            return false;
        });
        // 判断场景
        handler.set('scene', function (params, cmd) {
            var sceneName = params[0]; // scene name
            if (sceneName.indexOf("!") > -1) {
                if (mo.gui.uiScene.__className != sceneName.substr(sceneName.indexOf("!") + 1))
                    return true;
            }
            else {
                if (mo.gui.uiScene.__className == sceneName)
                    return true;
            }
        });
        // 是否有dlg遮挡
        handler.set('hasDlg', function (params, cmd) {
            var hasDlg = params[0];
            var tray = mo.gui.uiScene.getTray('dlg');
            if (hasDlg == 0 && g_guide.hasDlg())
                return false;
            if (hasDlg == 1 && !g_guide.hasDlg())
                return false;
            return true;
        });
        // 是否有可以熔炼的装备
        handler.set('hasSmelting', function (params, cmd) {
            var hasSmelting = params[0];
            var equipArr = gd.equipCtrl.getSmeltArr(true);
            if (hasSmelting == 0 && equipArr.length > 0)
                return false;
            if (hasSmelting == 1 && equipArr.length <= 0)
                return false;
            return true;
        });
    });
})(g_guide || (g_guide = {}));

var g_guide;
(function (g_guide) {
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('next', handler);
        //
        //// 进入布阵界面之前就要进行判断的
        //handler.set('selectRole', function(params, cmd:mo.GUIDE.Cmd){
        //    var defaultId = params[0];// 第一参数为默认的引导id，即为所有遍历都不成功的时候处理
        //    var matrixOpt = uw.userDataCtrl.getMatrixByType(params[1]);// 第二个参数为副本布阵类型
        //    var cfgs = params.slice(2, params.length);// 获取到[tid1,id1,tid2,id2]信息
        //    var tids = matrixOpt.heroIdList;//获取到现在已经上场的英雄列表
        //    if(tids.length == 5) return defaultId;// 已经有5个上场了就直接返回了
        //    while(cfgs.length){
        //        var tid = cfgs.shift();
        //        var gid = cfgs.shift();
        //        if(tids.indexOf(tid) < 0) return gid;
        //    }
        //    return defaultId;
        //});
        //// 进入布阵界面之后判断
        //handler.set('selectRole1', function(params, cmd:mo.GUIDE.Cmd){
        //    var defaultId = params[0];// 第一参数为默认的引导id，即为所有遍历都不成功的时候处理
        //    var cfgs = params.slice(1, params.length);// 获取到[tid1,id1,tid2,id2]信息
        //    var layer:any = cmd.layer;
        //    var tids = layer.tids;//获取到现在已经上场的英雄列表
        //    if(tids.length == 5) return defaultId;// 已经有5个上场了就直接返回了
        //    while(cfgs.length){
        //        var tid = cfgs.shift();
        //        var gid = cfgs.shift();
        //        if(tids.indexOf(tid) < 0) return gid;
        //    }
        //    return defaultId;
        //});
        //
        //
        //// 是否可升阶判断
        //handler.set('canUpQuality', function(params, cmd:mo.GUIDE.Cmd){
        //    var tid = params[0];// 要升阶的英雄的tid
        //    var qualityToUp = params[1];// 要升到哪一阶
        //    var cmdId1 = params[2];// 如果当前英雄阶级已经达到了，该跳转到的引导id
        //    var cmdId2 = params[3];// 如果材料都装配足够了，该跳转的引导id
        //    var cmdId3 = params[4];// 如果材料还没装配，该跳转的引导id
        //
        //    var hdc:uw.HeroDataCtrl = uw.userDataCtrl.getHeroDataCtrlByTid(tid);
        //    var quality = hdc.quality;
        //    if(quality >= qualityToUp) return cmdId1;// 阶级已经达到了
        //    if(hdc.canUpQuality(false)) return cmdId2;
        //    return cmdId3;
        //});
    });
})(g_guide || (g_guide = {}));

/**
 * Created by SmallAiTT on 2015/9/14.
 */
var g_guide;
(function (g_guide) {
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('node', handler);
        // 获取可以穿戴部位节点
        handler.set('getCanEquipPart', function (params, cmd) {
            if (cmd.cfg.option.getCanEquipPart != null)
                return cmd.cfg.option.getCanEquipPart;
            var hec = gd.heroCtrl.getMainHeroCtrl();
            var partKey = gc.c_prop.heroEquipIndex;
            for (var part in partKey) {
                if (hec.getStanbyEquip(part).length > 0) {
                    //console.log("eq_" + part);
                    cmd.cfg.option.getCanEquipPart = 'eq_' + part;
                    return 'eq_' + part;
                }
            }
            return null;
        });
        // 获取更换部位节点
        handler.set('getCanChgPart', function (params, cmd) {
            if (cmd.cfg.option.getCanChgPart != null)
                return cmd.cfg.option.getCanChgPart;
            var hec = gd.heroCtrl.getMainHeroCtrl();
            var partKey = gc.c_prop.heroEquipIndex;
            for (var part in partKey) {
                var _part = parseInt(part);
                var isEquiped = hec.isPartEquiped(_part);
                var equipReds = hec.isEquipReddot();
                var red = isEquiped && equipReds.indexOf(_part) != -1;
                if (red) {
                    //console.log("eq_" + part);
                    cmd.cfg.option.getCanChgPart = 'eq_' + part;
                    return 'eq_' + part;
                }
            }
            return null;
        });
        // 获取装备按钮
        handler.set('getEquipBtn', function (params, cmd) {
            var idx = params[0]; //第几个
            var layer = cmd.mgr.getLayer(cmd.cfg.layer);
            var btn_equip = mo.gui.helper.getChild(mo.gui.helper.getChild(layer, 'eqp_cell_' + idx), 'btn_equip');
            return btn_equip;
        });
        // 获取购买按钮
        handler.set('getBuyBtn', function (params, cmd) {
            var idx = params[0]; //第几个
            var layer = cmd.mgr.getLayer(cmd.cfg.layer);
            var btn_equip = mo.gui.helper.getChild(mo.gui.helper.getChild(layer, 'shop_cell_' + idx), 'btn_buy');
            return btn_equip;
        });
        // 获取可以金币购买的按钮
        handler.set('getGoldBuyBtn', function (params, cmd) {
            var idx = gd.shopCtrl.canGoldBuyEquipIdx; //第几个
            var layer = cmd.mgr.getLayer(cmd.cfg.layer);
            var btn_equip = mo.gui.helper.getChild(mo.gui.helper.getChild(layer, 'shop_cell_' + idx), 'btn_buy');
            return btn_equip;
        });
        // 获取英雄头像
        handler.set('getHeroHead', function (params, cmd) {
            var idx = params[0]; //第几个
            var layer = cmd.mgr.getLayer(cmd.cfg.layer);
            var head_icon = layer['ico_hero' + idx];
            return head_icon;
        });
    });
})(g_guide || (g_guide = {}));

/**
 * Created by SmallAiTT on 2015/9/14.
 */
var g_guide;
(function (g_guide) {
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('rectNode', handler);
        // 判断释放已经领取了星级奖励
        handler.set('getExpcCell', function (params, cmd) {
            var layer = cmd.layer;
            //var t_item = mo.getJSONWithFileName(uw.cfg_t_item);
            //var items = uw.userDataCtrl.getItems();
            //var expcItemId = null;
            //for(var itemId in items){
            //    var itemInfo = t_item[itemId];
            //    if(itemInfo[uw.t_item_type] == uw.c_prop.itemTypeKey.heroExpItem){
            //        if(items[itemId] > 0){
            //            expcItemId = itemId;
            //            break;
            //        }
            //    }
            //}
            //
            //if(!expcItemId) return null;
            //return mo.gui.helper.getChild(layer, 'cell_' + expcItemId);
        });
    });
})(g_guide || (g_guide = {}));

var g_guide;
(function (g_guide) {
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('revert', handler);
        // 判断副本是否已经通过了
        handler.set('copyPassed', function (params, cmd) {
            var copyId = params[0]; // 副本id
            var trueCmdId = params[1]; // 通过对应的cmdId
            var falseCmdId = params[2]; // 没通过对应的cmdId
            //return uw.userDataCtrl.isCopyPassed(copyId) ? trueCmdId : falseCmdId;
        });
    });
})(g_guide || (g_guide = {}));

/**
 * Created by lihex on 12/29/15.
 */
var g_guide;
(function (g_guide) {
    function hasDlg() {
        //没有dlg遮挡
        var tray = mo.gui.uiScene.getTray('dlg');
        if (tray.numElements > 0 && (tray.getChildAt(0)).__className != "EnterCopyEffect")
            return true;
        return false;
    }
    g_guide.hasDlg = hasDlg;
})(g_guide || (g_guide = {}));

/**
 * Created by SmallAiTT on 2015/8/31.
 */
var g_guide;
(function (g_guide) {
    logger.initLogger(g_guide, "g-guide");
    logger.setLvl("g-guide", 4);
    var CmdCfg = (function (_super) {
        __extends(CmdCfg, _super);
        function CmdCfg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=CmdCfg,p=c.prototype;
        //@override
        p._initProp = function () {
            _super.prototype._initProp.call(this);
            var self = this;
            self.lvl = 0;
        };
        return CmdCfg;
    })(mo.GUIDE.CmdCfg);
    g_guide.CmdCfg = CmdCfg;
    egret.registerClass(CmdCfg,"g_guide.CmdCfg");
    var GuideParser = (function (_super) {
        __extends(GuideParser, _super);
        function GuideParser() {
            _super.apply(this, arguments);
        }
        var d = __define,c=GuideParser,p=c.prototype;
        p.parse = function (cmdId) {
            var c_guide = mo.getJSONWithFileName(gc.cfg_c_guide);
            var data = c_guide[cmdId];
            if (!data)
                return null;
            var cfg = new CmdCfg();
            cfg.id = cmdId;
            cfg.set('revert', data[gc.c_guide_revert]);
            cfg.set('next', data[gc.c_guide_next]);
            cfg.set('condition', data[gc.c_guide_condition]);
            cfg.set('judge', data[gc.c_guide_judge]);
            cfg.set('type', data[gc.c_guide_type]);
            cfg.set('talk', data[gc.c_guide_talk]);
            cfg.set('npcIndex', data[gc.c_guide_npcIndex]);
            cfg.set('penetrable', data[gc.c_guide_penetrable], true);
            cfg.set('endType', data[gc.c_guide_endType]);
            cfg.set('toSave', data[gc.c_guide_toSave], true);
            cfg.set('lvl', data[gc.c_guide_lvl]);
            cfg.set('copyId', data[gc.c_guide_copyId]);
            cfg.set('taskId', data[gc.c_guide_taskId]);
            cfg.set('layer', data[gc.c_guide_layer]);
            cfg.set('node', data[gc.c_guide_node]);
            cfg.set('rectNode', data[gc.c_guide_rectNode]);
            cfg.set('beforeShow', data[gc.c_guide_beforeShow]);
            cfg.set('afterShow', data[gc.c_guide_afterShow]);
            cfg.set('beforeNext', data[gc.c_guide_beforeNext]);
            cfg.set('afterNext', data[gc.c_guide_afterNext]);
            cfg.set('actions', data[gc.c_guide_actions]);
            cfg.set('refreshEvent', data[gc.c_guide_refreshEvent]);
            cfg.set('isHook', data[gc.c_guide_isHook], true);
            cfg.set('route', data[gc.c_guide_route]);
            cfg.set('option', data[gc.c_guide_option]);
            return cfg;
        };
        return GuideParser;
    })(egret.Emitter);
    g_guide.GuideParser = GuideParser;
    egret.registerClass(GuideParser,"g_guide.GuideParser");
    mo.GUIDE.mgr.parser = new GuideParser();
})(g_guide || (g_guide = {}));

/**
 * Created by SmallAiTT on 2015/8/31.
 */
var g_guide;
(function (g_guide) {
    var Guide2 = (function (_super) {
        __extends(Guide2, _super);
        function Guide2() {
            _super.apply(this, arguments);
        }
        var d = __define,c=Guide2,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self.actionData = {
                action: function (name, evtFun) {
                    if (name == "arrowleft" || name == 0) {
                        return mo.sequence(mo.moveBy(0.8333333333333334, mo.p(13, 0)), mo.moveBy(0.4166666666666667, mo.p(4, 0)), mo.moveBy(0.4166666666666667, mo.p(-4, 0)), mo.moveBy(0.8333333333333334, mo.p(-13, 0)));
                    }
                    if (name == "circle" || name == 1) {
                        return mo.sequence(mo.scaleTo(0.8333333333333334, 0.95, 0.95), mo.scaleTo(0.2916666666666667, 0.9, 0.9), mo.scaleTo(0.3333333333333333, 0.95, 0.95), mo.scaleTo(0.8333333333333334, 1, 1));
                    }
                    if (name == "arrowdown" || name == 2) {
                        return mo.sequence(mo.moveBy(0.8333333333333334, mo.p(0, -8)), mo.moveBy(0.4166666666666667, mo.p(0, -3)), mo.moveBy(0.4166666666666667, mo.p(0, 3)), mo.moveBy(0.8333333333333334, mo.p(0, 8)));
                    }
                    if (name == "arrowup" || name == 3) {
                        return mo.sequence(mo.moveBy(0.8333333333333334, mo.p(0, -8)), mo.moveBy(0.4166666666666667, mo.p(0, -3)), mo.moveBy(0.4166666666666667, mo.p(0, 3)), mo.moveBy(0.8333333333333334, mo.p(0, 8)));
                    }
                    if (name == "arrowright" || name == 4) {
                        return mo.sequence(mo.moveBy(0.25, mo.p(5, 0)), mo.moveBy(1, mo.p(12, 0)), mo.moveBy(0.9583333333333334, mo.p(-12, 0)), mo.moveBy(0.2916666666666667, mo.p(-5, 0)));
                    }
                },
                initNode: function (name, node) {
                    if (name == "arrowleft" || name == 0) {
                        if (node.width > 0 && node.height > 0) {
                            node.anchorOffsetX = node.width / 2;
                            node.anchorOffsetY = node.height / 2;
                        }
                        else {
                            if (node instanceof egret.gui.UIAsset) {
                                var texture = RES.getRes(node.source);
                                if (texture) {
                                    node.anchorOffsetX = texture.textureWidth / 2;
                                    node.anchorOffsetY = texture.textureHeight / 2;
                                }
                            }
                        }
                    }
                    if (name == "circle" || name == 1) {
                        if (node.width > 0 && node.height > 0) {
                            node.anchorOffsetX = node.width / 2;
                            node.anchorOffsetY = node.height / 2;
                        }
                        else {
                            if (node instanceof egret.gui.UIAsset) {
                                var texture = RES.getRes(node.source);
                                if (texture) {
                                    node.anchorOffsetX = texture.textureWidth / 2;
                                    node.anchorOffsetY = texture.textureHeight / 2;
                                }
                            }
                        }
                    }
                    if (name == "arrowdown" || name == 2) {
                        if (node.width > 0 && node.height > 0) {
                            node.anchorOffsetX = node.width / 2;
                            node.anchorOffsetY = node.height / 2;
                        }
                        else {
                            if (node instanceof egret.gui.UIAsset) {
                                var texture = RES.getRes(node.source);
                                if (texture) {
                                    node.anchorOffsetX = texture.textureWidth / 2;
                                    node.anchorOffsetY = texture.textureHeight / 2;
                                }
                            }
                        }
                        node.rotation = 90.0456517834395;
                    }
                    if (name == "arrowup" || name == 3) {
                        if (node.width > 0 && node.height > 0) {
                            node.anchorOffsetX = node.width / 2;
                            node.anchorOffsetY = node.height / 2;
                        }
                        else {
                            if (node instanceof egret.gui.UIAsset) {
                                var texture = RES.getRes(node.source);
                                if (texture) {
                                    node.anchorOffsetX = texture.textureWidth / 2;
                                    node.anchorOffsetY = texture.textureHeight / 2;
                                }
                            }
                        }
                        node.rotation = -90.0456517834395;
                    }
                    if (name == "arrowright" || name == 4) {
                        if (node.width > 0 && node.height > 0) {
                            node.anchorOffsetX = node.width / 2;
                            node.anchorOffsetY = node.height / 2;
                        }
                        else {
                            if (node instanceof egret.gui.UIAsset) {
                                var texture = RES.getRes(node.source);
                                if (texture) {
                                    node.anchorOffsetX = texture.textureWidth / 2;
                                    node.anchorOffsetY = texture.textureHeight / 2;
                                }
                            }
                        }
                        node.rotation = -180.091303566879;
                    }
                },
                loop: function (name) {
                    if (name == "arrowleft" || name == 0) {
                        return true;
                    }
                    if (name == "circle" || name == 1) {
                        return true;
                    }
                    if (name == "arrowdown" || name == 2) {
                        return true;
                    }
                    if (name == "arrowup" || name == 3) {
                        return true;
                    }
                    if (name == "arrowright" || name == 4) {
                        return true;
                    }
                }
            };
        };
        p.onEnter = function () {
            var self = this;
            _super.prototype.onEnter.call(this);
            var actionData = self.actionData;
            actionData.initNode("arrowdown", self.grp_arrow);
            var actRotate1 = mo.repeatForever(actionData.action("arrowdown"));
            mo.ACT.run(self.grp_arrow, actRotate1);
            actionData.initNode("circle", self.grp_circle);
            var actRotate1 = mo.repeatForever(actionData.action("circle"));
            mo.ACT.run(self.grp_circle, actRotate1);
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        return Guide2;
    })(mo.GUIDE.GuideLayer);
    g_guide.Guide2 = Guide2;
    egret.registerClass(Guide2,"g_guide.Guide2");
    mo.GUIDE.mgr.registerUI(3, Guide2);
})(g_guide || (g_guide = {}));

/**
 * Created by SmallAiTT on 2015/8/31.
 */
var egret;
(function (egret) {
    var project;
    (function (project) {
        /** 是否开启模拟战斗 */
        project.guide = [];
        project.registerValueHandler(function (data) {
            project.setValue(data, "guide");
        });
    })(project = egret.project || (egret.project = {}));
})(egret || (egret = {}));
var g_guide;
(function (g_guide) {
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        if (!egret.project.guideEnabled)
            return;
        var mgr = mo.GUIDE.mgr;
        mgr.net = gc.net;
        mgr.route = gc.iface.a_user_updateGuide;
        mgr.route_arg_key = gc.iface.a_user_updateGuide_args.guideId;
        mgr.onBaseCondition(function (cmd) {
            var cfg = cmd.cfg;
            var noGuideLvl = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guideCfg)[0];
            if (gd.userCtrl.getLvl() >= noGuideLvl)
                return false;
            if (cfg.lvl && cfg.lvl > gd.userCtrl.getLvl())
                return false; // 等级不足
            //加载到常在的资源组,解决图标丢失的问题
            mo.R.loadTo("mapview", "ico_jiantouxing", function () { });
            mo.R.loadTo("mapview", "ico_circlelight", function () { });
            return true;
        });
        mo.emitter.once("logined", function () {
            if (!egret.project.guideEnabled)
                return;
            var mgr = mo.GUIDE.mgr;
            //var guide:string[] = egret.project.guide || [];
            //guide = gd.userCtrl.getGuide();
            var guide = gd.userCtrl.getGuide() || "10000_0";
            mgr.initCmd(guide);
        });
    });
})(g_guide || (g_guide = {}));

