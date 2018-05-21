/**
 * Created by Administrator on 2016/1/5.
 */
module g_heart {
    export class HeartDetail extends mo.gui.Layer {

        ico_title;
        ico_heart_bg;
        ico_ceng0;
        ico_ceng1;
        ico_ceng2;
        grp_ceng;
        grp_add;
        grp_prop;
        tab_btn;

        label_addProp;
        label_addValue;
        label_rate;
        ico_itemCost0;
        ico_item0;
        label_itemNumCost0;
        label_itemNum0;
        label_itemNumCost1;
        label_itemNum1;
        btn_add;
        btn_autoAdd;
        btn_stopAuto;
        label_auto;
        label_maxLevel;
        grp_canAdd;

        label_skillName;
        label_propL;
        label_propR;
        label_skillDesc;
        ico_skill;

        oldCeng;
        effect_point;
        effect_win;
        effect_fail;
        _winEfxPlayer:uiHelper.EfxPlayer;
        _failEfxPlayer:uiHelper.EfxPlayer;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.gold.toString(), self.dataChanged);
        }

        onExit(){
            var self = this;

            self._tap_btn_stopAuto();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

            self.tab_btn.selectedIndex = 0;
            process.nextTick(function () {
                self._tap_tab_btn();
            });
            self.btn_stopAuto.visible = false;

            self._winEfxPlayer = uiHelper.EfxPlayer.create(self.effect_win);
            self._failEfxPlayer = uiHelper.EfxPlayer.create(self.effect_fail);
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var id = self.data.id;
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id);//【等级，层数，当前点数】
            var lv = datas[0];
            var ceng = datas[1];
            var curPoint = datas[2];
            var grp:egret.gui.Group = self["grp_"+id];
            var infos = mo.getJSONWithFileName(gc.cfg_c_heartStunt);
            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStunt, id);
            var cengChange = self.oldCeng>0&&self.oldCeng!=ceng;

            for(var key in infos){
                self["grp_"+infos[key][gc.c_heartStunt_id]].visible = false;
            }

            self.oldCeng = ceng;
            grp.visible = true;

            var indexAry = self.getIndexAry(ceng, false);
            var maxShowNum = 0;
            var begY = 0;
            for(var i=2; i>=0; --i){
                var c = indexAry[i];
                if(c){
                    self["ico_ceng"+i].source = "txt_hz_"+c;
                    self["ico_ceng"+i].visible = true;
                    self["ico_ceng"+i].y = begY;
                    begY += 23;
                    maxShowNum = i;
                }else{
                    self["ico_ceng"+i].visible = false;
                }
            }
            self["ico_ceng"+3].y = begY;
            begY += 23;
            self.grp_ceng.y = 200-begY/2;

            self.ico_title.source = resHelper.getHeartTitlePath(id);
            self.ico_heart_bg.source = "heart_bg_"+id;
            self.showPoint(id, true);
            self.onHeartLvChanged();
            if(cengChange){
                self._tap_btn_stopAuto();
            }
        }

        onHeartLvChanged(){
            var self = this;
            var id = self.data.id;
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id);//【等级，层数，当前点数】
            var lv = datas[0];
            var ceng = datas[1];

            var info = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStunt, id);
            var heartLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStuntLvl, id+lv);
            var nextHeartLvInfo = mo.getJSONWithFileName(gc.cfg_c_heartStuntLvl)[id+lv+1];
            if(nextHeartLvInfo){
                var addProps = nextHeartLvInfo[gc.c_heartStuntLvl_addProperty];

                self.grp_canAdd.visible = true;
                self.label_maxLevel.visible = false;
                self.label_addProp.text = gc.c_prop.heroProp[addProps[0]];
                self.label_addValue.text = "+"+addProps[1];
                self.ico_itemCost0.source = resHelper.getItemIconPath(gc.c_prop.spItemIdKey.genuineQi);
                self.label_itemNumCost0.text = heartLvInfo[gc.c_heartStuntLvl_cosGenqi];
                self.label_itemNumCost1.text = heartLvInfo[gc.c_heartStuntLvl_cosGold];
            }else{
                self.grp_canAdd.visible = false;
                self.label_maxLevel.visible = true;
                self._tap_btn_stopAuto();
            }
            self.ico_item0.source = resHelper.getItemIconPath(gc.c_prop.spItemIdKey.genuineQi);
            self.label_itemNum0.text = gd.demonLotusCtrl.calGenuineQi()[0];
            self.label_itemNum1.text = gd.userCtrl.getGold();

            var skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, info[gc.c_heartStunt_skillId]);
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.heartStuntCfg);
            if(ceng>gameInfo[1]){
                skillInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_skill, info[gc.c_heartStunt_skillId2]);
            }
            var indexStrs = ["一","二","三","四","五","六","七","八","九","十"];
            var indexAry = self.getIndexAry(ceng, true);
            var indexStr = "";
            for(var i=0; i<indexAry.length; ++i){
                if(i==1){
                    indexStr += indexStrs[9];
                }
                if(i==indexAry.length-1 && indexAry[i]==0) continue;
                if (indexAry[i] == 1 && i == 0 && indexAry.length==2) continue;

                indexStr += indexStrs[indexAry[i] - 1];
            }
            var damageScale:number = skillInfo[gc.t_skill_damage]/10000;
            var buffID:number = skillInfo[gc.t_skill_buffID];
            if(ceng<=0){
                ceng = 1;
            }
            var cd = skillInfo[gc.t_skill_cd]*10/1000;
            if(damageScale!=0){
                var perLvScale:number = skillInfo[gc.t_skill_damageScaleA]/10000;
                damageScale += (ceng-1)*perLvScale;
                self.label_skillDesc.text = mo.STR.format(skillInfo[gc.t_skill_desc],Math.abs(Math.round(-damageScale*100)), cd);
            }else if(buffID!=0){
                var buffInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_buff, buffID);
                var perLvValue = buffInfo[gc.t_buff_linerScale];
                var value = (buffInfo[gc.t_buff_baseValue1]+perLvValue*(ceng-1))/10000;
                value = Math.abs(value);
                self.label_skillDesc.text = mo.STR.format(skillInfo[gc.t_skill_desc],Math.round(value*100), cd);
            }else{
                self.label_skillDesc.text = mo.STR.format(skillInfo[gc.t_skill_desc]);
            }
            self.ico_skill.source = resHelper.getSkillIconPath(skillInfo[gc.t_skill_id]);
            self.label_skillName.text = ["附加技能", indexStr];
            self.label_propL.text = self.getPropStr(id, lv, true);
            self.label_propR.text = self.getPropStr(id, lv, false);
        }

        getIndexAry(num:number, isRight:boolean):number[]{
            var idx:number[] = [];
            while(num){
                var c = num%10;
                if(isRight){
                    idx.unshift(c);
                }else{
                    if(idx.length==0){
                        idx.push(c);
                    }else{
                        idx.push(10);
                        if(c>1){
                            idx.push(c);
                        }
                    }
                }
                num = num/10>>0;
            }
            return idx;
        }

        getPropStr(id, lv, isLeft){
            var heartLvInfo;
            var propObj = {};
            for(var i=1; i<=lv; ++i){
                heartLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStuntLvl, id+i);
                var addProps = heartLvInfo[gc.c_heartStuntLvl_addProperty];
                var propKey = addProps[0];
                propObj[propKey] = (propObj[propKey]||0)+addProps[1];
            }
            var str = "";
            for(var i=33; i<=40; ++i){
                if(isLeft && i%2==0) continue;
                if(!isLeft && i%2==1) continue;
                str += "[ubb color=#fff000]"+gc.c_prop.heroProp[i]+": "+"[/ubb]";
                str += "[ubb color=#00ff00]+"+(propObj[i]||0)+"[/ubb]";
                str += "\n";
            }

            return str;
        }

        showPoint(id, checkAll){
            var self = this;
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id);//【等级，层数，当前点数】
            //var lv = datas[0];
            //var ceng = datas[1];
            var curPoint = datas[2];
            var grp:egret.gui.Group = self["grp_"+id];

            if(!checkAll){
                if(curPoint>0)
                    grp.getElementAt(curPoint-1).visible = true;
            }else{
                for(var i=0; i<curPoint; ++i){
                    grp.getElementAt(i).visible = true;
                }
                for(var i=curPoint; i<grp.numElements; ++i){
                    grp.getElementAt(i).visible = false;
                }
            }

            var id = self.data.id;
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id);//【等级，层数，当前点数】
            var lv = datas[0];
            var heartLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStuntLvl, id+lv);
            if(curPoint>=10){
                self.effect_point.visible = false;
            }else{
                self.effect_point.x = grp.x+grp.getElementAt(curPoint).x+11;
                self.effect_point.y = grp.y+grp.getElementAt(curPoint).y+11;
            }
        }

        _tap_btn_add(){
            var self = this;
            var index = self.data.index;
            var id = self.data.id;
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id);//【等级，层数，当前点数】
            var lv = datas[0];
            var ceng = datas[1];
            var curPoint = datas[2];

            var heartLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStuntLvl, id+lv);
            var isGoldEn = gd.userCtrl.getGold()>=heartLvInfo[gc.c_heartStuntLvl_cosGold];
            var isGenEn = gd.demonLotusCtrl.calGenuineQi()[0]>=heartLvInfo[gc.c_heartStuntLvl_cosGenqi];

            if(isGoldEn && isGenEn){
                gd.heartStuntCtrl.stuMenCulMethods(index, function(data){
                    var isSuccess = data[0];
                    if(isSuccess){
                        self._winEfxPlayer.play();
                    }else{
                        self._failEfxPlayer.play();
                    }
                    self.dataChanged();
                },self);
            }else{
                if(!isGoldEn){
                    gd.userCtrl.noGolds(function(){},this);
                }else if(!isGenEn){
                    mo.showMsg(gc.id_c_msgCode.noGas);
                }
                self._tap_btn_stopAuto();
            }

        }

        _autoTimeId;
        _tap_btn_autoAdd(){
            var self = this;
            self._autoTimeId = setInterval(function(){
                self._tap_btn_add();
            },1000);
            self.btn_stopAuto.visible = true;
            self.btn_add.visible = false;
            self.btn_autoAdd.visible = false;
            self.label_auto.visible = false;
        }

        _tap_btn_stopAuto(){
            var self = this;
            clearInterval(self._autoTimeId);
            self.btn_stopAuto.visible = false;
            self.btn_add.visible = true;
            self.btn_autoAdd.visible = true;
            self.label_auto.visible = true;
        }

        _tap_tab_btn() {
            var self = this;
            var selectedIndex = self.tab_btn.selectedIndex;

            self.grp_prop.visible = selectedIndex==0;
            self.grp_add.visible = self.effect_point.visible = selectedIndex==1;

            var id = self.data.id;
            var datas = gd.heartStuntCtrl.getHeartStuntArr(id);//【等级，层数，当前点数】
            var lv = datas[0];
            var heartLvInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStuntLvl, id+lv);
            if(datas[2]>=10){
                self.effect_point.visible = false;
            }
        }

        _tap_btn_close() {

        }

        _tap_btn_help() {
            var self = this;
            g_base.BaseShowTip.create().setData({id: 52}).show();
            self._tap_btn_stopAuto();
        }
    }
}