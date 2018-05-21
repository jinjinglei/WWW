/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_gift {


	/**
	 *
	 * @author 
	 *
	 */
	export class GiftUpStarResult extends mo.gui.Dlg{

        label_noSkill;
        label_noAct;
        label_star;
        label_ziZhi;

        grp_skill;
        ico_skill;
        label_name;
        label_desc;
        effect_skill;
        _skillEfxPlayer:uiHelper.EfxPlayer;

		//@override
		_initProp(){
		    var self = this;
		    super._initProp();
		}

		dtor(){
			super.dtor();
			var self = this;
		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
            self._skillEfxPlayer = uiHelper.EfxPlayer.create(self.effect_skill);
		}

		dataChanged(){
			super.dataChanged();
            var self = this;

            var hec = self.data.hec;
            var gift = self.data.gift;//[等级,资质,星级,最高星级,{星级:技能id,星级:技能id,...},临时资质]
            var giftInfo = self.data.giftInfo;
            var isGetSkill = self.data.isGetSkill;
            var isHighStar = self.data.isHighStar;
            var giftId = giftInfo[gc.t_talisman_id];
            var star = gift[2];
            var starInfos = mo.getJSONWithFileName(gc.cfg_t_talismanStar);
            var starInfo = starInfos[giftId+star-1];
            var skillId = starInfo[gc.t_talismanStar_skillId];
            if(skillId){
                var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanSkill, skillId);
                if (isGetSkill) {
                    self._skillEfxPlayer.play();
                    self.grp_skill.visible = true;
                    self.label_noAct.visible = false;
                    self.ico_skill.source = resHelper.getGiftSkillIconPath(skillId);
                    self.label_name.text = skillInfo[gc.t_talismanSkill_name];
                    self.label_desc.text = skillInfo[gc.t_talismanSkill_desc];
                }else{
                    self.grp_skill.visible = false;
                    self.label_noAct.visible = true;
                }
                self.label_noSkill.visible = false;
            }else{
                self.grp_skill.visible = false;
                self.label_noAct.visible = false;
                self.label_noSkill.visible = true;
            }
            self.label_star.text = [star-1, star];
            if(!isHighStar){
                self.label_ziZhi.text = [gd.heroTalismanCtrl.getMaxZiZhi(giftId, gift[3]), gd.heroTalismanCtrl.getMaxZiZhi(giftId, gift[3])];
            }else{
                self.label_ziZhi.text = [gd.heroTalismanCtrl.getMaxZiZhi(giftId, star-1), "[ubb color=green]"+gd.heroTalismanCtrl.getMaxZiZhi(giftId, gift[3])+"[/ubb]"];
            }
		}
	}
}
