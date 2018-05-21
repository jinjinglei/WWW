/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_base{
    export class BaseTopRole extends mo.gui.MenuLayer{

        static ON_HERO_CHANGED:string = "on_hero_changed";

        ico_hero0:g_comp.Ico_Hero;
        ico_hero1:g_comp.Ico_Hero;
        ico_hero2:g_comp.Ico_Hero;
        ico_hero3:g_comp.Ico_Hero;
        label_job:egret.gui.Label;
        label_combat:mo.gui.Label;
        img_title:egret.gui.UIAsset;
        ico_combat;
        label_nickName;

        _redKeyArr:Array<any>;
        _curHeroIdx:number;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._curHeroIdx = 0;
            self._redKeyArr = [
                [
                    gc.c_prop.pointRedKey.role1_main,
                    gc.c_prop.pointRedKey.role2_main,
                    gc.c_prop.pointRedKey.role3_main,
                    gc.c_prop.pointRedKey.role4_main
                ],
                [
                    gc.c_prop.pointRedKey.role1_dazao,
                    gc.c_prop.pointRedKey.role2_dazao,
                    gc.c_prop.pointRedKey.role3_dazao
                ],
                [

                ]
            ];
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self.checkRedPoint);
            self.registerClassByKey(gd.HeroEntityCtrl, gc.dsConsts.HeroEntity.combat.toString(), self._updateCombat);

            self.label_nickName.visible = false;
            self.ico_hero0.onClick(self.onIconClick, self);
            self.ico_hero1.onClick(self.onIconClick, self);
            self.ico_hero2.onClick(self.onIconClick, self);
            self.ico_hero3.onClick(self.onIconClick, self);
            var hec:gd.HeroEntityCtrl = gd.heroCtrl.getHeroByIndex(0);
            self._curHeroIdx = 0;
            self.label_job.text = gc.c_prop.heroJob[hec.job];
            self.label_combat.text = hec.combat;
            self.setRoleSelected(self.ico_hero0);
            self.dataChanged();
        }

        _updateCombat(){
            var self = this;
            var hec:gd.HeroEntityCtrl = gd.heroCtrl.getHeroByIndex(self._curHeroIdx);
            self.label_combat.text = hec.combat;
        }

        hideCombat(){
            var self = this;
            self.label_combat.visible = false;
            self.ico_combat.visible = false;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            self.ico_hero0.setData({index: 0, heroCtrl: gd.heroCtrl});
            self.ico_hero1.setData({index: 1, heroCtrl: gd.heroCtrl});
            self.ico_hero2.setData({index: 2, heroCtrl: gd.heroCtrl});
            self.ico_hero3.setData({index: 3, heroCtrl: gd.heroCtrl});
            self.checkRedPoint();
            if(!self.data.redType || self.data.redType==0){
                self.img_title.source = "ntc_text_role";
            }else if(self.data.redType==1){
                self.img_title.source = "ntc_text_forge";
            }else if(self.data.redType==2){
                self.img_title.source = "tit_txt_g_fabaosf";
            }
        }

        checkRedPoint(){
            var self = this;
            var redType = self.data.redType || 0;//红点类型 0 角色 1 打造
            self.ico_hero0.setRedPointShow(gd.pointCtrl.isShow(self._redKeyArr[redType][0]));
            self.ico_hero1.setRedPointShow(gd.pointCtrl.isShow(self._redKeyArr[redType][1]));
            self.ico_hero2.setRedPointShow(gd.pointCtrl.isShow(self._redKeyArr[redType][2]));
            self.ico_hero3.setRedPointShow(gd.pointCtrl.isShow(self._redKeyArr[redType][3]));
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

            if(gd.heroCtrl.hasHeroByIndex(index)){
                gd.heroCtrl.curSelRoleIdx = index;
                self.setRoleSelected(item);
                self._curHeroIdx = index;
                var hec:gd.HeroEntityCtrl = gd.heroCtrl.getHeroByIndex(index);
                self.emitter.emit(self.__class.ON_HERO_CHANGED, hec, index, self);
                self.label_job.text = gc.c_prop.heroJob[hec.job];
                self.label_combat.text = hec.combat;
                return;
            }
            //进入解锁界面
            if(index < 3){
                if(gd.heroCtrl.isToBeOpen(index)){
                    CreateRole.create().setData({action:1}).show().onClose(self._updateIcons, self);
                }
            }else{ //解锁第4个角色
                if(gd.userCtrl.get(gc.dsConsts.UserEntity.lvl)>=145){
                    Create4thRole.create().show().onClose(self._updateIcons, self);
                }else{
                    mo.showMsg(gc.id_c_msgCode.openRole4LvNotEnough);
                }
            }
        }

        _updateIcons(){
            var self = this;
            self.ico_hero0.dataChanged();
            self.ico_hero1.dataChanged();
            self.ico_hero2.dataChanged();
            self.ico_hero3.dataChanged();
        }

        hide4thRole(hide){
            var self = this;
            self.ico_hero3.visible = !hide;
            self.ico_hero3.includeInLayout = !hide;
        }
    }
}