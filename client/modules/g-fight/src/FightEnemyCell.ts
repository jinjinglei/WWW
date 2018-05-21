/**
 * Created by Administrator on 2015/9/23.
 */
module g_fight{
    export class FightEnemyCell extends mo.gui.Comp{
        ico_role;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTap, this);
        }

        onEnter(){
            super.onEnter();
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            var resName = uiHelper.getHeroIcon(self.data[gc.dsConsts.PkOutUserData.iconId], 0);
            mo.R.loadTo('FightScene', resName, function(){});
            self.ico_role.source = resName;
        }

        onTap(e){
            var self = this;
            g_fight.PVPBattle.create().setData({pkTarget:self.data}).show();
        }
    }
}