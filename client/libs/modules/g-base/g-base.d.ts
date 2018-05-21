declare module gc {
    /**
     * 麻痹公式
     * @param a 自身麻痹
     * @param b 目标抗麻
     */
    function calBlock(a: number, b: number): number;
    /**
     * 购买金币钻石消耗公式
     * @param x 金币购买次数
     */
    function calBuyGoldDiamond(x: number): number;
    /**
     * 购买金币获得公式
     * @param a 金币购买次数
     * @param b 增量值
     * @param s 等级购买金币基数
     */
    function calBuyGold(a?: number, b?: number, s?: number): number;
    /**
     * 境界购买次数
     * @param x 已购买次数
     */
    function calBuyRealm(x: number): number;
    /**
     * 装备购买次数
     * @param x 已购买次数
     */
    function calBuyEquip(x: number): number;
    /**
     * 炼狱boss购买次数
     * @param x 购买次数
     */
    function calBuyBoss(x: number): number;
    /**
     * PK获得荣誉
     * @param a 胜负参数
     * @param x 历史pk值
     */
    function calPkOutHonor(a: number, x: number): number;
    /**
     * PK获得的金币
     * @param a pk值
     * @param b 对方玩家等级
     * @param x 己方红黄名参数
     * @param y 敌方红黄名参数
     */
    function calPkOutGold(a?: number, b?: number, x?: number, y?: number): number;
    /**
     * pk获得的经验
     * @param a pk值
     * @param b 对方玩家等级
     * @param c pk差异值(升级表)
     * @param x 己方红黄名参数
     * @param y 敌方红黄名参数
     */
    function calPkOutExpc(a?: number, b?: number, c?: number, x?: number, y?: number): number;
    /**
     * 装备附加概率公式
     * @param a 装备属性
     * @param c 装备属性随机倍率
     */
    function calEquipSubjoin(a: number, c: number): number;
    /**
     * 装备评分公式
     * @param a 基础评分
     * @param c 附加值
     * @param b 装备附加参数
     */
    function calEquipGrade(a?: number, c?: number, b?: number): number;
    /**
     * 熔炼获得强化石数量
     * @param a 熔炼参数
     * @param b 装备等级
     */
    function calSmeltIntensify(a?: number, b?: number): number;
    /**
     * 获得杀戮值计算
     * @param a 攻方杀戮值
     * @param b 防御方杀戮值
     */
    function calKillValue(a: number, b: number): number;
    /**
     * 随机装备升阶熔炼ID
     * @param a 模板装备ID
     */
    function calSmeltUpId(a?: number): number;
    /**
     * 随机装备熔炼ID
     * @param a 模板装备ID
     */
    function calSmeltId(a?: number): number;
    /**
     * 技能CD时间（s）
     * @param a 技能等级
     */
    function calSkillCd(a: number): number;
    /**
     * 清除CD需要消费元宝（s）
     * @param a 当前的CD时间
     */
    function calSkillDiamond(a: number): number;
    /**
     * 基础属性战斗力公式
     * @param a 血量之和
     * @param a1 血量参数
     * @param b 攻击之和
     * @param b1 攻击参数
     * @param c 物防之和
     * @param c1 物防参数
     * @param d 魔防之和
     * @param d1 魔防参数
     * @param e 暴击之和
     * @param e1 暴击参数
     * @param f 抗暴之和
     * @param f1 抗暴参数
     * @param g 闪避之和
     * @param g1 闪避参数
     * @param h 命中之和
     * @param h1 命中参数
     * @param j 攻击频率
     * @param j1 攻击频率参数
     */
    function calBaseCombat(a: number, a1: number, b: number, b1: number, c: number, c1: number, d: number, d1: number, e: number, e1: number, f: number, f1: number, g: number, g1: number, h: number, h1: number, j: number, j1: number): number;
    /**
     * 戒指战力公式
     * @param a 戒指1
     * @param b 戒指2
     * @param c 戒指3
     * @param d 戒指4
     */
    function calBreakCombat(a: number, b: number, c: number, d: number): number;
    /**
     * 技能战力公式
     * @param k 第1技能战力
     * @param k1 第1技能等级
     * @param l 第2技能战力
     * @param l1 第2技能等级
     * @param m 第3技能战力
     * @param m1 第3技能等级
     * @param n 第4技能战力
     * @param n1 第4技能等级
     * @param s 第5技能战力
     * @param s1 第5技能等级
     */
    function calSkillCombat(k: number, k1: number, l: number, l1: number, m: number, m1: number, n: number, n1: number, s: number, s1: number): number;
    /**
     * 总战力公式
     * @param a 基础属性战斗力
     * @param b 戒指战力
     * @param c 技能战力
     */
    function callCountCombat(a?: number, b?: number, c?: number): number;
    /**
     * 装备背包购买消耗公式
     * @param a 购买次数
     */
    function callBuyEquipBag(a: number): number;
    /**
     * 离线每装备转化的金币
     * @param a 当前所在的普通关卡ID
     */
    function callEquipTraGold(a: number): number;
    /**
     * 离线获得的装备数
     * @param b 离线时间
     */
    function callOfflineEquipCount(b: number): number;
    /**
     * 离线获得的金币数
     * @param a 当前所在的普通关卡获得的金币
     * @param b 领主等级
     * @param c 离线时间(秒)
     */
    function callOfflineGold(a?: number, b?: number, c?: number): number;
    /**
     * 离线获得的经验数
     * @param a 每秒获得的经验
     * @param c 离线时间(秒)
     */
    function callOfflineExp(a?: number, c?: number): number;
    /**
     * 离线获得的装备等级
     * @param a 当前所在的普通关卡ID
     */
    function callEquipLvl(a: number): number;
    /**
     * 离线获得的装备ID
     * @param a 离线掉落装备等级
     */
    function callOfflineEquipId(a: number): number;
    /**
     * 刷新商店消耗金币
     * @param a 刷新次数
     */
    function callRefreshShop(a: number): number;
    /**
     * pk消耗元宝数量
     * @param a PK购买次数
     */
    function calRefreshPKCost(a?: number): number;
    /**
     * pk杀戮值匹配
     * @param a 自己的杀戮值
     * @param b PK杀戮值取值区间值
     */
    function calPkKillCfg(a: number, b: number): number;
    /**
     * pk战力值匹配
     * @param a 自己等级
     * @param b 自身战力
     * @param c PK战力取值区间
     */
    function calPkCombatCfg(a: number, b: number, c: number): number;
    /**
     * PK值清除消耗元宝
     * @param a 当前的PK值
     */
    function calClearPkCost(a: number): number;
    /**
     * 熔炼获得货币数量
     * @param a 装备颜色参数
     * @param b 装备等级参数
     */
    function calSmeltGetCurrency(a: number, b: number): number;
    /**
     * pk红名掠夺boo令牌几率（万分率）
     * @param b 己方红名点
     */
    function calBossRate(b: number): number;
    /**
     * 公会退会次数需要CD
     * @param a 公会退会次数
     */
    function calQuitGuildCfg(a: number): number;
    /**
     * 红包公式
     * @param a 当前红包剩余总金额
     * @param b 当前剩余分配红包数
     */
    function calRedEnvelopeShareCfg(a: number, b: number): number;
    /**
     * 每日国库发放钱粮
     * @param a 当前玩家等级
     * @param b 当前金币贮藏量
     * @param c 领取金币参数1
     * @param d 领取金币参数2
     */
    function calCoffersPersonRecource(a: number, b: number, c: number, d: number): number;
    /**
     * 国库城防防守者增加血量
     * @param a 当前城防值
     * @param b 城防参数
     * @param c 当前防守者血量
     */
    function calCoffersPersonHp(a: number, b: number, c: number): number;
    /**
     * 国库城防显示增加血量百分比
     * @param a 当前城防值
     * @param b 城防参数
     */
    function calCoffersAllHp(a: number, b: number): number;
    /**
     * 离线获得的铜宝箱数量
     * @param b 离线分钟
     */
    function calCuChests(b: number): number;
    /**
     * 离线获得的银宝箱数量
     * @param b 离线分钟
     */
    function calAgChests(b: number): number;
    /**
     * 离线获得的金宝箱数量
     * @param b 离线分钟
     */
    function calAuChests(b: number): number;
    /**
     * 国库掠夺金币公式
     * @param a 伤害量计算获得金币
     * @param b 国库当前金币
     * @param c 被击破守卫人数
     */
    function calCoffersLoot(a: number, b: number, c: number): number;
    /**
     * 行会副本秒CD花费
     * @param a 当前剩余秒数
     */
    function calGuildCopyCd(a: number): number;
    /**
     * 跨服战进攻秒CD花费
     * @param a 购买次数
     */
    function calClearGuildWarCd(a: number): number;
    /**
     * 跨服个人鼓舞花费元宝
     * @param a 鼓舞次数
     */
    function calInspireGuildWar(a: number): number;
    /**
     * 隐姓埋名元宝消耗
     * @param a 购买次数
     */
    function calIncognito(a: number): number;
    /**
     * 高级密探元宝消耗
     * @param a 购买次数
     */
    function calSpies(a: number): number;
    /**
     * 爬塔宝库购买抽奖消耗
     * @param a 购买次数
     * @param b 当前塔层数
     */
    function calPaTaAward(a: number, b: number): number;
    /**
     * 随机宝箱开出等级
     * @param a 人物等级
     */
    function calEquipLvlCfg(a: number): number;
    /**
     * 法宝洗资质成功概率
     * @param a 当前资质
     * @param b 上限资质
     */
    function calTrumpPro(a: number, b?: number): number;
    /**
     * 法宝资质增加
     * @param a 当前资质
     * @param b 上限资质
     */
    function calTrumpAdd(a: number, b: number): number;
    /**
     * 法宝资质减少
     * @param a 当前资质
     * @param b 上限资质
     */
    function calTrumpSub(a: number, b: number): number;
    /**
     * 清除BOSS CD花费
     * @param a 当前BOSS等级
     * @param b 剩余CD时间(秒)
     * @param c 今日召唤次数
     */
    function calGuildBossRepeat(a: number, b: number, c: number): number;
    /**
     * 凌云石购买价格
     * @param a 购买次数
     */
    function calBuyLingyun(a?: number): number;
    /**
     * 计算基金vip购买次数
     * @param a 人物vip等级
     * @param b vip限制等级
     */
    function calFundVipCount(a?: number, b?: number): number;
}
declare module gc.c_prop {
    var userRefreshCountKey: {
        buyGold: number;
        rePK: number;
        buyPK: number;
        bossTesseraReplace: number;
        worShip: number;
        getKingWelfare: number;
        buyPrimaryRebirth: number;
        buyMidRebirth: number;
        buyAdvancedRebirth: number;
        coffersBuild: number;
        opening: number;
        coffersAction: number;
        coffersWin: number;
        coffersBuffNum: number;
        spies: number;
        incognito: number;
        clearGuildWarCount: number;
        inspireGuildWar: number;
        enterBoss: number;
        repeatBoss: number;
        buyLingyun: number;
    };
    var userRefreshCount: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
        "16": string;
        "17": string;
        "18": string;
        "19": string;
        "20": string;
    };
    var userExDataKey: {
        guide: number;
        wipeItemNum: number;
        wipeReTime: number;
        sign: number;
        skipFightNum: number;
        replaySkipFightTime: number;
        buyGoldNum: number;
        autoFight: number;
        timeError: number;
        missEquip: number;
        todayRankWin: number;
        arenaCount: number;
        genuineQi: number;
        catNoVipChat: number;
        autoBuyLittleHorn: number;
        talismanSkill: number;
        isChangeLvl: number;
        oldLvl: number;
        oldExpc: number;
    };
    var userExData: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
        "16": string;
        "17": string;
        "18": string;
        "19": string;
    };
    var itemTypeKey: {
        logic: number;
        equip: number;
        rebirth: number;
        gold: number;
        diamond: number;
        exp: number;
        chest: number;
        break: number;
        prestige: number;
        gem: number;
        expBall: number;
        rebirthExp: number;
        custom: number;
        medal: number;
        genuineQi: number;
        gift: number;
    };
    var itemType: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
    };
    var spItemIdKey: {
        gold: number;
        diamond: number;
        timeError: number;
        wipeItem: number;
        equipTessera: number;
        realmTessera: number;
        honor: number;
        intensify: number;
        bossTessera: number;
        bossTesseraReplace: number;
        starStone: number;
        plumage: number;
        goldenKey: number;
        vitality: number;
        prestige: number;
        paralysis: number;
        revive: number;
        protect: number;
        harm: number;
        ctWeapon: number;
        ctClothes: number;
        ctHelmet: number;
        ctRing: number;
        ctBracelet: number;
        ctNecklace: number;
        lotus: number;
        genuineQi: number;
        littleHorn: number;
        silverKey: number;
        copperKey: number;
    };
    var spItemId: {
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "18": string;
        "19": string;
        "30": string;
        "45": string;
        "78": string;
        "85": string;
        "88": string;
        "89": string;
        "99": string;
        "200": string;
        "301": string;
        "1140": string;
        "1545": string;
        "1550": string;
        "1551": string;
        "1564": string;
        "25501": string;
        "71003": string;
        "700026": string;
        "700027": string;
        "700028": string;
        "700029": string;
        "700030": string;
        "700031": string;
    };
    var activityTypeKey: {
        firstRecharge: number;
        sevenLogin: number;
        limitBuy: number;
        dayChargeCount: number;
        allChargeCount: number;
        dayCostCount: number;
        allCostCount: number;
        upLvl: number;
        redeemCode: number;
        text: number;
        upVip: number;
        limitBuyRange: number;
        sign: number;
        lottery: number;
        fiveDaysTarget: number;
        singleCharge: number;
        mysterShop: number;
        challengeCup: number;
        blueNewbie: number;
        blueGrowth: number;
        blueEveryday: number;
        luckyTalos: number;
        everydayCharge: number;
        limitPanicBuying: number;
        yellowNewbie: number;
        yellowGrowth: number;
        yellowEveryday: number;
        rebate: number;
        dayRecharge: number;
        setTheWord: number;
        vPlan: number;
        sysRedredEnvelope: number;
        luckyMajong: number;
        appMysterShop: number;
        userSurvey: number;
        activityNotice: number;
        newLuckyMajong: number;
        newFourDays: number;
        newLimitPanicBuying: number;
    };
    var activityType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
        "16": string;
        "17": string;
        "18": string;
        "19": string;
        "20": string;
        "21": string;
        "22": string;
        "23": string;
        "24": string;
        "25": string;
        "26": string;
        "27": string;
        "28": string;
        "29": string;
        "30": string;
        "31": string;
        "32": string;
        "33": string;
        "34": string;
        "35": string;
        "36": string;
        "37": string;
        "38": string;
        "39": string;
    };
    var userRecordTypeKey: {
        diamondTodayCost: number;
        saveDesk: number;
        linkShare: number;
        bindPhone: number;
        downloadQQGame: number;
        follow: number;
        wanbaGift: number;
        coupon: number;
        demonLotusOpenNum: number;
        demonLotusOpenDate: number;
    };
    var userRecordType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
    };
    var mailTypeKey: {
        admin: number;
        arenaRank: number;
        saveDesk: number;
        vip: number;
        equipChest: number;
        coupon: number;
        rechargeCom: number;
        pkKill: number;
        temp1: number;
        champions: number;
        championsRank: number;
        chaampionsJoin: number;
        bonusFirstShare: number;
        bonusGift: number;
        temp5: number;
        linkShare: number;
        mysterShop: number;
        summonAward: number;
        guildAward: number;
        hurtAward: number;
        rankAward: number;
        killAward: number;
        continueChampions: number;
        redEnvelopeExpire: number;
        serverPk: number;
        blueDiamondRecharge: number;
        coffers: number;
        limitPanicBuyingAward: number;
        everydayChargeAward: number;
        kingMedal: number;
        suraMedal: number;
        bindPhone: number;
        worldBossWin: number;
        worldBossLose: number;
        worldBossLastKill: number;
        yellowDiamondRecharge: number;
        follow: number;
        downloadQQGame: number;
        coffersKill: number;
        guildBoss: number;
        guildChapter: number;
        rebate: number;
        treasureMove: number;
        treasureOpen: number;
        guildWarRank1: number;
        guildWarRank2: number;
        guildWarRank3: number;
        dayRecharge: number;
        setTheWord: number;
        vPlan: number;
        userSurvey: number;
        summonAwardLimit: number;
        guildAwardLimit: number;
        hurtAwardLimit: number;
        rankAwardLimit: number;
        killAwardLimit: number;
        impeachAll: number;
        impeachUp: number;
        impeachFall: number;
    };
    var mailType: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
        "16": string;
        "17": string;
        "18": string;
        "19": string;
        "20": string;
        "22": string;
        "23": string;
        "24": string;
        "25": string;
        "26": string;
        "27": string;
        "28": string;
        "29": string;
        "30": string;
        "31": string;
        "32": string;
        "33": string;
        "34": string;
        "35": string;
        "36": string;
        "37": string;
        "38": string;
        "39": string;
        "40": string;
        "41": string;
        "42": string;
        "43": string;
        "44": string;
        "45": string;
        "46": string;
        "47": string;
        "48": string;
        "49": string;
        "50": string;
        "51": string;
        "52": string;
        "53": string;
        "54": string;
        "55": string;
        "56": string;
        "57": string;
        "58": string;
        "59": string;
    };
    var goldCostTypeKey: {
        upSkill: number;
        strength: number;
        upStar: number;
        wingFos: number;
        fieldPk: number;
        buy: number;
        refreshShop: number;
        guildAct: number;
        stuMenCulMethods: number;
    };
    var goldCostType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
    };
    var diamondCostTypeKey: {
        buyEquipTessera: number;
        buyRealmTessera: number;
        equipCopyCount: number;
        bossCopyCount: number;
        realmCopyCount: number;
        clearSkillCd: number;
        callHero: number;
        shop: number;
        activity: number;
        refreshCD: number;
        arenaNum: number;
        wingFos: number;
        lottery: number;
        refreshEnemy: number;
        patchSign: number;
        buyBagGrid: number;
        buyGold: number;
        buyBossTessera: number;
        clearPkValue: number;
        establishGuild: number;
        guildAct: number;
        inspire: number;
        chuanChen: number;
        openBoss: number;
        redEnvelope: number;
        clearChallengeCupCd: number;
        challengeCup: number;
        clearBossCd: number;
        wingStrength: number;
        clearGuildCopy: number;
        clearGuildWarCd: number;
        spies: number;
        incognito: number;
        inspireGuildWar: number;
        fourRole: number;
        paTaAward: number;
        littleHorn: number;
        sellEquipItem: number;
        chaMenCulMethods: number;
        baptizeTrump: number;
        buyLingyun: number;
    };
    var diamondCostType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
        "16": string;
        "17": string;
        "18": string;
        "19": string;
        "20": string;
        "21": string;
        "22": string;
        "23": string;
        "24": string;
        "25": string;
        "26": string;
        "27": string;
        "28": string;
        "29": string;
        "30": string;
        "31": string;
        "32": string;
        "33": string;
        "34": string;
        "35": string;
        "36": string;
        "37": string;
        "38": string;
        "39": string;
        "40": string;
        "41": string;
    };
    var diamondGetTypeKey: {
        activity: number;
        coupon: number;
        rechargeCom: number;
        mail: number;
        recharge: number;
        task: number;
        monster: number;
        smelt: number;
        redEnvelope: number;
        openChest: number;
        kingWelfare: number;
        sellEquipItem: number;
        sellItem: number;
    };
    var diamondGetType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
    };
    var honorGetTypeKey: {
        heroNum: number;
        produceNum: number;
        goldNum: number;
        userLvl: number;
        heroType: number;
        userRank: number;
        pkWinCount: number;
        pkLoseCount: number;
        attack: number;
        defence: number;
        hp: number;
        crit: number;
        crystalId: number;
        arenaWinCount: number;
        arenaMaxConWinCount: number;
    };
    var honorGetType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
    };
    var itemGetTypeKey: {
        shop: number;
        battle: number;
        tower: number;
        event: number;
        copy: number;
    };
    var itemGetType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
    };
    var rankTypeKey: {
        lvlRank: number;
        combatRank: number;
        goldRank: number;
        wingRank: number;
        killRank: number;
        arenaRank: number;
        zsRank: number;
        fsRank: number;
        dsRank: number;
        guildRank: number;
        guildCombatRank: number;
        chairmanCombatRank: number;
        paTaRank: number;
    };
    var rankType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
    };
    var fightTypeKey: {
        pk: number;
        arena: number;
        copy: number;
        rankPk: number;
        challengeCupPk: number;
        coffers: number;
        worldBoss: number;
        coffersBoss: number;
        guildCopy: number;
        guildWar: number;
    };
    var fightType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
    };
    var shopTypeKey: {
        normal: number;
        arena: number;
        equip: number;
        gem: number;
        rebirth: number;
    };
    var shopType: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
    };
    var currencyTypeKey: {
        gold: number;
        diamond: number;
        honor: number;
        prestige: number;
    };
    var currencyType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
    };
    var copyTypeKey: {
        normal: number;
        hell: number;
        equip: number;
        state: number;
        arena: number;
        pk: number;
        vip: number;
        coffer: number;
        paTa: number;
        guild: number;
        undefined: number;
    };
    var copyType: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
    };
    var equipPropKey: {
        maxHpTemp: number;
        attackTemp: number;
        defenceTemp: number;
        magicDefenceTemp: number;
        hitTemp: number;
        dodgeTemp: number;
        criticalTemp: number;
        disCriticalTemp: number;
    };
    var equipProp: {
        "33": string;
        "34": string;
        "35": string;
        "36": string;
        "37": string;
        "38": string;
        "39": string;
        "40": string;
    };
    var heroEquipIndexKey: {
        weapon: number;
        clothes: number;
        bracelet1: number;
        ring1: number;
        paralysisRing: number;
        reviveRing: number;
        protectRing: number;
        harmRing: number;
        ring2: number;
        bracelet2: number;
        helmet: number;
        necklace: number;
    };
    var heroEquipIndex: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
    };
    var pkNameColorKey: {
        white: number;
        yellow: number;
        red: number;
    };
    var pkNameColor: {
        "1": string;
        "2": string;
        "3": string;
    };
    var equipColorKey: {
        white: number;
        green: number;
        blue: number;
        purple: number;
        orange: number;
        red: number;
    };
    var equipColor: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
    };
    var fightDataKey: {
        winStatus: number;
        reHp: number;
        maxHp: number;
    };
    var fightData: {
        "0": string;
        "1": string;
        "2": string;
    };
    var winStatusKey: {
        win: number;
        lose: number;
        bigWin: number;
    };
    var winStatus: {
        "1": string;
        "2": string;
        "3": string;
    };
    var heroPropKey: {
        maxHp: number;
        maxHpScale: number;
        attack: number;
        attackScale: number;
        defence: number;
        defenceScale: number;
        magicDefence: number;
        magicDefenceScale: number;
        hit: number;
        hitScale: number;
        dodge: number;
        dodgeScale: number;
        critical: number;
        criticalScale: number;
        disCritical: number;
        disCriticalScale: number;
        luckyValue: number;
        luckyValueScale: number;
        moveSpeed: number;
        moveSpeedScale: number;
        attackInterval: number;
        attackIntervalScale: number;
        damageIncrease: number;
        damageDecrease: number;
        benumbPro: number;
        disBenumbPro: number;
        poisoningRecoveryProb: number;
        benumbProSpan: number;
        reviveCount: number;
        reviveHPScale: number;
        maxHp2: number;
        disMaxHp2: number;
        maxHpTemp: number;
        attackTemp: number;
        defenceTemp: number;
        magicDefenceTemp: number;
        hitTemp: number;
        dodgeTemp: number;
        criticalTemp: number;
        disCriticalTemp: number;
        luckyValueTemp: number;
        moveSpeedTemp: number;
        attackIntervalTemp: number;
        damageIncreaseTemp: number;
        damageDecreaseTemp: number;
    };
    var heroProp: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
        "16": string;
        "17": string;
        "18": string;
        "19": string;
        "20": string;
        "21": string;
        "22": string;
        "23": string;
        "24": string;
        "25": string;
        "26": string;
        "27": string;
        "28": string;
        "29": string;
        "30": string;
        "31": string;
        "32": string;
        "33": string;
        "34": string;
        "35": string;
        "36": string;
        "37": string;
        "38": string;
        "39": string;
        "40": string;
        "41": string;
        "42": string;
        "43": string;
        "44": string;
        "45": string;
        "46": string;
    };
    var heroJobKey: {
        zs: number;
        fs: number;
        ds: number;
        ys: number;
    };
    var heroJob: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
    };
    var bagTypeKey: {
        equip: number;
        item: number;
        rebirth: number;
        chest: number;
        medal: number;
    };
    var bagType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
    };
    var wingFosTypeKey: {
        comFoster: number;
        advFoster: number;
    };
    var wingFosType: {
        "1": string;
        "2": string;
    };
    var arenaDataKey: {
        reNum: number;
        lastReNumTime: number;
        nextFightTime: number;
        lastResetTime: number;
    };
    var arenaData: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
    };
    var lotteryTypeKey: {
        common: number;
        advanced: number;
        supremacy: number;
    };
    var lotteryType: {
        "1": string;
        "2": string;
        "3": string;
    };
    var equipTypeKey: {
        weapon: number;
        clothes: number;
        helmet: number;
        necklace: number;
        ring: number;
        bracelet: number;
    };
    var equipType: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
    };
    var pointEffectKey: {
        activity: number;
        task: number;
        sign: number;
        bag: number;
        mail: number;
        recharge: number;
        fiveDaysTarget: number;
        chuanChen: number;
        custom: number;
        medal: number;
    };
    var pointEffect: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
    };
    var pointRedKey: {
        home_main: number;
        role_main: number;
        make_main: number;
        pkout1: number;
        arena1: number;
        role1_wing: number;
        role1_equip: number;
        role1_skill: number;
        role1_realm: number;
        role1_intensify: number;
        role1_star: number;
        role1_gem: number;
        role2_wing: number;
        role2_equip: number;
        role2_skill: number;
        role2_realm: number;
        role2_intensify: number;
        role2_star: number;
        role2_gem: number;
        role3_wing: number;
        role3_equip: number;
        role3_skill: number;
        role3_realm: number;
        role3_intensify: number;
        role3_star: number;
        role3_gem: number;
        role1_main: number;
        role2_main: number;
        role3_main: number;
        role1_dazao: number;
        role2_dazao: number;
        role3_dazao: number;
        copy_boss: number;
        rankPk: number;
        bePkKill: number;
        shopMain: number;
        fuli: number;
        lanzuan: number;
        role4_main: number;
        role4_equip: number;
        role4_skill: number;
        role1_tring: number;
        role2_tring: number;
        role3_tring: number;
        demonLotus_main: number;
        demonLotus_1: number;
        demonLotus_2: number;
        talisman_main: number;
        talisman_role1: number;
        talisman_role2: number;
        talisman_role3: number;
    };
    var pointRed: {
        "100": string;
        "101": string;
        "102": string;
        "103": string;
        "104": string;
        "105": string;
        "106": string;
        "108": string;
        "109": string;
        "110": string;
        "111": string;
        "112": string;
        "113": string;
        "114": string;
        "116": string;
        "117": string;
        "118": string;
        "119": string;
        "120": string;
        "121": string;
        "122": string;
        "124": string;
        "125": string;
        "126": string;
        "127": string;
        "128": string;
        "129": string;
        "130": string;
        "131": string;
        "132": string;
        "133": string;
        "134": string;
        "135": string;
        "136": string;
        "137": string;
        "138": string;
        "139": string;
        "140": string;
        "141": string;
        "142": string;
        "143": string;
        "144": string;
        "145": string;
        "146": string;
        "147": string;
        "148": string;
        "149": string;
        "150": string;
        "151": string;
        "152": string;
        "153": string;
    };
    var pointGreenKey: {
        home_main: number;
        copy_equip: number;
        copy_realm: number;
        copy_boss: number;
        area: number;
        role1_skill: number;
        role1_realm: number;
        role2_skill: number;
        role2_realm: number;
        role3_skill: number;
        role3_realm: number;
    };
    var pointGreen: {
        "200": string;
        "201": string;
        "202": string;
        "203": string;
        "204": string;
        "205": string;
        "206": string;
        "207": string;
        "208": string;
        "209": string;
        "210": string;
    };
    var pointDataKey: {
        copy_equip: number;
        copy_realm: number;
        copy_boss: number;
    };
    var pointData: {
        "300": string;
        "301": string;
        "302": string;
    };
    var cTaskTypeKey: {
        personLvl: number;
        skillLvl: number;
        equipStrength: number;
        equipUpStar: number;
        closeTollGate: number;
        gemUp: number;
        equipSmelt: number;
        clearHero: number;
        heroGem: number;
        equipCopy: number;
        combat: number;
        encounter: number;
        hell: number;
        state: number;
        shopBuy: number;
        wingTrain: number;
        rankFighting: number;
        chat: number;
        treasure: number;
        wing: number;
        guild: number;
        guildCopy: number;
        paTaLottery: number;
        heartStunt: number;
    };
    var cTaskType: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
        "14": string;
        "15": string;
        "16": string;
        "17": string;
        "18": string;
        "19": string;
        "20": string;
        "21": string;
        "22": string;
        "23": string;
    };
    var chatTypeKey: {
        sys: number;
        user: number;
        lottery: number;
        guildLottery: number;
        guild: number;
    };
    var chatType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
    };
    var sexKey: {
        male: number;
        female: number;
    };
    var sex: {
        "0": string;
        "1": string;
    };
    var receiverKey: {
        chat: string;
        task: string;
        point: string;
        pkDeal: string;
    };
    var receiver: {
        r1: string;
        r2: string;
        r3: string;
        r4: string;
    };
    var roleIconKey: {
        zs_nan: number;
        zs_nv: number;
        fs_nan: number;
        fs_nv: number;
        ds_nan: number;
        ds_nv: number;
    };
    var roleIcon: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
    };
    var guildPostKey: {
        chairman: number;
        viceChairman: number;
        rankFile: number;
    };
    var guildPost: {
        "1": string;
        "2": string;
        "3": string;
    };
    var guildJoinConKey: {
        can: number;
        verify: number;
        cannot: number;
    };
    var guildJoinCon: {
        "1": string;
        "2": string;
        "3": string;
    };
    var guildMemberOpKey: {
        trans: number;
        kick: number;
        release: number;
        increase: number;
        quitGuild: number;
        dissolveGuild: number;
    };
    var guildMemberOp: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
    };
    var ennobleTypeKey: {
        civilian: number;
        ennoble1: number;
        ennoble2: number;
        ennoble3: number;
        ennoble4: number;
        ennoble5: number;
        ennoble6: number;
        ennoble7: number;
        ennoble8: number;
        ennoble9: number;
        ennoble10: number;
        ennoble11: number;
        ennoble12: number;
    };
    var ennobleType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
        "13": string;
    };
    var bossAwardTypeKey: {
        summonAward: number;
        guildAward: number;
        hurtAward: number;
        rankAward1: number;
        rankAward2: number;
        rankAward3: number;
        lastShotAward: number;
    };
    var bossAwardType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
    };
    var biLogTypeKey: {
        boss: number;
        realm: number;
        upStarStone: number;
        wing: number;
        mysterShop: number;
        lottery: number;
        callBoss: number;
    };
    var biLogType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
    };
    var upStarWayKey: {
        pkAward: number;
        mail: number;
        activity: number;
    };
    var upStarWay: {
        "1": string;
        "2": string;
        "3": string;
    };
    var redEnvelopeTypeKey: {
        comRed: number;
        guildRed: number;
        sysComRed: number;
        sysGuildRed: number;
    };
    var redEnvelopeType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
    };
    var wbossRewardDesKey: {
        diamond: number;
        equip: number;
        treasure: number;
        gas: number;
        goods: number;
        talisman: number;
        undefined: number;
    };
    var wbossRewardDes: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
        "12": string;
    };
    var otherBuffIdKey: {
        boss: number;
        king: number;
        week: number;
        month: number;
        inspireGuildWar: number;
    };
    var otherBuffId: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
    };
    var offersDoorKey: {
        qinglong: number;
        baihu: number;
        xuanwu: number;
        zhuque: number;
    };
    var offersDoor: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
    };
    var coffersRankTypeKey: {
        king: number;
        pk: number;
        arena: number;
        combat: number;
    };
    var coffersRankType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
    };
    var activityBgTypeKey: {
        newYear: number;
    };
    var activityBgType: {
        "1": string;
    };
    var noticeIconTypeKey: {
        notice: number;
        activity: number;
        logon: number;
        crossClo: number;
    };
    var noticeIconType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
    };
    var wingStrengthKey: {
        left: number;
        right: number;
    };
    var wingStrength: {
        "1": string;
        "2": string;
    };
    var activityExDataTypeKey: {
        titleIcon: number;
        desIcon: number;
        spItemId: number;
        bgIcon: number;
        subType: number;
        freeDay: number;
        totalDay: number;
        minLvl: number;
        maxLvl: number;
        vipLimitLvl: number;
        funcName: number;
    };
    var activityExDataType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
        "7": string;
        "8": string;
        "9": string;
        "10": string;
        "11": string;
    };
    var worldBossTypeKey: {
        guild: number;
        world: number;
    };
    var worldBossType: {};
    var propertyDataKey: {
        dlTreasure: number;
        heartStunt: number;
    };
    var propertyData: {
        "1": string;
        "2": string;
    };
    var guildCopyKey: {
        boss: number;
        chapter: number;
    };
    var guildCopy: {
        "1": string;
        "2": string;
    };
    var guildGroupKey: {
        diamond: number;
        wGold: number;
        hGold: number;
        silver: number;
        copper: number;
    };
    var guildGroup: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
    };
    var guildWarDoorKey: {
        dong: number;
        nan: number;
        xi: number;
        bei: number;
    };
    var guildWarDoor: {
        "0": string;
        "1": string;
        "2": string;
        "3": string;
    };
    var serverArrTypeKey: {
        littleHorn: number;
    };
    var serverArrType: {
        "1": string;
    };
    var accountExDataKey: {
        lastLoginServer: number;
    };
    var accountExData: {
        "1": string;
    };
    var treasureRecordTypeKey: {
        getTreasure: number;
        pkTreasure: number;
        openTreasure: number;
        compose: number;
    };
    var treasureRecordType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
    };
    var extraInfuseTypeKey: {
        genuineQi: number;
        diamond: number;
    };
    var extraInfuseType: {
        "1": string;
        "2": string;
    };
    var chestTypeKey: {
        equipLvl: number;
    };
    var chestType: {
        "5": string;
    };
    var practiceTypeKey: {
        medal: number;
        heart: number;
        gift: number;
    };
    var practiceType: {
        "0": string;
        "1": string;
        "2": string;
    };
    var talismanSkillTypeKey: {
        property: number;
        cure: number;
        exp: number;
        genuineQi: number;
        callBoss: number;
        replaceSkill: number;
    };
    var talismanSkillType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
        "5": string;
        "6": string;
    };
    var outActivityTypeKey: {
        outType1: number;
        outType2: number;
        outType3: number;
    };
    var outActivityType: {
        "1": string;
        "2": string;
        "3": string;
    };
    var userSurveyTypeKey: {
        radio: number;
        checkbox: number;
    };
    var userSurveyType: {
        "1": string;
        "2": string;
    };
    var newFourDaysTypeKey: {
        wingRank: number;
        gemRank: number;
        realmRank: number;
        combatRank: number;
    };
    var newFourDaysType: {
        "1": string;
        "2": string;
        "3": string;
        "4": string;
    };
}
declare module gc {
    var cfg_c_game: string;
    var c_game_id: string;
    var c_game_key: string;
    var c_game_func: string;
    var c_game_memo: string;
    var c_game_param0: string;
    var c_game_param1: string;
    var c_game_param2: string;
    var c_game_param3: string;
    var c_game_param4: string;
    var c_game_param5: string;
    var c_game_param6: string;
    var c_game_param7: string;
    var c_game_param8: string;
    var c_game_param9: string;
    var c_game_param10: string;
    var c_game_param11: string;
    var c_game_param12: string;
    var c_game_param13: string;
    var c_game_param14: string;
    var c_game_param15: string;
    var c_game_param16: string;
    var c_game_param17: string;
    var c_game_param18: string;
    var c_game_param19: string;
    var c_game_param20: string;
    var c_game_param21: string;
    var c_game_param22: string;
    var c_game_param23: string;
    var c_game_param24: string;
    var c_game_param25: string;
    var c_game_param26: string;
    var cfg_c_lvl: string;
    var c_lvl_lvl: string;
    var c_lvl_name: string;
    var c_lvl_minExp: string;
    var c_lvl_reqExp: string;
    var c_lvl_slotStrength: string;
    var c_lvl_slotLevelup: string;
    var c_lvl_upSkillLevel: string;
    var c_lvl_maxHp: string;
    var c_lvl_attack: string;
    var c_lvl_defence: string;
    var c_lvl_magicDefence: string;
    var c_lvl_hit: string;
    var c_lvl_dodge: string;
    var c_lvl_critical: string;
    var c_lvl_disCritical: string;
    var c_lvl_maxHp2: string;
    var c_lvl_attack2: string;
    var c_lvl_defence2: string;
    var c_lvl_magicDefence2: string;
    var c_lvl_hit2: string;
    var c_lvl_dodge2: string;
    var c_lvl_critical2: string;
    var c_lvl_disCritical2: string;
    var c_lvl_minPKLvl: string;
    var c_lvl_maxPKLvl: string;
    var c_lvl_minRobotLvl: string;
    var c_lvl_maxRobotLvl: string;
    var c_lvl_robotRate: string;
    var c_lvl_pkExpcMult: string;
    var c_lvl_robotRange: string;
    var c_lvl_equipStrengthNum: string;
    var c_lvl_equipStrengthGold: string;
    var c_lvl_equipStrengthGoldAdd: string;
    var c_lvl_buyGoldMult: string;
    var c_lvl_buyGoldRate: string;
    var c_lvl_skillNeedGold: string;
    var c_lvl_guildExp: string;
    var c_lvl_guildMan: string;
    var c_lvl_postCount: string;
    var c_lvl_rankFileNeedAct: string;
    var c_lvl_ennobleCon: string;
    var c_lvl_upStarNum: string;
    var c_lvl_upStarGold: string;
    var c_lvl_upStarPropAdd: string;
    var c_lvl_upStarTop: string;
    var c_lvl_maxUpStarLvl: string;
    var c_lvl_topCosNum: string;
    var c_lvl_topCosGold: string;
    var c_lvl_succeedPro: string;
    var c_lvl_propertys: string;
    var c_lvl_ringSlotLevelupReqItemCount: string;
    var c_lvl_lotusLvl: string;
    var c_lvl_upLotusNum: string;
    var c_lvl_expOutput: string;
    var c_lvl_storeLimit: string;
    var c_lvl_needLvl: string;
    var c_lvl_openingExp: string;
    var c_lvl_coffersBase: string;
    var c_lvl_cofferPower: string;
    var c_lvl_cofferExpc: string;
    var c_lvl_cofferBoss: string;
    var cfg_c_msgCode: string;
    var c_msgCode_id: string;
    var c_msgCode_code: string;
    var c_msgCode_text: string;
    var c_msgCode_region0: string;
    var c_msgCode_time: string;
    var c_msgCode_onTop: string;
    var c_msgCode_remark: string;
    var c_msgCode_range: string;
    var cfg_c_open: string;
    var c_open_id: string;
    var c_open_key: string;
    var c_open_sys: string;
    var c_open_lvlRequired: string;
    var cfg_c_guide: string;
    var c_guide_id: string;
    var c_guide_revert: string;
    var c_guide_next: string;
    var c_guide_condition: string;
    var c_guide_judge: string;
    var c_guide_type: string;
    var c_guide_talk: string;
    var c_guide_npcIndex: string;
    var c_guide_penetrable: string;
    var c_guide_countdown: string;
    var c_guide_lvl: string;
    var c_guide_copyId: string;
    var c_guide_taskId: string;
    var c_guide_layer: string;
    var c_guide_node: string;
    var c_guide_rectNode: string;
    var c_guide_delayTimeToShow: string;
    var c_guide_beforeShow: string;
    var c_guide_afterShow: string;
    var c_guide_beforeNext: string;
    var c_guide_afterNext: string;
    var c_guide_endType: string;
    var c_guide_toSave: string;
    var c_guide_waiting: string;
    var c_guide_actions: string;
    var c_guide_refreshEvent: string;
    var c_guide_isHook: string;
    var c_guide_route: string;
    var c_guide_option: string;
    var cfg_c_guildLvl: string;
    var c_guildLvl_1: string;
    var c_guildLvl_2: string;
    var c_guildLvl_3: string;
    var c_guildLvl_4: string;
    var c_guildLvl_5: string;
    var c_guildLvl_6: string;
    var c_guildLvl_7: string;
    var c_guildLvl_8: string;
    var c_guildLvl_9: string;
    var c_guildLvl_10: string;
    var c_guildLvl_11: string;
    var c_guildLvl_12: string;
    var c_guildLvl_13: string;
    var c_guildLvl_id: string;
    var c_guildLvl_name: string;
    var c_guildLvl_props: string;
    var c_guildLvl_ennobleCount: string;
    var cfg_c_payInfo: string;
    var c_payInfo_10001: string;
    var c_payInfo_10004: string;
    var c_payInfo_99999: string;
    var c_payInfo_id: string;
    var cfg_c_arenaRankReward: string;
    var c_arenaRankReward_id: string;
    var c_arenaRankReward_name: string;
    var c_arenaRankReward_rangeStart: string;
    var c_arenaRankReward_rangeEnd: string;
    var c_arenaRankReward_rewardId: string;
    var c_arenaRankReward_gold: string;
    var c_arenaRankReward_winPrestige: string;
    var c_arenaRankReward_losePrestige: string;
    var cfg_t_itemBreak: string;
    var t_itemBreak_id: string;
    var t_itemBreak_name: string;
    var t_itemBreak_level: string;
    var t_itemBreak_position: string;
    var t_itemBreak_props: string;
    var t_itemBreak_combat: string;
    var t_itemBreak_desc: string;
    var cfg_c_gem: string;
    var c_gem_id: string;
    var c_gem_itemID: string;
    var c_gem_index: string;
    var c_gem_count: string;
    var c_gem_gemLvl: string;
    var c_gem_items1: string;
    var c_gem_gemId0: string;
    var c_gem_effectType1: string;
    var c_gem_effectPro1: string;
    var c_gem_items2: string;
    var c_gem_gemId1: string;
    var c_gem_effectType2: string;
    var c_gem_effectPro2: string;
    var c_gem_items3: string;
    var c_gem_gemId2: string;
    var c_gem_effectType3: string;
    var c_gem_effectPro3: string;
    var c_gem_items4: string;
    var c_gem_gemId3: string;
    var c_gem_effectType4: string;
    var c_gem_effectPro4: string;
    var cfg_c_compound: string;
    var c_compound_id: string;
    var c_compound_name: string;
    var c_compound_reqJinbi: string;
    var c_compound_reqExploit: string;
    var c_compound_needLvl: string;
    var c_compound_reqItems1: string;
    var c_compound_reqCount1: string;
    var c_compound_reqItems2: string;
    var c_compound_reqCount2: string;
    var c_compound_reqItems3: string;
    var c_compound_reqCount3: string;
    var c_compound_reqItems4: string;
    var c_compound_reqCount4: string;
    var cfg_c_exchange: string;
    var c_exchange_id: string;
    var c_exchange_item: string;
    var c_exchange_stuffs: string;
    var c_exchange_lvlRequired: string;
    var c_exchange_type: string;
    var c_exchange_count: string;
    var c_exchange_rate: string;
    var cfg_c_mail: string;
    var c_mail_id: string;
    var c_mail_type: string;
    var c_mail_fromName: string;
    var c_mail_title: string;
    var c_mail_content: string;
    var c_mail_expireDays: string;
    var c_mail_delHours: string;
    var c_mail_explain: string;
    var cfg_c_task: string;
    var c_task_id: string;
    var c_task_name: string;
    var c_task_note: string;
    var c_task_taskType: string;
    var c_task_cTaskType: string;
    var c_task_targetValue: string;
    var c_task_rewardId: string;
    var c_task_uiLink: string;
    var c_task_icon: string;
    var cfg_c_nameData: string;
    var c_nameData_id: string;
    var c_nameData_firstName: string;
    var c_nameData_maleName: string;
    var c_nameData_femaleName: string;
    var cfg_c_pvpRankReward: string;
    var c_pvpRankReward_id: string;
    var c_pvpRankReward_name: string;
    var c_pvpRankReward_range: string;
    var c_pvpRankReward_gold: string;
    var c_pvpRankReward_diamond: string;
    var c_pvpRankReward_starStone: string;
    var c_pvpRankReward_items: string;
    var cfg_c_realm: string;
    var c_realm_id: string;
    var c_realm_name: string;
    var c_realm_reqItems: string;
    var c_realm_propertys: string;
    var cfg_c_recharge: string;
    var c_recharge_id: string;
    var c_recharge_name: string;
    var c_recharge_type: string;
    var c_recharge_diamond: string;
    var c_recharge_payId: string;
    var c_recharge_cost: string;
    var c_recharge_first: string;
    var c_recharge_extra: string;
    var c_recharge_daily: string;
    var c_recharge_desc: string;
    var c_recharge_visible: string;
    var c_recharge_index: string;
    var c_recharge_eventIcon: string;
    var c_recharge_displayId: string;
    var c_recharge_isTreble: string;
    var cfg_c_reward: string;
    var c_reward_id: string;
    var c_reward_name: string;
    var c_reward_exp: string;
    var c_reward_gold: string;
    var c_reward_diamond: string;
    var c_reward_prestige: string;
    var c_reward_activity: string;
    var c_reward_rewardItems: string;
    var cfg_c_vip: string;
    var c_vip_id: string;
    var c_vip_score: string;
    var c_vip_itemId: string;
    var c_vip_equipCount: string;
    var c_vip_bossCount: string;
    var c_vip_realmCount: string;
    var c_vip_buyBossCount: string;
    var c_vip_guildFbCount: string;
    var c_vip_buyLingyunCount: string;
    var c_vip_skipFight: string;
    var c_vip_autoSmelt: string;
    var c_vip_autoPkOut: string;
    var c_vip_guildBoss: string;
    var c_vip_copyCountV10: string;
    var c_vip_copyCountV14: string;
    var c_vip_copyCountV17: string;
    var c_vip_copyCountV19: string;
    var c_vip_copyCountV7: string;
    var c_vip_addEquipBag: string;
    var c_vip_redEnvelopeCount: string;
    var c_vip_openingCount: string;
    var c_vip_coffersBuild: string;
    var c_vip_coffersBuff: string;
    var c_vip_kingOp: string;
    var c_vip_bossBackRes: string;
    var c_vip_isLock: string;
    var c_vip_worldCount: string;
    var c_vip_guildCount: string;
    var c_vip_bossAutoFight: string;
    var c_vip_copyBossAutoFight: string;
    var c_vip_isPickAct: string;
    var c_vip_isWipeMore: string;
    var c_vip_wipeCount: string;
    var c_vip_openRole2: string;
    var c_vip_openRole3: string;
    var c_vip_openRole4: string;
    var c_vip_buzhen: string;
    var cfg_t_buff: string;
    var t_buff_id: string;
    var t_buff_name: string;
    var t_buff_note: string;
    var t_buff_state: string;
    var t_buff_liftTime: string;
    var t_buff_lifeTimeAdd: string;
    var t_buff_effectValue: string;
    var t_buff_effectValeAdd: string;
    var t_buff_propertyID: string;
    var t_buff_baseValue1: string;
    var t_buff_linerScale: string;
    var t_buff_quadraticScale: string;
    var t_buff_channel: string;
    var t_buff_overlap: string;
    var t_buff_disBuffChannel: string;
    var t_buff_cleanChannel: string;
    var t_buff_specialEffect: string;
    var t_buff_targetColor: string;
    var t_buff_effectRes: string;
    var t_buff_effectPos: string;
    var cfg_t_copy: string;
    var t_copy_id: string;
    var t_copy_name: string;
    var t_copy_displayID: string;
    var t_copy_type: string;
    var t_copy_monsterCount: string;
    var t_copy_monsterTotal: string;
    var t_copy_bossSpace: string;
    var t_copy_bossID: string;
    var t_copy_loot: string;
    var t_copy_bossLoot: string;
    var t_copy_lootDisplay: string;
    var t_copy_cond: string;
    var t_copy_icon: string;
    var t_copy_randMonsters: string;
    var cfg_t_copyLoot: string;
    var t_copyLoot_id: string;
    var t_copyLoot_name: string;
    var t_copyLoot_exItems: string;
    var t_copyLoot_moneyMin: string;
    var t_copyLoot_moneyMax: string;
    var t_copyLoot_diamond: string;
    var t_copyLoot_moneyProbability: string;
    var t_copyLoot_lootChildIds: string;
    var t_copyLoot_randCounts: string;
    var t_copyLoot_showItems: string;
    var cfg_t_copyLootChild: string;
    var t_copyLootChild_id: string;
    var t_copyLootChild_name: string;
    var t_copyLootChild_num: string;
    var t_copyLootChild_num2: string;
    var t_copyLootChild_items: string;
    var t_copyLootChild_items2: string;
    var cfg_t_item: string;
    var t_item_id: string;
    var t_item_name: string;
    var t_item_note: string;
    var t_item_iconId: string;
    var t_item_itemLvl: string;
    var t_item_level: string;
    var t_item_vip: string;
    var t_item_color: string;
    var t_item_type: string;
    var t_item_bagTag: string;
    var t_item_count: string;
    var t_item_price: string;
    var t_item_dropId: string;
    var t_item_isLoot: string;
    var t_item_lootType: string;
    var cfg_t_itemLogic: string;
    var t_itemLogic_id: string;
    var t_itemLogic_type: string;
    var t_itemLogic_chestType: string;
    var t_itemLogic_create: string;
    var t_itemLogic_num: string;
    var t_itemLogic_needItems: string;
    var t_itemLogic_create2: string;
    var cfg_t_itemEquip: string;
    var t_itemEquip_id: string;
    var t_itemEquip_name: string;
    var t_itemEquip_job: string;
    var t_itemEquip_type: string;
    var t_itemEquip_displayID: string;
    var t_itemEquip_slotStrengthProperty: string;
    var t_itemEquip_propValue: string;
    var t_itemEquip_propertys: string;
    var t_itemEquip_randomRate: string;
    var t_itemEquip_randomPro: string;
    var t_itemEquip_fixProp: string;
    var t_itemEquip_isUp: string;
    var t_itemEquip_isRare: string;
    var t_itemEquip_isSuper: string;
    var t_itemEquip_gradeBase: string;
    var t_itemEquip_isLocked: string;
    var cfg_t_itemRealm: string;
    var t_itemRealm_id: string;
    var t_itemRealm_name: string;
    var t_itemRealm_propertys: string;
    var t_itemRealm_compoundId: string;
    var cfg_t_monster: string;
    var t_monster_id: string;
    var t_monster_name: string;
    var t_monster_note: string;
    var t_monster_displayID: string;
    var t_monster_bossLevel: string;
    var t_monster_attackType: string;
    var t_monster_maxHp: string;
    var t_monster_attack: string;
    var t_monster_defense: string;
    var t_monster_magicDefence: string;
    var t_monster_hit: string;
    var t_monster_dodge: string;
    var t_monster_critical: string;
    var t_monster_disCritical: string;
    var t_monster_damageIncrease: string;
    var t_monster_damageDecrease: string;
    var t_monster_benumbPro: string;
    var t_monster_disBenyumbPro: string;
    var t_monster_immunity: string;
    var t_monster_moveSpeed: string;
    var t_monster_attackTime: string;
    var t_monster_skillIds: string;
    var t_monster_effectsId: string;
    var t_monster_seeDistance: string;
    var t_monster_idleSound: string;
    var t_monster_attackSound: string;
    var t_monster_deadSound: string;
    var t_monster_dropId: string;
    var t_monster_userExp: string;
    var t_monster_level: string;
    var t_monster_scale: string;
    var t_monster_combat: string;
    var cfg_t_wing: string;
    var t_wing_id: string;
    var t_wing_name: string;
    var t_wing_level: string;
    var t_wing_star: string;
    var t_wing_iconId: string;
    var t_wing_displayID: string;
    var t_wing_needExp: string;
    var t_wing_attack: string;
    var t_wing_maxHp: string;
    var t_wing_defence: string;
    var t_wing_magicDefence: string;
    var cfg_t_wingStrength: string;
    var t_wingStrength_id: string;
    var t_wingStrength_lvl: string;
    var t_wingStrength_needWingLvl: string;
    var t_wingStrength_attack: string;
    var t_wingStrength_defence: string;
    var t_wingStrength_maxHp: string;
    var t_wingStrength_magicDefence: string;
    var t_wingStrength_consume: string;
    var t_wingStrength_successPro: string;
    var t_wingStrength_demotePro: string;
    var t_wingStrength_critPro: string;
    var cfg_t_skill: string;
    var t_skill_id: string;
    var t_skill_name: string;
    var t_skill_desc: string;
    var t_skill_canExtends: string;
    var t_skill_effect: string;
    var t_skill_cd: string;
    var t_skill_firstCD: string;
    var t_skill_special: string;
    var t_skill_attackDistance: string;
    var t_skill_priority: string;
    var t_skill_targetType: string;
    var t_skill_effectRadius: string;
    var t_skill_damage: string;
    var t_skill_pushType: string;
    var t_skill_pushDistance: string;
    var t_skill_casterPositionType: string;
    var t_skill_buffID: string;
    var t_skill_callMonsterID: string;
    var t_skill_callMonsterNum: string;
    var t_skill_damageScaleA: string;
    var t_skill_damageScaleB: string;
    var t_skill_damageScaleC: string;
    var t_skill_pushDistanceScaleA: string;
    var t_skill_pushDistanceScaleB: string;
    var t_skill_pushDistanceScaleC: string;
    var t_skill_castAction: string;
    var t_skill_combat: string;
    var t_skill_actionTime: string;
    var t_skill_casterEffect: string;
    var t_skill_targetEffect: string;
    var t_skill_flyEffect: string;
    var t_skill_beHittedEffect: string;
    var cfg_t_hero: string;
    var t_hero_id: string;
    var t_hero_name: string;
    var t_hero_note: string;
    var t_hero_job: string;
    var t_hero_displayID: string;
    var t_hero_describe: string;
    var t_hero_attackType: string;
    var t_hero_moveSpeed: string;
    var t_hero_attackInterval: string;
    var t_hero_skillIds: string;
    var cfg_c_shop: string;
    var c_shop_id: string;
    var c_shop_type: string;
    var c_shop_itemId: string;
    var c_shop_needLvl: string;
    var c_shop_endLvl: string;
    var c_shop_limit: string;
    var c_shop_currencyType: string;
    var c_shop_price: string;
    var c_shop_discount: string;
    var c_shop_rate: string;
    var c_shop_order: string;
    var cfg_c_help: string;
    var c_help_id: string;
    var c_help_system: string;
    var c_help_helpText: string;
    var cfg_c_chatSys: string;
    var c_chatSys_id: string;
    var c_chatSys_type: string;
    var c_chatSys_subType: string;
    var c_chatSys_arg: string;
    var c_chatSys_text: string;
    var c_chatSys_ifNotice: string;
    var c_chatSys_ifImport: string;
    var cfg_c_guildFuncCfg: string;
    var c_guildFuncCfg_id: string;
    var c_guildFuncCfg_setEnnoble: string;
    var c_guildFuncCfg_maxMember: string;
    var c_guildFuncCfg_disGuild: string;
    var c_guildFuncCfg_quitGuild: string;
    var c_guildFuncCfg_invite: string;
    var c_guildFuncCfg_agreeApp: string;
    var c_guildFuncCfg_setGuild: string;
    var c_guildFuncCfg_moveMember: string;
    var c_guildFuncCfg_upToChairman: string;
    var c_guildFuncCfg_upToVice: string;
    var c_guildFuncCfg_movePosition: string;
    var c_guildFuncCfg_changeNotice: string;
    var c_guildFuncCfg_resetCopy: string;
    var c_guildFuncCfg_distribution: string;
    var c_guildFuncCfg_signWar: string;
    var c_guildFuncCfg_sendEmail: string;
    var cfg_c_guildAct: string;
    var c_guildAct_id: string;
    var c_guildAct_name: string;
    var c_guildAct_type: string;
    var c_guildAct_act: string;
    var c_guildAct_num: string;
    var c_guildAct_gold: string;
    var c_guildAct_actCount: string;
    var c_guildAct_icon: string;
    var c_guildAct_uiLink: string;
    var c_guildAct_seniority: string;
    var cfg_c_guildEnnoble: string;
    var c_guildEnnoble_id: string;
    var c_guildEnnoble_ennobleGuildLvlCfg: string;
    var c_guildEnnoble_ennobleLvlCfg: string;
    var c_guildEnnoble_props: string;
    var cfg_c_mysterShop: string;
    var c_mysterShop_id: string;
    var c_mysterShop_type: string;
    var c_mysterShop_integralItem1: string;
    var c_mysterShop_integralItem2: string;
    var c_mysterShop_integralItem3: string;
    var c_mysterShop_giftBag1: string;
    var c_mysterShop_giftBag2: string;
    var c_mysterShop_picture: string;
    var cfg_t_inheritedEquip: string;
    var t_inheritedEquip_id: string;
    var t_inheritedEquip_nextId: string;
    var t_inheritedEquip_num: string;
    var cfg_c_bossParameter: string;
    var c_bossParameter_id: string;
    var c_bossParameter_isOpen: string;
    var c_bossParameter_week: string;
    var c_bossParameter_displayId: string;
    var c_bossParameter_copyId: string;
    var c_bossParameter_repeat: string;
    var c_bossParameter_openLvl: string;
    var c_bossParameter_fightLvl: string;
    var c_bossParameter_maxLvl: string;
    var c_bossParameter_summonCd: string;
    var c_bossParameter_summonCost: string;
    var c_bossParameter_rankAward1: string;
    var c_bossParameter_rankAward2: string;
    var c_bossParameter_rankAward3: string;
    var c_bossParameter_rankAward4: string;
    var c_bossParameter_summonAward: string;
    var c_bossParameter_guildAward: string;
    var c_bossParameter_lastShotAward: string;
    var c_bossParameter_awardDesc: string;
    var c_bossParameter_goldRate: string;
    var c_bossParameter_timeLimit: string;
    var c_bossParameter_isLimit: string;
    var c_bossParameter_startTime: string;
    var c_bossParameter_endTime: string;
    var c_bossParameter_showOnHoliday: string;
    var c_bossParameter_sort: string;
    var cfg_t_otherBuff: string;
    var t_otherBuff_id: string;
    var t_otherBuff_name: string;
    var t_otherBuff_type: string;
    var t_otherBuff_addHurt: string;
    var t_otherBuff_conTime: string;
    var t_otherBuff_icon: string;
    var t_otherBuff_des: string;
    var cfg_c_bossHurtRate: string;
    var c_bossHurtRate_id: string;
    var c_bossHurtRate_startHurt1: string;
    var c_bossHurtRate_endHurt1: string;
    var c_bossHurtRate_gold1: string;
    var c_bossHurtRate_startHurt2: string;
    var c_bossHurtRate_endHurt2: string;
    var c_bossHurtRate_gold2: string;
    var c_bossHurtRate_startHurt3: string;
    var c_bossHurtRate_endHurt3: string;
    var c_bossHurtRate_gold3: string;
    var c_bossHurtRate_guildStartHurt1: string;
    var c_bossHurtRate_guildEndHurt1: string;
    var c_bossHurtRate_guildProgress1: string;
    var c_bossHurtRate_guildStartHurt2: string;
    var c_bossHurtRate_guildEndHurt2: string;
    var c_bossHurtRate_guildProgress2: string;
    var c_bossHurtRate_guildStartHurt3: string;
    var c_bossHurtRate_guildEndHurt3: string;
    var c_bossHurtRate_guildProgress3: string;
    var c_bossHurtRate_guildStartHurt4: string;
    var c_bossHurtRate_guildEndHurt4: string;
    var c_bossHurtRate_guildProgress4: string;
    var c_bossHurtRate_guildStartHurt5: string;
    var c_bossHurtRate_guildEndHurt5: string;
    var c_bossHurtRate_guildProgress5: string;
    var c_bossHurtRate_guildStartHurt6: string;
    var c_bossHurtRate_guildEndHurt6: string;
    var c_bossHurtRate_guildProgress6: string;
    var c_bossHurtRate_guildStartHurt7: string;
    var c_bossHurtRate_guildEndHurt7: string;
    var c_bossHurtRate_guildProgress7: string;
    var c_bossHurtRate_guildStartHurt8: string;
    var c_bossHurtRate_guildEndHurt8: string;
    var c_bossHurtRate_guildProgress8: string;
    var cfg_c_challengeCupRankReward: string;
    var c_challengeCupRankReward_id: string;
    var c_challengeCupRankReward_name: string;
    var c_challengeCupRankReward_rangeStart: string;
    var c_challengeCupRankReward_rangeEnd: string;
    var c_challengeCupRankReward_gold: string;
    var c_challengeCupRankReward_reward: string;
    var cfg_t_rebirth: string;
    var t_rebirth_id: string;
    var t_rebirth_rebirthLvl: string;
    var t_rebirth_lvl: string;
    var t_rebirth_limitLvl: string;
    var t_rebirth_exp: string;
    var t_rebirth_maxHpTemp: string;
    var t_rebirth_attackTemp: string;
    var t_rebirth_defenceTemp: string;
    var t_rebirth_magicDefenceTemp: string;
    var t_rebirth_hitTemp: string;
    var t_rebirth_dodgeTemp: string;
    var t_rebirth_criticalTemp: string;
    var t_rebirth_disCriticalTemp: string;
    var cfg_c_customParameter: string;
    var c_customParameter_id: string;
    var c_customParameter_gainType: string;
    var c_customParameter_part: string;
    var c_customParameter_job1_itemId0: string;
    var c_customParameter_job1_itemId1: string;
    var c_customParameter_job2_itemId0: string;
    var c_customParameter_job2_itemId1: string;
    var c_customParameter_job3_itemId0: string;
    var c_customParameter_job3_itemId1: string;
    var c_customParameter_equip_lvl_range: string;
    var c_customParameter_vip: string;
    var c_customParameter_color: string;
    var cfg_c_luckyTalos: string;
    var c_luckyTalos_id: string;
    var c_luckyTalos_itemID: string;
    var c_luckyTalos_amount: string;
    var c_luckyTalos_class: string;
    var c_luckyTalos_color: string;
    var c_luckyTalos_weight: string;
    var c_luckyTalos_spItemId: string;
    var c_luckyTalos_itemLimit: string;
    var c_luckyTalos_subType: string;
    var c_luckyTalos_subTypeDivide: string;
    var cfg_c_everydayCharge: string;
    var c_everydayCharge_id: string;
    var c_everydayCharge_awardId: string;
    var c_everydayCharge_chargeAmount: string;
    var cfg_t_medal: string;
    var t_medal_id: string;
    var t_medal_name: string;
    var t_medal_propertys: string;
    var t_medal_iconId: string;
    var t_medal_staIconId: string;
    var t_medal_text: string;
    var t_medal_grade: string;
    var t_medal_chatIconId: string;
    var t_medal_outputWay: string;
    var t_medal_isAchivement: string;
    var t_medal_lootArg: string;
    var t_medal_metalType: string;
    var cfg_t_medalLvl: string;
    var t_medalLvl_id: string;
    var t_medalLvl_lvl: string;
    var t_medalLvl_reqItems: string;
    var t_medalLvl_strengthPro: string;
    var t_medalLvl_grade: string;
    var t_medalLvl_needLvl: string;
    var cfg_t_strengthRefine: string;
    var t_strengthRefine_lvl: string;
    var t_strengthRefine_needStrLvl: string;
    var t_strengthRefine_consumeStr: string;
    var t_strengthRefine_consumeGold: string;
    var t_strengthRefine_strAddition: string;
    var t_strengthRefine_succeedPro: string;
    var t_strengthRefine_demotePro: string;
    var t_strengthRefine_critPro: string;
    var cfg_c_demonLotus: string;
    var c_demonLotus_lvl: string;
    var c_demonLotus_advNeedLvl: string;
    var c_demonLotus_expcAccLimit: string;
    var c_demonLotus_genqiAccLimit: string;
    var c_demonLotus_expOutput: string;
    var c_demonLotus_advSucceedPro: string;
    var c_demonLotus_advCosLotus: string;
    var c_demonLotus_treaNeedUserLvl: string;
    var c_demonLotus_treaSucceedPro: string;
    var c_demonLotus_treaCosGenqi: string;
    var c_demonLotus_treaCosLotus: string;
    var c_demonLotus_treaPropertys: string;
    var cfg_c_genuineQi: string;
    var c_genuineQi_lvl: string;
    var c_genuineQi_recovery: string;
    var c_genuineQi_genuLimit: string;
    var cfg_c_heartStunt: string;
    var c_heartStunt_id: string;
    var c_heartStunt_name: string;
    var c_heartStunt_skillId: string;
    var c_heartStunt_skillId2: string;
    var c_heartStunt_series: string;
    var c_heartStunt_layer: string;
    var c_heartStunt_desc: string;
    var c_heartStunt_skillDesc: string;
    var cfg_c_heartStuntLvl: string;
    var c_heartStuntLvl_lvl: string;
    var c_heartStuntLvl_succeedPro: string;
    var c_heartStuntLvl_cosGenqi: string;
    var c_heartStuntLvl_cosGold: string;
    var c_heartStuntLvl_addProperty: string;
    var cfg_c_bossWorld: string;
    var c_bossWorld_id: string;
    var c_bossWorld_displayId: string;
    var c_bossWorld_copyId: string;
    var c_bossWorld_fightLvl: string;
    var c_bossWorld_rankAward1: string;
    var c_bossWorld_rankAward2: string;
    var c_bossWorld_rankAward3: string;
    var c_bossWorld_rankAward4: string;
    var c_bossWorld_rankAward5: string;
    var c_bossWorld_rankAward6: string;
    var c_bossWorld_rankAward7: string;
    var c_bossWorld_lastShotAward: string;
    var c_bossWorld_treasureItemRate: string;
    var c_bossWorld_treasurePercentAward: string;
    var c_bossWorld_treasureAward: string;
    var c_bossWorld_failAward1: string;
    var c_bossWorld_failAward2: string;
    var c_bossWorld_failAward3: string;
    var c_bossWorld_failAward4: string;
    var c_bossWorld_failAward5: string;
    var c_bossWorld_failAward6: string;
    var c_bossWorld_failAward7: string;
    var c_bossWorld_isLimit: string;
    var c_bossWorld_startTime: string;
    var c_bossWorld_endTime: string;
    var c_bossWorld_sort: string;
    var cfg_c_bossRes: string;
    var c_bossRes_id: string;
    var c_bossRes_winRes1: string;
    var c_bossRes_winCond1: string;
    var c_bossRes_winRes2: string;
    var c_bossRes_winCond2: string;
    var c_bossRes_winRes3: string;
    var c_bossRes_winCond3: string;
    var c_bossRes_winRes4: string;
    var c_bossRes_winCond4: string;
    var c_bossRes_winRes5: string;
    var c_bossRes_winCond5: string;
    var c_bossRes_winRes6: string;
    var c_bossRes_winCond6: string;
    var c_bossRes_winRes7: string;
    var c_bossRes_winCond7: string;
    var c_bossRes_winRes8: string;
    var c_bossRes_winCond8: string;
    var c_bossRes_winRes9: string;
    var c_bossRes_winCond9: string;
    var c_bossRes_winRes10: string;
    var c_bossRes_winCond10: string;
    var c_bossRes_failRes1: string;
    var c_bossRes_failCond1: string;
    var c_bossRes_failRes2: string;
    var c_bossRes_failCond2: string;
    var c_bossRes_failRes3: string;
    var c_bossRes_failCond3: string;
    var c_bossRes_failRes4: string;
    var c_bossRes_failCond4: string;
    var c_bossRes_failRes5: string;
    var c_bossRes_failCond5: string;
    var c_bossRes_failRes6: string;
    var c_bossRes_failCond6: string;
    var c_bossRes_failRes7: string;
    var c_bossRes_failCond7: string;
    var c_bossRes_failRes8: string;
    var c_bossRes_failCond8: string;
    var c_bossRes_failRes9: string;
    var c_bossRes_failCond9: string;
    var c_bossRes_failRes10: string;
    var c_bossRes_failCond10: string;
    var cfg_c_vipCopy: string;
    var c_vipCopy_vipLvl: string;
    var c_vipCopy_copyIds: string;
    var c_vipCopy_name: string;
    var c_vipCopy_lootDesc: string;
    var cfg_c_giftPack: string;
    var c_giftPack_id: string;
    var c_giftPack_content: string;
    var cfg_t_guildCopy: string;
    var t_guildCopy_id: string;
    var t_guildCopy_name: string;
    var t_guildCopy_openLvl: string;
    var t_guildCopy_award: string;
    var t_guildCopy_section: string;
    var t_guildCopy_title_icon: string;
    var t_guildCopy_bg: string;
    var t_guildCopy_sub_title_icon: string;
    var cfg_t_guildCopyBoss: string;
    var t_guildCopyBoss_bossId: string;
    var t_guildCopyBoss_copyId: string;
    var t_guildCopyBoss_award: string;
    var t_guildCopyBoss_lastShotAward: string;
    var cfg_t_sellItem: string;
    var t_sellItem_id: string;
    var t_sellItem_name: string;
    var t_sellItem_note: string;
    var t_sellItem_items: string;
    var t_sellItem_sells: string;
    var cfg_t_treasure: string;
    var t_treasure_id: string;
    var t_treasure_name: string;
    var t_treasure_items: string;
    var t_treasure_guardTime: string;
    var cfg_c_guildWarReward: string;
    var c_guildWarReward_id: string;
    var c_guildWarReward_name: string;
    var c_guildWarReward_rangeBeg: string;
    var c_guildWarReward_rangeEnd: string;
    var c_guildWarReward_diamond: string;
    var c_guildWarReward_diamondSp: string;
    var c_guildWarReward_diamondUser: string;
    var c_guildWarReward_wgold: string;
    var c_guildWarReward_wgoldSp: string;
    var c_guildWarReward_wgoldUser: string;
    var c_guildWarReward_hgold: string;
    var c_guildWarReward_hgoldSp: string;
    var c_guildWarReward_hgoldUser: string;
    var c_guildWarReward_silver: string;
    var c_guildWarReward_silverSp: string;
    var c_guildWarReward_silverUser: string;
    var c_guildWarReward_copper: string;
    var c_guildWarReward_copperSp: string;
    var c_guildWarReward_copperUser: string;
    var cfg_t_paTaTreasury: string;
    var t_paTaTreasury_copyId: string;
    var t_paTaTreasury_displayId: string;
    var t_paTaTreasury_award: string;
    var t_paTaTreasury_preview: string;
    var t_paTaTreasury_treasury: string;
    var t_paTaTreasury_troHorLamp: string;
    var t_paTaTreasury_exData: string;
    var cfg_t_talisman: string;
    var t_talisman_id: string;
    var t_talisman_name: string;
    var t_talisman_job: string;
    var t_talisman_iconId: string;
    var t_talisman_effectId: string;
    var t_talisman_imgId: string;
    var t_talisman_sEffect: string;
    var t_talisman_atStart: string;
    var t_talisman_atEnd: string;
    var t_talisman_resonance: string;
    var t_talisman_compound: string;
    var t_talisman_desc: string;
    var t_talisman_skillStar: string;
    var t_talisman_isOpen: string;
    var cfg_t_talismanCom: string;
    var t_talismanCom_id: string;
    var t_talismanCom_reqItems1: string;
    var t_talismanCom_reqCount1: string;
    var t_talismanCom_needLvl1: string;
    var t_talismanCom_needStar1: string;
    var t_talismanCom_reqItems2: string;
    var t_talismanCom_reqCount2: string;
    var t_talismanCom_needLvl2: string;
    var t_talismanCom_needStar2: string;
    var t_talismanCom_reqItems3: string;
    var t_talismanCom_reqCount3: string;
    var t_talismanCom_needLvl3: string;
    var t_talismanCom_needStar3: string;
    var cfg_t_talismanLvl: string;
    var t_talismanLvl_id: string;
    var t_talismanLvl_lvl: string;
    var t_talismanLvl_userLv: string;
    var t_talismanLvl_propertys: string;
    var t_talismanLvl_needItems: string;
    var t_talismanLvl_starLimit: string;
    var cfg_t_talismanRes: string;
    var t_talismanRes_id: string;
    var t_talismanRes_name: string;
    var t_talismanRes_desc: string;
    var t_talismanRes_resonance: string;
    var t_talismanRes_type: string;
    var t_talismanRes_extraPro: string;
    var cfg_t_talismanSkill: string;
    var t_talismanSkill_id: string;
    var t_talismanSkill_name: string;
    var t_talismanSkill_desc: string;
    var t_talismanSkill_icon: string;
    var t_talismanSkill_type: string;
    var t_talismanSkill_effect: string;
    var cfg_t_talismanStar: string;
    var t_talismanStar_id: string;
    var t_talismanStar_aptitude: string;
    var t_talismanStar_needItems: string;
    var t_talismanStar_skillId: string;
    var t_talismanStar_getPro: string;
    var cfg_c_luckyMajong: string;
    var c_luckyMajong_id: string;
    var c_luckyMajong_itemID: string;
    var c_luckyMajong_amount: string;
    var c_luckyMajong_class: string;
    var c_luckyMajong_color: string;
    var c_luckyMajong_weight: string;
    var c_luckyMajong_spItemId: string;
    var c_luckyMajong_itemLimit: string;
    var c_luckyMajong_subType: string;
    var c_luckyMajong_subTypeDivide: string;
    var c_luckyMajong_ifRare: string;
    var c_luckyMajong_cardCount: string;
    var cfg_c_userSurvey: string;
    var c_userSurvey_id: string;
    var c_userSurvey_question: string;
    var c_userSurvey_optionContent: string;
    var c_userSurvey_type: string;
}
declare module gc {
    var dsConsts: {
        AccountEntity: {
            id: number;
            name: number;
            email: number;
            pwd: number;
            deviceId: number;
            status: number;
            channelId: number;
            sdkData: number;
            exData: number;
            createTime: number;
            createIP: number;
            lastUpdateTime: number;
            loginCount: number;
            loginKey: number;
            userServers: number;
            rechargeCom: number;
            sdkChannelId: number;
            bendExpireAt: number;
            bendType: number;
        };
        ActivityEntity: {
            id: number;
            title: number;
            type: number;
            iconType: number;
            tiIconType: number;
            startTime: number;
            endTime: number;
            items: number;
            randomHeroes: number;
            exValues: number;
            exValues2: number;
            exValues3: number;
            content: number;
            isOpen: number;
            sort: number;
            exData: number;
            templateId: number;
        };
        ActivityRecordEntity: {
            id: number;
            userId: number;
            activityId: number;
            activityType: number;
            userLvl: number;
            userVip: number;
            costDiamond: number;
            getDiamond: number;
            joinCount: number;
            addTime: number;
            updateTime: number;
        };
        AllRunwatEntity: {
            id: number;
            dateTime: number;
            newUser: number;
            active: number;
            nextDayLeft: number;
            weekLeft: number;
            runwat: number;
            payCount: number;
            newPay: number;
            ARPU: number;
            payRate: number;
            ARPPU: number;
            runwatNum: number;
            userNum: number;
        };
        ArenaBakEntity: {
            id: number;
            userId: number;
            rank: number;
            highRank: number;
            fightRanks: number;
            reNumData: number;
            awardData: number;
            winCount: number;
            conWinCount: number;
            maxConWinCount: number;
        };
        ArenaEntity: {
            id: number;
            userId: number;
            rank: number;
            highRank: number;
            fightRanks: number;
            reNumData: number;
            awardData: number;
            winCount: number;
            conWinCount: number;
            maxConWinCount: number;
        };
        ArenaRecordEntity: {
            id: number;
            userId: number;
            userLvl: number;
            userIconId: number;
            userName: number;
            userWinCount: number;
            enemyId: number;
            enemyLvl: number;
            enemyIconId: number;
            enemyName: number;
            enemyWinCount: number;
            isWin: number;
            fightTime: number;
            fightData: number;
            fightType: number;
            isDeal: number;
            isRead: number;
            isRevenge: number;
        };
        BossBakEntity: {
            id: number;
            bossId: number;
            startTime: number;
            endTime: number;
            killUserId: number;
            deathTime: number;
            status: number;
            lastIsWin: number;
            resultData: number;
            isPrize: number;
            limitStartTime: number;
            limitEndTime: number;
            isLimit: number;
            type: number;
            originBossId: number;
            deathBossId: number;
            repeatCount: number;
            repeatTime: number;
            callArr: number;
            week: number;
            errData: number;
        };
        BossEntity: {
            id: number;
            bossId: number;
            startTime: number;
            endTime: number;
            killUserId: number;
            deathTime: number;
            status: number;
            lastIsWin: number;
            resultData: number;
            isPrize: number;
            limitStartTime: number;
            limitEndTime: number;
            isLimit: number;
            type: number;
            originBossId: number;
            deathBossId: number;
            repeatCount: number;
            repeatTime: number;
            callArr: number;
            week: number;
            errData: number;
        };
        ChallengeCupEntity: {
            id: number;
            userId: number;
            leftTime: number;
            championUserId: number;
            startTime: number;
            exData: number;
            isOpen: number;
            worship: number;
            worshipCount: number;
            buffOpenNum: number;
            buffOpenTime: number;
            buffEndTime: number;
            recordArr: number;
        };
        ChallengeCupRankEntity: {
            id: number;
            userId: number;
            startTime: number;
            endTime: number;
            maxTime: number;
            iconId: number;
            nickName: number;
            lvl: number;
            vip: number;
        };
        CoffersBakEntity: {
            id: number;
            lvl: number;
            buildValue: number;
            resource: number;
            lootResource: number;
            beLootResource: number;
            defeseData: number;
            defeseRecordArr: number;
            lootRecordArr: number;
            points: number;
            todayPoints: number;
            buffLvl: number;
            buffExpc: number;
            buffBase: number;
            bakDate: number;
            lootUserData: number;
            breakTimeData: number;
        };
        CoffersEntity: {
            id: number;
            lvl: number;
            buildValue: number;
            resource: number;
            lootResource: number;
            beLootResource: number;
            defeseData: number;
            defeseRecordArr: number;
            lootRecordArr: number;
            points: number;
            todayPoints: number;
            buffLvl: number;
            buffExpc: number;
            buffBase: number;
            lootUserData: number;
            breakTimeData: number;
        };
        CoffersGroupEntity: {
            id: number;
            name: number;
            serverArr: number;
        };
        ConsumeEntity: {
            id: number;
            recordTime: number;
            userId: number;
            item_id: number;
            amount: number;
            shopRecord: number;
            channelId: number;
        };
        CopyProgressEntity: {
            id: number;
            userId: number;
            copyType: number;
            pCopyId: number;
            winningStreak: number;
            pTime: number;
            copyObj: number;
            refreshTime: number;
            timeArr: number;
            copyStar: number;
            finished: number;
            isPickAward: number;
            isPickChests: number;
            timesPerDay: number;
            resetCounts: number;
            resetTime: number;
            readObj: number;
        };
        CouponEntity: {
            id: number;
            userId: number;
            name: number;
            content: number;
            code: number;
            type: number;
            startTime: number;
            endTime: number;
            items: number;
            channelIds: number;
            channelId: number;
            isUsed: number;
            serverId: number;
            period: number;
            isNew: number;
        };
        DemonLotusEntity: {
            id: number;
            userId: number;
            lvl: number;
            addUpExpc: number;
            lastOpeTime: number;
            advanceLvl: number;
            treasureLvl: number;
        };
        ExpeditionEntity: {
            id: number;
            userId: number;
            stageId: number;
            fightCount: number;
            soulCount: number;
        };
        ExpHeroEntity: {
            id: number;
            userId: number;
            tempId: number;
            quality: number;
            intensifyArr: number;
            starArr: number;
            gemArr: number;
            wingArr: number;
            expc: number;
            lvl: number;
            equipData: number;
            skillLvlArr: number;
            propArr: number;
            realmLvl: number;
            realmArr: number;
            sex: number;
            combat: number;
            refineArr: number;
            starTopArr: number;
            talismanAdorn: number;
            talismanData: number;
            talismanFg: number;
            wingSumLvl: number;
            gemSumLvl: number;
            realmSumLvl: number;
            fightSort: number;
            soulArr: number;
            wearSoulId: number;
            recordTime: number;
        };
        FiveDaysTargetEntity: {
            id: number;
            userId: number;
            userName: number;
            iconId: number;
            userLvl: number;
            pkWinCount: number;
            combat: number;
            rankType: number;
            rankValue: number;
        };
        GameCommonEntity: {
            id: number;
            highCopyId: number;
            isOpenBoss: number;
        };
        GameConfigEntity: {
            id: number;
            guildWarSign: number;
            guildWarOpen: number;
            guildWarHost: number;
            guildWarPort: number;
            redisHostArr: number;
            noSignServerArr: number;
        };
        GameRecordEntity: {
            id: number;
            userId: number;
            recordTime: number;
            loginCount: number;
            copyCount: number;
            wipeCount: number;
            pkCount: number;
            jjcPkCount: number;
            rechargeCount: number;
            rechargeSum: number;
            rechargeRecord: number;
            shopRecord: number;
            costGoldRecord: number;
            costDiamondRecord: number;
            costDiamondRecord1: number;
            costDiamondRecord2: number;
            getDiamondRecord: number;
            getDiamondRecord1: number;
            getDiamondRecord2: number;
            channelId: number;
            serverId: number;
        };
        GemGainEntity: {
            id: number;
            recordTime: number;
            userId: number;
            item_id: number;
            amount: number;
            shopRecord: number;
            channelId: number;
        };
        GuildEntity: {
            id: number;
            name: number;
            iconId: number;
            chairmanId: number;
            viceChairmanId: number;
            guildPopulation: number;
            addUpAct: number;
            joinCon: number;
            joinLvl: number;
            lvl: number;
            notice: number;
            note: number;
            appliedMembers: number;
            numbersArr: number;
            lastExpelTime: number;
            ennobleData: number;
            guildCopyData: number;
            resetCount: number;
            resetTime: number;
            lastLgTime: number;
        };
        GuildGroupEntity: {
            id: number;
            name: number;
            serverArr: number;
            lastRankData: number;
            lastRankTime: number;
            redisId: number;
        };
        GuildPersonalEntity: {
            id: number;
            userId: number;
            guildId: number;
            position: number;
            viceTime: number;
            todayAct: number;
            noticeCount: number;
            exitGuildCount: number;
            lotteryCount: number;
            actLastTime: number;
            addUpAct: number;
            outMsg: number;
            appliedMsg: number;
            actData: number;
            guildAct: number;
            lastQuipGuildTime: number;
            ennoble: number;
        };
        GuildWarRecordEntity: {
            id: number;
            recordData: number;
            recordTime: number;
            lastRankData: number;
        };
        GuildWarSignEntity: {
            id: number;
            serverId: number;
            guildId: number;
            signTime: number;
            groupId: number;
            signUserId: number;
        };
        HeartStuntEntity: {
            id: number;
            userId: number;
            stateArr: number;
            heartLvlArr: number;
        };
        HeroEntity: {
            id: number;
            userId: number;
            tempId: number;
            quality: number;
            intensifyArr: number;
            starArr: number;
            gemArr: number;
            wingArr: number;
            expc: number;
            lvl: number;
            equipData: number;
            skillLvlArr: number;
            propArr: number;
            realmLvl: number;
            realmArr: number;
            sex: number;
            combat: number;
            refineArr: number;
            starTopArr: number;
            talismanAdorn: number;
            talismanData: number;
            talismanFg: number;
            wingSumLvl: number;
            gemSumLvl: number;
            realmSumLvl: number;
            fightSort: number;
            soulArr: number;
            wearSoulId: number;
        };
        IncognitoEntity: {
            id: number;
            userId: number;
            openTime: number;
        };
        LootConfigEntity: {
            id: number;
            startTime: number;
            endTime: number;
            lootTypeArr: number;
        };
        LotteryEntity: {
            id: number;
            userId: number;
            treasureValue: number;
            treasureChestCount: number;
        };
        MailEntity: {
            id: number;
            userId: number;
            type: number;
            fromName: number;
            title: number;
            content: number;
            replaceArgs: number;
            items: number;
            isPicked: number;
            isRead: number;
            delHours: number;
            delTime: number;
            expireTime: number;
            addTime: number;
            isDelete: number;
            taskId: number;
        };
        ManagerEntity: {
            id: number;
            name: number;
            pwd: number;
            groupId: number;
        };
        ManagerGroup: {
            id: number;
            name: number;
            rights: number;
        };
        ManagerLog: {
            id: number;
            managerId: number;
            managerName: number;
            module: number;
            serverId: number;
            type: number;
            operation: number;
            ip: number;
            time: number;
            tid: number;
        };
        MirrorRankViewEntity: {
            combatEff: number;
            isLocked: number;
            totalGain: number;
        };
        NewFourDaysEntity: {
            id: number;
            userId: number;
            userName: number;
            iconId: number;
            userLvl: number;
            pkWinCount: number;
            combat: number;
            rankType: number;
            rankValue: number;
        };
        NoticeEntity: {
            id: number;
            title: number;
            content: number;
            serverIdArr: number;
            isOpen: number;
            updateTime: number;
            iconType: number;
            noticeTime: number;
            startTime: number;
            endTime: number;
            sort: number;
            exData: number;
        };
        PkOutBakEntity: {
            id: number;
            userId: number;
            enemyIds: number;
            exEnemyId: number;
            freshTime: number;
            pkValue: number;
            highPkValue: number;
            killValue: number;
            pkValueTime: number;
            enemyTypes: number;
            todayRefreshNum: number;
            todayRefreshTime: number;
            winCount: number;
            highWinCount: number;
            accWinCount: number;
        };
        PkOutEntity: {
            id: number;
            userId: number;
            enemyIds: number;
            exEnemyId: number;
            freshTime: number;
            pkValue: number;
            highPkValue: number;
            killValue: number;
            pkValueTime: number;
            enemyTypes: number;
            todayRefreshNum: number;
            todayRefreshTime: number;
            winCount: number;
            highWinCount: number;
            accWinCount: number;
        };
        ProtocolContentEntity: {
            id: number;
            content: number;
            isOpen: number;
        };
        RechargeEntity: {
            id: number;
            userId: number;
            rechargeId: number;
            diamond: number;
            rechargeTime: number;
            effTime: number;
            channelId: number;
            transId: number;
            currency: number;
            ip: number;
            payMoney: number;
            userLvl: number;
        };
        RechargeRankEntity: {
            id: number;
            userId: number;
            nickName: number;
            serverId: number;
            payNum: number;
            payCount: number;
            payRecord: number;
            buyGoldNum: number;
            shopRecord: number;
        };
        RechargeRequestEntity: {
            id: number;
            accountId: number;
            userId: number;
            serverId: number;
            rechargeId: number;
            status: number;
            addTime: number;
            transId: number;
            goodsId: number;
            orderNo: number;
        };
        RedEnvelopeEntity: {
            id: number;
            redType: number;
            userId: number;
            guildId: number;
            spItemId: number;
            diamond: number;
            personNum: number;
            wish: number;
            getData: number;
            addTime: number;
            expireTime: number;
            isDelete: number;
        };
        RedEnvelopePersonalEntity: {
            id: number;
            userId: number;
            addUpServer: number;
            addUpGuild: number;
            addUpGet: number;
            sendCount: number;
            lastSendTime: number;
            getData: number;
            exData: number;
            exAddUpGet: number;
        };
        RunwatEntity: {
            id: number;
            dateTime: number;
            newUser: number;
            active: number;
            nextDayLeft: number;
            weekLeft: number;
            runwat: number;
            payCount: number;
            newPay: number;
            ARPU: number;
            payRate: number;
            ARPPU: number;
            runwatNum: number;
            userNum: number;
        };
        ServerInfoEntity: {
            id: number;
            name: number;
            mergerName: number;
            area: number;
            host: number;
            port: number;
            isNew: number;
            status: number;
            dbLink: number;
            sort: number;
            appId: number;
            serverId: number;
            indexId: number;
            isClose: number;
            closeExplain: number;
            serverDate: number;
            outLink: number;
        };
        ServersGroupEntity: {
            id: number;
            type: number;
            name: number;
            serverArr: number;
            isDelete: number;
            case: number;
        };
        ShopEntity: {
            id: number;
            userId: number;
            type: number;
            items: number;
            lastTime: number;
            refreshCount: number;
            refreshCountResetTime: number;
        };
        ShopRecordEntity: {
            id: number;
            userId: number;
            userLvl: number;
            userVip: number;
            costGold: number;
            shopType: number;
            costDiamond: number;
            buyItemId: number;
            buyAmount: number;
            buyTime: number;
        };
        SysRedEnvelopeEntity: {
            id: number;
            userId: number;
            sendName: number;
            redType: number;
            guildId: number;
            spItemId: number;
            amount: number;
            viewAmount: number;
            personNum: number;
            wish: number;
            limitZone: number;
            addTime: number;
            isDeal: number;
        };
        SystemMessageEntity: {
            id: number;
            serverId: number;
            message: number;
            type: number;
            color: number;
            size: number;
            status: number;
            times: number;
            interval: number;
            sendTime: number;
            createTime: number;
            lastUpdateTime: number;
        };
        TaskEntity: {
            id: number;
            userId: number;
            dailyTasks: number;
            vitality: number;
            vitalityChests: number;
            refreshTime: number;
            tasks: number;
            tasksValue: number;
            doneTasks: number;
        };
        TreasureEntity: {
            id: number;
            userId: number;
            treasureId: number;
            openTime: number;
            isOpen: number;
            items: number;
            isDelete: number;
        };
        TreasureRecordEntity: {
            id: number;
            recordType: number;
            userId: number;
            guildName: number;
            userVip: number;
            userName: number;
            medalTitle: number;
            treasureId: number;
            items: number;
            recordDate: number;
        };
        UserCouponEntity: {
            id: number;
            codeName: number;
            userId: number;
        };
        UserEntity: {
            accountId: number;
            iconId: number;
            nickName: number;
            gold: number;
            diamond: number;
            id: number;
            giveDiamond: number;
            buyDiamond: number;
            lvl: number;
            expc: number;
            combat: number;
            vip: number;
            vipScore: number;
            strength: number;
            strengthReTime: number;
            signName: number;
            honor: number;
            bag: number;
            equipBag: number;
            equipBagBuyCount: number;
            honorData: number;
            blueDiamond: number;
            sign: number;
            activity: number;
            record: number;
            exData: number;
            counts: number;
            countsRefreshTime: number;
            lastUpdateTime: number;
            serverId: number;
            lastSkillTime: number;
            skillCd: number;
            isOpenPk: number;
            prestige: number;
            redPointData: number;
            robotId: number;
            createTime: number;
            sdkChannelId: number;
            serverIndexId: number;
            onlineLootData: number;
            isKing: number;
            rebirthLvl: number;
            rebirthExp: number;
            coffersPoints: number;
            todayCoffersPoints: number;
            medalTitle: number;
            medalData: number;
            genuineQi: number;
            propertyData: number;
            coffersKillNum: number;
            isOpenIn: number;
            infuseExpc: number;
            highPaTa: number;
        };
        UserMirrorCombatViewEntity: {
            combatEff: number;
        };
        UserRankEntity: {
            id: number;
            userId: number;
            userName: number;
            iconId: number;
            userLvl: number;
            blueDiamond: number;
            pkWinCount: number;
            combat: number;
            rankType: number;
            rankValue: number;
        };
        UserSurveyEntity: {
            id: number;
            serverId: number;
            userId: number;
            userLvl: number;
            userVip: number;
            activityId: number;
            questionId: number;
            selectIndex: number;
        };
        ExHeartStuntData: {
            heartStuntData: number;
            userData: number;
            isSucceed: number;
            genuineQiArr: number;
        };
        ExDemonLotusData: {
            demonLotusData: number;
            userData: number;
            expSum: number;
            isSucceed: number;
            isWeek: number;
            isMonth: number;
            delBagItems: number;
            genuineQiArr: number;
        };
        FightData: {
            isWin: number;
            star: number;
            vData: number;
            residueHp: number;
        };
        BossData: {
            originHp: number;
            curHp: number;
            bossId: number;
            startTime: number;
            endTime: number;
            inspireHurt: number;
            inspireEndTime: number;
            inspireNum: number;
            myHurt: number;
            myRank: number;
            myGuildName: number;
            myKey: number;
            callUserName: number;
            callUserGuildName: number;
            lastExitTime: number;
            isOver: number;
            isFirstEnter: number;
            type: number;
            isRepeat: number;
            callUserId: number;
            callUserGuildId: number;
        };
        ExBossData: {
            bossData: number;
            userData: number;
            bossEntity: number;
            delBagItems: number;
        };
        ExTreasureBossData: {
            bossData: number;
            bagItem: number;
        };
        ExBossEntity: {
            bossList: number;
            otherData: number;
            nowDate: number;
        };
        BossHurtRank: {
            userId: number;
            rank: number;
            icon: number;
            userName: number;
            guildName: number;
            hurt: number;
            vip: number;
        };
        BossResult: {
            isWin: number;
            totalHurt: number;
            myHurtRank: number;
            hurtGold: number;
            killTotalTime: number;
            firstHurtName: number;
            killUserName: number;
            bossId: number;
            items: number;
        };
        BossSaveResult: {
            rank10: number;
            callUserId: number;
            guildUserIds: number;
            callGuildName: number;
            hurtDic: number;
            isWin: number;
            killTotalTime: number;
            firstHurtName: number;
            killUserName: number;
        };
        BossResultData: {
            rank5: number;
            callUserName: number;
            callGuildName: number;
            firstHurtName: number;
            killUserName: number;
            myHurt: number;
            isWin: number;
        };
        FightResult: {
            winStatus: number;
            gold: number;
            items: number;
            honor: number;
            expc: number;
            killValue: number;
            pkValue: number;
            prestige: number;
            curRank: number;
            changeRank: number;
            hasChangeRank: number;
            attackMember: number;
            beAttackMember: number;
            mPkColor: number;
            ePkColor: number;
            isRevenge: number;
            coffersPerson: number;
            coffersCommon: number;
            coffersStatus: number;
            coffersPoints: number;
            coffersHurt: number;
            guildWarPoints: number;
            guildWarStatus: number;
            updateUser: number;
            updatePkOut: number;
            updateArena: number;
            bagItems: number;
            equipBagItems: number;
            guildData: number;
            guildPersonalData: number;
            updateCoffers: number;
        };
        ExCopyProgress: {
            copyProgress: number;
            userData: number;
            copyLoot: number;
            items: number;
            delBagItems: number;
            bagItems: number;
            equipBagItems: number;
            guildData: number;
            guildPersonalData: number;
            isWin: number;
            progress: number;
            damage: number;
            msg: number;
            wipeCount: number;
        };
        ServerInfo: {
            id: number;
            area: number;
            name: number;
            host: number;
            port: number;
            isNew: number;
            status: number;
        };
        LoginData: {
            sdkData: number;
            account: number;
            user: number;
            rechargeData: number;
            rank: number;
            offLineData: number;
            arenaData: number;
            copyProgressList: number;
            heroList: number;
            pkOut: number;
            lottery: number;
            task: number;
            lootTypeArr: number;
        };
        SDKData: {
            id: number;
            name: number;
            pic: number;
            sex: number;
            age: number;
        };
        ExAccount: {
            account: number;
            loginKey: number;
        };
        ExGuildData: {
            userData: number;
            guildData: number;
            guildPersonalData: number;
            chairmanName: number;
            rank: number;
            isGuild: number;
            isJoin: number;
            isAtherGuild: number;
            isMembersMax: number;
            dissolveId: number;
            items: number;
            bagItems: number;
            equipBagItems: number;
            isOpenBoss: number;
            isOpenGuildWar: number;
            cfgData: number;
        };
        ExRedEnvelopeData: {
            userData: number;
            guildPersonalData: number;
            redEnvelopeData: number;
            redEnvelopePersonalData: number;
            isGet: number;
            nameObj: number;
        };
        ExUserData: {
            userData: number;
            heroData: number;
            lotteryData: number;
            taskData: number;
            gold: number;
            expc: number;
            eventData: number;
            items: number;
            arenaData: number;
            shopData: number;
            isFriend: number;
            cheerCombat: number;
            friendCount: number;
            residueCount: number;
            pickAllItemsArr: number;
            pickAllItemsList: number;
            buyGoldResultArr: number;
            copyProgressData: number;
            gainArr: number;
            treasureValue: number;
            cosTreValue: number;
            vitality: number;
            offlineArr: number;
            isMail: number;
            isFull: number;
            bagItems: number;
            delBagItems: number;
            equipBagItems: number;
            delEquipBagArr: number;
            wingExp: number;
            isWingCrit: number;
            shopIdObj: number;
            showMsgArr: number;
            rebirthExp: number;
            strengthArr: number;
            genuineQi: number;
            wingCritNum: number;
            isGetSkill: number;
            baptizeValue: number;
        };
        ExCrystalData: {
            crystalData: number;
            beyondPer: number;
        };
        ExWarPrintedData: {
            medalData: number;
            medalTitle: number;
            isUpdata: number;
            delBagItems: number;
        };
        ExUserRankData: {
            userRankList: number;
            userRankData: number;
            userRank: number;
            guildName: number;
            value: number;
        };
        HeroChangeRecord: {
            type: number;
            fightType: number;
            enemyName: number;
            heroData: number;
            time: number;
            gold: number;
            isWin: number;
        };
        RechargeData: {
            countMap: number;
            cardTimeMap: number;
        };
        ExActivity: {
            activity: number;
            activityItems: number;
            todayRecharge: number;
            allRecharge: number;
            todayCost: number;
            allCost: number;
            isNeedOp: number;
            days: number;
            bgType: number;
            leftTime: number;
            maxPaymoney: number;
            luckValue: number;
        };
        ActivityItem: {
            items: number;
            diamond: number;
            rmb: number;
            userLvl: number;
            limitNum: number;
            discount: number;
            vipLvl: number;
            randomHero: number;
            wordSet: number;
            vPlan: number;
        };
        ExActivityData: {
            userData: number;
            bagItems: number;
            equipBagItems: number;
            lotteryItemsArr: number;
            mysterShopArr: number;
            luckyTalosItemArr: number;
            exItem: number;
            getGold: number;
        };
        SdkVipData: {
            isVip: number;
            vipLevel: number;
            score: number;
        };
        Rank: {
            rank: number;
            name: number;
            iconId: number;
            lvl: number;
            combat: number;
            killValue: number;
            vip: number;
            userId: number;
            pkValue: number;
            guildName: number;
        };
        PkOutUserData: {
            userId: number;
            name: number;
            iconId: number;
            killValue: number;
            gold: number;
            expc: number;
            lvl: number;
            pkValue: number;
            vip: number;
            combat: number;
            guildName: number;
            isTreasure: number;
        };
        ExPkOut: {
            pkOutData: number;
            heroList: number;
            enemyList: number;
            otherDataList: number;
            userData: number;
            hasNewDeal: number;
            fightData: number;
            guildData: number;
            guildPersonalData: number;
        };
        ExArena: {
            arenaData: number;
            heroList: number;
            otherDataList: number;
            fightData: number;
            userData: number;
        };
        PKUserData: {
            userId: number;
            name: number;
            iconId: number;
            combat: number;
            lvl: number;
            rank: number;
            vip: number;
            guildName: number;
        };
        ChatData: {
            uniqueId: number;
            type: number;
            sysArgs: number;
            userArgs: number;
            guildArgs: number;
            subType: number;
        };
        AllChatData: {
            worldChat: number;
            guildChat: number;
            isOri: number;
            guildId: number;
            userData: number;
            delBagItems: number;
        };
        AsyncData: {
            chat: number;
            redEnvelope: number;
            task: number;
            pkDeal: number;
            rankPkDeal: number;
            kefu: number;
            sysMsg: number;
            bePkKill: number;
            inspire: number;
            isBossOpen: number;
            buffArr: number;
            guildChat: number;
            isGuildChange: number;
            guildWarIsOpen: number;
        };
        AsyncData2: {
            lastUpdateTime: number;
            lootTypeArr: number;
        };
        ExTask: {
            taskData: number;
            updateId: number;
        };
        HandleRecharge: {
            userData: number;
            addDiamond: number;
            isFinish: number;
            rechargeId: number;
        };
        GuildMember: {
            lvl: number;
            nickName: number;
            combat: number;
            guildAct: number;
            position: number;
            ennoble: number;
            lastUpdateTime: number;
            iconId: number;
            vip: number;
            userId: number;
            offlineHour: number;
        };
        BonusInfo: {
            shareInfo: number;
            relations: number;
        };
        BonusShareData: {
            isFirst: number;
            relationCount: number;
            amountDraw: number;
            balance: number;
        };
        BonusRelationData: {
            id: number;
            userId: number;
            nickName: number;
            level: number;
            vip: number;
            amount: number;
        };
        BonusShareUrl: {
            url: number;
            gifted: number;
        };
        BonusDrawResult: {
            added: number;
            total: number;
        };
        FiveDaysTaret: {
            day: number;
            items: number;
        };
        ExFiveDaysTargetData: {
            value: number;
            rank: number;
        };
        ShowHeroData: {
            heroList: number;
            otherDataList: number;
            fightData: number;
        };
        ChallengeCupData: {
            isOpen: number;
            userId: number;
            nickName: number;
            iconId: number;
            lvl: number;
            vip: number;
            combat: number;
            guildName: number;
            guildLevel: number;
            challengerUserId: number;
            leftTime: number;
            nextChallengeTime: number;
            activityLeftTime: number;
            HeroDisplay: number;
            upCount: number;
            downCount: number;
            myOpNum: number;
        };
        ChampionDurationTimeRank: {
            rank: number;
            name: number;
            iconId: number;
            lvl: number;
            durationTime: number;
            userId: number;
            vip: number;
        };
        ExChallengeCupFight: {
            errCode: number;
            heroList: number;
            otherDataList: number;
            fightData: number;
            userData: number;
        };
        King: {
            myGuildId: number;
            myGuildName: number;
            kingGuildId: number;
            kingGuildName: number;
            kingGuildLvl: number;
            kingId: number;
            kingName: number;
            kingVip: number;
            kingLvl: number;
            kingHeroDisplay: number;
            beWorshipNum: number;
            beWorshipCount: number;
            buffOpenNum: number;
            buffOpenTime: number;
            buffEndTime: number;
        };
        ExKing: {
            king: number;
            userData: number;
            bagItems: number;
        };
        Rebirth: {
            userData: number;
            heroList: number;
        };
        Opening: {
            userData: number;
            diffExp: number;
        };
        ExCoffers: {
            coffers: number;
            userData: number;
            heroList: number;
            otherDataList: number;
            fightData: number;
            addBuildValue: number;
            addGold: number;
            addBuffExpc: number;
            delBagItems: number;
            coffersLvl: number;
            status: number;
        };
        CoffersRecord: {
            isWin: number;
            time: number;
            attackName: number;
            serverName: number;
            door: number;
            defeseName: number;
            recource: number;
            points: number;
        };
        CofferUser: {
            userId: number;
            serverId: number;
            door: number;
            rankType: number;
            icon: number;
            lvl: number;
            vip: number;
            name: number;
            combat: number;
            isLoot: number;
            isBreak: number;
            medalTitle: number;
            breakReplaySeconds: number;
        };
        ExDefenceData: {
            cofferUserArr: number;
            hpAdd: number;
            attackAdd: number;
            personResource: number;
            coffersResource: number;
            lootRate: number;
            breakNum: number;
            isCanLoot: number;
            todayLootNum: number;
            coffersLvl: number;
            curResource: number;
            serverName: number;
            serverId: number;
        };
        CoffersServer: {
            serverName: number;
            serverId: number;
            resource: number;
            isLootArr: number;
            isBreakArr: number;
        };
        WanbaGift: {
            code: number;
            message: number;
            userData: number;
            getGold: number;
            getDiamond: number;
            bagItems: number;
            equipBagItems: number;
        };
        MyGuildWarData: {
            groupId: number;
            guildReNum: number;
            guildRank: number;
            doorLives: number;
            points: number;
            nextFightTime: number;
            inspireEndTime: number;
            warEndTime: number;
            guildTotal: number;
            isDefence: number;
            myGuildRefreshId: number;
            serverId: number;
        };
        ExMyGuildWarData: {
            userData: number;
            myGuildWarData: number;
        };
        GuildWarSyncData: {
            myGuildWarData: number;
            fightRecordArr: number;
            guildList: number;
            attackData: number;
            defenceData: number;
        };
        GuildWarFightRecord: {
            id: number;
            type: number;
            attackData: number;
            beAttackData: number;
            time: number;
        };
        GuildServer: {
            serverName: number;
            serverId: number;
            guildId: number;
            guildName: number;
            guildLvl: number;
            doorLives: number;
            points: number;
            progress: number;
            maxPoints: number;
            lastLootTime: number;
        };
        GuildWarData: {
            doorList: number;
            guildId: number;
            guildName: number;
            cd: number;
            serverId: number;
        };
        GuildFightData: {
            heroList: number;
            otherDataList: number;
            fightData: number;
            directWin: number;
            myGuildWarData: number;
            isBreak: number;
            getPoints: number;
        };
        GuildWarDoor: {
            door: number;
            hp: number;
            userId: number;
            userName: number;
            userIcon: number;
            lastUserId: number;
            lastUserName: number;
            lastUserIcon: number;
            isBreak: number;
            lastDownTime: number;
        };
        GuildWarAllRank: {
            guildArr: number;
            chairArr: number;
            userArr: number;
        };
        GuildWarRank: {
            rank: number;
            guildId: number;
            guildName: number;
            points: number;
            serverId: number;
        };
        GuildWarUserRank: {
            rank: number;
            userId: number;
            userName: number;
            vip: number;
            iconId: number;
            guildName: number;
            points: number;
            serverId: number;
        };
        GuildWarDefenceRecord: {
            isWin: number;
            time: number;
            door: number;
            attackServerId: number;
            attackServerName: number;
            attackUserName: number;
            attackGuildName: number;
            defenceUserName: number;
            hp: number;
            isDirect: number;
        };
        GuildWarAttackRecord: {
            aServerId: number;
            aServerName: number;
            aUserName: number;
            aGuildName: number;
            dServerId: number;
            dServerName: number;
            dUserName: number;
            dGuildName: number;
            isBreak: number;
            door: number;
            time: number;
        };
        Incognito: {
            userData: number;
            openTime: number;
        };
        TreasureInfo: {
            id: number;
            itemId: number;
            openTime: number;
            status: number;
            items: number;
        };
        AccountServer: {
            myServerArr: number;
            lastServer: number;
            serverArr: number;
        };
        ServerNameInfo: {
            serverId: number;
            serverName: number;
        };
        ExPkOutInfo: {
            openTime: number;
            treasureInfo: number;
        };
        GuildWarServerSyncData: {
            guildWarObj: number;
            syncId: number;
        };
        ComposeInfo: {
            delBagItem: number;
            treasureInfo: number;
        };
        SyncGuildWarData: {
            serverName: number;
            serverId: number;
            serverHost: number;
            serverPort: number;
            guildId: number;
            guildName: number;
            guildLvl: number;
            doorLives: number;
            points: number;
            progress: number;
            groupId: number;
            doorData: number;
            rank: number;
            chairmanData: number;
            lastLootTime: number;
            fightRecordArr: number;
            refreshId: number;
            maxPoints: number;
        };
        SyncGuildWarUser: {
            userId: number;
            userName: number;
            guildId: number;
            guildName: number;
            points: number;
            vip: number;
            iconId: number;
            lastLootTime: number;
            rank: number;
            groupId: number;
            nextFightTime: number;
            inspireEndTime: number;
            guildPosition: number;
            nextUpTime: number;
            serverId: number;
        };
        SignData: {
            signGroupId: number;
            lastGroupId: number;
            lastGuildRank: number;
            lastUserRank: number;
            isPrize: number;
        };
        ExpeditionData: {
            expData: number;
            expHeroData: number;
            upUserData: number;
            finishData: number;
            heroList: number;
            otherDataList: number;
            fightData: number;
            finishLvl: number;
        };
    };
}
declare module gc {
    var id_c_game: {
        initCfg: number;
        monsterUpMult: number;
        skillRate: number;
        copyVipChest: number;
        fuckWord: number;
        strengthCfg: number;
        friends: number;
        goldBuySet: number;
        pkOutCfg: number;
        pkOutYellowLoot: number;
        pkOutRedLoot: number;
        pkOutHonor: number;
        pkOutLootGold: number;
        wingCrit: number;
        equipGrade: number;
        pkOutLootLimit: number;
        smeltEquip: number;
        smeltIntensify: number;
        gemInitial: number;
        gemLimit: number;
        patchSignCon: number;
        killValueMax: number;
        refreshTime: number;
        copyNeedItem: number;
        combatMult: number;
        copyIdSection: number;
        lotteryCfg: number;
        lotteryCostCfg: number;
        treasureChestCfg: number;
        arenaCfg: number;
        arenaRankCfg: number;
        shopCfg: number;
        lotteryShowCfg: number;
        chatCfg: number;
        equipBagCfg: number;
        vitalityCfg: number;
        honorStartCfg1: number;
        honorStartCfg2: number;
        dailyTasksCfg: number;
        offlineCfg: number;
        parRingCfg: number;
        guide: number;
        contactUs: number;
        openCfg: number;
        otherReward: number;
        tuLong: number;
        pkValueRange: number;
        pkCombatRange: number;
        pkCfg1: number;
        killChallengeCfg: number;
        guideCfg: number;
        battleSet: number;
        bossLootRate: number;
        revengeGolds: number;
        smeltGoldCfg: number;
        smeltDiamondCfg: number;
        smeltGoldLvlCfg: number;
        guildSet: number;
        gemLvlLimit: number;
        bossTesseraReplace: number;
        targetRank: number;
        guildAct: number;
        lootLimit: number;
        rebirth: number;
        challengeCupCfg: number;
        lowOraEquipCfg: number;
        mysterShopCfg: number;
        worldBossCfg: number;
        equipMinRandomCfg: number;
        inheritedEquip: number;
        redEnvelopeCfg: number;
        king: number;
        weekMonthCard: number;
        blueDiamond: number;
        demonLotusCfg: number;
        serverPk: number;
        coffers: number;
        customizationCfg: number;
        coffers2: number;
        equipRefineCfg: number;
        newBossCfg: number;
        heartStuntCfg: number;
        yellowDiamond: number;
        fightProtect: number;
        copyVip: number;
        coffers3: number;
        wxlinkCfg: number;
        guildCopyCfg: number;
        fourRole: number;
        towerCopy: number;
        guildWar: number;
        littlHorn: number;
        treasure: number;
        trumpCfg: number;
        vPlanCfg: number;
        skipFightCfg: number;
        newFourRank: number;
        newFourNeedValue: number;
        buyLingyunCfg: number;
        pkLoot: number;
        lotteryWillFall: number;
        talosWillFall: number;
    };
    var id_c_msgCode: {
        inputRoleName: number;
        sensitiveInRoleName: number;
        roleNameUsed: number;
        loginNoUser: number;
        loginNotNull: number;
        accountLengthNotCorrect: number;
        pwdLengthNotCorrect: number;
        loginFalse: number;
        regHasUser: number;
        pwdNotSame: number;
        regFalse: number;
        cRoleFalse: number;
        getRoleDataFalse: number;
        noLogin: number;
        regSucc: number;
        roleNameOutLenght: number;
        loginWordWrong: number;
        tooFrequently: number;
        buyLimitNow: number;
        accountLockout: number;
        deviceLockout: number;
        loggedInOtherDevice: number;
        outGame: number;
        connectFail: number;
        noOpenNow: number;
        cantGetNoCharge: number;
        cantGetNoDays: number;
        ifBuyLimitedItem: number;
        totalChargeNotEnough: number;
        totalChargeNotEnough1: number;
        totalCostNotEnough: number;
        engCostNotEnough: number;
        coinCostNotEnough: number;
        noCdKey: number;
        cdKeyRedeemed: number;
        alreadyGetcdKey: number;
        redeemRewardMail: number;
        cdKeyNull: number;
        activitiesEnd: number;
        getTomorrow: number;
        noHeroReward: number;
        noEventNow: number;
        checkYourNet: number;
        collectSuccess: number;
        collectRewardMail: number;
        collectWrong: number;
        noHonor: number;
        refreshShop: number;
        NoLvlOpen: number;
        cantSpeedUp: number;
        cantSkip: number;
        heroLvMax: number;
        noGoldsToUp: number;
        ifBuy: number;
        vipNotEnough: number;
        lvNotEnough: number;
        ifHeroUp: number;
        noMaterial: number;
        noGolds: number;
        buyGolds: number;
        noDiamond: number;
        onGetItems: number;
        copyNoPass: number;
        vipLess: number;
        cantUseMax: number;
        noCopyTimes: number;
        buyCopyTimes: number;
        noCopyItem: number;
        buyCopyItem: number;
        buyTimesMax: number;
        ifPatch: number;
        ifResetTime: number;
        cantRebirth: number;
        copyFightNow: number;
        findRival: number;
        findRival100: number;
        noReputation: number;
        noArenaTimes: number;
        buyArenaTimes: number;
        cleanArenaTime: number;
        userFighting: number;
        rankChanged: number;
        noWord: number;
        wordTooLong: number;
        wordIllegal: number;
        wordTooFast: number;
        ifBuyBag: number;
        ifBuyRole: number;
        noEquipNow: number;
        noCopyTimes1: number;
        buyCopyTimes1: number;
        bagMaxMail: number;
        bagMax: number;
        noRoleLvl: number;
        bagMaxCantGet: number;
        rewardMail: number;
        ifBuyAll: number;
        rewardInMail: number;
        nameToRedIfGo: number;
        ifClearPKPoint: number;
        noPKPoint: number;
        pkNoOpen: number;
        noLvlAuto: number;
        autoOpen: number;
        autoClose: number;
        goalNotGet: number;
        ifQuitGuild: number;
        enterGuildCd: number;
        enterOriginalGuildCd: number;
        enterGuildTimesMax: number;
        cantGdisband: number;
        ifGdisband: number;
        guildNameIsNull: number;
        guildNameTooLong: number;
        guildNameIllegal: number;
        ifCreateGuild: number;
        guildIdIsNull: number;
        guildIdIsExist: number;
        guildMembersMax: number;
        noPermission: number;
        worshippedTimesMax: number;
        worshipTimesMax: number;
        ifRetiringGuildMaster: number;
        noReceivedReward: number;
        fireMembersMax: number;
        ifFireMember: number;
        positionsMax: number;
        quitedTheGuild: number;
        ifPromote: number;
        ifRelieve: number;
        relieveCd: number;
        MembersMax: number;
        otherGuildEntered: number;
        noticeTooLong: number;
        noticeMax: number;
        noMailTitle: number;
        noMailBody: number;
        MailTitleIllegal: number;
        MailBodyIllegal: number;
        MailTitleTooLong: number;
        MailBodyTooLong: number;
        applicationMax: number;
        guildNameSame: number;
        permissionRelieved: number;
        enterGuildNow: number;
        waitForApprove: number;
        ifResrtCopy: number;
        noGuildActivePoint: number;
        rechargeSucceed: number;
        noGuildLevel: number;
        outGuild: number;
        noGuildLv: number;
        noTreasure: number;
        noGuildList: number;
        noPlayerGuildList: number;
        ifGquit: number;
        cantEnterGuildCd: number;
        someoneHoldArena: number;
        eventEnded: number;
        userBeInFignting: number;
        userChangeIfGoOn: number;
        noLvlgetKing: number;
        userBeInKing: number;
        ifSmeltHeirloom: number;
        eventNoStart: number;
        novLvAutoFight: number;
        inspireAdd: number;
        challengeBossCd: number;
        rewardTime: number;
        noLvlchallengeBoss: number;
        guildBossEscape: number;
        guildBossDead: number;
        touristForbidGuild: number;
        touristForbidTalk: number;
        noLvlToTalk: number;
        timeOutCantCall: number;
        noExperience: number;
        noBuyPrimaryRebirthTimes: number;
        noBuyMidRebirthTimes: number;
        noBuyAdvancedRebirthTimes: number;
        reincarnationOpen: number;
        noPosition: number;
        noMemberLv: number;
        notChooseLv: number;
        noFrequency: number;
        noIntegral: number;
        ifOpenBuff: number;
        noBuffTimes: number;
        packetMin20: number;
        packetMaxToday: number;
        packetSuccess: number;
        kingCome: number;
        noKingNow: number;
        noGuild: number;
        notOpen: number;
        actOver: number;
        battleActive: number;
        alreadyOver: number;
        banish: number;
        gatesBroken: number;
        noBattlePoint: number;
        gatesRobed: number;
        ifRobeGates: number;
        gatesBrokenByOthers: number;
        peaceTimeCantRobe: number;
        noLvlUse: number;
        outofGuild: number;
        mainProperty: number;
        fullProperty: number;
        choseCareer: number;
        noItemName: number;
        fuckword: number;
        nameToolong: number;
        choseProperty: number;
        makeItem: number;
        yourServerNoOpen: number;
        makeLvlBigger: number;
        ifSmeltCustom: number;
        notEnoughFeather: number;
        wingLevelRequire: number;
        noMedal: number;
        noMedalActivated: number;
        bossNegative: number;
        reinforceRequire: number;
        noMoreBoss: number;
        formulaNoOpen: number;
        ifLearnFormula: number;
        noGas: number;
        onlyoneAutoFight: number;
        worldBossEscape: number;
        noRightarena: number;
        gasNoOpen: number;
        vipRequire: number;
        vipNotimes: number;
        noGuardDown: number;
        disAgree: number;
        noMoreRob: number;
        outGuildBoss: number;
        guardExist: number;
        noCard: number;
        noBoom: number;
        buyTime: number;
        noReset: number;
        atkReset: number;
        noticeAutoBuyLittleHorn: number;
        noticeAutoBuyLittleHornVipNeed: number;
        noGuard: number;
        beGuard: number;
        careerNotOpen: number;
        guildLevelRequire: number;
        notReportTime: number;
        notGuildLeader: number;
        fightNotRight: number;
        memberFight: number;
        haveGuard: number;
        beAttacked: number;
        buyInspire: number;
        buyManyCD: number;
        guardDown: number;
        buyPerfusion: number;
        openNotice: number;
        noSnatch: number;
        noGuildOut: number;
        noGuildDisband: number;
        noGuildTransfer: number;
        noGuildExpel: number;
        noInspire: number;
        noLevelDown: number;
        towerNotOpen: number;
        resetCopy: number;
        defendCD: number;
        nowAttack: number;
        notPerfect: number;
        noticket: number;
        reGetMatch: number;
        vipLock: number;
        openMagicLV: number;
        haveNoGuard: number;
        noMagic: number;
        noSll: number;
        noYgy: number;
        reRecast: number;
        noSynthesis: number;
        haveTalismen: number;
        lowLevelTalismen: number;
        lowStarTailsmen: number;
        noCareer: number;
        talismanNotOpen: number;
        noPrivilege: number;
        giveUpRecover: number;
        openRole4LvNotEnough: number;
        noBossTime: number;
        reSummonBoss: number;
        reSummonLock: number;
        noLvlSummonBoss: number;
        noLvlActivity: number;
        changeheartStunt: number;
        cantBusMax: number;
        noRole: number;
        vipItemRequire: number;
        functionOpen: number;
        vipCall: number;
        sysNotice: number;
        offlineGain: number;
        firstEnterGame: number;
        wxFollow: number;
        ifSellItem: number;
        ifSellItem2: number;
        ifSellItem3: number;
        wordBeBend: number;
        errIfaceCode: number;
        vPlan: number;
        vPlan2: number;
        majongLuckyPoint: number;
        majongLuckyPointMax: number;
        majongLuckyBonusTips: number;
    };
    var id_c_open: {
        openRole2: number;
        openRole3: number;
        strength: number;
        pkOut: number;
        wing: number;
        star: number;
        stone: number;
        equipCopy: number;
        arena: number;
        bossCopy: number;
        reamCopy: number;
        stoneShop: number;
        ream: number;
        shop: number;
        autoFight: number;
        rebirth: number;
        challengeCup: number;
        guild: number;
        redEnvelope: number;
        worldboss: number;
        expBox: number;
        serverPk: number;
        coffers: number;
        heartStunt1: number;
        heartStunt2: number;
        heartStunt3: number;
        vipheartStunt2: number;
        vipheartStunt3: number;
        paTa: number;
        openRole4: number;
        openTrump: number;
        fightList: number;
        buzhen: number;
    };
}
declare module gc {
    var iface: {
        a_activity_buyMysterShop: string;
        a_activity_buyMysterShop_args: {
            activityId: string;
            index: string;
        };
        a_activity_getList: string;
        a_activity_receive: string;
        a_activity_receive_args: {
            activityId: string;
            index: string;
        };
        a_activity_getIsNeedOperate: string;
        a_activity_patchSign: string;
        a_activity_patchSign_args: {
            activityId: string;
        };
        a_activity_report: string;
        a_activity_report_args: {
            activityId: string;
            report: string;
        };
        a_arena_getInfo: string;
        a_arena_resetFightRanks: string;
        a_arena_fightStart: string;
        a_arena_fightStart_args: {
            rank: string;
        };
        a_arena_fightEnd: string;
        a_arena_fightEnd_args: {
            rank: string;
            isWin: string;
            fightData: string;
        };
        a_arena_getFightUserList: string;
        a_arena_buyPKNum: string;
        a_arena_getRecordList: string;
        a_arena_getRecordList_args: {
            index: string;
            count: string;
        };
        a_arena_setRead: string;
        a_arena_pickRankAward: string;
        a_arena_refreshCD: string;
        a_arena_getRankList: string;
        a_arena_getRefreshRemainTime: string;
        a_bonus_getInfo: string;
        a_bonus_getInfo_args: {
            lastId: string;
        };
        a_bonus_breakRelation: string;
        a_bonus_breakRelation_args: {
            inviteeUserId: string;
        };
        a_bonus_share: string;
        a_bonus_share_args: {
            serverIndexId: string;
        };
        a_bonus_draw: string;
        a_bonus_sendShareGift: string;
        a_boss_getGuildBossList: string;
        a_boss_getWorldBossList: string;
        a_boss_openBoss: string;
        a_boss_openBoss_args: {
            bossId: string;
            isLock: string;
        };
        a_boss_enter: string;
        a_boss_enter_args: {
            bossId: string;
        };
        a_boss_startFight: string;
        a_boss_startFight_args: {
            bossId: string;
        };
        a_boss_hurt: string;
        a_boss_hurt_args: {
            bossId: string;
            hurtDic: string;
            isEnd: string;
            mData: string;
            hurtArr: string;
        };
        a_boss_exitFight: string;
        a_boss_exitFight_args: {
            bossId: string;
        };
        a_boss_clearFightCd: string;
        a_boss_inspire: string;
        a_boss_inspire_args: {
            bossId: string;
        };
        a_boss_getInspireRecordArr: string;
        a_boss_getInspireRecordArr_args: {
            bossId: string;
        };
        a_boss_syncInspire: string;
        a_boss_syncInspire_args: {
            bossId: string;
        };
        a_boss_getHurtRankList: string;
        a_boss_getHurtRankList_args: {
            bossId: string;
        };
        a_boss_getFirstHurtRank: string;
        a_boss_getFirstHurtRank_args: {
            bossId: string;
        };
        a_boss_getBossResult: string;
        a_boss_getBossResult_args: {
            bossId: string;
            originBossId: string;
        };
        a_boss_getResultData: string;
        a_boss_getResultData_args: {
            originBossId: string;
        };
        a_demonLotus_getInfo: string;
        a_demonLotus_upLotus: string;
        a_demonLotus_getRevenue: string;
        a_demonLotus_opening: string;
        a_demonLotus_lotusAdvance: string;
        a_demonLotus_treasureTrain: string;
        a_mail_getList: string;
        a_mail_pickItems: string;
        a_mail_pickItems_args: {
            mailId: string;
        };
        a_mail_pickAllItems: string;
        a_mail_setRead: string;
        a_mail_setRead_args: {
            mailId: string;
        };
        a_mail_getIsNeedOperate: string;
        a_mail_getIsNeedOperate_args: {
            mailId: string;
        };
        a_event_eventBuy: string;
        a_event_eventBuy_args: {
            eventId: string;
        };
        a_equip_changeEquip: string;
        a_equip_changeEquip_args: {
            tempId: string;
            index: string;
            equipId: string;
        };
        a_equip_inheritedEquip: string;
        a_equip_inheritedEquip_args: {
            equipId: string;
            tempId: string;
        };
        a_equip_customization: string;
        a_equip_customization_args: {
            certificate: string;
            job: string;
            name: string;
            lvl: string;
            abilityIndex: string;
            equipType: string;
        };
        a_equip_upCustomization: string;
        a_equip_upCustomization_args: {
            equipId: string;
        };
        a_equip_updateEquipItemLockStatus: string;
        a_equip_updateEquipItemLockStatus_args: {
            equipId: string;
            isLocked: string;
        };
        a_equip_sellEquipItems: string;
        a_equip_sellEquipItems_args: {
            equipIdArr: string;
        };
        a_user_getInfo: string;
        a_user_changeName: string;
        a_user_changeName_args: {
            name: string;
            heroTempId: string;
        };
        a_user_upLvl: string;
        a_user_syncData: string;
        a_user_syncData_args: {
            sendData: string;
        };
        a_user_syncData2: string;
        a_user_getBagChest: string;
        a_user_getBagChest_args: {
            chestId: string;
            count: string;
        };
        a_user_buyGold: string;
        a_user_buyLingyun: string;
        a_user_getRedPoint: string;
        a_user_updateGuide: string;
        a_user_updateGuide_args: {
            guideId: string;
        };
        a_user_getWinRecord: string;
        a_user_getLoseRecord: string;
        a_user_buyToUpLvl: string;
        a_user_saveDeskSuccess: string;
        a_user_saveDeskSuccess_args: {
            type: string;
        };
        a_user_setHeroEmbattle: string;
        a_user_setHeroEmbattle_args: {
            heroEmbattle: string;
        };
        a_user_buyBagGrid: string;
        a_user_updateCombat: string;
        a_user_setAutoFight: string;
        a_user_setAutoFight_args: {
            isAuto: string;
        };
        a_user_setTimeError: string;
        a_user_setTimeError_args: {
            errorNum: string;
        };
        a_user_setTodayRankWin: string;
        a_user_setTodayRankWin_args: {
            eid: string;
        };
        a_user_getWarPrintedList: string;
        a_user_warPrintedStrength: string;
        a_user_warPrintedStrength_args: {
            warPrintedId: string;
        };
        a_user_setMedalTitle: string;
        a_user_setMedalTitle_args: {
            warPrintedId: string;
        };
        a_user_getGenuineQi: string;
        a_user_activeMedal: string;
        a_user_activeMedal_args: {
            warPrintedId: string;
        };
        a_user_getBindPhoneUrl: string;
        a_user_getWanbagift: string;
        a_user_getWanbagift_args: {
            os: string;
            giftId: string;
        };
        a_user_updateSetting: string;
        a_user_updateSetting_args: {
            catNoVipChat: string;
            autoBuyLittleHorn: string;
        };
        a_user_updateItems4Bag: string;
        a_user_updateItems4Bag_args: {
            itemId: string;
        };
        a_friend_getInfo: string;
        a_friend_requestFriend: string;
        a_friend_requestFriend_args: {
            requestedId: string;
        };
        a_friend_disposeFriendRequest: string;
        a_friend_disposeFriendRequest_args: {
            requestId: string;
            isTake: string;
        };
        a_friend_eventCheer: string;
        a_friend_getRequestInfo: string;
        a_fight_pickLoot: string;
        a_fight_pickLoot_args: {
            copyId: string;
            uidArr: string;
            fightData: string;
        };
        a_fight_revive: string;
        a_fight_getAndInitNextLoot: string;
        a_fight_getAndInitNextLoot_args: {
            copyId: string;
            isBoss: string;
            lvl: string;
        };
        a_fiveDaysTarget_getInfo: string;
        a_fiveDaysTarget_getInfo1: string;
        a_guild_getInfo: string;
        a_guild_establishGuild: string;
        a_guild_establishGuild_args: {
            name: string;
        };
        a_guild_seekGuild: string;
        a_guild_seekGuild_args: {
            guildId: string;
        };
        a_guild_joinGuild: string;
        a_guild_joinGuild_args: {
            guildId: string;
        };
        a_guild_getAppliedMembers: string;
        a_guild_appliedMembersSet: string;
        a_guild_appliedMembersSet_args: {
            tUserId: string;
            isConsent: string;
        };
        a_guild_guildSetting: string;
        a_guild_guildSetting_args: {
            joinCon: string;
            joinLvl: string;
        };
        a_guild_exitGuild: string;
        a_guild_setNotice: string;
        a_guild_setNotice_args: {
            notice: string;
        };
        a_guild_lottery: string;
        a_guild_lottery_args: {
            count: string;
        };
        a_guild_setEnnoble: string;
        a_guild_setEnnoble_args: {
            targetUserId: string;
            ennobleType: string;
        };
        a_guildPerson_pickAct: string;
        a_guildPerson_pickAct_args: {
            actId: string;
        };
        a_guildPerson_getMemberList: string;
        a_guildPerson_opMember: string;
        a_guildPerson_opMember_args: {
            targetUserId: string;
            op: string;
        };
        a_guildWar_getInfo: string;
        a_guildWar_getGuildList: string;
        a_guildWar_getGuildList_args: {
            guildId: string;
        };
        a_guildWar_getWarAttackData: string;
        a_guildWar_getWarAttackData_args: {
            serverId: string;
            guildId: string;
        };
        a_guildWar_getWarDefenceData: string;
        a_guildWar_getWarDefenceData_args: {
            guildId: string;
        };
        a_guildWar_getDefenceRecordList: string;
        a_guildWar_getAttackRecordList: string;
        a_guildWar_getGuildWarAllRank: string;
        a_guildWar_getLastRankList: string;
        a_guildWar_getLastRankList_args: {
            groupId: string;
        };
        a_guildWar_getSignUpData: string;
        a_guildWar_getSignUpData_args: {
            guildId: string;
        };
        a_guildWar_signUp: string;
        a_guildWar_signUp_args: {
            groupId: string;
        };
        a_guildWar_fightStartDoor: string;
        a_guildWar_fightStartDoor_args: {
            serverId: string;
            guildId: string;
            door: string;
        };
        a_guildWar_fightEndDoor: string;
        a_guildWar_fightEndDoor_args: {
            serverId: string;
            guildId: string;
            door: string;
            isWin: string;
        };
        a_guildWar_upDoor: string;
        a_guildWar_upDoor_args: {
            door: string;
        };
        a_guildWar_downDoor: string;
        a_guildWar_downDoor_args: {
            door: string;
        };
        a_guildWar_enter: string;
        a_guildWar_clearCd: string;
        a_guildWar_inspire: string;
        a_guildWar_syncData: string;
        a_guildWar_syncData_args: {
            sceneType: string;
            attackData: string;
        };
        a_honor_getInfo: string;
        a_honor_getAward: string;
        a_honor_getAward_args: {
            honorId: string;
        };
        a_honor_bugAlter: string;
        a_heartStunt_getInfo: string;
        a_heartStunt_choMenCulMethods: string;
        a_heartStunt_choMenCulMethods_args: {
            index: string;
            heartStuntId: string;
        };
        a_heartStunt_stuMenCulMethods: string;
        a_heartStunt_stuMenCulMethods_args: {
            index: string;
        };
        a_heartStunt_chaMenCulMethods: string;
        a_heartStunt_chaMenCulMethods_args: {
            index: string;
            heartStuntId: string;
        };
        a_hero_callHero: string;
        a_hero_callHero_args: {
            tempId: string;
            sex: string;
        };
        a_hero_upSkill: string;
        a_hero_upSkill_args: {
            tempId: string;
            index: string;
        };
        a_hero_clearSkillCd: string;
        a_hero_wearRune: string;
        a_hero_wearRune_args: {
            tempId: string;
            index: string;
        };
        a_hero_upRealm: string;
        a_hero_upRealm_args: {
            tempId: string;
        };
        a_hero_strength: string;
        a_hero_strength_args: {
            tempId: string;
            index: string;
        };
        a_hero_equipRefine: string;
        a_hero_equipRefine_args: {
            tempId: string;
            index: string;
        };
        a_hero_upStar: string;
        a_hero_upStar_args: {
            tempId: string;
            index: string;
        };
        a_hero_starTop: string;
        a_hero_starTop_args: {
            tempId: string;
            index: string;
        };
        a_hero_upGem: string;
        a_hero_upGem_args: {
            tempId: string;
            index: string;
        };
        a_hero_wingFos: string;
        a_hero_wingFos_args: {
            tempId: string;
            fosType: string;
        };
        a_hero_wingStrength: string;
        a_hero_wingStrength_args: {
            tempId: string;
            part: string;
            isReplace: string;
        };
        a_hero_wingFos2Top: string;
        a_hero_wingFos2Top_args: {
            tempId: string;
            fosType: string;
            isUseDiamond: string;
        };
        a_hero_upWing: string;
        a_hero_upWing_args: {
            tempId: string;
        };
        a_hero_wingActivate: string;
        a_hero_wingActivate_args: {
            tempId: string;
        };
        a_hero_calPropAndCombat: string;
        a_hero_getMainHeroDisplay: string;
        a_hero_getMainHeroDisplay_args: {
            userId: string;
        };
        a_hero_getHeroDisplayByTempId: string;
        a_hero_getHeroDisplayByTempId_args: {
            userId: string;
            tempId: string;
        };
        a_hero_getShowHeroData: string;
        a_hero_getShowHeroData_args: {
            userId: string;
        };
        a_hero_wearAllRune: string;
        a_hero_wearAllRune_args: {
            tempId: string;
        };
        a_hero_autoInfuseSwitch: string;
        a_hero_autoInfuseSwitch_args: {
            isOpenIn: string;
        };
        a_hero_extraInfuse: string;
        a_hero_extraInfuse_args: {
            type: string;
        };
        a_hero_saveFightList: string;
        a_hero_saveFightList_args: {
            fightArr: string;
        };
        a_lottery_lottery: string;
        a_lottery_lottery_args: {
            type: string;
            count: string;
        };
        a_lottery_getTreasureChest: string;
        a_lottery_getInfo: string;
        a_task_getInfo: string;
        a_task_taskAward: string;
        a_task_taskAward_args: {
            taskId: string;
        };
        a_task_getVitalityChest: string;
        a_task_getVitalityChest_args: {
            index: string;
        };
        a_pk_buyPKNum: string;
        a_pk_getPKUserList: string;
        a_pk_getPKUserData: string;
        a_pk_getPKUserData_args: {
            userId: string;
        };
        a_pk_fight: string;
        a_pk_fight_args: {
            enemyId: string;
            isNPC: string;
            fightType: string;
        };
        a_pk_getEnemyList: string;
        a_pk_getUserRanks: string;
        a_pk_getRank: string;
        a_pk_changeSign: string;
        a_pk_changeSign_args: {
            sign: string;
        };
        a_pk_setRead: string;
        a_pk_skip: string;
        a_pk_pickRankAward: string;
        a_pk_getEnemyRecord: string;
        a_pk_getEnemyRecord_args: {
            enemyId: string;
        };
        a_pk_getList: string;
        a_pkOut_open: string;
        a_pkOut_getEnemyList: string;
        a_pkOut_getRevengeEnemyList: string;
        a_pkOut_refreshEnemy: string;
        a_pkOut_start: string;
        a_pkOut_start_args: {
            enemyId: string;
            fightType: string;
            isRevenge: string;
        };
        a_pkOut_end: string;
        a_pkOut_end_args: {
            isWin: string;
            enemyId: string;
            fightData: string;
            fightType: string;
            isRevenge: string;
        };
        a_pkOut_getRankList: string;
        a_pkOut_getMyRank: string;
        a_pkOut_getPkRecordList: string;
        a_pkOut_getRankPkRecordList: string;
        a_pkOut_setPkRecordRead: string;
        a_pkOut_dealRecord: string;
        a_pkOut_dealRecord_args: {
            fightType: string;
        };
        a_pkOut_clearPkValue: string;
        a_pkOut_resetBePkKill: string;
        a_pkOut_incognito: string;
        a_pkOut_getTreasurePkRecordList: string;
        a_shop_getInfo: string;
        a_shop_getInfo_args: {
            type: string;
        };
        a_shop_refreshExShop: string;
        a_shop_refreshExShop_args: {
            type: string;
            lvlRefresh: string;
        };
        a_shop_buy: string;
        a_shop_buy_args: {
            index: string;
            type: string;
            num: string;
        };
        a_shop_buyAll: string;
        a_shop_buyAll_args: {
            type: string;
        };
        a_copy_getInfo: string;
        a_copy_getInfo_args: {
            type: string;
        };
        a_copy_buyCopyCount: string;
        a_copy_buyCopyCount_args: {
            type: string;
            copyId: string;
        };
        a_copy_buyEquipTessera: string;
        a_copy_buyRealmTessera: string;
        a_copy_copyWipe: string;
        a_copy_copyWipe_args: {
            copyId: string;
        };
        a_copy_start: string;
        a_copy_start_args: {
            copyId: string;
            biCost: string;
        };
        a_copy_end: string;
        a_copy_end_args: {
            copyId: string;
            fightData: string;
            isWin: string;
        };
        a_copy_updateWinningStreak: string;
        a_copy_updateWinningStreak_args: {
            copyId: string;
        };
        a_copy_setRead: string;
        a_copy_setRead_args: {
            copyId: string;
        };
        a_copy_guildStart: string;
        a_copy_guildStart_args: {
            copyId: string;
            bossId: string;
        };
        a_copy_guildEnd: string;
        a_copy_guildEnd_args: {
            copyId: string;
            bossId: string;
            isWin: string;
        };
        a_copy_guildCopyAward: string;
        a_copy_guildCopyAward_args: {
            type: string;
            typeId: string;
        };
        a_copy_guildCopyReset: string;
        a_copy_clearGuildCopy: string;
        a_copy_clearGuildCopy_args: {
            bossId: string;
        };
        a_copy_paTaAward: string;
        a_copy_paTaAward_args: {
            copyId: string;
        };
        a_copy_paTaTreasury: string;
        a_challengeCup_getInfo: string;
        a_challengeCup_startFight: string;
        a_challengeCup_startFight_args: {
            championUserId: string;
        };
        a_challengeCup_endFight: string;
        a_challengeCup_endFight_args: {
            isWin: string;
        };
        a_challengeCup_clearCd: string;
        a_challengeCup_toBeChampion: string;
        a_challengeCup_getDurationTimeRankList: string;
        a_challengeCup_getIsOpen: string;
        a_challengeCup_op: string;
        a_challengeCup_op_args: {
            op: string;
        };
        a_crystal_getInfo: string;
        a_crystal_saveProgress: string;
        a_crystal_saveProgress_args: {
            hp: string;
            hpNum: string;
            nextReplayTime: string;
        };
        a_crystal_finish: string;
        a_crystal_finish_args: {
            crystalId: string;
        };
        a_crystal_pickAward: string;
        a_crystal_pickAward_args: {
            crystalId: string;
        };
        a_crystal_useSkill: string;
        a_crystal_useSkill_args: {
            index: string;
        };
        a_crystal_refreshSkillCd: string;
        a_crystal_refreshSkillCd_args: {
            index: string;
        };
        a_rank_getRankList: string;
        a_rank_getRankList_args: {
            rankType: string;
        };
        a_rank_getUserRank: string;
        a_rank_getUserRank_args: {
            rankType: string;
        };
        a_rank_allRankArr: string;
        a_rank_allRankArr_args: {
            rankType: string;
        };
        a_rank_getGuildRank: string;
        a_rank_getGuildRank_args: {
            rankType: string;
        };
        a_rebirth_rebirth: string;
        a_rebirth_buyRebirth: string;
        a_rebirth_buyRebirth_args: {
            index: string;
            num: string;
        };
        a_recharge_getInfo: string;
        a_recharge_recharge: string;
        a_recharge_recharge_args: {
            rechargeId: string;
            channelId: string;
            receiptData: string;
        };
        a_recharge_getTodayCount: string;
        a_recharge_getAllCount: string;
        a_recharge_getRequest: string;
        a_recharge_getRequest_args: {
            rechargeId: string;
            goodsId: string;
        };
        a_recharge_handleRequest: string;
        a_redEnvelope_getList: string;
        a_redEnvelope_sendRedEnvelope: string;
        a_redEnvelope_sendRedEnvelope_args: {
            type: string;
            spItemId: string;
            amount: string;
            personNum: string;
            wish: string;
        };
        a_redEnvelope_syncRedEnvelope: string;
        a_redEnvelope_getNewList: string;
        a_redEnvelope_getNewList_args: {
            lastId: string;
        };
        a_redEnvelope_receiveBonus: string;
        a_redEnvelope_receiveBonus_args: {
            redEnvelopeId: string;
        };
        a_redEnvelopePersonal_getInfo: string;
        a_chat_getNewList: string;
        a_chat_getNewList_args: {
            lastId: string;
            guildId: string;
            guildLastId: string;
        };
        a_chat_getNewSysMsgList: string;
        a_chat_getNewSysMsgList_args: {
            lastId: string;
        };
        a_chat_sendData: string;
        a_chat_sendData_args: {
            content: string;
            lastId: string;
            type: string;
            guildId: string;
            guildLastId: string;
            isLittleHorn: string;
        };
        a_coupon_use: string;
        a_coupon_use_args: {
            code: string;
        };
        a_coffers_getInfo: string;
        a_coffers_build: string;
        a_coffers_addBuff: string;
        a_coffers_getLootRecordArr: string;
        a_coffers_getDefeseRecord: string;
        a_coffers_getDefeseData: string;
        a_coffers_getEnemyDefeseData: string;
        a_coffers_getEnemyDefeseData_args: {
            serverId: string;
        };
        a_coffers_getServerArr: string;
        a_coffers_fightStart: string;
        a_coffers_fightStart_args: {
            serverId: string;
            door: string;
        };
        a_coffers_fightEnd: string;
        a_coffers_fightEnd_args: {
            serverId: string;
            door: string;
            isWin: string;
            fightData: string;
        };
        a_coffers_fightCoffersStart: string;
        a_coffers_fightCoffersStart_args: {
            serverId: string;
        };
        a_coffers_fightCoffersEnd: string;
        a_coffers_fightCoffersEnd_args: {
            hurt: string;
            serverId: string;
            fightData: string;
        };
        a_sdk_getVip: string;
        a_smelt_smelt: string;
        a_smelt_smelt_args: {
            equipArr: string;
            choColor: string;
        };
        a_smelt_compound: string;
        a_smelt_compound_args: {
            compoundId: string;
        };
        a_smelt_wearParRing: string;
        a_smelt_wearParRing_args: {
            tempId: string;
            breakId: string;
        };
        a_smelt_ringBreak: string;
        a_smelt_ringBreak_args: {
            tempId: string;
            breakId: string;
        };
        a_king_getInfo: string;
        a_king_worship: string;
        a_king_receiveWelfare: string;
        a_king_openBuff: string;
        a_item_sellItems: string;
        a_item_sellItems_args: {
            itemId: string;
            itemNum: string;
        };
        a_treasure_spies: string;
        a_treasure_getExPkOutInfo: string;
        a_treasure_open: string;
        a_treasure_open_args: {
            id: string;
        };
        a_treasure_compose: string;
        a_treasure_compose_args: {
            itemId: string;
        };
        a_talisman_useTrumpItem: string;
        a_talisman_useTrumpItem_args: {
            itemId: string;
        };
        a_talisman_wearTrump: string;
        a_talisman_wearTrump_args: {
            tempId: string;
            trumpId: string;
        };
        a_talisman_upTrumpLvl: string;
        a_talisman_upTrumpLvl_args: {
            tempId: string;
            trumpId: string;
        };
        a_talisman_upTrumpStar: string;
        a_talisman_upTrumpStar_args: {
            tempId: string;
            trumpId: string;
        };
        a_talisman_recastTrump: string;
        a_talisman_recastTrump_args: {
            tempId: string;
            trumpId: string;
        };
        a_talisman_compoundTrump: string;
        a_talisman_compoundTrump_args: {
            tempId: string;
            trumpId: string;
        };
        a_talisman_baptizeTrump: string;
        a_talisman_baptizeTrump_args: {
            tempId: string;
            trumpId: string;
            isCheck: string;
        };
        a_talisman_confirmBaptizeTrump: string;
        a_talisman_confirmBaptizeTrump_args: {
            tempId: string;
            trumpId: string;
        };
        a_talisman_cancelBaptizeTrump: string;
        a_talisman_cancelBaptizeTrump_args: {
            tempId: string;
            trumpId: string;
        };
        a_expedition_getInfo: string;
        a_expedition_wearSoul: string;
        a_expedition_wearSoul_args: {
            tempId: string;
            soulId: string;
        };
        a_expedition_startBattle: string;
        a_expedition_startBattle_args: {
            stageId: string;
        };
        a_expedition_endBattle: string;
        a_expedition_endBattle_args: {
            isWin: string;
            herosHp: string;
        };
        a_expedition_buyBlackItem: string;
        a_expedition_buyBlackItem_args: {
            itemId: string;
        };
        c_account_enterGame: string;
        c_account_enterGame_args: {
            accountId: string;
            loginKey: string;
            serverIndexId: string;
        };
        c_account_createUser: string;
        c_account_createUser_args: {
            name: string;
            heroTempId: string;
            sex: string;
            serverIndexId: string;
            shareKey: string;
        };
        c_account_getThirdUserInfo: string;
        c_net_connect: string;
        c_net_disconnect: string;
        c_net_disconnect_args: {
            sessionId: string;
        };
        c_net_getServerDate: string;
        h_account_login: string;
        h_account_login_args: {
            name: string;
            pwd: string;
            channelId: string;
        };
        h_account_loginBySdk: string;
        h_account_loginBySdk_args: {
            channelId: string;
            sdkData: string;
            deviceId: string;
        };
        h_account_register: string;
        h_account_register_args: {
            name: string;
            pwd: string;
            channelId: string;
            deviceId: string;
        };
        h_notice_getNewOne: string;
        h_notice_getList: string;
        h_protocolContent_getInfo: string;
        h_serverInfo_getServerList: string;
        h_serverInfo_getServerList_args: {
            isTest: string;
        };
        h_serverInfo_getServerInfo: string;
        h_serverInfo_getServerInfo_args: {
            id: string;
        };
        h_serverInfo_getServerDate: string;
        h_serverInfo_getUserServers: string;
        h_serverInfo_getUserServers_args: {
            accountId: string;
        };
        h_serverInfo_getaccountServers: string;
        h_serverInfo_getaccountServers_args: {
            openId: string;
            appId: string;
            isTest: string;
        };
        h_kefu_getList: string;
        h_kefu_getList_args: {
            lastId: string;
            openId: string;
        };
        h_kefu_sendData: string;
        h_kefu_sendData_args: {
            lastId: string;
            content: string;
            openId: string;
            nickname: string;
            vipLevel: string;
        };
        admin_coffers_lootDefense: string;
        admin_coffers_lootDefense_args: {
            attackData: string;
            door: string;
        };
        admin_coffers_lootCoffersDefense: string;
        admin_coffers_lootCoffersDefense_args: {
            hurt: string;
            breakNum: string;
        };
        admin_coffers_getCache: string;
        admin_coffers_resetPoints: string;
        admin_coffers_updateCache: string;
        admin_coffers_updateCache_args: {
            data: string;
        };
        admin_guild_getCache: string;
        admin_guild_getGuildById: string;
        admin_guild_getGuildById_args: {
            id: string;
        };
        admin_guild_updateCache: string;
        admin_guild_updateCache_args: {
            id: string;
            data: string;
        };
        admin_guild_getZombieGuild: string;
        admin_guild_clearZombieGuild: string;
        admin_guild_clearZombieGuild_args: {
            id: string;
            data: string;
        };
        admin_guild_chairmanImpeach: string;
        admin_boss_getBossData: string;
        admin_boss_getBossData_args: {
            bossId: string;
        };
        admin_boss_getUserCache: string;
        admin_boss_getUserCache_args: {
            bossId: string;
        };
        admin_boss_getGuildById: string;
        admin_boss_getGuildById_args: {
            id: string;
        };
        admin_boss_updateBossCache: string;
        admin_boss_updateBossCache_args: {
            data: string;
        };
        admin_boss_updateUserCache: string;
        admin_boss_updateUserCache_args: {
            id: string;
            data: string;
        };
        admin_chat_serversChat: string;
        admin_chat_serversChat_args: {
            nickName: string;
            vip: string;
            content: string;
            isGM: string;
            guildName: string;
            medalTitle: string;
            isLittleHorn: string;
        };
        admin_guildWar_lootDefense: string;
        admin_guildWar_lootDefense_args: {
            attackData: string;
            isWin: string;
            defenceData: string;
        };
        admin_guildWar_pushBeFightRecord: string;
        admin_guildWar_pushBeFightRecord_args: {
            guildId: string;
            data: string;
        };
        admin_guildWar_getCurServerGuildWarObj: string;
        admin_guildWar_enter100User: string;
        admin_guildWarSync_getSyncServer: string;
        admin_guildWarSync_getSyncServer_args: {
            curServerData: string;
        };
        admin_treasure_getTreasureCash: string;
        admin_treasure_getTreasureByUserId: string;
        admin_treasure_setTreasureByUserId: string;
        admin_treasure_setTreasureByUserId_args: {
            userId: string;
        };
    };
}
/**
 * Created by SmallAiTT on 2015/5/4.
 */
declare module IModuleParam {
    interface IModuleParam extends mo.IModuleParam {
        subModuleId: number;
        param: any;
    }
    interface Forge extends IModuleParam {
    }
    interface Role extends IModuleParam {
    }
    interface Enemy extends IModuleParam {
        userId: any;
        hecs: Array<any>;
    }
    interface Copy extends IModuleParam {
        copyList: any;
        copyType: number;
    }
    interface VipCopy extends Copy {
        vip: number;
    }
    interface Home extends IModuleParam {
    }
    interface Shop extends IModuleParam {
        itemList: any;
    }
    interface Fight extends IModuleParam {
    }
    interface Rank extends IModuleParam {
        rankData?: any;
        rankType?: any;
    }
    interface Mail extends IModuleParam {
        mails: any;
    }
    interface Arena extends IModuleParam {
        mails: any;
    }
    interface Vip extends IModuleParam {
        showVipLv: any;
    }
    interface GuildList extends IModuleParam {
        guildPersonalData: any;
        guildData: any;
    }
    interface GuildMine extends IModuleParam {
        guildPersonalData: any;
        guildData: any;
        guildManagerName: any;
        guildRank: any;
    }
    interface EventWonderful extends IModuleParam {
        result?: any;
        type?: any;
    }
    interface WorldBoss extends IModuleParam {
        bossId: any;
    }
    interface GuildBossInspire extends WorldBoss {
        inspireId: any;
    }
    interface RedPacket extends IModuleParam {
        data: any;
    }
    interface DefArena extends IModuleParam {
        info: any;
    }
    interface Lotus extends IModuleParam {
        data: any;
    }
    interface Custom extends IModuleParam {
        itemId: any;
        color: any;
    }
    interface Medal extends IModuleParam {
        warPrints: any;
    }
    interface GuildCopySection extends IModuleParam {
        section: any;
    }
    interface Villian extends IModuleParam {
    }
}
declare module g_consts {
    var moduleId: {
        index: string;
        home: string;
        forge: string;
        role: string;
        fight: string;
        guild: string;
        guildwar: string;
        bag: string;
        shop: string;
        gift: string;
        mail: string;
        copyEntry: string;
        equipCopy: string;
        stateCopy: string;
        bossCopy: string;
        vipCopy: string;
        rank: string;
        taskDlg: string;
        smelting: string;
        practice: string;
        firstRecharge: string;
        vip: string;
        activityDlg: string;
        tuLong: string;
        treasure: string;
        recharge: string;
        arena: string;
        arenaShop: string;
        fiveDay: string;
        newFourDay: string;
        guildListLayer: string;
        guildMineLayer: string;
        fuliDlg: string;
        chuanchen: string;
        worldBoss: string;
        guildBossInspire: string;
        worldBossHurtList: string;
        guildBossReward: string;
        roleEnemyInfo: string;
        redPacket: string;
        redPacketList: string;
        redPacketGet: string;
        defArena: string;
        defarenaWinner: string;
        king: string;
        lotus: string;
        rebirth: string;
        rebirthExp: string;
        coffers: string;
        coffersServer: string;
        customList: string;
        custom: string;
        medal: string;
        bossWar: string;
        guildBossLevelList: string;
        wBossList: string;
        wBossReward: string;
        guildBossCall: string;
        wBossCall: string;
        bindPhone: string;
        userAgreement: string;
        guildCopy: string;
        guildCopyBoss: string;
        tower: string;
        heart: string;
        towerTreasury: string;
        villian: string;
    };
    var FS_SUBMID_SMELT: number;
    var FS_SUBMID_ACTIVITY: number;
    var FS_SUBMID_PVP_OUT: number;
    var FS_SUBMID_CHAT: number;
    var FS_SUBMID_RECHARGE: number;
    var FS_SUBMID_VIP: number;
    var HS_SUBMID_EQUIP_COPY: number;
    var HS_SUBMID_BOSS_COPY: number;
    var HS_SUBMID_STATE_COPY: number;
    var HS_SUBMID_ARENA_SHOP: number;
    var HS_SUBMID_ARENA: number;
    var HS_SUBMID_GUILD: number;
    var HS_SUBMID_KING: number;
    var HS_SUBMID_DAILY: number;
    var HS_SUBMID_CUSTOM_LIST: number;
    var HS_SUBMID_SIGN: number;
    var HS_SUBMID_VIP_COPY: number;
    var HS_SUBMID_COFFERS_SERVER: number;
    var HS_SUBMID_GUILD_COPY_BOSS: number;
    var HS_SUBMID_TOWER: number;
    var HS_SUBMID_HEART: number;
    var subModuleMap: {};
}
/**
 * Created by SmallAiTT on 2015/8/28.
 */
declare module g_consts.style {
    var test: number;
    var white_000: number;
    var white_001: number;
    var white_101: number;
    var white_102: number;
    var white_103: number;
    var green_000: number;
    var green_001: number;
    var green_002: number;
    var blue_000: number;
    var blue_001: number;
    var blue_002: number;
    var blue_003: number;
    var blue_004: number;
    var blue_101: number;
    var blue_102: number;
    var purple_000: number;
    var orange_000: number;
    var orange_001: number;
    var orange_002: number;
    var orange_101: number;
    var orange_102: number;
    var orange_103: number;
    var red_000: number;
    var red_001: number;
    var red_101: number;
    var black_000: number;
    var black_001: number;
    var black_002: number;
    var yellow_000: number;
    var yellow_001: number;
    var yellow_101: number;
    var yellow_102: number;
    var yellow_103: number;
    var brown_001: number;
    var btn_101: number;
    var btn_102: number;
    var btn_103: number;
    var btn_111: number;
    var btn_112: number;
    var btn_113: number;
    var btn_120: number;
}
/**
 * Created by lihex on 11/22/15.
 */
declare module g_consts {
    var GUIDE_LCK: {
        eqpChged: string;
        hasSmelting: string;
        buyEquip: string;
        everEquiped: string;
        popBindPhoneAfterPay: string;
    };
}
declare module g_cache {
    function setLocalStorageItem(key: any, v: any, opt?: any): void;
    function getLocalStorageItem(key: any, opt?: any): any;
    function clearGuideKeyCache(): void;
    function initGuideKeyCache(): void;
    function recordGuideDone(key: any): void;
}
declare module ws {
    function initRecharge(gameVer: string): void;
    function recordRecharge(amount: any, iapId: any): void;
    function recordEvent(eventId: string, value: any): void;
}
/**
 * Created by lihex on 9/6/15.
 */
declare module gc {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    var residentScene: any;
    function isSpecialItem(itemId: any): boolean;
    function subArr(arr: any, starIdx: any, endIdx?: any): any[];
    function init(): void;
    function initData(cb: any, target: any): void;
    /**
     * 获取今日次数的公用方法。
     * @param refreshTime
     * @param cb
     * @param hours
     * @returns {*}
     */
    function getTodayCount(refreshTime: Date, cb: Function, hours?: number): number;
    /**
     * 处理今日刷新的公用方法。
     * @param refreshTime
     * @param cb
     * @param hours
     * @returns {*}
     */
    function handleTodayRefresh(refreshTime: Date, cb: Function, hours?: number): number;
    class Lzcl {
        loading: boolean;
        loaded: boolean;
        playWaiting: boolean;
        cb: any;
        ctx: any;
        init(): void;
        load(url: any): void;
        onResult(succ: any): void;
        waitingResult(cb: any, ctx?: any): void;
    }
    var lzcl: Lzcl;
}
/**
 * Created by lihex on 9/21/15.
 */
declare module utils {
    /**
     * {itemId:count} -> [key, value]
     * @param obj
     * @returns {any[]}
     */
    function obj2KVArr(obj: any): any[];
    /**
     * {itemId:count, ...} -> [{itemId:itemId, count: count}, {}...]
     * @param obj
     * @returns {Array}
     */
    function itemObj2ObjArr(obj: any): any[];
    /**
     * [{itemId:count},{}, ...} -> [{itemId:itemId, count: count}, {}...]
     * @param objArr
     * @returns {Array}
     */
    function itemObjArr2ObjArr(objArr: any): any[];
    /**
     * 数组转OBJ
     * eg.[[属性KEY1，属性值1], [属性KEY2，属性值2]] => {属性KEY1 : 属性值1, ..}
     * @param kvArr
     * @returns {any|{}}
     */
    function kvArr2KvObj(kvArr: any): {};
    /**
     * 物品数组转换成对象数组
     * eg. [[itemId, 数量], [itemId, 数量], ...] => [{itemId:itemId, count: count}, {}...]
     * @param kvArr
     */
    function kvArrItems2ObjArr(kvArr: any): any[];
    /**
     * 获取随机名字
     */
    function getRandomName(sex: any): string;
    function filterName(name: any, sex: any): any;
    function formatByWan(hp: any, fix?: number): any;
    function formatByWan2(num: any): string;
    /**
     * 将小时转化为x天x小时
     * @param hours
     * @returns {string}
     */
    function formatHour(hours: any): string;
    function getCurrencyTypeItemId(currencyType: any): any;
}
declare module resHelper {
    var dynamicTemp: string;
    /**
     * 动态资源模块映射
     */
    var dynamic: {
        role: string;
        hero: string;
        monster: string;
        effect: string;
        ui: string;
        fight: string;
        map: string;
        skill: string;
        task: string;
        item: string;
        gift: string;
        gift_skill: string;
        gift_img: string;
        vip: string;
        death: string;
        buff: string;
        icon: string;
        event: string;
        head: string;
        wing: string;
        clothes: string;
        weapon: string;
        ui_wing: string;
        recharge: string;
        ui_gboss: string;
        ui_heart: string;
        medal: string;
        title: string;
    };
    /**
     * 获取资源名称
     * @param pre
     * @param resId
     * @param post
     * @returns {string}
     */
    function getResName(pre: any, resId: any, post?: any): string;
    /**
     * 获取动态资源路径
     * @param pre
     * @param resId
     * @param {String|Null} extname
     * @returns {string}
     */
    function getDynamicResPath(pre: any, resId: any, extname: any, post?: any): string;
    function getResourceDynamicResPath(pre: any, resId: any, extname: any, post?: any): string;
    /**
     * 获取动态cca路径配置
     * @param pre
     * @param resId
     * @returns {{png: string, plist: string, exportJson: string}}
     */
    function getCcaRes(pre: any, resId: any): any;
    /**
     * 根据cca名称获取到cca的路径配置。
     * @param name
     * @returns {{png: string, plist: string, exportJson: string}}
     */
    function getCcaResByName(name: any): any;
    /**
     * 获取buff的cca名称
     * @param resId
     * @returns {string}
     */
    function getBuffCcaName(resId: any): string;
    /**
     * 获取buff的cca的路径配置
     * @param resId
     * @returns {{png: string, plist: string, exportJson: string}}
     */
    function getBuffCcaRes(resId: any): any;
    /**
     * 获取技能特效的cca名称
     * @param resId
     * @returns {string}
     */
    function getSkillEffectCcaName(resId: any): string;
    /**
     * 获取受击特效的cca的路径配置
     * @param resId
     * @returns {{png: string, plist: string, exportJson: string}}
     */
    function getSkillEffectCcaRes(resId: any): string;
    function getEffectPath(resId: any, extname: any): string;
    function getRechargeIconPath(resId: any): string;
    function getHeroClothesIconPath(displayId: any): string;
    function getHeroWeaponIconPath(displayId: any): string;
    function getHeroWingIconPath(displayId: any): string;
    function getBuffIconPath(buffId: any): string;
    /**
     * 获取角色（英雄和怪物）的icon
     * @param resId
     * @returns {string}
     */
    function getRoleIconPath(resId: any): string;
    /**
     * 获取角色（英雄和怪物）半身像路径
     * @param resId
     * @returns {string}
     */
    function getRoleBodyPath(resId: any): string;
    function getSpecialIconPath(itemId: any): string;
    /**
     * 获取ui图标资源
     * @param tempId
     * @returns {*}
     */
    function getUIIconPath(tempId: any): string;
    /**
     * 获取战斗场景背景资源路径
     * @param resId
     * @returns {string}
     */
    function getFightBgPath(resId: any): string;
    /**
     * 获取副本地图的json文件的路径
     * @param resId
     * @returns {string}
     */
    function getMapJsonPath(resId: any): string;
    /**
     * 获取技能图标的资源路径
     * @param resId
     * @returns {string}
     */
    function getSkillIconPath(resId: any): string;
    /**
     * 获取VIP图标的资源路径
     * @param rechargeId
     * @returns {string}
     */
    function getVipIconPath(rechargeId: any): string;
    /**
     * 获取ui的音效路径。
     * @param {String|Number} resId
     * @returns {String}
     */
    function getUIAudioPath(resId: any): string;
    function getEventIconPath(iconId: any): string;
    function getArmPath(pre: string, resId: any): string;
    function getBorderByQuality(type: number, quality: number): string;
    /**
     * 获取物品icon。注意，英雄碎片，获取到的为对应的英雄的头像icon。
     * @param itemId
     * @returns {string}
     */
    function getItemIconPath(itemId: any): string;
    function getGiftIcon(itemId: any): string;
    function getGiftIconWordPath(itemId: any): string;
    function getGiftSkillIconPath(skillId: any): string;
    function getMonsterHeadIconPath(monsterId: any): string;
    /**
     * 获得翅膀icon
     * @param wingId
     * @returns {string}
     */
    function getWingIconPath(wingId: any): string;
    /**
     * 获取任务图标的资源路径
     * @param taskId
     * @returns {string}
     */
    function getTaskIconPath(iconId: any): string;
    /**
     * 获取世界Boss的资源路径
     * @param taskId
     * @returns {string}
     */
    function getWorldBossIconPath(iconId: any): string;
    /**
     * 通过勋章物品id获取战印图标
     * @param medalId 勋章id
     */
    function getWarPrintIconPath(medalId: any): string;
    /**
     * 获取在聊天界面的称号图标
     * @param medalId
     */
    function getChatTitle(medalId: any): string;
    function getHeartIconPath(heartId: any): string;
    function getHeartTitlePath(heartId: any): string;
    function getHeartNamePath(heartId: any): string;
    function getSmallItemPath(itemId: any): string;
}
/**
 * Created by lihex on 6/30/15.
 */
declare module uiHelper {
    var resIco: {};
    function setResGrp(group: egret.gui.Group, itemId: any, count: any): void;
    function setVipGrp(group: egret.gui.Group, name: string, lvl: any, vip?: any): void;
    /**
     * 设置物品列表
     * @param group
     * @param items 数组,[{itemId:xxx,count:xxx},{itemId:xxx,count:xxx}, ...]
     */
    function setItemsGrp(group: egret.gui.Group, items: Array<any>): void;
    function resetItemsGrp(group: egret.gui.Group, prefix: string): void;
    function setStarGrp(group: egret.gui.Group, star: any): void;
    var qualityColorMap: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
    };
    function getColorByQuality(q: number): any;
    function getUserNameColor(pkValue: any): number;
    var partRes: string[][];
    function getPartRes(part: any): string[];
    function getHeroIcon(iconId: any, type?: number): string;
    function playUIEffect(effectNode: g_comp.UIEffect, play: boolean): void;
    function setLabelGreenOrRed(labelNode: any, b: boolean): void;
    function setEventTime(label: any, startTime: any, endTime: any): void;
    class ScrollerHelper {
        _sc: any;
        _isPause: any;
        _scrollTopOnPause: any;
        _scrollLeftOnPause: any;
        constructor(list: any);
        chgFunc(e: any): void;
        chgEnd(): void;
        pauseScrollV(): void;
        pauseScrollH(): void;
        resumeScroll(): void;
        doDtor(): void;
    }
}
/**
 * Created by Administrator on 2015/9/22.
 */
declare module gd {
    class CommonUtils {
        /**
         * 获取最后一次的刷新具体时间,默认5点
         * @param hours
         * @returns {Date}
         */
        getCurLastRefreshTime(hours?: any): Date;
        /**
         * 计算每日刷新次数
         * @param reNum
         * @param lastReplayTime
         * @param maxNum
         * @returns {any[]} [最终次数,最终时间]
         */
        calRefreshData(reNum: any, lastReplayTime: any, maxNum: any): any[];
    }
    var commonUtils: CommonUtils;
}
/**
 * Created by Administrator on 2015/9/22.
 */
declare module gd {
    class HeroUtils {
        addPropValue(prop: HeroProp, key: any, value: any): void;
        getPropValue(prop: HeroProp, key: any, value: any): void;
    }
    var heroUtils: HeroUtils;
}
/**
 * Created by Administrator on 2015/6/1.
 */
declare module gd {
    class UserUtils {
        getNumOfItems(items: any, type: any): number;
        getNewBag(delBagItems: any, bagItems: any): any;
        getNewBag4update(updatebagItems: any): any;
        getNewEquipBag(delEquipBagArr: any, equipBagItems: any): any;
        getEquipGrade(templateId: any, randomArr: any, arr?: any): number;
        _calEquipGrade(randomArr: any): number;
        isLoot(itemId: any): boolean;
        getLoots(sheetLoots: any): any;
    }
    var userUtils: UserUtils;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class AccountCtrl extends mo.DataController {
        loginKey: any;
        _initProp(): void;
        getId(): any;
        getStatus(): any;
        getSdkData(): any;
        isGuest(): boolean;
        getLoginKey(): any;
        static login: (name: any, pwd: any, channelId: any, cb: any, target: any) => void;
        static loginBySdk: (channelId: any, sdkData: any, cb: any, target: any) => void;
        static registerAccount: (name: any, pwd: any, channelId: any, cb: any, target: any) => void;
    }
    var accountCtrl: AccountCtrl;
}
declare module gd {
    class ActivityCtrl extends mo.DataController {
        static ON_FIRST_REWARD_RECEIVED: string;
        static ACTIVITY_OP: String;
        _dataList: any;
        _initProp(): void;
        /**************************************************************首充*********************************************************************/
        hasReceiveFirstRecharge(): boolean;
        /**
         * 是否已经充过值了。
         * @returns {boolean}
         */
        hasRecharged(): boolean;
        /**
         * 获取首冲信息
         * @returns {gc.dsConsts.ExActivity}
         */
        getFirstRecharge(): any;
        getFirstRechargeItems(): any;
        /**
         * 获取累充领取状态
         * @param id
         * @param index
         * @returns {number} 0:已经领取，1：可领取，2:不可领取
         */
        getAllChargeCountStatus(id: any, index: any): number;
        /**
         * 领取首充礼包。
         * @param cb
         * @param target
         */
        receiveFirstRecharge(cb: Function, target?: any): boolean;
        /**************************************************************七天*********************************************************************/
        /**
         * 获取7天登录领取状态
         * @param index
         * @returns {number} 0:已经领取，1：可领取，2:不可领取
         */
        getSevenLoginStatus(index: any): number;
        /**************************************************************签到*********************************************************************/
        /**
         * 获取签到信息
         * @returns {gc.dsConsts.ExActivity}
         */
        getSignActivity(): any;
        getSignItems(): any;
        /**************************************************************神秘商店*********************************************************************/
        /**
         * 神秘商店购买礼包
         * @param activityId 活动id
         * @param index 栏目项
         * @param cb
         * @param target
         * @return [是否暴击,获得积分]
         */
        buyMysterShop(activityId: any, index: any, cb: any, target: any): boolean;
        buyAppMysterShop(activityId: any, index: any, cb: any, target: any): boolean;
        getMysterShopArr(activityId: any, startTime: any, endTime: any): any[];
        exChangeMysterShop(activityId: number, index: any, cb: Function, target?: any): void;
        /**************************************************************探宝*********************************************************************/
        /**
         * 获取探宝信息
         * @returns {gc.dsConsts.ExActivity}
         */
        getLotteryActivity(): any;
        /**
         * 探宝次数
         * @param index  1,10
         * @param cb
         * @returns {Array}  [{"id":num,...},..]
         */
        lottery(index: any, cb: any, cbtx?: any): any;
        getLotteryCost(index: any): number;
        getFiveTargetActivity(): any;
        getNewFourActivity(): any;
        luckyTalos(id: any, index: any, cb: any, cbtx?: any): any;
        getLuckyTalosCost(index: any, id: any): any;
        getLuckyTalosActivity(id: any): any;
        getActivity(id: any): any;
        getUiInfoActivity(id: any): any[];
        limitPanicBuying(id: any, index: any, cb: any, cbtx: any): any;
        getLimitPanicBuyCount(id: any): any;
        getLimitNum(id: any): any;
        everydayCharge(id: any, index: any, cb: any, cbtx?: any): any;
        /**
         * 获得消费返利领取状态
         * @param id
         * @param index
         * @returns {number} 1:已经领取，0：可领取，2:不可领取
         */
        getAllRebateStatus(id: any, index: any): any;
        /**
         * 获得消费返利领取状态
         * @param id
         * @param index
         * @returns {number} 1:已经领取，0：可领取，2:不可领取
         */
        getDayRechargeStatus(id: any, index: any): any;
        /**
         * 获得集字返利兑换次数
         * @param id
         * @param index
         * @returns {number}
         */
        getSetTheWordCount(id: any, index: any): any;
        setTheWord(id: any, index: any, cb: any, cbtx?: any): boolean;
        /**
         * 获得V计划领取状态
         * @param id
         * @param index
         * @returns {number} 1:已经领取，0：可领取，2:不可领取
         */
        getVPlanStatus(id: any, index: any): any;
        /**
         * 领取V计划奖励
         * @param id
         * @param index
         * @returns {number} 1:已经领取，0：可领取，2:不可领取
         */
        vPlan(id: any, index: any, cb: any, cbtx?: any): any;
        luckyMajong(id: any, index: any, cb: any, cbtx?: any): any;
        getLuckValue(id: any): any;
        getAddLuckValue(id: any): any;
        userSurvey(activityId: any, index: any, report: any, cb?: any, cbtx?: any): boolean;
        getUserSurveyStatus(activityId: any): number;
        getNewLuckValue(id: any): any;
        newLuckyMajong(id: any, index: any, cb: any, cbtx?: any): boolean;
        /**
         * 得到活动今日已参与次数
         * @param activityId
         */
        getTodayNewLimitPanicBuyCount(activityId: any): number;
        newLimitPanicBuy(id: any, index: any, cb: any, cbtx?: any): boolean;
        /**************************************************************公用*********************************************************************/
        /**
         * 领取
         * @param id
         * @param index
         * @param cb
         * @param target
         */
        receive(activityId: number, index: number, cb: Function, target?: any, spItemId?: number): void;
        getReceiveData(id: any): any;
        getActivityValue(exActivity: any, key: any): any;
        /**
         * 获取主要活动列表
         * @returns [gc.dsConsts.ExActivity]
         */
        getMainList(): any[];
        getFuliList(): any[];
        /**
         * 获取精彩活动列表。
         * @param cb
         * @param ctx
         * @returns gc.dsConsts.ActivityData
         */
        getInfo(cb: Function, ctx?: any): void;
        isPointEffect(): boolean;
        isFuliPointEffect(): boolean;
        isPoint(id: any): boolean;
        /**
         * 根据类型获取ExActivity
         * @param type
         * @returns {*}
         */
        private _getExActivityByType(type);
        /**
         * 根据类型获取ExActivity
         * @param id
         * @returns {*}
         */
        private _getExActivityById(id);
        getFreeDay(activityId: any): any;
        getTotalDay(activityId: any): any;
        /**
         * 得到活动今日已参与次数
         * @param activityId
         */
        getTodayActivityCount(activityId: any): number;
    }
    var activityCtrl: ActivityCtrl;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class ArenaCtrl extends mo.DataController {
        _hasNotReadNewArenaRecord: number;
        _fightRank: number;
        _initProp(): void;
        initData(hasNotReadNewArenaRecord: any): void;
        updateEntity(data?: any): void;
        /**
         * 获取数据
         * @param cb
         * @param target
         * @returns ds.ArenaEntity
         */
        getInfo(cb: any, target: any): void;
        getRank(): any;
        getHighRank(): any;
        /**
         * 重置竞技场挑战对手
         * @param cb
         * @param target
         */
        resetArenaFightRanks(cb: any, target: any): boolean;
        /**
         * 获取战斗用户列表
         * @param cb
         * @param target
         * @returns [gc.dsConsts.PKUserData]
         */
        getFightUserList(cb: any, target: any): void;
        getReNumNextSeconds(): number;
        buyPKNum(cb: any, target: any): void;
        getRePKNum(): any;
        getCDSeconds(): number;
        refreshCD(cb: any, target: any): void;
        /**
         * 挑战开始
         * @param rank
         * @param cb
         * @param target
         * @returns [ds.HeroEntityCtrl]
         */
        fightStart(rank: any, cb: any, target: any): boolean;
        /**
         * 战斗
         * @param isWin
         * @param fightData
         * @param cb
         * @param target
         * @returns ds.FightResult
         */
        fightEnd(isWin: any, fightData: any, cb: any, target: any): void;
        /**
         * 获取战斗记录
         * @param cb
         * @param target
         * @returns [ArenaRecordEntity]
         */
        getRecordList(cb: any, target: any): void;
        /**
         * 获取剩余更新时间/s
         * @param cb
         * @param target
         */
        getRefreshRemainTime(cb: any): void;
        /**
         * 获取排行榜列表,50条
         * @param cb
         * @param target
         * @returns [gc.dsConsts.Rank]
         */
        getRankList(cb: any, target: any): void;
        getRankReward(rank?: any): number[];
        private _calReNumData();
    }
    var arenaCtrl: ArenaCtrl;
}
/**
* Created by huanghaiying on 14/12/16.
*/
declare module gd {
    class BagDataCtrl extends mo.DataController {
        static ON_BATCH_USE_EXP_ITEM: string;
        static ON_SOLD: string;
        static ON_COUNT_CHANGED: string;
        static ITEM_TYPE_SORT_CFG: any;
        _tempCfgName: any;
        _temp: any;
        tempId: any;
        count: number;
        type: any;
        price: any;
        name: any;
        explain: any;
        useTxt: any;
        quality: any;
        note: string;
        level: any;
        itemLvl: any;
        vip: any;
        maxGet: any;
        exclusiveExp: any;
        bagTag: any;
        _isRequesting: any;
        simUseExpOpt: any;
        equipId: any;
        job: any;
        jobName: string;
        proptys: Array<any>;
        equipType: any;
        equipTypeName: any;
        score: number;
        temp: any;
        pileCount: number;
        islock: number;
        rewards: Array<any>;
        _initProp(): void;
        init(tempId: any, count: any, islock: any): void;
        isEquip(): boolean;
        _changeCount(num?: number): void;
        addCount(num?: number): void;
        setCount(num: any): void;
        getTempValue(key: any): any;
        getLogicTempValue(key: any): void;
        /**
         * 返回物品可兑现的专属经验
         * @returns {*}
         */
        getExclusiveExp(): any;
        isReachedUseLvl(): number;
        isOpenNoCost(): number;
        getItemTypeWeight(): any;
        static getSortOpt(type: any): any;
        static getFilterOpt(type: any): any;
        static getList(filterOpt?: any, sortOpt?: any): BagDataCtrl[];
        static getEquipList(equipArr: any): BagDataCtrl[];
        static getEquipListUnlocked(equipArr: any): BagDataCtrl[];
        static getEquipSalesInfo(): any;
        /**
         * 进行物品堆叠
         * @param items
         * @returns {Array}
         */
        static pileItems(items: any): BagDataCtrl[];
    }
}
/**
 * Created by Administrator on 2015/12/17.
 */
declare module gd {
    class BossCtrl extends mo.DataController {
        static ON_BOSS_CALL_UPDATE: String;
        static ON_WORLD_BOSS_OPEN_CHANGE: String;
        _bossListData: any;
        _isOpen: number;
        _initProp(): void;
        isGuildBoss(bossId: any): boolean;
        /**
         * 找回boss资源opt
         * @param bossId
         * @param combat 战力
         * @param type 找回类型 0:胜利 1:失败
         */
        getBackResOpt(bossId: any, combat: any, type?: number): {
            items: any[];
            combatNeed: number;
            costDimond: number;
        };
        getReFightNum(): number;
        getReRepeatNum(): number;
    }
    var bossCtrl: BossCtrl;
}
/**
 * Created by Administrator on 2015/12/17.
 */
declare module gd {
    class BossFightCtrl extends mo.DataController {
        static ON_BOSS_CALL_UPDATE: String;
        static ON_BOSS_AUTO_FIGHT: String;
        static ON_WORLD_BOSS_OPEN_CHANGE: String;
        static BOSS_STATUS: {
            fighting: number;
            sleep: number;
            cd: number;
            canCall: number;
            prize: number;
        };
        _entityDic: any;
        _isAutoFight: boolean;
        _syncIntervalId2: any;
        _lastExitTime: any;
        _curFightBossId: any;
        _autoBossId: any;
        _openBossIds: any;
        _initProp(): void;
        getOpenIds(): any;
        getOpenIdsByType(type: any, isLimit?: any): any[];
        setOpenIds(openBossIds: any): void;
        isAutoFight(): boolean;
        startAutoFight(): void;
        endAutoFight(): void;
        getEntity(bossId: any): any;
        _getEntity(bossId: any): any;
        delEntity(bossId: any): void;
        syncInspire(): void;
        startUpdateInterval2(): void;
        clearUpdateIntervalId2(): void;
        private _update2();
        setAutoBossId(bossId: any): void;
        getAutoBossId(): any;
        setCurFightBossId(bossId: any): void;
        getCurFightBossId(): any;
        getLastExitTime(): any;
        setLastExitTime(time: any): void;
        hasAutoFightBoss(): boolean;
    }
    var curBFECtrl: BossFightEntityCtrl;
    var bossFightCtrl: BossFightCtrl;
}
/**
 * Created by Administrator on 2015/12/17.
 */
declare module gd {
    class BossFightEntityCtrl extends mo.DataController {
        static START_FIGHT_BOSS_IN_FIGHT_SCENE: string;
        static ON_START_FIGHT_BOSS: string;
        static ON_WORLD_BOSS_OPEN_CHANGE: string;
        _syncIntervalId1: any;
        _syncIntervalId2: any;
        _hurtArr: any;
        _firstHurtRankData: any;
        _firstHurtLastTime: any;
        _isOver: boolean;
        _bossId: any;
        _isOpen: number;
        _startTime: any;
        _roundHurt: number;
        _initProp(): void;
        setStartTime(time: any): void;
        getStartTime(): any;
        isOpen(): boolean;
        setIsOpen(value: any): void;
        initilized(): boolean;
        setBossId(bossId: any): void;
        mData(hurtArr: any, isEnd: any): string;
        enter(cb: any, target: any): void;
        isSelfRepeat(): boolean;
        isSelfCall(): boolean;
        getMyKey(): any;
        getTotalHp(): any;
        getCurHp(): any;
        getReOverSeconds(): any;
        getOpenCd(): number;
        getFightCd(): number;
        clearFightCd(cb: any, target: any): void;
        getMyHurt(): any;
        getType(): number;
        getMyRank(): any;
        hurt(hurt: any, heroId?: any): void;
        isLimitHp(): boolean;
        private _pushHurt(isEnd);
        getBossId(): any;
        getInspireHurt(): any;
        getCallUserName(): any;
        getCallUserGuildName(): any;
        inspire(cb: any, target: any): void;
        getInspireReSeconds(): number;
        getInspireNum(): any;
        /**
         * 获取鼓舞名字列表
         * @param cb
         * @param target
         */
        getInspireRecordArr(cb: any, target: any): void;
        syncInspire(): void;
        getFirstHurtRank(cb: any, target: any): any;
        private _getFirstHurtRank(cb, target);
        getHurtRankList(cb: any, target: any): void;
        getFightableLvl(): number;
        getFightMaxLvl(): number;
        startFight(cb: any, target: any): boolean;
        exitFight(cb: any, target: any): void;
        /**
         * 获取战斗结果
         * @param cb
         * @param target
         * @returns ds.BossResult
         */
        getBossResult(cb: any, target: any): void;
        /**
         * 获取原始id
         * @returns {*|*|*|*|*|*|*|*|*|*|*}
         */
        getOriginBossId(): any;
        /**
         * 获取结算结果
         * @param cb
         * @param target
         * @returns ds.BossResultData
         */
        getResultData(cb: any, target: any): void;
        isOver(): boolean;
        private _startUpdateInterval1();
        private _update1();
        clearUpdateIntervalId1(): void;
        /********************************************/
        onChangeData(): void;
        onOver(): void;
    }
}
/**
 * Created by Administrator on 2015/12/17.
 */
declare module gd {
    class BossGuildCtrl extends mo.DataController {
        static ON_BOSS_CALL_UPDATE: String;
        static ON_WORLD_BOSS_OPEN_CHANGE: String;
        _bossListData: any;
        _otherData: any;
        _initProp(): void;
        /**
         * 获取boss信息
         * @param cb
         * @param target
         */
        getInfo(cb: any, target: any): void;
        getBossData(bossId: any): any;
        /**
         * 刷新boss信息
         * @param cb
         * @param target
         */
        freshData(cb: any, target: any): void;
        private _initGuild(cb, target);
        hasFightingBoss(): boolean;
        hasGuildFightingBoss(): boolean;
        /**
         * 获取其他数据
         * @param bossId
         * @returns [行会id,行会名称，是否上锁]
         */
        getOtherData(bossId: any): any;
        isLimitTime(bossId: any): any;
        getLimitStartTime(bossId: any): any;
        getLimitEndTime(bossId: any): any;
        getOriginBossId(bossId: any): any;
        /**
         * 判断boss状态
         * @param bossId
         * @returns {number} 1，未开启 ,2，正在挑战中 ,3，Boss正在休息 ,4，已被击杀,cd中 ,5，可召唤,6，结算中
         */
        getBossStatus(bossId: any): number;
        getOpenStartTime(): Date;
        getOpenEndTime(): Date;
        /**
         * 获取开启cd
         * @returns {number}
         */
        getOpenCd(bossId: any): number;
        getReDisappearSeconds(bossId: any): number;
        getRePrizeSeconds(bossId: any): number;
        isInStartTime(bossId: any): boolean;
        isInWeek(bossId: any): boolean;
        getWeek(bossId: any): any;
        /**
         * 获取每周boss数据
         * @returns {"周几":[bossId,bossId]}
         */
        getWeekBossData(): {};
        getLimitBossList(isFight: any): any;
        getBossList(isFight: any, level: any): any;
        getLockCost(): any;
        getOpenChannelCost(): any;
        getRepeatCount(bossId: any): any;
        getRepeatCost(bossId: any, isLock: any): number;
        openBoss(bossId: any, isLock: any, cb: any, target: any): boolean;
        getNotKillNumByLvl(lvl: any): number;
        checkAndShowLvlEnough(bossId: any): boolean;
    }
    var bossGuildCtrl: BossGuildCtrl;
}
/**
 * Created by Administrator on 2015/12/17.
 */
declare module gd {
    class BossWorldCtrl extends mo.DataController {
        static ON_BOSS_CALL_UPDATE: String;
        static ON_WORLD_BOSS_OPEN_CHANGE: String;
        static BOSS_STATUS: {
            fighting: number;
            sleep: number;
            cd: number;
            canCall: number;
            prize: number;
        };
        _bossListData: any;
        _otherData: any;
        _nowDate: any;
        _initProp(): void;
        /**
         * 获取boss信息
         * @param cb
         * @param target
         */
        getInfo(cb: any, target: any): void;
        /**
         * 刷新boss信息
         * @param cb
         * @param target
         */
        freshData(cb: any, target: any): void;
        private _initGuild(cb, target);
        getBossData(bossId: any): any;
        /**
         * 获取其他数据
         * @param bossId
         * @returns []
         */
        getOtherData(bossId: any): any;
        isLimitTime(bossId: any): any;
        getLimitStartTime(bossId: any): any;
        getLimitEndTime(bossId: any): any;
        getOriginBossId(bossId: any): any;
        /**
         * 判断boss状态
         * @param bossId
         * @returns {number} 1，未开启 ,2，正在挑战中 ,3，Boss正在休息 ,4，已被击杀,cd中 ,5，可召唤,6，结算中
         */
        getBossStatus(bossId: any): number;
        getDeathBossId(bossId: any): any;
        getOpenStartTime(bossId: any): any;
        getOpenEndTime(bossId: any): any;
        getReDisappearSeconds(bossId: any): any;
        getRePrizeSeconds(bossId: any): any;
        isInStartTime(bossId: any): boolean;
        getBossList(): any;
        /**
         * 获取开启cd
         * @returns {number}
         */
        getOpenCd(bossId: any): number;
    }
    var bossWorldCtrl: BossWorldCtrl;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class ChatCtrl extends mo.DataController {
        static ON_GUILD_CHAT_UPDATE: String;
        static ON_CHAT_UPDATE: String;
        static ON_NOTICE_UPDATE: String;
        static ON_LOTTERY_UPDATE: String;
        static ON_GUILD_LOTTERY_UPDATE: String;
        static ON_GUILD_CHANGED: String;
        static ON_IMPOTANT_UPDATE: String;
        static ON_MODE_UPDATE: String;
        static ON_TREASURE_LOST: string;
        _lastId: number;
        _lastTime: Date;
        _allList: any;
        _vipList: any;
        _importantList: any;
        _lotteryList: any;
        _guildLotteryList: any;
        _lastSendTime: Date;
        _guildLastId: number;
        _guildList: any;
        u: any;
        _channelMsg: any[];
        _syncSeconds: number;
        isFollowNormalUser: number;
        isAutoBuyLaba: number;
        _initProp(): void;
        initData(data?: any): void;
        getLastId(): number;
        getGuildLastId(): number;
        /**
         * 获取走马灯消息
         * @returns [gc.dsConsts.ChatData]
         */
        getNoticeList(): any;
        delNotice(uniqueId: any): void;
        /**
         * 获取所有消息
         * @returns [gc.dsConsts.ChatData]
         */
        getAllList(): any;
        /**
         * 获取重要信息
         * @returns {any}
         */
        getImportantList(): any;
        /**
         * 获取当前公会所有消息
         * @returns [gc.dsConsts.ChatData]
         */
        getGuildAllList(): any;
        /**
         * 获取探宝消息
         * @returns [gc.dsConsts.ChatData]
         */
        getLotteryList(): any;
        /**
         * 获取公会探宝消息
         * @returns [gc.dsConsts.ChatData]
         */
        getGuildLotteryList(): any;
        /**
         * 获取现在离最后一条消息的秒数
         * @returns {number}
         */
        getLastDiffSeconds(): number;
        followModeChange(): void;
        sendData(content: any, type: any, islaba: any, cb: any, cbTarget: any): boolean;
        openWindow(): void;
        closeWindow(): void;
        updateNewMsg(newId: any): void;
        syncData(): void;
        getChatDataStr(chatData: any): string;
        private _updateData(dataList);
        private _updateGuildData(dataGuildList, isOri);
        private _pushAllList(data);
        private _pushImportantList(data);
        private _pushGuildAllList(data);
        private _pushLotteryList(data);
        private _pushGuildLotteryList(data);
        private _pushVipList(data);
        newChannelNotice(msg: any): void;
        onNewAll(): void;
        onNewLottery(): void;
        onNewGuildLottery(): void;
        onNewGuildChat(): void;
        onNewImportant(): void;
    }
    var chatCtrl: ChatCtrl;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class CoffersCtrl extends mo.DataController {
        static ON_COFFERS_FIGHT: string;
        static ON_COFFERS_DEF_DATA_CHANGED: string;
        _fightServerId: any;
        _fightDoor: any;
        _lastData: any;
        _initProp(): void;
        getInfo(cb: any, target: any): void;
        getNextWinPoints(): any;
        getCoffersWin(): number;
        getPersonResource(): number;
        /**
         * 获取英雄记录掠夺记录
         * @param cb
         * @param target
         * @returns [gc.dsConsts.CoffersRecord]
         */
        getLootRecordArr(cb: any, target: any): void;
        build(cb: any, target: any): void;
        getBuildNum(): number;
        addBuff(cb: any, target: any): void;
        getAddBuffNum(): number;
        getAddPropByBuff(): number;
        getReAction(): number;
        getActionReseconds(): number;
        getActionData: (nowDate?: any) => number[];
        /**
         * 获取己方守卫数据
         * @param cb
         * @param target
         * @returns [gc.dsConsts.CofferUser]
         */
        getDefeseData(cb: any, target: any): void;
        /**
         * 获取敌方守卫数据
         * @param serverId
         * @param serverName
         * @param cb
         * @param target
         * @returns gc.dsConsts.ExDefenceData
         */
        getEnemyDefeseData(serverId: any, serverName: any, cb: any, target: any): void;
        getLastEnemyDefeseData(cb: any, target: any): void;
        /**
         * 获取防守记录
         * @param cb
         * @param target
         * @returns [gc.dsConsts.CoffersRecord]
         */
        getDefeseRecord(cb: any, target: any): void;
        /**
         * 获取服务器列表状态
         * @param cb
         * @param target
         * @returns [gc.dsConsts.CoffersServer]
         */
        getServerArr(cb: any, target: any): void;
        fightStart(serverId: any, door: any, cb: any, target: any): boolean;
        /**
         * 战斗结束
         * @param isWin
         * @param cb
         * @param target
         * @returns gc.dsConsts.FightResult
         */
        fightEnd(isWin: any, cb: any, target: any): void;
        /**
         * 掠夺国库开始
         * @param serverId
         * @param cb
         * @param target
         * @returns 国库等级
         */
        fightCoffersStart(serverId: any, cb: any, target: any): boolean;
        /**
         * 掠夺国库结束
         * @param hurt
         * @param cb
         * @param target
         * @returns gc.dsConsts.FightResult
         */
        fightCoffersEnd(hurt: any, cb: any, target: any): void;
        getTodayLootNum(): number;
    }
    var coffersCtrl: CoffersCtrl;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class CopyCtrl extends mo.DataController {
        static ON_COPY_CHANGE: string;
        static ON_TOWER_TANBAO: string;
        static ON_CHALLENGE_NUM: string;
        _copyEquipArr: any;
        _copyBossArr: any;
        _copyStateArr: any;
        _copyProgressMap: any;
        _curCopyId: number;
        _tempLootArr: any;
        _biCost: number;
        _initProp(): void;
        initData(copyProgressList: any): void;
        getInfo(cb: any, target: any): void;
        getNormalCurCopyId(): number;
        /**
         * 获取连胜数据
         * @returns [当前连胜，最高连胜]
         */
        getWinningStreak(): any[];
        updateWinningStreak(cb?: any, target?: any): void;
        getCopyProgressCtrl(copyType: any): any;
        updateCopyProgressCtrl(copyType: any, data: any): void;
        copyWipe(copyId: any, cb: any, target: any): void;
        /**
         * 副本开始
         * @param copyId
         * @param cb
         * @param target
         * @returns [[uid,[[物品id,物品数量],[物品id,物品数量]]]]
         */
        start(copyId: any, cb: any, target: any): boolean;
        isCanStartHell(cb: any, target: any): void;
        _checkHasEquip(): boolean;
        end(isWin: any, fightData: any, cb: any, target: any): void;
        /**
         * 获取副本掉落列表
         * @param copyId
         * @returns {any|Array}
         */
        getCopyLootList(copyId: any): any;
        /**
         * 返回普通副本战斗收益：
         * [每小时获得金币，每小时获得经验, 每小时获得刷怪数量, 每小时获得装备掉落, 下级, 升级需要经验，升级需要小时]
         */
        getNormalCopyProfit(): (number | any[])[];
        isCopyLocked(copyId: any): boolean;
        getPassCon(copyId: any): any;
        getVipCopyReTimes(copyVip: any): number;
        /***
         * 获取某级VIP副本区间
         * @param copyVip vip等级
         * @returns {number[]}
         */
        getVipCopyCfg(copyVip: any): any;
        getVipLootDesc(copyVip: any): string;
        checkPassCon(copyId: any): any[];
        /**
         * 检查开启条件
         * @param 条件类型，参数
         * ret : true 开启 false 不开启
         */
        _checkPassCon(type: any, arg: any): boolean;
        getCurMaxWaveCount(): any;
        /*********************************************************************************/
        getCopyEquipList(cb: any, target: any): void;
        getVipCopyList(vip: any): any[];
        _initCtrlByType(type: any, cb: any, target: any): any;
        getCopyBossList(cb: any, target: any): void;
        getCopyStateList(cb: any, target: any): void;
        hasNotReadEquip(type: any, cb: any, target: any): void;
        private _getListByType(type, cb, target);
        setRead(copyId: any): void;
        isRead(copyId: any): boolean;
        getCopyType(copyId: any): any;
        /**
         * 查询进入副本所需的道具：[道具id，数量]
         * @param type 副本类型 gc.c_prop.copyTypeKey
         * @returns {any}
         */
        queryCopyNeedItem(type: any): any;
        getBoosCopyEnterCost(): any[];
        getCopyCount(copyId: any): number;
        /**
         * 查询玩家当前vip等级下,可以打相应VIP副本的次数
         * @param copyVip 副本VIP等级
         * @returns {number}
         */
        getMaxVipCopyTimes(copyVip: any): number;
        getCopyVip(copyId: any): any;
        getBuyCopyCount(copyId: any): any;
        getCopyStar(copyId: any): any;
        getTesseraCount(itemId: any): number;
        getTesseraPrice(itemId: any): any;
        getEquipCopyPrice(copyId: any): number;
        getBossCopyPrice(copyId: any): number;
        getRealmCopyPrice(copyId: any): number;
        buyCopyCount1(copyId: any, cb: any, target: any): void;
        buyCopyCount(copyId: any, cb: any, target: any): boolean;
        /**
         * 购买入场卷
         * @param itemId 入场券id
         * @param cb
         * @param target
         */
        buyTessera(itemId: any, cb: any, target: any): void;
        buyEquipTessera(cb: any, target: any): boolean;
        buyRealmTessera(cb: any, target: any): boolean;
        getBossCopyTempList(): any[];
        getBossCopyLength(): number;
        getCurBossCopyId(): any;
        noCopyTimes1(copyId: any, cb: any, target: any): void;
        noCopyTimes(copyId: any, cb: any, target: any): void;
        /**
         * 返回开启等级
         * @param copyType gc.c_prop.copyTypeKey
         * @returns {number}
         */
        getOpenLvl(copyType: any): number;
        getPracticeOpenLvl(copyType: any): number;
        getIsAwardArr(copyId: any): boolean[];
        getHighPata(): number;
        isFirstTowerCopyId(): boolean;
        getTowerCopyIdRange(): number[];
        getFocusTowerCopyId(): number;
        getPaTaTreasuryCount(): any;
        getMaxFreeTowerTimes(): any;
        getPaTaTreasuryBuyCount(): any;
        getPaTaTreasuryNeedDia(): number;
        getPaTaInfo(cb: any, target: any): any;
        paTaAward(copyId: any, cb: any, target: any): boolean;
        paTaTreasury(cb: any, target: any): boolean;
        getTowerMonList(): any[];
        getTowerIndex(copyId: any): number;
        isTwerPassed(copyId: any): boolean;
        findSpAward(copyId: any): number;
        getTowerBaokuNum(): number;
    }
    var copyCtrl: CopyCtrl;
}
/**
 * Created by Administrator on 2015/9/8.
 */
declare module gd {
    class CopyProgressEntityCtrl extends mo.DataController {
        _initProp(): void;
    }
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class CouponCtrl extends mo.DataController {
        _initProp(): void;
        use(code: any, cb: any, target: any): boolean;
    }
    var couponCtrl: CouponCtrl;
}
/**
 * Created by Sara on 2015/12/4.
 */
declare module gd {
    class GuildCtrl extends mo.DataController {
        static ON_MANAGER_POSITION_CHANGED: string;
        static ON_GUILD_INFO_CHANGED: string;
        _memberList: any;
        _isOpenBoss: boolean;
        _initProp(): void;
        initData(data: any): void;
        isOpenBoss(): boolean;
        updateData(data: any): void;
        updateEntity(data: any): void;
        getLevel(): number;
        getLvl(): any;
        getId(): any;
        getExitGuildCD(): any;
        getMaxMember(lvl: any): any;
        getNeedExp(lvl: any): any;
        /**
         * 获取公会排名
         * @param cb
         * @param target
         * @returns
         */
        getRank(cb: any, target: any): void;
        /**
         * 获取公会数据
         * @param cb
         * @param target
         * @returns [是否有公会（true：有，false：没有）,gc.dsConsts.GuildPersonalEntity,gc.dsConsts.GuildEntity,会长名称，公会排名]
         */
        getInfo(cb: any, target: any): void;
        /**
         * 创建公会
         * @param name 公会名称
         * @param cb
         * @param target
         * @returns gc.dsConsts.GuildEntity
         */
        establishGuild(name: any, cb: any, target: any): boolean;
        /**
         * 搜索公会
         * @param cb
         * @param guildId 公会id
         * @param target
         * @returns gc.dsConsts.GuildEntity
         */
        seekGuild(guildId: any, cb: any, target: any): boolean;
        /**
         * 申请加入公会
         * @param cb
         * @param guildId 公会id
         * @param target
         * @returns [gc.dsConsts.GuildPersonalEntity,gc.dsConsts.GuildEntity]
         */
        joinGuild(guildId: any, cb: any, target: any): boolean;
        _joinGuild(guildId: any, cb: any, target: any): void;
        /**
         * 获取申请列表
         * @param cb
         * @param target
         * @returns [gc.dsConsts.UserEntity]
         */
        getAppliedMembers(cb: any, target: any): void;
        /**
         * 申请列表管理
         * @param cb
         * @param guildId 公会id
         * @param tUserId
         * @param isConsent 是否同意  true：同意  false：拒绝
         * @param target
         * @returns gc.dsConsts.GuildEntity
         */
        appliedMembersSet(tUserId: any, isConsent: any, cb: any, target: any): void;
        /**
         * 工会设置
         * @param cb
         * @param joinCon  加入条件
         * @param joinLvl  加入最低等级
         * @param target
         * @returns gc.dsConsts.GuildEntity
         */
        guildSetting(joinCon: any, joinLvl: any, cb: any, target: any): void;
        /**
         * 修改公告
         * @param cb
         * @param notice  公告
         * @param target
         * @returns gc.dsConsts.GuildEntity
         */
        setNotice(notice: any, cb: any, target: any): boolean;
        /**
         * 退会
         * @param cb
         * @param isQuit    退会/解散
         * @param target
         */
        exitGuild(isQuit: any, cb: any, target: any): void;
        _exitGuild(cb: any, target: any): void;
        getRankFileLvl(guildAct: any): number;
        getAwardUi(): any[];
        /**
         * 获取会员列表
         * @param cb
         * @param target
         * @returns [ds.GuildMember]
         */
        getMembers(cb: any, target: any): void;
        getMemberList(): any;
        getMemberByUserId(userId: any): any;
        getMemberData(userId: any, cb: any, target: any): void;
        /**
         * 设置爵位
         * @param targetUserId
         * @param ennobleType  gc.c_prop.ennobleTypeKey
         * @param cb
         * @param target
         */
        static ON_MEMBER_JOB_CHANGE: string;
        setEnnoble(targetUserId: any, ennobleType: any, cb: any, target: any): void;
        /**
         * 操作会员
         * @param op gc.c_prop.guildMemberOpKey
         * @param targetUserId
         * @param cb
         * @param target
         */
        opMember(op: any, targetUserId: any, targetName: any, cb: any, target: any, _notCheckMsg?: any): void;
        lottery(count: any, cb: any, target: any): boolean;
        _getPropByIndex(index: any): number;
        getAddCombat(): number;
        getCopyResetTimes(): any;
    }
    var guildCtrl: GuildCtrl;
    var guildCtrl: GuildCtrl;
}
/**
 * Created by Sara on 2016/4/6.
 */
declare module gd {
    class GuildCopyCtrl extends mo.DataController {
        static ON_GUILD_COPY_CD_CLEAR: string;
        _guildCopyArr: any;
        curFightGuildBossId: any;
        _initProp(): void;
        initData(data: any): void;
        updateData(data: any): void;
        getGuildSection(): any[];
        getSectionInfo(sectionId: any): any;
        getGuildBossList(sectionId: any): any[];
        getGuildBossListLength(sectionId: any): number;
        getGuildProgress(bossId: any): number;
        getNewGuildBossId(): {};
        getCurBossId(sectionId: any): any;
        isBossKilled(sectionId: any, bossId: any): boolean;
        getGuildCopyCdState(): {
            threshold: any;
            needBuy: boolean;
        };
        isNeedClearFightCD(): boolean;
        getGuildCopyCd(): any;
        getResetCd(): number;
        getCompletedNum(sectionId: any): number;
        /**
         * 行会副本开始
         * @param chapterId 章节ID
         * @param bossId
         * @param cb
         * @param target
         * @returns []
         */
        guildStart(chapterId: any, bossId: any, cb: any, target: any): boolean;
        guildEnd(isWin: any, cb: any, target: any): void;
        guildCopyReset(cb: any, target: any): void;
        clearGuildCopy(bossId: any, cb: any, target: any): void;
        getBuyCopyCount(): any;
        getCopyCount(bossId: any): any;
        getMaxCopyCount(): any;
        /**
         * 行会副本领取奖励
         * @param type
         * @param typeId
         * @param cb
         * @param target
         * @returns []
         */
        guildCopyAward(type: any, typeId: any, cb: any, target: any): void;
        _calProgress(progress: any): any;
        getSectionIdByBossId(bossId: any): number;
        getMaxKillTimes(): any;
    }
    var guildCopyCtrl: GuildCopyCtrl;
    var guildCopyCtrl: GuildCopyCtrl;
}
/**
 * Created by Sara on 2015/12/4.
 */
declare module gd {
    class GuildPersonalCtrl extends mo.DataController {
        _initProp(): void;
        initData(data: any): void;
        updateData(data: any): void;
        getEnnoble(): any;
        getPosition(): any;
        getGuildId(): any;
        getContributeValue(): any;
        getSumContribute(): any;
        /***************************/
        getActMaxNum(actId: any): any;
        getActNum(actId: any): any;
        _calRefreshData(): void;
        /**
         * 上香
         * @param actId
         * @param cb
         * @param target
         */
        pickAct(actId: any, cb: any, target: any): void;
    }
    var guildPersonalCtrl: GuildPersonalCtrl;
    var guildPersonalCtrl: GuildPersonalCtrl;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class GuildWarCtrl extends mo.DataController {
        static ON_GUILD_WAR_FIGHT: string;
        static ON_GUILD_LIST_UPDATE: string;
        static ON_GUILD_ATK_UPDATE: string;
        static ON_GUILD_DEF_UPDATE: string;
        static ON_GUILD_OPEN_CHANGE: string;
        _fightServerId: any;
        _fightGuildId: any;
        _fightDoor: any;
        _pointsRankList: any;
        _chairRankList: any;
        _userRankList: any;
        _fightRecordArr: any;
        _isEnter: boolean;
        _lastRecordId: number;
        curGuildServer: any;
        curDoor: any;
        _isOpen: number;
        _cfgData: any;
        _guildWarList: any;
        _guildListUpdateNum: number;
        _sceneType: number;
        _attackWarServerId: any;
        _attackWarGuildId: any;
        _updateAttackWarDic: any;
        _defenceData: any;
        _isFighting: boolean;
        _overTime: Date;
        _lastMyData: any;
        _initProp(): void;
        setSyncSceneType(sceneType: any): void;
        exitSyncScenne(): void;
        /**
         * 获取个人数据
         * @param cb
         * @param target
         * @returns ds.Consts.MyGuildWarData
         */
        getInfo(cb: any, target: any): void;
        setCfgData(cfgData: any): void;
        /**
         * 获取配置数据
         * @returns ["行会战开战星期","行会战开始结束时间","可报名时间星期","可报名时间"]
         */
        getCfgData(): any;
        isOpening(): number;
        setIsOpen(value: any): void;
        getOpenReSeconds(): number;
        /**
         * 获取报名组别
         * @param cb
         * @param target
         * @returns [groupId,行会战力]
         */
        getSignUpData(cb: any, target: any): any;
        /**
         * 获取我最后的信息
         * @returns [组别，行会排名，个人排名]
         */
        getLastMyData: () => any;
        /**
         * 报名
         * @param groupId 组别id
         * @param cb
         * @param target
         */
        signUp(groupId: any, cb: any, target: any): void;
        /**
         * 获取行会列表
         * @param cb
         * @param target
         * @returns [gc.dsConsts.GuildServer]
         */
        getGuildList(cb: any, target: any): any;
        _calGuildWarList: (guildWarList: any) => any[];
        _sortGuildWarList: (guildWarList: any) => any;
        _sortGuildWarList1(list: any): any;
        /**
         * 获取战斗攻击数据
         * @param serverId
         * @param guildId
         * @param cb
         * @param target
         * @returns gc.dsConsts.GuildWarData
         */
        getWarAttackData(serverId: any, guildId: any, cb: any, target: any): any;
        /**
         * 获取战斗防守数据
         * @param cb
         * @param target
         * @returns gc.dsConsts.GuildWarData
         */
        getWarDefenceData(cb: any, target: any): any;
        upDoor(door: any, cb: any, target: any): boolean;
        downDoor(door: any, cb: any, target: any): void;
        /**
         * 获取所有排名
         * @param cb
         * @param target
         * @returns gc.dsConsts.GuildWarAllRank
         */
        getGuildWarAllRank(cb: any, target: any): void;
        /**
         * 获取上次排行
         * @param groupId
         * @param cb
         * @param target
         * @returns gc.dsConsts.GuildWarAllRank
         */
        getLastRankList(groupId: any, cb: any, target: any): void;
        /**
         * 获取我的行会排名
         * @returns gc.dsConsts.GuildWarRank
         */
        getMyPointRank(): any;
        /**
         * 获取我的会长排名
         * @returns gc.dsConsts.GuildWarUserRank
         */
        getMyChairRank(): any;
        /**
         * 获取我的排名
         * @returns gc.dsConsts.GuildWarUserRank
         */
        getMyUserRank(): any;
        /**
         * 获取己方防守记录
         * @param cb
         * @param target
         * @returns [gc.dsConsts.GuildWarDefenceRecord]
         */
        getDefenceRecordList(cb: any, target: any): void;
        /**
         * 获取攻击战况
         * @param cb
         * @param target
         * @returns [gc.dsConsts.GuildWarAttackRecord]
         */
        getAttackRecordList(cb: any, target: any): void;
        fightStartDoor(serverId: any, guildId: any, door: any, cb: any, target: any): boolean;
        fightEndDoor(isWin: any, cb: any, target: any): void;
        enter(cb: any, target: any): void;
        /**
         * 获取上周积分情况
         * @param groupId
         * @param cb
         * @param target
         * @returns [gc.dsConsts.GuildWarRank]
         */
        getLastPointsRankList(groupId: any, cb: any, target: any): void;
        /**
         * 清除cd
         * @param cb
         * @param target
         */
        clearCd(cb: any, target: any): void;
        /**
         * 鼓舞
         * @param cb
         * @param target
         */
        inspire(cb: any, target: any): void;
        getInspireCost(): number;
        getClearCdCost(): number;
        getInspireCount(): number;
        getClearCdCount(): number;
        syncData(): void;
        _calFightRecord(fightRecordArr: any): void;
        getFightCd(): number;
        getInspireReSeconds(): number;
        getOverReSeconds(): number;
    }
    var guildWarCtrl: GuildWarCtrl;
}
/**
 * Created by Sara on 2015/9/18.
 */
declare module gd {
    class CustomCtrl extends mo.DataController {
        static ON_INHERITED: string;
        static ON_CUSTOM: string;
        _initProp(): void;
        /**
         * 获取订制券
         * @param color 制定颜色 c_prop.equipColorKey
         * @returns {Array}
         */
        getCustomTicket(color?: any): any[];
        getCustomEquips(): any[];
        canCustomTicket(ticktId: any): boolean;
        isCustomRed(): boolean;
        getCustomListInfo(): any[];
        getCustomLvlLimt(ticketId: any): any;
        getTicketInfo(ticketId: any, lvl: any, equipType: any): {};
        getExtrPropAddRatio(): any;
        getMaxCustomPropNum(): any;
        getCustomizationId(certificate: any, job: any, lvl: any, equipType: any): number;
        custing: boolean;
        customization(certificate: any, job: any, name: any, lvl: any, abilityIndex: any, equipType: any, cb: any, target: any): boolean;
        _doCustomization(certificate: any, job: any, name: any, lvl: any, abilityIndex: any, equipType: any, cb: any, target: any): void;
        upCustomization(opt: any, cb: any, target: any): boolean;
        getInheritedEquipOpt(equipId: any): {
            equipId: any;
            nextEquipInfo: any;
            nextEquipNeedLvl: number;
            nextEquipNeedLvlEnough: boolean;
            isMaxLvl: boolean;
            costItemId: any;
            costCount: any;
            isItemEnough: boolean;
        };
    }
    var customCtrl: CustomCtrl;
    var customCtrl: CustomCtrl;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class HeroCtrl extends mo.DataController {
        static ON_WEAR_RUNE: string;
        static ON_CALL_HERO: string;
        static ON_FIGHT_HERO_CHANGE: string;
        _heroMap: any;
        _skillCd: number;
        isSelf: boolean;
        isUseStoneOpt: boolean;
        wingUpgradeTypeStr: string;
        curSelRoleIdx: any;
        _initProp(): void;
        initData(heroList: any): void;
        skillCd: number;
        /**
         * 获取列表
         * @returns {Array}
         */
        getList(): any[];
        isGetAllHero(): boolean;
        getNextIdxToBeOpen(): number;
        hasHeroByIndex(index: any): boolean;
        hasHeroByJob(job: any): boolean;
        hasHeroJobData(tempId: any): any;
        getHeroByJob(job: any): any;
        isToBeOpen(index: any): boolean;
        getHeroOpenCfg(idx: any): any[];
        getSpHeroOpenCfg(idx: any): any[][];
        isOpenCfgOk(idx: any): boolean;
        _sortHeroFuc(aHec: any, bHec: any): number;
        calPropAndCombat(): void;
        autoInfuseSwitch(isOpenIn: any, cb: any, target: any): void;
        ybInjectTipsed: boolean;
        getInjectCost(type: any): any;
        extraInfuse(type: any, cb: any, target: any): void;
        /**
         * 获取主英雄外观
         * @param userId
         * @param cb
         * @param target
         * @returns [装备显示id,武器显示id,翅膀id,性别,是否霸主]
         */
        getMainHeroDisplay(userId: any, cb: any, target: any): void;
        /**
         * 获取某职业英雄外观
         * @param userId
         * @param tempId 0:主角，1：战士，2：法师，3：道士
         * @param cb
         * @param target
         * @returns [装备显示id,武器显示id,翅膀id,性别,是否霸主]
         */
        getHeroDisplayByTempId(userId: any, tempId: any, cb: any, target: any): void;
        getTotalCombat(): number;
        calSkill(): void;
        getMainHeroCtrl(): any;
        getHeroByIndex(index: any): any;
        getHeroIndex(hec: any): number;
        /**
         * 获取英雄map
         * @returns
         */
        getHeroMap(): any;
        getHeroEntityCtrl(id: any): any;
        updateHeroEntityCtrl(id: any, data: any): void;
        getMaxStateLvl(): number;
        getEquipData(id: any): any;
        /**
         * 召唤英雄
         * @param tempId
         * @param {gc.c_prop.sexKey} sex  性别
         * @param cb
         * @param target
         */
        callHero(tempId: any, sex: any, cb: any, target: any): void;
        getHeroSkillArr(id: any): any;
        getSkillCd(): number[];
        /**
         * 技能升级
         * @param tempId 英雄模板id
         * @param index 英雄技能下标
         * @param cb
         * @param target
         */
        upSkill(id: any, index: any, cb: any, target: any): boolean;
        /**
         * 清除技能CD
         * @param cb
         * @param target
         */
        clearSkillCd(cb: any, target: any): boolean;
        getRealmCount(realmId: any): any;
        isRuneCom(runeId: any): boolean;
        canRuneCom(runeId: any): number;
        /**
         * 装备符文块
         * @param id
         * @param index 英雄技能下标
         * @param cb
         * @param target
         */
        wearRune(id: any, index: any, cb: any, target: any): boolean;
        /**
         * 装备符文块
         * @param id
         * @param
         * @param cb
         * @param target
         */
        wearAllRune(id: any, cb: any, target: any): boolean;
        getPropsStr(propInfos: any): string;
        /**
         * 升级境界
         * @param id
         * @param cb
         * @param target
         */
        upRealm(id: any, cb: any, target: any): boolean;
        canUpRealm(id: any): boolean;
        getStrengthLvlList(id: any): any;
        getIndexStrengthArr(id: any, index: any): any[];
        getStarLvlList(id: any): any;
        getIndexStarArr(id: any, index: any): any[];
        getGemIdList(id: any): any;
        /**
         * 强化
         * @param id
         * @param index 英雄对应位置下标
         * @param cb
         * @param target
         */
        strength(id: any, index: any, cb: any, target: any): boolean;
        /**
         * 升星
         * @param id
         * @param index 英雄对应位置下标
         * @param cb
         * @param target
         */
        upStar(id: any, index: any, cb: any, target: any): boolean;
        /**
         * 宝石升级
         * @param id
         * @param index 英雄对应位置下标
         * @param cb
         * @param target
         */
        upGem(id: any, index: any, cb: any, target: any): boolean;
        getWingArr(id: any): any[];
        wingComFos(id: any, cb: any, target: any): void;
        wingAdvFos(id: any, cb: any, target: any): void;
        /**
         * 翅膀培养
         * @param id
         * @param fosType 培养类型
         * @param cb
         * @param target
         */
        wingFos(id: any, fosType: any, cb: any, target: any): boolean;
        /**
         * 翅膀一键培养
         * @param id
         * @param fosType 培养类型
         * @param cb
         * @param target
         */
        wingFos2Top(id: any, fosType: any, isUseDiamond: any, cb: any, target: any): boolean;
        /**
         * 翅膀升级
         * @param id
         * @param cb
         * @param target
         */
        upWing(id: any, cb: any, target: any): void;
        getAllHeroAttack(): number;
        isMy4thRole(index: any): boolean;
        isMy4thRoleByHec(hec: any): boolean;
        setIsUseStoneOpt(isUse: boolean): void;
        getIsUseStoneOpt(): boolean;
        setWingUpgradeTypeStr(typeStr: string): void;
        getWingUpgradeTypeStr(): string;
        getFightList(): any[];
        saveFightList(heroEntityCtrList: any, cb: any, target: any): void;
        _sortHeroList(aHec: any, bHec: any): number;
    }
    var heroCtrl: HeroCtrl;
}
/**
 * Created by Administrator on 2015/9/8.
 */
declare module gd {
    interface IHeroPart {
        hec: gd.HeroEntityCtrl;
        isMatrix: boolean;
        part: number;
        delegate: any;
    }
    class HeroEntityCtrl extends mo.DataController {
        static ON_EQUIP_CHANGED: string;
        static ON_EQUIP_STR: string;
        static ON_EQUIP_UPSTAR: string;
        static ON_WING_CHANGED: string;
        static ON_EQUIP_UPGEM: string;
        static ON_SKILL_CHANGED: string;
        static ON_GIFT_SKILL_CHANGED: string;
        static Scale_Num: number;
        props: Array<number>;
        skillIds: any;
        skillLevels: any;
        isSelf: boolean;
        otherData: Array<any>;
        fightData: Array<any>;
        _initProp(): void;
        init(data: any): void;
        updateEntity(data: any): void;
        private _getCurProp();
        private _calProChanged(oldProp, newData);
        getTalismanSkill(): any[];
        getTalismanAdorn(): any;
        initSkill(): void;
        _getReplaceTalentSkillId(index: any): number;
        _initHearSkill(): void;
        /**
         * 获取等级
         * @returns {number}
         */
        heartData: any;
        /**
         * 获取等级
         * @returns {number}
         */
        lvl: number;
        /**
         * 获取职业类型
         * @returns {gc.c_prop.heroJobKey}
         */
        job: any;
        setPropByIndex(index: number, value: number): void;
        getPropByIndex(index: number): number;
        private getFightPropByIndex(baseIndex, scaleIndex, tempScale);
        maxHpFight: number;
        attackFight: number;
        defenceFight: number;
        magicDefenceFight: number;
        hitFight: number;
        dodgeFight: number;
        criticalFight: number;
        disCriticalFight: number;
        luckyValueFight: number;
        moveSpeedFight: number;
        attackIntervalFight: number;
        damageIncreaseFight: number;
        damageDecreaseFight: number;
        benumbProFight: number;
        disBenumbProFight: number;
        benumbProSpanFight: number;
        reviveCountFight: number;
        reviveHPScaleFight: number;
        maxHp2Fight: number;
        disMaxHp2Fight: number;
        _getHitRate(dodgeFightTarget: any): number;
        _getCriticalRate: (disCriticalFightTarget: any) => number;
        _getCritDamage: (disCriticalFightTarget: any) => number;
        _getDefence: (defenceFight: any, magicDefenceFight: any) => any;
        _getHpCoefficient: (skillInfo: any, skillLevel: any) => number;
        getDamagePerSec(target: any): number;
        equipData: any;
        tempId: any;
        combat: any;
        sex: number;
        id: any;
        wingData: any;
        gemData: any;
        isWingActived(): boolean;
        isWingLimit(): boolean;
        isWingOpen(): boolean;
        getGemInfoByPart(part: any): any;
        getStrLvlByEquipPart(part: any): any;
        getRefLvlByEquipPart(part: any): any;
        getStrLvlInfoByEquipPart(part: any): any[];
        getStarLvlByEquipPart(part: any): any;
        getStarLvlInfoByEquipPart(part: any): any[];
        getClothDisplayID(): any;
        getWeaponDisplayID(): any;
        getWingDisplayID(): any;
        getIsKing(): any;
        getMedalTitle(): any;
        getRebirthLvl(): any;
        getEquipInfoByPart(part: any): any;
        getEquipTempIdByPart(part: any): any;
        getPartByEquipId(equipId: any): number;
        getEquipIdByPart(part: any): any;
        isPartEquiped(part: any): boolean;
        isEquiped(): boolean;
        isNormalEquiped(): boolean;
        getStanbyEquip(part: any): any[];
        getStanbyBreakId(part: any): any;
        getFirstEquipedPart(): number;
        getAllSpecialEquip(): any[];
        getAllCanInherEquip(): any[];
        getStrOpt(part: any): {
            part: any;
            strMax: boolean;
            curStrInfo: any[];
            nextStrInfo: any[];
            stone: number;
            gold: number;
            costStone: number;
            costGold: number;
            strengthLimit: number;
            strengthLvl: number;
            stoneEnough: boolean;
            goldEnough: boolean;
        };
        getRefineOpt(part: any): {
            part: any;
            isMax: boolean;
            curRefineInfo: any[];
            nextRefineInfo: any[];
            stone: number;
            gold: number;
            costStone: number;
            costGold: number;
            strengthLvl: number;
            needStrLv: number;
            refineLv: number;
            stoneEnough: boolean;
            goldEnough: boolean;
        };
        strength(opt: any, cb: any, target: any): boolean;
        /**
         * 装备强化精炼
         * @param cb
         * @param target  [是否成功,强化后等级,是否暴击,是否降级]
         */
        equipRefine(opt: any, cb: any, target: any): boolean;
        getUpStarOpt(part: any): {
            part: any;
            curProp: any[];
            nextProp: any[];
            starLvl: number;
            stone: number;
            gold: number;
            costStone: number;
            costGold: number;
            strengthLimit: number;
            strMax: boolean;
            stoneEnough: boolean;
            goldEnough: boolean;
            topLv: number;
            topCostStone: number;
            topCostGold: number;
            topStoneEnough: boolean;
            topGoldEnough: boolean;
            topNeed: boolean;
            topMax: boolean;
            topCurProp: any[];
        };
        upStar(opt: any, cb: any, target: any): boolean;
        /**
         * 升星突破
         * @param cb
         * @param target  [是否成功]
         */
        starTop(opt: any, cb: any, target: any): boolean;
        getUpGemOpt(part: any): {
            part: any;
            gemLvl: number;
            gemId: number;
            gemDebrisId: number;
            gemDebris: number;
            costGemDebris: number;
            strMax: boolean;
            stoneEnough: boolean;
            nextNeedLvl: number;
            roleLvlEnough: boolean;
        };
        upGem(opt: any, cb: any, target: any): boolean;
        getWingOpt(): {
            wingId: number;
            wingIdLimit: number;
            wingName: string;
            wingLvl: number;
            gold: number;
            diamond: number;
            plumageCount: number;
            nowPro: {};
            nextPro: {};
            nowStarCount: number;
            nowExp: number;
            needExp: number;
            nowExpPer: number;
            comTrain: number;
            advTrain: number;
            featherCount: number;
            strengthOpenLvl: number;
            leftLvl: number;
            rightLvl: number;
        };
        wingActivate(cb: any, target: any): void;
        wingComFos(opt: any, cb: any, target: any): void;
        wingAdvFos(opt: any, cb: any, target: any): void;
        /**
         * 翅膀培养
         * @param fosType 培养类型
         * @param cb
         * @param target
         */
        wingFos(opt: any, fosType: any, cb: any, target: any): boolean;
        /**
         * 翅膀强化
         * @param part 部位
         * @param isReplace 是否元宝替代
         * @param cb
         * @param target  [是否成功,强化后等级,是否暴击,是否降级]
         */
        wingStrength(opt: any, part: any, isReplace: any, cb: any, target: any): boolean;
        /**
         * 翅膀升级
         * @param cb
         * @param target
         */
        upWing(cb: any, target: any): void;
        static createNewEnemy(heroData: any, fightData: any, otherData: any): HeroEntityCtrl;
        changeEquip(index: any, equipId: any, cb: any, target: any): boolean;
        isEquipReddot(): any[];
        isTringReddot(): any[];
        isSkillReddot(): any[];
        isStateReddot(): (boolean | any[])[];
        isStrengthReddot(): any[];
        isUpStarReddot(): any[];
        isUpGemReddot(): any[];
        getHeroRealmList(): any[];
        getHeroRealmRune(index: any): any;
    }
}
/**
 * Created by lihex on 1/5/16.
 */
declare module gd {
    class EnemyHeroCtrl extends mo.DataController {
        heroCtrlList: Array<any>;
        isSelf: boolean;
        _initProp(): void;
        getLvl(): any;
        getUserName(): any;
        getMainHeroCtrl(): any;
        getHeroByIndex(index: any): any;
        hasHeroByIndex(index: any): boolean;
        isToBeOpen(index: any): boolean;
        isMy4thRole(index: any): boolean;
        getFightList(): any[];
        /**
         * 获取显示英雄数据
         * @param userId
         * @param cb
         * @param target
         */
        getShowHeroData(userId: any, cb: any, target: any): void;
    }
    var enemyHeroCtrl: EnemyHeroCtrl;
}
/**
* Created by huanghaiying on 14/12/16.
*/
declare module gd {
    class MailCtrl extends mo.DataController {
        static OPERATE_READ: number;
        static OPERATE_PICK: number;
        init(data: any): void;
        initData(data?: any): void;
        /**
         * 获取列表
         * @returns {Array}
         */
        getList(cb: any, target: any): void;
        /**
         * 获取详细
         * items数据结构
         * {hero:{"id":num,..},diamond:100,wipeItem:100}
         * @param id
         * @returns {*}
         */
        getInfoById(id: any): any;
        /**
         * 设置阅读
         * @param id
         * @param cb
         * @param target
         */
        setRead(id: any, cb: any, target: any): void;
        /**
         * 提取附件物品
         * @param id
         * @param cb
         * @param target
         * @returns 返回是否删除,true:已经删除，false:木有删除
         */
        pickItems(id: any, cb: any, target: any): void;
        /**
         * 一键提取
         * @param id
         * @param cb
         * @param target
         * @returns 返回是否删除,true:已经删除，false:木有删除
         */
        pickAllItems(cb: any, target: any): void;
        /**
         * 获取是否存在需要阅读或者提取物品的邮件
         * @param cb
         * @param target
         */
        isNeedOperate(cb: any, target?: any): void;
        /******************************************************************private********************************************************************/
        /**
         * 计算操作后是否过期删除
         * @param id
         * @param type
         * @private
         */
        _calExpireDel(id: any, type: any): void;
        /**
         * 是否需要删除
         * @param id
         * @returns {boolean}
         * @private
         */
        _isNeedToDel(id: any): boolean;
        /**
         * 重新排序
         * @private
         */
        _sort(): void;
        /**
         * 剔除删除的
         * @private
         */
        _calAllDel(): void;
        /**
         * 删除条记录
         * @param id
         * @private
         */
        _del(id: any): void;
        _initFromCfg(): void;
        _getIsPicked(mailData: any): number;
    }
    var mailCtrl: MailCtrl;
}
/**
 * Created by Sara on 2016/2/26.
 */
declare module gd {
    class MedalCtrl extends mo.DataController {
        static ON_STR_SUCC: string;
        static ON_ACTVATE_SUCC: string;
        _initProp(): void;
        initData(data: any): void;
        updateData(data: any): void;
        isActiveMedal(warPrintedId: any): boolean;
        isMedalUp(): any[];
        isMedalItemEnough(itemId: any): boolean;
        /**
         * 修改战印头衔
         * @param warPrintedId   战印id
         * @param cb
         * @param target
         */
        setMedalTitle(warPrintedId: any, cb: any, target: any): void;
        /**
         * 激活战印
         * @param warPrintedId   战印id
         * @param cb
         * @param target
         */
        activeMedal(warPrintedId: any, cb: any, target: any): void;
        /**
         * 获得当前佩戴战印
         * @returns {*}
         */
        getMedalTitle(): any;
        /**
         * 获取已激活战印
         * @param cb
         * @param target
         * @param type 0所有,1未穿戴的
         * @return [[勋章id,强化等级,评分,品质],[勋章id,强化等级,评分,品质],[勋章id,强化等级,评分,品质],...] 按评分排序
         */
        getWarPrintedList(type?: number): any[];
        getToBeActivatedList(): any[];
        getAllWarPrintList(): any[];
        /**
         * 战印强化
         * @param warPrintedId   战印id
         * @param cb
         * @param target
         */
        warPrintedStrength(opt: any, cb: any, target: any): boolean;
        /**
         * 获得战印强化数据
         * @param medalId 勋章id
         * @returns {*}
         */
        getWarPrintData(medalId: any): any;
        transWarPrintData(medalId: any): any[];
        getWarPrintStrOpt(medalId: any): {
            medalId: any;
            curStrId: any;
            nextStrId: any;
            isStrMax: boolean;
            reqItems: any[];
            isItemEnough: boolean;
            medalEnough: boolean;
        };
        /**
         * 根据强化等级获得强化配置ID
         * @param itemId 勋章物品ID
         * @param strLvl 强化等级
         */
        getStrId(itemId: any, strLvl: any): number;
        /**
         * 获得单个战印的属性加成
         * @param itemId
         * @param strId
         * @param withAll
         * @returns {Array}
         */
        getStrProperty(itemId: any, strId: any, withAll?: boolean): any[];
        getTotalPrintProperty(): any[];
        isNewPrintActived: boolean;
        isMedalRed(): boolean;
        sortList(list: any): any;
        getAchievmentMedal(): any[];
    }
    var medalCtrl: MedalCtrl;
    var medalCtrl: MedalCtrl;
}
/**
 * Created by Administrator on 2015/10/16.
 *
 * ��Ϣ����
 */
declare module gd {
    class MsgReceiverCtrl extends mo.DataController {
        static ON_VALUE_KEY: string;
        _initProp(): void;
        initData(data?: any): void;
    }
    var msgReceiverCtrl: MsgReceiverCtrl;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class NoticeCtrl extends mo.DataController {
        static _noticeList: any;
        _initProp(): void;
        /**
         * 获取某类型公告的title
         * @param cb
         * @param target
         * @returns [[gc.dsConsts.NoticeEntity],[gc.dsConsts.NoticeEntity],...]
         */
        static getTpyeNotice(type: any): any[];
        /**
         * 获取公告列表
         * @param cb
         * @param target
         * @returns [gc.dsConsts.NoticeEntity]
         */
        static getList(cb: any, target: any): void;
        /**
         * 获取最新的公告
         * @param cb
         * @param target
         * @returns gc.dsConsts.NoticeEntity
         */
        static getNewOne(cb: any, target: any): void;
    }
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class PkOutCtrl extends mo.DataController {
        _rank: number;
        _curEnemyID: number;
        _curFightType: number;
        _curIsRevenge: number;
        _pkRecordList: any;
        _hasNewDeal: boolean;
        _hasNewRankPkDeal: boolean;
        _bePkKill: boolean;
        _dataRefreshTime: any;
        autoPkOut: boolean;
        _initProp(): void;
        initData(data: any): void;
        checkOpen(cb: any, target: any): any;
        getKillValue(): any;
        getPkValue(): any;
        getAccWinCount(): any;
        calPkValue(): void;
        getMyRank(cb: any, target: any): void;
        /**
         * 获取排名奖励
         * @param rank
         * @returns [升星石数量，金币数量,元宝]
         */
        getRankAward(rank: any): number[];
        _initRank(cb?: any, target?: any): void;
        open(cb: any, target: any): void;
        /**
         * 获取下一次对手剩余时间
         * @returns {number}
         */
        getReRefreshSeconds(): number;
        /**
         * 获取对手列表
         * @param cb
         * @param target
         * @returns [ds.PkOutUserData]
         */
        getEnemyList(cb: any, target: any): void;
        _calRefreshNum(): void;
        /**
         * 刷新对手
         * @param cb
         * @param target
         * @returns [ds.PkOutUserData]
         */
        refreshEnemy(isWaiting: any, cb: any, target: any): void;
        getClearReSeconds(): number;
        /**
         * 刷新对手
         * @param cb
         * @param target
         */
        clearPkValue(cb: any, target: any): boolean;
        isTodayRankWin(eid: any): boolean;
        _getRankPkTime(): any;
        /**
         * 请求战斗开始，并且返回对方角色信息
         * @param enemyId
         * @param fightType
         * @param isRevenge 是否复仇
         * @param cb
         * @param target
         * @returns [ds.HeroEntityCtrl]
         */
        start(enemyId: any, fightType: any, isRevenge: any, cb: any, target: any): boolean;
        /**
         * 战斗结束，获取收益
         * @param enemyId
         * @param isWin 是否胜利
         * @param cb
         * @param target
         * @returns ds.FightResult
         */
        end(isWin: any, fightData: any, cb: any, target: any): void;
        /**
         * 获取排行列表，返回50名数据
         * @param cb
         * @param target
         * @returns [ds.Rank]
         */
        getRankList(cb: any, target: any): void;
        /**
         * 获取个人战斗记录，最多20条
         * @param cb
         * @param target
         * @returns [ds.ArenaRecordEntity]
         */
        getPkRecordList(cb: any, target: any): void;
        setReadRecord(): void;
        hasNewDeal(): boolean;
        setNewDeal(bool: any): void;
        /**
         * 处理被抢
         * @param cb
         * @param target
         */
        dealRecord(cb?: any, target?: any): void;
        _calRecord(dataList: any): void;
        /**
         * 处理被抢
         * @param cb
         * @param target
         */
        _dealRecord(fightType: any, cb?: any, target?: any): void;
        /***************************************************排行榜相关***************************************************/
        /**
         * 获取排行榜个人战斗记录，最多20条
         * @param cb
         * @param target
         * @returns [ds.ArenaRecordEntity]
         */
        getRankPkRecordList(cb: any, target: any): void;
        hasRankPkNewDeal(): boolean;
        setRankPkNewDeal(bool: any): void;
        /**
         * 处理被抢
         * @param cb
         * @param target
         */
        dealRankPkRecord(cb?: any, target?: any): void;
        /***************************************************排行榜相关***************************************************/
        getRevengeList(cb?: any, target?: any): void;
        /**
         * 获取对手列表
         * @param cb
         * @param target
         * @returns [ds.PkOutUserData]
         */
        getRevengeEnemyList(cb: any, target: any): void;
        isBePkKill(): boolean;
        resetBePkKill(): void;
        setBePkKill(bool: any): void;
        /*************************************************江湖探秘*******************************************************/
        treasureBiz(cb: any, target: any): void;
        incognito(cb: any, target: any): void;
        getExPkOutInfo(cb: any, target: any): void;
        openTreasure(id: any, cb: any, target: any): void;
        /**
         * 处理秘宝被抢
         * @param cb
         * @param target
         */
        getTreasurePkRecordList(cb: any, target: any): void;
        /**
         * 合成秘宝碎片
         * @param ItemId
         * @param cb
         * @param target
         */
        compose(itemId: any, cb: any, target: any): void;
    }
    var pkOutCtrl: PkOutCtrl;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class PointCtrl extends mo.DataController {
        _initProp(): void;
        /**
         * 是否显示红点，特效，绿点
         * @param {gc.dsConsts.pointEffectKey|gc.dsConsts.pointRedKey|gc.dsConsts.pointGreenKey} key
         * @returns {boolean}
         */
        isShow(key: any): boolean;
        private _isShow(key);
        private _isShowByKeys(keys);
        /**
         * 获取数据
         * @param key
         * @returns {Array}
         */
        getShowData(key: any): any[];
        /**
         * 计算红点
         * @param key
         */
        cal(key: any): void;
        calAll(): void;
    }
    var pointCtrl: PointCtrl;
}
/**
 * Created by Sara on 2016/3/28.
 */
declare module gd {
    class ProtocolContentCtrl extends mo.DataController {
        _initProp(): void;
        initData(data: any): void;
        updateData(data: any): void;
        getInfo(cb: any, target: any): void;
    }
    var protocolContentCtrl: ProtocolContentCtrl;
    var protocolContentCtrl: ProtocolContentCtrl;
}
/**
 * Created by Sara on 2015/9/18.
 */
declare module gd {
    class EquipCtrl extends mo.DataController {
        static ON_WEAR_PAR_RING: string;
        static ON_BREAK_PAR_RING: string;
        static ON_BREAK_MERGED: string;
        static ON_SMELT: string;
        static ON_BATCH_SMELT: string;
        static ON_INHERITED: string;
        _partTypeMap: any;
        _initProp(): void;
        getSmeltArr(isRetain: any, choColor?: any): any[];
        _isLocked(s_lock: any, itemInfo: any): number;
        _equipProfession(profession: any, weaponMax: any, key: any, isRetain: any, tempIdArr: any, equipBag: any, t_item: any, lvl: any, part: any): void;
        _equipScreen(i: any, weaponMax: any, needLvl: any, lvl: any, part: any, quality: any, key: any, isEquip: any, index: any, equipBag: any): void;
        getColorCount(choColor: any): number;
        smelt(equipArr: any, choColor: any, cb: any, target: any): any;
        compound(compoundId: any, cb: any, target: any): void;
        wearParRing(id: any, breakId: any, cb: any, target: any): boolean;
        ringBreak(id: any, breakId: any, cb: any, target: any): boolean;
        getTempIdByEquipId(equipId: any, eqpBag?: any): any;
        getEquipEvaluate(equipId: any): any;
        getEquipItemLvl(equipId: any): any;
        getSpecialEquipEvaluate(tempId: any): number;
        getBaseEvaluate(tempId: any): any;
        getSpecialEquipExtra(tempId: any): any;
        getEquipExtra(equipId: any, eqpBag?: any): any;
        getBasePropArr(tempId: any): any;
        getEquipName(tempId: any): any;
        getEquipExtraObj(equipId: any, eqpBag?: any): {};
        getStrLvlInfo(tempId: any, strLvl: any): any[];
        getIntensifyArr(heroId: any): any;
        getStarArr(heroId: any): any;
        getGemArr(heroId: any, index: any): any[];
        getWingArr(heroId: any): any;
        getEquipListByType(type: any): any[];
        getEquipList(job?: any, type?: any): any[];
        getBagSpecialEquipList(): any[];
        getBagAllCanInherEquip(): any[];
        getEquipType(tempId: any): any;
        getEquipTypeName(tempId: any): any;
        getEquipJob(tempId: any): any;
        isSpecialEquip(tempId: any): boolean;
        isRareEquip(tempId: any): boolean;
        isSuperEquip(tempId: any): boolean;
        isJingEquip(tempId: any): boolean;
        getEquipWearLvl(tempId: any): any;
        getEquipTypeByPart(part: any): any;
        isEquiped(equipId: any): boolean;
        queryStrLvlInfo(tempId: any, strLvl: any): any[];
        queryRefineLvlInfo(tempId: any, refindLv: any): any[];
        queryStarInfo(starLvl: any): any[];
        isBreakRing(part: any): boolean;
        getBreakRingBy(part: any): any;
        getInitBreakRing(part: any): any;
        inheritedEquip(opt: any, cb: any, target: any): boolean;
        getInheritedEquipOpt(equipId: any): {
            equipId: any;
            heroJobId: number;
            inheritedInfo: any;
            nextEquipNeedLvl: number;
            nextEquipNeedLvlEnough: boolean;
            isMaxLvl: boolean;
            itemId: any;
            isItemEnough: boolean;
        };
        getInheritedInfo(tempId: any): any;
        getSpecialEquipDot(): any[];
        isCustomEquipByTempId(tempId: any): boolean;
        isCustomEquip(equipId: any): boolean;
        getCustomInfo(equipId: any): any[];
        equipTrans(equipId: any): {
            isCustomEquip: boolean;
            tempId: any;
            extraPropArr: any;
            isEquiped: any;
            name: any;
            basePropArr: any;
            score: number;
        };
        updateEquipItemLockStatus(equipId: any, isLocked: any, cb: any, target: any): void;
        sellEquipItem(equipIdArr: any, cb: any, target: any): void;
    }
    function sortEquipList(list: any): any;
    var equipCtrl: EquipCtrl;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class ShopCtrl extends mo.DataController {
        static ON_BUY_SUCC: string;
        _shopMap: any;
        canGoldBuyEquipIdx: any;
        canGoldBuyEquipGold: any;
        _initProp(): void;
        /**
         * 获取商店列表
         * @param {gc.c_prop.shopTypeKey} type 商店类型
         * @param cb
         * @param target
         * @returns [[物品id，数量，货币类型，正式价格,剩余购买次数,原价,商店类型,打折标识,额外属性数组,评分],...]
         */
        getList(type: any, cb: any, target: any): void;
        _recoderMinGoldCostItem(price: any, idx: any): void;
        /**
         * 购买
         * @param { gc.c_prop.shopTypeKey} type 商店类型
         * @param index 下标
         * @param num 数量
         * @param cb
         * @param target
         */
        buy(type: any, index: any, num: any, cb: any, target: any): boolean;
        /**
         * 购买所有
         * @param { gc.c_prop.shopTypeKey} type 商店类型
         * @param cb
         * @param target
         */
        buyAll(type: any, cb: any, target: any): void;
        /**
         * 获取下一次刷新时间(小时)
         */
        getNextRefreshHour(type: any): number;
        /**
         * 刷新
         * @param type 特殊商店类型 c_prop.shopTypeKey  lvlRefresh 是否等级自动刷新
         * @param cb
         * @param target
         */
        refresh(type: any, lvlRefresh: any, cb: any, target: any): void;
        getRefreshCount(type: any): number;
        /**
         * 获取剩余刷新时间(秒)
         * @param {gc.c_prop.shopTypeKey} type 商店类型
         */
        getReRefreshSeconds(type: any): number;
        isShopEquipReddot(): any[];
        private _getShopData(type, cb, target);
        requestShopData(type: any, cb: any, target: any): void;
    }
    var shopCtrl: ShopCtrl;
}
/**
 * Created by huanghaiying on 14/12/16.
 */
declare module gd {
    class SignCtrl extends mo.DataController {
        static ON_TODAY_SIGNED: string;
        _signItems: any;
        _refreshTime: any;
        _initProp(): void;
        initData(data?: any): void;
        /**
         * 签到
         * @param cb
         * @param target
         * @returns {*}
         */
        sign(cb: any, target: any): boolean;
        /**
         * 补签
         * @param cb
         * @param target
         * @returns {*}
         */
        patchSign(cb: any, target: any): boolean;
        /**
         * 获取今天是否可以补签
         * @returns {boolean}
         */
        isTodayPatchSign(): boolean;
        /**
         * 获取当月的签到物品
         * @returns {Array} [[id,items],..]
         */
        getSignItems(): any[];
        getState(id: any): number;
        /**
         * 获取签到次数
         */
        getSignNum(): any;
        /**
         * 获取今天是否已经签到
         * @returns {boolean}
         */
        isTodaySigned(): boolean;
        /**
         * 判断是否可以签到
         * @param nowDate
         * @param lastSignDate
         * @private
         */
        _checkCanSign(nowDate: Date, lastSignDate: Date): boolean;
        _getSignData(): any;
    }
    var signCtrl: SignCtrl;
}
/**
 * Created by Sara on 2015/10/4.
 */
declare module gd {
    class LotteryCtrl extends mo.DataController {
        _initProp(): void;
        initData(data: any): void;
        getTreasureValue(): any;
        getTreasureChestCount(): any;
        getInfo(cb: any, target: any): void;
        /**
         * 抽奖
         * @param type 抽奖类型
         * @param count 抽奖次数
         * @param cb
         * @param target
         */
        lottery(type: any, count: any, cb: any, target: any): boolean;
        /**
         * 领取探宝值宝箱
         * @param cb
         * @param target
         */
        getTreasureChest(cb: any, target: any): boolean;
    }
    var lotteryCtrl: LotteryCtrl;
}
/**
 * Created by Sara on 2015/11/14.
 */
declare module gd {
    class RankCtrl extends mo.DataController {
        _rankDataDic: any;
        _myRankDataDic: any;
        _allRankDataDic: any;
        _cacheMinute: number;
        _initProp(): void;
        /**
         * 获取公会相关排行版数据
         * @param rankType 类型：读取c_prop表
         * @param cb
         * @param target
         * @return [排行榜数据[UserRankEntity],{公会id：名称,公会id：名称...}]
         */
        getGuildRank(rankType: any, cb: any, target: any): any;
        /**
         * 获取排行版所有数据
         * @param rankType 类型：读取c_prop表
         * @param cb
         * @param target
         * @return [我的排名,我的数据(UserRankEntity),排行榜数据[UserRankEntity],[装备显示id,武器显示id,翅膀id,性别],{公会id：名称,公会id：名称...}]
         */
        getAllRankArr(rankType: any, cb: any, target: any): any;
        /**
         * 获取排名
         * @param rankType 类型：读取c_prop表
         * @param cb
         * @param target
         * @return {UserRankEntity}
         */
        getRankList(rankType: any, cb: any, target: any): any;
        /**
         * 获取个人排名
         * @param rankType 类型：读取c_prop表
         * @param cb
         * @param target
         * @return [排名，UserRankEntity]
         */
        getUserRank(rankType: any, cb: any, target: any): any;
    }
    var rankCtrl: RankCtrl;
}
/**
 * Created by Sara on 2015/10/7.
 */
declare module gd {
    class TaskCtrl extends mo.DataController {
        static ON_RECIVED_BOX: string;
        _dailyTaskList: any;
        _taskUpdateId: number;
        _initProp(): void;
        initData(data: any): void;
        updateEntity(data: any): void;
        getUpdateId(): number;
        syncData(): void;
        getInfo(cb: any, target: any): void;
        getVitality(): (number | number[])[];
        getVitalityBoxState(index: any): boolean[];
        getVitalityProgress(): {
            cur: number;
            max: number;
            per: number;
        };
        getDailyTaskList(): any[];
        getTasksList(): any[];
        getTaskReward(taskId: any): {};
        getEquipSmelt(): any;
        getEncounter(): any;
        getDailyTasks(): {};
        getTaskOpt(taskId: any): {
            taskId: any;
            value: number;
            targetValue: number;
            isComplete: boolean;
            isReceive: boolean;
            type: number;
            subType: number;
        };
        /**
         * 任务奖励领取
         * @param taskId 任务id
         * @param cb
         * @param target
         */
        taskAward(opt: any, cb: any, target: any): boolean;
        /**
         * 领取活跃度宝箱
         * @param index 宝箱下标
         * @param cb
         * @param target
         */
        getVitalityChest(index: any, cb: any, target: any): boolean;
        _isResId(itemId: any): boolean;
        queryVitalityBoxReward(index: any): {}[];
        isTaskReddot(): boolean[];
    }
    function sortList(list: any): any;
    var taskCtrl: TaskCtrl;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class TimeCtrl extends mo.DataController {
        _syncIntervalId1: any;
        _syncIntervalId2: any;
        _syncIntervalId3: any;
        _addTime: number;
        _timeErrorNum: number;
        _lastTime: Date;
        _addTime2: number;
        _initProp(): void;
        initData(data?: any): void;
        clearAll(): void;
        private _tick(dt);
        private _update1();
        private _update2();
        private _update3();
        private _clearUpdateIntervalId();
    }
    var timeCtrl: TimeCtrl;
}
/**
* Created by huanghaiying on 14/12/16.
*/
declare module gd {
    class ServerInfoCtrl extends mo.DataController {
        static __className: string;
        _serverList: any;
        _myServerList: any;
        _selectIndex: any;
        _selectServer: any;
        _channelServerList: any;
        _initProp(): void;
        setSelectIndex(index: any): void;
        getSelectIndex(): any;
        setSelectServer(index: any): void;
        getSelectServer(): any;
        getInfo(cb: any, target: any): void;
        _calChannel(serverList: any): any[];
        /**
         * 获取左边标题
         * @returns ["标题","标题"]
         */
        getTitleList(): any[];
        /**
         * 获取右边列表
         * @param index 标题列数组下标
         * @returns [gc.dsConsts.ServerInfoEntity,....]
         */
        getServerList(index: any): any;
        /**
         * 获取最新的服务器信息
         * @returns gc.dsConsts.ServerInfoEntity
         */
        getNewServer(): any;
        /**
         * 获取最新的未关闭的服务器Index , 没有为-1
         * @returns [列表idx, 真实idx]
         */
        getNewGoodServerIndex(): any[];
        /**
         * 获取最新的服务器列表
         * @returns [gc.dsConsts.ServerInfoEntity ]
         */
        getNewServers(): any[];
        /**
         * 获取服务器详细
         * @param id 服务器id
         * @returns gc.dsConsts.ServerInfoEntity
         */
        getServerInfoById(id: any): any;
        /**
         * 获取服务器详细
         * @param index 服务器index
         * @returns gc.dsConsts.ServerInfoEntity 或者 null
         */
        getServerByIndex(index: any): any;
        private _getRang(index);
    }
    var serverInfoCtrl: ServerInfoCtrl;
}
declare module gc {
    var Keys: {
        curServerId: string;
        accountName: string;
        password: string;
        logined: string;
        simulateFight: string;
        key_host: string;
        key_port: string;
        msgCode: string;
        msgArgs: string;
        msgValue: string;
        token: string;
        rankPkTime: string;
    };
    /** 服务端返回的消息码key值 */
    var RESP_MSG_CODE: string;
    /** 服务端返回的消息参数key值 */
    var RESP_MSG_ARGS: string;
    /** 服务端返回的数据key值 */
    var RESP_VALUE: string;
    class Net extends mo.Net {
        _initProp(): void;
        asyncAccount(cb: any, toPlayWaiting?: boolean, toResetAsyncFlag?: boolean): void;
    }
    var net: Net;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class UserCtrl extends mo.DataController {
        static ON_TEN_LVL: string;
        static ON_GET_BINDPHONE_REWARD: string;
        static ON_ITEM_CHANGE: string;
        strengthReplayInterval: number;
        offLineData: any;
        _equipBk: any;
        any: any;
        _lootTypeArr: any;
        _initProp(): void;
        initData(loginData: any): void;
        getLootTypeArr(): any;
        /**
         * 同步数据
         * @param sendData [聊天id]
         * @param cb
         * @param target
         */
        syncData(sendData: any, cb?: any, target?: any): void;
        syncData2(cb?: any, target?: any): void;
        /**
         * 更新引导
         * @param guideId
         * @param cb
         * @param target
         */
        updateGuide(guideId: any, cb: any, target: any): void;
        getGuide(): any;
        /**
         * 设置自动战斗
         * @param isAuto
         */
        setAutoFight(isAuto: any): void;
        /**
         * 更新Setting数据
         * @param catNoVipChat,autoBuyLittleHorn
         */
        updateSetting(catNoVipChat: any, autoBuyLittleHorn: any, cb: any, target: any): void;
        isAutoFight(): any;
        /**
         * 设置自动战斗
         */
        setTimeError(): void;
        getTimeError(): any;
        /**
         * 改名
         * @param name
         * @param heroTempId  1|2|3
         * @param cb
         * @param target
         */
        changeName(name: any, heroTempId: any, cb: any, target: any): boolean;
        /**
         * 添加背包
         * @param itemId
         * @param num
         */
        addBag(itemId: any, num?: any): void;
        private _addBag(bag, itemId, num);
        /**
         * 扣除背包
         * @param itemId
         * @param num
         * @returns {*}
         */
        delBag(itemId: any, num: any): void;
        getItemNum(itemId: any): number;
        getItemByType(itemType: any): {};
        private _delBag(bag, itemId, num);
        getStrength(): any;
        /**
         * 获取最大体力上限，跟领主等级相关
         */
        getMaxStrength(): any;
        updateEntityNotShow(data: any): void;
        __adjust_equpBag_final(data: any): void;
        updateEntity(data: any): void;
        private _calPoint(oldData, data);
        calProChanged(data: any, oldData: any): void;
        _appendValue(key: any, value: any): void;
        getName(): any;
        getId(): any;
        getGold(): any;
        getPrestige(): any;
        getBuyGoldCount(): number;
        getBuyLingyunCount(): number;
        getDiamond(): any;
        getCombat(): any;
        getActivity(): any;
        getExData(): any;
        getIsKing(): any;
        setIsKing(isKing: any): boolean;
        updateCombat(): void;
        getVip(): any;
        getVipScore(): any;
        getNextVipScore(): any;
        getLvl(): any;
        getRebirthLvl(): any;
        getInfuseExpc(): any;
        getExp(): any;
        getIconId(): any;
        getEquipBag(): any;
        isOpenInfuseExpc(): boolean;
        getEquipBagNum(): number;
        getBag(): any;
        getEquipBagGrid(): number;
        increaseGold(gold: any): void;
        reduceDiamond(diamond: any): void;
        /**
         * 获取用户中的今日次数
         * @param type
         */
        getTodayCount(type: any): number;
        getLastTime(type: any): number;
        /**
         * 获取购买金币获得数量和所需钻石
         * @returns [得到金币，消耗元宝，已经购买次数，最大购买次数]
         */
        getBuyGoldData(): number[];
        buyGold(cb: any, target: any): void;
        noGolds(cb: any, target: any): void;
        getBuyLingyunCos(): number;
        buyLingyun(cb: any, target: any): boolean;
        getEquipAttribute(id: any): void;
        static enterGame: (cb: any, target: any) => boolean;
        /**
         * 创建角色
         * @param name
         * @param heroTempId  1|2|3
         * @param sex
         * @param cb
         * @param target
         */
        static createUser(name: any, heroTempId: any, sex: any, cb: any, target: any): boolean;
        /** 是否创建了新角色 */
        static CREATEDUSER: boolean;
        getGenuineQi(cb: any, target: any): void;
        /**
         * 购买背包格子
         * @param cb
         * @param target
         */
        buyBagGrid(cb: any, target: any): void;
        getNeedItems(chestId: any): number[];
        /**
         * 打开背包宝箱
         * @param chestId
         * @param count
         * @param cb
         * @param target
         */
        getBagChest(chestId: any, count: any, cb: any, target: any): boolean;
        isEquipBagReddot(): boolean;
        isSmeltReddot(): boolean;
        isGetDeskReward(): any;
        getAddDeskReward(cb: any, target: any): void;
        getBindPhoneReward(cb: any, target: any): void;
        isGetBindPhoneReward(): boolean;
        checkBindPhoneReward(): void;
        getBindPhoneUrl(cb: any, target: any): void;
        addDesktopReward(type: number, cb: any, target: any): void;
        getWanbaGift(os: string, gitfId: number, cb: any, target: any): void;
        sellItems(itemId: any, itemNum: any, cb: any, target: any): void;
        deleteItem(itemId: any, count: any): void;
        updateBagItems(itemId: any, cb: any, target: any): void;
        isMaxLvl(): boolean;
        getMedalDataNum(medalId: any): number;
    }
    var userCtrl: UserCtrl;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    class RechargeCtrl extends mo.DataController {
        static ON_RECHARGE_SUCC: string;
        _rechargeData: any;
        _initProp(): void;
        initData(rechargeData: any): void;
        getList(): any[];
        /**
         * 获取数据
         */
        getInfo(cb: any, target: any): void;
        recharge(rechargeId: any, channelId: any, cb: any, target: any): void;
        getAllCostRMB(): number;
        getMaxVip(): number;
        getVipCost(vipLv: any): any;
        hasBuy(rechargeId: any): boolean;
        getRequest(rechargeId: any, goodsId: any, cb: any, target: any): void;
        handleRequest(cb: any, target: any): void;
    }
    var rechargeCtrl: RechargeCtrl;
}
/**
 * Created by Administrator on 2015/5/27.
 */
declare module gd {
    var fightLayer: any;
    class FightCtrl extends mo.DataController {
        static ON_START_PVP_FIGHT: string;
        static ON_NEXT_LOOT: string;
        static ON_ENTER_COPY: string;
        _copyLootDic: Object;
        isSpFighting: boolean;
        isDie: boolean;
        _buffArr: any;
        _initProp(): void;
        getBuffArr: () => any;
        setBuffArr: (buffArr: any) => void;
        _checkKingBuff: () => void;
        getExpcRate: () => number;
        /**
         * 获取下一次掉落
         * @param copyId
         * @param isBoss
         * @param cb
         * @param target
         * @returns [[uid,[[物品id,物品数量],[物品id,物品数量]]],.........]
         */
        getNextLoot(copyId: any, isBoss: any, cb: any, target: any): void;
        /**
         * 获取怪物，得到金币，物品
         * @param uidArr
         * @param fightData [公式计算的一波怪的时间，真实的一波怪的时间，是否异常]
         * @param cb
         * @param target
         */
        pickLoot(uidArr: any, fightData: any, cb: any, target: any): void;
        startPvpFight(myHeroEntityCtrlAry: any, enemyHeroEntityCtrlAry: any, isPkOut: any, name?: any): void;
        enterCopy(copyID: any): void;
        forceNormalCopy(): void;
        _getAndInitNextLoot(copyId: any, isBoss: any, cb: any, target: any): void;
        _initNextLoot(copyId: any, isBoss: any, cb: any, target: any): void;
        _getUseLootDic(copyId: any, isBoss: any): any;
        _getUnUseLootDic(copyId: any, isBoss: any): any;
        _getCopyLootDic(copyId: any): any;
        _getAllUnUseCopyLoot(copyId: any, isBoss: any): any[];
        _getUnUseCopyLootByUid(copyId: any, isBoss: any): any[];
        _setUnUseCopyLootByUid(copyId: any, isBoss: any, uid: any, items: any): void;
    }
    var fightCtrl: FightCtrl;
}
/**
 * Created by SmallAiTT on 2015/7/21.
 */
declare module g_base {
    class LoginCtrl extends egret.Emitter {
        static ON_LOGIN_SUCC: string;
        static ON_LOGIN_FAIL: string;
        _timerId: any;
        _isLoginSucc: any;
        isLogout: boolean;
        isAutoLogin: boolean;
        loginOpt: any;
        _initProp(): void;
        loginChannel(loginInfo?: any): void;
        changeAccount(): void;
        checkLoginCb(succ: any): void;
        requestTimeOut(): void;
        clearRequestTimeOut(): void;
        responseCb(isSucc: any): void;
        onLoginSucc(): void;
        onLoginFail(): void;
        asyncAccount(loginInfo: any, cb: any): void;
        /**
         * 开始游戏
         */
        enterGame(isCreateRole: boolean): void;
        showNoticeOrFirstEnterGame(isCreateRole: boolean): void;
    }
    var loginCtrl: LoginCtrl;
}
/**
   hd 主控制类
*/
declare module gd {
    class HoodinnCtlr extends mo.DataController {
        static ON_BUGCHAT_UPDATE: string;
        static ON_NEWBUGCHAT_RECEIVED: string;
        static ON_ANNOUNCE_UPDATE: string;
        static ON_SYSNOTICE_UPDATE: string;
        _initProp(): void;
        private _lastBugChatId;
        getLastBugChatId(): number;
        private _lastSysMsgId;
        getLastSysMsgId(): number;
        static LockedServer(): string;
        static SharedUserKey(): string;
        static UrlField(name: string, def?: string, url?: string): string;
        openBugChatWindow(): void;
        private _tmrBugChatUpdate;
        closeBugChatWindow(): void;
        syncBugChatData(): void;
        syncSysMsgData(): void;
        private _bugchatDatas;
        getAllBugChats(): any[];
        private _annouDatas;
        getAllAnnounces(): any[];
        delAnnounce(uniqueId: any): void;
        private _noticeDatas;
        getAllNotices(): any[];
        delNotice(uniqueId: any): void;
        private _updateBugChatData(dataList);
        private _updateSysMsgData(dataList);
        pushNotices(arr: any[]): void;
        getSysNoticeStr(chatData: any): string;
        private _lastBugSendTime;
        getBugChatStr(locData: any): string;
        sendBugChat(content: string, cb: () => void, ctx: any): boolean;
    }
    var hoodinnCtlr: HoodinnCtlr;
}
/**
 * Created by Sara on 2016/1/13.
 */
declare module gd {
    class HeartStuntCtrl extends mo.DataController {
        _initProp(): void;
        initData(data: any): void;
        updateData(data: any): void;
        getOpenCon(index: any): any[];
        getHeartStuntArr(heartStuntId: any): number[];
        getInfo(cb: any, target: any): any;
        choMenCulMethods(index: any, heartStuntId: any, cb: any, target: any): void;
        stuMenCulMethods(index: any, cb: any, target: any): void;
        chaMenCulMethods(index: any, heartStuntId: any, cb: any, target: any): void;
    }
    var heartStuntCtrl: HeartStuntCtrl;
    var heartStuntCtrl: HeartStuntCtrl;
}
/**
 * Created by Administrator on 2015/12/16.
 */
declare module gd {
    class FiveDaysTargetCtrl extends mo.DataController {
        static ON_RECEIVED: string;
        static FIVE_TASK: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
        };
        static MAX_DAY: number;
        _day: number;
        _items: any;
        _initProp(): void;
        initData(data: any): void;
        getInfo(cb: any, target: any): void;
        getItemInfoByDay(dayIdx: any): any[];
        getNormalTargetInfo(dayIdx: any): boolean[];
        getRankList(dayIdx: any): any[];
        receive(idx: any, cb: any, ctx?: any): boolean;
        getActivityStartTime(): any;
        getActivityEndTime(): Date;
        getCurActDay(): any;
        isCertified(dayIdx: any): boolean;
        isTodayTarget(dayIdx: any): boolean;
        getCalTime(dayIdx: any): Date;
        getStarTime(dayIdx: any): Date;
    }
    var fiveDaysTargetCtrl: FiveDaysTargetCtrl;
}
/**
 * Created by Sara on 2016/6/23.
 */
declare module gd {
    class NewFourDaysCtrl extends mo.DataController {
        static ON_RECEIVED: string;
        static MAX_DAY: number;
        _day: number;
        _items: any;
        _initProp(): void;
        initData(data: any): void;
        getInfo(cb: any, target: any): void;
        getItemInfoByDay(dayIdx: any): any[];
        getNormalTargetInfo(dayIdx: any): boolean[];
        getRankList(dayIdx: any): any[];
        receive(idx: any, cb: any, ctx?: any): boolean;
        getActivityStartTime(): any;
        getActivityEndTime(): Date;
        getCurActDay(): any;
        isCertified(dayIdx: any): boolean;
        isTodayTarget(dayIdx: any): boolean;
        getCalTime(dayIdx: any): Date;
        getStarTime(dayIdx: any): Date;
    }
    var newFourDaysCtrl: NewFourDaysCtrl;
}
/**
 * Created by Sara on 2016/1/13.
 */
declare module gd {
    class DemonLotusCtrl extends mo.DataController {
        _genuineQi: number;
        _lastUpTime: string;
        _dlLastUpTime: string;
        _initProp(): void;
        initData(data?: any): void;
        updateData(data: any): void;
        calGenuineQi(): any[];
        isMaxExpc(): boolean;
        getExpcLimit(): number;
        calNowGet(): number;
        getInfo(cb: any, target: any): any;
        upLotus(cb: any, target: any): boolean;
        getRevenue(cb: any, target: any): void;
        getOpeningCount(): number;
        opening(cb: any, target: any): void;
        lotusAdvance(cb: any, target: any): boolean;
        isCanTrain(): boolean;
        treasureTrain(cb: any, target: any): boolean;
        _getOpenConNum(): any;
        _getOpenExpc(): any;
        _getAddMult(): number;
        _getOpenCost(): number;
        getOpeningData(): {};
    }
    var demonLotusCtrl: DemonLotusCtrl;
    var demonLotusCtrl: DemonLotusCtrl;
}
/**
 * Created by Sara on 2016/1/5.
 */
declare module gd {
    class RedEnvelopeCtrl extends mo.DataController {
        static ON_REDENVELOPE_UPDATE: String;
        _lastId: number;
        _allList: any[];
        _allName: any;
        _allCanGetList: any[];
        checkTimeId: number;
        _initProp(): void;
        initData(data: any): void;
        updateData(updata: any): void;
        getLastId(): number;
        isPicked(getData: any): boolean;
        getNameById(id: any): any;
        /**
         * 获取红包列表
         * @param cb
         * @param target
         * @returns gc.dsConsts.RedEnvelopeEntity
         */
        getList(cb: any, target: any): void;
        /**
         * 发送红包
         * @param type 红包类型
         * @param amount 红包金额
         * @param personNum 红包领取份数
         * @param wish 祝福文本
         * @param cb
         * @param target
         * @returns gc.dsConsts.GuildEntity
         */
        sendRedEnvelope(type: any, spItemId: any, amount: any, personNum: any, wish: any, cb: any, target: any): boolean;
        /**
         * 抢红包
         * @param redEnvelopeId
         * @param cb
         * @param target
         * @returns
         */
        receiveBonus(redEnvelopeId: any, cb: any, target: any): void;
        /**
         * 同步红包数据
         * @param cb
         * @param target
         * @returns
         */
        syncRedEnvelope(cb: any, target: any): void;
        syncData(): void;
        /**
         * 获取所有可抢红包
         * @returns
         */
        getCanGetList(): any[];
        onNewAll(): void;
        startCheckCanGet(isStart: any): void;
        needToDel(): void;
        private _updateData(dataList);
        private _pushAllList(data);
    }
    var redEnvelopeCtrl: RedEnvelopeCtrl;
    var redEnvelopeCtrl: RedEnvelopeCtrl;
}
/**
 * Created by Sara on 2016/1/5.
 */
declare module gd {
    class RedEnvelopePersonalCtrl extends mo.DataController {
        _initProp(): void;
        initData(data: any): void;
        updateData(data: any): void;
        getGetData(): void;
        getDayCount(type: any): any[];
        getDayShare(): any;
        getInfo(cb: any, target: any): any;
    }
    var redEnvelopePersonalCtrl: RedEnvelopePersonalCtrl;
    var redEnvelopePersonalCtrl: RedEnvelopePersonalCtrl;
}
/**
 * Created by Administrator on 2016/1/9.
 */
declare module gd {
    class KingCtrl extends mo.DataController {
        static ON_KING_BUFF_CHANGE: String;
        _isOpenBuff: boolean;
        _initProp(): void;
        /**
         * 获取数据
         * @param cb
         * @param target
         */
        getInfo(cb: any, target: any): void;
        setIsOpenBuff(value: any): void;
        isOpenBuff(): boolean;
        isKing(): boolean;
        isKingInGuild(): boolean;
        getMyWelfare(): number;
        getMyWorshipNum(): number;
        getBuffReCd(): number;
        worship(cb: any, target: any): void;
        receiveWelfare(cb: any, target: any): void;
        openBuff(cb: any, target: any): void;
        getBuffOpenNum(): any;
        getKingData(): any;
        isInSameGuild(): boolean;
        getWelfareItemList(): any[];
        getWorshipItemList(): any[];
        getBuffData(): {
            name: any;
            addHurt: any;
            conTime: number;
            icon: any;
            des: any;
        };
        getKingBuffId(): any;
        getCloakProAdd(): any;
    }
    var kingCtrl: KingCtrl;
}
/**
 * Created by Administrator on 2016/1/20.
 */
declare module gd {
    class ReBirthCtrl extends mo.DataController {
        _initProp(): void;
        initData(data: any): void;
        rebirth: (cb: any, target: any) => void;
        buyRebirth: (index: any, num: any, cb: any, target: any) => void;
        getRebirthLvl(): any;
        getRebirthExp(): number;
        getBuyRebirthCount(index: any): number;
        getRebirthCfg(id: any): {
            rebirthLvl: any;
            lvl: any;
            limitLvl: any;
            exp: any;
            maxHpTemp: any;
            attackTemp: any;
            defenceTemp: any;
            magicDefenceTemp: any;
            hitTemp: any;
            dodgeTemp: any;
            criticalTemp: any;
            disCriticalTemp: any;
        };
        getItems(): any;
        getItemBagDataCtrl(itemId: any): BagDataCtrl;
        getItemShopLeftNum(index: any): number;
        getItemShopData(index: any): any[];
    }
    var reBirthCtrl: ReBirthCtrl;
}
/**
 * Created by Administrator on 2016/1/8.
 */
declare module gd {
    class ChallengeCupCtrl extends mo.DataController {
        static ON_ACT_END: string;
        actTrigger: any;
        kingTrigger: any;
        _initProp(): void;
        initData(data: any): void;
        _initTrigger(): void;
        _onActEnd(): void;
        removeTrigger(): void;
        getInfo(cb: any, target: any): void;
        private _initGuild(cb, target);
        nextOpenTime: any;
        isOpen: boolean;
        getIsOpen(cb: any, target: any): void;
        startFight(cb: any, target: any): boolean;
        endFight(isWin: any, cb: any, target: any): void;
        /**
         * 踩顶操作
         * @param op 0:踩 1：顶
         * @param cb
         * @param target
         */
        op(op: any, cb: any, target: any): boolean;
        getPropTotal(): number;
        getPropAdd(): number;
        getPropDel(): number;
        clearCd(cb: any, target: any): void;
        toBeChampoin(cb: any, target: any): boolean;
        getRward(): any;
        getChallegeCost(): any;
        getFirstReward(): any;
        getDefTime(): any;
        getRank(cb: any, target: any): void;
        _myRank: any;
        getMyRank(): any;
        getRankReward(rank: any): any[][];
        getOpenLvl(): any;
    }
    var challengeCupCtrl: ChallengeCupCtrl;
}
/**
 * Created by Sara on 2016/5/13.
 */
declare module gd {
    class HeroTalismanCtrl extends mo.DataController {
        static ON_GIFT_CHANGED: string;
        static ON_GIFT_EQUIP_CHANGED: string;
        _initProp(): void;
        initData(data: any): void;
        updateData(data: any): void;
        getGiftById(giftId: any): any;
        getTalismanAdorn(id: any): any;
        getHaveTrump(id: any): any;
        isHaveTrupId(trupId: any): boolean;
        getTalismanFg(id: any): any;
        calTaliCombat(id: any): {}[];
        /**
         * 计算该英雄所有法宝战力
         * @param heroId
         * @param talismanId
         * @returns {number} 总战力
         */
        calTaliCombatById(heroId: any, talismanId: any): number;
        useTrumpItem(itemId: any, cb: any, target: any): void;
        /**
         * 佩戴法宝
         * @param tempId
         * @param trumpId
         * @param cb
         * @param target
         */
        wearTrump(tempId: any, trumpId: any, cb: any, target: any): void;
        isCanUpLvl(index: any, trumpId: any): boolean;
        upTrumpLvl(tempId: any, trumpId: any, cb: any, target: any): void;
        isCanUpStar(index: any, trumpId: any): boolean;
        /**
         * 法宝升星
         * @param tempId
         * @param trumpId
         * @param cb
         * @param target
         */
        upTrumpStar(tempId: any, trumpId: any, cb: any, target: any): void;
        /**
         * 法宝重铸
         * @param tempId
         * @param trumpId
         * @param cb
         * @param target
         */
        recastTrump(tempId: any, trumpId: any, cb: any, target: any): void;
        /**
         * 法宝合成
         * @param tempId
         * @param trumpId
         * @param compoundId
         * @param cb
         * @param target
         */
        compoundTrump(tempId: any, trumpId: any, cb: any, target: any): void;
        /**
         * 法宝洗炼
         * @param tempId
         * @param trumpId
         * @param isCheck
         * @param cb
         * @param target
         */
        baptizeTrump(tempId: any, trumpId: any, isCheck: any, cb: any, target: any): void;
        /**
         * 确认法宝洗炼
         * @param tempId
         * @param trumpId
         * @param compoundId
         * @param cb
         * @param target
         */
        confirmBaptizeTrump(tempId: any, trumpId: any, cb: any, target: any): void;
        /**
         * 取消法宝洗炼
         * @param tempId
         * @param trumpId
         * @param compoundId
         * @param cb
         * @param target
         */
        cancelBaptizeTrump(tempId: any, trumpId: any, cb: any, target: any): void;
        /*****************************************************************************************************/
        _getPropByIndex(index: any, t_talismanLvlId: any): number;
        getPropObjBy(tid: any, ziZhi: any, lv: any): {};
        getMaxZiZhi(giftId: any, star: any): any;
        getSkillList(giftId: any, jiHuoObj?: any): any[];
    }
    var heroTalismanCtrl: HeroTalismanCtrl;
    var heroTalismanCtrl: HeroTalismanCtrl;
}
declare module gd {
    class ExpeditionCtrl extends mo.DataController {
        _expHeroBase: any;
        _initProp(): void;
        /**
         * ��ȡ����
         * @param cb
         * @param target
         */
        getInfo(cb: any, target: any): void;
        /**
         * װ��ԪӤ
         * @param cb
         * @param tempId:"ģ��id", soulId:"ԪӤid"
         * @param target
         */
        wearSoul(tempId: any, soulId: any, cb: any, target: any): void;
        /**
         * ��ʼս��
         * @param cb
         * @param stageId:"�ؿ�id"
         * @param target
         */
        startBattle(stageId: any, cb: any, target: any): void;
        /**
         * ����ս��
         * @param cb
         * @param target
         * @returns ds.ArenaEntity
         */
        endBattle(isWin: any, herosHp: any, cb: any, target: any): void;
    }
    var expeditionCtrl: ExpeditionCtrl;
}
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class BossRewardPanel extends mo.gui.Comp {
        label_index: egret.gui.Label;
        item0: g_comp.Ico_Item;
        item1: g_comp.Ico_Item;
        item2: g_comp.Ico_Item;
        item3: g_comp.Ico_Item;
        _initProp(): void;
        onEnter(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
declare module g_comp {
    interface Ico_Hero_Data {
        tid: number;
        quality?: number;
        isBoss?: boolean;
        copyStar?: number;
        star?: number;
        lvl?: number;
        gray?: boolean;
    }
    /**
     *
     * @author
     *
     */
    class Tab_Sys extends egret.gui.Button {
        red_point: egret.gui.UIAsset;
        new_point: egret.gui.UIAsset;
        img_s: egret.gui.UIAsset;
        data: Ico_Hero_Data;
        childrenCreated(): void;
        _onClick: Function;
        _onClickCtx: any;
        _onClickData: any;
        onClick(listener: Function, ctx?: any, data?: any): void;
    }
}
/**
 * Created by admin on 16/2/24.
 */
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class ActivityItem extends mo.gui.Comp {
        img_bg: egret.gui.UIAsset;
        img_title: egret.gui.UIAsset;
        img_desc: egret.gui.UIAsset;
        lbl_time: egret.gui.Label;
        setActivity(activity: any): void;
    }
}
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class Ico_Item extends mo.gui.Comp {
        ico: egret.gui.UIAsset;
        ico_border: egret.gui.UIAsset;
        ico_job: egret.gui.UIAsset;
        ico_equipMark: egret.gui.UIAsset;
        label_count: mo.gui.Label;
        label_text: mo.gui.Label;
        showItemInfoOnClick: boolean;
        hideLabelText: boolean;
        _showEquipName: boolean;
        ico_job_visible: any;
        _initProp(): void;
        _childrenCreated(): void;
        showEquipName: boolean;
        getIcoMarkSource(): string;
        dataChanged(): void;
        _onClick: Function;
        _onClickCtx: any;
        _onClickData: any;
        onClick(listener: Function, ctx?: any, data?: any): void;
        _tap_rect_touch(event: egret.TouchEvent): void;
        setLineWidth(width: any): void;
        getTextHeight(): number;
    }
}
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class Ico_Hero extends mo.gui.Comp {
        ico: egret.gui.UIAsset;
        img_red: egret.gui.UIAsset;
        img_light_border: egret.gui.UIAsset;
        img_pos: egret.gui.UIAsset;
        label_unlock_lvl: mo.gui.Label;
        touch_rect: egret.gui.Rect;
        openCfg: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        setRedPointShow(isShow: any): void;
        setSelected(selected: any): void;
        getCurrentSkinState(): string;
        _onClick: Function;
        _onClickCtx: any;
        _onClickData: any;
        onClick(listener: Function, ctx?: any, data?: any): void;
        _tap_touch_rect(event: egret.TouchEvent): void;
    }
}
/**
 * Created by Administrator on 2015/11/20.
 */
declare module g_comp {
    class Ico_Head extends mo.gui.Comp {
        label_vipLv: any;
        ico_role: any;
        grp_vip: any;
        dataChanged(): void;
    }
}
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class Ico_Rune extends mo.gui.Comp {
        ico: egret.gui.UIAsset;
        ico_border: egret.gui.UIAsset;
        label_count: mo.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _onClick: Function;
        _onClickCtx: any;
        _onClickData: any;
        onClick(listener: Function, ctx?: any, data?: any): void;
        _tap_ico_border(event: egret.TouchEvent): void;
        setGray(gray: any): Ico_Rune;
        showTip(flag: any): Ico_Rune;
        _setEquipState(): Ico_Rune;
    }
}
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class Ico_Medal extends mo.gui.Comp {
        ico_medal: egret.gui.UIAsset;
        label_medalTitle: mo.gui.Label;
        efx_medal: g_comp.EfxAsset;
        noAnimate: boolean;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        getShowType(): void;
        checkNeedAdjuestPos(itemId: any): boolean;
    }
}
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class Ico_Soul extends mo.gui.Comp {
        ico: egret.gui.UIAsset;
        ico_border: egret.gui.UIAsset;
        label_desc: mo.gui.Label;
        label_name: mo.gui.Label;
        showItemInfoOnClick: boolean;
        hideLabelText: boolean;
        _showEquipName: boolean;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _onClick: Function;
        _onClickCtx: any;
        _onClickData: any;
        onClick(listener: Function, ctx?: any, data?: any): void;
        _tap_rect_touch(event: egret.TouchEvent): void;
        setLineWidth(width: any): void;
        getTextHeight(): number;
    }
}
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class Ico_Gift extends mo.gui.Comp {
        ico_gift: egret.gui.UIAsset;
        label_giftTitle: mo.gui.Label;
        ico_job: egret.gui.UIAsset;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        getShowType(): void;
    }
}
/**
 * Created by lihex on 9/17/15.
 */
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class Dlg_Close extends egret.gui.Panel {
        btn_close: egret.gui.Button;
    }
}
/**
 * Created by lihex on 9/17/15.
 */
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class Dlg_Info_Close extends Dlg_Close {
        btn_info: egret.gui.Button;
    }
}
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class ResBar extends mo.gui.Comp {
        label_gold: egret.gui.Label;
        label_yuanbao: egret.gui.Label;
        grp_gold: egret.gui.Group;
        grp_yuanbao: egret.gui.Group;
        _initProp(): void;
        _childrenCreated(): void;
        _updateRes(): void;
        showRes(isShowGold: any, isShowYuanBao: any): void;
        dataChanged(): void;
    }
}
/**
 * Created by lihex on 9/17/15.
 */
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class IcoLabel extends egret.gui.UIAsset {
        _textSource: string;
        icoText: egret.gui.UIAsset;
        text: string;
    }
}
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class Equip_Item extends mo.gui.Comp {
        ico_item: Ico_Item;
        img_green_plus: egret.gui.UIAsset;
        img_num_bg: egret.gui.UIAsset;
        img_red: egret.gui.UIAsset;
        label_plus: mo.gui.Label;
        label_star: mo.gui.Label;
        rect_touch: egret.gui.Rect;
        hec: gd.HeroEntityCtrl;
        equipId: any;
        part: any;
        canAdd: any;
        isEmpty: any;
        showType: number;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _setShowInStr(): void;
        _setShowInRefine(): void;
        _setShowInStar(): void;
        _setShowInGem(): void;
        _setShowInRole(): void;
        _setStrLvl(): void;
        _setStar(): void;
        _setGemLvl(): void;
        _onClick: Function;
        _onClickCtx: any;
        _onClickData: any;
        onClick(listener: Function, ctx?: any, data?: any): void;
        _tap_rect_touch(event: egret.TouchEvent): void;
    }
}
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class Gem_Stone extends mo.gui.Comp {
        label_gem_0: mo.gui.Label;
        label_gem_1: mo.gui.Label;
        label_gem_2: mo.gui.Label;
        label_gem_3: mo.gui.Label;
        img_gem0: mo.gui.UIAsset;
        img_gem1: mo.gui.UIAsset;
        img_gem2: mo.gui.UIAsset;
        img_gem3: mo.gui.UIAsset;
        _initProp(): void;
        _getRealPart(): any;
        dataChanged(): void;
    }
}
declare module g_comp {
    /**
     *
     * @author
     *
     */
    class Part_Item extends mo.gui.Comp {
        img_part: egret.gui.UIAsset;
        img_txt_part: egret.gui.UIAsset;
        part: number;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
declare module g_comp {
    class EfxAsset extends mo.gui.Comp {
        _effectId: number;
        autoPlay: boolean;
        _source: string;
        performanceControl: boolean;
        efx: g_comp.UIEffect;
        ico: egret.gui.UIAsset;
        needPlay: boolean;
        _initProp(): void;
        _childrenCreated(): void;
        source: any;
        playEffect(play: boolean): void;
        _onEfxIdChanged(id: any): void;
        effectId: any;
        _onClick: Function;
        _onClickCtx: any;
        _onClickData: any;
        onClick(listener: Function, ctx?: any, data?: any): void;
        _tap_ico(event: egret.TouchEvent): void;
        static createEfxAsset(source: any, effectId: any, autoPlay: any): EfxAsset;
    }
}
/**
 * Created by Joe on 2015/12/2.
 */
declare module g_comp {
    class Fight_Info extends mo.gui.Comp {
        img_hp: egret.gui.UIAsset;
        img_mp: egret.gui.UIAsset;
        _initProp(): void;
        onEnter(): void;
        _childrenCreated(): void;
        updateHp(now: number, all: number): void;
        updateMp(now: number, all: number): void;
    }
}
/**
 * Created by admin on 16/4/5.
 */
declare module g_base {
    /**
     *
     * @author
     *
     */
    class WanbaGift extends mo.gui.Dlg {
        label_hint: any;
        ico_hint: any;
        list_items: egret.gui.List;
        _Item_list_items: any;
        actItems: any;
        _initProp(): void;
        _data_list_items(): any[];
        dataChanged(): void;
        onExit(): void;
    }
}
declare module g_base {
    /**
     *
     * @author
     *
     */
    class ActionPlayer extends egret.MovieClip {
        private jsonData;
        private texture;
        avatarSet: string;
        loop: boolean;
        initMc(): void;
        playAction(): void;
        loadRes(avatarSet: any, loop: any, cb?: any, ctx?: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_base {
    var modIdx: any;
    class BaseBottomBar extends mo.gui.MenuLayer {
        btn_fight: g_comp.Tab_Sys;
        btn_home: g_comp.Tab_Sys;
        btn_role: g_comp.Tab_Sys;
        btn_forge: g_comp.Tab_Sys;
        btn_bag: g_comp.Tab_Sys;
        btn_shop: g_comp.Tab_Sys;
        fight_hp: g_comp.Fight_Info;
        curModIdx: any;
        modViewArr: Array<g_comp.Tab_Sys>;
        redKeyArr: Array<any>;
        _initProp(): void;
        _childrenCreated(): void;
        _updateRed(): void;
        _tap_btn_fight(): void;
        _tap_btn_home(): void;
        _tap_btn_role(): void;
        _tap_btn_forge(): void;
        _tap_btn_bag(): void;
        _tap_btn_shop(): void;
        _onTabClick(tab: g_comp.Tab_Sys): void;
        _checkLvls: Array<number>;
        _checkBindCondtion(): void;
        selected: any;
        updateHP(infos: number[]): void;
        updateMP(infos: number[]): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_base {
    class BaseTopBar extends mo.gui.MenuLayer {
        label_yuanbao: egret.gui.Label;
        label_gold: egret.gui.Label;
        label_lvl: egret.gui.Label;
        label_vip: egret.gui.Label;
        label_combat: egret.gui.Label;
        label_name: egret.gui.Label;
        label_copyId: egret.gui.Label;
        label_copy_name: egret.gui.Label;
        pb_exp: egret.gui.ProgressBar;
        ico_boss: egret.gui.UIAsset;
        grp_copyShow: egret.gui.Group;
        img_vip: egret.gui.UIAsset;
        img_head: egret.gui.UIAsset;
        _oldExp: number;
        _total: number;
        ownerScene: any;
        _initProp(): void;
        init(ownerScene: any): void;
        _childrenCreated(): void;
        _setUserName(): void;
        showCopyName(copyId: any, monsterId: any): void;
        showCopyNameCoffers(serverId: any, door: any): void;
        _updateRes(): void;
        _updateExp(exp: any): void;
        _tap_btn_plus_gold(): void;
        _tap_btn_plus_yuanbao(): void;
        _tap_img_vip(): void;
        _tap_img_detail(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_base {
    class BaseTopRole extends mo.gui.MenuLayer {
        static ON_HERO_CHANGED: string;
        ico_hero0: g_comp.Ico_Hero;
        ico_hero1: g_comp.Ico_Hero;
        ico_hero2: g_comp.Ico_Hero;
        ico_hero3: g_comp.Ico_Hero;
        label_job: egret.gui.Label;
        label_combat: mo.gui.Label;
        img_title: egret.gui.UIAsset;
        ico_combat: any;
        label_nickName: any;
        _redKeyArr: Array<any>;
        _curHeroIdx: number;
        _initProp(): void;
        _childrenCreated(): void;
        _updateCombat(): void;
        hideCombat(): void;
        dataChanged(): void;
        checkRedPoint(): void;
        setRoleSelected(item: g_comp.Ico_Hero): void;
        onIconClick(item: g_comp.Ico_Hero): void;
        _updateIcons(): void;
        hide4thRole(hide: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_base {
    class BaseItemCell extends mo.gui.ItemRenderer {
        ico_item: g_comp.Ico_Item;
        rect_touch: egret.gui.Rect;
        tapShowDetail: boolean;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_rect_touch(event: egret.TouchEvent): void;
    }
}
/**
 * Created by lihex on 9/19/15.
 */
declare module g_base {
    class BaseTopMsg extends mo.gui.TopLayer {
        label_msg: egret.gui.Label;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_base {
    class CloseInfoDlg extends mo.gui.Dlg {
        btn_info: egret.gui.Button;
        _helpDataId: any;
        partAdded(name: any, instance: any): void;
        _tap_btn_info(): void;
    }
}
/**
 * Created by Administrator on 2015/11/2.
 */
declare module g_base {
    class GainWayItem extends mo.gui.ItemRenderer {
        label_copyName: any;
        _initProp(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/9/28.
 */
declare module g_base {
    class ItemMerge extends mo.gui.Dlg {
        ico_light: any;
        ico_topItem0: any;
        ico_topItem1: any;
        ico_topItem2: any;
        ico_arrow0: any;
        ico_arrow1: any;
        label_name: any;
        ico_toItem: any;
        ico_fromItem0: any;
        ico_fromItem1: any;
        ico_fromItem2: any;
        ico_line1: any;
        ico_line2: any;
        ico_line3: any;
        list_gainWay: egret.gui.List;
        label_copyName: any;
        grp_merge: any;
        btn_merge: any;
        btn_back: any;
        _Item_list_gainWay: any;
        curShowItemIds: any[];
        curFromItemIds: any[];
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        setShowItemId(itemId: any, index: any): void;
        _tap_ico_topItem0(): void;
        _tap_ico_topItem1(): void;
        _tap_ico_fromItem0(): void;
        _tap_ico_fromItem1(): void;
        _tap_ico_fromItem2(): void;
        _tap_btn_merge(): void;
        _tap_btn_back(): void;
        _click_list_gainWay(e: egret.gui.ListEvent): void;
    }
}
/**
 * Created by Administrator on 2015/11/5.
 */
declare module g_base {
    class GainWay extends mo.gui.Dlg {
        btn_back: any;
        list_gainWay: egret.gui.List;
        _Item_list_gainWay: any;
        ico_item: any;
        label_name: any;
        label_noOut: any;
        static canBuyFromShop(itemId: any): boolean;
        _initProp(): void;
        onEnter(): void;
        protected showGainWayList(): void;
        _tap_btn_back(): void;
        _click_list_gainWay(e: egret.gui.ListEvent): void;
    }
}
/**
 * Created by Administrator on 2015/11/5.
 */
/**
 * Created by Administrator on 2015/11/5.
 */
declare module g_base {
    class GainWayShop extends GainWay {
        label_canBuyNum: any;
        label_desc: any;
        label_num: any;
        buyNum: any;
        shopItem: any;
        index: any;
        label_costOne: any;
        label_costAll: any;
        _initProp(): void;
        onEnter(): void;
        protected showGainWayList(): void;
        getShopType(): number;
        setCurShopItem(): void;
        _tap_btn_sub(): void;
        _tap_btn_add(): void;
        _tap_btn_min(): void;
        _tap_btn_max(): void;
        showNum(): void;
        _getMaxBuyNum(): any;
        _tap_btn_ok(): void;
        _tap_btn_recharge(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_base {
    var isShowOffline: boolean;
    class Notice extends mo.gui.MsgDlg {
        label_title: any;
        label_text: any;
        ico_head: any;
        noticeData: any;
        _initProp(): void;
        onExit(): void;
        _handleExtArg(arg: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_base {
    class NoticeDlg extends mo.gui.Dlg {
        _initProp(): void;
        _tap_ico_title_1(): void;
        _tap_ico_title_4(): void;
        _tap_ico_title_2(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_base {
    class NoticeContentDlg extends mo.gui.Dlg {
        label_title: any;
        label_text: any;
        ico_head: any;
        noticeData: any;
        _initProp(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/11/19.
 */
declare module g_base {
    class FirstEnterGame extends mo.gui.MsgDlg {
        ico_sanpin_txt: any;
        _initProp(): void;
        _childrenCreated(): void;
    }
}
declare module g_base {
    class BaseShowMsg extends mo.gui.Dlg {
        label_tips: egret.gui.Label;
        ico_bg: any;
        _initProp(): void;
        private _timer;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_base {
    class BaseShowTip extends mo.gui.Dlg {
        label_tips: egret.gui.Label;
        ico_bg: any;
        _initProp(): void;
        dataChanged(): void;
    }
}
declare module g_base {
    var baseShowAnnounce: BaseShowAnnounce;
    class BaseShowAnnounce extends mo.gui.MsgDlg {
        label_tips: egret.gui.Label;
        ico_bg: any;
        _initProp(): void;
        curAnnounce: any;
        curTimer: any;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_base {
    interface IItemDetailData {
        bdc: gd.BagDataCtrl;
        extra?: any;
    }
    class BaseItemDetail extends mo.gui.Dlg {
        outsideClosable: boolean;
        ico_item: g_comp.Ico_Item;
        label_name: mo.gui.Label;
        label_desc1: mo.gui.Label;
        label_desc2: mo.gui.Label;
        label_desc3: mo.gui.Label;
        label_specialEquip: mo.gui.Label;
        buyNum: any;
        img_bg: any;
        data: IItemDetailData;
        grp_equip: any;
        grp_item_sale: any;
        grp_rewards: any;
        grp_gold: any;
        grp_yuanbao: any;
        grp_gold_container: any;
        label_gold: any;
        label_yuanbao: any;
        grp_items: any;
        label_items: any;
        grp_sell_btns: any;
        btn_ok: any;
        btn_sell: any;
        btn_sale: any;
        btn_lock: any;
        btn_unlock: any;
        label_locked: any;
        label_unlocked: any;
        label_num: any;
        rewards: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _calculateRewards(): void;
        _setItemInfo(): void;
        _setEquipInfo(): void;
        _tap_btn_lock(): void;
        _tap_btn_unlock(): void;
        _tap_btn_sell(): void;
        _tap_btn_sale(): void;
        checkNeedItemEnough(needItems: any): boolean;
        _tap_btn_ok(): void;
        _tap_btn_sub(): void;
        _tap_btn_add(): void;
        _tap_btn_min(): void;
        _tap_btn_max(): void;
        showNum(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_base {
    /**
     *
     * @author
     *
     */
    class OfflineGain extends mo.gui.MsgDlg {
        label_offlineTime: any;
        label_offlineExp: any;
        label_offlineExpVip: any;
        label_offlineGold: any;
        label_offlineGoldVip: any;
        label_offlineEquip: any;
        label_autoSell: any;
        label_hour: any;
        label_box: any;
        offlineData: any;
        _initProp(): void;
        onEnter(): void;
        _handleExtArg(arg: any): void;
        _tap_btn_ok(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/31.
 */
declare module g_base {
    class BaseJuHua extends mo.gui.TopLayer {
        grp_juHua: egret.gui.Group;
        _initProp(): void;
        onEnter(): void;
        onExit(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_base {
    /**
     *
     * @author
     *
     */
    class CopyLoot extends mo.gui.Dlg {
        titleDisplay: egret.gui.Label;
        label_rest: mo.gui.Label;
        label_cost: mo.gui.Label;
        grp_res0: egret.gui.Group;
        list_items: egret.gui.List;
        _Item_list_items: any;
        TesseraKey: any;
        label_saoDang: any;
        _initProp(): void;
        _data_list_items(): any[];
        dataChanged(): void;
        _tap_btn_buy_times(): void;
        _tap_btn_enter(): void;
        _tap_btn_sweep(): boolean;
        _tap_btn_wipe(): void;
    }
}
/**
 * Created by Zhuang on 2016/4/26.
 */
declare module g_base {
    class CopySweepAward extends mo.gui.Dlg {
        list_items: egret.gui.List;
        _Item_list_items: any;
        label_cost: any;
        titleDisplay: any;
        sweep_num: any;
        _initProp(): void;
        _data_list_items(): any[];
        dataChanged(): void;
        onEnter(): void;
        _tap_btn_enter(): void;
        onExit(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_base {
    /**
     *
     * @author
     *
     */
    class VipCopyLoot extends mo.gui.Dlg {
        titleDisplay: egret.gui.Label;
        label_rest: mo.gui.Label;
        list_items: egret.gui.List;
        _Item_list_items: any;
        _initProp(): void;
        _data_list_items(): any[];
        dataChanged(): void;
        _tap_btn_enter(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_base {
    /**
     *
     * @author
     *
     */
    class CreateRole extends mo.gui.Dlg {
        list_jobs: egret.gui.List;
        _Item_list_jobs: any;
        btn_back: egret.gui.Button;
        grp_create: egret.gui.Group;
        label_job_desc: mo.gui.Label;
        label_unlock: mo.gui.Label;
        inputName: egret.gui.TextInput;
        grp_userAgreement: egret.gui.Group;
        ckb_argree: any;
        img_userAgreement: any;
        _job: number;
        _gender: number;
        _isCustomName: boolean;
        _initProp(): void;
        _data_list_jobs(): any[];
        _childrenCreated(): void;
        dataChanged(): void;
        _setJobDesc(job: any): void;
        _tap_btn_create(): boolean;
        _tap_btn_back(): void;
        _tap_btn_dice(): void;
        _tap_img_userAgreement(): void;
        _initItem_list_jobs(cell: CreateRoleItem): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/5.
 */
declare module g_base {
    class CreateRoleItem extends mo.gui.ItemRenderer {
        ico_0: egret.gui.UIAsset;
        ico_1: egret.gui.UIAsset;
        ico_job: egret.gui.UIAsset;
        img_border: egret.gui.UIAsset;
        static ON_GENDER_CHANGED: string;
        _childrenCreated(): void;
        dataChanged(): void;
        _ico_clicked(ico: egret.gui.UIAsset): void;
        _tap_ico_0(): void;
        _tap_ico_1(): void;
        getCurrentSkinState(): string;
    }
}
/**
 * Created by SmallAiTT on 2015/7/24.
 */
declare module g_base {
    class BaseFightDlg extends mo.gui.Dlg {
        show(): BaseFightDlg;
        _onShowReady(): void;
        _isFightScene(): boolean;
    }
}
/**
 * Created by Administrator on 2015/11/14.
 */
declare module g_base {
    class RoleAvatar extends mo.gui.Layer {
        ico_clothes: any;
        ico_weapon: any;
        ico_wing_male: any;
        ico_wing_female: any;
        ico_isKing: any;
        dataChanged(): void;
    }
}
declare module g_base {
    /**
     * 通用弹出输入框。
     * 监听close方法回调获取输入的内容
     * 使用举例:
     * g_base.BasePromoteInput.create()
     * .setData({title:"输入姓名", text:"张德帅"})
     * .show()
     * .onClose(function(i){console.log(i.inputBox.text, i.doWhat)})
     */
    class BasePromoteInput extends mo.gui.Dlg {
        inputBox: egret.gui.TextInput;
        doWhat: number;
        container: any;
        title: any;
        titleDisplay: egret.gui.Label;
        _initProp(): void;
        dataChanged(): void;
        _childrenCreated(): void;
        click_btn_close(): void;
        _tap_btn_confirm(): void;
        _tap_btn_cancel(): void;
    }
}
/**
 * Created by Administrator on 2016/3/18.
 */
declare module g_base {
    class ZhenQiDetail extends mo.gui.Dlg {
        label_zhenQiTotal: any;
        label_zhenQiAdd: any;
        label_desc: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/11.
 */
declare module g_base {
    /**
     *
     * @author
     *
     */
    class Create4thRole extends mo.gui.Dlg {
        cb_auto: egret.gui.CheckBox;
        pb_exp: egret.gui.ProgressBar;
        grp_inject: egret.gui.Group;
        grp_full: egret.gui.Group;
        grp_resZQ: egret.gui.Group;
        grp_resYB: egret.gui.Group;
        grp_myZq: egret.gui.Group;
        grp_myYB: egret.gui.Group;
        btn_create: egret.gui.Button;
        img_openTips: egret.gui.UIAsset;
        efx_open: g_comp.UIEffect;
        efx_hit1: g_comp.UIEffect;
        efx_hit2: g_comp.UIEffect;
        _hitEfxPlayer: uiHelper.EfxPlayer;
        _upStarEfxPlayer: uiHelper.EfxPlayer;
        label_ZQV: any;
        label_YBV: any;
        mpUpdateTimer: any;
        _initProp(): void;
        _childrenCreated(): void;
        onExit(): void;
        _refreshUI(): void;
        _refreshMyRes(): void;
        _tap_btn_back(): void;
        _chg_cb_auto(): boolean;
        _tap_btn_create(): void;
        _tap_btn_yuanbao(): boolean;
        _tap_btn_zq(): boolean;
        _doInject(type: any): void;
        _tap_btn_help(): void;
        _tap_img_skill38(): void;
        _tap_img_skill39(): void;
        _tap_img_skill40(): void;
        _tap_img_skill41(): void;
        _tap_img_skill42(): void;
    }
}
/**
 * Created by lihex on 4/14/16.
 */
declare module g_base {
    class SkillDescDlg extends mo.gui.Dlg {
        outsideClosable: any;
        label_desc: any;
        label_name: any;
        ico_skill: any;
        _initProp(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/9/9.
 */
declare module g_base {
    class Effect extends mo.gui.UIAsset {
        mc: egret.MovieClip;
        mcName: any;
        jsonData: any;
        texture: egret.Texture;
        frame: any;
        playTimes: any;
        initMc(): void;
        loadRes(jsonUrl: any, imgUrl: any, cb?: any, ctx?: any): void;
        gotoAndPlay(frame: any, playTimes: number): void;
        gotoAndStop(frame: any): void;
        nextFrame(): void;
        play(playTimes: number): void;
        prevFrame(): void;
        stop(): void;
        onMcEvent(e: egret.Event): void;
    }
}
/**
 * Created by Administrator on 2015/9/9.
 */
declare module g_comp {
    class UIEffect extends g_base.Effect {
        _effectId: number;
        _playTimes: number;
        autoPlay: boolean;
        needPlay: boolean;
        performanceControl: boolean;
        getQueryString(name: any): string;
        _initProp(): void;
        effectId: number;
        getEffect(id: any, extname?: string): string;
        startLoadByKey(id: any, cb?: any, cbtx?: any): void;
        _childrenCreated(): void;
        loadRes(jsonUrl: any, imgUrl: any, cb?: any, ctx?: any): void;
    }
}
/**
 * Created by lihex on 10/22/15.
 */
declare module uiHelper {
    class EfxPlayer extends mo.Class {
        efx: g_comp.UIEffect;
        _endCb: any;
        _endCtx: any;
        init(parent: any, efxId?: any, pos?: any): void;
        _efxs: Array<any>;
        initByGroup(efxs: Array<any>): void;
        setEndCallback(endCb?: any, endCtx?: any): void;
        _onPlayEnd(event: egret.Event): void;
        _onPlayEnd2(): void;
        play(): void;
        static play(container: any, efxId: number, pos: any, endCb?: any, endCtx?: any): EfxPlayer;
        static createPlayer(efxNode: g_comp.UIEffect, endCb?: any, endCtx?: any): EfxPlayer;
        static createPlayGroup(efxs: Array<g_comp.UIEffect>): EfxPlayer;
    }
}
/**
 * Created by Administrator on 2015/9/17.
 */
declare module gd {
    class HeroProp {
        maxHp: number;
        maxHpScale: number;
        attack: number;
        attackScale: number;
        defence: number;
        defenceScale: number;
        magicDefence: number;
        magicDefenceScale: number;
        hit: number;
        hitScale: number;
        dodge: number;
        dodgeScale: number;
        critical: number;
        criticalScale: number;
        disCritical: number;
        disCriticalScale: number;
        luckyValue: number;
        luckyValueScale: number;
        moveSpeed: number;
        moveSpeedScale: number;
        attackInterval: number;
        attackIntervalScale: number;
        damageIncrease: number;
        damageDecrease: number;
        benumbPro: number;
        disBenumbPro: number;
        poisoningRecoveryProb: number;
        benumbProSpan: number;
        reviveCount: number;
        reviveHPScale: number;
        maxHp2: number;
        disMaxHp2: number;
        maxHpTemp: number;
        attackTemp: number;
        defenceTemp: number;
        magicDefenceTemp: number;
        hitTemp: number;
        dodgeTemp: number;
        criticalTemp: number;
        disCriticalTemp: number;
        luckyValueTemp: number;
        moveSpeedTemp: number;
        attackIntervalTemp: number;
        damageIncreaseTemp: number;
        damageDecreaseTemp: number;
        property_index_max: number;
    }
}
/**
 * Created by Administrator on 2015/9/18.
 */
declare module g_base {
    class PropBase extends egret.EventDispatcher {
        static MAX_PROP: number;
        static Scale_Num: number;
        static BehaviorPhysics: number;
        static BehaviorMagic: number;
        static BehaviorTaoism: number;
        private static percentProps;
        static isPercentProp(prop: number): boolean;
        protected curProps: Array<number>;
        protected buffProps: Array<number>;
        constructor();
        setHeroProp(props: Array<number>): void;
        setMonsterInfo(monsterInfo: any): void;
        setPropByIndex(index: number, value: number): void;
        getPropByIndex(index: number): number;
        setBuffPropByIndex(index: number, value: number): void;
        getBuffPropByIndex(index: number): number;
        getCurAndBuffPropByIndex(index: number): number;
        private getFightPropByIndex(baseIndex, scaleIndex, tempScale);
        maxHpFight: number;
        attackFight: number;
        defenceFight: number;
        magicDefenceFight: number;
        hitFight: number;
        dodgeFight: number;
        criticalFight: number;
        disCriticalFight: number;
        luckyValueFight: number;
        moveSpeedFight: number;
        attackIntervalFight: number;
        damageIncreaseFight: number;
        damageDecreaseFight: number;
        benumbProFight: number;
        disBenumbProFight: number;
        benumbProSpanFight: number;
        reviveCountFight: number;
        reviveHPScaleFight: number;
        maxHp2Fight: number;
        invincibleTimeFight: number;
        penetrateFight: number;
        isHitSucc(dodgeFightTarget: number): boolean;
        isCritical: (disCriticalFightTarget: number) => boolean;
        getCritDamage(disCriticalFightTarget: number): number;
        isBenumbProSucc(disBenumbProFightTarget: number): boolean;
        getDefence(attackType: number, roleLevel: number, attack: number): any;
    }
}
/**
 * Created by Administrator on 2015/9/19.
 */
declare module gd {
    class LootObj {
        copyId: any;
        useLootDic: {};
        unUseLootDic: {};
        useBossLootDic: {};
        unUseBossLootDic: {};
    }
}
/**
 * Created by SmallAiTT on 2015/7/22.
 */
declare module g_msg {
    class MsgAlert extends mo.gui.MsgDlg {
        btn_left: egret.gui.Button;
        btn_center: egret.gui.Button;
        btn_right: egret.gui.Button;
        _initProp(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/8/11.
 */
declare module g_msg {
    class MsgItem extends mo.gui.MsgDlg {
        btn_cancel: egret.gui.Button;
        btn_ok: egret.gui.Button;
        ico_item: g_comp.Ico_Item;
        _initProp(): void;
        setMsgInfo(msgData: any, msgArgs: any[]): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/22.
 */
declare module g_msg {
    class MsgTips extends mo.gui.MsgDlg {
        _tipsArr: Array<string>;
        _tipsRunning: boolean;
        _interval: number;
        _intervalId: number;
        grp_container: egret.gui.Group;
        _initProp(): void;
        isNeedToClose(): void;
        _setTips(msgData: any, msgArgs: any[]): void;
        setMsgInfo(msgData: any, msgArgs: any[]): void;
        onExit(): void;
        _runActionQueue(): void;
        createTip(text: any): egret.gui.UIComponent;
    }
}
/**
 * Created by SmallAiTT on 2015/7/22.
 */
declare module g_msg {
    class MsgTipItem extends mo.gui.Comp {
        label_msg: mo.gui.Label;
        msg: string;
        onEnter(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/22.
 */
declare module g_msg {
    class MsgTip extends MsgTips {
        _initProp(): void;
        _setTips(msgData: any, msgArgs: any[]): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/22.
 */
declare module g_msg {
    interface IGetItem {
        items?: any;
        equips?: any;
        changeProp?: any;
        hec?: gd.HeroEntityCtrl;
    }
    class GetItemTips extends mo.gui.Dlg {
        _trayName: string;
        _tipsArr: Array<any>;
        _tipsRunning: boolean;
        _interval: number;
        grp_container: egret.gui.Group;
        grp_tips: egret.gui.Group;
        data: IGetItem;
        propRef: any;
        _initProp(): void;
        setMsgInfo(msgData: any, msgArgs: any[]): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/22.
 */
declare module g_msg {
    interface ICombatChange {
        oldCombat: number;
        newCombat: number;
    }
    class CombatTips extends mo.gui.Dlg {
        _trayName: string;
        label_combat: mo.gui.Label;
        label_diff: mo.gui.Label;
        grp_container: egret.gui.Group;
        data: ICombatChange;
        _intervalId: number;
        _initProp(): void;
        setMsgInfo(msgData: any, msgArgs: any[]): void;
        _childrenCreated(): void;
        _counter: number;
        _tickNum: number;
        _diff: number;
        _updateNumber(dt: any): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/10/19.
 */
declare module g_base {
    var baseNotice: any;
    class BaseNotice extends mo.gui.Dlg {
        _trayName: string;
        label_noticeContent: any;
        ico_noticeBg: any;
        grp_notice: any;
        _initProp(): void;
        _childrenCreated(): void;
        setMsgInfo(msgData: any, msgArgs: any[]): void;
        dataChanged(): void;
        curNotice: any;
        onNoticeUpdate(data: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/5/4.
 */
declare module g_msg {
    class UIMsgCtrl extends mo.DataController {
        _tipsArr: Array<string>;
        _tipsRunning: boolean;
        _interval: number;
        _initProp(): void;
        setTips(arg: any): void;
        _invId: any;
        begin(): void;
        end(): void;
        checkEnd(): void;
        _runActionQueue(): void;
        createNode(text?: any): void;
        static show(...args: any[]): void;
        static showAtOnce: boolean;
        static _msgQueue: any[];
        static push(arg: any): void;
        static pop(): void;
    }
}
/**
 * Created by SmallAiTT on 2015/5/4.
 */
declare module g_msg {
    class UIMsgTextCtrl extends UIMsgCtrl {
        createNode(text?: any): void;
        createLabel(text: any): egret.gui.Group;
        createMsgTips(text: any): egret.gui.Group;
    }
}
/**
   hd 实现系统通知的跑马灯
   大部分代码都是copy自BaseNotice
*/
declare module g_base {
    class BaseSysNotice extends mo.gui.Dlg {
        static instance: BaseSysNotice;
        _trayName: string;
        label_noticeContent: any;
        ico_noticeBg: any;
        grp_notice: any;
        ico_laba: any;
        _initProp(): void;
        _childrenCreated(): void;
        setMsgInfo(msgData: any, msgArgs: any[]): void;
        dataChanged(): void;
        curNotice: any;
        onNoticeUpdate(data: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/5/4.
 */
declare module g_msg {
    class UIMsgHeroPropCtrl extends UIMsgCtrl {
        createNode(data?: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/5/4.
 */
declare module g_msg {
    class UIMsgCombatCtrl extends UIMsgCtrl {
        createNode(data?: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/5/4.
 */
declare module g_msg {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    var msgType: {
        tip: number;
        alert: number;
        confirm: number;
        confirmRecharge: number;
        confirmPurchase: number;
        confirmUse: number;
        confirmUpgrade: number;
        confirmCountDown: number;
        retryToConnect: number;
        msgItem: number;
        alertLogout: number;
    };
}
