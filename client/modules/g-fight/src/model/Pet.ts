/**
 * Created by Administrator on 2015/9/22.
 */
module g_fight{
    export class Pet extends Role{
        private _owner:Role;

        public set owner(value:Role){
            this._owner = value;
            this._owner.addEventListener(ROLE_EVENT_DIE, this.onOwnerDie, this);
        }
        public get owner():Role{
            return this._owner;
        }
        public set hp(value:number){
            this._hp = value;
            if(this.isDie()){
                if(this._owner.curPetNum>0)
                    this._owner.curPetNum --;
            }
            this.dispatchEvent(new egret.Event(ROLE_EVENT_HP_CHANGE));
            if (this.isDie()) {
                this.dispatchEvent(new egret.Event(ROLE_EVENT_DIE));
            }
        }

        public get hp():number{
            return this._hp;
        }
        private onOwnerDie(e:CusEvent):void{
            this.hp = 0;
        }
    }
}