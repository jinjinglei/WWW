/**
 * Created by SmallAiTT on 2015/9/14.
 */
module g_guide{
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('afterNext', handler);

        handler.set('inPCopy', function(params, cmd:mo.GUIDE.Cmd){
            var layer:any = cmd.layer;
            layer.moveEnabled = true;// 设置成支持手势滚动
        });
    });
}