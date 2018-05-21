/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_mid{
    export class Recharge extends mo.gui.Dlg{
        list_items:egret.gui.List;
        _Item_list_items;
        label_vip;
        label_nextRecharge;
        label_nextVip;
        bar_recharge;

        _initProp(){
            var self = this;
            super._initProp();

            //hd { 增加玩吧的样式
            var pt = mo_channel.getCurChannel().channel();
            if (pt == 'wanba')
                self._Item_list_items = RechargeItemWanba;
            else
                self._Item_list_items = RechargeItem;
            //hd }
        }
        
        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        onEnter(){
            super.onEnter();
            var self = this;
            var curVip = gd.userCtrl.getVip();
            var nextVip = curVip+1;
            if(nextVip>gd.rechargeCtrl.getMaxVip()){
                nextVip = gd.rechargeCtrl.getMaxVip();
            }
            self.label_vip.text = curVip.toString();
            self.label_nextVip.text = nextVip.toString();
            var nextNeedCost = gd.userCtrl.getNextVipScore()-gd.userCtrl.getVipScore();
            if(nextNeedCost<0){
                nextNeedCost = 0;
            }
            self.label_nextRecharge.text = nextNeedCost.toString();
            self.bar_recharge.maximum = gd.userCtrl.getNextVipScore();
            self.bar_recharge.setValue(gd.userCtrl.getVipScore());
        }

        _click_list_items(e:egret.gui.ListEvent){
            var self = this;
            var item = e.item;
            var str = "尝试购买【%s充值档】的次数";
            var rechargeId = item[gc.c_recharge_id];
            var payId = item[gc.c_recharge_payId];
            //ws.recordEvent("点击充值【" + item[gc.c_recharge_cost] + "元按钮】", 1);

            var payInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_payInfo, payId);
            var goodsId = payInfo[mo_channel.channelKeyMap[egret.project.channelId]][0];

            mo_channel.getCurChannel().pay(
                rechargeId,
                goodsId,
                function(data){
                    mo.log("充值成功");
                },
                self
            );
        }

        _data_list_items():any[]{
            var self = this;
            return gd.rechargeCtrl.getList();
        }

        _tap_btn_lookVip(){
            var self = this;
            //ws.recordEvent("点击充值界面【VIP权限按钮】", 1);
            self.close();
            process.nextTick(function(){
                mo.moduleMgr.runModule(g_consts.moduleId.vip);
            })
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = Recharge;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            cb();
        });
    });
}
