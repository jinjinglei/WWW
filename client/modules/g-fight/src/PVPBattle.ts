/**
 * Created by Administrator on 2015/9/24.
 */
module g_fight{
    export class PVPBattle extends mo.gui.Dlg{
        label_name;
        label_level;
        //label_killValue;
        label_jb;
        label_exp;
        ico_avatar;
        //label_fightName;
        label_vipLv;
        grp_vip;
        ico_title;
        pkUser;
        ico_item;
        label_item;
        label_guild;

        _childrenCreated(){
            super._childrenCreated();
            this.outsideClosable = true;
            var self = this;
            self.ico_avatar.setData({clothesID:null,weaponID:null,wingID:null,sex:0,isKing:false});
        }
        dataChanged(){
            super.dataChanged();
            var self = this;
            self.pkUser = self.data.pkTarget||self.data.enemy;

            self.ico_title.source = self.data.pkTarget?"tit_txt_g_funjin":"tit_txt_g_wdcr";
        }

        onEnter() {
            var self = this;
            super.onEnter();
            self.invalidateSkinState();
            var name,jb,exp,level,pkValue,vip,userId;
            var pkUser = self.pkUser;

            name = pkUser[gc.dsConsts.PkOutUserData.name];
            jb = pkUser[gc.dsConsts.PkOutUserData.gold];
            exp = pkUser[gc.dsConsts.PkOutUserData.expc];
            level = pkUser[gc.dsConsts.PkOutUserData.lvl];
            pkValue = pkUser[gc.dsConsts.PkOutUserData.pkValue];
            vip = pkUser[gc.dsConsts.PkOutUserData.vip];
            userId = pkUser[gc.dsConsts.PkOutUserData.userId];

            var nameTxt = self.getNameTxt(name);
            self.label_name.text = nameTxt;
            self.label_jb.text = jb;
            self.label_exp.text = exp;
            self.label_level.text = mo.STR.format("lv.%s",level);
            var pkValue = pkValue;
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var valueYellow = gameCfg[5];
            var valueRed = gameCfg[6];

            if(pkValue>=valueRed){
                self.label_name.textColor = 0xff0000;
                self.label_name.text = self.label_name.text;
            }else if(pkValue>=valueYellow){
                self.label_name.textColor = 0xfff000;
                self.label_name.text = self.label_name.text;
            }else{
                self.label_name.textColor = 0xffffff;
                self.label_name.text = self.label_name.text;
            }
            var guildName = pkUser[gc.dsConsts.PkOutUserData.guildName]?pkUser[gc.dsConsts.PkOutUserData.guildName]:"";
            self.label_guild.text = guildName==""?"":mo.STR.format("[%s]",guildName);
            var itemId = 78;
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, itemId);
            self.ico_item.source = resHelper.getItemIconPath(itemId);
            self.label_item.text = itemInfo[gc.t_item_name];
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

        getCurrentSkinState():string{
            var self = this;
            self.pkUser = self.data.pkTarget||self.data.enemy;
            var pkValue = self.pkUser[gc.dsConsts.PkOutUserData.pkValue];
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.pkOutCfg);
            var valueYellow = gameCfg[5];
            var valueRed = gameCfg[6];

            if(pkValue>=valueRed){
                return "red";
            }else if(pkValue>=valueYellow){
                return "white";
            }else{
                return "white";
            }
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