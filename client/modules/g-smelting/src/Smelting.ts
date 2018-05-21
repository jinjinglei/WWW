/**
 * Created by SmallAiTT on 2015/7/24.
 */
module g_smelting{
    export class Smelting extends g_base.CloseInfoDlg{
        list_items:egret.gui.List;
        _Item_list_items;

        equipIds:Array<any>;
        ckb_keep:egret.gui.CheckBox;
        _playingEffect = false;
        _fromChoose:boolean = false;

        emitter:egret.Emitter;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            self._helpDataId = 4;
            self._Item_list_items = SmeltingItem;
        }

        _initItem_list_items(cell:SmeltingItem){
            var self = this;
            var efx = cell.efx;
            var refreshFunc = function(){
                self._counter++;
                if(self._counter >= self.equipIds.length){
                    self.refreshList("list_items");
                    self._playingEffect = false;
                }
            };
            self.emitter.on('dtor', function () {
                var _efx = efx;
                _efx.removeEventListener(egret.Event.COMPLETE, refreshFunc, self);
            });
            efx.addEventListener(egret.Event.COMPLETE, refreshFunc, self);
        }

        _counter = 0;
        _data_list_items():any[]{
            var self = this, filter, sorter;
            var equipIds = self._fromChoose? self.equipIds : gd.equipCtrl.getSmeltArr(self.ckb_keep.selected? 1 : 0);
            self._fromChoose = false;
            self.equipIds = self._fillArr(equipIds, 9, null);
            self._counter = 0;
            return equipIds;
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.ckb_keep.selected = true;
            self.registerClassByKey(gd.EquipCtrl, gd.EquipCtrl.ON_BATCH_SMELT, function () {
                self.refreshList("list_items");
            });
        }

        _tap_btn_batchResolve(){
            var self = this;
            SmeltingBatch.create().show();
        }
        _tap_btn_resolve(){
            var self = this;
            if(self._playingEffect){
                return;
            }
            var msg;
            if(self._hasCustomEquip){
                msg = gc.id_c_msgCode.ifSmeltCustom;
            }
            if(self._hasSpecailEquip){
                msg = gc.id_c_msgCode.ifSmeltHeirloom;
            }

            if(msg){
                mo.showMsg(msg, function(){
                    self._doSmelting();
                });
            }else{
                self._doSmelting();
            }
        }

        _doSmelting(){
            var self = this;
            var equipIds = self.equipIds.filter(function(equipId){
                return equipId != null;
            });

            if(equipIds.length > 0){
                self._playingEffect = true;
            }
            gd.equipCtrl.smelt(equipIds,0, function(){
                self._hasSpecailEquip = false;
                self._hasCustomEquip = false;
            }, self);
        }

        _chg_ckb_keep(){
            var self = this;
            self.refreshList("list_items");
        }

        _hasSpecailEquip;//是否有传承装备
        _hasCustomEquip;//是否有订制装备
        chooseEquipForIdx(idx){
            var self = this;
            var equips = self.equipIds.filter(function(equipId){
                return equipId != null;
            });
            var layer = SmeltEquipChoose.create().setData({equipIds:equips, maxNum: 9}).show();
            layer.onClose(function(e){
                if(layer.doWhat <= 0) return;//点确定才真真添加
                self.equipIds = equips;
                self._fromChoose = true;
                self._hasSpecailEquip = layer.specialEquipNum > 0;
                self._hasCustomEquip = layer.customEquipNum > 0;
                self.refreshList("list_items");
            });
        }

        dropEquipByIdx(idx){
            var self = this;
            self.equipIds[idx] = null;
            self._fromChoose = true;
            self.refreshList("list_items");
        }

        /**
         * 按指定长度末尾填充数组
         * @param arr
         * @param maxLen 指定长度
         * @param fillV 填充值
         * @returns {Array<any>}
         * @private
         */
        _fillArr(arr:Array<any>, maxLen:number, fillV:any){
            if(maxLen <= arr.length) return arr;
            for(var i = 0, li = maxLen - arr.length; i < li; i++){
                arr.push(fillV);
            }
            return arr;
        }
    }

    egret.Boot.once(egret.Boot.AFTER_CONFIG, function(){

        //主模块配置
        var moduleCfgItem = new mo.ModuleCfgItem();
        moduleCfgItem.targetClass = Smelting;
        moduleCfgItem.notOwnRes = true;
        mo.moduleMgr.registerModule(moduleCfgItem);

        moduleCfgItem.onPreAsync(function(moduleParam, cb){
            cb();
        });
    });
}