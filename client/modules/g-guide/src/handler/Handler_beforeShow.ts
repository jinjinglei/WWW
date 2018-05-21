/**
 * Created by SmallAiTT on 2015/9/14.
 */
module g_guide{
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('beforeShow', handler);

        // 该处理器需要使用async模式

        handler.set('scrollTo', function(params, cmd:mo.GUIDE.Cmd, cb:Function){
            var layer:any = cmd.layer;
            var scrollTo = layer.scrollTo;
            params.push(cb);
            if(scrollTo) scrollTo.apply(layer, params);
            else cb();
        });


        handler.set('inPCopy', function(params, cmd:mo.GUIDE.Cmd, cb:Function){
            var layer:any = cmd.layer;
            var pCopyId = params[0];// 获取到主副本id
            layer.moveEnabled = false;// 设置成不支持手势滚动
            layer.scrollTo(pCopyId, cb);
        });

        handler.set('scene', function(params, cmd:mo.GUIDE.Cmd, cb:Function){
            var sceneName = params[0];
            var cmdId = params[1];
            var jumpCmd;
            if(sceneName.indexOf("!") > -1){
                if(mo.gui.uiScene.__className == sceneName.substr(sceneName.indexOf("!") + 1)) jumpCmd = cmdId;
            }else{
                if(mo.gui.uiScene.__className != sceneName) jumpCmd = cmdId;
            }
            if(jumpCmd){
                cb(cmdId)
            }else{
                cb();
            }
        });


    });
}