/**
 * Created by Administrator on 2015/12/19.
 */
module g_activity {
    export class ActivityMysteryShop extends mo.gui.Layer {
        label_curScore;
        label_desc;
        label_title;
        label_date;
        efx_hit2:g_comp.UIEffect;
        _hitEfxPlayer:uiHelper.EfxPlayer;
        img_title_bg;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            for(var i=0; i<3; ++i){
                var ico_item = self["ico_item"+i];
                ico_item.label_text.visible = false;
                ico_item.onClick(function(){
                    g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(this.get('itemId'), null)}).show();
                },ico_item);
            }
            for(var i=0; i<2; ++i){
                var ico_item = self["ico_itemBuy"+i];
                ico_item.label_text.visible = false;
                ico_item.onClick(function(){
                    g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(this.get('itemId'), null)}).show();
                },ico_item);
            }
            self._hitEfxPlayer = uiHelper.EfxPlayer.create(self.efx_hit2);
        }

        reset(){
            var self = this;
            self.setData(self.data);
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var exActivity = self.data.exActivity;

            if(!exActivity)
                return;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            var shopInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_mysterShop, activity[gc.dsConsts.ActivityEntity.exValues][0]);
            var items = [shopInfo[gc.c_mysterShop_integralItem1], shopInfo[gc.c_mysterShop_integralItem2], shopInfo[gc.c_mysterShop_integralItem3]];
            var itemBuys =[shopInfo[gc.c_mysterShop_giftBag1], shopInfo[gc.c_mysterShop_giftBag2]];
            var scores = gd.activityCtrl.getMysterShopArr(activity[gc.dsConsts.ActivityEntity.id], activity[gc.dsConsts.ActivityEntity.startTime], activity[gc.dsConsts.ActivityEntity.endTime]);
            var activity = self.data.exActivity[gc.dsConsts.ExActivity.activity];
            uiHelper.setEventTime(self.label_date, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));

            //活动背景资源
            self.img_title_bg.source = "bg_secret_shop_" + (activity[gc.dsConsts.ActivityEntity.tiIconType] || 0);

            self.label_curScore.text = scores[0]+"";
            self.label_title.text = activity[gc.dsConsts.ActivityEntity.title];
            self.label_desc.text = activity[gc.dsConsts.ActivityEntity.content];
            for(var i=0; i<3; ++i){
                var ico_item = self["ico_item"+i];
                var itemId = items[i][0];
                var count = items[i][1];
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
                var label_item = self["label_item"+i];
                var label_score = self["label_score"+i];
                var label_exchange = self["label_exCount"+i];

                label_exchange.text = scores[1][i]||"0";
                label_item.textColor = uiHelper.getColorByQuality(itemInfo[gc.t_item_color]);
                label_item.text = itemInfo[gc.t_item_name];
                label_score.text = items[i][2];
                ico_item.setData({itemId:itemId,count:count});
            }
            for(var i=0; i<2; ++i){
                var ico_item = self["ico_itemBuy"+i];
                var itemId = itemBuys[i][0];
                var count = itemBuys[i][1];
                var costType = itemBuys[i][2];
                var cost = itemBuys[i][3];
                var getScore = itemBuys[i][4];
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
                var label_rmb = self["label_rmb"+i];
                var label_score = self["label_scoreGet"+i];
                var ico_res = self["ico_res"+i];
                var label_item = self["label_itemBuy"+i];


                label_item.textColor = uiHelper.getColorByQuality(itemInfo[gc.t_item_color]);
                label_item.text = itemInfo[gc.t_item_name];
                if(costType==1){
                    ico_res.source = "ico_gold";
                }else{
                    ico_res.source = "ico_yuanbao";
                }
                label_rmb.text = cost;
                label_score.text = getScore;
                ico_item.setData({itemId:itemId,count:count});
            }
        }

        _tap_btn_exchange0(){
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.exChangeMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 0, function(){
                self.reset();
            },self);
        }
        _tap_btn_exchange1(){
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.exChangeMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 1, function(){
                self.reset();
            },self);
        }
        _tap_btn_exchange2(){
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.exChangeMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 2, function(){
                self.reset();
            },self);
        }

        _tap_btn_buy0(){
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.buyMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 0, function(datas){
                var isCrit = datas[0];
                var score = datas[1];
                if(isCrit) self._hitEfxPlayer.play();
                if(score) g_msg.UIMsgTextCtrl.push("+"+score);
                self.reset();
            },self);
        }
        _tap_btn_buy1(){
            var self = this;
            var exActivity = self.data.exActivity;
            gd.activityCtrl.buyMysterShop(gd.activityCtrl.getActivityValue(exActivity, gc.dsConsts.ActivityEntity.id), 1, function(datas){
                var isCrit = datas[0];
                var score = datas[1];
                if(isCrit) self._hitEfxPlayer.play();
                if(score) g_msg.UIMsgTextCtrl.push("+"+score);
                self.reset();
            },self);
        }
    }
}