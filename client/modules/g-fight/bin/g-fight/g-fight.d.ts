/**
 * Created by Administrator on 2015/9/17.
 */
declare module g_fight {
    var isShowOffline: boolean;
    var mapView: MapView;
    var bossData: any;
    class FightLayer extends mo.gui.Layer {
        btn_boss: any;
        grp_winCount: any;
        label_winCount: any;
        ico_win_process: any;
        grp_leftTime: any;
        grp_findPk: any;
        label_leftTime: any;
        grp_pkEnemy: any;
        icon_pkInfo: any;
        ico_enemy: any;
        grp_boss: any;
        grp_ui: any;
        ico_red: any;
        ico_bePkRed: any;
        ico_auto: any;
        ico_autoLight: any;
        label_noActive: any;
        eff_findingMonster: any;
        label_worldBossLeftTime: any;
        label_bossName: any;
        label_myDamage: any;
        px_hp: any;
        grp_guwu: any;
        label_guwuLeftTime: any;
        grp_guwuLeftTime: any;
        ico_worldBoss: any;
        label_bossPking: any;
        grp_worldBoss: any;
        grp_myHurt: any;
        fightProfit: any;
        baseMidBar: any;
        btn_red: any;
        ico_expBuff: any;
        btn_zhenQi: any;
        btn_skip: any;
        label_skipFight: any;
        treasureView: any;
        isTreasureViewsShowing: boolean;
        isTreasureViewsNeedRebuild: number;
        _initProp(): void;
        checkRedPoint(): void;
        lvlChange(): void;
        autoFightChange(): void;
        onMedalChange(): void;
        _childrenCreated(): void;
        private barLabelFunction(value, maximum);
        _tap_icon_pkInfo(): void;
        secondTimer: any;
        mpUpdateTimer: any;
        onEnter(): void;
        onExit(): void;
        resetPvpEnemyView(): void;
        resetPvpEnemyViewOnlyDraw(data: any): void;
        timeTrigger: any;
        getEnemyListLeftMillisecond: number;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        onStartPvpFight(data: any): void;
        onNextLoot(): void;
        onWinCountChange(): void;
        onTotalHurtChange(): void;
        onCheckSkipBtn(): void;
        sendTime: number;
        _tap_btn_boss(e?: any): void;
        onEnterCopy(data: any): void;
        forceNormalCopy(): void;
        onEnterWorldBoss(data: any): void;
        checkBossView(): void;
        worldBossCurHpChange(): void;
        worldBossMyHurtChange(): void;
        onWorldBossOpenChanged(): void;
        worldBossGWTimeChange(time: any, fec: gd.BossFightEntityCtrl): void;
        onWorldBossOver(fec: gd.BossFightEntityCtrl): void;
        onCallHero(): void;
        onFightHeroChange(): void;
        _tap_grp_leftTime(): void;
        _tap_grp_findPk(): void;
        private checkUIVisible();
        _tap_ico_enemy(): void;
        private updateHP(e);
        private isFindingMonsterChange();
        _tap_ico_auto(): boolean;
        blTimeTrigger: any;
        setBLCDTime(second: any): void;
        blTimeSec(type: any, beginTime: any, endTime: any): void;
        blTimeOut(type: any, beginTime: any, endTime: any): void;
        gwTimeTrigger: any;
        setGWCDTime(second: any): void;
        gwTimeSec(type: any, beginTime: any, endTime: any): void;
        gwTimeOut(type: any, beginTime: any, endTime: any): void;
        _tap_btn_guwu(): void;
        _tap_btn_damageRank(): void;
        _tap_ico_worldBoss(): void;
        onRedEnvelopeChanged(): void;
        _tap_btn_red(): void;
        onKingBuffChanged(): void;
        _tap_btn_zhenQi(): void;
        _tap_btn_skip(): void;
        showProfileInfo(): void;
        quitOrRebuildTreasureView(isQuit: any): void;
        showOrHideTreasureView(yesIsShow: any): void;
    }
}
/**
 * Created by SmallAiTT on 2015/7/15.
 */
declare module g_fight {
    var log: any;
    var debug: any;
    var info: any;
    var warn: any;
    var error: any;
    var stack: any[];
    class FightDlg extends mo.gui.Dlg {
        static show(data: any): void;
        static cbData: any;
        static cbTimeoutKey: any;
        static showCallback(data: any): void;
        static clearCbData(): void;
    }
    var baseTopBar: any;
    var baseBottomBar: any;
    class FightScene extends mo.gui.UIScene {
        moduleParam: IModuleParam.Fight;
        layer: any;
        show(): void;
        onExit(): void;
        openSubModule(subModuleId: any): void;
    }
}
declare module g_fight {
    /**
     *
     * @author
     *
     */
    class CusEvent extends egret.Event {
        data: any;
        constructor(type: string, data?: any);
    }
}
/**
 * Created by Administrator on 2015/9/18.
 */
declare module g_fight {
    class SkillInfo {
        tabInfo: any;
        private _cd;
        cd: number;
        id: number;
        name: string;
        desc: string;
        effect: number;
        attackDistance: number;
        priority: number;
        targetType: number;
        effectRadius: number;
        damage: number;
        pushType: number;
        pushDistance: number;
        casterPositionType: number;
        buffID: number;
        callMonsterID: number;
        callMonsterNum: number;
        damageScale: number;
        castAction: number;
        actionTime: number;
        casterEffect: number;
        targetEffect: number;
        flyEffect: number;
        beHittedEffect: number;
        firstCD: number;
        special: number;
        canExtends: number;
    }
}
/**
 * Created by Administrator on 2015/9/18.
 */
declare module g_fight {
    class Skill {
        private _skillInfo;
        attackTime: number;
        level: number;
        skillInfo: SkillInfo;
        reduceTime(time: number): void;
        resetCD(): void;
        canExe(): boolean;
        hpCoefficient: number;
    }
}
declare module g_fight {
    /**
     *
     * @author
     *
     */
    class RoleInfo extends g_base.PropBase {
        displayID: number;
        name: string;
        monsterInfo: any;
        isPvPFight: boolean;
        isWorldBossFight: boolean;
        setMonsterInfo(monsterInfo: any): void;
        seeDistance: number;
        constructor();
    }
}
declare module g_fight {
    /**
     *
     * @author
     *
     */
    var ROLE_EVENT_POS_CHANGE: string;
    var ROLE_EVENT_HP_CHANGE: string;
    var ROLE_EVENT_AVATAR_CHANGE: string;
    var ROLE_EVENT_MEDAL_CHANGE: string;
    var ROLE_EVENT_ATTACK: string;
    var ROLE_EVENT_HURT: string;
    var ROLE_EVENT_DIE: string;
    var ROLE_EVENT_REVIVE: string;
    var ROLE_EVENT_ADD_BUFF: string;
    var ROLE_EVENT_REMOVE_BUFF: string;
    var ROLE_EVENT_BENUMB_CHANGED: string;
    var ROLE_EVENT_CALL_PET: string;
    var ROLE_EVENT_GIFT_EQUIP_CHANGE: string;
    var ROLE_ACTION_STAND: number;
    var ROLE_ACTION_MOVE: number;
    var ROLE_ACTION_ATTACK: number;
    var ROLE_ASPECT_UP: number;
    var ROLE_ASPECT_UP_RIGHT: number;
    var ROLE_ASPECT_RIGHT: number;
    var ROLE_ASPECT_DOWN_RIGHT: number;
    var ROLE_ASPECT_DOWN: number;
    var ROLE_ASPECT_UP_LEFT: number;
    var ROLE_ASPECT_LEFT: number;
    var ROLE_ASPECT_DOWN_LEFT: number;
    class Role extends egret.EventDispatcher {
        static STATE_NONE: number;
        static STATE_MOVE_TO_AIM: number;
        static STATE_ATTAK_AIM: number;
        static STATE_FOLLOW_MAIN: number;
        static cellW: number;
        static cellH: number;
        static maxRow: number;
        static maxCol: number;
        private _clothesID;
        private _weaponID;
        private _wingID;
        private _action;
        private _aspect;
        protected _hp: number;
        protected hp2: number;
        x: number;
        y: number;
        private _name;
        roleInfo: RoleInfo;
        private _mtRow;
        private _mtCol;
        isSelf: boolean;
        selfs: Array<Role>;
        enemys: Array<Role>;
        private curEnemy;
        private moveToAimEnemy;
        curState: number;
        allRoles: Array<Role>;
        mainRole: Role;
        lastExeAITime: number;
        loot: Array<any>;
        skillActionTime: number;
        isPushing: boolean;
        curPetNum: number;
        uid: number;
        job: number;
        isFindingMonster: any;
        entity: gd.HeroEntityCtrl;
        private giftSkills;
        curPetId: any;
        skills: Array<Skill>;
        buffs: Array<Buff>;
        isBenumb: boolean;
        private benumbTime;
        private curReviveCount;
        private invincibleTime;
        gift: Gift;
        private isCheckTime;
        getAvatar(id: any, prev?: string): string;
        hp: number;
        mp: number;
        name: string;
        clothesID: any;
        weaponID: any;
        wingID: any;
        action: number;
        aspect: number;
        row: number;
        col: number;
        isOnNodeCenter(): boolean;
        mtRow: number;
        mtCol: number;
        isBoss: boolean;
        isMain: boolean;
        private _medalId;
        medalId: number;
        private _isKing;
        isKing: boolean;
        revive(): void;
        isDie(): boolean;
        die(): void;
        aspectTo(row: number, col: number): void;
        moveTo(row: number, col: number): void;
        pushTo(row: number, col: number): void;
        stand(): void;
        getPointByAspect(isFront: boolean, distance: number): Array<number>;
        spellSkill(skill: Skill): void;
        checkPetId(): void;
        private useSkillOn(skill, target, isFirstAim);
        hasBuff(id: any): boolean;
        addBuff(id: any, level: any): void;
        checkRemoveBuff(time: number): void;
        private removeBuff(buff);
        private onChange();
        hurt(enemy: Role, skill: Skill, isFirstAim: boolean): void;
        constructor();
        distanceTo(aimRole: Role): number;
        getSkillTargets(skill: Skill): Array<Role>;
        exeAI(checkTime?: boolean): void;
        private getCurCanExeSkill();
        private exeAttak();
        private moveToAim();
        getNextNodeTo(row: number, col: number): Array<number>;
        private onCurEnemyDie(e);
        getRoleByRC(row: number, col: number): Role;
        getEmptyPosRound(row: number, col: number, distance: number): Array<number>;
        setEntity(hero: gd.HeroEntityCtrl): void;
        private getGiftEffectValue(type);
        private onEquipOrWingChange();
        private onSkillChanged();
        private onGiftSkillChanged();
        private onGiftEquipChanged();
        setMoster(id: number): void;
        dtor(): void;
    }
}
declare module g_fight {
    var GIFT_EVENT_POS_CHANGE: string;
    class Gift extends egret.EventDispatcher {
        private static ACTION_STAND;
        private static ACTION_MOVE;
        x: number;
        y: number;
        action: number;
        role: Role;
        private aimDis;
        private awayDis;
        giftId: any;
        constructor();
        exeAI(): void;
        dtor(): void;
    }
}
/**
 * Created by Administrator on 2015/9/22.
 */
declare module g_fight {
    class Pet extends Role {
        private _owner;
        owner: Role;
        hp: number;
        private onOwnerDie(e);
    }
}
/**
 * Created by Administrator on 2015/9/21.
 */
declare module g_fight {
    class Buff {
        static create(id: any, skillLv: any): Buff;
        buffInfo: any;
        level: number;
        leftTime: number;
        exeCount: number;
        reduceTime(time: number): void;
        getAddPropValue(): number;
        getHpValue(): number;
        exe(): void;
        totalTime: number;
        id: number;
        name: string;
        liftTime: number;
        lifeTimeAdd: number;
        effectValue: number;
        effectValeAdd: number;
        propertyID: number;
        baseValue1: number;
        linerScale: number;
        effectRes: number;
        specialEffect: number;
    }
}
declare module g_fight {
    /**
     *
     * @author
     *
     */
    class HurtData {
        attackRole: Role;
        hurtRole: Role;
        skill: Skill;
        hp: number;
        miss: Boolean;
        crit: Boolean;
        isFirstAim: boolean;
        isHp2: boolean;
        mb: boolean;
        disMb: boolean;
        invincible: boolean;
        constructor();
    }
}
/**
 * Created by admin on 16/4/14.
 */
declare module g_fight {
    class FightTreasure extends mo.gui.Dlg {
        tab_btn: any;
        _comps: Array<any>;
        container: egret.gui.Group;
        _initProp(): void;
        _childrenCreated(): void;
        onExit(): void;
        _tap_tab_btn(): void;
        _tap_btn_back(): void;
        _tap_btn_help(): void;
    }
}
/**
 * Created by admin on 16/4/14.
 */
declare module g_fight {
    class FightTreasureChat extends mo.gui.Layer {
        list_items: any;
        _Item_list_items: any;
        actItems: any;
        ico_nothing: any;
        _initProp(): void;
        dataChanged(): void;
        onEnter(): void;
        _reset(): void;
        _childrenCreated(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by admin on 16/4/14.
 */
declare module g_fight {
    class FightTreasureInfo extends mo.gui.Layer {
    }
}
/**
 * Created by admin on 16/4/14.
 */
declare module g_fight {
    class FightTreasureList extends mo.gui.Layer {
        list_items: any;
        _Item_list_items: any;
        actItems: any;
        btn_hide: any;
        label_time: any;
        label_hidden_count: any;
        label_cost: any;
        ico_no_item: any;
        ico_item_hint: any;
        _initProp(): void;
        dataChanged(): void;
        _childrenCreated(): void;
        _reset(): void;
        _resetList(listArray: any): void;
        _resetInfo(): void;
        _data_list_items(): any[];
        _click_list_items(event: egret.gui.ListEvent): void;
        _tap_btn_hidden(): void;
        _resetTime(lastStartTime: any): void;
        _timeInterval(): void;
        _timeFinish(): void;
        timeTrigger: any;
        hideLeftMillisecond: number;
        setCDTime(second: any): void;
        cleanCDTime(): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
    }
}
/**
 * Created by admin on 16/4/14.
 */
declare module g_fight {
    class FightTreasureOutside extends mo.gui.Layer {
        btn_p_search: any;
        label_search_count: any;
        label_cost: any;
        label_search_refresh: any;
        grp_searching: any;
        grp_cost: any;
        coolDownLabel: any;
        _initProp(): void;
        dataChanged(): void;
        onExit(): void;
        _childrenCreated(): void;
        _setItem(index: any, item: any): void;
        _setSearchCoolDown(index: any): void;
        _reset(): void;
        _resetSearchBtn(): void;
        _timeInterval(): void;
        _timeFinish(): void;
        _timeInterval2(): void;
        _timeFinish2(): void;
        _challenge(index: any): void;
        _search(index: any): void;
        _callFightLayer(): void;
        _tap_btn_p_search(): boolean;
        _tap_ico_challenge0(): void;
        _tap_ico_challenge1(): void;
        _tap_ico_challenge2(): void;
        _tap_btn_search0(): void;
        _tap_btn_search1(): void;
        _tap_btn_search2(): void;
        timeTrigger: any;
        getEnemyListLeftMillisecond: number;
        setCDTime(second: any): void;
        cleanCDTime(): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        timeTrigger2: any;
        refreshLeftMillisecond: number;
        setCDTime2(second: any): void;
        cleanCDTime2(): void;
        timeSec2(type: any, beginTime: any, endTime: any): void;
        timeOut2(type: any, beginTime: any, endTime: any): void;
    }
}
/**
 * Created by admin on 16/4/14.
 */
declare module g_fight {
    class FightTreasureItem extends mo.gui.ItemRenderer {
        ico_item: any;
        label_time: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _reset(): void;
        _resetTime(lastStartTime: any): void;
        _timeInterval(): void;
        _timeFinish(): void;
        timeTrigger: any;
        hideLeftMillisecond: number;
        setCDTime(second: any): void;
        cleanCDTime(): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
    }
}
/**
 * Created by admin on 16/4/14.
 */
declare module g_fight {
    class FightTreasureChatItem extends mo.gui.ItemRenderer {
        label_content: any;
        label_time: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by admin on 16/4/23.
 */
declare module g_fight {
    class FightTreasureCompose extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        actItems: any;
        label_desc: any;
        label_compose_hint: any;
        btn_compose: any;
        curIndex: any;
        _initProp(): void;
        dataChanged(): void;
        _childrenCreated(): void;
        _reset(): void;
        _resetDesc(): void;
        _data_list_items(): any[];
        _tap_btn_info(): void;
        _tap_btn_compose(): void;
    }
}
/**
 * Created by admin on 16/4/23.
 */
declare module g_fight {
    class FightTreasureComposeItem extends mo.gui.ItemRenderer {
        ico_bg: any;
        label_name: any;
        label_count: any;
        label_open_hint: any;
        ico_item: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        _reset(): void;
    }
}
/**
 * Created by Administrator on 2015/9/9.
 */
declare module g_fight {
    class FightEffect extends g_base.Effect {
        private static _effects;
        static getFightEffect(key: any, aspect: any): any;
        static removeFightEffect(effect: FightEffect): void;
        key: any;
        aspect: any;
        getEffectUrl(id: number, aspect: number, extname?: string): string;
        startLoadByKey(key: any, aspect: any): void;
        loadRes(jsonUrl: any, imgUrl: any, cb?: any, ctx?: any): void;
    }
}
/**
 * Created by Administrator on 2015/10/19.
 */
declare module g_fight {
    class EnterCopyEffect extends g_base.BaseFightDlg {
        label_copy: egret.gui.Label;
        grp_copy: egret.gui.Group;
        _initProp(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/9/22.
 */
declare module g_fight {
    class BuffEffect extends FightEffect {
        private _buff;
        buff: Buff;
    }
}
/**
 * Created by Administrator on 2015/10/13.
 */
declare module g_fight {
    class FightArenaWinOrFail extends FightDlg {
        btn_back: any;
        ico_fail: any;
        ico_win: any;
        ico_timeout: any;
        label_myName: any;
        label_myCombat: any;
        label_enemyName: any;
        label_enemyCombat: any;
        grp_failRank: any;
        grp_winRank: any;
        grp_res: any;
        label_failRank: any;
        label_winRank: any;
        label_gold: any;
        label_sw: any;
        upWarn: any;
        ico_myRole: any;
        ico_enemyRole: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        onExit(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by Administrator on 2015/10/13.
 */
declare module g_fight {
    class FightCoffersWinOrFail extends FightDlg {
        btn_back: any;
        ico_fail: any;
        ico_win: any;
        ico_timeout: any;
        label_myName: any;
        label_myCombat: any;
        label_enemyName: any;
        label_enemyCombat: any;
        grp_res: any;
        upWarn: any;
        ico_myRole: any;
        ico_enemyRole: any;
        label_ap: any;
        label_noRob: any;
        grp_enemyFace: any;
        grp_myFace: any;
        label_score: any;
        ico_item: any;
        label_item: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        onExit(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by Administrator on 2015/10/13.
 */
declare module g_fight {
    class FightCoffersBoss extends FightDlg {
        btn_back: any;
        ico_win: any;
        ico_timeout: any;
        grp_res: any;
        label_ap: any;
        label_noRob: any;
        label_gold: any;
        label_gold2: any;
        label_hurt: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        onExit(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by Administrator on 2015/10/13.
 */
declare module g_fight {
    class FightGuildWarWinOrFail extends FightDlg {
        btn_back: any;
        ico_fail: any;
        ico_win: any;
        ico_timeout: any;
        label_myName: any;
        label_myCombat: any;
        label_enemyName: any;
        label_enemyCombat: any;
        upWarn: any;
        ico_myRole: any;
        ico_enemyRole: any;
        label_myServer: any;
        label_enemyServer: any;
        label_myGuild: any;
        label_enemyGuild: any;
        label_noRob: any;
        grp_enemyFace: any;
        grp_myFace: any;
        label_score: any;
        label_damage: any;
        label_end: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        onExit(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        _tap_btn_back(): void;
    }
}
/**
 * Created by Administrator on 2015/10/13.
 */
declare module g_fight {
    class FightCopyWinOrFail extends FightDlg {
        btn_ok: any;
        ico_fail: any;
        ico_win: any;
        upWarn: any;
        list_items: any;
        _Item_list_items: any;
        ico_winStar: any;
        ico_noDieStar: any;
        ico_timeLmtStar: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        _data_list_items(): any[];
        onExit(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        _tap_btn_ok(): void;
    }
}
/**
 * Created by Administrator on 2015/10/13.
 */
declare module g_fight {
    class FightRevive extends FightDlg {
        btn_ok: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        onExit(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        _tap_btn_ok(): void;
    }
}
/**
 * Created by Administrator on 2015/10/13.
 */
declare module g_fight {
    class FightUpWarn extends mo.gui.Comp {
        _tap_btn_star(): void;
        _tap_btn_stone(): void;
        _tap_btn_wing(): void;
        _tap_btn_equip(): void;
    }
}
/**
 * Created by Administrator on 2015/10/13.
 */
declare module g_fight {
    class FightPKWinOrFail extends FightDlg {
        btn_ok: any;
        ico_fail: any;
        ico_win: any;
        ico_timeout: any;
        label_failPkValue: any;
        label_winPkValue: any;
        label_myRank: any;
        label_gold: any;
        label_exp: any;
        list_items: any;
        _Item_list_items: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        onExit(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        _tap_btn_ok(): void;
        _data_list_items(): any[];
    }
}
declare module g_fight {
    /**
     *
     * @author
     *
     */
    class MapEleView extends egret.Sprite {
        constructor();
        protected onAddedToStage(event: egret.Event): void;
    }
}
/**
 * Created by Administrator on 2015/9/20.
 */
declare module g_fight {
    class LootView extends MapEleView {
        itemID: number;
        itemNum: number;
        row: number;
        col: number;
        begTime: number;
        itemIcon: egret.Bitmap;
        textField: egret.TextField;
        updateView(): void;
        pickUp(): void;
        canAutoPickUp(): boolean;
    }
}
declare module g_fight {
    /**
     *
     * @author
     *
     */
    class RoleNameView extends MapEleView {
        private static bitmapDataObj;
        role: Role;
        hpBarBg: egret.Bitmap;
        hpBar: egret.Bitmap;
        hpTxt: egret.TextField;
        nameTxt: egret.TextField;
        hpSrc: string;
        hpBgSrc: string;
        hideHp: number;
        constructor();
        dtor(): void;
        setRole(value: Role): void;
        checkHPBitmapData(): void;
        checkHPBgBitmapData(): void;
        updateHp(): void;
        private onRoleHpChange(e);
        private onRolePosChange(e?);
    }
}
declare module g_fight {
    /**
     *
     * @author
     *
     */
    class RoleShadowView extends MapEleView {
        role: Role;
        shadow: egret.Bitmap;
        constructor();
        dtor(): void;
        setRole(value: Role): void;
        private onRolePosChange(e?);
    }
}
declare module g_fight {
    /**
     *
     * @author
     *
     */
    class RoleView extends MapEleView {
        role: Role;
        apCon: egret.Sprite;
        roleAP: g_base.ActionPlayer;
        weaponAP: g_base.ActionPlayer;
        wingAP: g_base.ActionPlayer;
        scale: number;
        bossBgEffect: g_fight.FightEffect;
        medalCon: egret.gui.UIAsset;
        medalEffect: g_comp.Ico_Medal;
        setRole(value: Role): void;
        constructor();
        stop(): void;
        playAction(): void;
        dtor(): void;
        private onRoleComplete(event);
        private onRoleAvatarChange(event?);
        onRoleMedalChange(event?: any): void;
        onRolePosChange(event?: egret.Event): void;
        onRoleAttack(event?: egret.Event): void;
        onRoleAddBuff(event: CusEvent): void;
        onRoleRemoveBuff(event: CusEvent): void;
        onRoleBenumb(event?: CusEvent): void;
    }
}
declare module g_fight {
    /**
     *
     * @author
     *
     */
    class GiftView extends MapEleView {
        gift: Gift;
        uiEffect: g_comp.UIEffect;
        constructor();
        setGift(gift: Gift): void;
        stop(): void;
        playAction(): void;
        onGiftPosChange(): void;
        dtor(): void;
    }
}
declare module g_fight {
    /**
     *
     * @author
     *
     */
    class MapTileView extends egret.Bitmap {
        static TILE_W: number;
        static TILE_H: number;
        private static _tiles;
        static createTileView(mapID: number, row: number, col: number): MapTileView;
        static removeTileView(tileView: MapTileView): void;
        private static getTileView(row, col);
        mapID: number;
        row: number;
        col: number;
        static getPath(mapID: any, row: any, col: any): string;
        setTile(mapID: number, row: number, col: number): void;
        dtor(): void;
    }
}
declare module g_fight {
    var MAP_EVENT_HPMP_CHANGE: string;
    var MAP_EVENT_WINCOUNT_CHANGE: string;
    var MAP_EVENT_IS_FINDING_MONSTER_CHANGE: string;
    var MAP_EVENT_TOTAL_HURT_CHANGE: string;
    var MINI_SPACE_TIME: number;
    /**
     *
     * @author
     *
     */
    class MapView extends egret.Sprite {
        mapW: number;
        mapH: number;
        mapTW: number;
        mapTH: number;
        mapID: number;
        private _thumbCon;
        private _bgCon;
        private _shadowCon;
        private _itemCon;
        private _roleCon;
        private _effectCon;
        private _pvpTimeout;
        private _allRoles;
        private _selfRoles;
        private _enemyRoles;
        private _isPicking;
        private _copyId;
        private _pvpType;
        private _pveType;
        private worldBossId;
        monsterId: number;
        private loots;
        private _goingNext;
        private needEnterCopyEffect;
        private _isFindingMonster;
        private _findTimeId;
        private delayRequestId;
        private _roleAllDie;
        private _isEnterMap;
        private _totalHurt;
        isNormalCopy: boolean;
        getEnemyRoleAt(index: number): Role;
        pveType: number;
        pvpType: number;
        isFindingMonster: boolean;
        totalHurt: number;
        isEnterMap: boolean;
        constructor();
        onAddedToStage(event: any): void;
        onRemovedFromStage(event: any): void;
        mainRole: Role;
        copyId: number;
        enterTimerOut: any;
        exitTimerOut: any;
        needEnterEffect: boolean;
        fightStartTime: number;
        enterMap(mapID: number, needEnterEffect: boolean): void;
        exitMap(enterMapId: any, cb: any): void;
        playEnterEffect(): void;
        private removeAllRoleEvent();
        private clearFight();
        private changeMainRole();
        forceNormalCopy(): void;
        startPvpFight(myHeros: Array<gd.HeroEntityCtrl>, enemys: Array<gd.HeroEntityCtrl>, type: number, name?: string): void;
        enterCopy(copyType: number, copyID: number, loots: any, bossId?: number): void;
        worldBossHpChange(): void;
        roleListChange(): void;
        createRole(entity: gd.HeroEntityCtrl, isSelf: boolean, index: number, name?: string): Role;
        createMonster(monsterId: any, loot: any, baseX: any, baseY: any, isBoss: any): Role;
        callPet(mosterID: number, owner: Role): void;
        private onRoleDie(e);
        private onRoleCallPet(e);
        private onRoleGiftEquipChange(e);
        private checkRoleGift(role);
        clearFinding(): void;
        checkNextWave(sameMap?: boolean): void;
        isFightOver(): boolean;
        skipFight(): void;
        getNextLoot(): void;
        createMonsterByLoots(monsterId: any, loots: any, isWorldBoss?: boolean): void;
        private onRoleAttack(event);
        private createFightEffect(key, x, y, aspect);
        private _labelCaches;
        private getLabel();
        private removeLabel(label);
        private onRoleRevive(event);
        private onRoleHurtNoView(event);
        private onRoleHurt(event);
        moveToLT(x: number, y: number): void;
        moveToCenter(x: number, y: number): void;
        addTileView(row: number, col: number, index?: number): void;
        getTileView(row: number, col: number): MapTileView;
        checkRemoveTileView(): void;
        addRoleToMap(role: Role): void;
        getRoleView(role: Role): RoleView;
        getGiftView(role: Role): GiftView;
        getRoleNameView(role: Role): RoleNameView;
        getRoleShadowView(role: Role): RoleShadowView;
        onMainRolePosChange(e?: any): void;
        onMedalChange(): void;
        lastExeAITime: number;
        onEnterFrame(e: any): void;
        myRoles(): Role[];
        getHpInfos(): number[];
        private onMyRoleHpChange(e);
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_fight {
    class PVPBattle extends mo.gui.Dlg {
        label_name: any;
        label_level: any;
        label_jb: any;
        label_exp: any;
        ico_avatar: any;
        label_vipLv: any;
        grp_vip: any;
        ico_title: any;
        pkUser: any;
        ico_item: any;
        label_item: any;
        label_guild: any;
        _childrenCreated(): void;
        dataChanged(): void;
        onEnter(): void;
        getCurrentSkinState(): string;
        _tap_btn_attack(): void;
        startPvp(name: any): void;
        getNameTxt(name: any): string;
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_fight {
    class PVPLogItem extends mo.gui.ItemRenderer {
        ico_pkState: any;
        label_name: any;
        label_time: any;
        label_killValue: any;
        label_jb: any;
        label_exp: any;
        list_items: any;
        _Item_list_items: any;
        label_gain: any;
        label_lose: any;
        ico_chou: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_fight {
    class PVPLog extends mo.gui.Dlg {
        list_log: any;
        _Item_list_log: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        _data_list_log(): any[];
    }
}
/**
 * Created by Administrator on 2015/9/23.
 */
declare module g_fight {
    class FightEnemyCell extends mo.gui.Comp {
        ico_role: any;
        _initProp(): void;
        onEnter(): void;
        _childrenCreated(): void;
        onTap(e: any): void;
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_fight {
    class PVPRankItem extends mo.gui.ItemRenderer {
        label_lvl: any;
        label_name: any;
        label_combat: any;
        label_killValue: any;
        label_rank: any;
        grp_res0: any;
        grp_res1: any;
        ico_head: any;
        ico_rank: any;
        btn_challenge: any;
        label_guild: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_challenge(): void;
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_fight {
    class PVPSelfInfo extends mo.gui.Layer {
        bar_pk: egret.gui.ProgressBar;
        label_myKillValue: any;
        label_pkYellow: any;
        label_pkRed: any;
        grp_pk: any;
        label_pk: any;
        ico_light: any;
        label_pkAddDesc: any;
        label_name: any;
        label_noExpTip: any;
        ico_role: any;
        ico_red: any;
        _initProp(): void;
        checkRedPoint(): void;
        _childrenCreated(): void;
        _tap_btn_rank(): void;
        _tap_btn_log(): void;
        onEnter(): void;
        reset(): void;
        _tap_btn_help(): void;
        _tap_btn_clearRedPoint(): void;
    }
}
/**
 * Created by Administrator on 2015/10/23.
 */
declare module g_fight {
    class PvpRankRewardCell extends mo.gui.ItemRenderer {
        label_rank: any;
        grp_res0: any;
        grp_res1: any;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/10/23.
 */
declare module g_fight {
    class PvpRankReward extends mo.gui.Dlg {
        list_items: any;
        _Item_list_items: any;
        _childrenCreated(): void;
        _initProp(): void;
        _data_list_items(): any[];
    }
}
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_fight {
    class PVPRank extends g_base.CloseInfoDlg {
        list_rank: any;
        _Item_list_rank: any;
        label_myRank: any;
        label_myKillValue: any;
        grp_res0: any;
        grp_res1: any;
        btn_challengeLog: any;
        ico_red: any;
        _childrenCreated(): void;
        _initProp(): void;
        onEnter(): void;
        dataChanged(): void;
        checkRedPoint(): void;
        _data_list_rank(): any[];
        _tap_btn_info(): void;
        _tap_btn_challengeLog(): void;
    }
}
/**
 * Created by lihex on 11/4/15.
 */
declare module g_fight {
    /**
     *
     * @author
     *
     */
    class FightProfitDlg extends mo.gui.Dlg {
        outsideClosable: boolean;
        label_tips: mo.gui.Label;
        label_noExp: any;
        label_profit_gold: mo.gui.Label;
        label_profit_exp: mo.gui.Label;
        grp_expOpen: any;
        grp_expNoOpen: any;
        label_curExpLv: any;
        label_expPer: any;
        label_expTotal: any;
        label_expOpenLv: any;
        _initProp(): void;
        _childrenCreated(): void;
        _updateProfit(): void;
        _updateExp(): void;
        _tap_btn_get(): void;
    }
}
/**
 * Created by lihex on 11/4/15.
 */
declare module g_fight {
    /**
     *
     * @author
     *
     */
    class FightProfit extends mo.gui.Layer {
        img_detail: egret.gui.UIAsset;
        _initProp(): void;
        _childrenCreated(): void;
        setVisible(value: boolean): void;
        _tap_img_detail(): void;
    }
}
/**
 * Created by Administrator on 2015/11/26.
 */
declare module g_fight {
    class EnemyList extends g_base.CloseInfoDlg {
        ico_none: any;
        list_enemies: any;
        _Item_list_enemies: any;
        _childrenCreated(): void;
        _initProp(): void;
        dataChanged(): void;
        _data_list_enemies(): any[];
    }
}
/**
 * Created by Administrator on 2015/11/26.
 */
declare module g_fight {
    class EnemyItem extends mo.gui.ItemRenderer {
        label_rank: any;
        label_name: any;
        label_lv: any;
        label_combat: any;
        ico_head: any;
        label_guild: any;
        dataChanged(): void;
        _tap_btn_fight(): void;
    }
}
/**
 * Created by Administrator on 2015/11/20.
 */
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_fight {
    class ChallengeLogItem extends mo.gui.ItemRenderer {
        ico_pkState: any;
        label_name: any;
        label_time: any;
        label_killValue: any;
        label_jb: any;
        label_exp: any;
        list_items: any;
        _Item_list_items: any;
        label_gain: any;
        label_lose: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/11/20.
 */
/**
 * Created by Administrator on 2015/9/24.
 */
declare module g_fight {
    class ChallengeLog extends mo.gui.Dlg {
        list_log: any;
        _Item_list_log: any;
        _initProp(): void;
        _childrenCreated(): void;
        onEnter(): void;
        _data_list_log(): any[];
    }
}
/**
 * Created by lihex on 3/9/16.
 */
declare module g_fight {
    class WBossWin extends FightDlg {
        btn_close: any;
        label_last: any;
        label_first: any;
        label_time: any;
        label_reward: any;
        label_damage: any;
        label_rank: any;
        ico_rank: any;
        ico_item: any;
        grp_rankReward: egret.gui.Group;
        grp_killReward: egret.gui.Group;
        img_killReward: egret.gui.UIAsset;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by lihex on 3/9/16.
 */
declare module g_fight {
    class WBossFail extends FightDlg {
        btn_close: any;
        label_last: any;
        label_first: any;
        label_time: any;
        label_reward: any;
        label_damage: any;
        label_rank: any;
        ico_rank: any;
        ico_item: any;
        grp_reward: any;
        label_leftHp: any;
        _childrenCreated(): void;
        dataChanged(): void;
    }
}
/**
 * Created by Administrator on 2015/12/29.
 */
declare module g_fight {
    class GuildBossWin extends FightDlg {
        btn_close: any;
        label_last: any;
        label_first: any;
        label_time: any;
        label_reward: any;
        label_damage: any;
        label_rank: any;
        ico_rank: any;
        ico_item: any;
        _childrenCreated(): void;
        dataChanged(): void;
        _tap_btn_close(): void;
        onExit(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
    }
}
/**
 * Created by Administrator on 2015/12/29.
 */
declare module g_fight {
    class GuildBossFail extends FightDlg {
        label_leftHp: any;
        label_damage: any;
        dataChanged(): void;
        _tap_btn_forge(): void;
        _tap_btn_shop(): void;
        _tap_btn_close(): void;
    }
}
/**
 * Created by lihex on 4/8/16.
 */
declare module g_fight {
    class GuildCopyBossWinOrFail extends FightDlg {
        grp_win: any;
        grp_rankReward: any;
        label_damage: any;
        label_contribute: any;
        label_fail: any;
        btn_back: any;
        _initProp(): void;
        _childrenCreated(): void;
        dataChanged(): void;
        getCurrentSkinState(): string;
        onExit(): void;
        timeTrigger: any;
        setCDTime(second: any): void;
        timeSec(type: any, beginTime: any, endTime: any): void;
        timeOut(type: any, beginTime: any, endTime: any): void;
        _tap_btn_back(): void;
        _tap_btn_forge(): void;
        _tap_btn_shop(): void;
    }
}
