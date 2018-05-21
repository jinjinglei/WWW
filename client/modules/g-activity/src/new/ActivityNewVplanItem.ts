/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/26.
 */
module g_activity{
    export class ActivityNewVplanItem extends mo.gui.ItemRenderer{
        ico_bg;
        label_desc;
        list_items;
        ico_hasGet;
        effect_get;
        btn_get;
        act_items;
        _Item_list_items;


        _initProp(){
            super._initProp();
            var self = this;
            self._Item_list_items = g_activity.ActivityNewCollectCharacterBaseItem;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            //self.list_items.verticalScrollPolicy = egret.gui.ScrollPolicy.OFF;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;

            if(!self.data) return;

            var data = self.data["i"];

            self.label_desc.text = self.getDescTxt(data);


            var id:number = self.data["activityId"];
            var itemIndex:number = self.data["itemIndex"];


        //* @returns {number} 1:已经领取，0：可领取，2:不可领取
            var status = gd.activityCtrl.getVPlanStatus(id,itemIndex);
            if(status == 0){
                self.ico_hasGet.visible = false;
                self.btn_get.visible = true;
                //uiHelper.playUIEffect(self.effect_get, true);

            }else{
                self.ico_hasGet.visible = true;
                self.btn_get.visible = false;
                //uiHelper.playUIEffect(self.effect_get, false);
            }

            self.act_items = [];
            var  rewardList = self.data["r"];

            var count:number = 0;
            var haveMedal:boolean = false;
            for(var i in rewardList){
                var obj = {};
                obj["itemId"] = parseInt(i);
                obj["count"] = parseInt(rewardList[i]);
                self.act_items.push(obj);
                count +=1;
                if(haveMedal == false &&self.getMedalValue(obj["itemId"]) > 0){
                    haveMedal = true;
                }
            }



            var width:number = count == 1 ? 74 :  count*74+ (count-1)*6;
            var maxWidth:number = 74*2+6;
            self.list_items.width = width > maxWidth ? maxWidth : width;
            //设置背景
            var panelType:number = haveMedal? 0 : self.getMedalValue(data[0]);
            var pathTxt:string = "bg_panel_"+ (panelType+1).toString()+".png";

            var stateUrl = "resource/ui2/ui_activity/"+pathTxt;
            RES.getResByUrl(stateUrl, function (texture:egret.Texture) {
                self.ico_bg.source = texture;
            }, self, RES.ResourceItem.TYPE_IMAGE);

            self.refreshList("list_items");
        }

        getMedalValue(id):number{
            var medalArray = [10500,10490];
            for(var i = 0; i < medalArray.length;i++){
                if(id == medalArray[i]){
                    return i+1;
                }
            }

            return 0;
        }

        getDescTxt(data):string{
            var self = this;
            var descTxt:string = "成为V会员%s,";
            var moneyStr :string = "单笔充值达到%s可领取";
            var type = data[0];
            var money :number = data[1];
            var medalType :number = self.getMedalValue( type);
            var medalName:string = medalType == 1 ? "守护者":"长老";

            descTxt = descTxt.replace("%s",medalName);
            moneyStr = moneyStr.replace("%s",money.toString());


            descTxt+= moneyStr;
           // descTxt= mo.STR.format("%s+%s", descTxt.replace("%s",medalName), moneyStr.replace("%d",money));

            return descTxt;
        }

        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            cell.tapShowDetail = true;
        }

        _data_list_items():any[]{
            var self = this;
            return self.act_items;
        }

        _tap_btn_get(){

            var self = this;
            gd.activityCtrl.vPlan(self.data["activityId"],self.data["itemIndex"],function(data){
                var parent:any = self.data["p"];
                parent.updateActivity();
            },self);
        }
    }
}