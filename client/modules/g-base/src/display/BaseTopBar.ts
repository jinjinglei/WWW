/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_base{
    export class BaseTopBar extends mo.gui.MenuLayer{

        label_yuanbao:egret.gui.Label;
        label_gold:egret.gui.Label;
        label_lvl:egret.gui.Label;
        label_vip:egret.gui.Label;
        label_combat:egret.gui.Label;
        label_name:egret.gui.Label;
        label_copyId:egret.gui.Label;
        label_copy_name:egret.gui.Label;
        pb_exp:egret.gui.ProgressBar;
        ico_boss:egret.gui.UIAsset;
        grp_copyShow:egret.gui.Group;
        img_vip:egret.gui.UIAsset;
        img_head:egret.gui.UIAsset;


        _oldExp:number;
        _total:number;


        ownerScene;

        //@override
        _initProp(){
            var self = this;
            super._initProp();

            self.touchEnabled = false;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.gold.toString(), self._updateRes);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.diamond.toString(), self._updateRes);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.lvl.toString(), self._updateRes);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.combat.toString(), self._updateRes);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.expc.toString(), self._updateExp);
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.vip.toString(), self._updateRes);
            self.registerClassByKey(gd.PkOutCtrl, gc.dsConsts.PkOutEntity.pkValue.toString(), self._setUserName);
            //self.registerClassByKey(gd.CopyCtrl, gd.CopyCtrl.ON_COPY_CHANGE, self.onCopyChange)
            self.registerClassByKey(gd.CoffersCtrl, gd.CoffersCtrl.ON_COFFERS_FIGHT, self.showCopyNameCoffers);
        }

        //@override
        init(ownerScene){
            var self = this, clazz = self.__class;
            super.init(ownerScene);
            self.ownerScene = ownerScene;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            self.label_vip.text = gd.userCtrl.getVip().toString();
            var resName = uiHelper.getHeroIcon(gd.userCtrl.getIconId(), 1);
            mo.R.loadTo(self.ownerScene, resName, function(){});
            self.img_head.source = resName;
            self._setUserName();

            var expcArr = [];
            var curLvl = gd.userCtrl.getLvl();
            var index = curLvl - 1;
            var cfg_c_lvl = mo.getJSONWithFileName(gc.cfg_c_lvl);

            var length = 0;
            for (var key in cfg_c_lvl) {
                if (cfg_c_lvl.hasOwnProperty(key)) length++;
            }

            var c_lvl;
            for(var i = 0; i < length; i++){
                c_lvl = cfg_c_lvl[i+1];
                if(!c_lvl)break;
                expcArr.push(c_lvl[gc.c_lvl_reqExp]);
            }

            self._total = mo.getJSONWithFileName(gc.cfg_c_lvl)[curLvl][gc.c_lvl_minExp];
            self._total += gd.userCtrl.getExp();
            var guiHelper:mo.gui.Helper = mo.gui.helper;
            guiHelper.initProgress(self.pb_exp, <mo.gui.ProgressOpt>{
                baseArr: expcArr,
                baseValue: gd.userCtrl.getExp(),
                baseIndex: index,
                onBaseChange(type) {
                    //on up lvl
                }
            });
            //self.onCopyChange();

            self._updateRes();
            //self.showBossIcon(gd.fightCtrl.isSpFighting);

            if(mo.moduleMgr.curModule.name == g_consts.moduleId.home){
                self.grp_copyShow.visible = false;
            }
        }

        _setUserName(){
            var self = this;
            if(self.label_name){
                self.label_name.text = gd.userCtrl.getName();
                self.label_name.textColor = uiHelper.getUserNameColor(gd.pkOutCtrl.getPkValue());
            }
        }

        //onCopyChange(){
        //    var self = this;
        //    var curCopyId =  gd.copyCtrl.getNormalCurCopyId();
        //    self.label_copyId.text = "" + curCopyId;
        //    self.label_copy_name.text = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, curCopyId)[gc.t_copy_name];
        //}

        //showBossIcon(isShow){
        //    var self = this;
        //    self.ico_boss.visible = isShow;
        //    self.label_copyId.visible = !isShow;
        //}
        showCopyName(copyId, monsterId){
            var self = this;
            var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
            var monsterInfos = mo.getJSONWithFileName(gc.cfg_t_monster);
            var monsterInfo = monsterInfos[monsterId];

            if(monsterInfo!=null && monsterInfo[gc.t_monster_bossLevel]!=0){
                self.label_copyId.visible = false;
                self.ico_boss.visible = true;
                self.label_copy_name.text = monsterInfo[gc.t_monster_name];
            }else{
                self.label_copyId.visible = true;
                self.ico_boss.visible = false;
                self.label_copyId.text = "" + copyId;
                self.label_copy_name.text = copyInfo[gc.t_copy_name];
            }
        }
        showCopyNameCoffers(serverId, door){
            var self = this;

            self.label_copyId.visible = true;
            self.ico_boss.visible = false;
            self.label_copyId.text = serverId+"服";
            self.label_copy_name.text = gc.c_prop.offersDoor[door]+"门";
        }

        _updateRes(){
            var self = this;
            self.label_yuanbao.text = gd.userCtrl.getDiamond();
            self.label_gold.text = gd.userCtrl.getGold()>1000000?(gd.userCtrl.getGold()/10000>>0)+"万":gd.userCtrl.getGold();
            self.label_lvl.text = gd.userCtrl.getLvl();
            self.label_combat.text = gd.userCtrl.getCombat() + "";
            self.label_vip.text = gd.userCtrl.getVip().toString();
        }

        _updateExp(exp){
            var self = this;
            var curLvl = gd.userCtrl.getLvl();
            var total = mo.getJSONWithFileName(gc.cfg_c_lvl)[curLvl][gc.c_lvl_minExp] + exp;
            // 解决报错的问题
            if(self.pb_exp && mo.utils.getExtData(self.pb_exp, 'progressOpt') != null){
                mo.gui.helper.progress(self.pb_exp, total - self._total);
            }
        }

        _tap_btn_plus_gold(){
            var self = this;
            //ws.recordEvent("点击主城【金币加号】", 1);
            gd.userCtrl.buyGold(function(){},self);
        }

        _tap_btn_plus_yuanbao(){
            var self = this;
            //ws.recordEvent("点击主城【元宝加号】", 1);
            mo.moduleMgr.pushModule(g_consts.moduleId.recharge);
        }

        _tap_img_vip(){
            var self = this;
            //ws.recordEvent("点击主城【VIP】", 1);
            mo.moduleMgr.pushModule(g_consts.moduleId.vip);
        }

        _tap_img_detail(){
            var fs = mo.moduleMgr.curModule.target;
            if(fs){
                fs.layer.showProfileInfo();
            }
        }
    }
}