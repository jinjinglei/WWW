/**
 * Created by SmallAiTT on 2015/7/11.
 */

module g_home {

	/**
	 *
	 * @author 
	 *
	 */
	export class HomeBg extends mo.gui.Layer{
		btn_equip_copy:egret.gui.Rect;
		btn_pvboss:egret.gui.Rect;
		btn_state_copy:egret.gui.Rect;
		btn_gh:egret.gui.Rect;

		btn_arena:egret.gui.Rect;
		btn_king:egret.gui.Rect;
		btn_guild:egret.gui.Rect;
		btn_copy:egret.gui.Rect;
		btn_coffer:egret.gui.Rect;
		btn_gang:egret.gui.Rect;
		btn_pagoda:egret.gui.Rect;

		img_redArena;
		img_redCopy;
		img_redGuild;
		img_redKing;
		img_arena;
		img_copy;
		img_guild;
		img_King;
		img_gang;
		img_coffer;
		img_Pagoda;
		moduleParam:IModuleParam.Home;

		_initProp(){
			super._initProp();
			var self = this;
			self.registerClassByKey(gd.UserCtrl, gc.dsConsts.UserEntity.redPointData.toString(), self.checkRedPoint);

		}

		_childrenCreated(){
			super._childrenCreated();
			var self = this;
			self.img_redGuild.visible = false;
			var subModuleId = self.moduleParam.subModuleId;
			switch (subModuleId){
				case g_consts.HS_SUBMID_EQUIP_COPY:
					self._tap_btn_equip_copy();
					break;
				case g_consts.HS_SUBMID_BOSS_COPY:
					self._tap_btn_pvboss();
					break;
				case g_consts.HS_SUBMID_STATE_COPY:
					self._tap_btn_state_copy();
					break;
				case g_consts.HS_SUBMID_VIP_COPY:
					mo.moduleMgr.runModule(g_consts.moduleId.vipCopy, self.moduleParam);
					break;
                case g_consts.HS_SUBMID_ARENA_SHOP:
					mo.moduleMgr.runModule(g_consts.moduleId.arenaShop);
                    break;
				case g_consts.HS_SUBMID_ARENA:
					self._tap_btn_arena();
					break;
				case g_consts.HS_SUBMID_GUILD:
					gd.guildCtrl.getInfo(function(data){
						var isGuild = data[0];
						if(!isGuild){
							mo.moduleMgr.runModule(g_consts.moduleId.guildListLayer);
						}else{
							mo.moduleMgr.runModule(g_consts.moduleId.guildMineLayer,{bossId:self.moduleParam["bossId"]});
						}
					},self);
					break;
				case g_consts.HS_SUBMID_KING:
					self._tap_btn_king();
					break;
                case g_consts.HS_SUBMID_COFFERS_SERVER:
                    mo.moduleMgr.runModule(g_consts.moduleId.coffersServer, self.moduleParam);
                    break;
				case g_consts.HS_SUBMID_GUILD_COPY_BOSS:
					mo.moduleMgr.runModule(g_consts.moduleId.guildCopyBoss, {section: self.moduleParam["section"]});
					break;
				case g_consts.HS_SUBMID_TOWER:
					self._tap_btn_pagoda();
					break;
			}
		}
		onTouch(event){
			var self  = this;
			if(event.type == "touchBegin"){
				if (event.target == self.btn_arena) {
					self.img_arena.visible = true;
				}
				else if (event.target == self.btn_guild) {
					self.img_guild.visible = true;
				}
				else if (event.target == self.btn_king) {
					self.img_King.visible = true;
				}
				else if (event.target == self.btn_copy) {
					self.img_copy.visible = true;
				}
				else if (event.target == self.btn_coffer) {
					self.img_coffer.visible = true
				}
				else if (event.target == self.btn_gang) {
					self.img_gang.visible = true;
				}
				else if (event.target == self.btn_pagoda) {
					self.img_Pagoda.visible = true;
				}
			}
			else if(event.type == "touchMove"){
				if (event.target == self.btn_arena) {
					self.img_arena.visible = false;
				}
				else if (event.target == self.btn_guild) {
					self.img_guild.visible = false;
				}
				else if (event.target == self.btn_king) {
					self.img_King.visible = false;
				}
				else if (event.target == self.btn_copy) {
					self.img_copy.visible = false;
				}
				else if (event.target == self.btn_coffer) {
					self.img_coffer.visible = false;
				}
				else if (event.target == self.btn_gang) {
					self.img_gang.visible = false;
				}
				else if (event.target == self.btn_pagoda) {
					self.img_Pagoda.visible = false;
				}
			}
			else if(event.type == "touchEnd"){
				if (event.target == self.btn_arena) {
					self.img_arena.visible = false;
				}
				else if (event.target == self.btn_guild) {
					self.img_guild.visible = false;
				}
				else if (event.target == self.btn_king) {
					self.img_King.visible = false;
				}
				else if (event.target == self.btn_copy) {
					self.img_copy.visible = false;
				}
				else if (event.target == self.btn_coffer) {
					self.img_coffer.visible = false;
				}
				else if (event.target == self.btn_gang) {
					self.img_gang.visible = false;
				}
				else if (event.target == self.btn_pagoda) {
					self.img_Pagoda.visible = false;
				}
			}

		}
		onExit(){
			var self = this;
			self.btn_arena.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);
			self.btn_king.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);
			self.btn_guild.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);
			self.btn_copy.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);
			self.btn_coffer.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);
			self.btn_gang.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);
			self.btn_pagoda.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);


			self.btn_arena.removeEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);
			self.btn_king.removeEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);
			self.btn_guild.removeEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);
			self.btn_copy.removeEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);
			self.btn_coffer.removeEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);
			self.btn_gang.removeEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);
			self.btn_pagoda.removeEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);

			self.btn_arena.removeEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
			self.btn_king.removeEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
			self.btn_guild.removeEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
			self.btn_copy.removeEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
			self.btn_coffer.removeEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
			self.btn_gang.removeEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
			self.btn_pagoda.removeEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
		}

		onEnter(){
			super.onEnter();
			var self = this;
			self.checkRedPoint();
		}

		checkRedPoint(){
			var self = this;
			self.img_redArena.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.arena1);
			self.img_redCopy.visible = gd.pointCtrl.isShow(gc.c_prop.pointRedKey.copy_boss);
			self.img_redKing.visible = false;
			//点击监听
			self.btn_arena.addEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);
			self.btn_king.addEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);
			self.btn_guild.addEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);
			self.btn_copy.addEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);
			self.btn_coffer.addEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);
			self.btn_gang.addEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);
			self.btn_pagoda.addEventListener(egret.TouchEvent.TOUCH_BEGIN,self.onTouch,self);


			self.btn_arena.addEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);
			self.btn_king.addEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);
			self.btn_guild.addEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);
			self.btn_copy.addEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);
			self.btn_coffer.addEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);
			self.btn_gang.addEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);
			self.btn_pagoda.addEventListener(egret.TouchEvent.TOUCH_MOVE,self.onTouch,self);

			self.btn_arena.addEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
			self.btn_king.addEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
			self.btn_guild.addEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
			self.btn_copy.addEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
			self.btn_coffer.addEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
			self.btn_gang.addEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
			self.btn_pagoda.addEventListener(egret.TouchEvent.TOUCH_END,self.onTouch,self);
		}

		_tap_btn_equip_copy(){
			var self = this;
			//ws.recordEvent("进入【装备副本】模块", 1);
			mo.moduleMgr.runModule(g_consts.moduleId.equipCopy);
		}

		_tap_btn_pvboss(){
			var self = this;
			//ws.recordEvent("进入【炼狱BOSS】模块", 1);
			mo.moduleMgr.runModule(g_consts.moduleId.bossCopy);
		}

		_tap_btn_state_copy(){
			var self = this;
			//ws.recordEvent("进入【元神副本】模块", 1);
			mo.moduleMgr.runModule(g_consts.moduleId.stateCopy);
		}

		_tap_btn_arena(){
			var self = this;
			//ws.recordEvent("进入【竞技场】模块", 1);
            mo.moduleMgr.runModule(g_consts.moduleId.arena);
		}
		
		_tap_btn_guild() {
            var self = this;
            gd.guildCtrl.getInfo(function(data){
                var isGuild = data[0];
                if(!isGuild){
                    mo.moduleMgr.runModule(g_consts.moduleId.guildListLayer);
                }else{
                    mo.moduleMgr.runModule(g_consts.moduleId.guildMineLayer);
                }
            },self);
		}

		_tap_btn_king(){
			var self = this;
			mo.moduleMgr.runModule(g_consts.moduleId.king);
		}

		_tap_btn_copy(){
			var self = this;
			mo.moduleMgr.runModule(g_consts.moduleId.copyEntry);
		}

		_tap_btn_gang(){ //仗剑天涯
			var self = this;
            mo.moduleMgr.runModule(g_consts.moduleId.coffersServer);
		}

		_tap_btn_coffer(){ //国库
			var self = this;
			mo.moduleMgr.runModule(g_consts.moduleId.coffers);
		}
		
		_tap_btn_pagoda(){ //爬塔
			var self = this;
			mo.moduleMgr.runModule(g_consts.moduleId.tower);
		}
		_tap_btn_villian(){ //恶人谷
			var self = this;
			mo.moduleMgr.runModule(g_consts.moduleId.villian);
		}

        _tap_btn_back(){
            mo.moduleMgr.runModule(g_consts.moduleId.fight);
        }


		//private createFightEffect(key):void{
		//	if(!this.stage) return;
		//	var fightEffect:g_base.UIEffect = new g_base.UIEffect();
		//	fightEffect.startLoadByKey(20);
		//	fightEffect.x = 240;
		//	fightEffect.y = 400;
		//	this.addElement(fightEffect);
		//	fightEffect.addEventListener(egret.Event.COMPLETE, function(){
		//		console.log("---->succ");
		//	}, fightEffect);
		//	fightEffect.play(-1);
		//}

	}
}
