/**
 * Created by Administrator on 2015/10/8.
 */
module g_activity{
    export class FiveDetail extends mo.gui.Dlg{
        label_title;
        label_date;
        label_desc;
        list_ranks;
        list_items;
        _Item_list_items;
        _Item_list_ranks;

        _targets:Array<any>;

        ico_title;
        title_day;
        img_unFinished;
        btn_done;
        btn_outdate;
        btn_get;
        img_wczb;
        img_rank;
        label_d;
        img_red;

        _initProp(){
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;

            self._Item_list_items = g_base.BaseItemCell;
            self._Item_list_ranks = FiveRankItem;

            self._targets = [
                //[第一天, 标题, 普通目标描述, 任务id, 目标值]
                ["ico_diyitian", "ico_wentian", "grp_combat", "ico_zanlipaiming", 3100004, "label_combatNeed"]
                ,["ico_diertian", "ico_senliu", "grp_wing", "ico_chibangpaiming", 3100002, "label_wingLvlNeed"]
                ,["ico_dishantian", "ico_qiling", "grp_arena", "ico_jinjichangpm", 3100003, "label_arenaNum"]
                ,["ico_dishitian", "ico_tianxia", "img_guild", "ico_hanhuidenjipm", 3100005]
                ,["ico_diwutian", "ico_weiwoduzhun", "img_wc", "ico_shouleipaiming"]
            ];
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var idx = self.data.idx;
            self.img_wczb.visible = idx == 4;
            self.title_day.visible = idx < 4;
            self.title_day.source = self._targets[idx][0];
            self.ico_title.source = self._targets[idx][1];
            self._hideAll();
            self[self._targets[idx][2]].visible = true;
            //设置参数
            var taskId = self._targets[idx][4];
            if(taskId){
                var task = mo.getJSONWithFileNameAndID(gc.cfg_c_task, taskId);
                var targetV = task[gc.c_task_targetValue];
                var label = self[self._targets[idx][5]];
                if(targetV && label){
                    label.text = targetV+"";
                }
            }
            //完成状态
            var normalTargetInfo = gd.fiveDaysTargetCtrl.getNormalTargetInfo(idx);

            self.img_unFinished.visible = false;
            self.btn_get.visible = false;
            self.btn_done.visible = false;

            var finished = normalTargetInfo[0];
            var canGet = normalTargetInfo[1];
            var isGot = normalTargetInfo[2];
            var outDate = normalTargetInfo[3];
            self.img_unFinished.visible = !finished && !outDate;
            self.btn_get.visible = (!finished || !isGot) && !outDate;
            self.btn_done.visible = isGot;
            self.btn_outdate.visible = outDate;

            self.img_rank.source = self._targets[idx][3];

            //设置活动时间
            self.label_date.visible = self.label_d.visible = false;
            if(idx != 4){
                self.label_date.visible = self.label_d.visible = true;
                var fdCtrl:gd.FiveDaysTargetCtrl = gd.fiveDaysTargetCtrl;
                uiHelper.setEventTime(self.label_date, fdCtrl.getStarTime(idx), fdCtrl.getCalTime(idx));
            }
            self.img_red.visible = canGet;
        }

        _hideAll(){
            var self = this;
            var titles = ["grp_combat", "grp_wing", "grp_arena", "grp_wing", "img_guild", "img_wc"];
            for(var i = 0, li = titles.length; i < li; i++){
                self[titles[i]].visible = false;
            }
        }


        _data_list_items():any[]{
            var self = this;
            var idx = self.data.idx;
            var taskId = self._targets[idx][4];
            var rewardArr = taskId!=null? utils.itemObj2ObjArr(gd.taskCtrl.getTaskReward(taskId)): [];
            return rewardArr;
        }

        _data_list_ranks():any[]{
            var self = this;
            var idx = self.data.idx;
            return idx == 4? [] : gd.fiveDaysTargetCtrl.getRankList(self.data.idx);
        }

        _tap_btn_get(){
            var self = this;
            var idx = self.data.idx;
            gd.fiveDaysTargetCtrl.receive(idx, self.dataChanged, self);
        }

        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            var ico_item:g_comp.Ico_Item = cell.ico_item;
            ico_item.showEquipName = true;
            cell.tapShowDetail = true;
        }
    }
}
