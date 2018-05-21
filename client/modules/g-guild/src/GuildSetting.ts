/**
 * Created by john on 15/12/4.
 */

module g_guild{

    export  class GuildSetting extends mo.gui.Dlg
    {

        label_condition;
        label_level;
        joinCon:number = 0;
        joinLvl;
        joinLvlIndex:number = 0;

        conditions:Array<number> = [];
        conditionsLevel:Array<string> = [];
        _initProp() {
            super._initProp();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();

            var self = this;
            var guildData = self.data.guildData;

            self.joinCon = guildData[gc.dsConsts.GuildEntity.joinCon];
            self.joinLvl = guildData[gc.dsConsts.GuildEntity.joinLvl];
            self.label_condition.text = gc.c_prop.guildJoinCon[self.joinCon];
            self.label_level.text = self.joinLvl + "";

            self.conditions = [];
            for (var i in gc.c_prop.guildJoinCon)
            {
                self.conditions.push(i);
            }
            var gameCfg:string = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet);

            self.conditionsLevel = gameCfg[4].split(",");
        }
        _tap_btn_conditionPre()
        {
            var self = this;
            self.joinCon--;
            var  exsits = false;
            for(var i in self.conditions)
            {
                if(self.conditions[i] == self.joinCon)
                {
                    exsits = true;
                    break;
                }
            }
            if(!exsits)
            {
                self.joinCon = self.conditions[self.conditions.length -1];
            }
            self.label_condition.text =  gc.c_prop.guildJoinCon[self.joinCon];
        }
        _tap_btn_conditionNext(){
            var self = this;
            self.joinCon++;
            var  exsits = false;
            for(var i in self.conditions)
            {
                if(self.conditions[i] == self.joinCon)
                {
                    exsits = true;
                    break;
                }
            }
            if(!exsits)
            {
                self.joinCon = self.conditions[0];
            }
            self.label_condition.text =  gc.c_prop.guildJoinCon[self.joinCon];

        }
        _tap_btn_LevelNext()
        {
            var self = this;
            var idx = self.conditionsLevel.indexOf(self.joinLvl);
            idx ++;
            if(idx > self.conditionsLevel.length -1 )
            {
                idx = 0;
            }

            self.joinLvl = self.conditionsLevel[idx];

            self.label_level.text = self.joinLvl + "";

        }
        _tap_btn_LevelPre(){

            var self = this;
            var idx = self.conditionsLevel.indexOf(self.joinLvl);
            idx --;
            if(idx < 0 )
            {
                idx = self.conditionsLevel.length - 1;
            }
            self.joinLvl = self.conditionsLevel[idx];
            self.label_level.text = self.joinLvl + "";
        }

        _tap_btn_Update(){
            var self = this;
            var guildData = self.data.guildData;
            gd.guildCtrl.guildSetting(self.joinCon,self.joinLvl,function(data){
                self.close();
            },self);


        }
    }
}