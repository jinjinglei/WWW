/**
 * Created by Administrator on 2016/1/9.
 */

module g_tower{

    export class Tower extends mo.gui.Dlg{

        tm0:g_comp.TowerMonster;
        tm1:g_comp.TowerMonster;
        tm2:g_comp.TowerMonster;
        grp_passAward:egret.gui.Group;
        grp_preview:egret.gui.Group;
        btn_enter:egret.gui.Button;
        btn_getAward:egret.gui.Button;
        label_num;
        label_treasureNum;
        label_spAwardLayerNum;
        img_preview;
        curTowerCopyId;
        btn_treasure:egret.gui.UIAsset;

        _initProp(){
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

            self._refreshMonster();
            self.refreshUI();
        }

        refreshUI(){
            var self = this;
            var curTowerCopyId = self.curTowerCopyId = gd.copyCtrl.getFocusTowerCopyId();
            var t_paTa = mo.getJSONWithFileNameAndID(gc.cfg_t_paTaTreasury, curTowerCopyId);
            var passAward = t_paTa[gc.t_paTaTreasury_award];
            var previewCopyId = gd.copyCtrl.findSpAward(curTowerCopyId);
            uiHelper.setItemsGrp(self.grp_passAward, utils.kvArrItems2ObjArr(passAward));
            self.label_num.text = gd.copyCtrl.getTowerIndex(curTowerCopyId);
            self.grp_preview.visible = previewCopyId != null; //当前关不显示奖励预览
            if(self.grp_preview.visible) {
                self.label_spAwardLayerNum.text = gd.copyCtrl.getTowerIndex(previewCopyId);
            }

            var awardArr = gd.copyCtrl.getIsAwardArr(curTowerCopyId);
            self.btn_getAward.visible = awardArr[0] && !awardArr[1];
            self.btn_enter.visible = !awardArr[0];

            self.label_treasureNum.text = gd.copyCtrl.isFirstTowerCopyId()? "通关第一层后开启妖塔宝库":
            mo.STR.format("(第%s层宝库)", gd.copyCtrl.getTowerIndex(gd.copyCtrl.getTowerBaokuNum()));
    }

        _refreshMonster(){
            var self = this;
            var copyIds = gd.copyCtrl.getTowerMonList();
            for(var i = 0, li = copyIds.length; i <li; ++i){
                var copyId = copyIds[i];
                var tm:g_comp.TowerMonster = self['tm' + i];
                tm.setData({copyId: copyId});
                tm.dataChanged();
            }
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id: 104}).show();
        }

        _tap_btn_rank(){
            mo.moduleMgr.runModule(g_consts.moduleId.rank, {rankType: gc.c_prop.rankTypeKey.paTaRank});
        }

        _tap_btn_enter(){
            var self = this;
            gd.fightCtrl.enterCopy(self.curTowerCopyId);
        }

        _tap_btn_getAward(){
            var self = this;
            gd.copyCtrl.paTaAward(self.curTowerCopyId, function () {
                self.refreshUI();
                self._refreshMonster();
            }, self);
        }

        _tap_btn_treasure(){
            var self = this;
            if(gd.copyCtrl.isFirstTowerCopyId()) return mo.showMsg(gc.id_c_msgCode.noLevelDown);
            mo.moduleMgr.runModule(g_consts.moduleId.towerTreasury);
        }

        _tap_img_preview(){
            var self  = this;
            var curTowerCopyId = self.curTowerCopyId;
            var previewCopyId = gd.copyCtrl.findSpAward(curTowerCopyId);
            if(previewCopyId){
                TowerPreview.create().setData({previewCopyId}).show();
            }
        }
    }


    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = Tower;
        moduleCfgItem.sysId = gc.id_c_open.paTa;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.IModuleParam, cb){
            gd.copyCtrl.getPaTaInfo(function () {
                cb();
            }, this);
        });

    });
}
