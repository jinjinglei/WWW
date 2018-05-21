/**
 * Created by john on 15/12/4.
 */

module g_guild{
    export class GuildSearch extends mo.gui.Dlg{

        inputName;
        listLayer;

        dataChanged(){
            super.dataChanged();
            var self = this;

            self.listLayer = self.data.listLayer;
        }

        _tap_btn_search(){
            var self = this;
            gd.guildCtrl.seekGuild(self.inputName.text, function(data){
                if(data){
                    GuildSearchResult.create().setData(data).show().onClose(function(){
                        if(self.listLayer && self.listLayer.reset){
                            self.listLayer.reset();
                        }
                    });
                    self.close();
                }else{
                    mo.showMsg(gc.id_c_msgCode.guildIdIsExist);
                }
            },self);
        }

    }
}