/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/24.
 */
module g_activity{

    export class ActivityNewDetail extends mo.gui.Dlg {

        list_rewards;
        _Item_list_rewards;
        dataArr;
        label_red;
        actItems;

        _initProp() {
            var self = this;
            super._initProp();
            self._Item_list_rewards = ActivityNewCollectCharacterBaseItem;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.dataArr = null;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;

            if(!self.data)  return;
            self.actItems = self.data.actItems || [];
            //var extrItems = self.data.extrItems;
            //if( extrItems){
            //    self.extrItemsArr = extrItems;
            //
            //    self.group_extar.y = actItems.length <= 4 ? self.oldHeight -100 : self.oldHeight;
            //}
            //self.group_extar.visible = extrItems ? true :false;

            var textData:string = self.data.textData || "";
            if(textData.length > 0){
                self.label_red.text = textData;
            }

            self.refreshList("list_rewards");
        }

        _data_list_rewards():any[]{
            var self = this;
            return self.actItems;
        }


    }
}


