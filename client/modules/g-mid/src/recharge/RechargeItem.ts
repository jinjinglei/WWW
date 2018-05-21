/**
 * Created by Administrator on 2015/10/6.
 */
module g_mid{
    export class RechargeItem extends mo.gui.ItemRenderer{
        label_yb;
        label_cost;
        label_yb2;
        btn_rmb;

        //labGetDiamond;
        //labMoney;
        //labDesc;

        imgEventIcon;
        ico_recharge;

        rechargeId;
        payId;
        goodsId;
        cost;
        ico_remai;
        ico_tuijian;
        ico_3bei;

        root;

        qq; //qq玩8说明
        normal;
        //qq玩8
        labQQStar;//消耗星星

        //hd { 获得价格的字符串
        getPrice():string {
            var self = this;
            return self.cost.toString();            
        }
        //hd }

        dataChanged(){
            super.dataChanged();
            var self = this;

            self.rechargeId = self.data[gc.c_recharge_id];
            self.payId = self.data[gc.c_recharge_payId];
            var eventIcon = self.data[gc.c_recharge_eventIcon];

            var payInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_payInfo, self.payId);
            self.goodsId = payInfo[mo_channel.channelKeyMap[egret.project.channelId]][0];
            self.cost = payInfo[mo_channel.channelKeyMap[egret.project.channelId]][1];
            var extra = self.data[gc.c_recharge_cost];

            //hd { 修改为通过 getPrice 获取，以支持玩吧对于价格的修改
            self.label_cost.text = self.getPrice();
            //hd }

            var desc, total;
            var diamond = self.data[gc.c_recharge_diamond];
            var firstDiamond = self.data[gc.c_recharge_first];
            var extraDiamond = self.data[gc.c_recharge_extra];
            var isTreble = self.data[gc.c_recharge_isTreble];

            var isFirstRecharge = !gd.rechargeCtrl.hasBuy(self.rechargeId);
            var is3 = gd.rechargeCtrl.getAllCostRMB()<=0;
            if(is3 && isTreble){
                if(firstDiamond && isFirstRecharge){
                    desc = mo.STR.format("%s×%s元宝 首充送%s元宝", diamond, 3, firstDiamond);
                    total = mo.STR.format("%s", diamond*3 + firstDiamond);
                }
                else{
                    if(extraDiamond>0){
                        desc = mo.STR.format("%s×%s元宝 另送%s元宝", diamond, 3, extraDiamond);
                    }else{
                        desc = mo.STR.format("%s×%s元宝", diamond, 3);
                    }
                    total = mo.STR.format("%s", diamond*3 + extraDiamond);
                }
                self.ico_3bei.visible = true;

                self.ico_tuijian.visible = self.ico_remai.visible = false;
            }else{
                self.ico_3bei.visible = false;
                if(firstDiamond && isFirstRecharge){
                    desc = mo.STR.format("%s元宝 首充送%s元宝", diamond, firstDiamond);
                    total = mo.STR.format("%s", diamond + firstDiamond);
                }
                else{
                    if(extraDiamond>0){
                        desc = mo.STR.format("%s元宝 另送%s元宝", diamond, extraDiamond);
                    }else{
                        desc = mo.STR.format("%s元宝", diamond);
                    }
                    total = mo.STR.format("%s", diamond + extraDiamond);
                }
                self.ico_tuijian.visible = self.data[gc.c_recharge_eventIcon]==1;
                self.ico_remai.visible = self.data[gc.c_recharge_eventIcon]==2;
            }

            self.label_yb2.text = desc;
            self.label_yb.text = total;

            var id = self.data[gc.c_recharge_id];
            self.ico_recharge.source = resHelper.getRechargeIconPath(self.data[gc.c_recharge_displayId]);

            //if(eventIcon != 0){
            //    self.imgEventIcon.visible = true;
            //    self.imgEventIcon.source = resHelper.getRechargeEventIconPath(eventIcon);
            //}
            //else{
            //    self.imgEventIcon.visible = false;
            //}

            //for wan8
            //var showQQ = egret.project.channelId == g_channel.key.qqWan8Aos;
            //self.qq.visible = showQQ;
            //self.normal.visible = !showQQ;
            //if(egret.project.channelId == g_channel.key.qqWan8Aos){
                //var vipData = gd.sdkCtrl.vipData;
                //var isVip = vipData[gc.dsConsts.SdkVipData.vipLevel] > 0;
                //self.labQQStar.text = isVip? Math.round(self.cost * 0.8) : self.cost; //vip打8折
            //}
        }
    }
}
