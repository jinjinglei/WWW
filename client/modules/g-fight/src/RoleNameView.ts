module g_fight {
	/**
	 *
	 * @author 
	 *
	 */
	export class RoleNameView extends MapEleView{
        private static bitmapDataObj:any = {
            "hp_red":null,
            "hp_red_bg":null,
            "hp_green":null,
            "hp_green_bg":null,
            "hp_red2":null,
            "hp_red2_bg":null
        };

        role:Role;
        
        hpBarBg: egret.Bitmap;
        hpBar: egret.Bitmap;
        hpTxt: egret.TextField;
        nameTxt: egret.TextField;
        hpSrc:string;
        hpBgSrc:string;
        hideHp:number = 9000000000000000;
        
        public constructor() {
            super();
            
            this.hpBarBg = new egret.Bitmap();
            this.hpBar = new egret.Bitmap();
            
            this.addChild(this.hpBarBg);
            this.addChild(this.hpBar);
            
            this.hpTxt = new egret.TextField();
            this.hpTxt.width = 100;
            this.hpTxt.size = 12;
            this.hpTxt.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.hpTxt);
            this.hpTxt.x = -this.hpTxt.width/2;
            this.hpTxt.y = -12;
            
            this.nameTxt = new egret.TextField();
            this.nameTxt.width = 100;
            this.nameTxt.size = 12;
            this.nameTxt.textAlign = egret.HorizontalAlign.CENTER;
            this.addChild(this.nameTxt);
            this.nameTxt.x = -this.nameTxt.width/2;
            this.nameTxt.y = -24;
		}
		
        //protected onRemovedFromStage(event:egret.Event):void{
        //    super.onRemovedFromStage(event);
        //
        //    this.role.removeEventListener(ROLE_EVENT_HP_CHANGE,this.onRoleHpChange,this);
        //    this.role.removeEventListener(ROLE_EVENT_POS_CHANGE,this.onRolePosChange,this);
        //}

        public dtor(){
            this.role.removeEventListener(ROLE_EVENT_HP_CHANGE,this.onRoleHpChange,this);
            this.role.removeEventListener(ROLE_EVENT_POS_CHANGE,this.onRolePosChange,this);
            this.role = null;
        }
		
		public setRole(value:Role):void{
            var self = this;
            this.role = value;
            this.role.addEventListener(ROLE_EVENT_HP_CHANGE,this.onRoleHpChange,this);
            this.role.addEventListener(ROLE_EVENT_POS_CHANGE,this.onRolePosChange,this);
            var lv = 0;
            if(this.role.roleInfo.monsterInfo){
                lv = this.role.roleInfo.monsterInfo[gc.t_monster_level];
            }else{
                lv = this.role.entity.lvl;
            }
            if(this.role.name && this.role.name!=""){
                this.nameTxt.text = mo.STR.format("Lv.%s %s",lv,this.role.name);
            }else{
                this.nameTxt.text = "";
            }
            self.hpTxt.visible = self.role.roleInfo.maxHpFight!=self.hideHp;

            this.updateHp();
            this.onRolePosChange();
            if(this.role.roleInfo.monsterInfo && !(this.role instanceof Pet)){
                if(this.role.isBoss){
                    this.hpSrc = "hp_red";
                    this.hpBgSrc = "hp_red_bg";
                }else{
                    this.hpSrc = "hp_red2";
                    this.hpBgSrc = "hp_red2_bg";
                }
            }else{
                if(this.role.isSelf){
                    this.hpSrc = "hp_green";
                    this.hpBgSrc = "hp_green_bg";
                }else{
                    this.hpSrc = "hp_red";
                    this.hpBgSrc = "hp_red_bg";
                }

            }

            this.checkHPBitmapData();
            this.checkHPBgBitmapData();
		}

        checkHPBitmapData(){
            var bitmapData = RoleNameView.bitmapDataObj[this.hpSrc];
            if(bitmapData){
                this.hpBar.bitmapData = bitmapData;
                this.hpBar.x = -this.hpBar.width/2;
            }else{
                RES.getResAsync(this.hpSrc, function(){
                    RoleNameView.bitmapDataObj[this.hpSrc] = RES.getRes(this.hpSrc).bitmapData;
                    this.checkHPBitmapData();
                },this);
            }
        }
        checkHPBgBitmapData(){
            var bitmapData = RoleNameView.bitmapDataObj[this.hpBgSrc];
            if(bitmapData){
                this.hpBarBg.bitmapData = bitmapData;
                this.hpBarBg.x = -this.hpBarBg.width/2;
            }else{
                RES.getResAsync(this.hpBgSrc, function(){
                    RoleNameView.bitmapDataObj[this.hpBgSrc] = RES.getRes(this.hpBgSrc).bitmapData;
                    this.checkHPBgBitmapData();
                },this);
            }
        }
		
		updateHp():void{
            var self = this;
            this.hpBar.scaleX = this.role.hp / this.role.roleInfo.maxHpFight;
            if(self.role.roleInfo.maxHpFight!=self.hideHp && this.role.hp<this.role.roleInfo.maxHpFight){
                this.hpTxt.visible = true;
                this.hpTxt.text = this.role.hp.toString();
            }else{
                this.hpTxt.visible = false;
            }
		}
		
		private onRoleHpChange(e):void{
            this.updateHp();
		}
		private onRolePosChange(e=null):void{
            this.x = this.role.x;
            if(!this.role.isBoss) {
                this.y = this.role.y - 85;
            }else{
                this.y = this.role.y - 100;
            }
		}
	}
}
