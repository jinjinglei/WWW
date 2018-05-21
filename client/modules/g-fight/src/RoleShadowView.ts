module g_fight {
	/**
	 *
	 * @author 
	 *
	 */
	export class RoleShadowView extends MapEleView{
        role:Role;
        shadow: egret.Bitmap;

        public constructor() {
            super();
            
            this.shadow = new egret.Bitmap();
            this.addChild(this.shadow);
            this.cacheAsBitmap = true;
		}

        public dtor(){
            this.role.removeEventListener(ROLE_EVENT_POS_CHANGE,this.onRolePosChange,this);
            this.role = null;
        }
		
		public setRole(value:Role):void{
            var self = this;
            this.role = value;
            this.role.addEventListener(ROLE_EVENT_POS_CHANGE,this.onRolePosChange,this);
            this.onRolePosChange();
            RES.getResAsync("fight_shadow",
                function(){
                    this.shadow.texture = RES.getRes("fight_shadow");
                    this.shadow.x = -this.shadow.width/2;
                    this.shadow.y = -this.shadow.height/2;
                }
            ,this);
		}

		private onRolePosChange(e=null):void{
            this.x = this.role.x;
            this.y = this.role.y;
		}
	}
}
