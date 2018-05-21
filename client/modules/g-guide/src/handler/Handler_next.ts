module g_guide{
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
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
}