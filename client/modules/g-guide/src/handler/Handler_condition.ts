/**
 * Created by SmallAiTT on 2015/9/14.
 */
module g_guide{
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('condition', handler);

        // 判断Boss是否出现
        handler.set('onBoss', function(params, cmd:mo.GUIDE.Cmd){
            //没有dlg遮挡
            if(g_guide.hasDlg()) return false;
            var tray:egret.gui.Group = mo.gui.infoScene.getTray('msg');
            if(tray.numElements > 0) return false;

            var copyId = params[0];// 副本id
            var curWinCount = gd.copyCtrl.getWinningStreak()[0];
            var waveCount = gd.copyCtrl.getCurMaxWaveCount();
            var curCopyId = gd.copyCtrl.getNormalCurCopyId();
            if(curCopyId != copyId || curWinCount < waveCount) return false;
            return true;
        });

        // 判断是可以更换装备：0身上没任何装备 1身上已有装备
        handler.set('canChgEqp', function(params, cmd:mo.GUIDE.Cmd){
            //没有dlg遮挡
            if(g_guide.hasDlg()) return false;

            var hasWearAnyEquip = params[0];// 是否用拥有任何装备
            var hec:gd.HeroEntityCtrl = gd.heroCtrl.getMainHeroCtrl();
            var isEquiped = hec.isNormalEquiped();
            if(hasWearAnyEquip == 0 && !isEquiped){
                var partKey = gc.c_prop.heroEquipIndex;
                for(var part in partKey){
                    var _part = parseInt(part);
                    if(hec.getStanbyEquip(_part).length > 0) return true;
                }
                return false;
            }
            if(hasWearAnyEquip == 1 && isEquiped){
                var partKey = gc.c_prop.heroEquipIndex;
                for(var part in partKey){
                    var _part = parseInt(part);
                    var isEquiped = hec.isPartEquiped(_part);
                    var equipReds = hec.isEquipReddot();
                    var red = isEquiped && equipReds.indexOf(_part)!=-1;
                    if(red) return true;
                }

            }
            return false;
        });

        // 判断场景
        handler.set('scene', function(params, cmd:mo.GUIDE.Cmd){
            var sceneName = params[0];// scene name
            if(sceneName.indexOf("!") > -1){
                if(mo.gui.uiScene.__className != sceneName.substr(sceneName.indexOf("!") + 1)) return true;
            }else{
                if(mo.gui.uiScene.__className == sceneName) return true;
            }
        });

        // 是否有dlg遮挡
        handler.set('hasDlg', function(params, cmd:mo.GUIDE.Cmd){
            var hasDlg = params[0];
            var tray:egret.gui.Group = mo.gui.uiScene.getTray('dlg');
            if(hasDlg == 0 && g_guide.hasDlg()) return false;
            if(hasDlg == 1 && !g_guide.hasDlg()) return false;
            return true;
        });

        // 是否有可以熔炼的装备
        handler.set('hasSmelting', function(params, cmd:mo.GUIDE.Cmd){
            var hasSmelting = params[0];
            var equipArr = gd.equipCtrl.getSmeltArr(true);
            if(hasSmelting == 0 && equipArr.length > 0) return false;
            if(hasSmelting == 1 && equipArr.length <= 0) return false;
            return true;
        });

    });
}
