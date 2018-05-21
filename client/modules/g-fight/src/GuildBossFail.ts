/**
 * Created by Administrator on 2015/12/29.
 */
module g_fight{
    export class GuildBossFail extends FightDlg{
        label_leftHp;
        label_damage;

        dataChanged(){
            super.dataChanged();
            var self = this;
            var result = self.data.result;
            var fec:gd.BossFightEntityCtrl = self.data.fec;

            self.label_damage.text = result[gc.dsConsts.BossResult.totalHurt];
            self.label_leftHp.text = fec.getCurHp();
        }

        _tap_btn_forge(){
            mo.moduleMgr.runModule(g_consts.moduleId.forge);
        }

        _tap_btn_shop(){
            mo.moduleMgr.runModule(g_consts.moduleId.shop);
        }

        _tap_btn_close(){
            //gd.guildCtrl.getInfo(function(){},this);
        }
    }
}