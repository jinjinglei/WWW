module g_fight {
	/**
	 *
	 * @author 
	 *
	 */
	export class RoleView extends MapEleView{
        role: Role;

        apCon:egret.Sprite;
        roleAP: g_base.ActionPlayer;
        weaponAP: g_base.ActionPlayer;
        wingAP:g_base.ActionPlayer;
        scale:number = 1;
        bossBgEffect:g_fight.FightEffect;
        medalCon:egret.gui.UIAsset;
        medalEffect:g_comp.Ico_Medal;
        
        public setRole(value:Role):void{
            var self = this;
            self.role = value;
            self.role.addEventListener(ROLE_EVENT_AVATAR_CHANGE, self.onRoleAvatarChange, self);
            self.role.addEventListener(ROLE_EVENT_MEDAL_CHANGE, self.onRoleMedalChange, self);
            self.role.addEventListener(ROLE_EVENT_POS_CHANGE, self.onRolePosChange, self);
            self.role.addEventListener(ROLE_EVENT_ATTACK, self.onRoleAttack, self);
            self.role.addEventListener(ROLE_EVENT_ADD_BUFF, self.onRoleAddBuff, self);
            self.role.addEventListener(ROLE_EVENT_REMOVE_BUFF, self.onRoleRemoveBuff, self);
            self.role.addEventListener(ROLE_EVENT_BENUMB_CHANGED, self.onRoleBenumb, self);
            if (self.role.weaponID != null && self.role.weaponID != -1) {
                if (self.weaponAP == null) {
                    self.weaponAP = new g_base.ActionPlayer();
                    self.apCon.addChild(self.weaponAP);
                }
            }
            if (self.role.wingID != null && self.role.wingID != -1) {
                if (self.wingAP == null) {
                    self.wingAP = new g_base.ActionPlayer();
                    //self.wingAP.scaleX = self.wingAP.scaleY = 1.5;
                    self.apCon.addChild(self.wingAP);
                }
            }
            self.onRoleAvatarChange();
            self.onRolePosChange();

            if (self.role.roleInfo.monsterInfo != null) {
                var scale:number = self.role.roleInfo.monsterInfo[gc.t_monster_scale] / 10000;
                if(scale!=0){
                    self.scale = scale;
                    self.scaleX = self.scaleY = scale;
                    if (self.medalEffect) {
                        self.medalEffect.scaleX = self.scaleX < 0 ? -1 : 1;
                    }
                }

                if (self.role.isBoss) {
                    if (!self.bossBgEffect) {
                        self.bossBgEffect = new g_fight.FightEffect();
                        self.addChildAt(self.bossBgEffect, 0);
                        self.bossBgEffect.play(-1);
                        self.bossBgEffect.scaleX = self.bossBgEffect.scaleY = 1 / self.scaleX;
                    }
                    self.bossBgEffect.startLoadByKey(27, ROLE_ASPECT_UP);
                }
            }else{
                self.onRoleMedalChange();
            }
        }

        public constructor() {
            super();
            var self = this;
            self.apCon = new egret.Sprite();
            self.addChild(self.apCon);
            self.roleAP = new g_base.ActionPlayer();
            self.apCon.addChild(self.roleAP);
            self.medalCon = new egret.gui.UIAsset();
            self.medalCon.scaleX = self.medalCon.scaleY = 0.8;

            self.roleAP.addEventListener(egret.Event.COMPLETE, self.onRoleComplete, self);
        }

        public stop():void{
            var self = this;
            self.roleAP.stop();
            if (self.weaponAP != null)
                self.weaponAP.stop();
            if (self.wingAP != null)
                self.wingAP.stop();
        }
        public playAction():void{
            var self = this;
            self.roleAP.playAction();
            if (self.weaponAP != null)
                self.weaponAP.playAction();
            if (self.wingAP != null)
                self.wingAP.playAction();

            //RES.destroyRes()
        }
        //protected onRemovedFromStage(event:egret.Event):void{
        //    super.onRemovedFromStage(event);
        //    var self = this;
        //    self.role.removeEventListener(ROLE_EVENT_AVATAR_CHANGE,self.onRoleAvatarChange,self);
        //    self.role.removeEventListener(ROLE_EVENT_POS_CHANGE,self.onRolePosChange,self);
        //    self.role.removeEventListener(ROLE_EVENT_ATTACK,self.onRoleAttack,self);
        //    self.role.removeEventListener(ROLE_EVENT_ADD_BUFF,self.onRoleAddBuff,self);
        //    self.role.removeEventListener(ROLE_EVENT_REMOVE_BUFF,self.onRoleRemoveBuff,self);
        //}

        public dtor(){
            var self = this;
            self.roleAP.removeEventListener(egret.Event.COMPLETE, self.onRoleComplete, self);
            if (self.role) {
                self.role.removeEventListener(ROLE_EVENT_AVATAR_CHANGE, self.onRoleAvatarChange, self);
                self.role.removeEventListener(ROLE_EVENT_MEDAL_CHANGE, self.onRoleMedalChange, self);
                self.role.removeEventListener(ROLE_EVENT_POS_CHANGE, self.onRolePosChange, self);
                self.role.removeEventListener(ROLE_EVENT_ATTACK, self.onRoleAttack, self);
                self.role.removeEventListener(ROLE_EVENT_ADD_BUFF, self.onRoleAddBuff, self);
                self.role.removeEventListener(ROLE_EVENT_REMOVE_BUFF, self.onRoleRemoveBuff, self);
                self.role.removeEventListener(ROLE_EVENT_BENUMB_CHANGED, self.onRoleBenumb, self);
                self.role = null;
            }
        }

        private onRoleComplete(event:egret.Event):void{
            var self = this;
            if (self.role.action == ROLE_ACTION_ATTACK) {
                self.role.stand();
            }
        }

        private onRoleAvatarChange(event:egret.Event=null):void{
            var self = this;
            var loop:boolean = self.role.action != ROLE_ACTION_ATTACK;
            if (self.role.roleInfo.monsterInfo) {
                self.roleAP.loadRes(self.role.getAvatar(self.role.clothesID, 'm'), loop);
            }else{
                self.roleAP.loadRes(self.role.getAvatar(self.role.clothesID, 'r'), loop);
            }

            if (self.role.weaponID != null && self.role.weaponID != -1) {
                if (self.weaponAP == null) {
                    self.weaponAP = new g_base.ActionPlayer();
                    self.apCon.addChild(self.weaponAP);
                }
            }
            if (self.weaponAP != null) {
                self.weaponAP.loadRes(self.role.getAvatar(self.role.weaponID, 'i'), loop);
            }
            if (self.role.wingID != null && self.role.wingID != -1) {
                if (self.wingAP == null) {
                    self.wingAP = new g_base.ActionPlayer();
                    //self.wingAP.scaleX = self.wingAP.scaleY = 1.5;
                    self.apCon.addChild(self.wingAP);
                }
            }
            if (self.wingAP != null) {
                self.wingAP.loadRes(self.role.getAvatar(self.role.wingID, 'w'), loop);

                if (self.role.aspect == ROLE_ASPECT_UP || self.role.aspect == ROLE_ASPECT_UP_LEFT || self.role.aspect == ROLE_ASPECT_UP_RIGHT) {
                    self.apCon.setChildIndex(self.wingAP, self.apCon.numChildren - 1);
                } else if (self.role.aspect == ROLE_ASPECT_LEFT || self.role.aspect == ROLE_ASPECT_RIGHT) {
                    self.apCon.setChildIndex(self.wingAP, self.apCon.numChildren - 1);
                }else{
                    self.apCon.setChildIndex(self.wingAP, 0);
                }
            }
            self.scaleX = (self.role.aspect < 6 ? 1 : -1) * self.scale;
            if (self.medalEffect) {
                self.medalEffect.scaleX = self.scaleX < 0 ? -1 : 1;
            }
        }
        onRoleMedalChange(event=null){
            var self = this;
            if (self.role.medalId) {
                if (!self.medalEffect) {
                    self.medalEffect = g_comp.Ico_Medal.create();
                    self.medalCon.y = -116;
                    self.addChild(self.medalCon);
                    self.medalCon.source = self.medalEffect;
                    self.medalEffect.scaleX = self.scaleX < 0 ? -1 : 1;
                    self.medalEffect.x = -151 / 2;
                    self.medalEffect.y = -60;
                }

                mo.R.loadTo('FightScene', resHelper.getWarPrintIconPath(self.role.medalId), function(){});
                self.medalEffect.setData({itemId: self.role.medalId});

                //var adjustY:number = self.medalEffect.checkNeedAdjuestPos(self.role.medalId) ? -40 :-60;
                //self.medalEffect.y = adjustY;
            }else{
                if (self.medalEffect) {
                    self.medalCon.source = null;
                    self.medalEffect = null;
                }
            }
        }

        onRolePosChange(event:egret.Event=null):void{
            var self = this;
            self.x = self.role.x;
            self.y = self.role.y;
        }
        onRoleAttack(event:egret.Event=null):void{
            var self = this;
            self.roleAP.playAction();
            if (self.weaponAP != null) {
                self.weaponAP.playAction();
            }
            if (self.wingAP != null) {
                self.wingAP.playAction();
            }
        }
        onRoleAddBuff(event:CusEvent):void{
            var self = this;
            var buff:Buff = event.data;
            if(buff.effectRes!=0){
                var hasBuff = false;
                for (var i = 0; i < self.numChildren; ++i) {
                    var buffEffect:BuffEffect = <BuffEffect>self.getChildAt(i);
                    if(buffEffect instanceof BuffEffect){
                        if(buffEffect.buff.id==buff.id){
                            hasBuff = true;
                            break;
                        }
                    }
                }
                if(!hasBuff){
                    var buffEffect:BuffEffect = new BuffEffect();
                    buffEffect.scaleX = buffEffect.scaleY = 1.1;
                    buffEffect.y = -10;
                    buffEffect.buff = buff;
                    self.addChild(buffEffect);
                    buffEffect.play(-1);
                }
            }
            self.onRoleBenumb();
        }
        onRoleRemoveBuff(event:CusEvent):void{
            var self = this;
            var buff:Buff = event.data;
            for (var i = 0; i < self.numChildren; ++i) {
                var buffEffect:BuffEffect = <BuffEffect>self.getChildAt(i);
                if(buffEffect instanceof BuffEffect){
                    if(buffEffect.buff==buff){
                        if (self.parent)
                            self.removeChildAt(i);
                        break;
                    }
                }
            }
            self.onRoleBenumb();
        }
        onRoleBenumb(event:CusEvent=null){
            var self = this;
            if (self.role.isBenumb) {
                if (self.roleAP.isPlaying)
                    self.stop();
            }else{
                if (!self.roleAP.isPlaying)
                    self.playAction();
            }
        }
	}
}
