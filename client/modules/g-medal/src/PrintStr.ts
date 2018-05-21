/**
 * Created by lihex on 2/25/16.
 */
module g_medal {
    import BagDataCtrl = gd.BagDataCtrl;
    export class PrintStr extends mo.gui.Dlg {
        ico_item:g_comp.Ico_Item;
        ico_item0:g_comp.Ico_Item;
        ico_item1:g_comp.Ico_Item;
        label_reqItem0:mo.gui.Label;
        label_reqItem1:mo.gui.Label;
        ico_medalItem:g_comp.Ico_Medal;
        btn_str:egret.gui.Button;
        grp_before:egret.gui.Group;
        grp_after:egret.gui.Group;
        grp_item0:egret.gui.Group;
        grp_item1:egret.gui.Group;
        grp_max:egret.gui.Group;
        grp_strReq:egret.gui.Group;
        label_cannotStr;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.bag.toString(), self.dataChanged);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.lvl.toString(), self.dataChanged);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.ico_item0.label_text.visible = false;
            self.ico_item1.label_text.visible = false;
            self.ico_item.label_text.visible = false;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var itemId= self.data.itemId;
            self.ico_item.set('itemId', itemId);
            self.ico_medalItem.setData(self.data);
            self._setBeforeEquipInfo(self.grp_before);
            self._setAfterEquipInfo(self.grp_after);
            self._setRequireItems();

            var strId = gd.medalCtrl.getWarPrintData(itemId)[0];
            var medalLvInfos = mo.getJSONWithFileName(gc.cfg_t_medalLvl);
            var medalLvInfo = medalLvInfos[strId+1];
            if(!medalLvInfo || gd.userCtrl.getLvl()>=medalLvInfo[gc.t_medalLvl_needLvl]){
                self.label_cannotStr.visible = false;
            }else{
                self.label_cannotStr.visible = true;
                self.label_cannotStr.text = medalLvInfo[gc.t_medalLvl_needLvl];
            }
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:44}).show();
        }

        _tap_btn_str(){
            var self = this;
            var itemId = gd.medalCtrl.transWarPrintData(self.data.itemId)[0];
            var medalLvInfos = mo.getJSONWithFileName(gc.cfg_t_medalLvl);
            var nextMedalLvInfo = medalLvInfos[itemId*100+1];
            if(nextMedalLvInfo && gd.userCtrl.getLvl()<nextMedalLvInfo[gc.t_medalLvl_needLvl]){
                return mo.showMsg(gc.id_c_msgCode.NoLvlOpen);
            }

            var opt = gd.medalCtrl.getWarPrintStrOpt(self.data.itemId);
            if(!opt.isItemEnough){
                if(!opt.medalEnough) return mo.showMsg(gc.id_c_msgCode.noMedal);//勋章不足
                for(var i = 0, li = opt.reqItems.length; i < li; i++){
                    var reqCfg = opt.reqItems[i];
                    var itemId = reqCfg[0];
                    var itemType = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId)[gc.t_item_type];
                    //碎片不足
                    if(itemType != gc.c_prop.itemTypeKey.medal && reqCfg[1] > gd.userCtrl.getItemNum(itemId)){
                        if(g_base.GainWay.canBuyFromShop(itemId)){
                            g_base.GainWayShop.create().setData({itemId:itemId, count:reqCfg[1]}).show().onClose(function(){
                                self.dataChanged();
                            });
                        }else{
                            g_base.GainWay.create().setData({itemId:itemId}).show();
                        }
                        break;
                    }
                }
                return;
            }
            gd.medalCtrl.warPrintedStrength(opt, function(){
                self.dataChanged();
            }, self);
        }

        _tap_ico_item0(){
            var self = this;
            self.on_ico_item(0);
        }
        _tap_ico_item1(){
            var self = this;
            self.on_ico_item(1);
        }

        on_ico_item(idx){
            var self = this;
            var itemId= self.data.itemId;
            var opt = gd.medalCtrl.getWarPrintStrOpt(itemId);
            var reqItems = opt.reqItems;
            var reqCfg = reqItems[idx];
            var bdc:BagDataCtrl = gd.BagDataCtrl.create(reqCfg[0], 1);
            g_base.BaseItemDetail.create().setData(
                {bdc: bdc}
            ).show();
        }

        _setRequireItems(){
            var self = this;
            var itemId= self.data.itemId;
            var opt = gd.medalCtrl.getWarPrintStrOpt(itemId);
            var reqItems = opt.reqItems;
            var reqCfg = reqItems[0];
            self.grp_item0.visible = reqCfg != null;
            var strTemp = "%s: %s/%s";
            if(reqCfg){
                var reqItemId = reqCfg[0];
                var reqNum = reqCfg[1];
                self.ico_item0.setData({itemId: reqItemId});
                self.label_reqItem0.text = mo.STR.format(strTemp
                    , self.ico_item0.label_text.text
                    , gd.userCtrl.getItemNum(reqItemId)
                    , reqNum);
            }
            reqCfg = reqItems[1];
            self.grp_item1.visible = reqCfg != null;
            if(reqCfg){
                var reqItemId = reqCfg[0];
                var reqNum = reqCfg[1];
                self.ico_item1.setData({itemId: reqItemId});
                self.label_reqItem1.text = mo.STR.format(strTemp
                    , self.ico_item1.label_text.text
                    , gd.userCtrl.getItemNum(reqItemId)
                    , reqNum);
            }
        }

        _setAfterEquipInfo(grp:egret.gui.Group){
            var self = this;
            var itemId= self.data.itemId;

            var label_name_lvl = <any>grp.getChildByName('label_name_lvl');
            var label_score = <any>grp.getChildByName('label_score');
            var label_props = <any>(<any>grp.getChildByName("grp_props")).getChildByName('label_props');

            var opt = gd.medalCtrl.getWarPrintStrOpt(itemId);
            self.grp_strReq.visible = !opt.isStrMax;
            self.grp_after.visible = !opt.isStrMax;
            self.grp_max.visible = opt.isStrMax;
            self.btn_str.visible = !opt.isStrMax;
            if(!opt.isStrMax){
                var strId = opt.nextStrId;
                var t_medalLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_medalLvl, strId);
                label_name_lvl.text = mo.STR.format(
                    "[ubb color=#E8CA47]强化+%s[/ubb]"
                    , t_medalLvl[gc.t_medalLvl_lvl]);

                label_score.text = t_medalLvl[gc.t_medalLvl_grade];
                var props = gd.medalCtrl.getStrProperty(itemId, strId, false);

                var strTemp1 = "[ubb color=green]%s: +%s[/ubb][/br]";
                var propData, str = "";
                for(var i = 0, li = props.length; i < li; i++){
                    propData = props[i];
                    var key = propData[0];
                    var baseV = propData[1];
                    str += mo.STR.format(strTemp1, gc.c_prop.equipProp[key], baseV);
                }
                label_props.text = str;
            }
        }

        _setBeforeEquipInfo(grp:egret.gui.Group){
            var self = this;
            var itemId= self.data.itemId;

            var label_name_lvl = <any>grp.getChildByName('label_name_lvl');
            var label_score = <any>grp.getChildByName('label_score');
            var label_props = <any>(<any>grp.getChildByName("grp_props")).getChildByName('label_props');

            var strId = gd.medalCtrl.getWarPrintData(itemId)[0];
            var t_medalLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_medalLvl, strId);
            label_name_lvl.text = mo.STR.format(
                "[ubb color=#E8CA47]强化+%s[/ubb]"
                , t_medalLvl[gc.t_medalLvl_lvl]);

            label_score.text = t_medalLvl[gc.t_medalLvl_grade];
            var props = gd.medalCtrl.getStrProperty(itemId, strId, false);

            var strTemp1 = "[ubb]%s: +%s[/ubb][/br]";
            var propData, str = "";
            for(var i = 0, li = props.length; i < li; i++){
                propData = props[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(strTemp1, gc.c_prop.equipProp[key], baseV);
            }
            label_props.text = str;
        }
    }
}