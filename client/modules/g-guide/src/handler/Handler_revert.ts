module g_guide{
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        var handler = new mo.GUIDE.CfgHandler();
        mo.GUIDE.handlerMgr.set('revert', handler);


        // 判断副本是否已经通过了
        handler.set('copyPassed', function(params, cmd:mo.GUIDE.Cmd){
            var copyId = params[0];// 副本id
            var trueCmdId = params[1];// 通过对应的cmdId
            var falseCmdId = params[2];// 没通过对应的cmdId
            //return uw.userDataCtrl.isCopyPassed(copyId) ? trueCmdId : falseCmdId;
        });
    });
}