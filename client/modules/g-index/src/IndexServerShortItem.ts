/**
 * Created by admin on 16/1/8.
 */
module g_index{

    export class IndexServerShortItem extends mo.gui.ItemRenderer{

        label_content;
        ico_status;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        _onItemCountChanged(count, ctrl){
            var self = this;

        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var status = self.data[gc.dsConsts.ServerInfoEntity.status];
            var statusSources = ["ntc_weihu","ntc_lianghao","","ntc_huobao",""];

            self.label_content.text = self.data[gc.dsConsts.ServerInfoEntity.name]+"-"+self.data[gc.dsConsts.ServerInfoEntity.area];
            if(self.data[gc.dsConsts.ServerInfoEntity.isClose]){
                self.ico_status.source = statusSources[0];
            }else{
                self.ico_status.source = statusSources[status];
            }
        }
    }
}