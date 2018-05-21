/**
 * Created by Administrator on 2015/10/8.
 */
module g_activity{
    export class NewFiveRankItem extends mo.gui.ItemRenderer{
        ico_day:egret.gui.UIAsset;
        ico_title:egret.gui.UIAsset;
        img_done:egret.gui.UIAsset;
        ico_item:g_comp.Ico_Item;

        label_lv;
        label_name;
        label_combat;
        label_rankType;
        label_empty;

        ico_head;
        ico_rank;

        static rankType =[
            "总阶数:",
            "总级数:",
            "总级数:",
            "战力:",
            "",
        ]

        _initProp(){
            super._initProp();
            var self = this;
            mo.gui.helper.setSkinName(this, FiveRankItem.__className);

        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
            self.label_empty.visible = false;
            for(var i = 0, li = 2; i < li; i++){
                self['ico_item'+i].visible = false;
                self['ico_item'+i].showEquipName = true;
                self['ico_item'+i].onClick(function(ico_item){
                    g_base.BaseItemDetail.create().setData({bdc: gd.BagDataCtrl.create(ico_item.get('itemId'), null)}).show();
                }, self);
            }
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var data = self.data;
            var FiveDaysTargetEntity = gc.dsConsts.FiveDaysTargetEntity;

            var dayIdx = self.delegate.data.idx;
            var isDone = gd.newFourDaysCtrl.isCertified(dayIdx); //是否已认证
            self.img_done.visible = isDone;

            var idx = dayIdx * 3 + self.itemIndex;
            //奖励
            var gameInfo = mo.getJSONWithFileNameAndID(gc.cfg_c_game, gc.id_c_game.newFourRank);
            var reString  = gameInfo[idx];
            var strs = reString.split(",");
            var i=0;
            for (var j =0; strs&&j < strs.length; j += 2) {
                i=j/2;
                self['ico_item'+i].setData({itemId: strs[j], count: strs[j+1]});
                self['ico_item'+i].visible = true;
            }
            for(var n=i+1; n<2; ++n){
                self['ico_item'+n].visible = false;
            }

            //排名
            var rank = self.itemIndex;
            var rankStrs = ["1st", "2nd", "3rd"];
            if(rank<3){
                self.ico_rank.source = "ico_arena_"+rankStrs[rank];
            }
            //用户信息
            var hasData = data!=null;
            self.label_name.visible = hasData;
            self.label_rankType.visible = hasData;
            self.label_combat.visible = hasData;
            self.ico_head.visible = hasData;
            self.label_empty.visible = !hasData;
            var passedDayIdx = gd.newFourDaysCtrl.getCurActDay() > dayIdx;
            if(!hasData) self.label_empty.text = passedDayIdx? "结算中..." : "虚位以待";
            if(hasData){
                self.label_name.text = data[FiveDaysTargetEntity.userName];
                self.label_rankType.text =  self.__class.rankType[self.delegate.data.idx];
                self.label_combat.text =  data[FiveDaysTargetEntity.rankValue];
                self.ico_head.setData({icoId:data[FiveDaysTargetEntity.iconId],
                    vip:data[FiveDaysTargetEntity.pkWinCount]});
            }
        }
    }
}