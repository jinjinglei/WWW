/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_mid{


    export class TuLong extends mo.gui.Dlg{

        list_items:egret.gui.List;
        _Item_list_items;

        label_month:egret.gui.Label;

        grp_equip0:egret.gui.Group;
        grp_equip1:egret.gui.Group;
        grp_equip2:egret.gui.Group;

        grp_recharge:egret.gui.Group;

        label_vip;
        bar_recharge;
        _rechargeId;


        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self.outsideClosable = true;
            self._layerOpt.shownWithAction = false;
            self._Item_list_items = g_base.BaseItemCell;

            //hd { 玩吧需要切换样式
            var pt = mo_channel.getCurChannel().channel();
            if (pt == 'wanba')
                mo.gui.helper.setSkinName(self, TuLongWanba.__className);
            //hd }
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            self.label_vip.text = 3+"";

            var vip3NeedPt = self.getNextVipScore(2);
            self.bar_recharge.maximum = vip3NeedPt;
            var curValue = gd.userCtrl.getVipScore();
            self.bar_recharge.setValue(curValue);

            self._setEquipInfo(0);
            self._setEquipInfo(1);
            self._setEquipInfo(2);

            //设置最低充值额度
            var c_recharge = mo.getJSONWithFileName(gc.cfg_c_recharge);
            var rechargeId = 1, rechargeInfo = c_recharge[rechargeId];
            while(rechargeInfo != null){
                var vipPt = rechargeInfo[gc.c_recharge_diamond];
                if((curValue + vipPt) >= vip3NeedPt){
                    rechargeId = rechargeInfo[gc.c_recharge_id];
                    break;
                }
                rechargeId++;
                rechargeInfo = c_recharge[rechargeId];
            }
            self._rechargeId = rechargeId;
            self._setItemInfo(self.grp_recharge, c_recharge[rechargeId]);
        }

        _setItemInfo(group:egret.gui.Group, info){
            var self = this;
            var MULTIPLE = info[gc.c_recharge_isTreble] > 0? 3 : 1;
            var btn = group.getChildByName("btn");
            var label_cost:any = mo.gui.helper.getChild(group, "label_cost");
            var label_get:any = group.getChildByName("label_get");

            //hd { 玩吧的价格需要转换到星星币
            var cost = info[gc.c_recharge_cost];
            var pt = mo_channel.getCurChannel().channel();
            if (pt == 'wanba')
                cost *= 10;
            //hd }
            
            label_cost.text = cost + "";
            label_get.text = info[gc.c_recharge_diamond];
        }

        _data_list_items():any[]{
            var self = this;

            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var items = (c_game[gc.id_c_game.tuLong][3]).split(",");
            return  items;
        }

        _initItem_list_items(cell:g_base.BaseItemCell) {
            var self = this;
            cell.tapShowDetail = true;
            var ico_item:g_comp.Ico_Item = cell.ico_item;
            ico_item.showEquipName = true;
        }

        _setEquipInfo(idx){
            var self = this;
            var grp:egret.gui.Group = self['grp_equip' + idx];
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var cfg = (c_game[gc.id_c_game.tuLong][idx]).split(",");
            var itemId = cfg[0], strLvl = cfg[1];
            var label_name:any = grp.getChildByName("label_name");
            var label_desc:any = grp.getChildByName("label_desc");
            var label_str_lvl:any = grp.getChildByName("label_str_lvl");
            //名称
            label_name.text = gd.equipCtrl.getEquipName(itemId);
            //评分
            var str = mo.STR.format(
                "[ubb]评分:%s[/ubb]",
                gd.equipCtrl.getBaseEvaluate(itemId));

            var basePropArr = gd.equipCtrl.getBasePropArr(itemId);
            var strTemp1 = "[ubb]%s: %s[/ubb]";
            var strTemp2 = "[/br][ubb color=0x2EAAF7]%s: %s[/ubb]";
            var str = "", propData;
            for(var i = 0, li = basePropArr.length; i < li; i++){
                propData = basePropArr[i];
                var key = propData[0];
                var baseV = propData[1];
                str += mo.STR.format(i == 0? strTemp1 : strTemp2, gc.c_prop.equipProp[key], baseV);
            }
            label_desc.text = str;

            //强化等级信息
            var strLvlInfo = gd.equipCtrl.getStrLvlInfo(itemId, strLvl);
            var propKey = strLvlInfo[1];
            var propV = strLvlInfo[2];
            var str = mo.STR.format(
                "[/br][ubb]%s+%s[/ubb]",
                gc.c_prop.heroProp[propKey], propV
            );
            label_str_lvl.text = [strLvl, str];
        }

        /**
         * 获取升到curVip的下一级vip所需经验
         * @param curVip
         * @returns {any}
         */
        getNextVipScore(curVip){
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, curVip);
            return info[gc.c_vip_score];
        }

        _tap_grp_recharge(){
            var self = this;
            var infos = mo.getJSONWithFileName(gc.cfg_c_recharge);
            self._doRecharge(infos[self._rechargeId]);
        }

        _doRecharge(item){
            var self = this;
            var str = "尝试购买【%s充值档】的次数";
            var rechargeId = item[gc.c_recharge_id];
            var payId = item[gc.c_recharge_payId];
            //ws.recordEvent("点击充值【" + item[gc.c_recharge_cost] + "元按钮】", 1);

            var payInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_payInfo, payId);
            var goodsId = payInfo[mo_channel.channelKeyMap[egret.project.channelId]][0];

            mo_channel.getCurChannel().pay(
                rechargeId,
                goodsId,
                function(data){
                    mo.log("充值成功");
                },
                self
            );
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = TuLong;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            cb();
        });
    });
}