/**
 * Created by Sara on 2015/10/7.
 */
module gd {
    export class TaskCtrl extends mo.DataController {

        static ON_RECIVED_BOX:string = "on_recevied_box";

        _dailyTaskList; //日常任务

        _taskUpdateId:number = 0;

        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.TaskEntity;
        }

        initData(data){
            if(!data) return;
            var self = this;
            self.init(data);
        }

        updateEntity(data){
            super.updateEntity(data);
            pointCtrl.cal(gc.c_prop.pointEffectKey.task);
        }

        getUpdateId(){
           return this._taskUpdateId;
        }

        syncData(){
            var self = this;
            var args = {};
            mo.request4Server(gc.iface.a_task_getInfo, args, function (data) {
                self.init(data[gc.dsConsts.ExTask.taskData]);
                self._taskUpdateId = data[gc.dsConsts.ExTask.updateId];
                pointCtrl.cal(gc.c_prop.pointEffectKey.task);

            });
        }

        //初始化数据
        getInfo(cb,target){
            var self = this;
            var args = {};
            mo.requestWaiting4Server(gc.iface.a_task_getInfo, args, function (data) {
                self.init(data[gc.dsConsts.ExTask.taskData]);
                self._taskUpdateId = data[gc.dsConsts.ExTask.updateId];
                pointCtrl.cal(gc.c_prop.pointEffectKey.task);
                cb.call(target,data);
            });
        }

        //获取活跃值   [活跃值，是否领取数据]
        getVitality(){
            var self = this;
            var value = 0;
            var vitalityChests = [0,0,0];
            var refreshTime = self.get(gc.dsConsts.TaskEntity.refreshTime);
            if(refreshTime && Date.newDate(refreshTime).equalsDay(Date.newDate())){
                value = self.get(gc.dsConsts.TaskEntity.vitality);
                vitalityChests = self.get(gc.dsConsts.TaskEntity.vitalityChests);
            }

            return [value,vitalityChests];
        }

        //获取活跃宝箱是否可领取，是否已领取   【是否可领取，是否领取】
        getVitalityBoxState(index){
            var self = this;
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.vitalityCfg);
            var returnArr = [false,true];
            var vitalityArr = self.getVitality();
            var vitality = vitalityArr[0];
            var vitalityChests = vitalityArr[1];
            var needVitality = c_game[index];
            if(vitality >= needVitality) returnArr[0] = true;
            if(vitalityChests[index] == 0) returnArr[1] = false;

            return returnArr;
        }

        //获取活跃值进度
        getVitalityProgress(){
            var self = this;
            var opt = {
                cur: 0,
                max: 0,
                per: 0
            };

            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.vitalityCfg);
            var vitalityArr = self.getVitality();
            opt.cur = parseInt(vitalityArr[0].toString());
            opt.max = c_game[2];
            opt.per = opt.cur / opt.max * 100;
            return opt;
        }

        //获取日常任务列表
        getDailyTaskList(){
            var self = this;
            var cfg_c_task = mo.getJSONWithFileName(gc.cfg_c_task);
            if(!self._dailyTaskList){
                var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.dailyTasksCfg);
                var startId = c_game[0], endId = c_game[1];
                var list = [];
                for(var id = startId; id <= endId; id++){
                    if(id == 2100012) continue;
                    list.push(cfg_c_task[id]);
                }
                self._dailyTaskList = list;
            }
            var sortArr = [];
            for(var i = 0; i < self._dailyTaskList.length; i++){
                var id = self._dailyTaskList[i][gc.c_task_id];
                sortArr.push([id,self.getTaskOpt(id).isComplete?(self.getTaskOpt(id).isReceive?1:3):2]);
            }
            var returnArr = [];
            sortArr = sortList(sortArr);
            for(var i = 0; i < sortArr.length; i++){
                returnArr.push(cfg_c_task[sortArr[i][0]]);
            }
            return returnArr;
        }

        //获取成就任务列表
        getTasksList(){
            var self = this;
            var returnArr = [];
            var cfg_c_task = mo.getJSONWithFileName(gc.cfg_c_task);
            var tasks = self.get(gc.dsConsts.TaskEntity.tasks);
            var sortArr = [];
            for(var i = 0; i <= 13; i++){       //可以领取 1   2 领取完 3
                var tasksId = tasks[i];
                sortArr.push([tasksId,self.getTaskOpt(tasksId).isComplete?(self.getTaskOpt(tasksId).isReceive?1:3):2]);
            }
            sortArr = sortList(sortArr);
            for(var i = 0; i < sortArr.length; i++){
                returnArr.push(cfg_c_task[sortArr[i][0]]);
            }
            return returnArr;
        }

        //获取任务奖励物品
        getTaskReward(taskId){
            var self = this;
            var c_task = mo.getJSONWithFileNameAndID(gc.cfg_c_task,taskId);
            var c_reward = mo.getJSONWithFileNameAndID(gc.cfg_c_reward, c_task[gc.c_task_rewardId]);
            var reward = {};
            if(c_reward[gc.c_reward_gold]) reward[gc.c_prop.spItemIdKey.gold] = c_reward[gc.c_reward_gold];
            if(c_reward[gc.c_reward_diamond]) reward[gc.c_prop.spItemIdKey.diamond] = c_reward[gc.c_reward_diamond];
            if(c_reward[gc.c_reward_activity]) reward[gc.c_prop.spItemIdKey.vitality] = c_reward[gc.c_reward_activity];
            var rewardItems = c_reward[gc.c_reward_rewardItems];
            for(var itemId in rewardItems){
                reward[itemId] = rewardItems[itemId];
            }
            return reward;
        }

        //获取累计熔炼件数
        getEquipSmelt(){
            var self = this;
            var tasksValue = self.get(gc.dsConsts.TaskEntity.tasksValue);
            return tasksValue[gc.c_prop.cTaskTypeKey.equipSmelt];
        }

        //获取遭遇战次数
        getEncounter(){
            var self = this;
            var tasksValue = self.get(gc.dsConsts.TaskEntity.tasksValue);
            return tasksValue[gc.c_prop.cTaskTypeKey.encounter];
        }

        //获取每日数据   {"任务id":[完成数量,是否领取],"任务id":[完成数量,是否领取],.....}
        getDailyTasks(){
            var self = this;
            var dailyTasks = {};
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var refreshTime = self.get(gc.dsConsts.TaskEntity.refreshTime);
            if(!refreshTime || !Date.newDate(refreshTime).equalsDay(Date.newDate())){
                var dailyTasksStar = cfg_c_game[gc.id_c_game.dailyTasksCfg][0];
                var dailyTasksEnd = cfg_c_game[gc.id_c_game.dailyTasksCfg][1];
                for(var i = dailyTasksStar;i <= dailyTasksEnd; i++){
                    dailyTasks[i] = [0,0];
                }
            }else{
                dailyTasks = self.get(gc.dsConsts.TaskEntity.dailyTasks);
            }
            return dailyTasks;
        }

        getTaskOpt(taskId){
            var self = this;
            var opt = {
                taskId : taskId,        //任务id
                value : 0,      //完成数
                targetValue: 1, //目标数
                isComplete : true,     //是否完成
                isReceive: true,      //是否领取
                type: 0,                    //任务主类型
                subType: 0               //任务子类型
            };

            var cfg_c_task = mo.getJSONWithFileName(gc.cfg_c_task);
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var c_task = cfg_c_task[taskId];
            var dailyTasksStar = cfg_c_game[gc.id_c_game.dailyTasksCfg][0];
            var dailyTasksEnd = cfg_c_game[gc.id_c_game.dailyTasksCfg][1];
            var dailyTasks = self.getDailyTasks();
            var needValue = c_task[gc.c_task_targetValue];
            var doneTasks = self.get(gc.dsConsts.TaskEntity.doneTasks)||[];
            var tasksValue = self.get(gc.dsConsts.TaskEntity.tasksValue);
            var cTaskType = c_task[gc.c_task_cTaskType];
            opt.type = c_task[gc.c_task_taskType];
            opt.subType = c_task[gc.c_task_cTaskType];
            if(taskId >= dailyTasksStar && taskId <= dailyTasksEnd){        //每日 {"任务id":[完成数量,是否领取],"任务id":[完成数量,是否领取],.....}
                if(!dailyTasks[taskId]) dailyTasks[taskId] = [0, 0];
                if(dailyTasks[taskId][0] < needValue) opt.isComplete = false;
                if(dailyTasks[taskId][1] == 0) opt.isReceive = false;
                opt.value = dailyTasks[taskId][0];
            }else{      //成就任务  {"子类型":数量,"子类型":数量,...}
                if(tasksValue[cTaskType] < needValue) opt.isComplete = false;
                if(doneTasks.indexOf(taskId) == -1) opt.isReceive = false;
                var tasksValue = self.get(gc.dsConsts.TaskEntity.tasksValue);
                opt.value = tasksValue[cTaskType];
            }

            //目标数
            var targetValue = c_task[gc.c_task_targetValue];
            opt.targetValue = targetValue;
            //var subType = c_task[gc.c_task_cTaskType];//子类型
            //var KEY = gc.c_prop.cTaskTypeKey;
            //switch (subType){
            //    case KEY.personLvl:
            //    case KEY.equipSmelt:
            //    case KEY.encounter:
            //    case KEY.equipStrength:
            //        opt.targetValue = targetValue;
            //        break;
            //    default :
            //        opt.targetValue = 1;
            //        break;
            //}
            return opt;
        }

        /**
         * 任务奖励领取
         * @param taskId 任务id
         * @param cb
         * @param target
         */
        taskAward(opt,cb,target) {
            var self = this;
            var taskId = opt.taskId;

            if(!opt.isComplete) return mo.showMsg("未达成完成条件");
            if(opt.isReceive) return mo.showMsg("已领取");

            var argKeys = gc.iface.a_task_taskAward_args;
            var args = {};
            args[argKeys.taskId] = taskId;
            mo.requestWaiting4Server(gc.iface.a_task_taskAward, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                var taskData = data[gc.dsConsts.ExUserData.taskData]||{};
                var items = data[gc.dsConsts.ExUserData.items]||{};       //抽奖所得OBJ {itemId:数量，itemId:数量，。。。}
                var vitality = data[gc.dsConsts.ExUserData.vitality]||0;      //获得活跃度
                self.updateEntity(taskData);
                gd.userCtrl.updateEntity(userData);
                cb.call(target,[items,vitality]);
            });
        }

        /**
         * 领取活跃度宝箱
         * @param index 宝箱下标
         * @param cb
         * @param target
         */
        getVitalityChest(index,cb,target){
            var self = this;

            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var refreshTime = self.get(gc.dsConsts.TaskEntity.refreshTime);
            var vitality = self.get(gc.dsConsts.TaskEntity.vitality);
            var needVitalityArr = cfg_c_game[gc.id_c_game.vitalityCfg]||[];
            var vitalityChests = self.get(gc.dsConsts.TaskEntity.vitalityChests)||[0,0,0];
            if(!refreshTime) return mo.showMsg("探宝值不足");
            if(!Date.newDate(refreshTime).equalsDay(Date.newDate())) return mo.showMsg("探宝值不足");
            if(vitality < needVitalityArr[index]) return mo.showMsg("探宝值不足");
            if(vitalityChests[index] == 1) return mo.showMsg("已领取");

            var argKeys = gc.iface.a_task_getVitalityChest_args;
            var args = {};
            args[argKeys.index] = index;
            mo.requestWaiting4Server(gc.iface.a_task_getVitalityChest, args, function (data) {
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var bagItems = data[gc.dsConsts.ExUserData.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems]||{};
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                var taskData = data[gc.dsConsts.ExUserData.taskData]||{};
                var items = data[gc.dsConsts.ExUserData.items]||{};       //抽奖所得OBJ {itemId:数量，itemId:数量，。。。}
                self.updateEntity(taskData);
                gd.userCtrl.updateEntity(userData);
                cb.call(target,items);
                self.pushNotify(self.__class.ON_RECIVED_BOX);
            });
        }

        _isResId(itemId){
            return itemId == gc.c_prop.spItemIdKey.gold
            || itemId == gc.c_prop.spItemIdKey.diamond;
        }
        //获取宝箱奖励
        queryVitalityBoxReward(index){
            var self = this;
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var vitalityCfg = cfg_c_game[gc.id_c_game.vitalityCfg]||[];
            var rewardBoxId = vitalityCfg[index + 3];
            var t_itemLogic = mo.getJSONWithFileNameAndID(gc.cfg_t_itemLogic, rewardBoxId);
            var createArr = t_itemLogic[gc.t_itemLogic_create];
            var spItems = {}, normalItems = {};
            for(var i = 0, li = createArr.length; i < li; i++){
                var create = createArr[i];
                var itemId = create[0];
                var count = create[1];
                if(self._isResId(itemId)){
                    spItems[itemId] = count;
                }else{
                    normalItems[itemId] = count;
                }
            }
            return [spItems, normalItems];
        }

        //判断是否有任务可以领取     [每日,成就]
        isTaskReddot() {
            var self = this;
            var returnArr = [false,false];
            if(!self._data) returnArr;

            //每日
            var dailyTasks = self.getDailyTasks();
            var cfg_c_task = mo.getJSONWithFileName(gc.cfg_c_task);
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.dailyTasksCfg);
            var startId = c_game[0], endId = c_game[1];
            for(var id = startId; id <= endId; id++){
                var c_task = cfg_c_task[id];
                var needValue = c_task[gc.c_task_targetValue];
                if(!dailyTasks[id]) dailyTasks[id] = [0, 0];
                if(dailyTasks[id][0] < needValue) continue;
                if(dailyTasks[id][1] != 0) continue;
                returnArr[0] = true;
                break;
            }
            //成就
            var tasks = self.get(gc.dsConsts.TaskEntity.tasks);
            var tasksValue = self.get(gc.dsConsts.TaskEntity.tasksValue);
            var doneTasks = self.get(gc.dsConsts.TaskEntity.doneTasks)||[];
            for(var key in tasks){
                var needValue = cfg_c_task[tasks[key]][gc.c_task_targetValue];
                if(tasksValue[key] < needValue) continue;
                if(doneTasks.indexOf(tasks[key]) != -1) continue;
                returnArr[1] = true;
                break;
            }
            return returnArr;
        }

    }

    export function sortList(list) {
        //数据结构：[id,是否可领取]       [tasksId,self.getTaskOpt(tasksId).isComplete,self.getTaskOpt(tasksId).isReceive]
        var sortIdx = [1,0]; //排序规则：是否可领取＞id
        var sortType = [-1,1]; //id升序，其他降序
        list.sort(function (a, b) {
            for (var i = 0; i < 2; i++) {
                var type = sortType[i];
                if (a[sortIdx[i]] > b[sortIdx[i]]) {
                    return type <= 0 ? -1 : 1;
                }
                else if (a[sortIdx[i]] < b[sortIdx[i]]) {
                    return type <= 0 ? 1 : -1;
                }
            }
            return 0;
        });
        return list;
    }

    export var taskCtrl:TaskCtrl;
}