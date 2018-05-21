/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_base{
    export class BaseShowTip extends mo.gui.Dlg{

        label_tips:egret.gui.Label;
        ico_bg;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self.outsideClosable = true;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_help, self.data.id);
            var param1 = self.data.param1;
            var param2 = self.data.param2;
            var param3 = self.data.param3;

            if(param1!=undefined && param2!=undefined && param3!=undefined){
                self.label_tips.text = mo.STR.format(info[gc.c_help_helpText], param1, param2,param3);
            }else if(param1!=undefined && param2!=undefined){
                self.label_tips.text = mo.STR.format(info[gc.c_help_helpText], param1, param2);
            }else if(param1!=undefined){
                self.label_tips.text = mo.STR.format(info[gc.c_help_helpText], param1);
            }else{
                self.label_tips.text = info[gc.c_help_helpText];
            }

            process.nextTick(function(){
                process.nextTick(function() {
                    self.ico_bg.height = self.label_tips.y * 2 + self.label_tips.height;
                });
            });
        }

    }
}
