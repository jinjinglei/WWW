/**
 * Created by Administrator on 2016/3/18.
 */
module g_base {
    export class ZhenQiDetail extends mo.gui.Dlg {
        label_zhenQiTotal;
        label_zhenQiAdd;
        label_desc;

        _initProp() {
            var self = this;
            super._initProp();
            self.outsideClosable = true;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.dataChanged();
        }

        dataChanged() {
            super.dataChanged();
            var self = this;

            var infos = gd.demonLotusCtrl.calGenuineQi();
            var helpInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_help, 57);
            var cfg_c_genuineQi = mo.getJSONWithFileName(gc.cfg_c_genuineQi);
            var userData = gd.userCtrl.getData();
            var produceFix = infos[2];
            self.label_zhenQiTotal.text = infos[0] + "/" + infos[1];
            self.label_zhenQiAdd.text = (produceFix * 60 >> 0) + "/分钟";
            self.label_desc.text = helpInfo[gc.c_help_helpText];
        }
    }
}