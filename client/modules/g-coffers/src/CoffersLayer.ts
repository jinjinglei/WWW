/**
 * Created by Administrator on 2016/1/5.
 */
module g_coffers{
    export class CoffersLayer extends mo.gui.Layer {
        tab_btn;
        grp_coffers;
        grp_build;
        grp_defence;

        label_lv;
        label_coffer;
        label_gold;
        label_rob;
        label_robed;

        label_curLv;
        label_curCoffer;
        label_curAddProp;
        label_nextLv;
        label_nextCoffer;
        label_nextAddProp;
        bar_build;
        //label_cost;
        label_add1;
        label_add2;
        grp_canBuild;
        label_cannotBuild;
        //ico_rmb;
        label_leftCount;
        label_vip;
        label_maxLevel;
        grp_next;

        label_addProp;
        label_addProp1;
        defUsers;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;

            self.registerClassByKey(gd.CoffersCtrl, gc.dsConsts.CoffersEntity.buildValue.toString(), this.buildValueChanged);
            self.registerClassByKey(gd.CoffersCtrl, gc.dsConsts.CoffersEntity.resource.toString(), this.coffersChanged);
            self.registerClassByKey(gd.CoffersCtrl, gc.dsConsts.CoffersEntity.lootResource.toString(), this.coffersChanged);
            self.registerClassByKey(gd.CoffersCtrl, gc.dsConsts.CoffersEntity.beLootResource.toString(), this.coffersChanged);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self._tap_tab_btn();
        }

        dataChanged() {
            super.dataChanged();
            var self = this;

            self.coffersChanged();
            self.buildValueChanged();
        }

        coffersChanged(){
            var self = this;
            var data = self.data;//[gc.dsConsts.CoffersEntity]
            self.label_gold.text = gd.coffersCtrl.getPersonResource().toString();
            self.label_coffer.text = utils.formatByWan2(data[gc.dsConsts.CoffersEntity.resource]);
            self.label_rob.text = utils.formatByWan2(data[gc.dsConsts.CoffersEntity.lootResource]);
            self.label_robed.text = utils.formatByWan2(data[gc.dsConsts.CoffersEntity.beLootResource]);
        }

        buildValueChanged(){
            var self = this;
            var data = gd.coffersCtrl.getData();
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
            var curLv = data[gc.dsConsts.CoffersEntity.lvl];
            var iniCfgInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.initCfg);

            if (curLv >= iniCfgInfo[6]) {
                //满级
                self.label_maxLevel.visible = true;
                self.grp_next.visible = false;
            }else{
                self.label_maxLevel.visible = false;
                self.grp_next.visible = true;
                var nextLv = curLv+1;
                var nextLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, nextLv);
                self.label_nextLv.text = nextLv+"级";
                self.label_nextCoffer.text = utils.formatByWan2(nextLvInfo[gc.c_lvl_coffersBase]);
                self.label_nextAddProp.text = (nextLvInfo[gc.c_lvl_cofferPower]/100).toFixed(1)+"%";
            }

            var curBuildNum = gd.coffersCtrl.getBuildNum();
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, gd.userCtrl.getVip());

            self.label_lv.text = data[gc.dsConsts.CoffersEntity.lvl]+"级";

            var curLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, curLv);
            self.label_curLv.text = curLv+"级";
            self.label_curCoffer.text = utils.formatByWan2(curLvInfo[gc.c_lvl_coffersBase]);
            self.label_curAddProp.text = (curLvInfo[gc.c_lvl_cofferPower]/100).toFixed(1)+"%";
            self.bar_build.maximum = curLvInfo[gc.c_lvl_cofferExpc];
            self.bar_build.value = data[gc.dsConsts.CoffersEntity.buildValue];
            self.label_vip.text = gd.userCtrl.getVip().toString();
            self.label_leftCount.text = (vipInfo[gc.c_vip_coffersBuild]-curBuildNum)+"/"+(vipInfo[gc.c_vip_coffersBuild]);
            if(curBuildNum<vipInfo[gc.c_vip_coffersBuild]){
                //self.ico_rmb.visible = true;
                //self.label_cost.text = gameInfo[2]+"";
                self.label_add1.text = ""+gameInfo[14];
                self.label_add2.text = "建设值+"+gameInfo[4];
                self.label_cannotBuild.visible = false;
                self.grp_canBuild.visible = true;
            }else{
                self.label_cannotBuild.visible = true;
                self.grp_canBuild.visible = false;
            }

            self.label_addProp.text = mo.STR.format("守卫生命+%s%(国库加成)", (curLvInfo[gc.c_lvl_cofferPower] / 100).toFixed(1));
            self.label_addProp1.text = mo.STR.format("守卫攻击+%s%(激励加成)", gd.coffersCtrl.getAddPropByBuff().toFixed(1));
        }

        setDefeseData(datas){
            var self = this;
            self.defUsers = datas;
            var rankSrcs = [0,"ico_wangcengbazu","ico_shalukuangmo","ico_jigjidasii","ico_zhanglijingying"];
            for(var i=0; i<4; ++i){
                var data = datas[i];//gc.dsConsts.CofferUser
                var rankType = data[gc.dsConsts.CofferUser.rankType];
                var name = data[gc.dsConsts.CofferUser.name];
                var combat = data[gc.dsConsts.CofferUser.combat];
                var icon = data[gc.dsConsts.CofferUser.icon];
                var level = data[gc.dsConsts.CofferUser.lvl];
                var door = data[gc.dsConsts.CofferUser.door];
                var medalId = data[gc.dsConsts.CofferUser.medalTitle] || 0;

                self["label_name"+door].text = name;
                self["label_lv"+door].text = "Lv."+level;
                self["label_combat"+door].text = combat;
                self["ico_face"+door].source = uiHelper.getHeroIcon(icon, 0);
                self["ico_rank"+door].source = rankSrcs[rankType];
                if (medalId != 0) {
                    self["ico_medal" + door].setData({itemId: medalId});
                    self["ico_medal" + door].visible = true;
                } else {
                    self["ico_medal" + door].visible = false;
                }
            }
        }
        _tap_grp_def0(){
            var self = this;
            self.lookUserInfo(0);
        }
        _tap_grp_def1(){
            var self = this;
            self.lookUserInfo(1);
        }
        _tap_grp_def2(){
            var self = this;
            self.lookUserInfo(2);
        }
        _tap_grp_def3(){
            var self = this;
            self.lookUserInfo(3);
        }
        lookUserInfo(doorLook){
            var self = this;
            var user;
            for(var i=0; i<self.defUsers.length; ++i) {
                var data = self.defUsers[i];//gc.dsConsts.CofferUser
                var door = data[gc.dsConsts.CofferUser.door];
                if(door == doorLook){
                    user = data;
                    break;
                }
            }
            if(!user) return;
            var userId = user[gc.dsConsts.CofferUser.userId];
            mo.moduleMgr.pushModule(g_consts.moduleId.roleEnemyInfo, {userId:userId});
        }

        _tap_btn_heroRec(){
            gd.coffersCtrl.getLootRecordArr(function(recs){
                CoffersHeroRecDlg.create().setData({recs:recs}).show();
            },this);
        }

        _tap_btn_build(){
            gd.coffersCtrl.build(function(){

            },this);
        }

        _tap_btn_defRec(){
            gd.coffersCtrl.getDefeseRecord(function(recs){
                CoffersDefenceRecDlg.create().setData({recs:recs}).show();
            },this);
        }

        _tap_tab_btn(){
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            self.grp_coffers.visible = selectedIndex==0;
            self.grp_build.visible = selectedIndex==1;
            self.grp_defence.visible = selectedIndex==2;
            if(selectedIndex==2){
                gd.coffersCtrl.getDefeseData(function(datas){
                    if(datas.length>0){
                        self.setDefeseData(datas);
                    }else{
                        self.tab_btn.selectedIndex = 0;
                        self._tap_tab_btn();
                        mo.showMsg(gc.id_c_msgCode.haveNoGuard);
                    }
                },self);
            }
        }
        _tap_btn_close(){
            //var self = this;
            //self.close();
            mo.moduleMgr.runModule(g_consts.moduleId.home);
        }
        _tap_btn_help(){
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;
            if(selectedIndex == 0){
                g_base.BaseShowTip.create().setData({id:33}).show();
            }else if(selectedIndex == 1){
                //var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.coffers);
                g_base.BaseShowTip.create().setData({id:34}).show();
            }else if(selectedIndex == 2){
                g_base.BaseShowTip.create().setData({id:35}).show();
            }

        }

        _tap_btn_jili() {
            var self = this;
            CoffersJili.create().show().onClose(function () {
                self.dataChanged();
            });
        }
    }
}