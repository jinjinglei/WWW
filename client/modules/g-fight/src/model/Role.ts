module g_fight {
	/**
	 *
	 * @author 
	 *
	 */
    export var ROLE_EVENT_POS_CHANGE: string = "ROLE_EVENT_POS_CHANGE";
    export var ROLE_EVENT_HP_CHANGE: string = "ROLE_EVENT_HP_CHANGE";
    export var ROLE_EVENT_AVATAR_CHANGE: string = "ROLE_EVENT_AVATAR_CHANGE";
    export var ROLE_EVENT_MEDAL_CHANGE: string = "ROLE_EVENT_MEDAL_CHANGE";
    export var ROLE_EVENT_ATTACK: string = "ROLE_EVENT_ATTACK";
    export var ROLE_EVENT_HURT: string = "ROLE_EVENT_HURT";
    export var ROLE_EVENT_DIE: string = "ROLE_EVENT_DIE";
    export var ROLE_EVENT_REVIVE: string = "ROLE_EVENT_REVIVE";
    export var ROLE_EVENT_ADD_BUFF: string = "ROLE_EVENT_ADD_BUFF";
    export var ROLE_EVENT_REMOVE_BUFF: string = "ROLE_EVENT_REMOVE_BUFF";
    export var ROLE_EVENT_BENUMB_CHANGED: string = "ROLE_EVENT_BENUMB_CHANGED";
    export var ROLE_EVENT_CALL_PET: string = "ROLE_EVENT_CALL_PET";
    export var ROLE_EVENT_GIFT_EQUIP_CHANGE: string = "ROLE_EVENT_GIFT_EQUIP_CHANGE";
    
    export var ROLE_ACTION_STAND: number = 1;
    export var ROLE_ACTION_MOVE: number = 2;
    export var ROLE_ACTION_ATTACK: number = 3;
    
    export var ROLE_ASPECT_UP: number = 1;
    export var ROLE_ASPECT_UP_RIGHT: number = 2;
    export var ROLE_ASPECT_RIGHT: number = 3;
    export var ROLE_ASPECT_DOWN_RIGHT: number = 4;
    export var ROLE_ASPECT_DOWN: number = 5;
    export var ROLE_ASPECT_UP_LEFT: number = 6;
    export var ROLE_ASPECT_LEFT: number = 7;
    export var ROLE_ASPECT_DOWN_LEFT: number = 8;

	export class Role extends egret.EventDispatcher {
        public static STATE_NONE: number = 1;
        public static STATE_MOVE_TO_AIM: number = 2;
        public static STATE_ATTAK_AIM: number = 3;
        public static STATE_FOLLOW_MAIN: number = 4;

        public static cellW:number = 80;//逻辑格像素
        public static cellH:number = 80;//逻辑格像素
        public static maxRow:number = 0;
        public static maxCol:number = 0;
    	
        private _clothesID: any;
        private _weaponID: any=-1;
        private _wingID: any=-1;
        private _action:number;
        private _aspect: number;
        protected _hp: number = 100;
        protected hp2:number = 0;
        public x: number;
        public y: number;
        private _name: string;
        public roleInfo: RoleInfo;
        private _mtRow: number;
        private _mtCol: number;
        public isSelf:boolean;

        public selfs:Array<Role>;
        public enemys: Array<Role>;
        private curEnemy: Role;
        private moveToAimEnemy: Role;
        public curState: number = Role.STATE_NONE;
        public allRoles: Array<Role>;
        public mainRole: Role;
        public lastExeAITime:number = 0;
        public loot:Array<any>;
        public skillActionTime:number=0;
        public isPushing:boolean = false;
        public curPetNum:number = 0;
        public uid:number;
        public job:number;
        public isFindingMonster;
        public entity:gd.HeroEntityCtrl;
        private giftSkills = [];
        public curPetId;

        public skills:Array<Skill> = [];
        public buffs:Array<Buff> = [];
        public get isBenumb():boolean{//有可能是buff导致，有可能是属性导致
            var self = this;
            for(var i=0; i<self.buffs.length; ++i){
                var buff = self.buffs[i];
                if(buff.specialEffect==1) {
                    return true;
                }
            }
            return self.benumbTime>0;
        }
        private benumbTime:number = 0;
        private curReviveCount:number=0;
        private invincibleTime:number = 0;
        gift:Gift;
        private isCheckTime = true;

        public getAvatar(id:any,prev:string=""): string{
            var self = this;
            var aspectStrs: Array<string> = [null, "0","1", "2","3","4"];
            var actionStrs:Array<string> = [null,"s","r","a"];//[null,"stand","run","attack"];
            return prev+id+"_"+aspectStrs[self.aspect<6?self.aspect:self.aspect-4]+actionStrs[self.action];
        }

        public set hp(value:number){
            var self = this;
            self._hp = value;
            self.dispatchEvent(new egret.Event(ROLE_EVENT_HP_CHANGE));
        }
        public get hp():number{
            return this._hp;
        }
        public get mp():number{
            return this.hp2;
        }
        public get name():string{
            var self = this;
            if(self._name==null){
                return self.roleInfo.name;
            }
            return self._name;
        }
        public set name(value:string){
            this._name = value;
        }
        
        public set clothesID(value:any){
            var self = this;
            if(self._clothesID != value) {
                self._clothesID = value;
                self.dispatchEvent(new egret.Event(ROLE_EVENT_AVATAR_CHANGE));
            }
        }
        public get clothesID():any{
            return this._clothesID;
        }
        
        public set weaponID(value:any){
            var self = this;
            if(self._weaponID != value) {
                self._weaponID = value;
                self.dispatchEvent(new egret.Event(ROLE_EVENT_AVATAR_CHANGE));
            }
        }
        public get weaponID():any{
            return this._weaponID;
        }
        public set wingID(value:any){
            var self = this;
            if(self._wingID != value) {
                self._wingID = value;
                self.dispatchEvent(new egret.Event(ROLE_EVENT_AVATAR_CHANGE));
            }
        }
        public get wingID():any{
            return this._wingID;
        }
        
        public set action(value:number){
            var self = this;
            if(self._action != value) {
                self._action = value;
                self.dispatchEvent(new egret.Event(ROLE_EVENT_AVATAR_CHANGE));
            }
        }
        public get action():number{
            return this._action;
        }
        
        public set aspect(value:number){
            var self = this;
            if(self._aspect != value) {
                self._aspect = value;
                self.dispatchEvent(new egret.Event(ROLE_EVENT_AVATAR_CHANGE));
            }
        }
        public get aspect():number{
            return this._aspect;
        }
        
        public get row():number{
            return Math.floor(this.y / Role.cellH);
        }
        public get col():number{
            return Math.floor(this.x / Role.cellW);
        }
        public isOnNodeCenter():boolean{
            var self = this;
            return Math.abs(self.x-(self.col+0.5)*Role.cellW)<2&&Math.abs(self.y-(self.row+0.5)*Role.cellH)<2;
        }
        public get mtRow():number{
            var self = this;
            if(isNaN(self._mtRow)){
                return self.row;
            }
            return self._mtRow;
        }
        public get mtCol():number{
            var self = this;
            if(isNaN(self._mtCol)){
                return self.col;
            }
            return self._mtCol;
        }

        public get isBoss():boolean{
            var self = this;
            if(self.roleInfo.monsterInfo && self.roleInfo.monsterInfo[gc.t_monster_bossLevel]!=0) {
                return true;
            }
            return false;
        }

        public isMain:boolean = false;

        private _medalId:number = 0;
        public set medalId(value:number) {
            var self = this;
            if (self._medalId != value) {
                self._medalId = value;
                self.dispatchEvent(new egret.Event(ROLE_EVENT_MEDAL_CHANGE));
            }
        }

        public get medalId():number {
            return this._medalId;
        }

        private _isKing:boolean
        public set isKing(value:boolean){
            var self = this;
            if(self._isKing != value){
                self._isKing = value;
                self.dispatchEvent(new egret.Event(ROLE_EVENT_AVATAR_CHANGE));
            }
        }
        public get isKing():boolean{
            return this._isKing;
        }

        public revive():void{
            var self = this;
            self.hp = self.roleInfo.maxHpFight;
            self.hp2 = self.roleInfo.maxHp2Fight;
            self.curReviveCount = 0;
            self.invincibleTime = 0;
            self.lastExeAITime = 0;
        }
        public isDie():boolean{
            return this.hp<=0;
        }
        public die():void{
            var self = this;
            if(!self.roleInfo)return;
            if(!self.roleInfo.isPvPFight || self.curReviveCount>=self.roleInfo.reviveCountFight){
                self.hp = 0;
                while(self.buffs.length){
                    var buff = self.buffs.pop();
                    self.removeBuff(buff);
                }
                self.dispatchEvent(new egret.Event(ROLE_EVENT_DIE));
            }else{
                self.curReviveCount++;
                self.hp = Math.round(self.roleInfo.maxHpFight*self.roleInfo.reviveHPScaleFight);
                self.invincibleTime = self.roleInfo.invincibleTimeFight*10;
                self.dispatchEvent(new egret.Event(ROLE_EVENT_REVIVE));//通过复活戒指复活
            }
        }
        
        public aspectTo(row:number, col:number):void{
            var self = this;
            var toPoint: egret.Point = new egret.Point((col+0.5)*Role.cellW, (row+0.5)*Role.cellH);
            var dx: number = toPoint.x - self.x;
            var dy: number = toPoint.y - self.y;
            if(dx==0&&dy==0)return;

            var cos: number = dx / Math.sqrt(dx * dx + dy * dy);
            var ang: number = Math.acos(cos);

            if(ang>=0 && ang<Math.PI/6){
                self.aspect = ROLE_ASPECT_RIGHT;
            }else if(ang>=Math.PI/6 && ang<Math.PI/3){
                if(dy>0){
                    self.aspect = ROLE_ASPECT_DOWN_RIGHT;
                }else{
                    self.aspect = ROLE_ASPECT_UP_RIGHT;
                }
            }else if(ang>=Math.PI/3 && ang<Math.PI*2/3){
                if(dy > 0) {
                    self.aspect = ROLE_ASPECT_DOWN;
                }else{
                    self.aspect = ROLE_ASPECT_UP;
                }
            }else if(ang>=Math.PI*2/3 && ang<Math.PI*5/6){
                if(dy>0){
                    self.aspect = ROLE_ASPECT_DOWN_LEFT;
                }else{
                    self.aspect = ROLE_ASPECT_UP_LEFT;
                }
            }else{
                self.aspect = ROLE_ASPECT_LEFT;
            }
        }
        public moveTo(row:number, col:number):void{
            var self = this;
            if(row<0){
                row = 0;
            }else if(row>Role.maxRow-1){
                row = Role.maxRow-1;
            }
            if(col<0){
                col = 0;
            }else if(col>Role.maxCol-1){
                col = Role.maxCol-1;
            }
            var self = self;
            self.action = ROLE_ACTION_MOVE;
            var speed: number = (self["owner"]?self["owner"].roleInfo.moveSpeedFight:self.roleInfo.moveSpeedFight)/1000;
            var toPoint: egret.Point = new egret.Point((col+0.5)*Role.cellW, (row+0.5)*Role.cellH);
            var dx: number = toPoint.x - self.x;
            var dy: number = toPoint.y - self.y;
            var time: number = Math.sqrt(dx * dx + dy * dy) / speed;
            
            self.aspectTo(row,col);
            self._mtRow = row;
            self._mtCol = col;

            var endFun = function():void{
                self._mtRow = NaN;
                self._mtCol = NaN;
                self._action = ROLE_ACTION_STAND;
                if(!self.isDie())
                    self.exeAI(self.isCheckTime);
                if(self.curState==Role.STATE_NONE){
                    self.stand();
                }
                if(self.isFindingMonster){
                    if(self.row == 0 || self.col==0 || self.row == Role.maxRow-1 || self.col==Role.maxCol-1){
                        if(self.aspect==ROLE_ASPECT_UP){
                            self.aspect=ROLE_ASPECT_DOWN;
                        }else if(self.aspect==ROLE_ASPECT_DOWN){
                            self.aspect=ROLE_ASPECT_UP;
                        }else if(self.aspect==ROLE_ASPECT_LEFT){
                            self.aspect=ROLE_ASPECT_RIGHT;
                        }else if(self.aspect==ROLE_ASPECT_RIGHT){
                            self.aspect=ROLE_ASPECT_LEFT;
                        }else if(self.aspect==ROLE_ASPECT_UP_LEFT){
                            self.aspect=self.col==0?ROLE_ASPECT_UP_RIGHT:ROLE_ASPECT_DOWN_LEFT;
                        }else if(self.aspect==ROLE_ASPECT_DOWN_RIGHT){
                            self.aspect=self.col==Role.maxCol-1?ROLE_ASPECT_DOWN_LEFT:ROLE_ASPECT_UP_RIGHT;
                        }else if(self.aspect==ROLE_ASPECT_UP_RIGHT){
                            self.aspect=self.col==Role.maxCol-1?ROLE_ASPECT_UP_LEFT:ROLE_ASPECT_DOWN_RIGHT;
                        }else if(self.aspect==ROLE_ASPECT_DOWN_LEFT){
                            self.aspect=self.col==0?ROLE_ASPECT_DOWN_RIGHT:ROLE_ASPECT_UP_LEFT;
                        }
                    }
                }
            }

            egret.Tween.removeTweens(self);
            if(self.isCheckTime){
                egret.Tween.get(self,{onChange: self.onChange, onChangeObj: self}).to({ x: toPoint.x,y: toPoint.y},time).call(endFun);
            }else{
                self.x = toPoint.x;
                self.y = toPoint.y;
                endFun();
                self.dispatchEvent(new egret.Event(ROLE_EVENT_POS_CHANGE));
            }
        }
        //被推开到某个位置
        public pushTo(row:number, col:number):void{
            var self = this;
            self.isPushing = true;
            var self = self;
            var speed: number = 0.15;
            var toPoint: egret.Point = new egret.Point((col+0.5)*Role.cellW, (row+0.5)*Role.cellH);
            var dx: number = toPoint.x - self.x;
            var dy: number = toPoint.y - self.y;
            var time: number = Math.sqrt(dx * dx + dy * dy) / speed;

            self._mtRow = row;
            self._mtCol = col;

            var endFun = function():void{
                self._mtRow = NaN;
                self._mtCol = NaN;
                self.isPushing = false;
                self._action = ROLE_ACTION_STAND;
                if(!self.isDie())
                    self.exeAI(self.isCheckTime);
                if(self.curState==Role.STATE_NONE){
                    self.stand();
                }
            }

            egret.Tween.removeTweens(self);
            if(self.isCheckTime){
                egret.Tween.get(self,{onChange: self.onChange, onChangeObj: self}).to({ x: toPoint.x,y: toPoint.y},time).call(endFun);
            }else{
                self.x = toPoint.x;
                self.y = toPoint.y;
                endFun();
                self.dispatchEvent(new egret.Event(ROLE_EVENT_POS_CHANGE));
            }
        }
        public stand():void{
            var self = this;
            if(self.curEnemy) {
                self.aspectTo(self.curEnemy.row,self.curEnemy.col);
            }
            if(self.moveToAimEnemy) {
                self.aspectTo(self.moveToAimEnemy.row,self.moveToAimEnemy.col);
            }
            egret.Tween.removeTweens(self);
            self.action = ROLE_ACTION_STAND;
        }

        //[col, row]
        public getPointByAspect(isFront:boolean, distance:number):Array<number>{
            var self = this;
            var point:Array<number> = [self.col, self.row];

            switch (self.aspect){
                case ROLE_ASPECT_DOWN:
                case ROLE_ASPECT_DOWN_LEFT:
                case ROLE_ASPECT_DOWN_RIGHT:
                    point[1] += isFront?distance:-distance;
                    break;
                case ROLE_ASPECT_UP:
                case ROLE_ASPECT_UP_LEFT:
                case ROLE_ASPECT_UP_RIGHT:
                    point[1] -= isFront?distance:-distance;
                    break;
                default :
                    break;
            }
            switch (self.aspect){
                case ROLE_ASPECT_RIGHT:
                case ROLE_ASPECT_UP_RIGHT:
                case ROLE_ASPECT_DOWN_RIGHT:
                    point[0] += isFront?distance:-distance;
                    break;
                case ROLE_ASPECT_LEFT:
                case ROLE_ASPECT_UP_LEFT:
                case ROLE_ASPECT_DOWN_LEFT:
                    point[0] -= isFront?distance:-distance;
                    break;
                default :
                    break;
            }
            return point;
        }
        
        public spellSkill(skill:Skill):void{
            var self = this;
            //console.log(skill.skillInfo.name);
            self.action = ROLE_ACTION_ATTACK;
            if(self.curEnemy)
                self.aspectTo(self.curEnemy.row, self.curEnemy.col);
            skill.resetCD();
            self.skillActionTime = skill.skillInfo.actionTime*10;
            var hurtData: HurtData = new HurtData();
            hurtData.attackRole = self;
            hurtData.hurtRole = self.curEnemy;
            hurtData.skill = skill;
            self.dispatchEvent(new CusEvent(ROLE_EVENT_ATTACK, hurtData));

            var targets:Array<Role> = self.getSkillTargets(skill);
            for(var i=0; i<targets.length; ++i){
                self.useSkillOn(skill, targets[i], i==0);
            }
            if(skill.skillInfo.casterPositionType>0 && self.curEnemy!=null && !self.curEnemy.isDie()){
                var point:Array<number> = self.getPointByAspect(true, skill.skillInfo.pushDistance);
                var col = point[0];
                var row = point[1];
                if(row<1){
                    row = 1;
                }else if(row>Role.maxRow-2){
                    row = Role.maxRow-2;
                }
                if(col<1){
                    col = 1;
                }else if(col>Role.maxCol-2){
                    col = Role.maxCol-2;
                }
                self.moveTo(row, col);
            }
            if(skill.skillInfo.callMonsterID!=0){
                self.dispatchEvent(new CusEvent(ROLE_EVENT_CALL_PET, {petID:self.curPetId, owner:self, num:skill.skillInfo.callMonsterNum}));
            }
        }

        checkPetId(){
            var self = this;
            for(var i=0; i<self.skills.length; ++i){
                var skill = self.skills[i];
                if(skill.skillInfo.callMonsterID!=0) {
                    var petId = skill.skillInfo.callMonsterID + skill.level + self.getGiftEffectValue(5);
                    if(self.curPetId!=petId){
                        self.curPetId=petId;
                        self.dispatchEvent(new CusEvent(ROLE_EVENT_CALL_PET, {petID:self.curPetId, owner:self, num:skill.skillInfo.callMonsterNum, isKillAll:true}));
                    }
                }
            }
        }

        private useSkillOn(skill:Skill, target:Role, isFirstAim:boolean):void{
            var self = this;
            //var damage:number = skill.skillInfo.damage*skill.level;
            //if(damage<0){
            target.hurt(self, skill, isFirstAim);
            //}else if(damage>0){
            //    target.hp += 10*(1+damage/10000);
            //}
            if(!target.isDie()){
                if(skill.skillInfo.casterPositionType>0) {
                    target.aspectTo(self.row, self.col);
                }
                if(skill.skillInfo.pushType==1 && skill.skillInfo.pushDistance>0){
                    if(target.roleInfo.monsterInfo && target.roleInfo.monsterInfo[gc.t_monster_immunity] && target.roleInfo.monsterInfo[gc.t_monster_immunity].indexOf(1)!=-1)
                        return;
                    var point:Array<number> = target.getPointByAspect(false, skill.skillInfo.pushDistance);
                    var col = point[0];
                    var row = point[1];
                    if(row<0){
                        row = 0;
                    }else if(row>Role.maxRow-1){
                        row = Role.maxRow-1;
                    }
                    if(col<0){
                        col = 0;
                    }else if(col>Role.maxCol-1){
                        col = Role.maxCol-1;
                    }
                    target.pushTo(row, col);
                }
                if(skill.skillInfo.buffID!=0){
                    if(skill.skillInfo.buffID==3 && target.roleInfo.monsterInfo && target.roleInfo.monsterInfo[gc.t_monster_immunity]&&target.roleInfo.monsterInfo[gc.t_monster_immunity].indexOf(2)!=-1)
                        return;
                    target.addBuff(skill.skillInfo.buffID, skill.level);
                }
            }
        }

        public hasBuff(id){
            var self = this;
            for(var i=0;i<self.buffs.length; ++i) {
                if (self.buffs[i].id == id) {
                    return true;
                }
            }
            return false;
        }

        public addBuff(id, level){
            var self = this;
            var value;
            for(var i=0;i<self.buffs.length; ++i){
                if(self.buffs[i].id == id){
                    var reBuff:Buff = self.buffs.splice(i, 1)[0];
                    if(reBuff.propertyID!=0){
                        value = self.roleInfo.getBuffPropByIndex(reBuff.propertyID)-reBuff.getAddPropValue();
                        self.roleInfo.setBuffPropByIndex(reBuff.propertyID, value);
                    }
                    break;
                }
            }
            var buff:Buff = Buff.create(id, level);
            self.buffs.push(buff);
            if(buff.propertyID!=0) {
                value = self.roleInfo.getBuffPropByIndex(buff.propertyID) + buff.getAddPropValue();
                self.roleInfo.setBuffPropByIndex(buff.propertyID, value);
            }

            self.dispatchEvent(new CusEvent(ROLE_EVENT_ADD_BUFF, buff));
        }
        public checkRemoveBuff(time:number):void{
            var self = this;
            var buff:Buff;
            for(var i=0;i<self.buffs.length; ++i){
                buff = self.buffs[i];
                var exTime1 = buff.totalTime-buff.leftTime;
                buff.reduceTime(time);
                var exTime2 = buff.totalTime-buff.leftTime;
                if ((buff.exeCount + 1) * 1000 > exTime1 && (buff.exeCount + 1) * 1000 <= exTime2) {
                    buff.exe();
                    var hpValue = buff.getHpValue();
                    if(hpValue!=0){
                        if(!self.roleInfo.isWorldBossFight) {
                            self.hp += hpValue;
                            if (self.hp <= 0) {
                                self.die();
                            }
                        }
                    }
                }

                if(buff.leftTime<=0){
                    self.buffs.splice(i--, 1)[0];
                    self.removeBuff(buff);
                }
            }
        }

        private removeBuff(buff){
            var self = this;
            if(buff.propertyID!=0) {
                var value = self.roleInfo.getBuffPropByIndex(buff.propertyID) - buff.getAddPropValue();
                self.roleInfo.setBuffPropByIndex(buff.propertyID, value);
            }
            self.dispatchEvent(new CusEvent(ROLE_EVENT_REMOVE_BUFF, buff));
        }
        
        private onChange():void{
            this.dispatchEvent(new egret.Event(ROLE_EVENT_POS_CHANGE));
        }
        
        public hurt(enemy:Role, skill:Skill, isFirstAim:boolean):void{
            var self = this;
            if(!self.roleInfo || !enemy.roleInfo)return;

            var hurtData: HurtData = new HurtData();
            hurtData.attackRole = enemy;
            hurtData.hurtRole = self;
            hurtData.skill = skill;
            hurtData.isFirstAim = isFirstAim;
            hurtData.isHp2 = false;
            hurtData.miss = false;
            hurtData.mb = false;
            hurtData.disMb = false;
            hurtData.invincible = false;
            hurtData.hp = 0;

            if(skill.skillInfo.special == 1){
                //special为1必死
                self.hp = 0;
                hurtData.hp = -9999999999;

                self.dispatchEvent(new CusEvent(ROLE_EVENT_HURT, hurtData));
                if(self.hp<=0){
                    self.die();
                }else if(self.hp>self.roleInfo.maxHpFight){
                    self.hp = self.roleInfo.maxHpFight
                }
            }else if(skill.hpCoefficient!=0){
                var damage:number = enemy.roleInfo.attackFight;
                //var isPvP:boolean = self.roleInfo.monsterInfo==null&&enemy.roleInfo.monsterInfo==null;
                var isDisHp2:boolean = true;

                if(skill.hpCoefficient<0) {
                    if(self.invincibleTime>0){
                        hurtData.invincible = true;
                        self.dispatchEvent(new CusEvent(ROLE_EVENT_HURT, hurtData));
                        return;
                    }
                    var isHit:Boolean = enemy.roleInfo.isHitSucc(self.roleInfo.dodgeFight);
                    hurtData.miss = !isHit;
                    if (isHit || skill.skillInfo.pushDistance>0) {
                        var attackType:number, level:number=1, attack:number=0;
                        attack = enemy.roleInfo.attackFight;
                        if(enemy.entity){
                            attackType = enemy.entity.job;
                            level = enemy.entity.lvl;
                        }else{
                            attackType = enemy.roleInfo.monsterInfo[gc.t_monster_attackType];
                            level = enemy.roleInfo.monsterInfo[gc.t_monster_level];
                        }
                        var def:number = self.roleInfo.getDefence(attackType, level, attack);
                        damage *= 1-def;
                        if(damage<=0)
                            damage = 1;
                        var isCrit:Boolean = enemy.roleInfo.isCritical(self.roleInfo.disCriticalFight);
                        if (isCrit) {
                            hurtData.crit = true;
                            var critDamage:number = enemy.roleInfo.getCritDamage(self.roleInfo.disCriticalFight);
                            damage *= 1+critDamage;
                        }
                        damage *= 1+enemy.roleInfo.damageIncreaseFight-self.roleInfo.damageDecreaseFight;
                        if(enemy.roleInfo.isBenumbProSucc(self.roleInfo.disBenumbProFight)){
                            self.benumbTime = enemy.roleInfo.benumbProSpanFight*10;
                            hurtData.mb = true;
                            self.dispatchEvent(new CusEvent(ROLE_EVENT_BENUMB_CHANGED));
                        }else{
                            if(enemy.roleInfo.benumbProFight>0 && self.roleInfo.disBenumbProFight>0){
                                //hurtData.disMb = true;
                            }
                        }
                    }
                }else{
                    damage = enemy.roleInfo.attackFight;//此处enemy是有益魔法的施法者
                    damage *= (1+enemy.getGiftEffectValue(2)/10000);
                }

                if(!hurtData.miss){
                    if(self.roleInfo.isPvPFight && skill.hpCoefficient<0)
                        damage /= 8;
                    damage *= skill.hpCoefficient;

                    damage = Math.floor(damage);

                    if(!self.roleInfo.isPvPFight || self.hp2<=0 || skill.hpCoefficient>0){
                        if(!self.roleInfo.isWorldBossFight){
                            self.hp += damage;
                        }
                        hurtData.hp = damage;
                    }else{
                        var hpRate = self.roleInfo.penetrateFight||0;
                        var hpDamage = damage*hpRate;
                        var hp2Damage = damage*(1-hpRate);
                        hpDamage = Math.floor(hpDamage);
                        hp2Damage = Math.floor(hp2Damage);

                        if(!self.roleInfo.isWorldBossFight) {
                            self.hp += hpDamage;
                        }
                        self.hp2 += hp2Damage;
                        hurtData.isHp2 = true;
                        if(self.hp2<0){
                            self.hp2 = 0;
                        }
                        hurtData.hp = hpDamage;
                    }
                }

                self.dispatchEvent(new CusEvent(ROLE_EVENT_HURT, hurtData));
                if(self.hp<=0){
                    self.die();
                }else if(self.hp>self.roleInfo.maxHpFight){
                    self.hp = self.roleInfo.maxHpFight
                }
            }else{
                self.dispatchEvent(new CusEvent(ROLE_EVENT_HURT, hurtData));
            }
        }
        
		public constructor() {
            super();
		}
		
		public distanceTo(aimRole:Role):number{
            var self = this;
            var dr: number = aimRole.row - self.row;
            var dc: number = aimRole.col - self.col;
            return Math.sqrt(dr*dr+dc*dc);
		}

        public getSkillTargets(skill:Skill):Array<Role>{
            var self = this;
            var targets:Array<Role> = [];
            var targetType = skill.skillInfo.targetType;
            var effect = skill.skillInfo.effect;
            var radius = skill.skillInfo.effectRadius;

            if(skill.skillInfo.attackDistance==0){//攻击距离为0，无目标
                return [];
            }
            if(targetType==0){
                targets.push(self.curEnemy);
            }else if(targetType==1){//给自己
                targets.push(self);
            }else if(targetType==2){
                var minHp:number = 0;
                var minRole:Role;
                for(var i=0;i<self.selfs.length; ++i){
                    if(self.selfs[i].isDie())
                        continue;
                    if(self.selfs[i].roleInfo.maxHpFight-self.selfs[i].hp>minHp){
                        minHp = self.selfs[i].roleInfo.maxHpFight-self.selfs[i].hp;
                        minRole = self.selfs[i];
                    }
                }
                if(minRole!=null)
                    targets.push(minRole);
            }else if(targetType==3){
                for(var i=0;i<self.enemys.length; ++i){
                    if(self.enemys[i].row>=self.curEnemy.row-radius&&self.enemys[i].row<=self.curEnemy.row+radius
                        && self.enemys[i].col>=self.curEnemy.col-radius&&self.enemys[i].col<=self.curEnemy.col+radius){
                        targets.push(self.enemys[i]);
                    }
                }
            }else if(targetType==4){
                for(var i=0;i<self.enemys.length; ++i){
                    if(self.enemys[i].row>=self.row-radius&&self.enemys[i].row<=self.row+radius
                    && self.enemys[i].col>=self.col-radius&&self.enemys[i].col<=self.col+radius){
                        targets.push(self.enemys[i]);
                    }
                }
            }else if(targetType==5){
                for(var i=0;i<self.selfs.length; ++i){
                    if(self.selfs[i].row>=self.row-radius&&self.selfs[i].row<=self.row+radius
                        && self.selfs[i].col>=self.col-radius&&self.selfs[i].col<=self.col+radius){
                        targets.push(self.selfs[i]);
                    }
                }
            }
            return targets;
        }
		
		public exeAI(checkTime=true):void{
            var self = this;
            var date = new Date();
            self.isCheckTime = checkTime;
            if(checkTime){
                if(self.lastExeAITime==0){
                    self.lastExeAITime = date.getTime();
                }else{
                    if (date.getTime() - self.lastExeAITime < MINI_SPACE_TIME) {
                        return;
                    }else{
                        //self.lastExeAITime = date.getTime();
                        self.lastExeAITime = self.lastExeAITime + MINI_SPACE_TIME;
                    }
                }
            }

            for(var i=0; i<self.skills.length; ++i){
                self.skills[i].reduceTime(MINI_SPACE_TIME);
            }
            self.checkRemoveBuff(MINI_SPACE_TIME);
            if(self.benumbTime>0){
                self.benumbTime -= MINI_SPACE_TIME;
                if(self.benumbTime<=0){
                    self.dispatchEvent(new CusEvent(ROLE_EVENT_BENUMB_CHANGED));
                }
            }
            if(self.invincibleTime>0){
                self.invincibleTime -= MINI_SPACE_TIME;
            }
            if(self.skillActionTime>0)
                self.skillActionTime -= MINI_SPACE_TIME;

            if(self.isBenumb){//麻痹
                return;
            }

            var canExeSkill:Skill = self.getCurCanExeSkill();
            //给己方施法
            if(canExeSkill!=null && canExeSkill.skillInfo.effect==1){
                if(self.skillActionTime<=0)
                    self.spellSkill(canExeSkill);
                return;
            }
            if(self.action == ROLE_ACTION_MOVE){
                if(self.curState == Role.STATE_FOLLOW_MAIN && self.mainRole && self.mainRole!=self && self.mainRole.curState!=Role.STATE_ATTAK_AIM && !self.mainRole.isBenumb) {
                    if (Math.abs(self.row - self.mainRole.row) <= 1 && Math.abs(self.col - self.mainRole.col) <= 1) {
                        self.curState = Role.STATE_NONE;
                        self.stand();
                    }
                }
                return;
            }
            if(self.isFindingMonster){
                var nextSPos = self.getPointByAspect(true, 1);
                self.moveTo(nextSPos[1], nextSPos[0]);
                return;
            }
            if(self.mainRole && self.mainRole!=self && self.mainRole.curState!=Role.STATE_ATTAK_AIM && !self.mainRole.isBenumb){
                self.curState = Role.STATE_FOLLOW_MAIN;
                if(Math.abs(self.row-self.mainRole.row)<=1 && Math.abs(self.col-self.mainRole.col)<=1){
                    self.curState = Role.STATE_NONE;
                    self.stand();
                }else{
                    var nextPos: Array<number>;
                    nextPos = self.getNextNodeTo(self.mainRole.mtRow,self.mainRole.mtCol);
                    var nextPosRole: Role = self.getRoleByRC(nextPos[0],nextPos[1]);
                    if(nextPosRole==null || nextPosRole==self || nextPosRole.curState!=Role.STATE_FOLLOW_MAIN){
                        self.moveTo(nextPos[0],nextPos[1]);
                    }else{
                        var emptyPos:Array<number> = self.getEmptyPosRound(self.mainRole.mtRow,self.mainRole.mtCol,1);
                        self.moveTo(emptyPos[0],emptyPos[1]);
                    }
                }
                return;
            }
                
		    if(self.enemys==null || self.enemys.length==0){
                self.curState = Role.STATE_NONE;
                self.stand();
                return;
		    }
            var disEnemy: Role;
            var enemy: Role;
            var minDis: number = 999999999;
            var dis: number = 0;
            for(var i: number = 0;i < self.enemys.length;++i){
                enemy = self.enemys[i];
                dis = self.distanceTo(enemy);
                if(dis<minDis){
                    minDis = dis;
                    disEnemy = enemy;
                }
            }
		    if(self.curState == Role.STATE_NONE||self.curState == Role.STATE_FOLLOW_MAIN){
                if(self.mainRole==null && self.roleInfo.seeDistance!=0 && minDis>self.roleInfo.seeDistance){
                    return;
                }

                //if(self.curEnemy){
                //    self.curEnemy.removeEventListener(ROLE_EVENT_DIE,self.onCurEnemyDie,self);
                //}
                //self.curEnemy = disEnemy;
                //self.curEnemy.addEventListener(ROLE_EVENT_DIE,self.onCurEnemyDie,self);
                var canExeSkill:Skill = self.getCurCanExeSkill();
                if(canExeSkill!=null&&canExeSkill.skillInfo.effect==0){
                    if(canExeSkill.skillInfo.attackDistance>minDis-1){
                        self.curState = Role.STATE_ATTAK_AIM;
                        self.moveToAimEnemy = disEnemy;
                        self.exeAttak();//这里有可能没有移动直接进入战斗，预设moveToAimEnemy
                    }else{
                        self.curState = Role.STATE_MOVE_TO_AIM;
                        self.moveToAimEnemy = disEnemy;
                        self.moveToAim();
                    }
                }
		    }else if(self.curState == Role.STATE_MOVE_TO_AIM){
                self.moveToAimEnemy = disEnemy;
                self.moveToAim();
		    }else if(self.curState == Role.STATE_ATTAK_AIM){
                self.exeAttak();
		    }
		}

        private getCurCanExeSkill():Skill{
            var self = this;
            var skill:Skill;
            for(var i=0; i<self.skills.length; ++i){
                skill = self.skills[i];
                if(skill.skillInfo.canExtends && !self.isMain) continue;
                if(skill.canExe()){
                    return self.skills[i];
                }
            }
            return null;
        }

		private exeAttak(){
            var self = this;
            var rcRole = self.getRoleByRC(self.row, self.col);
            if(!self.curEnemy && rcRole!=null && rcRole!=self || self.curEnemy && self.curEnemy.row==self.row && self.curEnemy.col==self.col){
                if(self.curEnemy){
                    self.moveToAimEnemy = self.curEnemy;
                }
                self.curState = Role.STATE_MOVE_TO_AIM;
                var canExeSkill:Skill = self.getCurCanExeSkill();
                if(canExeSkill){
                    var emptyPos:Array<number> = self.getEmptyPosRound(self.moveToAimEnemy.mtRow,self.moveToAimEnemy.mtCol,canExeSkill.skillInfo.attackDistance);
                    self.moveTo(emptyPos[0],emptyPos[1]);
                }
                return;
            }

            if(self.moveToAimEnemy){
                if(self.curEnemy){
                    self.curEnemy.removeEventListener(ROLE_EVENT_DIE,self.onCurEnemyDie,self);
                }
                self.curEnemy = self.moveToAimEnemy;
                self.curEnemy.addEventListener(ROLE_EVENT_DIE,self.onCurEnemyDie,self);
                self.moveToAimEnemy = null;
            }
            var dis: number = self.distanceTo(self.curEnemy);
            var canExeSkill:Skill = self.getCurCanExeSkill();
            if(canExeSkill!=null){
                if(dis!=0 && canExeSkill.skillInfo.attackDistance>dis-1){
                    if(self.skillActionTime<=0)
                        self.spellSkill(canExeSkill);
                }else{
                    self.curState = Role.STATE_MOVE_TO_AIM;
                    self.moveToAim();
                }
            }
            //if(self.roleInfo.attackRange>dis){
            //    if(self.attackTime<=0){
            //        self.attack();
            //    }else{
            //        self.attackTime -= MINI_SPACE_TIME;
            //        if(self.roleInfo.attackTime-self.attackTime>400){
            //            self.stand();
            //        }
            //    }
            //}else{
            //    self.curState = Role.STATE_MOVE_TO_AIM;
            //    self.moveToAim();
            //}
		   
		}
		private moveToAim(){
            var self = this;
    		if(self.moveToAimEnemy==null){
                self.curState = Role.STATE_NONE;
                self.stand();
                return;
    		}
            var dis: number = self.distanceTo(self.moveToAimEnemy);
            var canExeSkill:Skill = self.getCurCanExeSkill();
            if(canExeSkill!=null){
                if(dis!=0 && canExeSkill.skillInfo.attackDistance>dis-1){
                    self.curState = Role.STATE_ATTAK_AIM;
                    self.exeAttak();
                } else {
                    var nextPos: Array<number>;
                    nextPos = self.getNextNodeTo(self.moveToAimEnemy.mtRow,self.moveToAimEnemy.mtCol);
                    var nextPosRole: Role = self.getRoleByRC(nextPos[0],nextPos[1]);
                    if((nextPosRole==null || nextPosRole==self || nextPosRole.curState!=Role.STATE_ATTAK_AIM)&&(self.row!=nextPos[0]||self.col!=nextPos[1])){
                        self.moveTo(nextPos[0],nextPos[1]);
                    }else{
                        var emptyPos:Array<number> = self.getEmptyPosRound(self.moveToAimEnemy.mtRow,self.moveToAimEnemy.mtCol,canExeSkill.skillInfo.attackDistance);
                        self.moveTo(emptyPos[0],emptyPos[1]);
                    }
                }
            }
		}
		
		public getNextNodeTo(row:number, col:number):Array<number>{
            var self = this;
    		if(Math.abs(self.row-row)<=1 && Math.abs(self.col-col)<=1){
                return [self.row, self.col];
    		}
		    if(self.row==row && self.col==col){
                return [self.row, self.col];
		    }else if(self.row==row){
                return [row,self.col + (self.col > col ? -1 : 1)];
		    }else if(self.col==col){
                return [self.row + (self.row > row ? -1 : 1),col];
		    }else{
                return [self.row + (self.row > row ? -1 : 1),self.col + (self.col > col ? -1 : 1)];
		    }
		}
		private onCurEnemyDie(e:egret.Event):void{
            var self = this;
            self.curEnemy.removeEventListener(ROLE_EVENT_DIE, self.onCurEnemyDie,self);
            self.curState = Role.STATE_NONE;
            self.curEnemy = null;
		}

		public getRoleByRC(row:number, col:number):Role{
            var self = this;
            for(var i = 0;i < self.allRoles.length; ++i){
                if(self.allRoles[i].mtRow==row && self.allRoles[i].mtCol==col){
                    return self.allRoles[i];
                }
            }
            return null;
		}
				
		public getEmptyPosRound(row:number, col:number, distance:number):Array<number>{
            var self = this;
            var role: Role;
            var minDis = 9999999;
            var pos = [row, col];
            
            for(var i = row - distance;i <= row + distance;++i){
                for(var k = col - distance;k <= col + distance;++k){
                    //if(Math.abs(i - row)!=distance &&Math.abs( k - col)!=distance)
                    //    continue;
                    if(i==row&&k==col)
                        continue;
                    role = self.getRoleByRC(i,k);
                    if(role==null){
                        var dr: number = i - self.row;
                        var dc: number = k - self.col;
                        var dis = Math.sqrt(dr*dr+dc*dc);
                        if(dis<minDis){
                            minDis = dis;
                            pos = [i, k];
                        }else if(dis==minDis && Math.random()<0.5){//加个随机，预防卡住
                            minDis = dis;
                            pos = [i, k];
                        }
                    }
                }
            }
            return pos;
		}
        public setEntity(hero:gd.HeroEntityCtrl):void{
            var self = this;
            self.entity = hero;
            self.entity.registerByKey(gd.HeroEntityCtrl.ON_EQUIP_CHANGED, self.onEquipOrWingChange, self);
            self.entity.registerByKey(gd.HeroEntityCtrl.ON_WING_CHANGED, self.onEquipOrWingChange, self);
            self.entity.registerByKey(gd.HeroEntityCtrl.ON_SKILL_CHANGED, self.onSkillChanged, self);
            self.entity.registerByKey(gd.HeroEntityCtrl.ON_GIFT_SKILL_CHANGED, self.onGiftSkillChanged, self);
            self.entity.registerByKey(gd.HeroTalismanCtrl.ON_GIFT_EQUIP_CHANGED, self.onGiftEquipChanged, self);
            self.uid = hero.get(gc.dsConsts.HeroEntity.id);
            var roleInfo:RoleInfo = new RoleInfo();
            roleInfo.setHeroProp(hero.props);
            self.roleInfo = roleInfo;
            self.job = hero.job;

            self.onSkillChanged();
            self.onGiftSkillChanged();
            self.onGiftEquipChanged();
        }

        private getGiftEffectValue(type):number{
            var self = this;
            var value = 0;
            for(var i=0; i<self.giftSkills.length; ++i){
                var skillInfo = self.giftSkills[i];
                if(skillInfo[gc.t_talismanSkill_type]==type){
                    if(type==2){
                        value += parseInt(skillInfo[gc.t_talismanSkill_effect]);
                    }else if(type==5){
                        if(skillInfo[gc.t_talismanSkill_effect]>value){
                            value = parseInt(skillInfo[gc.t_talismanSkill_effect]);
                        }
                    }
                }
            }
            return value;
        }

        private onEquipOrWingChange(){
            var self = this;
            self.clothesID = self.entity.getClothDisplayID();
            self.weaponID = self.entity.getWeaponDisplayID();
            self.wingID = self.entity.getWingDisplayID();
        }

        private onSkillChanged(){
            var self = this;
            var hero = self.entity;
            self.skills.length = 0;
            for(var i=0;i<hero.skillLevels.length;++i){
                if(hero.skillLevels[i]==0)
                    continue;
                var skill:Skill = new Skill();
                var skillInfo:SkillInfo = new SkillInfo();
                skillInfo.tabInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, hero.skillIds[i]);
                skill.level = hero.skillLevels[i];
                skill.skillInfo = skillInfo;
                if(skill.skillInfo.firstCD){
                    skill.resetCD();
                }
                self.skills.push(skill);
            }

            self.skills.sort(function(s1:Skill, s2:Skill):number{
                return s2.skillInfo.priority-s1.skillInfo.priority;
            });
            self.checkPetId();
        }
        private onGiftSkillChanged(){
            var self = this;
            var hero = self.entity;
            self.giftSkills.length = 0;
            var skillIds = hero.getTalismanSkill();
            for(var i=0; i<skillIds.length; ++i){
                var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanSkill, skillIds[i]);
                if(!skillInfo) continue;
                var type = skillInfo[gc.t_talismanSkill_type];
                if(type == 2 || type==5){
                    self.giftSkills.push(skillInfo);
                }
            }
            self.checkPetId();
        }
        private onGiftEquipChanged(){
            var self = this;
            var giftId = self.entity.getTalismanAdorn();
            if(giftId!=0){
                self.gift = new Gift();
                self.gift.x = self.x;
                self.gift.y = self.y-30;
                self.gift.giftId = giftId;
                self.gift.role = self;
                self.dispatchEvent(new egret.Event(ROLE_EVENT_GIFT_EQUIP_CHANGE));
            }else{
                self.gift = null;
                self.dispatchEvent(new egret.Event(ROLE_EVENT_GIFT_EQUIP_CHANGE));
            }
        }

        public setMoster(id:number):void{
            var self = this;
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, id);
            var roleInfo:RoleInfo = new RoleInfo();
            roleInfo.setMonsterInfo(monsterInfo);
            self.roleInfo = roleInfo;
            self.clothesID = monsterInfo[gc.t_monster_displayID];
            var skillIds = monsterInfo[gc.t_monster_skillIds];

            self.skills.length = 0;
            for(var i=0; i<skillIds.length; ++i){
                var skill:Skill = new Skill();
                var skillInfo:SkillInfo = new SkillInfo();
                skillInfo.tabInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, skillIds[i]);
                skill.level = 1;
                skill.skillInfo = skillInfo;
                if(skill.skillInfo.firstCD){
                    skill.resetCD();
                }else{
                    skillInfo.cd = monsterInfo[gc.t_monster_attackTime];
                }
                self.skills.push(skill);
            }
        }

        public dtor(){
            var self = this;
            if(self.entity){
                self.entity.unregisterByKey(gd.HeroEntityCtrl.ON_EQUIP_CHANGED, self.onEquipOrWingChange, self);
                self.entity.unregisterByKey(gd.HeroEntityCtrl.ON_WING_CHANGED, self.onEquipOrWingChange, self);
                self.entity.unregisterByKey(gd.HeroEntityCtrl.ON_SKILL_CHANGED, self.onSkillChanged, self);
                self.entity.unregisterByKey(gd.HeroEntityCtrl.ON_GIFT_SKILL_CHANGED, self.onGiftSkillChanged, self);
                self.entity.unregisterByKey(gd.HeroTalismanCtrl.ON_GIFT_EQUIP_CHANGED, self.onGiftEquipChanged, self);
            }
            if(self.curEnemy){
                self.curEnemy.removeEventListener(ROLE_EVENT_DIE,self.onCurEnemyDie,self);
            }
            self.selfs = null;
            self.enemys = null;
            self.allRoles = null;
            self.mainRole = null;
            self.moveToAimEnemy = null;
            self.roleInfo = null;
            self.skills.length = 0;
            self.buffs.length = 0;
        }

	}
}
