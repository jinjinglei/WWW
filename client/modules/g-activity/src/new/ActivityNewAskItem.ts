/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/26.
 */
module g_activity{
    export class ActivityNewAskItem extends mo.gui.ItemRenderer{
        list_items;
        _Item_list_items;

        label_title;
        survey_type;
        group_content;

        optionArr;
        dataArr;

        //optionCollection: egret.gui.ArrayCollection;

        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_items = g_activity.ActivityNewAskChoiceItem;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.survey_type = 0;
            self.optionArr = null;
            self.dataArr = null;

            //self.optionCollection = new egret.gui.ArrayCollection();
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            if(!self.data) return;

            self.id = self.data["id"];
            var parent = self.data["p"];

            var askData = mo.getJSONWithFileNameAndID(gc.cfg_c_userSurvey, self.id);
            self.label_title.text = askData[gc.c_userSurvey_question];
            var optionContent = askData[gc.c_userSurvey_optionContent];
            self.survey_type = askData[gc.c_userSurvey_type];

            //self.survey_type = 2;

            self.dataArr = [];
            self.optionArr= [];
            for(var i = 0;i < optionContent.length;i++ ){
                var data = {};
                data["p"] = self;
                data["option"] = optionContent[i];
                data["survey_type"] = self.survey_type;
                data["select"] = parent.getQuestSelect(self.id, i);
                if(data["select"]){
                    self.dataArr.push(i);
                }
                data["index"] = i;
                self.optionArr.push( data);
            }

            //self.optionCollection.source = self.optionArr;
            //self.list_items.dataProvider = self.optionCollection;
            //self.list_items.dataProvider.addEventListener(egret.gui.CollectionEvent.COLLECTION_CHANGE,self.onCollectionChange,self);

            self.refreshList("list_items");

            self.list_items.width = self.group_content.width;
        }

        _data_list_items():any[]{
            var self = this;
            return self.optionArr;
        }

        //collectionChangeHandler(evt:egret.gui.CollectionEvent):void {
        //    egret.log("数据已改变:"+evt.kind+","+evt.target.length);
        //}
        changOption(index,select){

            var self = this;
            var needChange:boolean = false;
            if( self.survey_type  == 1) {//单选
                if( select){
                    self.dataArr[0] = index;
                    self.changeOtherSelect(index);
                }
                else{
                    self.dataArr.splice(0,1);
                }
            }
            else if( self.survey_type  == 2) {
                if( select){
                    self.dataArr.push(index);
                }
                else{
                    var id  = self.getIndexInArr( index);
                    if(id >-1){
                        self.dataArr.splice(id,1);
                    }
                }
            }
            else{//复合选项
                var optionLen = self.optionArr.length;
                //最后一个选项
                if( index == optionLen -1){
                    //单选
                    if( select) {
                        var len = self.dataArr.length;
                        if( len > 0){
                            self.changeOtherSelect(optionLen-1 );
                            self.dataArr.splice(0,len);
                        }
                        self.dataArr.push( index);
                    }
                    else{
                        self.dataArr.splice(0,1);
                    }
                }
                else{//多选
                    if( select){
                        //最后一个是否选中
                        var lastIndex = self.getIndexInArr( optionLen -1);
                        if( lastIndex > -1){
                            var render = self.list_items.dataGroup.getElementAt(optionLen -1);
                            if(render){
                                render.changeSelect( false);
                            }
                            self.dataArr.splice(lastIndex,1);
                        }
                        self.dataArr.push(index);
                    }
                    else{
                        var id  = self.getIndexInArr( index);
                        if(id >-1){
                            self.dataArr.splice(id,1);
                        }
                    }
                }
            }

            var p = self.data["p"];
            if(p){
                p.changOption(self.id,self.dataArr)
            }
        }


        getIndexInArr(id){
            var self = this;
            for(var i = 0;i < self.dataArr.length; i++){
                var data = self.dataArr[i];
                if(data == id){
                    return i;
                }
            }
            return -1

        }

        changeOtherSelect(index){
            var self = this;
            for (var i = 0; i < self.optionArr.length; i++) {
                if(i!=index){
                    var render = self.list_items.dataGroup.getElementAt(i);
                    if(render){
                        render.changeSelect( false);
                    }
                }
            }
        }
    }
}