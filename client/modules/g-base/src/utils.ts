/**
 * Created by lihex on 9/21/15.
 */
module utils{

    /**
     * {itemId:count} -> [key, value]
     * @param obj
     * @returns {any[]}
     */
    export function obj2KVArr(obj){
        var key = Object.keys(obj)[0];
        var value = obj[key];
        return [key, value];
    }

    /**
     * {itemId:count, ...} -> [{itemId:itemId, count: count}, {}...]
     * @param obj
     * @returns {Array}
     */
    export function itemObj2ObjArr(obj){
        var arr = [];
        for(var key in obj){
            arr.push({
                itemId: key,
                count: obj[key]
            });
        }
        return arr;
    }

    /**
     * [{itemId:count},{}, ...} -> [{itemId:itemId, count: count}, {}...]
     * @param objArr
     * @returns {Array}
     */
    export function itemObjArr2ObjArr(objArr){
        var arr = [];
        for(var i = 0, li = objArr.length; i < li; i++){
            var k = Object.keys(objArr[i])[0];
            var v = objArr[i][k];
            arr.push({
                itemId: k,
                count: v
            })
        }
        return arr;
    }

    /**
     * 数组转OBJ
     * eg.[[属性KEY1，属性值1], [属性KEY2，属性值2]] => {属性KEY1 : 属性值1, ..}
     * @param kvArr
     * @returns {any|{}}
     */
    export function kvArr2KvObj(kvArr){
        var kvData, kvMap = {};
        for(var i = 0, li = kvArr.length; i < li; i++){
            kvData = kvArr[i];
            var key = kvData[0];
            var value = kvData[1];
            kvMap[key] = value;
        }
        return kvMap;
    }

    /**
     * 物品数组转换成对象数组
     * eg. [[itemId, 数量], [itemId, 数量], ...] => [{itemId:itemId, count: count}, {}...]
     * @param kvArr
     */
    export function kvArrItems2ObjArr(kvArr){
        var retArr = [];
        for(var i = 0, li = kvArr.length; i < li; i++){
            var d = kvArr[i];
            retArr.push({itemId: d[0], count: d[1]});
        }
        return retArr;
    }

    /**
     * 获取随机名字
     */
    export function getRandomName(sex):string {
        var nameData = mo.getJSONWithFileName(gc.cfg_c_nameData);
        var len = Object.keys(nameData).length;

        var firstRandomNumber = 0 | Math.random() * len || 1;

        var firstName = nameData[firstRandomNumber][gc.c_nameData_firstName];
        var secondName = "";
        var secondRandomNumber = 0 | Math.random() * len || 1;
        if(sex==gc.c_prop.sexKey.male){
            secondName =  nameData[secondRandomNumber][gc.c_nameData_maleName];
        }else{
            secondName =  nameData[secondRandomNumber][gc.c_nameData_femaleName];
        }

        return firstName + secondName || "张德帅";
    }


    export function filterName(name,sex){
        if(!name) return utils.getRandomName(sex);

        name = name + "";
        var filterArr = ["1758", "68wan", "猎豹"];

        var flag = false;
        for (var i = 0; i < filterArr.length; i++) {
            var f = filterArr[i];
            if(name.indexOf(f) != -1) {
                flag = true;
            }
        }

        if(isNaN(name) && !flag) return name;
        return utils.getRandomName(sex);
    }


    //已万为单位来格式化数字
    export function formatByWan(hp, fix=1){
        //亿 万亿 兆 万兆
        var unit = ["万","亿", "兆", "万兆","亿兆"];
        var powArrs = [4,8,12,16,20];
        for(var i = powArrs.length -1; i >= 0; i--){
            var n = Math.pow(10, powArrs[i]);
            if(hp >= n){
                return (hp/n).toFixed(fix) + unit[i];
            }
        }
        if(fix==0) return hp.toFixed(fix);
        return hp.toString();
    }

    //已万为单位来格式化数字
    export function formatByWan2(num) {
        var leftNum = num;
        var yiNum = leftNum / Math.pow(10, 8) >> 0;
        leftNum -= Math.pow(10, 8) * yiNum;
        var wanNum = leftNum / Math.pow(10, 4) >> 0;
        leftNum -= Math.pow(10, 4) * wanNum;
        var str = "";
        if (yiNum > 0) {
            str += yiNum + "亿";
            if (wanNum > 0) {
                str += wanNum + "万";
            }
        } else if (wanNum > 0) {
            str += wanNum + "万";
            if (leftNum > 0) {
                str += leftNum;
            }
        } else {
            str += leftNum;
        }
        return str;
    }

    /**
     * 将小时转化为x天x小时
     * @param hours
     * @returns {string}
     */
    export function formatHour(hours){
        var d = Math.floor(hours/24);
        var h = hours%24;
        return (d>0? d+"天" : "") + (h>1/60? h.toFixed(2)+"小时" : "1分钟内");
    }

    //货币类型转换成对应itemId
    export function getCurrencyTypeItemId(currencyType){
        var itemId;
        switch (currencyType){
            case gc.c_prop.currencyTypeKey.gold:
                itemId = gc.c_prop.spItemIdKey.gold;
                break;
            case gc.c_prop.currencyTypeKey.diamond:
                itemId = gc.c_prop.spItemIdKey.diamond;
                break;
            case gc.c_prop.currencyTypeKey.honor:
                itemId = gc.c_prop.spItemIdKey.honor;
                break;
            case gc.c_prop.currencyTypeKey.prestige:
                itemId = gc.c_prop.spItemIdKey.honor;
                break;
        }
        return itemId;
    }
}