/* hd 二次打开兄弟
 */

module g_mid {

    export class FriendDialog
    extends mo.gui.Dlg
    {
        list_items:egret.gui.List;
        _Item_list_items;

        label_stat;
        label_value;
        sk_null;

        _initProp() {
            super._initProp();
            
            var self = this;
            self._Item_list_items = FriendListItem;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

            // 翻页
            (<any>self.list_items).scroller.addEventListener(egret.Event.COMPLETE, self._cbScrolled, self);
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var info = self.data.info;
            var items = self.data.items;

            self.label_stat.text = '兄弟人数:' + info[gc.dsConsts.BonusShareData.relationCount] + '\n' + '累计元宝:' + info[gc.dsConsts.BonusShareData.amountDraw];
            self.label_value.text = '目前可领取:' + info[gc.dsConsts.BonusShareData.balance] + '元宝';

            self.reloadData();
        }

        reloadData() {
            var self = this;
            var items = self.data.items;
            if (items.length == 0) {
                self.sk_null.visible = true;
                return true;
            }
            self.sk_null.visible = false;

            // 加载数据
            self.refreshList("list_items");
        }

        _data_list_items():any[] {
            var self = this;
            return self.data.items;
        }

        private _loadingNextPage = false;
        private _cbScrolled(e:egret.Event) {
            var self = this;
            if (self._loadingNextPage)
                return;
            var scl = e.currentTarget;
            var now = scl.scrollTop;
            var max = scl.getMaxScrollTop();
            if (now >= max) {
                // 开始加载下一个
                self._loadingNextPage = true;

                var argKeys = gc.iface.a_bonus_getInfo_args;
                var args = {};
                args[argKeys.lastId] = self.data.lastId;
                mo.requestWaiting4Server(gc.iface.a_bonus_getInfo, args, function (data) {
                    var rels = data[gc.dsConsts.BonusInfo.relations];
                    if (rels == null)
                        rels = [];
                    if (rels.length) {
                        var lid = FriendDialog.getLastId(rels);
                        if (lid > self.data.lastId)
                            self.data.lastId = lid;
                        // 加入数据
                        self.data.items = self.data.items.concat(rels);
                        // 刷新
                        self.refreshList("list_items");
                        process.nextTick(function(){
                            scl.setScrollTop(now);
                        });
                        // 如果刷到了最后一页，则不需要重置loading状态放置多次无用请求
                        self._loadingNextPage = false;
                    }
                });            
            }
        }

        _tap_btn_reinvite() {
            FriendDialog.Invite();
        }

        _tap_btn_get() {
            var self = this;
            var info = self.data.info;
            var val = info[gc.dsConsts.BonusShareData.balance];
            if (val <= 0)
                return;
            
            // 调用领取金币的接口
            mo.requestWaiting4Server(gc.iface.a_bonus_draw, {}, function(data) {
                var added = data[gc.dsConsts.BonusDrawResult.added];
                var total = data[gc.dsConsts.BonusDrawResult.total];
                self.label_value.text = '目前可领取:0元宝';

                // 增加当前可以领取的数目
                info[gc.dsConsts.BonusShareData.amountDraw] += added;
                self.label_stat.text = '兄弟人数:' + info[gc.dsConsts.BonusShareData.relationCount] + '\n' + '累计元宝:' + info[gc.dsConsts.BonusShareData.amountDraw];
                
                // 提示
                g_base.BaseShowMsg.create().setData({msg:'领取成功', interval:2}).show();
                // 更新数据
                gd.userCtrl.set(gc.dsConsts.UserEntity.diamond.toString(), total);
            });
        }

        _tap_btn_help() {
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_help, 101);
            g_base.BaseShowMsg.create().setData({msg:info[gc.c_help_helpText]}).show();
        }

        _tap_btn_break() {
            var self = this;
            self.close();
            FriendBreakDialog.create().setData(self.data).show();
        }

        static getLastId(items):number {
            var lastId = 0;
            if (items == null)
                return lastId;
            items.forEach(function(item) {
                var id = item[gc.dsConsts.BonusRelationData.id];
                lastId = Math.max(id, lastId);
            }, this);
            return lastId;
        }

        static Open() {
            var argKeys = gc.iface.a_bonus_getInfo_args;
            var args = {};
            args[argKeys.lastId] = 0;
            // 从服务器上获得是第一次么
            mo.requestWaiting4Server(gc.iface.a_bonus_getInfo, args, function (data) {
                var info = data[gc.dsConsts.BonusInfo.shareInfo];                
                var rels = data[gc.dsConsts.BonusInfo.relations];
                if (rels == null)
                    rels = [];

                if (info[gc.dsConsts.BonusShareData.isFirst]) {
                    FriendFirstInvite.create().show();
                } else {
                    FriendDialog.create().setData({info:info,
                                                   items:rels,
                                                   lastId:FriendDialog.getLastId(rels)}).show();
                }
            });            
        }

        static Invite() {            
            // 调用分享, 从服务器获得链接
            var argKeys = gc.iface.a_bonus_share_args;
            var args = {};
            args[argKeys.serverIndexId] = gd.userCtrl.get(gc.dsConsts.UserEntity.serverIndexId);
            // 从服务器上获得是第一次么
            mo.requestWaiting4Server(gc.iface.a_bonus_share, args, function (data) {
                var url = data[gc.dsConsts.BonusShareUrl.url];
                var gif = data[gc.dsConsts.BonusShareUrl.gifted];
                console.info("邀请好友的链接: " + url);
                mo_channel.getCurChannel().desktopShare(url, function(suc:boolean) {
                    // 通知服务器发送奖品
                    if (suc && !gif)
                        mo.requestWaiting4Server(gc.iface.a_bonus_sendShareGift, {}, function(data) {});
                });
            });            
        }
    }
    
}