/**
 * Created by lihex on 9/19/15.
 */
module g_role {

    /**
     *
     * @author
     *
     */
    export class RoleMatrix extends mo.gui.Layer{
        label_name;
        label_desc;
        grp_item;
        btn_up;
        btn_equipAll;
        effect_round:g_comp.UIEffect;
        effect_word:g_comp.UIEffect;
        efx_btn:g_comp.UIEffect;
        label_max;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._onHeroChanged, self);
            self.registerClassByKey(gd.HeroCtrl, gd.HeroCtrl.ON_WEAR_RUNE, self.reset);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;

            self.efx_btn.visible = false;
            //self.touchChildren = true;
            self.touchEnabled = true;
            self.addEventListener(egret.TouchEvent.TOUCH_TAP, self.onIconItemTap, self);
        }

        onEnter(){
            super.onEnter();
            var self = this;
            self.reset();
        }


        reset(){
            var self = this;
            var hero:gd.HeroEntityCtrl = self.data.hec;
            var reamList = hero.getHeroRealmList();
            var reamInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_realm, reamList[0]);
            var reamEquipIds = reamList[1];
            var canEquipIndexs = reamList[2];
            var canUp = reamList[3];
            var curReamLayerProps = [[33,0],[34,0],[35,0],[36,0],[37,0],[38,0],[39,0],[40,0]];
            var curEquipProps = [];
            var isMax = mo.getJSONWithFileName(gc.cfg_c_realm)[reamList[0]+1]==null;

            var rProps = reamInfo[gc.c_realm_propertys];
            for(var i=0; i<curReamLayerProps.length; ++i){
                for(var k=0; k<rProps.length; ++k){
                    if(curReamLayerProps[i][0] == rProps[k][0]){
                        curReamLayerProps[i][1] += rProps[k][1];
                    }
                }
            }
            self.label_name.text = reamInfo[gc.c_realm_name];
            for(var i=0; i<6; ++i){
                var icoItem = mo.gui.helper.getChild(self.grp_item, "ico_item"+i);
                if(!reamEquipIds[i]||reamEquipIds[i]==0){
                    icoItem.source = null;
                    continue;
                }
                var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_itemRealm, reamEquipIds[i]);
                var iProps = itemInfo[gc.t_itemRealm_propertys];
                for(var ik=0; ik<iProps.length; ++ik){
                    curEquipProps.push(iProps[ik]);
                }
                icoItem.source = resHelper.getItemIconPath(itemInfo[gc.t_item_id]);
            }
            for(var i=0; i<6; ++i){
                var icoPlus = mo.gui.helper.getChild(self.grp_item, "ico_plus"+i);
                icoPlus.visible = false;
            }
            for(var i=0; i<canEquipIndexs.length; ++i){
                var icoPlus = mo.gui.helper.getChild(self.grp_item, "ico_plus"+canEquipIndexs[i]);
                icoPlus.visible = true && hero.isSelf;
            }
            uiHelper.playUIEffect(self.efx_btn, canUp && hero.isSelf);
            self.btn_up.visible = hero.isSelf&&canUp;
            self.btn_equipAll.visible = hero.isSelf&&!canUp;

            var str = "";
            for(var i=0; i<curReamLayerProps.length; ++i){
                var s = mo.STR.format("%s %s",gc.c_prop.heroProp[curReamLayerProps[i][0]],curReamLayerProps[i][1]);
                var addValue = 0;
                for(var k=0; k<curEquipProps.length; ++k){
                    if(curEquipProps[k][0]==curReamLayerProps[i][0]){
                        addValue += curEquipProps[k][1];
                    }
                }
                if(addValue>0){
                    s += mo.STR.format(" [ubb color=green]+%s[/ubb]", addValue);
                }
                s += "[/br]";
                str += s;
            }
            self.label_desc.text = str;

            if(!isMax){
                self.grp_item.visible = true;
                self.label_max.visible = false;
            }else{
                self.grp_item.visible = false;
                self.label_max.visible = true;
                self.btn_equipAll.visible = false;
            }
        }

        _tap_btn_equipAll(){
            var self = this;
            var id = self.data.hec.get(gc.dsConsts.HeroEntity.id);
            gd.heroCtrl.wearAllRune(id,function(){}, self);
        }

        _tap_btn_up(){
            var self = this;
            var id = self.data.hec.get(gc.dsConsts.HeroEntity.id);
            gd.heroCtrl.upRealm(id,function(){
                self.effect_round.visible = true;
                self.effect_round.startLoadByKey(16);
                self.effect_round.play(1);
                self.effect_round.addEventListener(egret.Event.COMPLETE, function(event){
                    self.effect_round.visible = false;
                    self.effect_round.stop();
                }, self);

                egret.setTimeout(function(){
                    self.effect_word.visible = true;
                    self.effect_word.startLoadByKey(14);
                    self.effect_word.play(1);
                    self.effect_word.addEventListener(egret.Event.COMPLETE, function(event){
                        self.effect_word.visible = false;
                        self.effect_word.stop();
                        self.reset();
                    }, self);
                    for(var i=0; i<6; ++i){
                        var icoItem = mo.gui.helper.getChild(self.grp_item, "ico_item"+i);
                        var effect:g_comp.UIEffect = new g_comp.UIEffect();
                        effect.x = icoItem.x+icoItem.width/2;
                        effect.y = icoItem.y+icoItem.height/2;
                        self.grp_item.addElement(effect);
                        effect.startLoadByKey(15);
                        effect.play(1);
                        effect.addEventListener(egret.Event.COMPLETE, function(event){
                            self.grp_item.removeElement(event.currentTarget);
                        }, self);
                    }
                },this,1000);
            },self);
        }

        onIconItemTap(e:egret.TouchEvent){
            var self = this;
            var index:number = -1;
            for(var i=0;i<6;++i){
                var icoItem = mo.gui.helper.getChild(self.grp_item, "ico_item"+i);
                var point:egret.Point = icoItem.globalToLocal(e.stageX, e.stageY);
                var rect:egret.Rectangle = new egret.Rectangle(0, 0, icoItem.width, icoItem.height);
                if(rect.containsPoint(point)){
                    index = i;
                    break;
                }
            }
            if(index == -1)return;
            var hero:gd.HeroEntityCtrl = self.data.hec;
            if(!hero.isSelf && hero.getHeroRealmList()[1][index] == null) return;
            RoleMatrixInfo.create().setData({hec:hero, isMatrix:true, part:index, delegate:self}).show();
        }

        _tap_btn_help(){
            g_base.BaseShowTip.create().setData({id:7}).show();
        }

        _onHeroChanged(hec){
            var self = this;
            self.setData({hec: hec});
            self.reset();
        }
        dtor(){
            super.dtor();
            var self = this;
            roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._onHeroChanged, self);
        }
    }
}