/**
 * Created by Administrator on 2015/10/6.
 */
module g_arena{
    export class ArenaLogItem extends mo.gui.ItemRenderer{
        label_log;

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;
            var isDefence = data[gc.dsConsts.ArenaRecordEntity.userId]==data[gc.dsConsts.ArenaRecordEntity.enemyId];//被攻击
            var isWin =data[gc.dsConsts.ArenaRecordEntity.isWin];
            var str;
            var timeStr = mo.timeFormat(data[gc.dsConsts.ArenaRecordEntity.fightTime]);
            var enemyName = data[gc.dsConsts.ArenaRecordEntity.enemyName];
            var rank = data[gc.dsConsts.ArenaRecordEntity.fightData].curRank;
            var changeRank = data[gc.dsConsts.ArenaRecordEntity.fightData].changeRank;

            if(isDefence){
                if(isWin){
                    str = "[ubb color=0xffaa28]%s[/ubb] [ubb color=0xff1a00]%s[/ubb]向你发起挑战，你胜利了，你的排名不变";
                    self.label_log.text = mo.STR.format(str, timeStr, enemyName);
                }else{
                    if (changeRank != 0) {
                        str = "[ubb color=0xffaa28]%s[/ubb] [ubb color=0xff1a00]%s[/ubb]向你发起挑战，你失败了，你的排名下降至第%s名";
                        self.label_log.text = mo.STR.format(str, timeStr, enemyName, rank);
                    } else {
                        str = "[ubb color=0xffaa28]%s[/ubb] [ubb color=0xff1a00]%s[/ubb]向你发起挑战，你失败了，你的排名不变";
                        self.label_log.text = mo.STR.format(str, timeStr, enemyName);
                    }
                }
            }else{
                if(isWin){
                    if (changeRank != 0) {
                        str = "[ubb color=0xffaa28]%s[/ubb] 你向[ubb color=0xff1a00]%s[/ubb]发起挑战，你胜利了，你的排名上升至第%s名";
                        self.label_log.text = mo.STR.format(str, timeStr, enemyName, rank);
                    } else {
                        str = "[ubb color=0xffaa28]%s[/ubb] 你向[ubb color=0xff1a00]%s[/ubb]发起挑战，你胜利了，你的排名不变";
                        self.label_log.text = mo.STR.format(str, timeStr, enemyName);
                    }
                }else{
                    str = "[ubb color=0xffaa28]%s[/ubb] 你向[ubb color=0xff1a00]%s[/ubb]发起挑战，你失败了，你的排名不变";
                    self.label_log.text = mo.STR.format(str, timeStr, enemyName);
                }
            }
            ;
        }
    }
}