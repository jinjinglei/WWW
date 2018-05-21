/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_role{
    export class EnemyTopRole extends mo.gui.MenuLayer{

        static ON_HERO_CHANGED:string = "on_hero_changed";

        ico_hero0:g_comp.Ico_Hero;
        ico_hero1:g_comp.Ico_Hero;
        ico_hero2:g_comp.Ico_Hero;
        ico_hero3:g_comp.Ico_Hero;
        label_job:egret.gui.Label;
        label_combat:mo.gui.Label;
        img_title:egret.gui.UIAsset;
        label_nickName;

        _curHeroIdx:number;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            mo.gui.helper.setSkinName(this, g_base.BaseTopRole.__className);
            self._curHeroIdx = 0;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.label_nickName.visible = true;
            self.img_title.visible = false;
            self.ico_hero0.onClick(self.onIconClick, self);
            self.ico_hero1.onClick(self.onIconClick, self);
            self.ico_hero2.onClick(self.onIconClick, self);
            self.ico_hero3.onClick(self.onIconClick, self);
            var hec:gd.HeroEntityCtrl = gd.enemyHeroCtrl.getHeroByIndex(0);
            self._curHeroIdx = 0;
            self.label_job.text = gc.c_prop.heroJob[hec.job];
            self.label_combat.text = hec.combat;
            self.label_nickName.text = gd.enemyHeroCtrl.getUserName();
            self.setRoleSelected(self.ico_hero0);
            self.dataChanged();
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            self.ico_hero0.setData({index: 0, heroCtrl:gd.enemyHeroCtrl});
            self.ico_hero1.setData({index: 1, heroCtrl:gd.enemyHeroCtrl});
            self.ico_hero2.setData({index: 2, heroCtrl:gd.enemyHeroCtrl});
            self.ico_hero3.setData({index: 3, heroCtrl:gd.enemyHeroCtrl});
            self.img_title.source = ((self.data.redType || 0) == 0) ? "ntc_text_role" : "ntc_text_forge";
        }


        setRoleSelected(item:g_comp.Ico_Hero){
            var self = this;
            self.ico_hero0.setSelected(false);
            self.ico_hero1.setSelected(false);
            self.ico_hero2.setSelected(false);
            self.ico_hero3.setSelected(false);
            item.setSelected(true);
        }

        onIconClick(item:g_comp.Ico_Hero){
            var self = this;
            var index = item.data.index;

            if(gd.enemyHeroCtrl.hasHeroByIndex(index)){
                self.setRoleSelected(item);
                self._curHeroIdx = index;
                var hec:gd.HeroEntityCtrl = gd.enemyHeroCtrl.getHeroByIndex(index);
                self.emitter.emit(self.__class.ON_HERO_CHANGED, hec, index, self);
                self.label_job.text = gc.c_prop.heroJob[hec.job];
                self.label_combat.text = hec.combat;
            }
        }

        hide4thRole(hide){
            var self = this;
            self.ico_hero3.visible = !hide;
            self.ico_hero3.includeInLayout = !hide;
        }
    }
}