/**
 * Created by Administrator on 2015/11/2.
 */
module g_base{
    export class GainWayItem extends mo.gui.ItemRenderer{
        label_copyName;

        _initProp(){
            super._initProp();
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var ary = self.data;
            if(ary.length && !ary.hasOwnProperty("label")) {
                var type = ary[0];
                var text = "";
                var texts = [null,
                ["熔炼","","活动","野外PK","聊天","签到","充值","VIP%s礼包"],
                ["装备副本","炼狱副本","元神副本","竞技场商店","竞技场","", "", "日常任务","","签到"],
                ["","技能","","翅膀","",""],
                ["强化","升星","宝石","","",""],
                ["","","","","",""],
                ["","","商城","","",""],
                ["","探宝"],
                ["","行会宝库"],
                ["装备副本(110级以上)","","元神副本(玄冰古道1以上)"]
                ];

                // 1,0熔炼
                // 1,2活动
                // 1,3野外PK
                // 1,4聊天
                // 1,5签到
                // 1,6充值
                // 2,0装备副本
                // 2,1炼狱副本
                // 2,2元神副本
                // 2,10vip副本
                // 2,3竞技场商店
                // 2,4竞技场
                // 2,7日常任务
                // 3,1技能
                // 3,3翅膀
                // 4,0强化
                // 4,1升星
                // 4,2宝石
                // 6,1探宝
                // 6,2商城
                var moduleId = parseInt(ary[0]);
                var subModuleId = parseInt(ary[1]);
                var param = parseInt(ary[2] ? ary[2] : 0);
                var moduleParam:any;

                if(texts[moduleId]){
                    text = texts[moduleId][subModuleId];
                }
                if (moduleId==2 && param != 0) {
                    if(subModuleId == 10){ //vip副本
                        var vip = param;
                        var vipCopyCfg = mo.getJSONWithFileNameAndID(gc.cfg_c_vipCopy, vip);
                        text = vipCopyCfg[gc.c_vipCopy_name];
                    }else{//其他副本
                        var copyId = param;
                        var copyInfo = mo.getJSONWithFileNameAndID(gc.cfg_t_copy, copyId);
                        text = copyInfo[gc.t_copy_name];
                    }
                }else if(moduleId==1 && param != 0){
                    text = mo.STR.format(text, param);
                }else if(moduleId==99){
                    text = gc.c_prop.outActivityType[subModuleId];
                }

                self.label_copyName.text = text;
            }
        }
    }
}