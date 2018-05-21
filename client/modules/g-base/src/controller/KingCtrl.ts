/**
 * Created by Administrator on 2016/1/9.
 */

module gd {
    export class KingCtrl extends mo.DataController {
        public static ON_KING_BUFF_CHANGE:String = "ON_KING_BUFF_CHANGE";
        _isOpenBuff:boolean;
        _initProp() {
            super._initProp();
            this.DATA_KEY = gc.dsConsts.King;
            this._isOpenBuff = false;
        }

        /**
         * 获取数据
         * @param cb
         * @param target
         */
        getInfo(cb, target) {
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_king_getInfo, {}, function (data) {
                self.init(data);
                if (cb) cb.call(target,data);
            });
        }

        //设置是否开启
        setIsOpenBuff(value) {
            var self = this;
            var oldValue = self._isOpenBuff;
            if(self._isOpenBuff!=value){
                self._isOpenBuff = value;
                self.pushNotify(self.__class.ON_KING_BUFF_CHANGE);
            }
        }

        //是否开启buff
        isOpenBuff(){
            return this._isOpenBuff;
        }

        //是否是霸主
        isKing():boolean{
            var self = this;
            var myId = userCtrl.getId();
            var kingId = self.get(gc.dsConsts.King.kingId);
            if(myId==kingId)
                return true;
            else
                return false;
        }

        //霸主是否有加入行会
        isKingInGuild():boolean{
            var self = this;
            var kingGuildId = self.get(gc.dsConsts.King.kingGuildId);
            if(!kingGuildId) return false;
            return true;
        }

        //个人领取福利次数
        getMyWelfare(){
            return userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.getKingWelfare);
        }

        //个人膜拜次数
        getMyWorshipNum(){
            return userCtrl.getTodayCount(gc.c_prop.userRefreshCountKey.worShip);
        }

        //获取buff剩余cd秒数
        getBuffReCd(){
            var self = this;
            var buffEndTime = self.get(gc.dsConsts.King.buffEndTime);
            if(!buffEndTime) return 0;
            buffEndTime = Date.newDate(buffEndTime);
            var reSeconds = Date.newDate().getSecondsBetween(buffEndTime);
            if(reSeconds<0) reSeconds = 0;
            return reSeconds;
        }

        //膜拜
        worship(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_king_worship, {}, function (data) {
                var king = data[gc.dsConsts.ExKing.king];
                self.updateEntity(king);
                var userData = data[gc.dsConsts.ExKing.userData];
                var bagItems = data[gc.dsConsts.ExKing.bagItems];
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                userCtrl.updateEntity(userData);
                if (cb) cb.call(target);
            });
        }

        //领取福利
        receiveWelfare(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_king_receiveWelfare, {}, function (data) {
                var userData = data[gc.dsConsts.ExKing.userData];
                var bagItems = data[gc.dsConsts.ExKing.bagItems];
                var bag = gd.userUtils.getNewBag({},bagItems);
                userData[gc.dsConsts.UserEntity.bag] = bag;
                userCtrl.updateEntity(userData);
                if (cb) cb.call(target);
            });
        }

        //开启
        openBuff(cb,target){
            var self = this;
            mo.requestWaiting4Server(gc.iface.a_king_openBuff, {}, function (data) {
                self.updateEntity(data);
                if (cb) cb.call(target);
            });
        }

        getBuffOpenNum(){
            var self = this;
            var buffOpenTime = self.get(gc.dsConsts.King.buffOpenTime);
            var buffOpenNum = self.get(gc.dsConsts.King.buffOpenNum);
            buffOpenTime = Date.newDate(buffOpenTime);
            if (buffOpenTime && !buffOpenTime.equalsDay(Date.newDate())) {
                buffOpenTime = Date.newDate();
                buffOpenNum = 0;
            }
            return buffOpenNum;
        }

        //获取霸主数据
        getKingData(){
            var self = this;
            var data;
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.king);

            data =  {
                kingGuildName:self.get(gc.dsConsts.King.kingGuildName),
                kingVip:self.get(gc.dsConsts.King.kingVip),
                kingLvl:self.get(gc.dsConsts.King.kingLvl),
                kingName:self.get(gc.dsConsts.King.kingName),
                beWorshipNum:self.get(gc.dsConsts.King.beWorshipNum),//被膜拜的次数
                beWorshipCount:self.get(gc.dsConsts.King.beWorshipCount),//被膜拜的总次数
                buffOpenNum:self.getBuffOpenNum(),
                avatarData:self.get(gc.dsConsts.King.kingHeroDisplay),
                buffEndCD:self.getBuffReCd(),
                buffOpenNeedNum:cfg[1],//开启buff  所需要的膜拜次数
                dayBuffOpenNum:cfg[3]  //每日可开启BUFF次数
            };

            return data;
        }

        //个人和霸主是否在同一个行会
        isInSameGuild():boolean {
            var self = this;
            if(!self.isKingInGuild()) return false;
            return self.get(gc.dsConsts.King.kingGuildId) == self.get(gc.dsConsts.King.myGuildId);
        }

        //获取福利数据
        getWelfareItemList(){
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.king);

            var str = cfg[2];
            var itemStrs = str.split(";");
            var items = [];
            for(var i=0; i<itemStrs.length; ++i){
                var is = itemStrs[i].split(',');
                items.push({itemId:is[0],count:is[1]});
            }
            return items;
        }

        //膜拜可以莫得的经验
        getWorshipItemList(){
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.king);
            var str = cfg[0];
            var itemStrs = str.split(";");
            var items = [];
            for(var i=0; i<itemStrs.length; ++i){
                var is = itemStrs[i].split(',');
                items.push({itemId:is[0],count:is[1]});
            }
            return items;
        }
        getBuffData(){
            var self = this;
            var buffId = self.getKingBuffId();
            var t_buff = mo.getJSONWithFileNameAndID(gc.cfg_t_otherBuff,buffId);
            if(!t_buff) return null;
            var data = {
                name:t_buff[gc.t_otherBuff_name],
                addHurt:t_buff[gc.t_otherBuff_addHurt],
                conTime:t_buff[gc.t_otherBuff_conTime] / 60,
                icon:t_buff[gc.t_otherBuff_icon],
                des:t_buff[gc.t_otherBuff_des]
            }
            return data;
        }
        getKingBuffId(){
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.king);
            return cfg[4];
        }
        getCloakProAdd(){
            var cfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.challengeCupCfg);
            return cfg[11];
        }
    }
    export var kingCtrl:KingCtrl;
}
