/**
 * Created by Administrator on 2016/2/25.
 */
module g_coffers {
    export class CoffersScore extends mo.gui.Dlg {
        label_scoreServer;
        label_scorePerson;
        label_scoreServerToday;
        label_scorePersonToday;
        label_win;
        label_score;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.dataChanged();
        }

        dataChanged() {
            super.dataChanged();

            var self = this;
            self.label_scorePersonToday.text = gd.userCtrl.get(gc.dsConsts.UserEntity.todayCoffersPoints) + "";//个人今日积分
            self.label_scorePerson.text = gd.userCtrl.get(gc.dsConsts.UserEntity.coffersPoints) + "";//个人历史积分
            self.label_scoreServerToday.text = gd.coffersCtrl.get(gc.dsConsts.CoffersEntity.todayPoints) + "";//全服今日积分
            self.label_scoreServer.text = gd.coffersCtrl.get(gc.dsConsts.CoffersEntity.points) + "";//全服历史积分

            self.label_win.text = gd.coffersCtrl.getCoffersWin();
            self.label_score.text = gd.coffersCtrl.getNextWinPoints();
        }

        _tap_btn_help() {
            g_base.BaseShowTip.create().setData({id: 45}).show();
        }
    }
}