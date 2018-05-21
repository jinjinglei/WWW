/**
 * Created by Administrator on 2015/11/2.
 */
module g_mid{
    export class BindPhone extends mo.gui.Dlg{
        grp_items;

        _initProp(){
            super._initProp();
            var self = this;
        }

        _tap_btn_goBind(){
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.bindMobile(function(isSucc){
                if(isSucc){
                    gd.userCtrl.getBindPhoneReward(function(){
                        mo.showMsg(gc.id_c_msgCode.rewardMail);
                    }, self);
                    self.close();
                }
            }, self);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.otherReward);
            var str = gameCfg[1];
            var itemStrs = str.split(",");
            var items = [];
            for(var i=0; i<itemStrs.length; ++i){
                var it = itemStrs[i].split(':');
                items.push({itemId:it[0],count:it[1]});
            }
            uiHelper.setItemsGrp(self.grp_items,items);
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = BindPhone;
        moduleCfgItem.fullScr = true;
        moduleCfgItem.notOwnRes = true;
        moduleCfgItem.onValid(function(){
            var ch = mo_channel.getCurChannel();
            //领过奖了就不弹了
            return (ch.__class.CHANNEL_ID == 10005) && (!gd.userCtrl.isGetBindPhoneReward());
        });
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            var ch = mo_channel.getCurChannel();
            ch.isBindMobile(function(isOpen, isBind){
                if(!isOpen) return cb("noNeedOpen");
                if( isBind && !gd.userCtrl.isGetBindPhoneReward()){//检查一下已绑但是没有领奖的情况
                    gd.userCtrl.getBindPhoneReward(function(){}, this);
                }
                cb((isBind)? 'noNeedOpen' : null);//绑定过且已领奖了就不弹了
            }, this);
        });
    });
}