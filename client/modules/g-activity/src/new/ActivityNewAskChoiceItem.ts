/**
 * Created by Joe on 16/5/4.
 */
/**
 * Created by admin on 16/2/26.
 */
module g_activity{
    export class ActivityNewAskChoiceItem extends mo.gui.ItemRenderer{
        ckb_choice;
        label_count;
        survey_type;

        _initProp(){
            super._initProp();
            var self = this;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.survey_type = 0;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;

            if(!self.data) return;
            var data = self.data;
            self.label_count.text = data["option"];
            self.survey_type = data["survey_type"];
            self.ckb_choice.selected = data["select"];
        }

        _chg_ckb_choice(){
            var self = this;
            var select:boolean = self.ckb_choice.selected;
            var data = self.data;
            if(!data) return;
            var p = data["p"];
            if(p){
                var index =  data["index"];
                p.changOption(index,select);
            }
        }

        changeSelect( isSelected){
            var self = this;
            self.ckb_choice.selected = isSelected;
        }
    }
}