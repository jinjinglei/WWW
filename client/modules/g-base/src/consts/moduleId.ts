/**
 * Created by SmallAiTT on 2015/5/4.
 */

module IModuleParam{
    export interface IModuleParam extends mo.IModuleParam{
        subModuleId: number;
        param:any;
    }
    export interface Forge extends IModuleParam{

    }
    export interface Role extends IModuleParam{

    }
    export interface Enemy extends IModuleParam{
        userId;
        hecs:Array<any>;
    }
    export interface Copy extends IModuleParam{
        copyList:any;
        copyType:number;
    }
    export interface VipCopy extends Copy{
        vip:number;
    }
    export interface Home extends IModuleParam{
    }
    export interface Shop extends IModuleParam{
        itemList:any
    }
    export interface Fight extends IModuleParam{
    }
    export interface Rank extends IModuleParam{
        rankData?:any;
        rankType?:any;
    }
    export interface Mail extends IModuleParam{
        mails:any;
    }
    export interface Arena extends IModuleParam{
        mails:any;
    }
    export interface Vip extends IModuleParam{
        showVipLv:any;
    }
    export interface GuildList extends IModuleParam{
        guildPersonalData:any;
        guildData:any;
    }
    export interface GuildMine extends IModuleParam{
        guildPersonalData:any;
        guildData:any;
        guildManagerName:any;
        guildRank:any;
    }

    export interface EventWonderful extends IModuleParam{
        result?:any;// 精彩活动
        type?:any;//打开的活动类型
    }
    export interface WorldBoss extends IModuleParam{
        bossId:any
    }
    export interface GuildBossInspire extends WorldBoss{
        inspireId:any
    }
    export interface RedPacket extends IModuleParam{
        data:any;
    }

    export interface DefArena extends IModuleParam{
        info:any;
    }
    export interface Lotus extends IModuleParam{
        data:any;
    }
    export interface Custom extends IModuleParam{
        itemId:any;
        color:any;
    }
    export interface Medal extends IModuleParam{
        warPrints:any;
    }
    export interface GuildCopySection extends IModuleParam{
        section:any;
    }
    export interface Villian extends IModuleParam{

    }
}
module g_consts{

    export var moduleId = {
        index : "IndexScene",
        home : "HomeScene",
        forge : "ForgeScene",//铸造店
        role : "RoleScene",//铸造店
        fight : "FightScene",
        guild : "GuildScene",
        guildwar:"GuildWarScene",//

        bag : "BagScene",
        shop : "ShopScene",//商店
        gift : "GiftScene",//法宝
        //test : "TestScene",  // 测试新建。。。
        //子模块
        mail : "Mail",//邮件
        copyEntry : "CopyEntry",//副本入口
        equipCopy : "Copy",//装备副本
        stateCopy : "StateCopy",//境界副本
        bossCopy : "BossCopy",//BOSS副本
        vipCopy : "VipCopy",//VIP副本
        rank : "Rank",//排行榜
        taskDlg : "TaskDlg",//任务
        smelting: "Smelting",//熔炼
        practice: "Practice",//修炼
        firstRecharge : "FirstRecharge",//首冲
        vip : "Vip",//这是一个子模块
        activityDlg : "ActivityNewCenter",//活动
        tuLong : "TuLong",//至尊套装vip3活动
        treasure : "Treasure",//探宝
        recharge : "Recharge",//充值
        arena : "Arena",//竞技场
        arenaShop : "ArenaShop",//竞技场商店
        fiveDay : "FiveDay",//竞技场商店
        newFourDay : "NewFiveDay",//竞技场商店
        guildListLayer : "GuildListLayer",//行会列表界面
        guildMineLayer : "GuildMineLayer",//我的行会
        fuliDlg : "FuliDlg",//福利
        chuanchen : "Chuanchen",//传承
        worldBoss : "WorldBoss",//世界BOSS
        guildBossInspire : "GuildBossInspire",//世界BOSS-鼓舞
        worldBossHurtList : "WorldBossHurtList",//世界BOSS-伤害排名
        guildBossReward : "GuildBossReward",//公会BOSS-奖励
        roleEnemyInfo : "RoleEnemyInfo",//对手信息
        redPacket:"RedPacket",//发送红包与记录查询
        redPacketList:"RedPacketList",//红包列表
        redPacketGet:"RedPacketGet",//领取红包
        defArena : "DefArena",//王城擂台
        defarenaWinner : "DefarenaWinner",//王城擂台结算
        king:'King',//王城霸主
        lotus:"LotusScene",//经验葫芦
        rebirth:"Rebirth",//飞升
        rebirthExp:"RebirthExp", //飞升经验
        coffers:"CoffersScene",//国库
        coffersServer:"CoffersServerDlg",//国库服务器列表
        customList:"CustomList",//定制武器列表
        custom:"Custom",//定制武器
        medal:"Medal",//勋章
        bossWar:"BossWar",//Boss战入口
        guildBossLevelList:"GuildBossLevelList",//行会boss列表
        wBossList:"WBossList",//新世界boss列表
        wBossReward:"WBossReward",//新世界boss奖励界面
        guildBossCall:"GuildBossCall",//行会boss召唤界面
        wBossCall:"WBossCall",//世界boss召唤界面
        bindPhone:"BindPhone",//手机绑定提示
        userAgreement:"UserAgreement",//用户协议
        guildCopy:"GuildCopy",//行会副本
        guildCopyBoss:"GuildCopyBoss",//行会副本Boss界面
        tower:"Tower",//爬塔
        heart : "HeartLayer",
        towerTreasury:"TowerTreasury",//爬塔宝库
        villian:"VillianLayer"//恶人谷
    };

    //战斗场景子模块ID
    export var FS_SUBMID_SMELT:number = 0;// 1,0熔炼
    export var FS_SUBMID_ACTIVITY:number = 2;// 1,2活动
    export var FS_SUBMID_PVP_OUT:number = 3;// 1,3野外PK
    export var FS_SUBMID_CHAT:number = 4;// 1,4聊天
    export var FS_SUBMID_RECHARGE:number = 6;// 1,6充值
    export var FS_SUBMID_VIP:number = 7;// 1,7VIP
    //主城子模块ID
    export var HS_SUBMID_EQUIP_COPY:number =0;// 2,0装备副本
    export var HS_SUBMID_BOSS_COPY:number =1;// 2,1炼狱副本
    export var HS_SUBMID_STATE_COPY:number =2;// 2,2元神副本
    export var HS_SUBMID_ARENA_SHOP:number =3;// 2,3竞技场商店
    export var HS_SUBMID_ARENA:number =4;// 2,4竞技场
    export var HS_SUBMID_GUILD:number =5;// 2,5行会
    export var HS_SUBMID_KING:number =6;// 2,6霸主
    export var HS_SUBMID_DAILY:number =7;// 2,7日常任务
    export var HS_SUBMID_CUSTOM_LIST:number =8;// 2,8订制武器列表
    export var HS_SUBMID_SIGN:number =9;// 2,9签到
    export var HS_SUBMID_VIP_COPY:number =10;// 2,10 VIP副本
    export var HS_SUBMID_COFFERS_SERVER:number =11;// 2,11 仗剑天涯
    export var HS_SUBMID_GUILD_COPY_BOSS:number =12;// 2,12 行会副本BOSS界面
    export var HS_SUBMID_TOWER:number =13;// 2,13 爬塔
    export var HS_SUBMID_HEART:number =14;// 2,14 心法

    //主子模块映射
    export var subModuleMap = {};
    subModuleMap[moduleId.home] = [HS_SUBMID_EQUIP_COPY, HS_SUBMID_BOSS_COPY, HS_SUBMID_STATE_COPY, HS_SUBMID_ARENA,
        HS_SUBMID_GUILD, HS_SUBMID_KING, HS_SUBMID_DAILY, HS_SUBMID_CUSTOM_LIST,HS_SUBMID_SIGN,HS_SUBMID_VIP_COPY,HS_SUBMID_COFFERS_SERVER,
        HS_SUBMID_GUILD_COPY_BOSS,HS_SUBMID_TOWER,HS_SUBMID_HEART];
    subModuleMap[moduleId.fight] = [FS_SUBMID_SMELT, FS_SUBMID_ACTIVITY, FS_SUBMID_PVP_OUT, FS_SUBMID_CHAT, FS_SUBMID_RECHARGE, FS_SUBMID_VIP];
}