/**
 * Created by SmallAiTT on 2015/7/22.
 */
module g_msg{

    export interface IGetItem{
        items?:any;
        equips?:any;
        changeProp?:any;
        hec?:gd.HeroEntityCtrl;
    }
    export class GetItemTips extends mo.gui.Dlg {
        _trayName = 'top';
        _tipsArr:Array<any>;
        _tipsRunning:boolean;
        _interval:number;

        grp_container:egret.gui.Group;
        grp_tips:egret.gui.Group;

        data:IGetItem;

        propRef:any;

        //@override
        _initProp() {
            super._initProp();
            var self = this;
            self._tipsArr = [];
            self._tipsRunning = false;
            self._interval = 600;
            self._penetrable = true;
            self._layerOpt.shownWithAction = false;

            var propRef = {};
            propRef["maxHpFight"] = "生    命";
            propRef["attackFight"] = "攻    击";
            propRef["defenceFight"] = "物    防";
            propRef["magicDefenceFight"] = "法    防";
            propRef["hitFight"] = "命    中";
            propRef["dodgeFight"] = "闪    避";
            propRef["criticalFight"] = "暴    击";
            propRef["disCriticalFight"] = "抗    暴";
            propRef["damageIncreaseFight"] = "伤害加深";
            propRef["damageDecreaseFight"] = "伤害减免";
            propRef["benumbProFight"] = "麻    痹";
            propRef["disBenumbProFight"] = "抗    麻";
            self.propRef = propRef;
        }


        setMsgInfo(msgData:any, msgArgs:any[]){

        }

        _childrenCreated(){
            super._childrenCreated();
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var items = self.data.items || {};
            var equips = self.data.equips ||[];
            var changeProp = self.data.changeProp;
            var cfg_t_item = mo.getJSONWithFileName(gc.cfg_t_item);

            for(var itemId in items){
                var t_item = cfg_t_item[itemId];
                var name = t_item[gc.t_item_name];
                var quality = t_item[gc.t_item_color];
                var type = t_item[gc.t_item_type];
                //钥匙宝箱要单独显示
                if(type == gc.c_prop.itemTypeKey.chest && gd.userCtrl.getNeedItems(itemId)[0] != 0){
                    g_msg.UIMsgTextCtrl.push(mo.STR.format("恭喜获得[ubb color=%s stroke=1 stroke=1 bold=true]%s[/ubb]%s个！",uiHelper.getColorByQuality(quality), name, items[itemId]));
                    continue;
                }
                var str = mo.STR.format("获得：[ubb color=%s]%s[/ubb] x%s", uiHelper.getColorByQuality(quality), name, items[itemId]);
                var label = new mo.gui.Label();
                label.size = 22;
                label.text = str;
                label.stroke = 2;
                label.strokeColor = 0;
                label.textColor = 0x00ff00;
                self._tipsArr.push(label);
            }

            for(var i = 0, li = equips.length; i < li; i++){
                var itemId = equips[i];
                var t_item = cfg_t_item[itemId];
                var name = t_item[gc.t_item_name];
                var quality = t_item[gc.t_item_color];
                var str = mo.STR.format("获得：[ubb color=%s]%s[/ubb] x%s", uiHelper.getColorByQuality(quality), name, 1);
                var label = new mo.gui.Label();
                label.size = 22;
                label.text = str;
                label.stroke = 2;
                label.strokeColor = 0;
                label.textColor = 0x00ff00;
                self._tipsArr.push(label);
            }

            if(changeProp){ //英雄职业属性变化
                var hec:gd.HeroEntityCtrl = self.data.hec;
                var label = new mo.gui.Label();
                label.size = 25;
                label.style = g_consts.style.orange_103;
                label.text = mo.STR.format("%s:", gc.c_prop.heroJob[hec.job]);
                self._tipsArr.push(label);
                for(var propKey in changeProp){
                    var str = mo.STR.format("%s：+%s", self.propRef[propKey], changeProp[propKey]);
                    var label = new mo.gui.Label();
                    label.size = 22;
                    label.textColor = 0x00ff00; //绿色
                    label.stroke = 2;
                    label.strokeColor = 0;
                    label.text = str;
                    label.width = 200;
                    self._tipsArr.push(label);
                }
            }


            var self = this, group_container = self.grp_container, group_tips = self.grp_tips;
            var stage = mo.getStage();
            var w = stage.stageWidth, h = stage.stageHeight;
            for(var i = 0; i< self._tipsArr.length;i++){
                var tipNode = self._tipsArr[i];
                group_tips.addElement(tipNode);
            }
            // 播放动画

            var duration = 2.0,
                fadeIn = mo.fadeIn(duration * 0.2),
                fade = mo.fadeOut(duration * 0.2),
                delay = mo.delayTime(duration * 0.8),
                act = mo.sequence(
                    mo.moveBy(duration, mo.p(0, -360)),
                    mo.callFunc(function (sender) {
                        self.close();
                    }, self)
                );

            var actMgr = egret.action.Manager.getInstance();
            actMgr.addAction(group_container, fadeIn);
            actMgr.addAction(group_container, act);
            actMgr.addAction(group_container, mo.sequence(delay, fade));
        }
    }
}