/**
 * Created by Administrator on 2016/4/8.
 */
module g_guildwar {
    export class GuildWarDefSetting extends mo.gui.Dlg {
        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;

            self.registerClassByKey(gd.GuildWarCtrl, gd.GuildWarCtrl.ON_GUILD_DEF_UPDATE, function(){
                gd.guildWarCtrl.getWarDefenceData(function(data){
                    self.data.defData = data;
                    self.dataChanged();
                },self);
            });
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            for(var i=0; i<4; ++i){
                var btnUp = self["btn_defUp"+i];
                var btnDown = self["btn_defDown"+i];
                var bar_hpDef = self["bar_defHp"+i];

                bar_hpDef.labelFunction = function(a, b){
                    return "城门生命："+(a+"/"+b);
                }

                btnUp.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onUpClick, self);
                btnDown.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onDownClick, self);
            }
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var defData = self.data.defData;

            self.updateDefDoors(defData[gc.dsConsts.GuildWarData.doorList]);
        }

        updateDefDoors(doors){
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
            var totalHp = gameInfo[1];
            for(var i=0; i<4; ++i){
                var data = doors[i];//gc.dsConsts.GuildWarDoor
                //{door:1,hp:2,userId:3,userName:4,userIcon:5,isBreak:6}
                var door = data[gc.dsConsts.GuildWarDoor.door];
                var name = data[gc.dsConsts.GuildWarDoor.userName];
                var icon = data[gc.dsConsts.GuildWarDoor.userIcon];
                var isBreak = data[gc.dsConsts.GuildWarDoor.isBreak];
                var hp = data[gc.dsConsts.GuildWarDoor.hp];
                var userId = data[gc.dsConsts.GuildWarDoor.userId];
                var isChair = gd.guildPersonalCtrl.getPosition()==gc.c_prop.guildPostKey.chairman;
                var btnUp = self["btn_defUp"+door];
                var btnDown = self["btn_defDown"+door];
                var lable_name = self["label_defName"+door];
                var ico_face = self["ico_defFace"+door];
                var ico_break = self["ico_defBreak"+door];
                var bar_hp = self["bar_defHp"+door];
                var icoNoRole = self["ico_noRole"+i];

                ico_break.visible = isBreak;
                bar_hp.maximum = totalHp;
                bar_hp.value = hp;
                icoNoRole.visible = btnUp.visible = btnDown.visible = false;
                if(!isBreak && userId){
                    btnDown.visible = isChair||userId==gd.userCtrl.getId();
                    lable_name.text = name||"";
                    ico_face.source = uiHelper.getHeroIcon(icon, 0);
                }else{
                    if(!isBreak){
                        icoNoRole.visible = true;
                        btnUp.visible = !gd.guildWarCtrl.get(gc.dsConsts.MyGuildWarData.isDefence);
                    }
                    lable_name.text = "";
                    ico_face.source = null;
                }
            }
        }

        onUpClick(e){
            var self = this;
            for(var i=0; i<4; ++i) {
                var grp_rob = self["btn_defUp" + i];
                if(grp_rob == e.currentTarget) break;
            }

            gd.guildWarCtrl.upDoor(i, function(){
                gd.guildWarCtrl.getWarDefenceData(function(data){
                    self.data.guildWarDef.data.defData = self.data.defData = data;
                    self.dataChanged();
                    self.data.guildWarDef.dataChanged();
                },self);
            },self);
        }
        onDownClick(e){
            var self = this;
            for(var i=0; i<4; ++i) {
                var grp_rob = self["btn_defDown" + i];
                if(grp_rob == e.currentTarget) break;
            }

            gd.guildWarCtrl.downDoor(i, function(){
                gd.guildWarCtrl.getWarDefenceData(function(data){
                    self.data.guildWarDef.data.defData = self.data.defData = data;
                    self.dataChanged();
                    self.data.guildWarDef.dataChanged();
                },self);
            },self);
        }

        //_tap_btn_help(){
        //    var self = this;
        //    var selectedIndex = self.tab_btn.selectedIndex;
        //    if (selectedIndex == 0) {
        //        var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildWar);
        //        g_base.BaseShowTip.create().setData({id: 64, param1: gameInfo[2], param2: gameInfo[3]}).show();
        //    } else if (selectedIndex == 1) {
        //        g_base.BaseShowTip.create().setData({id: 65}).show();
        //    }
        //}
    }
}