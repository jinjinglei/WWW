/**
 * Created by SmallAiTT on 2015/5/4.
 */
module g_msg{

    export class UIMsgHeroPropCtrl extends UIMsgCtrl {
        createNode(data?){
            var self = this;
            g_msg.GetItemTips.create().setData(data).show().onClose(function () {
                self.checkEnd();
            });
        }
    }
}