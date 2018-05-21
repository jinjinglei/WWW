/**
 * Created by Administrator on 2015/9/30.
 */
module g_role{
    export class BreakDetail extends mo.gui.Dlg{
        ico_item;
        label_name;
        label_props;
        label_needLv;
        grp_needLv;
        btn_tupo;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
        }

        _childrenCreated(){
            var self = this;
            super._childrenCreated();
        }

        onEnter(){
            super.onEnter();
            var self = this;
            self.btn_tupo.visible = self.data.hero.isSelf;
            var itemId = self.data.itemId;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            var breakInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_itemBreak, itemId);

            self.ico_item.setData({itemId:itemId, count:0});
            self.ico_item.label_text.visible = false;
            self.label_name.text = itemInfo[gc.t_item_name];
            //self.label_props.text = gd.heroCtrl.getPropsStr(breakInfo[gc.t_itemBreak_props]);
            self.label_props.text = breakInfo[gc.t_itemBreak_desc];

            var aimItem = parseInt(itemId)+1;
            var itemInfos = mo.getJSONWithFileName(gc.cfg_t_item);
            if(itemInfos[aimItem]!=null){
                var compoInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_compound, aimItem);
                self.label_needLv.text = "Lv"+compoInfo[gc.c_compound_needLvl];
                self.grp_needLv.visible = true;
            }else{
                self.grp_needLv.visible = false;
            }
        }

        _tap_btn_tupo(){
            var self = this;
            var aimItem = parseInt(self.data.itemId)+1;
            var itemInfos = mo.getJSONWithFileName(gc.cfg_t_item);

            if(itemInfos[aimItem]!=null){
                BreakTuPo.create().setData({itemId:self.data.itemId, aimItemId:aimItem, hero:self.data.hero, delegate:self}).show();
            }else{
                mo.showMsg("特戒已经突破到最高");
            }
        }
    }
}