
module g_guild{
    export  class GuildMemberManager  extends mo.gui.Dlg {
        label_name;
        label_level;
        label_attack;
        ico_head;
        label_position;
        label_upact;
        label_memberLvl;

        btn_get;
        btn_out;
        btn_change;
        btn_release;
        label_ennoble;
        btn_setE;
        btn_detail;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            // 注册事件监听
            self.registerClassByKey(gd.GuildCtrl, gd.GuildCtrl.ON_MANAGER_POSITION_CHANGED, self.dataChanged);
        }

        _childrenCreated(){
            super._childrenCreated();
            var self = this;
        }

        dataChanged() {
            super.dataChanged();
            var self = this;

            self.btn_get.visible = false;
            self.btn_out.visible = false;
            self.btn_change.visible = false;
            self.btn_release.visible = false;
            self.btn_setE.visible = false;
            self.btn_detail.visible = true;

            var memberData =  gd.guildCtrl.getMemberByUserId(self.data.userId);
            var personPosition = gd.guildPersonalCtrl.get(gc.dsConsts.GuildPersonalEntity.position);
            var userPostion =  memberData[gc.dsConsts.GuildMember.position];
            if(personPosition ==  gc.c_prop.guildPostKey.chairman)
            {
                if(userPostion !=  gc.c_prop.guildPostKey.chairman)
                {
                    if(userPostion == gc.c_prop.guildPostKey.viceChairman)
                    {
                        self.btn_release.visible = true;
                    }
                    else if(userPostion == gc.c_prop.guildPostKey.rankFile)
                    {
                        self.btn_get.visible = true;
                    }
                    self.btn_out.visible = true;
                    self.btn_change.visible = true;
                }

                self.btn_setE.visible = true;
                self.btn_detail.visible = false;
            } else if(personPosition == gc.c_prop.guildPostKey.viceChairman){//副会长
                if(userPostion == gc.c_prop.guildPostKey.rankFile) {
                    self.btn_out.visible = true;
                    self.btn_setE.visible = true;
                    self.btn_detail.visible = false;
                }else if(userPostion == gc.c_prop.guildPostKey.viceChairman) {
                    self.btn_setE.visible = true;
                    self.btn_detail.visible = false;
                }else{
                    self.btn_detail.visible = true;
                }
            }

            if(!self.btn_change.visible && !self.btn_out.visible && !self.btn_get.visible && !self.btn_release.visible){
                self.btn_setE.x = 157;
                self.btn_setE.y = 277;
            }

            var level = memberData[gc.dsConsts.GuildMember.lvl];
            var name = memberData[gc.dsConsts.GuildMember.nickName];
            var combat = memberData[gc.dsConsts.GuildMember.combat];
            var upact = memberData[gc.dsConsts.GuildMember.guildAct];
            var position = memberData[gc.dsConsts.GuildMember.position];
            var mLv = gd.guildCtrl.getRankFileLvl(upact);
            self.ico_head.setData({icoId:memberData[gc.dsConsts.GuildMember.iconId], vip:memberData[gc.dsConsts.GuildMember.vip]});

            self.label_level.text = "Lv." + level;
            self.label_name.text = name;
            self.label_position.text = gc.c_prop.guildPost[position];
            self.label_attack.text = combat + "";
            self.label_upact.text = upact + "";
            self.label_memberLvl.text = mLv+"级会员";
            var ennoble = memberData[gc.dsConsts.GuildMember.ennoble];
            self.label_ennoble.text = gc.c_prop.ennobleType[ennoble];
        }

        doMember(type:number){
            var self = this;
            var memberData =  gd.guildCtrl.getMemberByUserId(self.data.userId);
            var userid = memberData[gc.dsConsts.GuildMember.userId];
            var userName = memberData[gc.dsConsts.GuildMember.nickName];
            gd.guildCtrl.opMember(type,userid,userName,function(data:any){
                self.close();
            },self);
        }
        //提升职务
        _tap_btn_get(){
            var self = this;
            self.doMember(gc.c_prop.guildMemberOpKey.increase);
        }
        //踢出公会
        _tap_btn_out(){
            var self = this;
            self.doMember(gc.c_prop.guildMemberOpKey.kick);
        }
        //解除职务
        _tap_btn_release()
        {
            var self = this;
            self.doMember(gc.c_prop.guildMemberOpKey.release);
        }
        //转让会长
        _tap_btn_change(){
            var self = this;
            self.doMember(gc.c_prop.guildMemberOpKey.trans);
        }

        _tap_btn_setE(){
            var self = this;
            GuildSetEnnoble.create().setData(self.data).show().onClose(function(){
                self.dataChanged();
            });
        }

        _tap_btn_detail(){
            var self = this;
            GuildEnnobleDetail.create().setData(self.data).show();
        }
    }
}

