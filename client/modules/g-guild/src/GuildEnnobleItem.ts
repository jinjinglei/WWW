/**
 * Created by Administrator on 2015/12/17.
 */
module g_guild{
    export class GuildEnnobleItem extends mo.gui.ItemRenderer{
        label_ennoble;
        label_addScale;
        label_num;
        label_need1;
        label_need2;
        grp_num;
        grp_addScale;

        dataChanged(){
            super.dataChanged();
            var self = this;
            //【爵位id,已有数量，总数，要求会员等级,加成,开启公会等级】
            var memberData = self.data.memberData;
            var data = self.data.ennobleData;
            if(!data)return;

            var ennoble = data[0];
            var numC = data[1];
            var numT = data[2];
            var needLv1 = data[3];
            var addScale = data[4];
            var needLv2 = data[5];
            var mLv = gd.guildCtrl.getRankFileLvl(memberData[gc.dsConsts.GuildMember.guildAct]);

            self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];
            if(numT==999){
                self.label_num.text = "无限";
            }else{
                self.label_num.text = mo.STR.format("%s/%s", numC, numT);
            }

            if(mLv>=needLv1){
                self.label_need1.textColor = 0xffffff;
            }else{
                self.label_need1.textColor = 0xff0000;
            }
            self.label_need1.text = needLv1+"级会员";
            if(needLv2){
                self.label_addScale.text = mo.STR.format("%s%", Math.round(addScale/100));
                self.label_need2.text = mo.STR.format("行会%s级开启",needLv2);
            }
            self.enabled = !needLv2;
            self.grp_addScale.visible = needLv2;
            self.grp_num.visible = !self.grp_addScale.visible;
            self.label_need2.visible = needLv2;
        }
    }
}