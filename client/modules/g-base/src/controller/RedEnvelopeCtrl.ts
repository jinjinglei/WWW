/**
 * Created by Sara on 2016/1/5.
 */
module gd {
    export class RedEnvelopeCtrl extends mo.DataController {
        public static ON_REDENVELOPE_UPDATE:String = "ON_REDENVELOPE_UPDATE";
        _lastId:number;//最后的id
        _allList:any[];//所有可领取红包数据
        _allName:any;//发送者名称
        _allCanGetList:any[];
        checkTimeId:number;

        _initProp() {
            super._initProp();
            this._lastId = 0;
            this._allList = [];
            this._allCanGetList = [];
            this._allName = {};
            this.DATA_KEY = gc.dsConsts.RedEnvelopeEntity;
        }

        initData(data){
            if(!data) return;
            var self = this;
            self.init(data);
        }

        //更新数据
        updateData(updata){
            var self = this;
            var id = updata[gc.dsConsts.RedEnvelopeEntity.id];
            var data = self._allList;
            for(var key in data){
                if(id == data[key][gc.dsConsts.RedEnvelopeEntity.id]) self._allList[key] = updata;
            }
        }

        //获取最后的id
        getLastId (){
            return this._lastId;
        }

        //是否领取  gc.dsConsts.RedEnvelopeEntity.getData   false:未领取  true：已领取  [元宝数量，用户Id,用户名称]
        isPicked(getData){
            var self = this;
            var isPicked = false;
            var userId = gd.userCtrl.getId();
            for(var i=0;i<getData.length;i++){
                if(getData[i][1] == userId){
                    isPicked = true;
                    break;
                }
            }
            return isPicked;
        }

        getNameById(id){
            return this._allName[id]||"";
        }

        /**
         * 获取红包列表
         * @param cb
         * @param target
         * @returns gc.dsConsts.RedEnvelopeEntity
         */
        getList(cb,target) {
            var self = this;
            mo.request4Server(gc.iface.a_redEnvelope_getList, {}, function (data) {
                cb.call(target,data);
            });
        }

        /**
         * 发送红包
         * @param type 红包类型
         * @param amount 红包金额
         * @param personNum 红包领取份数
         * @param wish 祝福文本
         * @param cb
         * @param target
         * @returns gc.dsConsts.GuildEntity
         */
        sendRedEnvelope(type,spItemId,amount,personNum,wish,cb,target) {
            var self = this;
            var sensitiveArr = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.fuckWord)[0].split(",");
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var diamond = gd.userCtrl.getDiamond();
            var amountMin = c_game[gc.id_c_game.redEnvelopeCfg][0];       //红包元宝数量最小值
            var personNumMin = c_game[gc.id_c_game.redEnvelopeCfg][1];       //元宝最小分配份数
            if(diamond < amount) return mo.showMsg(gc.id_c_msgCode.noDiamond);
            if(amount < amountMin) return mo.showMsg(gc.id_c_msgCode.packetMin20);
            if(personNum < personNumMin) return mo.showMsg("元宝分配份数低于最小值");
            //限制25字
            if (wish.replace(/[^\x00-\xFF]/g, '**').length > 50) return mo.showMsg("红包祝福最多25字！");
            //过滤敏感字符
            if (mo.STR.checkSensitiveWord(wish, sensitiveArr)) return mo.showMsg("输入祝福内容不合法");
            var argKeys = gc.iface.a_redEnvelope_sendRedEnvelope_args;
            var args = {};
            args[argKeys.type] = type;
            args[argKeys.amount] = amount;
            args[argKeys.personNum] = personNum;
            args[argKeys.wish] = wish;
            args[argKeys.spItemId] = spItemId;
            mo.requestWaiting4Server(gc.iface.a_redEnvelope_sendRedEnvelope, args, function (data) {
                var userData = data[gc.dsConsts.ExRedEnvelopeData.userData]||{};
                var redEnvelopeData = data[gc.dsConsts.ExRedEnvelopeData.redEnvelopeData]||{};
                var redEnvelopePersonalData = data[gc.dsConsts.ExRedEnvelopeData.redEnvelopePersonalData]||{};
                if(gd.redEnvelopePersonalCtrl.getData()){gd.redEnvelopePersonalCtrl.updateEntity(redEnvelopePersonalData);}else{gd.redEnvelopePersonalCtrl.init(redEnvelopePersonalData);}
                gd.userCtrl.updateEntity(userData);
                self.updateData(redEnvelopeData);
                cb.call(target,redEnvelopeData);
            });
        }

        /**
         * 抢红包
         * @param redEnvelopeId
         * @param cb
         * @param target
         * @returns
         */
        receiveBonus(redEnvelopeId,cb,target) {
            var self = this;
            var argKeys = gc.iface.a_redEnvelope_receiveBonus_args;
            var args = {};
            args[argKeys.redEnvelopeId] = redEnvelopeId;
            mo.requestWaiting4Server(gc.iface.a_redEnvelope_receiveBonus, args, function (data) {
                var isGet = data[gc.dsConsts.ExRedEnvelopeData.isGet];
                var userData = data[gc.dsConsts.ExRedEnvelopeData.userData]||{};
                gd.userCtrl.updateEntity(userData);
                var redEnvelopeData = {};
                if(isGet){
                    redEnvelopeData = data[gc.dsConsts.ExRedEnvelopeData.redEnvelopeData]||{};
                    var redEnvelopePersonalData = data[gc.dsConsts.ExRedEnvelopeData.redEnvelopePersonalData]||{};
                    if(gd.redEnvelopePersonalCtrl.getData()){gd.redEnvelopePersonalCtrl.updateEntity(redEnvelopePersonalData);}else{gd.redEnvelopePersonalCtrl.init(redEnvelopePersonalData);}
                    for(var i=0; i<self._allList.length; ++i){
                        if(self._allList[i][gc.dsConsts.RedEnvelopeEntity.id] == redEnvelopeData[gc.dsConsts.RedEnvelopeEntity.id]){
                            self._allList.splice(i--, 1);
                        }
                    }
                    self.onNewAll();
                    cb.call(target,redEnvelopeData);
                }else{
                    mo.showMsg("该红包已经被领光了");
                }
            });
        }

        /**
         * 同步红包数据
         * @param cb
         * @param target
         * @returns
         */
        syncRedEnvelope(cb,target) {
            var self = this;
            mo.request4Server(gc.iface.a_redEnvelope_syncRedEnvelope, {}, function (data) {
                cb.call(target,data);
            });
        }

        //同步数据
        syncData(){
            var self = this;
            var argKeys = gc.iface.a_redEnvelope_getNewList_args;
            var args = {};
            args[argKeys.lastId] = self._lastId;
            mo.request4Server(gc.iface.a_redEnvelope_getNewList, args, function (data) {
                var dataList = data[gc.dsConsts.ExRedEnvelopeData.redEnvelopeData]||{};
                self._allName = data[gc.dsConsts.ExRedEnvelopeData.nameObj]||{};
                self._updateData(dataList);
                self.onNewAll();
            });
        }

        /**
         * 获取所有可抢红包
         * @returns
         */
        getCanGetList(){
            return this._allCanGetList;
        }

        //有新的可抢红包消息
        onNewAll(){
            var self = this;
            var isChanged = false;
            var isDel = false;
            var now = Date.newDate();

            for(var i=0; i<this._allCanGetList.length; ++i){
                if(this._allList.indexOf(this._allCanGetList[i])==-1){
                    isDel = true;
                    this._allCanGetList.splice(i--, 1);
                }
            }

            for(var i=0; i<this._allList.length;++i){
                var redEntity = this._allList[i];
                var addTime = Date.newDate(redEntity[gc.dsConsts.RedEnvelopeEntity.addTime]);

                if(now.getTime()-addTime.getTime()>=15*1000){
                    if(!isChanged){
                        isChanged = true;
                        this._allCanGetList = [];
                    }
                    this._allCanGetList.push(redEntity);
                }
            }

            if(this._allCanGetList.length==this._allList.length){
                this.startCheckCanGet(false);
            }
            if(isChanged || isDel){
                self.pushNotify(self.__class.ON_REDENVELOPE_UPDATE, self.getCanGetList());
            }
        }

        startCheckCanGet(isStart){
            egret.clearInterval(this.checkTimeId);
            if(isStart){
                this.checkTimeId = egret.setInterval(function(){
                    this.onNewAll();
                },this, 500);
            }
        }

        needToDel() {
            var self = this;
            var allList = self._allList;
            var nowTime = Date.newDate();
            for(var i=0; i<allList.length; ++i){
                var redEnvelopeData = allList[i];
                var expireTime = redEnvelopeData[gc.dsConsts.RedEnvelopeEntity.expireTime];
                //判断是否已经过期
                if (expireTime && (Date.newDate(expireTime).isBefore(nowTime) || Date.newDate(expireTime).equals(nowTime))) {
                    self._allList.splice(i--, 1);
                }
            }
            self.onNewAll();
        }


        private _updateData(dataList){
            var self = this;
            var updateType = {};
            self._allList.length = 0;
            var isSync = false;
            for(var i = 0;i<dataList.length;i++){
                var locData = dataList[i];

                updateType[0] = 1;
                self._pushAllList(locData);
                self._lastId = locData[gc.dsConsts.RedEnvelopeEntity.id];
            }
            self.startCheckCanGet(self._allList.length>0);
        }

        private _pushAllList(data){
            var self = this;
            self._allList.push(data);
        }

    }
    export var redEnvelopeCtrl:RedEnvelopeCtrl;
    export var redEnvelopeCtrl:RedEnvelopeCtrl = RedEnvelopeCtrl.getInstance() ;
}
