/**
 * Created by admin on 16/4/14.
 */
module g_fight {
    export class FightTreasureChatItem extends mo.gui.ItemRenderer {

        label_content;
        label_time;

        _initProp(){
            super._initProp();
            var self = this;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data  = self.data['o'];
            var type = data[gc.dsConsts.TreasureRecordEntity.recordType];

            var userName = "";
            if(data[gc.dsConsts.TreasureRecordEntity.userVip]>0){
                userName = mo.STR.format("[ubb color=#ffad00]VIP%s [/ubb][ubb color=#00cdff]%s[/ubb]",data[gc.dsConsts.TreasureRecordEntity.userVip], data[gc.dsConsts.TreasureRecordEntity.userName]);
            }else{
                userName = mo.STR.format("[ubb color=#00cdff]%s[/ubb]",data[gc.dsConsts.TreasureRecordEntity.userName]);
            }
            if(data[gc.dsConsts.TreasureRecordEntity.guildName]){
                userName = mo.STR.format("[ubb color=#e76df5][%s][/ubb]", data[gc.dsConsts.TreasureRecordEntity.guildName]) + userName;
            }

            var content = "";
            var itemColor = uiHelper.getColorByQuality(self.data['color']);
            if(type == gc.c_prop.treasureRecordTypeKey.getTreasure){
                content = mo.STR.format("秘宝 [ubb color=%s]%s[/ubb] 刚刚被 %s 拾取,有实力的大侠赶紧去劫镖!",itemColor,self.data['name'],userName);
            }else if(type == gc.c_prop.treasureRecordTypeKey.pkTreasure){
                content = mo.STR.format("秘宝 [ubb color=%s]%s[/ubb] 刚刚被一名凶残的玩家 %s 夺取,有实力的大侠赶紧去劫镖!",itemColor,self.data['name'],userName);
            }else if(type == gc.c_prop.treasureRecordTypeKey.openTreasure){
                var itemstr = "";
                var items = self.data['got'];
                for(var i =0 ;i<items.length;i++){
                    var obj = items[i];
                    var color = uiHelper.getColorByQuality(obj['item'][gc.t_item_color]);
                    itemstr = mo.STR.format("%s [ubb color=%s]%s[/ubb] x%s",itemstr ,color,obj['item'][gc.t_item_name],obj['count']);
                }
                content = mo.STR.format("秘宝 [ubb color=%s]%s[/ubb] 刚刚被 %s 成功打开!获得了%s",itemColor,self.data['name'],userName,itemstr);
            }else if(type == gc.c_prop.treasureRecordTypeKey.compose){
                content = mo.STR.format("玩家 %s 刚刚合成了 [ubb color=%s]%s[/ubb]",userName,uiHelper.getColorByQuality(self.data['color']),self.data['name']);
            }
            self.label_content.text = content;
            self.label_time.text = Date.newDate(data[gc.dsConsts.TreasureRecordEntity.recordDate]).toFormat("YYYY-MM-DD HH24:MI:SS");
        }
    }
}