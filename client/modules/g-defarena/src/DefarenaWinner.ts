/**
 * Created by lihex on 1/12/16.
 */
module g_defarena {

    export class DefarenaWinner extends mo.gui.Dlg {
        moduleParam:IModuleParam.DefArena;

        ico_avatar;
        label_guild;
        grp_userInfo;
        label_combat;
        label_nextOpenTime;
        label_openLvl;
        img_title;

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            if(self.moduleParam){
                self.setData(self.moduleParam.info);
            }
            self.label_openLvl.text = gd.challengeCupCtrl.getOpenLvl();
        }

        dataChanged() {
            var self = this;
            super.dataChanged();
            var KEY = gc.dsConsts.ChallengeCupData;
            var info = self.data;
            var hasAdmin = (info[KEY.userId] && info[KEY.userId] != 0);
            self.img_title.source = hasAdmin? "tit_txt_benjiebazhu" : "tit_txt_wangchenbazhu";
            if(hasAdmin){
                self.label_guild.text = info[KEY.guildName];
                var avatarDatas = info[KEY.HeroDisplay];
                self.ico_avatar.setData({clothesID:avatarDatas[0],weaponID:avatarDatas[1],wingID:avatarDatas[2],sex:avatarDatas[3],isKing:avatarDatas[4]});
                self.label_combat.text = info[KEY.combat];
                uiHelper.setVipGrp(self.grp_userInfo, info[KEY.nickName], info[KEY.lvl], info[KEY.vip]);
            }

            var startTime = gd.challengeCupCtrl.nextOpenTime;
            self.label_nextOpenTime.text = startTime.toFormat("MM月DD日HH24:MI");
        }

        _tap_btn_rank(){
            var self = this;
            gd.challengeCupCtrl.getRank(function(data){
                DefArenaRank.create().setData({rankData: data}).show();
            }, self);
        }

        _tap_btn_ok(){
            var self = this;
            self.close();
            process.nextTick(function(){
                mo.moduleMgr.runModule(g_consts.moduleId.home, {subModuleId: 6});
            });
        }

        _tap_ico_avatar(){
            var self = this;
            var KEY = gc.dsConsts.ChallengeCupData;
            var info = self.data;
            var hasAdmin = (info[KEY.userId] && info[KEY.userId] != 0);
            if(hasAdmin){
                mo.moduleMgr.pushModule(g_consts.moduleId.roleEnemyInfo, {userId:info[KEY.userId]});
            }
        }

        getCurrentSkinState(){
            var self = this;
            var info = self.moduleParam.info;
            var KEY = gc.dsConsts.ChallengeCupData;
            var hasAdmin = (info[KEY.userId] && info[KEY.userId] != 0);
            return (hasAdmin)? "hasAdmin" : "noAdmin";
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = DefarenaWinner;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam:IModuleParam.DefArena, cb){
            gd.challengeCupCtrl.getInfo(function(data){
                moduleParam.info = data;
                cb();
            }, this);
        });
    });
}