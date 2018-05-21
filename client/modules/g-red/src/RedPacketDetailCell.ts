/**
 * Created by Administrator on 2016/1/5.
 */
module g_red{
    export class RedPacketDetailCell extends mo.gui.ItemRenderer{
        label_name;
        label_get;
        img_icon;

        dataChanged(){
            super.dataChanged();
            var self = this;

            var data = self.data;
            if(!data) return;

            var spItemId = data.itemId;
            var num = data.count;

            self.label_get.text = num.toString();

            var temp = mo.getJSONWithFileNameAndID(gc.cfg_t_item, spItemId);
            var name = temp ?temp[gc.t_item_name] : "";
            var tempName:string = "获得%s总数量:";
            var  nameTxt = tempName.replace("%s",name);
            self.label_name.text = nameTxt;

            self.setItemIcon( self.img_icon,spItemId);
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