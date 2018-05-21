/**
 * Created by Administrator on 2016/1/5.
 */
module g_heart {
    export class HeartLayer extends mo.gui.Layer {
        list_heart:egret.gui.List;
        _Item_list_heart;



        _initProp() {
            var self = this;
            super._initProp();
            self._Item_list_heart = HeartCell;
            self._layerOpt.shownWithAction = false;
            //self.registerClassByKey(gd.DemonLotusCtrl, gc.dsConsts.DemonLotusEntity.lvl.toString(), self.dataChanged);
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;

        }

        reset(){
            var self = this;
            self.refreshList("list_heart");
        }

        _data_list_heart():any[]{
            var self = this;
            var entity = gd.heartStuntCtrl.getData();
            var stateArr = entity[gc.dsConsts.HeartStuntEntity.stateArr];
            var hearts = [];
            for(var i=0; i<3; ++i){
                hearts[i] = {id:stateArr[i]||0};
            }

            return hearts;
        }

        //_click_list_heart(){
        //
        //}

        //_tap_btn_close() {
        //    mo.moduleMgr.runModule(g_consts.moduleId.fight);
        //}

        _tap_btn_help() {
            g_base.BaseShowTip.create().setData({id: 50}).show();
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.fullScr = true;
        moduleCfgItem.targetClass = HeartLayer;
        moduleCfgItem.sysId = gc.id_c_open.heartStunt1;// 系统id
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            gd.heartStuntCtrl.getInfo(function(data){
                moduleParam.data = data;
                cb();
            }, this);
        });
    });
}