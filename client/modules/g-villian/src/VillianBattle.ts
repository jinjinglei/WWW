/**
 * Created by Zhuang on 2016/7/4.
 */
module g_villian{
    export class VillianBattle extends mo.gui.Dlg{
        label_name;
        label_level;

        ico_avatar;
        //label_fightName;
        label_vipLv;
        grp_vip;
        ico_title;
        pkUser;
        label_guild;
        list_items:egret.gui.List;
        _Item_list_items;
        curSoul:g_comp.Ico_Soul;
        curShowSoul:g_comp.Ico_Soul
        _initProp(){
            var self = this;
            super._initProp();
            self._Item_list_items = VillianHeroCell;

        }
        _childrenCreated(){
            super._childrenCreated();
            this.outsideClosable = true;
            var self = this;
            self.ico_avatar.setData({clothesID:null,weaponID:null,wingID:null,sex:0,isKing:false});
        }
        dataChanged(){
            super.dataChanged();
            var self = this;
           // self.pkUser = self.data.pkTarget||self.data.enemy;

        }
        _data_list_items():any[]{
            var self = this, filter, sorter;
            return  gd.heroCtrl.getList();
        }
        _click_list_items(event:egret.gui.ListEvent) {
            var self = this;
            var bdc:gd.HeroEntityCtrl = event.item;
            VillianSoulLayer.create().setData({curHero:bdc}).show();


        }
        onEnter() {
            var self = this;
            super.onEnter();
            self.invalidateSkinState();
            var name,level,pkValue,vip,userId;
            if(!self.pkUser)return;
            var pkUser = self.pkUser;

            name = pkUser[gc.dsConsts.PkOutUserData.name];
            level = pkUser[gc.dsConsts.PkOutUserData.lvl];
            vip = pkUser[gc.dsConsts.PkOutUserData.vip];
            userId = pkUser[gc.dsConsts.PkOutUserData.userId];

            var nameTxt = self.getNameTxt(name);
            self.label_name.text = nameTxt;
            self.label_level.text = mo.STR.format("lv.%s",level);
            var pkValue = pkValue;
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var valueYellow = gameCfg[5];
            var valueRed = gameCfg[6];


            var guildName = pkUser[gc.dsConsts.PkOutUserData.guildName]?pkUser[gc.dsConsts.PkOutUserData.guildName]:"";
            self.label_guild.text = guildName==""?"":mo.STR.format("[%s]",guildName);
            var itemId = 78;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);

            //self.label_item.textColor = uiHelper.getColorByQuality(itemInfo[gc.t_item_color]);
            if(vip>0){
                self.label_vipLv.text = vip.toString();
                self.label_name.parent.addElementAt(self.grp_vip, 0);
            }else{
                if(self.grp_vip.parent)
                    self.grp_vip.parent.removeElement(self.grp_vip);
            }
            gd.heroCtrl.getHeroDisplayByTempId(userId,0,function(data) {
                self.ico_avatar.setData({clothesID:data[0],weaponID:data[1],wingID:data[2],sex:data[3],isKing:data[4]});
            },this);
        }



        _tap_btn_attack(){
            var self = this;
            var name = self.pkUser[gc.dsConsts.PkOutUserData.name];

            var pkValue = gd.pkOutCtrl.getPkValue();
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var valueRed = gameCfg[6];
            if(pkValue<valueRed && pkValue+gameCfg[1]>=valueRed){
                mo.showMsg(gc.id_c_msgCode.nameToRedIfGo,function(){
                    self.startPvp(name);
                });
            }else{
                self.startPvp(name);
            }
        }

        startPvp(name){
            var self = this;
            gd.pkOutCtrl.start(this.pkUser[gc.dsConsts.PkOutUserData.userId],gc.c_prop.fightTypeKey.pk,self.data.pkTarget?0:1,function(pkTargets:Array<gd.HeroEntityCtrl>){
                var myList = gd.heroCtrl.getFightList();
                gd.fightCtrl.startPvpFight(myList, pkTargets,gc.c_prop.fightTypeKey.pk, name);
            },this);
            self.close();
        }

        getNameTxt(name){
            var addStr:string = "";
            var nameArr = name.split('.');
            if( nameArr &&nameArr.length >0){
                addStr = nameArr[0];
            }
            return addStr + ".神秘玩家";
        }

    }
}