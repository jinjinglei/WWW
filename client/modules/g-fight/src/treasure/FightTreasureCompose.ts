/**
 * Created by admin on 16/4/23.
 */
module g_fight {
    export class FightTreasureCompose extends mo.gui.Dlg {

        list_items:any;
        _Item_list_items;
        actItems;
        label_desc;
        label_compose_hint;
        btn_compose;
        curIndex;

        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = FightTreasureComposeItem;
        }

        dataChanged() {
            super.dataChanged();
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self._reset();
            self._resetDesc();
        }

        _reset(){
            var self = this;
            var item = mo.getJSONWithFileNameAndID(gc.cfg_t_treasure,self.data['obj']['t'][gc.t_treasure_id]);
            var all = mo.getJSONWithFileName(gc.cfg_t_item);
            var rewards = item[gc.t_treasure_items];
            self.actItems = [];
            self.curIndex = 0;
            var lastCount = 0;
            for(var i =0; i<rewards.length;i++){
                var obj = rewards[i];
                var needCount = obj[0];
                if(self.data['unlock']>=needCount){
                    if(lastCount < needCount){
                        self.curIndex = i;
                        lastCount =  needCount;
                    }
                }
                self.actItems.push({o:obj,isNow:0,item:all[obj[1]],current:self.data['unlock']});
            }
            self.actItems[self.curIndex]['isNow'] = 1;
            self.refreshList("list_items");
        }

        _resetDesc(){
            var self = this;
            var all = mo.getJSONWithFileName(gc.cfg_t_item);
            var t = self.data['obj']['t'];
            var obj = all[t[gc.t_treasure_id]];
            var itemColor = uiHelper.getColorByQuality(obj[gc.t_item_color]);
            var _item = mo.getJSONWithFileNameAndID(gc.cfg_t_treasure,t[gc.t_treasure_id]);
            var cur =  self.actItems[self.curIndex]['o'];
            var itemGot = all[cur[1]];
            var content = mo.STR.format("您当前选择[ubb color=%s] %s [/ubb]进行合成[/br]同类碎片已解锁 %s 个[/br]还有 %s 个正在解锁中[/br]当前合成后可获得 [ubb color=%s]%s[/ubb](消耗%s碎片)[/br]",
                itemColor,obj[gc.t_item_name],self.data['unlock'],self.data['lock'],uiHelper.getColorByQuality(itemGot[gc.t_item_color]),itemGot[gc.t_item_name],cur[0]);
            self.label_desc.text = content;

            self.label_compose_hint.visible = self.data['isfinished']==1?false:true;
            self.btn_compose.visible = self.data['isfinished']==1?true:false;
        }

        _data_list_items():any[]{
            var self = this;
            return self.actItems;
        }

        _tap_btn_info(){
            g_base.BaseShowTip.create().setData({id:213}).show();
        }

        _tap_btn_compose(){
            var self = this;
            if(self.data['isfinished']){
                gd.pkOutCtrl.compose(self.data['obj']['t'][gc.t_treasure_id],function(data){
                    mo.showMsg("合成成功,请至邮箱查收物品!");
                    var par:any = self.data['parent'];
                    par._reset();
                    self.close();
                },self);
            }
        }

    }
}