/**
 * Created by SmallAiTT on 2015/9/14.
 */
module g_guide{
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('rectNode', handler);


        // 判断释放已经领取了星级奖励
        handler.set('getExpcCell', function(params, cmd:mo.GUIDE.Cmd){
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
}