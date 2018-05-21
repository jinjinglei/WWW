/**
 * Created by Administrator on 2016/1/5.
 */
module g_red{
    export class RedPacketListCell extends mo.gui.ItemRenderer{

        label_red
        label_name;
        //label_rmb;
        img_icon;

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;
            if(!data) return;
            var type = data[gc.dsConsts.RedEnvelopeEntity.redType];
            var name = gd.redEnvelopeCtrl.getNameById(data[gc.dsConsts.RedEnvelopeEntity.userId]);


            self.label_name.text = name;
            self.label_red.text = mo.STR.format("[%s]",gc.c_prop.redEnvelopeType[type]);

            self.setRedType(type );

            var spItemId =  data[gc.dsConsts.RedEnvelopeEntity.spItemId]||0;
            if( spItemId > 0){
                self.setItemIcon(self.img_icon, spItemId);
            }

        }

        _tap_btn_get(){
            var self = this;
            var data = self.data;
            var getData = data[gc.dsConsts.RedEnvelopeEntity.getData];//[[元宝数量，用户Id,用户名称]]
            gd.redEnvelopeCtrl.receiveBonus(data[gc.dsConsts.RedEnvelopeEntity.id],function(redData){
                RedPacketGet.create().setData(redData).show().onClose(function(){self.delegate.onReceive();});
            },self);
        }

        setRedType(type){
            var self = this;
            if(type == gc.c_prop.redEnvelopeTypeKey.sysComRed || type ==gc.c_prop.redEnvelopeTypeKey.sysGuildRed ){
                self.label_red.bold = true;
                self.label_red.textColor = 0xEEDE35;
            }
            else{
                self.label_red.bold = false;
                self.label_red.textColor = 0xFFFFFF;
            }
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