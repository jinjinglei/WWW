/**
 * Created by john on 15/12/3.
 */
module g_guild{
    export class GuildContributeLayer extends mo.gui.Dlg{

        list_items:egret.gui.List;
        _Item_list_items;
        label_level;
        bar_exp;
        label_exp;
        label_myGuildLv;
        label_myExp;
        label_myExp2;

        _initProp() {
            super._initProp();
            var self = this;
            self._Item_list_items = GuildContributeItem;
            self.registerClassByKey(gd.GuildCtrl, gc.dsConsts.GuildEntity.addUpAct.toString(), self.dataChanged);
        }
        dataChanged() {
            super.dataChanged();
            var self = this;

            var guildData = gd.guildCtrl.getData();
            var lv = guildData[gc.dsConsts.GuildEntity.lvl];
            var exp = guildData[gc.dsConsts.GuildEntity.addUpAct];
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            var guildAct = guildPersonalData[gc.dsConsts.GuildPersonalEntity.guildAct];
            var myLv = gd.guildCtrl.getRankFileLvl(guildAct);
            var levelInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, myLv<30?myLv+1:30);

            self.label_myGuildLv.text = "Lv."+myLv.toString();
            self.label_myExp2.text = guildAct.toString();
            self.label_level.text = mo.STR.format("行会等级:Lv.%s",lv);
            self.bar_exp.maximum = gd.guildCtrl.getNeedExp(lv);
            self.bar_exp.setValue(exp);
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            self.label_exp.text = guildPersonalData[gc.dsConsts.GuildPersonalEntity.addUpAct].toString();
            self.label_myExp.text = mo.STR.format("%s/%s", guildAct, levelInfo[gc.c_lvl_rankFileNeedAct]);
            self.label_myGuildLv.text = mo.STR.format("%s级会员: ", myLv);
        }


        _data_list_items():any[] {
            var infoAll = mo.getJSONWithFileName(gc.cfg_c_guildAct);
            var infos = [];
            for(var key in infoAll){
                infos.push(infoAll[key]);
            }
            infos.sort(function(info1, info2){
                return info1[gc.c_guildAct_seniority]-info2[gc.c_guildAct_seniority];
            });
            return  infos;
        }
        _tap_btn_back(){
            var self = this;
            self.close();
        }
    }
}