module g_comp {
	export interface Ico_Hero_Data{
		tid:number;
		quality?:number;
		isBoss?:boolean;
		copyStar?:number;
		star?:number;
		lvl?:number;
		gray?:boolean;
	}
	/**
	 *
	 * @author 
	 *
	 */
	export class Tab_Sys extends egret.gui.Button{
		red_point:egret.gui.UIAsset;
		new_point:egret.gui.UIAsset;
		img_s:egret.gui.UIAsset;

		// 声明
		data:Ico_Hero_Data;

		childrenCreated(){
			super.childrenCreated();
			var self = this;
			self.red_point.visible = false;
			self.new_point.visible = false;
			self.img_s.visible = false;
			self.img_s.source = self.iconDisplay.source+"_";
		}

		_onClick:Function;
		_onClickCtx:any;
		_onClickData:any;
		onClick(listener:Function, ctx?:any, data?:any){
			this._onClick = listener;
			this._onClickCtx = ctx;
			this._onClickData = data || {};
		}
	}
}
