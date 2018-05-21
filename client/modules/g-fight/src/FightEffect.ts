/**
 * Created by Administrator on 2015/9/9.
 */
module g_fight{
    export class FightEffect extends g_base.Effect{
        private static _effects:Object = {};
        public static getFightEffect(key, aspect){
            var index = key*100+aspect;
            var effect = FightEffect._effects[index]||new FightEffect();
            FightEffect._effects[index] = null;
            return effect;
        }
        public static removeFightEffect(effect:FightEffect){
            var index = effect.key*100+effect.aspect;
            FightEffect._effects[index] = effect;
        }

        public key;
        public aspect;
        public getEffectUrl(id:number, aspect:number, extname?:string): string{
            var aspectStrs: Array<string> = [null, "A","B", "C","D","E"];
            var resName = 'e'+id+aspectStrs[aspect<6?aspect:aspect-4];
            if(extname){
                resName = mo.STR.format("resource/dynamic2/%s.%s", resName, extname) ;
            }
            return resName
        }
        startLoadByKey(key,aspect){
            if(this.key==key&&this.aspect==aspect)
                return;
            this.key = key;
            this.aspect = aspect;
            var self = this;
            var aspectStrs: Array<string> = [null, "A","B", "C","D","E"];
            self.loadRes(self.getEffectUrl(key,aspect), self.getEffectUrl(key,aspect,"png"));
        }

        loadRes(jsonUrl, imgUrl, cb=null, ctx=null){
            var self=this;

            self.jsonData = mo.getData('mc', jsonUrl);
            self.texture = null;
            RES.getResByUrl(imgUrl, function(texture){
                self.texture = texture;
                self.initMc();
                if(self.jsonData && self.texture){
                    if(cb)
                        cb.call(ctx);
                }
            },self);
        }
    }
}