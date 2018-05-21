module g_fight {
	/**
	 *
	 * @author 
	 *
	 */
	export class RoleInfo extends g_base.PropBase {
		public displayID:number;
		public name:string;
		public monsterInfo:any;
        public isPvPFight:boolean = false;
        public isWorldBossFight:boolean = false;

		public setMonsterInfo(monsterInfo):void{
			this.monsterInfo = monsterInfo;
			super.setMonsterInfo(monsterInfo);

			this.name = monsterInfo[gc.t_monster_name];
			this.displayID = monsterInfo[gc.t_monster_displayID];
		}

		public get seeDistance():number{
			return this.monsterInfo!=null?(this.monsterInfo[gc.t_monster_seeDistance]||0):0;
		}
    	
		public constructor() {
            super();
		}
	}
}
