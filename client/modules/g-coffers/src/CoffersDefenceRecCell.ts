/**
 * Created by Administrator on 2016/1/25.
 */
module g_coffers{
    export class CoffersDefenceRecCell extends mo.gui.ItemRenderer{
        ico_def;
        label_desc;

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;//gc.dsConsts.CoffersRecord
            if(!data[gc.dsConsts.CoffersRecord.time]) return;
            var isWin = data[gc.dsConsts.CoffersRecord.isWin];
            var time = Date.newDate(data[gc.dsConsts.CoffersRecord.time]);
            var serverName = data[gc.dsConsts.CoffersRecord.serverName];
            var attackName = data[gc.dsConsts.CoffersRecord.attackName];
            var door = data[gc.dsConsts.CoffersRecord.door];
            var defeseName = data[gc.dsConsts.CoffersRecord.defeseName];
            var recource = data[gc.dsConsts.CoffersRecord.recource];
            var str;
            if(!isWin){//反一下
                self.ico_def.source = "ico_pvp_win";
                str = "[%s]来自[ubb color=#fd68ff]%s[/ubb]的[ubb color=red]%s[/ubb]攻击了我服国库%s门，被该门守卫[ubb color=#00cdff]%s[/ubb]击败，灰溜溜得逃走了。";
                str = mo.STR.format(str,
                    time.toFormat("HH24:MI"),
                    serverName,
                    attackName,
                    gc.c_prop.offersDoor[door],
                    defeseName);
            }else{
                self.ico_def.source = "ico_pvp_fail";
                str = "[%s]来自[ubb color=#fd68ff]%s[/ubb]的[ubb color=red]%s[/ubb]击败了%s守卫[ubb color=#00cdff]%s[/ubb]，我服国库%s门被击破！"
                str = mo.STR.format(str,
                    time.toFormat("HH24:MI"),
                    serverName,
                    attackName,
                    gc.c_prop.offersDoor[door],
                    defeseName,
                    gc.c_prop.offersDoor[door]);
            }
            self.label_desc.text = str;
        }
    }
}