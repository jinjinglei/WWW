module resHelper{
    var armPathTemp = "arm_%s.%s";
    var rechargePathTemp = "recharge_%s.%s";
    export var dynamicTemp = "dynamic2/%s_%s.%s";
    var resourceDynamicTemp = "resource/dynamic2/%s_%s.%s";
    var audioTemp = "audio/%s.mp3";
    var fill = "00000";

    var smallPathTemp:string = "resource/ui2/ui_activity/%s.png";

    /**
     * 动态资源模块映射
     */
    export var dynamic = {
        role : "role",
        hero : "role",
        monster : "role",
        effect : "effect",
        ui : "ui",
        fight : "fight",
        map : "map",
        skill : "skill",
        task : "task",
        item : "item",
        gift : "gift",
        gift_skill : "gift_skill",
        gift_img : "gift_img",
        vip : "vip",
        death : "death",
        buff : "buff",
        icon:"icon",
        event: "event",
        head: "head",
        wing: "wing",
        clothes: "ui_clothes",
        weapon: "ui_weapon",
        ui_wing: "ui_wing",
        recharge:"recharge",
        ui_gboss:"ui_gboss",
        ui_heart:"ui_heart",
        medal:"medal",
        title:"title"
    };
    /**
     * 获取资源名称
     * @param pre
     * @param resId
     * @param post
     * @returns {string}
     */
    export function getResName(pre, resId, post?):string{
        return pre + "_" + mo.STR.fill(resId, "00000") + (post ? "_" + post : "");
    }

    /**
     * 获取动态资源路径
     * @param pre
     * @param resId
     * @param {String|Null} extname
     * @returns {string}
     */
    export function getDynamicResPath(pre, resId, extname, post?):string{
        if(extname){
            extname = extname.substring(0, 1) == "." ? extname.substring(1) : extname;
        }else{
            extname = "png";
        }
        return mo.STR.format(dynamicTemp, pre, mo.STR.fill(resId, fill) + (post ? ("_" + post) : ""), extname);
    }
    export function getResourceDynamicResPath(pre, resId, extname, post?):string{
        if(extname){
            extname = extname.substring(0, 1) == "." ? extname.substring(1) : extname;
        }else{
            extname = "png";
        }
        return mo.STR.format(resourceDynamicTemp, pre, mo.STR.fill(resId, fill) + (post ? ("_" + post) : ""), extname);
    }
    /**
     * 获取动态cca路径配置
     * @param pre
     * @param resId
     * @returns {{png: string, plist: string, exportJson: string}}
     */
    export function getCcaRes(pre, resId):any{
        //例如 ui/ui_00001
        var str = pre + "/" + pre + "_" + mo.STR.fill(resId, "00000");
        return {
            png : mo.STR.format(armPathTemp, str + "_texture", "png"),
            plist : mo.STR.format(armPathTemp, str + "_texture", "json"),
            exportJson : mo.STR.format(armPathTemp, str + "_ske", "json")
        }
    }
    /**
     * 根据cca名称获取到cca的路径配置。
     * @param name
     * @returns {{png: string, plist: string, exportJson: string}}
     */
    export function getCcaResByName(name):any{
        var arr = name.split("_");
        return getCcaRes(arr[0], arr[1]);
    }
    /**
     * 获取buff的cca名称
     * @param resId
     * @returns {string}
     */
    export function getBuffCcaName(resId):string{
        return resHelper.getResName(resHelper.dynamic.buff, resId);
    }
    /**
     * 获取buff的cca的路径配置
     * @param resId
     * @returns {{png: string, plist: string, exportJson: string}}
     */
    export function getBuffCcaRes(resId){
        return resHelper.getCcaRes(resHelper.dynamic.buff, resId);
    }
    /**
     * 获取技能特效的cca名称
     * @param resId
     * @returns {string}
     */
    export function getSkillEffectCcaName(resId):string{
        return resHelper.getResName(resHelper.dynamic.effect, resId);
    }
    /**
     * 获取受击特效的cca的路径配置
     * @param resId
     * @returns {{png: string, plist: string, exportJson: string}}
     */
    export function getSkillEffectCcaRes(resId):string{
        return resHelper.getCcaRes(resHelper.dynamic.effect, resId);
    }

    export function getEffectPath(resId, extname):string{
        return resHelper.getResourceDynamicResPath(resHelper.dynamic.effect, resId, extname);
    }

    export function getRechargeIconPath(resId):string{
        return resHelper.getDynamicResPath(resHelper.dynamic.recharge, resId, "png");
    }
    export function getHeroClothesIconPath(displayId){
        return mo.STR.format(dynamicTemp, resHelper.dynamic.clothes, mo.STR.fill(displayId, "00000"), "png");
    }
    export function getHeroWeaponIconPath(displayId){
        return mo.STR.format(dynamicTemp, resHelper.dynamic.weapon, mo.STR.fill(displayId, "00000"), "png");
    }
    export function getHeroWingIconPath(displayId){
        return mo.STR.format(dynamicTemp, resHelper.dynamic.ui_wing, mo.STR.fill(displayId, "00000"), "png");
    }
    export function getBuffIconPath(buffId){
        var showId;
        var t_buff = mo.getJSONWithFileNameAndID(gc.cfg_t_otherBuff,buffId);
        if(t_buff) {
            showId = t_buff[gc.t_otherBuff_icon];
        }
        if(!showId) showId = buffId;

        return mo.STR.format(dynamicTemp, resHelper.dynamic.buff, mo.STR.fill(showId, "00000"), "png");
    }


    /**
     * 获取角色（英雄和怪物）的icon
     * @param resId
     * @returns {string}
     */
    export function getRoleIconPath(resId):string{
        return mo.STR.format(armPathTemp, "role/role_" + mo.STR.fill(resId, "00000") + "_ico", "png");
    }
    /**
     * 获取角色（英雄和怪物）半身像路径
     * @param resId
     * @returns {string}
     */
    export function getRoleBodyPath(resId):string{
        return mo.STR.format(armPathTemp, "role/role_" + mo.STR.fill(resId, "00000") + "_body", "png");
    }
    export function getSpecialIconPath(itemId):string{
        return 'ico_item_' + mo.STR.fill(itemId, '00000');
    }
    /**
     * 获取ui图标资源
     * @param tempId
     * @returns {*}
     */
    export function getUIIconPath(tempId):string{
        return 'ico_item_' + mo.STR.fill(tempId, '00000');
    }
    /**
     * 获取战斗场景背景资源路径
     * @param resId
     * @returns {string}
     */
    export function getFightBgPath(resId):string{
        resId = resId + "";
        if(resId.substring(0, 1) == "-") resId = resId.substring(1);
        return resHelper.getDynamicResPath(resHelper.dynamic.fight, resId, "jpg");
    }
    /**
     * 获取副本地图的json文件的路径
     * @param resId
     * @returns {string}
     */
    export function getMapJsonPath(resId){
        return resHelper.getDynamicResPath(resHelper.dynamic.map, resId, "json");
    }
    /**
     * 获取技能图标的资源路径
     * @param resId
     * @returns {string}
     */
    export function getSkillIconPath(resId):string{
        return resHelper.getDynamicResPath(resHelper.dynamic.skill, resId, "png");
    }
    /**
     * 获取VIP图标的资源路径
     * @param rechargeId
     * @returns {string}
     */
    export function getVipIconPath(rechargeId):string{
        return resHelper.getDynamicResPath(resHelper.dynamic.vip, rechargeId, "png");
    }
    /**
     * 获取ui的音效路径。
     * @param {String|Number} resId
     * @returns {String}
     */
    export function getUIAudioPath(resId):string{
        return path.join("audio/" + resHelper.getResName(resHelper.dynamic.ui, resId) + ".mp3");
    }
    export function getEventIconPath(iconId):string{
        return resHelper.getDynamicResPath(resHelper.dynamic.event, iconId, "png");
    }

    export function getArmPath(pre:string, resId:any):string{
        return mo.STR.format(armPathTemp, pre + "/" + pre + "_" + mo.STR.fill(resId, "00000"), "arm");
    }

    export function getBorderByQuality(type:number, quality:number):string{
        quality = quality || 1;//默认给1
        return (type == 1 ? 'border_' : 'border_2_') + quality;
    }

    /**
     * 获取物品icon。注意，英雄碎片，获取到的为对应的英雄的头像icon。
     * @param itemId
     * @returns {string}
     */
    export function getItemIconPath(itemId):string{
        var itemTmp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
        var resId = itemTmp[gc.t_item_iconId] || itemId;
        //var resId = 99999;
        if(isNaN(parseInt(resId))){
            return mo.STR.format(dynamicTemp, resHelper.dynamic.item, resId, "png");
        }else{
            return mo.STR.format(dynamicTemp, resHelper.dynamic.item, mo.STR.fill(resId, "000000"), "png");
        }
    }

    export function getGiftIcon(itemId):string{
        var itemTmp = mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, itemId);
        var resId = itemTmp[gc.t_talisman_imgId] || itemId;
        if(isNaN(parseInt(resId))){
            return mo.STR.format(dynamicTemp, resHelper.dynamic.gift_img, resId, "png");
        }else{
            return mo.STR.format(dynamicTemp, resHelper.dynamic.gift_img, mo.STR.fill(resId, "000000"), "png");
        }
    }
    export function getGiftIconWordPath(itemId):string{
        var itemTmp = mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, itemId);
        var resId = itemTmp[gc.t_talisman_iconId] || itemId;
        if(isNaN(parseInt(resId))){
            return mo.STR.format(dynamicTemp, resHelper.dynamic.gift, resId, "png");
        }else{
            return mo.STR.format(dynamicTemp, resHelper.dynamic.gift, mo.STR.fill(resId, "000000"), "png");
        }
    }
    export function getGiftSkillIconPath(skillId):string{
        var itemTmp = mo.getJSONWithFileNameAndID(gc.cfg_t_talismanSkill, skillId);
        var resId = itemTmp[gc.t_talismanSkill_icon] || skillId;
        return mo.STR.format(dynamicTemp, resHelper.dynamic.gift_skill, resId, "png");
    }

    export function getMonsterHeadIconPath(monsterId):string{
        var monster = mo.getJSONWithFileNameAndID(gc.cfg_t_monster, monsterId);
        var headId = monster[gc.t_monster_displayID];
        return getDynamicResPath(resHelper.dynamic.head, headId, "png");
    }

    /**
     * 获得翅膀icon
     * @param wingId
     * @returns {string}
     */
    export function getWingIconPath(wingId):string{
        var t_wing = mo.getJSONWithFileNameAndID(gc.cfg_t_wing, wingId);
        return resHelper.getDynamicResPath(resHelper.dynamic.wing, t_wing[gc.t_wing_iconId], "png");
    }

    /**
     * 获取任务图标的资源路径
     * @param taskId
     * @returns {string}
     */
    export function getTaskIconPath(iconId){
        return resHelper.getDynamicResPath(resHelper.dynamic.task, iconId, "png");
    }

    /**
     * 获取世界Boss的资源路径
     * @param taskId
     * @returns {string}
     */
    export function getWorldBossIconPath(iconId){
        return resHelper.getDynamicResPath(resHelper.dynamic.ui_gboss, iconId, "png");
    }

    /**
     * 通过勋章物品id获取战印图标
     * @param medalId 勋章id
     */
    export function getWarPrintIconPath(medalId){
        var iconId = mo.getJSONWithFileNameAndID(gc.cfg_t_medal, medalId)[gc.t_medal_staIconId];
        return resHelper.getDynamicResPath(resHelper.dynamic.medal, iconId, "png");
    }

    /**
     * 获取在聊天界面的称号图标
     * @param medalId
     */
    export function getChatTitle(medalId){
        var iconId = mo.getJSONWithFileNameAndID(gc.cfg_t_medal, medalId)[gc.t_medal_chatIconId];
        return resHelper.getDynamicResPath(resHelper.dynamic.title, iconId, "png");
    }

    export function getHeartIconPath(heartId){
        return resHelper.getDynamicResPath(resHelper.dynamic.ui_heart, "b_"+heartId, "png");
    }
    export function getHeartTitlePath(heartId){
        return resHelper.getDynamicResPath(resHelper.dynamic.ui_heart, "t_"+heartId, "png");
    }
    export function getHeartNamePath(heartId){
        return resHelper.getDynamicResPath(resHelper.dynamic.ui_heart, "c_"+heartId, "png");
    }

    export function getSmallItemPath(itemId){
        var itemTmp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
        var resId = itemTmp[gc.t_item_iconId] || itemId;
        var numStr = resHelper.getResName("small",resId);
        var imgPath =  mo.STR.format(smallPathTemp,numStr);
        //console.log("imgPath...."+imgPath);

        return imgPath;
    }

}