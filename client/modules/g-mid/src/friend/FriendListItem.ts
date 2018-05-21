module g_mid {

    export class FriendListItem
    extends mo.gui.ItemRenderer
    {
        label_vip;
        label_who;
        label_value;
        
        _initProp() {
            super._initProp();
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            
            var name = self.data[gc.dsConsts.BonusRelationData.nickName];
            var vip = self.data[gc.dsConsts.BonusRelationData.vip];
            var level = self.data[gc.dsConsts.BonusRelationData.level];
            var amn = self.data[gc.dsConsts.BonusRelationData.amount];

            if (name == null)
                name = '';
            if (vip == null)
                vip = 0;
            if (level == null)
                level = 0;
            if (amn == null)
                amn = 0;

            this.label_vip.text = vip + '';
            this.label_who.text = name + ' [ubb color=#ca5d05]Lv.' + level + '[/ubb]';
            this.label_value.text = '已累计获得福利:[ubb color=#cea007]' + amn + '元宝[/ubb]';
        }        
    }
    
}