/**
 * Created by Administrator on 2016/1/9.
 */

module g_worldboss{

    export class GuildBossList extends mo.gui.Dlg{
        label_call_time:mo.gui.Label;
        img_title;
        label_extra_cost;

        _initProp(){
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;


            self._Item_list_call = GuildBossCallCell;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.registerClassByKey(gd.BossGuildCtrl, gd.BossGuildCtrl.ON_BOSS_CALL_UPDATE, self._refreshCallGrp);
            //进入战斗后要及时关闭自己
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.START_FIGHT_BOSS_IN_FIGHT_SCENE, self.close);
            self.registerClassByKey(gd.BossFightEntityCtrl, gd.BossFightEntityCtrl.ON_WORLD_BOSS_OPEN_CHANGE, function(){
                gd.bossGuildCtrl.getInfo(function(){
                    self._refreshCallGrp();
                }, self);
            });

            self.label_call_time.text =  mo.STR.format("每天可召唤时段：%s-%s",gd.bossGuildCtrl.getOpenStartTime().toFormat("HH24:MI")
                ,gd.bossGuildCtrl.getOpenEndTime().toFormat("HH24:MI"));

            self.label_extra_cost.text = gd.bossGuildCtrl.getLockCost();
        }

        dataChanged(){
            super.dataChanged();
            var self = this;

            if(!self.data.isLmt){
                self.img_title.source = "tit_txt_g_hanghuiboss";
            }else{
                self.img_title.source = "tit_txt_g_xianshibossf";
            }
        }

        _tap_btn_help(){
            var self = this;
            g_base.BaseShowTip.create().setData({id:28}).show();
        }

        list_call:egret.gui.List;
        _Item_list_call;

        _refreshCallGrp(){
            var self = this;
            self.refreshList("list_call");
        }

        _data_list_call():any[] {
            var self = this, filter, sorter;
            var data = self.data;

            if(!data.isLmt){
                var level = data.level;
                return gd.bossGuildCtrl.getBossList(false, level);
            }else{
                return gd.bossGuildCtrl.getLimitBossList(false);
            }
        }

        _click_list_call(event:egret.gui.ListEvent) {
            var self = this;
            var boss = event.item;
            var bossid = boss[gc.c_bossParameter_id];
            if((gd.bossGuildCtrl.getBossStatus(bossid)== gd.BossFightCtrl.BOSS_STATUS.prize)){ //结算中
                return;
            }
            mo.moduleMgr.runModule(g_consts.moduleId.guildBossCall, {bossId: bossid});
        }
    }
}
