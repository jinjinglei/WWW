/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_task{
    export class TaskItem extends mo.gui.ItemRenderer{
        static ON_BTN_GET:string = "on_btn_get";


        ico:egret.gui.UIAsset;
        label_title:egret.gui.Label;
        label_num:mo.gui.Label;
        label_desc:egret.gui.Label;
        btn_get:egret.gui.Button;
        btn_go:egret.gui.Button;
        grp_res0:egret.gui.Group;
        grp_res1:egret.gui.Group;
        grp_res3:egret.gui.Group;
        img_done:egret.gui.UIAsset;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.btn_get.visible = false;
            self.btn_go.visible = false;
            self.img_done.visible = false;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var c_task = self.data;
            var taskId = c_task[gc.c_task_id];
            self.label_title.text = c_task[gc.c_task_name];
            self.label_desc.text = c_task[gc.c_task_note];
            self.ico.source = resHelper.getTaskIconPath(c_task[gc.c_task_icon]);
            var rewardArr = utils.itemObj2ObjArr(gd.taskCtrl.getTaskReward(taskId));
            rewardArr.sort(function(a, b){
                return (a.itemId == gc.c_prop.spItemIdKey.vitality)? -1 : 1;
            });
            for(var i = 0, li = 3; i < li; i++){
                var grp = self["grp_res" + i];
                var reward = rewardArr[i];
                if(grp) grp.visible = reward != null;
                if(reward && grp){
                    uiHelper.setResGrp(grp, reward.itemId, reward.count);
                }
            }

            var opt = gd.taskCtrl.getTaskOpt(taskId);
            //进度
            if (opt.type == 1 && (opt.subType == 4 || opt.subType == 10 || opt.subType == 12 || opt.subType == 13)) {
                self.label_num.text = opt.value >= opt.targetValue ? [1, 1] : [0, 1];
            } else {
                self.label_num.text = [opt.value, opt.targetValue];
            }
            //按钮状态
            var linkArg = c_task[gc.c_task_uiLink];
            var canGo = linkArg[0] > 0;
            var canGet = opt.isComplete && !opt.isReceive;
            self.btn_get.visible = canGet;
            self.btn_go.visible = canGo && !canGet;

            if(opt.isComplete && opt.isReceive){
                self.btn_get.visible = false;
                self.btn_go.visible = false;
            }
            //已经领去的状态
            self.enabled = !(opt.isComplete && opt.isReceive);
            self.invalidateSkinState();
        }

        _tap_btn_get(){
            var self = this;
            var c_task = self.data;
            var opt = gd.taskCtrl.getTaskOpt(c_task[gc.c_task_id]);
            gd.taskCtrl.taskAward(opt, function(){
                self.emitter.emit(self.__class.ON_BTN_GET, c_task[gc.c_task_id], self);
            }, self);
        }

        _tap_btn_go(){
            var self = this;
            var c_task = self.data;
            var linkArg = c_task[gc.c_task_uiLink];
            var moduleId = linkArg[0];
            var subModuleId = linkArg[1];
            // 1,0熔炼
            // 1,4聊天
            // 2,0装备副本
            // 2,1炼狱副本
            // 2,2境界副本
            // 2,4竞技场
            // 2,5行会
            // 2,7日常任务
            // 2,13 爬塔
            // 2,14 心法
            // 3,1技能
            // 3,3翅膀
            // 4,0强化
            // 4,1升星
            // 4,2宝石
            // 6,1商城
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
            }
        }
    }
}