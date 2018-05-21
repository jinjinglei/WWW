/**
 * Created by lihex on 9/19/15.
 */
module g_role {

    /**
     *
     * @author
     *
     */
    export class RoleDetail extends mo.gui.Layer{

        label_prop:mo.gui.Label;

        //@override
        _initProp(){
            var self = this;
            super._initProp();
            roleChgEmitter.on(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        }

        _heroChanged(hec){
            var self = this;
            self.setData({hec: hec});
        }

        dtor(){
            super.dtor();
            var self = this;
            roleChgEmitter.un(g_base.BaseTopRole.ON_HERO_CHANGED, self._heroChanged, self);
        }

        dataChanged(){
            super.dataChanged();
            var self = this;
            var hec = self.data.hec;
            var tempStr =
                "ID: %s[/br]"+
                "生    命:    %s[/br]"+
                "攻    击:    %s[/br]"+
                "物    防:    %s[/br]"+
                "法    防:    %s[/br]"+
                "命    中:    %s[/br]"+
                "闪    避:    %s[/br]"+
                "暴    击:    %s[/br]"+
                "抗    暴:    %s[/br]"+
                "伤害加深:    %s%[/br]"+
                "伤害减免:    %s%[/br]"+
                "麻    痹:    %s%[/br]"+
                "抗    麻:    %s%[/br]";

            var str = mo.STR.format(tempStr,
            hec.id,
            hec.maxHpFight,
            hec.attackFight,
            hec.defenceFight,
            hec.magicDefenceFight,
            hec.hitFight,
            hec.dodgeFight,
            hec.criticalFight,
            hec.disCriticalFight,
            Math.round(hec.damageIncreaseFight*100),
            Math.round(hec.damageDecreaseFight*100),
            Math.round(hec.benumbProFight*100),
            Math.round(hec.disBenumbProFight*100)
            );
            self.label_prop.text = str;
        }

    }
}