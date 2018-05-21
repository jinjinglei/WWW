/**
 * Created by Administrator on 2015/11/26.
 */
module g_fight {
    export class EnemyList extends g_base.CloseInfoDlg {
        ico_none;
        list_enemies;
        _Item_list_enemies;

        _childrenCreated(){
            super._childrenCreated();
            this.outsideClosable = true;
        }

        _initProp(){
            var self = this;
            super._initProp();
            self._helpDataId = 15;
            self._Item_list_enemies = EnemyItem;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;

            self.ico_none.visible = !self.data.list||self.data.list.length==0;
        }

        _data_list_enemies():any[]{
            var self = this;
            return self.data.list;
        }


    }
}