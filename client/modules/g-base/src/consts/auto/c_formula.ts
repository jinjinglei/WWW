module gc {
    var max = function(num1:number, num2:number):number{return Math.max.apply(Math, arguments)};
    var min = function(num1:number, num2:number):number{return Math.min.apply(Math, arguments)};
    var pow = function(num1:number, num2:number):number{return Math.pow.apply(Math, arguments)};
    var floor = function(num1:number):number{return Math.floor.apply(Math, arguments)};

    var exp = function(num1:number):number{return Math.exp.apply(Math, arguments)};

    var abs = function(num1:number):number{return Math.abs.apply(Math, arguments)};

    var random = function(num1:number,num2:number):number{return (0|(Math.random()*(num2-num1+1))+num1)};

    var int = function(n){return parseInt(n);};

    var log = function(num1){return Math.log.apply(Math, arguments)};

/**
 * 麻痹公式
 * @param a 自身麻痹
 * @param b 目标抗麻
 */
export function calBlock(a:number, b:number){return min(max((b-a)*0.006,0.005),0.5);}
/**
 * 购买金币钻石消耗公式
 * @param x 金币购买次数
 */
export function calBuyGoldDiamond(x:number){return 10+10*int(x/1.5);}
/**
 * 购买金币获得公式
 * @param a 金币购买次数
 * @param b 增量值
 * @param s 等级购买金币基数
 */
export function calBuyGold(a?:number, b?:number, s?:number){return s+b*a;}
/**
 * 境界购买次数
 * @param x 已购买次数
 */
export function calBuyRealm(x:number){return 10+2<<x-1;}
/**
 * 装备购买次数
 * @param x 已购买次数
 */
export function calBuyEquip(x:number){return 10+2<<x-1;}
/**
 * 炼狱boss购买次数
 * @param x 购买次数
 */
export function calBuyBoss(x:number){return 110*x-70;}
/**
 * PK获得荣誉
 * @param a 胜负参数
 * @param x 历史pk值
 */
export function calPkOutHonor(a:number, x:number){return int(a*pow(x,0.25));}
/**
 * PK获得的金币
 * @param a pk值
 * @param b 对方玩家等级
 * @param x 己方红黄名参数
 * @param y 敌方红黄名参数
 */
export function calPkOutGold(a?:number, b?:number, x?:number, y?:number){return (100+random(b,b))*(x+y)*25;}
/**
 * pk获得的经验
 * @param a pk值
 * @param b 对方玩家等级
 * @param c pk差异值(升级表)
 * @param x 己方红黄名参数
 * @param y 敌方红黄名参数
 */
export function calPkOutExpc(a?:number, b?:number, c?:number, x?:number, y?:number){return (50*c+random(b,b))*(x+y);}
/**
 * 装备附加概率公式
 * @param a 装备属性
 * @param c 装备属性随机倍率
 */
export function calEquipSubjoin(a:number, c:number){return int(a*((c+random(1,20))/100));}
/**
 * 装备评分公式
 * @param a 基础评分
 * @param c 附加值
 * @param b 装备附加参数
 */
export function calEquipGrade(a?:number, c?:number, b?:number){return a+c*b;}
/**
 * 熔炼获得强化石数量
 * @param a 熔炼参数
 * @param b 装备等级
 */
export function calSmeltIntensify(a?:number, b?:number){return a*int(1+b/20);}
/**
 * 获得杀戮值计算
 * @param a 攻方杀戮值
 * @param b 防御方杀戮值
 */
export function calKillValue(a:number, b:number){return int(25*pow((abs(max(a-b,2))),0.1));}
/**
 * 随机装备升阶熔炼ID
 * @param a 模板装备ID
 */
export function calSmeltUpId(a?:number){return a+100000+random(1,3)*10000;}
/**
 * 随机装备熔炼ID
 * @param a 模板装备ID
 */
export function calSmeltId(a?:number){return a+random(1,3)*10000;}
/**
 * 技能CD时间（s）
 * @param a 技能等级
 */
export function calSkillCd(a:number){return int(a/6+1)*120;}
/**
 * 清除CD需要消费元宝（s）
 * @param a 当前的CD时间
 */
export function calSkillDiamond(a:number){return int(a/300);}
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
export function calBaseCombat(a:number, a1:number, b:number, b1:number, c:number, c1:number, d:number, d1:number, e:number, e1:number, f:number, f1:number, g:number, g1:number, h:number, h1:number, j:number, j1:number){return int((a*a1+b*b1+c*c1+d*d1+e*e1+f*f1+g*g1+h*h1)*(j/j1));}
/**
 * 戒指战力公式
 * @param a 戒指1
 * @param b 戒指2
 * @param c 戒指3
 * @param d 戒指4
 */
export function calBreakCombat(a:number, b:number, c:number, d:number){return int(a+b+c+d);}
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
export function calSkillCombat(k:number, k1:number, l:number, l1:number, m:number, m1:number, n:number, n1:number, s:number, s1:number){return int(k*k1+l*l1+m*m1+n*n1+s*s1);}
/**
 * 总战力公式
 * @param a 基础属性战斗力
 * @param b 戒指战力
 * @param c 技能战力
 */
export function callCountCombat(a?:number, b?:number, c?:number){return a+b+c;}
/**
 * 装备背包购买消耗公式
 * @param a 购买次数
 */
export function callBuyEquipBag(a:number){return int(a/2)+3;}
/**
 * 离线每装备转化的金币
 * @param a 当前所在的普通关卡ID
 */
export function callEquipTraGold(a:number){return int(4*exp(0.45*(a/40)));}
/**
 * 离线获得的装备数
 * @param b 离线时间
 */
export function callOfflineEquipCount(b:number){return random(int(b/180),int(b/120));}
/**
 * 离线获得的金币数
 * @param a 当前所在的普通关卡获得的金币
 * @param b 领主等级
 * @param c 离线时间(秒)
 */
export function callOfflineGold(a?:number, b?:number, c?:number){return a*(c/10)*log(b+1)/3*(-10*log(c)/2.5+100)/100;}
/**
 * 离线获得的经验数
 * @param a 每秒获得的经验
 * @param c 离线时间(秒)
 */
export function callOfflineExp (a?:number, c?:number){return a*c*(-10*log(c)/2.5+80)/100;}
/**
 * 离线获得的装备等级
 * @param a 当前所在的普通关卡ID
 */
export function callEquipLvl(a:number){return int(a/40+1)*10;}
/**
 * 离线获得的装备ID
 * @param a 离线掉落装备等级
 */
export function callOfflineEquipId(a:number){return (int(a/10)+1)+100000+random(1,3)*10000+random(1,6)*1000;}
/**
 * 刷新商店消耗金币
 * @param a 刷新次数
 */
export function callRefreshShop(a:number){return min(int(a/4),1)*1000;}
/**
 * pk消耗元宝数量
 * @param a PK购买次数
 */
export function calRefreshPKCost(a?:number){return int(15);}
/**
 * pk杀戮值匹配
 * @param a 自己的杀戮值
 * @param b PK杀戮值取值区间值
 */
export function calPkKillCfg(a:number, b:number){return max((a+b),0);}
/**
 * pk战力值匹配
 * @param a 自己等级
 * @param b 自身战力
 * @param c PK战力取值区间
 */
export function calPkCombatCfg(a:number, b:number, c:number){return max(((15*a)/100*c+b),0);}
/**
 * PK值清除消耗元宝
 * @param a 当前的PK值
 */
export function calClearPkCost(a:number){return int(a/2);}
/**
 * 熔炼获得货币数量
 * @param a 装备颜色参数
 * @param b 装备等级参数
 */
export function calSmeltGetCurrency(a:number, b:number){return int(a*b);}
/**
 * pk红名掠夺boo令牌几率（万分率）
 * @param b 己方红名点
 */
export function calBossRate(b:number){return min((b*10),3500);}
/**
 * 公会退会次数需要CD
 * @param a 公会退会次数
 */
export function calQuitGuildCfg(a:number){return max(60,int(a/2)*1200);}
/**
 * 红包公式
 * @param a 当前红包剩余总金额
 * @param b 当前剩余分配红包数
 */
export function calRedEnvelopeShareCfg(a:number, b:number){return max(1,int((a/b)*random(50,125)/100));}
/**
 * 每日国库发放钱粮
 * @param a 当前玩家等级
 * @param b 当前金币贮藏量
 * @param c 领取金币参数1
 * @param d 领取金币参数2
 */
export function calCoffersPersonRecource(a:number, b:number, c:number, d:number){return int(a*a*b/c*exp(d));}
/**
 * 国库城防防守者增加血量
 * @param a 当前城防值
 * @param b 城防参数
 * @param c 当前防守者血量
 */
export function calCoffersPersonHp(a:number, b:number, c:number){return int((a*b*c)/100);}
/**
 * 国库城防显示增加血量百分比
 * @param a 当前城防值
 * @param b 城防参数
 */
export function calCoffersAllHp(a:number, b:number){return (a*b)/100;}
/**
 * 离线获得的铜宝箱数量
 * @param b 离线分钟
 */
export function calCuChests(b:number){return int(random((0.75*b/40),(0.85*b/40)));}
/**
 * 离线获得的银宝箱数量
 * @param b 离线分钟
 */
export function calAgChests(b:number){return int(random((0.75*b/120),(0.85*b/120)));}
/**
 * 离线获得的金宝箱数量
 * @param b 离线分钟
 */
export function calAuChests(b:number){return int(random((0.75*b/360),(0.85*b/360)));}
/**
 * 国库掠夺金币公式
 * @param a 伤害量计算获得金币
 * @param b 国库当前金币
 * @param c 被击破守卫人数
 */
export function calCoffersLoot(a:number, b:number, c:number){return (a+b*0.018)*c*0.25;}
/**
 * 行会副本秒CD花费
 * @param a 当前剩余秒数
 */
export function calGuildCopyCd(a:number){return int(int(a/6)*0.5);}
/**
 * 跨服战进攻秒CD花费
 * @param a 购买次数
 */
export function calClearGuildWarCd(a:number){return 20+(a-1)*30;}
/**
 * 跨服个人鼓舞花费元宝
 * @param a 鼓舞次数
 */
export function calInspireGuildWar(a:number){return 100+(a-1)*100;}
/**
 * 隐姓埋名元宝消耗
 * @param a 购买次数
 */
export function calIncognito(a:number){return int(100*pow(1.1,a-1));}
/**
 * 高级密探元宝消耗
 * @param a 购买次数
 */
export function calSpies(a:number){return int(100+30*a);}
/**
 * 爬塔宝库购买抽奖消耗
 * @param a 购买次数
 * @param b 当前塔层数
 */
export function calPaTaAward(a:number, b:number){return int(150000*exp(0.2*a)/10000)+b*5;}
/**
 * 随机宝箱开出等级
 * @param a 人物等级
 */
export function calEquipLvlCfg(a:number){return int(a/10)+1;}
/**
 * 法宝洗资质成功概率
 * @param a 当前资质
 * @param b 上限资质
 */
export function calTrumpPro(a:number, b?:number){return 1.31-a/b;}
/**
 * 法宝资质增加
 * @param a 当前资质
 * @param b 上限资质
 */
export function calTrumpAdd(a:number, b:number){return int(max(((b-a)/random(50,100)),1))+random(3,7);}
/**
 * 法宝资质减少
 * @param a 当前资质
 * @param b 上限资质
 */
export function calTrumpSub(a:number, b:number){return int(max(((b-a)/random(30,100)),1));}
/**
 * 清除BOSS CD花费
 * @param a 当前BOSS等级
 * @param b 剩余CD时间(秒)
 * @param c 今日召唤次数
 */
export function calGuildBossRepeat(a:number, b:number, c:number){return int(a*3+b*0.005+500*(c+1)+pow(4.5,c));}
/**
 * 凌云石购买价格
 * @param a 购买次数
 */
export function calBuyLingyun(a?:number){return a*2+5;}
/**
 * 计算基金vip购买次数
 * @param a 人物vip等级
 * @param b vip限制等级
 */
export function calFundVipCount(a?:number, b?:number){return a>=b?1:0;}
}