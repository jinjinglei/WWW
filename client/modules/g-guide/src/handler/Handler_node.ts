/**
 * Created by SmallAiTT on 2015/9/14.
 */
module g_guide{
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('node', handler);

        // 获取可以穿戴部位节点
        handler.set('getCanEquipPart', function(params, cmd:mo.GUIDE.Cmd){
            if(cmd.cfg.option.getCanEquipPart != null) return cmd.cfg.option.getCanEquipPart;
            var hec:gd.HeroEntityCtrl = gd.heroCtrl.getMainHeroCtrl();
            var partKey = gc.c_prop.heroEquipIndex;
            for(var part in partKey){
                if(hec.getStanbyEquip(part).length > 0){
                    //console.log("eq_" + part);
                    cmd.cfg.option.getCanEquipPart = 'eq_' + part;
                    return 'eq_' + part;
                }
            }
            return null;
        });

        // 获取更换部位节点
        handler.set('getCanChgPart', function(params, cmd:mo.GUIDE.Cmd){
            if(cmd.cfg.option.getCanChgPart != null) return cmd.cfg.option.getCanChgPart;
            var hec:gd.HeroEntityCtrl = gd.heroCtrl.getMainHeroCtrl();
            var partKey = gc.c_prop.heroEquipIndex;

            for(var part in partKey){
                var _part = parseInt(part);
                var isEquiped = hec.isPartEquiped(_part);
                var equipReds = hec.isEquipReddot();
                var red = isEquiped && equipReds.indexOf(_part)!=-1;

                if(red){
                    //console.log("eq_" + part);
                    cmd.cfg.option.getCanChgPart = 'eq_' + part;
                    return 'eq_' + part;
                }
            }
            return null;
        });

        // 获取装备按钮
        handler.set('getEquipBtn', function(params, cmd:mo.GUIDE.Cmd){
            var idx = params[0];//第几个
            var layer = cmd.mgr.getLayer(cmd.cfg.layer);
            var btn_equip = mo.gui.helper.getChild(mo.gui.helper.getChild(layer, 'eqp_cell_' + idx), 'btn_equip');
            return btn_equip;
        });

        // 获取购买按钮
        handler.set('getBuyBtn', function(params, cmd:mo.GUIDE.Cmd){
            var idx = params[0];//第几个
            var layer = cmd.mgr.getLayer(cmd.cfg.layer);
            var btn_equip = mo.gui.helper.getChild(mo.gui.helper.getChild(layer, 'shop_cell_' + idx), 'btn_buy');
            return btn_equip;
        });

        // 获取可以金币购买的按钮
        handler.set('getGoldBuyBtn', function(params, cmd:mo.GUIDE.Cmd){
            var idx = gd.shopCtrl.canGoldBuyEquipIdx;//第几个
            var layer = cmd.mgr.getLayer(cmd.cfg.layer);
            var btn_equip = mo.gui.helper.getChild(mo.gui.helper.getChild(layer, 'shop_cell_' + idx), 'btn_buy');
            return btn_equip;
        });

        // 获取英雄头像
        handler.set('getHeroHead', function(params, cmd:mo.GUIDE.Cmd){
            var idx = params[0];//第几个
            var layer = cmd.mgr.getLayer(cmd.cfg.layer);
            var head_icon = layer['ico_hero' + idx];
            return head_icon;
        });
    });
}