/**
 * Created by Sara on 2015/12/4.
 */
module gd {
    export class GuildCtrl extends mo.DataController {
        static ON_MANAGER_POSITION_CHANGED:string = "on_manager_position_changed";
        static ON_GUILD_INFO_CHANGED:string = "on_guildinfo_changed";
        _memberList:any;
        _isOpenBoss:boolean;
        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.GuildEntity;
            this._isOpenBoss = false;
        }

        initData(data){
            if(!data) return;
            var self = this;
            self.init(data);
            self._memberList = [];
        }

        isOpenBoss(){
            return this._isOpenBoss;
        }

        //更新数据
        updateData(data){
            var self = this;
            if(!self._data) return;
            self.updateEntity(data);
        }

        updateEntity(data){
            var self = this;
            var oldData = JSON.parse(JSON.stringify(self.getData()));
            super.updateEntity(data);
            if (data[gc.dsConsts.GuildEntity.lvl]) {
                var oldLvl = oldData[gc.dsConsts.GuildEntity.lvl];
                var newLvl = data[gc.dsConsts.GuildEntity.lvl];
                if (oldLvl != newLvl) {
                    heroCtrl.calPropAndCombat();
                }
            }
        }

        //获取公会宝库级别  0：未开启或无公会 1：初级 2：中级3：高级
        getLevel(){
            var self = this;
            var lvl = self.get(gc.dsConsts.GuildEntity.lvl);
            if(lvl && lvl >= 5){
                if(lvl >= 5 && lvl < 15) return 1;
                if(lvl >= 15 && lvl < 30) return 2;
                if(lvl >= 30) return 3;
            }else{
                return 0;
            }
        }

        getLvl(){
            var self = this;
            if(!self._data) return 0;
            return self.get(gc.dsConsts.GuildEntity.lvl);
        }

        getId(){
            var self = this;
            if(!self._data) return 0;
            return self.get(gc.dsConsts.GuildEntity.id);
        }

        getExitGuildCD(){
            return mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet)[5]
        }

        //获取公会人数上限
        getMaxMember(lvl){
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lvl);
            return info[gc.c_lvl_guildMan];
        }

        //获取公会所需经验
        getNeedExp(lvl){
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_lvl, lvl);
            return info[gc.c_lvl_guildExp];
        }

        /**
         * 获取公会排名
         * @param cb
         * @param target
         * @returns
         */
        getRank(cb,target) {
            var self = this;
        }

        /**
         * 获取公会数据
         * @param cb
         * @param target
         * @returns [是否有公会（true：有，false：没有）,gc.dsConsts.GuildPersonalEntity,gc.dsConsts.GuildEntity,会长名称，公会排名]
         */
        getInfo(cb,target) {
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_guild_getInfo, {}, function (data) {
                var isGuild = data[gc.dsConsts.ExGuildData.isGuild];
                var guildPersonalData = data[gc.dsConsts.ExGuildData.guildPersonalData]||{};
                var guildData = data[gc.dsConsts.ExGuildData.guildData]||{};
                var chairmanName = data[gc.dsConsts.ExGuildData.chairmanName]||"";
                var rank = data[gc.dsConsts.ExGuildData.rank]||0;
                if(gd.guildPersonalCtrl.getData()){gd.guildPersonalCtrl.updateEntity(guildPersonalData);}else{gd.guildPersonalCtrl.initData(guildPersonalData);}
                if(self.getData()){self.updateEntity(guildData);}else{self.initData(guildData);}
                heroCtrl.calPropAndCombat();
                if(data[gc.dsConsts.ExGuildData.isOpenBoss]){
                    self._isOpenBoss = true;
                }else{
                    self._isOpenBoss = false;
                }
                var isOpenGuildWar = data[gc.dsConsts.ExGuildData.isOpenGuildWar];
                guildWarCtrl.setIsOpen(isOpenGuildWar);
                var cfgData = data[gc.dsConsts.ExGuildData.cfgData];
                guildWarCtrl.setCfgData(cfgData);
                cb.call(target,[isGuild,guildPersonalData,guildData,chairmanName,rank]);
            });
        }

        /**
         * 创建公会
         * @param name 公会名称
         * @param cb
         * @param target
         * @returns gc.dsConsts.GuildEntity
         */
        establishGuild(name,cb,target) {
            var self = this;
            var sensitiveArr = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.fuckWord)[0].split(",");
            if (name == null || name == "") {
                return mo.showMsg(gc.id_c_msgCode.guildNameIsNull);
            }
            else if (mo.STR.getStringLength(name) > 12) {
                return mo.showMsg(gc.id_c_msgCode.guildNameTooLong);
            }
            else if (mo.STR.checkSensitiveWord(name, sensitiveArr)) {
                return mo.showMsg(gc.id_c_msgCode.guildNameIllegal);
            }else if(name.indexOf("'")>-1){
                return mo.showMsg("不能包含单引号");
            }else if(name.indexOf('"')>-1){
                return mo.showMsg("不能包含双引号");
            }else if(name.indexOf('\\')>-1){
                return mo.showMsg("不能包含斜杠");
            }
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var lvl = gd.userCtrl.getLvl();
            var openCon = c_game[gc.id_c_game.guildSet][0];
            if(lvl < openCon) return mo.showMsg("未开启行会系统");
            var argKeys = gc.iface.a_guild_establishGuild_args;
            var args = {};
            args[argKeys.name] = name;
            mo.requestWaiting4Server(gc.iface.a_guild_establishGuild, args, function (data) {
                var userData = data[gc.dsConsts.ExGuildData.userData]||{};
                var guildData = data[gc.dsConsts.ExGuildData.guildData]||{};
                var guildPersonalData = data[gc.dsConsts.ExGuildData.guildPersonalData]||{};
                gd.guildPersonalCtrl.updateEntity(guildPersonalData);
                if(self.getData()){self.updateEntity(guildData);}else{self.initData(guildData);}
                gd.userCtrl.updateEntity(userData);
                heroCtrl.calPropAndCombat();
                cb.call(target,guildData);
            });
        }

        /**
         * 搜索公会
         * @param cb
         * @param guildId 公会id
         * @param target
         * @returns gc.dsConsts.GuildEntity
         */
        seekGuild(guildId,cb,target) {
            if(guildId=="") return mo.showMsg(gc.id_c_msgCode.guildIdIsNull);
            var self = this;
            var argKeys = gc.iface.a_guild_seekGuild_args;
            var args = {};
            args[argKeys.guildId] = guildId;
            mo.requestWaiting4Server(gc.iface.a_guild_seekGuild, args, function (data) {
                cb.call(target,data);
            });
        }

        /**
         * 申请加入公会
         * @param cb
         * @param guildId 公会id
         * @param target
         * @returns [gc.dsConsts.GuildPersonalEntity,gc.dsConsts.GuildEntity]
         */
        joinGuild(guildId,cb,target) {
            var self = this;
            if(accountCtrl.isGuest()) return mo.showMsg(gc.id_c_msgCode.touristForbidGuild);
            var lastQuipGuildTime = gd.guildPersonalCtrl.get(gc.dsConsts.GuildPersonalEntity.lastQuipGuildTime);
            if(lastQuipGuildTime){
                //var quitGuildCount = 0;
                //var actLastTime = gd.guildPersonalCtrl.get(gc.dsConsts.GuildPersonalEntity.actLastTime);
                //if (actLastTime && Date.newDate(actLastTime).equalsDay(Date.newDate())) quitGuildCount = gd.guildPersonalCtrl.get(gc.dsConsts.GuildPersonalEntity.exitGuildCount);
                //var quitGuildCd = gc.calQuitGuildCfg(quitGuildCount);
                var quitGuildCd = parseInt(self.getExitGuildCD())*60*60;
                var joinTime = Date.newDate(lastQuipGuildTime).getTime() + quitGuildCd*1000;
                if(Date.newDate(joinTime) > Date.newDate()){
                    var cantEnterGuildCd = Math.ceil(((joinTime - Date.newDate().getTime())/3600000)); //小时
                    return mo.showMsg(gc.id_c_msgCode.cantEnterGuildCd,cantEnterGuildCd);
                }else{
                    self._joinGuild(guildId,cb,target);
                }
            }else{self._joinGuild(guildId,cb,target);}
        }

        _joinGuild(guildId,cb,target) {
            var self = this;
            var argKeys = gc.iface.a_guild_joinGuild_args;
            var args = {};
            args[argKeys.guildId] = guildId;
            var cfg_c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            self.seekGuild(guildId,function(guildData){
                if(!guildData) return mo.showMsg("该行会已经不存在！");
                var guildMan = cfg_c_lvl[guildData[gc.dsConsts.GuildEntity.lvl]][gc.c_lvl_guildMan];
                var guildPopulation = guildData[gc.dsConsts.GuildEntity.guildPopulation];
                if(guildPopulation >= guildMan){
                    mo.showMsg(gc.id_c_msgCode.guildMembersMax,function(){
                        mo.requestWaiting4Server(gc.iface.a_guild_joinGuild, args, function (data) {
                            var isJoin = data[gc.dsConsts.ExGuildData.isJoin];
                            var guildData = data[gc.dsConsts.ExGuildData.guildData]||{};
                            var guildPersonalData = data[gc.dsConsts.ExGuildData.guildPersonalData]||{};
                            gd.guildPersonalCtrl.updateEntity(guildPersonalData);
                            if(self.getData()){self.updateEntity(guildData);}else{self.initData(guildData);}
                            cb.call(target,isJoin);
                        });
                    });
                }else{
                    mo.requestWaiting4Server(gc.iface.a_guild_joinGuild, args, function (data) {
                        var isJoin = data[gc.dsConsts.ExGuildData.isJoin];
                        var guildData = data[gc.dsConsts.ExGuildData.guildData]||{};
                        var guildPersonalData = data[gc.dsConsts.ExGuildData.guildPersonalData]||{};
                        gd.guildPersonalCtrl.updateEntity(guildPersonalData);
                        if(self.getData()){self.updateEntity(guildData);}else{self.initData(guildData);}
                        cb.call(target,isJoin);
                    });
                }
            },self);
        }

        /**
         * 获取申请列表
         * @param cb
         * @param target
         * @returns [gc.dsConsts.UserEntity]
         */
        getAppliedMembers(cb,target) {
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_guild_getAppliedMembers, {}, function (data) {
                cb.call(target,data);
            });
        }

        /**
         * 申请列表管理
         * @param cb
         * @param guildId 公会id
         * @param tUserId
         * @param isConsent 是否同意  true：同意  false：拒绝
         * @param target
         * @returns gc.dsConsts.GuildEntity
         */
        appliedMembersSet(tUserId,isConsent,cb,target) {
            var self = this;
            var argKeys = gc.iface.a_guild_appliedMembersSet_args;
            var args = {};
            args[argKeys.tUserId] = tUserId;
            args[argKeys.isConsent] = isConsent;
            mo.requestWaiting4Server(gc.iface.a_guild_appliedMembersSet, args, function (data) {
                var guildData = data[gc.dsConsts.ExGuildData.guildData]||{};
                var guildPersonalData = data[gc.dsConsts.ExGuildData.guildPersonalData]||{};
                var isAtherGuild = data[gc.dsConsts.ExGuildData.isAtherGuild];
                var isMembersMax = data[gc.dsConsts.ExGuildData.isMembersMax];
                gd.guildPersonalCtrl.updateEntity(guildPersonalData);
                if(self.getData()){self.updateEntity(guildData);}else{self.initData(guildData);}
                if(isAtherGuild) mo.showMsg(gc.id_c_msgCode.otherGuildEntered);
                if(isMembersMax) mo.showMsg(gc.id_c_msgCode.MembersMax);
                cb.call(target,guildData);
                self.pushNotify(gd.GuildCtrl.ON_GUILD_INFO_CHANGED);

            });
        }

        /**
         * 工会设置
         * @param cb
         * @param joinCon  加入条件
         * @param joinLvl  加入最低等级
         * @param target
         * @returns gc.dsConsts.GuildEntity
         */
        guildSetting(joinCon,joinLvl,cb,target) {
            var self = this;
            var argKeys = gc.iface.a_guild_guildSetting_args;
            var args = {};
            args[argKeys.joinCon] = joinCon;
            args[argKeys.joinLvl] = joinLvl;
            mo.requestWaiting4Server(gc.iface.a_guild_guildSetting, args, function (data) {
                var guildData = data[gc.dsConsts.ExGuildData.guildData]||{};
                if(self.getData()){self.updateEntity(guildData);}else{self.initData(guildData);}
                cb.call(target,guildData);
                self.pushNotify(gd.GuildCtrl.ON_GUILD_INFO_CHANGED,guildData);
            });

        }

        /**
         * 修改公告
         * @param cb
         * @param notice  公告
         * @param target
         * @returns gc.dsConsts.GuildEntity
         */
        setNotice(notice,cb,target) {
            var self = this;
            var sensitiveArr = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.fuckWord)[0].split(",");
            if (mo.STR.getStringLength(notice) > 60) {
                return mo.showMsg(gc.id_c_msgCode.noticeTooLong);
            }
            else if (mo.STR.checkSensitiveWord(notice, sensitiveArr)) {
                return mo.showMsg("公告内容不合法");
            }
            var argKeys = gc.iface.a_guild_setNotice_args;
            var args = {};
            args[argKeys.notice] = notice;
            mo.requestWaiting4Server(gc.iface.a_guild_setNotice, args, function (data) {
                var guildData = data[gc.dsConsts.ExGuildData.guildData]||{};
                var guildPersonalData = data[gc.dsConsts.ExGuildData.guildPersonalData]||{};
                gd.guildPersonalCtrl.updateEntity(guildPersonalData);
                if(self.getData()){self.updateEntity(guildData);}else{self.initData(guildData);}
                cb.call(target,guildData);
                self.pushNotify(gd.GuildCtrl.ON_GUILD_INFO_CHANGED,guildData);
            });
        }

        /**
         * 退会
         * @param cb
         * @param isQuit    退会/解散
         * @param target
         */
        exitGuild(isQuit,cb,target){
            var self = this;

            if(isQuit == gc.c_prop.guildMemberOpKey.quitGuild){
                //mo.showMsg(gc.id_c_msgCode.ifGquit ,function(){
                    self._exitGuild(cb,target);
                //});
            }
            if(isQuit == gc.c_prop.guildMemberOpKey.dissolveGuild){
                //mo.showMsg(gc.id_c_msgCode.ifGdisband ,function(){
                    self._exitGuild(cb,target);
                //});
            }
        }

        _exitGuild(cb,target) {
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_guild_exitGuild, {}, function (data) {
                var dissolveId = data[gc.dsConsts.ExGuildData.dissolveId];
                var guildPersonalData = data[gc.dsConsts.ExGuildData.guildPersonalData]||{};
                gd.guildPersonalCtrl.updateEntity(guildPersonalData);
                if(dissolveId){
                    self._data = null;
                }else{
                    var guildData = data[gc.dsConsts.ExGuildData.guildData]||{};
                    if(self.getData()){self.updateEntity(guildData);}else{self.initData(guildData);}
                }
                heroCtrl.calPropAndCombat();
                cb.call(target,data);
            });
        }

        //计算会员等级
        getRankFileLvl(guildAct){
            var cfg_c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);
            var returnLvl = 0;
            if(guildAct<cfg_c_lvl[1][gc.c_lvl_rankFileNeedAct]) return returnLvl;
            for(var i = 30;i>=1;i--){
                if(guildAct >= cfg_c_lvl[i][gc.c_lvl_rankFileNeedAct]){
                    returnLvl = i;
                    break;
                }
            }
            return returnLvl;
        }

        //授爵界面      [【爵位id,剩余数量，总数，要求会员等级,加成,开启公会等级】,...]
        getAwardUi(){
            var self = this;
            var returnArr = [];
            var c_guildEnnoble = mo.getJSONWithFileName(gc.cfg_c_guildEnnoble);
            var cfg_c_guildLvl = mo.getJSONWithFileName(gc.cfg_c_guildLvl);
            var lvl = self.get(gc.dsConsts.GuildEntity.lvl);
            var ennobleData = self.get(gc.dsConsts.GuildEntity.ennobleData);
            var maxEnnobleId = 0;
            var ennobleCountArr = {};
            var ennobleCount = cfg_c_guildLvl[lvl][gc.c_guildLvl_ennobleCount];     //[男爵，子爵，伯爵，侯爵，公爵]
            for(var i=0;i<ennobleCount.length;i++){
                var count = 0;
                var ennobleId = ennobleCount[i][0];
                var rankFileLvl = c_guildEnnoble[ennobleId][gc.c_guildEnnoble_ennobleLvlCfg];
                if(ennobleData[ennobleId]) count = ennobleData[ennobleId];
                if(ennobleId>maxEnnobleId) maxEnnobleId = ennobleId;
                ennobleCountArr[ennobleId] = [count,ennobleCount[i][1],rankFileLvl];
            }
            for(var key in ennobleCountArr){
                var ennobleCo = ennobleCountArr[key];
                returnArr.push([key,ennobleCo[1]-ennobleCo[0],ennobleCo[1],ennobleCo[2]])
            }
            if(c_guildEnnoble[maxEnnobleId+1]){
                var nextLvl = c_guildEnnoble[maxEnnobleId+1][gc.c_guildEnnoble_ennobleGuildLvlCfg];
                returnArr.push([maxEnnobleId + 1,999,999,c_guildEnnoble[maxEnnobleId+1][gc.c_guildEnnoble_ennobleLvlCfg],c_guildEnnoble[maxEnnobleId+1][gc.c_guildEnnoble_props],nextLvl]);
            }
            return returnArr;
        }

        /**
         * 获取会员列表
         * @param cb
         * @param target
         * @returns [ds.GuildMember]
         */
        getMembers(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_guildPerson_getMemberList, {}, function (data) {
                data.sort(function(m1, m2){
                    var p = m1[gc.dsConsts.GuildMember.position]-m2[gc.dsConsts.GuildMember.position];
                    if(p!=0) return p;
                    var a = m2[gc.dsConsts.GuildMember.guildAct]-m1[gc.dsConsts.GuildMember.guildAct];
                    if(a!=0) return a;
                    var l = m2[gc.dsConsts.GuildMember.lvl]-m1[gc.dsConsts.GuildMember.lvl];
                    if(l!=0) return l;
                    var d = m1[gc.dsConsts.GuildMember.lastUpdateTime]-m2[gc.dsConsts.GuildMember.lastUpdateTime];
                    if(d!=0) return d;
                })

                self._memberList = data;
                cb.call(target,data);
            });
        }

        getMemberList(){
            var self = this;
            return self._memberList;
        }

        getMemberByUserId(userId){
            var self = this;
            for(var i=0; i<self._memberList.length; ++i){
                var memberData = self._memberList[i];
                if(memberData[gc.dsConsts.GuildMember.userId]==userId){
                    return memberData;
                }
            }
            return null;
        }

        //获取会员信息
        getMemberData(userId,cb,target){
            var self = this;
            var reMember = null;
            for(var i = 0;i<self._memberList.length;i++){
                var locMember = self._memberList[i];
                var locUserId = locMember[gc.dsConsts.GuildMember.userId];
                if(locUserId==userId){
                    reMember = locMember;
                    break;
                }
            }
            cb.call(target,reMember);
        }

        /**
         * 设置爵位
         * @param targetUserId
         * @param ennobleType  gc.c_prop.ennobleTypeKey
         * @param cb
         * @param target
         */
        static ON_MEMBER_JOB_CHANGE = "ON_MEMBER_JOB_CHANGE"; //jsdfsdf
        setEnnoble(targetUserId,ennobleType,cb,target){
            var self = this;
            var argKeys = gc.iface.a_guild_setEnnoble_args;
            var args = {};
            args[argKeys.targetUserId] = targetUserId;
            args[argKeys.ennobleType] = ennobleType;
            mo.requestWaiting4Server(gc.iface.a_guild_setEnnoble, args, function (data) {
                var guildData = data[gc.dsConsts.ExGuildData.guildData]||{};
                self.updateEntity(guildData);
                if(targetUserId == gd.userCtrl.getId()){
                    var guildPersonalData = data[gc.dsConsts.ExGuildData.guildPersonalData]||{};
                    guildPersonalCtrl.updateEntity(guildPersonalData);
                    heroCtrl.calPropAndCombat();
                }
                self.pushNotify(self.__class.ON_MEMBER_JOB_CHANGE, targetUserId);
                cb.call(target,data);

            });
        }

        /**
         * 操作会员
         * @param op gc.c_prop.guildMemberOpKey
         * @param targetUserId
         * @param cb
         * @param target
         */
        opMember(op,targetUserId,targetName,cb,target,_notCheckMsg?){
            var self = this;
            var msgId = 0;

            if(op == gc.c_prop.guildMemberOpKey.increase){
                msgId = 0;
            }else if(op == gc.c_prop.guildMemberOpKey.trans){
                msgId = gc.id_c_msgCode.ifRetiringGuildMaster;
            }else if(op == gc.c_prop.guildMemberOpKey.kick){
                msgId = 0;
            }else if(op == gc.c_prop.guildMemberOpKey.dissolveGuild){
                msgId = 0;
            }
            if(_notCheckMsg||msgId==0){
                var argKeys = gc.iface.a_guildPerson_opMember_args;
                var args = {};
                args[argKeys.targetUserId] = targetUserId;
                args[argKeys.op] = op;
                mo.requestWaiting4Server(gc.iface.a_guildPerson_opMember, args, function (data) {
                    var guildData = data[gc.dsConsts.ExGuildData.guildData]||{};
                    self.updateEntity(guildData);
                    var guildPersonalData = data[gc.dsConsts.ExGuildData.guildPersonalData]||{};
                    guildPersonalCtrl.updateEntity(guildPersonalData);
                    cb.call(target,data);
                    self.pushNotify(gd.GuildCtrl.ON_MANAGER_POSITION_CHANGED)
                });
                return;
            }
            if(msgId!=0){
                //权限
                if(guildWarCtrl.isOpening()){
                    mo.showMsg(gc.id_c_msgCode.noGuildTransfer);
                    return;
                }
                mo.showMsg(msgId, targetName, function(){
                    self.opMember(op,targetUserId,targetName,cb,target,true);
                });
            }
        }



        //探宝
        lottery(count,cb,target){
            var self = this;
            var argKeys = gc.iface.a_guild_lottery_args;
            var args = {};
            args[argKeys.count] = count;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var cosAct = c_game[gc.id_c_game.guildAct][2];        //消耗贡献值
            var addUpAct = gd.guildPersonalCtrl.get(gc.dsConsts.GuildPersonalEntity.addUpAct);
            var vipInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_vip, gd.userCtrl.getVip());
            var guildPersonalData = gd.guildPersonalCtrl.getData();
            if(addUpAct < cosAct) return mo.showMsg("贡献值不足");
            //if(vipInfo[gc.c_vip_guildLotteryCount]-guildPersonalData[gc.dsConsts.GuildPersonalEntity.lotteryCount]<=0) return mo.showMsg(gc.id_c_msgCode.noTreasure);
            mo.requestWaiting4Server(gc.iface.a_guild_lottery, args, function (data) {
                var userData = data[gc.dsConsts.ExGuildData.userData]||{};
                var guildPersonalData = data[gc.dsConsts.ExGuildData.guildPersonalData]||{};
                var items = data[gc.dsConsts.ExGuildData.items]||{};       //抽奖所得OBJ {itemId:数量，itemId:数量，。。。}
                var bagItems = data[gc.dsConsts.ExGuildData.bagItems]||{};
                var equipBagItems = data[gc.dsConsts.ExGuildData.equipBagItems]||{};

                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                var equipBag = gd.userUtils.getNewEquipBag({},equipBagItems);
                userData[gc.dsConsts.UserEntity.equipBag] = equipBag;
                gd.userCtrl.updateEntity(userData);
                gd.guildPersonalCtrl.updateEntity(guildPersonalData);
                cb.call(target,items);
            });
        }

        _getPropByIndex(index){
            var self = this;
            if(!self._data) return 0;
            var lvl = self.get(gc.dsConsts.GuildEntity.lvl);
            var c_guildLvl = mo.getJSONWithFileName(gc.cfg_c_guildLvl);
            var guildLvlData = c_guildLvl[lvl];
            var props = guildLvlData[gc.c_guildLvl_props];
            var reValue = 0;
            for(var i = 0;i<props.length;i++){
                var locProp = props[i];
                var locIndex = locProp[0];
                var locValue = locProp[1];
                if(locIndex==index){
                    reValue = locValue;
                    break;
                }
            }
            return reValue;
        }
        //获得增加的战力
        getAddCombat(){
            var self = this;
            var c_game = mo.getJSONWithFileName(gc.cfg_c_game);
            var c_guildEnnoble = mo.getJSONWithFileName(gc.cfg_c_guildEnnoble);
            var ennoble = guildPersonalCtrl.getEnnoble();
            var propMult = 0;
            if(c_guildEnnoble[ennoble]){
                propMult = c_guildEnnoble[ennoble][gc.c_guildEnnoble_props]||0;
                propMult = propMult/10000;
            }

            var maxHp = self._getPropByIndex(33)*(1+propMult);
            var attack = self._getPropByIndex(34)*(1+propMult);
            var defence = self._getPropByIndex(35)*(1+propMult);
            var magicDefence = self._getPropByIndex(36)*(1+propMult);
            var critical = self._getPropByIndex(39)*(1+propMult);
            var disCritical = self._getPropByIndex(40)*(1+propMult);
            var dodge = self._getPropByIndex(38)*(1+propMult);
            var hit = self._getPropByIndex(37)*(1+propMult);
            var attackInterval = 500;

            maxHp = Math.floor(maxHp);
            attack = Math.floor(attack);
            defence = Math.floor(defence);
            magicDefence = Math.floor(magicDefence);
            critical = Math.floor(critical);
            disCritical = Math.floor(disCritical);
            dodge = Math.floor(dodge);
            hit = Math.floor(hit);

            var combatMult = c_game[gc.id_c_game.combatMult];
        //参数1：血量参数
            //参数2：攻击参数
            //参数3：物防参数
            //参数4：魔防参数
            //参数5：暴击参数
            //参数6：抗暴参数
            //参数7：闪避参数
            //参数8：命中参数
            //参数9：攻击频率
            var maxHp1 = combatMult[0]/10000;
            var attack1 = combatMult[1]/10000;
            var defence1 = combatMult[2]/10000;
            var magicDefence1 = combatMult[3]/10000;
            var hit1 = combatMult[4]/10000;
            var dodge1 = combatMult[5]/10000;
            var critical1 = combatMult[6]/10000;
            var disCritical1 = combatMult[7]/10000;
            var attackInterval1 = combatMult[8];
            //基础属性战斗力公式
            //console.log(maxHp,maxHp1,attack,attack1,defence,defence1,magicDefence,magicDefence1,critical,critical1,disCritical,disCritical1,dodge,dodge1,hit,hit1,attackInterval,attackInterval1);
            var combat1 = gc.calBaseCombat(maxHp,maxHp1,attack,attack1,defence,defence1,magicDefence,magicDefence1,critical,critical1,disCritical,disCritical1,dodge,dodge1,hit,hit1,attackInterval,attackInterval1);
            combat1 = parseInt(combat1.toString());
            var heroNum = heroCtrl.getList().length;
            return combat1 * heroNum;
        }

        //获取行会副本重置次数
        getCopyResetTimes(){
            var self = this;
            if(self.getData()){
                return self.get(gc.dsConsts.GuildEntity.resetCount) || 0;
            }
            return 0;
        }

    }
    export var guildCtrl:GuildCtrl;
    export var guildCtrl:GuildCtrl = GuildCtrl.getInstance() ;
}
