/**
 * Created by SmallAiTT on 2015/5/4.
 */
module g_msg{

    export class UIMsgCombatCtrl extends UIMsgCtrl {
        createNode(data?){
            var self = this;
            g_msg.CombatTips.create().setData(data).show().onClose(function () {
                self.checkEnd();
            });
        }
    }
}