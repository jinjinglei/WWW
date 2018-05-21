/**
 * Created by Administrator on 2016/1/5.
 */
module g_heart {
    export class HeartSelectCell extends mo.gui.ItemRenderer {

        ico_heart;
        label_skillDesc;
        label_desc;
        ico_name;

        _initProp() {
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var id = self.data.id;
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStunt, id);

            self.ico_heart.source = resHelper.getHeartIconPath(id);
            self.ico_name.source = resHelper.getHeartNamePath(id);
            self.label_desc.text = info[gc.c_heartStunt_desc];
            self.label_skillDesc.text = info[gc.c_heartStunt_skillDesc];
        }

        _tap_btn_learn(){
            var self = this;
            var id = self.data.id;
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStunt, id);
            mo.showMsg(gc.id_c_msgCode.ifLearnFormula, info[gc.c_heartStunt_name], function(){
                gd.heartStuntCtrl.choMenCulMethods(self.delegate.index, id, function(){
                    self.delegate.close();
                }, self);
            });
        }
    }
}