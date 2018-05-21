/**
 * Created by lihex on 2016/6/20.
 */
module g_role{
    export class RoleBuzhenItem extends mo.gui.ItemRenderer{
        ico;
        label_num;
        label_name;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var hec:gd.HeroEntityCtrl = self.data;
            self.ico.source = mo.STR.format("avatar_%s_%s_0", hec.job, hec.sex); // job gender type
            self.label_name.text = gc.c_prop.heroJob[hec.job];
            self.label_num.text = self.itemIndex + 1;
        }
    }
}