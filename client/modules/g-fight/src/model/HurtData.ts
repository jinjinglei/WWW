module g_fight {
	/**
	 *
	 * @author 
	 *
	 */
	export class HurtData {
        public attackRole:Role;
		public hurtRole:Role;
		public skill:Skill;
        public hp: number;
        public miss: Boolean;
        public crit: Boolean;
		public isFirstAim:boolean;
        public isHp2:boolean;//是否护身成功
        public mb:boolean;
        public disMb:boolean;
        public invincible:boolean;
    	
		public constructor() {
		}
	}
}
