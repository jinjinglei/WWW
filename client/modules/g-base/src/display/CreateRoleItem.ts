/**
 * Created by SmallAiTT on 2015/8/5.
 */
module g_base{
    export class CreateRoleItem extends mo.gui.ItemRenderer{
        ico_0:egret.gui.UIAsset;
        ico_1:egret.gui.UIAsset;
        ico_job:egret.gui.UIAsset;
        img_border:egret.gui.UIAsset;

        static ON_GENDER_CHANGED:string = "on_gender_changed"; //0女 1男


        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.img_border.visible = false;
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var job = self.data; //1战士 2法师 3道士
            self.enabled = gd.heroCtrl? !gd.heroCtrl.hasHeroByJob(job) : true;
            if(self.enabled){
                self.ico_0.source =  mo.STR.format("avatar_%s_%s_1", job, 0);
                self.ico_1.source =  mo.STR.format("avatar_%s_%s_1", job, 1);
            }else{
                self.ico_0.source =  mo.STR.format("avatar_%s_%s_2", job, 0);
                self.ico_1.source =  mo.STR.format("avatar_%s_%s_2", job, 1);
            }
            self.ico_job.source =  mo.STR.format("txt_job_%s", job);

            self.img_border.visible = false;
            self.invalidateSkinState();
        }

        _ico_clicked(ico:egret.gui.UIAsset){
            var self = this;
            var iW = ico.width, iH = ico.height;
            var bW = self.img_border.width, bH = self.img_border.height;
            self.img_border.x = ico.x - (bW-iW)/2;
            self.img_border.y = ico.y - (bH-iH)/2;
        }

        _tap_ico_0(){
            var self = this;
            self._ico_clicked(self.ico_0);
            self.emitter.emit(self.__class.ON_GENDER_CHANGED,  gc.c_prop.sexKey.female, self.data, self);
        }

        _tap_ico_1(){
            var self = this;
            self._ico_clicked(self.ico_1);
            self.emitter.emit(self.__class.ON_GENDER_CHANGED,  gc.c_prop.sexKey.male, self.data, self);
        }

        getCurrentSkinState(){
            var str = super.getCurrentSkinState();
            this.img_border.visible = this.selected;
            if(!this.selected) {
                this._ico_clicked(this.ico_1);
            }
            return str;
        }
    }
}