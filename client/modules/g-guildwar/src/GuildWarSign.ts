/**
 * Created by Administrator on 2016/4/8.
 */
module g_guildwar {
    export class GuildWarSign extends mo.gui.Layer {
        list_sign;
        _Item_list_sign;
        label_timeSign;
        label_timeActive;
        label_combat;
        label_myGuildRank;
        label_myRank;
        label_myGuildNo;
        label_myNo;
        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_sign = GuildWarSignCell;
            self.registerClassByKey(gd.GuildWarCtrl, gd.GuildWarCtrl.ON_GUILD_OPEN_CHANGE, function(){
                if(gd.guildWarCtrl.isOpening()){
                    gd.guildWarCtrl.enter(function() {
                        async.parallel([
                            function(cb1){
                                gd.guildWarCtrl.getInfo(function(data){
                                    cb1(null, data);
                                }, self);
                            },
                            function(cb1){
                                gd.guildWarCtrl.getGuildList(function(data){
                                    cb1(null, data);
                                }, self);
                            }
                        ],function(err, data){
                            gd.guildWarCtrl.getWarDefenceData(function(data){
                                GuildWarDef.create().setData({defData:data}).show();
                            },self);
                        });
                    },self);
                }
            });
        }

        dataChanged(){
            super.dataChanged();
            var self = this;

            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
            var cfgData = gd.guildWarCtrl.getCfgData();
            var signData = cfgData[0];
            var activeData = cfgData[1];
            self.label_timeSign.text = [signData[0], signData[1], signData[2]>9?signData[2]:"0"+signData[2], signData[3], signData[4], signData[5]>9?signData[5]:"0"+signData[5]];
            self.label_timeActive.text = [activeData[0], activeData[1], activeData[2]>9?activeData[2]:"0"+activeData[2], activeData[3]>9?activeData[3]:"0"+activeData[3]];
            self.label_combat.text = self.data.lv;
            var lastMyData = gd.guildWarCtrl.getLastMyData();
            if(lastMyData[3]){
                self.label_myGuildNo.visible = true;
                self.label_myGuildNo.text = "结算中";
                self.label_myGuildRank.text = "";
            }else if(lastMyData[1]==null){
                self.label_myGuildRank.text = "";
                self.label_myGuildNo.visible = true;
                self.label_myGuildNo.text = "未参与";
            }else{
                self.label_myGuildRank.text = gc.c_prop.guildGroup[lastMyData[0]]+"组 第"+lastMyData[1]+"名";
                self.label_myGuildNo.visible = false;
            }

            if(lastMyData[3]){
                self.label_myNo.visible = true;
                self.label_myNo.text = "结算中";
                self.label_myRank.text = "";
            }else if(lastMyData[2]==null){
                self.label_myRank.text = "";
                self.label_myNo.visible = true;
                self.label_myNo.text = "未参与";
            }else{
                self.label_myRank.text = gc.c_prop.guildGroup[lastMyData[0]]+"组 第"+lastMyData[2]+"名";
                self.label_myNo.visible = false;
            }

            self.refreshList("list_sign");
        }
        getHourStr(hour){
            return (hour>9?hour:"0"+hour)+":00";
        }

        _data_list_sign():any[]{
            var self = this;
            var ary = [];
            for(var i=gc.c_prop.guildGroupKey.diamond; i<=gc.c_prop.guildGroupKey.hGold; ++i){
                ary.push([i, self.data.sign]);
            }

            return ary;
        }

        _tap_btn_back(){
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        }

        _tap_btn_help(){
            var self = this;
            g_base.BaseShowTip.create().setData({id: 63}).show();
        }
    }
}