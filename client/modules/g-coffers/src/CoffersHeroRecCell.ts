/**
 * Created by Administrator on 2016/1/25.
 */
module g_coffers{
    export class CoffersHeroRecCell extends mo.gui.ItemRenderer{
        label_desc;

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;//gc.dsConsts.CoffersRecord
            if(!data[gc.dsConsts.CoffersRecord.time]) return;
            var time = Date.newDate(data[gc.dsConsts.CoffersRecord.time]);
            var serverName = data[gc.dsConsts.CoffersRecord.serverName];
            var attackName = data[gc.dsConsts.CoffersRecord.attackName];
            var door = data[gc.dsConsts.CoffersRecord.door];
            var defeseName = data[gc.dsConsts.CoffersRecord.defeseName];
            var points = data[gc.dsConsts.CoffersRecord.points];
            var str = "[%s][ubb color=#00cdff]%s[/ubb]击破了[ubb color=#fd68ff]%s[/ubb]的%s守卫[ubb color=red]%s[/ubb]，为我服贡献了[ubb color=yellow]%s[/ubb]跨服积分！";
            str = mo.STR.format(str,
                time.toFormat("HH24:MI"),
                attackName,
                serverName,
                gc.c_prop.offersDoor[door],
                defeseName,
                points);
            self.label_desc.text = str;
        }
    }
}