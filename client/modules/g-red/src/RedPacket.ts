/**
 * Created by Administrator on 2016/1/5.
 */
module g_red{
    export class RedPacket extends mo.gui.Dlg{
        moduleParam:IModuleParam.RedPacket;

        tab_type;
        grp_redPacket;
        grp_redRec;
        grp_numInput;

        ico_t1;
        ico_t2;
        label_desc;
        label_myRmb;
        label_sendRmb;
        label_sendRmbInput;
        label_myRmbInput;
        btn_people1;
        btn_people2;
        btn_people3;
        label_say;
        label_shareDesc;

        list_rec;
        _Item_list_rec;
        label_all;
        label_guild;
        label_get;

        btn_rmb3;
        btn_rmb4;


        getItemArr;
        btn_detail;
        btn_confirm;
        label_cannotRed;

        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_rec = RedPacketRecCell;
            //self._Item_list_totalRec = RedPacketTotalRecCell;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            for(var i=0; i<=9; ++i){
                self["btn_"+i].addEventListener(egret.TouchEvent.TOUCH_TAP, self.onTapNum, self);
            }
            self.label_myRmb.text = self.label_myRmbInput.text = gd.userCtrl.getDiamond().toString();
            self.tab_type.selectedIndex = 0;
            self._tap_tab_type();

            self.label_sendRmb.text = "100";
            self.btn_people1.enabled = false;
            if(self.moduleParam){
                self.setData(self.moduleParam.data);
            }
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;//RedEnvelopePersonalEntity

            var addUpServer = data[gc.dsConsts.RedEnvelopePersonalEntity.addUpServer];
            var addUpGuild = data[gc.dsConsts.RedEnvelopePersonalEntity.addUpGuild];
            var addUpGet = data[gc.dsConsts.RedEnvelopePersonalEntity.addUpGet];

            self.label_all.text = addUpServer?addUpServer.toString():"0";
            self.label_guild.text = addUpGuild?addUpGuild.toString():"0";
            self.label_get.text = addUpGet?addUpGet.toString():"0";
            self.checkCount();

        }

        checkCount(){
            var self = this;
            var selectedIndex = self.tab_type.selectedIndex;
            var counts = gd.redEnvelopePersonalCtrl.getDayCount(selectedIndex==0?gc.c_prop.redEnvelopeTypeKey.comRed:gc.c_prop.redEnvelopeTypeKey.guildRed);
            self.label_shareDesc.text = mo.STR.format("VIP%s今日发送次数剩余%s/%s",counts[0], counts[1], counts[2]);
            self.label_shareDesc.visible = (counts[2]>0)

            var vip = gd.userCtrl.getVip();
            var cfg_c_vip = mo.getJSONWithFileName(gc.cfg_c_vip);
            var redType = gc.c_vip_worldCount;
            var canRedVip = 0;

            var selectedIndex = self.tab_type.selectedIndex;
            if(selectedIndex==0){
                redType = gc.c_vip_worldCount;
            }else if(selectedIndex==1){
                redType = gc.c_vip_guildCount;
            }

            for(var key in cfg_c_vip){
                if(cfg_c_vip[key][redType]!=0){
                    canRedVip = parseInt(key);
                    break;
                }
            }
            if(vip<canRedVip){
                self.btn_confirm.visible = false;
                self.label_cannotRed.visible = true;
                self.label_cannotRed.text = canRedVip;
            }else{
                self.btn_confirm.visible = true;
                self.label_cannotRed.visible = false;
            }
        }

        setMoney(value){
            var self = this;
            self.label_myRmb.text = self.label_myRmbInput.text = gd.userCtrl.getDiamond().toString();
            if(value>gd.userCtrl.getDiamond()){
                //value = gd.userCtrl.getDiamond();
                return mo.showMsg(gc.id_c_msgCode.noDiamond);
            }
            self.label_sendRmb.text = value.toString();
        }

        _tap_btn_rmb1(){
            var self = this;
            self.setMoney(100);
        }
        _tap_btn_rmb2(){
            var self = this;
            self.setMoney(500);
        }
        _tap_btn_rmb3(){
            var self = this;
            self.setMoney(800);
        }
        _tap_btn_rmb4(){
            var self = this;
            self.setMoney(1000);
        }

        _tap_btn_people1(){
            var self = this;
            self.btn_people1.enabled = false;
            self.btn_people2.enabled = true;
            self.btn_people3.enabled = true;
        }
        _tap_btn_people2(){
            var self = this;
            self.btn_people2.enabled = false;
            self.btn_people1.enabled = true;
            self.btn_people3.enabled = true;

        }
        _tap_btn_people3(){
            var self = this;
            self.btn_people3.enabled = false;
            self.btn_people1.enabled = true;
            self.btn_people2.enabled = true;
        }

        _tap_btn_dice(){
            var self = this;
            var curRmb = gd.userCtrl.getDiamond();
            var ranRmb;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.redEnvelopeCfg);
            var selectedIndex = self.tab_type.selectedIndex;
            var maxNum = selectedIndex==0?gameInfo[3]:gameInfo[4];
            if(curRmb<=20){
                ranRmb = curRmb;
            }else if(curRmb>=maxNum){
                ranRmb = 20+Math.ceil(Math.random()*(maxNum-20));
            }else{
                ranRmb = 20+Math.ceil(Math.random()*(curRmb-20));
            }
            self.label_sendRmb.text = ranRmb.toString();
        }

        _tap_btn_confirm(){
            var self = this;
            var type = self.tab_type.selectedIndex==0?gc.c_prop.redEnvelopeTypeKey.comRed:gc.c_prop.redEnvelopeTypeKey.guildRed;
            var amount = parseInt(self.label_sendRmb.text);
            var personNum = !self.btn_people1.enabled?5:!self.btn_people2.enabled?10:20;
            var wish = self.label_say.text;

            var spItemId = gc.c_prop.spItemIdKey.diamond;
            gd.redEnvelopeCtrl.sendRedEnvelope(type,spItemId,amount,personNum,wish, function(){
                self.setData(gd.redEnvelopePersonalCtrl.getData());
                self.checkCount();
                self.label_myRmb.text = self.label_myRmbInput.text = gd.userCtrl.getDiamond().toString();
                //gd.redEnvelopePersonalCtrl.getInfo(function(data){
                //    data;
                //}, this);
                mo.showMsg(gc.id_c_msgCode.packetSuccess);
            }, self);
        }

        _tap_label_sendRmb(){
            var self = this;
            self.label_sendRmbInput.text = self.label_sendRmb.text;
            self.grp_numInput.visible = true;
        }

        _tap_btn_ok(){
            var self = this;
            self.setMoney(parseInt(self.label_sendRmbInput.text));
            self.grp_numInput.visible = false;
        }
        _tap_btn_del(){
            var self = this;
            var value = parseInt(self.label_sendRmbInput.text);
            value = Math.floor(value/10);
            self.label_sendRmbInput.text = value.toString();
        }

        _tap_btn_detail() {
            var self = this;
            var data = self.data;//RedEnvelopePersonalEntity
            RedPacketDetail.create().setData({data:data}).show();
        }


        onTapNum(e){
            var self = this;
            var target = e.currentTarget;
            var btns = [];
            for(var i=0; i<=9; ++i){
                btns.push(self["btn_"+i]);
            }
            var index = btns.indexOf(target);
            self.label_sendRmbInput.text += index;
            var value = parseInt(self.label_sendRmbInput.text);
            self.label_sendRmbInput.text = value.toString();
        }

        _data_list_rec():any[]{
            var self = this;
            var data = self.data;//RedEnvelopePersonalEntity
            var getData = data[gc.dsConsts.RedEnvelopePersonalEntity.getData];
            return getData;
        }

        //_data_list_totalRec():any[]{
        //    var self = this;
        //    var data = self.data;//RedEnvelopePersonalEntity
        //    var getData = data[gc.dsConsts.RedEnvelopePersonalEntity.getData];
        //    return getData;
        //}


        _tap_tab_type(){
            var self = this;
            var selectedIndex = self.tab_type.selectedIndex;
            self.grp_numInput.visible = false;
            if(selectedIndex==0){
                self.grp_redPacket.visible = true;
                self.grp_redRec.visible = false;
                self.ico_t1.visible = true;
                self.ico_t2.visible = false;
                self.btn_rmb3.visible = true;
                self.btn_rmb4.visible = false;
                self.label_desc.text = "向所有人发送随机元宝数量红包，并将消息显示在系统公告中，领取红包的人都将在聊天频道发送此消息。红包将在15秒内送达。";
            }else if(selectedIndex==1){
                self.grp_redPacket.visible = true;
                self.grp_redRec.visible = false;
                self.ico_t1.visible = false;
                self.ico_t2.visible = true;
                self.btn_rmb3.visible = false;
                self.btn_rmb4.visible = true;
                self.label_desc.text = "向行会成员发送随机元宝数量红包，并将消息显示在系统公告中，领取红包的人都将在聊天频道发送此消息。红包将在15秒内送达。";
            }else if(selectedIndex==2){
                self.grp_redPacket.visible = false;
                self.grp_redRec.visible = true;
                self.refreshList("list_rec");
            }
            self.checkCount();
        }

        _tap_btn_recharge(){
            mo.moduleMgr.runModule(g_consts.moduleId.recharge);
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = RedPacket;
        moduleCfgItem.fullScr = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            gd.redEnvelopePersonalCtrl.getInfo(function(data){
                moduleParam.data = data;
                cb();
            }, this);
        });
    });
}