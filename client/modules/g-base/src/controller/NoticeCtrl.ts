/**
 * Created by Administrator on 2015/5/27.
 */

module gd {
    export class NoticeCtrl extends mo.DataController {
        //static _noticeListDic:any = {};//{"1":[时间，数据]}
        //static _cacheMinute:number = 5;
        static _noticeList:any = [];

        _initProp() {
            super._initProp();
        }

        /**
         * 获取某类型公告的title
         * @param cb
         * @param target
         * @returns [[gc.dsConsts.NoticeEntity],[gc.dsConsts.NoticeEntity],...]
         */
        static getTpyeNotice(type){
            var self = this;
            var returnArr = [];
            var noticeList = NoticeCtrl._noticeList;
            for(var i = 0;i <noticeList.length;i++){
                if(noticeList[i][gc.dsConsts.NoticeEntity.iconType] == type) returnArr.push(noticeList[i]);
            }
            return returnArr;
        }

        /**
         * 获取公告列表
         * @param cb
         * @param target
         * @returns [gc.dsConsts.NoticeEntity]
         */
        static getList( cb, target){
            //var noticeData = NoticeCtrl._noticeListDic[1];
            //if(noticeData){
            //    var time:Date = noticeData[0];
            //    var list = noticeData[1];
            //    if(time.clone().addMinutes(NoticeCtrl._cacheMinute).isAfter(Date.newDate())){
            //        return cb.call(target,list);
            //    }
            //}
            mo.requestWaiting4Server(gc.iface.h_notice_getList, {}, function (noticeList) {
                NoticeCtrl.getNewOne(function(data){
                    data[gc.dsConsts.NoticeEntity.iconType] = gc.c_prop.noticeIconTypeKey.logon;
                    noticeList.unshift(data);
                    //var time:Date = Date.newDate();
                    //NoticeCtrl._noticeListDic[1] = [time,noticeList];
                    NoticeCtrl._noticeList = noticeList;
                    if (cb) cb.call(target,noticeList);
                },this);
            });
        }

        /**
         * 获取最新的公告
         * @param cb
         * @param target
         * @returns gc.dsConsts.NoticeEntity
         */
        static getNewOne(cb, target) {
            /*hd { 直接访问地址
            mo.requestWaiting4Http(gc.iface.h_notice_getNewOne, {}, function (data) {

                if (cb) cb.call(target,data);
            });
            */

            var req = new egret.HttpRequest();
            req.responseType = egret.HttpResponseType.TEXT;
            req.addEventListener(egret.Event.COMPLETE, function(e:egret.Event) {
                var req = <egret.HttpRequest>e.currentTarget;
                var rsp = req.response;
                var obj = JSON.parse(rsp);
                if(obj && obj.m){
                    gd.chatCtrl.newChannelNotice(obj.m);
                }
                if (cb)
                    cb.call(target, obj.v);
            }, this);
            
            var srvid;
            if (gd.userCtrl == null)
                srvid = gd.serverInfoCtrl.getSelectIndex();
            else
                srvid = gd.userCtrl.get(gc.dsConsts.UserEntity.serverIndexId);
            
            var openid = gd.accountCtrl.get(gc.dsConsts.AccountEntity.sdkData).open_id;
            req.open('http://gc.hgame.com/public/getnotice/gameid/100220/groupid/' + srvid + '/openid/' + openid, egret.HttpMethod.GET);
            req.send();
        }
            
    }
}