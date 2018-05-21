/** hd 匹配玩吧skin的修改
 */

module g_mid {

    export class RechargeItemWanba
    extends RechargeItem
    {        
        _initProp() {
            super._initProp();
            mo.gui.helper.setSkinName(this, RechargeItemWanba.__className);
        }

        getPrice():string {
            var self = this;
            // 汇率 1:10
            return (self.cost * 10).toString();
        }
    }
    
}
