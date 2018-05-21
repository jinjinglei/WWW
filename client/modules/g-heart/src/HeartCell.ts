/**
 * Created by Administrator on 2016/1/5.
 */
module g_heart {
    export class HeartCell extends mo.gui.ItemRenderer {

        grp_heart;
        grp_can;
        grp_cannot;
        ico_heart;

        ico_title;
        label_ceng;
        label_desc;

        label_title_can;

        label_cannot;
        label_title_cannot;

        btn_change;

        _initProp() {
            var self = this;
            super._initProp();
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var index = self.itemIndex;
            var id = self.data.id;

            if(id){
                self.grp_can.visible = false;
                self.grp_cannot.visible = false;
                self.grp_heart.visible = true;
                var datas = gd.heartStuntCtrl.getHeartStuntArr(id);//【等级，层数，当前点数】
                var ceng = datas[1];
                var info = mo.getJSONWithFileNameAndID(gc.cfg_c_heartStunt, id);

                self.ico_heart.source = resHelper.getHeartIconPath(id);
                self.ico_title.source = resHelper.getHeartNamePath(id);
                self.label_ceng.text = ceng+"";
                self.label_desc.text = info[gc.c_heartStunt_desc];

                var entity = gd.heartStuntCtrl.getData();
                var stateArr = entity[gc.dsConsts.HeartStuntEntity.stateArr];
                var infos = mo.getJSONWithFileName(gc.cfg_c_heartStunt);
                //self.btn_change.visible = stateArr.length<Object.keys(infos).length;
                self.btn_change.visible = true;
            }else{
                self.ico_heart.source = "ico_xinfahuitai";
                self.grp_heart.visible = false;
                var indexStrs = ["一","二","三","四","五","六","七","八","九"];
                var con = gd.heartStuntCtrl.getOpenCon(index);//【开启等级，vip提前开启等级】
                if(gd.userCtrl.getLvl()>=con[0] || gd.userCtrl.getVip()>=con[1]){
                    self.grp_can.visible = true;
                    self.grp_cannot.visible = false;
                    self.label_title_can.text = indexStrs[index];
                }else{
                    self.grp_can.visible = false;
                    self.grp_cannot.visible = true;
                    self.label_title_cannot.text = indexStrs[index];
                    self.label_cannot.text = con;
                }

                self.btn_change.visible = false;
            }
        }

        _tap_rect_touch(){
            var self = this;
            var index = self.itemIndex;
            var id = self.data.id;

            if(id) {
                HeartDetail.create().setData({id:id, index:index}).show().onClose(function(){
                    self.delegate.reset();
                });
            }else{
                var con = gd.heartStuntCtrl.getOpenCon(index);//【开启等级，vip提前开启等级】
                if(gd.userCtrl.getLvl()>=con[0] || gd.userCtrl.getVip()>=con[1]){
                    HeartSelect.create().setData({index:index}).show().onClose(function(){
                        self.delegate.reset();
                    });
                }else{
                    mo.showMsg(gc.id_c_msgCode.formulaNoOpen, con[0], con[1]);
                }
            }
        }

        _tap_btn_change(){
            var self = this;
            HeartChangeSelect.create().setData({index:self.itemIndex}).show().onClose(function(){
                self.delegate.reset();
            });;
        }
    }
}