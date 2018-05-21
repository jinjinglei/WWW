/**
* Created by huanghaiying on 14/12/16.
*/
module gd {
    export class ServerInfoCtrl extends mo.DataController {
        static __className = "ServerDataCtrl";

        _serverList:any;
        _myServerList:any;
        _selectIndex:any;
        _selectServer:any;
        _channelServerList:any;
        _initProp(){
            super._initProp();

            var self = this;
            self._serverList = [];
            self._myServerList = [];
            self._channelServerList = [];
        }

        //设置选择
        setSelectIndex(index){
            this._selectIndex = index;
        }
        //获取选择
        getSelectIndex(){
            return this._selectIndex;
        }

        //设置选择
        setSelectServer(index){
            this._selectServer = index;
        }
        //获取选择
        getSelectServer(){
            return this._selectServer;
        }


        //进来前必须调用
        getInfo(cb, target){
            var self = this;

            var args = {};
            var argsKeys = gc.iface.h_serverInfo_getServerList_args;
            var accountStatus = accountCtrl.getStatus();
            var isTest = 0;
            if(accountStatus==3) isTest = 1;
            args[argsKeys.isTest] = isTest;

            var accountId = accountCtrl.getId();
            mo.request4Http(gc.iface.h_serverInfo_getServerList, args, function(serverList){
                self._serverList = serverList;
                self._channelServerList = self._calChannel(serverList);
                var argsObj = gc.iface.h_serverInfo_getUserServers_args, args = {};

                args[argsObj.accountId] = accountId;

                mo.request4Http(gc.iface.h_serverInfo_getUserServers, args, function(myServerList){
                    self._myServerList = myServerList;
                    cb.call(target) ;
                });
            });
        }

        _calChannel(serverList){
            var exList = [];//当前特殊
            var fixList = [];//混服
            var appId =  mo_channel.getCurChannel().channel();
            for(var i = 0;i<serverList.length;i++){
                var locServer = serverList[i];
                var locAppId = locServer[gc.dsConsts.ServerInfoEntity.appId];
                if(!locAppId){
                    fixList.push(locServer);
                }
                if(locAppId&&appId==locAppId){
                    exList.push(locServer);
                }
            }
            if(exList.length>0){
                return exList;
            }else{
                return fixList;
            }
        }


        /**
         * 获取左边标题
         * @returns ["标题","标题"]
         */
        getTitleList(){
            var self = this;
            var titleArr = [];

            for(var i =0;i<100;i++){
                var locRange = self._getRang(i);
                var locStart = locRange[0], locEnd = locRange[1];
                var locTitle = locStart+"-"+locEnd+"服";
                titleArr.push(locTitle);
                if(locEnd>=self._channelServerList.length) break;
            }
            titleArr.push("登录过的");

            return titleArr;
        }

        /**
         * 获取右边列表
         * @param index 标题列数组下标
         * @returns [gc.dsConsts.ServerInfoEntity,....]
         */
        getServerList(index){
            var self = this;
            if(index==0) return self._myServerList.reverse();

            var locRange = self._getRang(index-1);
            var locStart = locRange[0], locEnd = locRange[1];

            var reList = [];
            for(var i = locStart-1;i<locEnd;i++){
                var locData = self._channelServerList[i];
                if(!locData) break;
                reList.push(locData);
            }

            return reList;
        }

        /**
         * 获取最新的服务器信息
         * @returns gc.dsConsts.ServerInfoEntity
         */
        getNewServer(){
            return this._channelServerList[this._channelServerList.length-1];
        }

        /**
         * 获取最新的未关闭的服务器Index , 没有为-1
         * @returns [列表idx, 真实idx]
         */
        getNewGoodServerIndex(){
            var self = this;
            var list = self.getNewServers();
            for (var i = list.length-1; i >= 0; i--) {
                var locData = list[i];
                if(!locData[gc.dsConsts.ServerInfoEntity.isClose]){
                    return [i, self._channelServerList.indexOf(locData)];
                }
            }
            return [-1, -1];
        }

        /**
         * 获取最新的服务器列表
         * @returns [gc.dsConsts.ServerInfoEntity ]
         */
        getNewServers():any[]{
            var self = this;
            if(!self._channelServerList)return [];
            var size = 6;
            if(self._channelServerList.length < size)return self._channelServerList.slice(-self._channelServerList.length);
            return self._channelServerList.slice(-size);
        }

        /**
         * 获取服务器详细
         * @param id 服务器id
         * @returns gc.dsConsts.ServerInfoEntity
         */
        getServerInfoById(id){
            var self = this;
            for (var i = 0; i < self._serverList.length; i++) {
                var locData = self._serverList[i];
                if(locData[gc.dsConsts.ServerInfoEntity.id] == id){
                    return locData;
                }
            }
            return self._channelServerList[0];
        }

        /**
         * 获取服务器详细
         * @param index 服务器index
         * @returns gc.dsConsts.ServerInfoEntity 或者 null
         */
        getServerByIndex(index){
            var self = this;
            if(index >=0 && index < self._channelServerList.length){
                return self._channelServerList[index];
            }
            return null;
        }

        //获取范围 1-20
        private _getRang(index){
            //获取范围
            var start = index*20+1;
            var end = index*20+20;
            return [start,end];
        }

    }

    export var serverInfoCtrl:ServerInfoCtrl = ServerInfoCtrl.getInstance();
}