/**
 * Created by lihex on 16/1/6.
 */
/**
 * Created by Administrator on 2015/12/22.
 */
module g_worldboss{
    export class GuildBossGrand extends mo.gui.Dlg{

        label_caller:egret.gui.Label;
        label_guild:egret.gui.Label;
        label_maxDamage:egret.gui.Label;
        label_lastHit:egret.gui.Label;
        label_myDamage:egret.gui.Label;
        grp_guild:egret.gui.Group;

        img_bg;

        _initProp() {
            var self = this;
            super._initProp();
            self._layerOpt.shownWithAction = false;
        }

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
            self.img_bg.visible = false;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            var info = self.data.result;
            var KEY = gc.dsConsts.BossResultData;
            var isWin = info[KEY.isWin];
            self.img_bg.visible = true;
            self.img_bg.source = isWin? "panel_bossshenli" : "panel_bossshibai";
            self.grp_guild.visible = self.data.isGuild;

            //排名
            var label_no;
            var rank = info[KEY.rank5];
            for(var i = 0, li = 5; i < li; i++){
                label_no = self['label_no' + i];
                label_no.text = rank[i] || "无";
            }
            self.label_maxDamage.text = info[KEY.firstHurtName] || "无";
            self.label_lastHit.text = info[KEY.killUserName] || "无";
            self.label_caller.text = info[KEY.callUserName] || "无";
            self.label_guild.text = info[KEY.callGuildName] || "无";
            self.label_myDamage.text = info[KEY.myHurt] + "";
        }

        _tap_btn_back(){
            var self = this;
            self.close();
        }
    }
}