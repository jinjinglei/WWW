/**
* Created by huanghaiying on 14/12/16.
*/
module gd {
    export class MailCtrl extends mo.DataController {
        static OPERATE_READ=1;//读操作
        static OPERATE_PICK=2; //提取物品操作

        init(data) {
            super.init(data);
            if(!data) return ;
            this._initFromCfg();
        }

        initData(data?){
            this.getList(function(){},this);
        }

        /**
         * 获取列表
         * @returns {Array}
         */
        getList (cb,target) {
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_mail_getList, {}, function (data) {
                self.init(data);
                //判断是否删除
                self._calAllDel();
                self._sort();
                pointCtrl.cal(gc.c_prop.pointEffectKey.mail);
                if (cb) cb.call(target,self._data);
            });
        }

        /**
         * 获取详细
         * items数据结构
         * {hero:{"id":num,..},diamond:100,wipeItem:100}
         * @param id
         * @returns {*}
         */
        getInfoById (id) {
            var idConst = gc.dsConsts.MailEntity.id;
            for (var i = 0; i < this._data.length; i++) {
                var obj = this._data[i];
                if (obj[idConst] == id) {
                    return obj;
                }
            }
        }

        /**
         * 设置阅读
         * @param id
         * @param cb
         * @param target
         */
        setRead (id, cb, target) {
            var self = this;
            var info = self.getInfoById(id);
            //已经阅读就不用再请求
            if(info[gc.dsConsts.MailEntity.isRead]){
                if (cb)  cb.call(target);
                return;
            }
            info[gc.dsConsts.MailEntity.isRead] = 1;
            self._calExpireDel(id,self.__class.OPERATE_READ);
            var args = {};
            var argsKey = gc.iface.a_mail_setRead_args;
            args[argsKey.mailId] = id;

            mo.request4Server(gc.iface.a_mail_setRead, args, function () {
                pointCtrl.cal(gc.c_prop.pointEffectKey.mail);
                if (cb)  cb.call(target);
            });
        }

        /**
         * 提取附件物品
         * @param id
         * @param cb
         * @param target
         * @returns 返回是否删除,true:已经删除，false:木有删除
         */
        pickItems (id, cb, target) {
            var self = this;
            var args = {};
            var argsKey = gc.iface.a_mail_pickItems_args;
            args[argsKey.mailId] = id;
            mo.requestWaiting4Server(gc.iface.a_mail_pickItems, args, function (data) {
                var isMail = data[gc.dsConsts.ExUserData.isMail];
                if(isMail) mo.showMsg(gc.id_c_msgCode.bagMaxMail);
                var isFull = data[gc.dsConsts.ExUserData.isFull];
                if(isFull) mo.showMsg(gc.id_c_msgCode.bagMax);
                //todo
                //gd.userDataCtrl.handleUseItemInfo(useItemInfo);
                var info = self.getInfoById(id);
                if(info) {
                    info[gc.dsConsts.MailEntity.items] = data[gc.dsConsts.ExUserData.items];
                    info[gc.dsConsts.MailEntity.isPicked] = self._getIsPicked(info);
                }
                self._calExpireDel(id,self.__class.OPERATE_PICK);

                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var bagItems = data[gc.dsConsts.ExUserData.bagItems];
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems];
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData);
                pointCtrl.cal(gc.c_prop.pointEffectKey.mail);
                if (cb) return cb.call(target,!info);
            });
        }

        /**
         * 一键提取
         * @param id
         * @param cb
         * @param target
         * @returns 返回是否删除,true:已经删除，false:木有删除
         */
        pickAllItems (cb, target) {
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_mail_pickAllItems, {}, function (data) {
                var isMail = data[gc.dsConsts.ExUserData.isMail];
                if(isMail) mo.showMsg(gc.id_c_msgCode.bagMaxMail);
                var isFull = data[gc.dsConsts.ExUserData.isFull];
                if(isFull) mo.showMsg(gc.id_c_msgCode.bagMax);
                //todo
                //gd.userDataCtrl.handleUseItemInfo(useItemInfo);
                var pickAllItemsArr = data[gc.dsConsts.ExUserData.pickAllItemsArr];
                var pickAllItemsList = data[gc.dsConsts.ExUserData.pickAllItemsList];
                for(var i = 0; i < pickAllItemsArr.length; i++){
                    var info = self.getInfoById(pickAllItemsArr[i]);
                    if(info) {
                        info[gc.dsConsts.MailEntity.items] = pickAllItemsList[i];
                        info[gc.dsConsts.MailEntity.isPicked] = self._getIsPicked(info);
                        self._calExpireDel(pickAllItemsArr[i],self.__class.OPERATE_PICK);
                    }
                }
                var userData = data[gc.dsConsts.ExUserData.userData]||{};
                var bagItems = data[gc.dsConsts.ExUserData.bagItems];
                var equipBagItems = data[gc.dsConsts.ExUserData.equipBagItems];
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData);
                pointCtrl.cal(gc.c_prop.pointEffectKey.mail);
                if (cb) return cb.call(target,!info);
            });
        }

        /**
         * 获取是否存在需要阅读或者提取物品的邮件
         * @param cb
         * @param target
         */
        isNeedOperate (cb, target?) {
            mo.requestWaiting4Server(gc.iface.a_mail_getIsNeedOperate, {}, function (data) {

                if (cb) return cb.call(target, data);
            });
        }

        /******************************************************************private********************************************************************/

        /**
         * 计算操作后是否过期删除
         * @param id
         * @param type
         * @private
         */
        _calExpireDel (id,type) {
            var self = this;
            var info = this.getInfoById(id);
            if(type == self.__class.OPERATE_READ){
                //没有物品则设置删除时间
                if(!info[gc.dsConsts.MailEntity.items]){
                    info[gc.dsConsts.MailEntity.delTime] = (Date.newDate()).addHours(info[gc.dsConsts.MailEntity.delHours]);
                }
            }else if(type == self.__class.OPERATE_PICK){
                //设置删除时间
                if(info[gc.dsConsts.MailEntity.type] != gc.c_prop.mailTypeKey.equipChest || !info[gc.dsConsts.MailEntity.items] || JSON.stringify(info[gc.dsConsts.MailEntity.items]) == "{}") {
                    info[gc.dsConsts.MailEntity.delTime] = (Date.newDate()).addHours(info[gc.dsConsts.MailEntity.delHours]);
                }
            }

            if(self._isNeedToDel(id)){
                self._del(id);
            }
        }


        /**
         * 是否需要删除
         * @param id
         * @returns {boolean}
         * @private
         */
        _isNeedToDel(id){
            var self = this;
            var info = self.getInfoById(id);
            var expireTime = info[gc.dsConsts.MailEntity.expireTime];
            if (expireTime && typeof expireTime == "string") expireTime = Date.newDate(expireTime);
            var delTime = info[gc.dsConsts.MailEntity.delTime];
            var nowTime = Date.newDate();
            //判断是否已经过期,或者到达删除时间
            if (expireTime.isBefore(nowTime) || expireTime.equals(nowTime)) {
                return true;
            }
            if (delTime && typeof delTime == "string") delTime = Date.newDate(delTime);
            if (delTime && (delTime.isBefore(nowTime) || delTime.equals(nowTime))) {
                return true;
            }
            return false;
        }

        /**
         * 重新排序
         * @private
         */
        _sort(){
            //未查看，已查看但未领取，已查看且已领取
            var arr1 = [], arr2 = [], arr3 = [];
            var mailArr = this._data;
            for (var i = 0; i < mailArr.length; i++) {
                var mailData = mailArr[i];
                var isRead = mailData[gc.dsConsts.MailEntity.isRead];
                var isPicked = mailData[gc.dsConsts.MailEntity.isPicked];
                var items = mailData[gc.dsConsts.MailEntity.items];
                if (items && Object.keys(items).length <= 0) {
                    mailData[gc.dsConsts.MailEntity.items] = null;
                }
                if (!isRead) {
                    arr1.push(mailData);
                } else {
                    if (!isPicked) {
                        arr2.push(mailData);
                    } else {
                        arr3.push(mailData);
                    }
                }
            }
            var idKey = gc.dsConsts.MailEntity.id;
            var sortFunc = function (a, b) {
                return a[idKey] > b[idKey] ? -1 : 1;
            };
            arr1.sort(sortFunc);
            arr2.sort(sortFunc);
            arr3.sort(sortFunc);
            this._data = arr1.concat(arr2).concat(arr3);
        }

        /**
         * 剔除删除的
         * @private
         */
        _calAllDel(){
            var self =this;
            var mailArr = this._data;
            for (var i = 0, l = mailArr.length; i < l; i++) {
                var id = mailArr[i][gc.dsConsts.MailEntity.id];
                if(self._isNeedToDel(id)){
                    mailArr.splice(i, 1);
                    i--;
                }
            }
        }

        /**
         * 删除条记录
         * @param id
         * @private
         */
        _del (id) {
            var mailArr = this._data;
            for (var i = 0, l = mailArr.length; i < l; i++) {
                if (mailArr[i][gc.dsConsts.MailEntity.id] == id) {
                    mailArr.splice(i, 1);
                    break;
                }
            }
        }

        _initFromCfg(){
            var mailArr = this._data;
            var c_mail = mo.getJSONWithFileName(gc.cfg_c_mail);
            for (var i = 0, l = mailArr.length; i < l; i++) {
                var locMailData = mailArr[i];
                var c_mailData = c_mail[locMailData[gc.dsConsts.MailEntity.type]];
                if(c_mailData){
                    locMailData[gc.dsConsts.MailEntity.fromName] = c_mailData[gc.c_mail_fromName];
                    locMailData[gc.dsConsts.MailEntity.title] = c_mailData[gc.c_mail_title];
                    var locContent = c_mailData[gc.c_mail_content];
                    var locReplaceArgs = locMailData[gc.dsConsts.MailEntity.replaceArgs];
                    if(locReplaceArgs){
                        //todo  找不到formatStr
                        //locContent = mo.formatStr.apply(null,[locContent].concat(locReplaceArgs));
                    }
                    locMailData[gc.dsConsts.MailEntity.content] = locContent;

                }
            }
        }

        //获取是否提取物品
        _getIsPicked(mailData){
        if(mailData[gc.dsConsts.MailEntity.type] == gc.c_prop.mailTypeKey.equipChest){
            var items = mailData[gc.dsConsts.MailEntity.items];
            if(Object.keys(items).length > 0){
                return 0;
            }else{
                return 1;
            }
        }else{
            return 1;
        }
    }

    }

    export var mailCtrl:MailCtrl = MailCtrl.getInstance();
}