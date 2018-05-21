/**
 * Created by Administrator on 2015/9/21.
 */
module g_fight{
    export class Buff{
        public static create(id, skillLv):Buff{
            var buff:Buff = new Buff();
            var info = mo.getJSONWithFileNameAndID(gc.cfg_t_buff, id);
            buff.buffInfo = info;
            buff.level = skillLv;
            buff.leftTime = buff.totalTime;
            buff.exeCount = 0;
            return buff;
        }

        buffInfo:any;
        level:number;
        leftTime:number;
        exeCount:number;

        public reduceTime(time:number):void{
            if(this.leftTime>0){
                this.leftTime -= time;
            }
        }

        public getAddPropValue():number{
            var value = this.baseValue1+this.linerScale*this.level;
            return value;
        }

        public getHpValue():number{
            var value = this.effectValue+this.effectValeAdd*this.level;
            return value;
        }
        public exe():void{
            this.exeCount ++;
        }
        public get totalTime():number{
            return this.liftTime*10+this.level*this.lifeTimeAdd*10;
        }

        public get id():number{
            return this.buffInfo[gc.t_buff_id]||0;
        }
        public get name():string{
            return this.buffInfo[gc.t_buff_name];
        }
        public get liftTime():number{
            return this.buffInfo[gc.t_buff_liftTime]||0;
        }
        public get lifeTimeAdd():number{
            return this.buffInfo[gc.t_buff_lifeTimeAdd]||0;
        }
        public get effectValue():number{
            return this.buffInfo[gc.t_buff_effectValue]||0;
        }
        public get effectValeAdd():number{
            return this.buffInfo[gc.t_buff_effectValeAdd]||0;
        }
        public get propertyID():number{
            return this.buffInfo[gc.t_buff_propertyID]||0;
        }
        public get baseValue1():number{
            return this.buffInfo[gc.t_buff_baseValue1]||0;
        }
        public get linerScale():number{
            return this.buffInfo[gc.t_buff_linerScale]||0;
        }
        public get effectRes():number{
            return this.buffInfo[gc.t_buff_effectRes]||0;
        }
        public get specialEffect():number{
            return this.buffInfo[gc.t_buff_specialEffect]||0;
        }
    }
}