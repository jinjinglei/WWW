/**
 * Created by SmallAiTT on 2015/8/11.
 */
module g_msg{
    export class MsgItem extends mo.gui.MsgDlg{
        btn_cancel:egret.gui.Button;
        btn_ok:egret.gui.Button;
        ico_item:g_comp.Ico_Item;

        //@override
        _initProp(){
            super._initProp();
            var self = this;
            self._btnNames = ['btn_cancel', 'btn_ok'];
        }

        setMsgInfo(msgData:any, msgArgs:any[]){
            // 这里处理比较特殊，需要先将itemId拿出来
            //var itemId = msgArgs.shift();
            //super.setMsgInfo(msgData, msgArgs);
            //var t_item = mo.getJSONWithFileName(uw.cfg_t_item);
            //var temp = t_item[itemId];
            //if(!temp) {
            //    return error('未找到物品【%s】', itemId);
            //}
            //this.set('item', temp[uw.t_item_name]);
            //this.ico_item.set('itemId', resHelper.getItemIconPath(itemId));
        }
    }
}