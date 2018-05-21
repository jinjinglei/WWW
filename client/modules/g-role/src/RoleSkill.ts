/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_role {

	/**
	 *
	 * @author 
	 *
	 */
	export class RoleSkill extends mo.gui.Layer{
		list_skills:egret.gui.List;
		_Item_list_skills;
		res_bar;

		//@override
		_initProp(){
			var self = this;
			super._initProp();
			self._Item_list_skills = SkillItem;
			roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
		}

		_heroChanged(hec){
			var self = this;
			self.setData({hec: hec});
		}

		dtor() {
			super.dtor();
			var self = this;
			roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
		}

		dataChanged(){
			super.dataChanged();
			var self = this;
			self.res_bar.visible = self.data.hec.isSelf;
			self.refreshList("list_skills");
		}

		_data_list_skills():any[]{
			var self = this;
			var heroEntityCtrl:gd.HeroEntityCtrl = self.data.hec;
			var obj;
			var skills = [];

			for(var i=0; i<heroEntityCtrl.skillIds.length; ++i){
                var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, heroEntityCtrl.skillIds[i]);
                if(skillInfo[gc.t_skill_canExtends]) continue;
				obj = {
					heroID:heroEntityCtrl.get(gc.dsConsts.HeroEntity.id),
					skillId:heroEntityCtrl.skillIds[i],
					skillLv:heroEntityCtrl.skillLevels[i],
					index:i,
					hec:heroEntityCtrl
				};
				skills.push(obj);
			}
			return skills;
		}

		_tap_btn_help(){
			g_base.BaseShowTip.create().setData({id:1}).show();
		}
	}
}
