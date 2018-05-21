/**
 * Created by SmallAiTT on 2015/8/31.
 */
module egret.project{
    /** 是否开启模拟战斗 */
    export var guide:string[] = [];
    project.registerValueHandler(function(data){
        project.setValue(data, "guide");
    });
}
module g_guide{

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        if(!egret.project.guideEnabled) return;
        var mgr:mo.GUIDE.Mgr = mo.GUIDE.mgr;
        mgr.net = gc.net;
        mgr.route = gc.iface.a_user_updateGuide;
        mgr.route_arg_key = gc.iface.a_user_updateGuide_args.guideId;
        mgr.onBaseCondition(function(cmd:mo.GUIDE.Cmd){
            var cfg:any = cmd.cfg;
            var noGuideLvl = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guideCfg)[0];
            if(gd.userCtrl.getLvl() >= noGuideLvl) return false;
            if(cfg.lvl && cfg.lvl > gd.userCtrl.getLvl()) return false;// 等级不足

            //加载到常在的资源组,解决图标丢失的问题
            mo.R.loadTo("mapview", "ico_jiantouxing", function(){});
            mo.R.loadTo("mapview", "ico_circlelight", function(){});
            return true;
        });
        mo.emitter.once("logined", function(){
            if(!egret.project.guideEnabled) return;

            var mgr:mo.GUIDE.Mgr = mo.GUIDE.mgr;
            //var guide:string[] = egret.project.guide || [];
            //guide = gd.userCtrl.getGuide();

            var guide =  gd.userCtrl.getGuide() || "10000_0";
            mgr.initCmd(guide);

        });
    });
}