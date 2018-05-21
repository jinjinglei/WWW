/**
 * Created by admin on 16/5/3.
 */
/**
 * Created by lihex on 9/19/15.
 */
module g_role {

    /**
     *
     * @author
     *
     */
    export class RoleWingUpgrade extends mo.gui.Dlg{

        btn_keyUpgrade:egret.gui.Button;
        btn_close:egret.gui.Button;
        labelCurreLevel:egret.gui.Label;
        labelCurreStar:egret.gui.Label;
        labelNextLevel:egret.gui.Label;
        labelFeather:egret.gui.Label;
        labelMoney:egret.gui.Label;
        ckb_common;
        ckb_advanced;
        ckb_useStone;
        trainType:number = 0;
        isUseDiamond:boolean = false;

        _initProp() {
            var self = this;
            super._initProp();

        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;

            var recordWingTypeStr :string = gd.heroCtrl.getWingUpgradeTypeStr();
            recordWingTypeStr = recordWingTypeStr == "" ? "common" :recordWingTypeStr;
            self.setType(recordWingTypeStr);
        }

        onExit(){
            super.onExit();
        }
        //tab_btn点击事件 一键   请求 升阶

        _tap_btn_keyUpgrade() {
            var self = this;

            var heroEntity = self.data.hec;
            if( heroEntity == null){
                return;
            }

            var id = heroEntity.id;
            var isUseStone:boolean = gd.heroCtrl.getIsUseStoneOpt();

            gd.heroCtrl.wingFos2Top(id,self.trainType,isUseStone,function(){
                //self.updateWing();
                var root = self.get('root');
                root.dataChanged();
                self.close();
            },self);

        }

        _chg_ckb_common(){
            var self = this;
            self.setType("common");
        }

        //高级培养
        _chg_ckb_advanced(){
            var self = this;
            self.setType("advanced");
        }

        _chg_ckb_useStone(){
            var self = this;
            //高级才生效
            if(self.trainType == gc.c_prop.wingFosTypeKey.advFoster ){
                var useStoneSelect:boolean = self.ckb_useStone.selected;
                gd.heroCtrl.setIsUseStoneOpt(useStoneSelect);
                self.showNeedResource();
            }
            else{
                self.ckb_useStone.selected = false;
            }
        }


        setType(type:string){
            var self = this;
            var com = type == "common" ? true :false;
            self.ckb_common.selected = com;
            self.ckb_advanced.selected = !com;
            self.isUseDiamond = !com;

            if(com){
                self.setTrainType(gc.c_prop.wingFosTypeKey.comFoster);
                self.ckb_useStone.selected = false;
            }
            else{
                self.setTrainType(gc.c_prop.wingFosTypeKey.advFoster);
                var isUseStone:boolean = gd.heroCtrl.getIsUseStoneOpt();
                self.ckb_useStone.selected = isUseStone;
            }

            gd.heroCtrl.setWingUpgradeTypeStr(type);

            self.updateWing();
            self.showNeedResource();
        }

        setTrainType(type:number){
            var self = this;
            self.trainType = type;
        }

        checkCanOneKeyUpgrade():boolean{

            return true;
        }

        _tap_btn_close(){
            var self = this;
            self.close();
        }

        updateWing(){
            var self = this;
            var wingMap = self.getWingData();
            if( wingMap){
                self.labelCurreLevel.text = wingMap["level"].toString();
                self.labelCurreStar.text = wingMap["star"].toString();
                self.labelNextLevel.text = wingMap["nextLevel"].toString();
            }

        }
        /*获取翅膀数据
         [id，名称，等级，当前属性{}，下一星级属性{}，当前星数，当前经验，普通培养所需，高级培养所需，拥有羽毛数量]
         翅膀[id,等级,星级,当前星经验]*/

        getWingData(){
            var self = this;
            var heroEntity = self.data.hec;
            if( heroEntity == null){
                return null;
            }

            var opt = heroEntity.getWingOpt();
            var level:number = opt.wingLvl;
            var starValue:number = opt.nowStarCount;
            var idLimit:number = opt.wingIdLimit;
            var wingId:number = opt.wingId;

            var nowObj = {};
            nowObj["level"] = level;
            nowObj["star"] = starValue;

            if(wingId >= idLimit){
                nowObj["nextLevel"] = nowObj["level"];
            }
            else{

                nowObj["nextLevel"] = nowObj["level"] +1;
            }

            return nowObj;
        }

        showNeedResource(){
            var self = this;
            var hec:gd.HeroEntityCtrl = self.get('hec');
            var opt = hec.getWingOpt();

            var stepValue :number = 0;


            if( self.trainType == gc.c_prop.wingFosTypeKey.comFoster){
                stepValue = opt.comTrain;
            }
            else{
                stepValue = opt.advTrain;
            }

            var count = self.getContNum(self.trainType);
            var value = stepValue*count;

            if( self.trainType == gc.c_prop.wingFosTypeKey.comFoster){//普通
                self.labelFeather.text = "升阶总需:"+ value+"金币";
                self.labelMoney.text = "";
            }
            else{//advance
                self.labelFeather.text = "升阶总需羽毛:"+ count+"个";
                var featherCount = opt.featherCount;

                if(gd.heroCtrl.getIsUseStoneOpt()&&featherCount < count){
                    var leftNeedValue = (count - featherCount)*stepValue;
                    self.labelMoney.text = "当前升阶仍需:"+ leftNeedValue+"元宝";
                }
                else{
                    self.labelMoney.text = "";
                }
            }
        }

        getContNum(type:number){
            var self = this;
            var hec:gd.HeroEntityCtrl = self.get('hec');
            var opt = hec.getWingOpt();

            var wingId = opt.wingId;
            var starNum:number = opt.nowStarCount;

            var needTotalExp :number = self.getTotalNeedExp(wingId,starNum);
            var c_game = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.wingCrit);
            var addExp:number = 0;
            if( self.trainType == gc.c_prop.wingFosTypeKey.comFoster){

                addExp = c_game[5];
            }
            else{

                addExp = c_game[0];
            }
            var curreExp :number = opt.nowExp;
            var count:number = Math.ceil((needTotalExp - curreExp)/addExp);

            return count;

        }


        getTotalNeedExp(id:number,starNum:number) {
            var items = mo.getJSONWithFileName(gc.cfg_t_wing);
            var totalExp :number = 0;
            var count:number =  10 - starNum;
            var idKey :number = id;

            for(var key in items){
                if( key == idKey.toString()&&count > 0 ){
                    var data =items[key];
                    var exp = data[gc.t_wing_needExp]
                    totalExp += exp;
                    idKey+=1;

                    count -=1;
                }
            }

            return totalExp;
        }

    }
}