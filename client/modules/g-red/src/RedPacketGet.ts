/**
 * Created by Administrator on 2016/1/5.
 */
module g_red{
    export class RedPacketGet extends mo.gui.Dlg{

        label_rmb;
        label_red;
        label_name;
        label_desc;
        list_get;
        _Item_list_get;

        ico_item;

        _initProp(){
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
            self._Item_list_get = RedPacketGetCell;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            if(self.moduleParam){
                self.setData(self.moduleParam);
            }
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;
            if(!data) return;
            var type = data[gc.dsConsts.RedEnvelopeEntity.redType];
            var name = gd.redEnvelopeCtrl.getNameById(data[gc.dsConsts.RedEnvelopeEntity.userId]);
            var desc = data[gc.dsConsts.RedEnvelopeEntity.wish];
            var getData = data[gc.dsConsts.RedEnvelopeEntity.getData];
            var getRmb = 0;
            for(var i=0; getData&&i<getData.length; ++i){
                if(gd.userCtrl.getId()==getData[i][1]){
                    getRmb = getData[i][0];
                    break;
                }
            }

            self.label_red.text = mo.STR.format("[%s]",gc.c_prop.redEnvelopeType[type]);
            self.label_rmb.text = getRmb.toString();
            self.label_name.text = name;
            self.label_desc.text = desc;


            var spItemId = data[gc.dsConsts.RedEnvelopeEntity.spItemId];
            self.setItemIcon( self.ico_item,spItemId);
        }

        //_data_list_get():any[]{
        //    var self = this;
        //    var data = self.data;
        //
        //    var getData = data[gc.dsConsts.RedEnvelopeEntity.getData];
        //    var hasGetDatas = [];
        //
        //    var spItemId = data[gc.dsConsts.RedEnvelopeEntity.spItemId];
        //
        //    var best = -1;
        //    for(var i=0; getData&&i<getData.length; ++i){
        //        if(getData[i].length<2)
        //            continue;
        //
        //        var dataObject = {}
        //        dataObject["spItemId"] = spItemId;
        //        dataObject["data"] = getData[i];
        //
        //        hasGetDatas.push(dataObject);
        //        if(getData[i][0]>best){
        //            best = getData[i][0];
        //        }
        //
        //
        //    }
        //    hasGetDatas.sort(function(a, b){
        //        return b["data"][0]-a["data"][0];
        //    });
        //    for(var i=0;i<hasGetDatas.length; ++i){
        //        var bestObject = {}
        //        bestObject["spItemId"] = spItemId;
        //        bestObject["data"] = best;
        //
        //        hasGetDatas[i].push(bestObject);
        //    }
        //
        //    return hasGetDatas;
        //}

        _data_list_get():any[]{
            var self = this;
            var data = self.data;
            var getData = data[gc.dsConsts.RedEnvelopeEntity.getData];
            var hasGetDatas = [];
            var best = -1;

            var spItemId = data[gc.dsConsts.RedEnvelopeEntity.spItemId]

            var countNum :number = 0;
            for(var i=0; getData&&i<getData.length; ++i){
                if(getData[i].length<2)
                    continue;
                if(countNum > 100){
                    break;
                }
                hasGetDatas.push(getData[i]);
                if(getData[i][0]>best){
                    best = getData[i][0];
                }

                countNum += 1;
            }
            hasGetDatas.sort(function(a, b){
                return b[0]-a[0];
            });
            for(var i=0;i<hasGetDatas.length; ++i){
                hasGetDatas[i].push(best);
            }

            var dataArr = [];
            for(var i=0;i<hasGetDatas.length; ++i) {
                var bestObject = {}
                bestObject["spItemId"] = spItemId;
                bestObject["data"] = hasGetDatas[i];

                dataArr.push( bestObject);
            }

            return dataArr;
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



    //egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){
    //
    //    //主模块配置
    //    var moduleCfgItem = new mo.ModuleCfgItem();
    //    moduleCfgItem.targetClass = RedPacketGet;
    //    moduleCfgItem.fullScr = true;
    //    mo.moduleMgr.registerModule(moduleCfgItem);
    //
    //    moduleCfgItem.onPreAsync(function(moduleParam, cb){
    //        cb();
    //    });
    //});
}