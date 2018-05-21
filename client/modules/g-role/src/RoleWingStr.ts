/**
 * Created by Administrator on 2016/2/22.
 */
module g_role {
    export class RoleWingStr extends mo.gui.Layer {
        ico_selLeft;
        ico_selRight;
        label_name;
        label_wingName;
        label_lvLeft;
        label_lvRight;
        label_curProp1;
        label_curProp2;
        label_curLv;
        label_nextProp1;
        label_nextProp2;
        label_nextLv;
        grp_next;
        label_maxLv;
        label_needWingLv;
        grp_lvUp;
        btn_useYB:egret.gui.CheckBox;
        grp_res;
        label_feather;
        label_yuanbao;
        label_cost;
        grp_cost;
        label_costYB;
        grp_costYB;
        grp_costParent;

        grp_result;
        effect_win;
        effect_fail;
        effect_crit;
        effect_downLv;
        _winEfxPlayer:uiHelper.EfxPlayer;
        _failEfxPlayer:uiHelper.EfxPlayer;
        _critEfxPlayer:uiHelper.EfxPlayer;
        _downEfxPlayer:uiHelper.EfxPlayer;

        _isLeft;
        set isLeft(value:boolean){
            this._isLeft = value;
            this.ico_selLeft.alpha = this.isLeft?1:0;
            this.ico_selRight.alpha = !this.isLeft?1:0;
        }
        get isLeft():boolean{
            return this._isLeft;
        }

        _initProp(){
            var self = this;
            super._initProp();
            roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        }
        _heroChanged(hec){
            var self = this;
            //self.btn_useYB.selected = false;
            self.setData({hec: hec});
        }
        dtor(){
            super.dtor();
            var self = this;
            roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            self.isLeft = true;
            self.grp_result.visible = false;
            self._winEfxPlayer = uiHelper.EfxPlayer.create(self.effect_win);
            self._critEfxPlayer = uiHelper.EfxPlayer.create(self.effect_crit);
            self._failEfxPlayer = uiHelper.EfxPlayer.create(self.effect_fail);
            self._downEfxPlayer = uiHelper.EfxPlayer.create(self.effect_downLv);
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var hec:gd.HeroEntityCtrl = self.data.hec;
            var opt = hec.getWingOpt();

            self.label_name.text = opt.wingName;
            self.label_wingName.text = self.isLeft ? "左翼" : "右翼";
            self.label_lvLeft.text = "左翼Lv."+opt.leftLvl;
            self.label_lvRight.text = "右翼Lv."+opt.rightLvl;

            var curLv = self.isLeft?opt.leftLvl:opt.rightLvl;
            var nextLv = curLv +1;
            var wingStrInfos = mo.getJSONWithFileName(gc.cfg_t_wingStrength);
            var strInfo = wingStrInfos[curLv];
            var nextStrInfo = wingStrInfos[nextLv];
            var isMax = nextStrInfo==undefined||!nextStrInfo.hasOwnProperty("A");

            self.label_curLv.text = curLv+"";
            self.label_curProp1.text = self.getPropStr(strInfo,self.isLeft,1);
            self.label_curProp2.text = self.getPropStr(strInfo,self.isLeft,2);
            if(isMax){
                self.label_maxLv.visible = true;
                self.grp_next.visible = false;
                self.grp_lvUp.visible = false;
                self.label_needWingLv.visible = false;
            }else{
                self.label_maxLv.visible = false;
                self.grp_next.visible = true;
                if(opt.wingLvl>=strInfo[gc.t_wingStrength_needWingLvl]){
                    self.grp_lvUp.visible = true;
                    self.label_needWingLv.visible = false;
                    self.label_cost.text = strInfo[gc.t_wingStrength_consume]+"";
                    var rate = strInfo[gc.t_wingStrength_successPro]/100;
                    self.checkGrpCost();
                }else{
                    self.grp_lvUp.visible = false;
                    self.label_needWingLv.visible = true;
                    self.label_needWingLv.text = mo.STR.format("翅膀到达%s阶后可继续强化", strInfo[gc.t_wingStrength_needWingLvl]);
                }

                self.label_nextLv.text = nextLv;
                self.label_nextProp1.text = self.getPropStr(nextStrInfo,self.isLeft,1);
                self.label_nextProp2.text = self.getPropStr(nextStrInfo,self.isLeft,2);
            }
            self.label_yuanbao.text = gd.userCtrl.getDiamond().toString();
            self.label_feather.text = opt.featherCount;
        }

        checkGrpCost(){
            var self = this;
            var hec:gd.HeroEntityCtrl = self.data.hec;
            var opt = hec.getWingOpt();
            var curLv = self.isLeft?opt.leftLvl:opt.rightLvl;
            var strInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_wingStrength, curLv);

            if(self.btn_useYB.selected){
                if(opt.plumageCount>=strInfo[gc.t_wingStrength_consume]){
                    if(self.grp_costYB.owner){
                        self.grp_costYB.owner.removeElement(self.grp_costYB);
                    }
                }else{
                    if(opt.plumageCount<=0){
                        if(self.grp_cost.owner){
                            self.grp_cost.owner.removeElement(self.grp_cost);
                        }
                    }
                    self.label_cost.text = opt.plumageCount+"";
                    self.label_costYB.text = (strInfo[gc.t_wingStrength_consume]-opt.plumageCount)*5+"";
                    self.grp_costParent.addElement(self.grp_costYB);
                }
            }else{
                if(self.grp_costYB.owner){
                    self.grp_costYB.owner.removeElement(self.grp_costYB);
                }
                self.label_cost.text = strInfo[gc.t_wingStrength_consume]+"";
                self.grp_costParent.addElement(self.grp_cost);
            }
        }

        _tap_btn_useYB(){
            var self =this;
            self.checkGrpCost();
        }

        _tap_ico_selLeft(){
            var self = this;
            self.isLeft = true;
            //self.btn_useYB.selected = false;
            self.dataChanged();
        }
        _tap_ico_selRight(){
            var self = this;
            self.isLeft = false;
            //self.btn_useYB.selected = false;
            self.dataChanged();
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id: 42}).show();
        }

        _tap_btn_str(){
            var self = this;
            var hec:gd.HeroEntityCtrl = self.data.hec;
            var opt = hec.getWingOpt();
            var curLv = self.isLeft?opt.leftLvl:opt.rightLvl;
            var strInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_wingStrength, curLv);

            if(opt.plumageCount>=strInfo[gc.t_wingStrength_consume]||self.btn_useYB.selected){
                hec.wingStrength(opt, self.isLeft?gc.c_prop.wingStrengthKey.left:gc.c_prop.wingStrengthKey.right, self.btn_useYB.selected, function(data){
                    //[是否成功,强化后等级,是否暴击]
                    var isWin = data[0];
                    var lvTo = data[1];
                    var isCrit = data[2];
                    var isDown = data[3];
                    var lvFrom = self.isLeft?opt.leftLvl:opt.rightLvl;
                    var infoFrom = mo.getJSONWithFileNameAndID(gc.cfg_t_wingStrength, lvFrom);
                    var infoTo = mo.getJSONWithFileNameAndID(gc.cfg_t_wingStrength, lvTo);

                    self.grp_result.visible = true;

                    if (isWin) {
                        self._winEfxPlayer.play();
                        if (isCrit) {
                            self._critEfxPlayer.play();
                        }
                    }else{
                        self._failEfxPlayer.play();
                        if (isDown) {
                            self._downEfxPlayer.play();
                        }
                    }

                    self.dataChanged();
                }, self);
            }else{
                var itemId = gc.c_prop.spItemIdKey.plumage;
                if(g_base.GainWay.canBuyFromShop(itemId)){
                    g_base.GainWayShop.create().setData({itemId:itemId, count:strInfo[gc.t_wingStrength_consume]-opt.plumageCount}).show().onClose(function(){
                        self.dataChanged();
                    });
                }else{
                    g_base.GainWay.create().setData({itemId:itemId}).show();
                }
            }

        }

        _tap_btn_confirm(){
            var self = this;
            self.grp_result.visible = false;
        }

        getPropStr(strInfo, isLeft, num){
            var str = "";
            if(isLeft){
                if(num==1){
                    str = "翅膀攻击：+"+(strInfo[gc.t_wingStrength_attack]/100).toFixed(1)+"%";
                }else if(num==2){
                    str = "翅膀物防：+"+(strInfo[gc.t_wingStrength_defence]/100).toFixed(1)+"%";
                }
            }else{
                if(num==1){
                    str = "翅膀生命：+" + (strInfo[gc.t_wingStrength_maxHp] / 100).toFixed(1) + "%";
                }else if(num==2){
                    str = "翅膀法防：+"+(strInfo[gc.t_wingStrength_magicDefence]/100).toFixed(1)+"%";
                }
            }
            return str;
        }
    }
}