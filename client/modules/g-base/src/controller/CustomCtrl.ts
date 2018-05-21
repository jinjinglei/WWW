/**
 * Created by Sara on 2015/9/18.
 */

module gd {
    export class CustomCtrl extends mo.DataController {
        public static ON_INHERITED:string = "ON_INHERITED"; //传承完成
        public static ON_CUSTOM:string = "ON_CUSTOM"; //订制完成

        _initProp() {
            super._initProp();
        }

        /**
         * 获取订制券
         * @param color 制定颜色 c_prop.equipColorKey
         * @returns {Array}
         */
        getCustomTicket(color?){
            var self = this;
            var ticket = [];
            var customPara = mo.getJSONWithFileName(gc.cfg_c_customParameter);
            var num = 0;
            for(var itemId in customPara){
                num = gd.userCtrl.getBag()[itemId];
                if(num){ //背包里有了
                    if(color != null && customPara[itemId][gc.c_customParameter_color] != color){
                        continue;
                    }
                    for(var i = 0, li = num; i < num; i++){
                        ticket.push(itemId);
                    }
                }
            }
            return ticket;
        }

        getCustomEquips(){
            var self = this;
            var equipBag = gd.userCtrl.getEquipBag();
            var equipIds = [];
            for(var equipId in equipBag){
                if(gd.equipCtrl.isCustomEquip(equipId)){
                    equipIds.push(equipId);
                }
            }
            return equipIds;
        }

        //是否为可以订制的订制券
        canCustomTicket(ticktId){
            var self = this;
            var customPara = mo.getJSONWithFileNameAndID(gc.cfg_c_customParameter, ticktId);
            if(customPara[gc.c_customParameter_gainType] > 1) return true; //非vip产出的
            return gd.userCtrl.getVip() >= customPara[gc.c_customParameter_vip];
        }

        //红点
        isCustomRed(){
            var self = this;
            var tickets = self.getCustomTicket();
            if(tickets.length > 0){
                for(var i = 0, li = tickets.length; i < li; i++){
                    if(self.canCustomTicket(tickets[i])) return true;
                }
            }
            var equips = self.getCustomEquips();
            for(var i = 0, li = equips.length; i < li; i++){
                var opt = self.getInheritedEquipOpt(equips[i]);
                if(opt.nextEquipNeedLvlEnough && opt.isItemEnough){
                    return true;
                }
            }
            return false;
        }

        getCustomListInfo(){
            var self = this;
            var info = [];
            var tickets = self.getCustomTicket();
            tickets.sort(function(t1, t2){ //加个排序,可以订制的靠前显示
                var c1 = self.canCustomTicket(t1)? 0 : -1;
                var c2 = self.canCustomTicket(t2)? 0 : -1;
                return c1 > c2? -1 : 1;
            })
            for(var i = 0, li = tickets.length; i < li; i++){
                info.push({itemId: tickets[i]});
            }
            var equipIds = self.getCustomEquips();
            equipIds.sort(function(a, b){
                var aw = self.getInheritedEquipOpt(a).nextEquipNeedLvlEnough? 1 : -1;
                var bw = self.getInheritedEquipOpt(b).nextEquipNeedLvlEnough? 1 : -1;
                if(aw == bw){
                    if(gd.equipCtrl.getEquipItemLvl(a) >= gd.equipCtrl.getEquipItemLvl(b)){
                        aw-=1
                    }else{
                        bw-=1;
                    }
                }
                return aw > bw? -1 : 1;
            });

            for(var i=0, li = equipIds.length; i <li; i++){
                info.push({equipId: equipIds[i]});
            }

            return info;
        }

        getCustomLvlLimt(ticketId){
            var customPara = mo.getJSONWithFileNameAndID(gc.cfg_c_customParameter, ticketId);
            return customPara[gc.c_customParameter_equip_lvl_range];
        }


        getTicketInfo(ticketId, lvl, equipType){
            var self = this;
            var starItemIds = {};
            starItemIds[gc.c_prop.heroJobKey.zs] = self.getCustomizationId(ticketId, gc.c_prop.heroJobKey.zs, lvl, equipType);
            starItemIds[gc.c_prop.heroJobKey.fs] = self.getCustomizationId(ticketId, gc.c_prop.heroJobKey.fs, lvl, equipType);
            starItemIds[gc.c_prop.heroJobKey.ds] = self.getCustomizationId(ticketId, gc.c_prop.heroJobKey.ds, lvl, equipType);
            return starItemIds;
        }

        //定制武器附加属性（万分比）
        getExtrPropAddRatio(){
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.customizationCfg);
            return c_game[1];
        }

        //橙色定制武器可选择属性数量
        getMaxCustomPropNum(){
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.customizationCfg);
            return c_game[12];
        }

        //获取定制id             certificate:定制凭证,job:定制职业,lvl:定制等级
        getCustomizationId(certificate, job, lvl, equipType) {
            //var equipType = "00";
            var jobStr = job.toString();
            var cfg_c_customParameter = mo.getJSONWithFileName(gc.cfg_c_customParameter);
            var color = parseInt(cfg_c_customParameter[certificate][gc.c_customParameter_color]);
            //var part = parseInt(cfg_c_customParameter[certificate][gc.c_customParameter_part]);
            //if (part == 0) {
            //    equipType = gc.c_prop.equipTypeKey.weapon.toString();
            //} else if (part == 1) {
            //    equipType = gc.c_prop.equipTypeKey.clothes.toString();
            //} else if (part == 10) {
            //    equipType = gc.c_prop.equipTypeKey.helmet.toString();
            //} else if (part == 3) {
            //    equipType = gc.c_prop.equipTypeKey.ring.toString();
            //} else if (part == 2) {
            //    equipType = gc.c_prop.equipTypeKey.bracelet.toString();
            //} else if (part == 11) {
            //    equipType = gc.c_prop.equipTypeKey.necklace.toString();
            //}
            if(color == 6) jobStr = (parseInt(job) + 3).toString();
            var customizationId = "9" + jobStr + equipType.toString() + (Math.ceil(lvl / 10) * 10).toString();
            return parseInt(customizationId);
        }

        //定制武器
        custing = false;
        customization(certificate, job, name, lvl, abilityIndex, equipType, cb, target) {
            var self = this;
            if(self.custing == true) return;
            //限制长度
            var bag = gd.userCtrl.getBag();
            var cfg_c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var cfg_t_itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            //var sensitiveArr = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.fuckWord)[0].split(",");
            var sensitiveArr = cfg_c_game[gc.id_c_game.fuckWord][0].split(",");
            if (name.indexOf(" ") >= 0) return mo.showMsg("名称不能包含空格");
            if (name == null || name == "") {
                return mo.showMsg(gc.id_c_msgCode.noItemName);
            }
            else if (mo.STR.getStringLength(name) > 12) {
                return mo.showMsg(gc.id_c_msgCode.nameToolong);
            }
            else if (mo.STR.checkSensitiveWord(name, sensitiveArr)) {
                return mo.showMsg(gc.id_c_msgCode.fuckword);
            }
            if (cfg_c_game[gc.id_c_game.customizationCfg][3].indexOf(certificate.toString()) == -1) return mo.showMsg("定制凭证错误");
            var customizationId = self.getCustomizationId(certificate, job, lvl, equipType);     //定制武器id
            if (!cfg_t_itemEquip[customizationId]) return mo.showMsg("没有该定制装备");
            if ((abilityIndex.length -1) != self.getMaxCustomPropNum()) return mo.showMsg(gc.id_c_msgCode.choseProperty, self.getMaxCustomPropNum());
            var itemEquip = cfg_t_itemEquip[customizationId];
            var propertys = itemEquip[gc.t_itemEquip_propertys];
            for (var i = 0; i < abilityIndex.length; i++) {
                if (!propertys[abilityIndex[i]]) return mo.showMsg("属性勾选出错");
            }
            if (!bag[certificate] || bag[certificate] == 0) return mo.showMsg("缺少定制凭证");

            //确认
            mo.showMsg(gc.id_c_msgCode.makeItem, function(){
                var needLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_item, customizationId)[gc.t_item_level];
                if(gd.userCtrl.getLvl() < needLvl){
                    mo.showMsg(gc.id_c_msgCode.makeLvlBigger, function(){
                        self._doCustomization(certificate, job, name, lvl, abilityIndex, equipType, cb, target);
                    });
                }else{
                    self._doCustomization(certificate, job, name, lvl, abilityIndex, equipType, cb, target);
                }
            });

        }

        _doCustomization(certificate, job, name, lvl, abilityIndex, equipType, cb, target) {
            var self = this;
            var argKeys = gc.iface.a_equip_customization_args;
            var args = {};
            args[argKeys.certificate] = certificate;
            args[argKeys.job] = job;
            args[argKeys.name] = name;
            args[argKeys.lvl] = lvl;
            args[argKeys.abilityIndex] = abilityIndex;
            args[argKeys.equipType] = equipType;
            self.custing = true;
            mo.requestWaiting4Server(gc.iface.a_equip_customization, args, function (data) {
                self.custing = false;
                var isMail = data[gc.dsConsts.ExUserData.isMail];        //true 需要提示发送邮箱  false  不需要
                if (isMail) mo.showMsg(gc.id_c_msgCode.bagMaxMail);
                var userData = {};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems] || {};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems] || {};
                var bag = gd.userUtils.getNewBag(delBagItems, {});
                var equipBag = gd.userUtils.getNewEquipBag({}, equipBagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData);
                cb.call(target, data);
                self.pushNotify(self.__class.ON_CUSTOM);
                pointCtrl.cal(gc.c_prop.pointEffectKey.custom);
            });
        }

        //升级定制武器
        upCustomization(opt, cb, target) {
            var self = this;
            var equipId = opt.equipId;
            var equipBag = gd.userCtrl.getEquipBag();
            if (!equipBag[equipId]) return mo.showMsg("背包没有该装备");
            if (opt.isMaxLvl) return mo.showMsg("定制武器已升到最高级");
            if(!opt.isItemEnough) return mo.showMsg("材料不足");
            var argKeys = gc.iface.a_equip_upCustomization_args;
            var args = {};
            args[argKeys.equipId] = equipId;
            mo.requestWaiting4Server(gc.iface.a_equip_upCustomization, args, function (data) {
                var userData = {};
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems] || {};
                var delBagItems = data[gc.dsConsts.ExUserData.delBagItems] || {};
                var bag = gd.userUtils.getNewBag(delBagItems, {});
                var equipBag = gd.userUtils.getNewEquipBag({}, equipBagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData);
                cb.call(target, data);
                self.pushNotify(self.__class.ON_INHERITED);
                gd.heroCtrl.calPropAndCombat();
                pointCtrl.cal(gc.c_prop.pointEffectKey.custom);
            });
        }

        getInheritedEquipOpt(equipId){
            var self = this;
            var opt = {
                equipId : equipId,
                nextEquipInfo : null,
                nextEquipNeedLvl: 0,
                nextEquipNeedLvlEnough:false,
                isMaxLvl: false,
                costItemId:null, //消耗道具
                costCount:null, //消耗道具
                isItemEnough: false
            };

            var trans = gd.equipCtrl.equipTrans(equipId);
            var tempId = trans.tempId;
            //下一个装备的相关信息
            var nextEquipTempId = parseInt(tempId) + 10;
            var idxs = gd.userCtrl.getEquipBag()[equipId][5];
            var t_itemEqup = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, nextEquipTempId);
            if(t_itemEqup){
                var t_props = t_itemEqup[gc.t_itemEquip_propertys];
                var nextBasePropArr = [];
                for(var i = 0, li = idxs.length; i < li; i++){
                    nextBasePropArr.push(t_props[idxs[i]]);
                }
                var nextEquipInfo = {
                    tempId: nextEquipTempId,
                    name: trans.name,
                    basePropArr: nextBasePropArr,
                    extraPropArr: trans.extraPropArr,
                    scrore: gd.userUtils.getEquipGrade(nextEquipTempId, trans.extraPropArr, idxs)
                }
                opt.nextEquipInfo = nextEquipInfo;
                //消耗
                var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.customizationCfg);
                var needArr = c_game[4].split(",");
                opt.costItemId = c_game[2];
                var needCount = 999999;
                var t_item = mo.getJSONWithFileNameAndID(gc.cfg_t_item, tempId);
                switch (parseInt(t_item[gc.t_item_itemLvl])) {
                    case 120:
                        needCount = parseInt(needArr[0]);
                        break;
                    case 130:
                        needCount = parseInt(needArr[1]);
                        break;
                    case 140:
                        needCount = parseInt(needArr[2]);
                        break;
                    case 150:
                        needCount = parseInt(needArr[3]);
                        break;
                    case 160:
                        needCount = parseInt(needArr[4]);
                        break;
                    case 170:
                        needCount = parseInt(needArr[5]);
                        break;
                    case 180:
                        needCount = parseInt(needArr[6]);
                        break;
                    case 190:
                        needCount = parseInt(needArr[7]);
                        break;
                }
                opt.costCount = needCount;
                //需求等级
                opt.nextEquipNeedLvl = mo.getJSONWithFileNameAndID(gc.cfg_t_item, nextEquipTempId)[gc.t_item_level];
                opt.nextEquipNeedLvlEnough = gd.userCtrl.getLvl() >= opt.nextEquipNeedLvl;
                opt.isItemEnough = gd.userCtrl.getItemNum(opt.costItemId) >= opt.costCount;
            }else{
                opt.isMaxLvl = true;
            }
            return opt;
        }
    }
        export var customCtrl:CustomCtrl;
        export var customCtrl:CustomCtrl = CustomCtrl.getInstance() ;
}