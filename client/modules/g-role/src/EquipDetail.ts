/**
 * Created by lihex on 9/19/15.
 */
module g_role {

    /**
     *
     * @author
     *
     */
    export class EquipDetail extends mo.gui.Layer{

        label_name:mo.gui.Label;
        label_desc:mo.gui.Label;
        label_str_lvl:mo.gui.Label;
        label_str_star:mo.gui.Label;
        label_str_gem:mo.gui.Label;
        ico_item:g_comp.Ico_Item;
        gem_stone:g_comp.Gem_Stone;

        label_noEquip:egret.gui.Label;
        scr_hasEquip:egret.gui.Scroller;
        btn_replace:egret.gui.Button;
        img_red:egret.gui.UIAsset;


        data:gd.IHeroPart;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
            // 注册事件监听
            self.registerClassByKey(gd.HeroEntityCtrl, gd.HeroEntityCtrl.ON_EQUIP_CHANGED, self.close);
        }

        _heroChanged(hec){
            var self = this;
            self.setData({hec: hec});
        }

        dtor(){
            super.dtor();
            var self = this;
            roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        }

        _tap_btn_replace(){
            var self = this;

            var part = self.data.part;
            var hec = self.data.hec;
            g_role.EquipChange.create().setData({hec: hec, part:part}).show();
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var part = self.data.part;
            var hec = self.data.hec;

            var isPartEquiped = hec.isPartEquiped(part);
            self.label_noEquip.visible = !isPartEquiped;
            self.scr_hasEquip.visible = isPartEquiped;
            self.btn_replace.visible = isPartEquiped && hec.isSelf;
            self.img_red.visible = false;
            if(!isPartEquiped) return;

            var tempId = hec.getEquipTempIdByPart(part);
            var equipId = hec.getEquipIdByPart(part);
            var equipInfo = hec.getEquipInfoByPart(part);
            var trans = gd.equipCtrl.equipTrans(equipInfo);

            self.ico_item.setData({itemId: tempId});
            self.label_name.text = trans.name;

            var str = mo.STR.format(
                "[ubb]评分:%s[/ubb]",
                trans.score);

            var basePropArr = trans.basePropArr;
            var addPropObj = utils.kvArr2KvObj(trans.extraPropArr);
            var strTemp1 = "[/br][ubb]%s: %s[/ubb][ubb] +%s[/ubb]";
            var strTemp2 = "[/br][ubb color=0x2EAAF7]%s: %s[/ubb][ubb color=0x2EAAF7] +%s[/ubb]";
            var propData;
            for(var i = 0, li = basePropArr.length; i < li; i++){
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV, addPropObj[key] || 0);
            }
            self.label_desc.text = str;

            //强化等级信息
            var strLvlInfo = hec.getStrLvlInfoByEquipPart(part);
            var strLvl = strLvlInfo[0];
            var propKey = strLvlInfo[1];
            var propV = strLvlInfo[2];
            var str = mo.STR.format(
                "[/br][ubb]%s+%s[/ubb]",
                gc.c_prop.heroProp[propKey], propV
            );
            self.label_str_lvl.text = [strLvl, str];

            //升星等级
            var starLvlInfo = hec.getStarLvlInfoByEquipPart(part);
            var topOpt = hec.getUpStarOpt(part);
            var starLvl = starLvlInfo[0];
            var propV = starLvlInfo[1];
            var str = mo.STR.format("[/br][ubb]装备基础属性+%s%[/ubb]", propV);
            var topStr = topOpt.topLv > 0 ?
                mo.STR.format("[/br][/br][ubb]升星突破：Lv.%s[/ubb][/br]%s+%s", topOpt.topLv, gc.c_prop.heroProp[topOpt.topCurProp[0]], topOpt.topCurProp[1])
                : "";
            self.label_str_star.text = [starLvl, str, topStr];

            //宝石等级
            self.gem_stone.setData({hec:hec, part:part});

            // 红点
            var equipReds = hec.isEquipReddot();
            self.img_red.visible = equipReds.indexOf(part)!=-1;
        }

    }
}