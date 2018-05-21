/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class RechargeCtrl extends mo.DataController {
        static ON_RECHARGE_SUCC:string = "onRechargeSucc";

        _rechargeData:any;
        _initProp() {
            super._initProp();
        }

        initData(rechargeData){
            this._rechargeData = rechargeData;
        }

        getList(){
            var os = egret.Capabilities.os;
            var pt = mo_channel.getCurChannel().channel();
            var list = [];
            var rechargeData = mo.getJSONWithFileName(gc.cfg_c_recharge);
            for (var key in rechargeData){
                var data = rechargeData[key];
                if(!!data[gc.c_recharge_visible]){

                    //hd { 如过是QQ浏览器iOS渠道，需要筛掉>388元的物品
                    if (os == 'iOS' && pt == 'qqbrowser') {
                        var cost = data[gc.c_recharge_cost];
                        if (cost >= 388)
                            continue;
                    }
                    //hd }

                    list.push(data);
                }
            }

            list.sort(function(a,b){
               return a[gc.c_recharge_index] - b[gc.c_recharge_index];
            });

            return list;
        }


        /**
         * 获取数据
         */
        getInfo(cb, target) {
            var self = this;
            mo.request4Server(gc.iface.a_recharge_getInfo, {}, function (rechargeData) {
                self.initData(rechargeData);
                //对应修改
                if (cb) cb.call(target,rechargeData);
            });
        }

        //充值
        recharge(rechargeId, channelId,cb, target) {
            var self =this;
            //{rechargeId:"充值项ID",channelId:"渠道号",receiptData:"苹果验证数据"}
            var argsObj = gc.iface.a_recharge_recharge_args, args = {};
            args[argsObj.rechargeId] = rechargeId;
            args[argsObj.channelId] = channelId;
            mo.request4Server(gc.iface.a_recharge_recharge, args, function (data) {
                self.getInfo(function(){
                    //更新钻石
                    userCtrl.updateEntity(data);
                    //对应修改
                    if (cb) cb.call(target,data);
                },self);
            });
        }

        //获取所有消费的RMB
        getAllCostRMB() {
            var c_recharge = mo.getJSONWithFileName(gc.cfg_c_recharge);
            var countMap = this._rechargeData[gc.dsConsts.RechargeData.countMap];
            var allCost = 0;
            for (var key in countMap) {
                var locRechargeId = parseInt(key);
                var locRechargeData = c_recharge[locRechargeId];
                var locNum = countMap[key] || 0;
                allCost += (locRechargeData[gc.c_recharge_cost] || 0) * locNum;
            }
            return allCost;
            //var rechargeTemp = ws.getJSONWithFileNameAndID(uw.cfg_c_recharge, rechargeId);
            //cost
        }

        getMaxVip(){
            var infos = mo.getJSONWithFileName(gc.cfg_c_vip);
            var level = -1;
            for(var key in infos){
                if(infos[key][gc.c_vip_id]>level){
                    level = infos[key][gc.c_vip_id];
                }
            }
            return level;
        }
        getVipCost(vipLv){
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, vipLv-1);
            return info[gc.c_vip_score];
        }

        //判断是否购买过改档位充值
        hasBuy(rechargeId) {
            var countMap = this._rechargeData[gc.dsConsts.RechargeData.countMap];
            var num = countMap[rechargeId]||0;
            return num>0;
        }

        //充值
        getRequest(rechargeId, goodsId,cb, target) {
            var self =this;
            //{rechargeId:"充值项ID",goodsId:"渠道物品id"}
            var argsObj = gc.iface.a_recharge_getRequest_args, args = {};
            args[argsObj.rechargeId] = rechargeId;
            args[argsObj.goodsId] = goodsId;
            mo.request4Server(gc.iface.a_recharge_getRequest, args, function (data) {
                if (cb) cb.call(target,data);
            });
        }

        //处理请求
        handleRequest(cb, target) {
            var self =this;
            mo.request4Server(gc.iface.a_recharge_handleRequest, {}, function (data) {
                var userData = data[gc.dsConsts.HandleRecharge.userData];
                var addDiamond = data[gc.dsConsts.HandleRecharge.addDiamond];
                var isFinish = data[gc.dsConsts.HandleRecharge.isFinish];
                var rechargeId = data[gc.dsConsts.HandleRecharge.rechargeId];
                if(userData) userCtrl.updateEntity(userData);

                self.getInfo(function(){},self);

                if(addDiamond){
                    //统计支付
                   // var c_recharge = mo.getJSONWithFileName(gc.cfg_c_recharge);
                   //var cost = c_recharge[rechargeId][gc.c_recharge_cost];
                   // var cnyMark = cost + "元";
                   // ws.recordRecharge(cost, cnyMark);

                    //第一次支付成功后要弹一次
                    var isPoped = g_cache.getLocalStorageItem(g_consts.GUIDE_LCK.popBindPhoneAfterPay);
                    if(!isPoped){
                        mo.moduleMgr.runModule(g_consts.moduleId.bindPhone);
                        g_cache.recordGuideDone(g_consts.GUIDE_LCK.popBindPhoneAfterPay);
                    }
                }

                if (cb) cb.call(target,[isFinish,rechargeId]);
                self.pushNotify(RechargeCtrl.ON_RECHARGE_SUCC);
            });
        }
    }
    export var rechargeCtrl:RechargeCtrl = RechargeCtrl.getInstance();
}