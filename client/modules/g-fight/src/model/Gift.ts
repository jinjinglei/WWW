module g_fight {

    export var GIFT_EVENT_POS_CHANGE:string = "GIFT_EVENT_POS_CHANGE";

	export class Gift extends egret.EventDispatcher {
        private static ACTION_STAND:number = 0;
        private static ACTION_MOVE:number = 1;

        public x:number;
        public y:number;
        public action:number;
        public role:Role;
        private aimDis = 30;//走到角色附近就不动
        private awayDis = 60;//离开远了就开始走向角色
        public giftId;

        constructor(){
            super();
            this.action = Gift.ACTION_STAND;
        }

        exeAI(){
            var self = this;
            var dx = self.role.x-self.x;
            var dy = self.role.y-self.y;
            var dis = Math.sqrt(dx*dx+dy*dy);
            if(this.action == Gift.ACTION_STAND){
                if(dis>=self.awayDis){
                    self.action = Gift.ACTION_MOVE;
                }
            }else if(this.action == Gift.ACTION_MOVE){
                if(dis<=self.aimDis){
                    self.action = Gift.ACTION_STAND;
                }else{
                    var cos: number = dx / dis;
                    var sin: number = dy / dis;
                    var speed = dis/10;
                    this.x += speed*cos;
                    this.y += speed*sin;
                    this.dispatchEvent(new egret.Event(GIFT_EVENT_POS_CHANGE));
                }
            }
        }


        dtor(){

        }
    }
}
