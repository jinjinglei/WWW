/**
 * Created by Administrator on 2015/12/2.
 */
module g_guild{
    export class CreateGuild extends mo.gui.Dlg{

        label_yuanbao;
        inputName:egret.gui.TextInput;

        onEnter(){
            super.onEnter();
            var self = this;
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.guildSet);

            self.label_yuanbao.text = ""+gameInfo[1];
        }

        _tap_btn_create() {
            var self = this;
            gd.guildCtrl.establishGuild(self.inputName.text, function(data){
                self.close();
                mo.moduleMgr.curModule.subModules[0].target.close();
                process.nextTick(function(){
                    mo.moduleMgr.runModule(g_consts.moduleId.guildMineLayer);
                });
            }, self);
        }
    }
}