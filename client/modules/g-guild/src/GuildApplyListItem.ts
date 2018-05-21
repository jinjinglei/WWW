/**
 * Created by john on 15/12/9.
 */
module g_guild {

    export class GuildApplyListItem extends mo.gui.ItemRenderer {
        label_lvl;
        label_name;
        label_combat;
        btn_agree;
        btn_reject;
        btn_release;
        btn_get;
        ico_background;

        _childrenCreated() {
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;
            if (self.data.label) {
                return;
            }
            self.label_lvl.text = "" + self.data[gc.dsConsts.UserEntity.lvl];
            self.label_name.text = self.data[gc.dsConsts.UserEntity.nickName];
            self.label_combat.text = utils.formatByWan(self.data[gc.dsConsts.UserEntity.combat]);
            self.btn_reject.resouce = "btn_gonghui_1";
        }

        _tap_btn_agree() {
            var self = this;
            self.doAction(true);
        }
        doAction(agree:boolean){
            var self = this;

            var personData = self.data;

            gd.guildCtrl.appliedMembersSet(personData[gc.dsConsts.UserEntity.id],agree,function(){
                self.delegate.reloadData();
            },self);
        }
        _tap_btn_reject(){
            var self = this;

            self.doAction(false);
        }
    }
}