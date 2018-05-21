/**
 * Created by Administrator on 2016/5/17.
 */
module g_gift {
    export class GiftSkillCell extends mo.gui.ItemRenderer {
        ico_skill;
        label_name;
        label_jiHuo;
        label_desc;

        _initProp() {
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var skillObj = self.data;
            var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanSkill, skillObj.skillId);

            self.ico_skill.source = resHelper.getGiftSkillIconPath(skillObj.skillId);
            self.label_name.text = skillInfo[gc.t_talismanSkill_name];
            self.label_desc.text = skillInfo[gc.t_talismanSkill_desc];
            if(!skillObj.jiHuo){
                self.label_jiHuo.visible = true;
                self.label_jiHuo.text = skillObj.star+1;
                self.label_name.textColor = 0xff0000;
            }else{
                self.label_jiHuo.visible = false;
                self.label_name.textColor = 0x00ff00;
            }
        }
    }
}