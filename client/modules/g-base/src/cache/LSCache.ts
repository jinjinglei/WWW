/**
 * Created by lihex on 11/22/15.
 */

module g_consts {
    export var GUIDE_LCK = {
        eqpChged: "eqpChged",
        hasSmelting: "hasSmelting",
        buyEquip: "buyEquip",
        everEquiped: "everEquiped",
        popBindPhoneAfterPay: "popBindAfterPay" //第一次支付成功后弹出绑定提示弹窗
    }
}

module g_cache{
    var _cachedMap = {};
    export function setLocalStorageItem(key, v, opt?){
        if(_cachedMap[key] == v) return;
        _cachedMap[key] = v;
        return mo.setLocalStorageItem(key, v, opt);
    }
    export function getLocalStorageItem(key, opt?){
        if(_cachedMap.hasOwnProperty(key)) return _cachedMap[key];
        return mo.getLocalStorageItem(key, opt);
    }

    export function clearGuideKeyCache(){
        for(var key in g_consts.GUIDE_LCK){
            delete _cachedMap[key];
            mo.removeLocalStorageItem(key, false);
        }
    }

    export function initGuideKeyCache(){
        for(var key in g_consts.GUIDE_LCK){
            _cachedMap[key] = getLocalStorageItem(key);
        }
    }

    export function recordGuideDone(key){
        var flag = getLocalStorageItem(key);
        if(!flag) setLocalStorageItem(key, true);
    }
}