/**
 * Created by Administrator on 2016/1/5.
 */
module g_red{
    export class RedPacketGetCell extends mo.gui.ItemRenderer{

        label_rmb;
        label_name;
        ico_best;
        ico_item;

        dataChanged(){
            super.dataChanged();
            var self = this;
            if(!self.data) return;

            var data = self.data.data;//[元宝数量，用户Id,用户名称]
            if(!data) return;
            var rmb = data[0];
            var name = data[2];
            var best = data[data.length-1];

            self.label_name.text = name;
            self.label_rmb.text = rmb.toString();
            self.ico_best.visible = best== rmb;

            var spItemId = self.data.spItemId;
            self.setItemIcon(self.ico_item, spItemId);

        }
        setItemIcon( iconItem,spItemId){
            var self = this;
            if( spItemId == gc.c_prop.spItemIdKey.diamond){
                iconItem.source = "ico_yuanbao";
            }
            else{
                var imgPath = resHelper.getSmallItemPath(spItemId);
                RES.getResByUrl(imgPath, function (texture:egret.Texture) {
                    iconItem.source = texture;
                }, self, RES.ResourceItem.TYPE_IMAGE);
            }
        }

    }
}