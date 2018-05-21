/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_role{
    export class SkillItem extends mo.gui.ItemRenderer{
        ico_new;
        ico_skill;
        label_name;
        label_desc;
        label_needMoney;
        grp_needMoney;
        label_open;
        btn_lvUp;
        efx_up:g_comp.UIEffect;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var id = self.data.skillId;
            var level = self.data.skillLv;
            var index = self.data.index;
            var hec = self.data.hec;
            var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, id);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.skillRate);
            var openLv = gameInfo[4].split(",")[index];

            self.ico_skill.source = resHelper.getSkillIconPath(id);
            var damageScale:number = skillInfo[gc.t_skill_damage]/10000;
            var buffID:number = skillInfo[gc.t_skill_buffID];
            if(level<=0){
                level = 1;
            }
            var cd = skillInfo[gc.t_skill_cd]*10/1000;
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
            if(gd.userCtrl.getLvl()<openLv){
                self.ico_new.visible = false;
                self.label_open.text = mo.STR.format("角色%s级开放",openLv);
                self.label_open.visible = true;
                self.grp_needMoney.visible = false;
                self.label_name.text = mo.STR.format("%s",skillInfo[gc.t_skill_name]);
                self.btn_lvUp.visible = false;
            }else{
                self.ico_new.visible = level==1;
                self.btn_lvUp.visible = true;
                self.label_name.text = mo.STR.format("%s Lv.%s",skillInfo[gc.t_skill_name],level);

                if(level<gd.userCtrl.getLvl()){
                    self.label_open.visible = false;
                    self.grp_needMoney.visible = true;
                    self.btn_lvUp.enabled = true;
                    var lvInfos = mo.getJSONWithFileName(gc.cfg_c_lvl);
                    for(var id in lvInfos){
                        if(lvInfos[id][gc.c_lvl_upSkillLevel]==level+1){
                            self.label_needMoney.text = lvInfos[id][gc.c_lvl_skillNeedGold];
                            break;
                        }
                    }
                }else{
                    self.label_open.visible = true;
                    self.grp_needMoney.visible = false;
                    self.btn_lvUp.enabled = false;
                    self.label_open.text = mo.STR.format("角色%s级可继续升级",gd.userCtrl.getLvl()+1);
                }
            }

            if(!hec.isSelf){
                self.label_open.visible = false;
                self.grp_needMoney.visible = false;
                self.ico_new.visible = false;
                self.btn_lvUp.visible = false;
            }
        }

        _tap_btn_lvUp(){
            var self = this;
            gd.heroCtrl.upSkill(self.data.heroID, self.data.index, function(){
                self.data.skillLv += 1;
                self.efx_up.gotoAndPlay(0,1);
                self.dataChanged();
            },self);
        }

    }
}