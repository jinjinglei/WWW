/**
 * Created by Administrator on 2016/1/25.
 */
module g_guildwar{
    export class GuildWarAttackRecDlg extends mo.gui.Dlg {
        label_rec;
        scroller;
        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
        }
        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }
        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data.recData;//[gc.dsConst.GuildWarAttackRecord]
            var str = "";
            var tempStr = "%s[ubb color=#00b150]%s[/ubb][ubb color=#7030a1][%s][/ubb][ubb color=#00b1f1]%s[/ubb]击杀了[ubb color=#00b150]%s[/ubb][ubb color=#7030a1][%s][/ubb][ubb color=#00b1f1]%s[/ubb]\n\n";
            var breakStr = "%s[ubb color=#00b150]%s[/ubb][ubb color=#7030a1][%s][/ubb][ubb color=#00b1f1]%s[/ubb] 击破了 [ubb color=#00b150]%s[/ubb][ubb color=#7030a1][%s][/ubb][ubb color=#00b1f1]%s[/ubb] 守卫的%s门\n\n";
            for(var i=data.length-1; i>=0; --i){
                var rec = data[i];
                var isBreak = rec[gc.dsConsts.GuildWarAttackRecord.isBreak];
                var time = Date.newDate(rec[gc.dsConsts.GuildWarAttackRecord.time]);
                if(!isBreak){
                    str += mo.STR.format(tempStr,
                        time.toFormat("HH24:MI"),
                        rec[gc.dsConsts.GuildWarAttackRecord.aServerName],
                        rec[gc.dsConsts.GuildWarAttackRecord.aGuildName],
                        rec[gc.dsConsts.GuildWarAttackRecord.aUserName],
                        rec[gc.dsConsts.GuildWarAttackRecord.dServerName],
                        rec[gc.dsConsts.GuildWarAttackRecord.dGuildName],
                        rec[gc.dsConsts.GuildWarAttackRecord.dUserName]
                    );
                }else{
                    str += mo.STR.format(breakStr,
                        time.toFormat("HH24:MI"),
                        rec[gc.dsConsts.GuildWarAttackRecord.aServerName],
                        rec[gc.dsConsts.GuildWarAttackRecord.aGuildName],
                        rec[gc.dsConsts.GuildWarAttackRecord.aUserName],
                        rec[gc.dsConsts.GuildWarAttackRecord.dServerName],
                        rec[gc.dsConsts.GuildWarAttackRecord.dGuildName],
                        rec[gc.dsConsts.GuildWarAttackRecord.dUserName],
                        gc.c_prop.guildWarDoor[rec[gc.dsConsts.GuildWarAttackRecord.door]]
                    );
                }
            }
            str = str.substr(0, str.length-2);
            self.label_rec.text = str;
            //process.nextTick(function(){
            //    process.nextTick(function(){
            //        process.nextTick(function(){
            //            self.scroller.throwVertically(self.label_rec.height,0);
            //        });
            //    });
            //});
        }
    }
}