/**
 * Created by Administrator on 2015/9/18.
 */
module g_fight{
    export class Skill{
        private _skillInfo:SkillInfo;
        public attackTime = 0;
        public level:number;

        public set skillInfo(value:SkillInfo){
            this._skillInfo = value;
            //this.attackTime = this._skillInfo.cd*10;
        }
        public get skillInfo():SkillInfo{
            return this._skillInfo;
        }

        public reduceTime(time:number):void{
            if(this.attackTime>0){
                this.attackTime -= time;
            }
        }
        public resetCD():void{
            this.attackTime += this.skillInfo.cd*10;
        }

        public canExe():boolean{
            return this.attackTime<=0;
        }

        public get hpCoefficient():number{
            return (this._skillInfo.damage + this._skillInfo.damageScale * (this.level - 1)) / g_base.PropBase.Scale_Num;
        }
    }
}