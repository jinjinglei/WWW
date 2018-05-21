/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_mid{
    export class FirstRecharge extends mo.gui.Dlg{

        btn_get:egret.gui.Button;
        grp_btns:egret.gui.Group;

        list_items:egret.gui.List;
        _Item_list_items;

        //@override
        _initProp(){
            var self = this;
            super._initProp();

            //hd { 玩吧需要切换样式
            var pt = mo_channel.getCurChannel().channel();
            if (pt == 'wanba')
                mo.gui.helper.setSkinName(self, FirstRechargeWanba.__className);
            //hd }
            
            self._Item_list_items = g_base.BaseItemCell;
        }

        _data_list_items():any[]{
            var self = this, filter, sorter;
            var items = gd.activityCtrl.getFirstRechargeItems();
            return utils.itemObj2ObjArr(items);
        }

        _childrenCreated(){
            var self = this;
            super._childrenCreated();
            self.btn_get.visible = gd.activityCtrl.hasRecharged();
            self.grp_btns.visible = !self.btn_get.visible;

            if(self.grp_btns.visible){
                var c_recharge = mo.getJSONWithFileName(gc.cfg_c_recharge);
                var info = [c_recharge[1], c_recharge[2], c_recharge[3], c_recharge[4],];
                for(var i = 0, li = 4; i < li; i++){
                    self._setItemInfo(self['grp_item' + i], info[i])
                }
            }
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
            label_get.text = info[gc.c_recharge_diamond] * MULTIPLE + info[gc.c_recharge_first];
        }

        _tap_btn_get(){
            var self = this;
            if(gd.activityCtrl.hasRecharged()){
                gd.activityCtrl.receiveFirstRecharge(function(){
                    self.close();
                })
            }else{
                //ws.recordEvent("点击首充界面【前往充值】", 1);
                mo.moduleMgr.pushModule(g_consts.moduleId.recharge);
            }
        }

        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            var ico_item:g_comp.Ico_Item = cell.ico_item;
            ico_item.showEquipName = true;
            cell.tapShowDetail = true;
        }

        //6，12，30，98
        _tap_btn_item0(){
            var self = this;
            var infos = mo.getJSONWithFileName(gc.cfg_c_recharge);
            self._doRecharge(infos[1]);

        }_tap_btn_item1(){
            var self = this;
            var infos = mo.getJSONWithFileName(gc.cfg_c_recharge);
            self._doRecharge(infos[2]);

        }_tap_btn_item2(){
            var self = this;
            var infos = mo.getJSONWithFileName(gc.cfg_c_recharge);
            self._doRecharge(infos[3]);

        }_tap_btn_item3(){
            var self = this;
            var infos = mo.getJSONWithFileName(gc.cfg_c_recharge);
            self._doRecharge(infos[4]);
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
        moduleCfgItem.targetClass = FirstRecharge;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            cb();
        });
    });
}