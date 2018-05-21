/**
 * Created by Administrator on 2016/1/9.
 */

module g_medal{

    export class Medal extends mo.gui.Dlg{
        moduleParam:IModuleParam.Medal;

        tab_medal:egret.gui.TabBar;
        label_open:mo.gui.Label;
        grp_combat:egret.gui.Group;
        grp_print:egret.gui.Group;
        grp_medal:egret.gui.Group;
        grp_achivement:egret.gui.Group;
        ico_medalItem:g_comp.Ico_Medal;
        img_onNoPrint:egret.gui.UIAsset;
        img_printBg:egret.gui.UIAsset;
        label_noMedal:egret.gui.UIAsset;
        label_noPrints:egret.gui.UIAsset;
        img_printRed:egret.gui.UIAsset;

        tabCompArr:any;
        tabIndex:number;

        _initProp(){
            super._initProp();
            var self = this;
            self._layerOpt.shownWithAction = false;

            self.tabIndex = 0;
            self.tabCompArr = null;
            self.tabCompArr = [];

            self._Item_list_print = PrintItem;
            self._Item_list_medal = MedalCell;
            self._Item_list_achivement = MedalAchiItem;
            self.warPrints = [];

            self.registerClassByKey(gd.userCtrl, gc.dsConsts.UserEntity.medalTitle.toString(), self._refreshUI);
            self.registerClassByKey(gd.MedalCtrl, gd.MedalCtrl.ON_STR_SUCC, self._refreshUI);
            self.registerClassByKey(gd.MedalCtrl, gd.MedalCtrl.ON_ACTVATE_SUCC, self._refreshUI);
            self.registerClassByKey(gd.userCtrl, gc.dsConsts.UserEntity.bag.toString(), self._refreshMedalGrp);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

            self.grp_combat.visible = false;
            self.grp_print.visible = false;
            self.grp_medal.visible = false;
            self.img_printRed.visible = false;

            self.tabCompArr = [self.grp_combat, self.grp_print, self.grp_medal, self.grp_achivement];

            self.tab_medal.selectedIndex = 0;
            process.nextTick(function(){
                self._tap_tab_medal();
            });
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:44}).show();
        }

        _tap_img_printBg(){
            var self = this;
            var medalCtrl = gd.medalCtrl;
            var medalId = medalCtrl.getMedalTitle();
            var hasMedalId = !!medalId;
            if(!hasMedalId && self.warPrints.length == 0) return mo.showMsg(gc.id_c_msgCode.noMedalActivated);
            MedalChange.create().show();
        }

        _tap_tab_medal(){
            var self = this;
            var selectedIndex = self.tabIndex = self.tab_medal.selectedIndex;
            var tabCompArr = self.tabCompArr;
            var curComp = tabCompArr[selectedIndex];
            if(!curComp) return;

            for(var i = 0,l_i = tabCompArr.length;i < l_i;i++){
                var locComp = tabCompArr[i];
                locComp.visible = false;
            }

            self._refreshUI();
            curComp.visible = true;
        }

        _refreshUI(){
            var self = this;
            self._refreshTabComp();
            self.img_printRed.visible = gd.medalCtrl.isMedalUp().length > 0 || gd.medalCtrl.getToBeActivatedList().length > 0;
        }

        _refreshTabComp(){
            var self = this,selectedIndex = self.tabIndex;

            if(selectedIndex == 0){
                self._refreshCombatGrp();
            }else if(selectedIndex == 1){
                self._refreshPrintGrp();
            }else if(selectedIndex == 2){
                self._refreshMedalGrp();
            }else if(selectedIndex == 3){
                self._refreshAchivementGrp();
            }
        }

        /****************************************************************
        //战力
         ****************************************************************/

        grp_props:egret.gui.Group;


        _refreshCombatGrp(){
            var self = this;
            var medalCtrl = gd.medalCtrl;
            var medalId = medalCtrl.getMedalTitle();
            self.warPrints = medalCtrl.getWarPrintedList();
            self.img_onNoPrint.source = self.warPrints.length? "ico_kepeidai" : "ico_wuzhanyind";
            var hasMedalId = !!medalId;
            self.ico_medalItem.visible = hasMedalId;
            self.img_onNoPrint.visible = !hasMedalId;
            setProps(self.grp_props, medalCtrl.getTotalPrintProperty(), 4);
            if(medalId){
                self.ico_medalItem.setData({itemId:medalId});
            }
        }


        /****************************************************************
         //战印
         ****************************************************************/

        list_print:egret.gui.List;
        _Item_list_print;
        warPrints:Array<any>;

        _refreshPrintGrp(){
            var self = this;
            var medalCtrl:gd.MedalCtrl = gd.medalCtrl;
            var data = self.warPrints = medalCtrl.getAllWarPrintList();
            self.warPrints.sort(function(data1, data2){
                var itemId1 = data1[0];
                var itemId2 = data2[0];
                var itemInfo1 = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId1);
                var itemInfo2 = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId2);
                var strId1 = gd.medalCtrl.transWarPrintData(itemId1)[1];
                var medalLvInfos = mo.getJSONWithFileName(gc.cfg_t_medalLvl);
                var medalLvInfo1 = medalLvInfos[itemId1*100+strId1+1];
                var strId2 = gd.medalCtrl.transWarPrintData(itemId2)[1];
                var medalLvInfo2 = medalLvInfos[itemId2*100+strId2+1];
                var activeLvEnough1 = gd.userCtrl.getLvl()>=itemInfo1[gc.t_item_level];
                var activeLvEnough2 = gd.userCtrl.getLvl()>=itemInfo2[gc.t_item_level];
                var canActive1 = (!gd.medalCtrl.isActiveMedal(itemId1) && activeLvEnough1)?1:0;
                var canActive2 = (!gd.medalCtrl.isActiveMedal(itemId2) && activeLvEnough2)?1:0;
                var strItemEnough1 = gd.medalCtrl.isMedalItemEnough(itemId1);
                var strItemEnough2 = gd.medalCtrl.isMedalItemEnough(itemId2);
                var strLvEnough1 = !medalLvInfo1 || gd.userCtrl.getLvl()>=medalLvInfo1[gc.t_medalLvl_needLvl];
                var strLvEnough2 = !medalLvInfo2 || gd.userCtrl.getLvl()>=medalLvInfo2[gc.t_medalLvl_needLvl];
                var canStr1 = (strItemEnough1 && strLvEnough1)?1:0;
                var canStr2 = (strItemEnough2 && strLvEnough2)?1:0;

                if(canActive1!=canActive2){
                    return canActive1?-1:1;
                }
                if(canStr1!=canStr2){
                    return canStr1?-1:1;
                }

                if(strItemEnough1 != strItemEnough2){
                    return strItemEnough1?1:-1;
                }

                if(!strLvEnough1 && !strLvEnough2){
                    return medalLvInfo1[gc.t_medalLvl_needLvl]-medalLvInfo2[gc.t_medalLvl_needLvl];
                }

                if(activeLvEnough1!=activeLvEnough2){
                    return itemInfo1[gc.t_item_level]-itemInfo2[gc.t_item_level];
                }
                var score1 = gd.medalCtrl.transWarPrintData(itemId1)[2];
                var score2 = gd.medalCtrl.transWarPrintData(itemId2)[2];
                if(score1 != score2){
                    return score2-score1;
                }
                return itemId1-itemId2;
            });
            self.refreshList("list_print");
            self.label_noPrints.visible = self.warPrints.length == 0;
        }

        _data_list_print():any[] {
            var self = this, filter, sorter;
            return self.warPrints;
        }

        /****************************************************************
         //勋章
         ****************************************************************/

        list_medal:egret.gui.List;
        _Item_list_medal;

        _refreshMedalGrp(){
            var self = this;
            self.refreshList("list_medal");
        }

        _data_list_medal():any[] {
            var self = this, filter, sorter;
            var BDC = gd.BagDataCtrl;
            var list = BDC.getList(BDC.getFilterOpt(5), BDC.getSortOpt(5));
            self.label_noMedal.visible = list.length == 0;
            return list;
        }

        _click_list_medal(event:egret.gui.ListEvent) {
            var self = this;
            var bdc:gd.BagDataCtrl = event.item;
            g_base.BaseItemDetail.create().setData(
                {bdc: bdc}
            ).show();
        }

        /****************************************************************
         //成就勋章
         ****************************************************************/

        list_achivement:egret.gui.List;
        _Item_list_achivement;

        _refreshAchivementGrp(){
            var self = this;
        }

        _data_list_achivement():any[] {
            var self = this;
            return gd.medalCtrl.getAchievmentMedal();
        }
    }

    /**
     * 设置属性
     * |属性1         |属性 splitNum+1
     * |属性2         |属性 splitNum+2
     * |属性splitNum  |属性 splitNum+3
     * @param grp
     * @param props 属性数组:[[属性类型,属性值],[属性类型,属性值],...]
     * @param splitNum 一列最多显示几个属性
     */
    export function setProps(grp:egret.gui.Group, props:Array<any>, splitNum:number){
        var needPart = Math.ceil(props.length/splitNum);
        for(var i = 0, li = needPart; i < li; i++){
            var label = <mo.gui.Label>grp.getChildByName('prop_part' + i);
            if(!label) break;
            var str = '';
            for(var j = 0, lj = splitNum; j < lj; j++){
                var idx = j + (i * splitNum);
                var prop = props[idx];
                if(!prop) break;
                str += mo.STR.format("[ubb color=#ebcd50]%s: [/ubb][ubb color=#4aca00] +%s[/ubb]", gc.c_prop.equipProp[prop[0]], prop[1]);
                if((j+1) < lj) str += "[/br]";
            }
            label.text = str;
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = Medal;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.Medal, cb){
            cb();
        });
    });
}
