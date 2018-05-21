/**
 * Created by Administrator on 2015/12/17.
 */
module g_guild{
    export class GuildEnnobleDetail extends mo.gui.Dlg{
        label_guildLv;
        label_myLv;
        label_ennoble;
        list_items;
        _Item_list_items;

        _initProp() {
            super._initProp();
            var self = this;
            self._Item_list_items = GuildEnnobleItem;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var guildData = gd.guildCtrl.getData();
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            var lv = guildData[gc.dsConsts.GuildEntity.lvl];
            var guildAct = guildPersonalData[gc.dsConsts.GuildPersonalEntity.guildAct];
            var myLv = gd.guildCtrl.getRankFileLvl(guildAct);
            var ennoble = guildPersonalData[gc.dsConsts.GuildPersonalEntity.ennoble];

            self.label_guildLv.text = "Lv."+lv;
            self.label_myLv.text = myLv+"级会员";
            self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];
        }

        _data_list_items():any[] {
            var self = this;
            var awardUI = gd.guildCtrl.getAwardUi();
            var datas = [];

            for(var i=0; i<awardUI.length; ++i){
                datas.push({memberData:self.data, ennobleData:awardUI[i]})
            }

            return datas;
        }
    }
}