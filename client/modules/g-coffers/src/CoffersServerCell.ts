/**
 * Created by Administrator on 2016/1/25.
 */
module g_coffers{
    export class CoffersServerCell extends mo.gui.ItemRenderer{
        label_name;
        label_state0;
        label_state1;
        label_state2;
        label_state3;
        label_coffer;

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;//gc.dsConsts.CoffersServer
            if(!data[gc.dsConsts.CoffersServer.serverName]) return;
            self.label_name.text = data[gc.dsConsts.CoffersServer.serverName];
            var isLoots = data[gc.dsConsts.CoffersServer.isLootArr];
            var isBreaks = data[gc.dsConsts.CoffersServer.isBreakArr];
            for(var i=0; i<4; ++i){
                self["label_state"+i].text = self.getStateStr(isLoots[i], isBreaks[i]);
                self["label_state"+i].textColor = self.getStateColor(isLoots[i], isBreaks[i]);
            }
            self.label_coffer.text = utils.formatByWan(data[gc.dsConsts.CoffersServer.resource],0);
        }

        getStateStr(isLoot, isBreak){
            //if(isLoot){
            //    return '已掠夺';
            //}
            //else
            if(isBreak){
                return '已被击破';
            }
            return "可攻击";
        }
        getStateColor(isLoot, isBreak){
            if(isLoot){
                return 0xB8AFAF;
            }
            else if(isBreak){
                return 0xB8AFAF;
            }
            return 0x00ff00;
        }

        _tap_btn_rob(){
            var self = this;
            var data = self.data;
            var openInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.serverPk);
            if(gd.userCtrl.getLvl()<openInfo[gc.c_open_lvlRequired]){
                return mo.showMsg(gc.id_c_msgCode.noRoleLvl, openInfo[gc.c_open_lvlRequired]);
            }
            //掠夺时间
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
            var robStart = gameInfo[12];
            var robEnd = gameInfo[13];
            var nowDate:Date = Date.newDate();
            if (nowDate.getHours() < robStart || nowDate.getHours() > robEnd) return mo.showMsg(gc.id_c_msgCode.peaceTimeCantRobe,robStart,robEnd);
            gd.coffersCtrl.getEnemyDefeseData(data[gc.dsConsts.CoffersServer.serverId],data[gc.dsConsts.CoffersServer.serverName], function(defData){
                CoffersSelectDefence.create().setData(defData).show().onClose(function(){
                    self.delegate.reset();
                });
            },self);
        }
    }
}