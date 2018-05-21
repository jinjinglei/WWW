/**
 * Created by john on 15/12/10.
 */
module g_guild{
    export class GuildUpdateNotice extends  mo.gui.Dlg {

        inputNotice;
        dataChanged() {
            super.dataChanged();
            var self = this;

            self.inputNotice.text = self.data[gc.dsConsts.GuildEntity.notice];
        }
        _tap_btn_confirm()
        {
            var self = this;
            gd.guildCtrl.setNotice(self.inputNotice.text, function(data){
                self
                self.close();
            },self);
        }
    }
}