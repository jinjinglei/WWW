/**
 * Created by Administrator on 2016/1/5.
 */
module g_guildwar{
    export class GuildWarScene extends mo.gui.UIScene {
        moduleParam;
        show() {
            var self = this;
            super.show();

            //LotusLayer.create().setData(self.moduleParam.data).show();
            if(gd.guildWarCtrl.isOpening()){
                async.parallel([
                    function(cb1){
                        gd.guildWarCtrl.getInfo(function(data){
                            cb1(null, data);
                        }, self);
                    },
                    function(cb1){
                        gd.guildWarCtrl.getGuildList(function(data){
                            cb1(null, data);
                        }, self);
                    }
                ],function(err, data){
                    gd.guildWarCtrl.getWarDefenceData(function(data){
                        GuildWarDef.create().setData({defData:data, atkData:self.moduleParam.atkData}).show();
                    },self);
                });
            }else{
                gd.guildWarCtrl.getSignUpData(function(data){
                    GuildWarSign.create().setData({sign:data[0], lv:gd.guildCtrl.getLvl()}).show();
                },self);
            }
        }
    }
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = GuildWarScene;
        //moduleCfgItem.sysId = gc.id_c_open.guildWar;// 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
        //    gd.demonLotusCtrl.getInfo(function(data){
            //        moduleParam.data = data;
            //        cb();
            //    }, this);
            cb();
        });
    });
}