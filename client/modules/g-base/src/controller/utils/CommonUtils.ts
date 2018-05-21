/**
 * Created by Administrator on 2015/9/22.
 */

module gd {
    export class CommonUtils {
        /**
         * 获取最后一次的刷新具体时间,默认5点
         * @param hours
         * @returns {Date}
         */
        getCurLastRefreshTime(hours?) {
            hours = hours || 5;
            var curHour = Date.newDate().getHours();
            var reTime:Date = null;
            if (curHour < hours) {
                reTime = Date.newDate().addDays(-1).clearTime().addHours(hours);
            } else {
                reTime = Date.newDate().clearTime().addHours(hours);
            }
            return reTime;
        }

        /**
         * 计算每日刷新次数
         * @param reNum
         * @param lastReplayTime
         * @param maxNum
         * @returns {any[]} [最终次数,最终时间]
         */
        calRefreshData(reNum,lastReplayTime,maxNum){
            //计算每日购买次数
            var curLastTime = commonUtils.getCurLastRefreshTime();
            if (!lastReplayTime||!curLastTime.equalsDay(new Date(lastReplayTime))) {
                reNum = maxNum;            //参数2：竞技场每天挑战次数
                lastReplayTime = curLastTime;
            }
            return [reNum,lastReplayTime];
        }
    }
    export var commonUtils:CommonUtils = new CommonUtils();
}