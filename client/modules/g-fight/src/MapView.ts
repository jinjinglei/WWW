module g_fight {
    export var MAP_EVENT_HPMP_CHANGE: string = "MAP_EVENT_HP_CHANGE";
    export var MAP_EVENT_WINCOUNT_CHANGE:string = "MAP_EVENT_WINCOUNT_CHANGE";
    export var MAP_EVENT_IS_FINDING_MONSTER_CHANGE: string = "MAP_EVENT_IS_FINDING_MONSTER_CHANGE";
    export var MAP_EVENT_TOTAL_HURT_CHANGE: string = "MAP_EVENT_TOTAL_HURT_CHANGE";

    export var MINI_SPACE_TIME:number = 100;
    /**
     *
     * @author
     *
     */
    export class MapView extends egret.Sprite{
        public mapW: number = 480;
        public mapH: number = 680;
        public mapTW:number = 960;
        public mapTH:number = 1280;
        public mapID: number;
        private _thumbCon:egret.Sprite;
        private _bgCon: egret.Sprite;
        private _shadowCon:egret.Sprite;
        private _itemCon: egret.Sprite;
        private _roleCon: egret.Sprite;
        private _effectCon:egret.Sprite;
        private _pvpTimeout:number;

        //private _mainRole: Role;
        private _allRoles: Array<Role> = [];
        private _selfRoles: Array<Role> = [];
        private _enemyRoles: Array<Role> = [];
        private _isPicking:boolean = false;
        private _copyId:number;
        private _pvpType:number=-1;
        private _pveType:number=-1;
        private worldBossId:number;
        public monsterId:number;
        private loots = [];
        private _goingNext:boolean;//正在进入下一个普通副本
        private needEnterCopyEffect:boolean;
        private _isFindingMonster:boolean;
        private _findTimeId:number;
        private delayRequestId:number;
        private _roleAllDie:boolean;
        private _isEnterMap:boolean = true;
        private _totalHurt = 0;

        public get isNormalCopy(){
            //return this._pvpType==-1&&!this._isBossCopy&&!this.isWorldBoss&&!this.isBossCoffers;
            return this._pvpType==-1&&this._pveType==-1;
        }
        public getEnemyRoleAt(index:number):Role{
            return this._enemyRoles[index];
        }

        get pveType():number{
            return this._pveType;
        }
        get pvpType():number{
            return this._pvpType;
        }

        public set isFindingMonster(value:boolean){
            this._isFindingMonster = value;
            this.dispatchEvent(new egret.Event(MAP_EVENT_IS_FINDING_MONSTER_CHANGE));
        }
        public get isFindingMonster():boolean{
            return this._isFindingMonster;
        }

        public set totalHurt(value:number){
            this._totalHurt = value;
            this.dispatchEvent(new egret.Event(MAP_EVENT_TOTAL_HURT_CHANGE));
        }
        public get totalHurt():number{
            return this._totalHurt;
        }
        public get isEnterMap():boolean{
            return this._isEnterMap;
        }

        constructor(){
            super();
            var self = this;

            self.touchChildren = self.touchEnabled = false;

            Role.maxCol = Math.floor(this.mapTW/Role.cellW);
            Role.maxRow = Math.floor(this.mapTH/Role.cellH);

            self._pvpTimeout = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.battleSet)[0];

            self._thumbCon = new egret.Sprite();
            self._bgCon = new egret.Sprite();
            self._shadowCon = new egret.Sprite();
            self._itemCon = new egret.Sprite();
            self._roleCon = new egret.Sprite();
            self._effectCon = new egret.Sprite();
            //self._bgCon.cacheAsBitmap = true;

            self.addChild(self._thumbCon);
            self.addChild(self._bgCon);
            self.addChild(self._shadowCon);
            self.addChild(self._itemCon);
            self.addChild(self._roleCon);
            self.addChild(self._effectCon);

            //self.touchChildren = true;
            //self.touchEnabled = true;
            //self.addEventListener(egret.TouchEvent.TOUCH_TAP,self.onTouchTap,self);
            self.addEventListener(egret.Event.ADDED_TO_STAGE, self.onAddedToStage, self);
            self.addEventListener(egret.Event.REMOVED_FROM_STAGE, self.onRemovedFromStage, self);
        }

        onAddedToStage(event){
            var self = this;
            for(var i=0; i<self._allRoles.length; ++i){
                var role:Role = self._allRoles[i];
                var roleView: RoleView = new RoleView();
                roleView.setRole(role);
                self._roleCon.addChild(roleView);
                if(role.gift){
                    var giftView: GiftView = new GiftView();
                    giftView.setGift(role.gift);
                    self._roleCon.addChild(giftView);
                }

                var roleNameView: RoleNameView = new RoleNameView();
                roleNameView.setRole(role);
                self._effectCon.addChild(roleNameView);

                var roleShadowView: RoleShadowView = new RoleShadowView();
                roleShadowView.setRole(role);
                self._shadowCon.addChild(roleShadowView);
            }
        }
        onRemovedFromStage(event){
            var self = this;
            while(self._roleCon.numChildren){
                var child:any = self._roleCon.removeChildAt(0);
                if(child.dtor!=null){
                    child.dtor();
                }
            }
            while(self._effectCon.numChildren){
                var child:any = self._effectCon.removeChildAt(0);
                if(child.dtor!=null){
                    child.dtor();
                }
            }
            while(self._shadowCon.numChildren){
                var child:any = self._shadowCon.removeChildAt(0);
                if(child.dtor!=null){
                    child.dtor();
                }
            }
        }

        public get mainRole():Role{
            return this._selfRoles[0];
        }

        set copyId(value:number){
            var self = this;
            if(self._copyId != value){
                self.needEnterCopyEffect = true;
            }
            self._copyId = value;
        }
        get copyId():number{
            return this._copyId;
        }

        enterTimerOut;
        exitTimerOut;
        needEnterEffect = true;
        fightStartTime = 0;
        //fightDateLastTime;
        public enterMap(mapID:number, needEnterEffect:boolean):void{
            var self = this;
            self.fightStartTime = Date.newDate().getTime();//检测UI时有用到
            self._isEnterMap = true;
            self.removeEventListener(egret.Event.ENTER_FRAME,self.onEnterFrame,self);
            if(self.mapID!=mapID){
                while(self._thumbCon.numChildren){
                    self._thumbCon.removeChildAt(0);
                }

                mo.R.unload("mapview", "dynamic2/map_"+self.mapID+"_small.jpg");
                mo.R.loadTo("mapview","dynamic2/map_" + mapID + "_small.jpg", function(){
                    var bitmap:egret.Bitmap = new egret.Bitmap();
                    var texture = RES.getRes("dynamic2/map_"+mapID+"_small.jpg");
                    if(texture){
                        bitmap.bitmapData = texture.bitmapData;
                        //bitmap.texture = texture;
                        bitmap.width = self.mapTW;
                        bitmap.height = self.mapTH;
                        while(self._thumbCon.numChildren){
                            self._thumbCon.removeChildAt(0);
                        }
                        self._thumbCon.addChild(bitmap);
                    }
                },self);

                //RES.destroyRes("resource/dynamic2/map_"+self.mapID+"_small.jpg");
                //RES.getResByUrl("resource/dynamic2/map_"+mapID+"_small.jpg",function(texture){
                //    var bitmap:egret.Bitmap = new egret.Bitmap();
                //    bitmap.bitmapData = texture.bitmapData;
                //    bitmap.width = self.mapTW;
                //    bitmap.height = self.mapTH;
                //    while(self._thumbCon.numChildren){
                //        self._thumbCon.removeChildAt(0);
                //    }
                //    self._thumbCon.addChild(bitmap);
                //},self);
            }
            self.mapID = mapID;
            self.needEnterEffect = needEnterEffect;
            self.clearFight();
            clearInterval(self.enterTimerOut);
            clearInterval(self.exitTimerOut);
            self.enterTimerOut = setInterval(function ():void {
                self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
                //if(self.stage){
                self.addEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
                self.lastExeAITime = 0;
                //}
                self.fightStartTime = Date.newDate().getTime();
                //self.fightDateLastTime = 0;
                clearInterval(self.enterTimerOut);
            }, 1000);
        }
        public exitMap(enterMapId, cb):void{
            var self = this;
            self._isEnterMap = false;
            self.removeAllRoleEvent();
            self.clearFinding();
            self.fightStartTime -= 150000;
            self.removeEventListener(egret.Event.ENTER_FRAME,self.onEnterFrame,self);
            var hasExitEffect = false;
            for(var i=0; i<self._roleCon.numChildren; ++i){
                var roleView:RoleView = <RoleView>self._roleCon.getChildAt(i);
                roleView.stop();
                if(roleView.role) egret.Tween.removeTweens(roleView.role);

                if(self._selfRoles.indexOf(roleView.role)!=-1){
                    self.createFightEffect(26, roleView.x,roleView.y-10,ROLE_ASPECT_UP);
                    hasExitEffect = true;
                }
            }
            var oldMapID, oldRow, oldCol;
            for(var i=0; i<self._bgCon.numChildren; ++i){
                var mapTileView:MapTileView = (<MapTileView>self._bgCon.getChildAt(i));
                oldMapID = mapTileView.mapID;
                if(oldMapID != enterMapId){
                    oldRow = mapTileView.row;
                    oldCol = mapTileView.col;
                    mapTileView.mapID = -1;
                    mapTileView.row = -99999;
                    mapTileView.col = -99999;
                    RES.destroyRes(MapTileView.getPath(oldMapID, oldRow, oldCol));
                }
            }
            clearInterval(self.enterTimerOut);
            clearInterval(self.exitTimerOut);
            var delayTime = 0;
            if(hasExitEffect){
                delayTime = 1000;
            }else{
                delayTime = 200;
            }
            self.exitTimerOut = setInterval(function():void{
                cb.call(self);
                clearInterval(self.exitTimerOut);
            },delayTime);
        }
        playEnterEffect(){
            var self = this;
            if(self.needEnterEffect){
                for(var i=0; i<self._roleCon.numChildren; ++i){
                    var roleView:RoleView = <RoleView>self._roleCon.getChildAt(i);
                    roleView.stop();
                    if(self._selfRoles.indexOf(roleView.role)!=-1){
                        self.createFightEffect(26, roleView.x,roleView.y-10,ROLE_ASPECT_UP);
                    }
                }
            }
        }

        private removeAllRoleEvent() {
            var self = this;
            for (var i = 0; i < self._allRoles.length; ++i) {
                var role:Role = self._allRoles[i];
                role.removeEventListener(ROLE_EVENT_ATTACK, self.onRoleAttack, self);
                role.removeEventListener(ROLE_EVENT_HURT, self.onRoleHurt, self);
                role.removeEventListener(ROLE_EVENT_HURT, self.onRoleHurtNoView, self);
                role.removeEventListener(ROLE_EVENT_REVIVE, self.onRoleRevive, self);
                role.removeEventListener(ROLE_EVENT_DIE, self.onRoleDie, self);
                role.removeEventListener(ROLE_EVENT_CALL_PET, self.onRoleCallPet, self);
                role.removeEventListener(ROLE_EVENT_GIFT_EQUIP_CHANGE, self.onRoleGiftEquipChange, self);
            }
        }

        private clearFight():void{
            var self = this;
            if(self.mainRole!=null){
                self.mainRole.removeEventListener(ROLE_EVENT_POS_CHANGE, self.onMainRolePosChange, self);
            }
            self.removeAllRoleEvent();
            while(self._allRoles.length){
                var role:Role = self._allRoles.pop();
                role.dtor();
            }
            self._selfRoles.length = 0;
            self._enemyRoles.length = 0;
            self._isPicking = false;

            while(self._bgCon.numChildren){
                self._bgCon.removeChildAt(0);
            }
            while(self._itemCon.numChildren){
                self._itemCon.removeChildAt(0);
            }
            while(self._roleCon.numChildren){
                var child:any = self._roleCon.removeChildAt(0);
                if(child.dtor!=null){
                    child.dtor();
                }
            }
            while(self._effectCon.numChildren){
                var child:any = self._effectCon.removeChildAt(0);
                if(child.dtor!=null){
                    child.dtor();
                }
            }
            while(self._shadowCon.numChildren){
                var child:any = self._shadowCon.removeChildAt(0);
                if(child.dtor!=null){
                    child.dtor();
                }
            }
        }

        private changeMainRole():void{
            var self = this;
            if(self.mainRole==null)
                return;
            self.mainRole.addEventListener(ROLE_EVENT_POS_CHANGE, self.onMainRolePosChange, self);
            for(var i=0; i<self._selfRoles.length; ++i){
                self._selfRoles[i].mainRole = self.mainRole;
            }
        }

        forceNormalCopy():void{
            var self = this;
            gd.fightCtrl.isSpFighting = false;
            self.clearFight();
            self._pvpType = -1;
            self._pveType = -1;
            self.loots = [];
            var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, gd.copyCtrl.getNormalCurCopyId());
            var mapID = copyInfo[gc.t_copy_displayID];
            self.exitMap(mapID, function () {
                self.enterMap(mapID, true);
                self.checkNextWave();
            });
        }

        public startPvpFight(myHeros:Array<gd.HeroEntityCtrl>, enemys:Array<gd.HeroEntityCtrl>, type:number, name:string=null):void{
            var self = this;
            self.needEnterCopyEffect = true;
            self._pveType = -1;
            self._pvpType = type;
            self._goingNext = false;
            self._roleAllDie = false;
            var copyInfo;
            if(self._pvpType==gc.c_prop.fightTypeKey.pk){
                //self.copyId = 37;//野外不变
                copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self._copyId);
            }else if(self._pvpType==gc.c_prop.fightTypeKey.guildWar){
                self.copyId = 4003;
                copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.copyId);
            }else{
                self.copyId = 4002;
                copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.copyId);
            }
            var mapID = copyInfo[gc.t_copy_displayID];
            self.exitMap(mapID, function(){
                self.enterMap(mapID, true);
                var role:Role;
                for(var i=0;i<myHeros.length; ++i){
                    role = self.createRole(myHeros[i], true, i);
                    role.roleInfo.isPvPFight = true;
                }
                for(var i=0;i<enemys.length; ++i){
                    role = self.createRole(enemys[i], false, i, name);
                    role.roleInfo.isPvPFight = true;
                }
                for (var i = 0; i < self._allRoles.length; ++i) {
                    self._allRoles[i].revive();
                }
                gd.fightCtrl.isDie = false;
                if(self.needEnterCopyEffect){
                    self.needEnterCopyEffect = false;
                    EnterCopyEffect.create().setData({copyId:self.copyId, monsterId:-1}).show();
                }
                if(baseTopBar){
                    baseTopBar.showCopyName(self.copyId, -1);
                }
                self.playEnterEffect();
                self.changeMainRole();
                self.onMainRolePosChange();
            });
        }

        //都是Boss,普通副本不进入这里
        public enterCopy(copyType:number, copyID:number, loots:any, bossId:number=0):void{
            var self = this;
            self._pvpType = -1;
            self._pveType = copyType;
            self.loots = loots||[null];
            self._goingNext = false;
            self.needEnterCopyEffect = true;
            self._roleAllDie = false;
            self.totalHurt = 0;
            if(self._pveType == gc.c_prop.fightTypeKey.worldBoss){
                var bossInfo;
                if (gd.bossCtrl.isGuildBoss(bossId)) {
                    bossInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_bossParameter, bossId);
                    copyID = bossInfo[gc.c_bossParameter_copyId];
                } else {
                    bossInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_bossWorld, bossId);
                    copyID = bossInfo[gc.c_bossWorld_copyId];
                }
            }
            self.copyId = copyID;

            var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyID);
            var mapId = copyInfo[gc.t_copy_bossSpace];
            self.exitMap(mapId, function(){
                var isWorldBoss = self._pveType==gc.c_prop.fightTypeKey.worldBoss;

                self.enterMap(mapId, true);
                var list:Array<gd.HeroEntityCtrl> = gd.heroCtrl.getFightList();
                for(var i=0;i<list.length; ++i){
                    var role:Role = self.createRole(list[i], true, i, null);
                }
                gd.fightCtrl.isDie = false;
                self.playEnterEffect();
                self.createMonsterByLoots(bossId||copyInfo[gc.t_copy_bossID], self.loots, isWorldBoss);
                self.changeMainRole();
                self.onMainRolePosChange();
                if(self._pveType == gc.c_prop.fightTypeKey.worldBoss){
                    self.worldBossHpChange();
                }
            });
        }

        //public enterWorldBoss(bossId){
        //    var self = this;
        //    var loots = [null];
        //    self._pvpType = -1;
        //    self._isBossCopy = false;
        //    self.isBossCoffers = false;
        //    self.isWorldBoss = true;
        //    self.loots = loots;
        //    self._goingNext = false;
        //    self.needEnterCopyEffect = true;
        //    self.worldBossId = bossId;
        //
        //    self.exitMap(function(){
        //        var bossInfo;
        //        var mapId;
        //        if (gd.bossCtrl.isGuildBoss(bossId)) {
        //            bossInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_bossParameter, bossId);
        //            mapId = bossInfo[gc.c_bossParameter_mapId];
        //        } else {
        //            bossInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_bossWorld, bossId);
        //            mapId = bossInfo[gc.c_bossWorld_mapId];
        //        }
        //        self.enterMap(mapId, true);
        //        var list:Array<gd.HeroEntityCtrl> = gd.heroCtrl.getList();
        //        for(var i=0;i<list.length; ++i){
        //            var role:Role = self.createRole(list[i], true, i, null);
        //            role.roleInfo.isWorldBossFight = false;
        //        }
        //        gd.fightCtrl.isDie = false;
        //        self.playEnterEffect();
        //        self.createMonsterByLoots(self.worldBossId, loots, true);
        //        self.changeMainRole();
        //        self.onMainRolePosChange();
        //        self.worldBossHpChange();
        //    });
        //}

        public worldBossHpChange(){
            var self = this;
            if(self._pveType!=gc.c_prop.fightTypeKey.worldBoss) return;
            var role = self._enemyRoles[0];
            if(!role) return;

            role.hp = gd.curBFECtrl.getCurHp();
            if(role.hp<=0){
                role.die();
            }
        }

        public roleListChange(){
            var self = this;
            var heroList = gd.heroCtrl.getFightList();
            var newRoles = [];
            var notHeroRoles = [];

            for(var i=0; i<self._selfRoles.length; ++i){
                var role = self._selfRoles[i];
                role.medalId = 0;
                role.removeEventListener(ROLE_EVENT_POS_CHANGE, self.onMainRolePosChange, self);
                for(var n=0; n<heroList.length; ++n){
                    var hero = heroList[n];
                    if(role.entity && role.entity.job==hero.job){
                        newRoles[n] = role;
                        break;
                    }
                }
                if(n==heroList.length){
                    notHeroRoles.push(role);
                }
            }
            self._selfRoles = newRoles.concat(notHeroRoles);
            self.changeMainRole();
        }

        public createRole(entity:gd.HeroEntityCtrl, isSelf:boolean, index:number, name:string=null):Role{
            var self = this;
            var petNum = 0;
            for(var i=0; i<self._selfRoles.length; ++i){
                if(self._selfRoles[i] instanceof Pet){
                    petNum ++;
                    break;
                }
            }
            if(isSelf && self._selfRoles.length-petNum==gd.heroCtrl.getList().length){
                return;
            }
            var role = new Role();
            role.name = name;
            role.isSelf = isSelf;
            role.isMain = index == 0;
            if(isSelf){
                role.x = self.mapTW/2;
                role.y = self.mapTH/2;
                if(self.mainRole!=null){
                    role.x = self.mainRole.x-120+Math.random()*120;
                    role.y = self.mainRole.y-120+Math.random()*120;
                }
                if(index==0){
                    role.isKing = gd.userCtrl.getIsKing();
                    role.medalId = gd.medalCtrl.getMedalTitle();
                }
            }else{
                role.x = self.mapTW/2-250+Math.random()*100;
                role.y = self.mapTH/2-250+Math.random()*100;
                if(index==0){
                    role.isKing = entity.fightData[3];
                    role.medalId = entity.fightData[6];
                }
            }

            role.setEntity(entity);
            var clothesId = entity.getClothDisplayID();
            var weaponID = entity.getWeaponDisplayID();
            var wingID = entity.getWingDisplayID();

            //if(role.job == gc.c_prop.heroJobKey.fs){
            //    role.clothesID = 222002;
            //}else if(role.job == gc.c_prop.heroJobKey.ds){
            //    role.clothesID = 322002;
            //}else if(role.job == gc.c_prop.heroJobKey.zs){
            //    role.clothesID = 100012;
            //}else{
            //    //role.clothesID = 6064;
            //}

            role.clothesID = clothesId;
            role.weaponID = weaponID;
            role.wingID = wingID;
            role.action = ROLE_ACTION_STAND;
            role.aspect = ROLE_ASPECT_DOWN;
            role.allRoles = self._allRoles;
            role.revive();
            if(isSelf){
                role.selfs = self._selfRoles;
                role.enemys = self._enemyRoles;
                self._selfRoles.push(role);
            }else{
                role.selfs = self._enemyRoles;
                role.enemys = self._selfRoles;
                self._enemyRoles.push(role);
            }

            role.addEventListener(ROLE_EVENT_ATTACK, self.onRoleAttack, self);
            role.addEventListener(ROLE_EVENT_HURT, self.onRoleHurt, self);
            role.addEventListener(ROLE_EVENT_HURT, self.onRoleHurtNoView, self);
            role.addEventListener(ROLE_EVENT_REVIVE,self.onRoleRevive,self);
            role.addEventListener(ROLE_EVENT_DIE, self.onRoleDie, self);
            role.addEventListener(ROLE_EVENT_CALL_PET, self.onRoleCallPet, self);
            role.addEventListener(ROLE_EVENT_GIFT_EQUIP_CHANGE, self.onRoleGiftEquipChange, self);
            if(isSelf){
                role.addEventListener(ROLE_EVENT_HP_CHANGE,self.onMyRoleHpChange,self);
            }
            self.addRoleToMap(role);
            return role;
        }

        public createMonster(monsterId, loot, baseX, baseY, isBoss):Role{
            var self = this;
            var role: Role = new Role();
            role.setMoster(monsterId);
            role.action = ROLE_ACTION_STAND;
            role.aspect = ROLE_ASPECT_DOWN;
            role.allRoles = self._allRoles;
            role.loot = loot;
            if(!isBoss){
                role.x = baseX-175+Math.random()*350;
                role.y = baseY-175+Math.random()*350;
            }else{
                if(Math.random()<0.5){
                    role.x = Math.random()<0.5?baseX-200+Math.random()*75:baseX+200-Math.random()*75;
                    role.y = baseY-175+Math.random()*350;
                }else{
                    role.x = baseX-175+Math.random()*350;
                    role.y = Math.random()<0.5?baseY-200+Math.random()*75:baseY+200-Math.random()*75;
                }
            }

            role.selfs = self._enemyRoles;
            role.enemys = self._selfRoles;
            self._enemyRoles.push(role);

            role.revive();
            role.addEventListener(ROLE_EVENT_ATTACK,self.onRoleAttack,self);
            role.addEventListener(ROLE_EVENT_HURT,self.onRoleHurt,self);
            role.addEventListener(ROLE_EVENT_HURT,self.onRoleHurtNoView,self);
            role.addEventListener(ROLE_EVENT_DIE,self.onRoleDie,self);
            self.addRoleToMap(role);
            return role;
        }

        public callPet(mosterID:number, owner:Role):void{
            var self = this;
            owner.curPetNum ++;
            var role: Pet = new Pet();
            role.setMoster(mosterID);
            role.owner = owner;
            role.isSelf = owner.isSelf;
            role.action = ROLE_ACTION_STAND;
            role.aspect = ROLE_ASPECT_DOWN;
            role.allRoles = self._allRoles;
            role.x = owner.x+Math.random()*90;
            role.y = owner.y+Math.random()*50;

            if(role.isSelf){
                role.selfs = self._selfRoles;
                role.enemys = self._enemyRoles;
                role.mainRole = self.mainRole;
                self._selfRoles.push(role);
            }else{
                role.selfs = self._enemyRoles;
                role.enemys = self._selfRoles;
                self._enemyRoles.push(role);
            }

            role.revive();
            role.addEventListener(ROLE_EVENT_ATTACK,self.onRoleAttack,self);
            role.addEventListener(ROLE_EVENT_HURT,self.onRoleHurt,self);
            role.addEventListener(ROLE_EVENT_HURT,self.onRoleHurtNoView,self);
            role.addEventListener(ROLE_EVENT_DIE,self.onRoleDie,self);
            self.addRoleToMap(role);
        }

        private onRoleDie(e:egret.Event):void{
            var self = this;
            var role: Role = e.currentTarget;
            var index: number = self._allRoles.indexOf(role);
            var roleView:RoleView = self.getRoleView(role);
            var giftView:GiftView = self.getGiftView(role);
            var roleNameView:RoleNameView = self.getRoleNameView(role);
            var roleShadowView:RoleShadowView = self.getRoleShadowView(role);
            var loot:Array<any> = role.loot;

            if(roleView && roleView.parent){
                roleView.parent.removeChild(roleView);
                roleView.dtor();
            }
            if(roleNameView && roleNameView.parent) {
                roleNameView.parent.removeChild(roleNameView);
                roleNameView.dtor();
            }
            if(roleShadowView && roleShadowView.parent) {
                roleShadowView.parent.removeChild(roleShadowView);
                roleShadowView.dtor();
            }
            if(giftView && giftView.parent){
                giftView.parent.removeChild(giftView);
                giftView.dtor();
            }

            role.removeEventListener(ROLE_EVENT_ATTACK,self.onRoleAttack,self);
            role.removeEventListener(ROLE_EVENT_HURT,self.onRoleHurt,self);
            role.removeEventListener(ROLE_EVENT_HURT,self.onRoleHurtNoView,self);
            role.removeEventListener(ROLE_EVENT_REVIVE,self.onRoleRevive,self);
            role.removeEventListener(ROLE_EVENT_DIE,self.onRoleDie,self);
            role.removeEventListener(ROLE_EVENT_CALL_PET,self.onRoleCallPet,self);
            role.removeEventListener(ROLE_EVENT_GIFT_EQUIP_CHANGE, self.onRoleGiftEquipChange, self);
            role.dtor();
            var oldMainRole:Role = self.mainRole;

            self._allRoles.splice(index,1);
            index = self._enemyRoles.indexOf(role);
            if(index != -1)
                self._enemyRoles.splice(index,1);
            index = self._selfRoles.indexOf(role);
            if(index != -1)
                self._selfRoles.splice(index,1);

            if(role == oldMainRole){
                role.removeEventListener(ROLE_EVENT_POS_CHANGE, self.onMainRolePosChange, self);
                self.changeMainRole();
            }

            if(loot!=null){
                //if (!self._isBossCopy){
                //    gd.fightCtrl.pickLoot(loot[0],{},function(){},self);
                //}
                var numLoot = loot[1].length;
                if(numLoot>0){
                    var numR = Math.ceil(numLoot/4);
                    var numC = numLoot>=4?4:numLoot;
                    for(var i=0; i<numLoot; ++i){
                        var item = loot[1][i];
                        var lootView = new LootView();
                        lootView.itemID = item[0];
                        lootView.itemNum = item[1];
                        lootView.row = role.row+Math.floor(i/numC)-Math.floor(numR/2);
                        lootView.col = role.col+Math.floor(i%numC)-Math.floor(numC/2);

                        if(lootView.row<0){
                            lootView.row = 0;
                        }else if(lootView.row>Role.maxRow-1){
                            lootView.row = Role.maxRow-1;
                        }
                        if(lootView.col<0){
                            lootView.col = 0;
                        }else if(lootView.col>Role.maxCol-1){
                            lootView.col = Role.maxCol-1;
                        }

                        lootView.x = (lootView.col+0.5)*Role.cellW;
                        lootView.y = (lootView.row+0.5)*Role.cellH;
                        lootView.updateView();
                        self._itemCon.addChild(lootView);
                        //lootView.textField.x = lootView.x-lootView.textField.width/2;
                        lootView.textField.y = lootView.y-25;
                        self._effectCon.addChild(lootView.textField);
                    }
                }
            }
            if(gd.fightCtrl.isSpFighting){
                //self._roleAllDie的判断只在特殊战斗中生效
                self._roleAllDie = self.isFightOver();//赋值为true仅在有死亡时
            }

            self.checkNextWave(true);
        }

        private onRoleCallPet(e:CusEvent):void{
            var self = this;
            var petID:number = e.data.petID;
            var num:number = e.data.num;
            var owner:Role = e.data.owner;
            var isKillAll:boolean = e.data.isKillAll;

            if(isKillAll){
                for(var i=0; i<self._allRoles.length; ++i){
                    var pet:Pet = <Pet>self._allRoles[i];
                    if(pet instanceof Pet){
                        if(pet.owner == owner){
                            pet.hp = 0;
                        }
                    }
                }
            }

            for(var i=0;i<num-owner.curPetNum; ++i){
                self.callPet(petID, owner);
            }
        }

        private onRoleGiftEquipChange(e){
            this.checkRoleGift(e.currentTarget);
        }
        private checkRoleGift(role){
            var self = this;
            var giftView = self.getGiftView(role);
            if(role.gift){
                if(!giftView){
                    giftView = new GiftView();
                    self._roleCon.addChild(giftView);
                }
                giftView.setGift(role.gift);
            }else{
                var giftView = self.getGiftView(role);
                if(giftView && giftView.parent){
                    giftView.parent.removeChild(giftView);
                    giftView.dtor();
                }
            }
        }

        clearFinding(){
            var self = this;
            self.isFindingMonster = false;
            if(self.mainRole){
                self.mainRole.isFindingMonster = false;
            }
            clearInterval(self._findTimeId);
        }

        public checkNextWave(sameMap:boolean=false):void{
            var self = this;
            if (!self._isEnterMap) return;
            var isWin:boolean = false;
            if(!gd.fightCtrl.isSpFighting){
                if(self._goingNext)
                    return;
                if(self.isFightOver()) {
                    isWin = self._enemyRoles.length==0;
                    gd.fightCtrl.isDie = !isWin;

                    //var dTimer = Date.newDate().getTime()-self.fightStartTime;
                    //var ddTime = Math.abs(self.fightDateLastTime-dTimer)
                    //if(ddTime>500){
                    //    //console.log("使用外挂"+ddTime+" "+dTimer+" "+self.fightDateLastTime);
                    //    //mo.showMsg(gc.id_c_msgCode.noRoleLvl,ddTime);
                    //}

                    self.copyId = gd.copyCtrl.getNormalCurCopyId();
                    var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.copyId);
                    var mapID = copyInfo[gc.t_copy_displayID];
                    if(!isWin){
                        FightRevive.showCallback({callback:function(){
                            self.enterMap(mapID, true);
                            self.checkNextWave();
                        }, target: self, begTime: Date.newDate().getTime() + 5 * 1000
                        });
                        return;
                    }

                    if (self.isNormalCopy && self._itemCon.numChildren > 0) {
                        self._isPicking = true;
                        var lootView = <LootView>self._itemCon.getChildAt(self._itemCon.numChildren - 1);
                        self.mainRole.moveTo(lootView.row, lootView.col);
                    } else {
                        self._isPicking = false;
                        var list:Array<gd.HeroEntityCtrl> = gd.heroCtrl.getFightList();
                        for (var i = 0; i < list.length; ++i) {
                            var isExist:boolean = false;
                            for (var k = 0; k < self._selfRoles.length; ++k) {
                                if (self._selfRoles[k].uid == list[i].get(gc.dsConsts.HeroEntity.id)) {
                                    isExist = true;
                                    self._selfRoles[k].roleInfo.setHeroProp(list[i].props);
                                    break;
                                }
                            }
                            if (isExist)
                                continue;
                            self.createRole(list[i], true, i);
                        }
                        gd.fightCtrl.isDie = false;
                        self.playEnterEffect();
                        self.changeMainRole();
                        self.onMainRolePosChange();
                        for (var i = 0; i < self._selfRoles.length; ++i) {
                            self._selfRoles[i].revive();
                        }

                        //相同地图下才记连胜
                        if(isWin && sameMap){
                            gd.copyCtrl.updateWinningStreak(function(){},self);
                        }

                        if(self.loots.length>0){
                            var uidArys = [];
                            for(var i=0; i<self.loots.length; ++i){
                                uidArys.push(self.loots[i][0]);
                            }
                            gd.fightCtrl.pickLoot(uidArys,{},function(){},self);
                            self.loots = [];
                        }

                        var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.battleSet);
                        var leftTime = gameInfo[1] * 1000 - (Date.newDate().getTime() - self.fightStartTime);
                        if(leftTime>0 && !self._isFindingMonster){
                            self.clearFinding();
                            self.isFindingMonster = true;
                            if(self.mainRole){
                                self.mainRole.isFindingMonster = true;
                            }
                            self._findTimeId = setInterval(function () {
                                self.checkNextWave();
                                self.clearFinding();
                            }, leftTime);
                        }else{
                            self.getNextLoot();
                        }
                    }
                }
            }else{
                if(self._roleAllDie){
                    isWin = self._enemyRoles.length==0;
                    gd.fightCtrl.isDie = !isWin;
                    var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, gd.copyCtrl.getNormalCurCopyId());
                    var mapID = copyInfo[gc.t_copy_displayID];
                    //if (self.isNormalCopy && self._itemCon.numChildren > 0) {
                    if (self._itemCon.numChildren > 0) {
                        self._isPicking = true;
                        var lootView = <LootView>self._itemCon.getChildAt(self._itemCon.numChildren - 1);
                        self.mainRole.moveTo(lootView.row, lootView.col);
                    } else {
                        self._roleAllDie = false;
                        self.removeEventListener(egret.Event.ENTER_FRAME, self.onEnterFrame, self);
                        var list:Array<gd.HeroEntityCtrl> = gd.heroCtrl.getFightList();
                        if (self._pvpType==gc.c_prop.fightTypeKey.pk || self._pvpType==gc.c_prop.fightTypeKey.rankPk) {
                            gd.pkOutCtrl.end(isWin, {} ,function (fightResult) {
                                FightPKWinOrFail.showCallback({isWin:isWin, fightResult:fightResult, callback:function(){
                                    gd.fightCtrl.isSpFighting = false;
                                    self.loots = [];
                                    self.exitMap(mapID, function() {
                                        self.enterMap(mapID, true);
                                        self.checkNextWave();
                                        if(self._pvpType == gc.c_prop.fightTypeKey.rankPk){
                                            gd.pkOutCtrl.getRankList(function(data){
                                                PVPRank.create().setData({rankData:data}).show();
                                            }, self);
                                        }
                                        self._pvpType = -1;
                                    });
                                }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                                });
                            }, self);
                        }else if(self._pvpType==gc.c_prop.fightTypeKey.challengeCupPk){
                            gd.challengeCupCtrl.endFight(isWin,function(fightResult){
                                FightArenaWinOrFail.showCallback({isWin:isWin, fightResult:fightResult, fightType:self._pvpType, callback:function() {
                                    gd.fightCtrl.isSpFighting = false;
                                    self.loots = [];
                                    self.exitMap(mapID, function () {
                                        self.enterMap(mapID, true);
                                        self.checkNextWave();
                                        if (self._pvpType == gc.c_prop.fightTypeKey.rankPk) {
                                            gd.pkOutCtrl.getRankList(function (data) {
                                                PVPRank.create().setData({rankData: data}).show();
                                            }, self);
                                        }
                                        self._pvpType = -1;
                                    });
                                },
                                    target: self,
                                    begTime: Date.newDate().getTime() + 10 * 1000
                                });
                            },self);
                        }else if(self._pvpType==gc.c_prop.fightTypeKey.coffers){
                            gd.coffersCtrl.fightEnd(isWin,function(fightResult){
                                FightCoffersWinOrFail.showCallback({isWin:isWin, fightResult:fightResult, callback:function() {
                                    gd.fightCtrl.isSpFighting = false;
                                    self.loots = [];
                                    self.exitMap(mapID, function () {
                                        self.enterMap(mapID, true);
                                        self.checkNextWave();
                                        self._pvpType = -1;
                                    });
                                }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                                });
                            },self);
                        }else if(self._pvpType==gc.c_prop.fightTypeKey.guildWar){
                            gd.guildWarCtrl.fightEndDoor(isWin,function(fightResult){
                                FightGuildWarWinOrFail.showCallback({isWin:isWin, fightResult:fightResult, callback:function() {
                                    gd.fightCtrl.isSpFighting = false;
                                    self.loots = [];
                                    self.exitMap(mapID, function () {
                                        self.enterMap(mapID, true);
                                        self.checkNextWave();
                                        self._pvpType = -1;
                                    });
                                }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                                });
                            },self);
                        }else if(self._pveType==gc.c_prop.fightTypeKey.coffersBoss){
                            gd.coffersCtrl.fightCoffersEnd(self.totalHurt, function(fightResult){
                                FightCoffersBoss.showCallback({isWin:true, fightResult:fightResult, callback:function() {
                                    gd.fightCtrl.isSpFighting = false;
                                    self.loots = [];
                                    self.exitMap(mapID, function () {
                                        self.enterMap(mapID, true);
                                        self.checkNextWave();
                                        self._pveType = -1;
                                    });
                                }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                                });
                            },self);
                        }else if(self._pveType==gc.c_prop.fightTypeKey.guildCopy){
                            gd.guildCtrl.getInfo(function(){
                                gd.guildCopyCtrl.guildEnd(isWin, function(data){
                                    GuildCopyBossWinOrFail.showCallback({result: data, callback:function() {
                                        gd.fightCtrl.isSpFighting = false;
                                        self.loots = [];
                                        self.exitMap(mapID, function () {
                                            self.enterMap(mapID, true);
                                            self.checkNextWave();
                                            self._pveType = -1;
                                        });
                                    }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                                    });
                                }, self);

                            },self);
                        }else if (self._pveType==gc.c_prop.fightTypeKey.copy) {
                            var fightData = {};
                            var oldStar = gd.copyCtrl.getCopyStar(self.copyId);
                            var newStar = 0;
                            var noDie:boolean = false;
                            var timeLmt:boolean = false;

                            if(isWin){
                                newStar ++;
                                if(self._selfRoles.length>=gd.heroCtrl.getFightList().length){
                                    noDie = true;
                                    newStar ++;
                                }
                                if (Date.newDate().getTime() - self.fightStartTime < 32 * 1000) {
                                    timeLmt = true;
                                    newStar++;
                                }
                            }
                            fightData[gc.dsConsts.FightData.isWin] = isWin;
                            fightData[gc.dsConsts.FightData.star] = newStar;
                            fightData[gc.dsConsts.FightData.vData] = {};
                            gd.copyCtrl.end(isWin,fightData, function (fightResult) {
                                self._pveType = -1;
                                var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.copyId);
                                var copyType = copyInfo[gc.t_copy_type];
                                var subModuleId = -1, copyVip;
                                if(copyType==gc.c_prop.copyTypeKey.equip){
                                    subModuleId = g_consts.HS_SUBMID_EQUIP_COPY;
                                }else if(copyType==gc.c_prop.copyTypeKey.hell){
                                    subModuleId = g_consts.HS_SUBMID_BOSS_COPY;
                                }else if(copyType==gc.c_prop.copyTypeKey.state){
                                    subModuleId = g_consts.HS_SUBMID_STATE_COPY;
                                }else if(copyType==gc.c_prop.copyTypeKey.vip){
                                    subModuleId = g_consts.HS_SUBMID_VIP_COPY;
                                    copyVip = gd.copyCtrl.getCopyVip(self.copyId);
                                }else if(copyType==gc.c_prop.copyTypeKey.normal){
                                    if(!isWin){
                                        gd.userCtrl.setAutoFight(0);
                                    }
                                }else if(copyType==gc.c_prop.copyTypeKey.paTa){
                                    subModuleId = g_consts.HS_SUBMID_TOWER;
                                }
                                if(subModuleId!=-1){
                                    var items = [];
                                    for(var i=0; i<self.loots.length; ++i){
                                        for(var k=0; k<self.loots[i][1].length; ++k){
                                            items.push({itemId:self.loots[i][1][k][0], count:self.loots[i][1][k][1]});
                                        }
                                    }
                                    FightCopyWinOrFail.showCallback({isWin:isWin, noDie:noDie,timeLmt:timeLmt, fightResult:fightResult, items:items, callback:function(){
                                        gd.fightCtrl.isSpFighting = false;
                                        self.loots = [];
                                        self.exitMap(mapID, function() {
                                            if (mo.moduleMgr.curModule.name == g_consts.moduleId.fight) {
                                                var moduleParam = {subModuleId: subModuleId};
                                                if(copyVip) moduleParam["vip"] = copyVip;
                                                mo.moduleMgr.runModule(g_consts.moduleId.home, moduleParam);
                                            }
                                            self.enterMap(mapID, true);
                                            self.checkNextWave();
                                        });
                                    },
                                        target: self,
                                        begTime: Date.newDate().getTime() + 10 * 1000
                                    });
                                }else{
                                    if(!isWin){
                                        FightRevive.showCallback({callback:function(){
                                            gd.fightCtrl.isSpFighting = false;
                                            self.loots = [];
                                            self.exitMap(mapID, function() {
                                                self.needEnterEffect = true;
                                                self.enterMap(mapID, true);
                                                self.checkNextWave();
                                            });
                                        }, target: self, begTime: Date.newDate().getTime() + 5 * 1000
                                        });
                                    }else{
                                        gd.fightCtrl.isSpFighting = false;
                                        self.loots = [];
                                        self.exitMap(mapID, function() {
                                            self.enterMap(mapID, true);
                                            self.checkNextWave();
                                        });
                                    }
                                }
                            }, self);
                        }else if(self._pvpType==gc.c_prop.fightTypeKey.arena){
                            var fightData = {};
                            fightData[gc.dsConsts.FightData.isWin] = isWin;
                            fightData[gc.dsConsts.FightData.star] = 0;
                            fightData[gc.dsConsts.FightData.vData] = {};
                            gd.arenaCtrl.fightEnd(isWin, fightData, function(fightResult){
                                FightArenaWinOrFail.showCallback({isWin:isWin, fightResult:fightResult, fightType:self._pvpType, callback:function(){
                                    gd.fightCtrl.isSpFighting = false;
                                    self.loots = [];
                                    self.exitMap(self.mapID, function() {
                                        self.enterMap(self.mapID, false);
                                        self.checkNextWave();
                                        if (mo.moduleMgr.curModule.name == g_consts.moduleId.fight) {
                                            mo.moduleMgr.runModule(g_consts.moduleId.home, {subModuleId: g_consts.HS_SUBMID_ARENA});
                                        }
                                        self._pvpType = -1;
                                    });
                                },
                                    target: self,
                                    begTime: Date.newDate().getTime() + 10 * 1000
                                });
                            },self);
                        }else if(self._pveType == gc.c_prop.fightTypeKey.worldBoss){
                            if(!isWin){
                                gd.curBFECtrl.exitFight(function(){
                                    FightRevive.showCallback({callback:function(){
                                        self._pveType = -1;
                                        gd.fightCtrl.isSpFighting = false;
                                        self.loots = [];
                                        self.exitMap(mapID, function() {
                                            self.needEnterEffect = true;
                                            self.enterMap(mapID, true);
                                            self.checkNextWave();
                                        });
                                        //在战斗场景且不开启自动打boss才显示世界boss界面
                                        if(mo.moduleMgr.curModule.name == g_consts.moduleId.fight
                                            && !gd.bossFightCtrl.isAutoFight()){
                                            mo.moduleMgr.runModule(g_consts.moduleId.worldBoss,{bossId:self.monsterId});
                                        }
                                    }, target: self, begTime: Date.newDate().getTime() + 5 * 1000
                                    });
                                },self);
                            }else{
                                gd.fightCtrl.isSpFighting = false;
                                self._pveType = -1;
                                self.loots = [];
                                self.exitMap(mapID, function() {
                                    self.needEnterEffect = true;
                                    self.enterMap(mapID, true);
                                    self.checkNextWave();
                                });
                            }
                        }
                    }
                }
            }
        }

        public isFightOver(){
            var self = this;
            if(self._enemyRoles.length==0 || self._selfRoles.length == 0){
                return true;
            }
            return false;
        }

        public skipFight(){
            var self = this;
            var role:Role;

            if(self.isFightOver()) return;

            self.removeAllRoleEvent();

            for (var i = 0; i < self._allRoles.length; ++i) {
                var role:Role = self._allRoles[i];
                role.addEventListener(ROLE_EVENT_DIE, self.onRoleDie, self);
                role.addEventListener(ROLE_EVENT_CALL_PET, self.onRoleCallPet, self);
                role.addEventListener(ROLE_EVENT_HURT, self.onRoleHurtNoView, self);
                role.stand();
                egret.Tween.removeTweens(role);
            }
            while(!self.isFightOver()){
                for (var i = 0; i < self._allRoles.length; ++i) {
                    role = self._allRoles[i];
                    role.exeAI(false);
                }
            }
            for(var i=0; i<self._itemCon.numChildren; ++i){
                var lootView = <LootView>self._itemCon.getChildAt(i);
                lootView.pickUp();
                i--;
            }
            self.checkNextWave(self.isNormalCopy?true:false);
        }

        public getNextLoot(){
            var self = this;
            self._goingNext = true;
            clearInterval(self.delayRequestId);
            self.delayRequestId = setInterval(function () {
                self.getNextLoot();
            }, 5000);
            gd.fightCtrl.getNextLoot(gd.copyCtrl.getNormalCurCopyId(), false,  function (data) {
                clearInterval(self.delayRequestId);
                if(gd.fightCtrl.isSpFighting)
                    return;
                if(self._enemyRoles.length!=0)
                    return;

                self.needEnterEffect = false;
                self.copyId = gd.copyCtrl.getNormalCurCopyId();
                var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, self.copyId);
                self.createMonsterByLoots(copyInfo[gc.t_copy_randMonsters][0], data);
                self._goingNext = false;
                self.fightStartTime = Date.newDate().getTime();
                //self.fightDateLastTime = 0;
            }, self);
        }

        public createMonsterByLoots(monsterId, loots, isWorldBoss=false){
            var self = this;
            self.monsterId = monsterId;
            self.loots = loots;
            if(self.needEnterCopyEffect){
                self.needEnterCopyEffect = false;
                EnterCopyEffect.create().setData({copyId:self.copyId, monsterId:monsterId}).show();
            }
            if(baseTopBar && self.copyId) {
                baseTopBar.showCopyName(self.copyId, self.monsterId);
            }
            var baseX:number = 0;
            var baseY:number = 0;
            if(self.mainRole){
                baseX = self.mainRole.x>self.mapTW/2?(self.mainRole.x-400+Math.random()*50):(self.mainRole.x+300+Math.random()*50);
                baseY = self.mainRole.y>self.mapTH/2?self.mainRole.y-300+Math.random()*50:self.mainRole.y+200+Math.random()*50;
            }
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, monsterId);

            var isBoss = monsterInfo[gc.t_monster_bossLevel]!=0;
            if(isBoss){
                baseX = self.mapTW/2;
                baseY = self.mapTH/2;
            }
            for(var i=0; i<loots.length; ++i){
                var role:Role = self.createMonster(monsterId, loots[i], baseX, baseY, isBoss);
                role.roleInfo.isWorldBossFight = isWorldBoss;
            }
        }

        private  onRoleAttack(event:CusEvent):void{
            var self = this;
            if(!self.stage)
                return;
            var hurtData: HurtData = event.data;
            var attackRole: Role = hurtData.attackRole;
            var hurtRole: Role = hurtData.hurtRole;
            var skill:Skill = hurtData.skill;
            var attackRoleView: RoleView = self.getRoleView(attackRole);
            var hurtRoleView: RoleView = self.getRoleView(hurtRole);

            if(skill.skillInfo.casterEffect!=0){
                var aspect = ROLE_ASPECT_UP;
                if(skill.skillInfo.attackDistance==1){
                    aspect = attackRole.aspect;
                }
                if(attackRole.roleInfo.monsterInfo==null){//非怪物
                    self.createFightEffect(skill.skillInfo.casterEffect, attackRoleView.x,attackRoleView.y-10,aspect);
                }
            }
            if(skill.skillInfo.flyEffect!=0 && self.stage!=null){
                var fightEffect:FightEffect = FightEffect.getFightEffect(skill.skillInfo.flyEffect,ROLE_ASPECT_UP);
                fightEffect.startLoadByKey(skill.skillInfo.flyEffect,ROLE_ASPECT_UP);
                var fx:number = attackRoleView.x;
                var fy:number = attackRoleView.y-30;
                var tx:number = hurtRoleView.x;
                var ty:number = hurtRoleView.y-30;
                fightEffect.x = fx;
                fightEffect.y = fy;
                var dx: number = tx - fx;
                var dy: number = ty - fy;
                var cos: number = dx / Math.sqrt(dx * dx + dy * dy);
                var ang: number = Math.acos(cos);
                if(dy>0)
                    fightEffect.rotation = ang/Math.PI*180;
                else
                    fightEffect.rotation = -ang/Math.PI*180;
                self._effectCon.addChild(fightEffect);
                fightEffect.play(-1);
                egret.Tween.get(fightEffect).to({x:tx, y:ty}, Math.sqrt(dx * dx + dy * dy)*3).call(function():void{
                    if(this.parent)
                        this.parent.removeChild(this);
                },fightEffect);
            }

            //if(self._pvpType==gc.c_prop.fightTypeKey.pk){
            //    if(attackRole.isSelf){
            //        var goldId = gc.c_prop.spItemIdKey.gold;
            //        var goldLoot = [];
            //        for(var i=0; i<14; ++i){
            //            if(Math.random()<0.7){
            //                goldLoot.push([goldId, Math.round(1+Math.random()*10)]);
            //            }
            //        }
            //
            //        var numLoot = goldLoot.length;
            //        if(numLoot>0){
            //            var numR = Math.ceil(numLoot/4);
            //            var numC = numLoot>=4?4:numLoot;
            //            for(var i=0; i<numLoot; ++i){
            //                var item = goldLoot[i];
            //                var lootView = new LootView();
            //                lootView.begTime = Date.newDate().getTime();
            //                lootView.itemID = item[0];
            //                lootView.itemNum = item[1];
            //                lootView.row = attackRole.row+Math.floor(i/numC)-Math.floor(numR/2);
            //                lootView.col = attackRole.col+Math.floor(i%numC)-Math.floor(numC/2);
            //
            //                if(lootView.row<0){
            //                    lootView.row = 0;
            //                }else if(lootView.row>Role.maxRow-1){
            //                    lootView.row = Role.maxRow-1;
            //                }
            //                if(lootView.col<0){
            //                    lootView.col = 0;
            //                }else if(lootView.col>Role.maxCol-1){
            //                    lootView.col = Role.maxCol-1;
            //                }
            //
            //                lootView.x = (lootView.col+0.5)*Role.cellW;
            //                lootView.y = (lootView.row+0.5)*Role.cellH;
            //                lootView.updateView();
            //                self._itemCon.addChild(lootView);
            //                lootView.textField.y = lootView.y-25;
            //                self._effectCon.addChild(lootView.textField);
            //            }
            //        }
            //    }
            //}
        }

        private createFightEffect(key, x, y,aspect):void{
            var self = this;
            if(!self.stage) return;
            var fightEffect:FightEffect = FightEffect.getFightEffect(key, aspect);
            fightEffect.startLoadByKey(key,aspect);
            fightEffect.scaleX = fightEffect.scaleY = 1.1;
            fightEffect.x = x;
            fightEffect.y = y;
            self._effectCon.addChild(fightEffect);
            fightEffect.addEventListener(egret.Event.COMPLETE, function(){
                if(this.parent)
                    this.parent.removeChild(this);
            }, fightEffect);
            fightEffect.play(1);
            fightEffect.scaleX = (aspect < 6 ? 1 : -1);
        }

        private _labelCaches:Array<egret.TextField> = [];
        private getLabel(){
            var self = this;
            if(self._labelCaches.length>0){
                return self._labelCaches.pop();
            }
            var tf:egret.TextField = new egret.TextField();
            tf.stroke = 1;
            tf.strokeColor = 0x000000;
            return tf;
        }
        private removeLabel(label){
            this._labelCaches.push(label);
        }

        private onRoleRevive(event:CusEvent):void{
            var self = this;
            if(!self.stage)
                return;
            //通过复活戒指复活
            var hurtRole: Role = event.currentTarget;
            var label: egret.TextField = self.getLabel();
            var hurtRoleView: RoleView = self.getRoleView(hurtRole);

            label.size = 27;
            label.textColor = 0xfff000;
            self._effectCon.addChild(label);
            label.text = "复活";
            label.textColor = 0xffc100;
            label.x = hurtRoleView.x-label.width/2;
            label.y = hurtRoleView.y - 60;
            egret.Tween.get(label).to({y:label.y-60},500).call(function(){
                if(label.parent)
                    label.parent.removeChild(label);
            });
        }

        private onRoleHurtNoView(event:CusEvent):void{
            var self = this;
            var hurtData: HurtData = event.data;
            var hurtRole: Role = hurtData.hurtRole;
            var attackRole: Role = hurtData.attackRole;
            if((self._pveType==gc.c_prop.fightTypeKey.coffersBoss)
                && !hurtRole.isSelf){
                self.totalHurt += -hurtData.hp;
            }

            if(hurtData.hp!=0) {
                if (hurtData.hp < 0) {
                    if (self._pveType == gc.c_prop.fightTypeKey.worldBoss && !hurtRole.isSelf) {
                        if(gd.curBFECtrl.isLimitHp() && !hurtRole.hasBuff(12)){
                            hurtRole.addBuff(12, 1);
                        }
                        var bossHurt = hurtData.hp * (1 + gd.curBFECtrl.getInspireHurt() / 10000);
                        bossHurt = Math.ceil(bossHurt);
                        var heroId = -1;
                        if (attackRole.entity) {
                            heroId = attackRole.entity.get(gc.dsConsts.HeroEntity.id);
                        }
                        gd.curBFECtrl.hurt(-bossHurt, heroId);
                    }
                }
            }
        }

        private onRoleHurt(event:CusEvent):void{
            var self = this;
            var hurtData: HurtData = event.data;
            var hurtRole: Role = hurtData.hurtRole;
            if(!self.stage)
                return;
            var attackRole: Role = hurtData.attackRole;
            var skill:Skill = hurtData.skill;
            var hurtRoleView: RoleView = self.getRoleView(hurtRole);

            if(hurtData.hp!=0){
                var label: egret.TextField = self.getLabel();
                label.size = 18;
                label.textColor = 0xfff000;
                self._effectCon.addChild(label);
                label.text = hurtData.hp.toString();
                label.x = hurtRoleView.x-label.width/2;
                label.y = hurtRoleView.y - 50;
                var toX: number,toY: number;
                var toX2: number,toY2: number;
                var toScaleX:number=1, toScaleY:number=1;

                if(hurtData.hp<0){
                    if(attackRole.col==hurtRole.col){
                        toX = toX2 = label.x;
                    } else if(attackRole.col>hurtRole.col){
                        toX = label.x - 80;
                        toX2 = toX-70;
                    }else if(attackRole.col<hurtRole.col){
                        toX = label.x + 80;
                        toX2 = toX+70;
                    }
                    if(attackRole.row==hurtRole.row){
                        toY = toY2 = label.y;
                    } else if(attackRole.row>hurtRole.row){
                        toY = label.y - 80;
                        toY2 = toY-70;
                    }else if(attackRole.row<hurtRole.row){
                        toY = label.y + 80;
                        toY2 = toY+70;
                    }

                    if(self._pveType==gc.c_prop.fightTypeKey.worldBoss && !hurtRole.isSelf){
                        var bossHurt = hurtData.hp*(1+gd.curBFECtrl.getInspireHurt()/10000);
                        bossHurt = Math.ceil(bossHurt);
                        label.text = bossHurt.toString();
                    }
                }else{
                    label.textColor = 0x00ff00;
                    label.text = "+"+label.text;
                    toX = label.x;
                    toY = label.y - 100;
                }

                if(hurtData.crit){
                    toScaleX = 1.2;
                    toScaleY = 1.2;
                    label.textColor = 0xff0000;
                    label.text = "暴 "+label.text;

                    //var critLabel: egret.TextField = new egret.TextField();
                    //critLabel.textColor = 0xfff000;
                    //critLabel.text = "暴击";
                    //critLabel.x = hurtRoleView.x-critLabel.width/2;
                    //critLabel.y = hurtRoleView.y - 60;
                    //self._effectCon.addChild(critLabel);
                    //egret.Tween.get(critLabel).to({y:critLabel.y-60},300).call(function(){
                    //        critLabel.parent.removeChild(critLabel);
                    //});
                }else{
                    toScaleX = 1;
                    toScaleY = 1;
                }
                var tw:egret.Tween = egret.Tween.get(label).to({x:toX, y: toY ,scaleX:toScaleX, scaleY:toScaleY},600);
                if(toX!=toX2 || toY!=toY2){
                    tw = tw.to({x:toX2, y: toY2},200);
                }
                tw.call(function(){
                    if(label.parent){
                        label.parent.removeChild(label);
                        self.removeLabel(label);
                    }
                },self);
            }

            if(hurtData.invincible){
                var labelInv: egret.TextField = self.getLabel();
                self._effectCon.addChild(labelInv);
                labelInv.size = 27;
                labelInv.text = "无敌";
                labelInv.textColor = 0xc10000;
                labelInv.x = hurtRoleView.x-labelInv.width/2;
                labelInv.y = hurtRoleView.y - 60;
                egret.Tween.get(labelInv).to({y:labelInv.y-60},500).call(function(){
                    if(labelInv.parent)
                        labelInv.parent.removeChild(labelInv);
                });
            }else if(!hurtData.miss){
                if(!hurtData.isHp2){
                    if(skill.skillInfo.targetEffect!=0 && hurtData.isFirstAim){
                        self.createFightEffect(skill.skillInfo.targetEffect, hurtRoleView.x,hurtRoleView.y-10,ROLE_ASPECT_UP);
                    }

                    if(hurtData.mb){
                        var labelMb: egret.TextField = self.getLabel();
                        labelMb.text = "麻痹";
                        labelMb.textColor = 0xe46c07;
                        labelMb.x = hurtRoleView.x-labelMb.width/2;
                        labelMb.y = hurtRoleView.y - 60;
                        labelMb.size = 27;
                        self._effectCon.addChild(labelMb);
                        egret.Tween.get(labelMb).to({y:labelMb.y-60},500).call(function(){
                            if(labelMb.parent)
                                labelMb.parent.removeChild(labelMb);
                        });
                    }else if(hurtData.disMb){
                        var labelDisMb: egret.TextField = self.getLabel();
                        labelDisMb.text = "抗麻痹";
                        labelDisMb.textColor = 0x7030a1;
                        labelDisMb.x = hurtRoleView.x-labelDisMb.width/2;
                        labelDisMb.y = hurtRoleView.y - 60;
                        labelDisMb.size = 27;
                        self._effectCon.addChild(labelDisMb);
                        egret.Tween.get(labelDisMb).to({y:labelDisMb.y-60},500).call(function(){
                            if(labelDisMb.parent)
                                labelDisMb.parent.removeChild(labelDisMb);
                        });
                    }
                }else{
                    var labelHs: egret.TextField = self.getLabel();
                    self._effectCon.addChild(labelHs);
                    labelHs.text = "护身";
                    labelHs.size = 27;
                    labelHs.textColor = 0x0070c1;
                    labelHs.x = hurtRoleView.x-labelHs.width/2;
                    labelHs.y = hurtRoleView.y - 60;
                    egret.Tween.get(labelHs).to({y:labelHs.y-60},500).call(function(){
                        if(labelHs.parent)
                            labelHs.parent.removeChild(labelHs);
                    });
                    if(hurtData.hp!=0){

                    }
                }
            }else{
                var labelSb: egret.TextField = self.getLabel();
                self._effectCon.addChild(labelSb);
                labelSb.size = 18;
                labelSb.text = "闪避";
                labelSb.textColor = 0x00ff00;
                labelSb.x = hurtRoleView.x-labelSb.width/2;
                labelSb.y = hurtRoleView.y - 60;
                egret.Tween.get(labelSb).to({y:labelSb.y-60},500).call(function(){
                    if(labelSb.parent)
                        labelSb.parent.removeChild(labelSb);
                });
            }
        }

        public moveToLT(x:number, y:number):void{
            var self = this;
            if(x<0){
                x = 0;
            }else if(x>self.mapTW-self.mapW){
                x = self.mapTW-self.mapW;
            }
            if(y<0){
                y = 0;
            }else if(y>self.mapTH-self.mapH){
                y = self.mapTH-self.mapH;
            }
            self._thumbCon.x = self._bgCon.x = self._shadowCon.x = self._itemCon.x = self._roleCon.x = self._effectCon.x = -x;
            self._thumbCon.y = self._bgCon.y = self._shadowCon.y = self._itemCon.y = self._roleCon.y = self._effectCon.y = -y;

            self.checkRemoveTileView();
            var begCol: number = Math.floor(x / MapTileView.TILE_W);
            var endCol:number = Math.floor((x+self.mapW) / MapTileView.TILE_W);
            var begRow: number = Math.floor(y / MapTileView.TILE_H);
            var endRow:number = Math.floor((y+self.mapH) / MapTileView.TILE_H);
            for(var i = begCol;i <= endCol; ++i){
                for(var k = begRow;k <= endRow; ++k){
                    self.addTileView(k, i);
                }
            }
        }

        public moveToCenter(x:number, y:number):void{
            var self = this;
            self.moveToLT(x-self.mapW/2, y-self.mapH/2-80);
        }

        public addTileView(row:number, col:number, index:number=-1):void{
            var self = this;
            if(row<0||row>Math.ceil(self.mapTH/MapTileView.TILE_H)-1
                ||col<0 || col>Math.ceil(self.mapTW/MapTileView.TILE_W)-1){
                return;
            }
            var tileView: MapTileView = self.getTileView(row,col);
            if(tileView && tileView.mapID == self.mapID)
                return;

            tileView = MapTileView.createTileView(self.mapID,row,col);
            tileView.x = MapTileView.TILE_W * col;
            tileView.y = MapTileView.TILE_H * row;
            self._bgCon.addChild(tileView);
        }

        public getTileView(row:number, col:number):MapTileView{
            var self = this;
            var tileView: MapTileView;
            for(var i = 0;i < self._bgCon.numChildren; ++i){
                tileView = <MapTileView>self._bgCon.getChildAt(i);
                if(tileView.row == row && tileView.col==col){
                    return tileView;
                }
            }
            return null;
        }

        public checkRemoveTileView():void{
            var self = this;
            var tileView: MapTileView;
            for(var i = 0;i < self._bgCon.numChildren; ++i){
                tileView = <MapTileView>self._bgCon.getChildAt(i);
                if(tileView.x+tileView.width<-self._bgCon.x
                    || tileView.x>-self._bgCon.x+self.mapW
                    || tileView.y+tileView.height<-self._bgCon.y
                    || tileView.y>-self._bgCon.y+self.mapH
                ){
                    if(tileView.parent){
                        tileView.parent.removeChild(tileView);
                        MapTileView.removeTileView(tileView);
                        //tileView.dtor();
                    }
                }
            }
        }

        public addRoleToMap(role:Role):void{
            var self = this;
            if(self.stage){
                var roleView: RoleView = new RoleView();
                roleView.setRole(role);
                self._roleCon.addChild(roleView);
                self.checkRoleGift(role);

                var roleNameView: RoleNameView = new RoleNameView();
                roleNameView.setRole(role);
                self._effectCon.addChild(roleNameView);

                var roleShadowView: RoleShadowView = new RoleShadowView();
                roleShadowView.setRole(role);
                self._shadowCon.addChild(roleShadowView);
            }

            self._allRoles.push(role);
        }
        public getRoleView(role:Role):RoleView{
            var self = this;
            for(var i = 0;i < self._roleCon.numChildren; ++i){
                var roleView:RoleView = <RoleView>self._roleCon.getChildAt(i);
                if(roleView instanceof RoleView && roleView.role == role){
                    return roleView;
                }
            }
            return null;
        }
        public getGiftView(role:Role):GiftView{
            var self = this;
            for(var i = 0;i < self._roleCon.numChildren; ++i){
                var giftView:GiftView = <GiftView>self._roleCon.getChildAt(i);
                if(giftView instanceof GiftView && giftView.gift.role == role){
                    return giftView;
                }
            }
            return null;
        }
        public getRoleNameView(role:Role):RoleNameView{
            var self = this;
            for(var i = 0;i < self._effectCon.numChildren; ++i){
                var roleNameView:RoleNameView = <RoleNameView>self._effectCon.getChildAt(i);
                if(roleNameView instanceof RoleNameView && roleNameView.role == role){
                    return roleNameView;
                }
            }
            return null;
        }
        public getRoleShadowView(role:Role):RoleShadowView{
            var self = this;
            for(var i = 0;i < self._shadowCon.numChildren; ++i){
                var roleShadowView:RoleShadowView = <RoleShadowView>self._shadowCon.getChildAt(i);
                if(roleShadowView instanceof RoleShadowView && roleShadowView.role == role){
                    return roleShadowView;
                }
            }
            return null;
        }

        onMainRolePosChange(e=null):void{
            var self = this;
            self.moveToCenter(self.mainRole.x, self.mainRole.y);
            if(self.mainRole.isOnNodeCenter()){
                for(var i=0;i<self._itemCon.numChildren; ++i){
                    var lootView = <LootView>self._itemCon.getChildAt(i);
                    if(lootView.x==self.mainRole.x && lootView.y==self.mainRole.y){
                        lootView.pickUp();
                        self.checkNextWave(true);
                    }
                }
            }
        }

        onMedalChange() {
            var self = this;
            if (self.mainRole)
                self.mainRole.medalId = gd.medalCtrl.getMedalTitle();
        }

        lastExeAITime = 0;
        onEnterFrame(e):void {
            var self = this;
            for (var i = 0; i < self._allRoles.length; ++i) {
                role = self._allRoles[i];
                if (role.gift) {
                    role.gift.exeAI();
                }
            }
            var date = new Date();
            if(self.lastExeAITime==0){
                self.lastExeAITime = date.getTime();
            }else{
                //mo.showMsg("--------------- "+(self.lastExeAITime - date.getTime()));
                if (date.getTime() - self.lastExeAITime < MINI_SPACE_TIME) {
                    return;
                }else{
                    //self.fightDateLastTime += MINI_SPACE_TIME*Math.round((date.getTime()-self.lastExeAITime)/MINI_SPACE_TIME);
                    //self.lastExeAITime = date.getTime();
                    self.lastExeAITime = self.lastExeAITime + MINI_SPACE_TIME;
                }
            }

            if (Date.newDate().getTime() - self.fightStartTime >= self._pvpTimeout * 1000) {
                if(self._pvpType==gc.c_prop.fightTypeKey.arena){
                    self.removeEventListener(egret.Event.ENTER_FRAME,self.onEnterFrame,self);
                    var fightData = {};
                    fightData[gc.dsConsts.FightData.isWin] = false;
                    fightData[gc.dsConsts.FightData.star] = 0;
                    fightData[gc.dsConsts.FightData.vData] = {};
                    gd.arenaCtrl.fightEnd(false, fightData, function(fightResult){
                        FightArenaWinOrFail.showCallback({isWin:false, isTimeout:true, fightResult:fightResult, callback:function(){
                            gd.fightCtrl.isSpFighting = false;
                            self.exitMap(self.mapID, function() {
                                self.enterMap(self.mapID, false);
                                self.checkNextWave();
                                if (mo.moduleMgr.curModule.name == g_consts.moduleId.fight) {
                                    mo.moduleMgr.runModule(g_consts.moduleId.home, {subModuleId: g_consts.HS_SUBMID_ARENA});
                                }
                                self._pvpType = -1;
                            });
                        }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                        });
                    },self);
                    return;
                }else if (self._pvpType==gc.c_prop.fightTypeKey.pk || self._pvpType==gc.c_prop.fightTypeKey.rankPk) {
                    self.removeEventListener(egret.Event.ENTER_FRAME,self.onEnterFrame,self);
                    var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, gd.copyCtrl.getNormalCurCopyId());
                    var mapID = copyInfo[gc.t_copy_displayID];
                    gd.pkOutCtrl.end(false, {} ,function (fightResult) {
                        FightPKWinOrFail.showCallback({isWin:false, isTimeout:true, fightResult:fightResult, callback:function(){
                            gd.fightCtrl.isSpFighting = false;
                            self.exitMap(mapID, function() {
                                self.enterMap(mapID, true);
                                self.checkNextWave();
                                if(self._pvpType == gc.c_prop.fightTypeKey.rankPk){
                                    gd.pkOutCtrl.getRankList(function(data){
                                        PVPRank.create().setData({rankData:data}).show();
                                    }, self);
                                }
                                self._pvpType = -1;
                            });
                        }, target: self, begTime: Date.newDate().getTime() + 10 * 1000
                        });
                    }, self);
                    return;
                }else if(self._pvpType==gc.c_prop.fightTypeKey.coffers){
                    gd.coffersCtrl.fightEnd(false,function(fightResult){
                        FightCoffersWinOrFail.showCallback({isWin:false, isTimeout:true, fightResult:fightResult, callback:function() {
                            gd.fightCtrl.isSpFighting = false;
                            self.loots = [];
                            self.exitMap(mapID, function () {
                                self.enterMap(mapID, true);
                                self.checkNextWave();
                                self._pvpType = -1;
                            });
                        },
                            target: self,
                            begTime: Date.newDate().getTime() + 10 * 1000
                        });
                    },self);
                }
            }
            var role:Role;
            for (var i = 0; i < self._allRoles.length; ++i) {
                role = self._allRoles[i];
                if (role == self.mainRole) {
                    if (!self._isPicking) {
                        role.exeAI();
                    }else{
                        role.curState = Role.STATE_MOVE_TO_AIM;
                        if (role.action==ROLE_ACTION_STAND&&self._itemCon.numChildren > 0) {
                            self._isPicking = true;
                            var lootView = <LootView>self._itemCon.getChildAt(self._itemCon.numChildren - 1);
                            self.mainRole.moveTo(lootView.row, lootView.col);
                        }
                    }
                } else {
                    role.exeAI();
                }
            }

            for(var i=0; i<self._itemCon.numChildren; ++i){
                var lootView = <LootView>self._itemCon.getChildAt(i);
                if(lootView.canAutoPickUp()){
                    lootView.pickUp();
                    i--;
                }
            }

            var childs = [];
            for(var i=0; i<self._roleCon.numChildren; ++i){
                childs.push(self._roleCon.getChildAt(i));
            }
            childs.sort(function(child1, child2):number{
                return child1.y-child2.y;
            });
            for(var i=0; i<childs.length; ++i){
                self._roleCon.setChildIndex(childs[i], i);
            }
        }

        public myRoles():Role[]{
            return this._selfRoles;
        }

        public getHpInfos():number[]{
            var self = this;
            var hpNow  = 0;
            var hpAll = 0;

            var mpNow = 0;
            var mpAll = 0;
            for(var i=0;i<self._selfRoles.length;i++){
                var role = self._selfRoles[i];
                hpNow += role.hp;
                hpAll += role.roleInfo.maxHpFight;
                mpNow += role.mp;
                mpAll += role.roleInfo.maxHp2Fight;
            }
            return [hpNow,hpAll,mpNow,mpAll];
        }

        private onMyRoleHpChange(e):void{
            this.dispatchEvent(new egret.Event(MAP_EVENT_HPMP_CHANGE));
        }

        //public destroy():void{
        //    this.removeEventListener(egret.Event.ENTER_FRAME,this.onEnterFrame,this);
        //    this.clearFight();
        //}
    }
}
