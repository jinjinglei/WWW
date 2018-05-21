/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_custom{
    export class CustomItem extends mo.gui.ItemRenderer{
        label_part:egret.gui.Label;
        grp_item;
        label_name;
        ico_border;
        ico;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var equipType = self.data;
            if(equipType != null){
                var resId = self._getPartTempResId(self.delegate.colorType, equipType);
                // 更换图标
                self.ico.source = mo.STR.format(resHelper.dynamicTemp, resHelper.dynamic.item, mo.STR.fill(resId, "000000"), "png");
                // 更换边框
                var color = self.delegate.colorType;
                self.ico_border.source = resHelper.getBorderByQuality(1, color);
                self.label_part.text = gc.c_prop.equipType[equipType];
            }
        }

        _getPartTempResId(color, part){
            var resIds = {};
            resIds[gc.c_prop.equipColorKey.orange] = [
                700026,//定制武器
                700027,//定制黄金
                700028,//定制头盔
                700031,//定制项链
                700029,//定制戒指
                700030//定制手环
            ];
            resIds[gc.c_prop.equipColorKey.red] = [
                700032,//定制武器
                700033,//定制黄金
                700034,//定制头盔
                700037,//定制项链
                700035,//定制戒指
                700036//定制手环
            ];
            return resIds[color][part];
        }

        _tap_btn_goto(){
            var self = this;
            var tickets = gd.customCtrl.getCustomTicket(self.delegate.colorType);
            if(tickets.length){
                mo.moduleMgr.runModule(g_consts.moduleId.custom, {itemId: tickets[0], equipType: self.data});
            }else{
                mo.showMsg("定制券不足!");
            }
        }
    }
}