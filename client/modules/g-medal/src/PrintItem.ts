/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_medal{
    export class PrintItem extends mo.gui.ItemRenderer{

        static ON_BTN_EQUIP:string = "on_btn_equip";

        ico_item:g_comp.Ico_Item;
        ico_medalItem:g_comp.Ico_Medal;
        label_grade:mo.gui.Label;
        label_strLvl:mo.gui.Label;
        img_print:egret.gui.UIAsset;
        img_red:egret.gui.UIAsset;
        btn_str;
        btn_active;
        label_cannotStr;
        label_cannotActive;
        label_medal;

        _initProp(){
            super._initProp();
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.img_red.visible = false;
            self.ico_medalItem.noAnimate = true;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;//[勋章id,强化等级,评分]
            var itemId = data[0];
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            self.ico_item.set('itemId', data[0]);
            self.ico_item.label_text.visible = false;
            self.label_strLvl.text = data[1];
            self.label_grade.text = data[2];
            self.ico_medalItem.setData({itemId:itemId});

            if(gd.medalCtrl.isActiveMedal(itemId)){
                var medalLvInfos = mo.getJSONWithFileName(gc.cfg_t_medalLvl);
                var nextMedalLvInfo = medalLvInfos[itemId*100+data[1]+1];
                self.btn_str.visible = true;
                self.btn_active.visible = false;
                self.label_cannotActive.visible = false;
                if(!nextMedalLvInfo || gd.userCtrl.getLvl()>=nextMedalLvInfo[gc.t_medalLvl_needLvl]){
                    self.label_cannotStr.visible = false;
                    self.img_red.visible = gd.medalCtrl.isMedalItemEnough(itemId);
                }else{
                    self.label_cannotStr.visible = true;
                    self.label_cannotStr.text = nextMedalLvInfo[gc.t_medalLvl_needLvl];
                    self.img_red.visible = false;
                }
            }else{
                self.btn_str.visible = false;
                self.btn_active.visible = true;
                self.label_cannotStr.visible = false;
                if(gd.userCtrl.getLvl()>=itemInfo[gc.t_item_level]){
                    self.label_cannotActive.visible = false;
                    self.img_red.visible = true;
                }else{
                    self.label_cannotActive.visible = true;
                    self.label_cannotActive.text = itemInfo[gc.t_item_level];
                    self.img_red.visible = false;
                }
            }

            var t_medal = mo.getJSONWithFileNameAndID(gc.cfg_t_medal, itemId);
            var metalType:number = t_medal[gc.t_medal_metalType];
            self.label_medal.visible = metalType == 3;
            if( metalType == 3){
                self.label_medal.text = itemInfo[gc.t_item_name];
            }
        }

        _tap_btn_str(){
            var self = this;
            PrintStr.create().setData({itemId: self.data[0]}).show();
        }
        _tap_btn_active(){
            var self = this;
            gd.medalCtrl.activeMedal(self.data[0],function(){
                self.delegate._refreshPrintGrp();
            },self);
        }
    }
}