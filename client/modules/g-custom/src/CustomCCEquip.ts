/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_custom{
    export class CustomCCEquip extends mo.gui.Dlg{
        ico_item:g_comp.Ico_Item;
        grp_before:egret.gui.Group;
        grp_after:egret.gui.Group;
        grp_lvlNotEnough:egret.gui.Group;
        grp_lvlEnough:egret.gui.Group;
        label_cost;
        res_bar;
        label_needLvl;
        btn_chuanchen;
        grp_res;
        grp_resMy;
        img_title;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            mo.gui.helper.setSkinName(this, "CCEquip");
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.img_title.source = "tit_txt_g_dizicuangcheng";
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var bdc:gd.BagDataCtrl = self.data.bdc;
            self.ico_item.set('itemId', bdc.tempId);
            self._setBeforeEquipInfo(self.grp_before, bdc);
            self._setAfterEquipInfo(self.grp_after);
        }

        _setAfterEquipInfo(grp:egret.gui.Group){
            var self = this;
            var opt = gd.customCtrl.getInheritedEquipOpt(self.data.bdc.equipId);
            var nextEquipInfo = opt.nextEquipInfo;
            var tempId = nextEquipInfo.tempId;

            var itemTemp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, tempId);

            var name = nextEquipInfo.name;
            var level = itemTemp[gc.t_item_itemLvl];

            var label_name_lvl = <any>grp.getChildByName('label_name_lvl');
            var label_score = <any>grp.getChildByName('label_score');
            var label_props = <any>(<any>grp.getChildByName("grp_props")).getChildByName('label_props');
            label_name_lvl.text = mo.STR.format(
                "[ubb color=%s]%s [/ubb][ubb color=#E8CA47]%s级[/ubb]"
                ,uiHelper.getColorByQuality(itemTemp[gc.t_item_color])
                , name, level);
            //属性
            var str = "";
            var basePropArr = nextEquipInfo.basePropArr;
            var addPropObj = utils.kvArr2KvObj(nextEquipInfo.extraPropArr);
            var strTemp1 = "[ubb]%s: %s[/ubb][ubb] +%s[/ubb][/br]";
            var strTemp2 = "[ubb color=0x2EAAF7]%s: %s[/ubb][ubb color=0x2EAAF7] +%s[/ubb][/br]";
            var propData;
            for(var i = 0, li = basePropArr.length; i < li; i++){
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV, addPropObj[key] || 0);
            }
            label_props.text = str;

            label_score.text = nextEquipInfo.scrore;

            self.grp_lvlEnough.visible = opt.nextEquipNeedLvlEnough;
            self.btn_chuanchen.visible = opt.nextEquipNeedLvlEnough;
            self.grp_lvlNotEnough.visible = !opt.nextEquipNeedLvlEnough;
            if(!opt.nextEquipNeedLvlEnough){
                self.label_needLvl.text = opt.nextEquipNeedLvl;
            }
            uiHelper.setResGrp(self.grp_res, opt.costItemId, opt.costCount);
            uiHelper.setResGrp(self.grp_resMy, opt.costItemId, gd.userCtrl.getItemNum(opt.costItemId));
        }

        _setBeforeEquipInfo(grp:egret.gui.Group, bdc:gd.BagDataCtrl){
            var self = this;
            var label_name_lvl = <any>grp.getChildByName('label_name_lvl');
            var label_score = <any>grp.getChildByName('label_score');
            var label_props = <any>(<any>grp.getChildByName("grp_props")).getChildByName('label_props');
            label_name_lvl.text = mo.STR.format("[ubb color=%s]%s [/ubb][ubb color=#E8CA47]%s级[/ubb]", uiHelper.getColorByQuality(bdc.quality), bdc.name, bdc.itemLvl);
            label_score.text = bdc.score;
            //属性
            var str = "";
            var basePropArr = bdc.proptys;
            var addPropObj = gd.equipCtrl.getEquipExtraObj(bdc.equipId);
            var strTemp1 = "[ubb]%s: %s[/ubb][ubb] +%s[/ubb][/br]";
            var strTemp2 = "[ubb color=0x2EAAF7]%s: %s[/ubb][ubb color=0x2EAAF7] +%s[/ubb][/br]";
            var propData;
            for(var i = 0, li = basePropArr.length; i < li; i++){
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV, addPropObj[key] || 0);
            }
            label_props.text = str;
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id: 25}).show();
        }

        _tap_btn_chuanchen(){
            var self = this;
            var opt = gd.customCtrl.getInheritedEquipOpt(self.data.bdc.equipId);
            var nextEquipInfo = opt.nextEquipInfo;
            var itemId = opt.costItemId;
            if(!opt.isItemEnough){
                if(g_base.GainWay.canBuyFromShop(itemId)){
                    g_base.GainWayShop.create().setData({itemId:itemId, count:opt.costCount - gd.userCtrl.getItemNum(opt.costItemId)}).show().onClose(function(){
                        self.dataChanged();
                    });
                }else{
                    g_base.GainWay.create().setData({itemId:itemId}).show();
                }
            }else{
                gd.customCtrl.upCustomization(opt, function(){
                    self.setData({bdc:gd.BagDataCtrl.create(nextEquipInfo.tempId, opt.equipId)});
                }, self);
            }
        }
    }
}