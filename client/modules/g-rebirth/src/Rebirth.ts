/**
 * Created by Administrator on 2016/1/21.
 */

module g_rebirth{
    export class Rebirth extends mo.gui.Dlg {

        img_noReTitle:egret.gui.UIAsset;
        grp_reTitle:egret.gui.UIAsset;
        label_curLvl:egret.gui.BitmapLabel;
        label_maxLvl:mo.gui.Label;

        label_curPropDes:mo.gui.Label;
        label_nextPropDes:mo.gui.Label;
        label_0_propDes:mo.gui.Label;
        label_no_PropDes:mo.gui.Label;
        label_curProp:mo.gui.Label;
        label_nextProp:mo.gui.Label;

        label_costExp:mo.gui.Label;
        label_curExp:mo.gui.Label;

        label_openNextLvl:mo.gui.Label;
        label_curExp2:mo.gui.Label;

        grp_1:egret.gui.Group;
        grp_2:egret.gui.Group;

        _initProp(){
            super._initProp();
            var self = this;
            self.registerClassByKey(gd.userCtrl, gc.dsConsts.UserEntity.rebirthExp.toString(), self._refreshUi);
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id: 18}).show();
        }

        _childrenCreated() {
            super._childrenCreated();
            this._refreshUi();
        }

        _refreshUi(){
            var self = this;
            var curRebirthLvl = gd.reBirthCtrl.getRebirthLvl();
            var nextRebirthLvl = curRebirthLvl + 1;
            var curRebirthData = gd.reBirthCtrl.getRebirthCfg(curRebirthLvl);
            var nextRebirthData = gd.reBirthCtrl.getRebirthCfg(nextRebirthLvl);
            var propKeyArr = ["maxHpTemp","attackTemp","defenceTemp","magicDefenceTemp","hitTemp","dodgeTemp","criticalTemp","disCriticalTemp"];


           if(nextRebirthData) self.label_maxLvl.text = [nextRebirthData.rebirthLvl,nextRebirthData.limitLvl];

            self.label_curLvl.text = curRebirthLvl + "";
            self.label_curPropDes.text = curRebirthLvl;
            self.label_nextPropDes.text = nextRebirthLvl;

            var strTemp1 = "%s：%s[/br]";
            var strTemp2 = "%s+%s[/br]";
            var curPorpStr = "",nextPorpStr ="";
            for(var i = 0,l_i = propKeyArr.length;i < l_i;i++){
                var key = propKeyArr[i];
                var propKey = gc.c_prop.heroPropKey[key];
                if(!propKey)continue;
                if(curRebirthData){
                    curPorpStr += mo.STR.format(strTemp1, gc.c_prop.heroProp[propKey], curRebirthData[key]);
                }else{
                    curPorpStr += mo.STR.format(strTemp1, gc.c_prop.heroProp[propKey], 0);
                }

                if(nextRebirthData){
                    nextPorpStr += mo.STR.format(strTemp2, gc.c_prop.heroProp[propKey], nextRebirthData[key]);
                }
            }
            self.label_curProp.text = curPorpStr;
            self.label_nextProp.text = nextPorpStr;

            if(nextRebirthData) self.label_costExp.text = mo.STR.format("[ubb color=0xFFD400]%s[/ubb]", nextRebirthData.exp);
            self.label_curExp.text = mo.STR.format("[ubb color=0xFFD400]%s[/ubb]", gd.reBirthCtrl.getRebirthExp());

            if(nextRebirthData) self.label_openNextLvl.text = [nextRebirthData.lvl,nextRebirthData.rebirthLvl];
            self.label_curExp2.text = mo.STR.format("[ubb color=0xFFD400]%s[/ubb]", gd.reBirthCtrl.getRebirthExp());

            self._checkVisible(curRebirthData,nextRebirthData)

        }

        _checkVisible(curRebirthData,nextRebirthData){
            var self = this;

            self.label_maxLvl.visible = true;
            //未转生
            if(!curRebirthData){
                //标题
                self.img_noReTitle.visible = true;
                self.grp_reTitle.visible = false;
                self.label_curLvl.visible = false;
                //属性
                self.label_0_propDes.visible = true;
                self.label_curPropDes.visible = false;
                self.label_no_PropDes.visible = false;
                self.label_nextPropDes.visible = true;

            }else{
                //标题
                self.img_noReTitle.visible = false;
                self.grp_reTitle.visible = true;
                self.label_curLvl.visible = true;

                //属性
                self.label_0_propDes.visible = false;
                self.label_curPropDes.visible = true;
                if(nextRebirthData){
                    self.label_no_PropDes.visible = false;
                    self.label_nextPropDes.visible = true;
                    if(gd.userCtrl.getLvl() >= nextRebirthData.lvl){
                        //转生前
                        self.grp_1.visible = true;
                        self.grp_2.visible = false;
                    }else{
                        //转生后
                        self.grp_1.visible = false;
                        self.grp_2.visible = true;
                    }
                }else{
                    //最高转生了
                    self.label_no_PropDes.visible = true;
                    self.label_nextPropDes.visible = false;
                    self.grp_1.visible = false;
                    self.grp_2.visible = true;
                    self.label_openNextLvl.visible = false;
                    self.label_maxLvl.visible = false;
                }
            }
        }

        _tap_btn_rebirth(){
            var self = this;
            gd.reBirthCtrl.rebirth(self._refreshUi,self);
        }

        _tap_btn_getExp(){
            RebirthExp.create().show();
        }
    }


    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = Rebirth;
        moduleCfgItem.sysId = gc.id_c_open.rebirth;// 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);


    });
}