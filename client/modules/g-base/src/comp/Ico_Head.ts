/**
 * Created by Administrator on 2015/11/20.
 */
module g_comp {
    export class Ico_Head extends mo.gui.Comp{
        label_vipLv;
        ico_role;
        grp_vip;

        dataChanged(){
            super.dataChanged();
            var self = this;
            var icoId = self.data.icoId;
            var vip = self.data.vip;

            self.ico_role.source = uiHelper.getHeroIcon(icoId);
            if(!vip){
                self.grp_vip.visible = false;
            }else{
                self.grp_vip.visible = true;
                self.label_vipLv.text = vip.toString();
            }
        }
    }
}