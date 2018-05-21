/**
 * Created by Sara on 2015/12/4.
 */
module gd {
    export class GuildPersonalCtrl extends mo.DataController {

        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.GuildPersonalEntity;
        }

        initData(data){
            if(!data) return;
            var self = this;
            self.init(data);
        }

        //更新数据
        updateData(data){
            var self = this;
            if(!self._data) return;
            self.updateEntity(data);
        }

        //获取爵位
        getEnnoble() {
            var self = this;
            var ennoble = self.get(gc.dsConsts.GuildPersonalEntity.ennoble)||0;
            return ennoble;
        }

        //获取职位
        getPosition(){
            var self = this;
            var position = self.get(gc.dsConsts.GuildPersonalEntity.position)||3;
            return position;
        }

        //获取公会ID
        getGuildId() {
            var self = this;
            var guildId = self.get(gc.dsConsts.GuildPersonalEntity.guildId)||0;
            return guildId;
        }

        //获取贡献值
        getContributeValue(){
            var self = this;
            var v = self.get(gc.dsConsts.GuildPersonalEntity.guildAct)||0;
            return v;
        }
        //获取累计的贡献
        getSumContribute(){
            var self = this;
            var v = self.get(gc.dsConsts.GuildPersonalEntity.addUpAct)||0;
            return v;
        }

        /***************************/
        //获取贡献每日最大次数,0为不限制
        getActMaxNum(actId){
            var c_guildAct = mo.getJSONWithFileName(gc.cfg_c_guildAct);
            var guildActData = c_guildAct[actId];
            return guildActData[gc.c_guildAct_num];
        }
        //获取次数
        getActNum(actId) {
            var self = this;
            self._calRefreshData();
            var actData = self.get(gc.dsConsts.GuildPersonalEntity.actData)||{};
            var dataArr =  actData[actId]||[];
            return dataArr[0]||0;
        }

        _calRefreshData() {
            var self = this;
            var actLastTime = self.get(gc.dsConsts.GuildPersonalEntity.actLastTime);
            var actData = self.get(gc.dsConsts.GuildPersonalEntity.actData);
            var todayAct = self.get(gc.dsConsts.GuildPersonalEntity.todayAct);
            var noticeCount = self.get(gc.dsConsts.GuildPersonalEntity.noticeCount);
            var exitGuildCount = self.get(gc.dsConsts.GuildPersonalEntity.exitGuildCount);
            var lotteryCount = self.get(gc.dsConsts.GuildPersonalEntity.lotteryCount);
            if (!actLastTime) {
                actLastTime = Date.newDate();
                actData = {};
                todayAct = 0;
                noticeCount = 0;
                exitGuildCount = 0;
                lotteryCount = 0;
                self.set(gc.dsConsts.GuildPersonalEntity.actLastTime,actLastTime);
                self.set(gc.dsConsts.GuildPersonalEntity.actData,actData);
                self.set(gc.dsConsts.GuildPersonalEntity.todayAct,todayAct);
                self.set(gc.dsConsts.GuildPersonalEntity.noticeCount,noticeCount);
                self.set(gc.dsConsts.GuildPersonalEntity.exitGuildCount,exitGuildCount);
                self.set(gc.dsConsts.GuildPersonalEntity.lotteryCount,lotteryCount);
            }
            actLastTime = new Date(actLastTime);
            if (!actLastTime.equalsDay(Date.newDate())) {
                actLastTime = Date.newDate();
                actData = {};
                todayAct = 0;
                noticeCount = 0;
                exitGuildCount = 0;
                lotteryCount = 0;
                self.set(gc.dsConsts.GuildPersonalEntity.actLastTime,actLastTime);
                self.set(gc.dsConsts.GuildPersonalEntity.actData,actData);
                self.set(gc.dsConsts.GuildPersonalEntity.todayAct,todayAct);
                self.set(gc.dsConsts.GuildPersonalEntity.noticeCount,noticeCount);
                self.set(gc.dsConsts.GuildPersonalEntity.exitGuildCount,exitGuildCount);
                self.set(gc.dsConsts.GuildPersonalEntity.lotteryCount,lotteryCount);
            }

        }

        /**
         * 上香
         * @param actId
         * @param cb
         * @param target
         */
        pickAct(actId,cb,target){
            var self = this;
            var argKeys = gc.iface.a_guildPerson_pickAct_args;
            var args = {};
            args[argKeys.actId] = actId;
            mo.requestWaiting4Server(gc.iface.a_guildPerson_pickAct, args, function (data) {
                var guildData = data[gc.dsConsts.ExGuildData.guildData]||{};
                gd.guildCtrl.updateEntity(guildData);
                var userData = data[gc.dsConsts.ExGuildData.userData]||{};
                userCtrl.updateEntityNotShow(userData);
                var guildPersonalData = data[gc.dsConsts.ExGuildData.guildPersonalData]||{};
                self.updateEntity(guildPersonalData);

                //显示获得贡献值
                var c_guildActData = mo.getJSONWithFileNameAndID(gc.cfg_c_guildAct,actId);
                var addAct = c_guildActData[gc.c_guildAct_act]||0;
                var gold = c_guildActData[gc.c_guildAct_gold]||0;
                var str = "";
                if(addAct > 0){
                    str = "贡献值 +"+addAct;
                }
                if(gold > 0){
                    if(addAct > 0) str += " ";
                    str += "金币 +"+gold;
                }
                mo.showMsg(str);
                cb.call(target,data);
            });
        }
    }
    export var guildPersonalCtrl:GuildPersonalCtrl;
    export var guildPersonalCtrl:GuildPersonalCtrl = GuildPersonalCtrl.getInstance() ;
}
