module g_guild {

    export class GuildContributeItem extends mo.gui.ItemRenderer {

        label_limit;
        label_desc;
        label_act;
        label_gold;
        btn_act;
        ico_item;
        img_done;
        label_vip;

        dataChanged(){
            super.dataChanged();
            var self = this;
            if(self.data.hasOwnProperty("label")) return;
            self.reset();
        }

        reset(){
            var self = this;
            var guildPersonalData =  gd.guildPersonalCtrl.getData();
            var actInfo = self.data;
            var actData =  guildPersonalData[gc.dsConsts.GuildPersonalEntity.actData];
            var actId =  actInfo[gc.c_guildAct_id];
            var name = actInfo[gc.c_guildAct_name];
            var act = actInfo[gc.c_guildAct_act];
            //var actcount = actInfo[gc.c_guildAct_actCount];
            var num = actInfo[gc.c_guildAct_num];
            var gold = actInfo[gc.c_guildAct_gold];
            var icon = actInfo[gc.c_guildAct_icon];
            var currentAct = gd.guildPersonalCtrl.getActNum(actId);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildAct);

            self.label_desc.text = name;
            self.label_act.text = "贡献 +" + act;
            self.label_limit.text = currentAct + "/"+num;
            self.label_limit.visible = num>0;
            self.img_done.visible = num>0&&currentAct>=num;
            self.ico_item.source = resHelper.getTaskIconPath(icon);
            if(gold>0){
                self.label_gold.text = "金币 +" + gold;
            }
            self.label_gold.visible = gold>0;
            self.label_vip.visible = false;
            if(actId == 6 || actId == 7 || actId == 8){
                self.btn_act.icon = "btn_txt_shangxiang";
                //self.btn_act.visible = true;
                self.btn_act.visible = !self.img_done.visible;
                if(actId == 7 || actId == 8){
                    self.label_vip.visible = true;
                }
            }else{
                self.btn_act.icon = "btn_txt_qianwang";
                var linkArg = actInfo[gc.c_guildAct_uiLink];
                self.btn_act.visible = (linkArg.length>=2);
                if(self.btn_act.visible)
                    self.btn_act.visible = !self.img_done.visible;
            }
        }

        _tap_btn_act(){
            var self = this;
            var actInfo = self.data;
            var actId =  actInfo[gc.c_guildAct_id];

            if(actId == 6 || actId == 7 || actId == 8) {
                gd.guildPersonalCtrl.pickAct(actId, function(){
                    self.reset();
                }, self);
            }else{
                var linkArg = actInfo[gc.c_guildAct_uiLink];
                var moduleId = linkArg[0];
                var subModuleId = linkArg[1];
                var moduleParam:any;
                var moduleId:any;
                switch (moduleId){
                    case 6:
                        moduleParam = {subModuleId : subModuleId};
                        moduleId = g_consts.moduleId.shop;
                        break;
                    case 4:
                        moduleParam = {subModuleId : subModuleId};
                        moduleId = g_consts.moduleId.forge;
                        break;
                    case 3:
                        moduleParam = {subModuleId : subModuleId};
                        moduleId = g_consts.moduleId.role;
                        break;
                    case 2:
                        moduleParam = {subModuleId : subModuleId};
                        moduleId = g_consts.moduleId.home;
                        break;
                    case 1:
                        moduleParam = {subModuleId : subModuleId};
                        moduleId = g_consts.moduleId.fight;
                        break;
                }
                if(moduleId && moduleParam){
                    mo.moduleMgr.runModule(moduleId, moduleParam);
                    self.delegate.close();
                }
            }
        }
    }
}