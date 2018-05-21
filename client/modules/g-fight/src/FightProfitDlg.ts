/**
 * Created by lihex on 11/4/15.
 */
module g_fight {

    /**
     *
     * @author
     *
     */
    export class FightProfitDlg extends mo.gui.Dlg {

        outsideClosable = true;

        label_tips:mo.gui.Label;
        label_noExp;

        label_profit_gold:mo.gui.Label;
        label_profit_exp:mo.gui.Label;

        grp_expOpen;
        grp_expNoOpen;
        label_curExpLv;
        label_expPer;
        label_expTotal;
        label_expOpenLv;

        _initProp() {
            super._initProp();
            var self = this;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.expc.toString(), self._updateExp);
            self.registerClassByKey(gd.CopyCtrl, gd.CopyCtrl.ON_COPY_CHANGE, self._updateProfit);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            this._updateExp();
            this._updateProfit();

            var openInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_open, gc.id_c_open.expBox);
            var openLv = openInfo[gc.c_open_lvlRequired];
            if(gd.userCtrl.getLvl()>=openLv){
                var entity = gd.demonLotusCtrl.getData();
                var lv = entity[gc.dsConsts.DemonLotusEntity.lvl];
                var lvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lv);
                var advLv = entity[gc.dsConsts.DemonLotusEntity.advanceLvl] || 0;
                var demonLotusInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_demonLotus, advLv);
                self.label_curExpLv.text = lv.toString();
                self.label_expTotal.text = utils.formatByWan(gd.demonLotusCtrl.calNowGet() >> 0, 1) + "/" + utils.formatByWan(lvInfo[gc.c_lvl_storeLimit] + demonLotusInfo[gc.c_demonLotus_expcAccLimit], 1);
                self.label_expPer.text = utils.formatByWan(lvInfo[gc.c_lvl_expOutput]*60,0)+"/分钟";
                self.grp_expOpen.visible = true;
                self.grp_expNoOpen.visible = false;
            }else{
                self.label_expOpenLv.text = openLv;
                self.grp_expOpen.visible = false;
                self.grp_expNoOpen.visible = true;
            }
        }

        _updateProfit(){
            var self = this;
            var profit = gd.copyCtrl.getNormalCopyProfit();
            var expRate = gd.fightCtrl.getExpcRate();
            var expRateStr = "";
            if(expRate>1){
                expRateStr = "[ubb color=green](×"+expRate+")[/ubb]";
            }
            self.label_profit_gold.text = utils.formatByWan(profit[0]);
            self.label_profit_exp.text = utils.formatByWan(profit[7]+expRateStr);
        }

        _updateExp(){
            var self = this;
            var expRate = gd.fightCtrl.getExpcRate();
            var profit = gd.copyCtrl.getNormalCopyProfit();
            var maxLvlStr = "人物已达最高等级";
            var upStr = "人物升级至[ubb color=yellow]Lv.%s[/ubb]还需经验[ubb color=yellow]%s[/ubb]，约需要[ubb color=yellow]%s[/ubb]";
            var str = "杀怪统计：%s波怪/小时 \n每小时掉落统计：\n    装备：%s件[/br]";
            var boxStr = "";
            var boxItems:any = profit[8];
            var keyItems = profit[9];
            var needHour:any = profit[6];
            if(needHour!="--"){
                needHour = utils.formatHour(needHour/expRate);
            }else{
                needHour +="小时";
            }

            if (boxItems.length > 0) {
                for (var i = 0; i < boxItems.length; ++i) {
                    var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, boxItems[i][0]);
                    boxStr += "    " + itemInfo[gc.t_item_name] + ": 约" + boxItems[i][1] + "个";
                    if(keyItems[i]){
                        var itemKeyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, keyItems[i][0]);
                        boxStr += "\t\t" + itemKeyInfo[gc.t_item_name] + ": 约" + keyItems[i][1] + "个";
                    }
                    boxStr += "\n";
                }
                str += boxStr;
            }
            if(gd.userCtrl.isMaxLvl()){
                self.label_tips.text = mo.STR.format(str, profit[2], profit[3]) + maxLvlStr;
            }else{
                str += upStr;
                self.label_tips.text = mo.STR.format(str, profit[2], profit[3], profit[4],
                    utils.formatByWan(profit[5]), needHour);
            }

            self.label_noExp.text = mo.STR.format("若人物等级高于小怪等级%s级，则打小怪不获得任何收益", mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.lootLimit));
        }

        _tap_btn_get(){
            mo.moduleMgr.runModule(g_consts.moduleId.lotus);
        }
    }
}