/**
 * Created by Administrator on 2016/5/17.
 */
module g_gift {
    export class GiftGongMingCell extends mo.gui.ItemRenderer {
        label_name;
        label_effect;
        label_desc;
        ico_gift0;
        ico_gift1;
        ico_gift2;
        label_noAct0;
        label_noAct1;
        label_noAct2;
        ico_gongMingBg2;

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
            var giftInfo = self.data.giftInfo;
            var hec = self.data.hec;
            var gongMingInfo = self.data.gongMingInfo;
            var flags = self.data.flags;

            var talismans = gd.heroTalismanCtrl.getHaveTrump(hec.get(gc.dsConsts.HeroEntity.id));
            var resonance = gongMingInfo[gc.t_talismanRes_resonance];
            self.ico_gift0.setData({itemId:resonance[0]});
            self.ico_gift1.setData({itemId:resonance[1]});
            var isAllAct = true;
            if(flags && flags[0]){
                self.ico_gift0.ico_gift.visible = true;
                self.label_noAct0.visible = false;
            }else{
                self.ico_gift0.ico_gift.visible = false;
                self.label_noAct0.visible = true;
                isAllAct = false;
            }
            if(flags && flags[1]){
                self.ico_gift1.ico_gift.visible = true;
                self.label_noAct1.visible = false;
            }else{
                self.ico_gift1.ico_gift.visible = false;
                self.label_noAct1.visible = true;
                isAllAct = false;
            }
            if(resonance[2]){
                self.ico_gift2.setData({itemId:resonance[2]});
                self.ico_gift2.visible = true;
                self.ico_gongMingBg2.visible = true;
                if(flags && flags[2]){
                    self.ico_gift2.ico_gift.visible = true;
                    self.label_noAct2.visible = false;
                }else{
                    self.ico_gift2.ico_gift.visible = false;
                    self.label_noAct2.visible = true;
                    isAllAct = false;
                }
            }else{
                self.ico_gift2.visible = false;
                self.ico_gongMingBg2.visible = false;
                self.label_noAct2.visible = false;
            }

            var type = gongMingInfo[gc.t_talismanRes_type];
            var props = gongMingInfo[gc.t_talismanRes_extraPro];
            var str = "";
            if(type == 1){
                for(var i=0; i<props.length; ++i){
                    str += gc.c_prop.heroProp[props[i][0]];
                    str += "+"+props[i][1];
                    str += " ";
                }
                str = str.substr(0, str.length-1);
            }else{
                var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanSkill, props[0][0]);
                str = skillInfo[gc.t_talismanSkill_name];
            }
            if(!isAllAct){
                str = "[ubb color=#ff0000]"+str+"(未激活)[/ubb]";
            }else{
                str = "[ubb color=#00ff00]"+str+"[/ubb]";
            }
            self.label_effect.text = str;

            self.label_name.text = gongMingInfo[gc.t_talismanRes_name];
            self.label_desc.text = gongMingInfo[gc.t_talismanRes_desc];
        }
    }
}