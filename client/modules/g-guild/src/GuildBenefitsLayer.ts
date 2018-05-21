/**
 * Created by john on 15/12/3.
 */
module g_guild{
    export class GuildBenefitsLayer extends mo.gui.Dlg {

        label_value;
        label_next;
        label_lv;
        grp_nextLv;
        label_maxLv;
        label_ennoble;
        label_ennobleRate;
        label_nextLv;

        _initProp() {
            super._initProp();
        }
        _tap_btn_back() {
            var self = this;
            self.close();
        }
        dataChanged() {
            super.dataChanged();
            var self = this;
            var guildData = self.data;
            var level = guildData[gc.dsConsts.GuildEntity.lvl];
            var levelInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_guildLvl, level);
            var guildLvls =  mo.getJSONWithFileName(gc.cfg_c_guildLvl);
            var nextLevelInfo = guildLvls[level+1];
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            var addScale = 0;
            var ennoble = guildPersonalData[gc.dsConsts.GuildPersonalEntity.ennoble];
            self.label_ennoble.text = gc.c_prop.ennobleType[guildPersonalData[gc.dsConsts.GuildPersonalEntity.ennoble]];
            var ennobleInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_guildEnnoble, ennoble);
            self.label_ennobleRate.text = Math.round(ennobleInfo[gc.c_guildEnnoble_props]/100) + "%";
            self.label_lv.text = "Lv."+level;
            var propInfos = levelInfo[gc.c_guildLvl_props];
            var str = "";
            for(var i=0; i<propInfos.length; ++i){
                if(propInfos[i].length==2){
                    var propIdx = propInfos[i][0];
                    var value = Math.round(propInfos[i][1]*(1+addScale));
                    var valueStr = value.toString();
                    var s = mo.STR.format("%s +%s\n",gc.c_prop.heroProp[propIdx],valueStr);
                    str += s;
                }
            }
            self.label_nextLv.text = mo.STR.format("(下级旗帜将在行会达到%s级后自动激活)",level+1);
            self.label_value.text = str;
            if(nextLevelInfo){
                var nextPropValue = [];
                var nextProps = nextLevelInfo[gc.c_guildLvl_props];
                for(var i=0; i<nextProps.length; ++i){
                    nextPropValue.push(Math.round(nextProps[i][1]*(1+addScale)));
                }
                self.label_next.text = nextPropValue.join("\n");
                self.grp_nextLv.visible = true;
                self.label_maxLv.visible = false;
            }else{
                self.grp_nextLv.visible = false;
                self.label_maxLv.visible = true;
            }

        }
        _tap_btn_help(){
            var self = this;
            g_base.BaseShowTip.create().setData({id: 19}).show();
        }

        _tap_label_ennobleDesc(){
            var self = this;
            g_base.BaseShowTip.create().setData({id: 23}).show();
        }
    }
}
