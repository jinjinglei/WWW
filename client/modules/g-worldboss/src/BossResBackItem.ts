/**
 * Created by lihex on 3/7/16.
 */
module g_worldboss {

    export class BossResBackItem extends mo.gui.ItemRenderer {

        grp_items;
        grp_res;
        label_name;
        btn_get;
        ico_hasGet;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var bossId = self.data;

            //名字和图像
            var monsterInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, bossId);
            self.label_name.text =  "("+monsterInfo[gc.t_monster_level]+"级) " + monsterInfo[gc.t_monster_name];

            var opt = gd.bossCtrl.getBackResOpt(bossId, 500);
            uiHelper.setItemsGrp(self.grp_items, utils.kvArrItems2ObjArr(opt.items));

            self.ico_hasGet.visible = false;
            self.btn_get.visible = false;

            var hasGet = false; //已领取
            self.ico_hasGet.visible = hasGet;
            self.btn_get.visible = !hasGet;
            self.grp_res.visible = !hasGet;
            //花费元宝
            uiHelper.setResGrp(self.grp_res, gc.c_prop.spItemIdKey.diamond, opt.costDimond);
        }
    }
}