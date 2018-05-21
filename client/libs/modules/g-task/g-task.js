/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_task;
(function (g_task) {
    var ActivityBoxReward = (function (_super) {
        __extends(ActivityBoxReward, _super);
        function ActivityBoxReward() {
            _super.apply(this, arguments);
        }
        var d = __define,c=ActivityBoxReward,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_base.BaseItemCell;
        };
        p._data_list_items = function () {
            var self = this, filter, sorter;
            return gd.userUtils.getLoots(utils.itemObj2ObjArr(gd.taskCtrl.queryVitalityBoxReward(self.index)[1]));
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            self.index = self.data.index;
            var spItems = utils.itemObj2ObjArr(gd.taskCtrl.queryVitalityBoxReward(self.index)[0]);
            for (var i = 0, li = 2; i < li; i++) {
                var grp = self['grp_res' + i];
                var spItem = spItems[i];
                grp.visible = spItem != null;
                if (spItem) {
                    uiHelper.setResGrp(grp, spItem.itemId, spItem.count);
                }
            }
            var opt = gd.taskCtrl.getVitalityBoxState(self.index);
            var canGet = opt[0];
            var isRecived = opt[1];
            self.btn_do.icon = (canGet && !isRecived) ? "btn_txt_g_get" : "btn_txt_g_back";
        };
        p._tap_btn_do = function () {
            var self = this;
            var opt = gd.taskCtrl.getVitalityBoxState(self.index);
            var canGet = opt[0];
            var isRecived = opt[1];
            if (canGet && !isRecived) {
                gd.taskCtrl.getVitalityChest(self.index, self.close, self);
            }
            else {
                self.close();
            }
        };
        return ActivityBoxReward;
    })(mo.gui.Dlg);
    g_task.ActivityBoxReward = ActivityBoxReward;
    egret.registerClass(ActivityBoxReward,"g_task.ActivityBoxReward");
})(g_task || (g_task = {}));

/**
 * Created by SmallAiTT on 2015/8/5.
 */
var g_task;
(function (g_task) {
    var TaskItem = (function (_super) {
        __extends(TaskItem, _super);
        function TaskItem() {
            _super.apply(this, arguments);
        }
        var d = __define,c=TaskItem,p=c.prototype;
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            self.btn_get.visible = false;
            self.btn_go.visible = false;
            self.img_done.visible = false;
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var c_task = self.data;
            var taskId = c_task[gc.c_task_id];
            self.label_title.text = c_task[gc.c_task_name];
            self.label_desc.text = c_task[gc.c_task_note];
            self.ico.source = resHelper.getTaskIconPath(c_task[gc.c_task_icon]);
            var rewardArr = utils.itemObj2ObjArr(gd.taskCtrl.getTaskReward(taskId));
            rewardArr.sort(function (a, b) {
                return (a.itemId == gc.c_prop.spItemIdKey.vitality) ? -1 : 1;
            });
            for (var i = 0, li = 3; i < li; i++) {
                var grp = self["grp_res" + i];
                var reward = rewardArr[i];
                if (grp)
                    grp.visible = reward != null;
                if (reward && grp) {
                    uiHelper.setResGrp(grp, reward.itemId, reward.count);
                }
            }
            var opt = gd.taskCtrl.getTaskOpt(taskId);
            //进度
            if (opt.type == 1 && (opt.subType == 4 || opt.subType == 10 || opt.subType == 12 || opt.subType == 13)) {
                self.label_num.text = opt.value >= opt.targetValue ? [1, 1] : [0, 1];
            }
            else {
                self.label_num.text = [opt.value, opt.targetValue];
            }
            //按钮状态
            var linkArg = c_task[gc.c_task_uiLink];
            var canGo = linkArg[0] > 0;
            var canGet = opt.isComplete && !opt.isReceive;
            self.btn_get.visible = canGet;
            self.btn_go.visible = canGo && !canGet;
            if (opt.isComplete && opt.isReceive) {
                self.btn_get.visible = false;
                self.btn_go.visible = false;
            }
            //已经领去的状态
            self.enabled = !(opt.isComplete && opt.isReceive);
            self.invalidateSkinState();
        };
        p._tap_btn_get = function () {
            var self = this;
            var c_task = self.data;
            var opt = gd.taskCtrl.getTaskOpt(c_task[gc.c_task_id]);
            gd.taskCtrl.taskAward(opt, function () {
                self.emitter.emit(self.__class.ON_BTN_GET, c_task[gc.c_task_id], self);
            }, self);
        };
        p._tap_btn_go = function () {
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
            var moduleParam;
            var moduleId;
            switch (moduleId) {
                case 6:
                    moduleParam = { subModuleId: subModuleId };
                    moduleId = g_consts.moduleId.shop;
                    break;
                case 4:
                    moduleParam = { subModuleId: subModuleId };
                    moduleId = g_consts.moduleId.forge;
                    break;
                case 3:
                    moduleParam = { subModuleId: subModuleId };
                    moduleId = g_consts.moduleId.role;
                    break;
                case 2:
                    moduleParam = { subModuleId: subModuleId };
                    moduleId = g_consts.moduleId.home;
                    break;
                case 1:
                    moduleParam = { subModuleId: subModuleId };
                    moduleId = g_consts.moduleId.fight;
                    break;
            }
            if (moduleId && moduleParam) {
                mo.moduleMgr.runModule(moduleId, moduleParam);
            }
        };
        TaskItem.ON_BTN_GET = "on_btn_get";
        return TaskItem;
    })(mo.gui.ItemRenderer);
    g_task.TaskItem = TaskItem;
    egret.registerClass(TaskItem,"g_task.TaskItem");
})(g_task || (g_task = {}));

/**
 * Created by SmallAiTT on 2015/7/24.
 */
var g_task;
(function (g_task) {
    var TaskDlg = (function (_super) {
        __extends(TaskDlg, _super);
        function TaskDlg() {
            _super.apply(this, arguments);
        }
        var d = __define,c=TaskDlg,p=c.prototype;
        //@override
        p._initProp = function () {
            var self = this;
            _super.prototype._initProp.call(this);
            self._layerOpt.shownWithAction = false;
            self._Item_list_daily_tasks = g_task.TaskItem;
            self._Item_list_achivements = g_task.TaskItem;
            self.registerClassByKey(gd.TaskCtrl, gd.TaskCtrl.ON_RECIVED_BOX, self.dataChanged);
        };
        p._initItem_list_daily_tasks = function (cell) {
            var self = this;
            var hec = self.data.hec;
            cell.emitter.on(g_task.TaskItem.ON_BTN_GET, function (taskId) {
                self.refreshList("list_daily_tasks");
                self.dataChanged();
            }, self);
        };
        p._initItem_list_achivements = function (cell) {
            var self = this;
            var hec = self.data.hec;
            cell.emitter.on(g_task.TaskItem.ON_BTN_GET, function (taskId) {
                self.refreshList("list_achivements");
                self.dataChanged();
            }, self);
        };
        p._data_list_daily_tasks = function () {
            var self = this, filter, sorter;
            return gd.taskCtrl.getDailyTaskList();
        };
        p._data_list_achivements = function () {
            var self = this, filter, sorter;
            return gd.taskCtrl.getTasksList();
        };
        p._childrenCreated = function () {
            _super.prototype._childrenCreated.call(this);
            var self = this;
            this.tab_task.dataProvider = self.viewStack;
            this.tab_task.selectedIndex = 0;
            self.dataChanged();
        };
        p.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
            var self = this;
            var opt = gd.taskCtrl.getVitalityProgress();
            self.label_act.text = [opt.cur, opt.max];
            self.pb_active.value = opt.per;
            var redData = gd.taskCtrl.isTaskReddot();
            self.img_red0.visible = redData[0];
            self.img_red1.visible = redData[1];
            self._showBoxEffect();
        };
        p._showBoxEffect = function () {
            var self = this;
            var resArr = ["ico_bronze_box", "ico_silver_box", "ico_gold_box"];
            for (var i = 0; i < 3; i++) {
                var efx = self["efx" + i];
                var box = self["btn_box" + i];
                var opt = gd.taskCtrl.getVitalityBoxState(i);
                var canGet = opt[0];
                var isRecived = opt[1];
                box.source = isRecived ? resArr[i] + "_open" : resArr[i];
                var showEfx = (canGet && !isRecived);
                if (showEfx) {
                    efx.visible = true;
                    efx.play(-1);
                }
                else {
                    efx.gotoAndStop(1);
                    efx.visible = false;
                }
            }
        };
        p._showBox = function (index) {
            g_task.ActivityBoxReward.create().setData({ index: index }).show();
        };
        p._tap_btn_box0 = function () {
            var self = this;
            self._showBox(0);
        };
        p._tap_btn_box1 = function () {
            var self = this;
            self._showBox(1);
        };
        p._tap_btn_box2 = function () {
            var self = this;
            self._showBox(2);
        };
        return TaskDlg;
    })(mo.gui.Dlg);
    g_task.TaskDlg = TaskDlg;
    egret.registerClass(TaskDlg,"g_task.TaskDlg");
    egret.Boot.once(egret.Boot.AFTER_CONFIG, function () {
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = TaskDlg;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);
        moduleCfgItem.onPreAsync(function (moduleParam, cb) {
            gd.taskCtrl.getInfo(function () {
                cb();
            }, this);
        });
    });
})(g_task || (g_task = {}));

