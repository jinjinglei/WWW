module g_fight {
	/**
	 *
	 * @author 
	 *
	 */
	export class GiftView extends MapEleView{
        gift:Gift;
        uiEffect:g_comp.UIEffect;

        public constructor() {
            super();
            var self = this;
            this.uiEffect = new g_comp.UIEffect();
            this.uiEffect.autoPlay = true;
            var uiAsset = new egret.gui.UIAsset();
            uiAsset.source = this.uiEffect;
            uiAsset.y = -80;
            this.addChild(uiAsset);
        }

        setGift(gift:Gift){
            var self = this;
            self.gift = gift;

            self.gift.addEventListener(GIFT_EVENT_POS_CHANGE, self.onGiftPosChange, self);

            self.onGiftPosChange();
            this.uiEffect.effectId = mo.getJSONWithFileNameAndID(gc.cfg_t_talisman, self.gift.giftId)[gc.t_talisman_sEffect];
        }

        public stop():void{
            var self = this;
        }
        public playAction():void{
            var self = this;
        }

        onGiftPosChange(){
            this.x = this.gift.x;
            this.y = this.gift.y;
        }

        public dtor(){
            var self = this;
            if (self.gift) {
                self.gift.removeEventListener(GIFT_EVENT_POS_CHANGE, self.onGiftPosChange, self);
            }
        }
	}
}
