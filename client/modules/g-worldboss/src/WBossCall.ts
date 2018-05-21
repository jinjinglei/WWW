/**
 * Created by Administrator on 2015/12/28.
 */
module g_worldboss {
    import BossGuildCtrl = gd.BossGuildCtrl;
    export class WBossCall extends mo.gui.Dlg {
        moduleParam:any;

        px_hp:egret.gui.ProgressBar;
        label_name:egret.gui.Label;
        img_boss:egret.gui.UIAsset;
        img_boss_bg:egret.gui.UIAsset;

        label_challenge_time:egret.gui.Label;
        label_desc:mo.gui.Label;

        btn_status:egret.gui.Button;

        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            //进入战斗后要及时关闭自己
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.px_hp.labelFunction = self.barLabelFunction;
            self.setData(self.moduleParam);
        }

        private barLabelFunction(value:number,maximum:number):string {
            return mo.STR.format("%s/%s",utils.formatByWan(value),utils.formatByWan(maximum));
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var bossId = self.data.bossId;
            var stats = gd.bossWorldCtrl.getBossStatus(bossId);
            //是否已击杀
            var killed = stats == gd.BossFightCtrl.BOSS_STATUS.cd;
            if(killed){
                bossId = gd.bossWorldCtrl.getDeathBossId(bossId);
            }
            //节日显示
            var holidayImgSrc = {
                0 : ["panel_ditus"],
                1 : ["panel_gboss_huodong_1"]
            };
            var c_boss = mo.getJSONWithFileNameAndID(gc.cfg_c_bossWorld, bossId);
            //名字和图像
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            self.img_boss_bg.source = "panel_ditus";
            self.label_name.text = "("+monsterInfo[gc.t_monster_level]+"级) "+monsterInfo[gc.t_monster_name];
            self.img_boss.source = resHelper.getWorldBossIconPath(c_boss[gc.c_bossWorld_displayId]);
            self.px_hp.maximum = monsterInfo[gc.t_monster_maxHp];
            self.px_hp.setValue(monsterInfo[gc.t_monster_maxHp]);
            //设置挑战时间
            var starTime = gd.bossWorldCtrl.getOpenStartTime(bossId);
            var endTime = gd.bossWorldCtrl.getOpenEndTime(bossId);
            self.label_challenge_time.visible = true;
            self.label_challenge_time.text = mo.STR.format("挑战时间: %s-%s",starTime.toFormat("HH24:MI"), endTime.toFormat("HH24:MI"));

            var helpInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_help, 58);
            self.label_desc.text = helpInfo[gc.c_help_helpText];
        }


        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:54}).show();
        }

        _tap_btn_back(){
            var self = this;
            self.close();
        }

        _tap_btn_show_rewards(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.wBossReward, self.moduleParam);
        }
        _tap_btn_status(){
            var self = this;
            var bossId = self.data.bossId;
            var fec:gd.BossFightEntityCtrl = gd.bossFightCtrl.getEntity(bossId);
            fec.getResultData(function(data){
                g_worldboss.GuildBossGrand.create().setData({result:data, isGuild:false}).show();
            }, self);
        }

    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = WBossCall;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.WorldBoss, cb){
            var self = this;
            var bossId = moduleParam.bossId;
            var stats = gd.bossWorldCtrl.getBossStatus(bossId);
            var BOSS_STATUS = gd.BossFightCtrl.BOSS_STATUS;
            if(stats == BOSS_STATUS.fighting) {
                var fec = gd.bossFightCtrl.getEntity(bossId);
                if(!fec.getData()){
                    fec.enter(function () {
                        cb();
                    }, self);
                }else{
                    cb();
                }
            }else{
                cb();
            }
        });
    });

}