/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewAsk extends mo.gui.Dlg{

        list_items:any;
        list_questItems;
        _Item_list_items;
        _Item_list_questItems;
        head:g_comp.ActivityItem;
        btn_help:egret.gui.Button;
        label_activity_time:egret.gui.Label;
        label_cost_have:egret.gui.Label;
        actItems;

        btn_source:egret.gui.Button;
        medalType;
        questionArr;
        btn_sure;
        questMap;
        btn_detail;
        img_achive;
        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = ActivityNewCollectCharacterBaseItem;
            self._Item_list_questItems = ActivityNewAskItem;
            //self.registerClassByKey(gd.ActivityCtrl, gd.ActivityCtrl.ACTIVITY_OP, self.checkRedPoint);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.medalType = 0;
            self.questMap = {};
        }

        //checkRedPoint(){
        //    var self = this;
        //    self.reset();
        //}
        //
        //updateActivity(){
        //    var self = this;
        //    gd.activityCtrl.getInfo(function(){
        //       self.reset();
        //    });
        //}

        //reset(){
        //    var self = this;
        //    var exActivity = self.data.exActivity;
        //    var activity = exActivity[gc.dsConsts.ExActivity.activity];
        //
        //    self.setData({"exActivity":gd.activityCtrl.getActivity(activity[gc.dsConsts.ActivityEntity.id])});
        //
        //    var scroller = (<any>(self.list_items)).scroller;
        //    var scrollTop = scroller.scrollTop >=0?scroller.scrollTop:0;
        //    self.refreshList('list_items');
        //    process.nextTick(function(){
        //        if(!self.list_items)return;
        //        scroller.throwVertically(scrollTop,0);
        //    });
        //}

        dataChanged(){
            super.dataChanged();
            var self = this;
            var exActivity = self.data.exActivity;

            if(!exActivity)
                return;

            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            self.head.setActivity(activity);

            //活动时间
            uiHelper.setEventTime(self.label_activity_time, Date.newDate(activity[gc.dsConsts.ActivityEntity.startTime]), Date.newDate(activity[gc.dsConsts.ActivityEntity.endTime]));

            var activityId = activity[gc.dsConsts.ActivityEntity.id];
            var surveyStatus =  gd.activityCtrl.getUserSurveyStatus(activityId );
            self.setAskState(surveyStatus == 1);

            self.actItems = [];
            self.questionArr =[];

            var questIdArr = activity[gc.dsConsts.ActivityEntity.exValues];
            var index:number = 0;
            for(var i = 0;i < questIdArr.length;i++){
                var obj = {};
                obj["id"] = questIdArr[i];
                obj["p"] = self;
                obj["itemIndex"] = index;
                self.questionArr.push(obj);
                index+=1;
            }


            var actItems = exActivity[gc.dsConsts.ExActivity.activityItems];
            for( var i = 0;i < actItems.length;i++){
                var data = actItems[i];
                var type = gc.dsConsts.ActivityItem.items;
                var itemObj = data[type];
                for(var key in itemObj){
                    self.actItems.push({
                        itemId: key,
                        count: itemObj[key]
                    });
                }
            }

            self.refreshList("list_items");
            self.refreshList("list_questItems");
        }

        _data_list_items():any[]{
            var self = this;

            var  subActItems = self.actItems.slice(0,4);
            return subActItems;
        }


        _data_list_questItems():any[]{
            var self = this;
            return self.questionArr;
        }

        _tap_btn_detail() {
            var self = this;
            var txt:string = "完成调查后,将获得如下奖励";
            ActivityNewDetail.create().setData({actItems:self.actItems, extrItems:null, textData:txt}).show();

        }

        _tap_btn_help(){
            var self = this;
            g_base.BaseShowTip.create().setData({id:232}).show();
        }

        _tap_btn_sure() {
            var self = this;
            var exActivity = self.data.exActivity;
            var activity = exActivity[gc.dsConsts.ExActivity.activity];
            var activityId = activity[gc.dsConsts.ActivityEntity.id];
            var questIdArr = activity[gc.dsConsts.ActivityEntity.exValues];

            self.testData();

            if(gd.activityCtrl.getUserSurveyStatus(activityId ) == 1){
                mo.showMsg("你已经测试");
                return;
            }

            if(self.checkAskAllQuest(questIdArr) == false){
                mo.showMsg("请完成所有题目！");
                return;
            }


            var index = 0;
            gd.activityCtrl.userSurvey(activityId,index,self.questMap,function(data){
                mo.showMsg("奖励已经发至邮箱！");
                self.setAskState(true);
            },self);
        }

        _click_list_items(event:egret.gui.ListEvent){
            var data = event.item;
            g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(data["itemId"], null)}).show();
        }


        changOption(id,dataArr) {
            var self = this;
            var questData = null;
            for(var key in self.questMap){
                if(id == parseInt(key)){
                    questData = self.questMap[key];
                    break;
                }
            }

            if(questData == null) {
                questData = [];
                self.questMap[id] = questData;
            }

            questData.splice(0,questData.length);
            for(var i:number = 0;i < dataArr.length;i++){
                questData[i] = dataArr[i];
            }
        }

        checkAskAllQuest(questIdArr){
            var self = this;
            if( !questIdArr) {
                return false;
            }
            for(var i = 0;i < questIdArr.length;i++){
                var id :number = questIdArr[i];
                var data = self.questMap[id];
                if( !data||data.length == 0){
                    return false;
                }
            }
            return true;
        }

        testData() {
            var self = this;
            for(var key in self.questMap){
                var data = self.questMap[key];
                var str = "";
                for(var i = 0;i < data.length;i++){
                    str += data[i]+",";
                }
                console.log("key= %s,data = %s",key,str);
            }

        }

        getQuestSelect(id, index){
            var self = this;
            var quest = self.questMap[id];
            if( quest){
                for(var i = 0;i < quest.length;i++){
                    var data = quest[i];
                    if(data == index){
                        return true;
                    }
                }
            }
            return false;

        }

        setAskState(haveAsk){
            var self = this;
            self.img_achive.visible = haveAsk;
            self.list_questItems.visible = !haveAsk;
            self.btn_sure.visible = !haveAsk;
        }

    }
}