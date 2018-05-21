/**
 * Created by Administrator on 2015/11/20.
 */
/**
 * Created by Administrator on 2015/9/24.
 */
module g_fight {
    export class ChallengeLogItem extends mo.gui.ItemRenderer {
        ico_pkState;
        label_name;
        label_time;
        label_killValue;
        label_jb;
        label_exp;
        list_items;
        _Item_list_items;
        label_gain;
        label_lose;

        _initProp(){
            super._initProp();
            var self = this;

            self._Item_list_items = g_base.BaseItemCell;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

        }

        dataChanged() {
            super.dataChanged();
            var self = this;

            var name = self.data[gc.dsConsts.ArenaRecordEntity.enemyName];
            var time = self.data[gc.dsConsts.ArenaRecordEntity.fightTime];
            var fightData = self.data[gc.dsConsts.ArenaRecordEntity.fightData];
            var isWin = self.data[gc.dsConsts.ArenaRecordEntity.isWin];
            var isAttack = self.data[gc.dsConsts.ArenaRecordEntity.enemyId]!=self.data[gc.dsConsts.ArenaRecordEntity.userId];

            if(!isAttack){
                self.ico_pkState.source = isWin?"ico_pvp_win":"ico_pvp_fail";
            }else{
                self.ico_pkState.source = isWin?"ico_pvp_atk_win":"ico_pvp_atk_fail";
            }

            self.label_time.text = mo.getBetweenTimeString(Date.newDate(), Date.newDate(time));
            self.label_name.text = name;
            self.label_killValue.text = fightData.killValue>0?"+"+fightData.killValue:fightData.killValue;
            self.label_exp.text = fightData.expc;
            self.label_jb.text = fightData.gold;
            self.label_gain.visible = self.label_lose.visible = false;
            var items = utils.itemObj2ObjArr(fightData.items);

            if(isWin && items.length>0){
                self.label_gain.visible = true;
            }
            if(!isWin && items.length>0){
                self.label_lose.visible = true;
            }
            self.list_items.dataProvider = new egret.gui.ArrayCollection(items);
        }
    }
}