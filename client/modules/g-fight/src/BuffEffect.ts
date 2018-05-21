/**
 * Created by Administrator on 2015/9/22.
 */
module g_fight{
    export class BuffEffect extends FightEffect{
        private _buff:Buff;

        public set buff(value:Buff){
            this._buff = value;
            this.startLoadByKey(this.buff.effectRes,ROLE_ASPECT_UP);
        }
        public get buff():Buff{
            return this._buff;
        }
    }
}