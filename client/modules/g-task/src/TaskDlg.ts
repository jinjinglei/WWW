/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_task{
    export class TaskDlg extends mo.gui.Dlg{

        tab_task:egret.gui.TabBar;
        viewStack:egret.gui.ViewStack;
        label_act:mo.gui.Label;
        btn_bronze:egret.gui.Button;
        btn_silver:egret.gui.Button;
        btn_gold:egret.gui.Button;
        pb_active:egret.gui.ProgressBar;
        img_red0:egret.gui.UIAsset; //每日红点
        img_red1:egret.gui.UIAsset; //成就红点

        list_daily_tasks:egret.gui.List;
        list_achivements:egret.gui.List;

        _Item_list_daily_tasks;
        _Item_list_achivements;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_daily_tasks = TaskItem;
            self._Item_list_achivements = TaskItem;

            self.registerClassByKey(gd.TaskCtrl, gd.TaskCtrl.ON_RECIVED_BOX, self.dataChanged);
        }

        _initItem_list_daily_tasks(cell:TaskItem){
            var self = this;
            var hec = self.data.hec;
            cell.emitter.on(TaskItem.ON_BTN_GET, function(taskId){
               self.refreshList("list_daily_tasks");
                self.dataChanged();
            }, self);
        }

        _initItem_list_achivements(cell:TaskItem){
            var self = this;
            var hec = self.data.hec;
            cell.emitter.on(TaskItem.ON_BTN_GET, function(taskId){
                self.refreshList("list_achivements");
                self.dataChanged();
            }, self);
        }

        _data_list_daily_tasks():any[]{
            var self = this, filter, sorter;
            return gd.taskCtrl.getDailyTaskList();
        }
        _data_list_achivements():any[]{
            var self = this, filter, sorter;
            return gd.taskCtrl.getTasksList();
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            this.tab_task.dataProvider = self.viewStack;
            this.tab_task.selectedIndex = 0;
            self.dataChanged();
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var opt = gd.taskCtrl.getVitalityProgress();
            self.label_act.text = [opt.cur, opt.max];
            self.pb_active.value = opt.per;
            var redData = gd.taskCtrl.isTaskReddot();
            self.img_red0.visible = redData[0];
            self.img_red1.visible = redData[1];

            self._showBoxEffect();
        }

        _showBoxEffect(){
            var self = this;
            var resArr = ["ico_bronze_box", "ico_silver_box", "ico_gold_box"];
            for(var i = 0; i < 3; i++){
                var efx:g_comp.UIEffect = self["efx" +i];
                var box:egret.gui.UIAsset = self["btn_box" +i];
                var opt = gd.taskCtrl.getVitalityBoxState(i);
                var canGet = opt[0];
                var isRecived = opt[1];
                box.source = isRecived? resArr[i]+"_open" : resArr[i];
                var showEfx = (canGet && !isRecived);
                if(showEfx){
                    efx.visible = true;
                    efx.play(-1);
                }else{
                    efx.gotoAndStop(1);
                    efx.visible = false;
                }
            }
        }

        _showBox(index){
            ActivityBoxReward.create().setData({index: index}).show();
        }

        _tap_btn_box0(){
            var self = this;
            self._showBox(0);
        }

        _tap_btn_box1(){
            var self = this;
            self._showBox(1);
        }

        _tap_btn_box2(){
            var self = this;
            self._showBox(2);
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = TaskDlg;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            gd.taskCtrl.getInfo(function() {
                cb();
            }, this);
        });
    });
}