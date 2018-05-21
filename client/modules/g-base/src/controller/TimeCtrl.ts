/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class TimeCtrl extends mo.DataController {
        _syncIntervalId1:any;//同步句柄,2分钟
        _syncIntervalId2:any;//同步句柄,5秒
        _syncIntervalId3:any;//同步句柄,3秒
        _addTime:number = 0;
        _timeErrorNum:number = 0;
        _lastTime:Date;
        _addTime2:number = 0;
        _initProp() {
            super._initProp();
        }

        initData(data?){
            var self = this;
            self._lastTime = new Date();
            self._clearUpdateIntervalId();
            self._syncIntervalId1 = mo.setInterval(self._update1,self,2*60*1000);//2分钟
            self._syncIntervalId2 = mo.setInterval(self._update2,self,5*1000);//5秒
            self._syncIntervalId3 = mo.setInterval(self._update3,self,3*1000);//3秒
            mo.tick(self._tick,self);
        }

        clearAll(){
            var self = this;
            self._clearUpdateIntervalId();

        }

        private _tick(dt){
            this._addTime+=dt;
            this._addTime2+=dt;
        }

        private _update1(){
            var self = this;
            //2分钟一次
            //同步用户数据
            userCtrl.syncData2(function(serverTime){
            },self);
        }

        private _update2(){
            var self = this;
            var sendData = [];
            sendData[0] = chatCtrl.getLastId();
            sendData[1] = taskCtrl.getUpdateId();
            //hd {
            sendData[2] = hoodinnCtlr.getLastBugChatId();
            sendData[3] = hoodinnCtlr.getLastSysMsgId();
            sendData[4] = bossFightCtrl.getEntity(1).getInspireNum();
            sendData[5] = redEnvelopeCtrl.getLastId();        //红包
            sendData[6] = chatCtrl.getGuildLastId();        //公会
            sendData[7] = guildPersonalCtrl.getData()? guildPersonalCtrl.getGuildId():0;        //公会id
            //hd }
            userCtrl.syncData(sendData, function(data){
                var chat = data[gc.dsConsts.AsyncData.chat];
                var guildChat = data[gc.dsConsts.AsyncData.guildChat];
                if(chat || guildChat) chatCtrl.syncData();
                var redEnvelope = data[gc.dsConsts.AsyncData.redEnvelope];
                var allListCountCount = gd.redEnvelopeCtrl._allList||[];
                if(redEnvelope || allListCountCount.length>0) redEnvelopeCtrl.syncData();
                var task = data[gc.dsConsts.AsyncData.task];
                if(task) taskCtrl.syncData();
                var pkDeal = data[gc.dsConsts.AsyncData.pkDeal];
                if(pkDeal) pkOutCtrl.dealRecord();

                var bePkKill = data[gc.dsConsts.AsyncData.bePkKill];
                if(bePkKill) pkOutCtrl.setBePkKill(bePkKill);

                //hd { 增加bug反馈的聊天消息、及时公告消息
                var bugchat = data[gc.dsConsts.AsyncData.kefu];
                if (bugchat)
                    hoodinnCtlr.syncBugChatData();
                var anno = data[gc.dsConsts.AsyncData.sysMsg];
                if (anno)
                    hoodinnCtlr.syncSysMsgData();
                //hd }

                var rankPkDeal = data[gc.dsConsts.AsyncData.rankPkDeal];
                if(rankPkDeal) pkOutCtrl.dealRankPkRecord();

                var inspire = data[gc.dsConsts.AsyncData.inspire];
                //if(inspire) bossFightCtrl.getEntity(1).syncInspire();

                var openBossIds = data[gc.dsConsts.AsyncData.isBossOpen];
                bossFightCtrl.setOpenIds(openBossIds);

                var buffArr = data[gc.dsConsts.AsyncData.buffArr];
                fightCtrl.setBuffArr(buffArr);

                var isGuildChange = data[gc.dsConsts.AsyncData.isGuildChange];
                if(isGuildChange) guildCtrl.getInfo(function(){},this);

                var guildWarIsOpen  = data[gc.dsConsts.AsyncData.guildWarIsOpen];
                guildWarCtrl.setIsOpen(guildWarIsOpen);
            },self);

            pkOutCtrl.calPkValue();
        }

        private _update3(){
            guildWarCtrl.syncData();
        }

        private _clearUpdateIntervalId(){
            var self = this;
            if(self._syncIntervalId1){
                mo.clearInterval(self._syncIntervalId1);
                self._syncIntervalId1 = null;
            }
            if(self._syncIntervalId2){
                mo.clearInterval(self._syncIntervalId2);
                self._syncIntervalId2 = null;
            }
            if(self._syncIntervalId3){
                mo.clearInterval(self._syncIntervalId3);
                self._syncIntervalId3 = null;
            }
        }



    }
    export var timeCtrl:TimeCtrl = TimeCtrl.getInstance();
}
