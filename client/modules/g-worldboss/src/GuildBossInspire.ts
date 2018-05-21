/**
 * Created by Administrator on 2015/12/22.
 */
module g_worldboss{
    export class GuildBossInspire extends mo.gui.Dlg{
        moduleParam:IModuleParam.GuildBossInspire;

        label_remaind:egret.gui.Label;
        label_inspire_title:egret.gui.Label;
        label_inspire_desc:egret.gui.Label;
        label_content:egret.gui.Label;
        label_title:egret.gui.Label;
        scroller:egret.gui.Scroller;
        label_cost:egret.gui.Label;


        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.label_content.lineSpacing = 5;

            if(self.moduleParam){
                self.setData(self.moduleParam);
            }
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var inspireId = self.data.inspireId;
            if(!inspireId)inspireId = 1;
            var c_inspire = mo.getJSONWithFileName(gc.cfg_t_otherBuff);
            var c_data = c_inspire[inspireId];

            var bossId = self.data.bossId;
            var fec:gd.BossFightEntityCtrl = gd.bossFightCtrl.getEntity(bossId);
            var inspireTime = fec.getInspireReSeconds();
            self.label_remaind.text = mo.STR.format("当前行会鼓舞剩余时间 %s",mo.getTimeStr(inspireTime*1000));
            self.setCDTime(inspireTime);

            self.label_title.text = c_data[gc.t_otherBuff_name];
            self.label_inspire_title.text = mo.STR.format("效果:增加%s%伤害,持续%s秒",(c_data[gc.t_otherBuff_addHurt]/10000)*100,c_data[gc.t_otherBuff_conTime]);

            self.label_cost.text = mo.STR.format("花费:%s元宝",mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.worldBossCfg)[3]);

            fec.getInspireRecordArr(function(data){
                self.onChatUpdate(data);
            },self);
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:26}).show();
        }

        _tap_btn_back(){
            var self = this;
            self.close();
        }

        _tap_btn_cancel(){
            var self = this;
            self.close();
        }

        _tap_btn_inspire(){
            var self = this;
            self._inspire();
        }
        private _inspire(){
            var self = this;
            gd.bossFightCtrl.getEntity(self.moduleParam.bossId).inspire(function(data){
                self.dataChanged();
            },self);
        }

        clearChat(){
            var self = this;
            self.label_content.text = "";
        }

        onChatUpdate(data){
            var self = this;
            self.clearChat();
            var allStr = "";
            for(var i=0; i<data.length; ++i){
                var chatStr= mo.STR.format("[ubb color=#F2C876]%s: [/ubb][ubb color=#ffffff]%s[/ubb]",data[i],"为行会全员增加了鼓舞Buff!");
                allStr += chatStr+"\n";
            }
            self.label_content.text = allStr;
            process.nextTick(function(){
                if(!self.scroller)return;
                self.scroller.throwVertically(self.scroller.getMaxScrollTop(),1);
            });
        }
        onExit(){
            super.onExit();
            var self = this;
            if(self.timeTrigger){
                tm.timer.remove(self.timeTrigger);
                self.timeTrigger = null;
            }
        }

        //Time
        timeTrigger;
        resetCdTimeView(leftMillisecond){
            var self = this;
            if(leftMillisecond>0){
                self.label_remaind.text = mo.STR.format("当前行会鼓舞剩余时间:%s",mo.getTimeStr(leftMillisecond));
            }else{

            }
        }
        setCDTime(second){
            var self = this;
            if(second>0){
                if(self.timeTrigger){
                    tm.timer.remove(self.timeTrigger);
                    self.timeTrigger = null;
                }
                var nextCdTime = Date.newDate(Date.newDate().getTime()+second*1000);
                var timeTrigger = self.timeTrigger = new tm.Trigger(nextCdTime);
                timeTrigger.on(tm.Trigger.ON_SECOND, self.timeSec, self);
                timeTrigger.on(tm.Trigger.ON_END, self.timeOut, self);
                tm.timer.add(timeTrigger);
            }else{
                self.resetCdTimeView(0);
            }
        }
        timeSec(type, beginTime, endTime){
            var self = this;
            var now = Date.newDate().getTime();
            var endTime1 = Date.newDate(endTime).getTime();
            var leftMillisecond = endTime1 - now;
            self.resetCdTimeView(leftMillisecond);
        }
        timeOut(type, beginTime, endTime){
            var self = this;
            self.resetCdTimeView(0);
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = GuildBossInspire;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            cb();
        });
    });
}