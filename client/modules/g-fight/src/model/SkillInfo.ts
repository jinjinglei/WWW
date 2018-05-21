/**
 * Created by Administrator on 2015/9/18.
 */
module g_fight{
    export class SkillInfo{
        public tabInfo;
        private _cd:number;

        public set cd(value:number){
            this._cd = value;
        }
        public get cd():number{
            if(this._cd==null){
                return this.tabInfo[gc.t_skill_cd]||0;
            }
            return this._cd;
        }
        public get id():number{
            return this.tabInfo[gc.t_skill_id]||0;
        }
        public get name():string{
            return this.tabInfo[gc.t_skill_name];
        }
        public get desc():string{
            return this.tabInfo[gc.t_skill_desc];
        }
        public get effect():number{
            return this.tabInfo[gc.t_skill_effect]||0;
        }
        public get attackDistance():number{
            return this.tabInfo[gc.t_skill_attackDistance]||0;
        }
        public get priority():number{
            return this.tabInfo[gc.t_skill_priority]||0;
        }
        public get targetType():number{
            return this.tabInfo[gc.t_skill_targetType]||0;
        }
        public get effectRadius():number{
            return this.tabInfo[gc.t_skill_effectRadius]||0;
        }
        public get damage():number{
            return this.tabInfo[gc.t_skill_damage]||0;
        }
        public get pushType():number{
            return this.tabInfo[gc.t_skill_pushType]||0;
        }
        public get pushDistance():number{
            return this.tabInfo[gc.t_skill_pushDistance]||0;
        }
        public get casterPositionType():number{
            return this.tabInfo[gc.t_skill_casterPositionType]||0;
        }
        public get buffID():number{
            return this.tabInfo[gc.t_skill_buffID]||0;
        }
        public get callMonsterID():number{
            return this.tabInfo[gc.t_skill_callMonsterID]||0;
        }
        public get callMonsterNum():number{
            return this.tabInfo[gc.t_skill_callMonsterNum]||0;
        }
        public get damageScale():number{
            return this.tabInfo[gc.t_skill_damageScaleA]||0;
        }
        public get castAction():number{
            return this.tabInfo[gc.t_skill_castAction]||0;
        }
        public get actionTime():number{
            return this.tabInfo[gc.t_skill_actionTime]||0;
        }
        public get casterEffect():number{
            return this.tabInfo[gc.t_skill_casterEffect]||0;
        }
        public get targetEffect():number{
            return this.tabInfo[gc.t_skill_targetEffect]||0;
        }
        public get flyEffect():number{
            return this.tabInfo[gc.t_skill_flyEffect]||0;
        }
        public get beHittedEffect():number{
            return this.tabInfo[gc.t_skill_beHittedEffect]||0;
        }
        public get firstCD():number{
            return this.tabInfo[gc.t_skill_firstCD]||0;
        }
        public get special():number{
            return this.tabInfo[gc.t_skill_special]||0;
        }
        public get canExtends():number{
            return this.tabInfo[gc.t_skill_canExtends]||0;
        }
    }
}