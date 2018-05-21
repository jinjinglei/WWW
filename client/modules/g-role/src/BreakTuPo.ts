/**
 * Created by Administrator on 2015/9/30.
 */
module g_role{
    export class BreakTuPo extends mo.gui.Dlg{
        ico_item;
        label_name;
        label_props;
        ico_item2;
        label_name2;
        label_needLv;
        grp_needLv;
        btn_tupo;

        onEnter(){
            super.onEnter();
            var self = this;
            var itemId = self.data.aimItemId;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            var breakInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_itemBreak, itemId);
            var compoInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_compound, itemId);
            var reqItemId = compoInfo[gc.c_compound_reqItems1];
            var reqCount = compoInfo[gc.c_compound_reqCount1];
            var reqItemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, reqItemId);

            self.ico_item.setData({itemId:itemId, count:0});
            self.ico_item.label_text.visible = false;
            self.label_name.text = itemInfo[gc.t_item_name];
            self.label_props.text = breakInfo[gc.t_itemBreak_desc];

            self.ico_item2.setData({itemId:reqItemId, count:reqCount, pileCount:gd.heroCtrl.getRealmCount(reqItemId)});
            self.label_name2.text = reqItemInfo[gc.t_item_name];

            if(gd.userCtrl.get(gc.dsConsts.UserEntity.lvl)>=compoInfo[gc.c_compound_needLvl]){
                self.grp_needLv.visible = false;
                self.btn_tupo.visible = true;
            }else{
                self.label_needLv.text = "Lv"+compoInfo[gc.c_compound_needLvl];
                self.grp_needLv.visible = true;
                self.btn_tupo.visible = false;
            }
        }

        _tap_btn_tupo(){
            var self = this;
            var hero = self.data.hero;
            var id = hero.get(gc.dsConsts.HeroEntity.id);
            var breakId = self.data.itemId;

            var breId = parseInt(breakId);
            var c_compound = mo.getJSONWithFileName(gc.cfg_c_compound);
            var t_itemBreak = mo.getJSONWithFileName(gc.cfg_t_itemBreak);
            var equipData = gd.heroCtrl.getEquipData(id);
            var bag = gd.userCtrl.get(gc.dsConsts.UserEntity.bag);
            var index = t_itemBreak[breId][gc.t_itemBreak_position];
            if(!equipData[index] || equipData[index] != breId)  return mo.showMsg("还未拥有用于突破的特戒");
            if(!c_compound[breId+1]) return mo.showMsg("特戒已经突破到最高");

            var aimItemId = self.data.aimItemId;
            var reqItems1 = c_compound[aimItemId][gc.c_compound_reqItems1];
            var reqCount1 = c_compound[aimItemId][gc.c_compound_reqCount1];
            var count = bag[reqItems1]||0;
            if(count < reqCount1){
                g_base.ItemMerge.create().setData({itemId:reqItems1}).show();
            }else{
                gd.equipCtrl.ringBreak(id, breakId,function(){
                    self.data.delegate.close();
                    self.close();
                },self);
            }
        }

        _tap_ico_item2(){
            var self = this;
            var itemId = self.data.aimItemId;
            var compoInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_compound, itemId);
            var reqItemId = compoInfo[gc.c_compound_reqItems1];
            g_base.ItemMerge.create().setData({itemId:reqItemId}).show();
        }
    }
}