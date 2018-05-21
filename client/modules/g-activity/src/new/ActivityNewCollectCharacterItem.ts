/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/26.
 */
module g_activity{
    export class ActivityNewCollectCharacterItem extends mo.gui.ItemRenderer{
        label_desc;
        label_count;
        label_collected;
        list_items;
        _Item_list_items;
        ico_bg;
        btn_get;
        ico_got;
        ico_unreach;
        act_items:any[];
        ico_item;
        hasCount;
        group_list;
        group_reward;

        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_items = g_activity.ActivityNewCollectCharacterBaseItem;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
            self.ico_item.onClick(function () {
                    g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(this.get('itemId'), null)}).show();
            }, self.ico_item);
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var actItems = self.data["i"];
            var allCount = 0;
            self.btn_get.visible = true;
            self.act_items = [];
            self.hasCount = 0;
            var count:number = 1;
            for(var i in actItems){
                var obj = {};
                var countHave = gd.userCtrl.getItemNum(i);
                var value = actItems[i];
                obj["itemId"] = parseInt(i);
                obj["count"] = countHave;
                if( count >0){
                    self.hasCount = countHave;
                    count -=1;
                }
                else if( self.hasCount > countHave){
                    self.hasCount = countHave;
                }


                self.act_items.push(obj);
            }
            var rewards = self.data["r"];
            for(var key in rewards){
                self.ico_item.setData({itemId: key, count: rewards[key]});
            }

            allCount = self.act_items.length;

            self.label_desc.text = mo.STR.format("%s", allCount);
            self.label_count.text = mo.STR.format("已领取次数:%s", self.data["c"]);
            self.label_collected.text = mo.STR.format("已集齐:%s组", self.hasCount);
            self.refreshList("list_items");

            var row:number = Math.ceil(self.list_items.dataProvider.length/4);
            self.list_items.height = row == 1 ? 95 : 95*row +5*(row -1);
            self.ico_bg.height = self.list_items.height+ 105 ;

            var groupHeight:number = self.group_reward.height;
            self.group_reward.y = self.group_list.y + self.list_items.height*0.5- 95*0.5;

        }

        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            cell.tapShowDetail = true;
        }

        _data_list_items():any[]{
            var self = this;
            return self.act_items;
        }

        _tap_btn_get(){
            var self = this;
            if(self.hasCount < 1){
                return mo.showMsg("集齐对应的字才能兑换");
            }
            gd.activityCtrl.setTheWord(self.data["activityId"],self.data["index"],function(data){
                var parent:any = self.data["p"];
                parent.updateActivity();
            },self);
        }
    }
}