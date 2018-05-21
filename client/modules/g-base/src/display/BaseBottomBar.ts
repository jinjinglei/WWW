/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_base{

    export var modIdx;//底部选中的按钮index
    export class BaseBottomBar extends mo.gui.MenuLayer{

        btn_fight:g_comp.Tab_Sys;
        btn_home:g_comp.Tab_Sys;
        btn_role:g_comp.Tab_Sys;
        btn_forge:g_comp.Tab_Sys;
        btn_bag:g_comp.Tab_Sys;
        btn_shop:g_comp.Tab_Sys;
        fight_hp: g_comp.Fight_Info;

        curModIdx:any;
        modViewArr:Array<g_comp.Tab_Sys>;
        redKeyArr:Array<any>;


        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self.redKeyArr = [
                -1,
                gc.c_prop.pointRedKey.home_main,
                gc.c_prop.pointRedKey.role_main,
                gc.c_prop.pointRedKey.make_main,
                -1,
                gc.c_prop.pointRedKey.shopMain
            ];
            self._checkLvls = [30, 50, 80, 110];
            self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self._updateRed);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.modViewArr = [
                self.btn_fight,
                self.btn_home,
                self.btn_role,
                self.btn_forge,
                self.btn_bag,
                self.btn_shop
            ];
            self._updateRed();
            self.selected = g_base.modIdx;
            //if(g_fight.mapView){
            //    g_fight.mapView.addEventListener(g_fight.MAP_EVENT_HPMP_CHANGE,this.updateHP,this);
           // }
        }

        _updateRed(){
            var self = this;
            if(!self.modViewArr) return;
            for(var i = 0, li = self.redKeyArr.length; i < li; i++){
                var btn = self.modViewArr[i];
                var key = self.redKeyArr[i];
                if(key > 0){
                    btn.red_point.visible = gd.pointCtrl.isShow(key)
                }else{
                    btn.red_point.visible = false;
                }
            }
        }

        _tap_btn_fight(){
            this._onTabClick(this.btn_fight);
            var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.fight, null, function(){
                egret.setTimeout(function(){
                    self._checkBindCondtion();//检查是否绑定手机弹窗
                },self,200);
            });
        }

        _tap_btn_home(){
            //ws.recordEvent("进入【主城】模块", 1);
            this._onTabClick(this.btn_home);
            mo.moduleMgr.runModule(g_consts.moduleId.home);
        }

        _tap_btn_role(){
            //ws.recordEvent("进入【角色】模块", 1);
            //return mo.showMsg("功能开发中...");
            this._onTabClick(this.btn_role);
            mo.moduleMgr.runModule(g_consts.moduleId.role);
        }

        _tap_btn_forge(){
            //ws.recordEvent("进入【打造】模块", 1);
            this._onTabClick(this.btn_forge);
            mo.moduleMgr.runModule(g_consts.moduleId.forge);
        }
        _tap_btn_bag(){
            //ws.recordEvent("进入【包裹】模块", 1);
            this._onTabClick(this.btn_bag);
            mo.moduleMgr.runModule(g_consts.moduleId.bag);
        }
        _tap_btn_shop(){
            //ws.recordEvent("进入【探宝】模块", 1);
            this._onTabClick(this.btn_shop);
            mo.moduleMgr.runModule(g_consts.moduleId.shop);
        }

        _onTabClick(tab:g_comp.Tab_Sys){
            var self = this;
            var modViewArr = self.modViewArr;
            for(var i = 0, li = modViewArr.length; i < li; i++){
                var modTab:g_comp.Tab_Sys = modViewArr[i];
                modTab.enabled = true;
                modTab.img_s.visible = false;
            }
            tab.enabled = false;
            tab.img_s.visible = true;
            self.curModIdx = modViewArr.indexOf(tab);
            self._updateRed();
        }

        _checkLvls:Array<number>;
        _checkBindCondtion(){ //检查等级是否满足弹出手机绑定界面的条件
            var self = this;
            var userLvl = parseInt(gd.userCtrl.getLvl());
            var checkLvls = self._checkLvls;
            if(checkLvls.indexOf(userLvl) >=0){
                mo.moduleMgr.runModule(g_consts.moduleId.bindPhone);
            }
        }

        public set selected(idx){
            var self = this;
            if(self.curModIdx == idx) return;
            var modViewArr = self.modViewArr;
            for(var i = 0, li = modViewArr.length; i < li; i++){
                var modTab:g_comp.Tab_Sys = modViewArr[i];
                modTab.enabled = (i!=idx);
                modTab.img_s.visible = (i == idx);
            }
            self.fight_hp.visible = idx == 0 ? true : false;
            self.btn_fight.visible = idx != 0 ? true : false;
            self.curModIdx = idx;
        }

        public get selected(){
            return this.curModIdx;
        }

        public updateHP(infos:number[]):void {
            var self = this;
            self.fight_hp.updateHp(infos[0],infos[1]);
        }

        public updateMP(infos:number[]):void {
            var self = this;
            self.fight_hp.updateMp(infos[0], infos[1]);
        }

    }
}