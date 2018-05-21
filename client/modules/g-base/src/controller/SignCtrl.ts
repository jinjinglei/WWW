/**
 * Created by huanghaiying on 14/12/16.
 */
module gd {
    export class SignCtrl extends mo.DataController {
        static ON_TODAY_SIGNED = "on_today_signed";

        _signItems:any;
        _refreshTime;

        //@override
        _initProp() {
            super._initProp();
            var self = this;
            self._signItems = {};
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            self._refreshTime = c_game[gc.id_c_game.refreshTime][1];
        }

        initData(data?){

        }

        /**
         * 签到
         * @param cb
         * @param target
         * @returns {*}
         */
        sign (cb, target) {
            var self = this;
            if(self.isTodaySigned()) return mo.showMsg("今日已经签到");
            var aData = activityCtrl.getSignActivity();
            var aId = activityCtrl.getActivityValue(aData,gc.dsConsts.ActivityEntity.id);
            activityCtrl.receive(aId,0,function(data){
                gd.pointCtrl.cal(gc.c_prop.pointEffectKey.sign);
                if (cb) cb.call(target, data);
            });
        }

        /**
         * 补签
         * @param cb
         * @param target
         * @returns {*}
         */
        patchSign (cb, target) {
            var self = this;
            if(!self.isTodaySigned()) return mo.showMsg("今日还未签到,不能进行补签");
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var price = c_game[gc.id_c_game.patchSignCon][0];
            var diamond = gd.userCtrl.get(gc.dsConsts.UserEntity.diamond);
            if(diamond < price) return  mo.showMsg(gc.id_c_msgCode.noDiamond);//钻石不足
            mo.showMsg(gc.id_c_msgCode.ifPatch, price, function(){

                var aData = activityCtrl.getSignActivity();
                var aId = activityCtrl.getActivityValue(aData,gc.dsConsts.ActivityEntity.id);
                var args = {};
                var argsKey = gc.iface.a_activity_receive_args;
                args[argsKey.activityId] = aId;

                mo.requestWaiting4Server(gc.iface.a_activity_patchSign, args, function (data) {
                    var userData = data[gc.dsConsts.ExUserData.userData]||{};
                    var bagItems = data[gc.dsConsts.ExUserData.bagItems];
                    var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems];
                    var bag = gd.userUtils.getNewBag({},bagItems);
                    userData[gc.dsConsts.UserEntity.bag] = bag;
                    var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                    userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                    gd.userCtrl.updateEntity(userData);
                    gd.pointCtrl.cal(gc.c_prop.pointEffectKey.sign);
                    if (cb) cb.call(target, data);
                });
            });
        }

        /**
         * 获取今天是否可以补签
         * @returns {boolean}
         */
        isTodayPatchSign(){
            var self = this;
            var nowDate = Date.newDate();
            var signData = gd.userCtrl.get(gc.dsConsts.UserEntity.sign);         //签到数据
            var days = nowDate.getDate();
            if(signData[0] + 1 > days || !self.isTodaySigned()) return false;
            return true;
        }

        /**
         * 获取当月的签到物品
         * @returns {Array} [[id,items],..]
         */
        getSignItems () {
            var nowDate = Date.newDate();
            var month = nowDate.getMonth() + 1;
            //不做缓存
            /*if (this._signItems[month]) {
                return this._signItems[month];
            }*/
            var signItems = [];
            var singData = activityCtrl.getSignItems();
            var startIndex = month * 100 + 1;
            for (var i = startIndex; i < startIndex + 32; i++) {
                var locItems = singData[i];
                if (!locItems) continue;
                //转化数据
                signItems.push([i,locItems]);
            }
            this._signItems[month] = signItems;
            return signItems;
        }

        //获取当前日期签到状态  id:901 "state":0不可签，1已签，2可签，3可补签
        getState(id){
            var self = this;
            var nowDate = Date.newDate();
            var month = nowDate.getMonth() * 100 + 100;
            var days = id - month;
            var nowDays = Date.newDate().getDate();     //当前日期天数
            var signNum = self.getSignNum();        //签到次数
            var state = 0;
            if(days <= signNum){
                state = 1;
            }else{
                if(days <= nowDays){
                    if(!self.isTodaySigned() && (days - 1) == signNum){
                        state = 2;
                    }else{
                        state = 3;
                        if((days - 1) != signNum) state = 0;
                    }
                }else{
                    state = 0;
                }
            }
            return state;
        }

        /**
         * 获取签到次数
         */
        getSignNum () {
            var signData = this._getSignData();
            var signNum = signData[0];
            var lastSignTime = signData[1];
            //未领取过
            if (!lastSignTime) {
                signNum = 0;
            } else {
                //如果签到不等于当前月,则认为没签到
                var now = Date.newDate();
                if (now.getMonth() != lastSignTime.getMonth()) {
                    signNum = 0;
                    lastSignTime = null;
                }
            }

            signData[0] = signNum;
            signData[1] = lastSignTime;
            gd.userCtrl.set(gc.dsConsts.UserEntity.sign, signData);
            return signNum;
        }

        /**
         * 获取今天是否已经签到
         * @returns {boolean}
         */
        isTodaySigned(){
            var signData = this._getSignData();
            var lastSignTime = signData[1];
            if(!lastSignTime) return false;
            var gameDate = Date.newDate();
            return !this._checkCanSign(gameDate,lastSignTime);
        }

        /**
         * 判断是否可以签到
         * @param nowDate
         * @param lastSignDate
         * @private
         */
        _checkCanSign(nowDate:Date, lastSignDate:Date){
            var nextSignDate:Date = nowDate.clone();
            //获取下一次签到时间
            if(lastSignDate.getHours()<this._refreshTime){
                nextSignDate = lastSignDate.clone().clearTime().addHours(this._refreshTime);
            }else{
                nextSignDate = lastSignDate.clone().clearTime().addHours(this._refreshTime).addDays(1);
            }
            //如果当前时间大于下一次签到时间，可以签到
            if(nowDate>=nextSignDate){
                return true;
            }
            return false;
        }

        _getSignData(){
            var signData = gd.userCtrl.get(gc.dsConsts.UserEntity.sign)||[0,null];
            var signTime = signData[1];
            if(signTime&&typeof signTime=="string"){
                signData[1] = Date.newDate(signTime);
            }
            return signData;
        }

    }

    export var signCtrl:SignCtrl;
}