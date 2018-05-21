/**
 * Created by Administrator on 2015/11/3.
 */
module g_mid{
    export class SaveGame extends mo.gui.Dlg{
        btn_save;
        btn_get;
        list_items;
        _Item_list_items;
        img_bg:egret.gui.UIAsset;
        
        showType:number;
        position:number;

        _initProp(){
            super._initProp();
            var self = this;

            self._Item_list_items = g_base.BaseItemCell;
        }

        showAndType(type:number, position:number):mo.gui.Dlg{
            var self = this;
            self.showType = type;
            self.position = position;
            super.show();
            return self;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            if(self.showType == 1){
                self.img_bg.source = "und_share";
                self.btn_save.icon = "btn_txt_g_sharegame";
            }else if(self.showType == 2){
                self.img_bg.source = "und_follow";
                self.btn_save.icon = "btn_txt_g_followgame";
            }
        }

        onEnter(){
            super.onEnter();
            var self = this;

            var ch = mo_channel.getCurChannel();
            ch.getDesktopInfo(self.position, (suc:boolean, data:g_channel.WooolSdkDesktopResult)=>{
                self.btn_save.visible = data.isfav == 0;
                self.btn_get.visible = data.isfav != 0;
            }, self);
            /*
            ch.isSendToDesktopSucc(function(suc, fav){
                self.btn_save.visible = fav == 0;
                self.btn_get.visible = fav != 0;
            },self);
            */            
        }

        _tap_btn_save(){
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.setDesktopInfo(self.position, (suc:boolean)=>{
                if (suc)
                    self.close();
            }, self);
            /*
            ch.sendToDesktop(null, function(isSucc){
                if(isSucc){
                    self.close();
                }
            }, self);
            */
        }

        _tap_btn_get() {
            var self = this;
            var ch = mo_channel.getCurChannel();
            ch.acquireDesktopReward(self.position, (suc:boolean)=>{
                if (suc)
                    self.close();
            }, self);

            /*
            gd.userCtrl.getAddDeskReward(function(){
                self.close();
            },self);
            */
        }

        _data_list_items() {
            var self = this;
            var gameCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.otherReward);
            var str = gameCfg[0];
            if (self.showType == 1)
                str = gameCfg[2];

            var itemStrs = str.split(",");
            var items = [];
            for(var i=0; i<itemStrs.length; ++i){
                var is = itemStrs[i].split(':');
                items.push({itemId:is[0],count:is[1]});
            }

            return items;
        }
        _initItem_list_items(cell:g_base.BaseItemCell){
            var self = this;
            cell.tapShowDetail = true;
        }
    }
}