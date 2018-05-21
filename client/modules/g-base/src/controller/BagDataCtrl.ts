/**
* Created by huanghaiying on 14/12/16.
*/
module gd {

    var bagTypeKey = gc.c_prop.bagTypeKey, filterKey = 'bagTag';
    var filterOptionMap = {};
    var filterOption = mo.ARR.filterOption;
    filterOptionMap[0] = filterOption;// 全部
    filterOptionMap[1] = filterOption.bind({list : [[filterKey, bagTypeKey.equip]]});// 装备
    filterOptionMap[2] = filterOption.bind({list : [[filterKey, bagTypeKey.item]]});// 道具
    filterOptionMap[3] = filterOption.bind({list : [[filterKey, bagTypeKey.rebirth]]});// 境界
    filterOptionMap[4] = filterOption.bind({list : [[filterKey, bagTypeKey.chest]]});// 宝箱
    filterOptionMap[5] = filterOption.bind({list : [[filterKey, bagTypeKey.medal]]});// 勋章
    //
    var sortOptMap = {};
    var sTempId = 'tempId';
    var sLvl = 'lvl';
    var sItemLvl = 'itemLvl';
    var sQuality = 'quality';
    var sCount = 'count';
    var sScore = 'score';
    var sIsReachedUseLvl = 'isReachedUseLvl';
    var sIsOpenNoCost = 'isOpenNoCost';
    var sItemType = 'getItemTypeWeight';
    var sortOption = mo.ARR.sortOption;
    sortOptMap[0] = sortOption.bind({list : [sTempId]});// 全部
    sortOptMap[1] = sortOption.bind({list : [sQuality, sItemLvl, sTempId]});// 装备
    sortOptMap[2] = sortOption.bind({list : [
        sIsReachedUseLvl, //达到使用等级〉未达到使用等级
        sItemType, //物品类型，根据配置排列 c_game.initCfg 配置8
        sQuality, //品质颜色：高〉低
        sItemLvl,
        {type: 1, name: sTempId}] //物品ID：低〉高
    });// 道具
    sortOptMap[3] = sortOption.bind({list : [sQuality, sLvl, sTempId]});// 境界
    sortOptMap[4] = sortOption.bind({list : [
        sIsReachedUseLvl, //达到使用等级〉未达到使用等级
        sIsOpenNoCost, //无消耗开启〉需要道具开启
        sQuality, //品质颜色：高〉低
        {type: 1, name: sItemLvl}, //物品等级：低〉高
        {type: 1, name: sTempId}] //物品ID：低〉高
    }); // 宝箱
    sortOptMap[5] = sortOption.bind({list : [sCount, sTempId]});// 勋章

    export class BagDataCtrl extends mo.DataController {
        static ON_BATCH_USE_EXP_ITEM = "onBatchUseExpItem";
        static ON_SOLD = "onSold";//出售
        static ON_COUNT_CHANGED = "onCountChanged";//数量变化

        static ITEM_TYPE_SORT_CFG; //物品类型排序配置



        _tempCfgName;
        _temp;

        tempId;
        count:number;
        type;
        price;
        name;
        explain;
        useTxt;
        quality;
        note:string;
        level;//需求等级
        itemLvl;//物品等级
        vip;//需求vip
        maxGet;
        exclusiveExp;
        bagTag;
        _isRequesting;
        simUseExpOpt:any;

        equipId; //装备实例ID
        job;//所属职业
        jobName:string;
        proptys:Array<any>;//默认属性
        equipType;//装备类型
        equipTypeName;//装备类型名
        score:number; //评分

        temp:any;
        pileCount:number;//堆叠数量

        islock:number; //是否锁定
        rewards:Array<any>; //售出兑换物品

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._tempCfgName = gc.cfg_t_item;
            self.tempId = null;
            self._temp = null;
            self._isRequesting = false;
            self.pileCount = 0;
            self.islock = 0;
        }

        init(tempId, count ,islock) {
            super.init(null);
            var self = this;

            self.tempId = parseInt(tempId);
            var temp = self.temp = self._temp = mo.getJSONWithFileNameAndID(self._tempCfgName, tempId);
            self.name = temp[gc.t_item_name];
            self.type = temp[gc.t_item_type];
            if(self.type == gc.c_prop.itemTypeKey.equip){
                var equipTemp = mo.getJSONWithFileNameAndID(gc.cfg_t_itemEquip, tempId);
                self.equipId = count; //是装备时count做equipId用
                self.job = equipTemp[gc.t_itemEquip_job];
                self.jobName = gc.c_prop.heroJob[self.job];
                self.proptys = equipTemp[gc.t_itemEquip_propertys];
                self.equipType = equipTemp[gc.t_itemEquip_type];
                self.equipTypeName = gc.c_prop.equipType[self.equipType];
                if(self.equipId){
                    //订制武器
                    var trans = gd.equipCtrl.equipTrans(self.equipId);
                    if(trans.isCustomEquip){
                        self.name = trans.name;
                        self.proptys = trans.basePropArr;
                    }
                    self.score = trans.score;
                }
                self.count = 1;
                self.islock = islock;
            }else{
                self.count = count || 0;
            }

            self.price = temp[gc.t_item_price] || 0;
            //self.explain = temp[uw.t_item_explain] || "";
            self.note = temp[gc.t_item_note] || "";
            self.quality = temp[gc.t_item_color];
            self.level = temp[gc.t_item_level];
            self.itemLvl = temp[gc.t_item_itemLvl];
            self.vip = temp[gc.t_item_vip];
            //self.maxGet = temp[uw.t_item_maxGet];
            self.bagTag = temp[gc.t_item_bagTag];//设置分类用的值

        }

        isEquip():boolean{
            return this.type == gc.c_prop.itemTypeKey.equip;
        }

        _changeCount(num = 0){
            var self = this;
            var count = self.count;
            count += num;
            count = count < 0? 0: count;
            self.count = count;

            // 通知监听器
            self.pushNotify(self.__class.ON_COUNT_CHANGED, count);
        }

        addCount(num = 1){
            var self = this;
            self._changeCount(num);
            // 更新单例数据
            //gd.userCtrl.addItem(self.tempId, num);
        }

        setCount(num){
            this.count = num;
            this._changeCount();
        }

        getTempValue (key){
            return this._temp[key];
        }

        getLogicTempValue(key){
            //var logicTemp = mo.getJSONWithFileNameAndID(uw.cfg_t_itemLogic, this.tempId);
            //return logicTemp[key];
        }

        /**
         * 返回物品可兑现的专属经验
         * @returns {*}
         */
        getExclusiveExp(){
            return this.exclusiveExp;
        }

        //已达使用等级
        isReachedUseLvl(){
            return gd.userCtrl.getLvl() >= this.level? 1 : 0;
        }

        //开启不需要消耗
        isOpenNoCost(){
            var t_itemLogic = mo.getJSONWithFileNameAndID(gc.cfg_t_itemLogic, this.tempId);
            if(!t_itemLogic) return 1;
            return t_itemLogic[gc.t_itemLogic_needItems] != null? 0 : 1;
        }
        //获取物品类型权重
        getItemTypeWeight(){
            var cfg = gd.BagDataCtrl.ITEM_TYPE_SORT_CFG;
            if(!cfg) {
                cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.initCfg)[7].split(',');
                for(var i = 0, li = cfg.length; i < li; i++){
                    cfg[i] = parseInt(cfg[i]);
                }
                gd.BagDataCtrl.ITEM_TYPE_SORT_CFG = cfg;
            }
            var idx = cfg.indexOf(this.type);
            return idx >= 0? (cfg.length - idx) : idx;
        }


        static getSortOpt(type):any{
            return sortOptMap[type];
        }
        static getFilterOpt(type):any{
            return filterOptionMap[type];
        }
        static getList(filterOpt?:any, sortOpt?:any):BagDataCtrl[]{
            var items = gd.userCtrl.getBag();
            // 进行物品堆叠
            var results = this.pileItems(items);

            if(filterOpt) results = results.filter(filterOpt);
            if(sortOpt) results = results.sort(sortOpt);
            return results;
        }

        //根据职业，类型获取未穿戴的装备
        static getEquipList(equipArr):BagDataCtrl[]{
            var equipBag = gd.userCtrl.getEquipBag();
            var results = [];
            var equipData, itemCtrl;
            var itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            for(var i = 0, li = equipArr.length; i < li; i++){
                var equipId = equipArr[i];
                var equipData = equipBag[equipId];
                var tempId = equipData[0];
                var islock = 0;
                if(equipData[6] == undefined){
                    var itemInfo = itemEquip[tempId];
                    if(itemInfo && itemInfo[gc.t_itemEquip_isLocked]){
                        islock = itemInfo[gc.t_itemEquip_isLocked];
                    }
                }else{
                    islock = equipData[6];
                }
                itemCtrl = gd.BagDataCtrl.create(tempId, equipId,islock);
                results.push(itemCtrl);
            }
            results.sort(gd.BagDataCtrl.getSortOpt(1));
            return results;
        }

        //根据职业，类型获取未穿戴, 未上锁的装备
        static getEquipListUnlocked(equipArr):BagDataCtrl[]{
            var equipBag = gd.userCtrl.getEquipBag();
            var results = [];
            var equipData, itemCtrl;
            var itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            for(var i = 0, li = equipArr.length; i < li; i++){
                var equipId = equipArr[i];
                var equipData = equipBag[equipId];
                var tempId = equipData[0];
                var islock = 0;
                if(equipData[6] == undefined){
                    var itemInfo = itemEquip[tempId];
                    if(itemInfo && itemInfo[gc.t_itemEquip_isLocked]){
                        islock = itemInfo[gc.t_itemEquip_isLocked];
                    }
                }else{
                    islock = equipData[6];
                }
                if(!islock){
                    itemCtrl = gd.BagDataCtrl.create(tempId, equipId,islock);
                    results.push(itemCtrl);
                }
            }
            return results;
        }

        static getEquipSalesInfo():any{
            var obj = {1:[],2:[],3:[],4:[],5:[],'below':[]};
            obj['below'] = [];
            var equipIds = gd.equipCtrl.getEquipList();
            var equipBag = gd.userCtrl.getEquipBag();
            var sellitem = mo.getJSONWithFileName(gc.cfg_t_sellItem);
            var itemEquip = mo.getJSONWithFileName(gc.cfg_t_itemEquip);
            for(var i = 0, li = equipIds.length; i < li; i++){
                var equipId = equipIds[i];
                var equipData = equipBag[equipId];
                var tempId = equipData[0];
                var islock = 0;
                if(equipData[6] == undefined){
                    var itemInfo = itemEquip[tempId];
                    if(itemInfo && itemInfo[gc.t_itemEquip_isLocked]){
                        islock = itemInfo[gc.t_itemEquip_isLocked];
                    }
                }else{
                    islock = equipData[6];
                }
                if(islock)continue;
                var itemCtrl = gd.BagDataCtrl.create(tempId, equipId,islock);

                var color = itemCtrl.quality;
                var arr = obj[color];
                if(!arr){
                    arr = [itemCtrl];
                    obj[color] = arr;
                }else{
                    arr.push(itemCtrl);
                }

                if(itemCtrl.level <= gd.userCtrl.getLvl()-30){
                    obj['below'].push(itemCtrl);
                }

                if(sellitem[tempId]){
                    itemCtrl.rewards = sellitem[tempId][gc.t_sellItem_items];
                }
            }

            return obj;
        }
        /**
         * 进行物品堆叠
         * @param items
         * @returns {Array}
         */
        static pileItems(items):BagDataCtrl[]{
            var results = [];
            var t_item = mo.getJSONWithFileName(gc.cfg_t_item);
            for (var itemId in items) {
                var count = items[itemId];
                var temp = t_item[itemId];
                var maxRepeat = temp[gc.t_item_count], maxRepeatGroup, itemCtrl;
                maxRepeat = (maxRepeat == null)? 1 : maxRepeat;//没填表示1
                if (maxRepeat != 0) {//有限制最大堆叠数量
                    maxRepeatGroup = Math.floor(count / maxRepeat);
                    for (var i = 0; i < maxRepeatGroup; i++) {
                        itemCtrl = gd.BagDataCtrl.create(itemId, maxRepeat);
                        results.push(itemCtrl);
                        count -= maxRepeat;
                    }
                }
                if (count > 0) {
                    itemCtrl = gd.BagDataCtrl.create(itemId, count);
                    results.push(itemCtrl);
                }
            }
            return results;
        }
    }
}