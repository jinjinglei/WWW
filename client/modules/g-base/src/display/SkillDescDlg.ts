/**
 * Created by lihex on 4/14/16.
 */
module g_base{
    export class SkillDescDlg extends mo.gui.Dlg{
        outsideClosable;

        label_desc;
        label_name;
        ico_skill;

        _initProp(){
            var self = this;
            super._initProp();
            self.outsideClosable = true;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var id = self.data.skillId;
            var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, id);
            var userLvl = gd.userCtrl.getLvl();
            var level = Math.min(175, Math.max(145, userLvl));
            var cd = skillInfo[gc.t_skill_cd]*10/1000;
            var damageScale:number = skillInfo[gc.t_skill_damage]/10000;
            var buffID:number = skillInfo[gc.t_skill_buffID];
            self.ico_skill.source = resHelper.getSkillIconPath(id);
            self.label_name.text = mo.STR.format("%s Lv.%s",skillInfo[gc.t_skill_name],level);

            if(damageScale!=0){
                var perLvScale:number = skillInfo[gc.t_skill_damageScaleA]/10000;
                damageScale += (level-1)*perLvScale;
                self.label_desc.text = mo.STR.format(skillInfo[gc.t_skill_desc],Math.abs(Math.round(-damageScale*100)), cd);
            }else if(buffID!=0){
                var buffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_buff, buffID);
                var perLvValue = buffInfo[gc.t_buff_linerScale];
                var value = (buffInfo[gc.t_buff_baseValue1]+perLvValue*(level-1))/10000;
                value = Math.abs(value);
                self.label_desc.text = mo.STR.format(skillInfo[gc.t_skill_desc],Math.round(value*100), cd);
            }else{
                self.label_desc.text = mo.STR.format(skillInfo[gc.t_skill_desc]);
            }
        }
    }
}