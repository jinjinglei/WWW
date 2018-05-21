/**
 * Created by lihex on 2016/6/20.
 */
module g_role{
    export class RoleBuzhen extends mo.gui.Dlg{
        list_items:egret.gui.List;
        _Item_list_items;


        posArr;

        selectA;
        selectB;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = RoleBuzhenItem;
        }
        
        _childrenCreated(){
            var self = this;
            super._childrenCreated();
        }

        _data_list_items():any[]{
            var self = this, filter, sorter;
            var heroList = gd.heroCtrl.getFightList();
            if(!self.posArr){
                self.posArr = [].concat(heroList);
            }
            return self.posArr;
        }

        _click_list_items(event:egret.gui.ListEvent) {
            var self = this;
            var hec = event.item;
            console.log('hec.name = ', gc.c_prop.heroJob[hec.job]);
            if(!self.selectA){
                self.selectA = hec;
            }else{
                self.selectB = hec;
                self._swapPos(self.selectA, self.selectB);
                self.selectA = null;
                self.selectB = null;
            }
        }

        _swapPos(selectA, selectB){
            var self = this;
            var posA = self.posArr.indexOf(selectA);
            var posB = self.posArr.indexOf(selectB);
            self.posArr[posA] = selectB;
            self.posArr[posB] = selectA;
            self.refreshList("list_items");
        }

        _tap_btn_cancel(){
            var self = this;
            self.close();
        }

        _tap_btn_save(){
            var self = this;
            console.log("-->保存布阵");
            gd.heroCtrl.saveFightList(self.posArr, function(){
                self.close();
            },self);
        }

    }
}