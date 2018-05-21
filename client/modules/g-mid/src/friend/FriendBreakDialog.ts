/* hd 割袍断义
 */

module g_mid {

    export class FriendBreakDialog
    extends mo.gui.Dlg
    {
        list_items:egret.gui.List;
        _Item_list_items;
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
            self.reloadData();
        }

        reloadData() {
            var self = this;
            var items = self.data.items;
            if (items == null || items.length == 0) {
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

        _click_list_items(e:egret.gui.ListEvent) {
            var self = this;
            var item = e.item;
            
            // 弹出删除的操作
            var name = item[gc.dsConsts.BonusRelationData.nickName];
            var alertText = "是否解除和[ubb color=#9b570b]" + name + "[/ubb]的兄弟关系?[/br]一旦解除关系，将不再享受兄弟之间的任何福利";
            
            FriendMsgAlert.create().setData({
                callback: function () {
                    // 从 items中移除删掉的，再刷新
                    var id = item[gc.dsConsts.BonusRelationData.userId];
                    for (var i = 0; i < self.data.items.length; ++i) {
                        var each = self.data.items[i];
                        var eid = each[gc.dsConsts.BonusRelationData.userId];
                        if (eid == id) {
                            // 调用接口
                            var argKeys = gc.iface.a_bonus_breakRelation_args;
                            var args = {};
                            args[argKeys.inviteeUserId] = eid;
                            mo.requestWaiting4Server(gc.iface.a_bonus_breakRelation, args, function(data) {
                                // 删除
                                self.data.items.splice(i, 1);
                                // 重新加载
                                self.refreshList("list_items");
                            });                            
                            break;
                        }
                    }
                }, msg:alertText, icon:"tit_txt_xiongdi_break"
            }).show();
        }
    }
    
}