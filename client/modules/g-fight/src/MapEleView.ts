module g_fight {
	/**
	 *
	 * @author 
	 *
	 */
	export class MapEleView extends egret.Sprite{
		public constructor() {
            super();
            this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onAddedToStage,this);
            //this.addEventListener(egret.Event.REMOVED_FROM_STAGE,this.onRemovedFromStage,this);
		}
		
		protected onAddedToStage(event:egret.Event):void{
		    
		}
		//protected onRemovedFromStage(event:egret.Event):void{
    		//
		//}
	}
}
