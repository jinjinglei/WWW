/**
 * Created by Administrator on 2015/9/20.
 */
module g_fight{
    export class LootView extends MapEleView{
        public itemID:number;
        public itemNum:number;
        public row:number;
        public col:number;
        public begTime:number = 0;

        public itemIcon:egret.Bitmap = new egret.Bitmap();
        public textField:egret.TextField = new egret.TextField();

        public updateView():void{
            var itemInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_item, this.itemID);
            var type = itemInfo[gc.t_item_type];
            var color = uiHelper.getColorByQuality(itemInfo[gc.t_item_color]);

            this.textField.strokeColor = 0;
            this.textField.stroke = 0.5;
            this.textField.textColor = color;
            this.textField.size = 14;
            var url:string = "";
            if(type==gc.c_prop.itemTypeKey.gold) {
                this.textField.text = this.itemNum.toString();
                url = "resource/dynamic2/icon_100.png";
            }else{
                var name = itemInfo[gc.t_item_name];
                url = "resource/"+resHelper.getItemIconPath(this.itemID);
                if(this.itemID==gc.c_prop.spItemIdKey.diamond){
                    this.textField.text = this.itemNum.toString();
                }else{
                    this.textField.text = name;
                }
            }

            process.nextTick(function(){
                if(!this.textField)return;
                this.textField.x = this.x-this.textField.width/2;
            },this);
            RES.getResByUrl(url, function (texture:egret.Texture) {
                this.itemIcon.texture = texture;
                this.itemIcon.scaleX = this.itemIcon.scaleY = 0.5;
                this.itemIcon.x = -this.itemIcon.width*this.itemIcon.scaleX/2;
                this.addChild(this.itemIcon);
            }, this, RES.ResourceItem.TYPE_IMAGE);
            this.cacheAsBitmap = true;
        }

        public pickUp():void{
            if(this.parent)
                this.parent.removeChild(this);
            if(this.textField.parent)
                this.textField.parent.removeChild(this.textField);
        }

        public canAutoPickUp(){
            if (this.begTime != 0 && Date.newDate().getTime() - this.begTime >= 3 * 1000) {
                return true;
            }
            return false;
        }
    }
}